import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState('');
  const [imcompleteTodos, setIncompleteTodos] = useState(['あ', 'い']);
  const [completeTodos, setCompleteTodos] = useState(['う']);
  const onChangeTodoText = (event) => setTodoText(event.target.value);//inputフォームに値を入力できるようにする
  const onClickAdd = () => { //追加ボタンを押すと入力フォームの値を未完了のTODOに追加
    if(todoText === "") return;//入力が空文字なら追加できないようにする
    const newTodos = [...imcompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");//追加ボタンを押した後に入力フォームを空文字にする
  }
  return (
  <>  
    <div className="input-area">
      <input placeholder="TODOを入力" value={todoText} onChange={onChangeTodoText}/>
      <button onClick={onClickAdd}>追加</button>
    </div>
    <div className="imcomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {imcompleteTodos.map((todo) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button>完了</button>
              <button>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
    <div className="complete-area">
      <p className="title">完了のTODO</p>
      <ul>
        {completeTodos.map((todo) => {
          return (
            <div key={todo} className="list-row">
          <li>{todo}</li>
          <button>戻す</button>
        </div>
          );
        })}
      </ul>
    </div>
  </>
  );
};
