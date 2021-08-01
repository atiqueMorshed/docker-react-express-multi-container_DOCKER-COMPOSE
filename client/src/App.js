import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    const getUsers = async () => {
      const data = await axios.get("http://localhost:5000");
      setUser(data.data);
    };
    getUsers();
  }, []);

  return (
    <div className="App">
      <p>List:</p>
      <ul>
        {user?.map((person) => (
          <li>
            {person.name}: {person.profession}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
