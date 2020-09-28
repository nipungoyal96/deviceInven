import React from 'react';

import SubmittedList from './SubmittedList';
import AllotedDevices from './AllotedDevices';

import{useHistory} from 'react-router-dom';
const InventoryScreen = () => {
    const history = useHistory();
    const submitDevice = () =>{
        history.push(`/submitDevice`)
    }

    return(
        <div>
            <button onClick={submitDevice}>Submit Device</button><br/><br/>
            
            <label>Alloted Devices</label>
             <AllotedDevices/><br/><br/>
             <label>Submitted  Devices</label><br/>
           <SubmittedList/>
        </div>
    )
}

export default InventoryScreen;