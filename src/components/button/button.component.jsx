import './button.style.component.scss'

const BUTTON_TYPES_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted'
}

const Button = ({text, buttonType, ...otherProps})=> {
    return (
        <button className={`button-container ${BUTTON_TYPES_CLASSES[buttonType]}`} {...otherProps}>
            {text}
        </button>
    )
}

export default Button;