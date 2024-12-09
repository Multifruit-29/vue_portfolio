interface Document {
  title: string;
  description: string;
  category: string;
  fileSize: string;
  downloadUrl: string;
}

export interface DocumentCategory {
  name: string;
  icon: string;
  documents: Document[];
}

export const documentCategories: DocumentCategory[] = [
  {
    name: "CV et Lettres",
    icon: "file-text",
    documents: [
      {
        title: "CV - Version Française",
        description: "Curriculum vitae détaillé en français",
        category: "CV",
        fileSize: "245 KB",
        downloadUrl: "#"
      },
      {
        title: "CV - English Version",
        description: "Detailed curriculum vitae in English",
        category: "CV",
        fileSize: "240 KB",
        downloadUrl: "#"
      },
      {
        title: "Lettre de Motivation",
        description: "Modèle de lettre de motivation personnalisable",
        category: "Documents Professionnels",
        fileSize: "180 KB",
        downloadUrl: "#"
      }
    ]
  },
  {
    name: "Certifications",
    icon: "award",
    documents: [
      {
        title: "Certification React",
        description: "Certification développeur React avancé",
        category: "Certifications",
        fileSize: "1.2 MB",
        downloadUrl: "#"
      },
      {
        title: "Certification TypeScript",
        description: "Certification TypeScript fondamentaux",
        category: "Certifications",
        fileSize: "950 KB",
        downloadUrl: "#"
      }
    ]
  },
  {
    name: "Diplômes",
    icon: "graduation-cap",
    documents: [
      {
        title: "Diplôme Universitaire",
        description: "Diplôme d'études supérieures en informatique",
        category: "Diplômes",
        fileSize: "1.5 MB",
        downloadUrl: "#"
      },
      {
        title: "Baccalauréat",
        description: "Diplôme du baccalauréat scientifique",
        category: "Diplômes",
        fileSize: "1.1 MB",
        downloadUrl: "#"
      }
    ]
  },
  {
    name: "Projets",
    icon: "folder",
    documents: [
      {
        title: "Documentation Technique",
        description: "Documentation détaillée des projets réalisés",
        category: "Projets",
        fileSize: "2.8 MB",
        downloadUrl: "#"
      },
      {
        title: "Mémoire de Stage",
        description: "Rapport détaillé du stage en entreprise",
        category: "Projets",
        fileSize: "3.2 MB",
        downloadUrl: "#"
      }
    ]
  }
];