import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import './styles.css';
import { Requirements } from '../components/Requirements';
import { Card } from '../components/Card/Card';

const stories = storiesOf('App Test', module);

stories.add('App', () => {
  const [valid,  setValid] = useState(false);
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const passwordRequirements = [
    {
      text: 'Must be at least 8 characters',
      validator: val => val.length >= 8,
    },
    {
      text: 'Must contain at least one number',
      validator: val => /\d/g.test(val),
    },
    {
      text: 'Must contain at least one lower-case letter',
      validator: val => /[a-z]/g.test(val),
    },
    {
      text: 'Must contain at least one upper-case letter',
      validator: val => /[A-Z]/g.test(val),
    }
  ];

  return (
    <div>
      <h1>Signup</h1>

      <Card 
            key='pub.id'
            id='1'
            title='Demo'
            detail1='pub.year'
            hdetail1='hello'
            detail2='pub.citations'
            detail3='pub.domain'
            imageUrl='pub.imageUrl'
            textAlignment='left'
          />
{/* 
      <Requirements
        value={password}
        requirements={passwordRequirements}
        onValidChange={isValid => setValid(isValid)}
      />

      <input placeholder='Username' value={username} onChange={e => setUsername(e.target.value)} />
      <input placeholder='Password' type='password' value={password} onChange={e => setPassword(e.target.value)} />

      <button disabled={!valid || !username}>Sign Up</button> */}
    </div>
  );
});
