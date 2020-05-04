import {connect} from 'react-redux';
import {changeUnit} from '../redux/actions';
import {Switcher} from '../components';

const mapStateToProps = state => ({
    units: state.app.units,
    activeUnit: state.app.activeUnit
});

export default connect(mapStateToProps, {changeUnit})(Switcher);
