import Story from "./Story"

export default function Stories() {
    let storiesIcon = [
        { user: 'meowed', userImg: 'assets/img/meowed.svg' },
        { user: 'barked', userImg: 'assets/img/barked.svg' },
        { user: 'southamericamemes', userImg: 'assets/img/download (1).jpeg' },
        { user: 'poze-rx', userImg: 'assets/img/9b2ce18531b9395e1a4ccac017610e08.jpg' },
        { user: '9gag', userImg: 'assets/img/9gag.svg' },
        { user: 'nathanwpylestrangeplanet', userImg: 'assets/img/nathanwpylestrangeplanet.svg' },
        { user: 'respondeai', userImg: 'assets/img/respondeai.svg' },
        { user: 'wawawicomics', userImg: 'assets/img/wawawicomics.svg' },
        { user: 'filomoderna', userImg: 'assets/img/filomoderna.svg' }
    ];

    const storySingle = storiesIcon.map(story => <Story user={story.user} userImg={story.userImg}/>)
    
    return (
        <div class="stories">

            {storySingle}

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}

