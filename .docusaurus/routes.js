import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/UML-Umbrello-Tutorials/docs/',
    component: ComponentCreator('/UML-Umbrello-Tutorials/docs/', '67a'),
    routes: [
      {
        path: '/UML-Umbrello-Tutorials/docs/',
        component: ComponentCreator('/UML-Umbrello-Tutorials/docs/', '472'),
        routes: [
          {
            path: '/UML-Umbrello-Tutorials/docs/',
            component: ComponentCreator('/UML-Umbrello-Tutorials/docs/', '4fc'),
            routes: [
              {
                path: '/UML-Umbrello-Tutorials/docs/',
                component: ComponentCreator('/UML-Umbrello-Tutorials/docs/', '247'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/UML-Umbrello-Tutorials/docs/activity-diagram/',
                component: ComponentCreator('/UML-Umbrello-Tutorials/docs/activity-diagram/', '771'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/UML-Umbrello-Tutorials/docs/class-diagram/',
                component: ComponentCreator('/UML-Umbrello-Tutorials/docs/class-diagram/', 'da1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/UML-Umbrello-Tutorials/docs/seqeunce-diagram/',
                component: ComponentCreator('/UML-Umbrello-Tutorials/docs/seqeunce-diagram/', 'cce'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/UML-Umbrello-Tutorials/docs/state-diagram/',
                component: ComponentCreator('/UML-Umbrello-Tutorials/docs/state-diagram/', 'd42'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/UML-Umbrello-Tutorials/docs/use-case/',
                component: ComponentCreator('/UML-Umbrello-Tutorials/docs/use-case/', 'bf9'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/UML-Umbrello-Tutorials/',
    component: ComponentCreator('/UML-Umbrello-Tutorials/', '987'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
