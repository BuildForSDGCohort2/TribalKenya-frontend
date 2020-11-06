import React, { useState, useEffect } from 'react';
import { IoMdText, IoIosPricetags } from 'react-icons/io';
import { MdLocationOn } from 'react-icons/md';
import { Form } from 'reactstrap';
import TextInput from '../auth/TextInput';
import SelecterInput from '../treks/SelecterInput';
import { privacyOptions, categoryOptions } from '../treks/TreksNavData';
import LargeBtn from '../LargeBtn';

const TrekUpdateForm = ({ getInputs, trek }) => {
  const [inputs, setinputs] = useState({});
  const [privacy, setprivacyOptions] = useState([]);
  const [category, setcategoryOptions] = useState([]);
  useEffect(() => {
    setprivacyOptions(privacyOptions);
    setcategoryOptions(categoryOptions);
  }, []);
  const handleClick = () => {
    getInputs(inputs);
  };
  return (
        <Form>
        <TextInput
                inputId="caption-input"
                ph="Add a caption"
                icon={<IoMdText />}
                getText={(caption) => setinputs({ ...inputs, caption: caption })}
                iconColor="c-cream medium-text"
                textarea="true"
                dV={trek.caption}
            />
            <TextInput
                inputId="trek-location-input"
                ph="Location"
                icon={<MdLocationOn />}
                getText={(location) => setinputs({ ...inputs, location: location })}
                iconColor="c-cream medium-text"
                dV={trek.location}
            />
            <TextInput
                inputId="trek-tags-input"
                ph="e.g #lifestyle #slick"
                icon={<IoIosPricetags />}
                getText={(tags) => setinputs({ ...inputs, tags: tags })}
                iconColor="medium-text c-cream"
                extraClass="c-green"
                dV={trek.tags}
            />
            <div className="center">
                <SelecterInput dV={trek.privacy} options={privacy} sId="trek-privacy-input" selected={(selected) => setinputs({ ...inputs, privacy: selected })} />
                <SelecterInput dV={trek.category} options={category} sId="trek-category-input" selected={(selected) => setinputs({ ...inputs, category: selected })} />
            </div>
            <LargeBtn activate={handleClick} textContent="Update Trek" extraClass="small-text black-bg mt-3" />
        </Form>
  );
};

export default TrekUpdateForm;
