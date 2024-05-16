import React from "react";
import "../assets/style/todo.css";

const Todo = ({ todo, onDeleteHandler, onCompleteHandler }) => {
  return (
    <div className="todo_container">
      <div className="todo_text_container">
        <h4>{todo.title}</h4>
        <p>{todo.content}</p>
      </div>
      <button onClick={() => onDeleteHandler(todo.id)} className="delete_btn">
        삭제
      </button>
      {/* 자식 컴포넌트에 props(프로퍼티)로 이벤트 핸들러나 함수를 전달하여 사용할 때에는 바인딩 필요 하고, 
      화살표함수를 통해 할 수 있으며, 매개변수를 받아 사용 가능 */}
      <button
        onClick={() => onCompleteHandler(todo.id)}
        className="complete_btn"
      >
        {todo.isDone ? "취소" : "완료"}
      </button>
    </div>
  );
};
export default Todo;
