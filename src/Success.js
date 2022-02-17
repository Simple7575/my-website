import React from "react";
import { Link } from "react-router-dom";
// import Laptop from "./style/img/martin-sanchez-G78c3DPmD_A-unsplash.jpg";
import Laptop from "./style/img/joshua-woroniecki-lzh3hPtJz9c-unsplash.jpg";

export default function Success() {
    return (
        <div className="success">
            <div className="success__inner">
                <h1>Thank you. I will reply soon.</h1>
                <div className="success__img">
                    <img src={Laptop} alt="rgb laptop" />
                </div>
                <div className="success__footer">
                    <Link to={"/"}>Back to home page</Link>
                    <h3>Simple</h3>
                </div>
            </div>
        </div>
    );
}
