import { FC } from "react";
import '../card.css'
interface MyProjectProps {
    icon?: string;
    title: string;
    subtile: string;
    content: string[];
    images?: string;
    color?: string;
    url:string;
}

const MyProject: FC<MyProjectProps> = ({ icon, title, subtile, content, images, color,url }) => {
    return (
        <div className='cardss'>
            <span style={{ marginLeft: "20px", display: "flex", justifyContent: "start", alignItems: "center", gap: "40px" }}>
                {icon ? <i style={{ fontSize: "30px", color: `${color}` }} className={icon}></i>
                    :
                    <img src={`${images}`}></img>
                }
                <h2 className='project-title'><span style={{color:"white"}}> {title.toUpperCase()} </span>
                    <br /> {subtile.toUpperCase()}  <a href={url} target="_blank"><i  style={{ color: "white", fontSize:"15px", fontWeight:"600" }} className="fa-solid fa-link"></i></a>
                </h2>
            </span>

            <div className='card-type-2'>
                <p style={{ lineHeight: "1.4em", width: "280px" }}><code>{content.join(" , ")}</code></p>
            </div>
        </div>
    )
}

export default MyProject