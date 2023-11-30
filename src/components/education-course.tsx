const EducationCourse = () => {

    const educationData = [
        {
            title: 'Computer Engineer',
            institution: 'Sakarya University',
            type: 'EDUCATION',
            isComplate: true
        },
        {
            title: 'Front-End | React Bootcamp',
            institution: 'TechCareer',
            type: 'BOOTCAMP',
            isComplate: true

        },
        {
            title: 'Advanced React: Design System, Design Patterns, Performance',
            institution: 'Udemy | CodeLicks Academy',
            type: 'ONLINE COURSE',
            isComplate: false
        },
        {
            title: 'From Scratch Practical React Development: Hooks, Redux & Firebase',
            institution: 'Udemy | Sadık Turan',
            type: 'ONLINE COURSE',
            isComplate: true

        },
        {
            title: 'Turkcell Women Crafting the Future',
            institution: 'Turkcell',
            type: 'COURSE',
            isComplate: true

        },
    ];
    return (
        <>

            <div className="" style={{ height: "100%", width: "70%", margin: "auto", display: "flex", flexDirection: "column", position: "relative", zIndex:"1", justifyContent: "center", alignItems: "center", gap: "50px" }}>
                <h1 className='name-title'>EDUCATION
                    &
                    COURSE</h1>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px", marginBottom: "40px" }}>
                    <i style={{ color: "greenyellow", fontSize: "10px" }} className="fa-solid fa-circle"></i>:&emsp; Completed
                    <i style={{ color: "#f58a00", fontSize: "10px" }} className="fa-solid fa-circle"></i>:&emsp; Continues
                </div>

                <br />
                <ul style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
                    {
                        educationData.map(item => (
                            <li key={item.title}>
                                <span style={{ display: 'flex', justifyContent: 'start', alignItems: 'center', gap: '5px' }}>
                                    <i style={{ color: !item.isComplate  ? '#f58a00' : 'greenyellow', fontSize: '10px' }} className="fa-solid fa-circle"></i>
                                    <h4 style={{ padding: '0', margin: '0', color: 'white' }}>{item.title}</h4>
                                </span>
                                &emsp; <code>{item.institution}</code>
                                <br />
                                &emsp; <q style={{ fontWeight: '900', fontSize: '12px' }}>{item.type}</q>
                            </li>
                        ))
                    }
                </ul>
                <img style={{ position: "absolute", top: "100px", zIndex: "-1", opacity: "0.2" }} width={"500"} height={"auto"} src="https://tamalsen.dev/wp-content/uploads/2021/12/hello-world-html-code-768x384.png"></img>

            </div>
        </>
    )
}

export default EducationCourse