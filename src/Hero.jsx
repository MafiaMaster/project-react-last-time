import React from 'react';

export default function Hero() {
  return (
    <header className="relative h-[70vh] bg-cover bg-center flex items-center justify-center text-center px-4 dir-rtl" dir="rtl"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200")' }}>
      <div className="absolute inset-0 bg-black/75"></div>
      <div className="relative z-10 max-w-2xl space-y-6">
        <h2 className="text-4xl md:text-6xl font-black leading-tight text-white">
          ابني جسمك القوي مع <span className="text-orange-600">TITANS</span>
        </h2>
        <p className="text-neutral-300 text-lg md:text-xl">
          أحدث الأجهزة الرياضية وأفضل المدربين المعتمدين لمساعدتك في الوصول لهدفك.
        </p>
        <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform hover:scale-105 shadow-lg shadow-orange-600/30">
          اشترك الآن وابدأ مجاناً
        </button>
      </div>
    </header>
  );
}