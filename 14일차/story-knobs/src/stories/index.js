import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { backgrounds } from '@storybook/addon-backgrounds';
import { Button, Welcome } from '@storybook/react/demo';

const stories = storiesOf('Storybook Knobs', module);


stories.addDecorator(withKnobs);

stories.add('with a button', () => (
  <button onClick={action('clicked')} disabled={boolean('Disabled', false)}>
    {text('Label', 'Hello Storybook')}
  </button>
));


stories.add('as dynamic variables', () => {
  const name = text('Name', 'Arunoda Susiripala');
  const age = number('Arge', 89);

  const content = `I am ${name} and I'm ${age} years old.`;
  return (<div>{content}</div>);
});

// stories2.add('First', () => {
//   <button onClick={linkTo('Storybook Linked', 'Second')}>Go to "Second"</button>
// });

// stories2.add('Second', () => {
//   <button onClick={linkTo('Storybook Linked', 'First')}>Go to "First"</button>
// });


// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

// storiesOf('Button', module)
//   .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
//   .add('with some emoji', () => (
//     <Button onClick={action('clicked')}>
//       <span role="img" aria-label="so cool">
//         😀 😎 👍 💯
//       </span>
//     </Button>
//   ));
