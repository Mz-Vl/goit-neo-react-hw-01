import clsx from "clsx";
import styles from "./TransactionItem.module.css";

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

export default TransactionItem;
