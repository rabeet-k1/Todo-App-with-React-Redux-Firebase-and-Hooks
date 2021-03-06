import React, { useState } from "react";
import { addTodo } from "../../store/actions/todoActions";
import { store } from "../../store/store";

const AddTodo = props => {
  const [todo, setTodo] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    store.dispatch(addTodo({ todo }));
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="todo">Add a Todo</label>
        <input
          type="text"
          name="todo"
          value={todo}
          className="form-control"
          placeholder="Write somethingg..."
          onChange={e => setTodo(e.target.value)}
        />
      </div>
      <button className="btn btn-primary btn-block" style={{ width: "100px" }}>
        Add
      </button>
    </form>
  );
};

export default AddTodo;
