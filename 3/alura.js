var listaFilmes = [
"https://m.media-amazon.com/images/I/513rJGv18OL._AC_.jpg", "https://pbs.twimg.com/media/FxOjxy8WAAMV_Nz.jpg", "https://upload.wikimedia.org/wikipedia/en/b/b0/Les-miserables-movie-poster1.jpg", 'https://m.media-amazon.com/images/I/51lbxZ-5AQL._AC_UF1000,1000_QL80_.jpg'
];

//CÓDIGO ANTIGO (mais comprido, mas achei mais organizado)
//var listaFilmes = [];
//listaFilmes[0] = 'https://m.media-amazon.com/images/I/513rJGv18OL._AC_.jpg'; 
//listaFilmes[1] = 'https://pbs.twimg.com/media/FxOjxy8WAAMV_Nz.jpg';
//listaFilmes[2] = 'https://upload.wikimedia.org/wikipedia/en/b/b0/Les-miserables-movie-poster1.jpg';


//EXPLICAÇÃO 'for':
//i = index (variável de incremento)
//i=0 pois 0 é o ponto de partida (filme 0)
//enquanto i for menor que o tamanho da lista; todas as vezes que a linha for executada, ele vai incrementar +1 (i++ também pode ser escrito como i = i+1)
//document.write() -> chama um html pelo css.
for(var i=0; i<listaFilmes.length; i++) {
    document.write("<img src=" + listaFilmes[i] +">");
}

