import styles from "../style/about.module.scss";
import TextParticles from "./Particles/TextParticles";

export default function About() {
    return (
        <div className={styles.about} id="about">
            <TextParticles />
            {/* <h2>About me:</h2> */}
            <p>
                I am a fullstack web developer. From the very beginning of my programming journey I
                fell in love with it, it was absolutely clear that this was what I wanted to do for
                the rest of my life.
            </p>
            <p>
                I give a great accent to website design and its uniqueness. My conviction is that
                every website should stand out and give an idea about what it represents from the
                first sight. Having an art background helps me to do it in the best way.
            </p>
            <p>
                I <span>love</span> what I do and my projects are the evidence of that.
            </p>
        </div>
    );
}
