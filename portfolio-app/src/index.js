// Index

import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';
import { OW_API_KEY, OC_API_KEY } from './globals/variables';

if (OW_API_KEY === '&appid=replace-this-string-with-your-api-key' || OC_API_KEY === '&key=replace-this-string-with-your-api-key') {

    ReactDOM.render(<div className="wrapper p30"><p><strong>WARNING:</strong> In order to run this application you need to get an API key from <a href="https://openweathermap.org">OpenWeather</a> and <a href="https://opencagedata.com">OpenCage</a>. Replace the value of the "OW_API_KEY_ONLY" variable in the "globals/variables.js" file with your key from OpenWeather and replace the value of the "OC_API_KEY_ONLY" variable in the "globals/variables.js" file with your key from OpenCage.</p></div>, document.getElementById('root'));

} else {

    ReactDOM.render(
        <React.StrictMode>
            <AppRouter />
        </React.StrictMode>,
        document.getElementById('root')
    );

}
