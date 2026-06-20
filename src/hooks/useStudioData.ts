import { useState, useEffect } from 'react';
import { getSanityClient } from '../sanityClient';

// ─── MOCK DATA FOR FALLBACK ───
const MOCK_PROJECTS = [
  {
    _id: '1',
    clientName: 'Arjun & Priya',
    category: 'Weddings',
    description: 'A Love Preserved in Light — Destination wedding filmed across the palaces of Udaipur.',
    deliverables: ['Cinematic Film', '500+ Photos', 'Drone Coverage'],
    results: '2M+ views across social platforms',
  },
  {
    _id: '2',
    clientName: 'Novatech Solutions',
    category: 'Corporate',
    description: 'Redefining the Brand Voice — A complete visual identity overhaul for India\'s fastest-growing SaaS company.',
    deliverables: ['Brand Film', 'Product Showcase', 'Team Culture Video'],
    results: '3x website engagement increase',
  },
  {
    _id: '3',
    clientName: 'Riya Kapoor',
    category: 'Creators',
    description: 'Content That Commands Attention — Building a visual identity for a lifestyle creator with 820K+ followers.',
    deliverables: ['Instagram Reels', 'YouTube Shorts', 'Brand Photography'],
    results: '45% increase in engagement rate',
  },
];

const MOCK_TESTIMONIALS = [
  {
    _id: '1',
    clientName: 'Arjun & Priya Mehta',
    designation: 'Destination Wedding — Udaipur, 2024',
    review: 'LENSXPOSE didn\'t just film our wedding. They understood what it meant — and gave us something we\'ll spend a lifetime watching.',
    category: 'Wedding Film',
  },
  {
    _id: '2',
    clientName: 'Kiran Shah',
    designation: 'Founder, Novatech Solutions',
    review: 'Our brand film tripled our website engagement. The team understood our business before they ever picked up a camera.',
    category: 'Corporate Film',
  },
  {
    _id: '3',
    clientName: 'Riya Kapoor',
    designation: 'Lifestyle Influencer · 820K Followers',
    review: 'My content went from \'nice\' to magnetic. LENSXPOSE showed me what my brand could actually look like — then built it.',
    category: 'Creator Content',
  },
  {
    _id: '4',
    clientName: 'Deepa Nair',
    designation: 'CMO, Meridian Consumer Brands',
    review: 'Every frame from our product campaign told a story. Our conversion rate didn\'t just improve — it transformed.',
    category: 'Commercial',
  },
];

export interface Project {
  _id: string;
  clientName: string;
  category: string;
  description: string;
  deliverables: string[];
  results: string;
}

export interface Testimonial {
  _id: string;
  clientName: string;
  designation: string;
  review: string;
  category: string;
}

export interface StudioData {
  projects: Project[];
  testimonials: Testimonial[];
}

export function useStudioData() {
  const [studioData, setStudioData] = useState<StudioData>({
    projects: MOCK_PROJECTS,
    testimonials: MOCK_TESTIMONIALS,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const client = await getSanityClient();
        if (client) {
          const query = `{
            "projects": *[_type == "project"] | order(_createdAt desc),
            "testimonials": *[_type == "testimonial"]
          }`;
          const data = await client.fetch(query);
          if (data.projects?.length > 0) {
            setStudioData(data);
          }
        }
      } catch (error) {
        console.warn('Sanity fetch failed. Using mock data.', error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return { studioData, loading };
}
