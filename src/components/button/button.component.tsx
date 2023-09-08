import './button.style.component.scss'
import { FC } from 'react';

export enum BUTTON_TYPES_CLASSES  {
    base = 'base',
    google = 'google-sign-in',
    inverted = 'inverted'
}

export type ButtonProps = {
    text: string;
    buttonType: keyof typeof BUTTON_TYPES_CLASSES;
    isLoading?: boolean;
}

const Button: FC<ButtonProps> = ({text, buttonType, isLoading, ...otherProps})=> {


    const getButtonClass = (buttonType = BUTTON_TYPES_CLASSES.base): typeof BUTTON_TYPES_CLASSES=> {
        return BUTTON_TYPES_CLASSES[buttonType];
    }


    return (
        <button disabled={isLoading} className={`button-container ${getButtonClass}`} {...otherProps}>
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