import React, { useState } from 'react';
import { Form } from 'reactstrap';
import { IoMdText } from 'react-icons/io';
import { connect } from 'react-redux';
import TextInput from '../auth/TextInput';
import { addTreks, trekUpdateEndpoint } from '../../state/treks/treks.actions';

const AddCommentForm = ({ trekUpdateEndpoint, trek, comments, profile, treks, addTreks }) => {
  const [inputs, setinputs] = useState({});
  const handleSubmit = async (ev) => {
    try {
      ev.preventDefault();
      const newComment = { comments: [...comments, { profileId: profile.id, profile_pic: profile.photoURL, username: profile.username, comment: inputs.comment }] };
      const allTreks = [...treks];
      allTreks.splice(allTreks.indexOf(trek), 1, { ...trek, ...newComment });
      addTreks(allTreks);
      ev.target.value = '';
      ev.target.blur();
      await trekUpdateEndpoint(trek.id, { ...newComment });
    } catch (error) {
      console.log(error);
    }
  };
  return (
        <Form onSubmit={handleSubmit}>
            <TextInput
                inputId="comment-input"
                ph="Add a comment"
                icon={<IoMdText />}
                getText={(comment) => setinputs({ ...inputs, comment: comment })}
                iconColor="c-cream medium-text"
                textarea="true"
                rows="2"
                extraClass="w-100"
                activateOnKeyup={handleSubmit}
            />
        </Form>
  );
};

const mapStateToProps = (state) => ({
  profile: state.auth.profile,
  treks: state.treksStore.recentTreks
});

const mapDispatchToProps = (dispatch) => ({
  trekUpdateEndpoint: (trekId, newTrek) => dispatch(trekUpdateEndpoint(trekId, newTrek)),
  addTreks: (treks) => dispatch(addTreks(treks))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddCommentForm);
