import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AddDatabase from '../components/AddDatabase';
import * as DatabaseActions from '../actions/database';

function mapStateToProps(state) {
  return {
    database: state.database
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(DatabaseActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddDatabase);
