import React from "react";
import "../assets/style/list.css";
import Todo from "./Todo";

const List = ({ todos, setTodos }) => {
  // 선택된 Todo 항목을 삭제하는 핸들러
  const onDeleteHandler = (selectedId) => {
    const remainedTodos = todos.filter((todo) => todo.id !== selectedId);
    setTodos(remainedTodos);
  };

  // 선택된 Todo 항목의 완료 상태를 토글하는 핸들러
  const onCompleteHandler = (selectedId) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === selectedId) {
        return { ...todo, isDone: !todo.isDone }; // isDone 상태 변경
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <div className="list_container">
      {/* 상태에 따른 Todo 항목을 렌더링 */}
      <h3>KeepGoing</h3>
      <ul className="list_wrap">
        {todos
          .filter((todo) => !todo.isDone) // KeepGoing 상태 필터링
          .map((todo) => (
            <Todo
              todo={todo}
              key={todo.id}
              setTodos={setTodos}
              onDeleteHandler={onDeleteHandler}
              onCompleteHandler={onCompleteHandler}
            />
          ))}
      </ul>

      <h3>Done</h3>
      <ul className="list_wrap">
        {todos
          .filter((todo) => todo.isDone) // Done 상태 필터링
          .map((todo) => (
            <Todo
              todo={todo}
              key={todo.id}
              setTodos={setTodos}
              onDeleteHandler={onDeleteHandler}
              onCompleteHandler={onCompleteHandler}
            />
          ))}
      </ul>
    </div>
  );
};

export default List;
