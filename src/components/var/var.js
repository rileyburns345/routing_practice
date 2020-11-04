import React from 'react'
import { Router } from '@reach/router';
import { Link, navigate } from '@reach/router';

const VarComponent = props => {
    const var1 = props.var

    const color1 = props.color1
    const color2 = props.color2

    const mystyle = {
        color: color1,
        backgroundColor: color2
      };

    console.log('var:', var1)
    let textClip = ''

    if (color1) {
        if (isNaN(var1) === true){
            textClip = <div style={mystyle}>The word is: {var1}</div>
        }
        else {
            textClip = <div style={mystyle}>The number is: {var1}</div>
        }
    }
    else {
        if (isNaN(var1) === true){
            textClip = <div>The word is: {var1}</div>
        }
        else {
            textClip = <div>The number is: {var1}</div>
        }
    }
    
        return (
          <div>
            {textClip}
          </div>
        );
    
        }


export default VarComponent