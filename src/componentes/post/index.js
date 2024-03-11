import styles from './Post.module.css';

export default function Post ({post}) {
    return (
        <div className={styles.post}>
            <img
                className={styles.capa}
                src={`/posts/batman${post.id}.jpeg`}
                alt='Imagem capa'
            />
            <h2 className={styles.titulo}>
                {post.titulo}
            </h2>
            <button className={styles.botaoLer}>
                Ler
            </button>
        </div>
    );
} //${post.id}