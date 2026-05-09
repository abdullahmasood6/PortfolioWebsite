// src/Skills.jsx

import React from "react";
import {
  FaCode,
  FaJava,
  FaPython,
  FaJs,
  FaReact,
  FaNode,
  FaTerminal,
  FaDatabase,
  FaAws
} from "react-icons/fa";
import {
  SiC,
  SiCplusplus,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiGithub,
  SiGithubactions,
  SiJest,
  SiEslint,
  SiPrettier,
  SiPostman,
  SiJira,
  SiConfluence,
  SiDatadog,
  SiExpress,
  SiNextdotjs,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiDjango,
  SiNestjs,
  SiSumologic,
  SiAmazonec2,
  SiAmazonecs,
  SiAmazons3,
  SiAmazondynamodb,
  SiAmazoncloudwatch,
  SiAmazoniam,
  SiAmazonapigateway,
  SiAmazonsqs,
  SiAmazonrds,
  SiAwslambda
} from "react-icons/si";
import { BsBrowserChrome } from "react-icons/bs";
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
          <button className={styles.toolbarBtn}>Tools</button>
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
                { icon: <FaJava color="#007396" />, label: "Java", width: "90%" },
                { icon: <FaDatabase color="#00c8c8" />, label: "SQL", width: "82%" },
                { icon: <FaJs color="#f0db4f" />, label: "JavaScript", width: "86%" },
                { icon: <SiTypescript color="#3178c6" />, label: "TypeScript", width: "86%" },
                { icon: <SiNestjs color="#ea2845" />, label: "NestJS", width: "80%" },
                { icon: <BsBrowserChrome color="#2EAD33" />, label: "Playwright", width: "82%" },
                { icon: <FaPython color="#3776ab" />, label: "Python", width: "86%" },
                { icon: <FaNode color="#3c873a" />, label: "Node.js", width: "82%" },
                { icon: <SiC color="#A8B9CC" />, label: "C", width: "70%" },
                { icon: <SiCplusplus color="#00599c" />, label: "C++", width: "75%" }
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
                { icon: <SiNestjs color="#ea2845" />, label: "NestJS", width: "82%" },
                { icon: <SiDjango color="#092e20" />, label: "Django", width: "78%" },
                { icon: <BsBrowserChrome color="#2EAD33" />, label: "Playwright", width: "84%" }
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

          {/* Tools */}
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <FaTerminal className={styles.icon} />
            </div>
            <h3 className={styles.cardTitle}>Tools</h3>
            <ul className={styles.list}>
              {[
                { icon: <FaCode color="#00c8c8" />, label: "Cursor", width: "86%" },
                { icon: <SiGithub color="#ffffff" />, label: "GitHub", width: "85%" },
                { icon: <SiGithubactions color="#2088FF" />, label: "GitHub Actions", width: "80%" },
                { icon: <SiDatadog color="#632CA6" />, label: "Datadog", width: "72%" },
                { icon: <SiJira color="#0052CC" />, label: "Jira", width: "78%" },
                { icon: <SiConfluence color="#172B4D" />, label: "Confluence", width: "76%" },
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

          {/* AWS */}
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <FaAws className={styles.icon} />
            </div>
            <h3 className={styles.cardTitle}>AWS</h3>
            <ul className={styles.list}>
              {[
                { icon: <SiAmazonec2 color="#FF9900" />, label: "EC2", width: "85%" },
                { icon: <SiAmazonecs color="#FF9900" />, label: "ECS", width: "75%" },
                { icon: <SiAwslambda color="#FF9900" />, label: "Lambda", width: "85%" },
                { icon: <SiAmazons3 color="#569A31" />, label: "S3", width: "85%" },
                { icon: <SiAmazondynamodb color="#4053D6" />, label: "DynamoDB", width: "78%" },
                { icon: <SiAmazonrds color="#4053D6" />, label: "RDS", width: "72%" },
                { icon: <SiAmazoncloudwatch color="#FF4F8B" />, label: "CloudWatch", width: "80%" },
                { icon: <SiAmazoniam color="#DD344C" />, label: "IAM", width: "75%" },
                { icon: <SiAmazonapigateway color="#8C4FFF" />, label: "API Gateway", width: "78%" },
                { icon: <SiAmazonsqs color="#FF4F8B" />, label: "SQS", width: "70%" },
                { icon: <FaAws color="#FF9900" />, label: "VPC", width: "72%" }
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
                { icon: "", label: "English", width: "100%" },
                { icon: "", label: "Japanese", width: "65%" },
                { icon: "", label: "Urdu", width: "90%" },
                { icon: "", label: "Hindi", width: "85%" },
                { icon: "", label: "Kashmiri", width: "100%" }
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
