// data/experience.ts
export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
  type?: "work" | "research" | "education" | "leadership";
}

export const experiences: Experience[] = [
  // ── Current Roles ──────────────────────────────────────────────────
  {
    id: "mit-bitcoin-expo",
    title: "Data Analyst",
    company: "Volcafe Uganda",
    location: "Kampala, Uganda",
    startDate: "May 2024",
    endDate: "Present",
    description:
      "Apply data driven approaches to enhance supply chain transparency, traceability, and compliance, analyzing farmer and production data, supporting regulatory frameworks like the EU Deforestation Regulation (EUDR), and generating insights that improve sustainability, operational efficiency, and decision-making across the coffee value chain. .",
    achievements: [
      "Led the development of a robust coffee traceability system, enabling end to end tracking from farm to export in compliance with the EU Deforestation Regulation, thereby enhancing supply chain transparency and efficiency.",
      "Developed analytical workflows using Excel, SQL, and Power BI to examine farmer, transaction, and supply chain data, identifying trends, anomalies, and operational risks that supported decision making across insights and operations teams. ",
      "Built and maintained interactive dashboards and KPI monitoring frameworks in Power BI, integrating field and operational data to provide real time visibility into supply chain performance, farmer engagement, and sustainability risk indicators.",
      "Managed and validated datasets covering 50,000+ farmers, implementing structured data cleaning, validation, and quality control processes to ensure high data integrity for reporting, analytics, and regulatory compliance.",
    ],
    type: "work",
  },
  {
    id: "ta-cs2000",
    title: "IT Systems Technician",
    company: "Ruparelia Group",
    location: "Kampala, Uganda",
    startDate: "September 2022",
    endDate: "September 2023",
    description:
      "Managed and optimized surveillance systems to enhance security operations, combining technical problem solving with clear communication to support effective decision-making..",
    achievements: [
      "Designed, configured, and installed analog and digital surveillance systems",
      "Monitored and documented system performance, generated incident reports, and offered strategic recommendations for surveillance enhancements.",
      "Independently resolved 95% of field technical issues and bridged communication gaps by delivering clear, actionable findings to non-technical stakeholders",
    ],
    type: "work",
  },

  // ── Previous Work Experience ───────────────────────────────────────
  {
    id: "full-stack-dev",
    title: "Data Analytics Consulting Graduate Trainee",
    company: "KPMG",
    location: "Remote",
    startDate: "May 2022",
    endDate: "March 2023",
    description:
      "Delivered data quality and analytics support by assessing datasets, identifying risks and inconsistencies, and generating insights to inform client decision-making and business improvements..",
    achievements: [
      "Conducted a structured data quality assessment identifying data inconsistencies, profiling issues, and missing values using KPMG approved frameworks.",
      "Produced a detailed assessment report highlighting process observations, data quality risks, and recommended remediation strategies.",
      "Derived meaningful insights from raw datasets using analytical techniques to support client decision making objectives and business goals.",
      //"Achieved 75% grading accuracy improvement and 50% evaluation efficiency boost through workflow automation",
    ],
    type: "work",
  },
  

  // ── Research ───────────────────────────────────────────────────────
  {
    id: "ddos-detection",
    title: "Fraud detection in mobile money transactions using Differentially private machine learning Techniques",
    company: "Makerere University",
    location: "Kampala Uganda",
    startDate: "May 2024",
    endDate: "December 2025",
    description:
      "Developed privacy-preserving machine learning models by integrating differential privacy into supervised algorithms, including Gaussian Naive Bayes, Logistic Regression, Decision Trees, and Random Forest, using synthetic mobile money transaction data and the IBM Diffpriv library to ensure robust data protection.",
    achievements: [
      "Designed and implemented privacy-preserving machine learning models for mobile money fraud detection using Logistic Regression, Gaussian Naive Bayes, Decision Trees, and Random Forest with IBM Diffprivlib.",
      "Trained and optimized models on transaction data to improve fraud detection accuracy while maintaining strong privacy guarantees.",
      "Evaluated model performance using metrics such as MCC, accuracy, precision, recall, F1-score, ROC, and AUC to ensure reliability and robustness.",
      "Quantified the trade-off between data privacy and utility by analyzing the impact of varying privacy budgets (epsilon) on model performance.",
    ],
    type: "research",
  },
  {
    id: "education-prediction",
    title: "Explainable Deep Ensemble Learning for Improved Credit default prediction",
    company: "Makerere University",
    location: "Kampala Uganda",
    startDate: "January 2024",
    endDate: "December 2022",
    description:
      "Developed an explainable deep learning ensemble model for fraud prediction by addressing class imbalance, combining multiple neural network architectures, and enhancing model transparency using interpretability techniques.",
    achievements: [
      "Resolved class imbalance in the dataset using SMOTETomek to improve model performance and reliability.",
      "Built a stacking ensemble model combining ANN, RNN, LSTM, and GRU with Logistic Regression as the meta-learner.",
      "Improved predictive performance by leveraging deep learning architectures tailored for complex pattern recognition.",
      "Enhanced model interpretability and transparency using SHAP and LIME to explain predictions and support decision-making.",
    ],
    type: "research",
  },

  // ── Leadership ─────────────────────────────────────────────────────
  {
    id: "technical-executive",
    title: "Development of a Low Power face recognition system",
    company: "National Institute of Technology Meghalaya",
    location: "Meghalaya, India",
    startDate: "May 2020",
    endDate: "May 2021",
    description:
      "Developed an automated attendance system using computer vision to accurately capture, verify, and record student attendance in real time, improving efficiency and security over manual methods.",
    achievements: [
      "Replaced manual attendance with a real-time computer vision-based system",
      "Implemented face detection and recognition for reliable student identification",
      "Integrated liveness detection to prevent spoofing using fake images",
      "Built an end-to-end solution using OpenMV Cam, Raspberry Pi, and a computer",
    ],
    type: "research",
  },
  {
    id: "technical-convener",
    title: "Data Analyst",
    company: "Volcafe Uganda",
    location: "Kampala Uganda",
    startDate: "May 2023",
    endDate: "May 2024",
    description:
      "Led the end-to-end design and implementation of a child labour survey, transforming raw field data into actionable insights to support social risk monitoring and decision-making in the coffee sector.",
    achievements: [
      "Designed and deployed a comprehensive survey framework, including data collection tools and methodologies tailored to field conditions.",
      "Trained field teams and stakeholders on data collection platforms, ensuring accurate and consistent data capture.",
      "Cleaned, validated, and managed large datasets to maintain high data quality and reliability.",
      "Conducted in-depth analysis and produced reports with actionable insights to inform interventions and policy decisions.",
    ],
    type: "leadership",
  },
  {
    id: "student-council-member",
    title: "Data Analyt",
    company: "Volcafe Uganda",
    location: "Kampala, Uganda",
    startDate: "May 2024",
    endDate: "May 2025",
    description:
      "Led data and analytics efforts in establishing EUDR compliance processes by building traceability systems, validating geospatial data, and enabling data-driven sustainability practices.",
    achievements: [
      "Spearheaded data collection and validation processes, including verification of farm-level and geospatial (polygon) data for compliance.",
      "Collaborated with developers to design and implement a traceability system for tracking coffee across the supply chain.",
      "Established data quality frameworks to ensure accuracy, consistency, and compliance with EUDR requirements.",
      "Generated insights and dashboards to support decision-making, risk assessment, and sustainability reporting.",
    ],
    type: "leadership",
  },
];
