import React, { useState } from 'react';
import "./CreateTask.css"
const Dropdown = ({selected,setselected}) => {
  const [selectedValue, setSelectedValue] = useState(''); 
  const handleDropdownChange = (event) => {
    setSelectedValue(event.target.value);
    setselected(event.target.value);
  };

  return (
    <div className='dropdown'>
      <label htmlFor="priorityDropdown">Select Priority:</label>
      <select
        id="priorityDropdown"
        value={selectedValue}
        required
        onChange={handleDropdownChange}
        className='dropdown-select'
      >
        <option value="">Select Priority</option>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>

      {selectedValue && (
        <p>You selected: {selectedValue} priority</p>
      )}
    </div>
  );
};

export default Dropdown;
