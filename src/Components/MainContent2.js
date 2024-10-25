import React from 'react';
import Greet1 from "./images/Handbook1.jpg"
import Greet2 from "./images/Handbook2.jpeg"
import Greet3 from "./images/Handbook3.jpg"
import newData from './Data';



export default function MainContent3(){
  return(
  
    <div className="container  col-lg-4 col-md-12 col-sm-12">
    {newData.map((values,index)=>{
      return(
        <div>
            <div className="card-colums ">
              <div className="card shadow p-3 mb-5 bg-body-tertiary round;">
                <div className='card-title'>{values.title}</div>
                  <div className='card-body'>
                  <p>{values.listItems.map((v) => (<li>{v}</li>))}</p>
                  </div>
               </div>
             </div>
            </div>
     
      
   ) 
   })
      }
        

         
        <div className="card shadow p-3 mb-5 bg-body-tertiary rounded; ">
          <div className="card-body">
            <div className="row" >
              <div className="col-12 col-lg-5">
              <b>Main People</b>
              </div>


              <div className="card">
                
                  <div  className="row"> 
                    <div className="col-12 col-lg-4">
                    <img src={Greet1} width={80} height={75} className ='rounded-circle'/>
                      </div>
                      <div className="col-12 col-lg-6">
                      <h5 className="card-text"><b>Alexies Fox</b></h5>
                      <p>CEO</p>
                    </div>
                  </div>
                
              </div>


              <div className="card" margin-top={10}>
               
                  <div  className="row"> 
                    <div className="col-12 col-lg-4 mt-1" >
                    <img src={Greet2} width={80} height={75} className ='rounded-circle'/>
                    </div>
                    <div className="col-12 col-lg-6">
                      <h5 className="card-text"><b>Alice Romero</b></h5>
                      <p>Sales Representative</p>
                    </div>
                  </div>
                
              </div>


               <div className="card " margin-top={10}>
                  
                    <div  className="row"> 
                      <div className="col-12 col-lg-4 mt-2">
                      <img src={Greet3} width={80} height={75} className ='rounded-circle'/>
                      </div>
                      <div className="col-12 col-lg-7">
                      <h5 className="card-text"><b>Anthony Ruckman</b></h5>
                      <p>Computer Technician</p>
                      </div>
                    </div>
                   
                </div>
              </div>
           </div>  
          </div>  
          
         
      
      <div className="card shadow p-3 mb-5 bg-body-tertiary rounded;">
            
        <h5 className="card-title"><b>Review the Entire Handbook</b></h5>
        <p className="card-text">The review process ensures that the information is accurate and easy to comprehand.</p>   
      
    </div>
    </div>
      
  
 )
} 