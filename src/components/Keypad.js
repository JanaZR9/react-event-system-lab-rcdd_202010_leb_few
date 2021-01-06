// Code Keypad Component Here
import react, {Component} from 'react';

export default class Keypad extends Component{
  const Input = () => {
    return (<input type="password" />);
  }
  
  handleKey = (e) => {
    const k = e.KeyCode;
    console.log('Entering password...')
  }
  
  render(){
    return (
      <Input onKeyUp="handleKey"/>)
  }
}