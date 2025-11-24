import { NextResponse } from 'next/server';

interface WeatherInfo {
  country: string;
  city: string;
  region: string;
  timezone: string;
  localtime: string;
  temp: number;
  weatherType: string;
  icon: string;
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const q = searchParams.get('q') || 'algeria';
    const key = process.env.WEATHER_API_KEY;

    if (!key) {
      return NextResponse.json(
        { error: 'Missing API key' },
        { status: 500 }
      );
    }

    const url = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${encodeURIComponent(
      q
    )}&aqi=no`;

    const r = await fetch(url);

    if (!r.ok) {
      const text = await r.text();
      return NextResponse.json(
        { error: `Weather API error: ${text}` },
        { status: r.status }
      );
    }

    const json = await r.json();

    const data: WeatherInfo = {
      country: json.location.country,
      city: json.location.name,
      region: json.location.region,
      timezone: json.location.tz_id,
      localtime: json.location.localtime,
      temp: json.current.temp_c,
      weatherType: json.current.condition.text,
      icon: json.current.condition.icon,
    };

    return NextResponse.json({ data }, { status: 200 });
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
