import { useSelector } from "react-redux";
import { TodoArray } from "../store/slice/todoSlice";

import TodoList from "../components/common/TodoList";

const MonthPage = () => {
  const { month } = useSelector(TodoArray);

  return (
    <div>
      <TodoList todo={month} />
    </div>
  );
};

export default MonthPage;
