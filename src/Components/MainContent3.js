import React from 'react';
import Greet1 from "./images/Handbook1.jpg"
import Greet2 from "./images/Handbook2.jpeg"
import Greet3 from "./images/Handbook3.jpg"


export default function MainContent2(){
  return(
  <div className="container col-lg-4 col-md-12 col-sm-12" >
  <div className="card-colums ">
     
    
     <div className="card shadow p-3 mb-5 bg-body-tertiary rounded">
      <div className="card-body">
        <div className="row" >
          <div className="col-12 col-lg-6">
          <b>Main People</b>
          </div>


          <div className="card ">
            
              <div  className="row"> 
                <div className="col-12 col-lg-4">
                <img src={Greet1} width={80} height={70} className='rounded-circle'/>
                  </div>
                  <div className="col-12 col-lg-8">
                  <h5 className="card-text"><b>Alexies Fox</b></h5>
                  <p>CEO</p>
                </div>
              </div>
            
          </div>


          <div className="card " >
           
              <div  className="row"> 
                <div className="col-12 col-lg-4 mt-1">
                <img src={Greet2} width={80} height={75} className ='rounded-circle'/>
                </div>
                <div className="col-12 col-lg-6">
                  <h5 className="card-text"><b>Alice Romero</b></h5>
                  <p>Sales Representative</p>
                </div>
              </div>
            
          </div>


           <div className="card ">
              
                <div  className="row"> 
                  <div className="col-12 col-lg-4 mt-1 ">
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
        <div className="card-body">
          <div className="row" >
              <div className="col-12 col-lg-4">
              <b>Features</b>
              </div>

              <div className="card ">
                
                    <div  className="row"> 
                        <div className="col-12 col-lg-4 mt-4">
                        <img src={Greet3} width={80} height={75} className ='rounded-circle'/>
                        </div>
                          <div className="col-12 col-lg-8 ">
                            <h5 className="card-text"><b>Excellence</b></h5>
                            <p>We hav high standards.We execute on the details.We take pride in our work</p>
                          </div>
                    </div>
                  
              </div>


              <div className="card ">
                  <div  className="row"> 
                      <div className="col-12 col-lg-4 mt-4">
                      <img src={Greet3} width={80} height={75} className ='rounded-circle'/>
                      </div>
                      <div className="col-12 col-lg-8">
                        <h5 className="card-text"><b>Integrity</b></h5>
                        <p>Do the right thing.What do you do when no one else is looking? 
                          honesty and focus on putting ourselves in</p>
                      </div>
                   </div>
                 
               </div>


               <div className="card ">
                
                   <div  className="row"> 
                      <div className="col-12 col-lg-4 mt-4">
                      <img src={Greet2} width={80} height={75} className ='rounded-circle'/>
                      </div>
                      <div className="col-12 col-lg-6">
                       <h5 className="card-text"><b>Trust</b></h5>
                       <p>We speak the truth. We believe in each other.We do what we say we will do</p>
                      </div>
                   </div>
                 
                </div>

              </div>
            </div>
          </div>
       </div>
       
       </div>
    
)
}