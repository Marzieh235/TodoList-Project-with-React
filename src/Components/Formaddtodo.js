import React , {useState} from "react";





function Formaddtodo(props) {

    const [text , settext] = useState('');

    let formHandler =e => {
        e.preventDefault();
        props.add(text);
        settext('');
    }
    let inputHandler = e => settext (e.target.value)
    return (
        <form className="form-inline" onSubmit={formHandler}>
            <div className="form-group">
                <input type="text" className="form-control mx-sm-3" placeholder="i want to do ..." value={text} onChange={inputHandler} />
                <button type='submit' className="btn btn-primary">add</button>
            </div>
        </form>
    )
}



export default Formaddtodo;