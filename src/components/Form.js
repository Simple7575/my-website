import { useFormik } from "formik";
import { useState } from "react";
import styles from "../style/form.module.scss";

export default function Form({ formState, setFormState }) {
    const [successMsgState, setSuccessMsgState] = useState(true);

    const encode = (data) => {
        return Object.keys(data)
            .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    };

    const closeForm = () => {
        setFormState(true);
        document.body.classList.remove("fixed");
    };

    const closeSuccessMsg = (e) => {
        setSuccessMsgState(true);
        document.body.classList.remove("fixed");
        setTimeout(() => setFormState(true), 300);
    };

    const formik = useFormik({
        initialValues: {
            name: "",
            secondname: "",
            number: "",
            email: "",
            "message-text": "",
        },
        onSubmit: (values, onSubmitProps) => {
            fetch("/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: encode({ "form-name": "Message", ...values }),
            })
                .then(() => {
                    setSuccessMsgState(false);
                    onSubmitProps.resetForm();
                })
                .catch((error) => alert(error));
        },
    });

    return (
        <div className={`${styles.form__container} ${formState ? styles.close : styles.open}`}>
            <div className={`${styles.on_success} ${successMsgState ? "" : styles.open}`}>
                <div
                    className={`${styles.on_success__inner} ${successMsgState ? "" : styles.open}`}
                >
                    <p className={styles.on_success__message}>
                        Thank you for contacting me. I will be in touch with you shortly.
                    </p>
                    <button className={styles.on_success__button} onClick={closeSuccessMsg}>
                        Close
                    </button>
                </div>
            </div>
            <div className={styles.form__inner__wrapper}>
                <div className={styles.form__headline}>
                    <h3>Message me.</h3>
                </div>
                <div className={styles.form__close}>
                    <svg
                        onClick={closeForm}
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M15 29.28C7.10397 29.28 0.719971 22.896 0.719971 15C0.719971 7.104 7.10397 0.720001 15 0.720001C22.896 0.720001 29.28 7.104 29.28 15C29.28 22.896 22.896 29.28 15 29.28ZM15 2.4C8.02797 2.4 2.39997 8.028 2.39997 15C2.39997 21.972 8.02797 27.6 15 27.6C21.972 27.6 27.6 21.972 27.6 15C27.6 8.028 21.972 2.4 15 2.4Z"
                            fill="#FBFBFB"
                        />
                        <path
                            d="M21.1177 7.69368L22.3055 8.88228L8.88228 22.3055L7.69452 21.1177L21.1177 7.69368Z"
                            fill="#FBFBFB"
                        />
                        <path
                            d="M8.88228 7.69368L22.3055 21.1169L21.1177 22.3055L7.69452 8.88228L8.88228 7.69368Z"
                            fill="#FBFBFB"
                        />
                    </svg>
                </div>
                <div className={styles.form__wrapper}>
                    <form
                        onSubmit={formik.handleSubmit}
                        // action="/"
                        name="Message"
                        method="POST"
                        data-netlify="true"
                    >
                        <input type="hidden" name="form-name" value="Message" />
                        <div className={styles.form__name}>
                            <label htmlFor="name">Name</label>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                required
                            />
                        </div>
                        <div className={styles.form__secondname}>
                            <label htmlFor="secondname">Second Name</label>
                            <input
                                id="secondname"
                                type="text"
                                name="secondname"
                                placeholder="Second Name"
                                value={formik.values.secondname}
                                onChange={formik.handleChange}
                                required
                            />
                        </div>
                        <div className={styles.form__number}>
                            <label htmlFor="number">Number</label>
                            <input
                                id="number"
                                type="tel"
                                name="number"
                                placeholder="Number"
                                value={formik.values.number}
                                onChange={formik.handleChange}
                            />
                        </div>
                        <div className={styles.form__email}>
                            <label htmlFor="email">Mail</label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                placeholder="Mail"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                required
                            />
                        </div>
                        <div className={styles.form__text}>
                            <label htmlFor="message-text"></label>
                            <textarea
                                name="message-text"
                                id="message-text"
                                cols="30"
                                rows="7"
                                value={formik.values["message-text"]}
                                onChange={formik.handleChange}
                                required
                            ></textarea>
                        </div>
                        <div className={styles.form__button}>
                            <button type="submit">Send</button>
                        </div>
                        <div className={styles.form__icon}>
                            <svg
                                width="75"
                                height="64"
                                viewBox="0 0 75 64"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M39.0303 40.9384L48.316 50.25L39.0044 59.5616L42.6875 63.2188L55.6563 50.25L42.6875 37.2812L39.0303 40.9384Z"
                                    fill="#AEAEAE"
                                />
                                <path
                                    d="M57.1866 40.9384L66.4722 50.25L57.1606 59.5616L60.8438 63.2188L73.8125 50.25L60.8438 37.2812L57.1866 40.9384Z"
                                    fill="#AEAEAE"
                                />
                                <path
                                    d="M32.3125 47.6562H6.375V8.51656L36.0216 29.0331C36.4557 29.3343 36.9716 29.4957 37.5 29.4957C38.0284 29.4957 38.5443 29.3343 38.9784 29.0331L68.625 8.51656V32.0938H73.8125V6.15625C73.8125 4.78044 73.266 3.46098 72.2931 2.48813C71.3203 1.51529 70.0008 0.96875 68.625 0.96875H6.375C4.99919 0.96875 3.67973 1.51529 2.70688 2.48813C1.73404 3.46098 1.1875 4.78044 1.1875 6.15625V47.6562C1.1875 49.0321 1.73404 50.3515 2.70688 51.3244C3.67973 52.2972 4.99919 52.8438 6.375 52.8438H32.3125V47.6562ZM62.9187 6.15625L37.5 23.7419L12.0812 6.15625H62.9187Z"
                                    fill="#AEAEAE"
                                />
                            </svg>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
