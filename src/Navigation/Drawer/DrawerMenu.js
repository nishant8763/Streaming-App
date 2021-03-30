import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import Dashboard from '../Dashboard';
import Tab from '../Tab/Tab';
import DrawerContent from './drawerContent';
// import MyOrders from '../MyOrders';
// import Notifications from '../Notifications';
// import MyDeliveryAddress from '../MyDeliveryAddress'
// import Settings from '../Settings'
// import Help from "../Help"
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
