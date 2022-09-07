import styles from './NotFound.module.scss';

const NotFound = () => {
    return (
        <>
            <h1 className={styles.root}>
                <span>😕</span>
                <br/>
                Ничего не найдено
            </h1>
            <p className={styles.root}>К сожалению данная страница отсутствует в нашем магазине</p>
        </>
    )
}

export default NotFound;