import styles from './../../common/styles/Common.module.css'

export const Error = () => {
    return (
        <div className={styles.boxStyles}
             style={{
                 justifyContent: 'center',
                 alignItems: 'center',
                 color: 'red',
                 fontSize: '2rem',
             }}>
            Error
        </div>
    );
};

