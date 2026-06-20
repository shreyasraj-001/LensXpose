export default {
  name: 'testimonial',
  title: 'Client Testimonials',
  type: 'document',
  fields: [
    { name: 'clientName', title: 'Client Name', type: 'string' },
    { name: 'designation', title: 'Designation / Company', type: 'string' },
    { name: 'review', title: 'Review Content', type: 'text' },
    { name: 'videoTestimonialUrl', title: 'Video Review URL', type: 'url' },
  ],
};
