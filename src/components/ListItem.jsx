import React from "react";

function ListItem(props) {
  const { name, id, handleClick } = props;
  return (
    <li className="item" onClick={() => handleClick({ name, id })}>
      {name}
    </li>
  );
}
export default ListItem;