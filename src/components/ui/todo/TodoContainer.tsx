import AddTodoModel from "./AddTodoModel";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useGetTodosQuery } from "@/redux/api/api";

export default function TodoContainer() {
  //local state data fathing
  // const { todos } = useAppSelector((state) => state.todos);

  //server site data feathing
  const { data: todos, isError, isLoading } = useGetTodosQuery(undefined);

  console.log(todos);
  if (isLoading) {
    return <p> lodding....</p>;
  }

  return (
    <div>
      <div>
        <div className="flex justify-between mb-5">
          <AddTodoModel />
          <TodoFilter />
        </div>
        <div className="bg-primary-gradient w-full h-full rounded-xl p-[5px] ">
          <div className="bg-white p-5 w-full h-full rounded-xl space-y-3">
            {todos?.data?.map((item) => (
              <TodoCard {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
