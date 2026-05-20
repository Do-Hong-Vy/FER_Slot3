import "./App.css";
import { useState } from "react";

let today = new Date().toLocaleDateString();
let timeNow = new Date().toLocaleTimeString();

const title = ["My React App", "This is my React App", "Create by Do Hong Vy"];

function titleRandom() {
  const randomIndex = Math.floor(Math.random() * title.length);
  return title[randomIndex];
}

function Header() {
  const name = "Do Hong Vy";
  const age = 20;
  const email = "do.hong.vy@example.com";
  const isLoggedIn = true;
  const item = ["Item 1", "Item 2", "Item 3"];
  const title1 = titleRandom;
  const [isToggled, setIsToggled] = useState(false);
  function handleToggle() {
    setIsToggled((prev) => !prev);
  }
  return (
    <>
      <h1 style={{ color: "red" }}>{title[0]}</h1>
      <p>{title1()}</p>
      <p>{title1()}</p>
      <p>
        Today is {today} Now is {timeNow}
      </p>
      {/* jsx voi bieu thuc */}
      <h2>{2 + 3}</h2>
      {/* jsx voi toan tu Ternary */}
      <p>{isLoggedIn ? "You are logged in." : "Please log in."}</p>
      {/* jsx voi mang, render danh sach */}
      <ul>
        {item.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {/* jsx voi object */}
      <div>
        <h3>User Information</h3>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Email: {email}</p>
      </div>
      {/* jsx voi image*/}
      <div style={{ textAlign: "center" }}>
        <img src="src/assets/hero.png" alt="Hero" width="100" />
      </div>
      {/* button doi qua lai giua 2 trang thai */}
      <div style={{ textAlign: "center", marginTop: 12 }}>
        <button onClick={handleToggle}>
          {isToggled ? "Follow me" : "Unfollow"}
        </button>
      </div>
    </>
  );
}

function Count() {
  const [count, setCount] = useState(0);
  function handleIncrease() {
    setCount(count + 1);
  }
  function handleDecrease() {
    setCount(count - 1);
  }
  return (
    <div style={{ textAlign: "center", marginTop: 12 }}>
      <h2>Count: {count}</h2>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
}

function App() {
  return (
    <>
      <Header />
      <Count />
    </>
  );
}

export default App;
