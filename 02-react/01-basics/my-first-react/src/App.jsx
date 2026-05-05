import Counter from "./Counter";
import Footer from "./Footer";
import Header from "./Header";
import TaskList from "./TaskList";
import UserProfile from "./UserProfile";

function App() {
  return (
    <>
      <Header name="Amit" city="Ahmedabad" />
      <Counter />
      <UserProfile />
      <TaskList />
      <Footer />
    </>
  );
}

export default App;
