import { useState } from "react";
import reactLogo from "./assets/react.svg";
import styles from "./App.module.css";

const courses = [
  {
    id: 1,
    name: "Javascript",
  },
  {
    id: 2,
    name: "Typescript",
  },
  {
    id: 3,
    name: "PHP",
  },
];

function App() {
  const [checked, setChecked] = useState([]);

  const handleCheck = (id) => {
    setChecked((prev) => {
      const isCheck = checked.includes(id);

      if (isCheck) {
        return checked.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const handleSubmit = () => {
    console.log({ id: checked });
  };

  return (
    <div>
      {courses.map((course) => (
        <div key={course.id}>
          <input
            type="checkbox"
            checked={checked.includes(course.id)}
            onChange={() => handleCheck(course.id)}
          />
          {course.name}
        </div>
      ))}
      <button onClick={handleSubmit}>Click</button>
    </div>
  );
}

export default App;
