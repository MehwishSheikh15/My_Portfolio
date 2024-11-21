import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hey, It's me MEHWISH SHEIKH!</h1>
        <p className={styles.description}>
        I'm a full-stack developer using React,Typescript,CSS,Javascript,Tailwind CSS,HTML,Figma and
        NodeJS. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:mehwishsheikh451sheikh@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
