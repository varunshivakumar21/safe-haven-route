export interface Translation {
  [key: string]: string;
}

export interface Translations {
  [language: string]: Translation;
}

export const translations: Translations = {
  en: {
    // Header
    touristSafety: "Tourist Safety",
    northeastIndia: "Northeast India",
    allSystemsOperational: "All Systems Operational",
    safetyMonitored: "Your safety is being monitored 24/7",
    
    // Digital ID
    digitalTouristId: "Digital Tourist ID",
    touristName: "Tourist Name",
    touristId: "Tourist ID", 
    nationality: "Nationality",
    validUntil: "Valid Until",
    currentLocation: "Current Location",
    verified: "Verified",
    
    // Safety Score
    safetyScore: "Safety Score",
    safe: "Safe",
    caution: "Caution",
    danger: "Danger",
    location: "Location",
    time: "Time",
    activity: "Activity", 
    weather: "Weather",
    
    // Emergency
    emergencyAssistance: "Emergency Assistance",
    pressHoldEmergency: "Press and hold for emergency",
    cancellingIn: "Cancelling in",
    cancel: "Cancel",
    
    // Quick Actions
    quickActions: "Quick Actions",
    nearbyHospitals: "Nearby Hospitals",
    policeStations: "Police Stations",
    touristInfo: "Tourist Info",
    directions: "Directions",
    
    // Documents
    myDocuments: "My Documents",
    add: "Add",
    identity: "identity",
    travel: "travel",
    medical: "medical", 
    insurance: "insurance",
    documentsEncrypted: "Documents are encrypted and stored securely",
    
    // Recent Activity
    recentActivity: "Recent Activity",
    locationUpdated: "Location updated",
    safetyCheckCompleted: "Safety check completed",
    idVerifiedSuccessfully: "ID verified successfully",
    minAgo: "min ago",
    hourAgo: "hour ago"
  },
  
  hi: {
    // Header
    touristSafety: "पर्यटक सुरक्षा",
    northeastIndia: "उत्तर पूर्व भारत", 
    allSystemsOperational: "सभी सिस्टम चालू हैं",
    safetyMonitored: "आपकी सुरक्षा की 24/7 निगरानी की जा रही है",
    
    // Digital ID
    digitalTouristId: "डिजिटल पर्यटक पहचान",
    touristName: "पर्यटक का नाम",
    touristId: "पर्यटक आईडी",
    nationality: "राष्ट्रीयता", 
    validUntil: "तक वैध",
    currentLocation: "वर्तमान स्थान",
    verified: "सत्यापित",
    
    // Safety Score
    safetyScore: "सुरक्षा स्कोर",
    safe: "सुरक्षित",
    caution: "सावधानी",
    danger: "खतरा",
    location: "स्थान",
    time: "समय",
    activity: "गतिविधि",
    weather: "मौसम",
    
    // Emergency
    emergencyAssistance: "आपातकालीन सहायता", 
    pressHoldEmergency: "आपातकाल के लिए दबाएं और रोकें",
    cancellingIn: "में रद्द हो रहा है",
    cancel: "रद्द करें",
    
    // Quick Actions
    quickActions: "त्वरित कार्य",
    nearbyHospitals: "नजदीकी अस्पताल",
    policeStations: "पुलिस स्टेशन", 
    touristInfo: "पर्यटक जानकारी",
    directions: "दिशाएं",
    
    // Documents
    myDocuments: "मेरे दस्तावेज",
    add: "जोड़ें",
    identity: "पहचान",
    travel: "यात्रा",
    medical: "चिकित्सा",
    insurance: "बीमा", 
    documentsEncrypted: "दस्तावेज एन्क्रिप्टेड और सुरक्षित रूप से संग्रहीत हैं",
    
    // Recent Activity
    recentActivity: "हाल की गतिविधि",
    locationUpdated: "स्थान अपडेट किया गया",
    safetyCheckCompleted: "सुरक्षा जांच पूरी हुई", 
    idVerifiedSuccessfully: "आईडी सफलतापूर्वक सत्यापित",
    minAgo: "मिनट पहले",
    hourAgo: "घंटे पहले"
  },
  
  as: {
    // Header  
    touristSafety: "পৰ্যটক সুৰক্ষা",
    northeastIndia: "উত্তৰ-পূব ভাৰত",
    allSystemsOperational: "সকলো ব্যৱস্থা চালু আছে", 
    safetyMonitored: "আপোনাৰ সুৰক্ষা ২৪/৭ পৰ্যবেক্ষণ কৰা হৈছে",
    
    // Digital ID
    digitalTouristId: "ডিজিটেল পৰ্যটক পৰিচয়",
    touristName: "পৰ্যটকৰ নাম",
    touristId: "পৰ্যটক আইডি",
    nationality: "জাতীয়তা",
    validUntil: "পৰ্যন্ত বৈধ", 
    currentLocation: "বৰ্তমানৰ স্থান",
    verified: "সত্যাপিত",
    
    // Safety Score
    safetyScore: "সুৰক্ষা স্কোৰ", 
    safe: "সুৰক্ষিত",
    caution: "সাৱধানতা",
    danger: "বিপদ",
    location: "স্থান",
    time: "সময়",
    activity: "কাৰ্যকলাপ",
    weather: "বতৰ",
    
    // Emergency
    emergencyAssistance: "জৰুৰীকালীন সহায়তা",
    pressHoldEmergency: "জৰুৰীকালীন অৱস্থাৰ বাবে টিপি ৰাখক",
    cancellingIn: "ত বাতিল হৈছে",
    cancel: "বাতিল কৰক",
    
    // Quick Actions
    quickActions: "দ্ৰুত কাৰ্য",
    nearbyHospitals: "ওচৰৰ চিকিৎসালয়", 
    policeStations: "আৰক্ষী থানা",
    touristInfo: "পৰ্যটক তথ্য",
    directions: "দিশসমূহ",
    
    // Documents
    myDocuments: "মোৰ নথি-পত্ৰ",
    add: "যোগ কৰক",
    identity: "পৰিচয়",
    travel: "যাত্ৰা", 
    medical: "চিকিৎসা",
    insurance: "বীমা",
    documentsEncrypted: "নথিপত্ৰ এনক্ৰিপ্টেড আৰু সুৰক্ষিতভাৱে সংৰক্ষিত",
    
    // Recent Activity
    recentActivity: "শেহতীয়া কাৰ্যকলাপ",
    locationUpdated: "স্থান আপডেট কৰা হ'ল",
    safetyCheckCompleted: "সুৰক্ষা পৰীক্ষা সম্পূৰ্ণ হ'ল",
    idVerifiedSuccessfully: "আইডি সফলভাৱে সত্যাপিত", 
    minAgo: "মিনিট আগত",
    hourAgo: "ঘণ্টা আগত"
  },
  
  bn: {
    // Header
    touristSafety: "পর্যটক নিরাপত্তা",
    northeastIndia: "উত্তর-পূর্ব ভারত",
    allSystemsOperational: "সব সিস্টেম চালু আছে",
    safetyMonitored: "আপনার নিরাপত্তা ২৪/৭ পর্যবেক্ষণ করা হচ্ছে",
    
    // Digital ID  
    digitalTouristId: "ডিজিটাল পর্যটক পরিচয়",
    touristName: "পর্যটকের নাম",
    touristId: "পর্যটক আইডি",
    nationality: "জাতীয়তা",
    validUntil: "পর্যন্ত বৈধ",
    currentLocation: "বর্তমান অবস্থান", 
    verified: "যাচাইকৃত",
    
    // Safety Score
    safetyScore: "নিরাপত্তা স্কোর",
    safe: "নিরাপদ",
    caution: "সতর্কতা",
    danger: "বিপদ",
    location: "অবস্থান",
    time: "সময়", 
    activity: "কার্যকলাপ",
    weather: "আবহাওয়া",
    
    // Emergency
    emergencyAssistance: "জরুরি সহায়তা",
    pressHoldEmergency: "জরুরি অবস্থার জন্য টিপে ধরে রাখুন",
    cancellingIn: "এ বাতিল হচ্ছে",
    cancel: "বাতিল করুন",
    
    // Quick Actions
    quickActions: "দ্রুত কার্য",
    nearbyHospitals: "কাছাকাছি হাসপাতাল",
    policeStations: "পুলিশ স্টেশন",
    touristInfo: "পর্যটক তথ্য", 
    directions: "দিকনির্দেশনা",
    
    // Documents
    myDocuments: "আমার নথিপত্র",
    add: "যোগ করুন",
    identity: "পরিচয়",
    travel: "ভ্রমণ",
    medical: "চিকিৎসা",
    insurance: "বীমা",
    documentsEncrypted: "নথিপত্র এনক্রিপ্টেড এবং নিরাপদে সংরক্ষিত",
    
    // Recent Activity
    recentActivity: "সাম্প্রতিক কার্যকলাপ",
    locationUpdated: "অবস্থান আপডেট করা হয়েছে",
    safetyCheckCompleted: "নিরাপত্তা পরীক্ষা সম্পূর্ণ হয়েছে", 
    idVerifiedSuccessfully: "আইডি সফলভাবে যাচাই করা হয়েছে",
    minAgo: "মিনিট আগে",
    hourAgo: "ঘন্টা আগে"
  }
};

export const getTranslation = (key: string, language: string): string => {
  return translations[language]?.[key] || translations['en'][key] || key;
};