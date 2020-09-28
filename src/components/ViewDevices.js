import React, { useState, useEffect } from 'react';

import { getDevices } from '../services/services';
import { useHistory } from 'react-router-dom';

import './styles/ViewDevices.css'

const ViewDetails = (props) => {
    const [devices, setDevices] = useState()
    useEffect(() => { getDevices().then(res => setDevices(res)) }, [])
    const history = useHistory();
    const editClicked = (item) => {
        history.push(`/editDevice/${item.id}`)
    }
    return (
        <div>

            {devices && <table>
                <thead><tr>
                    <th>Id</th>
                    <th>Sr.No.</th>
                    <th>Name</th>
                    <th>type</th>
                    <th></th>
                </tr></thead>
                <tbody>
                    {
                        devices.map(function (nextItem) {
                            return (
                                <tr key={nextItem.type}>
                                    <td>{nextItem.id}</td>
                                    <td>{nextItem.srNo}</td>
                                    <td>{nextItem.type}</td>
                                    <td>{nextItem.name}</td>
                                    <td onClick={editClicked.bind(this, nextItem)}>Edit</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>}
        </div>
    )
}

export default ViewDetails;