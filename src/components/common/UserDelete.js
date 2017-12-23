import React from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { SubmissionError, reduxForm, getFormValues } from "redux-form";
import { Form } from "react-bootstrap";
import FormSubmit from "./FormSubmit";

export class UserDelete extends React.Component {
  constructor(props) {
    super(props);

    this.deleteUser = this.deleteUser.bind(this);
  }

  render() {
    let {handleSubmit, error, invalid, submitting} = this.props, deleteBtn;

    return (
      <div className="page-user-delete">
        <Form horizontal onSubmit={handleSubmit(this.deleteUser)} ref="userDeleteForm">
          <FormSubmit bsStyle="danger" submitting={submitting} buttonSaveLoading="Deleting..." buttonSave="Delete User"/>
        </Form>
      </div>
    );
  }

  deleteUser(values) {
    const {dispatch, user} = this.props;
    return new Promise((resolve, reject) => {
      dispatch({
        type: 'DELETE_USER',
        user: {
          id: user.id,
        },
        callbackError: (error) => {
          reject(new SubmissionError({_error: error}));
        },
        callbackSuccess: () => {
          dispatch(push('/goodbye'));
          resolve();
        }
      });
    });
  }
}

const UserDeleteForm = reduxForm({
  form: 'user_delete',
})(UserDelete);

function mapStateToProps(state, own_props) {
  const user = state.user || {};
  return {
    user: user
  };
}
export default connect(mapStateToProps)(UserDeleteForm);
