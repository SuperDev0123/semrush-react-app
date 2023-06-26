export const crm = {
  siteAudiences: [
    { label: 'Male', value: 89, color: 'orange' },
    { label: 'Female', value: 56, color: 'blue' },
    { label: 'Others', value: 12, color: 'green' },
  ],
  siteVisits: [
    { name: '', visits: 0, queries: 0 },
    { name: 'Jan', visits: 4000, queries: 3000 },
    { name: 'Feb', visits: 2000, queries: 1000 },
    { name: 'Mar', visits: 4400, queries: 4000 },
    { name: 'Apr', visits: 9000, queries: 3800 },
    { name: 'May', visits: 3500, queries: 2000 },
    { name: 'Jun', visits: 1750, queries: 1000 },
    { name: 'Jul', visits: 100, queries: 100 },
  ],
  tickets: [
    {
      id: 1,
      user: {
        id: 1,
        name: 'Joy parish',
        profilePic: 'https://via.placeholder.com/150x150',
      },
      title: 'Need a quick support on setting',
      createdDate: '1 day ago ',
      priority: { id: 1, label: 'High', slug: 'high', color: 'red' },
    },
    {
      id: 2,
      user: {
        id: 1,
        name: 'John Smith',
        profilePic: 'https://via.placeholder.com/150x150',
      },
      title: 'How can replace stepper controle with default',
      createdDate: '5 day ago ',
      priority: { id: 1, label: 'Low', slug: 'high', color: 'green' },
    },
    {
      id: 3,
      user: {
        id: 1,
        name: 'Mukesh k',
        profilePic: 'https://via.placeholder.com/150x150',
      },
      title: 'Pre-sale query about the product',
      createdDate: '2 day ago ',
      priority: { id: 1, label: 'Low', slug: 'high', color: 'green' },
    },
    {
      id: 4,
      user: {
        id: 1,
        name: 'sonu siram',
        profilePic: 'https://via.placeholder.com/150x150',
      },
      title: 'Regarding customization service',
      createdDate: '1 day ago ',
      priority: { id: 1, label: 'Low', slug: 'high', color: 'green' },
    },
    {
      id: 5,
      user: {
        id: 1,
        name: 'Dennis Roy',
        profilePic: 'https://via.placeholder.com/150x150',
      },
      title: 'How can replace stepper controle with default',
      createdDate: '1 day ago ',
      priority: { id: 1, label: 'High', slug: 'high', color: 'red' },
    },
  ],
  tasks: [
    {
      id: 1,
      completed: true,
      description: 'Make the homepage dynamic',
      tags: [1, 2],
      user: {
        id: 100,
        name: 'Atul Midha',
        profilePic: 'https://via.placeholder.com/150x150',
      },
      dueDate: 'July 07, 2020',
    },
    {
      id: 2,
      completed: false,
      description: 'Add the file formats in the data',
      tags: [2, 3],
      user: {
        id: 101,
        name: 'Murli Swami',
        profilePic: 'https://via.placeholder.com/150x150',
      },
      dueDate: 'July 10, 2020',
    },
    {
      id: 3,
      completed: false,
      description: 'Add new page in the website.',
      tags: [1, 2, 4],
      user: {
        id: 102,
        name: 'Tanmay Goswami',
        profilePic: 'https://via.placeholder.com/150x150',
      },
      dueDate: 'July 10, 2020',
    },
    {
      id: 4,
      completed: true,
      description: 'Assign the task to John Doe',
      tags: [3, 4],
      user: {
        id: 100,
        name: 'Atul Midha',
        profilePic: 'https://via.placeholder.com/150x150',
      },
      dueDate: 'July 10, 2020',
    },
    {
      id: 5,
      completed: false,
      description: 'Re-design the components',
      tags: [4],
      user: {
        id: 100,
        name: 'Atul Midha',
        profilePic: 'https://via.placeholder.com/150x150',
      },
      dueDate: 'July 06, 2020',
    },
    {
      id: 6,
      completed: true,
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      tags: [4, 3],
      user: {
        id: 101,
        name: 'Murli Swami',
        profilePic: 'https://via.placeholder.com/150x150',
      },
      dueDate: 'July 10, 2020',
    },
    {
      id: 7,
      completed: true,
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      tags: [1, 2],
      user: {
        id: 102,
        name: 'Tanmay Goswami',
        profilePic: 'https://via.placeholder.com/150x150',
      },
      dueDate: 'July 10, 2020',
    },
    {
      id: 8,
      completed: false,
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      tags: [2, 3],
      user: {
        id: 101,
        name: 'Murli Swami',
        profilePic: 'https://via.placeholder.com/150x150',
      },
      dueDate: 'July 10, 2020',
    },
    {
      id: 9,
      completed: false,
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      tags: [4],
      user: {
        id: 100,
        name: 'Atul Midha',
        profilePic: 'https://via.placeholder.com/150x150',
      },
      dueDate: 'July 06, 2020',
    },
    {
      id: 10,
      completed: true,
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      tags: [3, 4],
      user: {
        id: 100,
        name: 'Atul Midha',
        profilePic: 'https://via.placeholder.com/150x150',
      },
      dueDate: 'July 05, 2020',
    },
    {
      id: 11,
      completed: false,
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      tags: [2],
      user: {
        id: 100,
        name: 'Atul Midha',
        profilePic: 'https://via.placeholder.com/150x150',
      },
      dueDate: 'July 04, 2020',
    },
  ],
  taskTags: [
    {
      id: 1,
      name: 'HTML',
      color: 'danger',
    },
    {
      id: 2,
      name: 'React',
      color: 'success',
    },
    {
      id: 3,
      name: 'JavaScript',
      color: 'info',
    },
    {
      id: 4,
      name: 'CSS',
      color: 'warning',
    },
  ],
  revenueList: [
    { label: 'Male', value: 89, color: 'orange' },
    { label: 'Female', value: 56, color: 'blue' },
    { label: 'Transgender', value: 65, color: 'cyan' },
    { label: 'Others', value: 12, color: 'green' },
  ],
  ticketsStatus: [
    { name: 'In progress', value: 40, color: '#45C3E5' },
    { name: 'On Hold', value: 8, color: '#E0E0E0' },
    { name: 'Closed', value: 15, color: '#E16618' },
    { name: 'Open', value: 58, color: '#57BE4A' },
  ],
  revenueHistory: [
    { month: 'Jan', profit: 0, revenue: 400 },
    { month: 'Feb', profit: 150, revenue: 350 },
    { month: 'Mar', profit: 100, revenue: 0 },
    { month: 'Apr', profit: 300, revenue: 50 },
    { month: 'May', profit: 100, revenue: 300 },
    { month: 'Jun', profit: 100, revenue: 450 },
    { month: 'Jul', profit: 150, revenue: 450 },
    { month: 'Aug', profit: 150, revenue: 20 },
    { month: 'Sep', profit: 200, revenue: 50 },
    { month: 'Oct', profit: 40, revenue: 400 },
    { month: 'Nov', profit: 60, revenue: 50 },
    { month: 'Dec', profit: 0, revenue: 400 },
  ],
}
