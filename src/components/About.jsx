// import { Code, Lightbulb, Users, Zap } from "lucide-react"

// const About = () => {
//   const highlights = [
//     {
//       icon: Code,
//       title: "Frontend Development",
//       description: "Experienced in HTML, CSS, Tailwind CSS, JavaScript, TypeScript, React.js, Next js, Api Integration, Rest API, Git and GitHub etc",
//     },
//      {
//       icon: Code,
//       title: "Backend Development",
//       description: "Experienced in Node.js, Express.js, MongoDB, Authentication, REST API, JavaScript, TypeScript and Render etc.",
//     },
//     {
//       icon: Lightbulb,
//       title: "AI Innovation",
//       description: "Creator of AI-powered Web applications including Newar Samaj, Medicare Nepal, and Translator AI",
//     },
//     {
//       icon: Users,
//       title: "Learning Journey",
//       description: "Continuously expanding knowledge through personal projects and coursework",
//     },
//   ]

//   return (
//     <section
//       id="about"
//       className="py-20 bg-gradient-to-br from-muted/30 via-background to-primary/5 relative overflow-hidden"
//     >
//       <div className="absolute top-10 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
//       <div className="absolute bottom-10 left-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000" />

//       <div className="container mx-auto px-4 relative z-10">
//         <div className="text-center mb-16 animate-fade-in">
//           <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
//             About <span className="text-primary">Me</span>
//           </h2>
//           <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
//             Passionate learner and aspiring developer dedicated to creating impactful digital solutions
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           <div className="animate-slide-up">
//             <div className="mb-8 relative group">
//               <img
//                 src="hack3.jpg"
//                 alt="Developer workspace"
//                 className="rounded-2xl shadow-2xl w-full transition-transform duration-500 group-hover:scale-105"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//             </div>
//           </div>

//           <div className="animate-slide-up">
//             <div className="mb-8">
//               <h3 className="text-2xl font-bold mb-4 text-primary">My Learning Journey</h3>
//               <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
//                 Aspiring Software Developer with experience in creating dynamic websites and applications through personal projects. Building my skills through projects including{" "}
//                   <a
//                   href="https://newarsamaj-eight.vercel.app"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-primary hover:text-secondary transition-colors duration-200 cursor-pointer font-semibold"
//                 >
// Newar Samaj              
//   </a>
//                   ,{" "}

//    <a
//                   href="https://medicarenepal.vercel.app/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-primary hover:text-secondary transition-colors duration-200 cursor-pointer font-semibold"
//                 >
//                   Medicare Nepal
//                 </a>                
//                  ,{" "}
//                    <a
//                   href="https://jobde.vercel.app"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-primary hover:text-secondary transition-colors duration-200 cursor-pointer font-semibold"
//                 >
//                 Jobde
//                 </a>
//                 ,{" "}

               
//                  <a
//                   href="https://mausamnow-orpin.vercel.app"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-primary hover:text-secondary transition-colors duration-200 cursor-pointer font-semibold"
//                 >
//                   MausamNow
//                 </a>
//                 , {" "}
//                  <a
//                   href="https://raman1224.github.io/DANGOL_AI"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-primary hover:text-secondary transition-colors duration-200 cursor-pointer font-semibold"
//                 >
//                   DANGOL AI
//                 </a>
//                  {" "}and{" "}
//                  <a
//                   href="https://raman1224.github.io/englishtonepali/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-primary hover:text-secondary transition-colors duration-200 cursor-pointer font-semibold"
//                 >
// Translator AI            
//     </a> .
//               </p>
//               <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
//                 Skilled in HTML, CSS, Tailwind CSS, JavaScript, TypeScript, React.js, Next js, Node.js, Express.js, MongoDB, PostgreSQL, Redis, Auth, REST APIs, Git, GitHub, Docker, CI/CD, Vercel, API integration, and
//                 responsive design. Continuously expanding my knowledge through coursework and practical application.
//               </p>
//             </div>

//             <div className="grid sm:grid-cols-2 gap-4">
//               {highlights.map((highlight, index) => (
//                 <div
//                   key={index}
//                   className="p-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:scale-105 group animate-slide-up"
//                   style={{ animationDelay: `${index * 100}ms` }}
//                 >
//                   <highlight.icon className="h-8 w-8 text-primary mb-3 group-hover:scale-110 group-hover:text-secondary transition-all duration-300" />
//                   <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors duration-200">
//                     {highlight.title}
//                   </h4>
//                   <p className="text-sm text-muted-foreground">{highlight.description}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default About


import { Code, Lightbulb, Users } from "lucide-react"
import { Heading, Tilt } from "../ui"
import { aboutLinks, highlights } from "../data"

const icons = { Code, Lightbulb, Users }

const About = () => (
  <section id="about">
    <div className="wrap">
      <Heading
        title="About Me"
        sub="Passionate learner and aspiring developer dedicated to creating impactful digital solutions"
      />

      <div className="cols">
        <Tilt max={8}>
          <img src="/hack3.jpg" alt="Developer workspace" style={{ width: "100%", borderRadius: "28px", display: "block", boxShadow: "0 40px 60px -30px rgba(0,0,0,.5)" }} />
        </Tilt>

        <div>
          <h3 style={{ fontSize: "1.7rem", marginBottom: "1rem" }}>My Learning Journey</h3>
          <p className="muted" style={{ fontSize: "1.1rem", marginBottom: "1.2rem" }}>
            Aspiring Software Developer with experience in creating dynamic websites and applications through personal projects. Building my skills through projects including{" "}
            {aboutLinks.map(([label, url], i) => (
              <span key={url}>
                {i > 0 && (i === aboutLinks.length - 1 ? " and " : ", ")}
                <a href={url} target="_blank" rel="noopener noreferrer" className="link">{label}</a>
              </span>
            ))}
            .
          </p>
          <p className="muted" style={{ fontSize: "1.1rem" }}>
            Skilled in HTML, CSS, Tailwind CSS, JavaScript, TypeScript, React.js, Next js, Node.js, Express.js, MongoDB, PostgreSQL, Redis, Auth, REST APIs, Git, GitHub, Docker, CI/CD, Vercel, API integration, and responsive design. Continuously expanding my knowledge through coursework and practical application.
          </p>
        </div>
      </div>

      <div className="rules" style={{ marginTop: "4rem" }}>
        {highlights.map((h) => {
          const Icon = icons[h.icon]
          return (
            <div key={h.title}>
              <Icon size={26} />
              <h4>{h.title}</h4>
              <p className="muted" style={{ fontSize: ".95rem" }}>{h.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  </section>
)

export default About