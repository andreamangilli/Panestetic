import React from 'react';
import { Hero } from './Hero';
import { ValueProposition } from './ValueProposition';
import { InteractiveDemo } from './InteractiveDemo';
import { MarketingAutomation } from './MarketingAutomation';
import { BusinessModel } from './BusinessModel';
import { ComplianceSection } from './ComplianceSection';
import { ClinicInvestment } from './ClinicInvestment';
import { DataIntelligence } from './DataIntelligence';

export const ClinicView: React.FC = () => {
  return (
    <>
      <Hero />
      <ValueProposition />
      <InteractiveDemo />
      <MarketingAutomation />
      <ComplianceSection />
      <DataIntelligence />
      <BusinessModel />
      <ClinicInvestment />
    </>
  );
};