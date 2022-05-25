import axios from "axios";
import { useState } from "react";
import "./App.css";

const App = () => {
  let [posts, setPosts] = useState([]);

  function getData() {
    const url = "https://jsonplaceholder.typicode.com/posts";
    axios
      .get(url)
      .then(function (response) {
        setPosts(response.data);
        console.log("성공");
      })
      .catch(function (error) {
        console.log("실패");
      });
  }

  if (posts.length > 0) {
    return posts.map((post) => (
      <div key={post.id}>
        <p>title : {post.title}</p>
        <p>content : {post.body}</p>
      </div>
    ));
  } else {
    return (
      <div>
        <button onClick={getData}> 불러오기 </button>
      </div>
    );
  }
};

export default App;
