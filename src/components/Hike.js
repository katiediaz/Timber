import React from "react";
import './Hike.css'

const Hike = (props) => {
  const onBoardIsSelected = (e) => {
    props.readSelectedBoard(e.target.value, props.title)
  }
 
  return (
    <option value={props.id} onClick={onBoardIsSelected}>
      {props.id}. {props.title}
    </option>
  )
}

export default Hike;