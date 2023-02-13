import Logo from "../assets/Logo.svg"

export default function Footer(){
    return (
        <section className="footer box">
            <div className="navBar footerNav">
                <img src={Logo} alt="My Logo" className="logo" />
            </div>
            <div className="footerLine"></div>
            <div className="endSec">
                <p>©️2023, DhruvilDesignz.</p>
                <p className="backToTop">Back to top</p>
            </div>
        </section>
    )
}