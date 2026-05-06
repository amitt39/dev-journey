import AutoFocus from "./AutoFocus";
import Counter from "./Counter";
import Footer from "./Footer";
import Header from "./Header";
import SearchBar from "./SearchBar";
import TaskList from "./TaskList";
import Timer from "./Timer";
import UserProfile from "./UserProfile";
import InputLogger from "./state/InputLogger";
import StopWatch from "./state/StopWatch";
function App() {
  return (
    <>
      <Header name="Amit" city="Ahmedabad" />
      <InputLogger />
      <StopWatch />
      <AutoFocus />
      <SearchBar />
      <Timer />
      <TaskList />
      <UserProfile />
      <Counter />
      <Footer />
    </>
  );
}

export default App;
