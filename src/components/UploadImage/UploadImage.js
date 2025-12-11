import { useState } from "react";
import axios from "axios"
import style from "./UploadImage.module.css"
import Spinner from 'react-bootstrap/Spinner';


export default function UploadImage({setIdentifyFruit}) {
    const [file, setFile] = useState(null);
    const [progress, setProgress] = useState({started: false, pc: 0});
    const [message, setMessage] = useState(null);

    const handlerUpload = async (event) => {
        event.preventDefault();
        if (!file) {
            setMessage("No file selected.");
            return;
        }
        const fd = new FormData();
        fd.append("file", file);
        setMessage("Uploading...");
        setProgress(prevState => {
            return {...prevState, started: true}
        })
        try {
            const response = await axios.post(process.env.REACT_APP_SERVER_URL + "/upload",
                fd,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                    onUploadProgress: (progressEvent) => {
                        //const percent = ;
                        setProgress(prevState => {
                            return {...prevState, pc: progressEvent.progress * 100}
                        });
                    },
                }
            );
            console.log(response.data);
            setMessage(`✅ Uploaded successfully: ${response.data.data.name}: ${response.data.data.hebrewName}`);
            setIdentifyFruit(response.data.data.name);
        } catch (error) {
            console.error("Upload failed:", error);
            setMessage("❌ Upload failed");
        } finally {
            setProgress(prevState => {
                return {...prevState, pc: 0, started: false}
            });
        }
    };


    return <div>
        <input onChange={(e)=> {setFile(e.target.files[0])}} type={"file"}/>
        <button  onClick={handlerUpload}>upload</button>
        <br/>
        {file && file.type.startsWith("image/") && (
            <img
                src={URL.createObjectURL(file)}
                alt="Preview"
                style={{ marginTop: "5px", maxWidth: "100%", borderRadius: "5px" }}
            />
        )}



        {message && <p style={{ marginTop: "10px" }}>{message}</p>}
        {progress.started && <progress max="100" value={progress.pc}></progress>}

        <div className={style.centerItem} style={{textAlign: "center"}}>
            <div id="spinnerLoading" className={style.loader} style={{display: "none"}}></div>
        </div>
        {/*<Spinner animation="border" variant="primary" />*/}

        {/*<div>*/}
        {/*    <Spinner animation="border" variant="primary" />*/}
        {/*    <Spinner animation="border" variant="secondary" />*/}
        {/*    <Spinner animation="border" variant="success" />*/}
        {/*    <Spinner animation="border" variant="danger" />*/}
        {/*    <Spinner animation="border" variant="warning" />*/}
        {/*    <Spinner animation="border" variant="info" />*/}
        {/*    <Spinner animation="border" variant="light" />*/}
        {/*    <Spinner animation="border" variant="dark" />*/}
        {/*    <Spinner animation="grow" variant="primary" />*/}
        {/*    <Spinner animation="grow" variant="secondary" />*/}
        {/*    <Spinner animation="grow" variant="success" />*/}
        {/*    <Spinner animation="grow" variant="danger" />*/}
        {/*    <Spinner animation="grow" variant="warning" />*/}
        {/*    <Spinner animation="grow" variant="info" />*/}
        {/*    <Spinner animation="grow" variant="light" />*/}
        {/*    <Spinner animation="grow" variant="dark" />*/}
        {/*</div>*/}
    </div>;
}
///
