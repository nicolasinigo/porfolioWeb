import React from "react";
import Card from "react-bootstrap/Card";
import "./Cards.css";

const Cards = ({ imagen, data, titulo,link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
      <div>
        <div className="card-img-hover">
          <Card className="border-carta">
            <Card.Img
              variant="top"
              src={imagen}
              className="img-fluid"
              style={{
                height: "200px",
                objectFit: "cover",
                width: "100%",
              }}
            />
            <Card.Body>
              <Card.Title>{titulo}</Card.Title>
              <Card.Text>{data}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </a>
  );
};

export default Cards;
