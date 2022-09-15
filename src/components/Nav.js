import styles from "../style/hero.module.scss";

export default function Nav({ trgtClassNm }) {
    return (
        <>
            <nav className={`${styles.header__nav} ${styles[trgtClassNm]}`}>
                <ul>
                    <li>
                        <a href="#skills">Skills</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#examples">Examples</a>
                    </li>
                    <li>
                        <a href="#contacts">Contacts</a>
                    </li>
                </ul>
            </nav>
        </>
    );
}
