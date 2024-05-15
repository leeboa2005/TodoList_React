import React, { useState } from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Form from "../components/Form";
import List from "../components/List";

// 자식 컴포넌트들끼리의 정보 교환을 위해 공통된 상위 컴포넌트 TodoList에 넘겨 줄 useState선언함
const TodoList = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "코드 카타",
      content: "알고리즘 문제 풀어보기",
      isDone: false,
    },
    {
      id: 3,
      title: "TIL 작성",
      content: "스터디 공부 내용 정리하기",
      isDone: true,
    },
  ]);

  return (
    <Layout>
      <Header />
      <Form todos={todos} setTodos={setTodos} />
      <List todos={todos} setTodos={setTodos} />
    </Layout>
  );
};

export default TodoList;
