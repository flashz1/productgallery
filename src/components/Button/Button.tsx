import { ButtonHTMLAttributes, PropsWithChildren } from 'react'
import cn from 'classnames'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string
  onClick?: () => void
}

const Button = ({
  className,
  type,
  label,
  disabled = false,
  children,
  onClick,
}: PropsWithChildren<IButtonProps>) => {
  return (
    <button
      type={type}
      className={cn(
        'w-full flex justify-center align-middle py-[10px] px-[25px] rounded shadow-sm font-medium focus:outline-none whitespace-nowrap disabled:opacity-50 text-white bg-blue-600 hover:bg-blue-700 border-none',
        className,
        {
          ['disabled']: disabled,
        }
      )}
      disabled={disabled}
      {...(onClick && { onClick })}
    >
      {label}
      {children}
    </button>
  )
}

export default Button
