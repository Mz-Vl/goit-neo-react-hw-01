import clsx from 'clsx';
import styles from './TransactionHistory.module.css';

const TransactionItem = ({ type, amount, currency }) => {
    const tableCell = clsx(styles.tableCell);
    
    return (
        <tr>
            <td className={tableCell}>{type}</td>
            <td className={tableCell}>{amount}</td>
            <td className={tableCell}>{currency}</td>
        </tr>
    );
};

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