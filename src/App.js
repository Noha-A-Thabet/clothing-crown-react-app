import Home from "./Routes/Home/Home.jsx"
import { Routes, Route } from "react-router-dom";
import Navigation from "./Routes/Navigation/Navigation.jsx";
import Authentication from './Routes/Authentication/authentication.jsx';
import Shop from "../src/Routes/shop/Shop.jsx"

const App = () => {
  return (

    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/auth" element={<Authentication />} />
      </Route>
    </Routes>


  )
}

export default App;