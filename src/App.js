import React from 'react';
import {SwitcherContainer, FilterContainer, CourseListContainer} from './containers';
import {connect} from 'react-redux';
import {configureData} from './redux/actions';

class App extends React.Component {
    componentDidMount() {
        this.props.configureData();
    }

    render() {
        if (!this.props.appIsReady) {
            return <div className='container'>Загрузка...</div>;
        }

        return (
            <div className='wrapper'>
                <div className="container">
                    <h1>Витрина</h1>
                    <SwitcherContainer/>
                    <FilterContainer/>
                    <CourseListContainer/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    appIsReady: state.app.appIsReady
});

export default connect(mapStateToProps, {configureData})(App);
