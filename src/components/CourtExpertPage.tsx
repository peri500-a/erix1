'use client';

import React, { useEffect, useState, useMemo } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { 
  Scale, FileText, CheckCircle2, ShieldCheck, AlertTriangle, Droplet, 
  Layers, Eye, ShieldAlert, Phone, HelpCircle, Award, Search, X, 
  Clock, ExternalLink, Target, Tag, Sparkles
} from 'lucide-react';
import Contact from './Contact';
import Breadcrumbs from './Breadcrumbs';
import SchemaTags from './SchemaTags';

export interface CourtArticle {
  title: string;
  slug: string;
  tagline: string;
  icon: string;
  readingTime: string;
  category: string;
  targetAudience: string;
  keyQuestion: string;
  valueTrigger: string;
  situationId: 'before_lawsuit' | 'small_claims' | 'defense_counter' | 'boq_procedure';
  tags: string[];
  content: Array<{
    type: string;
    text?: string;
    links?: Array<{ href: string; label: string }>;
    items?: Array<{ bold: string; text: string }>;
  }>;
}

const courtArticles: CourtArticle[] = [
  {
    title: "רשימת מומחים לבית משפט",
    slug: "court-experts-list",
    tagline: "בתי המשפט על פי תקנותיהם מאשרים רשימה של מומחים שנבחנו ונמצאו מתאימים ליתן חוות דעת. אינג׳ יוסי פרי מצוי ברשימה זו ומעמיד לרשותכם את הניסיון וההכרה המקצועית הגבוהה ביותר.",
    icon: "Award",
    readingTime: "3 דק' קריאה",
    category: "הסמכה ורישום רשמי",
    targetAudience: "בעלי דירות ועורכי דין",
    keyQuestion: "איך מוודאים שהמהנדס ששכרתם מופיע ברשימות המומחים המאושרות של הנהלת בתי המשפט?",
    valueTrigger: "עיון בהסמכות הרשמיות, פנקס המהנדסים וקישורים ישירים לרשימות הממשלתיות המעודכנות.",
    situationId: "before_lawsuit",
    tags: ["רשימת מומחים", "הנהלת בתי המשפט", "מהנדס רשום", "הסמכה משפטית"],
    content: [
      {
        type: "heading",
        text: "הסמכת מומחים מטעם הנהלת בתי המשפט"
      },
      {
        type: "paragraph",
        text: "על מנת להבטיח את רמתם המקצועית והאובייקטיבית של המומחים המגישים חוות דעת לערכאות המשפטיות, בתי המשפט בישראל פועלים על פי תקנות מוגדרות ומאשרים רשימה רשמית של מומחים מוסמכים. מומחים אלו עוברים תהליך בחינה קפדני ונמצאים מתאימים ומקצועיים מספיק ליתן חוות דעת הנדסיות קבילות."
      },
      {
        type: "paragraph",
        text: "אינג׳ יוסי פרי, המהנדס הראשי והמייסד של אריקס ביקורת מבנים, מצוי ברשימה רשמית זו של מומחי בית המשפט. המשמעות עבורכם היא שחוות הדעת שהוא מפיק נושאות משקל סגולי ואמינות חסרת פשרות בעיני שופטים ומומחים ממונים כאחד."
      },
      {
        type: "heading",
        text: "קישורים למקורות ורשימות רשמיות"
      },
      {
        type: "paragraph",
        text: "לצורך שקיפות מלאה ונוחיותכם, להלן קישורים רשמיים לעיון ברשימות מומחי בית המשפט המאושרות:",
        links: [
          {
            href: "https://www.gov.il/he/pages/experts_lists",
            label: "רשימת מומחים לבית משפט - אתר השירותים והמידע הממשלתי (gov.il)"
          },
          {
            href: "https://www.gov.il/BlobFolder/generalpage/experts_lists/he/civilengacess11.pdf",
            label: "רשימת המומחים המאושרת בתחום הנדסה אזרחית ונגישות (קובץ PDF רשמי)"
          }
        ]
      },
      {
        type: "conclusion",
        text: "בחרו במומחה מוכר ומאושר על ידי בתי המשפט כדי להבטיח את הצלחת התיק שלכם. פנו אלינו לפרטים נוספים ותיאום."
      }
    ]
  },
  {
    title: "חשיבות זהות המומחה בהליכים משפטיים בענף הבנייה",
    slug: "importance-of-expert-identity",
    tagline: "בסכסוכי בנייה וליקויים, השופט המנהל את התיק נעזר כמעט תמיד באנשי מקצוע שישמשו עבורו כ\"עיניים המקצועיות\" בשטח. לזהות המהנדס שאתם שוכרים ולניסיון שלו יש השפעה דרמטית על המשקל שבית המשפט יעניק לממצאים.",
    icon: "ShieldCheck",
    readingTime: "4 דק' קריאה",
    category: "זהות המומחה והליך משפטי",
    targetAudience: "תובעים ונתבעים",
    keyQuestion: "איזה משקל מעניק השופט לזהות המהנדס ולניסיון המעשי שלו בליטיגציה?",
    valueTrigger: "גלו מדוע הרישום בפנקס המהנדסים, הניסיון בעדות מומחה והיכרות עם תקסד״א קובעים את גורל התיק.",
    situationId: "before_lawsuit",
    tags: ["זהות המומחה", "תקסד״א", "עדות מומחה", "אמינות הנדסית"],
    content: [
      {
        type: "heading",
        text: "הדרישות המקצועיות ממומחה הנדסי"
      },
      {
        type: "paragraph",
        text: "כל הנדסאי או מפקח בנייה מוסמך להגיש דוח שיחזיק מעמד בחקירה נגדית בערכאות. אולם כדי שהדוח יהיה בעל משקל משפטי גבוה, מוצע לוודא שאתם שוכרים מהנדס אזרחי רשוי מומחה לכתיבת חוות דעת לבתי משפט. הרישום בפנקס המהנדסים והאדריכלים, הנמצא ברשימת המומחים שנקבעה על ידי בית המשפט, לצד ניסיון מוכח בליטיגציה והיכרות מעמיקה עם תקני הבנייה הישראליים (ת\"י) וחוק המכר, הם המפתח לאמינות התביעה."
      },
      {
        type: "heading",
        text: "הופעה וניסיון בין כותלי בית המשפט"
      },
      {
        type: "paragraph",
        text: "מעבר לכתיבת המסמך הטכני, המהנדס נדרש לעיתים קרובות להגן על מסקנותיו בחקירה פרונטלית. בחירה בתוצר של חברת בדק בית עם ניסיון במתן עדות מומחה בבית משפט מבטיחה לכם איש מקצוע שלא ירתע משאלות מכשילות של הגורמים המשפטיים, וידע להסביר את הכשלים הנדסיים בשפה ברורה ומבוססת."
      },
      {
        type: "paragraph",
        text: "כאשר מדובר בתיקים מורכבים במיוחד, מומלץ להיעזר בשירותיו של מהנדס בורר ומגשר מומחה ליקויי בניה לבית משפט, שמכיר את עולם הגישור ויודע להציג פתרונות הנדסיים הוגנים שיובילו לפשרה מהירה או להכרעה חותכת לטובתכם."
      },
      {
        type: "conclusion",
        text: "אל תתפשרו על פחות מהטוב ביותר עבור התיק המשפטי שלכם. פנו אלינו לתיאום פגישה."
      }
    ]
  },
  {
    title: "הגשת תביעות קטנות וניהול סכסוכי שכנים בנושאי בנייה",
    slug: "small-claims-and-neighbors-disputes",
    tagline: "לא כל סכסוך הנדסי חייב להתנהל בבתי המשפט המחוזיים או השלום בהליכים שנמשכים שנים. במקרים שבהם סכום התביעה מוגבל (כגון כשל מקומי או סכסוך שכנים נקודתי), מסלול התביעות הקטנות מציע פתרון מהיר ויעיל – בתנאי שמגיעים מוכנים.",
    icon: "HelpCircle",
    readingTime: "3 דק' קריאה",
    category: "תביעות קטנות וסכסוכי שכנים",
    targetAudience: "בעלי דירות ושכנים",
    keyQuestion: "איך מגישים חוות דעת הנדסית לבית משפט לתביעות קטנות ללא עורך דין?",
    valueTrigger: "כיצד לבסס תביעה מהירה מול שכן או קבלן, להתמודד מול טענות נגדיות ולהשיג פיצוי מלא.",
    situationId: "small_claims",
    tags: ["תביעות קטנות", "סכסוכי שכנים", "נזקי מים", "הוכחת נזק"],
    content: [
      {
        type: "heading",
        text: "הנדסה במסלול המהיר"
      },
      {
        type: "paragraph",
        text: "תובעים רבים תוהים איך מגישים חוות דעת הנדסית לבית משפט לתביעות קטנות. למרות שבתביעות קטנות לרוב אין ייצוג של עורכי דין, חוקי הראיות לגבי הוכחת נזק הנדסי נותרים בעינם. לא ניתן לתבוע שכן על נזק ללא הצגת מסמך רשמי החתום על ידי מהנדס בניין. הדוח מוגש כנספח לכתב התביעה ומהווה את הבסיס שעליו השופט נשען."
      },
      {
        type: "heading",
        text: "התמודדות מול דוחות נגדיים"
      },
      {
        type: "paragraph",
        text: "במקרים רבים, השכן או החברה הנתבעת יציגו גרסה משלהם למתרחש. בסיטואציה כזו, ייתכן שתצטרכו להצטייד במסמך ממוקד כגון חוות דעת הנדסית נגדית לבית משפט בסכסוך שכנים, המפריך את טענות המומחה של הצד השני ומראה היכן הוא טעה או התעלם מתקני החובה."
      },
      {
        type: "conclusion",
        text: "בין אם מדובר בתביעה קטנה ומהירה ובין אם מדובר בסכסוך מורכב, הכנה נכונה של התשתית ההנדסית היא חצי הדרך לניצחון. צרו קשר ונשמח לסייע לכם להגן על זכויותיכם."
      }
    ]
  },
  {
    title: "חוות דעת נגדית – התמודדות והפרכת טענות הנתבע",
    slug: "counter-expert-opinion",
    tagline: "בסכסוכי בנייה וליקויי דירות, הנתבעים מגישים כמעט תמיד חוות דעת הנדסית נגדית במטרה לגמד, להסתיר או לפסול את הליקויים שלכם. כדי להגן על זכויותיכם, נדרשת היערכות טקטית ודוח תגובה הנדסי ממוקד.",
    icon: "Scale",
    readingTime: "4 דק' קריאה",
    category: "הפרכת טענות ודוח נגדי",
    targetAudience: "תובעים מול קבלנים",
    keyQuestion: "כיצד מומחה הנתבע מנסה לצמצם את הפיצוי שלכם ואיך מפריכים את טענותיו?",
    valueTrigger: "למדו איך מזהים כשלי אבחון בחוות דעת הקבלן ומכינים כתב שאלות הבהרה הנדסי מוחץ.",
    situationId: "defense_counter",
    tags: ["מומחה נגדי", "הפרכת טענות", "שאלות הבהרה", "כשלי אבחון"],
    content: [
      {
        type: "heading",
        text: "כיצד מומחה הנתבע מנסה לצמצם את הפיצוי שלכם?"
      },
      {
        type: "paragraph",
        text: "חוות דעת נגדית נועדה להעמיד בפני בית המשפט גרסה הנדסית מקטינה. מהנדס מטעם קבלן יטען לרוב כי 'הסדקים הם נימיים וקוסמטיים בלבד', כי 'הרטיבות נגרמה משימוש לא נכון של הדיירים או מחוסר אוורור', או כי 'עלות התיקון היא שבר קטן ממה שדרשתם'. הוא יציע פתרונות זולים שאינם פותרים את שורש הבעיה."
      },
      {
        type: "paragraph",
        text: "כדי להתמודד עם כך, אינג׳ יוסי פרי מנתח בקפדנות את חוות הדעת הנגדית, מוצא בה כשלי אבחון טכניים, חוסר תאימות לתקנים מחייבים (ת״י), ומייצר עבור עורכי הדין שלכם חוות דעת משלימה או 'כתב שאלות הבהרה' מוחץ להפרכת טענות הנתבע בבית המשפט."
      },
      {
        type: "conclusion",
        text: "אל תתנו לקבלן או ליזם למסמס את התביעה שלכם בעזרת חוות דעת נגדית מוטה. פנו אלינו לבחינת דוח הנתבע והכנת מענה הנדסי חסין."
      }
    ]
  },
  {
    title: "תביעה שכנגד בסכסוכי קבלנות, בנייה ושיפוצים",
    slug: "counterclaim-construction-disputes",
    tagline: "סכסוכים רבים מתחילים כאשר קבלן או שיפוצניק תובע דייר על 'אי-תשלום יתרת חוב'. במקרים רבים, הגנת הדייר הטובה ביותר היא התקפה בדמות תביעה שכנגד המגובה בחוות דעת הנדסית חסרת פשרות.",
    icon: "ShieldAlert",
    readingTime: "4 דק' קריאה",
    category: "תביעה שכנגד וניהול סיכונים",
    targetAudience: "מזמיני עבודה ומשפצים",
    keyQuestion: "מה עושים כשהקבלן תובע אתכם על אי-תשלום למרות ביצוע לקוי ורשלני?",
    valueTrigger: "איך להשתמש בחוות דעת הנדסית כדי להגיש תביעה שכנגד ולהפוך את מאזן הכוחות המשפטי.",
    situationId: "defense_counter",
    tags: ["תביעה שכנגד", "אי תשלום", "שיפוץ לקוי", "מפרט חוזי"],
    content: [
      {
        type: "heading",
        text: "שינוי מאזן הכוחות המשפטי באמצעות תביעה שכנגד"
      },
      {
        type: "paragraph",
        text: "קבלנים משתמשים לעיתים קרובות באיום משפטי של 'אי תשלום' כדי להשתיק טענות מוצדקות על עבודה רשלנית וליקויי בנייה. כאשר מוגשת נגדכם תביעה כזו, עומדת לכם הזכות להגיש תביעה שכנגד באותו הליך בדיוק."
      },
      {
        type: "paragraph",
        text: "תביעה שכנגד המוגשת עם חוות דעת הנדסית של אינג׳ יוסי פרי, המנוסחת לפי תקנות סדר הדין האזרחי, תשע״ט-2018, מוכיחה לשופט כי אי-התשלום לא נבע מרצון לחסוך אלא מכך שהקבלן סיפק מוצר לקוי, מסוכן ושאינו תואם את המפרט המוסכם. אנו מעריכים את עלות התיקונים המלאה, ההפרשים והסנקציות החוזיות ומטים את הכף לטובתכם."
      },
      {
        type: "conclusion",
        text: "הקבלן תובע אתכם או מאיים בהליך משפטי? צרו איתנו קשר מיידית להכנת חוות דעת מנצחת לתביעה שכנגד."
      }
    ]
  },
  {
    title: "חובת הקטנת הנזק – מדריך משפטי-הנדסי לניזוק",
    slug: "duty-to-mitigate-damage",
    tagline: "אחד הכללים הנוקשים והחשובים ביותר במשפט האזרחי הוא חובת הקטנת הנזק. בעלי נכסים רבים נמנעים מלבצע פעולות דחופות מחשש 'להעלים ראיות', ובכך מסתכנים בפסילת חלק ניכר מהפיצויים שלהם.",
    icon: "Droplet",
    readingTime: "3 דק' קריאה",
    category: "חובת זהירות ותיעוד",
    targetAudience: "בעלי נכסים שנפגעו",
    keyQuestion: "איך לפעול לעצירת הנזק הקיים בלי לפגוע בראיות המשפטיות בתביעה?",
    valueTrigger: "גלו איך לתעד ליקוי דחוף באמצעות צילום תרמי ודוח ביניים קביל לפני ביצוע תיקון חירום.",
    situationId: "before_lawsuit",
    tags: ["הקטנת הנזק", "צילום תרמי", "תיעוד בזמן אמת", "דוח ביניים"],
    content: [
      {
        type: "heading",
        text: "כיצד לפעול נכון בלי לפגוע בראיות המשפטיות?"
      },
      {
        type: "paragraph",
        text: "חוק ותקנות סדר הדין האזרחי מטילים על הניזוק חובה לפעול באופן אקטיבי וסביר למניעת התרחבות הנזק. למשל, אם ישנה נזילת מים פעילה שגורמת לרטיבות קשה, אינכם יכולים להמתין שנתיים לדיון המשפטי תוך שהמים מחריבים את קירות הגבס, הרהיטים ותשתיות החשמל בבית. בית המשפט לא יפסוק פיצוי על נזקים שיכולתם למנוע בקלות."
      },
      {
        type: "paragraph",
        text: "הפתרון המקצועי הוא פנייה אלינו לביצוע בדיקה דחופה ותיעוד הנדסי מיידי של הכשל. אינג׳ יוסי פרי מתעד את הליקוי במצבו הגולמי באמצעות צילום תרמי, הפקת דוח ביניים קביל משפטית, ומנחה אתכם אילו פעולות מניעה או תיקונים זמניים עליכם לבצע כדי לעמוד בדרישות החוק מבלי לפגוע בסיכויי התביעה העיקרית."
      },
      {
        type: "conclusion",
        text: "אל תאפשרו לנזק להחמיר ואל תפעלו ללא תיעוד מקצועי. פנו אלינו מיידית להדרכה ותיעוד הנדסי דחוף."
      }
    ]
  },
  {
    title: "מהו נזק בעין לעומת פיצוי וירידת ערך הנדסית",
    slug: "damage-in-kind-and-repair",
    tagline: "במשפטי ליקויי בנייה, בית המשפט מתחבט בשאלה: האם להורות על ביצוע תיקון פיזי בפועל (תיקון נזק בעין) או לפסוק פיצוי כספי המגלם ירידת ערך של הדירה? הבנת מונחים אלו קריטית לקבלת ההחלטות בתיק.",
    icon: "Layers",
    readingTime: "4 דק' קריאה",
    category: "אומדן כספי וירידת ערך",
    targetAudience: "תובעים ונתבעים",
    keyQuestion: "מתי בית המשפט יורה על תיקון פיזי בפועל ומתי יפסוק פיצוי בגין ירידת ערך?",
    valueTrigger: "הבחינו בין נזק ניתן לתיקון לבין ליקוי בלתי הפיך (גובה תקרה, רוחב פרוזדור) המזכה בפיצוי כספי.",
    situationId: "defense_counter",
    tags: ["ירידת ערך", "נזק בעין", "ליקוי בלתי הפיך", "פיצוי כספי"],
    content: [
      {
        type: "heading",
        text: "נזק בעין (השבת המצב לקדמותו) מול ירידת ערך הנדסית"
      },
      {
        type: "paragraph",
        text: "'נזק בעין' הוא כשל פיזי שניתן לתיקון הנדסי מוחלט שיחזיר את המבנה למצב תקין ותקני (כמו החלפת אריח פגום, תיקון שיפוע ניקוז במרפסת, או אטימה של חלון דולף). חוות הדעת שלנו מגדירה עבור השופט את מפרט התיקון הנדרש ואת האומדן הכספי המדויק לביצועו על ידי קבלן עצמאי מטעמכם."
      },
      {
        type: "paragraph",
        text: "מנגד, ישנם ליקויים שאינם ניתנים לתיקון בפועל מבלי להחריב חלקים מהותיים מהנכס (למשל: גובה תקרה נמוך מהתקן, רוחב פרוזדור לא תקני, או היעדר חלון בממ״ד). במקרים אלו, לא ניתן לבצע תיקון של הנזק בעין, והפתרון הוא פסיקת פיצוי בגין ירידת ערך הנדסית ואסתטית. אינג׳ יוסי פרי עורך חישובים שמאות-הנדסיים מדויקים המבססים את גובה ירידת הערך ומבטיחים החזר כספי מלא על הפגיעה בשווי הנכס."
      },
      {
        type: "conclusion",
        text: "מזהים ליקויים מורכבים בנכס ורוצים לקבל הערכת נזקים מדויקת המשלבת אומדן תיקון וירידת ערך? צרו קשר לייעוץ הנדסי בכיר."
      }
    ]
  },
  {
    title: "איך כתב כמויות מקצועי משרת תביעה או כתב הגנה",
    slug: "bill-of-quantities-in-lawsuit",
    tagline: "חוות דעת הנדסית ללא כתב כמויות מפורט ומבוסס היא כמו כתב תביעה ללא סכום מוגדר. כדי ששופט או מומחה מטעם בית משפט יאמצו את דרישותיכם, חובה להציג בפניהם כתב כמויות מקצועי ומפורט.",
    icon: "FileText",
    readingTime: "3 דק' קריאה",
    category: "כתב כמויות ותמחור",
    targetAudience: "עורכי דין ובעלי נכסים",
    keyQuestion: "למה חוות דעת ללא כתב כמויות מפורט חשופה לטענות על אומדן מנופח?",
    valueTrigger: "למדו איך כתב כמויות המבוסס על מחירון דקל רשמי מבטיח את אימוץ העלויות ע\"י השופט.",
    situationId: "boq_procedure",
    tags: ["כתב כמויות", "מחירון דקל", "אומדן תיקונים", "תמחור הנדסי"],
    content: [
      {
        type: "heading",
        text: "מפרט עלויות קפדני – כלי הנשק הסמוי של התובע והנתבע"
      },
      {
        type: "paragraph",
        text: "כתב כמויות הוא פירוט מדוקדק של העבודות, היקפן, כמויות החומרים ומחירי היחידה הנדרשים לתיקון הליקויים. ללא כתב כמויות, ההערכות נשארות כלליות, עמומות וחשופות לטענות של הצד השני כי האומדן הוא 'ספקולטיבי' או 'מנופח'."
      },
      {
        type: "paragraph",
        text: "אנו באריקס ביקורת מבנים מפיקים כתבי כמויות הנדסיים קפדניים, המבוססים על מחירונים ענפיים מוסמכים (מחירון דקל או מחירון מוכר אחר). מסמך זה משמש כבסיס יציב לעורך הדין שלכם לניסוח סכום התביעה המדויק, ומאפשר לקבל הצעות מחיר ריאליות מקבלנים לביצוע התיקונים בפועל. מנגד, בעת הגנה, כתב הכמויות משרת אתכם כדי להפריך דרישות פיצוי מוגזמות ונטולות בסיס טכני של הצד התובע."
      },
      {
        type: "conclusion",
        text: "דרשו חוות דעת הנדסית הכוללת כתב כמויות הנדסי מלא המבוסס על מחירון דקל רשמי כדי להבטיח את אימוץ העלויות בבית המשפט."
      }
    ]
  },
  {
    title: "יומן עבודה באתר בנייה ומשמעותו בתיק בית משפט",
    slug: "site-work-logbook-value",
    tagline: "במהלך פרויקט בנייה, יומן העבודה הוא הראיה התיעודית החשובה ביותר שמתנהלת בזמן אמת. כאשר פורץ סכסוך, ניתוח הנדסי של יומן העבודה יכול להכריע את התיק כולו.",
    icon: "Layers",
    readingTime: "4 דק' קריאה",
    category: "ראיות וביקורת באתר",
    targetAudience: "יזמים, דיירים ועורכי דין",
    keyQuestion: "איך ניתוח הנדסי של יומן העבודה בזמן אמת מכריע טענות על איחורים וליקויים?",
    valueTrigger: "גלו איך הקופסה השחורה של פרויקט הבנייה הופכת טענות בעל פה להוכחות חד-משמעיות.",
    situationId: "boq_procedure",
    tags: ["יומן עבודה", "ראיות בזמן אמת", "ליקויי ביצוע", "פיקוח צמוד"],
    content: [
      {
        type: "heading",
        text: "הקופסה השחורה של פרויקט הבנייה"
      },
      {
        type: "paragraph",
        text: "על פי תקנות התכנון והבנייה, הקבלן ומנהל העבודה מחוייבים לנהל יומן עבודה יומי מפורט באתר. יומן זה מתעד את מספר העובדים, אופי הפעילות, בדיקות מעבדה (כגון חוזק בטון), אספקת חומרים, ביקורי פיקוח, הפרעות עבודה, ומזג האוויר."
      },
      {
        type: "paragraph",
        text: "בדיונים משפטיים, יומן העבודה משמש כראיה חותכת ביותר, שכן הוא נכתב בזמן אמת ולא בדיעבד. מהנדס מומחה מטעמנו בוחן את יומני העבודה כדי לחשוף איחורים של הקבלן, ביצוע עבודות בניגוד להנחיות הפיקוח הצמוד, איכות חומרים ירודה, או יציקת בטון בתנאי מזג אוויר אסורים. הניתוח ההנדסי של היומן הופך טענות בעל פה להוכחות מדעיות חד-משמעיות."
      },
      {
        type: "conclusion",
        text: "זקוקים למומחה שינתח את יומני העבודה בפרויקט כדי לגבש עמדה משפטית מוצקה? המומחים של אריקס כאן עבורכם."
      }
    ]
  },
  {
    title: "פגישת מהו״ת בסכסוכי בנייה – היערכות מקצועית לגישור",
    slug: "mahut-meeting-engineering-prep",
    tagline: "פגישת מהו״ת (מידע, היכרות ותיאום) היא שלב חובה כמעט בכל תביעה אזרחית המוגשת לבית משפט השלום. בסכסוכי בנייה, פגישה זו מהווה הזדמנות קריטית לפתרון יעיל – בתנאי שמגיעים אליה עם גיבוי הנדסי נכון.",
    icon: "HelpCircle",
    readingTime: "3 דק' קריאה",
    category: "פגישת מהו״ת וגישור",
    targetAudience: "צדדים להליך אזרחי",
    keyQuestion: "איך להגיע לפגישת מהו״ת ראשונית עם יתרון הנדסי שמביא לפשרה מהירה ומטיבה?",
    valueTrigger: "הבינו כיצד חוות דעת מוקדמת מטה את מאזן הכוחות כבר במפגש הגישור וחוסכת הליך ממושך.",
    situationId: "boq_procedure",
    tags: ["פגישת מהות", "גישור הנדסי", "סדר דין אזרחי", "הסדר פשרה"],
    content: [
      {
        type: "heading",
        text: "מהי פגישת מהו״ת וכיצד היא מקדמת את פתרון הסכסוך?"
      },
      {
        type: "paragraph",
        text: "פגישת מהו״ת היא מפגש מקדמי הנערך לפני תחילת הדיונים המשפטיים עצמם, בנוכחות מגשר מוסמך. מטרת המפגש היא לבחון את היתכנות הפנייה של הצדדים להליך של גישור או בוררות במקום לנהל משפט ארוך, יקר ומתיש."
      },
      {
        type: "paragraph",
        text: "בסכסוכי ליקויי בנייה, פגישת המהו״ת היא קריטית במיוחד. כאשר התובע מגיע למפגש מצויד בחוות דעת הנדסית מפורטת, קבילה ומנוסחת לפי תקנות סדר הדין האזרחי, תשע״ט-2018 של אינג׳ יוסי פרי, הצד השני מבין מייד כי מולו ניצב תיק מבוסס ומגובה מדעית. דבר זה מגדיל דרמטית את הסיכויים להשגת הסדר פשרה מהיר והוגן בגישור, חוסך לכם אלפי שקלים ומביא לתיקון הליקויים או לקבלת הפיצויים ללא דיחוי."
      },
      {
        type: "conclusion",
        text: "עומדים בפני פגישת מהו״ת בסכסוך בנייה או ליקויים? הצטיידו בחוות דעת הנדסית חזקה שתטה את מאזן הכוחות לטובתכם כבר בשלב המקדמי."
      }
    ]
  }
];

const SITUATION_FILTERS = [
  { id: 'all', label: 'כל 10 המדריכים', icon: Target, count: 10 },
  { id: 'before_lawsuit', label: 'לפני תביעה וזהות המומחה', icon: ShieldCheck, count: 3 },
  { id: 'small_claims', label: 'תביעות קטנות וסכסוכי שכנים', icon: Scale, count: 2 },
  { id: 'defense_counter', label: 'הפרכת דוח נגדי ותביעה שכנגד', icon: ShieldAlert, count: 3 },
  { id: 'boq_procedure', label: 'כתב כמויות, יומנים וגישור', icon: FileText, count: 3 },
];

const POPULAR_TAGS = [
  "תביעות קטנות", "מומחה נגדי", "כתב כמויות", "יומן עבודה", 
  "פגישת מהות", "ירידת ערך", "תביעה שכנגד", "רשימת מומחים"
];

const CourtExpertPage: React.FC = () => {
  const [selectedSituation, setSelectedSituation] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const faqs = [
    {
      q: 'מה ההבדל המשפטי בין דו"ח בדק בית סטנדרטי לבין חוות דעת הנדסית הרשמית לבית משפט?',
      a: 'דו"ח בדק בית סטנדרטי נועד בעיקר לפתח דיאלוג של משא ומתן מול קבלן או מוכר הנכס, ואינו מחייב מבנה ועריכה של מסמך משפטי. לעומת זאת, חוות דעת הנדסית לבית המשפט נערכת וערוכה באופן קפדני לפי תקסד"א 2018 - תקנות סדר דין אזרחי חדש 2018. היא חייבת לכלול הצהרת מומחה חתומה המקבילה לעדות בשבועה בבית המשפט, פירוט ניסיון מקצועי והשכלה, פירוט כלים מדויק, והוכחה מדעית-תקנית לכל כשל שנמצא בשטח.'
    },
    {
      q: 'האם מהנדס מאריקס ביקורת מבנים מגיע בפועל להעיד ולהגן על חוות דעתו בבית המשפט?',
      a: 'כן, בהחלט. זהו אחד היתרונות הבולטים בשירות של אריקס ביקורת מבנים. מהנדסי החברה, בעלי ניסיון רב שנים בליווי בוררויות והופעה על דוכן העדים. במידה ואחד הצדדים או שופט בית המשפט דורש חקירה נגדית של המומחה, המהנדס מגיע מוכן ומגובה בכל התקנים והאבחנות המדעיות כדי להגן על הממצאים ולהביא לתוצאה משפטית אופטימלית.'
    },
    {
      q: 'כמה עולה חוות דעת הנדסית לבית משפט וכיצד היא מתומחרת?',
      a: 'מחיר חוות דעת הנדסית המיועדת להצגה בערכאות שיפוטיות מתחיל בדרך כלל ב-4,500 ₪ פלוס מע"מ. התמחור נקבע בהתאם לגודל הנכס, מורכבות ליקויי הבנייה, כמות הליקויים הטעונים ביסוס תקני, והצורך בבדיקות מעבדה מאושרות (כמו בדיקת שליפת אריחים או בדיקת בטון קשיח) ובליווי לחקירה נגדית.'
    },
    {
      q: 'מה המעמד של מומחה מטעם בית המשפט לעומת מהנדס מטעמי?',
      a: 'במרבית תיקי ליקויי הבנייה, לאחר הגשת חוות הדעת של תובע ונתבע, ממנה בית המשפט מהנדס מוחלט מטעמו שיבחן את הנושא באופן אובייקטיבי. מהנדס מטעמכם (אריקס ביקורת מבנים) פועל כיועץ הנדסי-טקטי עבור עורך הדין שלכם: אנו מכינים את השאלות לחקירתו הנגדית של מומחה בית המשפט, ובודקים שדוח המומחה הציבורי אינו מתעלם מתקנים משמעותיים.'
    }
  ];

  // Filtered articles
  const filteredArticles = useMemo(() => {
    return courtArticles.filter((article) => {
      // 1. Situation filter
      if (selectedSituation !== 'all' && article.situationId !== selectedSituation) {
        return false;
      }
      // 2. Tag filter
      if (selectedTag && !article.tags.some(t => t.includes(selectedTag))) {
        return false;
      }
      // 3. Search query
      if (searchQuery.trim()) {
        const query = searchQuery.trim().toLowerCase();
        const matchTitle = article.title.toLowerCase().includes(query);
        const matchTagline = article.tagline.toLowerCase().includes(query);
        const matchQuestion = article.keyQuestion.toLowerCase().includes(query);
        const matchValue = article.valueTrigger.toLowerCase().includes(query);
        const matchTags = article.tags.some(t => t.toLowerCase().includes(query));
        return matchTitle || matchTagline || matchQuestion || matchValue || matchTags;
      }
      return true;
    });
  }, [selectedSituation, selectedTag, searchQuery]);

  const handleResetFilters = () => {
    setSelectedSituation('all');
    setSearchQuery('');
    setSelectedTag(null);
  };

  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen selection:bg-blue-500/30 text-right font-sans">
      <SchemaTags 
        type="Service" 
        data={{
          name: "חוות דעת הנדסית לבית משפט - אריקס ביקורת מבנים",
          description: "זקוקים לחוות דעת הנדסית לבית משפט? אריקס ביקורת מבנים מספקת חוות דעת מומחה קבילות לחלוטין, מבוססות על תקנים ישראליים וכוללות ליווי ומתן עדות מומחה בערכאות.",
          provider: {
            "@type": "LocalBusiness",
            "name": "אריקס ביקורת מבנים"
          },
          areaServed: "ישראל"
        }} 
      />

      <SchemaTags 
        type="FAQPage" 
        data={{
          mainEntity: faqs.map(f => ({
            "@type": "Question",
            "name": f.q,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": f.a
            }
          }))
        }} 
      />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden bg-gradient-to-br from-slate-950 via-[#0e172e] to-slate-950 text-white">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <Breadcrumbs items={[{ label: 'שירותים', href: '/' }, { label: 'חוות דעת הנדסית לבית משפט' }]} />
            
            <motion.span 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/25 text-blue-400 px-4 py-1.5 rounded-full text-xs font-black tracking-wider mb-6 mt-4 uppercase"
            >
              <Scale className="w-4 h-4 text-blue-400" />
              עד מומחה קביל תקסד״א 2018
            </motion.span>

            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight"
            >
              חוות דעת הנדסית לבית משפט – הגנה משפטית הנדסית מוחלטת
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-3xl"
            >
              הצלחה בתביעה או לחילופין הפרכות של כתב תביעה של אחרים קשורה קשר הדוק עם ניסוח מוקפד של חוות דעת הנדסית. המטרה להדגיש היטב עניינים של הנדסה ולהימנע ככל הניתן מלהיכנס למחוזות המשפט השמורות לעורכי הדין. חוות דעת המנוסחת היטב, עניינית, הנתמכת עם אסמכתאות היא לב ליבו של העניין. בתי המשפט יודעים להעריך זאת.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a 
                href="tel:054-7515142" 
                className="bg-blue-600 hover:bg-blue-500 text-white font-black px-8 py-4 rounded-xl transition-all shadow-lg shadow-blue-600/30 text-center text-lg flex items-center gap-2"
              >
                <Phone className="w-5 h-5 shrink-0" />
                חייגו להתייעצות משפטית: 054-7515142
              </a>
              <a 
                href="https://wa.me/972547515142?text=%D7%A9%D7%9C%D7%95%D7%9D%20%D7%90%D7%A8%D7%99%D7%A7%D7%A1%20%D7%91%D7%99%D7%A7%D7%95%D7%A8%D7%AA%20%D7%9E%D7%91%D7%A0%D7%99%D7%9D%2C%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A7%D7%91%D7%9C%20%D7%94%D7%A6%D7%A2%D7%AA%20%D7%9E%D7%97%D7%99%D7%A8%20%D7%9C%D7%97%D7%95%D7%95%D7%95%D7%94%20%D7%93%D7%A2%D7%AA%20%D7%9C%D7%91%D7%99%D7%AA%20%D7%9E%D7%A9%D7%A4%D7%98"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-black px-8 py-4 rounded-xl transition-all shadow-lg shadow-emerald-600/20 text-center text-lg"
              >
                שליחת הודעה ישירה ב-WhatsApp
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Core Content Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          
          {/* Article Cross-Link Banner */}
          <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white p-8 rounded-3xl shadow-xl mb-12 flex flex-col md:flex-row items-center justify-between gap-6 border border-blue-800/50">
            <div className="space-y-2 text-right">
              <span className="bg-blue-500/20 text-blue-300 text-xs font-black uppercase px-3 py-1 rounded-full border border-blue-400/30">
                גישת אריקס לביקורת מבנים
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                למה אנחנו לא כותבים חוות דעת משפטית לפני שיש מחלוקת?
              </h3>
              <p className="text-slate-300 text-sm sm:text-base max-w-2xl">
                95% מדוחות בדק הבית בישראל מנוסחים ככתב תביעה שמזיק לתיקון הליקויים. גלו מתי באמת נדרשת חוות דעת לבית משפט ומתי דוח עבודה ענייני עובד לטובתכם.
              </p>
            </div>
            <Link 
              href="/למה-דוחות-בדק-בית-מסורבלים"
              className="bg-white text-blue-900 hover:bg-blue-50 font-black px-6 py-3 rounded-xl transition-all shadow-md shrink-0 text-sm whitespace-nowrap"
            >
              לקריאת המאמר המלא ◄
            </Link>
          </div>

          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/80 shadow-sm text-right space-y-10">
            
            {/* Opening Intro */}
            <div className="border-r-4 border-blue-600 pr-5 py-1">
              <p className="text-slate-800 text-lg md:text-xl leading-relaxed font-medium">
                כאשר סכסוך בנוגע לליקויי בנייה מגיע לכתלי בית המשפט, על השופט להכריע בשאלות הנדסיות מובהקות - חוזק שלד, איכות איטום, עמידה בתקנים - נושאים שאינם בתחום מומחיותו המשפטית. לשם כך, המחוקק והפסיקה מכירים בצורך במומחה מטעם בית המשפט או מומחה מטעם צד, שחוות דעתו ההנדסית משמשת בסיס מקצועי להכרעה. חוות דעת הנדסית איכותית יכולה להיות ההבדל בין זכייה להפסד בתביעה.
              </p>
            </div>

            {/* Grid of core topics */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-100 space-y-3">
                <div className="flex items-center gap-2 text-blue-600 font-bold">
                  <CheckCircle2 className="w-6 h-6 shrink-0" />
                  <h3 className="text-xl font-black text-slate-900">מה הופך חוות דעת לקבילה ואפקטיבית?</h3>
                </div>
                <p className="text-slate-700 text-base leading-relaxed">
                  חוות דעת הנדסית לבית משפט נכתבת בהתאם לפקודת הראיות [נוסח חדש], תשל&quot;א-1971, ומחייבת רמת דיוק, אובייקטיביות ותיעוד שאינה נדרשת בדוח בדק בית רגיל. חוות הדעת שאנו מכינים כוללת מיפוי מדויק של כל ליקוי, הפניה לסעיפי התקן הישראלי הרלוונטי ולתקנות התכנון והבנייה שהופרו, אומדן עלות תיקון מבוסס, ותיעוד צילומי ומכשור מקיף התומך בכל קביעה.
                </p>
              </div>

              <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-100 space-y-3">
                <div className="flex items-center gap-2 text-blue-600 font-bold">
                  <ShieldCheck className="w-6 h-6 shrink-0" />
                  <h3 className="text-xl font-black text-slate-900">ניסיון ועמידה בחקירה נגדית</h3>
                </div>
                <p className="text-slate-700 text-base leading-relaxed">
                  מהנדסי אריקס ביקורת מבנים בעלי ניסיון רב בהופעה על דוכן העדים בבתי משפט ובבוררויות. אנו מעניקים גב מקצועי מלא לעורכי הדין ומגנים בנחישות על הממצאים בחקירות נגדיות.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Redesigned 10 Guides Knowledge Section */}
      <section id="guides-hub" className="py-20 bg-slate-100/80 border-t border-slate-200/80 relative" role="region" aria-label="מדריכים מקצועיים לבית משפט">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-blue-700 text-white px-4 py-2 rounded-full text-xs font-black tracking-widest mb-4 uppercase shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse"></span>
              ספריית ידע וליטיגציה הנדסית
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 leading-tight">
              10 המדריכים המרכזיים — <br />
              <span className="text-blue-700">חוות דעת הנדסית לבית משפט</span>
            </h2>
            <p className="text-slate-700 mt-4 max-w-3xl mx-auto text-base md:text-lg font-medium leading-relaxed">
              ריכוז המדריכים המשפטיים-הנדסיים מאת אינג׳ יוסי פרי, מהנדס בניין מורשה ומומחה מטעם בית המשפט. מצאו את המדריך המדויק לשלב המשפטי שלכם.
            </p>
          </div>

          {/* Interactive Situation Filter Buttons */}
          <div className="mb-8" role="region" aria-label="סינון לפי שלב בסכסוך">
            <div className="flex flex-wrap justify-center gap-3">
              {SITUATION_FILTERS.map((s) => {
                const FilterIcon = s.icon;
                const isActive = selectedSituation === s.id;
                return (
                  <button
                    key={s.id}
                    onClick={() => {
                      setSelectedSituation(s.id);
                      setSelectedTag(null);
                    }}
                    className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-sm font-black transition-all cursor-pointer border ${
                      isActive
                        ? 'bg-blue-800 text-white border-blue-900 shadow-md scale-105'
                        : 'bg-white text-slate-900 hover:bg-slate-50 border-slate-200 shadow-xs'
                    }`}
                    aria-pressed={isActive}
                  >
                    <FilterIcon className={`w-4 h-4 ${isActive ? 'text-amber-300' : 'text-blue-700'}`} />
                    <span>{s.label}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      isActive ? 'bg-blue-900 text-amber-300 font-extrabold' : 'bg-slate-100 text-slate-700'
                    }`}>
                      {s.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Search Input & Tag Chips Bar */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm mb-12 max-w-4xl mx-auto space-y-4" role="search">
            <div className="relative">
              <Search className="w-5 h-5 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="חפשו לפי נושא, מילת מפתח (למשל: תביעות קטנות, דוח נגדי, כתב כמויות)..."
                className="w-full pr-12 pl-10 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-slate-950 font-medium placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:bg-white text-right"
                aria-label="חיפוש במדריכים משפטיים"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 p-1"
                  aria-label="איפוס חיפוש"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Quick Tag Chips */}
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
              <span className="text-xs font-black text-slate-700 flex items-center gap-1 shrink-0">
                <Tag className="w-3.5 h-3.5 text-blue-700" />
                נושאים נפוצים:
              </span>
              {POPULAR_TAGS.map((tag) => {
                const isSelected = selectedTag === tag;
                return (
                  <button
                    key={tag}
                    onClick={() => {
                      if (isSelected) {
                        setSelectedTag(null);
                      } else {
                        setSelectedTag(tag);
                      }
                    }}
                    className={`text-xs px-3 py-1.5 rounded-xl font-bold transition-all border cursor-pointer ${
                      isSelected
                        ? 'bg-blue-700 text-white border-blue-800'
                        : 'bg-slate-100 text-slate-800 hover:bg-slate-200 border-slate-200'
                    }`}
                  >
                    #{tag}
                  </button>
                );
              })}

              {(searchQuery || selectedSituation !== 'all' || selectedTag) && (
                <button
                  onClick={handleResetFilters}
                  className="text-xs font-black text-blue-700 hover:underline mr-auto border-r border-slate-200 pr-3 cursor-pointer"
                >
                  איפוס סינון ({filteredArticles.length} תוצאות)
                </button>
              )}
            </div>
          </div>

          {/* Results Grid */}
          {filteredArticles.length === 0 ? (
            <div className="bg-white p-12 rounded-3xl text-center border border-slate-200 max-w-xl mx-auto space-y-4">
              <AlertTriangle className="w-12 h-12 text-amber-500 mx-auto" />
              <h3 className="text-xl font-black text-slate-950">לא נמצאו מדריכים מתאימים</h3>
              <p className="text-slate-600 text-sm">נסו לשנות את מילת החיפוש או לאפס את המסננים.</p>
              <button
                onClick={handleResetFilters}
                className="bg-blue-800 text-white font-black px-6 py-2.5 rounded-xl text-sm hover:bg-blue-700 transition-all cursor-pointer"
              >
                איפוס כל המסננים
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {filteredArticles.map((article, idx) => {
                const IconComponent = article.icon === "Droplet" ? Droplet :
                                      article.icon === "Scale" ? Scale :
                                      article.icon === "ShieldCheck" ? ShieldCheck :
                                      article.icon === "AlertTriangle" ? AlertTriangle :
                                      article.icon === "ShieldAlert" ? ShieldAlert :
                                      article.icon === "Layers" ? Layers :
                                      article.icon === "FileText" ? FileText :
                                      article.icon === "Award" ? Award :
                                      HelpCircle;

                const originalIndex = courtArticles.findIndex(a => a.slug === article.slug) + 1;

                return (
                  <div
                    key={article.slug}
                    className="bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group hover:border-blue-300"
                  >
                    <div className="p-6 sm:p-8 space-y-5">
                      
                      {/* Top Badges Bar */}
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <span className="bg-amber-400 text-slate-950 text-xs font-black px-3 py-1 rounded-full shadow-2xs">
                          מדריך {originalIndex} מתוך 10
                        </span>
                        <div className="flex items-center gap-2 text-xs font-bold text-slate-600">
                          <Clock className="w-3.5 h-3.5 text-blue-700" />
                          <span>{article.readingTime}</span>
                        </div>
                      </div>

                      {/* Header with Icon & Category */}
                      <div className="flex items-start gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-800 flex items-center justify-center shrink-0 border border-blue-100 group-hover:bg-blue-800 group-hover:text-white transition-colors">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div className="space-y-1">
                          <span className="text-xs font-black text-blue-800 uppercase tracking-wider block">
                            {article.category}
                          </span>
                          <span className="text-xs font-bold text-slate-500 block">
                            קהל יעד: {article.targetAudience}
                          </span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg sm:text-xl font-black text-slate-950 leading-snug group-hover:text-blue-800 transition-colors">
                        {article.title}
                      </h3>

                      {/* Key Question Box */}
                      <div className="bg-amber-50/80 p-4 rounded-2xl border border-amber-200/80 text-right space-y-1">
                        <span className="text-xs font-black text-amber-900 flex items-center gap-1.5">
                          ❓ השאלה המרכזית:
                        </span>
                        <p className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                          {article.keyQuestion}
                        </p>
                      </div>

                      {/* Value Trigger */}
                      <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 space-y-1">
                        <span className="text-xs font-black text-blue-800 flex items-center gap-1">
                          <Sparkles className="w-3.5 h-3.5 text-blue-700" />
                          מה תגלו במדריך?
                        </span>
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                          {article.valueTrigger}
                        </p>
                      </div>

                    </div>

                    {/* Card Footer Action Bar - NO Quick Read Button, ONLY 'קריאה בדף נפרד' */}
                    <div className="px-6 py-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between gap-3">
                      <Link
                        href={`/חוות-דעת-הנדסית-לבית-משפט#${article.slug}`}
                        className="w-full bg-blue-800 hover:bg-blue-700 text-white font-black py-3 px-4 rounded-xl text-xs sm:text-sm transition-all shadow-xs flex items-center justify-center gap-2"
                      >
                        <span>קריאה בדף נפרד</span>
                        <ExternalLink className="w-4 h-4 shrink-0 text-amber-300" />
                      </Link>
                    </div>

                  </div>
                );
              })}
            </div>
          )}

          {/* Full Detailed Articles Stack */}
          <div className="mt-20 space-y-16">
            <div className="text-center space-y-3 mb-10">
              <h3 className="text-2xl sm:text-3xl font-black text-slate-950">
                תוכן מלא — 10 המדריכים המקצועיים
              </h3>
              <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
                תוכלו לעיין בכל אחד מ-10 המדריכים המלאים ישירות כאן למטה או לעבור לדף נפרד.
              </p>
            </div>

            {courtArticles.map((article, idx) => {
              const IconComponent = article.icon === "Droplet" ? Droplet :
                                    article.icon === "Scale" ? Scale :
                                    article.icon === "ShieldCheck" ? ShieldCheck :
                                    article.icon === "AlertTriangle" ? AlertTriangle :
                                    article.icon === "ShieldAlert" ? ShieldAlert :
                                    article.icon === "Layers" ? Layers :
                                    article.icon === "FileText" ? FileText :
                                    article.icon === "Award" ? Award :
                                    HelpCircle;

              return (
                <article
                  key={article.slug}
                  id={article.slug}
                  className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm scroll-mt-28 relative overflow-hidden"
                >
                  {/* Badge */}
                  <div className="absolute top-0 left-0 bg-blue-800 text-white text-[11px] font-black uppercase tracking-wider px-4 py-2 rounded-br-2xl shadow-2xs">
                    מדריך מומחה {idx + 1} מתוך 10
                  </div>

                  <div className="flex items-center gap-4 mb-6 mt-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-800 flex items-center justify-center shrink-0 border border-blue-100">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-black text-blue-800 uppercase block">
                        {article.category}
                      </span>
                      <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-slate-950">
                        {article.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-slate-800 text-base md:text-lg leading-relaxed mb-8 bg-amber-50/60 p-6 rounded-2xl border-r-4 border-amber-500 font-medium">
                    {article.tagline}
                  </p>

                  <div className="space-y-6">
                    {article.content.map((item: any, itemIdx: number) => {
                      if (item.type === "heading") {
                        return (
                          <h3 key={itemIdx} className="text-lg md:text-xl font-black text-slate-950 mt-8 mb-4 border-r-4 border-blue-700 pr-3">
                            {item.text}
                          </h3>
                        );
                      }
                      if (item.type === "paragraph") {
                        return (
                          <div key={itemIdx} className="space-y-3">
                            <p className="text-slate-800 text-base md:text-lg leading-relaxed">
                              {item.text}
                            </p>
                            {item.links && (
                              <div className="flex flex-col gap-2 pt-2">
                                {item.links.map((lnk: any, lIdx: number) => (
                                  <a 
                                    key={lIdx} 
                                    href={lnk.href} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="inline-flex items-center gap-2 text-blue-800 hover:text-blue-900 hover:underline font-black text-sm bg-blue-50 border border-blue-200 px-4 py-2.5 rounded-xl self-start shadow-2xs"
                                  >
                                    🔗 {lnk.label}
                                  </a>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      }
                      if (item.type === "conclusion") {
                        return (
                          <div key={itemIdx} className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 bg-slate-50 p-6 rounded-2xl">
                            <div className="space-y-1">
                              <span className="text-xs font-black text-blue-800 block">סיכום והנחיה ליישום:</span>
                              <p className="text-slate-900 font-bold text-base md:text-lg max-w-3xl leading-relaxed">
                                {item.text}
                              </p>
                            </div>
                            <a
                              href="tel:054-7515142"
                              className="bg-blue-800 hover:bg-blue-700 text-white font-black px-6 py-3 rounded-xl transition-all shadow-md text-center shrink-0 text-sm whitespace-nowrap self-start sm:self-center"
                            >
                              התייעצות מיידית: 054-7515142
                            </a>
                          </div>
                        );
                      }
                      return null;
                    })}
                  </div>
                </article>
              );
            })}
          </div>

        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-950">שאלות ותשובות נפוצות בנושא חוות דעת לבית משפט</h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200/80 space-y-3">
                <h3 className="text-lg font-black text-slate-950 flex items-start gap-2">
                  <span className="text-blue-700 font-black">Q:</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-slate-700 text-base leading-relaxed pr-6 border-r-2 border-blue-600">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />
    </div>
  );
};

export default CourtExpertPage;
