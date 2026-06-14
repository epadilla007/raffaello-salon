import { config, fields, collection, singleton } from '@keystatic/core'

export default config({
  storage: {
    kind: 'github',
    repo: {
      owner: 'epadilla007',
      name: 'raffaello-salon',
    },
  },

  ui: {
    brand: { name: 'Raffaello Salon' },
  },

  collections: {
    services: collection({
      label: 'Services',
      slugField: 'title',
      path: 'src/content/services/*',
      schema: {
        title: fields.slug({ name: { label: 'Service Name' } }),
        description: fields.text({ label: 'Description', multiline: true }),
        price: fields.text({ label: 'Price (e.g. From $120)' }),
        duration: fields.text({ label: 'Duration (e.g. 60–90 min)' }),
        category: fields.select({
          label: 'Category',
          options: [
            { label: 'Hair', value: 'hair' },
            { label: 'Colour', value: 'colour' },
            { label: 'Spa', value: 'spa' },
            { label: 'Bridal', value: 'bridal' },
          ],
          defaultValue: 'hair',
        }),
      },
    }),

    team: collection({
      label: 'Team Members',
      slugField: 'name',
      path: 'src/content/team/*',
      schema: {
        name: fields.slug({ name: { label: 'Full Name' } }),
        role: fields.text({ label: 'Role / Title' }),
        bio: fields.text({ label: 'Bio', multiline: true }),
        image: fields.image({
          label: 'Photo',
          directory: 'public/images/team',
          publicPath: '/images/team',
        }),
      },
    }),
  },

  singletons: {
    homepage: singleton({
      label: 'Homepage',
      path: 'src/content/homepage',
      schema: {
        heroHeadline: fields.text({ label: 'Hero Headline' }),
        heroSubline: fields.text({ label: 'Hero Subline' }),
        ctaLabel: fields.text({ label: 'CTA Button Label' }),
        aboutHeading: fields.text({ label: 'About Section Heading' }),
        aboutBody: fields.text({ label: 'About Section Body', multiline: true }),
      },
    }),
  },
})
