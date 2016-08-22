import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

// import dumb component to be wrapped by container
import Modal from '../scenes/Modal';

// Compact way to create Container -> connect creates container by default

// pass state attributes as props to Home
// authState attr comes from combineReducers
const mapStateToProps = (state) => {
    return {

    };
};

// pass Event handlers to List dumb component
const mapDispatchToProps = (dispatch) => {
    return {

    };
};

// this wraps the dumb component (Home is presentational)
export default connect(mapStateToProps, mapDispatchToProps)(Modal);