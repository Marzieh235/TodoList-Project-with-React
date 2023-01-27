import React, { useContext } from 'react';
import AuthContext from '../../Context/auth';
import TodosContext from '../../Context/todos';
import { Link , NavLink} from 'react-router-dom';

function Header() {

    const todosContext = useContext(TodosContext);
    const authContext = useContext(AuthContext);


    let doLogin = () => authContext.dispatch({ type: 'login_user' });
    let doLogout = () => authContext.dispatch({ type: 'logout_user' });

    return (
        <header>
            <div className="navbar navbar-dark bg-dark shadow-sm">
                <div className="container d-flex justify-content-between">



                    <div className='d-flex'>
                        <a href="#" className="navbar-brand d-flex align-items-center">
                            <strong>Todo App</strong>
                        </a>
                        <ul className='nav'>
                            <li className='nav-item'>
                                <NavLink className='nav-link active text-white' to="/">Home</NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink className='nav-link text-white'to="/about">About</NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink className='nav-link' style={({isActive}) => {
                                    return {
                                        color : isActive ? 'red' : ''
                                    }
                                }} to="/contact-us">ContactUs</NavLink>
                            </li>
                        </ul>
                    </div>
                    {
                        !authContext.authenticated
                            ? <button className="btn btn-sm btn-success" onClick={doLogin}>login</button>
                            : <button className="btn btn-sm btn-danger" onClick={doLogout}>logout</button>
                    }
                </div>
            </div>
        </header>
    )
}


export default Header;