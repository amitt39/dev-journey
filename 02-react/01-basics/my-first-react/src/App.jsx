import AutoFocus from "./AutoFocus";
import Counter from "./Counter";
import Footer from "./Footer";
import Header from "./Header";
import SearchBar from "./SearchBar";
import TaskList from "./TaskList";
import Timer from "./Timer";
import UserProfile from "./UserProfile";
import StopWatch from "./state/StopWatch";

function App() {
  return (
    <>
      <Header name="Amit" city="Ahmedabad" />
      <Counter />
      <UserProfile />
      <TaskList />
      <Timer />
      <SearchBar />
      <AutoFocus />
      <StopWatch />
      <Footer />
    </>
  );
}

export default App;
