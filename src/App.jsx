import React, { useState } from 'react';

export default function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [result, setResult] = useState(null);

  const calculateBMI = (e) => {
    e.preventDefault();
    if (weight && height && age) {
      const hMeters = height / 100;
      const bmi = (weight / (hMeters * hMeters)).toFixed(1);
      const calories = Math.round(10 * weight + 6.25 * height - 5 * age + 5);
      setResult({ bmi, calories });
    }
  };

  return (
    <div>
      {/* 1. النافبار */}
      <nav className="navbar">
        <div className="logo">TITANS <span>GYM</span></div>
        <ul className="nav-links">
          <li><a href="#home">الرئيسية</a></li>
          <li><a href="#services">خدماتنا</a></li>
          <li><a href="#calculator">الحاسبة</a></li>
          <li><a href="#pricing">الاشتراكات</a></li>
        </ul>
      </nav>

      {/* 2. الهيرو (صورة رئيسية خلفية + نص مميز) */}
      <section className="hero" id="home">
        <h1>صمم جسمك المثالي مع <span>TITANS</span></h1>
        <p>أفضل الأجهزة الرياضية والمدربين المحترفين في مكان واحد لمساعدتك على تحقيق هدفك.</p>
        <button className="btn-primary">ابدأ رحلتك الآن 🚀</button>
      </section>

      {/* 3. كروت صور خدمات الجيم */}
      <h2 className="section-title" id="services">أقسام الجيم</h2>
      <div className="grid-container">
        
        <div className="card">
          <img src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=600" alt="كمال اجسام" />
          <div className="card-content">
            <h3 className="card-title">صالة الحديد وكمال الأجسام</h3>
            <p className="card-desc">أجهزة حديثة ومتنوعة لجميع عضلات الجسم مع أوزان حرة تناسب جميع المستويات.</p>
          </div>
        </div>

        <div className="card">
          <img src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=600" alt="لياقة وفيتنس" />
          <div className="card-content">
            <h3 className="card-title">تمارين اللياقة والكارديو</h3>
            <p className="card-desc">منطقة مخصصة لأجهزة السير والـ Elliptical وحرق الدهون بأعلى كفاءة.</p>
          </div>
        </div>

        <div className="card">
          <img src="https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?q=80&w=600" alt="تدريب شخصي" />
          <div className="card-content">
            <h3 className="card-title">التدريب الشخصي (PT)</h3>
            <p className="card-desc">مدرب خاص يتابع خطتك التمرينية والتغذية خطوة بخطوة للوصول للهدف بسرعة.</p>
          </div>
        </div>

      </div>

      {/* 4. حاسبة السعرات */}
      <section className="calc-section" id="calculator">
        <h2 className="section-title" style={{ margin: '0 0 30px' }}>حاسبة اللياقة والسعرات 🧮</h2>
        <div className="calc-box">
          <form onSubmit={calculateBMI}>
            <div className="inputs-grid">
              <input type="number" placeholder="الوزن (كجم)" value={weight} onChange={(e) => setWeight(e.target.value)} className="input-field" required />
              <input type="number" placeholder="الطول (سم)" value={height} onChange={(e) => setHeight(e.target.value)} className="input-field" required />
              <input type="number" placeholder="العمر" value={age} onChange={(e) => setAge(e.target.value)} className="input-field" required />
            </div>
            <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '10px' }}>احسب الآن</button>
          </form>

          {result && (
            <div style={{ marginTop: '25px', padding: '20px', background: '#0b0b0d', borderRadius: '15px', textAlign: 'center' }}>
              <p style={{ fontSize: '18px', color: '#ff3b00', fontWeight: 'bold' }}>مؤشر كتلة الجسم (BMI): {result.bmi}</p>
              <p style={{ fontSize: '16px', color: '#fff', marginTop: '8px' }}>احتياجك اليومي للحفاظ على الوزن: <strong>{result.calories} سعرة حرارية</strong></p>
            </div>
          )}
        </div>
      </section>

      {/* 5. خطط الأسعار */}
      <h2 className="section-title" id="pricing">اشتراكات الجيم</h2>
      <div className="grid-container" style={{ marginBottom: '80px' }}>
        
        <div className="pricing-card">
          <h3>اشتراك شهر</h3>
          <div className="price">500 <span style={{ fontSize: '14px', color: '#aaa' }}>ج.م</span></div>
          <p style={{ color: '#aaa', lineHeight: '2' }}>• دخول مفتوح للجيم<br/>• حصة متابعة مع مدرب<br/>• دولاب خاص</p>
          <button className="btn-primary" style={{ width: '100%', marginTop: '20px' }}>اشترك الآن</button>
        </div>

        <div className="pricing-card popular">
          <span className="badge">الأكثر طلباً 🔥</span>
          <h3>اشتراك 3 شهور</h3>
          <div className="price">1200 <span style={{ fontSize: '14px', color: '#aaa' }}>ج.م</span></div>
          <p style={{ color: '#aaa', lineHeight: '2' }}>• كافة مميزات الشهر<br/>• نظام غذائي مخصص<br/>• قياس InBody شهرياً</p>
          <button className="btn-primary" style={{ width: '100%', marginTop: '20px' }}>اشترك الآن</button>
        </div>

        <div className="pricing-card">
          <h3>اشتراك سنوي</h3>
          <div className="price">3800 <span style={{ fontSize: '14px', color: '#aaa' }}>ج.م</span></div>
          <p style={{ color: '#aaa', lineHeight: '2' }}>• دخول 24/7 طوال السنة<br/>• كابتن خاص لمدة شهر<br/>• خدمة الساونا مجاناً</p>
          <button className="btn-primary" style={{ width: '100%', marginTop: '20px' }}>اشترك الآن</button>
        </div>

      </div>

      <footer style={{ textAlign: 'center', padding: '25px', borderTop: '1px solid #222', color: '#666', fontSize: '14px' }}>
        © 2026 TITANS GYM. جميع الحقوق محفوظة.
      </footer>
    </div>
  );
}