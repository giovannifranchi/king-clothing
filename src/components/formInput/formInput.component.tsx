import './formInput.style.scss'
import { FC, InputHTMLAttributes } from 'react';

export type FormInputProp = {
  label?: string;
} & InputHTMLAttributes<HTMLInputElement>

const FormInput: FC<FormInputProp> = ({label, ...otherProps }) => {
    return (
        <div className='group'>
        <input className='form-input' {...otherProps} />
        {label && (
          <label
            className={`${Boolean(otherProps.value && typeof otherProps.value === 'string' && otherProps.value.length) 
              ? 'shrink' : ''
            } form-input-label`}
          >
            {label}
          </label>
        )}
      </div>
    )
}

export default FormInput;