import PropTypes from 'prop-types';

import { LoadMore } from './Button.styled';

export const Button = ({ nextPage }) => {
  return <LoadMore type="button" onClick={nextPage}>Load more</LoadMore>;
};

Button.propTypes = {
  nextPage: PropTypes.func,
};

