const Introduction = () => {
    return (
        <section className='introduction' >
            <h1 className='name-title'>MELİKE ÖZLEN</h1>
            <h2 style={{ fontSize: "26px", fontWeight: "500", color:"yellow" }}>Front-End | React Developer</h2>
            <p className='about-title' style={{ textAlign: "center" }}>
                {/* Hey, my name is Melike Özlen and I use <b><code>"melike.dev"</code></b>  as my nickname across social medias. */}
                <br />
                26, Turkiye.
            </p>
            <br />
            <br />
            <a className="about-text" style={{ width: "70%", fontSize:"18px" }}>
                Hello! I'm Melike. I discovered my passion for coding through Tumblr during my high school years, and I have been nurturing this enthusiasm as a professional front-end developer for 1.5 years. Focused on continuous <b>self-improvement</b> and learning, I closely follow industry changes.
                I find joy in spending time at the computer, where coding is not just a job but also a source of pleasure for me. I enjoy <b>problem-solving</b>  and communicating with customers because each project presents a new learning opportunity and a chance to find creative solutions.
                Collaboration, contributing to <b>teamwork</b>, and working towards enhancing user experiences are just a few of the important goals for me.
            </a>
        </section>
    )
}

export default Introduction