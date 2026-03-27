export interface Achievement {
  id: string;
  title: string;
  icon: string;
  colorClass: string;
}

export const achievements: Achievement[] = [
  {
    id: "hacker-house",
    title: "Deep Learning with Pytorch: Zero to GANs",
    icon: "award",
    colorClass: "text-yellow-600 dark:text-yellow-400",
  },
  {
    id: "aptos",
    title: "DHIS2: Aggregate Data Analysis Fundamentals",
    icon: "award",
    colorClass: "text-blue-600 dark:text-blue-400",
  },
  {
    id: "optimum-hacknet",
    title: "Python for Data Science, AI & Development",
    icon: "award",
    colorClass: "text-orange-600 dark:text-orange-400",
  },
  {
    id: "hacksrm",
    title: "Data Visualisation using Python",
    icon: "award",
    colorClass: "text-green-600 dark:text-green-400",
  },
  {
    id: "appthon2",
    title: "Python for Machine Learning",
    icon: "award",
    colorClass: "text-purple-600 dark:text-purple-400",
  },
  {
    id: "appthon3",
    title: "Using Evidence to Improve Jobs and Income in Agriculture- World Bank Group",
    icon: "award",
    colorClass: "text-purple-600 dark:text-purple-400",
  },

];

export const achievementTags = ["Machine Learning", "Deep learning", "Data Science"];
