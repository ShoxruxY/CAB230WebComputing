import { useState, useEffect } from "react";
const API_KEY = "c3c8ebed9aa94f9d92a34454260504";
const QUERY = "Brisbane";
function getForecastByQuery(query, apiKey) {
  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${query}&aqi=no`;
  return fetch(url)
    .then((res) => res.json())
    .then((data) => ({
      time: data.location.locatime,
      text: data.current.condition.text,
      temp: data.current.temp_c,
      wind: data.current.wind_kph,
      icon: data.current.condition.icon,
    }))
    .catch(Error);
}

export function useWheather() {
  const [error, setError] = useState(null);
  const [headlines, setHeadlines] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getForecastByQuery(QUERY, API_KEY)
      .then((headlines) => {
        setHeadlines(headlines);
      })
      .catch((e) => {
        setError(e);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return {
    loading,
    headlines,
    error,
  };
}
