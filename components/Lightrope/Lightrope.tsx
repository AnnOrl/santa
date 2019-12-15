import React from 'react'

const styles = require('./Lightrope.module.css');

const Lightrope = () => {
    return <ul className={styles.lightrope}>
        {[...Array(40)].map((_item, key)=> <li key={key}></li>)}
    </ul>
}



export default Lightrope
