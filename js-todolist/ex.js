const form = document.getElementById("form");
const input = document.getElementById("input");
const todosUL = document.getElementById("todos"); // ul tag

const todos = JSON.parse(localStorage.getItem("todos")); // ul 내용을 저장

if (todos) {
  todos.forEach((todo) => addTodo(todo)); // 저장된 내용을 하나씩 돌면서 addTodo()로 보냄
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  addTodo();
});

function addTodo(todo) {
  // todo 저장하는 함수
  let todoText = input.value; // input에 입력한 text = todoText

  if (todo) {
    todoText = todo.text; // 입력한 text 값을 => todoText에 넣음
  }

  if (todoText) {
    // todoText가 있다면
    const todoEl = document.createElement("li"); // li 태그 생성
    if (todo && todo.completed) {
      // todo가 truthy하면 결과는 todo의 completed
      todoEl.classList.add("completed"); // li 태그에 class 이름 추가
    }

    todoEl.innerText = todoText; // li 태그 안의 값 = 입력한 text 값

    todoEl.addEventListener("click", () => {
      // li 태그를 클릭하면
      todoEl.classList.toggle("completed"); // li 태그에 toggle 기능 : completed가 있으면 없애고, 없으면 추가
      updateLS(); //updateLS() 함수 실행
    });

    todoEl.addEventListener("contextmenu", (e) => {
      // 마우스 우클릭하면
      e.preventDefault(); // 이벤트 발생 막음

      todoEl.remove(); // li 삭제
      updateLS();
    });

    todosUL.appendChild(todoEl); // ul 태그에 li 태그를 자식으로 추가

    input.value = ""; // input의 기본값

    updateLS();
  }
}

function updateLS() {
  todosEl = document.querySelectorAll("li"); // li 태그 모두 선택해서

  const todos = []; // 빈 배열 생성

  todosEl.forEach((todoEl) => {
    // todoE1을 돌면서 요소 하나씩
    todos.push({
      // 배열 요소로 담기
      text: todoEl.innerText, // text는 li 태그 안 텍스트
      completed: todoEl.classList.contains("completed"), //completed는 li태그의 classList 추가
    });
  });

  localStorage.setItem("todos", JSON.stringify(todos)); // localStorage에 배열의 값을 저장
}
