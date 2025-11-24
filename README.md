🌦️ Weather App – Next.js + TypeScript

A modern, fast, and clean Weather Application built using Next.js (App Router), TypeScript, and WeatherAPI.
The UI is minimal, responsive, and theme-friendly (light/dark mode), with animated components and a sidebar layout.

✨ Features
🔍 Real-Time Weather Search

Enter any country or city and get:

🌍 Country

🏙️ City

🗺️ Region

⏱️ Timezone

🕒 Local time

🌡️ Temperature (°C)

🌤️ Weather type

🖼️ Condition icon

🎨 Modern UI/UX

Clean glassmorphic cards

Sidebar navigation

Smooth transitions

Responsive on all devices

⚡ Tech Stack

Next.js 14+ (App Router)

TypeScript

CSS Modules

WeatherAPI

React Hooks

📦 Installation

Clone the repository:

git clone https://github.com/your-username/weather-app
cd weather-app


Install dependencies:

npm install


Create a .env.local file:

WEATHER_API_KEY=your_api_key_here


Run the development server:

npm run dev

📁 Project Structure
/
├── app/
│   ├── api/
│   │   └── weather/
│   │       └── route.ts
│   ├── Components/
│   │   ├── Header/
│   │   ├── About/
│   ├── Main/
│   │   ├── Home.tsx
│   │   ├── Leftsection/
│   │   ├── Button/
│   │   ├── Sections/
│   │   └── types/
│   ├── globals.css
│   └── page.tsx
├── public/
├── README.md
└── package.json

🔗 API Route Example

GET /api/weather?q=London

Returns:

{
  "data": {
    "country": "United Kingdom",
    "city": "London",
    "region": "City of London",
    "timezone": "Europe/London",
    "localtime": "2025-11-22 14:25",
    "temp": 12.3,
    "weatherType": "Cloudy",
    "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png"
  }
}

🧩 Example WeatherInfo Type
export type WeatherInfo = {
  country: string;
  city: string;
  region: string;
  timezone: string;
  localtime: string;
  temp: number;
  weatherType: string;
  icon: string;
};

🖥️ UI Preview (Description)
📌 Sidebar

A fixed menu on the left where you search for a country.

📌 Main Panel

Shows:

Weather card

Temperature

Weather icon

All data in a decorated info list

📌 Bottom Buttons

🌍 Map/location search

➕ More

🚀 Deployment

Easily deploy to Vercel:

vercel


Make sure to add the environment variable on Vercel:

WEATHER_API_KEY=your_api_key

⭐ Future Improvements

5-day forecast

Animated backgrounds

Auto-detect user location

Saving last search

Switching °C / °F

👤 Author

remali hamza
🔗 Portfolio: https://remalihamza.vercel.app/
📧 Email: hamzaremali10@gmail.com