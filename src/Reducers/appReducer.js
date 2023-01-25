function AppReducer(State, action) {
    switch (action.type) {
        case 'add_todo':
            let { text } = action.payload
            return {
                todos: [
                    ...State.todos,
                    { key: Date.now(), done: false, text }
                ]
            };
            break;

        default:
            return State;
            break;
    }
}





export default AppReducer;
// addTodo(text) {
//     this.setState(prevState => {
//
//     })
// }


// deleteTodo(key) {
//     this.setState(prevState => {
//         return {
//             todos: prevState.todos.filter(item => item.key !== key)
//         }
//     })
// }

// editTodo(key, text) {
//     let { todos } = this.state;

//     let item = todos.find(item => item.key === key);
//     item.text = text;

//     let newTodos = todos.filter(item => item.key !== key)

//     this.setState({
//         todos: [
//             ...newTodos,
//             item
//         ]
//     })
// }


// toggleTodo(key) {
//     let { todos } = this.state;

//     let item = todos.find(item => item.key === key);
//     item.done = !item.done;

//     let newTodos = todos.filter(item => item.key !== key)

//     this.setState({
//         todos: [
//             ...newTodos,
//             item
//         ]
//     })
// }
