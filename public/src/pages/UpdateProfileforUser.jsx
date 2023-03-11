import React, {useState} from 'react';
import axios from 'axios';

import './UserProfile.css';

function UserProfile(props) {
  const [name, setName] = useState(props.name);
  const [email, setEmail] = useState(props.email);
  const [bio, setBio] = useState(props.bio);

  const handleUpdate = () => {
    axios.put(`/users/${props.id}`, { name, email, bio })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <>
      <h1>User Profile</h1>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />

        <label htmlFor="bio">Bio:</label>
        <textarea id="bio" value={bio} onChange={e => setBio(e.target.value)} />

        <button type="button" onClick={handleUpdate}>Update</button>
      </form>
    </>
  );
}
export default UserProfile;


export function TechLeaderProfile(props) {
  const [name, setName] = useState(props.name);
  const [email, setEmail] = useState(props.email);
  const [bio, setBio] = useState(props.bio);

  const handleUpdate = () => {
    axios.put(`/tech_leaders/${props.id}`, { name, email, bio })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <label>Name:</label>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <br />
      <label>Email:</label>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
      <br />
      <label>Bio:</label>
      <textarea value={bio} onChange={e => setBio(e.target.value)} />
      <br />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

