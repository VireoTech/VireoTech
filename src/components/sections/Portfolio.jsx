import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Funeral Home Website",
    description: "Professional website for funeral homes with service listings, obituaries, and online memorial features. Designed with sensitivity and ease of use for grieving families.",
    tags: ["JavaScript", "HTML5", "CSS3", "Responsive Design"],
    image: "https://raw.githubusercontent.com/Hashish03/VireoTech/main/src/assets/Images/funeral-home.webp?w=500&h=300&fit=crop",
    github: "https://Hashish03.github.io/funeral-home",
    live: "https://Hashish03.github.io/funeral-home",
  },
  {
    title: "K2Mol Business Website",
    description: "Corporate website for K2Mol company featuring company profile, services portfolio, team information, and client contact system. Built for professional presentation.",
    tags: ["JavaScript", "Bootstrap", "jQuery", "PHP"],
    image: "https://raw.githubusercontent.com/Hashish03/VireoTech/main/src/assets/Images/busniess.webp?w=500&h=300&fit=crop",
    github: "https://Hashish03.github.io/k2mol_website",
    live: "https://Hashish03.github.io/k2mol_website",
  },
  {
    title: "Sneaker.inc E-Commerce",
    description: "Full-featured online shoe store with product catalog, shopping cart, secure checkout, and order management. Optimized for mobile shopping experience.",
    tags: ["React", "Node.js", "MongoDB", "Stripe API"],
    image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500&h=300&fit=crop",
    github: "https://Hashish03.github.io/Sneaker.inc",
    live: "https://Hashish03.github.io/Sneaker.inc",
  },
  {
    title: "Real Estate Platform",
    description: "Property listing platform for rental properties and homes for sale across multiple locations. Features advanced search filters, map integration, and property comparison tools.",
    tags: ["React", "Node.js", "PostgreSQL", "Google Maps API"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=300&fit=crop",
    github: "https://github.com/Hashish03/real-estate-platform",
    live: "#",
  },
  {
    title: "Cash Ride - Taxi Fare App",
    description: "Online taxi fare calculation and booking system with real-time pricing, route optimization, and driver matching. Includes fare estimation and trip history.",
    tags: ["JavaScript", "Google Maps API", "Firebase", "Bootstrap"],
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=500&h=300&fit=crop",
    github: "https://github.com/Hashish03/Cash_Ride",
    live: "#",
  },
  {
    title: "Restaurant Reservation System",
    description: "Comprehensive booking platform for restaurants with table management, menu display, online reservations, and customer reviews. Features real-time availability.",
    tags: ["Vue.js", "Express.js", "MySQL", "Socket.io"],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&h=300&fit=crop",
    github: "https://github.com/yourusername/restaurant-booking",
    live: "#",
  },
  {
    title: "Cafe Website",
    description: "Responsive website for a local coffee shop with online ordering and menu management. Features modern design and mobile-first approach.",
    tags: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
    image: "https://raw.githubusercontent.com/Hashish03/VireoTech/main/src/assets/Images/cafe.webp?w=500&h=300&fit=crop",
    github: "https://github.com/yourusername/cafe-website",
    live: "https://cafe-website.vercel.app",
  },
];

export function Portfolio() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my recent work in web development, featuring modern technologies 
            and best practices. Each project is hosted on Vercel with source code on GitHub.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/90 rounded-lg hover:bg-white transition-colors"
                  >
                    <Github className="w-4 h-4 text-gray-700" />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/90 rounded-lg hover:bg-white transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 text-gray-700" />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full hover:bg-blue-200 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <p className="text-gray-600 mb-6">
            Interested in working together? Let's build something amazing.
          </p>
          <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
            Get In Touch
          </button>
        </motion.div>
      </div>
    </section>
  );
}