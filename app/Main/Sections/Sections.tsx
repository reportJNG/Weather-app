import styles from './Sections.module.css';
import Image from 'next/image';

type WeatherInfo = {
  country: string;
  city: string;
  region: string;
  timezone: string;
  localtime: string;
  temp: number;
  weatherType: string;
  icon: string;
};

export default function Sections({
  country,
  city,
  region,
  timezone,
  localtime,
  temp,
  weatherType,
  icon
}: WeatherInfo) {
  return (
    <div className={styles.card}>
      
      {/* TITLE */}
      <h1 className={styles.header}>Today’s Weather 🌤️</h1>

      {/* TOP WEATHER SUMMARY */}
      <div className={styles.mainWeather}>
        <div className={styles.tempBox}>
          <h2 className={styles.temperature}>{temp}°C</h2>
          <p className={styles.weatherType}>{weatherType}</p>
        </div>

        <div className={styles.iconWrapper}>
          <Image
            src={`https:${icon}`}
            alt={weatherType}
            width={90}
            height={90}
            className={styles.weatherIcon}
          />
        </div>
      </div>

      {/* INFO GRID */}
      <div className={styles.infoGrid}>

        <div className={styles.infoItem}>
          <span className={styles.label}>📍 Country</span>
          <span className={styles.value}>{country}</span>
        </div>

        <div className={styles.infoItem}>
          <span className={styles.label}>🏙️ City</span>
          <span className={styles.value}>{city}</span>
        </div>

        <div className={styles.infoItem}>
          <span className={styles.label}>🗺️ Region</span>
          <span className={styles.value}>{region}</span>
        </div>

        <div className={styles.infoItem}>
          <span className={styles.label}>⏰ Local Time</span>
          <span className={styles.value}>{localtime}</span>
        </div>

        <div className={styles.infoItem}>
          <span className={styles.label}>🌐 Timezone</span>
          <span className={styles.value}>{timezone}</span>
        </div>

      </div>
    </div>
  );
}
