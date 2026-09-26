import React from 'react'

const Btn = React.memo(({type='button',className,text='',onClick,disabled=false}) => {
  return (
    <button
    type={type} 
    className={`${className} `}
    onClick={onClick}
    disabled={disabled}>
        {text}
    </button>
  )
})

export default Btn