import React from 'react';
import { FaNewspaper } from 'react-icons/fa';
import { RiChatPrivateFill } from 'react-icons/ri';
import { IoIosAddCircle } from 'react-icons/io';
import { MdSort } from 'react-icons/md';
import { BsLayoutTextSidebarReverse } from 'react-icons/bs';

export const treksNavData = [
  { type: 'recent', icon: <FaNewspaper/>, des: 'Most recent Treks' },
  { type: 'private', icon: <RiChatPrivateFill/>, des: 'Treks only you can see' },
  { type: 'post', icon: <IoIosAddCircle/>, post: true, des: 'Share your Experience' },
  { type: 'my treks', icon: <BsLayoutTextSidebarReverse/>, des: 'Treks posted by me' },
  { type: 'categories', icon: <MdSort/>, des: 'Choose a Category' }
];

export const privacyOptions = [
  { option: 'public', des: 'Everyone will be able to see my Trek' },
  { option: 'private', des: 'Only I will be able to see my Trek' },
  { option: 'peers only', des: 'Only my peers will be able to see my Trek' }
];

export const categoryOptions = [
  { option: 'Popular' },
  { option: 'Wildlife' },
  { option: 'Sports' },
  { option: 'Coast' },
  { option: 'Lakes' },
  { option: 'Cities' }
];
