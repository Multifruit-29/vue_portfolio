import { PageTransition } from '../components/PageTransition';

interface Project {
  title: string;
  description: string;
  type: 'Personnel' | 'Professionnel';
  technologies: string[];
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "E-commerce Platform",
    description: "Plateforme de commerce électronique développée avec React et Node.js",
    type: "Professionnel",
    technologies: ["React", "Node.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800",
    link: "#"
  },
  {
    title: "Portfolio Personnel",
    description: "Site web personnel présentant mes projets et compétences",
    type: "Personnel",
    technologies: ["React", "TypeScript", "Tailwind"],
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
    link: "#"
  },
  // Ajoutez vos projets ici
];

export function Projects() {
  return (
    <PageTransition>
      <div className="min-h-screen pt-16 bg-gradient-to-br from-indigo-50 to-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Mes Projets
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-[1.02]"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-xl font-semibold text-gray-900">
                      {project.title}
                    </h2>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm
                      ${project.type === 'Personnel'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-blue-100 text-blue-800'
                      }`}
                    >
                      {project.type}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="text-indigo-600 hover:text-indigo-800 font-medium"
                  >
                    Voir le projet →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}