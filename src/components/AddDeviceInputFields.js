import React,{useState,useEffect} from 'react';

import {addDevice,getLastDeviceId} from '../services/services';
import{useHistory} from 'react-router-dom';

const AddDeviceInputField = (props) =>{

    const history = useHistory();
    
    const [deviceId,setDeviceId] = useState();
    const [deviceSrNo,setDeviceSrNo] = useState('');
    const [deviceName,setDeviceName] = useState('');
    const [deviceType,setDeviceType] = useState('');

    const [lastDeviceId,setLastDeviceId]=useState();

    useEffect(()=>{getLastDeviceId().then(res=>{
        
        
        setLastDeviceId(res)
        setDeviceId(res)
        
       
    })},[deviceId])

    const addDvice = () => {
        if(!deviceSrNo || !deviceType || !deviceName){
            alert("Please Fill All details")
        }
        else{
        const data={id:lastDeviceId,name:deviceName,srNo:deviceSrNo,type:deviceType}
        let numOfLastId=parseInt(lastDeviceId.substring(1,5))+1;
        const lastId="a"+numOfLastId.toString().padStart(4, "0") 
        console.log('add')
        addDevice(data,lastId);
        setDeviceId(lastId)
        setDeviceSrNo('');
        setDeviceType('');
        setDeviceName('');
        history.push(`/deviceScreen`);
        }
    }
    
    return(
        <div>
            <div>
                Device Id &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;  {deviceId}
            </div>
            
            <div>
                Device Sr. No.   &nbsp;
                <input type="text" onChange={(e) => setDeviceSrNo(e.target.value)}   value={deviceSrNo} name="Sr. No." id="firstname"  placeholder="Device Sr. No." />
            </div>
            <div>
                Device Name.&nbsp;&nbsp;
                <input type="text" onChange={(e) => setDeviceName(e.target.value)}   value={deviceName} name="device name" id="devicename"  placeholder="Device Name" />
            </div>
            <div>
                Device Type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text" onChange={(e) => setDeviceType(e.target.value)}  value={deviceType} name="type" id="device type"  placeholder="Device Type" />
            </div>
            <button onClick={addDvice}>Add</button>
        </div>
    )
}

export default AddDeviceInputField;