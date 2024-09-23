import React from "react";
import "../assets/style/list.css";
import Todo from "./Todo";

const TodoList = ({
  todos,
  setTodos,
  isDone,
  onCompleteHandler,
  onDeleteHandler,
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
  // 다른 형제 컴포넌트들의 event에 의해 부모컴포넌트에서 수정된 props들을 넘겨 받는다.

  // todos 배열에서 todo.id가 피라미터와(selectedId) 일치하지 않는 요소만 추출해서 새로운 배열을 만듦.
  const onDeleteHandler = (selectedId) => {
    const remainedTodos = todos.filter((todo) => {
      return todo.id !== selectedId;
    });
    setTodos(remainedTodos);
  };

  // 완료 됬을때 누르면 isDone이 false -> true로 변경되면서 Done
  const onCompleteHandler = (selectedId) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === selectedId) {
        return { ...todo, isDone: !todo.isDone };
      } else {
        return { ...todo };
      }
    });
    setTodos(newTodos);
  };

  return (
    <div className="list_container">
      <h3>KeepGoing</h3>
      <TodoList
        todos={todos}
        setTodos={setTodos}
        isDone={false}
        onCompleteHandler={onCompleteHandler}
        onDeleteHandler={onDeleteHandler}
      />
      <h3>Done</h3>
      <TodoList
        todos={todos}
        setTodos={setTodos}
        isDone={true}
        onCompleteHandler={onCompleteHandler}
        onDeleteHandler={onDeleteHandler}
      />
    </div>
  );
};

export default List;
