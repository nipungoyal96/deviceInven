import React, { useState,useEffect } from 'react';
import { getAssignedDevices, submitDevice } from '../services/services';

import{useHistory} from 'react-router-dom';

const SubmitDevice = () => {
    const [assignedDevices,setAssignedDevices] = useState();
    const [deviceId,setDeviceId] = useState('');
    const [subDate,setSubDate] = useState('');
    const history = useHistory();
    useEffect(()=>{getAssignedDevices().then(res=>setAssignedDevices(res))},[])
    const submitDvice = () =>{
        if(!deviceId || !subDate ){
            alert("Please Fill All details")
        }
        else{
        const findDevice=assignedDevices.find(device=>deviceId===device['id'])
        if(!findDevice){
            alert("Device Not Found");
        }
        else{
        const index=assignedDevices.indexOf(findDevice);
        
        findDevice["submitDate"]=subDate;
        submitDevice(findDevice,index)
        alert("Device Submitted");
            history.push('/inventoryScreen');
        }}
    }
    return(
        <div>
            <div>Enter the device id of the device
            <input type="text" onChange={(e) => setDeviceId(e.target.value)}   value={deviceId} name="Id" id="deviceId"  placeholder="Device Id" />
            </div>
            <div>
                Enter Date of submission
            <input type="text" onChange={(e) => setSubDate(e.target.value)}   value={subDate} name="subDate" id="subDate"  placeholder="Submission Date" />
            <button onClick={submitDvice}>Submit</button></div>

        </div>
    )
}

export default SubmitDevice;