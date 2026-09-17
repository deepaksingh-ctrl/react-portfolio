import './Experience.css';
import ExperienceData from './ExperienceData';

function Experience(){
    return(
        <>
        <section className="portfolio-journey">
    <div className="journey-container">

        <div className="journey-heading">
            <span className="journey-subtitle">MY JOURNEY</span>
            <h2>Experience & Education</h2>
            <p>
                A timeline of my professional experience, education,
                and the skills I've developed along the way.
            </p>
        </div>

        <div className="journey-timeline">
{

    ExperienceData.map((item, index) => (

           <div className={ `journey-item ${
           index % 2 === 0 ? "journey-left" : "journey-right" 
           }`} key={item.id}>
                <div className="journey-card">
                    <span className="journey-date">{item.year}</span>
                    <span className="journey-type">{item.exporedu}</span>

                    <h3>{item.profile}</h3>
                    <h4>{item.companyname}</h4>

                    <p>
                       {item.description}
                    </p>

                    <div className="journey-tags">
                        <span>{item.jobtag1}</span>
                        <span>{item.jobtag2}</span>
                        <span>{item.jobtag3}</span>
                        <span>{item.jobtag4}</span>
                    </div>
                </div>
            </div>
    ))
            
 

}
            {/* <div className="journey-item journey-right">
                <div className="journey-card">
                    <span className="journey-date">2022 - 2024</span>
                    <span className="journey-type">EXPERIENCE</span>

                    <h3>Web Designer</h3>
                    <h4>Company Name</h4>

                    <p>
                        Designed and developed responsive websites,
                        landing pages and custom WordPress interfaces
                        for different business requirements.
                    </p>

                    <div className="journey-tags">
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>Bootstrap</span>
                        <span>WordPress</span>
                    </div>
                </div>
            </div>

         
            <div className="journey-item journey-left">
                <div className="journey-card">
                    <span className="journey-date">2018 - 2021</span>
                    <span className="journey-type">EDUCATION</span>

                    <h3>Bachelor's Degree</h3>
                    <h4>University Name</h4>

                    <p>
                        Studied computer science and developed a strong
                        foundation in programming, web technologies and
                        software development.
                    </p>

                    <div className="journey-tags">
                        <span>Programming</span>
                        <span>Database</span>
                        <span>Web Development</span>
                    </div>
                </div>
            </div>

        
            <div className="journey-item journey-right">
                <div className="journey-card">
                    <span className="journey-date">2016 - 2018</span>
                    <span className="journey-type">EDUCATION</span>

                    <h3>Web Development Course</h3>
                    <h4>Institute Name</h4>

                    <p>
                        Learned the fundamentals of web development,
                        frontend technologies and responsive website
                        design.
                    </p>

                    <div className="journey-tags">
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>JavaScript</span>
                    </div>
                </div>
            </div> */}

        </div>
    </div>
</section>
        
        </>
    )
}

export default Experience;