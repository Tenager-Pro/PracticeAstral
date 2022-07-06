import Content from "../components/list"
import ButtonLoad from "../components/buttonLoad"
import Card1 from "../components/cards/card1"

export default function Home(){
  return(
    <div>
      <div className="CardsWrapper">
        <Card1/>
        <Card1/>
        <Card1/>
        <Card1/>
        <Card1/>
        <Card1/>
        <Card1/>
      </div>
      <ButtonLoad/>
    </div>
  )
}