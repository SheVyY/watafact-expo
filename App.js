// Import necessary dependencies
import { AppRegistry } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Fact from './screens/FactScreen'; // Import your FactScreen component
import { name as appName } from './app.json';

// Define your navigation stack
const AppNavigator = createStackNavigator(
  {
    FactScreen: Fact,
  },
  {
    initialRouteName: 'FactScreen',
    headerMode: 'none', // Hide the header for all screens
  }
);

// Create the app container for your navigation stack
const AppContainer = createAppContainer(AppNavigator);

// Register the main component
AppRegistry.registerComponent(appName, () => AppContainer);

// This file logically sets up your navigation stack and registers it as the main component.
