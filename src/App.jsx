import './App.css';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';

import Select from '@mui/material/Select';
import { useState, useEffect } from 'react';
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
// import { TextareaAutosize } from '@mui/base';
import { styled } from '@mui/system';
import Button, { buttonClasses } from '@mui/base/Button';

function App() {
  const [floor_pick, setFloorPick] = useState([]);
  const [talk_pick, setTalkPick] = useState([]);
  const [info, setInfo] = useState({floor:'3', tower:'А', talk:'1', datetime: new Date(), comment: 'Тут должен быть комментарий'});

  // const blue = {
  //   100: '#DAECFF',
  //   200: '#b6daff',
  //   400: '#3399FF',
  //   500: '#007FFF',
  //   600: '#0072E5',
  //   900: '#003A75',
  // };

  // const grey = {
  //   50: '#f6f8fa',
  //   100: '#eaeef2',
  //   200: '#d0d7de',
  //   300: '#afb8c1',
  //   400: '#8c959f',
  //   500: '#6e7781',
  //   600: '#57606a',
  //   700: '#424a53',
  //   800: '#32383f',
  //   900: '#24292f',
  // };

  // const StyledTextarea = styled(TextareaAutosize)(
  //   ({ theme }) => `
  //   width: 320px;
  //   font-family: IBM Plex Sans, sans-serif;
  //   font-size: 0.875rem;
  //   font-weight: 400;
  //   line-height: 1.5;
  //   padding: 12px;
  //   border-radius: 12px 12px 0 12px;
  //   color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  //   background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  //   border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  //   box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
  
  //   &:hover {
  //     border-color: ${blue[400]};
  //   }
  
  //   &:focus {
  //     border-color: ${blue[400]};
  //     box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[500] : blue[200]};
  //   }
  
  //   // firefox
  //   &:focus-visible {
  //     outline: 0;
  //   }
  // `,
  // );
  

  const blue2 = {
    500: '#007FFF',
    600: '#0072E5',
    700: '#0059B2',
  };
  
  const grey2 = {
    100: '#eaeef2',
    300: '#afb8c1',
    900: '#24292f',
  };
  
  const CustomButton = styled(Button)(
    ({ theme }) => `
    font-family: IBM Plex Sans, sans-serif;
    font-weight: bold;
    font-size: 0.875rem;
    background-color: ${blue2[500]};
    padding: 12px 24px;
    border-radius: 12px;
    color: white;
    transition: all 150ms ease;
    cursor: pointer;
    border: none;
    box-shadow: 0px 4px 30px ${theme.palette.mode === 'dark' ? grey2[900] : grey2[100]};
  
    &:hover {
      background-color: ${blue2[600]};
    }
  
    &.${buttonClasses.active} {
      background-color: ${blue2[700]};
    }
  
    &.${buttonClasses.focusVisible} {
      box-shadow: 0 3px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
      outline: none;
    }
  
    &.${buttonClasses.disabled} {
      opacity: 0.5;
      cursor: not-allowed;
    }
    `,
  );

  useEffect(() => {
    let arr = [];
    for(let i = 3; i <= 27; i++)
    {
      arr.push(i);
    }
    setFloorPick(arr.map((el, idx) =>{
      return <MenuItem key={idx} value={el}>{el}</MenuItem>
    }))
    arr = [];
    for(let i = 1; i <= 10; i++)
    {
      arr.push(i);
    }
    setTalkPick(arr.map((el, idx) =>{
      return <MenuItem key={idx} value={el}>{el}</MenuItem>
    }))
  }, []);

  const Change = (e) => {
    e.preventDefault();
    setInfo({...info, [e.target.name]: e.target.value});
    console.log(info);
  }
  const ChangeDate = (date) =>{
    setInfo({...info, "datetime": new Date(date)})
  }
  const submit = () => {
    console.log(info)
  }
  const clear = () => {
    setInfo({floor:'3', tower:'А', talk:'1', datetime: new Date(), comment: 'Тут должен быть комментарий'})
  }
  return (
  <div className="container">
    <form>
      <div className="floor">
          <InputLabel>Этаж</InputLabel>
          <Select
            name="floor"
            value={info.floor}
            label="Этаж"
            onChange={Change}
          >
          {floor_pick}
          </Select>
        </div>
        <div className="tower">
        <InputLabel>Башня</InputLabel>
          <Select
            name="tower"
            value={info.tower}
            label="Этаж"
            onChange={Change}
          >
          <MenuItem value="А">А</MenuItem>
          <MenuItem value="Б">Б</MenuItem>
          </Select>
        </div>
        <div className="talk">
        <InputLabel>Переговорка</InputLabel>
          <Select
            name="talk"
            value={info.talk}
            label="Переговорка"
            onChange={Change}
          >
            {talk_pick}
          </Select>
        </div>
        <div className="dateandtime">
          <span>Дата и время</span>
          <DateTimePicker name="datetime" onChange={ChangeDate} value={info.datetime} />
        </div>
        <div className="comment">
          <span>Комментарий</span> <br/> 
            <textarea
              placeholder="Комментарий"
              value={info?.comment}
              name="comment"
              onChange={Change}
            />
        </div>
        <div className="buttons">
        <CustomButton onClick={submit}>Отправить</CustomButton>
        <CustomButton onClick={clear}>Очистить</CustomButton>
        </div>
    </form>
  </div>
  );
}

export default App;
