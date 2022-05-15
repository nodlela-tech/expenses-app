const categories = [
    {
        id: 1,
        img: require('../../assets/images/call-center.png'),
        heading: 'Service',
        paragraph: 'Lorem Ipsum is simply dummy text',
        backgroundColor: '#F6AFB0',
    },
    {
        id: 2,
        img: require('../../assets/images/lightning.png'),
        heading: 'Electricity',
        paragraph: 'Lorem Ipsum is simply dummy text',
        backgroundColor: '#8ECC81',
    },
    {
        id: 3,
        img: require('../../assets/images/piggy-bank.png'),
        heading: 'Savings',
        paragraph: 'Lorem Ipsum is simply dummy text',
        backgroundColor: '#80CEEE',
    }
];

const transactions = [
    {
        id: 1,
        img: require('../../assets/images/mortarboard.png'),
        heading: 'Education',
        price: 'R 149 000',
        backgroundColor: '#F6AFB0',
    },
    {
        id: 2,
        img: require('../../assets/images/burger.png'),
        heading: 'Food',
        price: 'R 3 500',
        backgroundColor: '#8ECC81',
    },
    {
        id: 3,
        img: require('../../assets/images/taxi.png'),
        heading: 'Transport',
        price: 'R 2 750',
        backgroundColor: '#80CEEE',
    }
];

const transfer = [
    {
        id: 1,
        img: require('../../assets/images/south-africa.png'),
        heading: 'You send',
        price: 'R 149 000',
        isSending: true,
    },
    {
        id: 2,
        img: require('../../assets/images/united-states.png'),
        heading: 'They receive',
        price: '$ 9 197,53',
        isSending: false,
    }
];

const cards = [
    {
        id: 1,
        img: require('../../assets/images/maestro.png'),
        price: 'R 149 000',
        cardNum: '8757197138425741',
        backgroundColor: '#80CEEE',
    },
    {
        id: 2,
        img: require('../../assets/images/visa.png'),
        price: '$ 9 197,53',
        cardNum: '8757197138425741',
        backgroundColor: '#8ECC81',
    },
    {
        id: 3,
        img: require('../../assets/images/visa.png'),
        price: '$ 9 197,53',
        cardNum: '8757197138425741',
        backgroundColor: '#80CEEE',
    }
]

export {categories, transactions, transfer, cards}
