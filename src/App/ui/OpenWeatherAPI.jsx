import React, { useState, useEffect } from 'react';

function OpenWeatherAPI() {
    const [temperature, setTemperature] = useState(null);
    const [city, setCity] = useState("Bangkok");
    const [error, setError] = useState(null);

    const API_KEY = "fec814bc47e394904085fd7b0271f343"; // Replace with your OpenWeatherMap API key

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
                );
                if (!response.ok) throw new Error("City not found");
                const data = await response.json();
                setTemperature(data.main.temp);
            } catch (err) {
                setError(err.message);
                setTemperature(null); // Reset temperature on error
            }
        };

        fetchWeather();
    }, [city]);

    return (
        <div className="flex flex-row justify-center items-center">
            {/* <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city name"
                className="border p-2 mt-2 rounded"
            /> */}
            {error ? (
                <p className="text-red-500 mt-2">Error: {error}</p>
            ) : (
                <p className="mt-2">{temperature !== null ? `The temperature in ${city} is ${temperature}°C` : "Loading..."}</p>
            )}
        </div>
    );
}

export default OpenWeatherAPI;
