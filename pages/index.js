import List from "../components/list"
import ButtonLoad from "../components/buttonLoad"
import CardTemplate from "../components/cards/cardTemplate"

export default function Home(){
  return(
    <div>
      <div className="CardsWrapper">
        <CardTemplate/>
        <CardTemplate/>
        <CardTemplate/>
        <CardTemplate/>
        <CardTemplate/>
        <CardTemplate/>
 
      </div>
      <ButtonLoad/>
    </div>
  )
}