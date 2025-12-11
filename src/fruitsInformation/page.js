import { useState } from "react";
import { useParams } from "react-router-dom";
import {Tab, Tabs} from "react-bootstrap";
import FruitsInfoView from "./fruitInfoView";
import FruitsKosherView from "./fruitsKosherView";
import FruitsRecipesView from "./fruitRecipesView";


export default function FruitsInformation() {
    const { id } = useParams();

    return <div>
        <div>
            <h2 id="name" style={{textAlign: "center", fontSize: "50px", color:"purple"}}>Name:&nbsp;</h2>
            <div id="data_buttons" style={{textAlign: "center"}}>
                <button id="openMainPage" onClick="openOtherPage('index.html')" className="button button3">Get back to
                    main page
                </button>
            </div>
            <div id="" style={{marginTop: "20px", textAlign: "center", fontSize: "70px", display: "none"}}>data</div>
            <Tabs
                defaultActiveKey="fruits-info-view"
                className="mb-3"
                justify
            >
                <Tab eventKey="fruits-info" title="Fruits Information">
                    <FruitsInfoView/>
                </Tab>
                <Tab eventKey="fruits-recipes" title="Fruits Recipes">
                    <FruitsRecipesView/>
                </Tab>
                <Tab eventKey="fruits-kosher" title="Fruits Kosher">
                    <FruitsKosherView/>
                </Tab>
            </Tabs>
        </div>

        <div>

            {/* Fruit Information */}
            <div style={{textAlign: "center"}}>
                <h2>
                    Fruit Information
                    <button id="show_data" className="mybtn mybtn1 button5" style={{display: "none"}}>refresh</button>
                </h2>
                <div id="dataOfObject">
                    <div className="center-item">
                        <div id="spinnerLoading" className="loader" style={{display: "none"}}></div>
                    </div>
                    <div className="flip-card card">
                    </div>
                </div>
            </div>

            {/*<div include-HTML="fruitInformationModal.html"></div>*/}

        </div>
    </div>
}
