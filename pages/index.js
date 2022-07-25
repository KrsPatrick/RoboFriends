import CardList from "../components/CardList"
import Scroll from "../components/Scroll"

export default function Home() {
  return (
    <div>
    <h1>Robofriends</h1>
    <Scroll>
    <CardList/>
    </Scroll>
    </div>
  )
}
