import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import AccountOption from './AccountOption';

const Account = ({ user, close }) => {
  const [loggedIn, setloggedIn] = useState(false);
  useEffect(() => {
    if (user.id) {
      setloggedIn(true);
    }
  }, [user]);
  return (
        <div className="center">
            {loggedIn ? <>
            <AccountOption dropdown={true} close={close} />
            </>
              : <>
            <AccountOption link="/login" text="Login" close={close} />
            <AccountOption link="/signup" text="Signup" close={close} />
            </>}
        </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user
});

export default connect(mapStateToProps)(Account);
