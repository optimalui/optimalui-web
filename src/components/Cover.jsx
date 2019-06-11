import React ,{Component,cloneElement} from 'react';
import withStyles from 'react-jss';
import {coverStyle} from '../assets/jss'
import cx from 'classnames'

class Cover extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height:props.height,
            width:props.width,
        }
        this.coverRef = React.createRef()
    }
    componentDidMount(){
          const {offsetHeight,offsetWidth} = this.coverRef.current
          this.setState({
              width:offsetWidth,//getting 0
              height:offsetHeight //getting 0
          })

    }
    render() {
        const { classes, children, className: customClassName } = this.props
        const {width} = this.state
        const className = cx(classes.root,customClassName)
    

        return (
            <div ref={this.coverRef} className={className}>
                {
                    React.Children.map(children, (item, index) => cloneElement(item, {
                        key: `cover-item-${index}`,
                        ...item.props,
                        style: { width}
                    }))
                }
            </div>
        );
    }
}

const styledCover = withStyles(coverStyle)(Cover)

export {styledCover as Cover};