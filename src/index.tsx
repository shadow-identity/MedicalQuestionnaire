import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { hads } from './examples/hads';
import Questionnaire from './Questionnaire';

ReactDOM.render(
  <Questionnaire questionnaire={hads} />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
