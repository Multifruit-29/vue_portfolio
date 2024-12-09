import { Download } from 'lucide-react';

interface DocumentCardProps {
  title: string;
  description: string;
  fileSize: string;
  downloadUrl: string;
}

export function DocumentCard({ title, description, fileSize, downloadUrl }: DocumentCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transition-transform hover:scale-[1.01]">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <span className="text-sm text-gray-500">{fileSize}</span>
        </div>
        <a
          href={downloadUrl}
          className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          <Download className="w-4 h-4 mr-2" />
          Télécharger
        </a>
      </div>
    </div>
  );
}