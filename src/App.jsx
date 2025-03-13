import React, { useState } from "react";
import { addUser, editUser } from "./Feature/userSlice";
import { useDispatch, useSelector } from "react-redux";
const App = () => {
  const state = useSelector((state) => state.user);
  const [edit, setEdit] = useState(false);
  console.log(state);
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    name: "",
    email: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (edit) {
      console.log("edit");
      dispatch(editUser(input)); 
    } else {
      dispatch(addUser(input));
      setInput({ name: "", email: "" });
    }
  };
  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleEdit = (item) => {
    setEdit(true);
    setInput(item);
    
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={input.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          value={input.email}
          onChange={handleChange}
        />
        <button> submit</button>
      </form>
      {state.user.map((item) => (
        <div key={item.id}>
          <h1>{item.name}</h1>
          <h1>{item.email}</h1>{" "}
          <button onClick={() => handleEdit(item)}>edit</button>
        </div>
      ))}
    </div>
  );
};

export default App;
