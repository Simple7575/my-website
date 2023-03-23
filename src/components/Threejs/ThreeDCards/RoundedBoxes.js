import styles from "../../../style/skills.module.scss";
import RoundedBox from "./RoundedBox.js";
import ReactLogo from "../../../style/svg/react_logo.svg";
import HtmlLogo from "../../../style/svg/html_logo.svg";
import CssLogo from "../../../style/svg/css_logo.svg";
import NodeLogo from "../../../style/svg/nodejs_logo.svg";
import JSLogo from "../../../style/svg/js_logo.svg";
import WPLogo from "../../../style/svg/wordpress_logo.svg";
import FGLogo from "../../../style/svg/figma_logo.svg";
import SassLogo from "../../../style/svg/sass_logo.svg";
import PythonLogo from "../../../style/svg/python_logo.svg";
import NextLogo from "../../../style/svg/nextjs_logo.svg";
import { useRef, useEffect } from "react";

const skillsList = [
    { title: "Html", color: 0xffac0f, logo: HtmlLogo },
    { title: "React", color: 0x278ae5, logo: ReactLogo },
    { title: "CSS", color: 0x130fff, logo: CssLogo },
    { title: "Node.js", color: 0x539e43, logo: NodeLogo },
    { title: "JavaScript", color: 0xead41c, logo: JSLogo },
    { title: "WordPress", color: 0x1c85b4, logo: WPLogo },
    { title: "Figma", color: 0xa259ff, logo: FGLogo },
    { title: "Sass", color: 0xcd6799, logo: SassLogo },
    { title: "Python", color: 0x387eb8, logo: PythonLogo },
    { title: "Next.js", color: 0x00d8ff, logo: NextLogo },
];

export default function ThreeDSkills() {
    const targetRef = useRef();

    const obsClback = (entries, observer) => {
        for (let entry of entries) {
            if (entry.isIntersecting) {
                entry.target.classList.remove(styles.hide);
                entry.target.classList.add(styles.show);
            } else {
                entry.target.classList.remove(styles.show);
                entry.target.classList.add(styles.hide);
            }
        }
    };

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "-90px 0px -90px 0px",
            threshold: 0,
        };
        const targets = targetRef.current.children;
        const observer = new IntersectionObserver(obsClback, observerOptions);

        for (let target of targets) {
            observer.observe(target);
        }

        return () => {
            for (let target of targets) {
                observer.unobserve(target);
            }
        };
    }, []);

    return (
        <div className={styles.skills}>
            <div className={styles.skills__headline}>
                <h2>Skills & Knowledge</h2>
            </div>
            <div className={styles.skills__icons__wrapper} ref={targetRef}>
                {skillsList.map((sk) => {
                    return (
                        <RoundedBox logo={sk.logo} color={sk.color} key={sk.title}>
                            {sk.title}
                        </RoundedBox>
                    );
                })}
            </div>
        </div>
    );
}
