export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'Stuntback46/sanity-angular-tailwindcss-website'
      }
    },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62023f887c4541783a8c00b2',
                  title: 'Sanity Studio',
                  name: 'sanity-angular-tailwindcss-website-studio-emg8umg6',
                  apiId: 'ce46a64c-7c87-4b46-847b-9126ed7d5cfd'
                },
                {
                  buildHookId: '62023f8804cd3880feee97a5',
                  title: 'Website',
                  name: 'sanity-angular-tailwindcss-website-web-mpbje449',
                  apiId: 'e80b1ae4-d7cf-42e1-9986-e62774b5a54e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Stuntback46/sanity-angular-tailwindcss-website',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-angular-tailwindcss-website-web-mpbje449.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
