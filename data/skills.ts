// data/skills.ts
export type SkillCategory =
  | "Languages"
  | "Frameworks/Libraries"
  | "Data Analysis / BI Tools"
  //| "Blockchain/Web3"
  //| "Cloud/DevOps"
  | "Concepts";

export interface Skill {
  name: string;
  category: SkillCategory;
  logoKey: string; // Used to generate the CDN URL
}

export const skills: Record<SkillCategory, Skill[]> = {
  Languages: [
    //{ name: "C++", category: "Languages", logoKey: "cplusplus" },
    //{ name: "Java", category: "Languages", logoKey: "java" },
    { name: "Python", category: "Languages", logoKey: "python" },
    { name: "JavaScript", category: "Languages", logoKey: "javascript" },
    //{ name: "TypeScript", category: "Languages", logoKey: "typescript" },
    //{ name: "Dart", category: "Languages", logoKey: "dart" },
    //{ name: "Kotlin", category: "Languages", logoKey: "kotlin" },
    //{ name: "Solidity", category: "Languages", logoKey: "solidity" },
    { name: "SQL", category: "Languages", logoKey: "mysql" },
    //{ name: "Rust", category: "Languages", logoKey: "rust" },
    //{ name: "Go", category: "Languages", logoKey: "go" },
    //{ name: "Ruby", category: "Languages", logoKey: "ruby" },
    //{ name: "Swift", category: "Languages", logoKey: "swift" },
  ],
  "Frameworks/Libraries": [
    { name: "Pandas", category: "Frameworks/Libraries", logoKey: "pandas" },
    { name: "Numpy", category: "Frameworks/Libraries", logoKey: "numpy" },
    { name: "Scikit-learn", category: "Frameworks/Libraries", logoKey: "scikitlearn" },
    { name: "TensorFlow", category: "Frameworks/Libraries", logoKey: "tensorflow" },
    { name: "Pytorch", category: "Frameworks/Libraries", logoKey: "pytorch" },
    { name: "Matplotlib", category: "Frameworks/Libraries", logoKey: "matplotlib" },
    { name: "Seaborn", category: "Frameworks/Libraries", logoKey: "python" },
    { name: "NLTK", category: "Frameworks/Libraries", logoKey: "python" },
    { name: "spaCy", category: "Frameworks/Libraries", logoKey: "python" },
    { name: "Apache Spark", category: "Frameworks/Libraries", logoKey: "apachespark" },
    { name: "Hadoop", category: "Frameworks/Libraries", logoKey: "hadoop" },
    { name: "OpenCV", category: "Frameworks/Libraries", logoKey: "opencv" },
    { name: "Keras", category: "Frameworks/Libraries", logoKey: "keras" },
    //{ name: "Flutter", category: "Frameworks/Libraries", logoKey: "flutter" },
    //{ name: "React Native", category: "Frameworks/Libraries", logoKey: "react" },
  ],
  "Data Analysis / BI Tools": [
    { name: "Power BI", category: "Data Analysis / BI Tools", logoKey: "microsoft" },
    { name: "Tableau", category: "Data Analysis / BI Tools", logoKey: "tableau" },
    { name: "Microsoft Excel", category: "Data Analysis / BI Tools", logoKey: "microsoft" },
    { name: "Matplotlib", category: "Data Analysis / BI Tools", logoKey: "matplotlib" },
    { name: "Seaborn", category: "Data Analysis / BI Tools", logoKey: "python" },
    //{ name: "pandas", category: "Data Analysis / BI Tools", logoKey: "pandas" },
    //{ name: "scikit-learn", category: "Data Analysis / BI Tools", logoKey: "python" },
    //{ name: "Data Visualization", category: "Data Analysis / BI Tools", logoKey: "jupyter" },
  ],
  //"Blockchain/Web3": [
   // { name: "Web3.js", category: "Blockchain/Web3", logoKey: "javascript" },
    //{ name: "Ethers.js", category: "Blockchain/Web3", logoKey: "ethereum" },
    //{ name: "IPFS", category: "Blockchain/Web3", logoKey: "ipfs" },
    //{ name: "Polygon", category: "Blockchain/Web3", logoKey: "polygon" },
    //{ name: "Ethereum", category: "Blockchain/Web3", logoKey: "ethereum" },
    //{ name: "Aptos", category: "Blockchain/Web3", logoKey: "aptos" },
    //{ name: "Move", category: "Blockchain/Web3", logoKey: "aptos" },
    //{ name: "Smart Contracts", category: "Blockchain/Web3", logoKey: "solidity" },
  //],
  //"Cloud/DevOps": [
    //{ name: "AWS", category: "Cloud/DevOps", logoKey: "amazonwebservices" },
   // { name: "GCP", category: "Cloud/DevOps", logoKey: "googlecloud" },
   // { name: "Docker", category: "Cloud/DevOps", logoKey: "docker" },
    //{ name: "Kubernetes", category: "Cloud/DevOps", logoKey: "kubernetes" },
    //{ name: "Jenkins", category: "Cloud/DevOps", logoKey: "jenkins" },
   // { name: "Firebase", category: "Cloud/DevOps", logoKey: "firebase" },
   // { name: "MongoDB", category: "Cloud/DevOps", logoKey: "mongodb" },
   // { name: "PostgreSQL", category: "Cloud/DevOps", logoKey: "postgresql" },
  //],
  Concepts: [
    { name: "Machine Learning", category: "Concepts", logoKey: "github" },
    { name: "Deep Learning", category: "Concepts", logoKey: "github" },
    { name: "Natural Language Processing", category: "Concepts", logoKey: "github" },
    { name: "Feature Engineering", category: "Concepts", logoKey: "github" },
    { name: "Model Evaluation", category: "Concepts", logoKey: "github" },
    { name: "Explainable AI", category: "Concepts", logoKey: "github" },
    { name: "Data Visualization", category: "Concepts", logoKey: "github" },
    { name: "Data Privacy", category: "Concepts", logoKey: "github" }
  ],
};
