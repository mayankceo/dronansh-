import React, { useState, useEffect } from 'react';
import NavigationBottomBar from '../../components/Sidebar/ProfileBar2';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/firestore';

const ChatPage = () => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);

  useEffect(() => {
    const db = firebase.firestore();
    const userId = firebase.auth().currentUser.uid;

    db.collection('users').doc(userId).collection('followers').onSnapshot(snapshot => {
      setFollowers(snapshot.docs.map(doc => doc.id));
    });

    db.collection('users').doc(userId).collection('following').onSnapshot(snapshot => {
      setFollowing(snapshot.docs.map(doc => doc.id));
    });
  }, []);

  const handleSearch = async () => {
    const db = firebase.firestore();
    const userId = firebase.auth().currentUser.uid;

    const results = await db.collection('users').where('username', '>=', searchText).where('username', '<=', searchText + '\uf8ff').get();

    const filteredResults = results.docs.filter(doc => {
      return followers.includes(doc.id) || following.includes(doc.id);
    });

    setSearchResults(filteredResults.map(doc => ({ id: doc.id, username: doc.data().username })));
  };

  return (
    <div style={{
      padding: 0,
      margin: 0,
      fontFamily: 'Arial, sans-serif',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <NavigationBottomBar />
      <div style={{
        flex: 1,
        padding: 20,
        overflowY: 'scroll'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <h1 style={{
            fontSize: 24,
            fontWeight: 600,
            marginBottom: 10
          }}>Chat</h1>
          <Link to="/" style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            textDecoration: 'none',
            color: 'black'
          }}>
            <AiOutlineArrowRight 
              size={25} 
              fill="#333" 
              style={{ fontWeight: 900 }}
            />
          </Link>
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 10,
          border: '1px solid #ccc',
          borderRadius: 5
        }}>
          <input 
            type="text" 
            placeholder="Search..." 
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
            style={{
              flex: 1,
              padding: 10,
              border: 'none',
              borderRadius: 5
            }}
          />
          <Link to="/search" style={{
            background: '#4CAF50',
            color: '#fff',
            border: 'none',
            padding: 10,
            borderRadius: 5,
            cursor: 'pointer'
          }} onClick={handleSearch}>
            <AiOutlineArrowRight 
              size={20} 
              fill="#fff" 
            />
          </Link>
        </div>
        {searchResults.length > 0 && (
          <div style={{
            marginTop: 20
          }}>
            <h2>Search Results:</h2>
            <ul>
              {searchResults.map(result => (
                <li key={result.id}>
                  <Link to={`/profile/${result.id}`}>
                    {result.username}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatPage;







