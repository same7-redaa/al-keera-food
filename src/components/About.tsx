import React from 'react';
import { RESTAURANT_INFO } from '../data/restaurantInfo';
import { CheckCircle2, Award, Shield } from 'lucide-react';

export const About: React.FC = () => {
  const { aboutStory } = RESTAURANT_INFO;

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 lg:min-h-[85vh] flex items-center relative bg-[#F6F2EA] overflow-hidden scroll-mt-24">
      
      {/* Background Lights */}
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-[#A48F64]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Right Column: Visual Composite Imagery */}
          <div className="lg:col-span-6 relative reveal-scale">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden bg-white p-3 border border-[#A48F64]/30 shadow-xl">
                <div className="h-80 sm:h-96 rounded-2xl overflow-hidden bg-[#F5EFE6]">
                  <img
                    src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop"
                    alt="تحضير مشويات وطواجن الكيرة"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>
              </div>

              {/* Secondary Overlapping Image */}
              <div className="absolute -bottom-8 -left-6 sm:-left-8 w-44 sm:w-56 rounded-2xl overflow-hidden bg-white p-2 border border-[#A48F64]/40 shadow-2xl hidden sm:block">
                <div className="h-36 sm:h-44 rounded-xl overflow-hidden bg-[#F5EFE6]">
                  <img
                    src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop"
                    alt="طاجن ورق عنب بالكوارع الفاخر"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Experience Stamp */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-br from-[#A48F64] to-[#B8A378] text-white p-4 rounded-3xl shadow-xl border-2 border-white flex flex-col items-center text-center animate-float">
                <Award className="w-7 h-7 mb-1" />
                <span className="text-2xl font-black leading-none">+26</span>
                <span className="text-[10px] font-bold mt-0.5">عاماً من الخبرة</span>
              </div>

            </div>
          </div>

          {/* Left Column: Story Content */}
          <div className="lg:col-span-6 flex flex-col items-start reveal delay-100">
            
            {/* Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#241E17] leading-snug mb-4">
              {aboutStory.title}
            </h2>

            {/* Story Paragraphs */}
            <div className="space-y-4 text-sm sm:text-base text-[#5C5245] leading-relaxed mb-8 font-normal">
              {aboutStory.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* Check Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mb-8">
              {aboutStory.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#A48F64] flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#241E17] font-medium">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Commitment Box */}
            <div className="p-4 rounded-2xl bg-white border border-[#A48F64]/25 w-full flex items-center gap-4 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#F5EFE6] flex items-center justify-center text-[#A48F64] flex-shrink-0">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#241E17]">وعد الجودة والأمانة</h4>
                <p className="text-xs text-[#6B6255]">كل صينية وطاجن يخرج من مطبخنا نعده بأعلى معايير النظافة واللحوم البلدية الطازجة كأنه يُقدم لعائلتنا الخاصة.</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
