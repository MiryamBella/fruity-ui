import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom"
import FruitScanner from "./fruitScanner/page";
import FruitsInformation from "./fruitsInformation/page";


export default function RoutesNavigate() {
    return (<BrowserRouter>
        <Routes>
            <Route path={"/"} element={ <Navigate to={"/fruit-scanner"}/>}/>
            <Route path={"/fruit-scanner"} element={<FruitScanner/>}/>
            <Route path={"/fruits-information/:id"} element={<FruitsInformation/>}/>

            {/*TODO make notfound page*/}
            {/*<Route path="*" element={<Navigate to="/fruit-scanner" replace />} />*/}

        </Routes>


        </BrowserRouter>)
}
