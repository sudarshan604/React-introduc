
import Parent from "./Parent";

function Grand(){

  console.log('grandparent')
   return (
     <div>
         <Parent />
         <Parent/>

     </div>
   )

}

export  default Grand