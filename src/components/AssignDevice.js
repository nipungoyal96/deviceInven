import React, { useState, useEffect } from 'react';

import { assignDevice, updateAlottedDevice, delAllotedDevice } from '../services/services'
import { useHistory } from 'react-router-dom';

const AssignDevice = (props) => {
    console.log(props.editDevice)
    const [assignedTo, setAssignedTo] = useState(props.editDevice ? props.editDevice.assignedTo : '');
    const [assignedBy, setAssignedBy] = useState(props.editDevice ? props.editDevice.assignedDate : '')
    const [assignedDate, setAssignDate] = useState(props.editDevice ? props.editDevice.assignedBy : '')
    const history = useHistory();
    const assign = () => {
        if (!assignedTo || !assignedBy || !assignedDate) {
            alert("Please Fill All details")
        }
        else {
            const data = {
                id: props.id,
                assignedTo: assignedTo,
                assignedDate: assignedDate,
                assignedBy: assignedBy
            }
            if (props.editDevice) {
                updateAlottedDevice(data);
            }
            else {
                assignDevice(data);
            }
            history.push(`/`);
            alert('device assigned')

        }
    }

    const del = () => {
        delAllotedDevice(props.id);
        alert('device unassigned');
        history.push(`/`);

    }
    return (
        <div>
            <div>
                Device id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {props.id}
            </div>
            <div>
                Assigned To&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text" onChange={(e) => setAssignedTo(e.target.value)} value={assignedTo} name="Assigned To" id="Assigned To" placeholder="Assigned To" />
            </div>
            <div>
                Assigned By&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text" onChange={(e) => setAssignedBy(e.target.value)} value={assignedBy} name="assignedBy" id="Assigned By" placeholder="Assigned By" />
            </div>
            <div>
                Date Of Assignment&nbsp;&nbsp;
                <input type="text" onChange={(e) => setAssignDate(e.target.value)} value={assignedDate} name="Date Of Assignment" id="Date Of Assignment" placeholder="Date Of Assignment" />
            </div>
            <button onClick={assign}>{props.editDevice ? "Save" : "Assign Device"}</button>
            {props.editDevice && <button onClick={del}>{"Delete"}</button>}
        </div>
    )
}

export default AssignDevice;