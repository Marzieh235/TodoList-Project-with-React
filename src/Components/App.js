import React, { useReducer } from 'react';

import 'bootstrap/dist/css/bootstrap.css'

// Import Components
import Header from './Layouts/Header';
import FormAddTodo from './Todo/FormAddTodo';
import TodoList from './Todo/TodoList';

// impor Contexts
import TodosContext from './../Context/todos';
import authContext from '../Context/auth';

//import Reducers 
import AppReducer from './../Reducers/appReducer'


// setTimeout(() => {
//     dispath({type : 'add_todo' , paayload : { text : 'asdb'}});
// }, 3000);



function App() {

    const [state, dispath] = useReducer(AppReducer, {
        todos: [],
        authenticated: false,
    })

    return (
        <authContext.Provider value={{
            authenticated: state.authenticated,
            // login: () => { this.setState({ authenticated: true }) },
            // logout: () => { this.setState({ authenticated: false }) }
        }}>
            <TodosContext.Provider value={{
                // todos: this.state.todos,
                dispath,
                // add: this.addTodo.bind(this),
                // done: this.toggleTodo.bind(this),
                // delete: this.deleteTodo.bind(this),
                // edit: this.editTodo.bind(this)
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
                                    {/* <TodoList /> */}
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </TodosContext.Provider>
        </authContext.Provider>
    )
}

export default App;
