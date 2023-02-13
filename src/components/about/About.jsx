import skills from "../../data/skills";
import Skill from "./skill";

export default function About(){
    return (
        <section className="about box">
                <div className="aboutName">
                    <div className="line"></div>
                    <p>About Me</p>
                </div>
                <div className="aboutText">
                    I’m passionate about designing, exploring creative world, and business making.
                </div>
                <div className="aboutDesc">
                    <div className="aboutDescText">
                        <div className="aboutPos">Founder of <a className="companyLink" href="https://criven.studio">Criven Studios</a></div>
                        <a className="aboutView" href="https://drive.google.com/file/d/1xWCogvrUy-XvEutuMFNOLdtkeyscfDDD/view?usp=sharing"><i class="fa-solid fa-file fa-1x"></i> My Resume</a>
                    </div>
                    <div className="aboutDescSkills">
                        <p className="skillsTitle">Skills</p>
                        <div className="skills">
                            {skills.map(skill => (
                                <Skill key={skill.id} name={skill.name}/>
                            ))}
                        </div>
                    </div>
                </div>
        </section>
    )
}