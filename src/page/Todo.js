import React from 'react'
import axios from 'axios'
class Todo extends React.Component{
    constructor() {
        super();
        this.state={
            todos: []
        }
    }
    componentDidMount(){
    this.getData()
    }
    getData(){
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then((res)=>{
            this.setState({
                todos: res.data
            })
        })
    }
    render(){
        console.log(this.state.todos)
        return(
            <div>
                <h1 style={styles.wrapper}>HALAMAN TODO</h1>
                <ul>
                    { this.state.todos.map((item, index) =>
                    <li key={index}>{item.title}</li>
                    )}
                </ul>
            </div>
        )
    }
}
const styles = {
    wrapper: {
        fontSize: 12,
    }
}
export default Todo