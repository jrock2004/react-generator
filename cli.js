#!/usr/bin/env node

const logger = require('./logger.js');
const templates = require('./templates.js');
const utils = require('./utils.js');

const [,, ...args] = process.argv;

// Check to see if the user has provided a type and a name
if (args.length === 0) {
  logger.logError('You need to provide a type and a name');

  process.exit(1);
}

switch (args[0]) {
  case '--help':
    logger.log('Usage: react-generator [type] [name]');
    logger.log('  component: Create a new component. \n\t Ex: react-generator component button \n');
    logger.log('  css: Create a new CSS module. \n\t Ex: react-generator css button \n');
    logger.log('  story: Create a new story. \n\t Ex: react-generator story button Button \n');
    logger.log('  test: Create a new test. \n\t Ex: react-generator test button \n');

    break;
  case 'component':
    createComponent(args[1]);

    break;
  case 'css':
    createCssModule(args[1]);

    break;
  case 'story':
    if (args.length !== 3) {
      logger.logError('You need to provide a story name and title of your story');

      process.exit(1);
    } else {
      createStory(args[1], args[2]);
    }

    break;
  case 'test':
    createTest(args[1]);

    break;
  default:
    logger.logError('Something went wrong, try passing in --help to check commands');

    process.exit(1);
}

/**
 * This is used to generate a new functional component in react
 *
 * @param {string} name - The name of the component
 */
function createComponent(name) {
  const componentName = name.charAt(0).toUpperCase() + name.slice(1);
  const componentDir = `./src/components/${componentName}`;
  const componentFile = `${componentDir}/index.tsx`;

  utils.createFile(componentDir, componentFile, templates.componentTemplate(componentName));
}

/**
 * This is used to generage a new CSS module in react
 *
 * @param {string} name - The name of the css module
 */
function createCssModule(name) {
  const componentName = name.charAt(0).toUpperCase() + name.slice(1);
  const componentDir = `./src/components/${componentName}`;
  const cssModuleFile = `${componentDir}/${componentName}.module.scss`;

  utils.createFile(componentDir, cssModuleFile, templates.cssModuleTemplate(componentName));
}

/**
 * This is used to generate a new test for your component
 *
 * @param {string} name The name of the test
 */
function createTest(name) {
  const componentName = name.charAt(0).toUpperCase() + name.slice(1);
  const componentDir = `./src/components/${componentName}`;
  const testFile = `${componentDir}/${componentName}.test.tsx`;

  utils.createFile(componentDir, testFile, templates.testTemplate(componentName));
}

/**
 * This is used to generate a new story file for your component
 *
 * @param {string} name - The name of the test
 * @param {string} title - Grouping name for your story
 */
function createStory(name, title) {
  const componentName = name.charAt(0).toUpperCase() + name.slice(1);
  const componentDir = `./src/components/${componentName}`;
  const storyFile = `${componentDir}/${componentName}.stories.tsx`;

  utils.createFile(componentDir, storyFile, templates.storyTemplate(componentName, title));
}
