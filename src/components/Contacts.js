import styles from "../style/contacts.module.scss";
import Tilt from "vanilla-tilt";
import { useEffect, useRef } from "react";

export default function Contacts({ setFormState }) {
    // const instaUrl = "http://instagram.com/_u/Elena_Kursk_/";
    // const whatsAppUrl = "https://wa.me/+79510873070";

    // Use international telephone number format without + but with %2B.
    const wrapperRef = useRef();
    const telegramUrl = "https://telegram.me/SimpleGM";
    const viberUrl = "viber://contact?number=%2B79011236604";

    const goTo = (url) => () => {
        window.open(url, "_blank");
    };

    const whatsAppError = () => {
        alert("Please contact me via Telegram or send me an email:)");
    };

    useEffect(() => {
        const element = wrapperRef.current;

        Tilt.init(element, {
            glare: true,
            "max-glare": 0.3,
        });
    }, []);

    return (
        <div className={styles.contacts} id="contacts">
            <div className={styles.contacts__wrapper} ref={wrapperRef}>
                <div className={`${styles.contacts__items} ${styles.first}`}>
                    <h3>Contacts</h3>
                </div>
                <div className={styles.contacts__items}>
                    <div className={styles.contacts__icon} onClick={goTo(telegramUrl)}>
                        <svg
                            width="82"
                            height="82"
                            viewBox="0 0 82 82"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0_31_98)">
                                <rect width="82" height="82" rx="41" fill="white" />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M82 41.0002C82 63.6425 63.6423 82.0003 41 82.0003C18.3578 82.0003 0 63.6425 0 41.0002C0 18.358 18.3578 0.000244141 41 0.000244141C63.6423 0.000244141 82 18.358 82 41.0002ZM42.4692 30.2685C38.4819 31.9256 30.5108 35.3593 18.5593 40.5663C16.6187 41.3385 15.6005 42.0936 15.5083 42.8316C15.3511 44.0821 16.9159 44.5741 19.0411 45.2403C19.3315 45.3326 19.6322 45.4248 19.9397 45.5273C22.0341 46.2072 24.8494 47.0033 26.3118 47.0341C27.6408 47.0614 29.1237 46.5147 30.7603 45.3941C41.9259 37.8535 47.6898 34.0439 48.052 33.9619C48.3083 33.9038 48.6636 33.8287 48.9028 34.0439C49.1419 34.2557 49.118 34.6589 49.0941 34.7682C48.9369 35.4277 42.8074 41.1301 39.6299 44.0821C38.6391 45.0012 37.9387 45.6537 37.7952 45.8041C37.474 46.1355 37.146 46.4532 36.8317 46.7573C34.8842 48.6297 33.4287 50.0373 36.9137 52.3333C38.5878 53.4369 39.9272 54.3492 41.2631 55.258C42.722 56.2523 44.1775 57.2431 46.0635 58.4799C46.5418 58.7942 46.9997 59.1188 47.4473 59.4366C49.1453 60.6495 50.6726 61.736 52.5586 61.5652C53.6519 61.4627 54.7862 60.4342 55.3602 57.3627C56.7167 50.0988 59.3885 34.3685 60.0069 27.8837C60.0446 27.3452 60.0216 26.8043 59.9386 26.271C59.8889 25.8403 59.6791 25.4439 59.3509 25.1606C58.8623 24.7608 58.1038 24.6754 57.7622 24.6822C56.2213 24.7096 53.8569 25.533 42.4692 30.2685V30.2685Z"
                                    fill="#2F9FD5"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_31_98">
                                    <rect width="82" height="82" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
                <div className={styles.contacts__items}>
                    <div className={styles.contacts__icon} onClick={goTo(viberUrl)}>
                        <svg
                            width="82"
                            height="82"
                            viewBox="0 0 82 82"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M38.9449 0.0126643C32.3644 0.0921018 18.2169 1.17348 10.3039 8.43304C4.41782 14.2653 2.3627 22.8881 2.12182 33.5507C1.92195 44.1748 1.68107 64.1264 20.9126 69.5589V77.8332C20.9126 77.8332 20.7922 81.144 22.9806 81.823C25.6763 82.6763 27.2113 80.1292 29.7738 77.3925L34.5528 71.9882C47.7113 73.0823 57.7896 70.5608 58.9504 70.1867C61.6205 69.3334 76.6598 67.4115 79.1173 47.4573C81.6388 26.8497 77.8898 13.8655 71.1223 7.99229H71.0813C69.0389 6.11141 60.8313 0.130539 42.494 0.0639143C42.494 0.0639143 41.1333 -0.0283356 38.9449 0.0101018V0.0126643ZM39.1704 5.80648C41.0385 5.79366 42.1737 5.8731 42.1737 5.8731C57.6948 5.9141 65.1029 10.5855 66.8506 12.1589C72.5496 17.043 75.4862 28.7485 73.3363 45.9532C71.2939 62.635 59.0964 63.6908 56.8389 64.4108C55.8779 64.7183 47.0014 66.9067 35.8187 66.1867C35.8187 66.1867 27.4906 76.2368 24.8871 78.8249C24.4745 79.2785 23.9928 79.4117 23.6853 79.3451C23.2445 79.2375 23.1113 78.6917 23.1369 77.9434L23.2163 64.211C6.90601 59.701 7.86695 42.6834 8.0412 33.7941C8.24107 24.9048 9.90926 17.6324 14.8754 12.7073C21.5609 6.66235 33.5739 5.84748 39.1653 5.80648H39.1704ZM40.4004 14.6932C40.2662 14.6919 40.133 14.7171 40.0086 14.7675C39.8841 14.8178 39.7709 14.8923 39.6754 14.9866C39.5799 15.081 39.5039 15.1933 39.452 15.3171C39.4001 15.4409 39.3732 15.5737 39.3729 15.708C39.3729 16.282 39.8393 16.7355 40.4004 16.7355C42.9412 16.6872 45.4663 17.1424 47.8303 18.0748C50.1942 19.0072 52.3502 20.3983 54.1739 22.168C57.8972 25.7837 59.7114 30.6422 59.7806 36.9947C59.7806 37.5558 60.2342 38.0222 60.8082 38.0222V37.9812C61.0787 37.9819 61.3385 37.8756 61.531 37.6855C61.7235 37.4955 61.8331 37.237 61.8358 36.9665C61.9602 33.9764 61.4753 30.9923 60.4106 28.1955C59.3458 25.3986 57.7235 22.8475 55.6422 20.6972C51.5858 16.733 46.4454 14.6907 40.4004 14.6907V14.6932ZM26.8935 17.043C26.1682 16.9371 25.4284 17.0827 24.7974 17.4556H24.7436C23.2785 18.3144 21.9587 19.3998 20.8332 20.6715C19.8979 21.7529 19.3905 22.8471 19.2573 23.9003C19.1778 24.5281 19.2316 25.1559 19.4187 25.7555L19.4853 25.7965C20.5385 28.892 21.9146 31.8697 23.5956 34.673C25.7609 38.6115 28.4258 42.2539 31.5239 45.5098L31.6162 45.6431L31.7623 45.7507L31.8545 45.8583L31.9621 45.9506C35.2299 49.0579 38.8811 51.7351 42.8271 53.9174C47.3371 56.3723 50.0739 57.5331 51.7164 58.0148V58.0405C52.1982 58.1865 52.6364 58.2532 53.0771 58.2532C54.477 58.1506 55.8022 57.5823 56.8414 56.6388C58.1074 55.513 59.1807 54.1878 60.0189 52.7156V52.69C60.8056 51.2088 60.5391 49.8072 59.4039 48.859C57.1305 46.8718 54.6721 45.1067 52.0624 43.588C50.3148 42.6398 48.5389 43.2138 47.8189 44.1748L46.2839 46.1095C45.4973 47.0704 44.0674 46.9372 44.0674 46.9372L44.0264 46.9628C33.3638 44.2388 30.5194 33.443 30.5194 33.443C30.5194 33.443 30.3862 31.9747 31.3728 31.2265L33.2946 29.6787C34.2146 28.9305 34.8552 27.1572 33.8686 25.407C32.3603 22.7937 30.5992 20.3347 28.6104 18.0655C28.1756 17.5305 27.5656 17.1665 26.8884 17.0379L26.8935 17.043ZM42.1737 20.0873C40.813 20.0873 40.813 22.1424 42.1865 22.1424C43.8785 22.1699 45.5485 22.5305 47.101 23.2036C48.6535 23.8768 50.0582 24.8493 51.2347 26.0656C52.3079 27.2495 53.1326 28.6368 53.66 30.1452C54.1873 31.6536 54.4065 33.2526 54.3046 34.8473C54.3093 35.1172 54.4194 35.3745 54.6115 35.5641C54.8035 35.7538 55.0622 35.8607 55.3321 35.862L55.3731 35.9158C55.645 35.9138 55.9052 35.8049 56.0975 35.6127C56.2898 35.4204 56.3987 35.1602 56.4007 34.8883C56.4929 30.8165 55.2271 27.4007 52.744 24.6639C50.2481 21.9272 46.7657 20.3922 42.3198 20.0873H42.1737V20.0873ZM43.8573 25.612C42.4556 25.571 42.4018 27.6672 43.7906 27.7082C47.168 27.8824 48.808 29.589 49.0233 33.0997C49.0279 33.3661 49.1368 33.6202 49.3264 33.8075C49.5161 33.9947 49.7715 34.1003 50.038 34.1016H50.079C50.216 34.0957 50.3505 34.0626 50.4746 34.0042C50.5987 33.9458 50.7099 33.8632 50.8017 33.7614C50.8936 33.6595 50.9642 33.5404 51.0095 33.4109C51.0548 33.2815 51.0739 33.1443 51.0656 33.0074C50.8247 28.4308 48.3288 25.8529 43.8983 25.6146H43.8573V25.612Z"
                                fill="#6D5AE6"
                            />
                        </svg>
                    </div>
                </div>
                <div className={styles.contacts__items}>
                    <div className={styles.contacts__icon} onClick={whatsAppError}>
                        <svg
                            width="82"
                            height="82"
                            viewBox="0 0 82 82"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0_31_104)">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M59.5013 49.1386C58.4831 48.6296 53.4913 46.1764 52.562 45.8347C51.6327 45.4965 50.9562 45.3291 50.2763 46.3472C49.5998 47.3586 47.6557 49.6477 47.0646 50.3242C46.4701 51.0041 45.879 51.0861 44.8643 50.5805C43.8495 50.068 40.5763 48.9986 36.6984 45.5409C33.6815 42.8486 31.6418 39.5241 31.0507 38.506C30.4596 37.4912 30.9858 36.9411 31.4948 36.4355C31.9527 35.9811 32.5096 35.2499 33.0187 34.6588C33.5278 34.0643 33.6952 33.6406 34.0334 32.9607C34.3751 32.2842 34.2043 31.6931 33.948 31.1841C33.6952 30.675 31.6657 25.6764 30.8183 23.6435C29.9949 21.6652 29.1578 21.9351 28.536 21.901C27.9415 21.8736 27.265 21.8668 26.5885 21.8668C25.912 21.8668 24.8118 22.1196 23.8825 23.1378C22.9498 24.1526 20.3292 26.6091 20.3292 31.6077C20.3292 36.6029 23.9645 41.4306 24.4736 42.1106C24.9827 42.7871 31.6315 53.0439 41.8166 57.4411C44.2424 58.4866 46.1318 59.1119 47.6044 59.5766C50.0371 60.3521 52.2511 60.2428 54.0004 59.9797C55.9479 59.6893 60.0069 57.5231 60.8543 55.152C61.6982 52.7808 61.6982 50.7479 61.4453 50.3242C61.1925 49.9006 60.516 49.6477 59.4978 49.1386H59.5013ZM40.9761 74.4322H40.9624C34.913 74.4333 28.9746 72.8071 23.7698 69.7241L22.5398 68.9929L9.75458 72.3481L13.1678 59.8841L12.3649 58.6062C8.98289 53.2227 7.19309 46.9922 7.20233 40.6346C7.20917 22.0137 22.3587 6.86422 40.9898 6.86422C50.0098 6.86422 58.4899 10.3834 64.8654 16.7657C68.01 19.8974 70.5025 23.6215 72.1985 27.7226C73.8946 31.8238 74.7606 36.2205 74.7464 40.6585C74.7396 59.2793 59.5901 74.4322 40.9761 74.4322V74.4322ZM69.7171 11.9175C65.9526 8.12813 61.4735 5.12356 56.5393 3.07787C51.6052 1.03219 46.3141 -0.0139272 40.9727 0.000140007C18.5798 0.000140007 0.3485 18.2281 0.341667 40.6311C0.33825 47.7925 2.20717 54.783 5.76392 60.9432L0 82.0001L21.5387 76.349C27.4969 79.5952 34.1738 81.2962 40.959 81.2963H40.9761C63.3689 81.2963 81.6003 63.0684 81.6071 40.6619C81.6236 35.3226 80.5813 30.033 78.5404 25.0991C76.4995 20.1652 73.5006 15.6849 69.7171 11.9175"
                                    fill="#46A51E"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_31_104">
                                    <rect width="82" height="82" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
                <div className={`${styles.contacts__items} ${styles.last}`}>
                    <div
                        className={styles.contacts__icon}
                        onClick={() => {
                            setFormState(false);
                            document.body.classList.add("fixed");
                        }}
                    >
                        <svg
                            width="109"
                            height="83"
                            viewBox="0 0 109 83"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0_31_107)">
                                <path
                                    d="M24.771 81.7655V39.6545L11.7111 27.7066L0 21.0764V74.334C0 78.4459 3.3315 81.7655 7.43148 81.7655H24.771V81.7655Z"
                                    fill="#4285F4"
                                />
                                <path
                                    d="M84.2212 81.7653H101.561C105.673 81.7653 108.992 78.4334 108.992 74.3338V21.0767L95.7275 28.6708L84.2212 39.6543V81.7653V81.7653Z"
                                    fill="#34A853"
                                />
                                <path
                                    d="M24.771 39.6545L22.9939 23.2005L24.771 7.45239L54.496 29.7464L84.2211 7.45239L86.2094 22.3503L84.2211 39.6545L54.496 61.9485L24.771 39.6545Z"
                                    fill="#EA4335"
                                />
                                <path
                                    d="M84.2212 7.45245V39.6545L108.992 21.0765V11.168C108.992 1.97815 98.5017 -3.26071 91.1575 2.25063L84.2212 7.45245Z"
                                    fill="#FBBC04"
                                />
                                <path
                                    d="M0 21.0762L11.3927 29.621L24.771 39.6542V7.45216L17.8347 2.25034C10.4777 -3.26143 0 1.97786 0 11.1673V21.0758V21.0762Z"
                                    fill="#C5221F"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_31_107">
                                    <rect width="108.992" height="82.1699" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}
