import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps93344Navigator from '../features/Maps93344/navigator';
import Add-Item93343Navigator from '../features/Add-Item93343/navigator';
import Maps93339Navigator from '../features/Maps93339/navigator';
import UserProfile93335Navigator from '../features/UserProfile93335/navigator';
import BlankScreen093312Navigator from '../features/BlankScreen093312/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps93344: { screen: Maps93344Navigator },
Add-Item93343: { screen: Add-Item93343Navigator },
Maps93339: { screen: Maps93339Navigator },
UserProfile93335: { screen: UserProfile93335Navigator },
BlankScreen093312: { screen: BlankScreen093312Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
