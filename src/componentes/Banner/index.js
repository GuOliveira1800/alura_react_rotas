import styles from './banner.module.css';
import imgBanner from 'assets/banner.jpeg';
import imgBat3 from 'assets/joker.jpeg';

export default function Banner (){
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1>
                    Batman
                </h1>
                <p className={styles.paragrafo}>
                    Porque ele é o herói que Gotham merece, mas não o que ela precisa agora. Vamos caçá-lo...porque ele aguenta. Porque ele não é um herói. É um guardião silencioso... um protetor zeloso. Um Cavaleiro das Trevas.
                </p>
            </div>
            <div className={styles.imagens}>
                <img
                    className={styles.circuloColorido}
                    src={imgBanner}
                    aria-hidden={true}
                    alt=''
                />
                <img
                    className={styles.minhaFoto}
                    src={imgBat3}
                    aria-hidden={true}
                    alt='Foto batman'
                />
            </div>
        </div>
    );
}