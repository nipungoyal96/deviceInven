import React, { useState,useEffect } from 'react';
import { updateSubmitDevice,getSubmitedDevices,delsubmittedDevice } from '../services/services';

import{useHistory} from 'react-router-dom';

const EditSubmitList = (props) =>{

    const [assignedTo,setAssignedTo]=useState();
    const [assignedBy,setAssignedBy]=useState();
    const [assignedDate,setAssignDate]=useState();
    const [submitDate,setSubmitDate]=useState();
    const [submitDevice,setSubmitDevice] = useState();
    
  

    useEffect(() =>
     { getSubmitedDevices().then(res => setSubmitDevice(res));
        
     }, []);
     useEffect(() =>
     { if(submitDevice){
     
         const device=submitDevice.find(dev=>dev["id"]===props.match.params.item);
         
         setAssignedTo(device.assignedTo);
         setAssignDate(device.assignedDate);
         setSubmitDate(device.submitDate);
         setAssignedBy(device.assignedBy);
     }  }, [submitDevice]);

     const history=useHistory();
    const del = () =>{
        delsubmittedDevice(props.match.params.item);
        alert('deleted')
        history.push(`/inventoryScreen`);
    }
    const save = () =>{
        const object={
            id:props.match.params.item,
            assignedTo:assignedTo,
            assignedDate:assignedDate,
            submitDate:submitDate
        }    
        updateSubmitDevice(object);
        alert('details updated')
        history.push(`/submitted`);
    }
    return(
        <div>
            <div>
                <div>Device id</div>
                <div>{props.match.params.item}</div>
            </div>
            <div>
                <div>Assigned To</div>
                <input type="text" onChange={(e) => setAssignedTo(e.target.value)}   value={assignedTo} name="Assigned To" id="Assigned To"  placeholder="Assigned To" />
            </div>
            <div>
                <div>Assigned By</div>
                <input type="text" onChange={(e) => setAssignedBy(e.target.value)}   value={assignedBy} name="assignedBy" id="Assigned By"  placeholder="Assigned By" />
            </div>
            <div>
                <div>Date Of Assignment</div>
                <input type="text" onChange={(e) => setAssignDate(e.target.value)}   value={assignedDate} name="Date Of Assignment" id="Date Of Assignment"  placeholder="Date Of Assignment" />
            </div>
            <div>
                <div>Date Of Submission</div>
                <input type="text" onChange={(e) => setSubmitDate(e.target.value)}   value={submitDate} name="Date Of submission" id="Date Of Submission"  placeholder="Date Of Submission" />
            </div>
            <button onClick={save}>Save</button>
            <button onClick={del}>Delete</button>
        </div>
    )}

export default EditSubmitList;