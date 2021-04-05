import Button from "../Button/Button";
import send from '../../assets/send.svg';
import './Keyboard.scss'
import { useState } from "react";

function Keyboard(props) {

    const [message, setMessage] = useState();

    return (
        <div className="keyboard-bg">
            <div className="text-box">
                <input
                placeholder="Enter your message here"
                type="text"
                className="box"
                autoComplete={"true"}
                onChange={(e) => setMessage(e.target.value)}
                />
            </div>
            <Button logo={send} text="Send" align="right" onClick={console.log("message to send ==> ", message)} />
        </div>
    )
}

export default Keyboard;