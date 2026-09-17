import Servicescard from "./ServiceCard";
import './Service.css';

function Services(){
    return(

    <div className="services-sec">
        <div className="container">
            <h2 className="text-center">Our Services</h2>
        <div className="row">
              {

             
                   Servicescard.map((item) => (
                    <div className="col-lg-4" key={item.id}>
                        <div className="service-box">
                            <img src={item.serviceBoxImage}/>
                            <h3>{item.serviceTitle}</h3>
                            <p>{item.serviceDescription}</p>
                            </div>
                  </div>
                   
                    ))
                   
           
             }
        </div>
        </div>
    </div>

 
    )
    
}

export default Services;