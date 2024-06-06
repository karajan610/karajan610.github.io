import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/blog">
            Blog
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main className="container">
        <div className={clsx("col col--12 text--center")}>
          <div className="text--left">
            프론트엔드 개발을 하면서 겪었던 문제와 고민을 정리하고, 그 해결
            방법을 공유하려고 합니다. 문제를 인식하고 그 과정을 함께 공유하며
            성장하는 것을 목표로 합니다. 개발을 해오면서 추구하는 방향은 기술
            부채를 줄이고, 코드의 반복과 대칭성을 유지하는 것입니다. 대칭과
            반복이 있다면 예측이 가능하고, 예측이 가능하다면 문제를 빠르게
            해결할 수 있습니다. 또한 이러한 과정 속에서 혼자가 아닌 함께
            성장하는 것을 추구합니다.
            <br />
            <br />
            이러한 방향으로 개발을 하면서 겪었던 문제와 해결 방법을 공유하고,
            함께 성장하는 것을 목표로 합니다. 다양한 사람들의 의견을 존중하며,
            특히 다양성이 중요한 이유는 문제를 해결하는 데 있어서 다양한 시각이
            필요하기 때문이라고 생각합니다. 사고가 같다면 실행이나 판단이 빠를
            수 있지만, 다양성을 잃어버리면 문제 해결에서 변화에 취약해질 수
            있다고 생각합니다.
            <br />
            <br />
            이렇게 서로의 다른 시각에서 경험을 공유하고 그 과정에서 각자가 가진
            선한 영향력을 행사하며, 좋은 제품이나 서비스를 만들어가며 함께
            개발자로서 성장하는 과정을 나누고 싶습니다.
          </div>
        </div>
      </main>
    </Layout>
  );
}
