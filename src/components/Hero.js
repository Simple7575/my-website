import Nav from "./Nav.js";
import styles from "../style/hero.module.scss";

import laptop from "../style/img/laptop.jpg";

export default function Hero({ setFormState }) {
    const openForm = () => {
        setFormState(false);
        document.body.classList.add("fixed");
    };

    return (
        <div className={styles.hero}>
            <div className={styles.hero__inner__wrapper}>
                <Nav />
                <div className={styles.hero__typography}>
                    <div className={styles.logo}>
                        <h2 className="">Simple</h2>
                    </div>
                    <h1 className={styles.hero__headline}>Lets create your dream project.</h1>
                    <button className={styles.hero__button} onClick={openForm}>
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
