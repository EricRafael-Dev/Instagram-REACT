import Suggestion from "./Suggestion"

export default function Suggestions() {
    let suggestionsArray = [
        {userSuggestion: 'bad.vibes.memes', userImg: 'assets/img/bad.vibes.memes.svg', reason: 'Segue você'},
        {userSuggestion: 'chibirdart', userImg: 'assets/img/chibirdart.svg', reason: 'Segue você'},
        {userSuggestion: 'razoesparaacreditar', userImg: 'assets/img/razoesparaacreditar.svg', reason: 'Novo no Instagram'},
        {userSuggestion: 'adorable_animals', userImg: 'assets/img/adorable_animals.svg', reason: 'Segue você'},
        {userSuggestion: 'smallcutecats', userImg: 'assets/img/smallcutecats.svg', reason: 'Segue você'}

    ]

    const setSuggestions = suggestionsArray.map(suggestion => <Suggestion userSuggestion={suggestion.userSuggestion} userImg={suggestion.userImg} reason={suggestion.reason}/>)

    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
        {setSuggestions}
            
        </div>
    )
}