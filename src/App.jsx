import MainPage from "./pages/MainPage/MainPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OrderPage from "./pages/OrderPage/OrderPage";
import Steps from "./components/Steps/Steps";
import Header from "./components/Header/Header";

const App = () => {
  const steps = [
    {
      step: 1,
      title: '',
    },
    {
      step: 2,
      title: '',
    },
    {
      step: 3,
      title: '',
    },
    {
      step: 4,
      title: '',
    },
  ]
  return (
    <div className="">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/order-page" element={<OrderPage steps={steps}/>}>
            <Route path="/order-page/:id" element={<Steps/>}/>
          </Route>
        </Routes>
        {/* <Footer/> */}
      </Router>
    </div>
  );
}

export default App;
