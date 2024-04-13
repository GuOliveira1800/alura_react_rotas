import { useParams } from "react-router-dom"
import posts from "json/posts.json";
import PostModelo from "componentes/PostModelo";
import Markdown from "react-markdown";
import NotFound from "paginas/NotFound";

export default function Post(){
    
    const params = useParams();

    const post = posts.find(post => post.id === Number(params.id));

    if(!post){
        return (
            <NotFound/>
        )
    }

    return (
        <PostModelo
            fotoCapa={`/assets/posts/${post.id}/capa.png`}
            titulo={post.titulo}
        >
        <div className="post-markdown-container">
            <Markdown>
                {post.texto}
            </Markdown>
        </div>
        </PostModelo>
    )
}