import './formInput.style.scss'

type FormInputPropTypes = {
  label?:string;
  [key:string]:any
}

const FormInput = ({label, ...otherProps }:FormInputPropTypes) => {
    return (
        <div className='group'>
        <input className='form-input' {...otherProps} />
        {label && (
          <label
            className={`${
              otherProps.value.length ? 'shrink' : ''
            } form-input-label`}
          >
            {label}
          </label>
        )}
      </div>
    )
}

export default FormInput;