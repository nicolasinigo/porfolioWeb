import React from "react";
import Card from "react-bootstrap/Card";
import "./Cards.css";

const Cards = ({imagen}) => {
  return (
    <div>
      <div className="card-img-hover" >
        <Card border="warning">
          <Card.Img variant="top" src={imagen} className="img-fluid" style={{
            height: "200px",
            objectFit: "cover",
            width: "100%",
          }} />
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Cards;
