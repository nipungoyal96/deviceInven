import React, { useState, useEffect } from 'react';

import { getDevices, getSubmitedDevices, editDevice } from '../services/services';
import { useHistory } from 'react-router-dom';

import './styles/ViewDevices.css'

const AllotedDevices = () => {
    const [devices, setDevices] = useState()
    const [submittedDevices, setSubmittedDevices] = useState();
    const [displayedSubmittedDevice, setDisplayedSubmittedDevice] = useState();
    useEffect(() => {
        getDevices().then(res => setDevices(res));
        getSubmitedDevices().then(res => setSubmittedDevices(res))
    }, []);

    useEffect(() => {
        const submitted = [];
        if (submittedDevices)
            submittedDevices.forEach(element => {
                if (devices) {
                    const findDevice = devices.find(device => device["id"] === element["id"])
                    if (findDevice) {
                        let object = { ...element, ...findDevice }
                        submitted.push(object);
                    }
                }
            });
        setDisplayedSubmittedDevice(submitted);
    }, [submittedDevices, devices]);
    const history = useHistory();
    const edit = (id) => {
        history.push(`/editSubmitDevice/${id}`)
    }
    return (
        <div>

            {displayedSubmittedDevice && <table>
                <thead><tr>
                    <th>Id</th>
                    <th>Device Sr.No.</th>
                    <th>Name</th>
                    <th>type</th>
                    <th>Assigned To</th>
                    <th>Assigned By</th>
                    <th>Assigned Date</th>
                    <th>Submit Date</th>
                    <th></th>
                </tr></thead>
                <tbody>
                    {
                        displayedSubmittedDevice.map(function (nextItem) {
                            return (
                                <tr key={nextItem.id}>
                                    <td>{nextItem.id}</td>
                                    <td>{nextItem.srNo}</td>
                                    <td>{nextItem.type}</td>
                                    <td>{nextItem.name}</td>
                                    <td>{nextItem.assignedTo}</td>
                                    <td>{nextItem.assignedBy}</td>
                                    <td>{nextItem.assignedDate}</td>
                                    <td>{nextItem.submitDate}</td>
                                    <td onClick={edit.bind(this, nextItem.id)}>edit</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>}
        </div>
    )
}

export default AllotedDevices;