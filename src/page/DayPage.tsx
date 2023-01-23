import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoList from "../components/common/TodoList";
import useTodo from "../hooks/useTodo";
import { increment } from "../store/slice/countSlice";
import { dayTodo, TodoArray } from "../store/slice/todoSlice";
import useSave from "../hooks/useSave";

interface todo {
  f: string[];
}

const DayPage = () => {
  const dispatch = useDispatch();

  const { day } = useSelector(TodoArray);
  const { todo, onChangeTodo } = useTodo();

  const dayListAdd = () => {
    dispatch(dayTodo([todo, ...day]));
  };

  return (
    <div>
      <input type="text" value={todo} onChange={onChangeTodo} />
      <button onClick={dayListAdd}>추가</button>

      <TodoList todo={day} />
    </div>
  );
};

export default DayPage;
