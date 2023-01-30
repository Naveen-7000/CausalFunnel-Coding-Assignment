import React from 'react'

const Label = (props) => {
   const {name,color} = props;
  return (
    <div style={{
        backgroundColor: `#${color}`,
        borderRadius:"2rem",
    }}>
       <div style={{
         fontSize:12,
         fontWeight:500,
         paddingLeft:8,
         paddingRight:8,
         paddingTop:2,
         paddingBottom:2,
       }}> {name} </div>
    </div>
  )
}

export default Label