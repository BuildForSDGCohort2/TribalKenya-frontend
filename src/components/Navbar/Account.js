import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import AccountOption from './AccountOption';

const Account = ({ user }) => {
  const [loggedIn, setloggedIn] = useState(false);
  useEffect(() => {
    if (user) {
      setloggedIn(true);
    }
  }, [user]);
  return (
        <div className="p-1">
            {loggedIn ? <>
            <AccountOption dropdown={true} />
            </>
              : <>
            <AccountOption link="login" />
            <AccountOption link="signup" />
            </>}
        </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user
});

export default connect(mapStateToProps)(Account);
