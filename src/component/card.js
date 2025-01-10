import "./card.css"
export default function Card({ cardData }) {
  const{name,flag} = cardData;
  return (
    <>
          <div className="card">
            <img className="card-img" src={flag} alt={name}/>
            <p>{name}</p>
          </div>
    </>
  );
}
