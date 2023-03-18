import PropTypes from 'prop-types';
import { Tit } from './Title.styled';

const Title = ({ children }) => <Tit>{children}</Tit>;

Title.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Title;
