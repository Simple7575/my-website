import styles from "../../style/skills.module.scss";

export default function Skill({ children, logo }) {
    return (
        <div className={`${styles.skills__icons} `}>
            <img src={logo} alt={`${children} logo`} />
            <span>{children}</span>
        </div>
    );
}
