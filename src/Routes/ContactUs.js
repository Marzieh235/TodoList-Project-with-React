import { Link, Outlet } from "react-router-dom"

export default function aboutPage() {
    return (
        <section className="jumbotron">
            <div className="container d-flex flex-column align-items-center">
                <h1 className="jumbotron-heading">ContactUs Page!</h1>
                <p className="lead text-muted">To get started, add some items to your list:</p>
            </div>

            <Link to='/contact-us'>To address</Link>
            <Outlet />


        </section>
    )
}