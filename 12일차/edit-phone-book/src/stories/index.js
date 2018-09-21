import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import App from '../App';
import PhoneForm from '../components/PhoneForm';
import PhoneInfoList from '../components/PhoneInfoList';
// import PhoneInfoList from '../components/PhoneInfoList';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

// storiesOf('Button', module)
//   .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
//   .add('with some emoji', () => (
//     <Button onClick={action('clicked')}>
//       <span role="img" aria-label="so cool">
//         😀 😎 👍 💯
//       </span>
//     </Button>
//   ));

storiesOf('Phone Book', module).add('App.js', () => <App />)
// storiesOf('Phone Book', module).add('App.js', () => <App />)

storiesOf('Component', module).add('PhoneForm.js', () => <PhoneForm />)
  .add('PhoneInfoList', () => <PhoneInfoList data={linkTo('filteredList')} />);

