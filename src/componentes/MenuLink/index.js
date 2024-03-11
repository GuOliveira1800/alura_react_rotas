import styles from './Menu.module.css';
import { Link, useLocation } from 'react-router-dom';

export default function MenuLink ( {texto, to} ) {

    const local = useLocation();

    return (
        <Link className={`
                    ${styles.link}
                    ${local.pathname === to ? styles.linkDestacado : ""}
                `} to= {to}>
                    {texto}
        </Link>
    )
}

//