import React from 'react'



 class TodoForm extends React.Component {
     render () {
         return (
             <div>
                
                 <form>
                     <label>Name:</label>
                     <input
                     text= "text"
                     name="name"
                     value={this.task}
                     placeholder='Task Name'
                     />
                    
                      
                     
                 </form>
             </div>
         )
     }

 }
 export default TodoForm;