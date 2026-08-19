/* ==========================================================================
   Dr. Malak Physiotherapy Clinic - Interactive App Script (Bilingual Support)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // --- Translation Dictionary ---
    const translations = {
        ar: {
            logoName: "د. ملك",
            logoTitle: "للعلاج الطبيعي والتأهيل",
            navHome: "الرئيسية",
            navAbout: "من أنا؟",
            navServices: "خدماتنا",
            navPainMap: "خريطة الألم",
            navTestimonials: "آراء المرضى",
            navContact: "تواصل معنا",
            btnBookNow: "احجز موعداً",
            
            heroBadge: "عيادة التميز والاستشفاء الطبيعي",
            heroTitle: "استعد حريتك في الحركة وعش حياتك <span class=\"highlight\">بدون ألم</span>",
            heroDesc: "تحت إشراف الدكتورة ملك، نقدم برامج علاجية مخصصة تعيد لك مرونة جسمك وقوته باستخدام أحدث التقنيات وأفضل الأساليب العلمية المعتمدة عالمياً.",
            heroBtnBook: "احجز استشارتك الآن",
            heroBtnServices: "استكشف خدماتنا",
            statPatients: "مريض متعافى",
            statExperience: "سنوات خبرة",
            statSatisfaction: "نسبة رضا ونشاط",
            floatingCardExpTitle: "أخصائية معتمدة",
            floatingCardExpDesc: "علاج يدوي وتأهيل حركي",
            floatingCardPatTitle: "رعاية فائقة",
            floatingCardPatDesc: "خطط مخصصة لكل حالة",
            
            aboutSub: "من هي الدكتورة ملك؟",
            aboutMain: "خبرة علمية وعملية تقودك نحو التعافي والنشاط الكامل",
            aboutText: "الدكتورة ملك هي أخصائية علاج طبيعي رائدة وتتمتع بخبرة واسعة في تأهيل العظام والأعصاب وإصابات الملاعب. تميزت بـشطارتها وقدرتها الفريدة على تشخيص الأسباب الجذرية للألم وتصميم خطط علاجية فردية تتناسب مع نمط حياة كل مريض.",
            ach1Title: "درجة الدكتوراه المهنية (DPT)",
            ach1Desc: "في العلاج الطبيعي والتأهيل الحركي المتقدم.",
            ach2Title: "شهادات دولية معتمدة",
            ach2Desc: "في العلاج اليدوي (Manual Therapy) وتقويم العمود الفقري (Chiropractic).",
            ach3Title: "منهج استشفاء متكامل",
            ach3Desc: "يجمع بين العلاج الطبيعي والأجهزة المتقدمة والتمارين العلاجية المنزلية لضمان عدم عودة الألم.",
            aboutBtnTalk: "تحدث مع الدكتورة ملك",
            
            servicesSub: "تخصصاتنا العلاجية",
            servicesMain: "رعاية طبية شاملة لمختلف الحالات الصحية",
            servicesDesc: "نقدم مجموعة واسعة من الخدمات العلاجية والتأهيلية المصممة بعناية لمساعدتك على العودة إلى نشاطك الطبيعي بأسرع وقت وأقل جهد.",
            
            serv1Title: "تأهيل العظام والمفاصل",
            serv1Desc: "علاج حالات خشونة المفاصل، الانزلاق الغضروفي، آلام الظهر والرقبة، وتأهيل ما بعد عمليات تركيب المفاصل الصناعية.",
            serv2Title: "تأهيل إصابات الملاعب",
            serv2Desc: "برامج مخصصة للرياضيين لعلاج التواء الكاحل، تمزق الأربطة، وإصابات الرباط الصليبي والعودة الآمنة والسريعة للملعب.",
            serv3Title: "تأهيل حالات الأعصاب",
            serv3Desc: "برامج تأهيلية لمرضى الجلطات الدماغية، شلل العصب السابع، وحالات التصلب المتعدد لاستعادة التحكم والقدرة الحركية.",
            serv4Title: "العلاج اليدوي والتقويم",
            serv4Desc: "استخدام تقنيات التعبئة المفصلية والعلاج اليدوي اللطيف (Manual Therapy) لتحسين حركة الفقرات وتخفيف الضغط العصبي.",
            serv5Title: "تأهيل الأطفال والنمو",
            serv5Desc: "مساعدة الأطفال الذين يعانون من تأخر حركي، نقص الأكسجين أثناء الولادة، أو حالات الشلل الدماغي لتحسين قدراتهم البدنية.",
            serv6Title: "الاستشفاء العضلي للرياضيين",
            serv6Desc: "جلسات استشفاء متطورة باستخدام تقنيات المساج العلاجي، الحجامة الجافة، والإبر الجافة لتخفيف التوتر العضلي وتحسين الأداء.",
            servLink: "احجز موعداً",
            
            painSub: "تفاعلية وذكية",
            painTitle: "خريطة الألم التفاعلية",
            painDesc: "اضغط على منطقة الألم في جسم الإنسان أدناه لتتعرف على الأسباب المحتملة وكيف يمكن للدكتورة ملك مساعدتك في التخلص منه نهائياً.",
            painHint: "انقر فوق أي نقطة مضيئة لعرض التفاصيل",
            
            painDefaultTitle: "مرحبًا بك في خريطة الألم",
            painDefaultDesc: "يرجى اختيار وتحديد المنطقة التي تشعر بالألم فيها من الجسم وسنقوم بتحليل الحالة وتوضيح دور العلاج الطبيعي المناسب لها.",
            painBtnBookCase: "احجز موعد فحص لهذه الحالة",
            painPointHeader: "كيف تساعدك دكتورة ملك؟",
            
            testiSub: "قصص نجاح حقيقية",
            testiMain: "ماذا يقول مرضانا بعد استعادة عافيتهم؟",
            testiDesc: "أفضل مكافأة لنا هي رؤية ابتسامة مرضانا وهم يعودون لممارسة حياتهم اليومية وهواياتهم بنشاط ودون قيود.",
            
            test1Text: "\"كنت أعاني من انزلاق غضروفي شديد في أسفل الظهر وكان الأطباء ينصحونني بعملية جراحية فورية. الحمد لله، وبفضل جلسات العلاج اليدوي والتقويم المكثفة مع الدكتورة ملك، استعدت قدرتي على المشي والجلوس دون أي ألم وتجنبت الجراحة تماماً. دكتورة شاطرة جداً وصبورة وتفهم عملها بدقة.\"",
            test1Name: "أحمد عبد الرحمن",
            test1Role: "مهندس برمجيات (تعافي من انزلاق غضروفي)",
            test2Text: "\"بعد تعرضي لتمزق الرباط الصليبي الأمامي في مباراة كرة القدم، كنت خائفاً جداً من عدم القدرة على اللعب مجدداً. صممت لي الدكتورة ملك برنامج تأهيل رياضي متكامل استمر لـ 6 أشهر. الآن عدت للملاعب بقوة وثبات تام. ممتن جداً للرعاية الفائقة والاحترافية.\"",
            test2Name: "كابتن محمود رضا",
            test2Role: "لاعب كرة قدم هاوٍ (تأهيل رباط صليبي)",
            test3Text: "\"أمي كانت تعاني من خشونة شديدة بالركبتين وصعوبة بالغة في صعود السلم. بفضل الله ثم جلسات العلاج الطبيعي والتأهيل الحركي مع الدكتورة ملك، أصبحت تتحرك بسهولة وتخرج يومياً بشكل طبيعي. المعاملة الإنسانية والابتسامة في العيادة تكفي للشعور بالتحسن.\"",
            test3Name: "سارة محمد",
            test3Role: "مرافقة مريضة (علاج خشونة الركبة)",
            
            bookingMain: "ابدأ رحلة استعادتك لعافيتك وحركتك اليوم",
            bookingDesc: "لا تدع الألم يحد من نشاطك ويتحكم في حياتك. سجل بياناتك الآن وسيقوم موظف الاستقبال في العيادة بالتواصل معك فوراً لتأكيد أنسب موعد للفحص والجلسات.",
            contactPhoneTitle: "اتصل بنا هاتفياً",
            contactWhatsappTitle: "مراسلة واتساب سريعة",
            contactAddressTitle: "عنوان العيادة الرئيسي",
            contactAddressDesc: "سوهاج، المراغة، بجوار المستشفى",
            contactBranchTitle: "الفرع الجديد (قريباً)",
            contactBranchDesc: "الغردقة، البحر الأحمر",
            
            formTitle: "طلب حجز استشارة طبية",
            formDesc: "يرجى تعبئة الحقول التالية بعناية وسنتصل بك في غضون ساعتين عمل.",
            labelName: "الاسم الكامل للمريض *",
            placeholderName: "أدخل اسمك الثلاثي",
            labelPhone: "رقم الهاتف الجوال *",
            placeholderPhone: "مثال: 01102511226",
            labelPainArea: "منطقة الألم الرئيسية *",
            optSelectPain: "اختر منطقة الألم",
            optNeck: "آلام الرقبة والكتف",
            optBack: "آلام الظهر والفقرات",
            optJoints: "خشونة المفاصل (ركبة/ورك)",
            optSports: "إصابة ملاعب/عضلات",
            optNerves: "تأهيل أعصاب وجلطات",
            optOther: "حالة أخرى/عامة",
            labelMsg: "شرح مختصر للألم أو الحالة (اختياري)",
            placeholderMsg: "اكتب هنا أي تفاصيل تشعر أنها تفيد التشخيص (مثلاً: منذ متى تشعر بالألم؟)",
            btnSubmitText: "إرسال طلب الحجز",
            btnSubmitLoader: "جاري الإرسال...",
            successTitle: "تم استلام طلبك بنجاح!",
            successDesc: "شكراً لثقتك بالدكتورة ملك، سيقوم منسق الحجوزات بالاتصال بك في أقرب وقت لتأكيد الموعد المناسب وتفاصيل الكشف.",
            
            footerAboutText: "نحن نسعى لتمكين الأفراد من استعادة السيطرة الكاملة على أجسامهم وعيش حياة خالية من الألم من خلال برامج علاجية مخصصة وعناية فائقة المستوى.",
            footerLinksTitle: "روابط سريعة",
            footerHoursTitle: "مواعيد العمل",
            hoursDays: "السبت - الأربعاء:",
            hoursThurs: "الخميس:",
            hoursFri: "الجمعة:",
            hoursClosed: "العطلة الأسبوعية",
            footerRights: "جميع الحقوق محفوظة &copy; 2026 عيادة الدكتورة ملك للعلاج الطبيعي والتأهيل.",
            footerDev: "تم التطوير بكل حب لصحة أفضل."
        },
        en: {
            logoName: "Dr. Malak",
            logoTitle: "Physiotherapy & Rehab",
            navHome: "Home",
            navAbout: "About Me",
            navServices: "Services",
            navPainMap: "Pain Map",
            navTestimonials: "Testimonials",
            navContact: "Contact Us",
            btnBookNow: "Book Appointment",
            
            heroBadge: "Clinic of Excellence & Natural Recovery",
            heroTitle: "Restore Your Freedom of Movement and Live <span class=\"highlight\">Pain-Free</span>",
            heroDesc: "Under Dr. Malak's supervision, we provide tailored treatment programs that restore your body's flexibility and strength using the latest globally approved scientific methods.",
            heroBtnBook: "Book Your Consultation Now",
            heroBtnServices: "Explore Our Services",
            statPatients: "Recovered Patients",
            statExperience: "Years of Experience",
            statSatisfaction: "Satisfaction Rate",
            floatingCardExpTitle: "Certified Specialist",
            floatingCardExpDesc: "Manual Therapy & Motor Rehab",
            floatingCardPatTitle: "Premium Care",
            floatingCardPatDesc: "Tailored Plans for Each Case",
            
            aboutSub: "Who is Dr. Malak?",
            aboutMain: "Scientific & Practical Experience Leading You to Recovery",
            aboutText: "Dr. Malak is a leading physiotherapist with extensive experience in orthopedic, neurological, and sports injury rehabilitation. She is known for her high skill and unique ability to diagnose root causes of pain and design individual treatment plans that fit each patient's lifestyle.",
            ach1Title: "Doctor of Physical Therapy (DPT)",
            ach1Desc: "In advanced physical therapy and motor rehabilitation.",
            ach2Title: "Certified Globally",
            ach2Desc: "In Manual Therapy and Chiropractic adjustments.",
            ach3Title: "Integrated Recovery Method",
            ach3Desc: "Combines physiotherapy, advanced devices, and home exercises to ensure pain doesn't return.",
            aboutBtnTalk: "Talk with Dr. Malak",
            
            servicesSub: "Our Specialties",
            servicesMain: "Comprehensive Medical Care for Various Conditions",
            servicesDesc: "We offer a wide range of therapeutic and rehabilitative services carefully designed to help you return to your normal activity as quickly and effortlessly as possible.",
            
            serv1Title: "Orthopedic & Joint Rehab",
            serv1Desc: "Treatment of osteoarthritis, herniated discs, back & neck pain, and post-joint replacement surgery rehab.",
            serv2Title: "Sports Injury Rehab",
            serv2Desc: "Tailored programs for athletes to treat ankle sprains, torn ligaments, ACL injuries, and returning to play.",
            serv3Title: "Neurological Rehab",
            serv3Desc: "Rehab programs for stroke patients, Bell's Palsy, and Multiple Sclerosis to restore motor control.",
            serv4Title: "Manual Therapy & Chiropractic",
            serv4Desc: "Using joint mobilization and gentle manual therapy techniques to improve vertebrae movement and relieve pain.",
            serv5Title: "Pediatric Rehab & Growth",
            serv5Desc: "Helping children suffering from motor delays, birth hypoxia, or cerebral palsy to improve physical abilities.",
            serv6Title: "Sports Muscle Recovery",
            serv6Desc: "Advanced recovery sessions using medical massage, dry cupping, and dry needling to relieve muscle tension and improve performance.",
            servLink: "Book Now",
            
            painSub: "Interactive & Smart",
            painTitle: "Interactive Pain Map",
            painDesc: "Click on the pain area of the human body below to learn about possible causes and how Dr. Malak can help you get rid of it permanently.",
            painHint: "Click on any glowing hotspot to view details",
            
            painDefaultTitle: "Welcome to the Pain Map",
            painDefaultDesc: "Please select and locate the area of body pain, and we will analyze the condition and clarify the role of physical therapy for it.",
            painBtnBookCase: "Book Examination for this Case",
            painPointHeader: "How does Dr. Malak help you?",
            
            testiSub: "Real Success Stories",
            testiMain: "What Do Our Patients Say After Recovery?",
            testiDesc: "Our best reward is seeing our patients' smiles as they return to their daily lives and hobbies actively and without limitations.",
            
            test1Text: "\"I was suffering from a severe herniated disc in my lower back, and doctors recommended immediate surgery. Thank God, and thanks to the intensive manual therapy and alignment sessions with Dr. Malak, I regained my ability to walk and sit without any pain and avoided surgery altogether. A very clever, patient doctor who knows her work precisely.\"",
            test1Name: "Ahmed Abdel-Rahman",
            test1Role: "Software Engineer (Recovered from Herniated Disc)",
            test2Text: "\"After tearing my ACL in a football match, I was very afraid of not playing again. Dr. Malak designed a complete sports rehab program for 6 months. Now I'm back on the field strong and stable. Grateful for the superb care and professionalism.\"",
            test2Name: "Capt. Mahmoud Reda",
            test2Role: "Amateur Football Player (ACL Rehabilitation)",
            test3Text: "\"My mother was suffering from severe knee osteoarthritis and extreme difficulty climbing stairs. Thanks to God and the physical therapy sessions with Dr. Malak, she now moves easily and goes out daily. The humane treatment and warm smile at the clinic are enough to feel better.\"",
            test3Name: "Sara Mohamed",
            test3Role: "Patient Companion (Knee Osteoarthritis Treatment)",
            
            bookingMain: "Start your journey to recovery and movement today",
            bookingDesc: "Don't let pain limit your activity and control your life. Register your details now, and our clinic coordinator will contact you immediately to confirm the best appointment.",
            contactPhoneTitle: "Call Us by Phone",
            contactWhatsappTitle: "Quick WhatsApp Chat",
            contactAddressTitle: "Main Clinic Address",
            contactAddressDesc: "Sohag, El-Maragha, Next to the Hospital",
            contactBranchTitle: "New Branch (Soon)",
            contactBranchDesc: "Hurghada, Red Sea",
            
            formTitle: "Request Medical Consultation",
            formDesc: "Please fill in the following fields carefully and we will contact you within two business hours.",
            labelName: "Patient's Full Name *",
            placeholderName: "Enter your full name",
            labelPhone: "Mobile Phone Number *",
            placeholderPhone: "e.g., 01102511226",
            labelPainArea: "Main Pain Area *",
            optSelectPain: "Select pain area",
            optNeck: "Neck and Shoulder Pain",
            optBack: "Back and Spine Pain",
            optJoints: "Joint Osteoarthritis (Knee/Hip)",
            optSports: "Sports Injury / Muscle Pain",
            optNerves: "Neurological & Stroke Rehab",
            optOther: "Other / General Case",
            labelMsg: "Brief Explanation of Pain or Case (Optional)",
            placeholderMsg: "Write any details you feel help the diagnosis (e.g., how long have you felt pain?)",
            btnSubmitText: "Send Booking Request",
            btnSubmitLoader: "Sending...",
            successTitle: "Request Received Successfully!",
            successDesc: "Thank you for trusting Dr. Malak. Our coordinator will contact you shortly to confirm the appointment.",
            
            footerAboutText: "We strive to empower individuals to regain full control over their bodies and live a pain-free life through customized treatment plans and high-level care.",
            footerLinksTitle: "Quick Links",
            footerHoursTitle: "Working Hours",
            hoursDays: "Saturday - Wednesday:",
            hoursThurs: "Thursday:",
            hoursFri: "Friday:",
            hoursClosed: "Weekly Holiday",
            footerRights: "All rights reserved &copy; 2026 Dr. Malak Physiotherapy & Rehab Clinic.",
            footerDev: "Developed with love for better health."
        }
    };

    // --- Interactive Pain Map Bilingual Data ---
    const painMapData = {
        ar: {
            'neck': {
                title: 'آلام الرقبة والفقرات العنقية',
                tag: 'علاج العمود الفقري',
                desc: 'تنتج آلام الرقبة عادةً عن إجهاد العضلات نتيجة الجلوس الطويل بوضعية خاطئة أمام الأجهزة، أو خشونة الفقرات، أو الانزلاق الغضروفي، وتسبب أحياناً الصداع وتنميل الذراعين.',
                points: [
                    'جلسات العلاج اليدوي اللطيف (Manual Therapy) لتحسين حركة الفقرات.',
                    'برامج تمارين الاستطالة وتقوية عضلات الرقبة والكتفين.',
                    'علاج وتأهيل وقائي لمنع عودة الشد العضلي المزمن.'
                ]
            },
            'shoulder-r': {
                title: 'آلام وإصابات الكتف (الأيمن)',
                tag: 'علاج المفاصل والأربطة',
                desc: 'يشمل ألم الكتف التهاب الأوتار، تمزق الكفة المدورة، أو متلازمة الكتف المتجمد (Frozen Shoulder)، مما يسبب قيوداً شديدة على حركة الذراع وصعوبة في النوم.',
                points: [
                    'تقنيات تحريك المفصل لاستعادة المدى الحركي تدريجياً.',
                    'استخدام الأجهزة الطبية الحديثة لتخفيف التوتر العضلي وتنشيط الأوتار.',
                    'تمارين لتقوية عضلات الحزام الكتفي لضمان الثبات الحركي.'
                ]
            },
            'shoulder-l': {
                title: 'آلام وإصابات الكتف (الأيسر)',
                tag: 'علاج المفاصل والأربطة',
                desc: 'يشمل ألم الكتف التهاب الأوتار، تمزق الكفة المدورة، أو متلازمة الكتف المتجمد (Frozen Shoulder)، مما يسبب قيوداً شديدة على حركة الذراع وصعوبة في النوم.',
                points: [
                    'تقنيات تحريك المفصل لاستعادة المدى الحركي تدريجياً.',
                    'استخدام الأجهزة الطبية الحديثة لتخفيف التوتر العضلي وتنشيط الأوتار.',
                    'تمارين لتقوية عضلات الحزام الكتفي لضمان الثبات الحركي.'
                ]
            },
            'back': {
                title: 'آلام أسفل الظهر والانزلاق الغضروفي',
                tag: 'علاج العمود الفقري',
                desc: 'تعتبر آلام أسفل الظهر هي الشكوى الأكثر شيوعاً، وتنتج عن الجلوس الخاطئ، رفع أوزان ثقيلة، أو الانزلاق الغضروفي (الديسك) الذي يضغط على الأعصاب ويسبب ألم عرق النسا.',
                points: [
                    'تقويم الفقرات يدوياً (Chiropractic) لتخفيف الضغط على الجذور العصبية.',
                    'تمارين لتقوية عضلات الجذع والظهر (Core Strengthening) لتثبيت العمود الفقري.',
                    'الاستشفاء بالأجهزة العلاجية المتقدمة لتقليل الالتهابات وتسريع التعافي.'
                ]
            },
            'knee-r': {
                title: 'آلام الركبة وخشونة المفاصل (اليمنى)',
                tag: 'علاج المفاصل والتأهيل',
                desc: 'تنتج آلام الركبة عن خشونة المفصل وتآكل الغضاريف، أو إصابات الأربطة كتمزق الرباط الصليبي والغضروف الهلالي، مما يسبب صعوبة بالغة في صعود الدرج والمشي.',
                points: [
                    'تقوية عضلات الفخذ الأمامية والخلفية لتخفيف الوزن الواقع على المفصل.',
                    'تمارين التوازن والثبات لتأهيل مفصل الركبة للحركة الطبيعية دون ألم.',
                    'برامج تأهيلية متكاملة للرياضيين تمهيداً للعودة للتمارين والنشاط المكثف.'
                ]
            },
            'knee-l': {
                title: 'آلام الركبة وخشونة المفاصل (اليسرى)',
                tag: 'علاج المفاصل والتأهيل',
                desc: 'تنتج آلام الركبة عن خشونة المفصل وتآكل الغضاريف، أو إصابات الأربطة كتمزق الرباط الصليبي والغضروف الهلالي، مما يسبب صعوبة بالغة في صعود الدرج والمشي.',
                points: [
                    'تقوية عضلات الفخذ الأمامية والخلفية لتخفيف الوزن الواقع على المفصل.',
                    'تمارين التوازن والثبات لتأهيل مفصل الركبة للحركة الطبيعية دون ألم.',
                    'برامج تأهيلية متكاملة للرياضيين تمهيداً للعودة للتمارين والنشاط المكثف.'
                ]
            },
            'ankle': {
                title: 'آلام الكاحل وشوكة القدم الكعبية',
                tag: 'إصابات الكاحل والقدم',
                desc: 'تشمل التواء الكاحل المتكرر، التهاب اللفافة الأخمصية (الشوكة العظمية بالكعب)، والتهاب وتر أكيلس، وتسبب آلاماً شديدة عند اتخاذ الخطوات الأولى صباحاً.',
                points: [
                    'تمارين استعادة التوازن الحركي لتقوية أربطة الكاحل ومنع تكرار الالتواء.',
                    'استخدام تقنيات الإبر الجافة والموجات التصادمية لتفتيت التكلسات وتخفيف ألم الكعب.',
                    'تمارين إطالة وتليين للنسيج الأخمصي بالقدم.'
                ]
            }
        },
        en: {
            'neck': {
                title: 'Neck and Cervical Spine Pain',
                tag: 'Spine Treatment',
                desc: 'Neck pain is usually caused by muscle strain due to prolonged sitting with poor posture, spinal wear and tear, or a herniated disc, sometimes causing headaches and arm numbness.',
                points: [
                    'Gentle manual therapy sessions (Manual Therapy) to improve spinal mobility.',
                    'Stretching and strengthening exercise programs for neck and shoulder muscles.',
                    'Preventive rehab therapy to avoid chronic muscle strain recurrence.'
                ]
            },
            'shoulder-r': {
                title: 'Shoulder Pain & Injuries (Right)',
                tag: 'Joints & Ligaments Rehab',
                desc: 'Shoulder pain includes tendonitis, rotator cuff tears, or Frozen Shoulder syndrome, causing severe movement restrictions and difficulty sleeping.',
                points: [
                    'Joint mobilization techniques to gradually restore the full range of motion.',
                    'Use of advanced medical devices to reduce muscle tension and revive tendons.',
                    'Strengthening exercises for shoulder girdle muscles to ensure stability.'
                ]
            },
            'shoulder-l': {
                title: 'Shoulder Pain & Injuries (Left)',
                tag: 'Joints & Ligaments Rehab',
                desc: 'Shoulder pain includes tendonitis, rotator cuff tears, or Frozen Shoulder syndrome, causing severe movement restrictions and difficulty sleeping.',
                points: [
                    'Joint mobilization techniques to gradually restore the full range of motion.',
                    'Use of advanced medical devices to reduce muscle tension and revive tendons.',
                    'Strengthening exercises for shoulder girdle muscles to ensure stability.'
                ]
            },
            'back': {
                title: 'Lower Back Pain & Herniated Disc',
                tag: 'Spine Treatment',
                desc: 'Lower back pain is the most common complaint, resulting from incorrect sitting, heavy lifting, or a herniated disc pressing on nerves causing sciatica pain.',
                points: [
                    'Manual chiropractic adjustments to relieve pressure on nerve roots.',
                    'Core strengthening exercises to stabilize and support the spine.',
                    'Advanced therapeutic electrotherapy and laser to reduce inflammation and speed recovery.'
                ]
            },
            'knee-r': {
                title: 'Knee Pain & Osteoarthritis (Right)',
                tag: 'Joint & Rehab Therapy',
                desc: 'Knee pain results from joint wear (osteoarthritis) or ligament injuries like ACL or meniscus tears, making climbing stairs and walking very difficult.',
                points: [
                    'Strengthening quadriceps and hamstring muscles to relieve weight on the joint.',
                    'Balance and stability exercises to rehabilitate the knee joint for normal walking.',
                    'Comprehensive rehabilitation programs for athletes to return to sport safely.'
                ]
            },
            'knee-l': {
                title: 'Knee Pain & Osteoarthritis (Left)',
                tag: 'Joint & Rehab Therapy',
                desc: 'Knee pain results from joint wear (osteoarthritis) or ligament injuries like ACL or meniscus tears, making climbing stairs and walking very difficult.',
                points: [
                    'Strengthening quadriceps and hamstring muscles to relieve weight on the joint.',
                    'Balance and stability exercises to rehabilitate the knee joint for normal walking.',
                    'Comprehensive rehabilitation programs for athletes to return to sport safely.'
                ]
            },
            'ankle': {
                title: 'Ankle Pain & Heel Spurs',
                tag: 'Ankle & Foot Injuries',
                desc: 'Includes recurrent ankle sprains, plantar fasciitis (heel spurs), and Achilles tendonitis, causing severe pain during the first steps in the morning.',
                points: [
                    'Proprioception balance exercises to strengthen ankle ligaments and prevent re-injury.',
                    'Dry needling and shockwave therapy to dissolve calcifications and relieve heel pain.',
                    'Stretching and mobilization exercises for the plantar fascia tissues.'
                ]
            }
        }
    };

    // --- Active Language State ---
    let currentLang = localStorage.getItem('clinicLang') || 'ar';

    // Elements for Translation
    const langToggle = document.getElementById('langToggle');
    const langText = document.getElementById('langText');
    const htmlEl = document.documentElement;

    function applyTranslations() {
        // Set document attributes
        htmlEl.setAttribute('lang', currentLang);
        htmlEl.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
        
        // Toggle button text
        langText.innerText = currentLang === 'ar' ? 'English' : 'عربي';

        // Translate elements with data-i18n attribute
        const translatableEls = document.querySelectorAll('[data-i18n]');
        translatableEls.forEach(el => {
            const key = el.getAttribute('data-i18n');
            const translation = translations[currentLang][key];
            if (translation) {
                // If it contains html tags (like <span class="highlight">)
                if (translation.includes('<')) {
                    el.innerHTML = translation;
                } else {
                    el.textContent = translation;
                }
            }
        });

        // Translate Form placeholders
        const fullNameInput = document.getElementById('fullName');
        const phoneInput = document.getElementById('phoneNumber');
        const messageInput = document.getElementById('message');

        if (fullNameInput) fullNameInput.placeholder = translations[currentLang]['placeholderName'];
        if (phoneInput) phoneInput.placeholder = translations[currentLang]['placeholderPhone'];
        if (messageInput) messageInput.placeholder = translations[currentLang]['placeholderMsg'];

        // Re-render active hotspot details if open
        const activeHotspot = document.querySelector('.hotspot.active');
        if (activeHotspot) {
            activeHotspot.click();
        } else {
            // Translate default panel text
            const infoDefault = document.getElementById('painInfoDefault');
            if (infoDefault && !infoDefault.classList.contains('d-none')) {
                const title = infoDefault.querySelector('h3');
                const desc = infoDefault.querySelector('p');
                title.textContent = translations[currentLang]['painDefaultTitle'];
                desc.textContent = translations[currentLang]['painDefaultDesc'];
            }
        }
    }

    // Toggle button handler
    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'ar' ? 'en' : 'ar';
        localStorage.setItem('clinicLang', currentLang);
        applyTranslations();
    });

    // Run translation on load
    applyTranslations();


    // 1. Scroll Progress Bar & Sticky Header
    const scrollProgress = document.getElementById('scrollProgress');
    const header = document.querySelector('.main-header');
    
    window.addEventListener('scroll', () => {
        // Scroll progress
        const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
        if (totalScroll > 0) {
            const percentage = (window.pageYOffset / totalScroll) * 100;
            scrollProgress.style.width = percentage + '%';
        }
        
        // Sticky Header class
        if (window.pageYOffset > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. Mobile Menu Toggle
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const navOverlay = document.getElementById('navOverlay');
    const menuIcon = menuToggle.querySelector('i');
    
    function toggleMenu() {
        navMenu.classList.toggle('active');
        navOverlay.classList.toggle('active');
        
        if (navMenu.classList.contains('active')) {
            menuIcon.classList.remove('fa-bars');
            menuIcon.classList.add('fa-xmark');
        } else {
            menuIcon.classList.add('fa-bars');
            menuIcon.classList.remove('fa-xmark');
        }
    }
    
    menuToggle.addEventListener('click', toggleMenu);
    navOverlay.addEventListener('click', toggleMenu);
    
    // Close mobile menu when links are clicked
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    // Active link highlighting on scroll
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= (sectionTop - 120)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // 3. Stats Counter Animation (Intersection Observer)
    const stats = document.querySelectorAll('.stat-num');
    let animated = false;
    
    const countUp = (el) => {
        const target = parseInt(el.getAttribute('data-val'));
        let count = 0;
        const duration = 1500; // 1.5 seconds
        const step = Math.ceil(target / (duration / 30));
        
        const counter = setInterval(() => {
            count += step;
            if (count >= target) {
                el.innerText = target;
                clearInterval(counter);
            } else {
                el.innerText = count;
            }
        }, 30);
    };

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
                stats.forEach(stat => countUp(stat));
                animated = true; // Run only once
            }
        });
    }, { threshold: 0.5 });
    
    const heroSection = document.getElementById('hero');
    if (heroSection) {
        statsObserver.observe(heroSection);
    }

    // 4. Interactive Pain Map Logic
    const hotspots = document.querySelectorAll('.hotspot');
    const infoDefault = document.getElementById('painInfoDefault');
    const infoDetails = document.getElementById('painInfoDetails');
    const painTag = document.getElementById('painTag');
    const painTitle = document.getElementById('painTitle');
    const painDesc = document.getElementById('painDesc');
    const painPoints = document.getElementById('painPoints');
    const painPointHeader = document.getElementById('painPointHeader');

    hotspots.forEach(hotspot => {
        hotspot.addEventListener('click', () => {
            // Remove active status from all hotspots
            hotspots.forEach(h => h.classList.remove('active'));
            
            // Add active status to clicked hotspot
            hotspot.classList.add('active');
            
            const part = hotspot.getAttribute('data-part');
            const data = painMapData[currentLang][part];
            
            if (data) {
                // Fill panel
                painTag.innerText = data.tag;
                painTitle.innerText = data.title;
                painDesc.innerText = data.desc;
                
                if (painPointHeader) {
                    painPointHeader.textContent = translations[currentLang]['painPointHeader'];
                }

                // Fill points list
                painPoints.innerHTML = '';
                data.points.forEach(point => {
                    const li = document.createElement('li');
                    li.innerText = point;
                    painPoints.appendChild(li);
                });
                
                // Show panel and hide default welcome screen
                infoDefault.classList.add('d-none');
                infoDetails.classList.remove('d-none');
                
                // Smooth scroll view for mobile screen so the patient sees the details
                if (window.innerWidth < 900) {
                    infoDetails.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }
            }
        });
    });

    // 5. Testimonials Slider
    const slides = document.querySelectorAll('.testimonial-slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dotsContainer = document.getElementById('sliderDots');
    
    let currentSlide = 0;
    const slideCount = slides.length;
    let slideTimer;

    // Create Navigation Dots
    for (let i = 0; i < slideCount; i++) {
        const dot = document.createElement('div');
        dot.classList.add('slider-dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    }
    
    const dots = document.querySelectorAll('.slider-dot');

    function updateSlides() {
        slides.forEach((slide, index) => {
            slide.classList.remove('active');
            dots[index].classList.remove('active');
            if (index === currentSlide) {
                slide.classList.add('active');
                dots[index].classList.add('active');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slideCount;
        updateSlides();
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slideCount) % slideCount;
        updateSlides();
    }

    function goToSlide(index) {
        currentSlide = index;
        updateSlides();
        resetTimer();
    }

    nextBtn.addEventListener('click', () => {
        nextSlide();
        resetTimer();
    });

    prevBtn.addEventListener('click', () => {
        prevSlide();
        resetTimer();
    });

    function startTimer() {
        slideTimer = setInterval(nextSlide, 6000); // Auto-scroll every 6 seconds
    }

    function resetTimer() {
        clearInterval(slideTimer);
        startTimer();
    }

    // Initialize testimonials auto scroll
    if (slideCount > 0) {
        startTimer();
    }

    // 6. Appointment Booking Form Handler
    const appointmentForm = document.getElementById('appointmentForm');
    const submitBtn = document.getElementById('submitBtn');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoader = submitBtn.querySelector('.btn-loader');
    const formStatus = document.getElementById('formStatus');

    appointmentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Form Validation checks
        const fullName = document.getElementById('fullName').value.trim();
        const phoneNumber = document.getElementById('phoneNumber').value.trim();
        const painArea = document.getElementById('painArea').value;
        
        if (!fullName || !phoneNumber || !painArea) {
            const validationMsg = currentLang === 'ar' ? 'يرجى تعبئة الحقول المطلوبة بالكامل.' : 'Please fill out all required fields.';
            alert(validationMsg);
            return;
        }

        // Show loading state
        submitBtn.disabled = true;
        btnText.classList.add('d-none');
        btnLoader.classList.remove('d-none');
        formStatus.classList.add('d-none');

        // Simulate API call (1.5 seconds delay)
        setTimeout(() => {
            // Restore button state
            submitBtn.disabled = false;
            btnText.classList.remove('d-none');
            btnLoader.classList.add('d-none');
            
            // Show Success Notification
            formStatus.classList.remove('d-none');
            
            // Reset fields
            appointmentForm.reset();
            
            // Smooth scroll to the success message
            formStatus.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 1500);
    });
});
