import React from 'react';
import { FaNewspaper } from 'react-icons/fa';
import { GiSelfLove } from 'react-icons/gi';
import { IoIosAddCircle, IoIosPricetags } from 'react-icons/io';
import { MdSort } from 'react-icons/md';

export const treksNavData = [
  { type: 'recent', icon: <FaNewspaper/>, des: 'Most recent Treks' },
  { type: 'liked', icon: <GiSelfLove/>, des: 'Treks liked by You' },
  { type: 'post', icon: <IoIosAddCircle/>, post: true, des: 'Share your Experience' },
  { type: 'category', icon: <MdSort/>, des: 'Treks related to a Category' },
  { type: 'tags', icon: <IoIosPricetags/>, des: 'Treks related to a Tag' }
];
