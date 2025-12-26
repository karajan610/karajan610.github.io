import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className={clsx("hero__title", styles.heroTitle)}>
          {siteConfig.title}
        </Heading>
        <p className={clsx("hero__subtitle", styles.heroSubtitle)}>
          {siteConfig.tagline}
        </p>
        <div className={styles.buttons}>
          <Link
            className={clsx("button button--secondary button--lg", styles.ctaButton)}
            to="/blog"
          >
            Blog 보기
          </Link>
        </div>
      </div>
    </header>
  );
}

function AboutSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.2,
  });

  return (
    <section className={styles.aboutSection}>
      <div className="container">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div
              ref={ref}
              className={clsx(styles.aboutCard, {
                [styles.visible]: isVisible,
              })}
            >
              <p className={styles.aboutText} style={{ animationDelay: "0.1s" }}>
                프론트엔드 개발하면서 겪은 경험과 생각을 정리합니다.
              </p>
              <p className={styles.aboutText} style={{ animationDelay: "0.2s" }}>
                <strong>읽기 쉽고 확장 가능한 구조</strong>를 목표로,
                기술 부채를 줄이고 예측 가능한 코드를 작성하려고 노력하고 있어요.
              </p>
              <p className={styles.aboutText} style={{ animationDelay: "0.3s" }}>
                무조건 최신 기술보다는 기존 레거시와 내 코드가 잘 맞물려 동작하는 것도 중요하게 생각합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): React.JSX.Element {
  return (
    <Layout title="Home" description="프론트엔드 개발 경험과 삽질 기록">
      <HomepageHeader />
      <main className={styles.main}>
        <AboutSection />
      </main>
    </Layout>
  );
}
