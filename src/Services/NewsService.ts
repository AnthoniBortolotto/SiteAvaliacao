import Noticia from "../molecules/Noticia";
import {IResultadoNoticia} from "../atoms/Interfaces"
class NewsService{
    private static getLinkScience(): string{
        return 'https://api.nytimes.com/svc/topstories/v2/science.json?api-key=4fhC4YKLRAeBoW8cOa2KcFPBYVDUhMHC';
    } 
    private static getLinkHome(): string{
        return 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=4fhC4YKLRAeBoW8cOa2KcFPBYVDUhMHC'
    }
    private static getLinkTechnology(): string{
        return 'https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=4fhC4YKLRAeBoW8cOa2KcFPBYVDUhMHC'
    }
    public static noticiasCiencia(): Promise<Noticia[]>{
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
    public static noticiasHome(): Promise<Noticia[]>{
        return fetch(NewsService.getLinkHome())
         .then(res => res.json())
         .then(res => {
             let grupoNoticias:Array<Noticia> = [];
             res.results.map((noticiaAtual:IResultadoNoticia) =>{
                 grupoNoticias.push(new Noticia(noticiaAtual))
             })
             return grupoNoticias;
         });
     }
     public static noticiasTecnologia(): Promise<Noticia[]>{
        return fetch(NewsService.getLinkTechnology())
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