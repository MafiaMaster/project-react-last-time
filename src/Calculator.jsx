import React, { useState } from 'react';
import { Calculator as CalcIcon, Flame, Activity } from 'lucide-react';

export default function Calculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [activity, setActivity] = useState('1.375');
  const [results, setResults] = useState(null);

  const calculateFitness = (e) => {
    e.preventDefault();
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseFloat(age);
    if (!w || !h || !a) return;

    const heightInMeters = h / 100;
    const bmiVal = (w / (heightInMeters * heightInMeters)).toFixed(1);

    let bmiStatus = '';
    let bmiColor = '';
    if (bmiVal < 18.5) { bmiStatus = 'نقص في الوزن'; bmiColor = 'text-yellow-400'; }
    else if (bmiVal < 25) { bmiStatus = 'وزن مثالي'; bmiColor = 'text-green-400'; }
    else if (bmiVal < 30) { bmiStatus = 'زيادة في الوزن'; bmiColor = 'text-orange-400'; }
    else { bmiStatus = 'سمنة'; bmiColor = 'text-red-500'; }

    let bmrVal = gender === 'male' ? (10 * w + 6.25 * h - 5 * a + 5) : (10 * w + 6.25 * h - 5 * a - 161);
    const tdeeVal = Math.round(bmrVal * parseFloat(activity));

    setResults({
      bmi: bmiVal,
      status: bmiStatus,
      color: bmiColor,
      tdee: tdeeVal,
      weightLoss: tdeeVal - 500,
      weightGain: tdeeVal + 500,
    });
  };

  return (
    <section className="py-16 px-6 max-w-5xl mx-auto text-white dir-rtl" dir="rtl">
      <div className="text-center mb-10">
        <h3 className="text-3xl font-black flex items-center justify-center gap-2 mb-2">
          <CalcIcon className="w-8 h-8 text-orange-600" /> حاسبة اللياقة والسعرات
        </h3>
        <p className="text-neutral-400 text-sm">احسب مؤشر كتلة جسمك (BMI) واحتياجك اليومي من السعرات.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <form onSubmit={calculateFitness} className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 space-y-4">
          <div className="flex gap-4">
            <label className={`flex-1 py-2 text-center rounded-xl cursor-pointer border font-bold ${gender === 'male' ? 'border-orange-600 text-orange-600 bg-orange-600/10' : 'border-neutral-800 text-neutral-400'}`}>
              <input type="radio" name="gender" value="male" checked={gender === 'male'} onChange={() => setGender('male')} className="hidden" /> ذكر
            </label>
            <label className={`flex-1 py-2 text-center rounded-xl cursor-pointer border font-bold ${gender === 'female' ? 'border-orange-600 text-orange-600 bg-orange-600/10' : 'border-neutral-800 text-neutral-400'}`}>
              <input type="radio" name="gender" value="female" checked={gender === 'female'} onChange={() => setGender('female')} className="hidden" /> أنثى
            </label>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <input type="number" required placeholder="الوزن كجم" value={weight} onChange={(e) => setWeight(e.target.value)} className="bg-neutral-800 border border-neutral-700 rounded-lg p-3 text-white" />
            <input type="number" required placeholder="الطول سم" value={height} onChange={(e) => setHeight(e.target.value)} className="bg-neutral-800 border border-neutral-700 rounded-lg p-3 text-white" />
            <input type="number" required placeholder="العمر" value={age} onChange={(e) => setAge(e.target.value)} className="bg-neutral-800 border border-neutral-700 rounded-lg p-3 text-white" />
          </div>

          <select value={activity} onChange={(e) => setActivity(e.target.value)} className="w-full bg-neutral-800 border border-neutral-700 rounded-lg p-3 text-white">
            <option value="1.2">نشاط خامل (بدون تمرين)</option>
            <option value="1.375">نشاط خفيف (1-3 أيام/أسبوع)</option>
            <option value="1.55">نشاط متوسط (3-5 أيام/أسبوع)</option>
            <option value="1.725">نشاط عالٍ (6-7 أيام/أسبوع)</option>
          </select>

          <button type="submit" className="w-full py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-xl">احسب النتائج</button>
        </form>

        <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex flex-col justify-center min-h-[300px]">
          {results ? (
            <div className="space-y-4">
              <div className="bg-neutral-950 p-4 rounded-xl flex justify-between items-center">
                <div>
                  <span className="text-xs text-neutral-400 block">BMI</span>
                  <span className={`text-lg font-bold ${results.color}`}>{results.status}</span>
                </div>
                <div className="text-3xl font-black">{results.bmi}</div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between p-2 bg-neutral-800/40 rounded"><span>للحفاظ على الوزن:</span><span className="font-bold text-orange-500">{results.tdee} سعرة</span></div>
                <div className="flex justify-between p-2 bg-neutral-800/40 rounded"><span>للتخسيس:</span><span className="font-bold text-green-400">{results.weightLoss} سعرة</span></div>
                <div className="flex justify-between p-2 bg-neutral-800/40 rounded"><span>للتضخيم:</span><span className="font-bold text-yellow-400">{results.weightGain} سعرة</span></div>
              </div>
            </div>
          ) : (
            <p className="text-center text-neutral-500">ادخل بياناتك للبدء بالحساب</p>
          )}
        </div>
      </div>
    </section>
  );
}