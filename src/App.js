import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import CheckOut from "./pages/CheckOut"
import Summary from "./pages/Summary"
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path={'/checkout'} element={<CheckOut />} />
        <Route path={'/orderSummary'} element={<Summary />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
