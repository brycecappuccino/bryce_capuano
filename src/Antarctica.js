import React, { useEffect } from 'react';
import './App.css';

const WeatherWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://weatherwidget.io/js/widget.min.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <a
      className="weatherwidget-io"
      href="https://forecast7.com/en/n75d25n0d07/antarctica/"
      data-label_1="ANTARCTICA"
      data-label_2="WEATHER"
      data-mode="Current"
      data-days="3"
      data-font="Courier New"
      data-theme="#EDDEA4" 
    >
      NEW YORK WEATHER
    </a>
  );
};

export default WeatherWidget;
