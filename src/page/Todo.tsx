import TodoContainer from "@/components/ui/todo/TodoContainer";
import Container from "@/ui/Container";

export default function Todo() {
  return (
    <Container>
      <h1 className="text-center text-3xl font-semibold my-10">My Todos</h1>
      <TodoContainer></TodoContainer>
    </Container>
  );
}
