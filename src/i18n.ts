import { createI18n } from 'vue-i18n';

// 定义多语言翻译
const messages = {
  en: {
    message: {
      // Header
      home: 'Home',
      destinations: 'Attractions',
      tours: 'Tours',
      about: 'About Us',
      contact: 'Contact',
      xianTourism: 'Xi\'an Tourism',
      
      // Hero
      heroTitle: 'Discover the Ancient Capital of Xi\'an',
      heroSubtitle: 'Explore the rich history, culture, and cuisine of one of China\'s oldest cities',
      heroDescription: 'Xi\'an, one of China\'s oldest cities with over 3,000 years of history, was the capital of multiple dynasties and the eastern terminus of the Silk Road.',
      startExploring: 'Start Exploring',
      learnMore: 'Learn More',
      
      // Features
      featuresTitle: 'Xi\'an Highlights',
      terracottaArmy: 'Terracotta Warriors',
      terracottaArmyDesc: 'The world-famous Terracotta Army, an UNESCO World Heritage site',
      cityWall: 'Ancient City Wall',
      cityWallDesc: 'One of the best preserved ancient military defensive systems in the world',
      mosque: 'Great Mosque',
      mosqueDesc: 'A beautiful blend of Chinese and Islamic architecture',
      food: 'Xi\'an Cuisine',
      foodDesc: 'Experience the unique flavors of Muslim Quarter and local delicacies',
      hanyangling: 'Han Yang Ling',
      hanyanglingDesc: 'Imperial tombs of the Western Han Dynasty with fascinating archaeological discoveries',
      forestofsteles: 'Forest of Steles',
      forestofstelesDesc: 'A museum showcasing ancient Chinese calligraphy and stone carvings',
      tangdynasty: 'Tang Dynasty Show',
      tangdynastyDesc: 'Magnificent performances showcasing the prosperity of the Tang Dynasty',
      
      // Tours
      toursTitle: 'Popular Xi\'an Tours',
      oneDayTour: 'One-Day Terracotta Warriors Tour',
      oneDayTourDesc: 'Visit the world-famous Terracotta Army and learn about ancient Chinese history.',
      oneDayTourDuration: 'Duration: 1 Day',
      oneDayTourPrice: 'Price: $120',
      threeDayTour: '3-Day Ancient Capitals Tour',
      threeDayTourDesc: 'Explore Xi\'an, including the Terracotta Army, City Wall, and Muslim Quarter.',
      threeDayTourDuration: 'Duration: 3 Days',
      threeDayTourPrice: 'Price: $380',
      fiveDayTour: '5-Day Cultural Heritage Tour',
      fiveDayTourDesc: 'Comprehensive tour covering all major attractions in Xi\'an and nearby areas.',
      fiveDayTourDuration: 'Duration: 5 Days',
      fiveDayTourPrice: 'Price: $650',
      customTour: 'Custom Private Tour',
      customTourDesc: 'Personalized tour tailored to your interests and schedule.',
      customTourDuration: 'Duration: Flexible',
      customTourPrice: 'Price: Customized',
      
      // Destinations
      destinationsTitle: 'Top Attractions in Xi\'an',
      terracotta: 'Terracotta Army',
      terracottaDesc: 'UNESCO World Heritage Site',
      terracottaDetail: 'The Terracotta Army is a collection of terracotta sculptures depicting the armies of Qin Shi Huang, the first Emperor of China. It is a UNESCO World Heritage Site and one of the most significant archaeological sites in the world.',
      citywall: 'City Wall',
      citywallDesc: 'Ancient defense fortification',
      citywallDetail: 'The Xi\'an City Wall is one of the oldest and best-preserved Chinese city walls, dating back to the Ming Dynasty. It encircles the ancient city of Xi\'an and offers beautiful views and a glimpse into the city\'s history.',
      giantwildgoose: 'Giant Wild Goose Pagoda',
      giantwildgooseDesc: 'Buddhist pagoda with beautiful gardens',
      giantwildgooseDetail: 'The Giant Wild Goose Pagoda is a Buddhist pagoda built in 652 during the Tang Dynasty. It is an important landmark of ancient Xi\'an and offers beautiful views of the surrounding area.',
      muslimquarter: 'Muslim Quarter',
      muslimquarterDesc: 'Vibrant area with food and culture',
      muslimquarterDetail: 'The Muslim Quarter is a historic area in Xi\'an famous for its Muslim culture, architecture, and street food. It\'s a vibrant place where visitors can experience the unique blend of Chinese and Islamic cultures.',
      smallwildgoose: 'Small Wild Goose Pagoda',
      smallwildgooseDesc: 'Historic pagoda with ancient charm',
      smallwildgooseDetail: 'Small Wild Goose Pagoda was built in 709 during the Tang Dynasty. It stands as a testament to ancient Chinese architecture and Buddhist culture.',
      belltower: 'Bell Tower',
      belltowerDesc: 'Historic bell tower in the city center',
      belltowerDetail: 'The Bell Tower is a magnificent ancient structure in the heart of Xi\'an. Built during the Ming Dynasty, it features a beautiful display of traditional Chinese architecture and houses a collection of ancient bells.',
      pagodaeight: 'Pagoda of Eighteen Songs',
      pagodaeightDesc: 'Historic site with cultural significance',
      pagodaeightDetail: 'The Pagoda of Eighteen Songs is an important cultural site in Xi\'an, representing the city\'s rich history and cultural heritage.',
      
      // Testimonials
      testimonialsTitle: 'Traveler Reviews',
      testimonial1: 'The Terracotta Warriors exceeded all expectations! The historical significance and scale of this discovery is truly mind-blowing. A must-see destination!',
      testimonial2: 'Walking on the ancient city wall was an amazing experience. The views of Xi\'an were spectacular and the history felt so tangible.',
      testimonial3: 'The Muslim Quarter food tour was incredible. The flavors and spices were so unique and the cultural experience was unforgettable.',
      author1: 'John Smith',
      author2: 'Emma Johnson',
      author3: 'Michael Brown',
      trip1: 'Historical Tour',
      trip2: 'City Exploration',
      trip3: 'Food Tour',
      
      // Footer
      companyDesc: 'Providing you with the best Xi\'an travel experiences, making every trip an unforgettable memory.',
      quickLinks: 'Quick Links',
      contactInfo: 'Contact Info',
      phone: '📞 +86 29 1234 5678',
      email: '✉️ info [at] xiantourism.com', // 修复邮箱格式以避免vue-i18n解析错误
      address: '🏢 No. 1, South Gate, Xi\'an City, Shaanxi Province',
      newsletter: 'Newsletter',
      newsletterDesc: 'Subscribe to our newsletter for travel tips and offers',
      subscribe: 'Subscribe',
      copyright: '© 2026 Xi\'an Travel Hub. All rights reserved.'
    }
  },
  zh: {
    message: {
      // Header
      home: '首页',
      destinations: '景点',
      tours: '旅游线路',
      about: '关于我们',
      contact: '联系我们',
      xianTourism: '西安旅游',
      
      // Hero
      heroTitle: '探索古都西安',
      heroSubtitle: '体验中国最古老城市之一的丰富历史、文化和美食',
      heroDescription: '西安是中国最古老的城市之一，拥有3000多年的历史，曾是多个朝代的都城，也是丝绸之路的东端起点。',
      startExploring: '开始探索',
      learnMore: '了解更多',
      
      // Features
      featuresTitle: '西安亮点',
      terracottaArmy: '兵马俑',
      terracottaArmyDesc: '举世闻名的兵马俑，联合国教科文组织世界遗产地',
      cityWall: '古城墙',
      cityWallDesc: '世界上最完整保存的古代军事防御系统之一',
      mosque: '大清真寺',
      mosqueDesc: '中国与伊斯兰建筑风格的美丽融合',
      food: '西安美食',
      foodDesc: '体验回民街和当地美食的独特风味',
      hanyangling: '汉阳陵',
      hanyanglingDesc: '西汉帝陵，拥有令人着迷的考古发现',
      forestofsteles: '碑林博物馆',
      forestofstelesDesc: '展示中国古代书法和石刻艺术的博物馆',
      tangdynasty: '大唐表演',
      tangdynastyDesc: '展现盛唐繁荣景象的精彩演出',
      
      // Tours
      toursTitle: '热门西安旅游线路',
      oneDayTour: '一日游兵马俑之旅',
      oneDayTourDesc: '参观举世闻名的兵马俑，了解中国古代历史。',
      oneDayTourDuration: '时长：1天',
      oneDayTourPrice: '价格：120美元',
      threeDayTour: '三日古都之旅',
      threeDayTourDesc: '探索西安，包括兵马俑、古城墙和回民街。',
      threeDayTourDuration: '时长：3天',
      threeDayTourPrice: '价格：380美元',
      fiveDayTour: '五日文化遗产之旅',
      fiveDayTourDesc: '全面游览西安及周边地区的各大景点。',
      fiveDayTourDuration: '时长：5天',
      fiveDayTourPrice: '价格：650美元',
      customTour: '定制私人之旅',
      customTourDesc: '根据您的兴趣和时间安排的个性化旅游。',
      customTourDuration: '时长：灵活安排',
      customTourPrice: '价格：定制',
      
      // Destinations
      destinationsTitle: '西安顶级景点',
      terracotta: '兵马俑',
      terracottaDesc: '联合国教科文组织世界遗产',
      terracottaDetail: '兵马俑是秦始皇陵的陪葬品，展示了中国古代的军事力量和艺术成就，是世界文化遗产，也是中国最重要的考古发现之一。',
      citywall: '古城墙',
      citywallDesc: '古代防御工事',
      citywallDetail: '西安城墙是中国现存最完整、规模最大的古代军事城堡设施之一，建于明初，环绕着古都西安，展现了古代中国的建筑智慧。',
      giantwildgoose: '大雁塔',
      giantwildgooseDesc: '佛教古塔与美丽花园',
      giantwildgooseDetail: '大雁塔建于唐代，是佛教文化的重要象征，塔高64米，是西安的标志性建筑之一，周围有美丽的园林景观。',
      muslimquarter: '回民街',
      muslimquarterDesc: '充满美食与文化的繁华区域',
      muslimquarterDetail: '回民街是西安著名的回族聚居区，以其独特的伊斯兰建筑风格、丰富的美食文化和历史传统而闻名。',
      smallwildgoose: '小雁塔',
      smallwildgooseDesc: '古韵悠长的古塔',
      smallwildgooseDetail: '小雁塔建于唐代，是西安另一座重要的佛教古塔，虽规模小于大雁塔，但同样具有深厚的历史文化底蕴。',
      belltower: '钟楼',
      belltowerDesc: '市中心的历史钟楼',
      belltowerDetail: '西安钟楼是明代建筑的代表作，位于市中心，楼内收藏着多口古代铜钟，是了解古代报时制度的重要场所。',
      pagodaeight: '八音寺塔',
      pagodaeightDesc: '具有文化意义的历史遗址',
      pagodaeightDetail: '八音寺塔是西安重要的历史文化遗址，体现了这座城市深厚的历史文化积淀。',
      
      // Testimonials
      testimonialsTitle: '游客评价',
      testimonial1: '兵马俑超出了所有预期！这一发现的历史意义和规模令人惊叹。必游景点！',
      testimonial2: '在古城墙上漫步是一次美妙的体验。西安的景色壮观，历史感触手可及。',
      testimonial3: '回民街美食之旅令人难以置信。香料和风味独特，文化体验令人难忘。',
      author1: '张三',
      author2: '李四',
      author3: '王五',
      trip1: '历史之旅',
      trip2: '城市探索',
      trip3: '美食之旅',
      
      // Footer
      companyDesc: '为您提供最佳的西安旅游体验，让每次旅行都成为难忘的回忆。',
      quickLinks: '快速链接',
      contactInfo: '联系方式',
      phone: '📞 +86 29 1234 5678',
      email: '✉️ info [at] xiantourism.com', // 修复邮箱格式以避免vue-i18n解析错误
      address: '🏢 陕西省西安市南门1号',
      newsletter: '新闻订阅',
      newsletterDesc: '订阅我们的新闻，获取旅游贴士和优惠信息',
      subscribe: '订阅',
      copyright: '© 2026 西安旅游中心. 保留所有权利。'
    }
  }
};

// 从localStorage获取语言设置
const getLocaleFromLocalStorage = (): string => {
  const locale = localStorage.getItem('locale');
  // 验证语言代码是否有效
  if (locale === 'en' || locale === 'zh') {
    return locale;
  }
  // 如果localStorage中没有语言设置，则返回默认语言
  return 'en'; // 根据项目规范，面向国外用户，默认语言应设置为英语
};

// 设置语言到localStorage
const setLocaleToLocalStorage = (locale: string) => {
  localStorage.setItem('locale', locale);
};

// 创建 i18n 实例
const i18n = createI18n({
  legacy: false, // 使用 Composition API 模式
  locale: getLocaleFromLocalStorage(), // 从localStorage获取语言设置
  fallbackLocale: 'en', // 回退语言
  messages,
});

// 导出设置语言到localStorage的函数，供App.vue使用
export { setLocaleToLocalStorage };

export default i18n;