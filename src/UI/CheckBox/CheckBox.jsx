import classes from './CheckBox.module.css'

const InputText = ({value, setValue, isDisabled, className}, props) => {
    return (
        <input type="checkbox" checked={value} disabled={isDisabled} onChange={() => setValue(!value)} className={`${classes.CheckBox} ${className}`} {...props}/>
    );
};

export default InputText;