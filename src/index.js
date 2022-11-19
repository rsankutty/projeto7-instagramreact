import ReactDOM from "react-dom";

function NavBar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <ion-icon name="logo-instagram"></ion-icon>
          <div className="separador"></div>
          <img src="assets/img/logo.png" />
        </div>

        <div className="logo-mobile">
          <ion-icon name="logo-instagram"></ion-icon>
        </div>

        <div className="instagram-mobile">
          <img src="assets/img/logo.png" />
        </div>

        <div className="pesquisa">
          <input type="text" placeholder="Pesquisar" />
        </div>

        <div className="icones">
          <ion-icon name="paper-plane-outline"></ion-icon>
          <ion-icon name="compass-outline"></ion-icon>
          <ion-icon name="heart-outline"></ion-icon>
          <ion-icon name="person-outline"></ion-icon>
        </div>

        <div className="icones-mobile">
          <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
      </div>
    </div>
  );
}

function Corpo() {
  return (
    <div className="corpo">
      <div className="esquerda">
        <Stories />
        <Posts />
      </div>
      <SideBar />
    </div>
  );
}

function Stories() {
  return (
    <div className="stories">
      <div className="story">
        <div className="imagem">
          <img src="assets/img/9gag.svg" />
        </div>
        <div className="usuario">9gag</div>
      </div>

      <div className="story">
        <div className="imagem">
          <img src="assets/img/meowed.svg" />
        </div>
        <div className="usuario">meowed</div>
      </div>

      <div className="story">
        <div className="imagem">
          <img src="assets/img/barked.svg" />
        </div>
        <div className="usuario">barked</div>
      </div>

      <div className="story">
        <div className="imagem">
          <img src="assets/img/nathanwpylestrangeplanet.svg" />
        </div>
        <div className="usuario">nathanwpylestrangeplanet</div>
      </div>

      <div className="story">
        <div className="imagem">
          <img src="assets/img/wawawicomics.svg" />
        </div>
        <div className="usuario">wawawicomics</div>
      </div>

      <div className="story">
        <div className="imagem">
          <img src="assets/img/respondeai.svg" />
        </div>
        <div className="usuario">respondeai</div>
      </div>

      <div className="story">
        <div className="imagem">
          <img src="assets/img/filomoderna.svg" />
        </div>
        <div className="usuario">filomoderna</div>
      </div>

      <div className="story">
        <div className="imagem">
          <img src="assets/img/memeriagourmet.svg" />
        </div>
        <div className="usuario">memeriagourmet</div>
      </div>

      <div className="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}

function Posts() {
  return (
    <div className="posts">
      <div className="post">
        <div className="topo">
          <div className="usuario">
            <img src="assets/img/meowed.svg" />
            meowed
          </div>
          <div className="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>

        <div className="conteudo">
          <img src="assets/img/gato-telefone.svg" />
        </div>

        <div className="fundo">
          <div className="acoes">
            <div>
              <ion-icon name="heart-outline"></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              <ion-icon name="bookmark-outline"></ion-icon>
            </div>
          </div>

          <div className="curtidas">
            <img src="assets/img/respondeai.svg" />
            <div className="texto">
              Curtido por <strong>respondeai</strong> e{" "}
              <strong>outras 101.523 pessoas</strong>
            </div>
          </div>
        </div>
      </div>

      <div className="post">
        <div className="topo">
          <div className="usuario">
            <img src="assets/img/barked.svg" />
            barked
          </div>
          <div className="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>

        <div className="conteudo">
          <img src="assets/img/dog.svg" />
        </div>

        <div className="fundo">
          <div className="acoes">
            <div>
              <ion-icon name="heart-outline"></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              <ion-icon name="bookmark-outline"></ion-icon>
            </div>
          </div>

          <div className="curtidas">
            <img src="assets/img/adorable_animals.svg" />
            <div className="texto">
              Curtido por <strong>adorable_animals</strong> e{" "}
              <strong>outras 99.159 pessoas</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SideBar() {
  return (
    <div className="sidebar">
      <Usuario />

      <Sugestoes />

      <div className="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
        Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>

      <div className="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
    </div>
  );
}

function Usuario() {
  return (
    <div className="usuario">
      <img src="assets/img/catanacomics.svg" />
      <div className="texto">
        <strong>catanacomics</strong>
        <span>
          Catana
          <ion-icon name="pencil"></ion-icon>
        </span>
      </div>
    </div>
  );
}

function Sugestoes() {
  return (
    <div className="sugestoes">
      <div className="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>

      <div className="sugestao">
        <div className="usuario">
          <img src="assets/img/bad.vibes.memes.svg" />
          <div className="texto">
            <div className="nome">bad.vibes.memes</div>
            <div className="razao">Segue você</div>
          </div>
        </div>

        <div className="seguir">Seguir</div>
      </div>

      <div className="sugestao">
        <div className="usuario">
          <img src="assets/img/chibirdart.svg" />
          <div className="texto">
            <div className="nome">chibirdart</div>
            <div className="razao">Segue você</div>
          </div>
        </div>

        <div className="seguir">Seguir</div>
      </div>

      <div className="sugestao">
        <div className="usuario">
          <img src="assets/img/razoesparaacreditar.svg" />
          <div className="texto">
            <div className="nome">razoesparaacreditar</div>
            <div className="razao">Novo no Instagram</div>
          </div>
        </div>

        <div className="seguir">Seguir</div>
      </div>

      <div className="sugestao">
        <div className="usuario">
          <img src="assets/img/adorable_animals.svg" />
          <div className="texto">
            <div className="nome">adorable_animals</div>
            <div className="razao">Segue você</div>
          </div>
        </div>

        <div className="seguir">Seguir</div>
      </div>

      <div className="sugestao">
        <div className="usuario">
          <img src="assets/img/smallcutecats.svg" />
          <div className="texto">
            <div className="nome">smallcutecats</div>
            <div className="razao">Segue você</div>
          </div>
        </div>

        <div className="seguir">Seguir</div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <NavBar />
      <Corpo />
      <div className="fundo-mobile">
        <ion-icon name="home"></ion-icon>
        <ion-icon name="search-outline"></ion-icon>
        <ion-icon name="add-circle-outline"></ion-icon>
        <ion-icon name="heart-outline"></ion-icon>
        <ion-icon name="person-outline"></ion-icon>
      </div>
    </div>
  );
}

const app = App();
const elemento = document.querySelector(".root");
ReactDOM.render(app, elemento);
