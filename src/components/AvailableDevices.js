import React, { useState, useEffect } from 'react';

import { getDevices, getAssignedDevices } from '../services/services';
import { useHistory } from 'react-router-dom';

import './styles/ViewDevices.css'

const AvailableDevices = () => {
    const [devices, setDevices] = useState();
    const [assignedDevices, setAssignedDevices] = useState();
    const [availableDevices, setAvailableDevices] = useState();
    useEffect(() => {
        getDevices().then(res => setDevices(res));
        getAssignedDevices().then(res => setAssignedDevices(res))
    }, [])
    useEffect(() => {
        const available = []
        if (devices) devices.forEach(element => {
            if (assignedDevices) {
                const findDevice = assignedDevices.find(device => device["id"] === element["id"])
                if (!findDevice) {
                    available.push(element);
                }
            }
        });
        setAvailableDevices(available);
    }, [assignedDevices, devices])
    const history = useHistory();
    const assign = (id) => {
        history.push(`/assignDeviceId/${id}`)
    }
    return (
        <div>

            {availableDevices && <table>
                <thead><tr>
                    <th>Id</th>
                    <th>Sr.No.</th>
                    <th>Name</th>
                    <th>type</th>
                    <th></th>
                </tr></thead>
                <tbody>
                    {
                        availableDevices.map(function (nextItem) {
                            return (
                                <tr key={nextItem.id}>
                                    <td>{nextItem.id}</td>
                                    <td>{nextItem.srNo}</td>
                                    <td>{nextItem.type}</td>
                                    <td>{nextItem.name}</td>
                                    <td onClick={assign.bind(this, nextItem.id)}>Assign</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>}
        </div>
    )
}

export default AvailableDevices;