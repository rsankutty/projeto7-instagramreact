const sugestArr = [
  {
    imgUsuario: "assets/img/meowed.svg",
    nomeUsuario: "meowed",
    followstatus: "Segue você",
  },
  {
    imgUsuario: "assets/img/chibirdart.svg",
    nomeUsuario: "chibirdart",
    followstatus: "Segue você",
  },
  {
    imgUsuario: "assets/img/razoesparaacreditar.svg",
    nomeUsuario: "razoesparaacreditar",
    followstatus: "Novo no Instagram",
  },
  {
    imgUsuario: "assets/img/adorable_animals.svg",
    nomeUsuario: "adorable_animals",
    followstatus: "Segue você",
  },
  {
    imgUsuario: "assets/img/smallcutecats.svg",
    nomeUsuario: "smallcutecats",
    followstatus: "Segue você",
  },
];

function Sugestao(props) {
  return (
    <div className="sugestao">
      <div className="usuario">
        <img src={props.imgUsuario} />
        <div className="texto">
          <div className="nome">{props.nomeUsuario}</div>
          <div className="razao">{props.followstatus}</div>
        </div>
      </div>

      <div className="seguir">Seguir</div>
    </div>
  );
}

export default function Sugestoes() {
  return (
    <div className="sugestoes">
      <div className="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>

      {sugestArr.map((sugItem) => {
        return (
          <Sugestao
            key={sugItem.nomeUsuario}
            imgUsuario={sugItem.imgUsuario}
            nomeUsuario={sugItem.nomeUsuario}
            followstatus={sugItem.followstatus}
          />
        );
      })}
    </div>
  );
}
