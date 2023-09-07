import './button.style.component.scss'


type ButtonPropTypes = {
   text:string;
   buttonType?: keyof typeof BUTTON_TYPES_CLASSES;
   isLoading?:boolean;
   [key:string]: any; 
}

const BUTTON_TYPES_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted'
}

const Button = ({text, buttonType, isLoading, ...otherProps}:ButtonPropTypes)=> {

    const buttonClass = buttonType ? BUTTON_TYPES_CLASSES[buttonType] : '';
    return (
        <button disabled={isLoading} className={`button-container ${buttonClass}`} {...otherProps}>
            {
                !isLoading ? 
                (text)
                :
                (
                    <div className='button-spinner-overlay'>
                        <div className='button-spinner-container'></div>
                    </div>
                )
            }
        </button>
    )
}

export default Button;