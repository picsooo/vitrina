(function(){
"use strict";
var P=window.VITRINA_PRODUITS.filter(function(p){return !p.vendu}), T0=window.VITRINA_I18N;
var A={
fr:{t_kick:"Maquette de l'application", t_h1a:"Vitrina,", t_h1b:"dans la poche.", t_sub:"Une appli pensée pour acheter et revendre des pièces vintage en Algérie et en Grèce. Cliquez dans le téléphone : tout est interactif.",
 sc1:"Bienvenue", sc2:"Accueil", sc3:"Fiche pièce", sc4:"Vendre", sc5:"Panier", sc6:"Profil",
 f1:"Drop chaque semaine", f1d:"Les nouvelles pièces arrivent le jeudi à 20 h, avec un compte à rebours.", f2:"Alertes sur vos tailles", f2d:"Recevez une notification dès qu'une pièce à votre taille est en ligne.", f3:"Vendre en 3 photos", f3d:"Face, détail, étiquette : Vitrina estime le prix et s'occupe de l'envoi.", f4:"Deux pays, une appli", f4d:"Dinars ou euros, paiement à la livraison ou carte : tout s'adapte au pays choisi.",
 soon:"Bientôt sur", back_site:"← Retour au site",
 welcome:"Seconde main, premier choix. Choisissez votre langue et votre pays.", start:"Commencer",
 hello:"Bonsoir ✨", search:"Rechercher une pièce, une marque…", drop:"Drop de la semaine", drop_t:"La sélection d'automne", ends:"jeu. 20:00",
 foryou:"Pour vous", trending:"Les plus aimées", see:"Voir tout",
 tab_home:"Accueil", tab_explore:"Explorer", tab_sell:"Vendre", tab_fav:"Favoris", tab_me:"Profil",
 seller:"Vitrina · Boutique officielle", seller_s:"★ 4,9 · 120 ventes · répond en 1 h", offer:"Faire une offre", buy:"Acheter", bought:"Dans le panier ✓",
 sell_t:"Vendre une pièce", sell_sub:"3 photos suffisent. On s'occupe du reste.", ph1:"Face", ph2:"Détail", ph3:"Étiquette",
 f_title:"Titre", f_title_ph:"Ex. Robe longue en satin", est:"Prix conseillé par Vitrina", publish:"Publier ma pièce", published:"Publiée !", published_s:"Elle sera en ligne après vérification (moins de 24 h).",
 bag:"Mon panier", empty:"Rien pour l'instant", empty_s:"Ajoutez des pièces depuis l'accueil.", pay:"Payer à la livraison", paid:"Commande confirmée", paid_s:"On vous appelle pour confirmer l'adresse.",
 me:"Mon compte", me_s:"Membre depuis 2026", k1:"achats", k2:"ventes", k3:"favoris", t_orders:"Commandes", t_wardrobe:"Mon dressing",
 o1:"Suivi de commande", o2:"Mes adresses", o3:"Alertes de taille", o4:"Langue", o5:"Pays",
 favs_empty:"Touchez ♡ sur une pièce pour la retrouver ici.", explore:"Explorer"
},
en:{t_kick:"App preview", t_h1a:"Vitrina,", t_h1b:"in your pocket.", t_sub:"An app to buy and resell vintage pieces in Algeria and Greece. Tap around the phone: everything is interactive.",
 sc1:"Welcome", sc2:"Home", sc3:"Product", sc4:"Sell", sc5:"Bag", sc6:"Profile",
 f1:"A drop every week", f1d:"New pieces land on Thursdays at 8 pm, with a countdown.", f2:"Alerts for your sizes", f2d:"Get notified as soon as a piece in your size goes live.", f3:"Sell in 3 photos", f3d:"Front, detail, label: Vitrina suggests a price and handles shipping.", f4:"Two countries, one app", f4d:"Dinars or euros, cash on delivery or card: it all adapts to your country.",
 soon:"Coming to", back_site:"← Back to the site",
 welcome:"Second-hand, first choice. Pick your language and country.", start:"Get started",
 hello:"Good evening ✨", search:"Search a piece, a brand…", drop:"This week's drop", drop_t:"The autumn edit", ends:"Thu 20:00",
 foryou:"For you", trending:"Most loved", see:"See all",
 tab_home:"Home", tab_explore:"Explore", tab_sell:"Sell", tab_fav:"Saved", tab_me:"Profile",
 seller:"Vitrina · Official shop", seller_s:"★ 4.9 · 120 sales · replies in 1 h", offer:"Make an offer", buy:"Buy now", bought:"In your bag ✓",
 sell_t:"Sell a piece", sell_sub:"3 photos is all it takes. We handle the rest.", ph1:"Front", ph2:"Detail", ph3:"Label",
 f_title:"Title", f_title_ph:"e.g. Satin maxi dress", est:"Price suggested by Vitrina", publish:"Publish my piece", published:"Published!", published_s:"It goes live after a quick check (under 24 h).",
 bag:"My bag", empty:"Nothing yet", empty_s:"Add pieces from the home screen.", pay:"Pay on delivery", paid:"Order confirmed", paid_s:"We'll call you to confirm the address.",
 me:"My account", me_s:"Member since 2026", k1:"bought", k2:"sold", k3:"saved", t_orders:"Orders", t_wardrobe:"My wardrobe",
 o1:"Track my order", o2:"My addresses", o3:"Size alerts", o4:"Language", o5:"Country",
 favs_empty:"Tap ♡ on a piece to find it here.", explore:"Explore"
},
el:{t_kick:"Προεπισκόπηση εφαρμογής", t_h1a:"Η Vitrina,", t_h1b:"στην τσέπη σου.", t_sub:"Μια εφαρμογή για αγορά και μεταπώληση vintage κομματιών σε Αλγερία και Ελλάδα. Πάτα πάνω στο κινητό: όλα λειτουργούν.",
 sc1:"Καλωσόρισμα", sc2:"Αρχική", sc3:"Κομμάτι", sc4:"Πώληση", sc5:"Καλάθι", sc6:"Προφίλ",
 f1:"Drop κάθε εβδομάδα", f1d:"Τα νέα κομμάτια έρχονται την Πέμπτη στις 20:00, με αντίστροφη μέτρηση.", f2:"Ειδοποιήσεις μεγέθους", f2d:"Μάθε αμέσως όταν ανεβαίνει κομμάτι στο μέγεθός σου.", f3:"Πώληση με 3 φωτογραφίες", f3d:"Μπροστά, λεπτομέρεια, ετικέτα: η Vitrina προτείνει τιμή και αναλαμβάνει την αποστολή.", f4:"Δύο χώρες, μία εφαρμογή", f4d:"Δηνάρια ή ευρώ, αντικαταβολή ή κάρτα: όλα προσαρμόζονται στη χώρα σου.",
 soon:"Σύντομα στο", back_site:"← Πίσω στο site",
 welcome:"Μεταχειρισμένα, πρώτη επιλογή. Διάλεξε γλώσσα και χώρα.", start:"Ξεκίνα",
 hello:"Καλησπέρα ✨", search:"Αναζήτηση κομματιού, μάρκας…", drop:"Το drop της εβδομάδας", drop_t:"Η φθινοπωρινή επιλογή", ends:"Πέμ. 20:00",
 foryou:"Για σένα", trending:"Τα πιο αγαπημένα", see:"Όλα",
 tab_home:"Αρχική", tab_explore:"Εξερεύνηση", tab_sell:"Πούλησε", tab_fav:"Αγαπημένα", tab_me:"Προφίλ",
 seller:"Vitrina · Επίσημο κατάστημα", seller_s:"★ 4,9 · 120 πωλήσεις · απαντά σε 1 ώρα", offer:"Κάνε προσφορά", buy:"Αγορά", bought:"Στο καλάθι ✓",
 sell_t:"Πούλησε ένα κομμάτι", sell_sub:"Αρκούν 3 φωτογραφίες. Τα υπόλοιπα τα κάνουμε εμείς.", ph1:"Μπροστά", ph2:"Λεπτομέρεια", ph3:"Ετικέτα",
 f_title:"Τίτλος", f_title_ph:"π.χ. Σατέν μακρύ φόρεμα", est:"Προτεινόμενη τιμή από τη Vitrina", publish:"Δημοσίευση", published:"Δημοσιεύτηκε!", published_s:"Θα εμφανιστεί μετά από έλεγχο (κάτω από 24 ώρες).",
 bag:"Το καλάθι μου", empty:"Τίποτα ακόμη", empty_s:"Πρόσθεσε κομμάτια από την αρχική.", pay:"Πληρωμή με αντικαταβολή", paid:"Η παραγγελία επιβεβαιώθηκε", paid_s:"Θα σε καλέσουμε για επιβεβαίωση διεύθυνσης.",
 me:"Ο λογαριασμός μου", me_s:"Μέλος από το 2026", k1:"αγορές", k2:"πωλήσεις", k3:"αγαπημένα", t_orders:"Παραγγελίες", t_wardrobe:"Η ντουλάπα μου",
 o1:"Παρακολούθηση παραγγελίας", o2:"Οι διευθύνσεις μου", o3:"Ειδοποιήσεις μεγέθους", o4:"Γλώσσα", o5:"Χώρα",
 favs_empty:"Πάτα ♡ σε ένα κομμάτι για να το βρεις εδώ.", explore:"Εξερεύνηση"
},
ar:{t_kick:"نموذج التطبيق", t_h1a:"Vitrina،", t_h1b:"في جيبك.", t_sub:"تطبيق لشراء وإعادة بيع قطع الفينتاج في الجزائر واليونان. اضغطي داخل الهاتف: كل شيء تفاعلي.",
 sc1:"الترحيب", sc2:"الرئيسية", sc3:"صفحة القطعة", sc4:"البيع", sc5:"السلة", sc6:"الحساب",
 f1:"إصدار جديد كل أسبوع", f1d:"القطع الجديدة تصل كل خميس على الساعة 20:00، مع عدّ تنازلي.", f2:"تنبيهات حسب مقاسك", f2d:"يصلك إشعار فور نشر قطعة بمقاسك.", f3:"البيع بثلاث صور", f3d:"من الأمام، تفصيل، والبطاقة: Vitrina تقترح السعر وتتكفل بالتوصيل.", f4:"بلدان، تطبيق واحد", f4d:"دينار أو يورو، دفع عند الاستلام أو بطاقة: كل شيء يتكيف مع بلدك.",
 soon:"قريباً على", back_site:"→ العودة إلى الموقع",
 welcome:"مستعمل، لكن اختيار أول. اختاري لغتك وبلدك.", start:"ابدئي",
 hello:"مساء الخير ✨", search:"ابحثي عن قطعة أو ماركة…", drop:"إصدار هذا الأسبوع", drop_t:"تشكيلة الخريف", ends:"الخميس 20:00",
 foryou:"لكِ", trending:"الأكثر إعجاباً", see:"الكل",
 tab_home:"الرئيسية", tab_explore:"استكشاف", tab_sell:"بيعي", tab_fav:"المفضلة", tab_me:"حسابي",
 seller:"Vitrina · المتجر الرسمي", seller_s:"★ 4.9 · 120 عملية بيع · ترد خلال ساعة", offer:"قدّمي عرضاً", buy:"اشتري", bought:"في السلة ✓",
 sell_t:"بيعي قطعة", sell_sub:"ثلاث صور تكفي. الباقي علينا.", ph1:"الأمام", ph2:"تفصيل", ph3:"البطاقة",
 f_title:"العنوان", f_title_ph:"مثال: فستان ساتان طويل", est:"السعر المقترح من Vitrina", publish:"انشري قطعتك", published:"تم النشر!", published_s:"ستظهر بعد المراجعة (أقل من 24 ساعة).",
 bag:"سلتي", empty:"لا شيء بعد", empty_s:"أضيفي قطعاً من الرئيسية.", pay:"الدفع عند الاستلام", paid:"تم تأكيد الطلب", paid_s:"سنتصل بك لتأكيد العنوان.",
 me:"حسابي", me_s:"عضوة منذ 2026", k1:"مشتريات", k2:"مبيعات", k3:"مفضلة", t_orders:"الطلبات", t_wardrobe:"خزانتي",
 o1:"تتبع الطلب", o2:"عناويني", o3:"تنبيهات المقاس", o4:"اللغة", o5:"البلد",
 favs_empty:"اضغطي ♡ على قطعة لتجديها هنا.", explore:"استكشاف"
}};
var B=document.body.getAttribute("data-base")||"";
var EX={"fr": {"open_full": "Ouvrir l'appli", "how_inst": "Comment l'installer", "demo": "Démo automatique · touchez le téléphone pour essayer", "scr_t": "Les écrans", "feat_t": "Pensée pour elles", "inst_kick": "Installer sur votre téléphone", "inst_t": "Vitrina sur votre écran d'accueil, en 30 secondes", "inst_sub": "Pas besoin de store ni de compte : l'appli s'ajoute à votre téléphone avec sa propre icône, comme une vraie application. Choisissez votre téléphone :", "tab_ios": "iPhone", "tab_and": "Android", "tab_ios_s": "Apple · iOS", "tab_and_s": "Samsung, Oppo, Xiaomi, Redmi, Huawei…", "ios1": "Ouvrez ce site avec Safari", "ios1d": "C'est l'icône de boussole bleue. Si vous êtes dans TikTok, Instagram ou WhatsApp : touchez ⋯ puis « Ouvrir dans le navigateur ».", "ios2": "Touchez le bouton Partager", "ios2d": "Le petit carré avec une flèche vers le haut, en bas au milieu de l'écran.", "ios3": "Choisissez « Sur l'écran d'accueil »", "ios3d": "Faites glisser la liste vers le haut si vous ne le voyez pas tout de suite.", "ios4": "Touchez « Ajouter » en haut à droite", "ios4d": "C'est fini : l'icône Vitrina apparaît à côté de vos autres applis.", "and1": "Ouvrez ce site avec Chrome", "and1d": "L'icône ronde rouge, jaune et verte. Depuis TikTok ou Instagram : touchez ⋮ puis « Ouvrir dans Chrome ».", "and2": "Touchez les 3 petits points ⋮", "and2d": "En haut à droite de l'écran.", "and3": "Touchez « Installer l'application »", "and3d": "Sur certains téléphones, c'est écrit « Ajouter à l'écran d'accueil » : c'est pareil.", "and4": "Confirmez avec « Installer »", "and4d": "C'est fini : l'icône Vitrina apparaît avec vos autres applis.", "inst_now": "Installer maintenant", "qr_t": "Vous êtes sur ordinateur ?", "qr_d": "Ouvrez l'appareil photo de votre téléphone et visez ce code : l'appli s'ouvre directement.", "note": "Version de démonstration : les commandes ne sont pas encore réelles. La version officielle arrivera ensuite sur l'App Store et Google Play.", "faq1": "Est-ce que c'est gratuit ?", "faq1d": "Oui, totalement. Rien à payer, rien à télécharger depuis un store.", "faq2": "Ça prend de la place ?", "faq2d": "Presque rien : moins qu'une photo.", "faq3": "Comment la supprimer ?", "faq3d": "Comme n'importe quelle appli : appui long sur l'icône, puis « Supprimer »."}, "en": {"open_full": "Open the app", "how_inst": "How to install it", "demo": "Auto demo · tap the phone to try it", "scr_t": "Screens", "feat_t": "Made for them", "inst_kick": "Install on your phone", "inst_t": "Vitrina on your home screen in 30 seconds", "inst_sub": "No store, no account: the app is added to your phone with its own icon, just like a real app. Pick your phone:", "tab_ios": "iPhone", "tab_and": "Android", "tab_ios_s": "Apple · iOS", "tab_and_s": "Samsung, Oppo, Xiaomi, Redmi, Huawei…", "ios1": "Open this site in Safari", "ios1d": "It's the blue compass icon. If you're inside TikTok, Instagram or WhatsApp: tap ⋯ then “Open in browser”.", "ios2": "Tap the Share button", "ios2d": "The small square with an arrow pointing up, at the bottom middle of the screen.", "ios3": "Choose “Add to Home Screen”", "ios3d": "Swipe the list up if you don't see it straight away.", "ios4": "Tap “Add” at the top right", "ios4d": "Done: the Vitrina icon appears next to your other apps.", "and1": "Open this site in Chrome", "and1d": "The round red, yellow and green icon. From TikTok or Instagram: tap ⋮ then “Open in Chrome”.", "and2": "Tap the 3 little dots ⋮", "and2d": "At the top right of the screen.", "and3": "Tap “Install app”", "and3d": "On some phones it says “Add to Home screen”: it's the same thing.", "and4": "Confirm with “Install”", "and4d": "Done: the Vitrina icon appears with your other apps.", "inst_now": "Install now", "qr_t": "On a computer?", "qr_d": "Open your phone's camera and point it at this code: the app opens right away.", "note": "Demo version: orders aren't real yet. The official version will then come to the App Store and Google Play.", "faq1": "Is it free?", "faq1d": "Yes, completely. Nothing to pay, nothing to download from a store.", "faq2": "Does it take up space?", "faq2d": "Almost none: less than a photo.", "faq3": "How do I remove it?", "faq3d": "Like any app: long-press the icon, then “Remove”."}, "el": {"open_full": "Άνοιξε την εφαρμογή", "how_inst": "Πώς την εγκαθιστώ", "demo": "Αυτόματη επίδειξη · άγγιξε το κινητό για να τη δοκιμάσεις", "scr_t": "Οθόνες", "feat_t": "Φτιαγμένη για εσένα", "inst_kick": "Εγκατάσταση στο κινητό", "inst_t": "Η Vitrina στην αρχική σου οθόνη σε 30 δευτερόλεπτα", "inst_sub": "Χωρίς store, χωρίς λογαριασμό: η εφαρμογή μπαίνει στο κινητό σου με δικό της εικονίδιο, σαν κανονική εφαρμογή. Διάλεξε κινητό:", "tab_ios": "iPhone", "tab_and": "Android", "tab_ios_s": "Apple · iOS", "tab_and_s": "Samsung, Oppo, Xiaomi, Redmi, Huawei…", "ios1": "Άνοιξε το site με το Safari", "ios1d": "Είναι το μπλε εικονίδιο με την πυξίδα. Αν είσαι μέσα στο TikTok, το Instagram ή το WhatsApp: πάτα ⋯ και «Άνοιγμα στο πρόγραμμα περιήγησης».", "ios2": "Πάτα το κουμπί Κοινοποίηση", "ios2d": "Το τετραγωνάκι με το βέλος προς τα πάνω, κάτω στη μέση της οθόνης.", "ios3": "Διάλεξε «Προσθήκη στην οθόνη Αφετηρίας»", "ios3d": "Σύρε τη λίστα προς τα πάνω αν δεν το βλέπεις αμέσως.", "ios4": "Πάτα «Προσθήκη» πάνω δεξιά", "ios4d": "Έτοιμο: το εικονίδιο της Vitrina εμφανίζεται δίπλα στις άλλες εφαρμογές σου.", "and1": "Άνοιξε το site με το Chrome", "and1d": "Το στρογγυλό κόκκινο, κίτρινο και πράσινο εικονίδιο. Από TikTok ή Instagram: πάτα ⋮ και «Άνοιγμα στο Chrome».", "and2": "Πάτα τις 3 τελίτσες ⋮", "and2d": "Πάνω δεξιά στην οθόνη.", "and3": "Πάτα «Εγκατάσταση εφαρμογής»", "and3d": "Σε μερικά κινητά γράφει «Προσθήκη στην αρχική οθόνη»: είναι το ίδιο.", "and4": "Επιβεβαίωσε με «Εγκατάσταση»", "and4d": "Έτοιμο: το εικονίδιο της Vitrina εμφανίζεται με τις άλλες εφαρμογές σου.", "inst_now": "Εγκατάσταση τώρα", "qr_t": "Είσαι σε υπολογιστή;", "qr_d": "Άνοιξε την κάμερα του κινητού σου και σημάδεψε αυτόν τον κωδικό: η εφαρμογή ανοίγει αμέσως.", "note": "Έκδοση επίδειξης: οι παραγγελίες δεν είναι ακόμη πραγματικές. Η επίσημη έκδοση θα έρθει μετά στο App Store και στο Google Play.", "faq1": "Είναι δωρεάν;", "faq1d": "Ναι, εντελώς. Τίποτα να πληρώσεις, τίποτα να κατεβάσεις από store.", "faq2": "Πιάνει χώρο;", "faq2d": "Σχεδόν καθόλου: λιγότερο από μια φωτογραφία.", "faq3": "Πώς τη διαγράφω;", "faq3d": "Όπως κάθε εφαρμογή: παρατεταμένο πάτημα στο εικονίδιο και «Αφαίρεση»."}, "ar": {"open_full": "افتحي التطبيق", "how_inst": "كيف أثبّته؟", "demo": "عرض تلقائي · المسي الهاتف لتجربته", "scr_t": "الشاشات", "feat_t": "مصمّم لكِ", "inst_kick": "التثبيت على هاتفك", "inst_t": "Vitrina على شاشتك الرئيسية في 30 ثانية", "inst_sub": "لا حاجة لمتجر ولا لحساب: يُضاف التطبيق إلى هاتفك بأيقونته الخاصة، مثل أي تطبيق عادي. اختاري نوع هاتفك:", "tab_ios": "آيفون", "tab_and": "أندرويد", "tab_ios_s": "Apple · iOS", "tab_and_s": "سامسونغ، أوبو، شاومي، ريدمي، هواوي…", "ios1": "افتحي هذا الموقع بـ Safari", "ios1d": "هي أيقونة البوصلة الزرقاء. إذا كنتِ داخل تيك توك أو إنستغرام أو واتساب: اضغطي ⋯ ثم «فتح في المتصفح».", "ios2": "اضغطي زر المشاركة", "ios2d": "المربع الصغير مع سهم نحو الأعلى، في أسفل وسط الشاشة.", "ios3": "اختاري «إضافة إلى الشاشة الرئيسية»", "ios3d": "اسحبي القائمة نحو الأعلى إذا لم تظهر لك مباشرة.", "ios4": "اضغطي «إضافة» في الأعلى", "ios4d": "انتهى: تظهر أيقونة Vitrina بجانب تطبيقاتك الأخرى.", "and1": "افتحي هذا الموقع بـ Chrome", "and1d": "الأيقونة الدائرية الحمراء والصفراء والخضراء. من تيك توك أو إنستغرام: اضغطي ⋮ ثم «فتح في Chrome».", "and2": "اضغطي على النقاط الثلاث ⋮", "and2d": "في أعلى الشاشة.", "and3": "اضغطي «تثبيت التطبيق»", "and3d": "في بعض الهواتف مكتوب «إضافة إلى الشاشة الرئيسية»: نفس الشيء.", "and4": "أكّدي بـ «تثبيت»", "and4d": "انتهى: تظهر أيقونة Vitrina مع تطبيقاتك الأخرى.", "inst_now": "ثبّتي الآن", "qr_t": "أنتِ على الكمبيوتر؟", "qr_d": "افتحي كاميرا هاتفك ووجّهيها نحو هذا الرمز: يُفتح التطبيق مباشرة.", "note": "نسخة تجريبية: الطلبات ليست حقيقية بعد. النسخة الرسمية ستصل لاحقاً إلى App Store وGoogle Play.", "faq1": "هل هو مجاني؟", "faq1d": "نعم، تماماً. لا شيء للدفع ولا شيء للتحميل من متجر.", "faq2": "هل يأخذ مساحة؟", "faq2d": "تقريباً لا شيء: أقل من صورة واحدة.", "faq3": "كيف أحذفه؟", "faq3d": "مثل أي تطبيق: ضغطة مطوّلة على الأيقونة ثم «حذف»."}};
for(var _l in EX){for(var _k in EX[_l])A[_l][_k]=EX[_l][_k];}
var S={lang:"fr",pays:"dz",scr:"onb",prod:P[13],bag:[],fav:[],cat:"all",sold:false,paid:false};
try{var l=localStorage.getItem("vitrina_lang");if(l)S.lang=JSON.parse(l);var c=localStorage.getItem("vitrina_pays");if(c)S.pays=JSON.parse(c);}catch(e){}
if(!A[S.lang])S.lang="fr";
function t(k){return A[S.lang][k]||T0[S.lang][k]||A.fr[k]||k}
function nm(p){return p[S.lang]||p.fr}
function nf(n){return String(n).replace(/\B(?=(\d{3})+(?!\d))/g," ")}
function pr(p){var v=S.pays==="gr"?p.gr:p.dz; return S.pays==="gr"?nf(v)+" €":(S.lang==="ar"?nf(v)+" دج":nf(v)+" DA")}
function im(id){return B+"img/p/"+id+".webp"}
function save(k,v){try{localStorage.setItem("vitrina_"+k,JSON.stringify(v))}catch(e){}}
var V=document.getElementById("view"), TB=document.getElementById("tabs");

function item(p){
  return '<div class="it" data-p="'+p.id+'"><div class="im"><img src="'+im(p.id)+'" alt=""></div><button class="heart'+(S.fav.indexOf(p.id)>-1?' on':'')+'" data-f="'+p.id+'">'+(S.fav.indexOf(p.id)>-1?'♥':'♡')+'</button><h4>'+nm(p)+'</h4><div class="p"><b>'+pr(p)+'</b><span>'+p.taille+'</span></div></div>';
}
var R={};
R.onb=function(){
  return '<div class="onb"><img src="'+B+'img/e/mur-argent.webp" alt=""><div class="in"><div class="w">Vitr<i>i</i>na</div><p>'+t("welcome")+'</p>'+
  '<div class="lg">'+[["ar","العربية"],["el","Ελληνικά"],["fr","Français"],["en","English"]].map(function(x){return '<button data-l="'+x[0]+'" class="'+(S.lang===x[0]?'on':'')+'">'+x[1]+'</button>'}).join("")+'</div>'+
  '<div class="cn"><button data-c="dz" class="'+(S.pays==="dz"?'on':'')+'">🇩🇿 '+T0[S.lang].dz+'</button><button data-c="gr" class="'+(S.pays==="gr"?'on':'')+'">🇬🇷 '+T0[S.lang].gr+'</button></div>'+
  '<button class="abtn" data-go="home">'+t("start")+'</button></div></div>';
};
R.home=function(){
  var cats=[["robes","robe-satin-ivoire"],["hauts","corset-dentelle-rouge"],["bas","jupe-leopard"],["vestes","manteau-daim"],["sacs","sac-cuir-noir"]];
  return '<div class="apph"><div class="w">Vitr<i>i</i>na</div><div style="display:flex;gap:8px"><span class="ic">🔔<span class="d">3</span></span><span class="ic" data-go="bag">👜'+(S.bag.length?'<span class="d">'+S.bag.length+'</span>':'')+'</span></div></div>'+
  '<div class="search">⌕ '+t("search")+'</div>'+
  '<div class="stories">'+cats.map(function(c){return '<button class="story" data-cat="'+c[0]+'"><span class="r"><img src="'+im(c[1])+'" alt=""></span>'+T0[S.lang]["cat_"+c[0]].split(" ")[0]+'</button>'}).join("")+'</div>'+
  '<div class="dropb" data-go="explore"><img src="'+B+'img/e/mur-fleurs.webp" alt=""><span class="cd">⏱ '+t("ends")+'</span><div class="tx"><small>'+t("drop")+'</small><b>'+t("drop_t")+'</b></div></div>'+
  '<div class="sec"><h3>'+t("trending")+'</h3><a data-go="explore">'+t("see")+'</a></div>'+
  '<div class="hs">'+P.slice(0,7).map(item).join("")+'</div>'+
  '<div class="sec"><h3>'+t("foryou")+'</h3><a data-go="explore">'+t("see")+'</a></div>'+
  '<div class="g2">'+P.slice(7,15).map(item).join("")+'</div>';
};
R.explore=function(){
  var list=P.filter(function(p){return S.cat==="all"||p.cat===S.cat});
  return '<div class="topbk"><h2>'+t("explore")+'</h2></div><div class="search">⌕ '+t("search")+'</div>'+
  '<div class="chipz">'+["all","robes","hauts","bas","vestes","sacs"].map(function(c){return '<button data-cat="'+c+'" class="'+(S.cat===c?'on':'')+'">'+T0[S.lang]["cat_"+c]+'</button>'}).join("")+'</div>'+
  '<div class="g2">'+list.map(item).join("")+'</div>';
};
R.prod=function(){
  var p=S.prod, inb=S.bag.indexOf(p.id)>-1;
  return '<div class="pimg"><img src="'+im(p.id)+'" alt=""><span class="ic back" data-go="home">'+(S.lang==="ar"?"→":"←")+'</span><button class="heart'+(S.fav.indexOf(p.id)>-1?' on':'')+'" data-f="'+p.id+'">'+(S.fav.indexOf(p.id)>-1?'♥':'♡')+'</button><div class="dots"><i></i><i></i><i></i></div></div>'+
  '<div class="pbody"><h2>'+nm(p)+'</h2><div class="pr">'+pr(p)+'</div>'+
  '<div class="pills"><span>'+T0[S.lang].size+' '+p.taille+'</span><span>'+T0[S.lang]["cond_"+p.etat]+'</span><span>'+(p.lieu==="gr"?"🇬🇷 "+T0[S.lang].from_gr:"🇩🇿 "+T0[S.lang].from_dz)+'</span></div>'+
  '<div class="seller"><img src="'+B+'img/e/logo.webp" alt=""><div><b>'+t("seller")+'</b><small>'+t("seller_s")+'</small></div><span class="ic">💬</span></div>'+
  '<p style="font-size:13px;color:var(--ink2);margin-bottom:16px">🔒 '+T0[S.lang].secure+' · 🚚 '+(S.pays==="gr"?T0[S.lang].deliv_gr:T0[S.lang].deliv_dz)+'</p>'+
  '<div class="cta2"><button class="abtn gh">'+t("offer")+'</button><button class="abtn'+(inb?' ok':'')+'" data-buy="'+p.id+'">'+(inb?t("bought"):t("buy"))+'</button></div>'+
  '<div class="sec" style="padding:22px 0 10px"><h3>'+T0[S.lang].similar+'</h3></div><div class="g2" style="padding:0">'+P.filter(function(x){return x.cat===p.cat&&x.id!==p.id}).slice(0,4).map(item).join("")+'</div></div>';
};
R.sell=function(){
  if(S.sold) return '<div class="done"><div><b>'+t("published")+'</b><p style="margin-top:12px">'+t("published_s")+'</p><button class="abtn" style="margin-top:22px;background:#F6F1E7;color:var(--ink);border-color:#F6F1E7" data-go="home">'+t("tab_home")+'</button></div></div>';
  return '<div class="pad"><h2 style="font-size:30px">'+t("sell_t")+'</h2><p style="font-size:13.5px;color:var(--ink2);margin-top:4px">'+t("sell_sub")+'</p>'+
  '<div class="slots"><div class="slot"><img src="'+im("robe-satin-ivoire")+'" alt=""></div><div class="slot"><span><i>＋</i>'+t("ph2")+'</span></div><div class="slot"><span><i>＋</i>'+t("ph3")+'</span></div></div>'+
  '<label class="fld">'+t("f_title")+'<input placeholder="'+t("f_title_ph")+'"></label>'+
  '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px"><label class="fld">'+T0[S.lang].f_cat+'<select>'+["robes","hauts","bas","vestes","sacs"].map(function(c){return '<option>'+T0[S.lang]["cat_"+c]+'</option>'}).join("")+'</select></label><label class="fld">'+T0[S.lang].size+'<select><option>S</option><option selected>M</option><option>L</option></select></label></div>'+
  '<label class="fld">'+T0[S.lang].cond+'<select><option>'+T0[S.lang].cond_neuf+'</option><option selected>'+T0[S.lang].cond_tb+'</option><option>'+T0[S.lang].cond_bon+'</option></select></label>'+
  '<div class="est">'+t("est")+'<b>'+(S.pays==="gr"?"30 – 38 €":(S.lang==="ar"?"4 500 – 5 500 دج":"4 500 – 5 500 DA"))+'</b></div>'+
  '<button class="abtn" style="width:100%" data-publish>'+t("publish")+'</button></div>';
};
R.bag=function(){
  if(S.paid) return '<div class="done"><div><b>'+t("paid")+'</b><p style="margin-top:12px">'+t("paid_s")+'</p><button class="abtn" style="margin-top:22px;background:#F6F1E7;color:var(--ink);border-color:#F6F1E7" data-go="home">'+t("tab_home")+'</button></div></div>';
  var items=S.bag.map(function(id){return P.filter(function(p){return p.id===id})[0]});
  if(!items.length) return '<div class="topbk"><h2>'+t("bag")+'</h2></div><div class="empty2"><b>'+t("empty")+'</b>'+t("empty_s")+'<br><br><button class="abtn" data-go="home">'+t("tab_home")+'</button></div>';
  var k=S.pays==="gr"?"gr":"dz", sum=items.reduce(function(a,p){return a+p[k]},0);
  var tot=S.pays==="gr"?nf((sum+3.9).toFixed(2)).replace(".",",")+" €":nf(sum+600)+(S.lang==="ar"?" دج":" DA");
  return '<div class="topbk"><h2>'+t("bag")+'</h2></div><div class="pad">'+items.map(function(p){
    return '<div style="display:flex;gap:12px;align-items:center;padding:10px 0;border-bottom:1px solid var(--line)"><img src="'+im(p.id)+'" style="width:64px;height:84px;object-fit:cover;border-radius:10px" alt=""><div style="flex:1"><b style="font-size:13.5px;display:block">'+nm(p)+'</b><span style="font-size:12px;color:var(--ink2)">'+T0[S.lang].size+' '+p.taille+'</span></div><b style="font-family:EB Garamond,serif;font-size:18px">'+pr(p)+'</b></div>';
  }).join("")+'<div style="display:flex;justify-content:space-between;padding:14px 0 4px;font-size:14px"><span>'+T0[S.lang].shipping+'</span><span>'+(S.pays==="gr"?"3,90 €":(S.lang==="ar"?"600 دج":"600 DA"))+'</span></div>'+
  '<div style="display:flex;justify-content:space-between;padding:6px 0 16px;font-family:EB Garamond,serif;font-size:26px"><span>'+T0[S.lang].total+'</span><span>'+tot+'</span></div>'+
  '<button class="abtn" style="width:100%" data-pay>'+(S.pays==="gr"?T0[S.lang].place_order:t("pay"))+'</button></div>';
};
R.fav=function(){
  var l=P.filter(function(p){return S.fav.indexOf(p.id)>-1});
  return '<div class="topbk"><h2>'+t("tab_fav")+'</h2></div>'+(l.length?'<div class="g2">'+l.map(item).join("")+'</div>':'<div class="empty2"><b>♡</b>'+t("favs_empty")+'</div>');
};
R.me=function(){
  return '<div class="prof"><img src="'+B+'img/e/logo.webp" alt=""><h3>Asma</h3><p>'+t("me_s")+' · '+(S.pays==="gr"?"🇬🇷 Αθήνα":"🇩🇿 Oran")+'</p></div>'+
  '<div class="kpis"><div><b>'+S.bag.length+'</b><span>'+t("k1")+'</span></div><div><b>12</b><span>'+t("k2")+'</span></div><div><b>'+S.fav.length+'</b><span>'+t("k3")+'</span></div></div>'+
  '<div class="seg2"><button class="on">'+t("t_wardrobe")+'</button><button>'+t("t_orders")+'</button></div>'+
  '<div class="g2" style="grid-template-columns:repeat(3,1fr);gap:6px">'+P.slice(20,26).map(function(p){return '<div class="it" data-p="'+p.id+'"><div class="im" style="border-radius:10px"><img src="'+im(p.id)+'" alt=""></div></div>'}).join("")+'</div>'+
  '<div class="list"><div><span>'+t("o1")+'</span><span>›</span></div><div><span>'+t("o2")+'</span><span>›</span></div><div><span>'+t("o3")+'</span><span>S · M</span></div><div data-go="onb" style="cursor:pointer"><span>'+t("o4")+' / '+t("o5")+'</span><span>'+S.lang.toUpperCase()+' · '+S.pays.toUpperCase()+'</span></div></div>';
};
var TABS=[["home","⌂"],["explore","⌕"],["sell","+"],["fav","♡"],["me","◯"]];
var MAP={onb:"sc1",home:"sc2",prod:"sc3",sell:"sc4",bag:"sc5",me:"sc6"};
function draw(){
  document.documentElement.lang=S.lang; document.documentElement.dir=S.lang==="ar"?"rtl":"ltr";
  document.querySelectorAll("[data-a]").forEach(function(e){e.textContent=t(e.getAttribute("data-a"))});
  document.querySelectorAll(".lgs button").forEach(function(b){b.classList.toggle("on",b.getAttribute("data-l")===S.lang)});
  V.innerHTML='<div class="scrn">'+R[S.scr]()+'</div>';
  TB.style.display=S.scr==="onb"?"none":"grid";
  var sb=document.getElementById("sbar");
  if(sb){ sb.style.color=S.scr==="onb"?"#fff":""; sb.style.position=S.scr==="onb"?"absolute":""; sb.style.zIndex="9"; sb.style.width="100%"; }
  TB.innerHTML=TABS.map(function(x){return '<button data-go="'+x[0]+'" class="'+(x[0]==="sell"?"plus ":"")+(S.scr===x[0]?"on":"")+'"><i>'+x[1]+'</i>'+t("tab_"+x[0])+'</button>'}).join("");
  var sl=document.getElementById("scrlist"); if(sl) sl.innerHTML=["onb","home","prod","sell","bag","me"].map(function(s,i){return '<button data-go="'+s+'" class="'+(S.scr===s?"on":"")+'"><b>'+(i+1)+'</b>'+t(MAP[s])+'</button>'}).join("");
}
function go(s,auto){ if(!auto) stopDemo(); if(s==="sell")S.sold=false; if(s==="bag"&&!S.bag.length)S.paid=false; S.scr=s; V.scrollTop=0; draw(); }
document.addEventListener("click",function(e){
  if(e.target.closest(".phone,.scr2")) stopDemo();
  var tb=e.target.closest("[data-os]"); if(tb){ setOS(tb.getAttribute("data-os")); return; }
  var ib=e.target.closest("[data-install]"); if(ib&&deferred){ deferred.prompt(); return; }
  var el=e.target.closest("[data-f],[data-go],[data-p],[data-l],[data-c],[data-cat],[data-buy],[data-publish],[data-pay]"); if(!el)return;
  if(el.hasAttribute("data-f")){ e.stopPropagation(); var id=el.getAttribute("data-f"), i=S.fav.indexOf(id); if(i>-1)S.fav.splice(i,1); else S.fav.push(id); draw(); return; }
  if(el.hasAttribute("data-l")){ S.lang=el.getAttribute("data-l"); save("lang",S.lang); draw(); return; }
  if(el.hasAttribute("data-c")){ S.pays=el.getAttribute("data-c"); save("pays",S.pays); draw(); return; }
  if(el.hasAttribute("data-cat")){ S.cat=el.getAttribute("data-cat"); go("explore"); return; }
  if(el.hasAttribute("data-buy")){ var b=el.getAttribute("data-buy"); if(S.bag.indexOf(b)<0)S.bag.push(b); S.paid=false; draw(); return; }
  if(el.hasAttribute("data-publish")){ S.sold=true; draw(); return; }
  if(el.hasAttribute("data-pay")){ S.paid=true; S.bag=[]; draw(); return; }
  if(el.hasAttribute("data-p")){ S.prod=P.filter(function(p){return p.id===el.getAttribute("data-p")})[0]; go("prod"); return; }
  if(el.hasAttribute("data-go")) go(el.getAttribute("data-go"));
});
function clock(){var ck=document.getElementById("clk"); if(!ck)return; var d=new Date(); ck.textContent=String(d.getHours()).padStart(2,"0")+":"+String(d.getMinutes()).padStart(2,"0")}
clock();setInterval(clock,30000);
document.addEventListener("contextmenu",function(e){if(e.target.tagName==="IMG")e.preventDefault()});
/* ----- démo automatique ----- */
var demoT=null, demoSeq=["home","prod","sell","bag","me","home"], di=0;
function stopDemo(){ if(demoT){ clearInterval(demoT); demoT=null; var c=document.getElementById("demochip"); if(c) c.classList.add("off"); } }
if(document.body.hasAttribute("data-demo")){
  setTimeout(function(){ if(S.scr==="onb"){ demoT=setInterval(function(){ var s=demoSeq[di++%demoSeq.length]; if(s==="prod") S.prod=P[(di*3)%P.length]; if(s==="bag"&&!S.bag.length) S.bag=[P[0].id,P[5].id]; go(s,true); },3200); } },2600);
}
/* ----- installation ----- */
var deferred=null;
addEventListener("beforeinstallprompt",function(e){ e.preventDefault(); deferred=e; document.querySelectorAll("[data-install]").forEach(function(b){b.hidden=false}); });
function setOS(os){ document.querySelectorAll("[data-os]").forEach(function(b){b.classList.toggle("on",b.getAttribute("data-os")===os)}); document.querySelectorAll(".steps-os").forEach(function(x){x.hidden=x.getAttribute("data-for")!==os}); }
if(document.querySelector("[data-os]")) setOS(/android/i.test(navigator.userAgent)?"and":"ios");
if("serviceWorker" in navigator && location.protocol==="https:"){ try{ navigator.serviceWorker.register((document.body.getAttribute("data-base")||"")+"sw.js"); }catch(e){} }
/* reveal */
if("IntersectionObserver" in window){ var io=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){x.target.classList.add("in");io.unobserve(x.target)}})},{rootMargin:"0px 0px -8% 0px"}); document.querySelectorAll(".rv").forEach(function(e){io.observe(e)}); } else document.querySelectorAll(".rv").forEach(function(e){e.classList.add("in")});
/* tilt */
var ph=document.querySelector(".tilt");
if(ph&&matchMedia("(hover:hover)").matches){ addEventListener("mousemove",function(e){ var x=e.clientX/innerWidth-.5,y=e.clientY/innerHeight-.5; ph.style.transform="rotateY("+(x*14)+"deg) rotateX("+(-y*10)+"deg)"; document.querySelectorAll(".orb").forEach(function(o,i){ o.style.translate=(x*(20+i*12))+"px "+(y*(20+i*10))+"px"; }); }); }
draw();
})();
