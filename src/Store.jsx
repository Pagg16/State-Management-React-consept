import { useState } from "react";

const listItems = [
  { value: "Computer", isComputer: true },
  { value: "Book", isComputer: false },
  { value: "Keyboard", isComputer: true },
  { value: "Cup", isComputer: false },
];

export default function Store() {
  const [input, setInput] = useState("");
  const [checked, setChaked] = useState(false);

  function listRender(filter) {
    if (filter) {
      return listItems
        .filter((elem) => elem.isComputer)
        .map((elem) => <li key={elem.value}>{elem.value}</li>);
    }

    return listItems.map((elem) => <li key={elem.value}>{elem.value}</li>);
  }

  return (
    <div className="store">
      <h1>Store</h1>
      <div>
        <label>Title</label>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></input>
      </div>
      <div>
        <label>Only Computer Items</label>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChaked((prevState) => !prevState)}
        />
      </div>
      <ul>{listRender(checked)}</ul>
    </div>
  );
}
