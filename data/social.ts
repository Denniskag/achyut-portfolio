export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
}

export const socialLinks: SocialLink[] = [
  {
    id: "github",
    name: "GitHub",
    url: "https://github.com/Denniskag",
    icon: "github",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/kagaba-dennis-b56853176/",
    icon: "linkedin",
  },
  {
    id: "email",
    name: "Email",
    url: "mailto:denniskag@gmail.com",
    icon: "mail",
  },
  {
    id: "phone",
    name: "Phone",
    url: "tel:+256709255442",
    icon: "phone",
  },
];
