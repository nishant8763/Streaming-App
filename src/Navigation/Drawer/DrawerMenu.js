import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Tab from '../Tab/Tab';
import DrawerContent from './drawerContent';

const Drawer = createDrawerNavigator();
export default function DrawerMenu() {

    return (
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}
            drawerType='front'
            openByDefault={false}
            overlayColor="transparent"
            statusBarAnimation='none'
            keyboardDismissMode='none'
        >
            <Drawer.Screen name="Tab" component={Tab} />
        </Drawer.Navigator>
    );
}
