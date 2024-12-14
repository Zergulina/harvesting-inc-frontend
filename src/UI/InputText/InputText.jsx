import classes from './InputText.module.css'

const InputText = ({value, setValue, placeholder, isDisabled, className}, props) => {
    return (
        <input type="text" value={value} disabled={isDisabled} onChange={e => setValue(e.target.value)} placeholder={placeholder} className={`${classes.InputText} ${className}`} {...props}/>
    );
};

export default InputText;