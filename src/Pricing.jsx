import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function Pricing() {
  return (
    <section className="py-16 px-6 bg-neutral-900/50 text-white text-center dir-rtl" dir="rtl">
      <h3 className="text-3xl font-extrabold mb-10">باقات الاشتراكات</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
        
        <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800">
          <h4 className="text-xl font-bold">باقة الشهر</h4>
          <div className="text-3xl font-black text-orange-600 my-4">500 <span className="text-sm text-neutral-400 font-normal">جنيه / شهر</span></div>
          <ul className="space-y-3 text-right text-sm text-neutral-300 my-6">
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-orange-600" /> دخول الجيم طوال الشهر</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-orange-600" /> حصة متابعة مع مدرب</li>
          </ul>
          <button className="w-full py-2.5 rounded-lg border border-orange-600 text-orange-600 font-bold hover:bg-orange-600 hover:text-white transition-colors">اختيار الباقة</button>
        </div>

        <div className="bg-neutral-900 p-8 rounded-2xl border-2 border-orange-600 relative md:scale-105">
          <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-orange-600 text-white px-4 py-1 rounded-full text-xs font-bold">الأكثر طلباً</span>
          <h4 className="text-xl font-bold">باقة 3 شهور</h4>
          <div className="text-3xl font-black text-orange-600 my-4">1200 <span className="text-sm text-neutral-400 font-normal">جنيه / 3 شهور</span></div>
          <ul className="space-y-3 text-right text-sm text-neutral-300 my-6">
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-orange-600" /> كل مميزات الباقة الشهرية</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-orange-600" /> نظام غذائي مخصص</li>
          </ul>
          <button className="w-full py-2.5 rounded-lg bg-orange-600 text-white font-bold hover:bg-orange-700 transition-colors">اختيار الباقة</button>
        </div>

        <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800">
          <h4 className="text-xl font-bold">الباقة السنوية</h4>
          <div className="text-3xl font-black text-orange-600 my-4">3800 <span className="text-sm text-neutral-400 font-normal">جنيه / سنة</span></div>
          <ul className="space-y-3 text-right text-sm text-neutral-300 my-6">
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-orange-600" /> دخول مفتوح طوال السنة</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-orange-600" /> قياس InBody شهري مجاناً</li>
          </ul>
          <button className="w-full py-2.5 rounded-lg border border-orange-600 text-orange-600 font-bold hover:bg-orange-600 hover:text-white transition-colors">اختيار الباقة</button>
        </div>

      </div>
    </section>
  );
}