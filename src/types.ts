export interface Skill {
  name: string;
  category: 'Languages' | 'Databases' | 'Frameworks' | 'Tools' | 'Interests';
  level?: number; // percentage or rating 1-100
  iconName: string;
  description: string;
  featured?: boolean;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  tech: string[];
  badge?: string;
  demoType: 'widget' | 'spotify' | 'web' | 'ai';
  githubUrl?: string;
  liveUrl?: string;
}

export interface Achievement {
  id: string;
  title: string;
  subtitle: string;
  organizer: string;
  role: string;
  year: string;
  highlights: string[];
  badge: string;
}

export interface TimelineItem {
  id: string;
  title: string;
  institution: string;
  period: string;
  status: string;
  description: string;
  highlights: string[];
  icon: string;
}

export interface LearningItem {
  id: string;
  topic: string;
  category: string;
  progress: number;
  description: string;
  icon: string;
}
