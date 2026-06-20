export default {
  name: 'project',
  title: 'Cinematic Project',
  type: 'document',
  fields: [
    { name: 'clientName', title: 'Client Name', type: 'string' },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: { list: ['Corporate', 'Creators', 'Weddings', 'Events'] },
    },
    { name: 'description', title: 'Description', type: 'text' },
    { name: 'deliverables', title: 'Project Deliverables', type: 'array', of: [{ type: 'string' }] },
    { name: 'photos', title: 'Gallery Photos', type: 'array', of: [{ type: 'image' }] },
    { name: 'videoUrl', title: 'Video Embed URL (YouTube/Vimeo)', type: 'url' },
    { name: 'results', title: 'Results / Impact Metrics', type: 'string' },
  ],
};
