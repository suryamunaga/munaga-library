import React,{Fragment,useState} from 'react'
const AccordianItem=({title,body,activeAccordianItemNo,index,fnClick})=>{
           
    return <>
       <h3 onClick={()=>fnClick(index)} className="text-white bg-primary cursor-pointer">{title}</h3>
       {activeAccordianItemNo==index && <h5>{body}</h5>}
    </>
}

 const Accordion = ({data}) => {
    const [activeAccordianItemNo,setActiveAccordianItemNo]=useState(0);
    const fnClick=(accordianItemNo)=>{
        if(activeAccordianItemNo==accordianItemNo){
         setActiveAccordianItemNo(-1)
        }else{
         setActiveAccordianItemNo(accordianItemNo)
        }
   }
   return <>
      {
         data?.map((obj,index)=>{
            return <AccordianItem key={index} {...obj} fnClick={fnClick} index={index} activeAccordianItemNo={activeAccordianItemNo} />
         })
      }
   </>
}
export default Accordion

