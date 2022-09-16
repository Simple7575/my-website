import styles from "../style/skills.module.scss";
import { useRef, useEffect } from "react";

export default function Skills() {
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
        <div className={styles.skills} id="skills">
            <div className={styles.skills__headline}>
                <h2>Skills & Knowledge</h2>
            </div>
            <div className={styles.skills__icons__wrapper} ref={targetRef}>
                <div className={`${styles.skills__icons} `}>
                    <svg
                        width="74"
                        height="98"
                        viewBox="0 0 74 98"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clipPath="url(#clip0_31_59)">
                            <path
                                d="M8.74341 0H13.1616V4.36508H17.2041V0H21.6222V13.2137H17.2041V8.79142H13.1616V13.2137H8.74749V0H8.74341Z"
                                fill="#8D8D8D"
                            />
                            <path
                                d="M27.4286 4.38142H23.5413V0H35.7382V4.38142H31.8468V13.2137H27.4286V4.38142Z"
                                fill="#8D8D8D"
                            />
                            <path
                                d="M37.6738 0H42.2798L45.1137 4.64275L47.9434 0H52.5494V13.2137H48.1517V6.664L45.1137 11.3639H45.0361L41.994 6.66808V13.2137H37.6738V0V0Z"
                                fill="#8D8D8D"
                            />
                            <path
                                d="M54.7461 0H59.1683V8.84858H65.375V13.2177H54.7461V0V0Z"
                                fill="#8D8D8D"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M8.6045 90.1275L0.25 19.2612H73.75L65.3914 90.1193L36.9592 98.0002L8.6045 90.1275ZM25.4972 51.3358L24.7051 42.4341H57.9638L58.7397 33.7448H15.2113L17.5552 60.0292H47.6779L46.6693 71.2992L36.9755 73.9207H36.9673L27.2898 71.3074L26.6692 64.378H17.939L19.1558 78.0245L36.9592 82.9653L54.7911 78.0245L56.9634 53.6715L57.1758 51.3399H25.4972V51.3358Z"
                                fill="#F16528"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_31_59">
                                <rect width="74" height="98" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>

                    <span>HTML</span>
                </div>
                <div className={`${styles.skills__icons} `}>
                    <svg
                        width="90"
                        height="80"
                        viewBox="0 0 90 80"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M45 47.8857C49.401 47.8857 52.9688 44.318 52.9688 39.917C52.9688 35.516 49.401 31.9482 45 31.9482C40.599 31.9482 37.0312 35.516 37.0312 39.917C37.0312 44.318 40.599 47.8857 45 47.8857Z"
                            fill="#00D8FF"
                        />
                        <path
                            d="M45 58.1878C35.422 58.4195 25.868 57.1284 16.695 54.3628C12.4576 53.0196 8.50547 50.9035 5.03831 48.1217C3.71528 47.1714 2.61349 45.946 1.80855 44.5298C1.00362 43.1136 0.514579 41.54 0.375 39.9171C0.375 34.6481 6.1635 29.4844 15.8599 26.1056C25.2781 23.1118 35.1185 21.6608 45 21.8089C54.7496 21.6727 64.4582 23.0974 73.7576 26.0291C77.8385 27.3301 81.6567 29.3439 85.035 31.977C86.3354 32.883 87.4207 34.0639 88.2139 35.4361C89.0071 36.8082 89.4888 38.338 89.625 39.9171C89.625 45.3932 83.1544 50.9426 72.7313 54.3915C63.7359 57.067 54.3835 58.3473 45 58.1878V58.1878ZM45 25.6211C35.5462 25.4948 26.1326 26.8741 17.1126 29.7075C8.18756 32.8217 4.18725 37.0802 4.18725 39.9075C4.18725 42.8655 8.48719 47.5161 17.9286 50.745C26.704 53.3774 35.8411 54.6028 45 54.3756C53.9773 54.5361 62.9263 53.3214 71.5359 50.7737C81.3375 47.5256 85.8 42.8687 85.8 39.9171C85.6392 38.9042 85.27 37.9356 84.7159 37.0726C84.1618 36.2096 83.4347 35.4709 82.5806 34.9031C79.5581 32.5671 76.1473 30.7824 72.5049 29.631C63.6087 26.838 54.3234 25.4843 45 25.6211V25.6211Z"
                            fill="#00D8FF"
                        />
                        <path
                            d="M26.895 79.662C25.408 79.6961 23.9386 79.3354 22.6365 78.6165C18.072 75.9836 16.491 68.391 18.4067 58.3026C20.5188 48.6479 24.1786 39.3985 29.2442 30.9124C33.9959 22.3989 40.0791 14.7005 47.2631 8.10901C50.4288 5.22338 54.0807 2.92149 58.0496 1.31007C59.4851 0.637313 61.0511 0.288574 62.6364 0.288574C64.2218 0.288574 65.7877 0.637313 67.2232 1.31007C71.9694 4.04494 73.5409 12.4217 71.3255 23.1731C69.1481 32.3039 65.5835 41.0468 60.7558 49.0971C56.1713 57.51 50.2797 65.1414 43.301 71.706C40.0204 74.7048 36.2131 77.0704 32.0715 78.6834C30.4134 79.2988 28.6633 79.6297 26.895 79.662V79.662ZM32.5464 32.8058C27.7145 40.9317 24.2068 49.7751 22.1552 59.0038C20.3925 68.2954 22.085 73.8831 24.5458 75.3047C27.0958 76.7805 33.2859 75.3812 40.802 68.8149C47.464 62.5259 53.0874 55.2209 57.4631 47.1718C62.088 39.4757 65.5074 31.1168 67.6025 22.3858C69.6872 12.2655 67.8862 6.06901 65.3298 4.59638C64.3717 4.22927 63.3479 4.06493 62.323 4.11376C61.2981 4.16259 60.2945 4.42352 59.3756 4.88007C55.8428 6.33786 52.5949 8.40745 49.7812 10.9937C42.9175 17.3075 37.1067 24.6774 32.5687 32.8249L32.5464 32.8058Z"
                            fill="#00D8FF"
                        />
                        <path
                            d="M63.0954 79.7035C58.7763 79.7035 53.2906 77.0898 47.5786 72.1779C40.2688 65.5264 34.0827 57.7365 29.2601 49.1099C24.258 40.7407 20.6273 31.625 18.5055 22.1086C17.5853 17.9218 17.4147 13.605 18.0018 9.35862C18.1376 7.78338 18.6172 6.25709 19.407 4.88739C20.1968 3.51769 21.2774 2.33793 22.5727 1.4313C27.3125 -1.31313 35.3546 1.5078 43.5624 8.79443C50.3855 15.2401 56.1798 22.6942 60.743 30.8966C65.742 39.0704 69.4108 47.9864 71.6124 57.3114C72.5722 61.6518 72.7203 66.1324 72.0491 70.5267C71.8894 72.1473 71.3811 73.7141 70.5592 75.1199C69.7372 76.5256 68.621 77.7369 67.287 78.6708C66.0061 79.3807 64.5595 79.7372 63.0954 79.7035V79.7035ZM32.5591 47.1911C37.1856 55.4353 43.0948 62.8906 50.0649 69.2772C57.2336 75.445 62.9201 76.771 65.3649 75.3335C67.9149 73.8513 69.7955 67.8014 67.8575 58.0126C65.7343 49.1097 62.2153 40.599 57.4312 32.7963C53.0765 24.9459 47.5459 17.8082 41.0315 11.6313C33.305 4.7718 27.0384 3.23862 24.4852 4.71762C23.6894 5.3643 23.0364 6.16896 22.5673 7.08079C22.0982 7.99261 21.8233 8.99179 21.7599 10.0152C21.2531 13.8023 21.4182 17.649 22.2476 21.3787C24.2886 30.4794 27.7707 39.1956 32.5623 47.1974L32.5591 47.1911Z"
                            fill="#00D8FF"
                        />
                    </svg>
                    <span>React.js</span>
                </div>
                <div className={`${styles.skills__icons} `}>
                    <svg
                        width="75"
                        height="99"
                        viewBox="0 0 75 99"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clipPath="url(#clip0_31_67)">
                            <path
                                d="M18.9458 0H29.5801V4.44675H23.3926V8.8935H29.5801V13.3402H18.9458V0Z"
                                fill="#8D8D8D"
                            />
                            <path
                                d="M31.7043 0H42.3427V3.86925H36.1552V4.64062H42.3427V13.5341H31.7043V9.47512H37.8918V8.69962H31.7043V0Z"
                                fill="#8D8D8D"
                            />
                            <path
                                d="M44.4712 0H55.1013V3.86925H48.9138V4.64062H55.1013V13.5341H44.4712V9.47512H50.6587V8.69962H44.4712V0Z"
                                fill="#8D8D8D"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M37.4629 99.0001L8.81887 91.0471L0.375 19.4578H74.625L66.1853 91.0389L37.4629 99.0001ZM17.0689 51.8638L17.8567 60.6418H48.2869L47.268 72.0268L37.4753 74.675H37.467L27.6907 72.035L27.0638 65.0349H18.2486L19.4779 78.8206L37.4629 83.8119L55.4767 78.8206L57.6712 54.2191L57.8857 51.8638L59.4698 34.0891H15.489L16.2892 42.8713H49.8503L49.05 51.8638H17.0689V51.8638Z"
                                fill="#278AE5"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_31_67">
                                <rect width="75" height="99" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <span>CSS</span>
                </div>
                <div className={`${styles.skills__icons} `}>
                    <svg
                        width="71"
                        height="81"
                        viewBox="0 0 71 81"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clipPath="url(#clip0_31_82)">
                            <path
                                d="M35.5 80.0038C34.3976 80.0038 33.3686 79.7098 32.4132 79.1954L22.6376 73.3889C21.1677 72.5804 21.9027 72.2864 22.3436 72.1394C24.328 71.478 24.6955 71.331 26.7534 70.1548C26.9742 70.0078 27.2682 70.0813 27.4884 70.2283L34.9855 74.7118C35.2795 74.8588 35.647 74.8588 35.8675 74.7118L65.1938 57.7336C65.4878 57.5867 65.6348 57.2927 65.6348 56.9252V23.0418C65.6348 22.6743 65.4878 22.3804 65.1938 22.2334L35.8675 5.32843C35.5735 5.18144 35.206 5.18144 34.9855 5.32843L5.6592 22.2336C5.36522 22.3806 5.21822 22.7481 5.21822 23.0421V56.9252C5.21822 57.2192 5.36522 57.5867 5.6592 57.7336L13.6708 62.3639C18.0074 64.5688 20.7265 61.9964 20.7265 59.4241V25.9817C20.7265 25.5407 21.0942 25.0997 21.6087 25.0997H25.3573C25.7982 25.0997 26.2392 25.4672 26.2392 25.9817V59.4238C26.2392 65.2303 23.0786 68.6111 17.5661 68.6111C15.8757 68.6111 14.5528 68.6111 10.8045 66.7737L3.08684 62.3639C1.17594 61.2612 0 59.2033 0 56.9984V23.1156C0 20.9107 1.17594 18.8528 3.08684 17.7501L32.4132 0.771953C34.2506 -0.256992 36.7494 -0.256992 38.5868 0.771953L67.9132 17.7501C69.8241 18.8525 71 20.9104 71 23.1156V56.9987C71 59.2036 69.8241 61.2615 67.9132 62.3639L38.5868 79.3426C37.6314 79.7836 36.5289 80.0041 35.5 80.0041V80.0038ZM44.5403 56.7044C31.6779 56.7044 29.0321 50.8247 29.0321 45.8267C29.0321 45.3857 29.3995 44.9448 29.914 44.9448H33.7358C34.1768 44.9448 34.5446 45.2388 34.5446 45.6797C35.1325 49.575 36.8229 51.4862 44.6138 51.4862C50.7877 51.4862 53.4339 50.0898 53.4339 46.7825C53.4339 44.8713 52.6989 43.4749 43.0704 42.5191C35.059 41.7107 30.061 39.9468 30.061 33.5526C30.061 27.5989 35.0587 24.071 43.4379 24.071C52.8456 24.071 57.4762 27.3049 58.0641 34.3608C58.0641 34.5813 57.9906 34.8018 57.8436 35.0222C57.6967 35.1692 57.4762 35.3162 57.2557 35.3162H53.4339C53.0661 35.3162 52.6989 35.0222 52.6251 34.6548C51.7432 30.6125 49.4648 29.2895 43.4379 29.2895C36.6762 29.2895 35.8675 31.6414 35.8675 33.4053C35.8675 35.537 36.8229 36.1982 45.9367 37.3741C54.9773 38.5501 59.2401 40.2407 59.2401 46.5617C59.1666 53.0296 53.8749 56.7044 44.5403 56.7044V56.7044Z"
                                fill="#539E43"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_31_82">
                                <rect width="71" height="80.1523" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <span>Node.js</span>
                </div>
                <div className={`${styles.skills__icons} `}>
                    <svg
                        width="74"
                        height="85"
                        viewBox="0 0 74 85"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M66.0714 5.28564H7.92857C3.55134 5.28564 0 8.83698 0 13.2142V71.3571C0 75.7343 3.55134 79.2856 7.92857 79.2856H66.0714C70.4487 79.2856 74 75.7343 74 71.3571V13.2142C74 8.83698 70.4487 5.28564 66.0714 5.28564ZM40.2705 62.999C40.2705 70.2008 36.042 73.4879 29.8808 73.4879C24.3143 73.4879 21.0933 70.6138 19.4415 67.1285L25.1071 63.7093C26.1973 65.6419 27.1884 67.2772 29.5835 67.2772C31.8629 67.2772 33.3165 66.3852 33.3165 62.8999V39.2629H40.2705V62.999V62.999ZM56.7223 73.4879C50.2638 73.4879 46.0848 70.4156 44.0531 66.3852L49.7187 63.1147C51.2054 65.5428 53.1545 67.3432 56.5737 67.3432C59.4478 67.3432 61.2978 65.9062 61.2978 63.9075C61.2978 61.5289 59.4147 60.6865 56.2268 59.2825L54.4924 58.5392C49.471 56.4084 46.1509 53.716 46.1509 48.0504C46.1509 42.8307 50.1317 38.8664 56.3259 38.8664C60.7527 38.8664 63.9241 40.4026 66.2036 44.433L60.7857 47.9017C59.5964 45.7709 58.308 44.9285 56.3094 44.9285C54.2777 44.9285 52.9893 46.2169 52.9893 47.9017C52.9893 49.983 54.2777 50.8254 57.2674 52.1303L59.0018 52.8736C64.9152 55.4008 68.2353 57.9941 68.2353 63.8084C68.2353 70.0522 63.3129 73.4879 56.7223 73.4879V73.4879Z"
                            fill="#EAD41C"
                        />
                    </svg>
                    <span>JavaScript</span>
                </div>
                <div className={`${styles.skills__icons} `}>
                    <svg
                        width="82"
                        height="81"
                        viewBox="0 0 82 81"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clipPath="url(#clip0_31_92)">
                            <rect
                                x="1.0647"
                                width="79.8701"
                                height="79.8701"
                                rx="39.9351"
                                fill="#C2C2C2"
                            />
                            <path
                                d="M64.1072 38.7123C64.1072 34.4227 62.5644 31.4534 61.2441 29.1417L60.8394 28.4841C59.2359 25.9043 57.8347 23.6381 57.8347 20.9976C57.8347 17.8108 60.2527 14.8365 63.6621 14.8365C63.7632 14.8365 63.8593 14.8466 63.9554 14.8516L64.1123 14.8668C57.7192 8.99466 49.352 5.74094 40.6714 5.75149C34.9183 5.74854 29.2548 7.17707 24.1914 9.90837C19.1279 12.6397 14.8236 16.5879 11.6663 21.3972C12.4757 21.4225 13.2496 21.4428 13.9022 21.4428C17.5291 21.4428 23.149 21.0027 23.149 21.0027C25.0206 20.8914 25.2432 23.6381 23.3716 23.8607C23.3716 23.8607 21.4949 24.0833 19.4007 24.1895L32.0468 61.794L39.6345 39.0006L34.2219 24.1845C32.3554 24.0732 30.5849 23.8557 30.5849 23.8557C28.7133 23.7444 28.9359 20.8813 30.8024 20.9926C30.8024 20.9926 36.5387 21.4327 39.9481 21.4327C43.58 21.4327 49.205 20.9926 49.205 20.9926C51.0767 20.8813 51.2942 23.6331 49.4225 23.8557C49.4225 23.8557 47.5408 24.0732 45.4517 24.1845L57.9966 61.5006L61.4566 49.9319L61.7297 49.0568C63.0955 44.7065 64.1021 41.4944 64.1021 38.7072L64.1072 38.7123ZM5.95535 40.4676C5.95501 46.9866 7.78994 53.3741 11.2502 58.899C14.7104 64.4239 19.6561 68.8631 25.5214 71.7085L8.95501 26.3343C6.97124 30.7817 5.94905 35.5978 5.95535 40.4676V40.4676Z"
                                fill="#1C85B4"
                            />
                            <path
                                d="M30.8625 73.7675L41.2829 43.5028L51.9512 72.7406C52.022 72.9075 52.1029 73.0643 52.1991 73.2161C45.3218 75.639 37.8557 75.8319 30.8625 73.7675V73.7675ZM71.1277 23.8103C71.2795 24.9181 71.3655 26.1018 71.3655 27.3816C71.3655 30.9022 70.7079 34.863 68.725 39.8152L58.1225 70.4694C65.9464 65.9236 71.6853 58.5016 74.1157 49.7855C76.5461 41.0693 75.4757 31.7486 71.1328 23.8103H71.1277Z"
                                fill="#1C85B4"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0.203613 40.4675C0.203613 18.1547 18.3584 0 40.6711 0C62.9789 0 81.1387 18.1547 81.1387 40.4675C81.1387 62.7803 62.9789 80.9351 40.6711 80.9351C18.3584 80.9351 0.203613 62.7803 0.203613 40.4675ZM2.06006 40.4675C2.06006 61.7585 19.3802 79.0786 40.6711 79.0786C61.9571 79.0786 79.2772 61.7585 79.2772 40.4675C79.2772 19.1715 61.9571 1.85645 40.6711 1.85645C19.3751 1.85645 2.06006 19.1715 2.06006 40.4675Z"
                                fill="#1C85B4"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_31_92">
                                <rect width="82" height="80.9351" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <span>WordPress</span>
                </div>
                <div className={`${styles.skills__icons} `}>
                    <svg
                        width="66"
                        height="99"
                        viewBox="0 0 66 99"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clipPath="url(#clip0_31_86)">
                            <path
                                d="M16.5 99C25.608 99 33 91.608 33 82.5V66H16.5C7.392 66 0 73.392 0 82.5C0 91.608 7.392 99 16.5 99Z"
                                fill="#0ACF83"
                            />
                            <path
                                d="M0 49.5C0 40.392 7.392 33 16.5 33H33V66H16.5C7.392 66 0 58.608 0 49.5Z"
                                fill="#A259FF"
                            />
                            <path
                                d="M0 16.5C0 7.392 7.392 0 16.5 0H33V33H16.5C7.392 33 0 25.608 0 16.5Z"
                                fill="#F24E1E"
                            />
                            <path
                                d="M33 0H49.5C58.608 0 66 7.392 66 16.5C66 25.608 58.608 33 49.5 33H33V0Z"
                                fill="#FF7262"
                            />
                            <path
                                d="M66 49.5C66 58.608 58.608 66 49.5 66C40.392 66 33 58.608 33 49.5C33 40.392 40.392 33 49.5 33C58.608 33 66 40.392 66 49.5Z"
                                fill="#1ABCFE"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_31_86">
                                <rect width="66" height="99" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <span>Figma</span>
                </div>
                <div className={`${styles.skills__icons} `}>
                    <svg
                        width="90"
                        height="67"
                        viewBox="0 0 90 67"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clipPath="url(#clip0_31_80)">
                            <path
                                d="M77.402 38.5264C74.5838 38.5301 71.8034 39.1745 69.271 40.4109C68.4781 39.0951 67.8658 37.6786 67.4506 36.1996C67.212 35.0402 67.1569 33.8506 67.2872 32.6742C67.5611 31.3796 67.9165 30.1036 68.3512 28.8539C68.3352 28.6904 68.1557 27.918 66.3513 27.8924C64.5469 27.8667 62.9925 28.2353 62.8259 28.7128C62.5125 29.5851 62.2608 30.4782 62.0727 31.3858C60.5794 35.0699 58.7412 38.6046 56.5826 41.9428C55.3733 39.9603 54.8759 37.6247 55.1725 35.3214C55.4464 34.0269 55.8018 32.7509 56.2365 31.5011C56.2205 31.3377 56.041 30.5653 54.2366 30.5397C52.4322 30.514 50.8779 30.8826 50.7112 31.3601C50.5445 31.8377 50.333 32.9626 49.958 34.033C49.5831 35.1035 45.2051 44.885 44.0577 47.4073C43.468 48.6892 42.9584 49.7341 42.5995 50.4391C42.5825 50.4849 42.561 50.5289 42.5354 50.5705L42.045 51.5064V51.5224C41.7983 51.9647 41.5354 52.3749 41.404 52.3749C41.1749 51.4593 41.1859 50.5 41.4361 49.5898C42.0771 46.1958 43.6475 40.9205 43.6315 40.7378C43.6315 40.6384 43.9263 39.7218 42.6155 39.2475C42.3115 39.1028 41.9701 39.0559 41.6384 39.1133C41.3066 39.1707 41.0008 39.3296 40.7631 39.568C40.6477 39.568 40.5676 39.8468 40.5676 39.8468C40.5676 39.8468 41.9938 33.9145 37.8466 33.9145C36.2316 34.2393 34.6978 34.8839 33.3356 35.8102C31.9734 36.7365 30.8101 37.9259 29.9143 39.3084C28.799 39.9141 26.4241 41.2089 23.8826 42.6031C22.9211 43.1447 21.9148 43.6863 20.9822 44.2055C20.9181 44.1414 20.8508 44.0581 20.7867 43.994C15.7389 38.6161 6.46056 34.8215 6.86118 27.6264C7.00861 25.0047 7.9092 18.1205 24.6775 9.75881C38.4779 2.95793 49.4613 4.84243 51.3618 9.02168C54.0828 14.9893 45.4775 26.0688 31.2187 27.6744C29.6413 27.9945 28.0121 27.9559 26.4516 27.5614C24.8911 27.167 23.4392 26.4269 22.2032 25.3957C21.4501 24.5753 21.3347 24.5272 21.0559 24.6906C20.5976 24.9374 20.8924 25.6746 21.0559 26.1008C21.5998 27.0852 22.3356 27.9506 23.2196 28.6458C24.1037 29.3411 25.1181 29.8521 26.203 30.1487C31.8124 31.3608 37.6608 30.7813 42.9232 28.4917C51.5765 25.1489 58.3069 15.8546 56.3327 8.06981C54.3488 0.16963 41.2374 -2.43599 28.8279 1.98042C21.0551 4.59589 13.873 8.71561 7.69126 14.1047C0.855122 20.4986 -0.224945 26.0527 0.217337 28.3827C1.81981 36.6451 13.2006 42.0198 17.7548 46.0099C17.549 46.1269 17.3417 46.2412 17.133 46.3528C14.8543 47.4842 6.16891 52.0256 3.99276 56.8266C1.53457 62.275 4.38697 66.169 6.27147 66.6946C9.11107 67.3743 12.092 67.1504 14.7983 66.0542C17.5045 64.9579 19.8008 63.044 21.3667 60.5796C22.7002 58.5355 23.5199 56.1994 23.7559 53.7703C23.992 51.3412 23.6374 48.891 22.7224 46.6285C22.707 46.5919 22.6853 46.5583 22.6583 46.5291L24.4435 45.4811C25.5282 44.8399 26.6267 44.2222 27.7382 43.6286C27.071 45.553 26.6793 47.5621 26.5748 49.5962C26.3482 52.7139 27.3024 55.8028 29.2477 58.2496C29.5437 58.5044 29.8873 58.6979 30.2587 58.819C30.63 58.94 31.0217 58.9861 31.411 58.9547C33.334 58.9547 34.2154 57.3522 35.18 55.4485C36.3595 53.1217 37.4235 50.4167 37.4235 50.4167C37.4235 50.4167 36.0967 57.7272 39.7022 57.7272C41.013 57.7272 42.3399 56.0222 42.9328 55.1632V55.1792L43.0322 55.0158L43.2437 54.6729V54.6408C43.7693 53.7242 44.9487 51.641 46.7018 48.1829C48.9645 43.7248 51.1439 38.1514 51.1439 38.1514C51.3541 39.3762 51.6442 40.586 52.0124 41.773C52.5403 43.2118 53.1645 44.6134 53.8809 45.9682C53.3553 46.7054 53.0284 47.1156 53.0284 47.1156L53.0444 47.1316C52.6181 47.6893 52.1598 48.295 51.6502 48.8847C50.1341 50.5516 48.7274 52.3148 47.4389 54.1633C47.2475 54.4738 47.1817 54.8456 47.255 55.2029C47.3282 55.5602 47.535 55.8761 47.8332 56.0863C48.5078 56.4373 49.2769 56.5642 50.0285 56.4484C51.1613 56.3844 52.2752 56.1298 53.3232 55.6952C54.336 55.3388 55.2915 54.8368 56.1596 54.205C57.0545 53.585 57.7749 52.7451 58.2514 51.7663C58.7279 50.7874 58.9446 49.7024 58.8806 48.6155C58.7798 47.2465 58.4301 45.9073 57.8486 44.6638C58.0121 44.4331 58.1691 44.2055 58.3229 43.9748C60.1451 41.255 61.7873 38.419 63.2393 35.4849C63.4495 36.7097 63.7396 37.9195 64.1079 39.1065C64.5432 40.3498 65.0792 41.5557 65.7103 42.712C63.6141 44.3248 61.963 46.4447 60.9125 48.8719C59.8805 51.8557 60.6818 53.1986 62.1945 53.5095C63.0223 53.5665 63.8499 53.397 64.5886 53.0191C65.6747 52.6622 66.6978 52.1365 67.6205 51.4615C68.5933 50.8874 69.4082 50.0803 69.9917 49.113C70.5752 48.1457 70.9091 47.0485 70.9632 45.9202C70.8905 44.7938 70.6361 43.6867 70.2101 42.6415C72.9762 41.5608 75.9755 41.2163 78.9147 41.6416C86.7155 42.5582 88.2571 47.4265 87.9622 49.4777C87.824 50.2048 87.5316 50.8939 87.1048 51.4987C86.6781 52.1035 86.1268 52.6099 85.488 52.9839C84.9464 53.3268 84.7669 53.4422 84.815 53.689C84.8791 54.0511 85.1355 54.0319 85.6002 53.9678C86.7759 53.6024 87.8132 52.8891 88.5753 51.9222C89.3375 50.9552 89.7886 49.78 89.8692 48.5514C90.116 43.744 85.5265 38.4719 77.4116 38.52L77.402 38.5264ZM17.2131 58.8072C14.6236 61.6276 11.018 62.6916 9.46039 61.791C7.78741 60.8296 8.44442 56.6631 11.6237 53.6761C13.5097 51.9784 15.5481 50.4582 17.7131 49.1347C18.0913 48.904 18.649 48.5771 19.3156 48.1733L19.4951 48.0739L19.8893 47.8271C20.4573 49.7302 20.5088 51.7501 20.0385 53.6797C19.5682 55.6092 18.5931 57.3789 17.2131 58.8072V58.8072ZM36.0614 45.9875C35.1608 48.1829 33.2763 53.8075 32.1289 53.4935C31.145 53.2306 30.5265 48.9681 31.9334 44.7568C32.6438 42.7295 33.6786 40.831 34.9974 39.1353C36.4075 37.5617 37.9651 37.0361 38.3401 37.6771C37.998 40.5451 37.23 43.3461 36.0614 45.9875V45.9875ZM51.615 53.4294C51.2368 53.6249 50.8779 53.7498 50.7144 53.6601C50.599 53.596 50.8779 53.3396 50.8779 53.3396C50.8779 53.3396 52.8297 51.2404 53.5988 50.2917C54.0411 49.7341 54.5603 49.0802 55.1244 48.3399V48.5514C55.1244 51.0577 52.6983 52.7467 51.6182 53.4358L51.615 53.4294ZM63.6143 50.6923C63.3355 50.4968 63.3835 49.8398 64.3194 47.7919C64.9701 46.4766 65.8791 45.3059 66.9923 44.3498C67.1629 44.8349 67.2517 45.345 67.2551 45.8593C67.2677 46.9539 66.9177 48.0219 66.2597 48.8968C65.6017 49.7716 64.6727 50.4041 63.6175 50.6955L63.6143 50.6923Z"
                                fill="#CD6799"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_31_80">
                                <rect width="90" height="66.9767" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <span>Sass</span>
                </div>
                <div className={`${styles.skills__icons} `}>
                    <svg
                        width="88"
                        height="88"
                        viewBox="0 0 88 88"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clip-path="url(#clip0_123_2)">
                            <path
                                d="M43.6273 0.0249023C21.3413 0.0249023 22.7328 9.72733 22.7328 9.72733L22.7576 19.7793H44.0247V22.7972H14.3106C14.3106 22.7972 0.0498047 21.1735 0.0498047 43.7481C0.0498047 66.3234 12.497 65.5228 12.497 65.5228H19.9254V55.047C19.9254 55.047 19.525 42.551 32.1739 42.551H53.2671C53.2671 42.551 65.1179 42.7432 65.1179 31.0527V11.723C65.1179 11.723 66.9178 0.0249023 43.6273 0.0249023ZM31.9007 6.78468C32.4032 6.78423 32.9009 6.88327 33.3653 7.07613C33.8297 7.269 34.2516 7.5519 34.607 7.90866C34.9624 8.26541 35.2442 8.68901 35.4363 9.15522C35.6284 9.62143 35.727 10.1211 35.7266 10.6256C35.727 11.1302 35.6284 11.6298 35.4363 12.096C35.2442 12.5622 34.9624 12.9858 34.607 13.3426C34.2516 13.6993 33.8297 13.9823 33.3653 14.1751C32.9009 14.368 32.4032 14.467 31.9007 14.4666C31.3981 14.467 30.9004 14.368 30.436 14.1751C29.9716 13.9823 29.5497 13.6993 29.1943 13.3426C28.8389 12.9858 28.5571 12.5622 28.365 12.096C28.1729 11.6298 28.0743 11.1302 28.0747 10.6256C28.0743 10.1211 28.1729 9.62143 28.365 9.15522C28.5571 8.68901 28.8389 8.26541 29.1943 7.90866C29.5497 7.5519 29.9716 7.269 30.436 7.07613C30.9004 6.88327 31.3981 6.78423 31.9007 6.78468V6.78468Z"
                                fill="url(#paint0_linear_123_2)"
                            />
                            <path
                                d="M44.2602 87.6984C66.5462 87.6984 65.1547 77.996 65.1547 77.996L65.13 67.9443H43.8625V64.9264H73.5766C73.5766 64.9264 87.8374 66.5501 87.8374 43.9748C87.8374 21.3999 75.3902 22.2005 75.3902 22.2005H67.9618V32.676C67.9618 32.676 68.3622 45.172 55.7133 45.172H34.6201C34.6201 45.172 22.7693 44.9798 22.7693 56.6707V76.0006C22.7693 76.0006 20.9698 87.6984 44.2599 87.6984H44.2602ZM55.9869 80.9393C55.4843 80.9398 54.9866 80.8407 54.5222 80.6479C54.0578 80.455 53.6359 80.1721 53.2805 79.8154C52.9252 79.4586 52.6434 79.035 52.4513 78.5688C52.2592 78.1026 52.1605 77.6029 52.161 77.0984C52.1605 76.5938 52.2591 76.0941 52.4512 75.6279C52.6433 75.1616 52.9251 74.738 53.2804 74.3812C53.6358 74.0244 54.0577 73.7415 54.5222 73.5486C54.9866 73.3557 55.4843 73.2566 55.9869 73.2571C56.4894 73.2566 56.9872 73.3557 57.4515 73.5485C57.9159 73.7414 58.3379 74.0243 58.6932 74.3811C59.0486 74.7378 59.3304 75.1614 59.5225 75.6276C59.7146 76.0938 59.8133 76.5935 59.8128 77.098C59.8133 77.6026 59.7146 78.1022 59.5225 78.5684C59.3304 79.0346 59.0486 79.4582 58.6932 79.815C58.3379 80.1718 57.9159 80.4547 57.4515 80.6475C56.9872 80.8404 56.4894 80.9394 55.9869 80.939V80.9393Z"
                                fill="url(#paint1_linear_123_2)"
                            />
                        </g>
                        <defs>
                            <linearGradient
                                id="paint0_linear_123_2"
                                x1="8.48616"
                                y1="7.91061"
                                x2="52.1596"
                                y2="50.9794"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stop-color="#387EB8" />
                                <stop offset="1" stop-color="#366994" />
                            </linearGradient>
                            <linearGradient
                                id="paint1_linear_123_2"
                                x1="35.1895"
                                y1="35.6766"
                                x2="82.0812"
                                y2="79.8317"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stop-color="#FFE052" />
                                <stop offset="1" stop-color="#FFC331" />
                            </linearGradient>
                            <clipPath id="clip0_123_2">
                                <rect width="88" height="88" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>

                    <span>Python</span>
                </div>
                <div className={`${`${styles.skills__icons} `} ${styles.last}`}>
                    <svg
                        width="119"
                        height="81"
                        viewBox="0 0 119 81"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clipPath="url(#clip0_31_84)">
                            <path
                                d="M31.5347 21.0286H56.7417V23.0323H33.8454V38.1111H55.3765V40.1145H33.8454V56.6696H57.0043V58.673H31.5347V21.0286ZM59.0001 21.0286H61.6782L73.5464 37.5838L85.6771 21.0284L102.177 0L75.0692 39.3238L89.0381 58.673H86.2548L73.5464 41.0636L60.7852 58.673H58.0546L72.1285 39.3236L58.9998 21.0286H59.0001ZM90.0357 23.0323V21.0284H118.761V23.032H105.527V58.6727H103.217V23.0323H90.0357ZM0 21.0284H2.88827L42.7159 80.627L26.2573 58.6727L2.41555 23.8757L2.31062 58.6733H0V21.0284ZM118.528 56.0646C118.056 56.0646 117.702 55.6991 117.702 55.2261C117.702 54.7537 118.056 54.3877 118.528 54.3877C119.006 54.3877 119.355 54.7534 119.355 55.2261C119.355 55.6989 119.006 56.0646 118.528 56.0646ZM120.799 53.8589H122.035C122.052 54.5284 122.541 54.9787 123.26 54.9787C124.064 54.9787 124.519 54.4947 124.519 53.5887V47.8487H125.778V53.5942C125.778 55.2261 124.834 56.1661 123.272 56.1661C121.805 56.1661 120.799 55.2543 120.799 53.8586V53.8589ZM127.425 53.7858H128.673C128.779 54.5566 129.532 55.046 130.617 55.046C131.629 55.046 132.371 54.5227 132.371 53.8025C132.371 53.1836 131.898 52.8122 130.825 52.559L129.78 52.3058C128.313 51.9622 127.644 51.2533 127.644 50.0604C127.644 48.6143 128.824 47.6519 130.594 47.6519C132.241 47.6519 133.444 48.614 133.517 49.9816H132.292C132.174 49.2332 131.522 48.766 130.577 48.766C129.583 48.766 128.92 49.2444 128.92 49.9758C128.92 50.5553 129.347 50.8876 130.403 51.1351L131.297 51.3546C132.96 51.743 133.646 52.4183 133.646 53.6394C133.646 55.1925 132.444 56.1661 130.522 56.1661C128.723 56.1661 127.515 55.2374 127.425 53.7855V53.7858Z"
                                fill="#00D8FF"
                            />
                            <rect x="117" y="54" width="2" height="3" fill="black" />
                        </g>
                        <defs>
                            <clipPath id="clip0_31_84">
                                <rect width="119" height="81" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <span>Next.js</span>
                </div>
            </div>
        </div>
    );
}
