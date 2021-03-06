import React from 'react'

const styles = require('./Container.module.css');

const Container = ({children}) => (
    <div className={styles.container}>
        {children}
    </div>
)

export default Container
