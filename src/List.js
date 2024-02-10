import React from 'react'

 const List = ({data}) => {
  return (
    <div>
        <ol>

        {
            data.map((value,index)=>{
                return <li key={`li_${index}`}>{value}</li>
            })
        }
        </ol>
        
      
        
        </div>
  )
}
export default List
