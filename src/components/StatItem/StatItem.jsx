import clsx from 'clsx';
import styles from './StatItem.module.css';

const StatItem = ({ label, value }) => {
    const userStatsItem = clsx(styles.userStatsItem);
    const itemLabel = clsx(styles.itemLabel);
    const quantity = clsx(styles.quantity);

    return (
        <li className={userStatsItem}>
            <span className={itemLabel}>{label}</span>
            <span className={quantity}>{value}</span>
        </li>
    );
};

export default StatItem