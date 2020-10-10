import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Form, Button } from 'reactstrap';
import { BiMessageAltAdd } from 'react-icons/bi';
import TextAreaInput from '../TextAreaInput';

const PlaceReviewsForm = () => {
  const [text, setText] = useState('');
  const [showForm, setShowForm] = useState(false);
  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log(text);
  };
  return (
        <div className="m-0">
            <p className="medium-text overpass small-caps h-green cursor text-center" onClick={() => setShowForm(!showForm)}><BiMessageAltAdd /> Add Your Review</p>
            {showForm ? (
                <Form onSubmit={handleSubmit}>
                    <TextAreaInput textId="user-review" ph="What are your thoughts on this location?" getText={(text) => setText(text)} />
                    <Button type="submit">Submit</Button>
                </Form>
            ) : null}
        </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user
});

export default connect(mapStateToProps)(PlaceReviewsForm);
