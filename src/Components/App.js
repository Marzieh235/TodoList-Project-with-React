import React, { useReducer, lazy, Suspense } from 'react';
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
import { Routes, Route } from 'react-router-dom'

const About = lazy(() => import('./../Routes/About'))
const ContactUs = lazy(() => import('./../Routes/ContactUs'))
const SingleTodo = lazy(() => import('./../Routes/Todos/Single'))
const NotFound = lazy(() => import('./../Routes/NotFound'))


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
                        <Route path='/' element={<Home />} />
                        <Route path='/about' element={
                            <Suspense fallback={<h2>loading..</h2>}>
                                <About />
                            </Suspense>
                        } />
                        <Route path='/contact-us' element={ 
                        <Suspense fallback={<h2>loading..</h2>}>
                                <ContactUs />
                            </Suspense>
                        }>
                            <Route path='form' element={<h2>My contact from</h2>} />
                            <Route path='adress' element={<h2>My contact adress</h2>} />
                        </Route>
                        <Route path='/todos/:id' element={
                            <Suspense fallback={<h2>loading..</h2>}>
                                <SingleTodo />
                            </Suspense>
                        } />
                        <Route path='*' element={ 
                        <Suspense fallback={<h2>loading..</h2>}>
                                <NotFound />
                            </Suspense>
                        } />



                    </Routes>
                </div>
            </TodosContext.Provider>
        </AuthContext.Provider>
    )
}
// import { formToJSON } from 'axios';

export default App;
