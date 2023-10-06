

import { Route, Routes } from "react-router-dom"

import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/home"
import PostDetail from "./pages/PostDetail"

const App = () => {
  return (
    <div>
   
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/register" element={<Register/>}/>
          <Route exact path="/posts/post/:id" element={<PostDetail/>}/>
        </Routes>

    </div>
  )
}

export default App