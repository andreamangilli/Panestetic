import { LucideIcon } from 'lucide-react';

export interface FeatureProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface BenefitCardProps {
  title: string;
  value: string;
  trend?: string;
  description: string;
}

export enum TabView {
  WIZARD = 'WIZARD',
  MARKETING = 'MARKETING',
  ANALYTICS = 'ANALYTICS'
}