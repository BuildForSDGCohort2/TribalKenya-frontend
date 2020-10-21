import React from 'react';
import { navigate } from 'gatsby';
import { connect } from 'react-redux';
import logo from '../../images/flag1.png';
import { checkPageLoading } from '../../state/auth/auth.actions';

const Brand = ({ checkPageLoading }) => {
  const goHome = () => {
    checkPageLoading(true);
    navigate('/');
  };
  return (
    <img src={logo} alt="logo" className="logo" onClick={goHome} />
  );
};

const mapDispatchToProps = (dispatch) => ({
  checkPageLoading: (pageLoading) => dispatch(checkPageLoading(pageLoading))
});

export default connect(null, mapDispatchToProps)(Brand);
