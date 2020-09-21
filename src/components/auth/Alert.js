import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { addMessage } from '../../state/auth/auth.actions';
import animateCSS from '../animate';

const Alert = ({ message, success, addMessage }) => {
  useEffect(() => {
    if (message.length > 0) {
      animateCSS('.alert', 'bounceInDown');
      setTimeout(() => addMessage(''), 4000);
    }
  });
  return (
        <>
        {message.length > 0 ? (
            <div className="alert-wrapper mt-3">
                <div className={`alert alert-${success ? 'success' : 'danger'}`} role="alert">
                    {message}
                </div>
            </div>
        ) : null }
        </>
  );
};

const mapStateToProps = (state) => ({
  message: state.auth.message,
  success: state.auth.message
});

const mapDispatchToProps = (dispatch) => ({
  addMessage: (message, success) => dispatch(addMessage(message, success))
});

export default connect(mapStateToProps, mapDispatchToProps)(Alert);
