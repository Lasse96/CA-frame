import * as React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { URL } from "../utils/constants";
import { Card, Col, Row } from "antd";
import "../styles/main.css";

const { Meta } = Card;

const Home = () => {
  const [results, setResults] = useState(null);
  const [value, setValue] = useState("");
  useEffect(() => {
    const fetchClasses = async () => {
      let res = await fetch(URL);
      let data = await res.json();
      console.log(data);
      setResults(data);
    };
    fetchClasses();
  }, []);

  if (!results) {
    return <p>fetching</p>;
  }

  return (
    <>
      <input
        class="search ic3"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search"
      />
      <Row gutter={16}>
        {results
          .filter((item) => {
            if (!value) return true;
            if (
              item.title.toLowerCase().includes(value) ||
              item.description.toLowerCase().includes(value)
            ) {
              return true;
            }
          })
          .map((item, idx) => {
            return (
              <>
                <Col span={8}>
                  <Card
                    key={idx}
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt={item.title} src={item.imageUrl} />}
                  >
                    <Meta title={item.title} description={item.description} />
                    <h3> $ {item.price}</h3>
                    <Link to={`/ProductPage/${item.id}`}>
                      <button class="submit">View product</button>
                    </Link>
                  </Card>
                </Col>
              </>
            );
          })}
      </Row>
    </>
  );
};

export default Home;
