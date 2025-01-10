import "./card.css"
export default function Card({ cardData }) {
  return (
    <>
      {cardData.map((country,index) => {
        return (
          <div key={index} className="card">
            <img className="card-img" src={country.flag} alt={country.name}/>
            <p>{country.name}</p>
          </div>
        );
      })}
    </>
  );
}
