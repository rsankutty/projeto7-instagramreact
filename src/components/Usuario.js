let imgUser = "assets/img/catanacomics.svg";
let perfilNome = "catanacomics";
let nome = "Catana";

function User(props) {
  return (
    <div className="usuario">
      <img src={props.imgUser} />
      <div className="texto">
        <strong>{props.perfilNome}</strong>
        <span>
          {props.nome}
          <ion-icon name="pencil"></ion-icon>
        </span>
      </div>
    </div>
  );
}

export default function Usuario() {
  return <User imgUser={imgUser} perfilNome={perfilNome} nome={nome}/>;
}
