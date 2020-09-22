import React from 'react';
import { Button } from 'reactstrap';
import { RiLoginCircleLine } from 'react-icons/ri';

const SubmitBtn = ({ text }) => {
  return (
        <Button type="submit" className="green-bg">
          <RiLoginCircleLine /> {text}
        </Button>
  );
};

export default SubmitBtn;
