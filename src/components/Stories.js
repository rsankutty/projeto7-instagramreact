const storiesArr = [
  {
    imagem: "assets/img/9gag.svg",
    usuario: "9gag",
  },
  {
    imagem: "assets/img/meowed.svg",
    usuario: "meowed",
  },
  {
    imagem: "assets/img/barked.svg",
    usuario: "barked",
  },
  {
    imagem: "assets/img/nathanwpylestrangeplanet.svg",
    usuario: "nathanwpylestrangeplanet",
  },
  {
    imagem: "assets/img/wawawicomics.svg",
    usuario: "wawawicomics",
  },
  {
    imagem: "assets/img/respondeai.svg",
    usuario: "respondeai",
  },
  {
    imagem: "assets/img/filomoderna.svg",
    usuario: "filomoderna",
  },
  {
    imagem: "assets/img/memeriagourmet.svg",
    usuario: "memeriagourmet",
  },
];

function Story(props) {
  return (
    <div className="story">
      <div className="imagem">
        <img src={props.imagem} />
      </div>
      <div className="usuario">{props.usuario}</div>
    </div>
  );
}

export default function Stories() {
  return (
    <div className="stories">
      {storiesArr.map((storyItem) => {
        return (
          <Story
            key={storyItem.usuario}
            imagem={storyItem.imagem}
            usuario={storyItem.usuario}
          />
        );
      })}

      <div className="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}
