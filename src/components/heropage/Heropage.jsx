import React, { useState, useEffect } from 'react';
import './heropage.css';
import Herodata from '../data/heropage';


function Heropage() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prevCount => (prevCount % Herodata.length) + 1);
    }, 3000); // Change the interval as needed

    return () => clearInterval(timer); 
  }, []);

  return (
    <div className='heropage'>
      {Herodata.map((item, index) => (
        item.id === count && (
          <div key={index} className={`heropage-container${item.id} fade-in`}>
            <div className={`herosubmenu${item.id}`}>
              <div className={`submenu${item.id}`}>
                <h1 className='text1'>{item.text1}</h1>
              </div>
              <div className={`submenu${item.id}`}>
                <h1 className='text2'>{item.text2}</h1>
              </div>
              <div className={`submenu${item.id}`}>
                <h1 className='text3'>{item.text3}</h1>
              </div>
              <button>{item.text4}</button> 
            </div>  
          </div>
        )
      ))}
    </div>
  );
}

export default Heropage;