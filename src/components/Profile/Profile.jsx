import clsx from 'clsx';
import styles from './Profile.module.css';

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

const Profile = ({ username, tag, location, avatar, stats }) => {
    const card = clsx(styles.profileCard);
    const userAvatar = clsx(styles.avatar);
    const usrName = clsx(styles.usrName);
    const additionalInfo = clsx(styles.additionalInfo);
    const userStats = clsx(styles.userStats);

    return (
        <div className={card}>
            <div className="description">
                <img
                    src={avatar}
                    alt="User avatar"
                    className={userAvatar}
                />
                <p className={usrName}>{username}</p>
                <p className={additionalInfo}>@{tag}</p>
                <p className={additionalInfo}>{location}</p>
            </div>

            <ul className={userStats}>
                <StatItem label="Followers" value={stats.followers} />
                <StatItem label="Views" value={stats.views} />
                <StatItem label="Likes" value={stats.likes} />
            </ul>
        </div>
    )
};

export default Profile