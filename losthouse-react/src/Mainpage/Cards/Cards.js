import './Cards.scss';

const Cards = ({offsetY}) => {
  offsetY = offsetY < 3000? offsetY/8-200: 3000/8-200;
  return (
    <div className="cards-container">
        
    </div>
  );
};

export default Cards;
