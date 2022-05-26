const inputText = document.querySelector(".input-text");
const addButton = document.querySelector(".add-button");
const likeButtons = document.querySelectorAll(".like");
const list = document.querySelector(".list"); // ul tag

const todos = JSON.parse(localStorage.getItem(".list")); // ul 내용 저장

// if (todos) {
//   todos.forEach((todo) => addItem(todo)); // addTodo()로 ul tag 내용 보냄
//}

function addItem(todo) {
  // todo 저장하는 함수
  let todoText = inputText.value; // input tag에 입력한 값 = todoText

  if (todo) {
    // input tag에 입력한 값이 있다면
    todoText = todo.text;
  }

  if (todoText) {
    const li = document.createElement("li");

    // like
    const like = document.createElement("span");
    const likeIcon = document.createElement("i");
    like.classList.add("like");
    likeIcon.classList.add("material-icons");
    likeIcon.innerText = "favorite_border";
    like.appendChild(likeIcon);

    // item
    const item = document.createElement("span");
    item.classList.add("item");
    todoText = item.innerText;

    // manage
    const manage = document.createElement("sapn");
    const checkIcon = document.createElement("i");
    const clearIcon = document.createElement("i");
    checkIcon.classList.add("material-icons", "check");
    clearIcon.classList.add("material-icons", "clear");
    checkIcon.innerText = "check";
    clearIcon.innerText = "clear";
    manage.classList.add("manage");
    manage.appendChild(checkIcon);
    manage.appendChild(clearIcon);

    // click : favorite
    like.addEventListener("click", (e) => {
      const target = e.target;
      const text =
        target.innerText === "favorite" ? "favorite_border" : "favorite";
      target.innerText = text;
    });

    // click : done
    checkIcon.addEventListener("click", (e) => {
      const target = e.target.parentNode.parentNode;
      target.classList.add("done");
    });

    // click : remove
    clearIcon.addEventListener("click", (e) => {
      const target = e.target.parentNode.parentNode;
      list.removeChild(target);
    });

    li.appendChild(like);
    li.appendChild(item);
    li.appendChild(manage);
    li.appendChild(li);

    // reset
    inputText.value = "";
    inputText.focus();

    localStorage.setItem("todos", JSON.stringify(todos));

    inputText.addEventListener("keypress", (e) => {
      if (e.keyCode === 13) {
        addItem();
      }
    });

    addButton.addEventListener("click", addItem);
  }
}
