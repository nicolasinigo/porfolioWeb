import React from "react";
import Card from "react-bootstrap/Card";
import "./Cards.css";

const Cards = ({imagen,data}) => {
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
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              {data}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Cards;
