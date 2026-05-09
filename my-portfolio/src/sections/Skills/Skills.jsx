// src/Skills.jsx

import React from "react";
import {
  FaCode,
  FaJava,
  FaPython,
  FaJs,
  FaReact,
  FaNode,
  FaBootstrap,
  FaTerminal
} from "react-icons/fa";
import {
  SiCplusplus,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiGraphql,
  SiAmazon,
  SiGithubactions,
  SiJest,
  SiEslint,
  SiPrettier,
  SiPostman,
  SiJira,
  SiConfluence,
  SiDatadog,
  SiTailwindcss,
  SiExpress,
  SiP5Dotjs,
  SiNextdotjs,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiDjango,
  SiNestjs,
  SiSumologic
} from "react-icons/si";
import { IoLanguage } from "react-icons/io5";

import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <section id="skills" className={styles.sectionWrapper}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Skills</h2>
        <p className={styles.subText}>
          Technologies, languages, and frameworks I’ve worked with professionally and academically.
        </p>

        <div className={styles.toolbar}>
          <button className={styles.toolbarBtn}>Languages</button>
          <button className={styles.toolbarBtn}>Frameworks</button>
          <button className={styles.toolbarBtn}>Spoken Languages</button>
        </div>

        <div className={styles.skillsWrapper}>
          {/* Programming Languages */}
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <FaCode className={styles.icon} />
            </div>
            <h3 className={styles.cardTitle}>Programming Languages</h3>
            <ul className={styles.list}>
              {[
                { icon: <SiHtml5 color="#e34c26" />, label: "HTML", width: "95%" },
                { icon: <SiCss3 color="#264de4" />, label: "CSS", width: "90%" },
                { icon: <FaJs color="#f0db4f" />, label: "JavaScript", width: "85%" },
                { icon: <SiTypescript color="#3178c6" />, label: "TypeScript", width: "85%" },
                { icon: <FaPython color="#3776ab" />, label: "Python", width: "88%" },
                { icon: <FaJava color="#007396" />, label: "Java", width: "90%" },
                { icon: <SiCplusplus color="#00599c" />, label: "C++", width: "75%" },
                { icon: <FaTerminal color="#00ffff" />, label: "Bash", width: "75%" },
                { icon: <SiPostgresql color="#336791" />, label: "SQL (PostgreSQL)", width: "78%" }
              ].map(({ icon, label, width }) => (
                <li className={styles.skillItem} key={label}>
                  <div className={styles.skillLabel}>
                    {icon} {label}
                  </div>
                  <div className={styles.skillBarWrapper}>
                    <div className={styles.skillBar} style={{ width }} />
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Frameworks & Libraries */}
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <FaReact className={styles.icon} />
            </div>
            <h3 className={styles.cardTitle}>Frameworks & Libraries</h3>
            <ul className={styles.list}>
              {[
                { icon: <FaReact color="#61DBFB" />, label: "React", width: "90%" },
                { icon: <SiNextdotjs />, label: "Next.js", width: "80%" },
                { icon: <FaNode color="#3c873a" />, label: "Node.js", width: "85%" },
                { icon: <SiExpress />, label: "Express.js", width: "78%" },
                { icon: <SiNestjs color="#ea2845" />, label: "NestJS", width: "80%" },
                { icon: <SiDjango color="#092e20" />, label: "Django", width: "78%" },
                { icon: <SiTailwindcss color="#06B6D4" />, label: "Tailwind CSS", width: "85%" },
                { icon: <FaBootstrap color="#7952B3" />, label: "Bootstrap", width: "75%" },
                { icon: <SiP5Dotjs color="#ED225D" />, label: "p5.js", width: "68%" },
                { icon: <FaTerminal color="#00ffff" />, label: "Playwright", width: "82%" },
                { icon: <SiGraphql color="#e10098" />, label: "GraphQL", width: "72%" }
              ].map(({ icon, label, width }) => (
                <li className={styles.skillItem} key={label}>
                  <div className={styles.skillLabel}>
                    {icon} {label}
                  </div>
                  <div className={styles.skillBarWrapper}>
                    <div className={styles.skillBar} style={{ width }} />
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Spoken Languages */}
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <IoLanguage className={styles.icon} />
            </div>
            <h3 className={styles.cardTitle}>Spoken Languages</h3>
            <ul className={styles.list}>
              {[
                { icon: "🇺🇸", label: "English (Proficient)", width: "100%" },
                { icon: "🇯🇵", label: "Japanese (Working knowledge)", width: "65%" },
                { icon: "🇵🇰", label: "Urdu (Proficient)", width: "90%" },
                { icon: "🇮🇳", label: "Hindi (Proficient)", width: "85%" },
                { icon: "🏔️", label: "Kashmiri (Native)", width: "100%" }
              ].map(({ icon, label, width }) => (
                <li className={styles.skillItem} key={label}>
                  <div className={styles.skillLabel}>
                    {icon} {label}
                  </div>
                  <div className={styles.skillBarWrapper}>
                    <div className={styles.skillBar} style={{ width }} />
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Tooling & Platforms */}
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <FaTerminal className={styles.icon} />
            </div>
            <h3 className={styles.cardTitle}>Tooling & Platforms</h3>
            <ul className={styles.list}>
              {[
                { icon: <SiAmazon />, label: "AWS (Lambda)", width: "75%" },
                { icon: <SiGithubactions />, label: "GitHub Actions (CI/CD)", width: "80%" },
                { icon: <SiJest />, label: "Jest", width: "75%" },
                { icon: <SiEslint />, label: "ESLint", width: "78%" },
                { icon: <SiPrettier />, label: "Prettier", width: "78%" },
                { icon: <SiMongodb color="#47A248" />, label: "MongoDB", width: "70%" },
                { icon: <SiRedis color="#DC382D" />, label: "Redis", width: "68%" },
                { icon: <SiJira color="#0052CC" />, label: "Jira", width: "75%" },
                { icon: <SiConfluence color="#172B4D" />, label: "Confluence", width: "72%" },
                { icon: <SiDatadog color="#632CA6" />, label: "Datadog", width: "65%" },
                { icon: <SiSumologic color="#00b1ff" />, label: "Sumo Logic", width: "65%" },
                { icon: <SiPostman color="#FF6C37" />, label: "Postman", width: "80%" }
              ].map(({ icon, label, width }) => (
                <li className={styles.skillItem} key={label}>
                  <div className={styles.skillLabel}>
                    {icon} {label}
                  </div>
                  <div className={styles.skillBarWrapper}>
                    <div className={styles.skillBar} style={{ width }} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
