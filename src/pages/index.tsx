import type { ReactNode } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`uDesktopMascot`}
      description="uDesktopMascotは、デスクトップ上に自分の好きな3Dモデルを配置することができるサービスです。"
    >
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
