import React from 'react';

import ViewDevices from './ViewDevices';
import AvailableDevices from './AvailableDevices';
import{useHistory} from 'react-router-dom';
const DeviceScreen = () => {
    const history = useHistory();
    const addDevice = () =>{
        history.push(`/addDevice`)
    }

    const allotDvice = () => {
        history.push(`/assignDeviceId`)
    }
    return(
        
        <div>
            
            <button onClick={addDevice}>Add a device</button>&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={allotDvice}>Allot a device</button><br/><br/>
            <label>View Devices</label><br/>
           <ViewDevices/><br/>
           <br/>
           <label>Available Devices</label><br/>
           <AvailableDevices/>
        </div>
    )
}

export default DeviceScreen;