import css from './Button.module.css'

export const Button = ({onClick}) => {
    return (
        <div className={css.loadbutton}>
            <button 
            type='button'
            className={css.loadmore}
            onClick={onClick}
            >
                Load more
            </button>
        </div>
    )
}