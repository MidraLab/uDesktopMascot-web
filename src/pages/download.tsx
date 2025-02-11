import React from "react";
import Layout from "@theme/Layout";

export default function DownloadPage() {
  return (
    <Layout title="ダウンロード">
      <main style={{ textAlign: "center", padding: "2rem" }}>
        <h1>ダウンロード</h1>
        <p>ここから uDesktopMascot をダウンロードできます。</p>
        <a href="/path/to/download" className="button button--primary">
          ダウンロードする
        </a>
      </main>
    </Layout>
  );
}
