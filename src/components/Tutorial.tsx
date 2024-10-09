import React from 'react';

interface TutorialProps {
  step: number;
  onNextStep: () => void;
  onFinish: () => void;
}

const Tutorial: React.FC<TutorialProps> = ({ step, onNextStep, onFinish }) => {
  const tutorialSteps = [
    // ... (previous steps remain the same)
    {
      title: "Bargain",
      content: "The Bargain move allows you to swap two adjacent cards for $1. Click 'Bargain', then select two adjacent cards to swap their positions.",
    },
    // ... (rest of the steps remain the same)
  ];

  // ... (rest of the component remains the same)
};

export default Tutorial;