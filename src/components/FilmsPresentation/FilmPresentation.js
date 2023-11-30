import { useState, useEffect } from "react";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  Icon,
  CardTitle,
  Row,
  Col,
  Card,
  Container,
  Section,
} from "react-materialize";
export default function FilmsPresentation() {
  const { theme, toggle, dark } = useContext(ThemeContext);
  const [items, setItems] = useState([]);
  const getUrl = `https://653a098ae3b530c8d9e9051b.mockapi.io/api/v1/filmData`;
  //fetch data from mockapi
  // useEffect(() => {
  //   const getMovies = () => {
  //     fetch(`https://653a098ae3b530c8d9e9051b.mockapi.io/api/v1/filmData`)
  //       .then((response) => {
  //         if (!response.ok) {
  //           throw new Error(`HTTP Status: ${response.status}`);
  //         }
  //         return response.json();
  //       })
  //       .then((data) => {
  //         setItems(data);
  //       })
  //       .catch((error) => console.log(error.message));
  //   };
  //   getMovies();
  // }, []);

  useEffect(() => {
    const getMovies = async () => {
      const response = await axios.get(getUrl);
      setItems(
        response.data.sort((a, b) => {
          return b.age - a.age;
        })
      );
    };
    getMovies();
  }, []);
  return (
    <Section
      style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
    >
      <Container>
        <Row>
          {items.map((item) => (
            <Col key={item.id} m={4} s={12}>
              <Card
                style={{ color: "black" }}
                closeIcon={<Icon>close</Icon>}
                header={<CardTitle image={item.image} reveal waves="light" />}
                reveal={<p>{item.info}</p>}
                revealIcon={<Icon>more_vert</Icon>}
                title={item.title}
              >
                <Link to={`detail/${item.id}`}>Detail</Link>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Section>
  );
}
