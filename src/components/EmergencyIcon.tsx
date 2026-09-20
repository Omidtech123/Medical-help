import {
  Heart,
  Droplet,
  Zap,
  Bone,
  Waves,
  Wind,
  Brain,
  Shield,
  Skull,
  Flame,
  Sun,
  Snowflake,
  Bug,
  Eye,
  Smile,
  Activity,
  Baby,
  Scissors,
  Thermometer,
} from 'lucide-react';
import type { ComponentType } from 'react';

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  heart: Heart,
  droplet: Droplet,
  zap: Zap,
  bone: Bone,
  waves: Waves,
  wind: Wind,
  brain: Brain,
  shield: Shield,
  skull: Skull,
  flame: Flame,
  sun: Sun,
  snowflake: Snowflake,
  bug: Bug,
  eye: Eye,
  smile: Smile,
  activity: Activity,
  baby: Baby,
  scissors: Scissors,
  thermometer: Thermometer,
};

export function EmergencyIcon({ name, className }: { name: string; className?: string }) {
  const Icon = iconMap[name] ?? Heart;
  return <Icon className={className} />;
}
