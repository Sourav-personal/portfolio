import React from "react"
import '../../assets/styles/main.css'
import Mail from '../../assets/icons/envelope-solid.svg'
import Scholer from '../../assets/icons/google-scholar-brands.svg'
import Linkedin from '../../assets/icons/linkedin-brands.svg'
import Orcid from '../../assets/icons/orcid-brands-solid.svg'

const Home: React.FC = () => {
    return(
        <>
        <div className="Home-container">
            <div className="home-left">
                <div className="profile-image"></div>
                <div className="left-heading">Sourav Mohanto</div>
                <div className="designation">
                    <div>Senior Research Fellow (SRF), and </div>
                    <div>Doctoral candidate</div>
                    <div>Department of Pharmaceutics</div>
                    <div>Yenepoya Pharmacy College &</div>
                    <div>Research Centre, Yenepoya (Deemed</div>
                    <div>to be University), India</div>
                </div>
                <div className="social-icon-group">
                    <a href="mailto:mohanto111@gmail.com" className="socal-icon"><img className='icon' src={Mail} alt="Star Icon" /></a>
                    <a href="https://scholar.google.com/citations?user=Vi1bFFoAAAAJ&hl=en" target="_blank" className="socal-icon"><img className='icon' src={Scholer} alt="Star Icon" /></a>
                    <a href="https://www.linkedin.com/in/sourav-mohanto-mrsc-04083b144/" target="_blank" className="socal-icon"><img className='icon' src={Linkedin} alt="Star Icon" /></a>
                    <a href="https://orcid.org/0000-0001-5599-5445" target="_blank" className="socal-icon"><img className='icon' src={Orcid} alt="Star Icon" /></a>
                </div>
            </div>
            <div className="home-right">
                <div className="right-heading">About me</div>
                <div className="right-content"> <b>Sourav Mohanto</b> is currently pursuing PhD in pharmaceutical sciences as a Senior Research Fellow at Yenepoya (Deemed to be University), India. Mr. Mohanto has obtained Bachelor of Pharmacy (B. Pharm), and Master of Pharmacy (M. Pharm) in the domain of pharmaceutical sciences and pharmaceutics from Central University of Sikkim, India. He has also obtained Diploma in Pharmaceutical Production Management (DPPM) from Institute of Pharmaceutical Education and Research (IPER), India with a gold medal. Mr. Mohanto has served a various role, i.e., Patent Analyst, Junior Assistant Professor, Project associate, etc., in several private organizations. Mr. Mohanto is mainly interested and investigate on drug delivery science, biomaterial research, inorganic and metal oxide nanoparticles, biological macromolecules, phytomedicine for inflammatory disorders. As a young researcher, he obtained over several indexed publications, book chapters, patents, etc., in his career. In addition, Mr. Mohanto has also contributed in writing few books for pharmacy curriculum in India. Currently, he is an active member of Royal Society of Chemistry (RSC), American Chemical Society, Association of Pharmaceutical Researchers, Life-time member of Association of Pharmaceutical Teachers of India, etc. Mr. Mohanto is also a registered pharmacist in West Bengal Pharmacy Council, India. Mr. Mohanto has been recognized for his various contributions in conference presentation, organizing committee member, etc., as National and International levels. </div>
                <div className="research-container">
                    <div className="research-heading">Research interest :</div>
                    <ul>
                        <li>Drug delivery system</li>
                        <li>Biomaterials</li>
                        <li>Inorganic nanoparticles</li>
                        <li>Regenerative medicine</li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home