import { Route, Routes } from "react-router-dom";
import AddList from "./Components/AddList";
import DeleteList from "./Components/DeleteList";
import Home from "./Components/Home";
import Header from "./Components/Header";
import UpdateList from "./Components/UpdateList";



function App() {
  return (
    <div className="App">
       <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path="/add" element={<AddList />} />
        <Route path="/update" element={<UpdateList />} />
        <Route path="/delete" element={<DeleteList />} />
      </Routes>
    </div>
  );
}

export default App;
