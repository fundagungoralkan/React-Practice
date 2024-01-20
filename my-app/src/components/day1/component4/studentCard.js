import React from "react";
import { Button, Card } from "react-bootstrap";

const StudentCard = ({ student, handleDelete }) => {
  const { yas, isim, kurs, img } = student;

  return (
    <Card>
      <Card.Img variant="top" src={img} style={{ height: "350px" }} />
      <Card.Body>
        <Card.Title>{isim}</Card.Title>
        <Card.Title>{yas}</Card.Title>
        <Card.Text>{kurs}</Card.Text>
        <Button variant="danger" onClick={() => handleDelete(isim)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default StudentCard;