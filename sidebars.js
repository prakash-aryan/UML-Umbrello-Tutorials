/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation
 */

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Use Case Diagrams',
      items: ['use-case/index'],
    },
    {
      type: 'category',
      label: 'Activity Diagrams',
      items: ['activity-diagram/index'],
    },
    {
      type: 'category',
      label: 'Class Diagrams',
      items: ['class-diagram/index'],
    },
    {
      type: 'category',
      label: 'State Diagrams',
      items: ['state-diagram/index'],
    },
  ],
};

module.exports = sidebars;
