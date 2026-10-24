// import { Github, Linkedin, Mail } from "lucide-react"

// const Footer = () => {
//   const currentYear = new Date().getFullYear()

//   return (
//     <footer className="bg-card border-t border-border">
//       <div className="container mx-auto px-4 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           {/* Brand */}
//           <div className="md:col-span-2">
//             <div className="text-2xl font-bold text-primary mb-4">
//               Raman<span className="text-secondary"> Dangol</span>
//             </div>
//             <p className="text-muted-foreground mb-4 max-w-md text-pretty">
//               Aspiring Software Developer passionate about creating innovative web applications and AI-powered
//               solutions. Always learning, always building.
//             </p>
//             <div className="flex space-x-4">
//               <a
//                 href="https://github.com/raman1224"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-200"
//               >
//                 <Github size={20} />
//               </a>
//               <a
//                 href="https://linkedin.com/in/dangol1224"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-200"
//               >
//                 <Linkedin size={20} />
//               </a>
//               <a
//                 href="mailto: dangolraman3@gmail.com"
//                 className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-200"
//               >
//                 <Mail size={20} />
//               </a>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="font-semibold mb-4">Quick Links</h3>
//             <ul className="space-y-2">
//               <li>
//                 <a href="#about" className="text-muted-foreground hover:text-primary transition-colors duration-200">
//                   About
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#experience"
//                   className="text-muted-foreground hover:text-primary transition-colors duration-200"
//                 >
//                   Experience
//                 </a>
//               </li>
//               <li>
//                 <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors duration-200">
//                   Projects
//                 </a>
//               </li>
//               <li>
//                 <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors duration-200">
//                   Contact
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h3 className="font-semibold mb-4">Contact</h3>
//             <ul className="space-y-2 text-muted-foreground">
//               <li>Kathmandu, Nepal</li>
//               <li>+977 9763774451</li>
//               <li>dangolraman3@gmail.com</li>
//             </ul>
//           </div>
//         </div>

//         <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
//           <p className="text-muted-foreground text-center md:text-left">
//             © {currentYear} Raman Dangol. All rights reserved.
//           </p>
//           <p className="text-muted-foreground text-center md:text-right mt-2 md:mt-0 flex items-center">
//            {/* <img src="g5.png" alt="Logo" className="h-12 rounded-full mr-2" />
//              */}
//                          Developed by{" "}

//             <a
//               href="https://dangolai.vercel.app"
//               target="_blank"
//               rel="noopener noreferrer"
// className="text-primary hover:text-primary/87 active:text-primary/60 active:scale-95 transition-all duration-200 ml-1 font-medium"
//             >
//               DANGOL AI
//             </a>
//           </p>
//         </div>
//       </div>
//     </footer>
//   )
// }

// export default Footer


import { Github, Linkedin, Mail } from "lucide-react"
import { profile } from "../data"

const Footer = () => (
  <footer style={{ borderTop: "1px solid var(--line)", background: "var(--panel)", backdropFilter: "blur(10px)" }}>
    <div className="wrap" style={{ padding: "3.5rem 1.25rem 2rem" }}>
      <div className="grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="nav logo" style={{ position: "static", background: "none", border: 0, fontSize: "1.8rem", marginBottom: "1rem" }}>
            Raman<span> Dangol</span>
          </div>
          <p className="muted" style={{ maxWidth: "28rem", marginBottom: "1.2rem" }}>
            Aspiring Software Developer passionate about creating innovative web applications and AI-powered solutions. Always learning, always building.
          </p>
          <div className="flex gap-3">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="icon" aria-label="GitHub"><Github size={18} /></a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="icon" aria-label="LinkedIn"><Linkedin size={18} /></a>
            <a href={`mailto:${profile.email}`} className="icon" aria-label="Email"><Mail size={18} /></a>
          </div>
        </div>

        <div>
          <h4 style={{ marginBottom: "1rem" }}>Quick Links</h4>
          <ul className="grid gap-2 muted" style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {[["#about", "About"], ["#experience", "Experience"], ["#projects", "Projects"], ["#contact", "Contact"]].map(([h, l]) => (
              <li key={h}><a href={h} className="link" style={{ color: "inherit", fontWeight: 400 }}>{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 style={{ marginBottom: "1rem" }}>Contact</h4>
          <ul className="grid gap-2 muted" style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li>Kathmandu, Nepal</li>
            <li>{profile.phone}</li>
            <li>{profile.email}</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-2 muted" style={{ borderTop: "1px solid var(--line)", marginTop: "2.5rem", paddingTop: "1.5rem" }}>
        <p>© {new Date().getFullYear()} Raman Dangol. All rights reserved.</p>
        <p>Developed by <a href="https://dangolai.vercel.app" target="_blank" rel="noopener noreferrer" className="link">DANGOL AI</a></p>
      </div>
    </div>
  </footer>
)

export default Footer