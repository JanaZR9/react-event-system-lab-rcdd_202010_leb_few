// Code EyesOnMe Component Here
import react, {Component} from 'react';
export default class EyesOnMe extends Component{
  
 handleFocus = (e) => {
    console.log('Good!');
  }
  render () {
    return (
      <button onFocus="" onBlur=""> </button>
      )
  }
}