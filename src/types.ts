/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ServiceCategory {
  id: string;
  title: string;
  titleEn: string;
  subtitle: string;
  subtitleEn: string;
  description: string;
  descriptionEn: string;
  image: string;
  features: string[];
  featuresEn: string[];
  accentColor: string;
}

export interface CustomerProfile {
  id: string;
  title: string;
  titleEn: string;
  quote: string;
  quoteEn: string;
  description: string;
  descriptionEn: string;
  painPoints: string[];
  painPointsEn: string[];
  solutions: string[];
  solutionsEn: string[];
  tag: string;
  tagEn: string;
}

export interface CaseScenario {
  id: string;
  image: string;
  title: string;
  titleEn: string;
  category: string;
  categoryEn: string;
  client: string;
  clientEn: string;
  location: string;
  story: string;
  storyEn: string;
  highlight: string;
  highlightEn: string;
  timeline: {
    stage: string;
    stageEn: string;
    desc: string;
    descEn: string;
  }[];
}

export interface InteractivePlannerState {
  category: string;
  urgency: string;
  destination: string;
  additionalNeeds: string[];
}
