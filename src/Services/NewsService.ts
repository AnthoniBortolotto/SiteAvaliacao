import Noticia from "../molecules/Noticia";
import {IResultadoNoticia} from "../atoms/interfaces"
class NewsService{
    private static getLinkScience(): string{
        return 'https://api.nytimes.com/svc/topstories/v2/science.json?api-key=4fhC4YKLRAeBoW8cOa2KcFPBYVDUhMHC';
    } 
    public static noticiasCiencia(){
       return fetch(NewsService.getLinkScience())
        .then(res => res.json())
        .then(res => {
            let grupoNoticias:Array<Noticia> = [];
            res.results.map((noticiaAtual:IResultadoNoticia) =>{
                grupoNoticias.push(new Noticia(noticiaAtual))
            })
            return grupoNoticias;
        });
    }
}
export default NewsService;