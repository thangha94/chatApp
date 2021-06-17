import React, { useEffect, useRef, useState } from 'react';
import Select from 'react-select';
import './createChannel.scss';
import { useSelector } from 'react-redux';
import { createRoom } from '../../../../apis/other.api';
const CreateChannel = ({ setCreateVisible }) => {
  const userList = useSelector((state) => state.userList);
  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState([]);
  const refName = useRef(false);
  const refDesc = useRef(false);
  const refErr = useRef(false);
  useEffect(() => {
    if (userList) {
      let newOptions = [];
      userList.map((item) => {
        newOptions.push({
          value: item._id,
          label: item.userName,
        });
      });
      setOptions(newOptions);
    }
  }, [JSON.stringify(userList)]);

  const handleChange = (e) => {
    setSelected(e);
  };

  const createChannel = async () => {
    if (!refName.current.value || !selected.length || selected.length < 3) {
      refErr.current.innerHTML = 'Please input the Name and choose users';
    } else {
      refErr.current.innerHTML = '';
      let newRoom = await createRoom({
        name: refName.current.value,
        desc: refDesc.current.value,
        users: [selected[0].value, selected[1].value, selected[2].value],
      });
      console.log(newRoom);
    }
  };

  return (
    <div className="create-channel-container">
      <div className="create__header">Create Channel</div>
      <div className="create__content">
        <div className="create__field">
          <span>Name: </span>
          <input
            autoFocus
            className="channel__name"
            type="text"
            placeholder="Channel name ..."
            ref={refName}
          />
        </div>
        <div className="create__field">
          <span>User: </span>
          <Select onChange={handleChange} isMulti options={options} />
        </div>
        <div className="create__field">
          <span>Description: </span>
          <input
            className="channel__name"
            type="text"
            placeholder="Description ..."
            ref={refDesc}
          />
        </div>
        <div ref={refErr} className="channel__error-info"></div>
      </div>
      <div className="create__footer">
        <button onClick={createChannel}>Create</button>
        <button onClick={() => setCreateVisible(false)}>Cancel</button>
      </div>
    </div>
  );
};

export default CreateChannel;
