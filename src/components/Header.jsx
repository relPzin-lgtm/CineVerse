import React from 'react';
function Header({ pagina, mudarPagina, quantidade }) {
  return (
    <header className="cabecalho">
      <div className="largura barra">
        <button className="marca" onClick={() => mudarPagina('inicio')} aria-label="Ir para início">
          <span className="marca-icone">▶</span>
          <span>CINE<span>VERSE</span></span>
        </button>
        <nav className="navegacao" aria-label="Navegação principal">
          <button className={pagina === 'inicio' ? 'ativo' : ''} onClick={() => mudarPagina('inicio')}>Início</button>
          <button className={pagina === 'filmes' ? 'ativo' : ''} onClick={() => mudarPagina('filmes')}>Filmes</button>
          <button className={pagina === 'favoritos' ? 'ativo' : ''} onClick={() => mudarPagina('favoritos')}>Favoritos <span className="contador">{quantidade}</span></button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
