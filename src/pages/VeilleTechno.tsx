import { PageTransition } from '../components/PageTransition';

interface VeilleItem {
  title: string;
  date: string;
  description: string;
  category: string;
  link: string;
}

const veilleItems: VeilleItem[] = [
  {
    title: "L'évolution de l'Intelligence Artificielle",
    date: "2024-03-15",
    description: "Analyse des dernières avancées en IA et leur impact sur le développement",
    category: "Intelligence Artificielle",
    link: "#"
  },
  {
    title: "Web Components et l'avenir du développement web",
    date: "2024-03-10",
    description: "Étude sur l'utilisation croissante des Web Components",
    category: "Développement Web",
    link: "#"
  },
  // Ajoutez vos articles de veille ici
];

export function VeilleTechno() {
  return (
    <PageTransition>
      <div className="min-h-screen pt-16 bg-gradient-to-br from-indigo-50 to-white">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Veille Technologique
          </h1>
          
          <div className="space-y-8">
            {veilleItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 transition-transform hover:scale-[1.02]"
              >
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-xl font-semibold text-gray-900">
                    {item.title}
                  </h2>
                  <span className="text-sm text-gray-500">{item.date}</span>
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
                    {item.category}
                  </span>
                  <a
                    href={item.link}
                    className="text-indigo-600 hover:text-indigo-800 font-medium"
                  >
                    Lire plus →
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