import React from "react";

export const InputTodo = (props) => {
 return (
    <div className="input-area">
      <input 
        placeholder="TODOを入力" 
        value={todoText} 
        onChange={onChangeTodoText}/>
      <button onClick={onClickAdd}>追加</button>
    </div>
 );   
};