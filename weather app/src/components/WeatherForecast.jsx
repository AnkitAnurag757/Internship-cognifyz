import React, { useState } from "react";

export default function WeatherForecast() {
  const [city, setCity] = useState("");
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = "0735b2af4a1fb35a18d37b7f5bc192c1";

  const fetchForecast = async () => {
    if (!city) return;
    setLoading(true);
    setError("");
    setForecast([]);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
      );
      if (!response.ok) throw new Error("City not found");

      const data = await response.json();
      const dailyData = data.list.filter((item) =>
        item.dt_txt.includes("12:00:00")
      );
      setForecast(dailyData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">🌤️ 5-Day Weather Forecast</h1>

      {/* Search */}
      <div className="d-flex justify-content-center mb-4 gap-2">
        <input
          type="text"
          className="form-control w-50"
          placeholder="Enter city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button className="btn btn-primary" onClick={fetchForecast}>
          Search
        </button>
      </div>

      {/* Loading */}
      {loading && <p className="text-center">Fetching forecast...</p>}

      {/* Error */}
      {error && <p className="text-danger text-center">{error}</p>}

      {/* Forecast Cards */}
      <div className="row">
        {forecast.map((day) => (
          <div key={day.dt} className="col-12 col-sm-6 col-md-4 col-lg-2 mb-3">
            <div className="card text-center h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">
                  {new Date(day.dt_txt).toLocaleDateString(undefined, {
                    weekday: "short",
                    month: "short",
                    day: "numeric",
                  })}
                </h5>
                <img
                  src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                  alt={day.weather[0].description}
                  className="my-2"
                />
                <p className="h4">{Math.round(day.main.temp)}°C</p>
                <p className="text-capitalize">{day.weather[0].description}</p>
                <p className="small">
                  Humidity: {day.main.humidity}% | Wind: {Math.round(day.wind.speed)} m/s
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <footer className="text-center mt-4 small">
        Powered by <a href="https://openweathermap.org/">OpenWeatherMap</a>
      </footer>
    </div>
  );
}
