import { FileText } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { DocumentCategory } from '../components/DocumentCategory';
import { documentCategories } from '../data/documents';

export function Documentation() {
  return (
    <PageTransition>
      <div className="min-h-screen pt-16 bg-gradient-to-br from-indigo-50 to-white">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="flex items-center mb-8">
            <FileText className="w-8 h-8 text-indigo-600 mr-4" />
            <h1 className="text-4xl font-bold text-gray-900">
              Documentation
            </h1>
          </div>

          {documentCategories.map((category, index) => (
            <DocumentCategory key={index} category={category} />
          ))}
        </div>
      </div>
    </PageTransition>
  );
}