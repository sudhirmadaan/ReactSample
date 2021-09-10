
import React, { useState } from 'react';

const Square = (props: ISquareProps) => {
    //const [value, setValue] = useState('');
    return (
        <button className="square" onClick={props.handleClick} >
          {props.value}
        </button>
      );
}

interface ISquareProps {
    handleClick(): void;
    value: string;
}

export default Square;