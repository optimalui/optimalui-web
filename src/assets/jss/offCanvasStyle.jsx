
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
        visibility: 'hidden', 
        top: 0, 
        bottom: 0, 
        left:0, 
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
            left:0, 
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
    canvasContent:{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left:0,
        padding: '20px 20px',
        '-webkit-overflow-scrolling': 'touch',
        '@media (min-width: 960px)': {
            padding: '80px 40px !important',
        },
        boxSizing:'border-box',
    },

    /** slide */
    slide:{
        background: '#fff',
        '-webkit-transform': 'translate3d(-100%, 0, 0)',
        transform: 'translate3d(-100%, 0, 0)',
    },
    slideOpen:{
        visibility: 'visible',
        background: '#fff',
        '-webkit-transform': 'translate3d(0, 0, 0)',
        transform: 'translate3d(0, 0, 0)',
    },

    /**reveal */
    reveal:{
        zIndex:-1,
    },
    revealOpen:{
        visibility: 'visible',
        overflow: 'hidden',
        background:'#fff',
        width: '270px',
        '@media (min-width: 960px)': { 
            width: '350px'
        }
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
        background: '#fff',
        '-webkit-transform': 'translate3d(100%, 0, 0)',
        transform: 'translate3d(100%, 0, 0)',
    },
    slideRightOpen:{
        visibility: 'visible',
        background: '#fff',
        '-webkit-transform': 'translate3d(0, 0, 0)',
        transform: 'translate3d(0, 0, 0)',
    },
}
