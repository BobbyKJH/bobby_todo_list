const TodoList = ({ todo }: { todo: string[] }) => {
  return (
    <div>
      {todo.map((list: string, idx: number) => (
        <div>
          {idx + 1}.{list}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
