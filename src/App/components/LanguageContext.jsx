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
    homeHowItWorksTitle: "How It Works",
    homeStep1Title: "Choose Pattern",
    homeStep1Description: "Select your preferred planting pattern",
    homeStep2Title: "Set Dimensions",
    homeStep2Description: "Input your garden measurements",
    homeStep3Title: "Adjust Spacing",
    homeStep3Description: "Set plant spacing requirements",
    homeStep4Title: "Get Results",
    homeStep4Description: "View your optimized garden layout",
    homeCtaTitle: "Ready to Start Planning?",
    homeCtaDescription: "Create your perfect garden layout today with our easy-to-use tools",



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
    dimensions: "Dimensions",
    hide: "Hide",
    show: "Show",

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
    homeDesignPlotTitle: 'ตัวช่วยออกแบบแปลงปลูก',
    homeDesignPlotDescription: 'เครื่องมือที่ใช้งานง่ายของเราช่วยให้คุณสามารถวางแผนและจินตนาการการจัดสวนที่สมบูรณ์แบบได้ง่ายๆ ไม่ว่าคุณจะเป็นนักทำสวนที่มีประสบการณ์หรือเพิ่งเริ่มต้นก็ตาม ด้วยแพลตฟอร์มที่เข้าใจง่ายนี้ คุณสามารถสำรวจการออกแบบสวนต่างๆ การจัดวางพืช และระยะห่างระหว่างพืชเพื่อให้ทุกอย่างเข้ากันได้อย่างลงตัว เพียงเลือกการจัดวางที่ชอบ เพิ่มพืชที่ต้องการ และดูว่าพืชเหล่านั้นจะเติบโตไปด้วยกันอย่างไร เครื่องมือนี้ช่วยให้คุณหลีกเลี่ยงปัญหาการแออัดหรือระยะห่างไม่เหมาะสม ทำให้คุณสามารถสร้างสวนที่สุขภาพดีและเจริญเติบโตได้ ไม่ว่าคุณจะมีประสบการณ์มากน้อยแค่ไหน คุณก็สามารถออกแบบสวนที่สวยงามและตอบโจทย์การใช้งานได้อย่างมีเอกลักษณ์!',
    introStepsTitle: "🌿 How It Works",
    introStep1Title: "Enter Dimensions",
    introStep1Description: "Input your garden measurements and plant spacing requirements",
    introStep2Title: "Choose Pattern",
    introStep2Description: "Select your preferred planting pattern and adjust grid settings",
    introStep3Title: "Get Results",
    introStep3Description: "View your optimized layout and plant count calculations",
    introCtaButton: "Start Designing Your Garden",

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
    homeDesignPlotTitle: 'ตัวช่วยออกแบบแปลงปลูก',
    homeDesignPlotDescription: 'เครื่องมือที่ใช้งานง่ายของเราช่วยให้คุณสามารถวางแผนและจินตนาการการจัดสวนที่สมบูรณ์แบบได้ง่ายๆ ไม่ว่าคุณจะเป็นนักทำสวนที่มีประสบการณ์หรือเพิ่งเริ่มต้นก็ตาม ด้วยแพลตฟอร์มที่เข้าใจง่ายนี้ คุณสามารถสำรวจการออกแบบสวนต่างๆ การจัดวางพืช และระยะห่างระหว่างพืชเพื่อให้ทุกอย่างเข้ากันได้อย่างลงตัว เพียงเลือกการจัดวางที่ชอบ เพิ่มพืชที่ต้องการ และดูว่าพืชเหล่านั้นจะเติบโตไปด้วยกันอย่างไร เครื่องมือนี้ช่วยให้คุณหลีกเลี่ยงปัญหาการแออัดหรือระยะห่างไม่เหมาะสม ทำให้คุณสามารถสร้างสวนที่สุขภาพดีและเจริญเติบโตได้ ไม่ว่าคุณจะมีประสบการณ์มากน้อยแค่ไหน คุณก็สามารถออกแบบสวนที่สวยงามและตอบโจทย์การใช้งานได้อย่างมีเอกลักษณ์!',
    homeHowItWorksTitle: "วิธีการทำงาน",
    homeStep1Title: "เลือกรูปแบบ",
    homeStep1Description: "เลือกรูปแบบการปลูกที่คุณต้องการ",
    homeStep2Title: "กำหนดขนาด",
    homeStep2Description: "ใส่ขนาดสวนของคุณ",
    homeStep3Title: "ปรับระยะห่าง",
    homeStep3Description: "กำหนดระยะห่างระหว่างต้นไม้",
    homeStep4Title: "ดูผลลัพธ์",
    homeStep4Description: "ดูแผนผังสวนที่ได้รับการปรับให้เหมาะสม",
    homeCtaTitle: "พร้อมที่จะเริ่มวางแผนหรือยัง?",
    homeCtaDescription: "สร้างแผนผังสวนที่สมบูรณ์แบบของคุณวันนี้ด้วยเครื่องมือที่ใช้งานง่าย",

    // Design Page
    designTitle: "เครื่องคำนวณสวน",
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
    dimensions: "ระยะ",
    hide: "ซ่อนแถบแสดง",
    show: "เปิดแถบแสดง",

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
  }
};

// Custom hook for using translations
export function useTranslation() {
  const { language } = useContext(LanguageContext);
  return translations[language];
} 