import Logo from "../assets/Logo.svg"
import Profile from "../assets/Profile.svg"

export default function Hero() {
    return (
        <section className="hero">
            <div className="navBar">
                <img src={Logo} alt="My Logo" className="logo" />
                <div className="menuPanel"></div>
                <i class="fa-solid fa-bars menu"></i>
                <i class="fa-solid fa-xmark close"></i>
                <div className="navItems">
                    <p className="navItemH">Home</p>
                    <p className="navItemP">Projects</p>
                    <p className="navItemA">About</p>
                    <p className="navItemC">Contact</p>
                </div>
            </div>

            <div className="heroText">
                <div className="heroName">
                    <div className="line"></div>
                    <p>Dhruvil Patel</p>
                </div>
                <div className="heroSkills">
                    <p>UI/UX DESIGNER .</p>
                    <p>PRODUCT DESIGNER .</p>
                    <p>DIGITAL MARKETER .</p>
                    <p>WEB DEVELOPER .</p>
                </div>
                <div className="heroSocial">
                    <a href="https://dribbble.com/_Dhruvil_"><div className="dribbbleCont"><i class="fa-brands fa-dribbble fa-1x"></i>Dribbble</div></a>
                    <a href="https://www.instagram.com/dhruvil.designz/"><div className="instaCont"><i class="fa-brands fa-instagram fa-1x"></i>Instagram</div></a>
                </div>
            </div>

            <div className="heroArt">
                <div className="triOne"></div>
                <div className="mainRect">
                    <div className="triTwo"></div>
                    <img className="profileImg" src={Profile} alt="Profile"/>
                </div>
            </div>
        </section>
    )
}