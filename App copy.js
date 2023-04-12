import React, { useState } from 'react';
function App() {
  const [returnedData, setReturnedData] = useState(['hellow']);
  const fetchData = async () => {
    const newData = await fetch('/hello', {
      method: 'GET',
      headers: {
        'content-Type': 'application/json',
        Accept: 'application/json',
      },
    }).then((res) => res.json());
    console.log(newData);
    setReturnedData(newData.result);
  };
  return (
    <div className='App'>
      <input type='number' name='CaravanID' placeholder='CaravanID'></input>
      <input name='Name' placeholder='Name'></input>
      <input name='Description' placeholder='Description'></input>
      <input name='Type' placeholder='Type'></input>
      <input name='Manager' placeholder='Manager'></input>
      <input
        type='number'
        name='AccomodationCount'
        placeholder='CaravanID'
      ></input>
      <input
        type='number'
        name='AdditionalExtension'
        placeholder='CaravanID'
      ></input>
      <button onClick={() => fetchData()}>click</button>
      <p>CaravanID:{returnedData.CaravanID}</p>
      <p>Name:{returnedData.Name}</p>
      <p>Description:{returnedData.Description}</p>
      <p>Type:{returnedData.Type}</p>
      <p>Manager:{returnedData.Manager}</p>
      <p>AccommodationCount:{returnedData.AccommodationCount}</p>
      <p>AdditionalExtension:{returnedData.AdditionalExtension}</p>
      {returnedData}
    </div>
  );
}

export default App;
