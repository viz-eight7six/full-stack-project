import { connect } from 'react-redux';
import { getStep, makeStep, clearStepErrors } from '../../actions/step_actions';
import StepForm from './step_form';
import _ from 'lodash';


const mapStateToProps = (state, ownProps) => {
  let step = { title: "", body: "" };
  let loggedIn = Boolean(state.session.currentUser);
  // let errors = state.step.errors;
  let updateSteps = ownProps.updateSteps;
  return { step, loggedIn, updateSteps};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    makeStep: step => dispatch(makeStep(step)),
    clearStepErrors: () => dispatch(clearStepErrors)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StepForm);