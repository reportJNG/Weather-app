"use client";

import { useContext } from "react";
import styles from "./Header.module.css";
import { ThemeContext } from "./Themeprovider";
import { FiMoon, FiSun } from "react-icons/fi";
import Image from "next/image";

export default function Header() {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) return null;

  const { theme, setTheme } = themeContext;

  return (
    <div className={styles.container}>
      {/* LEFT */}
      <div className={styles.leftscreen}>
      <div className={styles.mid}>
        <Image
          src="https://media.istockphoto.com/id/1160042514/vector/cloudy-day-icon-vector-concept-illustration-for-design.jpg?s=612x612&w=0&k=20&c=rxx99Lg7Xg4x2x9ez-0Sm1cjn-IZCII2Bml8YBaoWEY="
          alt="logo"
          width={50}
          height={60}
          className={styles.image}
        />
      </div>
      </div>

      {/* MIDDLE TITLE */}
      

      {/* RIGHT BUTTONS */}
      <div className={styles.rightscreen}>
        <button className={styles.homebtn}>
          <i className="fi fi-br-home"></i>
        </button>

        <button
          className={theme === "light" ? "lightbtn" : "darkbtn"}
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? <FiMoon /> : <FiSun />}
        </button>
      </div>
    </div>
  );
}
