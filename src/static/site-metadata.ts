interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'Running Page',
  siteUrl: 'https://helloo2020.github.io/Running-Tim/',
  logo: 'favicon.ico',
  description: 'Personal site and blog',
  navLinks: [
    {
      name: 'Blog',
      url: 'https://helloo2020.github.io',
    },
    {
      name: 'About',
      url: 'https://helloo2020.github.io/about/',
    },
  ],
};

export default data;
