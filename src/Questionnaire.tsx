import * as React from 'react';
import { QuestionnaireType } from './types/Questionnaire';
import { StepContent, StepLabel } from 'material-ui/Stepper';
import { FormControl, FormControlLabel } from 'material-ui/Form';
import Radio, { RadioGroup } from 'material-ui/Radio';
import Paper from 'material-ui/Paper';
import Stepper, { Step } from 'material-ui/Stepper';
import Button from 'material-ui/Button';

interface PropsType {
  questionnaire: QuestionnaireType;
}

interface StateTypes {
  activeStep: number;
  value: string;
}

class Questionnaire extends React.Component<PropsType, StateTypes> {
  state = {
    activeStep: 0,
    value: '',
  };

  handleStepBack = () => {
    this.setState({activeStep: this.state.activeStep - 1})
  };

  handleStepNext = () => {
    this.setState({activeStep: this.state.activeStep + 1})
  };

  handleSelectVariant = (event: React.ChangeEvent<{}>, value: string) => {
    this.setState({value});
  };

  render() {
    const q = this.props.questionnaire;
    const {activeStep} = this.state;

    return (
      <Paper className="Questionnaire">
        <header className="Questionnaire-header">
          <h1 className="Questionnaire-header__title">{q.title}</h1>
          <p className="Questionnaire-header__description">{q.description}</p>
        </header>
        <Stepper activeStep={activeStep} orientation="vertical">
          {q.questions.map((question) => (
            <Step key={question.title}>
              <StepLabel>{question.title}</StepLabel>
              <StepContent>
                <div className={'LDSKJFLKJ'}/>
                <FormControl component="fieldset" required>
                  <RadioGroup
                    aria-label="gender"
                    name="gender1"
                    onChange={this.handleSelectVariant}
                  >
                    {question.variants.map(variant =>
                      <FormControlLabel
                        key={variant.text}
                        value={variant.text}
                        control={<Radio/>}
                        label={variant.text}
                      />
                    )}
                  </RadioGroup>
                </FormControl>
                <nav>
                  <Button
                    disabled={activeStep === 0}
                    onClick={this.handleStepBack}
                  >
                    Back
                  </Button>
                  <Button
                    variant="raised"
                    color="primary"
                    onClick={this.handleStepNext}
                  >
                    {activeStep === q.questions.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </nav>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </Paper>
    );
  }
}

export default Questionnaire;
