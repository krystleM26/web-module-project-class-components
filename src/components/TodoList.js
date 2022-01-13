import React from 'react'
import Todo from './Todo'

const TodoList = () =>  {
    
   
        return (
            <div className="task-list">
                {this.state.tasks.map(item =>
                    <Item key={item.id} item={item} />
                    )}

            </div>
        )
    
}

export default TodoList;


// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
