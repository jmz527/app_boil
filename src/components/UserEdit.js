import React from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { Field, SubmissionError, reduxForm, getFormValues } from "redux-form";
import { PageHeader, Form } from "react-bootstrap";

import FormField from "./common/FormField";
import FormSubmit from "./common/FormSubmit";
import UserDelete from "./common/UserDelete";

// This user add/edit page component is used on either side of our login wall
export class UserEdit extends React.Component {
  constructor(props) {
    super(props);

    this.formSubmit = this.formSubmit.bind(this);
  }

  render() {
    let {user, handleSubmit, error, invalid, submitting} = this.props, deleteBtn;

    if (user.id) {
      deleteBtn = <UserDelete />;
    } else {
      deleteBtn = <span></span>;
    }

    return (
      <div className="page-user-edit">
        <PageHeader>{'User ' + (user.id ? 'edit' : 'add')}</PageHeader>
        <Form horizontal onSubmit={handleSubmit(this.formSubmit)} ref="userEditForm">
          <Field component={FormField} name="firstname" label="FirstName" doValidate={true}/>
          <Field component={FormField} name="lastname" label="LastName" doValidate={true}/>
          <Field component={FormField} name="username" label="Username" doValidate={true}/>
          <Field component={FormField} name="password" label="Password" doValidate={true} type="password"/>
          <Field component={FormField} name="checkpassword" label="CheckPassword" doValidate={true} type="password"/>
          <FormSubmit error={error} invalid={invalid} submitting={submitting} buttonSaveLoading="Saving..."
            buttonSave={ (user.id ? 'Save' : 'New' ) + ' User' }/>
        </Form>
        { deleteBtn }
      </div>
    );
  }

  formSubmit(values) {
    const {dispatch} = this.props;
    return new Promise((resolve, reject) => {
      dispatch({
        type: 'ADD_EDIT_USER',
        user: {
          id: values.id || null,
          first_name: values.firstname,
          last_name: values.lastname,
          username: values.username,
          password: values.password,
        },
        callbackError: (error) => {
          reject(new SubmissionError({_error: error}));
        },
        callbackSuccess: () => {
          dispatch(push('/signUpSuccess'));
          resolve();
        }
      });
    });
  }
}

const UserEditForm = reduxForm({
  form: 'user_edit',
  validate: (values) => errorChecks(values),
})(UserEdit);

const errorChecks = (values) => {
  const errors = {};
  if (!values.firstname) {
    errors.firstname = 'First Name is required';
  } else if (!values.lastname) {
    errors.lastname = 'Last Name is required';
  } else if (!values.username) {
    errors.username = 'Username is required';
  } else if (values.username.length < 4) {
    errors.username = 'Minimum length 4 chars';
  } else if (!/^[a-zA-Z0-9_]*$/.test(values.username)) {
    errors.username = 'Alphanumeric only';
  } else if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 4) {
    errors.password = 'Minimum length 4 chars';
  } else if (values.password !== values.checkpassword) {
    errors.checkpassword = 'Passwords do not match';
  }
  return errors;
}


function mapStateToProps(state, own_props) {
  const user = state.user || {};
  return {
    user: user
  };
}
export default connect(mapStateToProps)(UserEditForm);
