import { ReviewItem } from '../types/menu';

export const RESTAURANT_INFO = {
  name: 'مضغوط الليبي - المحلة',
  tagline: 'أصل المضغوط والأكل العربي الخليجي',
  shortStory: '19 سنة خبرة في الأكل العربي، توابل سرية من قلب الخليج، الجودة والأمانة... ثقافة وهوية.',
  establishedYear: 2007,
  phone: '01131589950',
  whatsapp: '201131589950', // Formatted for international WhatsApp link
  whatsappDisplay: '01131589950',
  address: 'الشعبية - بجوار مستشفى الربيع، المحلة الكبرى',
  city: 'المحلة الكبرى',
  openingHours: {
    start: '12:00 ظهرًا',
    end: '12:00 منتصف الليل',
    fullText: 'يوميًا من 12:00 ظهرًا حتى 12:00 منتصف الليل'
  },
  socialLinks: {
    facebook: 'https://www.facebook.com/ELLIBY18',
    instagram: 'https://www.instagram.com',
    whatsapp: 'https://wa.me/201131589950',
  },
  stats: [
    { value: '+19', label: 'سنة خبرة أصيلة', description: 'منذ عام 2007 ونحن نصنع التميز' },
    { value: '+100K', label: 'وجبة قُدمت بحب', description: 'ثقة آلاف العائلات في المحلة' },
    { value: '100%', label: 'لحم بلدي طازج', description: 'مذبوح يومياً بأعلى معايير الأمانة' },
    { value: '5.0 ★', label: 'تقييم زوارنا', description: 'أعلى تقييم لجودة المضغوط الخليجي' },
  ],
  whyUs: [
    {
      id: 1,
      icon: 'History',
      title: '19 سنة خبرة',
      description: 'خبرة طويلة وعميقة في فنون الأكل العربي والخليجي توارثناها وطورناها لنقدم لكم النكهة الأصلية كما يجب أن تكون.',
    },
    {
      id: 2,
      icon: 'ShieldCheck',
      title: 'لحم بلدي ومكونات مختارة',
      description: 'نختار لحومنا البلدية طازجة ومذبوحة يومياً، مع أجود حبات الأرز البسمتي الفاخر وخضروات طازجة بدون أي تنازل.',
    },
    {
      id: 3,
      icon: 'Flame',
      title: 'وصفات أصلية وتوابل سرية',
      description: 'خلطة بهارات خاصة قادمة من قلب الخليج العربي وممزوجة بتكنيك الضغط الحصري الذي يجعل العصارة تتشبع في كل حبة أرز.',
    },
    {
      id: 4,
      icon: 'HeartHandshake',
      title: 'الجودة والأمانة ثقافة وهوية',
      description: 'كميات مشبعة جداً، كرم الضيافة العربي، ونظافة فائقة تجعل تجربة الأكل مع عائلتك متعة لا تُنسى.',
    }
  ],
  aboutStory: {
    badge: 'أصالة في كل طبق',
    title: 'قصة 19 عاماً من الشغف بالأكل العربي والخليجي',
    paragraphs: [
      'منذ عام 2007 ونحن نقدم الأكل العربي والخليجي بطابع أصيل يحافظ على روح الوصفة وجودة اللحم البلدي الطازج.',
      'سر صنعتنا في حبس البخار والبهارات الخليجية المعتقة ليتشرب الأرز البسمتي كل قطرة من العصارة الغنية.. تجربة تشبه دفء البيت بفخامة المطاعم الكبرى.'
    ],
    features: [
      'تتبيلات حصرية من قلب الخليج',
      'صلصات مجانية مع كل وجبة (دقوس وتومية)',
      'لحم بلدي طازج ومذبوح يومياً',
      'توصيل سريع ساخن في كافة أرجاء المحلة'
    ]
  },
  gallery: [
    {
      title: 'مضغوط لحم بلدي ملكي',
      category: 'المضغوط',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'مضغوط تندوري هندي مدخن',
      category: 'المضغوط',
      image: 'https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'مبكبكة ليبية ساخنة بالسجق',
      category: 'المبكبكة',
      image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'وليمة العائلات المميزة',
      category: 'العزومات',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'مضغوط باربكيو مكرمل',
      category: 'المضغوط',
      image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'دجاج محمر مع بهارات الضغط',
      category: 'المضغوط',
      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop'
    }
  ]
};

export const REVIEWS: ReviewItem[] = [
  {
    id: '1',
    name: 'م. أحمد الشناوي',
    location: 'المحلة - شكري القوتلي',
    rating: 5,
    comment: 'أفضل مضغوط أكلته في مصر كلها مش بس في المحلة! طعم الرز البسمتي شارب التوابل واللحم دايب دوبان.. والنظافة ممتازة جداً.',
    date: 'منذ يومين',
    favoriteDish: 'مضغوط مقلقل لحم بلدي'
  },
  {
    id: '2',
    name: 'د. سارة المنشاوي',
    location: 'المحلة - الشعبية',
    rating: 5,
    comment: 'المبكبكة بالسجق والمضغوط التندوري حكاية تانية خالص! التوصيل كان سريع والأكل وصل سخن مولع والدقوس والتومية تحفة.',
    date: 'منذ أسبوع',
    favoriteDish: 'مضغوط تندوري + مبكبكة بالسجق'
  },
  {
    id: '3',
    name: 'أ/ محمود عبد الهادي',
    location: 'المحلة - أبو راضي',
    rating: 5,
    comment: 'عرض الليبي بجد يشرف في أي لمة عائلية، كميات محترمة وتكفي وزيادة، والسعر ممتاز مقارنة بالجودة واللحمة البلدي الفريش.',
    date: 'منذ 4 أيام',
    favoriteDish: 'عرض الليبي الملكي'
  }
];
