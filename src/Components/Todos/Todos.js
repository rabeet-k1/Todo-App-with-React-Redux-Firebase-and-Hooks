import React, { useState, useEffect } from "react";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { removeTodo, toggleChecked } from "../../store/actions/todoActions";
import { store } from "../../store/store";
import moment from "moment";
import Check from "./Check";

const Todos = props => {
  const [todos, setTodos] = useState();

  useEffect(() => {
    store.subscribe(() => {
      const state = store.getState();
      setTodos(state.firestore.ordered.Todos);
    });
  }, []);

  const handleDelete = todo => {
    store.dispatch(removeTodo(todo));
  };

  const handleCheck = todo => {
    store.dispatch(toggleChecked(todo));
  };

  return (
    <div className="m-5">
      <table className="table table-dark">
        <thead>
          <tr className="text-info">
            <th scope="col">Todos</th>
            <th scope="col">Added On</th>
            <th scope="col">Status</th>
            <th scope="col">Delete</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {todos &&
            todos.map(todo => {
              return (
                <tr key={todo.id}>
                  <th scope="row">{todo.todo}</th>
                  <td>{moment(todo.date.toDate()).calendar()}</td>
                  <td>
                    <Check
                      onClick={() => handleCheck(todo)}
                      checked={todo.checked}
                    />
                  </td>
                  <td>
                    <span
                      onClick={() => handleDelete(todo)}
                      className="material-icons text-danger"
                      style={{ cursor: "pointer" }}
                    >
                      delete
                    </span>
                  </td>
                  <td>
                    <span
                      onClick={() => props.editFunc(true, todo)}
                      className="my-todo"
                      style={{ cursor: "pointer" }}
                    >
                      Edit
                    </span>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default compose(
  firestoreConnect(ownProps => [
    {
      collection: "Todos",
      orderBy: ["date", "desc"],
    },
  ])
)(Todos);
