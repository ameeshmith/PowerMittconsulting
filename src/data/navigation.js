export const navigation = {
  brand: 'POWERMITT CONSULTING',
  links: [
    { label: 'About', path: '/about' },
    {
      label: 'Services',
      path: '/services',
      dropdown: [
        { label: 'All Services', path: '/services', description: 'Overview of all service areas' },
        { label: 'Electrical Power Systems', path: '/services/power-systems', description: 'Power system studies, design & grid integration' },
        { label: 'Renewable Energy & Decarbonisation', path: '/services/energy-transition', description: 'BESS, hydrogen, electrification & net-zero' },
        { label: 'Carbon Capture & Storage', path: '/services/carbon-capture', description: 'CCS electrical engineering support' },
        { label: 'Industrial & Mining Infrastructure', path: '/services/industrial-infrastructure', description: 'Mining electrical & industrial systems' },
        { label: "Owner's Engineering", path: '/services/owners-engineering', description: 'Independent technical advisory' }
      ]
    },
    { label: 'Projects', path: '/projects' },
    { label: 'Insights', path: '/insights' },
    { label: 'Contact', path: '/contact' }
  ],
  cta: { label: 'Discuss a Project', path: '/contact' }
};
