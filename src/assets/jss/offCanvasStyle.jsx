import { StyleSheet } from 'aphrodite/no-important';

// export const offCanvasStyle = {
//     leftCanvasRoot:{
//         // visibility: 'hidden',
//         position: 'fixed',
//         top: 0,
//         bottom: 0,
//         left:0,
//         zIndex: 1000,
//         color:'#666',
//     },
//     rightCanvasRoot:{
//         // visibility: 'hidden',
//         position: 'fixed',
//         top: 0,
//         bottom: 0,
//         right:0,
//         zIndex: 1000,
//         color:'#666',
//     },
//     canvasBar: {
//         position: 'absolute',
//         top: 0,
//         bottom: 0,
//         left: '-270px',
//         width: '270px', 
//         boxSizing: 'border-box',
//         padding: '20px 20px',
//         background: '#fff',
//         overflowY: 'auto',
//         // transition: 'left 0.3s ease-out',
//         '-webkit-overflow-scrolling': 'touch',
//         '@media (min-width: 960px)': {
//             left: '-350px',
//             width: '350px',
//             padding: '40px 40px',
//         }
//     },
//     canvasBarRight: {
//         position: 'absolute',
//         top: 0,
//         bottom: 0,
//         right: '-270px',
//         width: '270px', 
//         boxSizing: 'border-box',
//         padding: '20px 20px',
//         background: '#fff',
//         overflowY: 'auto',
//         '-webkit-overflow-scrolling': 'touch',
//         '@media (min-width: 960px)': {
//             right: '-350px',
//             width: '350px',
//             padding: '40px 40px',
//         }
//     },
//     openCanvas:{
//         // visibility: 'visible',
//         display:'block',
//         left:0,
//     },
//     openCanvasRight:{
//         display:'block',
//         left:'auto',
//         right:0
//     },
//     slideMode:{
//         transition: 'right 0.3s ease-out',
//     },
//     closeBtn:{
//         color:'#999 !important',
//         position: 'absolute',
//         zIndex: 1000,
//         top: '20px',
//         right: '20px',
//         padding: '5px'
//     },
//     overlay:{
//         position: 'fixed',
//         width: '100%', /* Full width (cover the whole page) */
//         height: '100%', /* Full height (cover the whole page) */
//         top: 0,
//         left: 0,
//         right: 0,
//         bottom: 0,
//         zIndex: 1300, /* Specify a stack order in case you're using a different order for other elements */
//     },
//     overlayBackground:{
//         backgroundColor: 'rgba(0,0,0,0.1)', /* Black background with opacity */
//     }
// }

export const offCanvasStyle = {
    canvas:{
        position: 'fixed',  
        visibility:'hidden',
        top: 0, 
        bottom: 0, 
        left:0, 
        zIndex: 1000, 
        color:'#666', 
        width: '270px',
        boxSizing: 'border-box', 
        overflowY: 'auto', 
        '&::after':{
            position: 'fixed',  
            top: 0, 
            bottom: 0, 
            left:0, 
            width: '100%',
            height: '100%',
        },
        '@media (min-width: 960px)': {
            width: '350px',
        }
    },
    canvasContent:{
        visibility: 'hidden',
        position: 'absolute',
        width: '270px',
        top: 0,
        bottom: 0,
        left:0,
        padding: '20px 20px',
        '-webkit-overflow-scrolling': 'touch',
        '@media (min-width: 960px)': {
            padding: '80px 40px !important',
            width: '350px',
        },
        boxSizing:'border-box',
        transition:'visibility 0.3s'
    },

    showCanvas:{
        visibility:'visible'
    },
    hideCanvas:{
        display:'none'
    },

    /** slide */
    slide: {
        background: '#fff',
        left:  '-270px',
        '@media (min-width: 960px)': {
            left:  '-350px',
        },
        transition: 'left .3s ease-out',
        '-webkit-transition': 'left .3s ease-out',
    },
    slideOpen:{
        visibility:'visible',
        left:0
    },

    /**reveal */
    beforePushBodyStyle:{
        position :'relative',
        left :0,
        transition :'left .3s',
        boxSizing :'border-box',
        width :'100%',
    },
    pushBodyStyle:{
        left: '270px',
        '@media (min-width: 960px)': { 
            left: '350px'
        },
        overflowY: 'scroll',
        touchAction: 'pan-y pinch-zoom'
    },
    reveal:{
        background:'#fff',
        top: 0,
        bottom: 0,
        left: 0,
        width: 0,
        height:'100%',
        overflow: 'hidden',
        '-webkit-transition': 'width 0.3s', 
        transition: 'width 0.3s', 
    },
    revealOpen:{
        visibility:'visible',
        width: '270px',
        '@media (min-width: 960px)': { 
            width: '350px'
        }
    },

    /**push */
    push:{
        background:'#fff',
        top: 0,
        bottom: 0,
        width:0,
        width:'270px',
        left: '-270px',
        '@media (min-width: 960px)': { 
            left: '-350px',
            width:'350px',
        },
        overflow: 'hidden',
        '-webkit-transition': 'left .3s',
        transition: 'left .3s',
    },
    pushOpen:{
        visibility:'visible',
        left: 0
    },
    overlay: {
        position: 'fixed',
        width: '100%', /* Full width (cover the whole page) */
        height: '100%', /* Full height (cover the whole page) */
        top: 0, 
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1000, /* Specify a stack order in case you're using a different order for other elements */
    },
    overlayBackground: {
        backgroundColor: 'rgba(0,0,0,0.1)', /* Black background with opacity */
    },

    /**none mode */
    none: {
        background: '#fff',
        left: '-270px',
        '@media (min-width: 960px)': {
            left: '-350px',
        },
    },
    noneOpen: {
        visibility: 'visible',
        left: 0
    },

    /*** Right Canvas */
    canvasRight:{
        position: 'fixed',  
        visibility: 'hidden', 
        top: 0, 
        bottom: 0, 
        right:0, 
        left:'auto',
        zIndex: 1000, 
        color:'#666', 
        width: '270px', 
        boxSizing: 'border-box', 
        overflowY: 'auto', 
        '-webkit-transition': 'all 0.5s', 
        transition: 'all 0.5s', 
        '&::after':{
            position: 'fixed',  
            visibility: 'hidden', 
            top: 0, 
            bottom: 0, 
            right:0, 
            left:'auto',
            width: '100%',
            height: '100%',
            content: '',
            opacity: 1,
            '-webkit-transition': 'opacity 0.5s',
            transition: 'opacity 0.5s'
        },
        '@media (min-width: 960px)': {
            width: '350px'
        }
    },

    /** slide right */
    slideRight:{
        visibility:'visible',
        background: '#fff',
        right:  '-270px',
        '@media (min-width: 960px)': {
            right:  '-350px',
        },
        transition: 'right .3s ease-out',
        '-webkit-transition': 'right .3s ease-out',
    },
    slideRightOpen:{
        right:0
    },
}
