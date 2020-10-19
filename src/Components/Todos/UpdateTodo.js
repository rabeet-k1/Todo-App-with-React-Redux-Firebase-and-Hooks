import React from "react";
import { editTodo } from "../../store/actions/todoActions";
import { store } from "../../store/store";

const UpdateTodo = props => {
  const handleSubmit = e => {
    e.preventDefault();
    store.dispatch(editTodo(props.todo, props.todoId));
    e.target.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit} style={{ display: "inline" }}>
        <div className="form-group">
          <label htmlFor="todo">Edit Todo</label>
          <input
            type="text"
            name="todo"
            value={props.todo}
            className="form-control"
            onChange={e => props.handleChange(e)}
          />
        </div>
        <button className="btn btn-primary" style={{ width: "100px" }}>
          Update
        </button>
      </form>
      <button
        onClick={() => props.isEditFunc()}
        className="btn btn-primary m-2"
        style={{ width: "100px" }}
      >
        Cancel
      </button>
    </>
  );
};

export default UpdateTodo;
