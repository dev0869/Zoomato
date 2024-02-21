<<<<<<< HEAD
import Layout from "./layout/Layout";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Product from "./pages/Product/Product";
import Restraunant from "./pages/Restraunant/Restraunant";
import AdminPanel from "./pages/Admin/AdminPanel";
=======
import { useEffect, useState } from "react";

>>>>>>> 45587335abecff43c48954c9a9391dfe69578b35
const App = () => {
  const [input, setInput] = useState("");

  const [todos, setTodos] = useState([]);
  const [pika, setPika] = useState<[] | undefined>([]);
  console.log(todos);
  const handleSubmit = (e) => {
    e.preventDefault();
    setInput(e.target.value);
    if (input.trim() !== "") {
      const updaeteddata = [...todos, input];
      setTodos(updaeteddata);
      localStorage.setItem("todos", JSON.stringify(updaeteddata));
    }
  };
  const handleUpdate = (id, newValue) => {
    const updatedTodos = [...todos];
    updatedTodos[id] = newValue;
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };
  const handleDelete = (id) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(id, 1);
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };
  useEffect(() => {
    const poke = JSON.parse(localStorage.getItem("todos"));
    if (poke) {
      setPika(poke);
    }
  }, [todos]);

  return (
<<<<<<< HEAD
    <Layout>
      <Routes>
        <Route path="/" index element={<Home />}></Route>
        <Route path="/Products/:id" element={<Product />}></Route>
        <Route path="/partner-with-us" element={<Restraunant />}></Route>
        <Route
          path="/partner-with-us/DashBoard"
          element={<AdminPanel />}
        ></Route>
      </Routes>
    </Layout>
=======
    <>
      <div className="flex justify-center">
        <h1>Todo</h1>
        <br />
        <div>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={handleSubmit}>submit</button>
        </div>
      </div>
      {pika.map((todo, id) => (
        <div key={id} className="flex items-center flex-col">
          <div className="flex gap-3">
            <input
              type="text"
              value={todo}
              onChange={(e) => handleUpdate(id, e.target.value)}
            />
            <button
              onClick={() => handleDelete(id)}
              className="bg-red-500 text-white p-2 rounded-lg flex items-center"
            >
              del
            </button>
          </div>
        </div>
      ))}
    </>
>>>>>>> 45587335abecff43c48954c9a9391dfe69578b35
  );
};

export default App;
