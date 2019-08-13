
export const offCanvasStyle = {
    canvas:{
        position: 'fixed',  
        top: 0, 
        bottom: 0, 
        left:0, 
        zIndex: 1000, 
        color:'#666', 
        width: '270px',
        boxSizing: 'border-box', 
        overflowY: 'auto', 
        '@media (min-width: 960px)': {
            width: '350px',
        }
    },
    canvasContent:{
        position: 'absolute',
        visibility:'visible',
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
        left:0
    },

    /**reveal */
    beforePushBodyStyle:{
        position :'relative',
        left :0,
        transition :'left .3s ease-out',
        '-webkit-transition': 'left .3s ease-out',
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
    beforePushBodyStyleRight:{
        position :'relative',
        right :0,
        transition :'right .3s',
        boxSizing :'border-box',
        width :'100%',
    },
    pushBodyStyleRight:{
        right: '270px',
        '@media (min-width: 960px)': { 
            right: '350px'
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
        '-webkit-transition': 'width .3s ease-out', 
        transition: 'width .3s ease-out', 
        zIndex:-1
    },
    revealOpen:{
        zIndex:-1,
        width: '270px',
        '@media (min-width: 960px)': { 
            width: '350px'
        }
    },

    /**push */
    push:{
        background: '#fff',
        left:  '-270px',
        '@media (min-width: 960px)': {
            left:  '-350px',
        },
        transition: 'left .3s ease-out',
        '-webkit-transition': 'left .3s ease-out',
        zIndex:-1
    },
    pushOpen:{
        left: 0,
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
        visibility:'visible',
        position: 'fixed',  
        top: 0, 
        bottom: 0, 
        right:0, 
        zIndex: 1000, 
        color:'#666', 
        width: '270px',
        boxSizing: 'border-box', 
        overflowY: 'auto', 
        '@media (min-width: 960px)': {
            width: '350px',
        }
    },

    canvasContentRight:{
        visibility:'visible',
        position: 'absolute',
        width: '270px',
        top: 0,
        bottom: 0,
        right:0,
        padding: '20px 20px',
        '-webkit-overflow-scrolling': 'touch',
        '@media (min-width: 960px)': {
            padding: '80px 40px !important',
            width: '350px',
        },
        boxSizing:'border-box',
        transition:'visibility 0.3s'
    },

    /** right */
    slideRight: {
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

    revealRight:{
        background:'#fff',
        top: 0,
        bottom: 0,
        right: 0,
        width: 0, 
        height:'100%',
        overflow: 'hidden',
        '-webkit-transition': 'width 0.3s', 
        transition: 'width 0.3s', 
    },
    revealRightOpen:{
        width: '270px',
        '@media (min-width: 960px)': { 
            width: '350px'
        }
    },
    pushRight:{
        visibility:'visible',
        background:'#fff',
        top: 0,
        bottom: 0,
        width:0,
        width:'270px',
        right: '-270px',
        '@media (min-width: 960px)': { 
            right: '-350px',
            width:'350px',
        },
        overflow: 'hidden',
        '-webkit-transition': 'right .3s',
        transition: 'right .3s',
    },
    pushRightOpen:{
        right: 0
    },

}
