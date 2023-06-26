export const templates = [
  {
    id: 1,
    thumbnail: '/images/templates/Image 2.png',
    name: 'Design Comparison',
    description: 'Participants answer questions while looking at your design.',
    category: 'Recommended',
    poll_type: 'image',
    is_recommended: true,
    tags: [],
  },
  {
    id: 2,
    thumbnail: '/images/templates/Play.png',
    name: 'Preference Test',
    description:
      'Participants answer questions by choosing one of two options.',
    category: 'Recommended',
    poll_type: 'image',
    is_recommended: true,
    tags: [],
  },
  {
    id: 3,
    thumbnail: '/images/templates/Swap.png',
    name: 'Which song is better?',
    description: 'Participants answer questions while listening to your song.',
    category: 'Recommended',
    poll_type: 'image',
    tags: [],
  },
  {
    id: 4,
    thumbnail: '/images/templates/Volume Down.png',
    name: 'Do you like this movie?',
    description:
      'Participants answer questions after watching your movie or video.',
    category: 'Recommended',
    poll_type: 'image',
    tags: [],
  },
  {
    id: 5,
    thumbnail: '/images/templates/Image 2.png',
    name: 'Design Comparison',
    description: 'Participants answer questions while looking at your design.',
    category: 'Creative Testing',
    poll_type: 'image',
    is_recommended: true,
    tags: [],
  },
  {
    id: 6,
    thumbnail: '/images/templates/Play.png',
    name: 'Preference Test',
    description:
      'Participants answer questions by choosing one of two options.',
    category: 'Creative Testing',
    poll_type: 'image',
    is_recommended: true,
    tags: [],
  },
  {
    id: 7,
    thumbnail: '/images/templates/Swap.png',
    name: 'Which song is better?',
    description: 'Participants answer questions while listening to your song.',
    category: 'Logo Concept',
    poll_type: 'image',
    is_recommended: true,
    tags: [],
  },
  {
    id: 8,
    thumbnail: '/images/templates/Volume Down.png',
    name: 'Do you like this movie?',
    description:
      'Participants answer questions after watching your movie or video.',
    category: 'Logo Concept',
    poll_type: 'image',
    tags: [],
  },
]

export const statusColor = [
  {
    status: 'started',
    color: '#F2AE14',
    gradient:
      'linear-gradient(254deg, rgba(169,118,2,1) 0%, rgba(242,174,20,1) 50%)',
    description: 'This test is started.',
    icon: 'startup',
  },
  {
    status: 'completed',
    color: '#016AE9',
    gradient:
      'linear-gradient(237deg, rgba(25,81,157,1) 0%, rgba(1,106,233,1) 50%)',
    description:
      'This test has completed and will not receive any other response.',
    icon: 'trophy',
  },
  {
    status: 'draft',
    color: '#FF0700',
    gradient:
      'linear-gradient(234deg, rgba(6,122,94,1) 0%, rgba(2,161,123,1) 50%)',
    description: 'This test is drafted and could be continued later',
    icon: 'man-running',
  },
]

export const Tips = [
    {
        title: "Give Users a Specific Question to Answer",
        description:
            "Don't just ask users to vote on your resource. Ask them about things like engagement, appeal, readability, purchase intent, or interactions.",
    },
    {
        title: "Select The Right Audience",
        description:
            "You want to make sure you have confidence in your results. 150-200 responses should create statistical significance in your test, but choose the audience size that you are comfortable with.",
    },
    {
        title: "Segmentation and Test Time",
        description:
            "While most tests will be completed in about an hour, adding detailed segmentation to your test might increase the testing time. We recommend testing with a broad audience to gather a wide range of opinions and keep your test run time under an hour.",
    },
    {
        title: "Choose the Right Template",
        description:
            "The template you test with has a big impact on your results. Identify the template that works best for what you are testing. For example if you are testing web design choose the landing page template, if you are testing ads choose the ad testing template.",
    },
    {
        title: "Keep The Test Neutral",
        description:
            "Make sure your questions are unbiased. You're not looking to lead, direct, or influence users. You're looking to get honest and actionable feedback.",
    },
];

export const resultFilter = [
    {
        name: "All Time",
        value: "all_time",
    },
    {
        name: "Today",
        value: "today",
    },
    {
        name: "Since 3 days a go",
        value: "3_days_a_go",
    },
    {
        name: "This Week",
        value: "this_week",
    },
    {
        name: "This Month",
        value: "this_month",
    },
];

export const userRole = [
    {
        name: "Admin",
        value: "admin",
    },
    {
        name: "User",
        value: "user",
    },
];

export const userContactPreferences = [
    {
        title: "Send me emails about my account and tests",
        name: "send_me_emails",
    },
    {
        title: "Send me occasional newsletters and special offers",
        name: "send_me_occasional",
    },
    {
        title: "Send me tips on getting started",
        name: "send_me_tips",
    },
];

