import styles from "../style/examples.module.scss";
import { useState } from "react";

export default function Examples() {
    const [frName, setFrName] = useState("");
    const [frLink, setFrLink] = useState("");

    const handleClick = (e) => {
        const linkText = e.target.innerHTML;
        const href = e.target.href;
        setFrLink(href);
        setFrName("none");
        setTimeout(() => {
            setFrName(linkText);
        }, 300);
    };

    return (
        <div className={styles.container} id="examples">
            <h2>Some Examples:</h2>

            {/* container with single iframe but multiple links */}
            <div className={styles.frames_container}>
                <div className={styles.frame_suggestion}>
                    <p>Click on links to see preview.</p>
                    <span>
                        Visit original website:{" "}
                        <a
                            className={styles[frName]}
                            href={frLink}
                            target="_blank"
                            rel="noreferrer noopener nofollow"
                        >
                            {frName}
                        </a>
                    </span>
                </div>
                <div className={styles.frame_links}>
                    <a
                        href="https://www.eco-gw.ru"
                        target="test_frame"
                        rel="noreferrer noopener nofollow"
                        onClick={handleClick}
                    >
                        Eco-gw
                    </a>
                    <a
                        href="https://www.servistver.ru"
                        target="test_frame"
                        rel="noreferrer noopener nofollow"
                        onClick={handleClick}
                    >
                        Servistver
                    </a>
                    <a
                        href="https://test-form-s.netlify.app"
                        target="test_frame"
                        rel="noreferrer noopener nofollow"
                        onClick={handleClick}
                    >
                        Test-form
                    </a>
                    <a
                        href="https://www.stirpro.ru"
                        target="test_frame"
                        rel="noreferrer noopener nofollow"
                        onClick={handleClick}
                    >
                        Stirpro
                    </a>
                </div>

                <iframe
                    src=""
                    frameBorder="0"
                    className={`${styles.frames_item} ${styles[frName]}`}
                    title="gw"
                    name="test_frame"
                ></iframe>
            </div>
            {/* container with multiple iframes */}
            {/* <div className={styles.frames_container}>
                
                <a href="https://www.eco-gw.ru" target="_blank" rel="noreferrer noopener nofollow">
                    <span>Please visit original website:</span> Eco-gw
                </a>
                <iframe
                    src="https://www.eco-gw.ru"
                    frameborder="0"
                    className={styles.frames_item}
                    title="gw"
                ></iframe>
                <a
                    href="https://www.servistver.ru"
                    target="_blank"
                    rel="noreferrer noopener nofollow"
                >
                    <span>Please visit original website:</span> Servistver
                </a>
                <iframe
                    src="https://www.servistver.ru"
                    frameborder="0"
                    className={styles.frames_item}
                    title="stv"
                ></iframe>
                <a
                    href="https://test-form-s.netlify.app"
                    target="_blank"
                    rel="noreferrer noopener nofollow"
                >
                    <span>Please visit original website:</span> Test form
                </a>
                <iframe
                    src="https://test-form-s.netlify.app"
                    frameborder="0"
                    className={styles.frames_item}
                    title="formt"
                ></iframe>
                <a href="https://www.stirpro.ru" target="_blank" rel="noreferrer noopener nofollow">
                    <span>Please visit original website:</span> Stirpro
                </a>
                <iframe
                    src="https://www.stirpro.ru"
                    frameborder="0"
                    className={styles.frames_item}
                    title="stir"
                ></iframe>
            </div> */}
        </div>
    );
}
