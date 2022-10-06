import React from 'react';
import styles from './Feedback.module.css';

export default function FeedbackValue({ good, neutral, bad, total, positivePercentage }) {
    console.log(positivePercentage);
    return (
    <div className={styles.wrapperValue}>
      <h2 className={styles.description}>Statistics</h2>
      <ul className={styles.list}>
        <li className={styles.item}>Good: {good}</li>
        <li className={styles.item}>Neutral: {neutral}</li>
        <li className={styles.item}>Bad: {bad}</li>
        <li className={styles.item}>Total: {total}</li>
        <li className={styles.item}>Total: {positivePercentage}%</li>
      </ul>
    </div>
  );
}
