import skillData from "./SkillData";
import './Skills.css';

function Skills(){
    return(
        <div className="skills-main-sec">
            <div className="container">
            <h2 className="text-white mb-4">My Skills</h2>
        {
        skillData.map((item) => (
                <div className="skills-bar" key={item.id}>
   <div className="skills-title">
    <h4 className="text-white">{item.name}</h4>
    <span className="text-white">{item.percentage}%</span>
</div>

    <div className="progress">
        <div
            className="progress-fill"
            style={{ width: `${item.percentage}%` }}
        ></div>
    </div>
</div>
            ))
        }
    </div>
    </div>
    )
}

export default Skills;