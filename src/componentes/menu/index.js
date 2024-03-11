import styles from './Menu.module.css';
import MenuLink from '../MenuLink';

export default function Menu () {
    return (
        <header>
            <nav className={styles.navegacao}>
                <MenuLink texto={'Inicio'} to={'/'} />
                <MenuLink texto={'Sobre Mim'} to={'/sobremim'} />
            </nav>
        </header>
    )
}

//