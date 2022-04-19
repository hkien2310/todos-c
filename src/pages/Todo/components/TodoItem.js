import { Link } from "react-router-dom";
import Label from "../../../components/Label";
import appPaths from "../../../constants/appPaths";

const TodoItem = ({ el, data, setData }) => {
  const changeData = () => {
    const index = data.findIndex((index) => index.id === el.id);
    const newData = [...data];
    newData.splice(index, 1, { ...el, completed: !el.completed });
    setData(newData);
  };

  const onChange = async (e) => {
    await changeData();
  };

  return (
    <div className="todo-item">
      <Link to={appPaths.todo.detailWithId(el.id)} className={`col-12 title`}>
        <Label
          htmlFor={`check-${el.id}`}
          className={`${el.completed ? "done" : ""}`}
        >
          <span>{el.title}</span>
        </Label>
      </Link>

      <input
        id={`check-${el.id}`}
        type="checkbox"
        style={{ float: "right" }}
        checked={el.completed}
        onChange={(e) => onChange(e)}
        className="check-box"
      />
    </div>
  );
};
export default TodoItem;
