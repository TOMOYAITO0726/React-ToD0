import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";

export const App = () => {
  const [todoText, setTodoText] = useState('');
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);
  const onChangeTodoText = (event) => setTodoText(event.target.value);//inputフォームに値を入力できるようにする
  const onClickAdd = () => { //追加ボタンを押すと入力フォームの値を未完了のTODOに追加
    if(todoText === "") return;//入力が空文字なら追加できないようにする
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");//追加ボタンを押した後に入力フォームを空文字にする
  }

  const onClickDelete = (index) => { //削除ボタンを押すと、ToDoから削除されるようになる
    const newTodos = [...incompleteTodos];//未完了のTODOをコピーした新しい配列を作成
    newTodos.splice(index, 1);//配列から要素を削除する 1個削除するから１？
    setIncompleteTodos(newTodos);//新しい未完了のTODOリストをnewTodos配列で更新する。
  }

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];//未完了のTODOをコピーした新しい配列を作成
    newIncompleteTodos.splice(index, 1);//配列から要素を削除する
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    //completeTodosが現在の完了のTODOでincompleteTodosが追加される完了のTODO（未完了のTODOで完了を押されたTODO）
    setIncompleteTodos(newIncompleteTodos);//未完了のTODOリストを更新
    setCompleteTodos(newCompleteTodos);//完了のTODOリストを更新
  }

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  }
  return (
  <>  
    <InputTodo todoText={todoText} onChange={onChangeTodoText} onClick={onClickAdd} />
    <div className="imcomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {incompleteTodos.map((todo, index) => { //indexを書くことで要素に番号を振る
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button> 
            </div>
          );
        })}
      </ul>
    </div>
    <div className="complete-area">
      <p className="title">完了のTODO</p>
      <ul>
        {completeTodos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
          <li>{todo}</li>
          <button onClick={() => onClickBack(index) }>戻す</button>
        </div>
          );
        })}
      </ul>
    </div>
  </>
  );
};
