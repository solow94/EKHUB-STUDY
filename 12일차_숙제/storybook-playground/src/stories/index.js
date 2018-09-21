import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import Input from './input';
import App from '../App.js';

import backgrounds from '@storybook/addon-backgrounds';

storiesOf('React.js', module).add('App.js', () => <App showApp={linkTo('Button')} />);

storiesOf('asdasd.js', module).add('App.js', () => <Input showApp={linkTo('Button')} />);

// storiesOf('Button', module)
//   .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
//   .add('with some emoji', () => (
//     <Button onClick={action('clicked')}>
//       <span role="img" aria-label="so cool">
//         😀 😎 👍 💯
//       </span>
//     </Button>
//   ));

// storiesOf('Input', module)
//   .addDecorator((story) => <div style={{ margin: '50px' }}>{story()}</div>)
//   // .addDecorator(backgrounds([
//   //   { name: "white", value: "#ffffff", default: true },
//   //   { name: "pnik", value: "#ff00ff" },
//   //   { name: "black", value: "#000000" },
//   // ]))
//   .add('default', () => <Input onChange={action('changed')} />)
//   .add('disabled', () => <Input disabled />);
