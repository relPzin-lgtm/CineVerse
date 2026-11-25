import React from 'react';
function Banner({ explorar, verDetalhes }) {
  return (
    <section className="banner">
      <div className="banner-arte" />
      <div className="banner-sombra" />
      <div className="banner-conteudo">
        <span className="etiqueta">✦ DESTAQUE DA SEMANA</span>
        <h1>Histórias que<br /><em>vão além</em> da tela.</h1>
        <p>Descubra novos mundos, encontre seu próximo filme favorito e crie sua própria coleção.</p>
        <div className="banner-acoes">
          <button className="botao-primario" onClick={explorar}>Explorar filmes <span>↗</span></button>
          <button className="botao-contorno" onClick={verDetalhes}>Ver destaque <span>→</span></button>
        </div>
      </div>
      <div className="banner-legenda">★ 9.1 <span>•</span> Além das Estrelas <span>•</span> 2024</div>
    </section>
  );
}

export default Banner;
