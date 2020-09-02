import React, { useState } from 'react';
import AccountOption from './AccountOption';

const Account = () => {
  const [loggedIn, setloggedIn] = useState(false);
  return (
        <div className="p-1">
            {loggedIn ? <>
            <AccountOption link="LogOut" />
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
