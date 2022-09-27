import React from 'react'
import styles from './layout.module.css';

const Layout = ({children}) => {
  return (
    <div>
        <header className={styles.header}>
            <h1 className={styles.title}>MCGA 2022</h1>
        </header>
        {children}
    </div>
  )
}

export default Layout