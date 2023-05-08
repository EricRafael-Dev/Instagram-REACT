import Posts from './Posts'
import Stories from './Stories'
import SideBar from './SideBar'

export default function Allcontent() {
    return (
        <div class="corpo">

            <div class="esquerda">
                <Stories />
                <Posts />
            </div>
            
            <SideBar />

        </div>
    )
}