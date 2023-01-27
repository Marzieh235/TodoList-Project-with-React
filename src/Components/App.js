import React, { useReducer, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.css'

// Import Components
import Header from './Layouts/Header';
import FormAddTodo from './Todo/FormAddTodo';
import TodoList from './Todo/TodoList';

// impor Contexts
import TodosContext from './../Context/todos';
import AuthContext from './../Context/auth';
import axios from 'axios';

// import Reducers
import AppReducer from './../Reducers/appReducer';

function App() {

    const [state, dispatch] = useReducer(AppReducer, {
        todos: [],
        authenticated: false
    })


    useEffect(() => {
        axios.get(`https://todo-app-25b4f-default-rtdb.firebaseio.com/todos.json`)
        .then(response =>jsonHandler(response.data))
        .catch(err => console.log(err))
    } , [])

    let jsonHandler = (data) => {
        let todos = Object
            .entries(data)
            .map(([key, value]) => {
                return {
                    ...value,
                    key
                }
            });
        dispatch({ type : 'init_todo' , payload : {todos}})    
    }
    


    return (
        <AuthContext.Provider value={{
            authenticated: state.authenticated,
            dispatch
        }}>
            <TodosContext.Provider value={{
                todos: state.todos,
                dispatch
            }}>
                <div className="App">
                    <Header />
                    <main>
                        <section className="jumbotron">
                            <div className="container d-flex flex-column align-items-center">
                                <h1 className="jumbotron-heading">Welcome!</h1>
                                <p className="lead text-muted">To get started, add some items to your list:</p>
                                <FormAddTodo />
                            </div>
                        </section>
                        <div className="todosList">
                            <div className="container">
                                <div className="d-flex flex-column align-items-center ">
                                    <TodoList />
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </TodosContext.Provider>
        </AuthContext.Provider>
    )
}

export default App;
