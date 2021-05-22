import React from 'react'

interface Props {
    btnText: string;
    onClickHandler: Function;
}

function Button({btnText, onClickHandler}:Props) {
    return (
        <button onClick={() => onClickHandler()}>
            {btnText}
        </button>
    )
}

export default Button
