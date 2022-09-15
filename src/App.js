import { useState } from "react";

import { Helmet } from "react-helmet";
import Hero from "./components/Hero.js";
import Skills from "./components/Skills.js";
import About from "./components/About.js";
import Contacts from "./components/Contacts.js";
import Examples from "./components/Examples.js";
import Footer from "./components/Footer.js";
import Form from "./components/Form.js";

function App() {
    const [formState, setFormState] = useState(true);

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
