import React, { createContext, useContext, useState } from 'react';

// Create Language Context
export const LanguageContext = createContext();

// Language Provider Component
export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('th');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Language Toggle Component
export function LanguageToggle() {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <div className="absolute top-4 right-4 z-10">
      <button
        onClick={() => setLanguage(prev => prev === 'en' ? 'th' : 'en')}
        className="flex items-center justify-center px-3 py-1.5 
                 bg-white border border-gray-200 rounded-lg shadow-sm
                 hover:bg-gray-50 transition-colors
                 text-sm font-medium text-gray-700"
      >
        {language.toUpperCase()}
      </button>
    </div>
  );
}

// Translations
export const translations = {
  en: {
    // Common
    home: "Home",
    about: "About",
    blog: "Blog",
    contact: "Contact",
    design: "Design",

    // Home Page
    homeHeroTitle: "Design Your Garden with Precision",
    homeHeroSubtitle: "Plan your garden layout efficiently with our easy-to-use calculator and visualization tools",
    startDesigning: "Start Designing",
    exploreGuide: "Explore Guide",
    homeFeature1Title: "Plant Spacing Calculator",
    homeFeature1Description: 'Calculates the number of plants and precise spacing requirements',
    homeFeature2Title: 'Optimize Plant Spacing',
    homeFeature2Description: 'Helps you determine the optimal spacing between plants based on their size and your chosen layout. Proper spacing ensures healthy growth and prevents overcrowding.',
    homeFeature3Title: "Smart Design",
    homeFeature3Description: "Intelligent suggestions for optimal plant placement",
    homeDesignPlotTitle: "Convenient - Fast - Accurate",
    homeDesignPlotDescription: "Our user-friendly tool makes it easy for you to plan and envision your perfect garden, whether you're an experienced gardener or just starting out. With this easy-to-use design assistant, you can design your garden, arrange plants harmoniously, customize settings as desired, and see a preview of your planting bed instantly. This allows you to utilize your space efficiently, so you can design the garden you want effectively. No matter how new you are to gardening, You can achieve professional-quality results in designing a beautiful and functional garden.",
    homeBeginnersGuideTitle: "Your Gardening Journey Starts Here",
    homeBeginnersGuideDescription: "Plan your perfect garden with our easy-to-use Plot Calculator.",
    homeBeginnersGuideStep1Title: "Step 1: Set Dimensions",
    homeBeginnersGuideStep1Description: "Input your garden measurements",
    homeBeginnersGuideStep2Title: "Step 2: Choose Pattern, Adjust Spacing",
    homeBeginnersGuideStep2Description: "Select your preferred planting pattern, adjust the spacing between plants",
    homeBeginnersGuideStep3Title: "Step 3: See results",
    homeBeginnersGuideStep3Description: "View your optimized garden layout",
    homeGuideBlogTitle: "Discover helpful tips and tricks to improve your garden.",
    homeGuideBlogDescription: "Recommendations for area analysis, plant selection, and design patterns and layouts.",
    homeCallToActionTitle: "Ready to Get Your Perfect Garden?",
    homeAboutUsTitle: "Our Story",
    homeAboutUsDescription: "We are a team of passionate gardeners and tech enthusiasts who believe that everyone has the potential to grow their own plants and create beautiful green spaces. Our mission is to empower both novice and experienced gardeners by providing the tools, resources, and inspiration needed to thrive in their gardening journey.",

    // Design Page
    designTitle: "Garden Calculator",
    pattern: "Planting Pattern",
    square: "Square Grid",
    triangle: "Triangular Grid",
    rectangle: "Rectangular Grid",
    gridWidth: "Grid Width Multiplier",
    gridHeight: "Grid Height Multiplier",
    gridWidthMultiplier: "Grid Width Multiplier",
    gridHeightMultiplier: "Grid Height Multiplier",
    gardenWidth: "Garden Width",
    gardenHeight: "Garden Height",
    plantDiameter: "Plant Diameter",
    plantSpacing: "Plant Spacing",
    borderWidth: "Border Width",
    totalArea: "Total Area",
    plantingArea: "Planting Area",
    borderArea: "Border Area",
    plantCount: "Number of Plants",
    plantsInTriangle: "Plants in Triangle",
    plantsInSquare: "Plants in Square",
    plantUnit: "Plants",
    dimensions: "Dimensions",
    hide: "Hide ",
    show: "Show ",
    unit: "m²",

    // Blog Page
    blogSearchPlaceholder: "🔍 Looking for something...",
    blogClearFilters: "Clear Filters",
    blogNoArticles: "No articles found!",
    blogReadMore: "Read More",
    blogLoadingError: "Error loading articles",
    blogLoading: "Loading articles...",
    blogPrevious: "Previous",
    blogNext: "Next",

    // Introduction Page
    introTitle: "Garden Plot Calculator",
    introSubtitle: "Design your garden layout with precision using our easy-to-use calculator and spacing tools",
    introFeaturesTitle: "✨ Features",
    introFeature1Title: "Custom Dimensions",
    introFeature1Description: "Set garden width, height, border, and plant spacing",
    introFeature2Title: "Multiple Patterns",
    introFeature2Description: "Choose from Square, Triangular, or Rectangular layouts",
    introFeature3Title: 'Visualize Your Garden',
    introFeature3Description: 'Provides a visual representation of your garden layout, showing the placement of plants based on your chosen settings. This allows you to see how your garden will look and make adjustments as needed.',
    introStepsTitle: "🌿 How It Works",
    introStep1Title: "Enter Dimensions",
    introStep1Description: "Input your garden measurements and plant spacing requirements",
    introStep2Title: "Choose Pattern",
    introStep2Description: "Select your preferred planting pattern and adjust grid settings",
    introStep3Title: "Get Results",
    introStep3Description: "View your optimized layout and plant count calculations",
    introCtaButton: "Start Designing Your Garden",

    // Feedback Page
    feedbackTitle: "Feedback",
    feedbackPlaceholder: "Share your thoughts with us",
    feedbackButton: "Submit",

  },
  th: {
    // Common
    home: "หน้าแรก",
    about: "รู้จักเรา",
    blog: "บล็อก",
    contact: "ติดต่อเรา",
    design: "ออกแบบ",

    // Home Page
    homeHeroTitle: "ออกแบบสวนของคุณอย่างแม่นยำ",
    homeHeroSubtitle: "วางแผนการจัดสวนของคุณอย่างมีประสิทธิภาพด้วยเครื่องมือคำนวณและการแสดงผลที่ใช้งานง่าย",
    startDesigning: "เริ่มออกแบบ",
    exploreGuide: "คู่มือการใช้งาน",
    homeFeature1Title: "โปรแกรมคำนวณจำนวนต้นไม้",
    homeFeature1Description: "คำนวณจำนวณต้นไม้และระยะปลูกต้นไม้อย่างแม่นยำ",
    homeFeature2Title: "ปรับแต่งระยะห่างอย่างมีประสิทธิภาพ",
    homeFeature2Description: "ช่วยให้คุณกำหนดระยะห่างที่เหมาะสมระหว่างต้นไม้ โดยพิจารณาจากขนาดของต้นไม้และแบบแปลงที่คุณเลือกเพื่อให้ต้นไม้เจริญเติบโตอย่างสมบูรณ์และไม่แออัด",
    homeFeature3Title: "แสดงภาพแปลนสวนของคุณ",
    homeFeature3Description: "แสดงภาพแปลนสวนของคุณ โดยแสดงตำแหน่งของต้นไม้ซึ่งช่วยให้คุณเห็นว่าค่าสวนของคุณจะเป็นอย่างไรและสามารถปรับเปลี่ยนได้ตามต้องการ",
    homeDesignPlotTitle: 'สะดวก - รวดเร็ว - แม่นยำ',
    homeDesignPlotDescription: 'เครื่องมือที่ใช้งานง่ายของเราช่วยให้คุณวางแผนและจินตนาการการจัดสวนที่สมบูรณ์แบบได้ง่าย ๆ ไม่ว่าคุณจะเป็นชาวสวนมือที่เปี่ยมด้วยประสบการณ์หรือมือใหม่ก็ตาม ด้วยตัวช่วยในการออกแบบที่ใช้งานง่ายนี้ คุณสามารถออกแบบสวน จัดวางต้นไม้ให้เข้ากันได้อย่างลงตัว กำหนดค่าต่าง ๆ ได้ตามต้องการ และเห็นแบบแปลงปลูกได้ทันที ทำให้คุณใช้พื้นที่ได้อย่างคุ้มค่า เพื่อให้คุณออกแบบสวนได้อย่างมีประสิทธิภาพ ไม่ว่าคุณจะเป็นมือใหม่แค่ไหน คุณก็สามารถออกแบบสวนที่สวยงามและตอบโจทย์การใช้งานได้อย่างมืออาชีพ',
    homeBeginnersGuideTitle: "การเริ่มต้นของการปลูกสวน",
    homeBeginnersGuideDescription: "วางแผนการปลูกสวนของคุณอย่างแม่นยำด้วยเครื่องมือคำนวณและการจัดระยะห่างที่ใช้งานง่าย",
    homeBeginnersGuideStep1Title: "กำหนดขนาด",
    homeBeginnersGuideStep1Description: "ใส่ขนาดสวนของคุณ ขนาดต้นไม้ ระยะห่างระหว่างต้นไม้",
    homeBeginnersGuideStep2Title: "เลือกรูปแบบ ปรับระยะห่าง",
    homeBeginnersGuideStep2Description: "เลือกรูปแบบการปลูกที่คุณต้องการ กำหนดระยะห่างระหว่างต้นไม้",
    homeBeginnersGuideStep3Title: " ดูผลลัพธ์",
    homeBeginnersGuideStep3Description: "ดูแผนผังสวนที่ได้รับการปรับให้เหมาะสม",
    homeGuideBlogTitle: "เคล็ดลับและเทคนิคสำหรับสวนของคุณ",
    homeGuideBlogDescription: "คำแนะนำสำหรับการวิเคราะห์พื้นที่ การเลือกพืช ไปจนถึงรูปแบบและการออกแบบ",
    homeCallToActionTitle: "พร้อมที่จะเริ่มวางแผนหรือยัง?",
    homeAboutUsTitle: "รู้จักเรา",
    homeAboutUsDescription: "เราคือทีมงานที่มีความหลงใหลในงานสวนและเทคโนโลยี ซึ่งเชื่อว่าทุกคนมีศักยภาพในการปลูกต้นไม้ของตัวเองและสร้างพื้นที่สีเขียวที่สวยงาม ภารกิจของเราคือการเสริมพลังให้ทั้งผู้เริ่มต้นและผู้มีประสบการณ์ในการทำสวน โดยการจัดหาเครื่องมือ ทรัพยากร และแรงบันดาลใจที่จำเป็นสำหรับการเติบโตในเส้นทางการทำสวนของพวกเขา",
    // Design Page
    designTitle: "คำนวณพื้นที่และจำนวนต้นไม้",
    pattern: "รูปแบบแปลงปลูก",
    square: "สี่เหลี่ยม",
    triangle: "สามเหลี่ยม",
    rectangle: "สี่เหลี่ยมผืนผ้า",
    gridWidth: "ตัวคูณความกว้างตาราง",
    gridHeight: "ตัวคูณความสูงตาราง",
    gridWidthMultiplier: "ระยะห่างระหว่างแถว (แนวนอน)",
    gridHeightMultiplier: "ระยะห่างระหว่างแถว (แนวตั้ง)",
    gardenWidth: "ความกว้าง",
    gardenHeight: "ความยาว",
    plantDiameter: "ขนาดกลางต้นไม้ (เส้นผ่านศูนย์กลาง)",
    plantSpacing: "ระยะห่างระหว่างต้น",
    borderWidth: "ระยะขอบแปลง",
    totalArea: "พื้นที่ทั้งหมด",
    plantingArea: "พื้นที่ปลูก",
    borderArea: "พื้นที่ขอบ",
    plantCount: "จำนวนต้นไม้",
    plantsInTriangle: "จำนวนต้นในแบบสามเหลี่ยม",
    plantsInSquare: "จำนวนต้นในแบบสี่เหลี่ยม",
    plantUnit: "ต้น",
    dimensions: "ระยะ",
    hide: "ซ่อนแถบแสดง",
    show: "เปิดแถบแสดง",
    unit: "ตร.ม.",

    // Introduction Page
    introTitle: "เครื่องคำนวณแปลงสวน",
    introSubtitle: "ออกแบบแผนผังสวนของคุณอย่างแม่นยำด้วยเครื่องมือคำนวณและการจัดระยะห่างที่ใช้งานง่าย",
    introFeaturesTitle: "✨ คุณสมบัติ",
    introFeature1Title: "ปรับขนาดได้",
    introFeature1Description: "กำหนดความกว้าง ความสูง ขอบ และระยะห่างระหว่างต้นไม้",
    introFeature2Title: "หลายรูปแบบ",
    introFeature2Description: "เลือกจากรูปแบบสี่เหลี่ยม สามเหลี่ยม หรือสี่เหลี่ยมผืนผ้า",
    introFeature3Title: "คำนวณอัจฉริยะ",
    introFeature3Description: "รับผลการคำนวณจำนวนต้นไม้และการจัดระยะห่างที่เหมาะสมทันที",
    introStepsTitle: "🌿 วิธีการใช้งาน",
    introStep1Title: "ใส่ขนาด",
    introStep1Description: "ป้อนขนาดสวนและข้อกำหนดระยะห่างระหว่างต้นไม้",
    introStep2Title: "เลือกรูปแบบ",
    introStep2Description: "เลือกรูปแบบการปลูกที่คุณต้องการและปรับการตั้งค่าตาราง",
    introStep3Title: "ดูผลลัพธ์",
    introStep3Description: "ดูแบบแปลนที่ได้รับการปรับให้เหมาะสม และผลการคำนวณจำนวนต้นไม้",
    introCtaButton: "เริ่มออกแบบสวนของคุณ",

    // Blog Page
    blogSearchPlaceholder: "🔍 ค้นหาบทความ...",
    blogClearFilters: "ล้างตัวกรอง",
    blogNoArticles: "ไม่พบบทความ!",
    blogReadMore: "อ่านเพิ่มเติม",
    blogLoadingError: "เกิดข้อผิดพลาดในการโหลดบทความ",
    blogLoading: "กำลังโหลดบทความ...",
    blogPrevious: "ก่อนหน้า",
    blogNext: "ถัดไป",

    // Feedback Page
    feedbackTitle: "ความคิดเห็นของคุณมีความสำคัญต่อเรา",
    feedbackPlaceholder: "คุณคิดเห็นอย่างไรเกี่ยวกับเครื่องมือของเรา?",
    feedbackButton: "ส่งความคิดเห็น",
  }
};

// Custom hook for using translations
export function useTranslation() {
  const { language } = useContext(LanguageContext);
  return translations[language];
} 