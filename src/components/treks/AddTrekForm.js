import React, { useState, useEffect } from 'react';
import { Form } from 'reactstrap';
import { IoMdText, IoIosPricetags } from 'react-icons/io';
import { MdLocationOn } from 'react-icons/md';
import FileInput from './FileInput';
import TextInput from '../auth/TextInput';
import SelecterInput from './SelecterInput';

import { privacyOptions, categoryOptions } from './TreksNavData';

const AddTrekForm = () => {
  const [privacy, setprivacyOptions] = useState([]);
  const [category, setcategoryOptions] = useState([]);
  useEffect(() => {
    setprivacyOptions(privacyOptions);
    setcategoryOptions(categoryOptions);
  }, []);
  return (
        <Form className="text-center center column pb-5 overpass add-trek-form">
            <FileInput fileId="post-file" />
            <TextInput
                inputId="caption-input"
                ph="Add a caption"
                icon={<IoMdText />}
                getText={(caption) => console.log(caption)}
                iconColor="c-cream medium-text"
            />
            <TextInput
                inputId="trek-location-input"
                ph="Location"
                icon={<MdLocationOn />}
                getText={(caption) => console.log(caption)}
                iconColor="c-cream medium-text"
            />
            <TextInput
                inputId="trek-tags-input"
                ph="e.g #lifestyle #slick"
                icon={<IoIosPricetags />}
                getText={(caption) => console.log(caption)}
                iconColor="medium-text c-cream"
                extraClass="c-green"
            />
            <div className="center">
                <SelecterInput options={privacy} sId="trek-privacy-input" />
                <SelecterInput options={category} sId="trek-category-input" />
            </div>
        </Form>
  );
};

export default AddTrekForm;
