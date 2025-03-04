import React, { useEffect, useState } from "react";

import "./Todo.css";
import { TodoForm } from "./Todo form";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";
import { getLocalStoregeTodoData, setLocalStoregeTodoData } from "./Todolocalstorege";



export const Todo = () => {
  const [task, setTask] = useState(() => getLocalStoregeTodoData() );


  const handleFormSubmit = (inputValue) => {
    const { id, content, checked} = inputValue;
    // to check if the input field is empty or not 
    if (!content) return;
    // to check the data is already existing or not
 
    // if (task.includes(inputValue)) return;
    const ifTodoContentMatched = task.find(
      (curTask) => curTask.content === content
    )
    if (ifTodoContentMatched) return;
    setTask((prevTask) => [...prevTask, {id ,content , checked} ]);
  };


  
// todo add data to localStorege
setLocalStoregeTodoData(task);



  // todo handleDeletTodo function
  const handleDeletTodo = (value) => {
    const updatedTask = task.filter((curTask) => curTask.content !== value);
    setTask(updatedTask);
  };

  // todo handleclearTodoData functionality
  const handleclearTodoData = () => {
    setTask([]);
  };

// todo HandleCheckedTodo functionality
const handleCheckedTodo = (content) => {
  const updatedTask = task.map((curTask) => {
    if(curTask.content === content){
      return{...curTask, checked: !curTask.checked};
    }else{
      return curTask;
    }
  })
  setTask(updatedTask);
}




  return (
    <section className="todo-container" >
      <header>
        <h1>Todo List </h1>
        <TodoDate/>
      </header>
      <TodoForm onAddTodo={handleFormSubmit} />
      <section className="myUnOrdList">
        <ul>
          {task.map((curTask) => {
            return (
              <TodoList
                key={curTask.id}
                data={curTask.content}
                checked={curTask.checked}
                onHandleDeleteTodo={handleDeletTodo}
                onHandleCheckedTodo={handleCheckedTodo}
              />
            );
          })}
        </ul>
      </section>
      <section>
        <button className="clear-btn" onClick={handleclearTodoData}>
          clear all
        </button>
      </section>
    </section>
  );
};

export default Todo;
