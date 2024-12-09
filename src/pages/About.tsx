import { PageTransition } from '../components/PageTransition';
import { BookOpen, Briefcase, Code } from 'lucide-react';

export function About() {
  return (
    <PageTransition>
      <div className="min-h-screen pt-16 bg-gradient-to-br from-indigo-50 to-white">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <img
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400"
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              À Propos de Moi
            </h1>
            <p className="text-xl text-gray-600">
              Développeur passionné et étudiant en informatique
            </p>
          </div>

          <div className="space-y-12">
            <section className="bg-white rounded-lg shadow-xl p-8">
              <div className="flex items-center mb-6">
                <BookOpen className="w-8 h-8 text-indigo-600 mr-4" />
                <h2 className="text-2xl font-semibold text-gray-900">Formation</h2>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-indigo-600 pl-4">
                  <h3 className="font-semibold text-lg">Diplôme en Développement Web</h3>
                  <p className="text-gray-600">École Supérieure d'Informatique • 2022-2024</p>
                </div>
                <div className="border-l-4 border-indigo-600 pl-4">
                  <h3 className="font-semibold text-lg">Baccalauréat Scientifique</h3>
                  <p className="text-gray-600">Lycée • 2019-2022</p>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-lg shadow-xl p-8">
              <div className="flex items-center mb-6">
                <Code className="w-8 h-8 text-indigo-600 mr-4" />
                <h2 className="text-2xl font-semibold text-gray-900">Compétences</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Langages de Programmation</h3>
                  <div className="space-y-2">
                    {['JavaScript', 'TypeScript', 'Python', 'Java'].map((skill) => (
                      <div key={skill} className="flex items-center">
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                        </div>
                        <span className="ml-3 text-sm text-gray-600">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Technologies Web</h3>
                  <div className="space-y-2">
                    {['React', 'Node.js', 'HTML/CSS', 'SQL'].map((skill) => (
                      <div key={skill} className="flex items-center">
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                        </div>
                        <span className="ml-3 text-sm text-gray-600">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-lg shadow-xl p-8">
              <div className="flex items-center mb-6">
                <Briefcase className="w-8 h-8 text-indigo-600 mr-4" />
                <h2 className="text-2xl font-semibold text-gray-900">Expérience</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg">Stage Développeur Full Stack</h3>
                  <p className="text-gray-600">Entreprise Tech • 2023</p>
                  <p className="mt-2">Développement d'une application web avec React et Node.js</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Projet Freelance</h3>
                  <p className="text-gray-600">Client particulier • 2022</p>
                  <p className="mt-2">Création d'un site vitrine pour une petite entreprise</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}