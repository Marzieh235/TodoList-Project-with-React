
import FormAddTodo from './../Components/Todo/FormAddTodo';
import TodoList from './../Components/Todo/TodoList';
import TodoApi from './../Api/todos'
import { useEffect , useState , useContext} from 'react';
import TodosContext from '../Context/todos';







export default function Home() {
    const [loading, setloading] = useState();
    const todosContext = useContext(TodosContext);

    
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

    return (
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