import { IResultadoNoticia } from "../atoms/Interfaces";


class Noticia {
    public abstract: string;
    public titulo: string;
    public url: string;
    public urlImagem: string;
    public urlImagemResolucaoBoa: string;
    constructor(resultado: IResultadoNoticia) {
        this.abstract = resultado.abstract;
        this.titulo = resultado.title;
        this.url = resultado.url;
        this.urlImagem = resultado.multimedia[3].url;
        this.urlImagemResolucaoBoa = resultado.multimedia[0].url;
    }
}
export default Noticia;