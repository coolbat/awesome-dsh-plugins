import Link from "next/link";

export default function LanguageGateway() {
  return (
    <main className="language-gateway">
      <div className="gateway-mark" aria-hidden="true">
        DSH
      </div>
      <p className="eyebrow">DSH PLUGIN INDEX</p>
      <h1>Choose your language</h1>
      <p>选择语言以浏览固定源码的 DeepSeek Harness 插件目录。</p>
      <div className="gateway-actions">
        <Link className="button button-primary" href="/zh/">
          中文
        </Link>
        <Link className="button button-secondary" href="/en/">
          English
        </Link>
      </div>
    </main>
  );
}
