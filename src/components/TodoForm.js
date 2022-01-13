import React from 'react'



 class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            input:""
        }
    }
handleChanges = (e) => {
    // keystroke update
    this.setState({
        ...this.state,
        input: e.target.value
    });
};

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleAdd();
    }
     
     render () {

         return (
             <div>
                
                 <form onSubmit={this.handleSubmit}>
                     <label>Name:</label>
                     <input 
                     onChange={this.handleChanges} 
                     text= "text"
                     name="item"
                    
                     placeholder='Task Name'
                     />
                    <button>New Task</button>
                      
                     
                 </form>
             </div>
         )
     }

 }
 export default TodoForm;