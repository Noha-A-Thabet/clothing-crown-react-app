import Home from "./Routes/Home/Home.jsx"
import { Routes, Route } from "react-router-dom";
import Navigation from "./Routes/Navigation/Navigation.jsx";
import SignIn from "./Routes/sign-in/signIn.jsx";
const Shop = () => {
  return <h1>Iam A Shop Component</h1>
}

const App = () => {
  return (

    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="signIn" element={<SignIn />} />
      </Route>
    </Routes>


  )
}

export default App;