import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import Nav from './Nav';

import AddDevice from '../components/AddDevice';
import ViewDevices from '../components/ViewDevices';
import AssignDeviceId from '../components/AssignDeviceId';
import SubmitDevice from '../components/SubmitDevice';
import Devices from '../components/Devices';
import AvailableDevices from '../components/AvailableDevices'
import AllotedDevices from '../components/AllotedDevices';
import SubmittedList from '../components/SubmittedList';
import EditDevice from '../components/EditDevice';
import EditSubmitDevice from '../components/EditSubmitList';
import DeviceScreen from '../components/DeviceScreen';
import InventoryScreen from '../components/InventoryScreen';

const routes = () => {
    return (
        <Router>
            <div>
                <Nav>
                    <a><Link to='/deviceScreen'>View Devices</Link></a>
                    <a><Link to='/inventoryScreen'>View Inventory</Link></a>
                </Nav>
                <Switch>
                    <Route exact path='/addDevice' component={AddDevice}></Route>
                    <Route exact path='/viewDevices' component={ViewDevices}></Route>
                    <Route exact path='/assignDeviceId' component={AssignDeviceId}></Route>
                    <Route exact path='/assignDeviceId/:item' component={AssignDeviceId}></Route>
                    <Route exact path='/submitDevice' component={SubmitDevice}></Route>
                    <Route exact path='/devices' component={Devices}></Route>
                    <Route exact path='/available' component={AvailableDevices}></Route>
                    <Route exact path='/alloted' component={AllotedDevices}></Route>
                    <Route exact path='/submitted' component={SubmittedList}></Route>
                    <Route exact path='/editDevice/:item' component={EditDevice}></Route>
                    <Route exact path='/editSubmitDevice/:item' component={EditSubmitDevice}></Route>
                    <Route exact path='/deviceScreen' component={DeviceScreen}></Route>
                    <Route exact path='/inventoryScreen' component={InventoryScreen}></Route>
                </Switch>
            </div>
        </Router>
    )
}

export default routes;