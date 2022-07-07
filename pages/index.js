import CardTemplate from "../components/cards/cardTemplate"
import ButtonLoad from "../components/buttonLoad"
export default function Main(){
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