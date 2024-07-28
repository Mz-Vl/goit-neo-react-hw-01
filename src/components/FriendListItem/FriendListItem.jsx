import clsx from 'clsx';
import styles from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
    const userStatus = isOnline ? styles.online : styles.offline;
    const userAvatar = clsx(styles.userAvatar);
    const userName = clsx(styles.userName);
    return (
        <div>
            <img src={avatar} alt="User avatar" className={userAvatar} />
            <p className={userName}>{name}</p>
            <p className={userStatus}>
                {isOnline ? 'Online' : 'Offline'}
            </p>
        </div>
    );
};

export default FriendListItem;