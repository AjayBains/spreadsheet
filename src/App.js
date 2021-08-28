import React from "react";
import "./App.css";
import Cell from "./components/Cell";

function App() {
  const [numbers, setNumbers] = React.useState([]);
  const [highlightedNums, setHighlightedNums] = React.useState([]);
  const [sum, setSum] = React.useState(0);

  const getField = (i) => {
    const letters = "ABCDEFGHIJ".split("");
    if (i % 10 === 0) return `${letters[i / 10 - 1]}10`;
    return `${letters[Math.floor(i / 10)]}${Math.floor(i % 10)}`;
  };

  const handleClick = (field) => {
    const nums = [...numbers].map((x) => {
      if (x.field === field) x.highlighted = !x.highlighted;
      return x;
    });
    setNumbers(nums);
  };

  const getSum = () => {
    setSum(
      highlightedNums.map((x) => Number(x.value)).reduce((a, b) => a + b, 0)
    );
  };

  React.useEffect(() => {
    const nums = [];
    for (let i = 1; i <= 100; i++) {
      nums.push({
        value: "",
        highlighted: false,
        field: getField(i),
      });
    }

    setNumbers(nums);
  }, []);
  const handleValue = (e, field) => {
    const nums = [...numbers].map((x) => {
      if (x.field === field) x.value = e.target.value;
      return x;
    });
    setNumbers(nums);
  };
  React.useEffect(() => {
    if (numbers.length > 0) {
      const highlighted = numbers.filter((x) => x.highlighted);
      setHighlightedNums(highlighted);
    }
  }, [numbers]);

  return (
    <>
      <h1>Fill ur data below</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {numbers.map((x) => (
          <Cell
            handleClick={handleClick}
            handleValue={handleValue}
            {...x}
            key={x.field}
          />
        ))}
      </div>
      Selected: {highlightedNums.map((x) => x.field).join(", ")}
      <br />
      <button onClick={getSum}>SUM</button>
      {sum > 0 && sum}
    </>
  );
}

export default App;
