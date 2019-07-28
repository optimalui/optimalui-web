import {slideOutLeft} from 'react-animations'

console.log(slideOutLeft)

export const offCanvasStyle = {
    root:{
        display: 'none',
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        zIndex: 1000,
        color:'#666'
    },
    canvasBar: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: '-270px',
        width: '270px', 
        boxSizing: 'border-box',
        padding: '20px 20px',
        background: '#fff',
        overflowY: 'auto',
        '-webkit-overflow-scrolling': 'touch',
        '@media (min-width: 960px)': {
            left: '-350px',
            width: '350px',
            padding: '40px 40px',
        }
    },
    openCanvas:{
        display:'block',
        left:0,
        // width:'270px'
    },
    closeBtn:{
        color:'#999 !important',
        position: 'absolute',
        zIndex: 1000,
        top: '20px',
        right: '20px',
        padding: '5px'
    },
    animation: {
        ...slideOutLeft, 
        animationDuration: "3s"
    }
}