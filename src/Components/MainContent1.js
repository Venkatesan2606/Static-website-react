import React from 'react'
import Greek1 from './images/Handbook1.jpg'
import Greek2 from './images/Handbook2.jpeg'
import Greek3 from './images/Handbook3.jpg'
import cardData from './Fleek'


export default function MainContent1 (){

     return(
         
         <div className=" col-lg-4 col-md-12 col-sm-12 ">
         { cardData.map((content,index) => {
                return(
                  <div>
                    <div className="card-colums">
                      <div className="card shadow p-3 mb-5 bg-body-tertiary rounded ;">
                        <div className='card-title'>{content.title}</div>
                          <div className='card-body'>
                            <p>{content.listItems.map((v) => (<li>{v}</li>))}</p>
                          </div>
                       </div>
                     </div>
                     </div>
                  
                  )
                })
              }
                   
                  
              <div className="card shadow p-3 mb-5 bg-body-tertiary rounded; ">
                 
                     <div className="row" >
                        <div className="col-12 col-lg-5">
                           <b>Main People</b>
                      </div>

                      <div className="card">
                        <div  className="row"> 
                           <div className="col-12 col-lg-4 ">
                           <img src={Greek1} width={80} height={75} className ='rounded-circle'/>
                           </div>
                        <div className="col-12 col-lg-8">
                          <h5 className="card-text"><b>Alexies Fox</b></h5>
                          <p>CEO</p>
                        </div>
                     </div>
                  </div>


                <div className="card ">
                  
                    <div  className="row"> 
                      <div className="col-12 col-lg-4 ">
                      <img src={Greek2} width={80} height={75} className ='rounded-circle'/>
                      </div>
                      <div className="col-12 col-lg-6">
                        <h5 className="card-text"><b>Alice Romero</b></h5>
                        <p>Sales Representative</p>
                      </div>
                    </div>
                    
                </div>


                 <div className="card ">
                   
                      <div  className="row"> 
                        <div className="col-12 col-lg-4 mt-2">
                        <img src={Greek3} width={80} height={75} className ='rounded-circle'/>
                        </div>
                        <div className="col-12 col-lg-6">
                        <h5 className="card-text"><b>Anthony Ruckman</b></h5>
                        <p>Computer Technician</p>
                        </div>
                      </div>
                    </div>  
                  
                </div>
             </div>   
             
                    
           
   
         <div className="card shadow p-2 mb-5bg-body-tertiary rounded">
          <div className="col-12 col-lg-10">
            
            <h5 className="card-title"><b>Conculsion</b></h5>
            <p>The conclusion paragraph should restate your key supporting ideas you discussed throughout the work  </p>
          </div>
        </div>  
        
        </div>
        
   )
   } 
