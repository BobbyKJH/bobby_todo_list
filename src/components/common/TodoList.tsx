const TodoList = ({ todo }: { todo: string[] }) => {
  return (
    <div>
      {todo.map((list: string) => (
        <div>{list}</div>
      ))}
    </div>
  );
};

export default TodoList;
