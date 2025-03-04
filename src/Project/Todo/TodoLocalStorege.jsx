const todokey = "reactTodo";

export const getLocalStoregeTodoData = () => {
    const rawTodos = localStorage.getItem(todokey)
    if (!rawTodos) return[];
    return JSON.parse(rawTodos);
   };


   export const setLocalStoregeTodoData = (task) => {
   return localStorage.setItem("todokey",JSON.stringify(task) );
   };