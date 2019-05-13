import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button } from './Button';
import {styles} from '../../assets/jss/dropDownButtonStyle.jsx'
import { StyleSheet,css } from 'aphrodite/no-important';
import {slideDown} from 'react-animations'

const animationStyle = StyleSheet.create({
  slideDown: {
    animationName: slideDown,
    animationDuration: '1s'
  }
})

class DropDownButton extends Component {

  static propTypes = {
    className: PropTypes.string,
    items: PropTypes.array.isRequired,
    listClassName: PropTypes.string,
    text: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    buttonProps: PropTypes.object,
    mode:PropTypes.string,
    animation:PropTypes.string,
    duration:PropTypes.string,
  }

  static defaultProps = {
    className: '',
    text: '',
    listClassName: '',
    buttonProps: {},
    mode:'hover',
    animation:'',
    duration:'1s'
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
  }

  componentDidMount(){
    document.addEventListener("mousedown",this.outSideEvent)
    document.addEventListener("mousemove",this.handleMouseLeave)


        this.setState({
          // animationStyle: StyleSheet.create({
          //   animation: {
          //     animationName: slideDown,
          //     animationDuration: this.state.duration
          //   }
          // })
        });



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


  outSideEvent = (e) => {
    if(this.dropDownRef && !this.dropDownRef.current.contains(e.target)){
      this.setState({ isOpen: false })
    }
  }

  render() {
    const { handleMouseEnter,handleMouseLeave, handleClick } = this
    const {
      className: customClassName,
      listClassName: customListClassName,
      items,
      text,
      buttonProps,
      mode,
      animation,
      duration,
      ...other
    } = this.props
    const { isOpen } = this.state

    const eventHandlers = {
      onClick: handleClick,
    }
    if (mode === 'hover') {
      eventHandlers.onMouseEnter = handleMouseEnter
      eventHandlers.onMouseLeave = handleMouseLeave
    }

    if (!Array.isArray(items) || !items.length) {
      throw new Error('Items must be passed as array and must be not empty.')
    }

    const className = css(styles.inline, customClassName)



    const listClassName = css(styles.dropDown, customListClassName,
      animationStyle.slideInDown,
      isOpen & !buttonProps["disabled"] ? styles.dropDownOpen:'')

    return (
      <div className={className} {...other} ref={this.dropDownRef}>
        <Button {...eventHandlers} {...buttonProps}>{text}</Button>
        <div className={listClassName}>
          <ul className={css(styles.dropDownNav)}>
            {items.map((el, index) =>
              <li key={index}><a href="#" className={css(styles.dropDownNavLink)}>{el}</a></li>
            )}
          </ul>
        </div>
      </div>
    )
  }
}
const drp = DropDownButton
export {drp as DropDownButton}