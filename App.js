import React from "react";

const App1 = () => {
    

    const [array,setarraydata ]= React.useState(['ran','shaym','kk','hh','sa','sks','as','jsi'])
    
    const [newArray,setnewArray] = React.useState([])
    
    
const getClicked = () => {
    
       
       
         if(array.length===0){
             return
         }else{
            setnewArray([...newArray,array[0]])
            array.shift()
         }

           
           
        
    
   
    
}


const removeArray =  (el) => {
   
    setarraydata([...array,el])
    
   setnewArray(newArray.filter(e => e !==el) )
  

 }
 
   




console.log(array)

  
    

    return (<> <button onClick={getClicked}>Add me</button>
  <ul>  {newArray.map((el,i) => {
        return <div key={i}>
        <li>
            {el}
        </li>
        <button onClick={() =>removeArray(el)}>RemoveItem</button>
         </div>
    }) }
    
</ul>

    
    </>)

}
export default App1