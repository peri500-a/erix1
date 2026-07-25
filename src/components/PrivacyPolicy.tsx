
import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <section className="pt-52 pb-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-4xl text-right">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tight leading-none">
            מדיניות <br/>
            <span className="text-blue-600">פרטיות</span>
          </h1>
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-sm prose prose-slate prose-p:text-slate-600 prose-headings:text-slate-900 prose-strong:text-slate-900 max-w-none text-right">
            <p className="text-sm text-slate-400">עדכון אחרון: 24 ביולי 2024</p>
            
            <h4 className="text-xl font-bold mb-4">1. כללי</h4>
        <p className="mb-6">
            אריקס ביקורת מבנים (&quot;החברה&quot;, &quot;אנו&quot;, &quot;שלנו&quot;) מחויבת להגנה על פרטיות המבקרים והמשתמשים (&quot;המשתמש&quot;, &quot;אתה&quot;) באתר האינטרנט שלה (&quot;האתר&quot;). מדיניות פרטיות זו מפרטת את סוגי המידע שאנו אוספים, המטרות שלשמן אנו אוספים אותו, וכיצד אנו משתמשים, מאחסנים ומשתפים מידע זה.
        </p>

        <h4 className="text-xl font-bold mb-4">2. איסוף מידע ושימוש בו</h4>
        <p className="mb-4">
            אנו אוספים מידע אישי שאתה מספק לנו מרצונך החופשי בעת שימוש בטופס יצירת הקשר באתר. מידע זה עשוי לכלול:
        </p>
        <ul className="list-disc list-inside mr-4 mb-6 space-y-2">
            <li><strong>פרטי זיהוי ויצירת קשר:</strong> שם מלא, מספר טלפון וכתובת דואר אלקטרוני.</li>
            <li><strong>פרטי הנכס:</strong> כתובת הנכס ופרטים נוספים שתבחר למסור בנוגע לנכס או לשירות המבוקש.</li>
        </ul>
        <p className="mb-4">
            השימוש במידע זה נועד אך ורק למטרות הבאות:
        </p>
         <ul className="list-disc list-inside mr-4 mb-6 space-y-2">
            <li>מענה לפניותיך ומתן שירות לקוחות.</li>
            <li>יצירת קשר לצורך תיאום בדיקה והכנת הצעת מחיר.</li>
            <li>שיפור השירותים וחווית המשתמש באתר.</li>
        </ul>

        <h4 className="text-xl font-bold mb-4">3. שיתוף והעברת מידע</h4>
        <p className="mb-4">
            אנו מצהירים בזאת כי לא נמכור, נסחור, נשכיר או נעביר לצדדים שלישיים כלשהם את המידע האישי שלך ללא הסכמתך המפורשת, אלא במקרים הבאים:
        </p>
        <ul className="list-disc list-inside mr-4 mb-6 space-y-2">
             <li>ככל שהדבר יידרש על פי דין, צו שיפוטי או דרישה של רשות מוסמכת.</li>
             <li>לצורך הגנה על זכויותינו המשפטיות.</li>
        </ul>
        
        <h4 className="text-xl font-bold mb-4">4. אבטחת מידע</h4>
        <p className="mb-6">
            אנו מיישמים מערכות ונהלים סבירים לאבטחת מידע כדי להגן על המידע האישי שלך מפני גישה, שימוש לרעה או חשיפה בלתי מורשית. עם זאת, חשוב להבין כי אף אמצעי אבטחה אינו מספק הגנה מוחלטת, ואיננו יכולים להבטיח את אבטחתו המוחלטת של המידע.
        </p>
        
        <h4 className="text-xl font-bold mb-4">5. זכויותיך</h4>
        <p className="mb-6">
            על פי חוק הגנת הפרטיות, התשמ&quot;א-1981, אתה זכאי לעיין במידע שעליך המוחזק במאגרינו, ולבקש לתקן מידע זה אם אינו נכון, שלם או מדויק, או לבקש את מחיקתו. כדי לממש זכויות אלו, יש לפנות אלינו בכתב באמצעות פרטי ההתקשרות המופיעים באתר.
        </p>
        
        <h4 className="text-xl font-bold mb-4">6. שינויים במדיניות הפרטיות</h4>
        <p className="mb-6">
            אנו שומרים לעצמנו את הזכות לעדכן או לשנות את מדיניות הפרטיות מעת לעת, על פי שיקול דעתנו הבלעדי. כל שינוי ייכנס לתוקף עם פרסום הגרסה המעודכנת באתר. המשך שימושך באתר לאחר פרסום השינויים יהווה הסכמה שלך למדיניות המעודכנת.
        </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
