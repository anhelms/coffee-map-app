import { Header } from "./Header";
import { Content } from "./Content";
import MyMap from "./MyMap";
import { Login } from "./Login";
import { Signup } from "./Signup";
import { Footer } from "./Footer";

function App() {
  return (
    <div>
      <Header />
      <Content />
      <MyMap />
      <Login />
      <Signup />
      <Footer />
    </div>
  )
}

export default App;