import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import  Users from '../ components/Users'
import userAction from '../actions/userAction';

const mapStateToProps = state => ({
  users: state.userReducer.users.data,
  message: state.userReducer.message
})

const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(userAction.getUsers())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Users))