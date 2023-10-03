
import React from 'react'
import styles from './Button.module.css'
import clsx from 'clsx'

interface IButton {
    children: React.ReactNode
    className?: string
    disabled?: boolean
}

const Button: React.FC<IButton> = ({ children, className, disabled }) => {
  const btnClickHandler = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    console.log('click btn')
  }

  return (
    <div className={clsx(
      styles.container,
      className === 'forward' ? styles.hide : '',
      className === 'send' ? styles.send : '',
      className === 'send' ? styles.p0 : '',
    )}>
      <button
        className={clsx(
          styles.btn,
          className === 'forward' ? styles.forward : '',
          className === 'send' ? styles.send : '',
          className === 'back' ? styles.back : '',
          disabled === true ? styles.disabled : ''
        )}
        onClick={btnClickHandler}
        disabled={disabled}
      >
          { children }
      </button>
    </div>
  )
}

export default Button