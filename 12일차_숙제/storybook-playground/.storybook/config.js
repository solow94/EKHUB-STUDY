import { configure, addDecorator } from '@storybook/react';
import backgrounds from '@storybook/addon-backgrounds';

addDecorator(
  backgrounds([
    { name: "white", value: "#ffffff", default: true },
    { name: "pnik", value: "#ff00ff" },
    { name: "black", value: "#000000" },
    { name: "future", value: "#86E57F"},
  ])
)


function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
