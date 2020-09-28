import React, { useState, useEffect } from 'react';

import { getDevices, getAssignedDevices } from '../services/services';

import { useHistory } from 'react-router-dom';

import './styles/ViewDevices.css'

const AllotedDevices = (props) => {


    const [devices, setDevices] = useState()

    const [assignedDevices, setAssignedDevices] = useState();
    const [displayedAssignedDevices, setDisplayedAssignedDevices] = useState();
    const [refresh, setRefresh] = useState(props.refresh ? props.refresh : false)

    const history = useHistory();

    useEffect(() => {
        getDevices().then(res => setDevices(res));
        getAssignedDevices().then(res => setAssignedDevices(res))
    }, []);

    useEffect(() => {
        const alloted = [];
        console.log(assignedDevices)
        if (assignedDevices)
            assignedDevices.forEach(element => {
                if (devices) {
                    const findDevice = devices.find(device => device["id"] === element["id"])
                    if (findDevice) {
                        let object = { ...element, ...findDevice }
                        console.log(object);
                        alloted.push(object);
                    }
                }
            });
        setDisplayedAssignedDevices(alloted);
    }, [assignedDevices])
    useEffect(() => {
        if (refresh) {
            setRefresh(false)
            window.location.reload(false);
        }
    }, [refresh])
    const editClicked = (item) => {
        history.push(`/assignDeviceId/${item.id}`)
    }

    return (
        <div>

            {displayedAssignedDevices && <table>
                <thead><tr>
                    <th>Id</th>
                    <th>Device Sr.No.</th>
                    <th>Name</th>
                    <th>type</th>
                    <th>Assigned To</th>
                    <th>Assigned By</th>
                    <th>Assigned Date</th>
                    <th></th>
                </tr></thead>
                <tbody>
                    {
                        displayedAssignedDevices.map(function (nextItem) {
                            return (
                                <tr key={nextItem.id}>
                                    <td>{nextItem.id}</td>
                                    <td>{nextItem.srNo}</td>
                                    <td>{nextItem.type}</td>
                                    <td>{nextItem.name}</td>
                                    <td>{nextItem.assignedTo}</td>
                                    <td>{nextItem.assignedBy}</td>
                                    <td>{nextItem.assignedDate}</td>
                                    <td onClick={editClicked.bind(this, nextItem)}>edit</td>
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