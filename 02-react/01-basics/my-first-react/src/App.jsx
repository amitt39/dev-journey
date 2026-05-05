import Counter from "./Counter";
import Footer from "./Footer";
import Header from "./Header";
import UserProfile from "./UserProfile";

function App() {
  return (
    <>
      <Header name="Amit" city="Ahmedabad" />
      <Counter />
      <UserProfile />
      <Footer />
    </>
  );
}

export default App;
