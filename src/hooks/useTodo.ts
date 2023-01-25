import { useState, useCallback } from "react";

const useTodo = () => {
  const [todo, setTodo] = useState("");

  const onChangeTodo = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.currentTarget;
      setTodo(value);
    },
    [todo]
  );

  return { todo, setTodo, onChangeTodo };
};

export default useTodo;
