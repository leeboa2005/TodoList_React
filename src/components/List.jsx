import React from "react";
import "../assets/style/list.css";
import Todo from "./Todo";

// Todo 항목을 렌더링하는 컴포넌트
const TodoList = ({
  todos,
  setTodos,
  isDone,
  onDeleteHandler,
  onCompleteHandler,
}) => {
  return (
    <ul className="list_wrap">
      {todos
        .filter((todo) => todo.isDone === isDone)
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
  );
};

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
      return todo; // 변경하지 않은 Todo는 그대로 반환
    });
    setTodos(newTodos);
  };

  // 각 상태에 대한 정보를 담은 배열
  const statuses = [
    { label: "KeepGoing", isDone: false },
    { label: "Done", isDone: true },
  ];

  return (
    <div className="list_container">
      {statuses.map(({ label, isDone }) => (
        <div key={label}>
          <h3>{label}</h3>
          <TodoList
            todos={todos}
            setTodos={setTodos}
            isDone={isDone} // 상태에 따라 TodoList에 전달
            onDeleteHandler={onDeleteHandler}
            onCompleteHandler={onCompleteHandler}
          />
        </div>
      ))}
    </div>
  );
};

export default List;
