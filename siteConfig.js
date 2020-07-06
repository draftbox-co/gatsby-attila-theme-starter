module.exports = {
  siteUrl: `https://ghost-attila-preview.draftbox.co`, // Site domain. Do not include a trailing slash!

  postsPerPage: 12, // Number of posts shown on paginated pages (changes this requires sometimes to delete the cache)

  siteTitleMeta: `Built with Draftbox`, // This allows an alternative site title for meta data for pages.
  siteDescriptionMeta: `Lightning fast, secure front-end for your WordPress or Ghost blog, without coding.`, // This allows an alternative site description for meta data for pages.

  shareImageWidth: 1000, // Change to the width of your default share image
  shareImageHeight: 523, // Change to the height of your default share image

  shortTitle: `Built with Draftbox`, // Used for App manifest e.g. Mobile Home Screen
  siteIcon: `favicon.png`, // Logo in /static dir used for SEO, RSS, and App manifest
  backgroundColor: `#e9e9e9`, // Used for Offline Manifest
  themeColor: `#15171A`, // Used for Offline Manifest
  apiUrl: `https://ghost.theasdfghjkl.com`,
  subscribeWidget: {
    title: "Subscribe to Draftbox",
    helpText: "Get the latest posts delivered right to your inbox.",
    successMessage: "Thanks for subscribing to Built with Draftbox.",
  },
  header: {
    navigation: [
      {
        label: "Home",
        url: "https://ghost-attila-preview.draftbox.co/",
      },
      {
        label: "Contact",
        url: "https://ghost-attila-preview.draftbox.co/contact",
      },
    ],
  },
  footer: {
    copyright: "Built with Draftbox",
    navigation: [
      {
        label: "Home",
        url: "https://ghost-attila-preview.draftbox.co/",
      },
      {
        label: "Sitemap",
        url: "https://ghost-attila-preview.draftbox.co/sitemap.xml",
      },
      {
        label: "RSS",
        url: "https://ghost-attila-preview.draftbox.co/rss.xml",
      },
      {
        label: "Contact",
        url: "https://ghost-attila-preview.draftbox.co/contact",
      },
      {
        label: "External Link",
        url: "https://spectrum.chat/gatsby-js/themes?tab=posts",
      },
    ],
  },
  socialLinks: {
    twitter: "https://twitter.com/draftboxhq",
    facebook: "https://facebook.com/draftboxhq",
    instagram: "https://www.instagram.com/draftboxhq_uploads",
    linkedin: "https://linkedin.com/",
    github: "https://github.com/draftbox-co",
  },
  contactWidget: {
    title: "Contact Built with Draftbox",
    successMessage: "We’ll get in touch with you soon.",
  },
  metadata: {
    title: "Built with Draftbox",
    description:
      "Lightning fast, secure front-end for your WordPress or Ghost blog, without coding. Draftbox is a new-age blogging platform for everyone, built on Gatsby.",
  },
  twitterCard: {
    title: "Built with Draftbox",
    description:
      "Lightning fast, secure front-end for your WordPress or Ghost blog, without coding. Draftbox is a new-age blogging platform for everyone, built on Gatsby.",
    imageUrl: "twitterImage.png",
    username: "@DraftboxHQ",
  },
  facebookCard: {
    title: "Built with Draftbox",
    description:
      "Lightning fast, secure front-end for your WordPress or Ghost blog, without coding. Draftbox is a new-age blogging platform for everyone, built on Gatsby.",
    imageUrl: "facebookImage.png",
    appId: "",
    width: 1000,
    height: 523,
  },
  siteTitle: "Built with Draftbox",
  siteDescription:
    "Lightning fast, secure front-end for your WordPress or Ghost blog, without coding.",
  language: "en",
  logoUrl: "logo.svg",
  iconUrl:
    "https://ghost.theasdfghjkl.com/content/images/2020/05/draftbox-colored-icon.png",
  coverUrl: "cover.png",
  alternateLogoUrl: "alternateLogo.svg"
};
