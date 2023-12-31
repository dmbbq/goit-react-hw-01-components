import React from 'react';
import Profile from './components/Profile/Profile.jsx';
import Statistics from './components/Statistics/Statistics.jsx';
import FriendList from './components/FriendList/FriendList.jsx';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import user from './data/user.json';
import data from './data/data.json';
import friends from './data/friends.json';
import transactions from './data/transaction.json'
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
      <h1>Transaction History</h1>
      <TransactionHistory items={transactions} />

    </div>
    
  );
}

export default App;