import "./categories.styles.scss";
import { categories } from "./Components/category-menu/categoryMenu";
import Directory from './Components/Directory/Directory';

const App = () => {


  return (
    <div className="">
      <Directory categories={categories} />
    </div>

  );
}


export default App;
