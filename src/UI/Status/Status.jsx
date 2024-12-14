import classes from './Status.module.css'

const Status = ({children, className}) => {
    return (
        <div className={`${classes.Status} ${className}`}>
            {children}
        </div>
    );
};

export default Status;