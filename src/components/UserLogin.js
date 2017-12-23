import React from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { Field, SubmissionError, reduxForm } from "redux-form";
import { PageHeader, Form, FormGroup, Col, Checkbox } from "react-bootstrap";
import FormField from "./common/FormField";
import FormSubmit from "./common/FormSubmit";

export class UserLogin extends React.Component {
  constructor(props) {
    super(props);

    this.formSubmit = this.formSubmit.bind(this);
  }

  render() {
    const {user, handleSubmit, error, invalid, submitting} = this.props;
    return (
      <div className="page-user-edit">
        <PageHeader>{'User ' + (user.id ? 'edit' : 'add')}</PageHeader>
        <Form horizontal onSubmit={handleSubmit(this.formSubmit)}>
          <Field component={FormField} name="username" label="Username" doValidate={true}/>
          <Field component={FormField} name="password" label="Password" doValidate={true} type="password"/>
          <FormSubmit error={error} invalid={invalid} submitting={submitting} buttonSaveLoading="Loggin..." buttonSave="Login"/>
        </Form>
      </div>
    );
  }

  formSubmit(values) {
    const {dispatch} = this.props;
    return new Promise((resolve, reject) => {
      dispatch({
        type: 'AUTH_USER',
        user: {
          username: values.username,
          password: values.password,
        },
        callbackError: (error) => {
          reject(new SubmissionError({_error: error}));
        },
        callbackSuccess: () => {
          dispatch(push('/logSuccess'));
          resolve();
        }
      });
    });
  }
}


const UserLoginForm = reduxForm({
  form: 'user_login',
  validate: function (values) {
    const errors = {};
    if (!values.username) {
      errors.username = 'Username is required';
    } else if (!values.password) {
      errors.password = 'Password is required';
    }
    return errors;
  },
})(UserLogin);

function mapStateToProps(state, own_props) {
  const user = state.user || {};
  return {
    user: user
  };
}
export default connect(mapStateToProps)(UserLoginForm);
