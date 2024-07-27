import { useState } from 'react'
import './App.css'

import Profile from './components/Profile/Profile.jsx'
import userData from './userData.json'
import FriendList from './components/FriendList/FriendList.jsx'
import friends from './friends.json'



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


    </>
  )
}

export default App
