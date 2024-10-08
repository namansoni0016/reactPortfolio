import project1 from "../assets/p1.jpg";
import project2 from "../assets/p2.jpg";

export const HERO_CONTENT = `I am a versatile full stack developer with a strong focus on designing and developing scalable, high-performance web applications.
My expertise spans across front-end technologies like React.js and Next.js, combined with back-end technologies like Node.js and MongoDB. 
I am passionate about crafting seamless user interfaces and efficient back-end architectures that not only solve real-world problems but also drive business success.`

export const ABOUT_CONTENT = `I am a versatile full stack developer with a strong focus on designing and developing scalable, high-performance web applications.
My expertise spans across front-end technologies like React.js and Next.js, combined with back-end technologies like Node.js and MongoDB. 
I am passionate about crafting seamless user interfaces and efficient back-end architectures that not only solve real-world problems but also drive business success.
By continuously refining my skills and staying updated with the latest technologies, I aim to deliver innovative, user-centric solutions that elevate the overall experience and foster business growth.`

export const ABOUT_CONTENT2 = `I have earned a Master of Technology (MTech) in Computer Science from the prestigious Indraprastha Institute of Information Technology (IIIT Delhi).
Additionally, I hold a Bachelor of Engineering (BE) in Computer Engineering from Silver Oak College of Engineering & Technology (GTU).
My academic journey has equipped me with both theoretical knowledge and practical expertise, enabling me to excel in solving complex problems and driving innovation in technology.`

export const EXPERIENCE = [
    {
        year: "June - Dec 2023",
        role: "Product Manager",
        company: "ICICI Bank",
        description: `Developed comprehensive BRS and test cases for the trade finance department. 
        Led the development and enhancement of customer-facing applications, ensuring a user-friendly experience and seamless functionality.
        Conducted thorough UAT for new product introductions and migrations. Worked on implementation and optimization of TradeOnline, managed the migration of InstaEPC to NTS and Helpdesk to iCRM.`
    }
]

export const PROJECTS = [
    {
        title: "Estate Edge",
        image: project1,
        github: "https://github.com/namansoni0016/estateEdge",
        demo: "#",
        description: "A MERN stack real estate website allowing users to list properties for sale or rent. Integrated Firebase for storing images, implemented secure user authentication with JWT and Google OAuth. Developed features like advanced property search and image upload.",
        technologies: ["React.js", "Node.js", "MongoDB", "Redux"]
    },
    {
        title: "Money Mate",
        image: project2,
        github: "https://github.com/namansoni0016/expense-tracker",
        demo: "#",
        description: "A MERN stack expense tracker application, incorporating Redux and React Query. Implemented a robust category-based system allowing users to create and manage income and expense categories, and dynamically link transactions to these categories.",
        technologies: ["React.js", "Node.js", "MongoDB", "Redux"],
    }
]

export const CONTACT = {
    address: "Ahmedabad, Gujarat, INDIA",
    phone: "+91 9426651237",
    email: "namantsoni@gmail.com"
}