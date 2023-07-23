import "./Card.css";

export default function Card(props) {
  const classes = "card " + props.className;

  //wrapper component
  return <div className={classes}>{props.children}</div>;
}

//children is a reserved name will be the conent of the opening and
//closing tags of the custom content
