import React, { useReducer} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
// Import Components
import Header from './Layouts/Header';

// impor Contexts
import TodosContext from './../Context/todos';
import AuthContext from './../Context/auth';

// import Reducers
import AppReducer from './../Reducers/appReducer';

//import Routes
import Home from '../Routes/Home';
import {Routes , Route} from 'react-router-dom'
import About from '../Routes/About'
import ContactUs from '../Routes/ContactUs'
import SingleTodo from '../Routes/SingleTodo';


function App() {

    const [state, dispatch] = useReducer(AppReducer, {
        todos: [],
        authenticated: false
    })

      

    


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
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/about' element={<About/>}/>
                        <Route path='/contact-us' element={<ContactUs/>}/>
                        <Route path='/todo/:slug' element={<SingleTodo/>}/>
                        <Route path='/articles/:slug' element={<SingleTodo/>}/>

                    </Routes>
                </div>
            </TodosContext.Provider>
        </AuthContext.Provider>
    )
}
// import { formToJSON } from 'axios';

export default App;
