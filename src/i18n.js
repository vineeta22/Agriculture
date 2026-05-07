import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: { home: "Home", about: "About", products: "Products", dealers: "Dealers", contact: "Contact" },
      hero: {
        title1: "Helping Farmers Grow Healthier Crops",
        desc1: "Innovative agriculture solutions for a better tomorrow. We provide high-quality organic crop protection and growth promoters.",
        btn1: "Explore Products", btn2: "Contact Us",
        title2: "Organic Soil Conditioners",
        desc2: "Restore your soil fertility with our scientifically formulated organic conditioners for maximum yield.",
        btn3: "Our Solutions"
      },
      home: {
        aboutSubtitle: "About Kenzende Crops",
        aboutTitle: "Innovating Agriculture for Future Generations",
        aboutDesc1: "Kenzende Crops Pvt. Ltd. is a leading name in agriculture innovation, dedicated to providing farmers with high-quality crop protection and growth solutions. Our products are designed to enhance soil health and maximize productivity while ensuring environmental sustainability.",
        aboutDesc2: "From our head office in Andhra Pradesh to our regional presence in Odisha, we are committed to serving the farming community with scientific formulations and expert support.",
        readMoreBtn: "Read More About Us",
        categoriesTitle: "Product Categories",
        featuredTitle: "Featured Products",
        viewAll: "View All Products",
        whyChooseTitle: "Why Choose Kenzende Crops?",
        testimonialsTitle: "What Farmers Say"
      },
      counters: { products: "Products", dealers: "Dealers", farmersServed: "Farmers Served", statesCovered: "States Covered" },
      features: {
        f1Title: "High Quality Products", f1Desc: "We maintain stringent quality standards to ensure our products deliver consistent results for your crops.",
        f2Title: "Organic Solutions", f2Desc: "Our range includes eco-friendly organic soil conditioners that promote sustainable farming practices.",
        f3Title: "Scientific Formulations", f3Desc: "Every product is backed by extensive research and scientific formulations for maximum effectiveness.",
        f4Title: "Better Crop Yield", f4Desc: "Our solutions are proven to increase crop productivity and enhance the overall health of the harvest.",
        f5Title: "Dealer Support", f5Desc: "We provide extensive support and training to our network of dealers across multiple states.",
        f6Title: "Farmer Friendly", f6Desc: "Our primary focus is the success and prosperity of farmers, providing them with affordable and effective tools."
      },
      categories: {
        "Insecticides": "Insecticides", "Fungicides": "Fungicides", "Herbicides": "Herbicides",
        "Plant Growth Regulators": "Plant Growth Regulators", "Organic Soil Conditioners": "Organic Soil Conditioners"
      },
      productUI: { packSize: "Pack Size", readMore: "Read More", viewDetails: "View Details", explore: "Explore" },
      products: {
        p1Name: "ANCHHITA GOLD", p1Desc: "Potassium Humate Shiny Balls is a soil conditioner and plant growth enhancer that improves nutrient uptake, soil health, and crop productivity.",
        p1B1: "Improves nutrient uptake and soil health", p1B2: "Promotes root development", p1B3: "Boosts plant metabolism", p1B4: "Increases resistance to stress conditions",
        p1HowItWorks: "Derived from natural humic substances, it increases the availability of nutrients in the soil. It chelates metal ions, enhances water retention, and improves the cation exchange capacity of the soil.",
        p1Uses: "Can be used across various crops to improve soil fertility and enhance crop yields. It is particularly effective in sandy and acidic soils.",
        p1Dosage: "As recommended",
        p2Name: "POTAJ", p2Desc: "Max Granules (K+Mg+Carbon). Form: Granules. Potash: 95%. Organic Nature: Organic. Storage: Keep in cool and dry place.",
        p2B1: "Supply potassium and micronutrients for healthy growth", p2B2: "Promotes the growth as well as maintain crop health", p2B3: "Increase the crop productivity", p2B4: "Add carbon to soil to improve soil texture and beneficial microbes", p2B5: "Improve & retain the fertility of soil",
        p2HowItWorks: "Contains KMB (Potassium Mobilizing Biofertilizer) which helps to uptake complex potash from soil, supplying essential potassium and micronutrients for healthy crop growth.",
        p2Uses: "Applied to soil to improve texture, fertility, and microbial activity while supplying 95% potash.",
        p2Dosage: "As recommended",
        p3Name: "NEST SHIFT", p3Desc: "Pretilachlor 50% EC is a selective, pre-emergence herbicide primarily used to control weeds in paddy fields.",
        p3B1: "Highly effective against annual grasses, sedges, and broadleaf weeds", p3B2: "Ensures a clean crop stand and healthy growth", p3B3: "Reduces weed competition during critical early stages",
        p3HowItWorks: "Absorbed mainly through the germinating shoots and roots of weeds. It inhibits cell division and elongation, disrupting weed growth before they emerge.",
        p3Uses: "Pre-emergence control of weeds in paddy fields, especially during wet direct seeding or transplanted rice cultivation. Manages barnyard grass, ludwigia, and sedge species.",
        p3Dosage: "As recommended",
        p4Name: "GROW ++", p4Desc: "Special 30 ml Dose PGR is a highly concentrated plant growth regulator designed to stimulate growth, enhance flowering, and increase yield in a variety of crops.",
        p4B1: "Stimulate cell division and elongation", p4B2: "Enhance flowering and reduce flower/fruit drop", p4B3: "Improve photosynthesis and nutrient translocation", p4B4: "Boost the plant's natural defense against environmental stress",
        p4HowItWorks: "Contains a blend of natural and synthetic growth stimulants, such as auxins, cytokinins, gibberellins, and other plant hormones.",
        p4Uses: "Promoting growth and development in crops such as cereals, vegetables, fruits, pulses, and ornamentals. Enhancing flowering, fruiting, and reducing stress from drought, salinity, or extreme temperatures.",
        p4Dosage: "Special 30 ml Dose or as recommended"
      },
      testimonials: {
        t1Text: "Using ANCHHITA GOLD has significantly improved my crop yield. The soil quality has also become much better.",
        t2Text: "NEST SHIFT is very effective for weed control in my paddy fields. Highly recommended for all farmers.",
        t3Text: "Kenzende Crops products are very reliable. Their support team is also very helpful and knowledgeable."
      },
      cta: {
        title: "Have Questions? Contact Us Today",
        subtitle: "Our experts are ready to help you with the best agriculture solutions.",
        callUs: "Call Us", emailUs: "Email Us", whatsapp: "WhatsApp"
      },
      footer: {
        quote: "“Products Grow, Hopes Blossom.”",
        desc: "Dedicated to providing high-quality agriculture solutions and organic crop protection.",
        quickLinks: "Quick Links",
        home: "Home", aboutUs: "About Us", ourProducts: "Our Products", becomeDealer: "Become a Dealer", contactUs: "Contact Us",
        headOffice: "Head Office", odishaOffice: "Odisha Office", rights: "All rights reserved."
      },
      aboutPage: {
        banner: "About Us",
        title: "About Kenzende Crops",
        subtitle: "Innovating for a greener and more productive future.",
        storyTitle: "Our Story",
        story1: "Kenzende Crops Pvt. Ltd. was established with a vision to transform the agricultural landscape through innovation and sustainable practices. We recognized the challenges faced by farmers – from declining soil fertility to increasing pest pressures – and decided to develop solutions that are both effective and eco-friendly.",
        story2: "Our journey began with a small team of passionate agricultural scientists and entrepreneurs. Today, we have grown into a trusted name, known for our commitment to quality and farmer-centric approach. We combine traditional wisdom with modern science to create products that deliver results.",
        visionTitle: "Our Vision",
        visionDesc: "To be a global leader in sustainable agriculture, empowering farmers with innovative technologies that ensure food security and environmental conservation for generations to come.",
        missionTitle: "Our Mission",
        missionDesc: "To provide high-quality, scientifically-backed agricultural solutions that enhance crop productivity, improve soil health, and maximize farmer profitability while minimizing environmental impact.",
        innovationTitle: "Agriculture Innovation",
        rdTitle: "Research & Development",
        rdDesc: "Our dedicated R&D wing works tirelessly to develop new formulations and improve existing ones, ensuring that our products stay at the forefront of agricultural science.",
        supportTitle: "Expert Support",
        supportDesc: "We don't just sell products; we provide knowledge. Our team of agronomists offers on-field support and guidance to help farmers achieve the best possible results.",
        qualityTitle: "Quality Assurance",
        qualityDesc: "Quality is at the heart of everything we do. Every batch of our products undergoes rigorous testing to meet the highest industry standards.",
        directorTitle: "Director's Message",
        directorQuote: "“At Kenzende Crops, we believe that the prosperity of a nation is deeply rooted in the prosperity of its farmers. Our goal is to provide every farmer with the tools and knowledge they need to succeed. We are committed to 'Products Grow, Hopes Blossom', and we work every day to make this a reality for thousands of farmers across the country.”",
        directorName: "Managing Director",
        certTitle: "Our Certifications",
        isoTitle: "ISO Certified", isoDesc: "Maintaining international quality standards.",
        orgTitle: "Organic Approved", orgDesc: "Eco-friendly and sustainable crop solutions.",
        awardTitle: "Quality Award", awardDesc: "Recognized for innovation and excellence.",
        safeTitle: "Safe Use", safeDesc: "Scientifically tested and farmer trusted."
      },
      productsPage: {
        banner: "Our Products",
        title: "Our Products",
        subtitle: "Explore our wide range of agricultural solutions.",
        all: "All Products",
        noProducts: "No products found matching your criteria.",
        resetBtn: "Reset Filters"
      },
      productDetails: {
        description: "Description", keyBenefits: "Key Benefits", inquiryNow: "Inquiry Now", contactSales: "Contact Sales", howItWorks: "How it Works", uses: "Uses", dosage: "Dosage", relatedProducts: "Related Products"
      },
      categoryPage: {
        notFound: "Category not found",
        backToProducts: "Back to Products",
        bannerText: "Category",
        subtitle: "Effective solutions for your agricultural needs.",
        products: "Products",
        allCategories: "All Categories",
        noProducts: "Currently no products available in this category.",
        browseAll: "Browse All Products"
      },
      dealerPage: {
        banner: "Become a Dealer",
        title: "Become a Distributor",
        subtitle: "Partner with us and grow your business in the agriculture sector.",
        whyPartner: "Why Partner with Us?",
        brandTitle: "Strong Brand Reputation", brandDesc: "Join a trusted brand known for quality and innovation in the agriculture sector.",
        growthTitle: "High Growth Potential", growthDesc: "Our expanding product range offers excellent margins and business growth opportunities.",
        supplyTitle: "Reliable Supply Chain", supplyDesc: "Enjoy timely delivery and consistent availability of products throughout the seasons.",
        formTitle: "Dealer Inquiry",
        formDesc: "We are looking for dedicated partners. Fill out the form below and our team will get in touch.",
        statesTitle: "States with Opportunities:",
        fullName: "Full Name",
        businessName: "Business Name",
        phone: "Phone Number",
        state: "State",
        selectState: "Select State",
        message: "Message",
        submit: "Submit Application"
      },
      contactPage: {
        banner: "Contact Us",
        title: "Contact Us",
        subtitle: "We are here to help you. Reach out to us for any inquiries.",
        getInTouch: "Get In Touch",
        getInTouchDesc: "Feel free to contact us via phone, email or visit our offices.",
        phone: "Phone",
        email: "Email",
        headOffice: "Head Office",
        odishaOffice: "Odisha Office",
        hours: "Working Hours",
        whatsapp: "Chat on WhatsApp",
        sendMessage: "Send us a Message",
        fName: "First Name",
        lName: "Last Name",
        subject: "Subject",
        message: "Message",
        sendBtn: "Send Message"
      }
    }
  },
  hi: {
    translation: {
      nav: { home: "मुखपृष्ठ", about: "हमारे बारे में", products: "उत्पाद", dealers: "वितरक", contact: "संपर्क" },
      hero: {
        title1: "किसानों को स्वस्थ फसल उगाने में मदद करना",
        desc1: "बेहतर कल के लिए अभिनव कृषि समाधान। हम उच्च गुणवत्ता वाले जैविक फसल संरक्षण और विकास को बढ़ावा देने वाले उत्पाद प्रदान करते हैं।",
        btn1: "उत्पाद देखें", btn2: "संपर्क करें",
        title2: "जैविक मृदा कंडीशनर",
        desc2: "अधिकतम उपज के लिए हमारे वैज्ञानिक रूप से तैयार जैविक कंडीशनर के साथ अपनी मिट्टी की उर्वरता बहाल करें।",
        btn3: "हमारे समाधान"
      },
      home: {
        aboutSubtitle: "केंज़ेन्डे क्रॉप्स के बारे में",
        aboutTitle: "भावी पीढ़ियों के लिए कृषि में नवाचार",
        aboutDesc1: "केंज़ेन्डे क्रॉप्स प्राइवेट लिमिटेड कृषि नवाचार में एक अग्रणी नाम है, जो किसानों को उच्च गुणवत्ता वाले फसल संरक्षण और विकास समाधान प्रदान करने के लिए समर्पित है। हमारे उत्पादों को पर्यावरणीय स्थिरता सुनिश्चित करते हुए मिट्टी के स्वास्थ्य को बढ़ाने और उत्पादकता को अधिकतम करने के लिए डिज़ाइन किया गया है।",
        aboutDesc2: "आंध्र प्रदेश में हमारे प्रधान कार्यालय से लेकर ओडिशा में हमारी क्षेत्रीय उपस्थिति तक, हम वैज्ञानिक योगों और विशेषज्ञ सहायता के साथ कृषक समुदाय की सेवा करने के लिए प्रतिबद्ध हैं।",
        readMoreBtn: "हमारे बारे में अधिक पढ़ें",
        categoriesTitle: "उत्पाद श्रेणियाँ", featuredTitle: "विशेष उत्पाद", viewAll: "सभी उत्पाद देखें",
        whyChooseTitle: "केंज़ेन्डे क्रॉप्स क्यों चुनें?", testimonialsTitle: "किसान क्या कहते हैं"
      },
      counters: { products: "उत्पाद", dealers: "वितरक", farmersServed: "किसानों की सेवा की", statesCovered: "राज्य शामिल" },
      features: {
        f1Title: "उच्च गुणवत्ता वाले उत्पाद", f1Desc: "हम यह सुनिश्चित करने के लिए कड़े गुणवत्ता मानकों को बनाए रखते हैं कि हमारे उत्पाद आपकी फसलों के लिए सुसंगत परिणाम दें।",
        f2Title: "जैविक समाधान", f2Desc: "हमारी सीमा में पर्यावरण के अनुकूल जैविक मृदा कंडीशनर शामिल हैं जो टिकाऊ खेती प्रथाओं को बढ़ावा देते हैं।",
        f3Title: "वैज्ञानिक सूत्रीकरण", f3Desc: "अधिकतम प्रभावशीलता के लिए हर उत्पाद व्यापक शोध और वैज्ञानिक योगों द्वारा समर्थित है।",
        f4Title: "बेहतर फसल उपज", f4Desc: "हमारे समाधान फसल उत्पादकता बढ़ाने और फसल के समग्र स्वास्थ्य को बढ़ाने के लिए सिद्ध हैं।",
        f5Title: "डीलर सहायता", f5Desc: "हम कई राज्यों में अपने डीलरों के नेटवर्क को व्यापक समर्थन और प्रशिक्षण प्रदान करते हैं।",
        f6Title: "किसान के अनुकूल", f6Desc: "हमारा प्राथमिक ध्यान किसानों की सफलता और समृद्धि पर है, उन्हें किफायती और प्रभावी उपकरण प्रदान करना।"
      },
      categories: {
        "Insecticides": "कीटनाशक", "Fungicides": "कवकनाशक", "Herbicides": "शाकनाशक",
        "Plant Growth Regulators": "पौध विकास नियामक", "Organic Soil Conditioners": "जैविक मृदा कंडीशनर"
      },
      productUI: { packSize: "पैक आकार", readMore: "अधिक पढ़ें", viewDetails: "विवरण देखें", explore: "देखें" },
      products: {
        p1Name: "अंच्छिता गोल्ड", p1Desc: "पोटेशियम ह्यूमेट शाइनी बॉल्स एक मिट्टी कंडीशनर और पौधों के विकास को बढ़ाने वाला है जो पोषक तत्वों के अवशोषण, मिट्टी के स्वास्थ्य और फसल उत्पादकता में सुधार करता है।",
        p1B1: "पोषक तत्वों के अवशोषण और मिट्टी के स्वास्थ्य में सुधार करता है", p1B2: "जड़ विकास को बढ़ावा देता है", p1B3: "पौधे के चयापचय को बढ़ाता है", p1B4: "तनाव की स्थिति के प्रतिरोध को बढ़ाता है",
        p1HowItWorks: "प्राकृतिक ह्यूमिक पदार्थों से प्राप्त, यह मिट्टी में पोषक तत्वों की उपलब्धता बढ़ाता है। यह धातु आयनों को चेलेट करता है, जल प्रतिधारण को बढ़ाता है, और मिट्टी की धनायन विनिमय क्षमता में सुधार करता है।",
        p1Uses: "विभिन्न फसलों में मिट्टी की उर्वरता में सुधार और फसल की पैदावार बढ़ाने के लिए इस्तेमाल किया जा सकता है। यह विशेष रूप से रेतीली और अम्लीय मिट्टी में प्रभावी है।",
        p1Dosage: "सुझाव के अनुसार",
        p2Name: "पोटाज", p2Desc: "अधिकतम ग्रेन्यूल्स (K+Mg+Carbon)। रूप: ग्रेन्यूल्स। पोटाश: 95%। जैविक प्रकृति: जैविक। भंडारण: ठंडी और सूखी जगह पर रखें।",
        p2B1: "स्वस्थ विकास के लिए पोटेशियम और सूक्ष्म पोषक तत्वों की आपूर्ति करें", p2B2: "फसल के स्वास्थ्य को बनाए रखने के साथ-साथ विकास को बढ़ावा देता है", p2B3: "फसल उत्पादकता बढ़ाएँ", p2B4: "मिट्टी की बनावट और लाभकारी रोगाणुओं को बेहतर बनाने के लिए मिट्टी में कार्बन जोड़ें", p2B5: "मिट्टी की उर्वरता में सुधार और बनाए रखना",
        p2HowItWorks: "इसमें KMB (पोटेशियम मोबिलाइजिंग बायोफर्टिलाइजर) होता है जो मिट्टी से जटिल पोटाश को ग्रहण करने में मदद करता है, जिससे फसल के स्वस्थ विकास के लिए आवश्यक पोटेशियम और सूक्ष्म पोषक तत्वों की आपूर्ति होती है।",
        p2Uses: "95% पोटाश की आपूर्ति करते हुए बनावट, उर्वरता और माइक्रोबियल गतिविधि में सुधार के लिए मिट्टी पर लागू किया जाता है।",
        p2Dosage: "सुझाव के अनुसार",
        p3Name: "नेस्ट शिफ्ट", p3Desc: "प्रेटिलाक्लोर 50% ईसी एक चयनात्मक, पूर्व-उद्भव शाकनाशी है जिसका उपयोग मुख्य रूप से धान के खेतों में खरपतवारों को नियंत्रित करने के लिए किया जाता है।",
        p3B1: "वार्षिक घास, सेज और चौड़ी पत्ती वाले खरपतवारों के खिलाफ अत्यधिक प्रभावी", p3B2: "स्वच्छ फसल स्टैंड और स्वस्थ विकास सुनिश्चित करता है", p3B3: "महत्वपूर्ण प्रारंभिक चरणों के दौरान खरपतवार प्रतिस्पर्धा को कम करता है",
        p3HowItWorks: "मुख्य रूप से अंकुरित अंकुर और खरपतवार की जड़ों के माध्यम से अवशोषित होता है। यह कोशिका विभाजन और बढ़ाव को रोकता है, जिससे खरपतवार निकलने से पहले ही उनका विकास रुक जाता है।",
        p3Uses: "धान के खेतों में खरपतवारों का उभरने से पहले नियंत्रण, विशेष रूप से गीली सीधी बुवाई या रोपाई वाले चावल की खेती के दौरान। बार्नयार्ड घास, लुडविगिया और सेज प्रजातियों का प्रबंधन करता है।",
        p3Dosage: "सुझाव के अनुसार",
        p4Name: "ग्रो ++", p4Desc: "विशेष 30 मिली खुराक पीजीआर एक अत्यधिक केंद्रित पौधा विकास नियामक है जिसे विभिन्न प्रकार की फसलों में विकास को प्रोत्साहित करने, फूल बढ़ाने और उपज बढ़ाने के लिए डिज़ाइन किया गया है।",
        p4B1: "कोशिका विभाजन और बढ़ाव को उत्तेजित करें", p4B2: "फूलों को बढ़ाएं और फूल/फलों को झड़ने से रोकें", p4B3: "प्रकाश संश्लेषण और पोषक तत्वों के स्थानान्तरण में सुधार", p4B4: "पर्यावरणीय तनाव के खिलाफ पौधे की प्राकृतिक रक्षा को बढ़ावा दें",
        p4HowItWorks: "इसमें प्राकृतिक और सिंथेटिक विकास उत्तेजक, जैसे ऑक्सिन, साइटोकिनिन, जिबरेलिन और अन्य पादप हार्मोन का मिश्रण होता है।",
        p4Uses: "अनाज, सब्जियां, फल, दालें और सजावटी जैसी फसलों में वृद्धि और विकास को बढ़ावा देना। फूल आना, फलाना बढ़ाना और सूखा, लवणता या अत्यधिक तापमान के तनाव को कम करना।",
        p4Dosage: "विशेष 30 मिली खुराक या सुझाव के अनुसार"
      },
      testimonials: {
        t1Text: "अंच्छिता गोल्ड का उपयोग करने से मेरी फसल की उपज में काफी सुधार हुआ है। मिट्टी की गुणवत्ता भी काफी बेहतर हो गई है।",
        t2Text: "नेस्ट शिफ्ट मेरे धान के खेतों में खरपतवार नियंत्रण के लिए बहुत प्रभावी है। सभी किसानों के लिए अत्यधिक अनुशंसित।",
        t3Text: "केंज़ेन्डे क्रॉप्स के उत्पाद बहुत विश्वसनीय हैं। उनकी सहायता टीम भी बहुत मददगार और जानकार है।"
      },
      cta: {
        title: "कोई प्रश्न है? आज ही हमसे संपर्क करें",
        subtitle: "हमारे विशेषज्ञ सर्वोत्तम कृषि समाधानों में आपकी सहायता के लिए तैयार हैं।",
        callUs: "हमें कॉल करें", emailUs: "हमें ईमेल करें", whatsapp: "व्हाट्सएप"
      },
      footer: {
        quote: "“उत्पाद बढ़ते हैं, उम्मीदें खिलती हैं।”",
        desc: "उच्च गुणवत्ता वाले कृषि समाधान और जैविक फसल सुरक्षा प्रदान करने के लिए समर्पित।",
        quickLinks: "त्वरित लिंक",
        home: "मुखपृष्ठ", aboutUs: "हमारे बारे में", ourProducts: "हमारे उत्पाद", becomeDealer: "डीलर बनें", contactUs: "संपर्क करें",
        headOffice: "प्रधान कार्यालय", odishaOffice: "ओडिशा कार्यालय", rights: "सर्वाधिकार सुरक्षित।"
      },
      aboutPage: {
        banner: "हमारे बारे में",
        title: "केंज़ेन्डे क्रॉप्स के बारे में",
        subtitle: "हरे और अधिक उत्पादक भविष्य के लिए नवाचार।",
        storyTitle: "हमारी कहानी",
        story1: "केंज़ेन्डे क्रॉप्स प्राइवेट लिमिटेड की स्थापना नवाचार और टिकाऊ प्रथाओं के माध्यम से कृषि परिदृश्य को बदलने की दृष्टि से की गई थी। हमने किसानों के सामने आने वाली चुनौतियों को पहचाना - मिट्टी की घटती उर्वरता से लेकर बढ़ते कीट दबाव तक - और ऐसे समाधान विकसित करने का निर्णय लिया जो प्रभावी और पर्यावरण के अनुकूल हों।",
        story2: "हमारी यात्रा भावुक कृषि वैज्ञानिकों और उद्यमियों की एक छोटी टीम के साथ शुरू हुई। आज, हम एक विश्वसनीय नाम बन गए हैं, जो गुणवत्ता और किसान-केंद्रित दृष्टिकोण के प्रति हमारी प्रतिबद्धता के लिए जाना जाता है। हम परिणाम देने वाले उत्पाद बनाने के लिए पारंपरिक ज्ञान को आधुनिक विज्ञान के साथ जोड़ते हैं।",
        visionTitle: "हमारा विजन",
        visionDesc: "टिकाऊ कृषि में वैश्विक नेता बनने के लिए, किसानों को नवीन प्रौद्योगिकियों के साथ सशक्त बनाना जो आने वाली पीढ़ियों के लिए खाद्य सुरक्षा और पर्यावरण संरक्षण सुनिश्चित करते हैं।",
        missionTitle: "हमारा मिशन",
        missionDesc: "उच्च गुणवत्ता वाले, वैज्ञानिक रूप से समर्थित कृषि समाधान प्रदान करने के लिए जो फसल उत्पादकता बढ़ाते हैं, मिट्टी के स्वास्थ्य में सुधार करते हैं, और पर्यावरणीय प्रभाव को कम करते हुए किसान की लाभप्रदता को अधिकतम करते हैं।",
        innovationTitle: "कृषि नवाचार",
        rdTitle: "अनुसंधान और विकास",
        rdDesc: "हमारा समर्पित आर एंड डी विंग नए फॉर्मूलेशन विकसित करने और मौजूदा लोगों में सुधार करने के लिए अथक प्रयास करता है, यह सुनिश्चित करता है कि हमारे उत्पाद कृषि विज्ञान में सबसे आगे रहें।",
        supportTitle: "विशेषज्ञ सहायता",
        supportDesc: "हम सिर्फ उत्पाद नहीं बेचते; हम ज्ञान प्रदान करते हैं। कृषिविदों की हमारी टीम किसानों को सर्वोत्तम संभव परिणाम प्राप्त करने में मदद करने के लिए क्षेत्र में सहायता और मार्गदर्शन प्रदान करती है।",
        qualityTitle: "गुणवत्ता आश्वासन",
        qualityDesc: "गुणवत्ता हमारे हर काम के केंद्र में है। हमारे उत्पादों के प्रत्येक बैच को उच्चतम उद्योग मानकों को पूरा करने के लिए कठोर परीक्षण से गुजरना पड़ता है।",
        directorTitle: "निदेशक का संदेश",
        directorQuote: "“केंज़ेन्डे क्रॉप्स में, हमारा मानना है कि किसी राष्ट्र की समृद्धि उसके किसानों की समृद्धि में गहराई से निहित है। हमारा लक्ष्य हर किसान को सफल होने के लिए आवश्यक उपकरण और ज्ञान प्रदान करना है। हम 'उत्पाद बढ़ते हैं, उम्मीदें खिलती हैं' के लिए प्रतिबद्ध हैं, और हम देश भर के हजारों किसानों के लिए इसे वास्तविकता बनाने के लिए हर दिन काम करते हैं।”",
        directorName: "प्रबंध निदेशक",
        certTitle: "हमारे प्रमाण पत्र",
        isoTitle: "आईएसओ प्रमाणित", isoDesc: "अंतरराष्ट्रीय गुणवत्ता मानकों को बनाए रखना।",
        orgTitle: "जैविक अनुमोदित", orgDesc: "पर्यावरण के अनुकूल और टिकाऊ फसल समाधान।",
        awardTitle: "गुणवत्ता पुरस्कार", awardDesc: "नवाचार और उत्कृष्टता के लिए मान्यता प्राप्त।",
        safeTitle: "सुरक्षित उपयोग", safeDesc: "वैज्ञानिक रूप से परीक्षण और किसान द्वारा विश्वसनीय।"
      },
      productsPage: {
        banner: "हमारे उत्पाद",
        title: "हमारे उत्पाद",
        subtitle: "कृषि समाधानों की हमारी विस्तृत श्रृंखला का अन्वेषण करें।",
        all: "सभी उत्पाद",
        noProducts: "आपके मानदंड से मेल खाने वाला कोई उत्पाद नहीं मिला।",
        resetBtn: "फ़िल्टर रीसेट करें"
      },
      productDetails: {
        description: "विवरण", keyBenefits: "प्रमुख लाभ", inquiryNow: "अभी पूछताछ करें", contactSales: "बिक्री से संपर्क करें", howItWorks: "यह कैसे काम करता है", uses: "उपयोग", dosage: "खुराक", relatedProducts: "संबंधित उत्पाद"
      },
      categoryPage: {
        notFound: "श्रेणी नहीं मिली",
        backToProducts: "उत्पादों पर वापस जाएं",
        bannerText: "श्रेणी",
        subtitle: "आपकी कृषि आवश्यकताओं के लिए प्रभावी समाधान।",
        products: "उत्पाद",
        allCategories: "सभी श्रेणियां",
        noProducts: "वर्तमान में इस श्रेणी में कोई उत्पाद उपलब्ध नहीं है।",
        browseAll: "सभी उत्पाद ब्राउज़ करें"
      },
      dealerPage: {
        banner: "डीलर बनें",
        title: "वितरक बनें",
        subtitle: "हमारे साथ साझेदारी करें और कृषि क्षेत्र में अपना व्यवसाय बढ़ाएं।",
        whyPartner: "हमारे साथ साझेदारी क्यों करें?",
        brandTitle: "मजबूत ब्रांड प्रतिष्ठा", brandDesc: "कृषि क्षेत्र में गुणवत्ता और नवाचार के लिए जाने जाने वाले एक विश्वसनीय ब्रांड से जुड़ें।",
        growthTitle: "उच्च विकास क्षमता", growthDesc: "हमारी बढ़ती उत्पाद श्रृंखला उत्कृष्ट मार्जिन और व्यवसाय वृद्धि के अवसर प्रदान करती है।",
        supplyTitle: "विश्वसनीय आपूर्ति श्रृंखला", supplyDesc: "पूरे मौसम में उत्पादों की समय पर डिलीवरी और निरंतर उपलब्धता का आनंद लें।",
        formTitle: "डीलर पूछताछ",
        formDesc: "हम समर्पित भागीदारों की तलाश कर रहे हैं। नीचे दिया गया फॉर्म भरें और हमारी टीम संपर्क करेगी।",
        statesTitle: "अवसर वाले राज्य:",
        fullName: "पूरा नाम",
        businessName: "व्यापार का नाम",
        phone: "फ़ोन नंबर",
        state: "राज्य",
        selectState: "राज्य चुनें",
        message: "संदेश",
        submit: "आवेदन जमा करें"
      },
      contactPage: {
        banner: "संपर्क करें",
        title: "संपर्क करें",
        subtitle: "हम यहाँ आपकी मदद करने के लिए हैं। किसी भी पूछताछ के लिए हमसे संपर्क करें।",
        getInTouch: "संपर्क में रहें",
        getInTouchDesc: "फ़ोन, ईमेल या हमारे कार्यालयों में जाकर बेझिझक हमसे संपर्क करें।",
        phone: "फ़ोन",
        email: "ईमेल",
        headOffice: "प्रधान कार्यालय",
        odishaOffice: "ओडिशा कार्यालय",
        hours: "काम करने के घंटे",
        whatsapp: "व्हाट्सएप पर चैट करें",
        sendMessage: "हमें एक संदेश भेजें",
        fName: "पहला नाम",
        lName: "अंतिम नाम",
        subject: "विषय",
        message: "संदेश",
        sendBtn: "संदेश भेजें"
      }
    }
  },
  or: {
    translation: {
      nav: { home: "ହୋମ୍", about: "ଆମ ବିଷୟରେ", products: "ଉତ୍ପାଦ", dealers: "ଡିଲର", contact: "ଯୋଗାଯୋଗ" },
      hero: {
        title1: "କୃଷକମାନଙ୍କୁ ସୁସ୍ଥ ଫସଲ ଉତ୍ପାଦନରେ ସାହାଯ୍ୟ କରିବା",
        desc1: "ଉନ୍ନତ ଭବିଷ୍ୟତ ପାଇଁ ଅଭିନବ କୃଷି ସମାଧାନ। ଆମେ ଉଚ୍ଚ ମାନର ଜୈବିକ ଫସଲ ସୁରକ୍ଷା ଏବଂ ଅଭିବୃଦ୍ଧି ଉତ୍ପାଦ ପ୍ରଦାନ କରୁ।",
        btn1: "ଉତ୍ପାଦ ଦେଖନ୍ତୁ", btn2: "ଆମ ସହ ଯୋଗାଯୋଗ କରନ୍ତୁ",
        title2: "ଜୈବିକ ମୃତ୍ତିକା କଣ୍ଡିସନର",
        desc2: "ସର୍ବାଧିକ ଅମଳ ପାଇଁ ଆମର ବୈଜ୍ଞାନିକ ଉପାୟରେ ପ୍ରସ୍ତୁତ ଜୈବିକ କଣ୍ଡିସନର ସହିତ ଆପଣଙ୍କ ମାଟିର ଉର୍ବରତା ଫେରାଇ ଆଣନ୍ତୁ।",
        btn3: "ଆମର ସମାଧାନ"
      },
      home: {
        aboutSubtitle: "କେଞ୍ଜେଣ୍ଡେ କ୍ରପ୍ସ ବିଷୟରେ",
        aboutTitle: "ଭବିଷ୍ୟତ ପିଢ଼ି ପାଇଁ କୃଷିରେ ନବସୃଜନ",
        aboutDesc1: "କେଞ୍ଜେଣ୍ଡେ କ୍ରପ୍ସ ପ୍ରାଇଭେଟ ଲିମିଟେଡ଼ ହେଉଛି କୃଷି ନବସୃଜନରେ ଏକ ଅଗ୍ରଣୀ ନାମ, ଯାହା କୃଷକମାନଙ୍କୁ ଉଚ୍ଚ ମାନର ଫସଲ ସୁରକ୍ଷା ଏବଂ ଅଭିବୃଦ୍ଧି ସମାଧାନ ପ୍ରଦାନ କରିବାକୁ ଉତ୍ସର୍ଗୀକୃତ। ଆମର ଉତ୍ପାଦଗୁଡିକ ପରିବେଶ ସ୍ଥିରତା ନିଶ୍ଚିତ କରିବା ସହିତ ମୃତ୍ତିକା ସ୍ୱାସ୍ଥ୍ୟ ବୃଦ୍ଧି ଏବଂ ଉତ୍ପାଦନକୁ ସର୍ବାଧିକ କରିବା ପାଇଁ ଡିଜାଇନ୍ କରାଯାଇଛି।",
        aboutDesc2: "ଆନ୍ଧ୍ରପ୍ରଦେଶରେ ଥିବା ଆମର ମୁଖ୍ୟ କାର୍ଯ୍ୟାଳୟ ଠାରୁ ଆରମ୍ଭ କରି ଓଡିଶାରେ ଥିବା ଆମର ଆଞ୍ଚଳିକ ଉପସ୍ଥିତି ପର୍ଯ୍ୟନ୍ତ, ଆମେ ବୈଜ୍ଞାନିକ ସୂତ୍ର ଏବଂ ବିଶେଷଜ୍ଞ ସହାୟତା ସହିତ କୃଷକ ସମ୍ପ୍ରଦାୟର ସେବା କରିବାକୁ ପ୍ରତିବଦ୍ଧ।",
        readMoreBtn: "ଆମ ବିଷୟରେ ଅଧିକ ପଢନ୍ତୁ",
        categoriesTitle: "ଉତ୍ପାଦ ବର୍ଗ", featuredTitle: "ବିଶେଷ ଉତ୍ପାଦ", viewAll: "ସମସ୍ତ ଉତ୍ପାଦ ଦେଖନ୍ତୁ",
        whyChooseTitle: "କେଞ୍ଜେଣ୍ଡେ କ୍ରପ୍ସ କାହିଁକି ବାଛିବେ?", testimonialsTitle: "କୃଷକମାନେ କ'ଣ କହନ୍ତି"
      },
      counters: { products: "ଉତ୍ପାଦ", dealers: "ଡିଲର", farmersServed: "କୃଷକ ଉପକୃତ", statesCovered: "ରାଜ୍ୟ ଅନ୍ତର୍ଭୁକ୍ତ" },
      features: {
        f1Title: "ଉଚ୍ଚ ଗୁଣବତ୍ତା ଉତ୍ପାଦ", f1Desc: "ଆମର ଉତ୍ପାଦଗୁଡିକ ଆପଣଙ୍କ ଫସଲ ପାଇଁ ନିରନ୍ତର ଫଳାଫଳ ପ୍ରଦାନ କରିବାକୁ ସୁନିଶ୍ଚିତ କରିବା ପାଇଁ ଆମେ କଠୋର ଗୁଣବତ୍ତା ମାନ ବଜାୟ ରଖୁ।",
        f2Title: "ଜୈବିକ ସମାଧାନ", f2Desc: "ଆମ ପରିସର ମଧ୍ୟରେ ପରିବେଶ ଅନୁକୂଳ ଜୈବିକ ମୃତ୍ତିକା କଣ୍ଡିସନର ଅନ୍ତର୍ଭୁକ୍ତ ଯାହା ସ୍ଥାୟୀ କୃଷି ପ୍ରଣାଳୀକୁ ପ୍ରୋତ୍ସାହିତ କରେ।",
        f3Title: "ବୈଜ୍ଞାନିକ ସୂତ୍ର", f3Desc: "ସର୍ବାଧିକ ପ୍ରଭାବଶାଳୀତା ପାଇଁ ପ୍ରତ୍ୟେକ ଉତ୍ପାଦ ବ୍ୟାପକ ଗବେଷଣା ଏବଂ ବୈଜ୍ଞାନିକ ସୂତ୍ର ଦ୍ୱାରା ସମର୍ଥିତ।",
        f4Title: "ଉନ୍ନତ ଫସଲ ଅମଳ", f4Desc: "ଆମର ସମାଧାନଗୁଡିକ ଫସଲ ଉତ୍ପାଦନ ବୃଦ୍ଧି ଏବଂ ଅମଳର ସାମଗ୍ରିକ ସ୍ୱାସ୍ଥ୍ୟ ବୃଦ୍ଧି କରିବା ପାଇଁ ପ୍ରମାଣିତ।",
        f5Title: "ଡିଲର ସହାୟତା", f5Desc: "ଆମେ ଏକାଧିକ ରାଜ୍ୟରେ ଥିବା ଆମର ଡିଲରମାନଙ୍କ ନେଟୱାର୍କକୁ ବ୍ୟାପକ ସହାୟତା ଏବଂ ତାଲିମ ପ୍ରଦାନ କରୁ।",
        f6Title: "କୃଷକ ଅନୁକୂଳ", f6Desc: "ଆମର ପ୍ରାଥମିକ ଧ୍ୟାନ ହେଉଛି କୃଷକମାନଙ୍କ ସଫଳତା ଏବଂ ସମୃଦ୍ଧି, ସେମାନଙ୍କୁ ସୁଲଭ ଏବଂ ପ୍ରଭାବଶାଳୀ ଉପକରଣ ପ୍ରଦାନ କରିବା।"
      },
      categories: {
        "Insecticides": "କୀଟନାଶକ", "Fungicides": "କବକନାଶକ", "Herbicides": "ତୃଣକନାଶକ",
        "Plant Growth Regulators": "ଉଦ୍ଭିଦ ବିକାଶ ନିୟାମକ", "Organic Soil Conditioners": "ଜୈବିକ ମୃତ୍ତିକା କଣ୍ଡିସନର"
      },
      productUI: { packSize: "ପ୍ୟାକ୍ ଆକାର", readMore: "ଅଧିକ ପଢନ୍ତୁ", viewDetails: "ବିବରଣୀ ଦେଖନ୍ତୁ", explore: "ଦେଖନ୍ତୁ" },
      products: {
        p1Name: "ଆଞ୍ଛିତା ଗୋଲ୍ଡ", p1Desc: "ପୋଟାସିୟମ୍ ହ୍ୟୁମେଟ୍ ସାଇନି ବଲ୍ସ ହେଉଛି ଏକ ମୃତ୍ତିକା କଣ୍ଡିସନର ଏବଂ ଉଦ୍ଭିଦ ବୃଦ୍ଧି ବର୍ଦ୍ଧକ ଯାହା ପୁଷ୍ଟିକର ଗ୍ରହଣ, ମୃତ୍ତିକା ସ୍ୱାସ୍ଥ୍ୟ ଏବଂ ଫସଲ ଉତ୍ପାଦନରେ ଉନ୍ନତି ଆଣେ।",
        p1B1: "ପୁଷ୍ଟିକର ଗ୍ରହଣ ଏବଂ ମୃତ୍ତିକା ସ୍ୱାସ୍ଥ୍ୟରେ ଉନ୍ନତି ଆଣେ", p1B2: "ମୂଳ ବିକାଶକୁ ପ୍ରୋତ୍ସାହିତ କରେ", p1B3: "ଉଦ୍ଭିଦର ମେଟାବୋଲିଜିମ ବଢାଏ", p1B4: "ଚାପ ପରିସ୍ଥିତିରେ ପ୍ରତିରୋଧ କ୍ଷମତା ବୃଦ୍ଧି କରେ",
        p1HowItWorks: "ପ୍ରାକୃତିକ ହ୍ୟୁମିକ୍ ପଦାର୍ଥରୁ ଉତ୍ପନ୍ନ, ଏହା ମାଟିରେ ପୋଷକ ତତ୍ତ୍ୱର ଉପଲବ୍ଧତା ବଢାଇଥାଏ। ଏହା ଧାତୁ ଆୟନଗୁଡ଼ିକୁ ଚେଲେଟ୍ କରେ, ଜଳ ଧାରଣ କ୍ଷମତା ବଢାଏ ଏବଂ ମାଟିର କ୍ୟାସନ୍ ବିନିମୟ କ୍ଷମତାକୁ ଉନ୍ନତ କରେ।",
        p1Uses: "ମୃତ୍ତିକାର ଉର୍ବରତା ବୃଦ୍ଧି ଏବଂ ଫସଲ ଅମଳ ବଢାଇବା ପାଇଁ ବିଭିନ୍ନ ଫସଲରେ ବ୍ୟବହାର କରାଯାଇପାରିବ। ବିଶେଷକରି ବାଲିଆ ଏବଂ ଅମ୍ଳଯୁକ୍ତ ମାଟିରେ ଏହା ଅଧିକ ପ୍ରଭାବଶାଳୀ।",
        p1Dosage: "ସୁପାରିଶ ଅନୁଯାୟୀ",
        p2Name: "ପୋଟାଜ୍", p2Desc: "ମ୍ୟାକ୍ସ ଗ୍ରାନୁଲ୍ସ (K+Mg+Carbon)। ଫର୍ମ: ଗ୍ରାନୁଲ୍ସ। ପୋଟାଶ୍: 95%। ଜୈବିକ ପ୍ରକୃତି: ଜୈବିକ। ଷ୍ଟୋରେଜ୍: ଥଣ୍ଡା ଏବଂ ଶୁଖିଲା ସ୍ଥାନରେ ରଖନ୍ତୁ।",
        p2B1: "ସୁସ୍ଥ ବିକାଶ ପାଇଁ ପୋଟାସିୟମ୍ ଏବଂ ମାଇକ୍ରୋନ୍ୟୁଟ୍ରିଏଣ୍ଟ୍ ଯୋଗାଇଥାଏ", p2B2: "ବିକାଶକୁ ପ୍ରୋତ୍ସାହିତ କରିବା ସହିତ ଫସଲର ସ୍ୱାସ୍ଥ୍ୟ ବଜାୟ ରଖେ", p2B3: "ଫସଲ ଉତ୍ପାଦନ ବୃଦ୍ଧି କରେ", p2B4: "ମାଟିର ଗଠନ ଏବଂ ଲାଭଦାୟକ ଜୀବାଣୁ ଉନ୍ନତ କରିବାକୁ ମାଟିରେ କାର୍ବନ୍ ଯୋଗ କରେ", p2B5: "ମୃତ୍ତିକାର ଉର୍ବରତା ବଜାୟ ରଖେ ଏବଂ ଉନ୍ନତ କରେ",
        p2HowItWorks: "ଏଥିରେ KMB (ପୋଟାସିୟମ୍ ମୋବିଲାଇଜିଂ ବାୟୋଫର୍ଟିଲାଇଜର୍) ରହିଛି ଯାହା ମାଟିରୁ ଜଟିଳ ପୋଟାସ୍ ଗ୍ରହଣ କରିବାରେ ସାହାଯ୍ୟ କରେ, ସୁସ୍ଥ ଫସଲର ବିକାଶ ପାଇଁ ଆବଶ୍ୟକୀୟ ପୋଟାସିୟମ୍ ଏବଂ ମାଇକ୍ରୋନ୍ୟୁଟ୍ରିଏଣ୍ଟ୍ ଯୋଗାଇଥାଏ।",
        p2Uses: "95% ପୋଟାସ୍ ଯୋଗାଇବା ସହିତ ଗଠନ, ଉର୍ବରତା ଏବଂ ଜୀବାଣୁ ଗତିବିଧିରେ ଉନ୍ନତି ଆଣିବା ପାଇଁ ମାଟିରେ ପ୍ରୟୋଗ କରାଯାଏ।",
        p2Dosage: "ସୁପାରିଶ ଅନୁଯାୟୀ",
        p3Name: "ନେଷ୍ଟ ସିଫ୍ଟ", p3Desc: "ପ୍ରେଟିଲାକ୍ଲୋର୍ 50% ଇସି ହେଉଛି ଏକ ଚୟନାତ୍ମକ, ପୂର୍ବ-ଉଦ୍ଭବ ତୃଣକନାଶକ ଯାହା ମୁଖ୍ୟତଃ ଧାନ ବିଲରେ ତୃଣକ ନିୟନ୍ତ୍ରଣ ପାଇଁ ବ୍ୟବହୃତ ହୁଏ।",
        p3B1: "ବାର୍ଷିକ ଘାସ ଏବଂ ଚଉଡା ପତ୍ର ତୃଣକ ବିରୁଦ୍ଧରେ ଅତ୍ୟନ୍ତ ପ୍ରଭାବଶାଳୀ", p3B2: "ଏକ ସ୍ୱଚ୍ଛ ଫସଲ ଏବଂ ସୁସ୍ଥ ବିକାଶ ସୁନିଶ୍ଚିତ କରେ", p3B3: "ପ୍ରାଥମିକ ପର୍ଯ୍ୟାୟରେ ତୃଣକ ପ୍ରତିଯୋଗିତାକୁ ହ୍ରାସ କରେ",
        p3HowItWorks: "ମୁଖ୍ୟତଃ ଅଙ୍କୁରିତ ଅଙ୍କୁର ଏବଂ ତୃଣକର ଚେର ମାଧ୍ୟମରେ ଶୋଷିତ ହୁଏ। ଏହା କୋଷ ବିଭାଜନକୁ ବାଧା ଦିଏ, ତୃଣକ ବାହାରିବା ପୂର୍ବରୁ ସେଗୁଡିକର ବିକାଶକୁ ରୋକିଥାଏ।",
        p3Uses: "ଧାନ ବିଲରେ ତୃଣକର ପୂର୍ବ-ଉଦ୍ଭବ ନିୟନ୍ତ୍ରଣ, ବିଶେଷ କରି ଓଦା ସିଧାସଳଖ ବୁଣା କିମ୍ବା ରୋପଣ କରାଯାଇଥିବା ଧାନ ଚାଷ ସମୟରେ ବ୍ୟବହୃତ ହୁଏ।",
        p3Dosage: "ସୁପାରିଶ ଅନୁଯାୟୀ",
        p4Name: "ଗ୍ରୋ ++", p4Desc: "ସ୍ୱତନ୍ତ୍ର 30 ମିଲି ଡୋଜ୍ ପିଜିଆର୍ ହେଉଛି ଏକ ଅତ୍ୟଧିକ ଏକାଗ୍ର ଉଦ୍ଭିଦ ବୃଦ୍ଧି ନିୟାମକ ଯାହା ବିଭିନ୍ନ ଫସଲରେ ବୃଦ୍ଧିକୁ ପ୍ରୋତ୍ସାହିତ କରିବା, ଫୁଲ ବଢାଇବା ଏବଂ ଅମଳ ବୃଦ୍ଧି ପାଇଁ ଡିଜାଇନ୍ କରାଯାଇଛି।",
        p4B1: "କୋଷ ବିଭାଜନ ଏବଂ ପ୍ରସାରଣକୁ ଉତ୍ସାହିତ କରେ", p4B2: "ଫୁଲ ଫୁଟିବା ବଢାଏ ଏବଂ ଫୁଲ/ଫଳ ଝଡିବା କମ୍ କରେ", p4B3: "ଫଟୋସିନ୍ଥେସିସ୍ ଏବଂ ପୁଷ୍ଟିକର ସ୍ଥାନାନ୍ତରଣରେ ଉନ୍ନତି କରେ", p4B4: "ପରିବେଶ ଚାପ ବିରୁଦ୍ଧରେ ଉଦ୍ଭିଦର ପ୍ରାକୃତିକ ପ୍ରତିରକ୍ଷା ବୃଦ୍ଧି କରେ",
        p4HowItWorks: "ଏଥିରେ ଅକ୍ସିନ୍, ସାଇଟୋକିନିନ୍, ଜିବେରେଲିନ୍ ଏବଂ ଅନ୍ୟାନ୍ୟ ଉଦ୍ଭିଦ ହରମୋନ୍ ଭଳି ପ୍ରାକୃତିକ ଏବଂ କୃତ୍ରିମ ବିକାଶ ଉତ୍ତେଜକ ମିଶ୍ରଣ ରହିଛି।",
        p4Uses: "ଶସ୍ୟ, ପନିପରିବା, ଫଳ ଏବଂ ଡାଲି ଜାତୀୟ ଫସଲରେ ବୃଦ୍ଧି ଏବଂ ବିକାଶକୁ ପ୍ରୋତ୍ସାହିତ କରେ। ମରୁଡ଼ି କିମ୍ବା ଅତ୍ୟଧିକ ତାପମାତ୍ରାରୁ ଚାପ ହ୍ରାସ କରେ।",
        p4Dosage: "ସ୍ୱତନ୍ତ୍ର 30 ମିଲି ଡୋଜ୍ କିମ୍ବା ସୁପାରିଶ ଅନୁଯାୟୀ"
      },
      testimonials: {
        t1Text: "ଆଞ୍ଛିତା ଗୋଲ୍ଡ ବ୍ୟବହାର କରିବା ଦ୍ୱାରା ମୋ ଫସଲ ଅମଳରେ ଯଥେଷ୍ଟ ଉନ୍ନତି ଆସିଛି। ମାଟିର ଗୁଣବତ୍ତା ମଧ୍ୟ ବହୁତ ଭଲ ହୋଇଯାଇଛି।",
        t2Text: "ନେଷ୍ଟ ସିଫ୍ଟ ମୋ ଧାନ ବିଲରେ ତୃଣକ ନିୟନ୍ତ୍ରଣ ପାଇଁ ବହୁତ ପ୍ରଭାବଶାଳୀ। ସମସ୍ତ କୃଷକମାନଙ୍କ ପାଇଁ ଅତ୍ୟଧିକ ସୁପାରିଶ କରାଯାଏ।",
        t3Text: "କେଞ୍ଜେଣ୍ଡେ କ୍ରପ୍ସ ଉତ୍ପାଦଗୁଡିକ ବହୁତ ନିର୍ଭରଯୋଗ୍ୟ। ସେମାନଙ୍କର ସହାୟତା ଟିମ୍ ମଧ୍ୟ ବହୁତ ସାହାଯ୍ୟକାରୀ ଏବଂ ଜ୍ଞାନୀ।"
      },
      cta: {
        title: "କୌଣସି ପ୍ରଶ୍ନ ଅଛି କି? ଆଜି ଆମ ସହିତ ଯୋଗାଯୋଗ କରନ୍ତୁ",
        subtitle: "ସର୍ବୋତ୍ତମ କୃଷି ସମାଧାନ ସହିତ ଆପଣଙ୍କୁ ସାହାଯ୍ୟ କରିବାକୁ ଆମର ବିଶେଷଜ୍ଞମାନେ ପ୍ରସ୍ତୁତ ଅଛନ୍ତି।",
        callUs: "ଆମକୁ କଲ କରନ୍ତୁ", emailUs: "ଆମକୁ ଇମେଲ କରନ୍ତୁ", whatsapp: "ହ୍ୱାଟ୍ସଆପ୍"
      },
      footer: {
        quote: "“ଉତ୍ପାଦ ବଢେ, ଆଶା ଫୁଟେ।”",
        desc: "ଉଚ୍ଚ ମାନର କୃଷି ସମାଧାନ ଏବଂ ଜୈବିକ ଫସଲ ସୁରକ୍ଷା ପ୍ରଦାନ କରିବାକୁ ଉତ୍ସର୍ଗୀକୃତ।",
        quickLinks: "ଦ୍ରୁତ ଲିଙ୍କ୍",
        home: "ହୋମ୍", aboutUs: "ଆମ ବିଷୟରେ", ourProducts: "ଆମର ଉତ୍ପାଦ", becomeDealer: "ଡିଲର ହୁଅନ୍ତୁ", contactUs: "ଯୋଗାଯୋଗ କରନ୍ତୁ",
        headOffice: "ମୁଖ୍ୟ କାର୍ଯ୍ୟାଳୟ", odishaOffice: "ଓଡିଶା କାର୍ଯ୍ୟାଳୟ", rights: "ସର୍ବସ୍ୱତ୍ୱ ସଂରକ୍ଷିତ।"
      },
      aboutPage: {
        banner: "ଆମ ବିଷୟରେ",
        title: "କେଞ୍ଜେଣ୍ଡେ କ୍ରପ୍ସ ବିଷୟରେ",
        subtitle: "ଏକ ସବୁଜ ଏବଂ ଅଧିକ ଉତ୍ପାଦନକ୍ଷମ ଭବିଷ୍ୟତ ପାଇଁ ନବସୃଜନ।",
        storyTitle: "ଆମର କାହାଣୀ",
        story1: "କେଞ୍ଜେଣ୍ଡେ କ୍ରପ୍ସ ପ୍ରାଇଭେଟ ଲିମିଟେଡ଼ ନବସୃଜନ ଏବଂ ସ୍ଥାୟୀ ପ୍ରଣାଳୀ ମାଧ୍ୟମରେ କୃଷି କ୍ଷେତ୍ରକୁ ପରିବର୍ତ୍ତନ କରିବାର ଦୃଷ୍ଟିକୋଣ ନେଇ ପ୍ରତିଷ୍ଠା କରାଯାଇଥିଲା। ଆମେ କୃଷକମାନଙ୍କ ସମ୍ମୁଖୀନ ହେଉଥିବା ଆହ୍ୱାନଗୁଡିକୁ ଚିହ୍ନଟ କରିଥିଲୁ - ମୃତ୍ତିକାର ଉର୍ବରତା ହ୍ରାସ ପାଇବା ଠାରୁ ଆରମ୍ଭ କରି କୀଟପତଙ୍ଗର ଚାପ ବୃଦ୍ଧି ପର୍ଯ୍ୟନ୍ତ - ଏବଂ ଏପରି ସମାଧାନ ବିକାଶ କରିବାକୁ ସ୍ଥିର କରିଥିଲୁ ଯାହା ଉଭୟ ପ୍ରଭାବଶାଳୀ ଏବଂ ପରିବେଶ ଅନୁକୂଳ ଅଟେ।",
        story2: "ଆମର ଯାତ୍ରା ଉତ୍ସାହୀ କୃଷି ବୈଜ୍ଞାନିକ ଏବଂ ଉଦ୍ୟୋଗୀମାନଙ୍କର ଏକ ଛୋଟ ଦଳ ସହିତ ଆରମ୍ଭ ହୋଇଥିଲା। ଆଜି, ଆମେ ଏକ ବିଶ୍ୱସ୍ତ ନାମରେ ପରିଣତ ହୋଇଛୁ, ଯାହା ଗୁଣବତ୍ତା ଏବଂ କୃଷକ କୈନ୍ଦ୍ରିକ ଦୃଷ୍ଟିକୋଣ ପାଇଁ ଜଣାଶୁଣା। ଫଳାଫଳ ପ୍ରଦାନ କରୁଥିବା ଉତ୍ପାଦ ସୃଷ୍ଟି କରିବା ପାଇଁ ଆମେ ପାରମ୍ପରିକ ଜ୍ଞାନକୁ ଆଧୁନିକ ବିଜ୍ଞାନ ସହିତ ମିଶ୍ରଣ କରୁ।",
        visionTitle: "ଆମର ଲକ୍ଷ୍ୟ",
        visionDesc: "ସ୍ଥାୟୀ କୃଷି କ୍ଷେତ୍ରରେ ଏକ ବିଶ୍ୱସ୍ତରୀୟ ନେତା ହେବା ପାଇଁ, ନବସୃଜନ ଜ୍ଞାନକୌଶଳ ସହିତ କୃଷକମାନଙ୍କୁ ସଶକ୍ତ କରିବା ଯାହା ଆଗାମୀ ପିଢି ପାଇଁ ଖାଦ୍ୟ ନିରାପତ୍ତା ଏବଂ ପରିବେଶ ସଂରକ୍ଷଣ ସୁନିଶ୍ଚିତ କରେ।",
        missionTitle: "ଆମର ଉଦ୍ଦେଶ୍ୟ",
        missionDesc: "ଉଚ୍ଚମାନର, ବୈଜ୍ଞାନିକ ଭାବରେ ସମର୍ଥିତ କୃଷି ସମାଧାନ ପ୍ରଦାନ କରିବା ଯାହା ଫସଲ ଉତ୍ପାଦନ ବୃଦ୍ଧି କରେ, ମୃତ୍ତିକା ସ୍ୱାସ୍ଥ୍ୟରେ ଉନ୍ନତି ଆଣେ, ଏବଂ ପରିବେଶ ଉପରେ ପ୍ରଭାବକୁ କମ୍ କରି କୃଷକର ଲାଭକୁ ସର୍ବାଧିକ କରେ।",
        innovationTitle: "କୃଷି ନବସୃଜନ",
        rdTitle: "ଗବେଷଣା ଏବଂ ବିକାଶ",
        rdDesc: "ଆମର ଉତ୍ସର୍ଗୀକୃତ ଆର ଏବଂ ଡି ୱିଙ୍ଗ ନୂତନ ସୂତ୍ର ବିକାଶ କରିବା ଏବଂ ବିଦ୍ୟମାନ ଗୁଡିକୁ ଉନ୍ନତ କରିବା ପାଇଁ ଅକ୍ଳାନ୍ତ ପରିଶ୍ରମ କରେ, ଏହା ନିଶ୍ଚିତ କରେ ଯେ ଆମର ଉତ୍ପାଦଗୁଡିକ କୃଷି ବିଜ୍ଞାନର ଅଗ୍ରଭାଗରେ ରହିବ।",
        supportTitle: "ବିଶେଷଜ୍ଞ ସହାୟତା",
        supportDesc: "ଆମେ କେବଳ ଉତ୍ପାଦ ବିକ୍ରି କରୁନାହୁଁ; ଆମେ ଜ୍ଞାନ ପ୍ରଦାନ କରୁ। କୃଷକମାନଙ୍କୁ ସର୍ବୋତ୍ତମ ସମ୍ଭାବ୍ୟ ଫଳାଫଳ ହାସଲ କରିବାରେ ସାହାଯ୍ୟ କରିବା ପାଇଁ ଆମର କୃଷି ବିଶେଷଜ୍ଞ ଦଳ କ୍ଷେତ୍ର ସହାୟତା ଏବଂ ମାର୍ଗଦର୍ଶନ ପ୍ରଦାନ କରନ୍ତି।",
        qualityTitle: "ଗୁଣବତ୍ତା ନିଶ୍ଚିତତା",
        qualityDesc: "ଆମେ କରୁଥିବା ପ୍ରତ୍ୟେକ କାର୍ଯ୍ୟର କେନ୍ଦ୍ରରେ ଗୁଣବତ୍ତା ରହିଛି। ଆମର ଉତ୍ପାଦର ପ୍ରତ୍ୟେକ ବ୍ୟାଚ୍ ସର୍ବୋଚ୍ଚ ଶିଳ୍ପ ମାନକ ପୂରଣ କରିବା ପାଇଁ କଠୋର ପରୀକ୍ଷଣ ଦେଇ ଗତି କରେ।",
        directorTitle: "ନିର୍ଦ୍ଦେଶକଙ୍କ ବାର୍ତ୍ତା",
        directorQuote: "“କେଞ୍ଜେଣ୍ଡେ କ୍ରପ୍ସରେ, ଆମେ ବିଶ୍ୱାସ କରୁ ଯେ ଏକ ରାଷ୍ଟ୍ରର ସମୃଦ୍ଧି ଏହାର କୃଷକମାନଙ୍କ ସମୃଦ୍ଧିରେ ଗଭୀର ଭାବରେ ନିହିତ ଅଛି। ଆମର ଲକ୍ଷ୍ୟ ହେଉଛି ପ୍ରତ୍ୟେକ କୃଷକଙ୍କୁ ସଫଳ ହେବା ପାଇଁ ଆବଶ୍ୟକ ଉପକରଣ ଏବଂ ଜ୍ଞାନ ପ୍ରଦାନ କରିବା। ଆମେ 'ଉତ୍ପାଦ ବଢେ, ଆଶା ଫୁଟେ' ପାଇଁ ପ୍ରତିବଦ୍ଧ, ଏବଂ ଆମେ ଦେଶବ୍ୟାପୀ ହଜାର ହଜାର କୃଷକଙ୍କ ପାଇଁ ଏହାକୁ ବାସ୍ତବରେ ପରିଣତ କରିବାକୁ ପ୍ରତିଦିନ କାର୍ଯ୍ୟ କରୁଛୁ।”",
        directorName: "ପରିଚାଳନା ନିର୍ଦ୍ଦେଶକ",
        certTitle: "ଆମର ପ୍ରମାଣପତ୍ର",
        isoTitle: "ISO ପ୍ରମାଣିତ", isoDesc: "ଆନ୍ତର୍ଜାତୀୟ ଗୁଣବତ୍ତା ମାନ ବଜାୟ ରଖିବା।",
        orgTitle: "ଜୈବିକ ଅନୁମୋଦିତ", orgDesc: "ପରିବେଶ ଅନୁକୂଳ ଏବଂ ସ୍ଥାୟୀ ଫସଲ ସମାଧାନ।",
        awardTitle: "ଗୁଣବତ୍ତା ପୁରସ୍କାର", awardDesc: "ନବସୃଜନ ଏବଂ ଉତ୍କର୍ଷତା ପାଇଁ ସ୍ୱୀକୃତିପ୍ରାପ୍ତ।",
        safeTitle: "ନିରାପଦ ବ୍ୟବହାର", safeDesc: "ବୈଜ୍ଞାନିକ ଭାବରେ ପରୀକ୍ଷିତ ଏବଂ କୃଷକଙ୍କ ଦ୍ୱାରା ବିଶ୍ୱସ୍ତ।"
      },
      productsPage: {
        banner: "ଆମର ଉତ୍ପାଦ",
        title: "ଆମର ଉତ୍ପାଦ",
        subtitle: "ଆମର ବିସ୍ତୃତ କୃଷି ସମାଧାନର ଅନୁସନ୍ଧାନ କରନ୍ତୁ।",
        all: "ସମସ୍ତ ଉତ୍ପାଦ",
        noProducts: "ଆପଣଙ୍କ ମାନଦଣ୍ଡ ସହିତ ମେଳ ଖାଉଥିବା କୌଣସି ଉତ୍ପାଦ ମିଳିଲା ନାହିଁ।",
        resetBtn: "ଫିଲ୍ଟର ରିସେଟ୍ କରନ୍ତୁ"
      },
      productDetails: {
        description: "ବିବରଣୀ", keyBenefits: "ମୁଖ୍ୟ ଲାଭ", inquiryNow: "ବର୍ତ୍ତମାନ ଅନୁସନ୍ଧାନ କରନ୍ତୁ", contactSales: "ବିକ୍ରୟ ସହିତ ଯୋଗାଯୋଗ କରନ୍ତୁ", howItWorks: "ଏହା କିପରି କାମ କରେ", uses: "ବ୍ୟବହାର", dosage: "ଡୋଜ", relatedProducts: "ସମ୍ବନ୍ଧୀୟ ଉତ୍ପାଦ"
      },
      categoryPage: {
        notFound: "ବର୍ଗ ମିଳିଲା ନାହିଁ",
        backToProducts: "ଉତ୍ପାଦକୁ ଫେରନ୍ତୁ",
        bannerText: "ବର୍ଗ",
        subtitle: "ଆପଣଙ୍କର କୃଷି ଆବଶ୍ୟକତା ପାଇଁ ପ୍ରଭାବଶାଳୀ ସମାଧାନ।",
        products: "ଉତ୍ପାଦ",
        allCategories: "ସମସ୍ତ ବର୍ଗ",
        noProducts: "ବର୍ତ୍ତମାନ ଏହି ବର୍ଗରେ କୌଣସି ଉତ୍ପାଦ ଉପଲବ୍ଧ ନାହିଁ।",
        browseAll: "ସମସ୍ତ ଉତ୍ପାଦ ଦେଖନ୍ତୁ"
      },
      dealerPage: {
        banner: "ଡିଲର ହୁଅନ୍ତୁ",
        title: "ବିତରକ ହୁଅନ୍ତୁ",
        subtitle: "ଆମ ସହିତ ସହଭାଗୀ ହୁଅନ୍ତୁ ଏବଂ କୃଷି କ୍ଷେତ୍ରରେ ଆପଣଙ୍କ ବ୍ୟବସାୟ ବୃଦ୍ଧି କରନ୍ତୁ।",
        whyPartner: "ଆମ ସହିତ କାହିଁକି ସହଭାଗୀ ହେବେ?",
        brandTitle: "ଦୃଢ ବ୍ରାଣ୍ଡ ପ୍ରତିଷ୍ଠା", brandDesc: "କୃଷି କ୍ଷେତ୍ରରେ ଗୁଣବତ୍ତା ଏବଂ ନବସୃଜନ ପାଇଁ ଜଣାଶୁଣା ଏକ ବିଶ୍ୱସ୍ତ ବ୍ରାଣ୍ଡରେ ଯୋଗ ଦିଅନ୍ତୁ।",
        growthTitle: "ଉଚ୍ଚ ବିକାଶ ସମ୍ଭାବନା", growthDesc: "ଆମର ବଢୁଥିବା ଉତ୍ପାଦ ପରିସର ଉତ୍କୃଷ୍ଟ ମାର୍ଜିନ ଏବଂ ବ୍ୟବସାୟ ବୃଦ୍ଧି ସୁଯୋଗ ପ୍ରଦାନ କରେ।",
        supplyTitle: "ନିର୍ଭରଯୋଗ୍ୟ ଯୋଗାଣ ଶୃଙ୍ଖଳା", supplyDesc: "ଋତୁସାରା ଉତ୍ପାଦର ସମୟାନୁବର୍ତ୍ତୀ ବିତରଣ ଏବଂ ନିରନ୍ତର ଉପଲବ୍ଧତା ଉପଭୋଗ କରନ୍ତୁ।",
        formTitle: "ଡିଲର ଅନୁସନ୍ଧାନ",
        formDesc: "ଆମେ ଉତ୍ସର୍ଗୀକୃତ ଅଂଶୀଦାରମାନଙ୍କୁ ଖୋଜୁଛୁ। ନିମ୍ନରେ ଥିବା ଫର୍ମ ପୂରଣ କରନ୍ତୁ ଏବଂ ଆମ ଦଳ ଯୋଗାଯୋଗ କରିବେ।",
        statesTitle: "ସୁଯୋଗ ଥିବା ରାଜ୍ୟଗୁଡିକ:",
        fullName: "ପୂରା ନାମ",
        businessName: "ବ୍ୟବସାୟର ନାମ",
        phone: "ଫୋନ୍ ନମ୍ବର",
        state: "ରାଜ୍ୟ",
        selectState: "ରାଜ୍ୟ ବାଛନ୍ତୁ",
        message: "ବାର୍ତ୍ତା",
        submit: "ଆବେଦନ ଦାଖଲ କରନ୍ତୁ"
      },
      contactPage: {
        banner: "ଯୋଗାଯୋଗ କରନ୍ତୁ",
        title: "ଯୋଗାଯୋଗ କରନ୍ତୁ",
        subtitle: "ଆମେ ଆପଣଙ୍କୁ ସାହାଯ୍ୟ କରିବାକୁ ଏଠାରେ ଅଛୁ। କୌଣସି ଅନୁସନ୍ଧାନ ପାଇଁ ଆମ ସହିତ ଯୋଗାଯୋଗ କରନ୍ତୁ।",
        getInTouch: "ଯୋଗାଯୋଗରେ ରୁହନ୍ତୁ",
        getInTouchDesc: "ଫୋନ୍, ଇମେଲ୍ ମାଧ୍ୟମରେ ଆମ ସହିତ ଯୋଗାଯୋଗ କରିବାକୁ ମୁକ୍ତ ମନେ କରନ୍ତୁ କିମ୍ବା ଆମ କାର୍ଯ୍ୟାଳୟ ପରିଦର୍ଶନ କରନ୍ତୁ।",
        phone: "ଫୋନ୍",
        email: "ଇମେଲ୍",
        headOffice: "ମୁଖ୍ୟ କାର୍ଯ୍ୟାଳୟ",
        odishaOffice: "ଓଡିଶା କାର୍ଯ୍ୟାଳୟ",
        hours: "କାର୍ଯ୍ୟ ସମୟ",
        whatsapp: "ହ୍ୱାଟ୍ସଆପ୍ ରେ ଚାଟ୍ କରନ୍ତୁ",
        sendMessage: "ଆମକୁ ଏକ ବାର୍ତ୍ତା ପଠାନ୍ତୁ",
        fName: "ପ୍ରଥମ ନାମ",
        lName: "ଶେଷ ନାମ",
        subject: "ବିଷୟ",
        message: "ବାର୍ତ୍ତା",
        sendBtn: "ବାର୍ତ୍ତା ପଠାନ୍ତୁ"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false }
  });

export default i18n;
