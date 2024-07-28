import clsx from 'clsx';
import styles from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem';


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