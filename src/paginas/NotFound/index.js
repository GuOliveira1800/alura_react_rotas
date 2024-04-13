import BotaoPrincipal from 'componentes/BotaoPrincipal';
import style from './NotFound.module.css';
import erro404 from 'assets/erro_404.png';
import { useNavigate } from 'react-router-dom';

export default function NotFound(){
    const navegar = useNavigate();
    return (
        <>
            <div className={style.conteudoContainer}>
                <span className={style.texto404}>404</span>

                <h1 className={style.titulo}>
                    Not Found!
                </h1>
                <p className={style.paragrafo}>
                    Não foi encontrado nenhum post
                </p>
                <div 
                    className={style.botaoContainer}
                    onClick={()=>{ navegar('/') }}
                >
                    <BotaoPrincipal
                        tamanho='lg'
                    >
                        Voltar
                    </BotaoPrincipal>
                </div>
                <img
                    className={style.imagemCachorro}
                    src={erro404}
                    alt='Erro'
                />
            </div>

            <div className={style.espacoEmBranco}>
                
            </div>
        </>
    )
}