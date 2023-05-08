import { useState } from "react"

export default function Post(props) {
    let [like, setLike] = useState('heart-outline')
    let [colorLike, setColorlike] = useState('none')
    let [numberLikes, setNumberLikes] = useState(props.likes)

    function numberOfLikes(numberLikes, signal) {
        let numberStr = numberLikes.replaceAll('.', '');
        let number = parseInt(numberStr);

        (signal ==='+') ? (number += 1) : (number -= 1);
        let numberNew = number.toLocaleString('pt-br');
        setNumberLikes(numberNew)
    }

    function chooseLike() {
        if (like === 'heart-outline') {
            numberOfLikes(numberLikes, '+')
            setColorlike('red')
            setLike('heart')

        } else {
            numberOfLikes(numberLikes, '-')
            setColorlike('none')
            setLike('heart-outline')
        }
    }

    function doubleChooseLike() {
        if (like === 'heart-outline') {
            numberOfLikes(numberLikes, '+')
            setColorlike('red')
            setLike('heart')
        }
    }

    

    let [favorite, setFavorite] = useState('bookmark-outline')  
    function chooseFavorite() {
        if (favorite === 'bookmark-outline') {
            setFavorite('bookmark')
        } else {
            setFavorite('bookmark-outline')
        }
    }

    return (
        <div data-test="post" class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.userImg} alt="meowed" />
                    {props.user}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img data-test="post-image" onDoubleClick={doubleChooseLike} src={props.contentPost} alt={props.user} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon data-test="like-post" onClick={chooseLike} class={colorLike} name={like}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon data-test="save-post" onClick={chooseFavorite} name={favorite}></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src="assets/img/respondeai.svg" alt="respondeai" />
                    <div data-test="likes-number" class="texto">
                        Curtido por <strong>respondeai</strong> e <strong>outras {numberLikes} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}