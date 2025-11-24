'use client';

import { useState } from 'react';
import styles from './Home.module.css';

import Leftsection from './Leftsection/Leftsection';
import Buttons from './Button/Buttons';
import Sections from './Sections/Sections';

import type { WeatherInfo } from '../types/weather';

export default function Home() {
  const [country, setCountry] = useState('algeria');
  const [weather, setWeather] = useState<WeatherInfo | null>(null);

 const getLocation = async () => {
  if (!country) return;

  const r = await fetch(`/api/weather?q=${country}`);
  const json = await r.json();

  if (json.data) {
    setWeather({
      country: json.data.country,
      city: json.data.city,
      region: json.data.region,
      timezone: json.data.timezone,
      localtime: json.data.localtime,
      temp: json.data.temp,
      weatherType: json.data.weatherType,
      icon: json.data.icon,
    });
  } else {
    console.error("API Error:", json.error);
  }
};


  return (
    <div className={styles.page}>
      
      <aside className={styles.sidebar}>
        <Leftsection setContry={setCountry} />
      </aside>

      <main className={styles.main}>

        <div className={styles.sectionsWrapper}>
          {weather ? <Sections {...weather}  /> : (
            <div className={styles.placeholder}>
              <h2>Wait ...</h2>
            </div>
          )}
        </div>

        <div className={styles.buttonsWrapper}>
          <Buttons getlocation={getLocation} />
        </div>

      </main>
    </div>
  );
}
