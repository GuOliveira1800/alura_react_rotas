import styles from './inicio.module.css'
import Post from '../../componentes/post';

export default function Inicio () {

    const lista = [
        {
            "id" : 1,
            "titulo": "Frase 1",
            "texto" : "Ou se morre como herói, ou vive-se o bastante para se tornar o vilão."
        },
        {
            "id" : 2,
            "titulo": "Frase 2",
            "texto" : "⁠Os criminosos são covardes e supersticiosos."
        },
        {
            "id" : 3,
            "titulo": "Frase 3",
            "texto" : "Batman é um maluco como a gente, vocês viram a roupinha dele."
        }
    ];

    return (
        <div>
            <ul className={styles.posts}>
                {lista.map( (lista) => {
                    return(
                        <li key={lista.id}>
                            <Post post={lista} key={lista.id}/>
                        </li>
                    )
                })
                }
            </ul>
        </div>
    )
}