import React from 'react';

export const IncompleteTodos = (props) => {
    const {todos, onClickComplete, onClickDelete} = props;
    return (
        <div className="imcomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {todos.map((todo, index) => { //indexを書くことで要素に番号を振る
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
    );
};

