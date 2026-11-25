import React from 'react';
import Banner from '../components/Banner';
import FilmeCard from '../components/FilmeCard';

function Inicio({ filmes, favoritos, favoritar, detalhes, mudarPagina }) {
  return (
    <>
      <Banner explorar={() => mudarPagina('filmes')} verDetalhes={() => detalhes(filmes[0])} />
      <div className="largura conteudo">
        <section className="secao">
          <div className="secao-cabecalho">
            <div><span className="sobretitulo">SELEÇÃO ESPECIAL</span><h2>Em destaque <span>✦</span></h2><p>Escolhas para a sua próxima sessão de cinema.</p></div>
            <button className="link" onClick={() => mudarPagina('filmes')}>Ver todos os filmes →</button>
          </div>
          <div className="grade-filmes">
            {filmes.slice(0, 6).map(filme => <FilmeCard key={filme.id} filme={filme} favorito={favoritos.includes(filme.id)} favoritar={favoritar} detalhes={detalhes} />)}
          </div>
        </section>
        <section className="chamada">
          <div><span className="sobretitulo">SEU ESPAÇO</span><h2>Seus favoritos,<br />sempre por perto.</h2><p>Guarde os filmes que você mais gosta em um só lugar. Sua lista fica salva neste navegador.</p><button className="botao-primario" onClick={() => mudarPagina('favoritos')}>Minha lista de favoritos ↗</button></div>
          <div className="chamada-icone">♥<span>✦</span></div>
        </section>
      </div>
    </>
  );
}

export default Inicio;
