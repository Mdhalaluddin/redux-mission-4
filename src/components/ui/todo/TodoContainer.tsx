import AddTodoModel from "./AddTodoModel";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

export default function TodoContainer() {
  return (
    <div>
      <div>
        <div className="flex justify-between mb-5">
          <AddTodoModel />
          <TodoFilter />
        </div>
        <div className="bg-primary-gradient w-full h-full rounded-xl p-[5px] ">
          <div className="bg-white p-5 w-full h-full rounded-xl space-y-3">
            <TodoCard></TodoCard>
            <TodoCard></TodoCard>
            <TodoCard></TodoCard>
            <TodoCard></TodoCard>
          </div>
        </div>
      </div>
    </div>
  );
}
