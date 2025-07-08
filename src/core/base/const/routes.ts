export const BaseRoutes = {
  Home: '/',
  Dashboard: '/dashboard',
  Disclaimer: '/disclaimer',
  Summary: '/summary',
  Skills: '/skills',
  Certifications: '/certifications',
  Projects: '/projects',
  Experience: '/experience',
  Education: '/education',
};

export const MASTER_ROUTES = {
  BASE: '/master',
  SUMMARY: BaseRoutes.Summary,
  CREATE_SUMMARY: 'summary/create',
  EDIT_SUMMARY: 'summary/edit/:id',
  SKILLS: BaseRoutes.Skills,
  CREATE_SKILLS: 'skills/create',
  EDIT_SKILLS: 'skills/edit/:id',
  CERTIFICATIONS: BaseRoutes.Certifications,
  CREATE_CERTIFICATIONS: 'certifications/create',
  EDIT_CERTIFICATIONS: 'certifications/edit/:id',
  PROJECTS: BaseRoutes.Projects,
  CREATE_PROJECTS: 'projects/create',
  EDIT_PROJECTS: 'projects/edit/:id',
  EXPERIENCE: BaseRoutes.Experience,
  CREATE_EXPERIENCE: 'experience/create',
  EDIT_EXPERIENCE: 'experience/edit/:id',
  EDUCATION: BaseRoutes.Education,
  CREATE_EDUCATION: 'education/create',
  EDIT_EDUCATION: 'education/edit/:id',
};

export const ROUTES = {
  DEFAULT: '/',
  Dashboard: '/dashboard',
  WILD: '*',
  NOT_FOUND: '/notfound',
  ACCESS_DENIED: '/access-denied',
  MASTER: MASTER_ROUTES,
  LOGIN: '/login',
};
