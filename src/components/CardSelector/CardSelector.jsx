import classes from './CardSelector.module.css'

const CardSelector = ({ title, children, className }) => {
    return (
        <div className={`${classes.CardSelectorWrapper} ${className}`}>
            <h1 className={classes.CardSelectorHeader}>{title}</h1>
            <div className={classes.CardSelector}>
                {children}
            </div>
        </div>
    );
}

export default CardSelector;