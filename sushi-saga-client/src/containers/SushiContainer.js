import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  
  const renderSushis = () => {
  return props.sushis.map(sushi => { 
      const isEaten = props.usedPlates.includes(sushi.id)
    return <Sushi id={sushi.id} key={sushi.id} name={sushi.name} price={sushi.price} image_url={sushi.img_url} decrementPrice={props.decrementPrice} isEaten={isEaten}/> })
  }


  return (
    <Fragment>
      <div className="belt">
        {renderSushis()}
        <MoreButton addSushiBtn={props.more4}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer