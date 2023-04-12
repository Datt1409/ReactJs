import { Form, useLoaderData, useSubmit } from "react-router-dom";

export default function Todo() {
  const todos = useLoaderData();
  const submit = useSubmit();
  // Form, useSubmit, useFetcher

  return (
    <div>
      <h1>Todolist</h1>

      <Form method="POST">
        <input name="title" placeholder="What's todo?" />
        <button>Add</button>
      </Form>

      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => {
                const formData = new FormData();
                formData.append("id", todo._id);
                formData.append("title", todo.title);
                formData.append("completed", todo.completed);
                submit(formData, { method: "PUT" });
              }}
            />
            {todo.title}
            <button
              onClick={() => {
                const formData = new FormData();
                formData.append("id", todo._id);

                submit(formData, { method: "DELETE" });
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const todoLoader = () =>
  fetch("https://todoapi-fawn.vercel.app/api/todos", {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MTMwNjgxZGQwODE5YzhkZTBkOWRmNiIsImlhdCI6MTY3ODk2ODQ2NH0.yJvypscwyIQi2mzBuqP41IouAbnrYWLZSeohljcXbsA",
    },
  });

export const todoActions = async ({ context, params, request }) => {
  const formData = await request.formData();

  switch (request.method) {
    case "POST": {
      const title = formData.get("title");

      return fetch("https://todoapi-fawn.vercel.app/api/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MTMwNjgxZGQwODE5YzhkZTBkOWRmNiIsImlhdCI6MTY3ODk2ODQ2NH0.yJvypscwyIQi2mzBuqP41IouAbnrYWLZSeohljcXbsA",
        },
        body: JSON.stringify({ title, completed: false }),
      });
    }

    case "DELETE": {
      const id = formData.get("id");
      console.log(id);
      return fetch("https://todoapi-fawn.vercel.app/api/todos/" + id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MTMwNjgxZGQwODE5YzhkZTBkOWRmNiIsImlhdCI6MTY3ODk2ODQ2NH0.yJvypscwyIQi2mzBuqP41IouAbnrYWLZSeohljcXbsA",
        },
      });
    }

    case "PUT": {
      const id = formData.get("id");
      const title = formData.get("title");
      const completed = formData.get("completed");

      return fetch("https://todoapi-fawn.vercel.app/api/todos/" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MTMwNjgxZGQwODE5YzhkZTBkOWRmNiIsImlhdCI6MTY3ODk2ODQ2NH0.yJvypscwyIQi2mzBuqP41IouAbnrYWLZSeohljcXbsA",
        },
        body: JSON.stringify({ title, completed }),
      });
    }
  }
};
