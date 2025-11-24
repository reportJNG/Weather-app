'use client'
import styles from "./About.module.css";
import { FiInstagram, FiGithub, FiServer } from "react-icons/fi";
import Image from "next/image";

export default function About() {
  return (
    <div className={styles.container}>
 

      <div className={styles.leftside}>
        <div className={styles.insidebox}>
             <div className={styles.header}>
        <h3 className={styles.text}>
          <strong>By </strong>hamza
        </h3>
        <p className={styles.year}>
          <strong>2025</strong>
        </p>
      </div>

        </div>
        
      </div>

      <div className={styles.mid}>
        <Image
          src="https://cdn.dribbble.com/userupload/42979690/file/original-ecb0a3ea83bd490e993a58d0b3369e0c.jpg?resize=400x300"
          alt="logo"
          width={80}
          height={90}
        />
      </div>

      <div className={styles.rightside}>
        <button
          className={styles.btn}
          onClick={() =>
            window.open("https://www.instagram.com/re_hamza_0/", "_blank")
          }
        >
          <FiInstagram />
        </button>

        <button
          className={styles.btn}
          onClick={() => window.open("https://github.com/", "_blank")}
        >
          <FiGithub />
        </button>

        <button
          className={styles.btn}
          onClick={() => window.open("https://remalihamza.vercel.app/", "_blank")}
        >
          <FiServer />
        </button>
      </div>
    </div>
  );
}
