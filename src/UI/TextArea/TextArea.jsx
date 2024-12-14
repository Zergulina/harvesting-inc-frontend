import classes from './TextArea.module.css'

const TextArea = ({value, setValue, placeholder, isDisabled, className}) => {
    return (
        <textarea value={value} disabled={isDisabled} onChange={e => setValue(e.target.value)} placeholder={placeholder} className={`${classes.TextArea} ${isDisabled?classes.TextAreaDisabled:""} ${className}`}/>
    );
};

export default TextArea;