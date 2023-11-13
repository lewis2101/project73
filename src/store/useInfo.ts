export const useInfo = () => {
    const itemsSlider = [
        {
            id: 1,
            src: '/src/assets/one-item.png',
            title: 'Севооборот сахарной свеклы',
            width: '10rem',
            textHalf: true
        },
        {
            id: 2,
            src: '/src/assets/one-item.png',
            title: 'Севооборот сахарной свеклы',
            width: '10rem',
            textHalf: true
        },
        {
            id: 3,
            src: '/src/assets/one-item.png',
            title: 'Севооборот сахарной свеклы',
            width: '10rem',
            textHalf: true
        },
        {
            id: 4,
            src: '/src/assets/one-item.png',
            title: 'Севооборот сахарной свеклы',
            width: '10rem',
            textHalf: true
        },
    ]
    const itemsInfo = [
        {
            title: 'Полезное',
            image: '/src/assets/miniBook.svg',
            background: 'linear-gradient(140deg, #B2C2F5 6.74%, #DDBFF9 78.81%)'
        },
        {
            title: 'Нормативные акты',
            image: '/src/assets/document.svg',
            background: 'linear-gradient(141deg, #C4D170 4.19%, #86BFA7 89.77%)'
        }
    ]
    const itemsServices = [
        {
            title: 'Аренда техники',
            image: '/src/assets/serviceTrac.svg',
            background: 'linear-gradient(140deg, #A1C4FD 6.74%, #8FD3F4 78.81%)'
        },
        {
            title: 'Обмен техники',
            image: '/src/assets/serviceTrac.svg',
            background: 'linear-gradient(140deg, #FB8996 6.74%, #FFC062 78.81%)'
        }
    ]
    return {
        itemsInfo,
        itemsServices,
        itemsSlider
    }
}