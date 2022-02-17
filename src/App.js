import { useState } from "react";

import About from "./components/About.js";
import Contacts from "./components/Contacts.js";
import Footer from "./components/Footer.js";
import Form from "./components/Form.js";
import Hero from "./components/Hero.js";
import Skills from "./components/Skills.js";

function App() {
    const [formState, setFormState] = useState("close");

    return (
        <div className="App">
            <Hero setFormState={setFormState} />
            <Skills />
            <About />
            <Contacts setFormState={setFormState} />
            <Footer />
            <Form formState={formState} setFormState={setFormState} />
        </div>
    );
}

export default App;
