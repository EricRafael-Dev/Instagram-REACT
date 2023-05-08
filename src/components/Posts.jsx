import Post from "./Post"

export default function Posts() {

    let postsContent = [
        { user: 'meowed', userImg: 'assets/img/meowed.svg', contentPost: 'assets/img/gato-telefone.svg', likes: '12.423' },
        { user: 'barked', userImg: 'assets/img/barked.svg', contentPost: 'assets/img/dog.svg', likes: '162.458' },
        { user: 'southamericamemes', userImg: 'assets/img/download (1).jpeg', contentPost: 'assets/img/post-southamericamemes.jpeg', likes: '18.652' },
        { user: 'poze-rx', userImg: 'assets/img/9b2ce18531b9395e1a4ccac017610e08.jpg', contentPost: 'assets/img/poze-post.jpg', likes: '729.485' }
    ]

    const postsingle = postsContent.map(postData => <Post user={postData.user} userImg={postData.userImg} contentPost={postData.contentPost} likes={postData.likes} />)           

    return (
        <div class="posts">
            {postsingle}
        </div>
    )
}

