import Category from "../DirectoryItem/DirectoryItem";
import "./directory.scss";
const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((c) => {
        return <Category key={c.id} category={c} />;
      })}
    </div>
  );
};

export default Directory;
