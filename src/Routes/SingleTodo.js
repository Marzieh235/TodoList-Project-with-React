import { useParams } from 'react-router-dom';




export default function SingleTodo () {
const params = useParams();

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
                </div>
            </div>
        </main>
    )
}