import React from "react";
import {
  FaCode, FaJava, FaPython, FaJs, FaReact,
  FaNode, FaBootstrap, FaTerminal
} from "react-icons/fa";
import {
  SiCplusplus, SiSqlite, SiTailwindcss,
  SiExpress, SiP5Dotjs, SiNextdotjs
} from "react-icons/si";

import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <section id="skills" className={styles.sectionWrapper}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Skills</h2>
        <p className={styles.subText}>
          Technologies and tools I’ve worked with across development, scripting, and design.
        </p>

        <div className={styles.skillsWrapper}>
          {/* Programming Languages */}
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <FaCode className={styles.icon} />
            </div>
            <h3 className={styles.cardTitle}>Programming Languages</h3>
            <ul className={styles.list}>
              <li className={styles.skillItem}>
                <div className={styles.skillLabel}><FaJava /> Java</div>
                <div className={styles.skillBarWrapper}><div className={styles.skillBar} style={{ width: "90%" }}></div></div>
              </li>
              <li className={styles.skillItem}>
                <div className={styles.skillLabel}><FaPython /> Python</div>
                <div className={styles.skillBarWrapper}><div className={styles.skillBar} style={{ width: "85%" }}></div></div>
              </li>
              <li className={styles.skillItem}>
                <div className={styles.skillLabel}><SiCplusplus /> C++</div>
                <div className={styles.skillBarWrapper}><div className={styles.skillBar} style={{ width: "70%" }}></div></div>
              </li>
              <li className={styles.skillItem}>
                <div className={styles.skillLabel}><FaJs /> JavaScript</div>
                <div className={styles.skillBarWrapper}><div className={styles.skillBar} style={{ width: "80%" }}></div></div>
              </li>
              <li className={styles.skillItem}>
                <div className={styles.skillLabel}><SiSqlite /> SQL</div>
                <div className={styles.skillBarWrapper}><div className={styles.skillBar} style={{ width: "75%" }}></div></div>
              </li>
              <li className={styles.skillItem}>
                <div className={styles.skillLabel}><FaTerminal /> Bash</div>
                <div className={styles.skillBarWrapper}><div className={styles.skillBar} style={{ width: "60%" }}></div></div>
              </li>
            </ul>
          </div>

          {/* Frameworks & Libraries */}
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <FaReact className={styles.icon} />
            </div>
            <h3 className={styles.cardTitle}>Frameworks & Libraries</h3>
            <ul className={styles.list}>
              <li className={styles.skillItem}>
                <div className={styles.skillLabel}><FaReact /> React</div>
                <div className={styles.skillBarWrapper}><div className={styles.skillBar} style={{ width: "90%" }}></div></div>
              </li>
              <li className={styles.skillItem}>
                <div className={styles.skillLabel}><SiNextdotjs /> Next.js</div>
                <div className={styles.skillBarWrapper}><div className={styles.skillBar} style={{ width: "80%" }}></div></div>
              </li>
              <li className={styles.skillItem}>
                <div className={styles.skillLabel}><FaNode /> Node.js</div>
                <div className={styles.skillBarWrapper}><div className={styles.skillBar} style={{ width: "85%" }}></div></div>
              </li>
              <li className={styles.skillItem}>
                <div className={styles.skillLabel}><SiExpress /> Express.js</div>
                <div className={styles.skillBarWrapper}><div className={styles.skillBar} style={{ width: "75%" }}></div></div>
              </li>
              <li className={styles.skillItem}>
                <div className={styles.skillLabel}><SiTailwindcss /> Tailwind CSS</div>
                <div className={styles.skillBarWrapper}><div className={styles.skillBar} style={{ width: "85%" }}></div></div>
              </li>
              <li className={styles.skillItem}>
                <div className={styles.skillLabel}><FaBootstrap /> Bootstrap</div>
                <div className={styles.skillBarWrapper}><div className={styles.skillBar} style={{ width: "70%" }}></div></div>
              </li>
              <li className={styles.skillItem}>
                <div className={styles.skillLabel}><SiP5Dotjs /> p5.js</div>
                <div className={styles.skillBarWrapper}><div className={styles.skillBar} style={{ width: "65%" }}></div></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
