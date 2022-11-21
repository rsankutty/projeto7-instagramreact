import React from "react";

const postsArr = [
  {
    imgUsuario: "assets/img/meowed.svg",
    nomeUsuario: "meowed",
    userPost: "assets/img/gato-telefone.svg",
    imgCurtiu: "assets/img/respondeai.svg",
    nomeCurtiu: "respondeai",
    qtdCurtiu: "101.523",
  },
  {
    imgUsuario: "assets/img/barked.svg",
    nomeUsuario: "barked",
    userPost: "assets/img/dog.svg",
    imgCurtiu: "assets/img/adorable_animals.svg",
    nomeCurtiu: "adorable_animals",
    qtdCurtiu: "99.159",
  },
];

function Post(props) {
  const [salvo, setSalvo] = React.useState("bookmark-outline");

  return (
    <div className="post">
      <div className="topo">
        <div className="usuario">
          <img src={props.imgUsuario} />
          {props.nomeUsuario}
        </div>
        <div className="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div className="conteudo">
        <img src={props.userPost} />
      </div>

      <div className="fundo">
        <div className="acoes">
          <div>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon
              onClick={() =>
                salvo == "bookmark"
                  ? setSalvo("bookmark-outline")
                  : setSalvo("bookmark")
              }
              name={salvo}
            ></ion-icon>
          </div>
        </div>

        <div className="curtidas">
          <img src={props.imgCurtiu} />
          <div className="texto">
            Curtido por <strong>{props.nomeCurtiu}</strong> e{" "}
            <strong>outras {props.qtdCurtiu} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Posts() {
  return (
    <div className="posts">
      {postsArr.map((postItem) => {
        return (
          <Post
            key={postItem.nomeUsuario}
            imgUsuario={postItem.imgUsuario}
            nomeUsuario={postItem.nomeUsuario}
            userPost={postItem.userPost}
            imgCurtiu={postItem.imgCurtiu}
            nomeCurtiu={postItem.nomeCurtiu}
            qtdCurtiu={postItem.qtdCurtiu}
          />
        );
      })}
    </div>
  );
}
