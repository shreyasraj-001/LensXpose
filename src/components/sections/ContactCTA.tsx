import { useState } from 'react';
import { PrimaryButton } from '../ui/Button';

const SEGMENTS = ['Corporate', 'Creator', 'Wedding', 'Events'];
const BUDGETS = ['₹50K – ₹1.5L', '₹1.5L – ₹5L', '₹5L – ₹15L', '₹15L+'];

export function ContactCTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    segment: '',
    budget: '',
    date: '',
    narrative: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Future: POST to Sanity or webhook
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-24 md:py-40 px-6 md:px-12 relative overflow-hidden border-t border-white/[0.06]" id="contact">
      {/* Background Radial */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_100%,rgba(217,164,65,0.06)_0%,transparent_60%)]" />

      <div className="relative z-10 max-w-[900px] mx-auto">
        {/* Header — Centered */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-6 h-px bg-[#D9A441]" />
            <span className="font-body text-[10px] tracking-[0.28em] uppercase text-[#D9A441]">
              Begin Your Story
            </span>
            <div className="w-6 h-px bg-[#D9A441]" />
          </div>
          <h2 className="font-display text-[clamp(40px,6vw,72px)] font-light text-[#F7F5F2] leading-none mb-6">
            Your story<br />deserves <em className="text-[#D9A441]">more</em><br />than a camera.
          </h2>
          <p className="font-body text-[14px] font-light text-[#6B7280] leading-[1.7] max-w-[480px] mx-auto">
            Let's build something that lives beyond a gallery. Start with a conversation — no pressure, just possibility.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="name"
            type="text"
            placeholder="Your full name"
            value={formData.name}
            onChange={handleChange}
            className="form-field"
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            className="form-field"
            required
          />
          <select
            name="segment"
            value={formData.segment}
            onChange={handleChange}
            className="form-field appearance-none"
            required
          >
            <option value="" disabled>Project segment</option>
            {SEGMENTS.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="form-field appearance-none"
            required
          >
            <option value="" disabled>Budget envelope</option>
            {BUDGETS.map(b => <option key={b} value={b}>{b}</option>)}
          </select>
          <input
            name="date"
            type="date"
            placeholder="Event date"
            value={formData.date}
            onChange={handleChange}
            className="form-field"
          />
          <div className="md:col-span-1" />
          <textarea
            name="narrative"
            placeholder="Tell us about your story — what matters most to you?"
            value={formData.narrative}
            onChange={handleChange}
            rows={4}
            className="form-field md:col-span-2 resize-none"
          />

          {/* Actions */}
          <div className="md:col-span-2 flex flex-col sm:flex-row items-center justify-center gap-5 mt-6">
            <PrimaryButton type="submit">Book a Free Consultation</PrimaryButton>
            <a
              href="https://wa.me/918789157800"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 font-body text-[11px] tracking-[0.14em] uppercase px-9 py-4 border border-[#25D366]/35 text-[#25D366]/80 hover:border-[#25D366]/70 hover:text-[#25D366] transition-all duration-300 hover-target"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactCTA;
