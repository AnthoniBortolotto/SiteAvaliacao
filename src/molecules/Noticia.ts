import { IResultadoNoticia } from "../atoms/interfaces";


class Noticia{
    public abstract: string
    public titulo:string
    public url: string
   public urlImagem: string;
    constructor(resultado:IResultadoNoticia){
        this.abstract = resultado.abstract;
        this.titulo = resultado.title;
        this.url = resultado.url;
        this.urlImagem= resultado.multimedia[3].url;     
    }
}
export default Noticia;