import { FC } from "react";

interface SocialSideBarProps {
    activeSection: string;
}

const SocialSideBar: FC<SocialSideBarProps> = ({ activeSection }) => {
    return (
        <>
            <div id='social-side-bar'>
                <a href='https://github.com/melikeozlen' target='_blank'><i className='fab fa-github' /></a>
                <a href='https://www.instagram.com/melike.dev/' target='_blank'><i className='fab fa-instagram' /></a>
                <a href='https://www.linkedin.com/in/melikeozlen/' target='_blank'><i className='fab fa-linkedin' /></a>
            </div>

            <div id='social-side-bar-2'>
                <a className={activeSection == "introduction" ? "active-tab" : ""} onClick={() => {

                    const targetElement = document.querySelector(".Home-p");
                    if (targetElement) {
                        // ScrollIntoView fonksiyonu ile smooth scroll yapılır
                        targetElement.scrollIntoView({ behavior: 'smooth' });
                    }
                }}> <i className="fa-solid fa-0"></i> <i className="fa-solid fa-0"></i><br /><code>HOME</code>  </a>
                <a className={activeSection == "educationCourse" ? "active-tab" : ""} onClick={() => {

                    const targetElement = document.querySelector(".EducationCourse-p");
                    if (targetElement) {
                        // ScrollIntoView fonksiyonu ile smooth scroll yapılır
                        targetElement.scrollIntoView({ behavior: 'smooth' });
                    }
                }}> <i className="fa-solid fa-0"><i className="fa-solid fa-1"></i></i><br /><code>EDUCATION <br />& <br /> COURSE</code></a>
                <a className={activeSection == "experience" ? "active-tab" : ""} onClick={() => {

                    const targetElement = document.querySelector(".Experience-p");
                    if (targetElement) {
                        // ScrollIntoView fonksiyonu ile smooth scroll yapılır
                        targetElement.scrollIntoView({ behavior: 'smooth' });
                    }
                }}>  <i className="fa-solid fa-0"></i><i className="fa-solid fa-2"></i><br /><code>EXPERIENCE</code></a>
                <a className={activeSection == "myWork" ? "active-tab" : ""} onClick={() => {

                    const targetElement = document.querySelector(".MyWork-p");
                    if (targetElement) {
                        // ScrollIntoView fonksiyonu ile smooth scroll yapılır
                        targetElement.scrollIntoView({ behavior: 'smooth' });
                    }
                }}> <i className="fa-solid fa-0"><i className="fa-solid fa-3"></i></i><br /><code>MY WORK</code></a>
            </div>
        </>
    )
}

export default SocialSideBar