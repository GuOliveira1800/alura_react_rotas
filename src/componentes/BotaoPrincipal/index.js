import style from './botaoPrincipal.module.css'

export default function BotaoPrincipal({children, tamanho}){

    return (
        <button className={`
            ${style.botao}
            ${style[tamanho]}
        `}>
            {children}
        </button>   
    )
    
}