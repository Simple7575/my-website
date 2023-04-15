import { useEffect, useRef, useState } from "react";
import styles from "../style/examples3d.module.scss";

export default function Examples3D() {
    const boxRef = useRef();
    const [facingWall, setFacingWall] = useState("Eco-gw");
    const [frName, setFrName] = useState("");
    const [frLink, setFrLink] = useState("");

    const handleClick = (e) => {
        const linkText = e.target.innerHTML;
        const href = e.target.href;
        if (frName === linkText) return;

        for (let i = 0; i < boxRef.current.children.length; i++) {
            if (boxRef.current.children[i].children[0].name !== linkText) {
                boxRef.current.children[i].children[0].className = "";
            }
        }

        setTimeout(() => {
            setFacingWall(linkText);

            setFrLink(href);
            setFrName("none");

            setTimeout(() => {
                for (let i = 0; i < boxRef.current.children.length; i++) {
                    if (boxRef.current.children[i].children[0].name !== linkText) {
                        boxRef.current.children[i].children[0].src = "";
                    }
                }
                const frame = document.querySelector(`iframe[name=${linkText}]`);
                frame.src = href;
                frame.classList.add(styles[frName]);

                setFrName(linkText);
            }, 300);
        }, 100);
    };

    const iframeLoad = (e) => {
        console.log(e);
    };

    useEffect(() => {
        // console.log(
        //     (boxRef.current.children[0].src = "https://clever-ptolemy-12408e.netlify.app/")
        // );
        // let animationID;
        // const animate = () => {
        //     animationID = requestAnimationFrame(animate);
        //     boxRef.current.style.transform = `rotateY(${y++}deg) rotateX(5deg)`;
        // };
        // animate();
        // return () => {
        //     cancelAnimationFrame(animationID);
        // };
    }, []);

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
                        // href="https://www.eco-gw.ru"
                        href="https://clever-ptolemy-12408e.netlify.app/"
                        target="Eco-gw"
                        rel="noreferrer noopener nofollow"
                        onClick={handleClick}
                    >
                        Eco-gw
                    </a>
                    <a
                        href="https://www.servistver.ru"
                        target="Servistver"
                        rel="noreferrer noopener nofollow"
                        onClick={handleClick}
                    >
                        Servistver
                    </a>
                    <a
                        href="https://test-form-s.netlify.app"
                        target="Test-form"
                        rel="noreferrer noopener nofollow"
                        onClick={handleClick}
                    >
                        Test-form
                    </a>
                    <a
                        // href="https://www.stirpro.ru"
                        href="https://unruffled-mcnulty-0d51a9.netlify.app"
                        target="Stirpro"
                        rel="noreferrer noopener nofollow"
                        onClick={handleClick}
                    >
                        Stirpro
                    </a>
                </div>

                <div className={styles["box-wrapper"]}>
                    <div className={`${styles.box} ${styles[facingWall]}`} ref={boxRef}>
                        <div className={`${styles.wall} ${styles.front}`}>
                            <iframe
                                src=""
                                frameBorder="0"
                                title="gw"
                                name="Eco-gw"
                                className={styles[frName]}
                                onLoad={iframeLoad}
                            ></iframe>
                        </div>
                        <div className={`${styles.wall} ${styles.right} ${styles[frName]}`}>
                            <iframe
                                src=""
                                frameBorder="0"
                                title="gw"
                                name="Servistver"
                                className={styles[frName]}
                            ></iframe>
                        </div>
                        <div className={`${styles.wall} ${styles.back} ${styles[frName]}`}>
                            <iframe
                                src=""
                                frameBorder="0"
                                title="gw"
                                name="Test-form"
                                className={styles[frName]}
                            ></iframe>
                        </div>
                        <div className={`${styles.wall} ${styles.left} ${styles[frName]}`}>
                            <iframe
                                src=""
                                frameBorder="0"
                                title="gw"
                                name="Stirpro"
                                className={styles[frName]}
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
