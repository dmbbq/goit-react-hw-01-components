import React from 'react';
import user from './user.json';
import Profile from './components/Profile/Profile.jsx';
import Statistics from './components/Statistics/Statistics.jsx';
import data from './data.json';
import FriendList from './components/FriendList/FriendList.jsx';
import friends from './friends.json';
function App() {
  return (
    <div className="App">
      <Profile 
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}/>
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
    </div>
    
  );
}

export default App;