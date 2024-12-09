import { Award, FileText, FolderOpen, GraduationCap, LucideIcon } from 'lucide-react';
import { DocumentCard } from './DocumentCard';
import { DocumentCategory as DocumentCategoryType } from '../data/documents';

const icons: Record<string, LucideIcon> = {
  'file-text': FileText,
  'award': Award,
  'graduation-cap': GraduationCap,
  'folder': FolderOpen,
};

interface DocumentCategoryProps {
  category: DocumentCategoryType;
}

export function DocumentCategory({ category }: DocumentCategoryProps) {
  const Icon = icons[category.icon];

  return (
    <div className="mb-12">
      <div className="flex items-center mb-6">
        <Icon className="w-8 h-8 text-indigo-600 mr-4" />
        <h2 className="text-2xl font-semibold text-gray-900">{category.name}</h2>
      </div>
      <div className="grid gap-6">
        {category.documents.map((doc, index) => (
          <DocumentCard
            key={index}
            title={doc.title}
            description={doc.description}
            fileSize={doc.fileSize}
            downloadUrl={doc.downloadUrl}
          />
        ))}
      </div>
    </div>
  );
}