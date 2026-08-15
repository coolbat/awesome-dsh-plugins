import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <p className="eyebrow">404 / RECORD NOT FOUND</p>
      <h1>This evidence record does not exist.</h1>
      <p>该证据记录不存在，或已移动到新的固定源码记录。</p>
      <Link className="button button-primary" href="/zh/plugins/">
        返回插件目录
      </Link>
    </main>
  );
}
