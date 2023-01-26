import { useDispatch, useSelector } from "react-redux";
import TodoList from "../components/common/TodoList";
import useTodo from "../hooks/useTodo";
import { dayTodo, TodoArray } from "../store/slice/todoSlice";

interface todo {
  f: string[];
}

const DayPage = () => {
  const dispatch = useDispatch();

  const { day } = useSelector(TodoArray);
  const { todo, setTodo, onChangeTodo } = useTodo();

  const dayListAdd = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(dayTodo([todo, ...day]));
    setTodo("");
  };

  return (
    <div>
      <form onSubmit={dayListAdd}>
        <input type="text" value={todo} onChange={onChangeTodo} />
        <button type="submit">추가</button>
      </form>

      <TodoList todo={day} />
    </div>
  );
};

export default DayPage;
