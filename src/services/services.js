export async function addDevice(data, lastDeviceId) {

  const response = await fetch(`/api/addDevice`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ device: data, lastDeviceId: lastDeviceId })
  })
  return await response;
}

export async function getDevices() {

  const response = await fetch('/api/devices');
  return await response.json();
}

export async function getLastDeviceId() {

  const response = await fetch('/api/getLastId');

  return await response.json();
}

export async function getAssignedDevices() {

  const response = await fetch('/api/getAssignedDevices');

  return await response.json();
}

export async function assignDevice(device) {
  const response = await fetch(`/api/assignDevice`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ allotDevice: device })
  })
  return await response;
}
export async function submitDevice(device, index) {
  const response = await fetch(`/api/submitDevice`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ subDevice: device, index: index })
  })
  return await response;
}

export async function getSubmitedDevices() {

  const response = await fetch('/api/getSubmitedDevices');

  return await response.json();
}

export async function editDevice(data) {
  const response = await fetch(`/api/updateDevice`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ device: data })
  })
  return await response;
}

export async function dltDevice(id) {
  const response = await fetch(`/api/deleteDevice`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id: id })
  })
  return await response;
}


export async function updateAlottedDevice(device) {
  const response = await fetch(`/api/updateAllotedDevice`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ device: device })
  })
  return await response;
}

export async function delAllotedDevice(id) {
  const response = await fetch(`/api/delAllotedDevice`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id: id })
  })
  return await response;
}

export async function delsubmittedDevice(id) {
  const response = await fetch(`/api/delsubmittedDevice`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id: id })
  })
  return await response;
}

export async function updateSubmitDevice(data) {
  const response = await fetch(`/api/updateSubmitDevice`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ data: data })
  })
  return await response;
}
