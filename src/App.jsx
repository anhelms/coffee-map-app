import { Header } from "./Header";
import { Content } from "./Content";
import MyMap from "./MyMap";
import { Signup } from "./Signup";
import { Footer } from "./Footer";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div>
      <Header />
      <Content />
      <MyMap />
      <Signup />
      <Footer />
    </div>
  )
}

export default App;