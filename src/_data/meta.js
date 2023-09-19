module.exports = {
  url: process.env.URL || 'http://localhost:8080',
  siteName: 'Collectively Made',
  siteDescription:
    'Portfolio website for the design collective, Collectively Made.',
  siteType: 'Agency', // schema
  locale: 'en_EN',
  lang: 'en',
  skipContent: 'Skip to content',
  author: 'Alex Russell',
  authorEmail: 'alex@collectivelymade.com', 
  authorWebsite: 'http://alexanderussell.org', 
  themeColor: '#232323',
  themeBgColor: '#F3F3F3', // Manifest: defines a placeholder background color for the application page to display before its stylesheet is loaded
  meta_data: {
    opengraph_default: '/assets/images/opengraph-default.jpg', // fallback/default meta image
    opengraph_default_alt:
      'Visible content: Eleventy starter based on workflow for Cube CSS, Every Layout, Design Tokens and Tailwind for uitility, based on the concepts explained in buildexcellentwebsit.es ', // alt text for default meta image
    twitterSite: '', // i.e. @site - twitter profile of the site
    twitterCreator: '@alexanderussell', // i.e. @author -  twitter profile of the site
    mastodonProfile: '' 
  },
  blog: {
    // this is for the rss feed
    name: 'My great Web Development Blog',
    description:
      'Tell the word what you are writing about in your blog! It will show up on feed readers.'
  },
  pagination: {
    itemsPerPage: 20
  },
  address: {
    // edit all presets or leave empty. They are being used in the pages for privacy.md and imprint.md
    firma: 'Collectively Made',
    street: '',
    city: '',
    state: '',
    zip: '',
    mobileDisplay: '',
    mobileCall: '',
    email: 'alex@collectivelymade.com',
    cif: ''
  },
  menu: {
    closedText: 'Menu'
  }
};
