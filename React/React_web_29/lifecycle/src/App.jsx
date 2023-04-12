import { useEffect, useState } from "react";

function App() {
    // Ví dụ sử dụng useEffect để đồng bộ trạng thái ứng dụng React với Server
    // Trạng thái của React => Client State (useState)
    // Dữ liệu lưu ở Server => Server State (jsonplaceholder)

    const [users, setUsers] = useState([]);

    const [newUserInfo, setNewUserInfo] = useState({});

    const handleInputChange = (e) => {
        setNewUserInfo((previous) => {
            return {
                ...previous,
                [e.target.name]: e.target.value,
            };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUserInfo),
        })
            .then((res) => res.json())
            .then((data) => {
                setUsers((previous) => {
                    return [...previous, data];
                });
            })
            .catch((err) => {
                console.error(err);
            });
    };

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
            <td>{user.website}</td>
            <td>{user.company.name}</td>
        </tr>
    ));

    return (
        <div className="App">
            <form style={{ display: "flex" }} onSubmit={handleSubmit}>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        onChange={handleInputChange}
                    />
                </div>

                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        onChange={handleInputChange}
                    />
                </div>

                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        onChange={handleInputChange}
                    />
                </div>

                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <label htmlFor="address">Address</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        onChange={handleInputChange}
                    />
                </div>

                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <label htmlFor="website">Website</label>
                    <input
                        type="text"
                        id="website"
                        name="website"
                        onChange={handleInputChange}
                    />
                </div>

                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <label htmlFor="company">Company</label>
                    <input
                        type="text"
                        id="company"
                        name="company"
                        onChange={handleInputChange}
                    />
                </div>

                <div style={{ alignSelf: "flex-end" }}>
                    <button>Save</button>
                </div>
            </form>
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

                <tbody>{rows}</tbody>
            </table>
        </div>
    );
}

export default App;

// Event
// useRef vs useState
// Cách hủy request khi re-render
// Custom hook (cho ví dụ cụ thể)