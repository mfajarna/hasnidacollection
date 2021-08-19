/**
 * @format
 */

import {AppRegistry, Platform} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import setup from './src/setup'




AppRegistry.registerComponent(appName, () => App);
