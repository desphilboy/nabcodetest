import { connect } from 'react-redux';
import ShowEntries from '../components/show-entries.jsx';

const mapStatetoProps = state => ({ currencyData: state.data })

export default connect(mapStatetoProps)(ShowEntries)
