import { SecondaryButton } from "../ui/Button";
import blrImage from "../../../assests/photos/BLR-2.webp";
import CorporateBrandFilm from "../../../assests/photos/DSC07641.webp";
import Nightlife from "../../../assests/photos/DSC04011.webp";
// BLR-2.webp
const FEATURED_PROJECTS = [
  {
    id: 'arjun-priya',
    tag: 'Cinematic Candid Shoot',
    // title: 'Arjun & Priya — A Love Preserved in Light',
    image: blrImage,
    gradient: 'linear-gradient(145deg, #1a1208 0%, #0d0806 50%, #050505 100%)',
    span: true,
  },
  {
    id: 'novatech',
    tag: 'Brand Shoot',
    // title: 'Novatech — Redefining the Brand Voice',
    image: CorporateBrandFilm,
    gradient: 'linear-gradient(145deg, #0d1219 0%, #080d12 50%, #050505 100%)',
    span: false,
  },
  {
    id: 'riya-kapoor',
    tag: 'Nightlife Shoot',
    // title: 'Riya Kapoor — Content That Commands Attention',
    image: Nightlife,
    gradient: 'linear-gradient(145deg, #12100d 0%, #0a0a08 50%, #050505 100%)',
    span: false,
  },
];

export function FeaturedWork() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12" id="work">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-6 h-px bg-[#D9A441]" />
          <span className="font-body text-[10px] tracking-[0.28em] uppercase text-[#D9A441]">
            Featured Work
          </span>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <h2 className="font-display text-[clamp(36px,5vw,60px)] font-light leading-[1.05] tracking-[-0.02em] text-[#F7F5F2]">
            Where stories<br />find their form.
          </h2>
          <SecondaryButton>View All Projects</SecondaryButton>
        </div>

        {/* Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px]">
          {FEATURED_PROJECTS.map(project => (
            <div
              key={project.id}
              className={`work-card hover-target ${project.span ? 'md:row-span-2 min-h-[400px] md:min-h-[640px]' : 'min-h-[280px] md:min-h-[316px]'}`}
            >
              <div className="work-card-bg" style={{ backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundPosition: 'center', }} />
              <div className="film-grain" style={{ backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundPosition: 'center', }} />
              <div className="work-card-overlay" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10">
                <span className="font-body text-[9px] tracking-[0.22em] uppercase text-[#D9A441] block mb-2.5">
                  {project.tag}
                </span>
                <div className="font-display text-[clamp(20px,2.5vw,30px)] font-light text-[#F7F5F2] leading-[1.2]">
                  {project.title}
                </div>
                <div className="work-view font-body text-[10px] tracking-[0.18em] uppercase text-[#6B7280] mt-4 flex items-center gap-2 hover:text-[#D9A441] transition-colors">
                  View Project <span>→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedWork;
