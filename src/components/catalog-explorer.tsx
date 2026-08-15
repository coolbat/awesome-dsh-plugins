"use client";

import { useEffect, useMemo, useState } from "react";

import type { CatalogPlugin, Locale } from "@/lib/catalog";
import { getMessages } from "@/lib/i18n";
import { compatibilityLabel } from "@/lib/labels";

import { PluginCard } from "./plugin-card";

type SortMode = "catalog" | "name" | "category";

export function CatalogExplorer({
  plugins,
  categories,
  locale,
}: {
  plugins: readonly CatalogPlugin[];
  categories: readonly string[];
  locale: Locale;
}) {
  const t = getMessages(locale).catalog;
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [compatibility, setCompatibility] = useState("");
  const [signal, setSignal] = useState("");
  const [sort, setSort] = useState<SortMode>("catalog");

  const signals = useMemo(
    () => [...new Set(plugins.flatMap((plugin) => plugin.signals))].sort(),
    [plugins],
  );
  const compatibilityOptions = useMemo(
    () => [...new Set(plugins.map((plugin) => plugin.compatibility))],
    [plugins],
  );

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setQuery(params.get("q") ?? "");
    setCategory(params.get("category") ?? "");
    setCompatibility(params.get("compatibility") ?? "");
    setSignal(params.get("signal") ?? "");
    const urlSort = params.get("sort");
    if (urlSort === "name" || urlSort === "category") setSort(urlSort);
  }, []);

  const visiblePlugins = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase(locale);
    const result = plugins.filter((plugin) => {
      const searchable = [
        plugin.name,
        plugin.repository,
        plugin.package ?? "",
        plugin.category,
        plugin.summaryEn,
        plugin.summaryZh,
        ...plugin.signals,
      ]
        .join(" ")
        .toLocaleLowerCase(locale);

      return (
        (!normalizedQuery || searchable.includes(normalizedQuery)) &&
        (!category || plugin.category === category) &&
        (!compatibility || plugin.compatibility === compatibility) &&
        (!signal || plugin.signals.includes(signal))
      );
    });

    if (sort === "name") {
      return result.toSorted((a, b) => a.name.localeCompare(b.name));
    }
    if (sort === "category") {
      return result.toSorted(
        (a, b) =>
          a.category.localeCompare(b.category) || a.name.localeCompare(b.name),
      );
    }
    return result;
  }, [plugins, query, category, compatibility, signal, sort, locale]);

  useEffect(() => {
    const params = new URLSearchParams();
    if (query) params.set("q", query);
    if (category) params.set("category", category);
    if (compatibility) params.set("compatibility", compatibility);
    if (signal) params.set("signal", signal);
    if (sort !== "catalog") params.set("sort", sort);
    const nextUrl = params.size
      ? `?${params.toString()}`
      : window.location.pathname;
    window.history.replaceState(null, "", nextUrl);
  }, [query, category, compatibility, signal, sort]);

  function resetFilters() {
    setQuery("");
    setCategory("");
    setCompatibility("");
    setSignal("");
    setSort("catalog");
  }

  return (
    <section className="catalog-workspace" aria-labelledby="catalog-results">
      <div className="catalog-toolbar">
        <div className="search-field">
          <label htmlFor="plugin-search">{t.search}</label>
          <input
            id="plugin-search"
            maxLength={160}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={t.placeholder}
            type="search"
            value={query}
          />
        </div>
        <div className="filter-grid">
          <FilterSelect
            id="category-filter"
            label={t.category}
            onChange={setCategory}
            options={categories.map((value) => ({ label: value, value }))}
            value={category}
            allLabel={t.all}
          />
          <FilterSelect
            id="compatibility-filter"
            label={t.compatibility}
            onChange={setCompatibility}
            options={compatibilityOptions.map((value) => ({
              label: compatibilityLabel(value, locale),
              value,
            }))}
            value={compatibility}
            allLabel={t.all}
          />
          <FilterSelect
            id="signal-filter"
            label={t.signal}
            onChange={setSignal}
            options={signals.map((value) => ({ label: value, value }))}
            value={signal}
            allLabel={t.all}
          />
          <FilterSelect
            id="sort-filter"
            label={t.sort}
            onChange={(value) => setSort(value as SortMode)}
            options={[
              { label: t.newest, value: "catalog" },
              { label: t.name, value: "name" },
              { label: t.categorySort, value: "category" },
            ]}
            value={sort}
            allLabel={t.all}
            hideAll
          />
        </div>
      </div>

      <div className="result-heading-row">
        <h2 id="catalog-results">
          {visiblePlugins.length} {t.results}
        </h2>
        <button className="reset-button" onClick={resetFilters} type="button">
          {t.reset}
        </button>
      </div>

      {visiblePlugins.length ? (
        <div className="plugin-grid">
          {visiblePlugins.map((plugin) => (
            <PluginCard key={plugin.id} locale={locale} plugin={plugin} />
          ))}
        </div>
      ) : (
        <div className="empty-state" role="status">
          <p className="empty-title">{t.noResults}</p>
          <p>{t.noResultsHint}</p>
          <button className="button button-secondary" onClick={resetFilters}>
            {t.reset}
          </button>
        </div>
      )}
    </section>
  );
}

function FilterSelect({
  id,
  label,
  value,
  allLabel,
  options,
  onChange,
  hideAll = false,
}: {
  id: string;
  label: string;
  value: string;
  allLabel: string;
  options: Array<{ label: string; value: string }>;
  onChange: (value: string) => void;
  hideAll?: boolean;
}) {
  return (
    <div className="filter-field">
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        onChange={(event) => onChange(event.target.value)}
        value={value}
      >
        {hideAll ? null : <option value="">{allLabel}</option>}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
