
import Greet from './images/About.jpg';
import Greet2 from './images/Aboutus2.jpeg';
import Greet3 from './images/Aboutus3.jpeg'




export default function AboutContent(){

     // alert button
    // const clickHandler1 = ()=> alert('Done Successfuly');
    const clickHandler2 = () => alert ('submitted Successfully');



    return(
      
        <div className="container main mt-3 shadow p-3 mb-5 bg-body-tertiary rounded ">
           <div className="row">
            <div className="col-12 col-lg-8   ">
              <div className="card border-white w-80  " >
                <div className="card-body">
                  <h5 className="card-title"><b>Company Handbook</b></h5>
                </div>
                 <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src={Greet} className="d-block w-100 " alt="..."/>
                    </div>
                    <div className="carousel-item">
                      <img src={Greet2} className="d-block w-100 " alt="..."/>
                    </div>
                    <div className="carousel-item">
                      <img src={Greet3} className="d-block w-100" alt="..."/>
                    </div>
                  </div>
                </div>
               </div>
            </div>

       <div className="card col-lg-4  ">
        <div className="card-body">
          <h5 className="card-title"><b>About the Handbook</b></h5>
          <p className="card-text">Whether you have just joined our staff or have been at Acme Ltd. for a while, we re confident that you will find our
             company a dynamic and rewarding place in which to work and we look forward to a productive and successful association.
            you can browse the handbook below or you can start here:</p>
                
         <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalToggleLabel">Handbook</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                Successfully Ordered
              </div>
              <div className="modal-footer">
                <button className="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
         </div>
         <a className="btn btn-primary d-grid " data-bs-toggle="modal" href="#exampleModalToggle" role="button">Add to Cart</a>

        <a href className="btn btn-primary d-grid mt-4" role="button" onClick={clickHandler2}>Submit</a>
         
        </div>
      </div> 
      </div>
     
    </div>

    );
 }


 