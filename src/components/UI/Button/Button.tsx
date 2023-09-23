
import React from 'react'
import styles from './Button.module.css'
import clsx from 'clsx'

interface IButton {
    children: React.ReactNode
    className?: string
}

const Button: React.FC<IButton> = ({ children, className }) => {
  const btnClickHandler = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    console.log('click btn')
  }

  return (
    <div className={clsx(
      styles.container,
      className === 'forward' ? styles.hide : ''
    )}>
      <button
        className={clsx(
          styles.btn,
          className === 'forward' ? styles.forward : styles.back,
        )}
        onClick={btnClickHandler}
      >
          { children }
      </button>
    </div>
  )
}

export default Button