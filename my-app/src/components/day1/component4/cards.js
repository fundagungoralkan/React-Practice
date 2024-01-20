import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import data from "./Students.json";
import StudentCard from "./studentCard";

const Cards = () => {
  // useState,useEffect,useRef,useReducer,useMemo => React Hooks
  const [newData, setNewData] = useState(data);

  const handleDelete = (name) => {
    const newArr = newData.filter((item) => item.isim !== name);
    setNewData(newArr);
  };

  return (
    <Container className="mb-5 mt-5">
      <Row className="gy-3">
        {newData.map((student, index) => (
          <Col md={3} key={index}>
            <StudentCard student={student} handleDelete={handleDelete} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Cards;