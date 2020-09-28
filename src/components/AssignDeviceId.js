import React, { useState,useEffect } from 'react';
import {getDevices,getAssignedDevices} from '../services/services';
import AssignDevice from './AssignDevice';

const AssignDeviceId = (props) => {
    console.log(props.match.params.item)
    const [deviceId,setDeviceId]=useState(props.match.params.item?props.match.params.item:'');
    const [devices,setDevices] = useState();
    const [assignedDevices,setAssignedDevices] = useState();
    const [check,setCheck] = useState(false);
    const [editDevice,setEditDevice]=useState();
    useEffect(()=>{
        getDevices().then(res=>setDevices(res));
        getAssignedDevices().then(res=>setAssignedDevices(res))
    },[check,setCheck]);
    useEffect(()=>{
        if(props.match.params.item){
            if(assignedDevices){
                
                const deviceAssigned=assignedDevices.find(device => device["id"]===deviceId);
                if(deviceAssigned)setEditDevice(deviceAssigned);
                else setCheck(true);
            }
        }
    })
    const assignDevice = () =>{
        if(devices){
            const deviceFound=devices.find(device => device.id === deviceId)
          
            if(deviceFound){
                const deviceAssigned=assignedDevices.find(device => device["id"]===deviceId)
                if(!deviceAssigned){
                    setCheck(true)
                }
                else
                alert("Device already Assigned")
            }
            else
            alert('Device not found')
        }
    }
    const assignedSuccessfully = ()=>{
        setCheck(false)
    }
    return(
        <div>
            {!check && !props.match.params.item && <div>Enter the device id of the device
            <input type="text" onChange={(e) => setDeviceId(e.target.value)}   value={deviceId} name="Id" id="firstname"  placeholder="Device Id" />
            <button onClick={assignDevice}>Assign</button></div>
            }
            {
               (editDevice || check) && <div>
                    <AssignDevice id={deviceId} edit={props.match.params.item?true:false} editDevice={props.match.params.item?editDevice:null} assignedSuccessfully={assignedSuccessfully}/>
                </div>
            }
        </div>
    )
}

export default AssignDeviceId;