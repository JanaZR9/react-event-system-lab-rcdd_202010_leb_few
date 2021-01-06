// Code Keypad Component Here
import react, {Component} from 'react';

export default class Keypad extends Component{
  const Input = () => {
    return (<input type="password" />);
  }
  
  render(){
    return (
      <Input onK/>)
  }
}