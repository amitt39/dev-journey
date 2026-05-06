import Counter from "./Counter";
import Footer from "./Footer";
import Header from "./Header";
import TaskList from "./TaskList";
import Timer from "./Timer";
import UserProfile from "./UserProfile";

function App() {
  return (
    <>
      <Header name="Amit" city="Ahmedabad" />
      <Counter />
      <UserProfile />
      <TaskList />
      <Timer />
      <Footer />
    </>
  );
}

export default App;
