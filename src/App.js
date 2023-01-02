import { useState } from "react";

import { Helmet } from "react-helmet";
import Hero from "./components/Hero.js";
import Skills from "./components/Skills.js";
import About from "./components/About.js";
import Contacts from "./components/Contacts.js";
import Examples from "./components/Examples.js";
import Footer from "./components/Footer.js";
import Form from "./components/Form.js";
import Sphere from "./components/Threejs/Sphere.js";

function App() {
    const [formState, setFormState] = useState(true);
    // let rectangleArea = (length, width) => {
    //     return length + width;
    // };

    // const countParams = (fn) => {
    //     console.log(fn.length);
    //     return (...params) => {
    //         if (params.length !== fn.length) {
    //             throw new Error(`Incorrect num in fn:${fn.name}`);
    //         }
    //         return fn(...params);
    //     };
    // };

    // const requireIntegers = (fn) => {
    //     console.log(fn.length);
    //     return (...params) => {
    //         for (let param of params) {
    //             if (!Number.isInteger(param)) {
    //                 throw new Error(`Not int in fn: ${fn.name}`);
    //             }
    //         }
    //         return fn(...params);
    //     };
    // };

    // // console.log(rectangleArea.length);
    // rectangleArea = countParams(rectangleArea);
    // rectangleArea = requireIntegers(rectangleArea);
    // console.log(rectangleArea.length);

    return (
        <div className="App">
            <Helmet>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link
                    href="https://fonts.googleapis.com/css2?family=Comforter&family=Ubuntu:wght@300;400&display=swap"
                    rel="stylesheet"
                />
            </Helmet>
            <Hero setFormState={setFormState} />
            <Sphere />
            <Skills />
            <About />
            <Examples />
            <Contacts setFormState={setFormState} />
            <Footer />
            <Form formState={formState} setFormState={setFormState} />
        </div>
    );
}

export default App;
