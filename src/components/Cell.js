import React from "react";

export default function Cell({
  value,
  highlighted,
  field,
  handleClick,
  handleValue,
}) {
  const onClick = () => handleClick(field);
  const onChange = (e) => handleValue(e, field);

  return (
    <form>
      <input
        type="text"
        onClick={onClick}
        value={value}
        onChange={onChange}
        style={{
          backgroundColor: highlighted ? "cyan" : "transparent",
        }}
      />
    </form>
  );
}
