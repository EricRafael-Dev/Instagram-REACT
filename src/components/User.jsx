import { useState } from "react"

export default function User() {
    let [name, setName] = useState('catanacomics')

    function chooseName() {
        let newName = prompt('Escolha um novo nome:')

        if (newName===''){
            return
        } else{
            setName(newName)
        }
    }

    let [img, setImg] = useState('assets/img/catanacomics.svg')

    function chooseImg() {
        let newImg = prompt('Coloque o link da nova imagem:')
        if (newImg===''){
            return
        } else{
            setImg(newImg)
        }
    }
    return (
        <div class="usuario">
            <img data-test="profile-image" onClick={chooseImg} src={img} alt="imagem de perfil" />
            <div class="texto">
                <span>
                    <strong data-test="name">{name}</strong>
                    <ion-icon data-test="edit-name" onClick={chooseName} name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    )
}