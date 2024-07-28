import clsx from 'clsx';
import styles from './TransactionHistory.module.css';
import TransactionItem from '../TransactionItem/TransactionItem';

const TransactionHistory = ({ items }) => {
    const tableHead = clsx(styles.tableHead);
    const tableStyles = clsx(styles.tableStyles);

    return (
        <table className={tableStyles}>
            <thead>
                <tr>
                    <th className={tableHead}>Type</th>
                    <th className={tableHead}>Amount</th>
                    <th className={tableHead}>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(({ id, type, amount, currency }) => (
                    <TransactionItem
                        key={id}
                        type={type}
                        amount={amount}
                        currency={currency}
                    />
                ))}
            </tbody>
        </table>
    );
};

export default TransactionHistory;