

export const menuStyle = {
    root:{
        display: 'flex',
        position:'relative',
        minHeight: '80px',
        background:'#f8f8f8',
        
        '&:before,&:after':{
            display:'none !important'
        }
    },
    navStyle:{
        display: 'flex',
        margin: 0,
        padding: '0 15px',
        listStyle: 'none'
    },
    dropdownNavWrapperStyle:{
        position: 'absolute',
        zIndex: '1020',
        boxSizing: 'border-box',
        width: '200px',
        padding: '25px',
        marginTop: '40px',
        background: '#fff',
        color: '#666',
        boxShadow: '0 5px 12px rgba(0, 0, 0, 0.15)',
    },
    showMenuItem:{
        display:'block'
    },
    hideMenuItem:{
        display:'none'
    },
    dropdownNavStyle:{
        margin: 0,
        padding: 0,
        listStyle: 'none',
        fontSize: '14px',
        textTransform:'none !important'
    },
    leftSide:{
        marginLeft: '-15px',
        marginRight: '-15px',
        display:'flex',
        alignItems:'center',
    },
    rightSide:{
        marginRight: '-15px',
        display:'flex',
        alignItems:'center',
    },
    center: {
        display:'flex',
        alignItems:'center',
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
    parentItemText:{
        display: 'block',
        padding: '0 15px',
        fontSize: '0.875rem',
        textDecoration: 'none',
        textTransform:'uppercase',
        color: '#999',
        cursor:'pointer',
        '&:hover,&:focus':{
            color: '#666',
            outline: 'none'
        }
    },
    menuItemText: {
        display: 'block',
        padding: '5px 0',
        fontSize: '0.875rem',
        textDecoration: 'none',
        color: '#999',
        cursor:'pointer',
        '&:hover,&:focus':{
            color: '#666',
            outline: 'none'
        }
    },

}