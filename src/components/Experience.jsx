// import { Calendar, MapPin } from "lucide-react"

// const Experience = () => {
//   const experiences = [
//        {
//   title: "MERN Stack Developer Intern",
//   company: "SRIYOG Consulting",
//   period: "Jun 2026 - Aug 2026",
//   location: "Kathmandu, Nepal",
//   type: "Internship",
//   description:
//     "Worked on full-stack web applications using the MERN stack and Next.js, building modern frontend interfaces, secure backend APIs, CMS features, and optimizing application performance for production-ready projects.",
//   achievements: [
//     "Developed responsive web applications using React, Next.js, TypeScript, and Tailwind CSS",
//     "Built a complete Admin CMS with authentication, role-based access control, and CRUD operations",
//     "Implemented Blog, Gallery, Events, Notices, and Popup management modules",
//     "Integrated Supabase Authentication, PostgreSQL, Row Level Security (RLS), and Storage",
//     "Migrated backend from MongoDB and Cloudinary to Supabase for improved security and scalability",
//     "Created reusable UI components and optimized applications using code splitting and lazy loading",
//     "Implemented SEO best practices including metadata, sitemap, robots.txt, and structured layouts",
//     "Collaborated with senior developers using Git and GitHub in an Agile workflow",
//     "Improved website performance, responsiveness, accessibility, and overall user experience"
//   ],
//   current: true,
// },
//     {
//   title: "Next.js Developer Intern",
//   company: "Inflancer Technology",
//   period: "Jan 2026 - March 2026",
//   location: "Kathmandu, Nepal",
//   type: "Internship",
//   description:
//     "Worked on building and improving modern, scalable frontend applications using Next.js and TypeScript while collaborating closely with backend developers.",
//   achievements: [
//     "Developed and enhanced modern UI using Next.js, TypeScript, and Tailwind CSS",
//     "Integrated REST APIs provided by backend developers and implemented full CRUD functionality",
//     "Worked with Redux for state management and handled complex frontend logic",
//     "Collaborated with backend services built using Node.js and MongoDB",
//     "Used Postman for API testing and validation",
//     "Implemented smooth animations and interactions using Framer Motion",
//     "Focused on responsive design, performance optimization, and clean UI/UX",
//     "Tested API flows and frontend logic using Jest",
//   ],
//   current: false,
// },
   
//     {
//       title: "OJT Trainee",
//       company: "MMSS",
//       period: "May 2024 - Nov 2024",
//       location: "Nuwakot, Nepal",
//       type: "On-the-Job Training",
//       description: "Gained practical experience in web development through real-world projects and team collaboration.",
//       achievements: [
//         "Developed a school news portal using HTML, CSS, JavaScript, PHP, and SQL",
//         "Implemented responsive design and used XAMPP server for local development",
//         "Focused on debugging and optimizing the portal for better performance",
//         "Collaborated with team members and received mentorship from experienced developers",
//       ],
//       current: false,
//     },
 
//   ]

//   return (
//     <section id="experience" className="py-20 bg-background">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16 animate-fade-in">
//           <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
//             Work <span className="text-primary">Experience</span>
//           </h2>
//           <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
//             My journey in web development and continuous learning
//           </p>
//         </div>

//         <div className="max-w-4xl mx-auto">
//           <div className="relative">
//             {/* Timeline line */}
//             <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>

//             {experiences.map((exp, index) => (
//               <div
//                 key={index}
//                 className="relative flex items-start mb-12 animate-slide-up"
//                 style={{ animationDelay: `${index * 0.2}s` }}
//               >
//                 {/* Timeline dot */}
//                 <div
//                   className={`absolute left-6 w-4 h-4 rounded-full border-4 ${
//                     exp.current ? "bg-primary border-primary" : "bg-background border-muted-foreground"
//                   } z-10`}
//                 ></div>

//                 {/* Content */}
//                 <div className="ml-16 bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group">
//                   <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
//                     <div>
//                       <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-200">
//                         {exp.title}
//                       </h3>
//                       <p className="text-lg text-primary font-semibold">{exp.company}</p>
//                       <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mt-2">
//                         {exp.type}
//                       </span>
//                     </div>
//                     <div className="text-right mt-2 md:mt-0">
//                       <div className="flex items-center text-muted-foreground mb-1">
//                         <Calendar size={16} className="mr-2" />
//                         <span className="font-medium">{exp.period}</span>
//                       </div>
//                       <div className="flex items-center text-muted-foreground">
//                         <MapPin size={16} className="mr-2" />
//                         <span>{exp.location}</span>
//                       </div>
//                     </div>
//                   </div>

//                   <p className="text-muted-foreground mb-4 text-pretty">{exp.description}</p>

//                   <div className="space-y-2">
//                     <h4 className="font-semibold text-foreground">Key Achievements:</h4>
//                     <ul className="space-y-2">
//                       {exp.achievements.map((achievement, achievementIndex) => (
//                         <li key={achievementIndex} className="flex items-start text-muted-foreground">
//                           <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
//                           <span className="text-pretty">{achievement}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>

//                   {exp.current && (
//                     <div className="mt-4 flex items-center text-primary font-medium">
//                       <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></div>
//                       <span>Currently Active</span>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Additional Info */}
//         <div className="mt-16 text-center animate-fade-in">
//           <div className="bg-muted/50 rounded-lg p-8 max-w-2xl mx-auto">
//             <h3 className="text-xl font-bold mb-4 text-primary">Looking Forward</h3>
//             <p className="text-muted-foreground text-pretty">
//               I`m actively seeking Frontend Developer Job to contribute to innovative Company and continue growing as a
//               full-stack developer. My experience in both independent learning and collaborative environments has
//               prepared me for the challenges of modern web development. I am looking forward any web dev related job.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Experience



import { Calendar, MapPin } from "lucide-react"
import { Heading, Tilt } from "../ui"
import { experiences } from "../data"

const Experience = () => (
  <section id="experience">
    <div className="wrap" style={{ maxWidth: "62rem" }}>
      <Heading title="Work Experience" sub="My journey in web development and continuous learning" />

      <div className="tl">
        {experiences.map((exp) => (
          <div key={exp.company}>
            <i className={`dot ${exp.current ? "on" : ""}`} />
            <Tilt max={2.5} className="panel">
              <div className="flex flex-wrap justify-between gap-3 mb-4">
                <div>
                  <h3 style={{ fontSize: "1.6rem" }}>{exp.title}</h3>
                  <p style={{ color: "var(--gold)", fontWeight: 700, fontSize: "1.1rem", margin: ".3rem 0 .6rem" }}>{exp.company}</p>
                  <span className="chip on">{exp.type}</span>
                </div>
                <div className="meta" style={{ flexDirection: "column", gap: ".3rem" }}>
                  <span><Calendar size={15} />{exp.period}</span>
                  <span><MapPin size={15} />{exp.location}</span>
                </div>
              </div>

              <p className="muted">{exp.description}</p>
              <h4 style={{ fontSize: "1.05rem", marginTop: "1.2rem" }}>Key Achievements:</h4>
              <ul className="ach">
                {exp.achievements.map((a) => <li key={a}>{a}</li>)}
              </ul>

              {exp.current && <p style={{ color: "var(--gold)", fontWeight: 600, marginTop: "1.2rem" }}>Currently Active</p>}
            </Tilt>
          </div>
        ))}
      </div>

      <div className="panel" style={{ marginTop: "4rem" }}>
        <h3 style={{ fontSize: "1.5rem", marginBottom: ".8rem" }}>Looking Forward</h3>
        <p className="muted">
          I’m actively seeking Frontend Developer Job to contribute to innovative Company and continue growing as a full-stack developer. My experience in both independent learning and collaborative environments has prepared me for the challenges of modern web development. I am looking forward any web dev related job.
        </p>
      </div>
    </div>
  </section>
)

export default Experience