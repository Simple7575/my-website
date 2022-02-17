import Nav from "./Nav.js";

import laptop from "../style/img/laptop.jpg";

export default function Hero({ setFormState }) {
    const openForm = () => {
        setFormState("open");
        document.body.classList.add("fixed");
    };

    return (
        <div className="hero">
            <div className="hero__inner__wrapper">
                <Nav />
                <div className="hero__typography">
                    <div className="logo">
                        <h2 className="">Simple</h2>
                    </div>
                    <h1 className="hero__headline">
                        Lets create your dream project.
                    </h1>
                    <button className="hero__button" onClick={openForm}>
                        Message
                    </button>
                </div>
                <div className="hero__img">
                    <img src={laptop} alt="rgb laptop in dark" />
                </div>
            </div>
        </div>
    );
}
