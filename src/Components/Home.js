import React, { useState } from "react";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import AddTodo from "../Components/Todos/AddTodo";
import UpdateTodo from './Todos/UpdateTodo';
import Todos from './Todos/Todos';

const Home = props => {
  const [isEdit, setIsEdit] = useState(false);
  const [todo, setTodo] = useState("");
  const [todoId, setTodoId] = useState("");

  const getEdit = (edit, todo) => {
    setIsEdit(edit);
    setTodo(todo.todo);
    setTodoId(todo.id);
  }

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const { auth } = props;
  if (!auth.uid) return <Redirect exact to="/login" />

  return (
    <>
      <h1 className="text-primary text-center">Todos</h1>
      <div className="m-5">
        {isEdit ? <UpdateTodo isEditFunc={getEdit} todo={todo} todoId={todoId} handleChange={handleChange} /> : <AddTodo />}
        <Todos editFunc={getEdit} />
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebsae.auth,
  }
}

export default connect(mapStateToProps)(Home);
