export const navigation = {
  brand: 'POWERMITT CONSULTING',
  links: [
    { label: 'Home', path: '/' },
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
    {
      label: 'Industries',
      path: '/industries',
      dropdown: [
        { label: 'All Industries', path: '/industries', description: 'Sectors we serve' },
        { label: 'Oil & Gas', path: '/industries/oil-gas', description: 'Offshore, LNG & processing' },
        { label: 'Mining & Resources', path: '/industries/mining-resources', description: 'Surface & underground mining' },
        { label: 'Energy & Utilities', path: '/industries/energy-utilities', description: 'Renewables, grid & BESS' },
        { label: 'Industrial Infrastructure', path: '/industries/industrial', description: 'Manufacturing & heavy industry' }
      ]
    },
    { label: 'Projects', path: '/projects' },
    { label: 'Energy Transition', path: '/energy-transition' },
    { label: 'Contact', path: '/contact' }
  ],
  cta: { label: 'Discuss a Project', path: '/contact' }
};
