import { ChangeEvent } from 'react'
import cn from 'classnames'

interface IInputProps {
  className?: string
  name: string
  label?: string
  value: string
  onChange: (type: ChangeEvent<HTMLInputElement>) => void
  errors: string | null
  [key: string]: any
}

const Input = ({
  className,
  name,
  type,
  label,
  value,
  onChange,
  errors,
  ...rest
}: IInputProps) => {
  return (
    <div className={className}>
      {label && (
        <label htmlFor={`${name}-input`} className="form-label">
          {label}
        </label>
      )}
      <div
        className={cn({
          'mt-1': !!label,
        })}
      >
        <input
          type={type}
          name={name}
          id={`${name}-input`}
          className="form-element"
          value={value}
          onChange={onChange}
          {...rest}
        />
        <div className="text-red-600 font-normal text-sm">{errors}</div>
      </div>
    </div>
  )
}

export default Input
