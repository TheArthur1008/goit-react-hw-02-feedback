import React from "react";
import styles from './Feedback.module.css';

export default function FeedbackButton({onHendelGood, onHendelNeutral, onHendelBad}) {
    return (
        <div className={styles.wrapper}>
          <button className={styles.button} onClick={onHendelGood}>
            Good
          </button>
          <button className={styles.button} onClick={onHendelNeutral}>
            Neutral
          </button>
          <button className={styles.button} onClick={onHendelBad}>
            Bad
          </button>
        </div>
    )
}