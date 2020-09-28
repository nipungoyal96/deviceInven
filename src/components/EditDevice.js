import React,{useState,useEffect} from 'react';

import {editDevice,getDevices,dltDevice} from '../services/services';
import{useHistory} from 'react-router-dom';

const EditDevice = (props) =>{

    
    const [deviceId,setDeviceId] = useState(props.match.params.item);
    const [deviceSrNo,setDeviceSrNo] = useState('');
    const [deviceName,setDeviceName] = useState('');
    const [deviceType,setDeviceType] = useState('');
    const [devices,setDevices] = useState();

    const history = useHistory();
    useEffect(() =>
     { getDevices().then(res => setDevices(res));
        
     }, []);
     useEffect(() =>
     { if(devices){
     
         const device=devices.find(dev=>dev["id"]===deviceId);
         console.log(device);
         setDeviceName(device.name);
         setDeviceSrNo(device.srNo);
         setDeviceType(device.type)
     }  }, [devices]);
   
    const editDvice = () => {
        if(!deviceSrNo || !deviceType || !deviceName){
            alert("Please Fill All details")
        }
        else{
            const data={id:deviceId,name:deviceName,srNo:deviceSrNo,type:deviceType}
            editDevice(data);
            alert("Field Edited");
            history.push(`/deviceScreen`)
        }
    }

    const deleteDevice = () =>{
        dltDevice(deviceId);
        alert('device deleted');
        history.push(`/viewDevices`)
    }
    
    return(
        <div>
            <div>
                Device Id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {deviceId}            </div>
            <div>
                Device Sr. No.&nbsp;&nbsp;
                <input type="text" onChange={(e) => setDeviceSrNo(e.target.value)}   value={deviceSrNo} name="Sr. No." id="firstname"  placeholder="Device Sr. No." />
            </div>
            <div>
                Device Name.&nbsp;&nbsp;
                <input type="text" onChange={(e) => setDeviceName(e.target.value)}   value={deviceName} name="device name" id="devicename"  placeholder="Device Name" />
            </div>
            <div>
                Device Type &nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text" onChange={(e) => setDeviceType(e.target.value)}  value={deviceType} name="type" id="device type"  placeholder="Device Type" />
            </div>
            &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button onClick={editDvice}>Save</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={deleteDevice}>Delete</button>
        </div>
    )
}

export default EditDevice;