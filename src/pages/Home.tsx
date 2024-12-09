import { Code2, Github, Linkedin, ArrowRight, BookOpen, Coffee, Terminal } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <PageTransition>
      <div className="min-h-screen pt-16 bg-gradient-to-br from-indigo-50 to-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-indigo-600 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                <Code2 className="w-48 h-48 text-indigo-600 relative z-10" />
              </div>
            </div>
            
            <div className="w-full md:w-2/3 text-center md:text-left">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Développeur Passionné
                <span className="block text-indigo-600">& Étudiant en Informatique</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Bienvenue sur mon portfolio ! Je suis un jeune développeur passionné 
                par la création d'applications web modernes et innovantes. 
                En constante recherche d'apprentissage et de nouveaux défis.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Link
                  to="/projets"
                  className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Voir mes projets
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-gray-900 text-white hover:bg-gray-700 transition-colors"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform">
              <Terminal className="w-12 h-12 text-indigo-600 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Développement Web</h3>
              <p className="text-gray-600">
                Création d'applications web modernes avec les dernières technologies.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform">
              <BookOpen className="w-12 h-12 text-indigo-600 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Apprentissage Continu</h3>
              <p className="text-gray-600">
                Veille technologique et formation continue pour rester à jour.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform">
              <Coffee className="w-12 h-12 text-indigo-600 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Passion & Créativité</h3>
              <p className="text-gray-600">
                Approche créative et passionnée de chaque projet.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-indigo-600 rounded-2xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Intéressé par une collaboration ?</h2>
            <p className="text-lg mb-6 opacity-90">
              N'hésitez pas à me contacter pour discuter de vos projets !
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Me contacter
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}