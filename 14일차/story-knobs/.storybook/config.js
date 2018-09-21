import { configure  } from '@storybook/react';
import { backgrounds  } from '@storybook/addon-backgrounds';


function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
