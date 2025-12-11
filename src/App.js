//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout/layout";
import FruitScanner from "./fruitScanner/page";
import RoutesNavigate from "./RoutesNavigate.js";

function App(){
  return<div>
    <Layout>
      <RoutesNavigate/>
    </Layout>

  </div>
}

export default App;
