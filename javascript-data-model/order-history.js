var orderHistory = [
  {
    orderPlaced: 'August 4, 2020',
    items: [
      {
        type: 'book',
        name: 'JavaScript for impatient programmers',
        author: 'Rauschmayer, Dr. Axel',
        cost: '$31.55'
      }
    ],
    total: '$34.00',
    shipTo: 'JS Masher',
    orderNumber: '114-3941689-8772232',
    deliveryDate: 'Delivered Aug 8, 2020',
    message: '',
    return: 'Return window closed on Sep 7, 2020',
    orderDetails: '',
    invoice: ''

  },

  {
    orderPlaced: 'July 19, 2020',
    items: [
      {
        type: 'book',
        name: 'The Timeless Way of Building',
        author: 'Alexander, Christopher',
        cost: '$41.33'
      }
    ],
    total: '$44.53',
    shipTo: 'JS Masher',
    orderNumber: '113-9984268-1280257',
    deliveryDate: 'Delivered Jul 20, 2020',
    message: 'Your package was delivered. It was handed directly to a resident.',
    return: 'Return window closed on Aug 19, 2020',
    orderDetails: '',
    invoice: ''

  },

  {
    orderPlaced: 'July 4, 2020',
    items: [
      {
        type: 'adapter',
        name: 'Gamecube Controller Adapter. Super Smash Bros Switch Gamecube Adapter for WII U, PC. Support Turbo and Vibration Features. No Driver and No Lag-Gamecube Adapter',
        author: '',
        cost: '$15.98'
      }
    ],
    total: '$17.22',
    shipTo: 'JS Masher',
    orderNumber: '114-2875557-9059409',
    deliveryDate: 'Delivered Jul 7, 2020',
    message: 'Your package was delivered. It was handed directly to a resident.',
    return: 'Return window closed on Aug 5, 2020',
    orderDetails: '',
    invoice: ''

  },

  {
    orderPlaced: 'July 3, 2020',
    items: [
      {
        type: 'controller',
        name: 'GameCube Controller - Super Smash Bros. Edition (Nintendo Switch)',
        author: '',
        cost: '$94.95'
      },

      {
        type: 'book',
        name: 'The Art of Sql',
        author: 'Faroult, Stephane',
        cost: '$33.99'
      }
    ],
    total: '$138.93',
    shipTo: 'JS Masher',
    orderNumber: '113-2883177-2648248',
    deliveryDate: 'Delivered Jul 5, 2020',
    message: '',
    return: 'Return window closed on Aug 4, 2020',
    orderDetails: '',
    invoice: ''

  }
];

console.log('order history:', orderHistory[3].items);
