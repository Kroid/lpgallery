// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Landing',
        path: './data/landings/*.yml',
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Resolutions',
        path: './data/resolutions/*.yml',
      },
    },
  ],
  templates: {
    Landing: `/landing/:id`,
  },
}
