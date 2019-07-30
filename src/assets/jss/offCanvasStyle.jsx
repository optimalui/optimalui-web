import {slideOutLeft} from 'react-animations'


export const offCanvasStyle = {
    root:{
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        zIndex: 1000,
        color:'#666',
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
        transition: 'left 0.3s ease-out',
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
    },
    closeBtn:{
        color:'#999 !important',
        position: 'absolute',
        zIndex: 1000,
        top: '20px',
        right: '20px',
        padding: '5px'
    },
    overlay:{
        position: 'fixed',
        width: '100%', /* Full width (cover the whole page) */
        height: '100%', /* Full height (cover the whole page) */
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1300, /* Specify a stack order in case you're using a different order for other elements */
    },
    overlayBackground:{
        backgroundColor: 'rgba(0,0,0,0.1)', /* Black background with opacity */
    }
}