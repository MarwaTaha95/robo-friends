import React from 'react';
import Card from './Card';

const CardList = (props) => {
  const { robots } = props;

  const cards = robots.map((user, i) => {
    return <Card
      key={i}
      id={robots[i].id}
      name={robots[i].name}
      email={robots[i].email}
    />
  });
  
  return (
    <div>
      {cards}
    </div>
  );
}

export default CardList;
