// import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from "lucide-react"

// const Hero = () => {
//   return (
//     <section
//       id="home"
//       className="min-h-screen flex items-center justify-center bg-grid-pattern relative overflow-hidden"
//     >
//       {/* Background Elements */}
//       <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>

//       <div className="container mx-auto px-4 py-20 relative z-10">
//         <div className="max-w-4xl mx-auto text-center">
//           {/* Profile Image */}
//           <div className="mb-8 animate-fade-in">
//             <div className="w-96 h-96 mx-auto rounded-full overflow-hidden border-4 border-primary/20 animate-float">
//               <img src="raman.jpg" alt="Raman Dangol" className="w-full  h-full object-cover" />
//             </div>
//           </div>

//           {/* Main Content */}
//           <div className="animate-slide-up">
//             <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
//               Hi, I`m{" "}
//               <span className="text-primary animate-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
//                 Raman Dangol
//               </span>
//             </h1>
//             <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance">
//               Aspiring Software Developer & AI Integration
//             </p>

//             <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty">
//               "Currently pursuing a Bachelor’s in Information Technology, I recently completed a Next.js internship from Inflancer Technology. I have expertise in Next.js, React, API integration, Node.js, TypeScript, Tailwind CSS, Express.js, Authentication, Redis, PostgreSQL and MongoDB. I am passionate about building innovative web applications and AI-powered solutions."
//             </p>

//             {/* CTA Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
//               <a
//                 href="#projects"
//                 className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-all duration-200 font-medium inline-flex items-center justify-center space-x-2 animate-pulse-glow"
//               >
//                 <span>View My Work</span>
//                 <ExternalLink size={16} />
//               </a>

//               <a
//                 href="#contact"
//                 className="border border-border text-foreground px-8 py-3 rounded-lg hover:bg-muted transition-all duration-200 font-medium inline-flex items-center justify-center space-x-2"
//               >
//                 <Mail size={16} />
//                 <span>Get In Touch</span>
//               </a>
//             </div>

//             {/* Social Links */}
//             <div className="flex justify-center space-x-6 mb-12">
//               <a
//                 href="https://github.com/raman1224"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-200"
//               >
//                 <Github size={20} />
//               </a>
//               <a
//                 href="https://linkedin.com/in/ramandangol"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-200"
//               >
//                 <Linkedin size={20} />
//               </a>
//               <a
//                 href="mailto:dangolraman843@gmail.com"
//                 className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-200"
//               >
//                 <Mail size={20} />
//               </a>
//             </div>

//             {/* Scroll Indicator */}
//             <div className="animate-bounce">
//               <ArrowDown className="mx-auto text-muted-foreground" size={24} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Hero


import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"
import { Tilt } from "../ui"
import { profile } from "../data"

const Hero = () => (
  <section id="home" className="hero">
    <div className="wrap hero-grid">
      <div>
        <h1>
          <span className="hi">Hi, I’m</span>
          Raman Dangol
        </h1>
        <p className="role">Aspiring Software Developer & AI Integration</p>
        <p className="muted" style={{ maxWidth: "36rem", fontSize: "1.08rem" }}>
          “Currently pursuing a Bachelor’s in Information Technology, I recently completed a Next.js internship from Inflancer Technology. I have expertise in Next.js, React, API integration, Node.js, TypeScript, Tailwind CSS, Express.js, Authentication, Redis, PostgreSQL and MongoDB. I am passionate about building innovative web applications and AI-powered solutions.”
        </p>

        <div className="flex flex-wrap gap-4 mt-10">
          <a href="#projects" className="btn solid">View My Work <ExternalLink size={16} /></a>
          <a href="#contact" className="btn"><Mail size={16} /> Get In Touch</a>
        </div>

        <div className="flex gap-3 mt-8">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="icon" aria-label="GitHub"><Github size={18} /></a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="icon" aria-label="LinkedIn"><Linkedin size={18} /></a>
          <a href={`mailto:${profile.email}`} className="icon" aria-label="Email"><Mail size={18} /></a>
        </div>
      </div>

      <Tilt max={14}>
        <div className="frame">
          <img src="/raman.jpg" alt="Raman Dangol" />
        </div>
      </Tilt>
    </div>
  </section>
)

export default Hero