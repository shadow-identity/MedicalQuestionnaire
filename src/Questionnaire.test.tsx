import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { QuestionnaireType } from './types/Questionnaire';
import Questionnaire from './Questionnaire';

const q: QuestionnaireType = {
  title: 'test',
  description: '',
  questions: [],
  interpretations: [],
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Questionnaire questionnaire={q}/>, div);
});
