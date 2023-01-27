
import FormAddTodo from './../Components/Todo/FormAddTodo';
import TodoList from './../Components/Todo/TodoList';
import TodoApi from './../Api/todos'
import { useEffect, useState, useContext } from 'react';
import TodosContext from '../Context/todos';
import { useNavigate } from 'react-router-dom';







export default function Home() {
    const [loading, setloading] = useState();
    const todosContext = useContext(TodosContext);
    const navigate = useNavigate();

    useEffect(() => {
        setloading(true);
        TodoApi.get(`/todos.json`)
            .then(response => jsonHandler(response.data))
            .catch(err => console.log(err))
    }, [])

    let jsonHandler = (data) => {
        setloading(false)
        let todos = Object
            .entries(data)
            .map(([key, value]) => {
                return {
                    ...value,
                    key
                }
            });

        todosContext.dispatch({ type: 'init_todo', payload: { todos } })
    }


    const handlerClick  = () => {
        if(false) {
            navigate('/contact-us')
        }else{
            navigate('/about')
        }
    }
    return (
        <main>
            <section className="jumbotron">
                <div className="container d-flex flex-column align-items-center">
                    <h1 className="jumbotron-heading">Welcome!</h1>
                    <p className="lead text-muted">To get started, add some items to your list:</p>
                    <button onClick={handlerClick}>
                        Go to contact us
                    </button>
                    <FormAddTodo />
                </div>
            </section>
            <div className="todosList">
                <div className="container">
                    <div className="d-flex flex-column align-items-center ">
                        {
                            loading
                                ? <h2>Loading data ...</h2>
                                : <TodoList />
                        }
                    </div>
                </div>
            </div>
        </main>
    )
}