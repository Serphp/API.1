import { useEffect, useState } from "react";

const App = () => {
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState([]);

    useEffect(() => {
      console.log("useEffect");

      fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data)
      });
    },[])

    return (
      <div className="content">
      <h1> UseEffect </h1>
      <button className="" onClick={() => setCounter(counter + 1)}>
        Count {counter}
      </button>
      <ul>
        {
          users.map((user) => (<li key={user.id}>{user.username}</li>))
        }
      </ul>
      </div>
  );
};

export default App;