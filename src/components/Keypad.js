// Code Keypad Component Here
import react, {Component} from 'react';

export default class Keypad extends Component{
  const Input = () => {
    return (<input type="password" />);
  }
  
  handleKey = (e) => {
    const k = e.
  }
  
  render(){
    return (
      <Input onKeyUp="handleKey"/>)
  }
}