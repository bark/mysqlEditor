import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from '../components/Home';
import * as CounterActions from '../actions/database';

function mapStateToProps(state) {
  return {
    database: state.database
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
