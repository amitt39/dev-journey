import AutoFocus from "./AutoFocus";
import Counter from "./Counter";
import Footer from "./Footer";
import Header from "./Header";
import SearchBar from "./SearchBar";
import TaskList from "./TaskList";
import Timer from "./Timer";
import UserProfile from "./UserProfile";
import CallbackDemo from "./hooks/CallbackDemo";
import ExpensiveCalc from "./hooks/ExpensiveCalc";
import InputLogger from "./state/InputLogger";
import StopWatch from "./state/StopWatch";
function App() {
  return (
    <>
      <Header name="Amit" city="Ahmedabad" />
      <CallbackDemo />
      <ExpensiveCalc />
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
