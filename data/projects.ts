export interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
  status?: string;
  image: string;
}

export const projects: Project[] = [
  {
    title: "Car Import Margin Analyzer",
    description: "AI tool computing post-import margins and tax for EU→NL car imports; ingests 10M+ listings/day from 13 countries; ML pricing model.",
    tech: ["React", "ML", "AI"],
    link: "https://carimport-frontend-sage.vercel.app/",
    github: "https://github.com/coendewith/carimport-frontend",
    image: "/images/projects/carimport.png",
  },
  {
    title: "Cyrcl.app",
    description: "In-person networking app with photo-verified connections using facial recognition; shared Memories gallery and private messaging.",
    tech: ["React Native", "Expo", "Python", "Flask"],
    link: "https://www.cyrcl.app/",
    image: "/images/projects/cyrcl.png",
  },
  {
    title: "CreateMap.App",
    description: "Custom map generation and purchase platform using React, FastAPI, Stripe, and Printify.",
    tech: ["React", "FastAPI", "Stripe", "Printify"],
    link: "http://createmap.app/",
    image: "/images/projects/createmap.png",
  },
  {
    title: "FakeNewsQuiz.com",
    description: "Quiz app for verifying facts using React, Supabase, and Python.",
    tech: ["React", "Supabase", "Python"],
    link: "https://fakenewsquiz-4g7w45aj1-coendewiths-projects.vercel.app/",
    image: "/images/projects/fakenews.png",
  },
  {
    title: "FlitsApps.nl",
    description: "Price tracker for quick grocery apps (Flink, Getir, Gorillas).",
    tech: ["JavaScript"],
    link: "http://flitsapps.nl",
    status: "Discontinued",
    image: "/images/projects/flitsapps.png",
  },
  {
    title: "Competitor Market Modeling",
    description: "Predictive model for Uber Eats’ market share.",
    tech: ["Jupyter Notebook", "Python"],
    github: "https://github.com/coendewith/Market-Modeling-Analysis/tree/main",
    image: "/images/projects/market_modeling.png",
  },
  {
    title: "Weather Prediction Dashboard",
    description: "Built using Google Sheets API, updates automatically.",
    tech: ["Google Sheets API"],
    link: "https://docs.google.com/spreadsheets/d/1KuEZgfBt3Rflyw-j-m9BgHTfwuNYt-AHUplVLjV80ac/edit?usp=sharing",
    image: "/images/projects/weather_dashboard.png",
  },
  {
    title: "Netherlands Precipitation Tracker",
    description: "Automated script for hourly updates of precipitation data across major Dutch cities into a Google Sheet.",
    tech: ["Python"],
    github: "https://github.com/coendewith/Netherlands-Precipitation-Tracker",
    image: "/images/projects/precipitation_tracker.png",
  },
];
