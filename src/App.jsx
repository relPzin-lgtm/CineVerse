import React, { useState } from 'react';
import Header from './components/Header';
import Inicio from './pages/Inicio';
import Filmes from './pages/Filmes';
import Favoritos from './pages/Favoritos';
import filmes from './filmes';

function App() {
  const [pagina, setPagina] = useState('inicio');
  const [favoritos, setFavoritos] = useState(() => {
    try {
      const salvos = JSON.parse(localStorage.getItem('cineverse-favoritos'));
      return Array.isArray(salvos) ? salvos : [];
    } catch {
      return [];
    }
  });
  const [filmeAberto, setFilmeAberto] = useState(null);

  function mudarPagina(novaPagina) {
    setPagina(novaPagina);
    setFilmeAberto(null);
    window.scrollTo(0, 0);
  }

  function favoritar(id) {
    const novaLista = favoritos.includes(id) ? favoritos.filter(item => item !== id) : [...favoritos, id];
    setFavoritos(novaLista);
    localStorage.setItem('cineverse-favoritos', JSON.stringify(novaLista));
  }

  return (
    <div className="site">
      <Header pagina={pagina} mudarPagina={mudarPagina} quantidade={favoritos.length} />
      {pagina === 'inicio' && <Inicio filmes={filmes} favoritos={favoritos} favoritar={favoritar} detalhes={setFilmeAberto} mudarPagina={mudarPagina} />}
      {pagina === 'filmes' && <Filmes filmes={filmes} favoritos={favoritos} favoritar={favoritar} detalhes={setFilmeAberto} />}
      {pagina === 'favoritos' && <Favoritos filmes={filmes} favoritos={favoritos} favoritar={favoritar} detalhes={setFilmeAberto} mudarPagina={mudarPagina} />}
      <footer className="rodape"><div className="largura rodape-interno"><span className="marca-rodape">▶ CINE<span>VERSE</span></span><span>Projeto acadêmico • React + Vite</span><span>Feito para quem ama cinema ✦</span></div></footer>
      {filmeAberto && <div className="modal-fundo" onClick={() => setFilmeAberto(null)}><div className="modal" role="dialog" aria-modal="true" aria-label={'Detalhes de ' + filmeAberto.titulo} onClick={evento => evento.stopPropagation()}><button className="fechar" onClick={() => setFilmeAberto(null)} aria-label="Fechar">×</button><img src={filmeAberto.poster} alt={'Pôster de ' + filmeAberto.titulo} /><div className="modal-info"><span className="sobretitulo">DETALHES DO FILME</span><h2>{filmeAberto.titulo}</h2><div className="modal-meta">★ {filmeAberto.nota} <span>•</span> {filmeAberto.ano} <span>•</span> {filmeAberto.duracao}</div><span className="genero-tag">{filmeAberto.genero}</span><p>{filmeAberto.descricao}</p><button className="botao-primario" onClick={() => favoritar(filmeAberto.id)}>{favoritos.includes(filmeAberto.id) ? '♥ Remover dos favoritos' : '♡ Adicionar aos favoritos'}</button></div></div></div>}
    </div>
  );
}

export default App;
