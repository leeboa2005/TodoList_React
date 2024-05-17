import React, { useState } from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import TodoForm from '../components/TodoForm';
import List from '../components/List';
import { nanoid } from 'nanoid';

// 자식 컴포넌트들끼리의 정보 교환을 위해 공통된 상위 컴포넌트 TodoList에 넘겨 줄 useState선언함
const TodoList = () => {
    const [todos, setTodos] = useState([
        {
            id: nanoid(),
            title: '코드 카타',
            content: '알고리즘 문제 풀어보기',
            isDone: true,
        },
        {
            id: nanoid(),
            title: 'TIL 작성',
            content: '스터디 공부 내용 정리하기',
            isDone: true,
        },
        {
            id: nanoid(),
            title: '리엑트 공부하기',
            content: '리엑트 관련 공부 정리하기',
            isDone: false,
        },
    ]);
    return (
        <Layout>
            <Header />
            <TodoForm todos={todos} setTodos={setTodos} />
            <List todos={todos} setTodos={setTodos} />
        </Layout>
    );
};

export default TodoList;
