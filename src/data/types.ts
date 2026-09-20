export type Category = 'critical' | 'urgent' | 'guidance' | 'mental-health';

export interface EmergencyStep {
  title: string;
  detail: string;
  warning?: string;
}

export interface Emergency {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  category: Category;
  keywords: string[];
  steps: EmergencyStep[];
  whenToCall?: string;
  doNot?: string[];
  warning?: string;
  hotline?: string;
}

export interface EmergencyFa {
  id: string;
  title: string;
  subtitle: string;
  steps: EmergencyStep[];
  whenToCall?: string;
  doNot?: string[];
  warning?: string;
  hotline?: string;
}
