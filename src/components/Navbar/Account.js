import React, { useState, useEffect } from 'react';
import AccountOption from './AccountOption';

const Account = ({ user }) => {
  const [loggedIn, setloggedIn] = useState(true);
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
            <AccountOption link="Login" />
            <AccountOption link="Sign Up" />
            </>}
        </div>
  );
};

export default Account;
