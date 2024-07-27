import clsx from 'clsx';
import styles from './FriendList.module.css';

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

const FriendList = ({ friends }) => {
    const listOfFriends = clsx(styles.listOfFriends);
    const listElement = clsx(styles.friensElement);
    return (
        <ul className={listOfFriends}>
            {friends.map(friend => (
                <li className={listElement} key={friend.id}>
                <FriendListItem
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline}
                    />
                </li>
            ))}
        </ul>
    );
};

export default FriendList