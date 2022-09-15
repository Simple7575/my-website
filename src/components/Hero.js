import styles from "../style/hero.module.scss";
import { useEffect, useRef, useState } from "react";
import Nav from "./Nav.js";

import laptop from "../style/img/laptop.jpg";

export default function Hero({ setFormState }) {
    const [trgtClassNm, setTrgtClassNm] = useState("hide");
    const targetRef = useRef();

    const obsClback = (entries, observer) => {
        for (let entry of entries) {
            if (entry.isIntersecting) {
                setTrgtClassNm("show");
            } else {
                setTrgtClassNm("hide");
            }
        }
    };

    useEffect(() => {
        const current = targetRef.current;
        const obsOptions = {
            root: null,
            rootMargin: "-200px 0px 0px 0px",
            threshold: 0,
        };
        const observer = new IntersectionObserver(obsClback, obsOptions);
        observer.observe(targetRef.current);

        return () => {
            observer.unobserve(current);
        };
    }, []);

    const openForm = () => {
        setFormState(false);
        document.body.classList.add("fixed");
    };

    return (
        <div className={styles.hero} ref={targetRef}>
            <div className={styles.hero__inner__wrapper}>
                <Nav trgtClassNm={trgtClassNm} />
                <div className={styles.hero__typography}>
                    <div className={`${styles.logo} ${styles[trgtClassNm]}`}>
                        <h2 className="">Simple</h2>
                    </div>
                    <h1 className={`${styles.hero__headline} ${styles[trgtClassNm]}`}>
                        Lets create your dream project.
                    </h1>
                    <button
                        className={`${styles.hero__button} ${styles[trgtClassNm]}`}
                        onClick={openForm}
                    >
                        Message
                    </button>
                </div>
                <div className={styles.hero__img}>
                    <img src={laptop} alt="rgb laptop in dark" />
                </div>
            </div>
        </div>
    );
}
