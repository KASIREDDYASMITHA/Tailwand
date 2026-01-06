import FeedbackForm from "./components/FeedbackForm";
import ImageSlideshow from "./components/ImageSlideshow";
import TodoList from "./components/TodoList";

export default function App() {
  return (
    <div className="space-y-10 p-6">
      <FeedbackForm />
      <ImageSlideshow />
      <TodoList />
    </div>
  );
}
