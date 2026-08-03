import React from 'react';
import { Dumbbell } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-neutral-900 border-b border-neutral-800 sticky top-0 z-50 dir-rtl" dir="rtl">
      <div className="flex items-center gap-2">
        <Dumbbell className="w-8 h-8 text-orange-600" />
        <h1 className="text-2xl font-black tracking-wider text-white">
          TITANS <span className="text-orange-600">GYM</span>
        </h1>
      </div>
      <ul className="flex gap-6 font-medium text-sm sm:text-base text-white">
        <li className="hover:text-orange-600 cursor-pointer transition-colors">الرئيسية</li>
        <li className="hover:text-orange-600 cursor-pointer transition-colors">الحاسبة</li>
        <li className="hover:text-orange-600 cursor-pointer transition-colors">الاشتراكات</li>
      </ul>
    </nav>
  );
}