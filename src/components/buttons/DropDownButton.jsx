import React, { Component,cloneElement } from 'react'
import PropTypes from 'prop-types'
import { Button,DropDownButtonItem } from '../buttons';
import {getDropDownStyle,dropDownLinkStyle} from '../../assets/jss/dropDownButtonStyle.jsx'
import { css } from 'aphrodite/no-important';

class DropDownButton extends Component {

  static propTypes = {
    className: PropTypes.string,
    items: PropTypes.array,
    listClassName: PropTypes.string,
    text: PropTypes.string,
    disabled: PropTypes.bool,
    buttonProps: PropTypes.object,
    mode:PropTypes.string,
    animation:PropTypes.string,
    duration:PropTypes.string,
    textField:PropTypes.string,
    onItemClick:PropTypes.func
  }

  static defaultProps = {
    className: '',
    text: '',
    listClassName: '',
    buttonProps: {},
    mode:'hover',
    animation:'',
    duration:'1s',
    textField:'',
    onItemClick:null,
    items:[]
  }

  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      animationStyle:{}
    }
    this.dropDownRef = React.createRef();
    this.handleClick = this.handleClick.bind(this)
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
    this.handleItemClick = this.handleItemClick.bind(this)
  }

  componentDidMount(){
    document.addEventListener("mousedown",this.outSideEvent)
    document.addEventListener("mousemove",this.handleMouseLeave)
  }

  componentWillUnmount(){
    document.removeEventListener("mousedown",this.outSideEvent)
    document.removeEventListener("mousemove",this.handleMouseLeave)
  }

  handleClick(){

    if (this.props.mode === 'click') {
      this.setState({ isOpen: !this.state.isOpen })
    }

    if (this.props.mode === 'hover') {
      this.setState({ isOpen: false })
    }

  }

  handleMouseEnter(){
    if (this.props.mode === 'hover') {
      this.setState({ isOpen: true })
    }
  }

  handleMouseLeave(e){
    if(this.props.mode==="hover" && !this.dropDownRef.current.contains(e.target)){
      this.setState({ isOpen: false })
    }
  }

  handleItemClick(e){
    this.setState({ isOpen: false })
    this.props.onItemClick(e)
  }


  outSideEvent = (e) => {
    if(this.dropDownRef && !this.dropDownRef.current.contains(e.target)){
      this.setState({ isOpen: false })
    }
  }

  render() {
    const { handleMouseEnter,handleMouseLeave, handleClick,handleItemClick} = this
    const {
      className: customClassName,
      listClassName: customListClassName,
      items,
      text,
      buttonProps,
      mode,
      animation,
      duration,
      textField,
      children,
      ...other
    } = this.props
    const styles = getDropDownStyle(animation,duration);

    const { isOpen } = this.state

    const eventHandlers = {
      onClick: handleClick,
      onItemClick:handleItemClick
    }
    if (mode === 'hover') {
      eventHandlers.onMouseEnter = handleMouseEnter
      eventHandlers.onMouseLeave = handleMouseLeave
    }

    const className = css(styles.inline, customClassName)

    const listClassName = css(styles.dropDown, customListClassName,
      styles.animation,
      isOpen & !buttonProps["disabled"] ? styles.dropDownOpen:'')

      const itemEventHandlers = {
        onClick:handleItemClick
      }

      // construct item Element
      const cloneItem = (item) => cloneElement(item, {
        ...item.props,
        ...itemEventHandlers,
        className: css(item.props.className),
      })

    const renderItems = items ? items.map((item, index) => {
      if (typeof (item) === 'object') {
        const {
          text,
          ...other
        } = item
       return <DropDownButtonItem
          key={`item-${index}`}
          text={textField ? item[textField] : text}
          {...other}
          {...itemEventHandlers}
           />
      } else {
       return <DropDownButtonItem key={`item-${index}`} text={item} {...itemEventHandlers}/>
      }
    }) : React.Children.map(children, cloneItem)
    


    return (
      <div className={className} {...other} ref={this.dropDownRef}>
        <Button {...eventHandlers} {...buttonProps}>{text}</Button>
        <div className={listClassName}>
          <ul className={css(styles.dropDownNav)}>
            {renderItems}
          </ul>
        </div>
      </div>
    )
  }
}
const drp = DropDownButton
export {drp as DropDownButton}