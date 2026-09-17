import AboutImg from '../../assets/about-images/about.jpg';
import './About.css';
import { useState } from 'react';

 const achievements = [
        {
            id: 1,
            title: "2+",
            subtitle: "Experience",      
        },

        {
            id: 2,
            title: "30+",
            subtitle: "Projects",      
        },

        {
            id: 3,
            title: "React",
            subtitle: "Developer",      
        }
];
function About(){

   const [count, setCount] = useState(0);

    return(

        <section className="about-section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <img src={AboutImg} alt='About Image' className='img-fluid'/>
                    </div>
                    <div className='col-lg-6'>
                        <div className='about-content'>
                        <h2>About Me</h2>
            <h3>React & WordPress Developer</h3>
            <p className='mb-0'>
                I'm a frontend developer passionate about building modern web
                applications using React and WordPress. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. 
            </p>
            <div className='achievement-sec'>
               <div className="row g-3 mt-4">
    {achievements.map((item) => (
        <div key={item.id} className="col-md-4">
            <div className="achievement-box">
                <h4>{item.title}</h4>
                <h5>{item.subtitle}</h5>
            </div>
        </div>
    ))}
</div>
              
            </div>
            
                        </div>
                    <button onClick={()=> setCount(count - 1)}> Decrement </button>
                    <button onClick={()=> setCount(count + 1)}> Increment </button>
                    <h2>{count}</h2>


                    </div>
                </div>
            </div>


        </section>
 
    )
}
export default About;