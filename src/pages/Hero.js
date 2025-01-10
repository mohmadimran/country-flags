import { useState, useEffect } from "react";
import "./hero.css";
import Card from "../component/card";
export default function Hero() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          "https://xcountries-backend.azurewebsites.net/all"
        );
        const resData = await response.json();
        setCountries(resData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    getData();
  }, []);

  return (
    <div>
      <div className="card-section">
        <div className="card-container">
          <Card cardData={countries} />
        </div>
      </div>
    </div>
  );
}
