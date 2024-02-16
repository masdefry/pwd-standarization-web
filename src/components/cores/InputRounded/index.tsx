import {IInputRoundedProps} from './../types';

const InputRounded = ({ field, placeholder }: IInputRoundedProps) => {
    return(
        <input 
            {...field}
            placeholder={placeholder}
            autoComplete='off'
            className='
                input border border-blue-400 rounded px-1 py-1 w-full focus:outline-blue-400
            '
        />
    )
}

export default InputRounded;