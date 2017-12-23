import React from "react";
import { connect } from "react-redux";

class UsersList extends React.Component {
  componentWillMount() {
    this.props.dispatch({type: 'FETCH_ALL'})
  }

  render() {
    let userList, { users } = this.props;

    console.log({users});

    if (users) {
      userList = users.map((usr) => {
        return (
          <tr key={usr.id}>
            <td>{usr.id}</td>
            <td>{usr.first_name}</td>
            <td>{usr.last_name}</td>
            <td>{usr.username}</td>
            <td>{usr.email}</td>
            <td>{usr.password}</td>
          </tr>
        );
      })
    }

    return (
      <table className="users-list">
        <tbody>
          {userList}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.user.users || [],
  };
}
export default connect(mapStateToProps)(UsersList);
