
import Card from "react-bootstrap/Card";
import Tags from "./Tags";

function MyCard({url,nombre,descripcion,color,texto}) {
  return (
    <Card style={{ width: "17rem" }}>
      <Card.Img variant="top" src={url} />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>{descripcion}</Card.Text>
        <Tags color={color} texto={texto}/>
      </Card.Body>
    </Card>
  );
}
export default MyCard;
