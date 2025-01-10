import { useState, useEffect } from "react";
import "./hero.css";
import Card from "../component/card"
export default function Hero() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isError,setError] =useState(null);
  const url = "https://xcountries-backend.azurewebsites.net/all";
  const getData = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(url);
      const resData = await response.json();
    //   console.log(resData);
      setCountries(resData);
    } catch (error) {
      console.error("sorry,can not fetch the data", error);
    setError("sorry!,can not fetch the data")
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="card-section">
        {loading ? (
          <h1>Loading........</h1>
        ) : (
          <div className="card-container">
           <Card cardData={countries}/>
          </div>
        )}
      </div>
      <div>{isError && <h1>{isError}</h1>}</div>
    </div>
  );
}
