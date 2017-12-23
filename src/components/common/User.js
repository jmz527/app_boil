import React from "react";

export default class User extends React.Component {
  render() {
    const { user } = this.props;

    return (
      <div>
        <h3>{ user.username }</h3>
        <ul>
          <li>{ user.id }</li>
          <li>{ user.first_name }</li>
          <li>{ user.last_name }</li>
          <li>{ user.password }</li>
        </ul>
      </div>
    );
  }
}
