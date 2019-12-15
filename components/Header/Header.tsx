import React, {useCallback, useState} from 'react'
import Container from '../Container/Container'
import {Icon} from 'semantic-ui-react'
import Link from 'next/link'
import {useRouter} from 'next/router'

const styles = require('./Header.module.css');

const items = [
    {href: '/create', label: 'Организовать'},
    {href: '/box', label: 'Присоединиться'},
    {href: '/result', label: 'Результаты'},
];

const Header = () => {
    const {pathname} = useRouter();
    const [showMenu, setShowMenu] = useState(false);
    const handleShowMenu = useCallback(() => {
        setShowMenu(!showMenu)
    }, [showMenu, setShowMenu])

    return <nav className={styles.menuContainer}>
        <Container>
            <Link href='/'>
                <div className={styles.logo}>
                    <img src="/64/candygold.png"/>
                    Секретный Санта
                </div>
            </Link>
            <button className={styles.menu_small} onClick={handleShowMenu}>
                <Icon disabled name='content'/>
            </button>
            <div className={`${styles.menu} ${showMenu && styles.menu_small_showed}`}>
                <ul>
                    {items.map(({href, label}) => {
                        return <li key={href} className={pathname === href ? styles.active : undefined}>
                            <Link href={href}>{label}</Link>
                        </li>
                    })}
                </ul>
            </div>
        </Container>
    </nav>
}

export default Header
