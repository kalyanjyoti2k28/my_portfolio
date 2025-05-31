export interface Skill {
  name: string;
  level: number;
  category: 'programming' | 'engineering' | 'soft' | 'language';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'planned';
  technologies: string[];
  icon: string;
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
  status: string;
  location: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
