import React, { useState, useEffect } from 'react';
import { Form } from 'reactstrap';
import { IoMdText, IoIosPricetags } from 'react-icons/io';
import { MdLocationOn } from 'react-icons/md';
import FileInput from './FileInput';
import TextInput from '../auth/TextInput';
import SelecterInput from './SelecterInput';

import { privacyOptions, categoryOptions } from './TreksNavData';
import LargeBtn from '../LargeBtn';
import TrekMediaPreview from './TrekMediaPreview';

const AddTrekForm = () => {
  const [privacy, setprivacyOptions] = useState([]);
  const [category, setcategoryOptions] = useState([]);
  const [inputs, setinputs] = useState({ category: 'popular sites', privacy: 'public' });
  const [mediaPreview, setMediaPreview] = useState(false);
  const handleClick = () => {
    console.log(inputs);
  };
  const filterFiles = (files) => {
    setMediaPreview(false);
    setinputs({ ...inputs, images: [], videos: [] });
    const images = [];
    const videos = [];
    files.forEach((file) => {
      if (file.type.substring(0, 5) === 'video') {
        videos.push(file);
      }
      if (file.type.substring(0, 5) === 'image') {
        images.push(file);
      }
    });
    setinputs({ ...inputs, images: images, videos: videos });
    setMediaPreview(true);
  };
  useEffect(() => {
    setprivacyOptions(privacyOptions);
    setcategoryOptions(categoryOptions);
  }, []);
  return (
        <Form className="text-center center column overpass add-trek-form">
            <FileInput fileId="post-file"
                getFiles={(files) => filterFiles(files)}
            />
            {mediaPreview ? <TrekMediaPreview images={inputs.images} videos={inputs.videos} /> : null}
            <TextInput
                inputId="caption-input"
                ph="Add a caption"
                icon={<IoMdText />}
                getText={(caption) => setinputs({ ...inputs, caption: caption })}
                iconColor="c-cream medium-text"
            />
            <TextInput
                inputId="trek-location-input"
                ph="Location"
                icon={<MdLocationOn />}
                getText={(location) => setinputs({ ...inputs, location: location })}
                iconColor="c-cream medium-text"
            />
            <TextInput
                inputId="trek-tags-input"
                ph="e.g #lifestyle #slick"
                icon={<IoIosPricetags />}
                getText={(tags) => setinputs({ ...inputs, tags: tags })}
                iconColor="medium-text c-cream"
                extraClass="c-green"
            />
            <div className="center">
                <SelecterInput options={privacy} sId="trek-privacy-input" selected={(selected) => setinputs({ ...inputs, privacy: selected })} />
                <SelecterInput options={category} sId="trek-category-input" selected={(selected) => setinputs({ ...inputs, category: selected })} />
            </div>
            <LargeBtn activate={handleClick} textContent="Post Trek" extraClass="white-bg mt-3" />
        </Form>
  );
};

export default AddTrekForm;
