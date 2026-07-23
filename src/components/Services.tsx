import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Eye, Scale, ClipboardCheck, Home, Thermometer, Ruler } from 'lucide-react';

const ServiceCard: React.FC<{ 
  title: string; 
  description: string; 
  imageUrl: string; 
  imageAlt: string;
  icon: React.ReactNode;
  standard?: string;
  href?: string;
  isSpecial?: boolean;
  imageClassName?: string;
  imageStyle?: React.CSSProperties;
}> = ({ title, description, imageUrl, imageAlt, icon, standard, href = "#contact", isSpecial, imageClassName = "", imageStyle }) => {
  return (
    <Link 
      href={href}
      className={`group flex flex-col h-full bg-white rounded-[2.5rem] border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-700 hover:-translate-y-2 overflow-hidden focus:outline-none focus:ring-4 focus:ring-blue-500/10 ${isSpecial ? 'ring-2 ring-blue-500/20' : ''}`}
      aria-label={`Detailed information on service ${title}`}
    >
      <div className="relative overflow-hidden h-80">
        <Image 
          src={imageUrl} 
          alt={imageAlt} 
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={`object-cover transition-transform duration-1000 group-hover:scale-105 ${imageClassName}`} 
          style={imageStyle}
          priority={false}
          referrerPolicy="no-referrer"
        />
        {/* Soft, low-opacity bottom overlay to ensure text/icons are visible while letting max light through */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-950/20 to-transparent opacity-40"></div>
        
        {standard && (
          <div className="absolute top-6 left-6 z-20">
            <span className="text-xs font-bold text-blue-600 bg-blue-50/95 backdrop-blur-sm px-3 py-1 rounded-full border border-blue-100/50 shadow-sm whitespace-nowrap">
              {standard}
            </span>
          </div>
        )}

        <div className="absolute bottom-8 right-8 w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-2xl transform transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 z-20">
          {icon}
        </div>
      </div>
      
      <div className="p-10 flex flex-col flex-grow text-right bg-white relative z-10">
        <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <div className="text-slate-600 leading-relaxed flex-grow text-base mb-10">
          {description.split('\n\n').map((paragraph, i) => (
            <p 
              key={i} 
              className={`mb-4 last:mb-0 ${isSpecial && i === 0 ? 'font-black text-blue-600' : ''}`}
            >
              {paragraph}
            </p>
          ))}
        </div>
        
        <div className="flex items-center gap-3 text-blue-600 font-extrabold text-sm uppercase tracking-widest mt-auto group-hover:gap-6 transition-all justify-end border-t border-slate-50 pt-8">
          <span>גלה עוד על השירות</span>
          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
            <svg className="w-5 h-5 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      title: 'איתור ליקויי בנייה הנדסיים מורכבים',
      description: 'אבחון ומיפוי ליקויי בנייה מורכבים ע"י מהנדס מוסמך. אנו מאתרים סדקים מבניים, כשלי איטום ובעיות בטיחות ומספקים דו"ח הנדסי מחייב הקביל בבית משפט.',
      imageUrl: "https://res.cloudinary.com/dbzklnlcx/image/upload/f_auto,q_auto,e_brightness:80,e_contrast:10/v1782731603/pic333_gjc0li.jpg",
      imageAlt: 'מהנדס מוסמך בביצוע איתור ליקויי בנייה הנדסיים וביקורת מבנים',
      standard: 'ת"י 1920',
      icon: <Eye className="w-6 h-6" />,
      href: '#knowledge',
      imageStyle: { filter: 'brightness(1.4) contrast(1.05)' }
    },
    {
      title: 'חוות דעת הנדסית לבית משפט',
      description: 'כתיבת חוות דעת הנדסית מקיפה ומקצועית הקבילה בערכאות משפטיות. הדו"ח נערך ע"י מהנדס מומחה ומנוסה ומספק לכם גיבוי משפטי חזק, ליווי מלא ומתן עדות מומחה בבית המשפט בגין ליקויי בנייה.',
      imageUrl: "https://res.cloudinary.com/dbzklnlcx/image/upload/f_auto,q_auto,e_brightness:80,e_contrast:10/v1782731148/%D7%AA%D7%9E%D7%95%D7%A0%D7%94_22_ezx6yn.jpg",
      imageAlt: 'חוות דעת הנדסית לבית משפט - מהנדס בניין מומחה',
      standard: 'הנדסה',
      icon: <Scale className="w-6 h-6" />,
      href: '/חוות-דעת-הנדסית-לבית-משפט',
      imageStyle: { filter: 'brightness(1.4) contrast(1.05)' }
    },
    {
      title: 'ביקורת דירה יד שנייה לפני קנייה',
      description: 'בדיקת דירה מקיפה לחשיפת ליקויים סמויים, רטיבות ובעיות שלד. דו"ח המהנדס מעניק לכם כוח מיקוח משמעותי במשא ומתן על מחיר הדירה.',
      imageUrl: "https://res.cloudinary.com/dbzklnlcx/image/upload/f_auto,q_auto,e_brightness:80,e_contrast:10/v1782730883/%D7%AA%D7%9E%D7%95%D7%A0%D7%94_11_b6nrtu.jpg",
      imageAlt: 'בדק בית לדירת יד שנייה לפני חתימה על חוזה מכר',
      standard: 'ת"י 1205',
      icon: <ClipboardCheck className="w-6 h-6" />,
      href: '/בדק-בית-יד-שנייה',
      imageStyle: { filter: 'brightness(1.4) contrast(1.05)' }
    },
    {
      title: 'בדק בית לבתים פרטיים',
      description: 'ביקורת מקיפה לצמודי קרקע, גגות רעפים ותשתיות חוץ.',
      imageUrl: "https://res.cloudinary.com/dbzklnlcx/image/upload/f_auto,q_auto,w_600/v1770018097/%D7%95%D7%99%D7%9C%D7%94_%D7%99%D7%95%D7%A7%D7%A8%D7%AA%D7%99%D7%AA_%D7%91%D7%94%D7%A8%D7%A6%D7%9C%D7%99%D7%94_%D7%A4%D7%99%D7%AA%D7%95%D7%97_coh01x.jpg",
      imageAlt: 'בדק בית לוילות ובתים פרטיים',
      standard: 'ת"י 1004',
      icon: <Home className="w-6 h-6" />,
      href: '/בדק-בית-לבית-פרטי-וילה'
    },
    {
      title: 'איתור נזילות ורטיבות תרמי',
      description: 'אבחון מדויק במצלמה תרמית, מול קבלנים ושכנים.',
      imageUrl: "https://res.cloudinary.com/dbzklnlcx/image/upload/f_auto,q_auto,w_600/v1769635012/%D7%90%D7%99%D7%AA%D7%95%D7%A8_%D7%A8%D7%98%D7%99%D7%91%D7%95%D7%99%D7%95%D7%AA_irxrhe.jpg",
      imageAlt: 'איתור נזילות במצלמה תרמית',
      standard: 'ISO 6781',
      icon: <Thermometer className="w-6 h-6" />,
      href: '/איתור-נזילות-ורטיבות'
    },
    {
      title: 'אישור מהנדס לפרגולה',
      description: 'הנפקת אישור יציבות בהתאם לתיקון 101, כולל דיווח לעירייה.',
      imageUrl: "https://res.cloudinary.com/dbzklnlcx/image/upload/v1784701445/pergula1_fy0uux.jpg",
      imageAlt: 'אישור מהנדס לפרגולה תיקון 101',
      standard: 'תיקון 101',
      icon: <Ruler className="w-6 h-6" />,
      href: '/אישור-מהנדס-לפרגולה'
    }
  ];


  return (
    <section id="services" className="py-8 md:py-16 bg-slate-50 scroll-mt-24 grid-bg relative overflow-hidden">
      {/* Decorative background elements for luxury feel */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative">
        {/* Subtle luxury accent line */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
        
        <div className="text-right mb-6 md:mb-10 max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1]">
            פתרונות <span className="luxury-text-gradient">הנדסיים</span> <br className="hidden md:block"/> לכל שלב בנכס שלכם
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12 relative z-10">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              {...service} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;