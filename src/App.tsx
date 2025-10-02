import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Posts from "./pages/Posts"
import LogIn from "./pages/LogIn"
import SignUp from "./pages/SignUp"
import ThemeProvider from "./components/ThemeContext"


const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
  
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<Posts />} />
          </Route>
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App