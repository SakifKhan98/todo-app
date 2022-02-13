import React, { useState, useEffect, useRef } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });
  // const handleChange = (e) => {
  //   setInput(e.target.value);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(input);
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };
  return (
    <div>
      <form className="todo-form" onSubmit={handleSubmit}>
        {props.edit ? (
          <>
            <input
              type="text"
              placeholder="Update the Todo"
              value={input}
              name="text"
              className="todo-input edit"
              onChange={(e) => setInput(e.target.value)}
              ref={inputRef}
            />
            <button className="todo-button edit">Update Todo</button>
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="Add a todo"
              value={input}
              name="text"
              className="todo-input"
              onChange={(e) => setInput(e.target.value)}
              ref={inputRef}
            />
            <button className="todo-button">Add todo</button>
          </>
        )}
      </form>
    </div>
  );
};

export default TodoForm;
