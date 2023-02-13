import ContactArt from "../assets/Contact Art.svg";

export default function Contact(){
    return (
        <section className="contact box">
            <div className="contactName">
                <div className="line"></div>
                <p>Get In Touch</p>
            </div>
            <div className="contactText">
                Let's Work Together.
            </div>
            <p className="contactLink"><i class="fa-regular fa-envelope fa-1x"></i>dhruvil@criven.studio</p>
            <div className="socialLinks">
                <a href="https://www.instagram.com/dhruvil.designz/" className="socials"><i class="fa-brands fa-instagram fa-1x"></i>Instagram</a>
                <a href="https://www.linkedin.com/in/dhruvil-patel-715a43206/" className="socials"><i class="fa-brands fa-linkedin-in fa-1x"></i>Linkedin</a>
                <a href="https://twitter.com/Dhruvil69422716" className="socials"><i class="fa-brands fa-twitter fa-1x"></i>Twitter</a>
                <a href="https://dribbble.com/_Dhruvil_" className="socials"><i class="fa-brands fa-dribbble fa-1x"></i>Dribbble</a>
                <a href="https://www.behance.net/dhruvilpatel17" className="socials"><i class="fa-brands fa-behance fa-1x"></i>Behance</a>
            </div>
            <img className="contactArt" src={ContactArt} alt="Contact Art"/>
        </section>
    )
}