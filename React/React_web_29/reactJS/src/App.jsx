import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  // Ví dj sử dụng useEffect để đồng bộ trạng thái ứng dụng React với Server
  // Trạng thái của React => Client State (useState)
  // dữ liệu luu ở Server => Server State (jsonplaceholder)

  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const rows = users.map((user) => (
    <tr key={user.id}>
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>{user.address.street}</td>
      <td>{user.webstie}</td>
      <td>{user.company.name}</td>
    </tr>
  ));
  
  return (
    <div className="App">
      <table>
        <caption>Users table</caption>
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Address</th>
            <th>Website</th>
            <th>Company</th>
          </tr>
        </thead>
      </table>
    </div>
  );
}

export default App;
