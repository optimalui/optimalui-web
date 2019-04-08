

export const menuStyle = {
    root:{
        minHeight: '80px',
        background:'#f8f8f8',
        display:'flex',
        alignItems:'center',
        position:'relative',
        '&:before,&:after':{
            display:'none !important'
        }
    },
    leftSide:{
        marginLeft: '-15px',
        marginRight: '-15px'
    },
    rightSide:{
        marginRight: '-15px'
    },
    center: {
        '&:only-child': {
            marginLeft: 'auto',
            marginRight: 'auto',
            position: 'relative'
        },
        '&:not(:only-child)':{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: '990'
        }
    },
    menuItemText: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxSizing: 'border-box',
        padding: '0 15px',
        fontSize: '0.875rem',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        textDecoration: 'none',
        color: '#999',
        transition: '0.1s ease-in-out',
        transitionProperty: 'color, background-color',
        cursor:'pointer',
        '&:hover,&:focus':{
            color: '#666',
            outline: 'none'
        }
    },
    dropdownItem: {
        position: 'absolute',
        zIndex: '1020',
        boxSizing: 'border-box',
        width: '200px',
        padding: '25px',
        background: '#fff',
        color: '#666',
        boxShadow: '0 5px 12px rgba(0, 0, 0, 0.15)',
        // marginTop:'40px'
    },

}