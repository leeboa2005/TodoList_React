import React, { useState, useRef } from "react";
import "../assets/style/form.css";

const Form = ({ todos, setTodos }) => {
  const initialState = { id: 0, title: "", content: "", isDone: false }; //초기값

  // 부모 컴포넌트인 TodoList에서 선언한 useState가 화면에 처음 출력되는 값이라면,
  //여기서 선언한 useState는 input에서 받은 value를 저장한다.
  const [inputTodo, setInputTodo] = useState(initialState);

  //고유 id값을 설정해주기 위해 useRef사용 ** useRef: 관리하는 값은 값이 변해도 화면이 렌더링되지 않음 -> onSubmitHandler가 실행 될때 렌더링됨
  const nextId = useRef(3);

  const onChangeHandler = (event) => {
    //객체 비구조화 할당으로 인해 event.target.name과 event.target.value에서 value와 name을 추출해 사용할 수 있게 된다.
    const { value, name } = event.target;

    // 스프레드 연산자를 사용하여 새 객체를 생성한다.
    setInputTodo({ ...inputTodo, [name]: value, id: nextId.current });
    nextId.current++; // 함수가 실행될때마다 아이디도 하나씩 같이 증가
  };
  // title, content값이 둘중 하나라도 작성 되지 않으면 alert창을 띄우고 동작하지 않는다.
  const onSubmitHandler = (event) => {
    if (!inputTodo.title || !inputTodo.content) {
      alert("제목 및 내용을 작성해주세요.");
      return;
    } else {
      event.preventDefault(); // submit을 하면 자동으로 페이지를 리랜더링하는데 정보 유실을 막기위해 사용
      setTodos([...todos, inputTodo]);
      setInputTodo(initialState); // input창을 빈칸으로
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="form_container">
      <div className="input_container">
        <label>제목</label>
        <input
          type="text"
          name="title"
          onChange={onChangeHandler}
          value={inputTodo.title}
        />
        <label>내용</label>
        <input
          type="text"
          name="content"
          onChange={onChangeHandler}
          value={inputTodo.content}
        />
      </div>
      <button>추가하기</button>
    </form>
  );
};
export default Form;
