import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [initColor, setInitColor] = useState('red');
  const [manualTime, setManualTime] = useState(0);
  const [customTimers, setCustomTimers] = useState({
    red: 10,  // default red time
    yellow: 5,  // default yellow time
    green: 15,  // default green time
  });

  const lightObj = {
    red: {
      color: 'red',
      timer: customTimers.red,
    },
    yellow: {
      color: 'yellow',
      timer: customTimers.yellow,
    },
    green: {
      color: 'green',
      timer: customTimers.green,
    },
  };

  // Set interval for manual time counting
  useEffect(() => {
    const interval = setInterval(() => {
      setManualTime((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval); // cleanup on component unmount
  }, []);

  // Logic to handle light change when timer reaches the limit
  useEffect(() => {
    if (manualTime >= lightObj[initColor].timer) {
      // Cycle to the next light based on current light color
      switch (initColor) {
        case 'red':
          setInitColor('yellow');
          break;
        case 'yellow':
          setInitColor('green');
          break;
        case 'green':
          setInitColor('red');
          break;
        default:
          break;
      }
      setManualTime(0); // Reset manual time when light changes
    }
  }, [manualTime, initColor]);

  // Handle user-customized light timers
  const handleTimeChange = (color, event) => {
    const value = parseInt(event.target.value);
    if (value >= 1) {
      setCustomTimers((prevTimers) => ({
        ...prevTimers,
        [color]: value,
      }));
    }
  };

  const changeColor = (color) => {
    setManualTime(0)
    setInitColor(color)
  }

  return (
    <div>
      <h1>Traffic Light</h1>
      <div className="light-container" style={{ background: initColor }}>
        <h2>{manualTime}</h2>
      </div>

      <div className="list-light-container">
        <div className="list-light">
          <label htmlFor="Red">Red</label>
          <input
            type="radio"
            name="light"
            id="Red"
            onClick={() => changeColor('red')}
          />
          <input
            type="number"
            value={customTimers.red}
            min="1"
            onChange={(e) => handleTimeChange('red', e)}
          />
        </div>

        <div className="list-light">
          <label htmlFor="yellow">Yellow</label>
          <input
            type="radio"
            name="light"
            id="yellow"
            onClick={() => changeColor('yellow')}
          />
          <input
            type="number"
            value={customTimers.yellow}
            min="1"
            onChange={(e) => handleTimeChange('yellow', e)}
          />
        </div>

        <div className="list-light">
          <label htmlFor="green">Green</label>
          <input
            type="radio"
            name="light"
            id="green"
            onClick={() => changeColor('green')}
          />
          <input
            type="number"
            value={customTimers.green}
            min="1"
            onChange={(e) => handleTimeChange('green', e)}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
