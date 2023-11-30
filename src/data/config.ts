
import { apollo, portfolio, postgre, sushiAPP, tictocGame, todo } from "./image"

export let navLinks = [
  {
    name: 'About',
    url: '/#about',
  },
  {
    name: 'Experience',
    url: '/#jobs',
  },
  {
    name: 'Work',
    url: '/#projects',
  },
  {
    name: 'Contact',
    url: '/#contact',
  },
]


export let project = [{
  src: sushiAPP,
  name: 'Sushi APP',
  teknology: ["Flutter"],
  content: "Figma deising code with Flutter.",
  link: 'https://github.com/melikeozlen/flutter-sushi-app'
},
{
  src: tictocGame,
  name: 'Tic-Tac-Toe Game',
  teknology: ["Flutter"],
  content: "",
  link: 'https://github.com/melikeozlen/tic-tac-toe-game-flutter'
},
{
  src: portfolio,
  name: 'My Personal Portfolio v1',
  teknology: ["React", "MERN", "Framer Motion"],
  content: "",
  link: 'https://github.com/melikeozlen/Portfolio-MernStack'
},
{
  src: todo,
  name: 'ToDo App',
  teknology: ["React", "Redux Toolkit", "SCSS"],
  content: "",
  link: 'https://github.com/melikeozlen/TodoList-ReactRedux'
},
{
  src: postgre,
  name: 'PERN CURUD',
  teknology: ["PostgreSql", "NodeJS", "ExpresJS", "ReactJS"],
  content: "",
  link: 'https://github.com/melikeozlen/PERN-Crud'
},
{
  src: apollo,
  name: 'SpaceX API',
  teknology: ["ReactJS", "SCSS", "GraphQL", "Apollo"],
  content: "",
  link: 'https://github.com/melikeozlen/SpaceX-GraphQL-Apollo'
}]

export let experience = [{
  year: "2022 JULY - PRESENT", teknology: ['React', 'JavaScript', 'Devextreme', 'CSS', 'Golang', 'Git', 'Docker'], title: 'Front-End Developer', company: 'DIATICS - Digital Intelligence',
  content: `Frontend Developer olarak çalıştım ve kod geliştirme takımında yer aldım.
  Proje süreçlerini planlayarak, takım içinde koordinasyon sağladım.
  Müşterilerle doğrudan iletişim kurarak ihtiyaçları anladım ve çözümler ürettim.
  Problem çözme becerilerimle karşılaşılan zorlukları aştım.
  Analiz yaparak, mevcut projeleri optimize etme ve iyileştirme fırsatları belirledim.`,

},


{
  year: "2018", teknology: ['Java', 'Android'], title: 'Android Developer Intern', company: 'TÜVASAŞ',
  content: `Android uygulama geliştirme.`
},
{
  year: "2017", teknology: ['Active Directory'], title: 'Network System Intern', company: 'MODSOFT',
  content: `Android uygulama geliştirme.`
}]

export let postgresql = `data:image/png;base64,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`
export let flutterimg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEWUlEQVR4nO3ZX2wURRwH8N/u3rW9FuXFIEpJiDExqaS0tBIliA/SYlstf2r50xYrXNtTKNBCb6fy75SIlIY/EqFtYpU/UQvFaqwPRKJGEml8MCYm5cUXE24HHoghqEm10P7Mr+ye05qQnb0W5s77Jr/kcu1c5nMzOzs7B5BKKqn8n7MTAG4BAHqomwCwGBROxCPMqVEAKAJFY9qdvA0A1RLt6m0YVSMkAK5Gol0dAIyojgt7xAUF3GZIYtwWSADcOol2GxIB1xInjtoySADcKxLt1gu4VlA02+0OjiQ7rlai3asC7g1QNNs84tbYU5na7oAkw61OBFyzsEcMSeKcDTdtvpMKt0rA7QJF0yTgXpNol9S4SgG3GxIA97pH3B5QNFuF5zIZ3MsiDrHSwGhLLlrhF5GbQbTMFuTsbeTmMbTYx8jNXrtOITfbMcqakYefxV82p0+hDUICbqNHXASt8BPIzQHkDKXLYn8iZ3sRQZtsXINHXAUADNu4Nrwafg45u+EJNw7akqcCbqWAO4CcLUNuDlEHL/SsxoWFs7Agd6Z0PT3/0aHHZj9YOFk48Sxkk0ccXUNlyM2/CXf+o0rMSPfFc+hERXvXuPOSx5FbIeBo4ShyRk7EbazNxx/P17qqo3uXoK5rDu4UAOiTDXS7Yi4XcPvQYvlomX8Q7qtPVsVwDTV5OGq5u94G+mswK9PvPGmcAQAfTGJkpmgpAPxld+QgXtkxCzmLOrhAxh1cffU8KVwgwzc8VTiZRaZkHO56+AG02KCzoHjBff9F9XCa3xiyP/PsVOHcIEXcIbpHIWfn4sEN9Ndc8xn67/cKd7ddzAsA4HzLh+kN5OZbE3F1VfNwJGq6wn3du+aipmk37M/svVe4iftQuujfE6cl/XHsRm6x215x/ScregDgt/uFm4h06gi9iXzbQ8gZv9hXRaueLG6468DSXQLu3P3CiUcUI87IUdBip0VccG2uO5zFRt9vL9mtEs5JpvMCLXPhd31Vo9Oy0uRwnOFn3Su6BdynquDG5fTRsi8zA37p1ZJ2KYau3VRt5P6TQIbvV+rkogXZrkeOiv7fxg0CgB8UTohuH5oG2LG/2DXwbNcyNIzYHlPZk7Wx6LreQECqY/uKpJA+Q0fVD6HGMnNGVrODPP6O+5E801mOPp+eGCOZlzMj4gXZ01Eem66BdONNUDnPL5rTSR2VvSZF5OxHprWDyqmuyPncC/LEkdLYw23+3Ic7QOWE1uV94yA729wjPzz8L7K8+PE+UDWIoDVumH/JQXa1LXWN/OBQSQwZXJt7ic5SQVXklmDhD/Eim+oKLyOPxLaHSoW+/e2hp36ml9Thk++WuUZ2H7yDpC9n59ZnLiNG1NzO4WAkram+4Kd4kY3rC74FVUPTtWp5zoV4zkQJGQgYdOKnbuZkT9+v65rz07VU+f06nbIVQyKGpjFGzWy8Yi5Aq3UJRltL8SqrGDsKuWY+qexKmkoqIJ1/AGcAORYQw7mEAAAAAElFTkSuQmCC" 
export let todoimg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABjklEQVR4nO2YsU7DMBCGvdCVtXXThZG1L9C4qAwgMUVK3OcAJmbCIzDbEVIXEKQtTZioeAN4AAQtYAMjsAW5BRQCSqlESYzuk/4lkqX/4jvp9yEEAACgDVYrKhAmPMLEed27XUAamj8gXEZKJheXS63HeaSjeTLWc2PvoYLyhunJao3LtUnma97dMsobJrtvECafRi3CxFZ1N5ozudiPmzeZfKlzsfrdecM5PKs4fqRkjNQeiyp1PlSm3ZiOY+pFOK5mEFMYFZthP7UAwsXVJ7NcXEzz52dpvvSm9AI8uZkwPFXbzNp8qXmSXoDCZHI9aV61TY2JlUlny7bfn6X5Ig1PJxaQLOKn5nMH4XJDzYQa7Ky9AP8GC7JQRliQhf4IE7KQD1kIQxZCkIUAAAB+gUWrVSg7/g52OkNMuwNMe676hnTBsH1XPc7fH+GYBmov46aeyXovFMewj4bJAko0uEEpZL4XimM4/uDLDdDgGuV9L5TaQjTcRjrshRRqYA277WLaGWg5xAAAAACANOAV2z02x2Wz/QcAAAAASUVORK5CYII="