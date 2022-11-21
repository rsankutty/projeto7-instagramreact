import React from "react";

const postsArr = [
  {
    imgUsuario: "assets/img/meowed.svg",
    nomeUsuario: "meowed",
    userPost: "assets/img/gato-telefone.svg",
    imgCurtiu: "assets/img/respondeai.svg",
    nomeCurtiu: "respondeai",
    qtdCurtiu: 101.523,
  },
  {
    imgUsuario: "assets/img/barked.svg",
    nomeUsuario: "barked",
    userPost: "assets/img/dog.svg",
    imgCurtiu: "assets/img/adorable_animals.svg",
    nomeCurtiu: "adorable_animals",
    qtdCurtiu: 99.159,
  },
];

function Post(props) {
  const [salvo, setSalvo] = React.useState("bookmark-outline");
  const [heartClass, setHeartClass] = React.useState("");
  const [heartIcon, setHeartIcon] = React.useState("heart-outline");
  let [likesNumber, setLikesNumber] = React.useState(props.qtdCurtiu);

  function likeButton() {
    if (heartIcon == "heart-outline") {
      setHeartIcon("heart");
      setHeartClass("heart");
      likesNumber = parseFloat(likesNumber);
      likesNumber += 0.001;
      likesNumber = likesNumber.toFixed(3);
      setLikesNumber(likesNumber);
    } else {
      setHeartIcon("heart-outline");
      setHeartClass("");
      likesNumber = parseFloat(likesNumber);
      likesNumber -= 0.001;
      likesNumber = likesNumber.toFixed(3);
      setLikesNumber(likesNumber);
    }
  }

  function likeImg() {
    if (heartIcon == "heart-outline") {
      setHeartIcon("heart");
      setHeartClass("heart");
      likesNumber = parseFloat(likesNumber);
      likesNumber += 0.001;
      likesNumber = likesNumber.toFixed(3);
      setLikesNumber(likesNumber);
    }
  }

  return (
    <div className="post" data-test="post">
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
        <img onClick={likeImg} src={props.userPost} data-test="post-image" />
      </div>

      <div className="fundo">
        <div className="acoes">
          <div>
            <ion-icon
              data-test="like-post"
              onClick={likeButton}
              class={heartClass}
              name={heartIcon}
            ></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon
              data-test="save-post"
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
          <div className="texto" data-test="likes-number">
            Curtido por <strong>{props.nomeCurtiu}</strong> e{" "}
            <strong>outras {likesNumber} pessoas</strong>
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
