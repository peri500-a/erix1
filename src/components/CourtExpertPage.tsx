'use client';

import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Scale, FileText, CheckCircle2, ShieldCheck, AlertTriangle, Droplet, Layers, Eye, ShieldAlert, Phone, HelpCircle, Award } from 'lucide-react';
import AccessibilitySection from './AccessibilitySection';
import Contact from './Contact';
import Breadcrumbs from './Breadcrumbs';
import SchemaTags from './SchemaTags';

const courtArticles = [
  {
    title: "חשיבות זהות המומחה בהליכים משפטיים בענף הבנייה",
    slug: "importance-of-expert-identity",
    tagline: "בסכסוכי בנייה וליקויים, השופט המנהל את התיק נעזר כמעט תמיד באנשי מקצוע שישמשו עבורו כ\"עיניים המקצועיות\" בשטח. לזהות המהנדס שאתם שוכרים ולניסיון שלו יש השפעה דרמטית על המשקל שבית המשפט יעניק לממצאים.",
    icon: "ShieldCheck",
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
  },
  {
    title: "רשימת מומחים לבית משפט",
    slug: "court-experts-list",
    tagline: "בתי המשפט על פי תקנותיהם מאשרים רשימה של מומחים שנבחנו ונמצאו מתאימים ליתן חוות דעת. אינג' יוסי פרי מצוי ברשימה זו ומעמיד לרשותכם את הניסיון וההכרה המקצועית הגבוהה ביותר.",
    icon: "Award",
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
        text: "אינג' יוסי פרי, המהנדס הראשי והמייסד של אריקס ביקורת מבנים, מצוי ברשימה רשמית זו של מומחי בית המשפט. המשמעות עבורכם היא שחוות הדעת שהוא מפיק נושאות משקל סגולי ואמינות חסרת פשרות בעיני שופטים ומומחים ממונים כאחד."
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
  }
];


const CourtExpertPage: React.FC = () => {
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

      {/* Intro Paragraph & Context */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-100 shadow-sm">
          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            חברת <strong>אריקס ביקורת מבנים</strong>, בהובלת מהנדסים אזרחיים רשומים ומוסמכים, מתמחה בכתיבת חוות דעת מומחה לבתי משפט, לבוררויות ולגישורים, תוך עמידה קפדנית בדרישות תקסד״א 2018 - תקנות סדר דין אזרחי חדש 2018.
          </p>
        </div>
      </section>

      {/* Difference Section */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 mb-4 border-r-4 border-blue-600 pr-4">מה ההבדל בין דוח בדק בית רגיל לבין חוות דעת הנדסית לבית משפט?</h2>
            <p className="text-slate-600 text-lg">
              רבים נוטים להתבלבל, אך מדובר בשני מסמכים בעלי משקל משפטי שונה לחלוטין:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-slate-50 p-8 rounded-3xl border border-slate-200/60 shadow-sm relative overflow-hidden"
            >
              <div className="w-12 h-12 rounded-2xl bg-slate-200/80 text-slate-700 flex items-center justify-center mb-6">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">דוח בדק בית סטנדרטי</h3>
              <p className="text-slate-600 leading-relaxed">
                מיועד בעיקר להתנהלות מול קבלן או מוכר נכס בשלבים ראשוניים (כמו שנת בדק או פרוטוקול מסירה), ומטרתו להציג רשימת ליקויים לתיקון.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-blue-50/50 p-8 rounded-3xl border border-blue-100 shadow-sm relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-br-2xl">
                קביל משפטית
              </div>
              <div className="flex items-center justify-between gap-4 mb-6 mt-2">
                <div className="text-base sm:text-lg font-bold text-rose-950 bg-white border border-slate-200/60 px-4 py-2 rounded-xl shadow-xs">
                  תקסד״א 2018 - תקנות סדר דין אזרחי
                </div>
                <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 shadow-sm">
                  <Scale className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">חוות דעת הנדסית לבית משפט</h3>
              <p className="text-slate-600 leading-relaxed">
                ערוכה באופן רשמי כ״חוות דעת מומחה״ לפי תקסד״א 2018 - תקנות סדר דין אזרחי חדש 2018. היא כוללת הצהרה משפטית חתומה של המהנדס, ניתוח מעמיק של התקנים והתקנות הרלוונטיים (חוק המכר, תקנות התכנון והבנייה ועוד), אומדן כספי מפורט, ומתן עדות והגנה על הממצאים במהלך חקירה נגדית בבית המשפט.
              </p>
            </motion.div>
          </div>
        </div>
      </section>



      {/* Professional Knowledge Hub */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-600 px-4 py-2 rounded-full text-xs font-black tracking-widest mb-4 uppercase">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              ספריית ידע וליטיגציה הנדסית
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
              מדריכים מקצועיים <br />
              <span className="text-blue-600">חוות דעת הנדסית לבית משפט</span>
            </h2>
            <p className="text-slate-500 mt-4 max-w-2xl mx-auto text-base md:text-lg font-medium">
              ריכוז מאמרים מקצועיים מאת יוסי פרי, מהנדס אזרחי רשוי. כל המידע שצריך כדי לבסס תיק תביעה מנצח בערכאות משפטיות.
            </p>
          </div>

          {/* Quick Index / Table of Contents */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
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
                <button
                  key={idx}
                  onClick={() => {
                    const el = document.getElementById(article.slug);
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xs hover:shadow-md hover:border-blue-200 transition-all text-right group flex flex-col justify-between h-full cursor-pointer text-right"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <IconComponent className="w-5 h-5 shrink-0" />
                    </div>
                    <span className="text-xs text-slate-400 font-bold block mb-1">מדריך {idx + 1}</span>
                    <h3 className="font-bold text-slate-800 text-sm leading-snug group-hover:text-blue-600 transition-colors">
                      {article.title}
                    </h3>
                  </div>
                  <span className="text-blue-600 text-xs font-black mt-4 flex items-center gap-1 group-hover:translate-x-[-4px] transition-transform">
                    ◀ קרא עוד
                  </span>
                </button>
              );
            })}
          </div>

          {/* Articles Stack */}
          <div className="space-y-12">
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
                <div
                  key={idx}
                  id={article.slug}
                  className="bg-white p-8 md:p-12 rounded-3xl border border-slate-100 shadow-xs scroll-mt-24 relative overflow-hidden"
                >
                  {/* Decorative background badge */}
                  <div className="absolute top-0 left-0 bg-blue-600 text-white text-[11px] font-black uppercase tracking-wider px-4 py-2 rounded-br-2xl">
                    מדריך מומחה {idx + 1}
                  </div>

                  <div className="flex items-center gap-4 mb-6 mt-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-slate-950">
                      {article.title}
                    </h2>
                  </div>

                  <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8 bg-slate-50 p-6 rounded-2xl border-r-4 border-blue-500 font-medium">
                    {article.tagline}
                  </p>

                  <div className="space-y-6">
                    {article.content.map((item: any, itemIdx) => {
                      if (item.type === "heading") {
                        return (
                          <h3 key={itemIdx} className="text-lg md:text-xl font-black text-slate-900 mt-8 mb-4 border-r-2 border-blue-600 pr-3">
                            {item.text}
                          </h3>
                        );
                      }
                      if (item.type === "paragraph") {
                        return (
                          <p key={itemIdx} className="text-slate-600 text-base md:text-lg leading-relaxed">
                            {item.text}
                            {item.links && (
                              <span className="block mt-4 flex flex-col gap-2">
                                {item.links.map((lnk: any, lIdx: number) => (
                                  <a 
                                    key={lIdx} 
                                    href={lnk.href} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-500 hover:underline font-black text-sm bg-blue-50 border border-blue-100/60 px-4 py-2 rounded-xl self-start"
                                  >
                                    🔗 {lnk.label}
                                  </a>
                                ))}
                              </span>
                            )}
                          </p>
                        );
                      }
                      if (item.type === "checklist" && item.items) {
                        return (
                          <div key={itemIdx} className="bg-slate-50/50 p-6 rounded-2xl border border-slate-100 my-6">
                            <ul className="space-y-4 text-slate-600 text-base">
                              {item.items.map((sub, subIdx) => (
                                <li key={subIdx} className="flex items-start gap-3">
                                  <span className="text-blue-600 font-extrabold mt-1 shrink-0">◀</span>
                                  <span>
                                    <strong className="text-slate-900 font-bold">{sub.bold}</strong>
                                    {sub.text}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        );
                      }
                      if (item.type === "conclusion") {
                        return (
                          <div key={itemIdx} className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                            <p className="text-slate-800 font-bold text-base md:text-lg max-w-3xl leading-relaxed">
                              {item.text}
                            </p>
                            <a
                              href="tel:054-7515142"
                              className="bg-blue-600 hover:bg-blue-500 text-white font-black px-6 py-3 rounded-xl transition-all shadow-md shadow-blue-600/20 text-center shrink-0 text-sm whitespace-nowrap self-start sm:self-center"
                            >
                              התייעצות מיידית: 054-7515142
                            </a>
                          </div>
                        );
                      }
                      return null;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-extrabold text-sm tracking-wider uppercase block mb-3">שאלות נפוצות</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">שאלות ותשובות בנושא <br /><span className="text-blue-600">חוות דעת הנדסית לבית משפט</span></h2>
            <p className="text-slate-500 mt-4 max-w-xl mx-auto">המידע והתקנים שיסייעו לכם להתייצב במקצועיות הנדסית מושלמת בדיונים מול קבלנים ויזמי פרויקטים</p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-slate-50 p-8 rounded-3xl border border-slate-100/80 text-right"
              >
                <h3 className="text-lg font-black text-slate-900 mb-3 flex items-start gap-3">
                  <span className="text-blue-600 text-xl">◀</span>
                  {faq.q}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm pr-6 border-r border-slate-200">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AccessibilitySection />
      <Contact />
    </div>
  );
};

export default CourtExpertPage;
