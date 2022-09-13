import styles from "../style/examples.module.scss";

export default function Examples() {
    return (
        <div className={styles.container} id="examples">
            <h2>Some Examples:</h2>
            <div className={styles.frames_container}>
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
            </div>
        </div>
    );
}
