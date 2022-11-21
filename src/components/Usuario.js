import React from 'react';


export default function Usuario() {
  const perfilNome = "catanacomics";
  const [nome, setName] = React.useState("Catana");
  const [imgUser, setImg] = React.useState("assets/img/catanacomics.svg");

function changeName(){
  let newName = prompt("Insira um novo nome");
  if (newName){
    setName(newName);
  }
}

function changeImg(){
let newImg = prompt("Insira o link da nova imagem");
if (newImg){
  setName(newImg);
}
}

function User(props) {
  
  return (
    <div className="usuario">
      <img src={props.imgUser} onClick={changeImg} />
      <div className="texto">
        <strong>{props.perfilNome}</strong>
        <span>
          {props.nome}
          <ion-icon onClick={changeName} name="pencil"></ion-icon>
        </span>
      </div>
    </div>
  );
}
  return <User imgUser={imgUser} perfilNome={perfilNome} nome={nome}/>;
}
