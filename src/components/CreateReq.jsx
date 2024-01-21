import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import Content from "./Content";


const CreateReq = () => {
  const [city, setCity] = useState("");
  const [value, setValue] = useState("");
  const [responseData, setResponseData] = useState(null);

  const onChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setCity(value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(process.env.API_URL, {
          params: {
            key: process.env.API_KEY ,
            q: value,
          },
        });
        setResponseData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        alert(`Doesnt exist a city like this ${city}`)
      }
    };

    if (value !== "") {
      fetchData();
    }
  }, [city]);

  return (
    <>
      <div>
      <Navbar className="bg-body-tertiary justify-content-between">
        <Form inline>
          <Row>
            <Col xs="auto">
              <Form.Control
                type="text"
                placeholder="Search"
                className=" mr-sm-2"
                onChange={onChange}
              />
            </Col>
            <Col xs="auto">
              <Button type="submit" onClick={handleClick}>
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </Navbar>
    </div>

    <Content data={responseData} />
    </>
  );
};

export default CreateReq;
