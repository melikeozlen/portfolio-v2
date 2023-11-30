import { useState, useRef } from 'react'
import EducationCourse from './components/education-course'
import Experience from './components/experience'
import Introduction from './components/introduction'
import Learning from './components/learning'
import MyProject from './components/my-project'
import SocialSideBar from './components/social-side-bar'
import { flutterimg, postgresql, todoimg } from './data/config'
import useScrollSpy from './hook/menu'

function App() {

  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const sectionRefs = [section1Ref, section2Ref, section3Ref, section4Ref];

  const activeSection = useScrollSpy(sectionRefs);

  const data = [
    { url: "https://github.com/melikeozlen/Portfolio-MernStack", color: "#ff6565", icon: "fa-solid fa-database", title: "Portfolio", subtile: "Mern", content: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB", "Tailwind"] },
    { url: "https://github.com/melikeozlen/tic-tac-toe-game-flutter", title: "TIC-TAC-TOE", images: flutterimg, subtile: "Flutter", content: ["Flutter", "Dart"] },
    { url: "https://github.com/melikeozlen/SpaceX-GraphQL-Apollo", color: "#a796e1", icon: "fa-solid fa-shuttle-space", subtile: "GraphQL", title: "SpaceX", content: ["GraphQL", "Apollo", "ReactJS"] },
    { url: "https://github.com/melikeozlen/TodoList-ReactRedux", images: todoimg, title: "TODO", subtile: "ReactJS", content: ["ReactJS", "Redux", "Less"] },
    { url: "https://github.com/melikeozlen/PERN-Crud", images: postgresql, title: "CRUD", subtile: "PERN", content: ["ReactJS", "PostgreSQL", "NodeJS", "ExpressJS"] },
    { url: "https://github.com/melikeozlen", icon: "fa-solid fa-angles-right", title: "GITHUB", subtile: "PROFILE", content: ["MORE..."], color: "orange" }
  ];

  const [activeTab, setActiveTab] = useState(0)

  return (
    <main>
      <SocialSideBar activeSection={activeSection} setActiveTab={setActiveTab} activeTab={activeTab} />

      <div id='introduction' className={activeSection == "" ? 'active page Home-p' : 'page Home-p'} ref={section1Ref} style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "50px" }}>
        <Introduction />
        <Learning />
      </div>

      <div id='educationCourse' className='page EducationCourse-p' ref={section2Ref}>
        <EducationCourse />
      </div>

      <div id='experience' className='page Experience-p' ref={section3Ref} style={{ height: "95h", display: "flex", flexDirection: "column", justifyContent: "center", gap: "80px", position: "relative", zIndex: "99" }}>
        <h1 className='name-title'>EXPERIENCE</h1>
        <Experience />
        <br />
        <img style={{ position: "absolute", top: "160px", zIndex: "-1", opacity: "0.2" }} width={"500"} height={"auto"} src="https://tamalsen.dev/wp-content/uploads/2021/12/hello-world-html-code-768x384.png"></img>

      </div>
      <br />
      <div id='myWork' className='page MyWork-p' ref={section4Ref} style={{ position: "relative", zIndex: "1", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <br />
      

        <h1 className='name-title' style={{marginTop:"110px"}}>MY WORK</h1>
        <div className='card-type-two-provider'>
          {data.map((item, index) => (
            <MyProject key={index} {...item} />
          ))}

        </div>
        <img style={{ position: "absolute", top: "60px", zIndex: "-1", opacity: "0.2" }} width={"500"} height={"auto"} src="https://tamalsen.dev/wp-content/uploads/2021/12/hello-world-html-code-768x384.png"></img>
      </div>

    </main>
  )
}

export default App
