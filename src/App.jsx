import { useState } from 'react'
import './App.css'

import Profile from './components/Profile/Profile.jsx'
import userData from './userData.json'
import FriendList from './components/FriendList/FriendList.jsx'
import friends from './friends.json'
import TransactionHistory from './components/TransactionHistory/TransactionHistory.jsx'
import transactions from './transactions.json'



function App() {

  return (
    <>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  )
}

export default App
