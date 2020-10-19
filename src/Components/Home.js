import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import AddTodo from "../Components/Todos/AddTodo";
import UpdateTodo from "./Todos/UpdateTodo";
import Todos from "./Todos/Todos";

import { store } from "../store/store";

const Home = props => {
  const [isEdit, setIsEdit] = useState(false);
  const [todo, setTodo] = useState("");
  const [todoId, setTodoId] = useState("");

  const [auth, setAuth] = useState();

  useEffect(() => {
    store.subscribe(() => {
      const state = store.getState();
      setAuth(state.firebsae.auth);
    });
  }, []);

  const getEdit = (edit, todo) => {
    setIsEdit(edit);
    setTodo(todo.todo);
    setTodoId(todo.id);
  };

  const handleChange = e => {
    setTodo(e.target.value);
  };

  // const user = auth?.uid;
  // if (!user) return <Redirect exact to="/login" />;

  return (
    <>
      <h1 className="text-primary text-center">Todos</h1>
      <div className="m-5">
        {isEdit ? (
          <UpdateTodo
            isEditFunc={getEdit}
            todo={todo}
            todoId={todoId}
            handleChange={handleChange}
          />
        ) : (
          <AddTodo />
        )}
        <Todos editFunc={getEdit} />
      </div>
    </>
  );
};

export default Home;
