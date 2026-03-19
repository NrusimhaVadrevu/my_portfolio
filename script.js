const translations = {
    en: {
        role: "Frontend Developer & Cybersecurity Student",
        bio: "I’m a Computer Science (Cybersecurity) student at KIET Kakinada building practical, user-focused web projects. I create tech content around programming to simplify concepts and share what I learn.",
        skillsHeading: "<ion-icon name='code-slash-outline'></ion-icon> Core Skills",
        achieveHeading: "<ion-icon name='trophy-outline'></ion-icon> Achievements",
        codevita: "Reached the final round of <strong class='highlight-text'>TCS CodeVita</strong>, demonstrating strong problem-solving and consistency under pressure.",
        focusHeading: "<ion-icon name='shield-checkmark-outline'></ion-icon> Cybersecurity Focus",
        cyber: "Actively building my foundation in cybersecurity, focusing on real-world skills over theory. I believe in practical applications and defensive programming.",
        langsHeading: "<ion-icon name='language-outline'></ion-icon> Languages",
        contactHeading: "<ion-icon name='people-outline'></ion-icon> Let's Connect",
        contentHeading: "<ion-icon name='videocam-outline'></ion-icon> Tech Content Creator",
        contentDesc: "I simplify complex programming concepts and share my learning journey with the community. Believer in learning by teaching.",
        locationHeading: "<ion-icon name='location-outline'></ion-icon> Location"
    },
    hi: {
        role: "फ्रंटएंड डेवलपर और साइबर सुरक्षा छात्र",
        bio: "मैं KIET काकीनाडा में कंप्यूटर साइंस (साइबर सुरक्षा) का छात्र हूं और व्यावहारिक, उपयोगकर्ता-केंद्रित वेब प्रोजेक्ट्स बनाता हूं। मैं प्रोग्रामिंग पर तकनीकी सामग्री बनाता हूं ताकि चीजों को आसान बना सकूं।",
        skillsHeading: "<ion-icon name='code-slash-outline'></ion-icon> मुख्य कौशल",
        achieveHeading: "<ion-icon name='trophy-outline'></ion-icon> उपलब्धियां",
        codevita: "<strong class='highlight-text'>TCS CodeVita</strong> के अंतिम दौर तक पहुंचा, जो दबाव में मेरे समस्या-समाधान कौशल को दर्शाता है।",
        focusHeading: "<ion-icon name='shield-checkmark-outline'></ion-icon> साइबर सुरक्षा फोकस",
        cyber: "सिद्धांत के बजाय व्यावहारिक कौशल पर ध्यान केंद्रित करते हुए, साइबर सुरक्षा में अपनी नींव मजबूत कर रहा हूँ।",
        langsHeading: "<ion-icon name='language-outline'></ion-icon> भाषाएं",
        contactHeading: "<ion-icon name='people-outline'></ion-icon> संपर्क करें",
        contentHeading: "<ion-icon name='videocam-outline'></ion-icon> टेक कंटेंट क्रिएटर",
        contentDesc: "मैं जटिल प्रोग्रामिंग कॉन्सेप्ट्स को आसान बनाता हूं और समुदाय के साथ अपना अनुभव साझा करता हूं।",
        locationHeading: "<ion-icon name='location-outline'></ion-icon> स्थान"
    },
    te: {
        role: "ఫ్రంటెండ్ డెవలపర్ & సైబర్‌సెక్యూరిటీ విద్యార్థి",
        bio: "నేను కీట్ కాకినాడలో కంప్యూటర్ సైన్స్ (సైబర్‌సెక్యూరిటీ) విద్యార్థిని. వాస్తవిక, వినియోగదారు ఆధారిత వెబ్ ప్రాజెక్ట్‌లను నిర్మిస్తున్నాను. కాన్సెప్ట్‌లను సులభతరం చేయడానికి ప్రోగ్రామింగ్ కంటెంట్‌ను సృష్టిస్తాను.",
        skillsHeading: "<ion-icon name='code-slash-outline'></ion-icon> కోర్ స్కిల్స్",
        achieveHeading: "<ion-icon name='trophy-outline'></ion-icon> విజయాలు",
        codevita: "ఒత్తిడిలో సమస్యలను పరిష్కరించే సామర్థ్యాన్ని ప్రదర్శిస్తూ సామర్థ్యంతో <strong class='highlight-text'>TCS కోడ్‌విటా</strong> ఫైనల్ రౌండ్‌కు చేరుకున్నాను.",
        focusHeading: "<ion-icon name='shield-checkmark-outline'></ion-icon> సైబర్‌సెక్యూరిటీ ఫోకస్",
        cyber: "సిద్ధాంతం కంటే ప్రాక్టికల్ నైపుణ్యాలపై దృష్టి సారిస్తూ, సైబర్‌సెక్యూరిటీలో నా పునాదిని బలోపేతం చేస్తున్నాను.",
        langsHeading: "<ion-icon name='language-outline'></ion-icon> భాషలు",
        contactHeading: "<ion-icon name='people-outline'></ion-icon> సంప్రదించండి",
        contentHeading: "<ion-icon name='videocam-outline'></ion-icon> టెక్ కంటెంట్ క్రియేటర్",
        contentDesc: "సంక్లిష్టమైన ప్రోగ్రామింగ్ కాన్సెప్ట్‌లను సరళీకరించి నా ప్రయాణాన్ని కమ్యూనిటీతో పంచుకుంటాను.",
        locationHeading: "<ion-icon name='location-outline'></ion-icon> స్థానం"
    }
};

const langBtns = document.querySelectorAll('.lang-btn');
const langKeyMap = {
    '.t-role': 'role',
    '.t-bio': 'bio',
    '.t-skills-heading': 'skillsHeading',
    '.t-achieve-heading': 'achieveHeading',
    '.t-codevita': 'codevita',
    '.t-focus-heading': 'focusHeading',
    '.t-cyber': 'cyber',
    '.t-langs-heading': 'langsHeading',
    '.t-contact-heading': 'contactHeading',
    '.t-content-heading': 'contentHeading',
    '.t-content-desc': 'contentDesc',
    '.t-location-heading': 'locationHeading'
};

langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.lang-btn.active').classList.remove('active');
        btn.classList.add('active');

        const animCards = document.querySelectorAll('.bento-card');
        animCards.forEach(c => c.style.opacity = '0.7');

        setTimeout(() => {
            updateLanguage(btn.dataset.lang);
            animCards.forEach(c => c.style.opacity = '1');
        }, 150);
    });
});

function updateLanguage(lang) {
    const data = translations[lang];
    
    for (const [selector, key] of Object.entries(langKeyMap)) {
        const el = document.querySelector(selector);
        if(el) {
            el.innerHTML = data[key];
        }
    }
}

// Global Glow Effect on Grid (Mouse Track)
document.getElementById('app').addEventListener('mousemove', e => {
    for (const card of document.querySelectorAll('.bento-card')) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    }
});
