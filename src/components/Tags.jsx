import Badge from "react-bootstrap/Badge";

function Tags(props) {
  return (
    <Badge className="badge" bg={props.color}>
      {props.texto}
    </Badge>
  );
}

export default Tags;
