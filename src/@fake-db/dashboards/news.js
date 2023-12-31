import { getCustomDateTime } from '../../@jumbo/utils/dateHelper'

export const news = {
  dailyFeed: [
    {
      id: 1,
      user: {
        id: 100,
        name: 'Atul Midha',
        profile_pic: 'https://via.placeholder.com/150x150',
      },
      type: 'PROJECT_INVITATION',
      metaData: {
        sender: {
          id: 123,
          name: 'Murli Swami',
          profile_pic: 'https://via.placeholder.com/150x150',
        },
        project: { id: 12, name: 'Mouldify' },
      },
      likes: 123,
      shares: 25,
      timeRange: '10:30 am - 22.07.20', //  timeFromNow(),
      createdAt: getCustomDateTime(-5, 'minutes', 'MMMM DD, YYYY, h:mm:ss a'),
    },
    {
      id: 2,
      user: {
        id: 101,
        name: 'Dinesh Suthar',
        profile_pic: 'https://via.placeholder.com/150x150',
      },
      type: 'PHOTOS_UPLOADED',
      metaData: {
        user: {
          id: 1234,
          name: 'Tanmay Goswami',
          profile_pic: 'https://via.placeholder.com/150x150',
        },
        group: 'Art Lovers',
        count: 6,
        photos: [
          {
            id: 1,
            photo_url: 'https://via.placeholder.com/600x400',
            caption: 'Beauty with Beast',
          },
          {
            id: 2,
            photo_url: 'https://via.placeholder.com/600x400',
            caption: 'Nature Love',
          },
          {
            id: 3,
            photo_url: 'https://via.placeholder.com/400x400',
            caption: 'Forest',
          },
          {
            id: 4,
            photo_url: 'https://via.placeholder.com/400x400',
            caption: 'Nature at its best',
          },
          {
            id: 5,
            photo_url: 'https://via.placeholder.com/600x400',
            caption: 'Sea House',
          },
          {
            id: 6,
            photo_url: 'https://via.placeholder.com/600x400',
            caption: 'Minimal',
          },
        ],
      },
      likes: 129,
      shares: 25,
      timeRange: '09:30 am - 22.07.20',
      createdAt: getCustomDateTime(-7, 'minutes', 'MMMM DD, YYYY, h:mm:ss a'),
    },
    {
      id: 3,
      user: {
        id: 102,
        name: 'John Doe',
        profile_pic: 'https://via.placeholder.com/150x150',
      },
      type: 'SHARED_POST',
      metaData: {
        user: {
          id: 124,
          name: 'Jacky Roy',
          profile_pic: 'https://via.placeholder.com/150x150',
        },
        post: { title: 'This is Beginning' },
      },
      likes: 5677,
      shares: 345,
      timeRange: '06:30 am - 22.07.20',
      createdAt: getCustomDateTime(-8, 'minutes', 'MMMM DD, YYYY, h:mm:ss a'),
    },
    {
      id: 4,
      user: {
        id: 105,
        name: 'North Taylor',
        profile_pic: 'https://via.placeholder.com/150x150',
      },
      type: 'PROJECT_INVITATION',
      metaData: {
        sender: {
          id: 130,
          name: 'Joe Root',
          profile_pic: 'https://via.placeholder.com/150x150',
        },
        project: { id: 13, name: 'Jumbo' },
      },
      likes: 234,
      shares: 86,
      timeRange: '03:30 am - 22.07.20',
      createdAt: getCustomDateTime(-10, 'minutes', 'MMMM DD, YYYY, h:mm:ss a'),
    },
    {
      id: 5,
      user: {
        id: 756,
        name: 'Peter Broad',
        profile_pic: 'https://via.placeholder.com/150x150',
      },
      type: 'PHOTOS_UPLOADED',
      metaData: {
        user: {
          id: 1234,
          name: 'James Anderson',
          profile_pic: 'https://via.placeholder.com/150x150',
        },
        count: 8,
        group: 'Javascript Experts',
        photos: [
          {
            id: 1,
            photo_url: 'https://via.placeholder.com/600x400',
            caption: 'Beauty with Beast',
          },
          {
            id: 2,
            photo_url: 'https://via.placeholder.com/600x400',
            caption: 'Nature Love',
          },
          {
            id: 3,
            photo_url: 'https://via.placeholder.com/400x400',
            caption: 'Forest',
          },
          {
            id: 4,
            photo_url: 'https://via.placeholder.com/400x400',
            caption: 'Nature at its best',
          },
          {
            id: 5,
            photo_url: 'https://via.placeholder.com/600x400',
            caption: 'Sea House',
          },
          {
            id: 6,
            photo_url: 'https://via.placeholder.com/600x400',
            caption: 'Minimal',
          },
          {
            id: 7,
            photo_url: 'https://via.placeholder.com/600x400',
            caption: 'Beauty with Beast',
          },
          {
            id: 8,
            photo_url: 'https://via.placeholder.com/600x400',
            caption: 'Nature Love',
          },
        ],
      },
      likes: 457,
      shares: 54,
      timeRange: '12:30 am - 22.07.20',
      createdAt: getCustomDateTime(-15, 'minutes', 'MMMM DD, YYYY, h:mm:ss a'),
    },
    {
      id: 6,
      user: {
        id: 455,
        name: 'Rose Taylor',
        profile_pic: 'https://via.placeholder.com/150x150',
      },
      type: 'SHARED_POST',
      metaData: {
        user: {
          id: 765,
          name: 'Robert Twose',
          profile_pic: 'https://via.placeholder.com/150x150',
        },
        post: { title: 'Introduction to Javascript' },
      },
      likes: 768,
      shares: 567,
      timeRange: '11:30 pm - 21.07.20',
      createdAt: getCustomDateTime(-1, 'hours', 'MMMM DD, YYYY, h:mm:ss a'),
    },
    {
      id: 7,
      user: {
        id: 676,
        name: 'Williams Blake',
        profile_pic: 'https://via.placeholder.com/150x150',
      },
      type: 'PROJECT_INVITATION',
      metaData: {
        sender: {
          id: 544,
          name: 'Janifer decibel',
          profile_pic: 'https://via.placeholder.com/150x150',
        },
        project: { id: 16, name: 'Wieldy' },
      },
      likes: 856,
      shares: 45,
      timeRange: '10:30 pm - 21.07.20',
      createdAt: getCustomDateTime(-3, 'hours', 'MMMM DD, YYYY, h:mm:ss a'),
    },
    {
      id: 8,
      user: {
        id: 906,
        name: 'Steve Law',
        profile_pic: 'https://via.placeholder.com/150x150',
      },
      type: 'PHOTOS_UPLOADED',
      metaData: {
        user: {
          id: 786,
          name: 'Dhruva Sharma',
          profile_pic: 'https://via.placeholder.com/150x150',
        },
        count: 3,
        group: 'React Lovers',
        photos: [
          {
            id: 1,
            photo_url: 'https://via.placeholder.com/600x400',
            caption: 'Beauty with Beast',
          },
          {
            id: 2,
            photo_url: 'https://via.placeholder.com/600x400',
            caption: 'Nature Love',
          },
          {
            id: 3,
            photo_url: 'https://via.placeholder.com/400x400',
            caption: 'Forest',
          },
        ],
      },
      likes: 768,
      shares: 43,
      timeRange: '09:30 pm - 21.07.20',
      createdAt: getCustomDateTime(-6, 'hours', 'MMMM DD, YYYY, h:mm:ss a'),
    },
    {
      id: 9,
      user: {
        id: 678,
        name: 'Brett Heavy',
        profile_pic: 'https://via.placeholder.com/150x150',
      },
      type: 'SHARED_POST',
      metaData: {
        user: {
          id: 657,
          name: 'Ian hughes',
          profile_pic: 'https://via.placeholder.com/150x150',
        },
        post: { title: 'A road to good development' },
      },
      likes: 76656,
      shares: 4566,
      timeRange: '05:30 pm - 21.07.20',
      createdAt: getCustomDateTime(-10, 'hours', 'MMMM DD, YYYY, h:mm:ss a'),
    },
  ],
  popularAuthors: [
    {
      id: 1,
      name: 'Haylie Dorwart',
      profile_pic: 'https://via.placeholder.com/150x150',
      readers: '500k+',
      articles: 45,
    },
    {
      id: 2,
      name: 'Rayna Schleifer',
      profile_pic: 'https://via.placeholder.com/150x150',
      readers: '800k+',
      articles: 75,
    },
    {
      id: 3,
      name: 'Cristofer Herwitz',
      profile_pic: 'https://via.placeholder.com/150x150',
      readers: '600k+',
      articles: 67,
    },
    {
      id: 4,
      name: 'Jenny Lee',
      profile_pic: 'https://via.placeholder.com/150x150',
      readers: '500k+',
      articles: 87,
    },
    {
      id: 5,
      name: 'Jemas Dorwart',
      profile_pic: 'https://via.placeholder.com/150x150',
      readers: '500k+',
      articles: 45,
    },
    {
      id: 6,
      name: 'Rayna Schleifer',
      profile_pic: 'https://via.placeholder.com/150x150',
      readers: '800k+',
      articles: 75,
    },
  ],
  popularArticles: [
    {
      id: 1,
      thumb: 'https://via.placeholder.com/160x150',
      category: 'Currency',
      title: '10 things you must know before trading in Cryptocurrency',
      date: '25th July, 2020',
      views: 400,
    },
    {
      id: 2,
      thumb: 'https://via.placeholder.com/160x150',
      category: 'Health',
      title: '10 Ways you can fight Covid-19',
      date: '20th July, 2020',
      views: 657,
    },
    {
      id: 3,
      thumb: 'https://via.placeholder.com/160x150',
      category: 'Sports',
      title: 'Sports session amid Corona outbreak.',
      date: '20th August, 2020',
      views: 875,
    },
    {
      id: 1,
      thumb: 'https://via.placeholder.com/160x150',
      category: 'Politics',
      title: 'World leaders shared platform over Covid 19.',
      date: '10th August, 2020',
      views: 231,
    },
  ],
  comments: [
    {
      id: 1,
      user: {
        id: 22,
        name: 'Domnic Harris',
        profile_pic: 'https://via.placeholder.com/150x150',
      },
      postTitle: '4 keys to make your business unique.',
      comment:
        'Thank you for such a wonderful post. The content was outstanding.',
      date: getCustomDateTime(-5, 'minutes', 'MMMM DD, YYYY, h:mm:ss a'),
    },
    {
      id: 2,
      user: {
        id: 22,
        name: 'Novac',
        profile_pic: 'https://via.placeholder.com/150x150',
      },
      postTitle: '10 ways you can keep yourself safe from Corona.',
      comment:
        'It is amazing, keep up the good work. You are doing good for the society.',
      date: getCustomDateTime(-10, 'minutes', 'MMMM DD, YYYY, h:mm:ss a'),
    },
    {
      id: 3,
      user: {
        id: 22,
        name: 'Rahul',
        profile_pic: 'https://via.placeholder.com/150x150',
      },
      postTitle: 'Peaceful Mind - The first requirement towards the success',
      comment:
        'Thank you for such a wonderful post. The content was outstanding.',
      date: getCustomDateTime(-15, 'minutes', 'MMMM DD, YYYY, h:mm:ss a'),
    },
    {
      id: 4,
      user: {
        id: 22,
        name: 'Federer',
        profile_pic: 'https://via.placeholder.com/150x150',
      },
      postTitle: 'Work from home - Easy or Difficult?',
      comment: 'Haha this is funny, it actually tells the truth.',
      date: getCustomDateTime(-18, 'minutes', 'MMMM DD, YYYY, h:mm:ss a'),
    },
    {
      id: 5,
      user: {
        id: 22,
        name: 'Francis',
        profile_pic: 'https://via.placeholder.com/150x150',
      },
      postTitle: '4 keys to make your business unique.',
      comment:
        'Thank you for such a wonderful post. The content was outstanding.',
      date: getCustomDateTime(-25, 'minutes', 'MMMM DD, YYYY, h:mm:ss a'),
    },
    {
      id: 6,
      user: {
        id: 22,
        name: 'Andy Murray',
        profile_pic: 'https://via.placeholder.com/150x150',
      },
      postTitle: '4 keys to make your business unique.',
      comment:
        'Thank you for such a wonderful post. The content was outstanding.',
      date: getCustomDateTime(-35, 'minutes', 'MMMM DD, YYYY, h:mm:ss a'),
    },
  ],
  newSubscribers: [
    { month: 'Jan', count: 1000 },
    { month: 'Feb', count: 500 },
    { month: 'Mar', count: 1300 },
    { month: 'Apr', count: 300 },
    { month: 'May', count: 750 },
    { month: 'Jun', count: 850 },
    { month: 'Jul', count: 150 },
  ],
  newsArticles: [
    { month: 'Jan', count: 1500 },
    { month: 'Feb', count: 1650 },
    { month: 'Mar', count: 1800 },
    { month: 'Apr', count: 2400 },
    { month: 'May', count: 2000 },
    { month: 'Jun', count: 1650 },
    { month: 'Jul', count: 1500 },
    { month: 'Aug', count: 1900 },
    { month: 'Sep', count: 2400 },
  ],
  dailyTraffic: [
    { day: 'Mon', count: 500 },
    { day: 'Tues', count: 1500 },
    { day: 'Wed', count: 1200 },
    { day: 'Thru', count: 1750 },
    { day: 'Fri', count: 1000 },
    { day: 'Sat', count: 1400 },
    { day: 'Sun', count: 1800 },
  ],
}
