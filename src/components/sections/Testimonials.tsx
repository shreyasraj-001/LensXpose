import { Star } from 'lucide-react';
import { useStudioData } from '../../hooks/useStudioData';

export function Testimonials() {
  const { studioData } = useStudioData();

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-[#121212]" id="testimonials">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-6 h-px bg-[#D9A441]" />
          <span className="font-body text-[10px] tracking-[0.28em] uppercase text-[#D9A441]">
            Client Words
          </span>
        </div>
        <h2 className="font-display text-[clamp(36px,5vw,60px)] font-light leading-[1.05] tracking-[-0.02em] text-[#F7F5F2] mb-16">
          The story,<br />from those who lived it.
        </h2>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.06]">
          {studioData.testimonials.map(t => (
            <div key={t._id} className="testimonial-card hover-target">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="text-[#D9A441] fill-[#D9A441]" />
                ))}
              </div>

              {/* Quote */}
              <p className="font-display text-[20px] font-light italic text-[#F7F5F2] leading-[1.5] mb-7">
                "{t.review}"
              </p>

              {/* Divider */}
              <div className="w-8 h-px bg-[#D9A441]/25 mb-5" />

              {/* Attribution */}
              <div className="font-body text-[13px] font-medium text-[#F7F5F2]">
                {t.clientName}
              </div>
              <div className="font-body text-[11px] text-[#6B7280] mt-0.5">
                {t.designation}
              </div>

              {/* Category Tag */}
              <span className="inline-block mt-3 font-body text-[9px] tracking-[0.18em] uppercase px-2.5 py-1 border border-[#D9A441]/25 text-[#D9A441]">
                {t.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
