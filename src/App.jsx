import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [imcompleteTodos, setImcompleteTodos] = useState(['あ', 'い']);
  const [completeTodos, setCompleteTodos] = useState(['う']);
  return (
  <>  
    <div className="input-area">
      <input placeholder="TODOを入力" />
      <button>追加</button>
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
