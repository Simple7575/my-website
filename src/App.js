import { useState } from "react";

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
