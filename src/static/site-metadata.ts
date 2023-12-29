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
  logo: 'smile.png',
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

// 忽略每个 polyline 的起点和终点的长度（单位：米）。
const IGNORE_START_END_RANGE = 200;

// 忽略下面 polyline 中每个点的距离的圆圈（单位：米）。
const IGNORE_RANGE = 200;

// 包含要忽略的点的折线。
const IGNORE_POLYLINE = 'ktjrFoemeU~IorGq}DeB';

// 在保存到数据库之前进行过滤，你会丢失一些数据，但可以保护你的隐私，如果你使用的是公共仓库，建议设置为 1。不设置可关闭。
const IGNORE_BEFORE_SAVING = 1;


export default data;
