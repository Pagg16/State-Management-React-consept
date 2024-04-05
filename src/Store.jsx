import { useSearchParams, useLocation } from "react-router-dom";

const listItems = [
  { value: "Computer", isComputer: true },
  { value: "Book", isComputer: false },
  { value: "Keyboard", isComputer: true },
  { value: "Cup", isComputer: false },
];

export default function Store() {
  //   const [input, setInput] = useState("");
  //   const [checked, setChaked] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams({
    input: "",
    checked: false,
  });

  const input = searchParams.get("input") || "";
  const checked = searchParams.get("checked") === "true";

  function listRender(filter) {
    return listItems
      .filter(
        (elem) =>
          (filter ? elem.isComputer : true) &&
          (input.trim() !== ""
            ? elem.value.toLowerCase().includes(input.toLowerCase())
            : true)
      )
      .map((elem) => <li key={elem.value}>{elem.value}</li>);
  }

  return (
    <form className="store">
      <h1>Store</h1>
      <div>
        <label>Title</label>
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setSearchParams(
              (prev) => {
                prev.set("input", e.target.value);
                return prev;
              },
              {
                replace: true,
              }
            );
          }}
        ></input>
      </div>
      <div>
        <label>Only Computer Items</label>
        <input
          type="checkbox"
          checked={checked}
          onChange={() =>
            setSearchParams(
              (prev) => {
                prev.set("checked", !checked);
                return prev;
              },
              {
                replace: true,
              }
            )
          }
        />
      </div>
      <ul>{listRender(checked)}</ul>
    </form>
  );
}
