import { Button } from "../button";
import AddTodoModel from "./AddTodoModel";
import TodoCard from "./TodoCard";

export default function TodoContainer() {
  return (
    <div>
      <div>
        <div className="flex justify-between mb-5">
          <Button className="bg-primary-gradient text-xl font-semibold">
            Add todo
          </Button>
          <AddTodoModel />
          <Button>filter</Button>
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
