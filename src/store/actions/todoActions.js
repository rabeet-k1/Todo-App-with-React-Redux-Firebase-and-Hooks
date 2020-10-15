export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const TOGGLE_CHECKED = "TOGGLE_CHECKED";
export const UPDATE_TODO = "UPDATE_TODO";

export const ADD_TODO_ERROR = "ADD_TODO_ERROR";
export const ERROR_REMOVE_TODO = "ERROR_REMOVE_TODO";
export const TOGGLE_CHECKED_ERROR = "TOGGLE_CHECKED_ERROR";
export const UPDATE_TODO_ERROR = "UPDATE_TODO_ERROR";

export const addTodo = todo => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();

        firestore.collection("Todos").add({
            ...todo,
            date: new Date(),
        }).then(() => {
            dispatch({
                type: "ADD_TODO",
                todo
            })
        }).catch(err => {
            dispatch({
                type: "ADD_TODO_ERROR",
                err
            })
        })
    }
}

export const removeTodo = todo => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();

        firestore.collection("Todos").doc(todo.id).delete().then(() => {
            dispatch({
                type: "REMOVE_TODO",
            })
        }).catch(err => {
            dispatch({
                type: "ERROR_REMOVE_TODO",
                err
            })
        })
    }
}

export const toggleChecked = todo => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();

        firestore.collection("Todos").doc(todo.id).set({
            ...todo,
            checked: !todo.checked,
        },
            { merge: true }).then(() => {
                dispatch({
                    type: "TOGGLE_CHECKED",
                    todo
                })
            }).catch(err => {
                dispatch({
                    type: "TOGGLE_CHECKED_ERROR",
                    err
                })
            })
    }
}



export const editTodo = (todo, id) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        console.log(id);
        console.log(todo);
        firestore.collection("Todos").doc(id).update({ todo }).then(() => {
            dispatch({
                type: UPDATE_TODO,
                todo,
            })
        }).catch(err => {
            dispatch({
                type: UPDATE_TODO_ERROR,
                err
            })
        })
    }
}
