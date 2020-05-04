import {connect} from 'react-redux';
import {applyFilter, updateSearchPhrase} from '../redux/actions';
import {Filter} from '../components';

const mapStateToProps = state => ({
    subjects: state.courses.subjects,
    genres: state.courses.genres,
    grades: state.courses.grades,
    searchPhrase: state.search.searchPhrase
});

export default connect(mapStateToProps, {
    handleFilter: applyFilter,
    handleSearch: updateSearchPhrase
})(Filter);
