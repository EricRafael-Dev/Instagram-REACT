export default function Suggestion(props) {
    return (
        <div class="sugestao">
                <div class="usuario">
                    <img src={props.userImg} alt={props.userSuggestion} />
                    <div class="texto">
                        <div class="nome">{props.userSuggestion}</div>
                        <div class="razao">{props.reason}</div>
                    </div>
                </div>

                <div class="seguir">Seguir</div>
            </div>
    )
}