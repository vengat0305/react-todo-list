import { useState } from "react";
import "./todo.css";
import { type } from "@testing-library/user-event/dist/type";
import Timers from "./Timers";

const Todo = () => {
  const [list, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const gray = () => {
    document.body.style.backgroundColor = "#ffecec";
  };
  const white = () => {
    document.body.style.backgroundColor = "#e2f7ff";
  };
  const black = () => {
    document.body.style.backgroundColor = "#fffec3";
  };

  function addInput(e) {
    setInputValue(e.target.value);
  }
  function addContent(e) {
    e.preventDefault();
    setTodos([...list, inputValue]);
    setInputValue("");

    !inputValue ? alert(`Write something`) : (type = "text");

    // const txt = !inputValue ? alert(`Write something`) : {todo};
  }
  function deleteItem(index) {
    const newTodo = [...list];
    newTodo.splice(index, 1);
    setTodos(newTodo);
  }

  return (
    <div className="toDoCard">
      <div className="colorsBtn">
        <button className="grayColor" onClick={gray}></button>
        <button className="whiteColor" onClick={white}></button>
        <button className="blackColor" onClick={black}></button>
      </div>

      <h1>Just do it!</h1>
      <form className="inputCol">
        <input
          type="text"
          placeholder="Write Something!"
          required
          name="name"
          value={inputValue}
          onChange={addInput}
        />
        <button type="submit" className="btn addBtn" onClick={addContent}>
          I got this!
        </button>
        <div>
          <Timers />
        </div>
      </form>
      <ul className="listItems">
        {list.map((todo, index) => (
          <li className="listPara" key={index}>
            {todo}
            <button>
              <i class="fa-solid fa-circle-check"></i>
            </button>{" "}
            <button onClick={() => deleteItem(index)}>
              <i class="fa-solid fa-trash"></i>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
