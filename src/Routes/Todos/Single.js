import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ToDoApi from './../../Api/todos'



export default function SingleTodo() {
    const [todo, setTodo] = useState(null);
    const [loading, setLoading] = useState(false);

    const params = useParams();
    useEffect(() => {
        setLoading(true)
        ToDoApi.get(`./todos/${params.id}.json`)
            .then(res => {
                console.log(res)
                setTodo(res.data)
                setLoading(false)
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <main>
            <section className="jumbotron">
                <div className="container d-flex flex-column align-items-center">
                    <h1 className="jumbotron-heading">Welcome!</h1>
                    <p className="lead text-muted">To get started, add some items to your list:</p>
                </div>
            </section>
            <div className="todosList">
                <div className="container">
                    <div className="d-flex flex-column align-items-center ">
                        Single Todo
                    </div>
                    {
                        loading
                            ? <h2>loading data ...</h2>
                            : todo && (
                                <div>
                                    <h3>
                                        {todo.text}
                                    </h3>
                                    <p>
                                        {todo.done ? "its done" : "its not done yet"}
                                    </p>
                                </div>
                            )
                    }
                </div>
            </div>
        </main>
    )
}