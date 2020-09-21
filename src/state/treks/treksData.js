import trek1 from '../../images/trek-1.jpg';
import userImg from '../../images/user.png';

export const treksData = [
  {
    id: 1,
    user: { username: 'Trigga Maserati', profile_pic: userImg },
    trek: [
      {
        images: [trek1, userImg, trek1],
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi possimus corporis consectetur rerum incidunt dolore id dolorum quo ab qui!',
        videos: []
      }
    ],
    tags: ['#wildlife'],
    category: ['Wildlife'],
    location: 'Nairobi National Park',
    privacy: 'Public',
    comments: [
      { id: 10, postId: 1, username: 'Mary', profile_pic: userImg, comment: 'Wow looking good', reports: [] },
      { id: 11, postId: 1, username: 'Eliza', profile_pic: trek1, comment: 'Wow looking good', reports: [] },
      { id: 12, postId: 1, username: 'Trekstar', profile_pic: userImg, comment: 'Wow looking good dwed ew dwe dwed wed ewd we dwe dw ed wed we dwe d wed wed wed we de wd wed wed wed we dwe d ewd wed wed wd we d wed wed wed wed wed wed wed ewd we d wed we d wdwe dwe dwe d wed wwwedwedw edwe dwe dw ed wed wedwed wedwe d wed wedwe dede', reports: [] }
    ],
    likes: [
      { id: 50, postId: 1, username: 'Mary', profile_pic: userImg },
      { id: 51, postId: 1, username: 'Eliza', profile_pic: userImg },
      { id: 52, postId: 1, username: 'Trekstar', profile_pic: userImg }
    ],
    reports: [],
    reposts: [],
    date_posted: Date.now()
  },
  {
    id: 2,
    user: { username: 'Trigga Maserati', profile_pic: userImg },
    trek: [
      {
        images: [trek1],
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi possimus corporis consectetur rerum incidunt dolore id dolorum quo ab qui!',
        videos: []
      }
    ],
    tags: ['#wildlife'],
    category: 'Wildlife',
    location: 'Nairobi National Park',
    privacy: 'Public',
    comments: [
      { id: 13, postId: 2, username: 'Mary', profile_pic: userImg, comment: 'Wow looking good', reports: [] },
      { id: 14, postId: 2, username: 'Eliza', profile_pic: trek1, comment: 'Wow looking good', reports: [] },
      { id: 15, postId: 2, username: 'Trekstar', profile_pic: userImg, comment: 'Wow looking good', reports: [] }
    ],
    likes: [
      { id: 53, postId: 2, username: 'Mary', profile_pic: userImg },
      { id: 54, postId: 2, username: 'Eliza', profile_pic: userImg },
      { id: 55, postId: 2, username: 'Trekstar', profile_pic: userImg }
    ],
    reports: [],
    reposts: [],
    date_posted: Date.now()
  },
  {
    id: 3,
    user: { username: 'Trigga Maserati', profile_pic: userImg },
    trek: [
      {
        images: [trek1],
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi possimus corporis consectetur rerum incidunt dolore id dolorum quo ab qui!',
        videos: []
      }
    ],
    tags: ['#wildlife'],
    category: 'Wildlife',
    location: 'Nairobi National Park',
    privacy: 'Public',
    comments: [
      { id: 16, postId: 3, username: 'Mary', profile_pic: userImg, comment: 'Wow looking good', reports: [] },
      { id: 17, postId: 3, username: 'Eliza', profile_pic: trek1, comment: 'Wow looking good', reports: [] },
      { id: 18, postId: 3, username: 'Trekstar', profile_pic: userImg, comment: 'Wow looking good', reports: [] }
    ],
    likes: [
      { id: 56, postId: 3, username: 'Mary', profile_pic: userImg },
      { id: 57, postId: 3, username: 'Eliza', profile_pic: userImg },
      { id: 58, postId: 3, username: 'Trekstar', profile_pic: userImg }
    ],
    reports: [],
    reposts: [],
    date_posted: Date.now()
  },
  {
    id: 4,
    user: { username: 'Trigga Maserati', profile_pic: userImg },
    trek: [
      {
        images: [trek1],
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi possimus corporis consectetur rerum incidunt dolore id dolorum quo ab qui!',
        videos: []
      }
    ],
    tags: ['#wildlife'],
    category: 'Wildlife',
    location: 'Nairobi National Park',
    privacy: 'Public',
    comments: [
      { id: 19, postId: 4, username: 'Mary', profile_pic: userImg, comment: 'Wow looking good', reports: [] },
      { id: 20, postId: 4, username: 'Eliza', profile_pic: trek1, comment: 'Wow looking good', reports: [] },
      { id: 21, postId: 4, username: 'Trekstar', profile_pic: userImg, comment: 'Wow looking good', reports: [] }
    ],
    likes: [
      { id: 59, postId: 4, username: 'Mary', profile_pic: userImg },
      { id: 60, postId: 4, username: 'Eliza', profile_pic: userImg },
      { id: 61, postId: 4, username: 'Trekstar', profile_pic: userImg }
    ],
    reports: [],
    reposts: [],
    date_posted: Date.now()
  },
  {
    id: 5,
    user: { username: 'Trigga Maserati', profile_pic: userImg },
    trek: [
      {
        images: [trek1],
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi possimus corporis consectetur rerum incidunt dolore id dolorum quo ab qui!',
        videos: []
      }
    ],
    tags: ['#wildlife'],
    category: 'Wildlife',
    location: 'Nairobi National Park',
    privacy: 'Public',
    comments: [
      { id: 22, postId: 5, username: 'Mary', profile_pic: userImg, comment: 'Wow looking good', reports: [] },
      { id: 23, postId: 5, username: 'Eliza', profile_pic: trek1, comment: 'Wow looking good', reports: [] },
      { id: 24, postId: 5, username: 'Trekstar', profile_pic: userImg, comment: 'Wow looking good', reports: [] }
    ],
    likes: [
      { id: 62, postId: 5, username: 'Mary', profile_pic: userImg },
      { id: 62, postId: 5, username: 'Eliza', profile_pic: userImg },
      { id: 63, postId: 5, username: 'Trekstar', profile_pic: userImg }
    ],
    reports: [],
    reposts: [],
    date_posted: Date.now()
  },
  {
    id: 6,
    user: { username: 'Trigga Maserati', profile_pic: userImg },
    trek: [
      {
        images: [trek1],
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi possimus corporis consectetur rerum incidunt dolore id dolorum quo ab qui!',
        videos: []
      }
    ],
    tags: ['#wildlife'],
    category: 'Wildlife',
    location: 'Nairobi National Park',
    privacy: 'Public',
    comments: [
      { id: 25, postId: 6, username: 'Mary', profile_pic: userImg, comment: 'Wow looking good', reports: [] },
      { id: 26, postId: 6, username: 'Eliza', profile_pic: trek1, comment: 'Wow looking good', reports: [] },
      { id: 27, postId: 6, username: 'Trekstar', profile_pic: userImg, comment: 'Wow looking good', reports: [] }
    ],
    likes: [
      { id: 64, postId: 6, username: 'Mary', profile_pic: userImg },
      { id: 65, postId: 6, username: 'Eliza', profile_pic: userImg },
      { id: 66, postId: 6, username: 'Trekstar', profile_pic: userImg }
    ],
    reports: [],
    reposts: [],
    date_posted: Date.now()
  },
  {
    id: 7,
    user: { username: 'Trigga Maserati', profile_pic: userImg },
    trek: [
      {
        images: [trek1],
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi possimus corporis consectetur rerum incidunt dolore id dolorum quo ab qui!',
        videos: []
      }
    ],
    tags: ['#wildlife'],
    category: 'Wildlife',
    location: 'Nairobi National Park',
    privacy: 'Public',
    comments: [
      { id: 28, postId: 7, username: 'Mary', profile_pic: userImg, comment: 'Wow looking good', reports: [] },
      { id: 29, postId: 7, username: 'Eliza', profile_pic: trek1, comment: 'Wow looking good', reports: [] },
      { id: 30, postId: 7, username: 'Trekstar', profile_pic: userImg, comment: 'Wow looking good', reports: [] }
    ],
    likes: [
      { id: 67, postId: 7, username: 'Mary', profile_pic: userImg },
      { id: 68, postId: 7, username: 'Eliza', profile_pic: userImg },
      { id: 69, postId: 7, username: 'Trekstar', profile_pic: userImg }
    ],
    reports: [],
    reposts: [],
    date_posted: Date.now()
  },
  {
    id: 8,
    user: { username: 'Trigga Maserati', profile_pic: userImg },
    trek: [
      {
        images: [trek1],
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi possimus corporis consectetur rerum incidunt dolore id dolorum quo ab qui!',
        videos: []
      }
    ],
    tags: ['#wildlife'],
    category: 'Wildlife',
    location: 'Nairobi National Park',
    privacy: 'Public',
    comments: [
      { id: 31, postId: 8, username: 'Mary', profile_pic: userImg, comment: 'Wow looking good', reports: [] },
      { id: 32, postId: 8, username: 'Eliza', profile_pic: trek1, comment: 'Wow looking good', reports: [] },
      { id: 33, postId: 8, username: 'Trekstar', profile_pic: userImg, comment: 'Wow looking good', reports: [] }
    ],
    likes: [
      { id: 70, postId: 8, username: 'Mary', profile_pic: userImg },
      { id: 71, postId: 8, username: 'Eliza', profile_pic: userImg },
      { id: 72, postId: 8, username: 'Trekstar', profile_pic: userImg }
    ],
    reports: [],
    reposts: [],
    date_posted: Date.now()
  }
];
