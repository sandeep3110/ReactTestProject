import "./Card.css";

export const Card = (props) => {
  const className = "card " + props.className;

  return <div className={className}>{props.children}</div>;
};
