import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Nav from 'react-bootstrap/Nav';
import UploadImage from "../components/UploadImage/UploadImage";

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
// or less ideally
import {Button, Stack} from 'react-bootstrap';
import style from "./page.module.css"

let busy = false





//TRYING SOMTHING.
// function ColorTab({ color, setColor }) {
//     return (
//         <div>
//             <label className="block mb-1 font-semibold">Pick a color 🎨</label>
//             <select
//                 value={color}
//                 onChange={(e) => setColor(e.target.value)}
//                 className="border rounded p-2 w-full"
//             >
//                 <option value="">-- Choose a color --</option>
//                 <option value="Red">Red</option>
//                 <option value="Yellow">Yellow</option>
//                 <option value="Green">Green</option>
//             </select>
//         </div>
//     );
// }
//
// function FruitTab({ fruit, setFruit }) {
//     return (
//         <div>
//             <label className="block mb-1 font-semibold">Pick a fruit 🍎</label>
//             <select
//                 value={fruit}
//                 onChange={(e) => setFruit(e.target.value)}
//                 className="border rounded p-2 w-full"
//             >
//                 <option value="">-- Choose a fruit --</option>
//                 <option value="Apple">Apple</option>
//                 <option value="Banana">Banana</option>
//                 <option value="Cherry">Cherry</option>
//             </select>
//         </div>
//     );
// }
//
//









function openInfoPage(){
    return(
        <div>
        </div>
    );
}

function HomeTab() {
    return (
    <div className="p-4 bg-green-100 rounded-lg">
        <h2 className="text-lg font-bold">Home Section 🏡</h2>
        <p>Welcome to Fruity — your smart and simple way to learn about fruits!</p>
        <p>
            With FruitScan, you can upload a photo or take one instantly using your phone’s camera.
            Our image recognition technology scans the fruit in your picture and gives you detailed information — including:
        </p>
        <ul>
            <li>🍌 The fruit’s name and type</li>
            <li>🧬 Its nutritional value</li>
            <li>🍽️ How to eat or use it</li>
        </ul>
        <p>
            Whether you’re a student, a health enthusiast, or just curious about that mystery fruit you found — FruitScan helps you discover and learn in seconds.
        </p>
        <br/>
        <p>
            We believe in making knowledge fun, visual, and accessible — right from your pocket.
        </p>

    </div>

);
}
function AboutTab() {
    return (
        <div className="p-4 bg-green-100 rounded-lg">
            <h2 className="text-lg font-bold">Home Section 🏡</h2>
            <p>Welcome to Fruity — your smart and simple way to learn about fruits!</p>
            <p>
                With FruitScan, you can upload a photo or take one instantly using your phone’s camera. Our image recognition technology scans the fruit in your picture and gives you detailed information — including:

                🍌 The fruit’s name and type

                🧬 Its nutritional value

                🍽️ How to eat or use it

                Whether you’re a student, a health enthusiast, or just curious about that mystery fruit you found — FruitScan helps you discover and learn in seconds.

                We believe in making knowledge fun, visual, and accessible — right from your pocket.</p>


            <div className="tab-pane fade in active" style={{textAlign: "center"}}>
                <div className="mb-3">
                    <p>hii</p>
                </div>
            </div>

        </div>

    );
}
function SelectFruitTab({ fruit, setFruit, fruitOptions }) {
    return (
        <div>
            <form id="fruit-select" style={{textAlign: "center"}}>
                <select id="fruitsList" name="fruits" className="form-select w-auto d-inline-block" type="button"
                        value={fruit}
                        onChange={(e) => setFruit(e.target.value)}
                >
                    <option value="">None</option>
                    {fruitOptions.map((opt) => (
                        <option key={opt.id} value={opt.id}>
                            {opt.label}
                        </option>
                    ))}
                </select>
            </form>
        </div>
    );
}
function UploadingTab({setFruit}) {
    return (
        <div className="p-4 bg-green-100 rounded-lg" style={{textAlign: "center"}}>
            <h2 className="text-lg font-bold">Upload Section</h2>

                <div className="mb-3">
                    <UploadImage setIdentifyFruit={setFruit}/>
                </div>

        </div>
    );
}

export default function FruitScanner() {
    const [selectedFruit, setSelectedFruit] = useState("");

    const [activeTab, setActiveTab] = useState("home");
    const fruitsOptions = [
        {id: "apple", label:"Apple"},
        {id: "avocado", label:"Avocado"},
        {id: "banana", label:"Banana"},
        {id: "cherry", label: "Cherry"},
        {id: "kiwi", label: "Kiwi"},
        {id: "mango", label:"Mango"},
        {id: "watermelon", label: "Watermelon"},
        {id: "strawberries", label: "Strawberries"},
        {id: "pinenapple", label:"Pineapple"},
        {id: "orange", label: "Orange"},];
    const tabs = [
        {id: "home", label: "Home" },
        {id: "uploadingTab", label: "Uploading image" },
        {id: "selectFruitTab", label: "Select Fruit" },
        {id: "about", label: "About" },
    ];
    const handleSelectFruit = (value) => {
        console.log("Selected Fruit:", value); // do something with the value
    };

    return <div>
        <div>
            <h1 style={{ textAlign: "center", fontSize:"80px", color:"purple" }}>Welcome to Fruity</h1>
            <marquee style={{fontSize: "30px", color: "darkmagenta", marginTop: "20px"}}> Who am I?</marquee>
        </div>

        <div>
            {/* Tabs header */}
            <div className={style.menu}>
                <div className={style.tabContainer}>
                    {tabs.map((tab) => {
                        const isActive = activeTab === tab.id;

                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`${style.tabButton} ${isActive ? style.tabActive : ""}`}
                            >
                                {tab.label}

                                {isActive && (
                                    <motion.div
                                        layoutId="underline"
                                        className={style.underline}
                                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                    />
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>
            {/* Tabs content */}
            <div className="menu mt-4 p-4 border rounded-lg">
                {activeTab === "home" && <HomeTab />}
                {activeTab === "uploadingTab" && <UploadingTab setFruit={setSelectedFruit} />}
                {activeTab === "selectFruitTab" && <SelectFruitTab fruit={selectedFruit} setFruit={setSelectedFruit} fruitOptions={fruitsOptions}/>}
                {activeTab === "about" && <AboutTab />}
            </div>





            <div>
                <Stack direction="horizontal" gap={2}>
                    <Button as="a" variant="primary" href={`/fruits-information/:${selectedFruit}`}>
                        info
                    </Button>
                    <Button as="a" variant="success">
                        Button as link
                    </Button>
                </Stack>;
            </div>


        </div>

        <AnimatePresence>
            {selectedFruit && (
                <motion.div
                    key={selectedFruit}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                    className="p-4 border rounded bg-blue-100 text-blue-700 font-semibold"
                >
                    ⭐ Current choice: {selectedFruit}
                </motion.div>
            )}
        </AnimatePresence>
        <div className="center-item">
            <div id="spinnerLoading" className="loader" style={{display: "none"}}></div>
        </div>


    </div>
}
