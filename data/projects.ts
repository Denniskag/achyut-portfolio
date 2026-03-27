export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  achievements: string[];
  image: string;
  github?: string;
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  // ── Featured Projects ──────────────────────────────────────────────
  {
    id: "mit-bitcoin-expo",
    title: "Fraud detection in Mobile Money Transactions using differentially Private Machine learning Techniques",
    description:
      "Privacy preserving fraud detection for mobile money using machine learning and differential privacy.",
    longDescription:
      "Developed and implemented fraud detection models for mobile money transactions using synthetic datasets, applying machine learning techniques to identify suspicious patterns and anomalies. Incorporated differential privacy methods to preserve data confidentiality while maintaining model performance, ensuring data protection standards.",
    technologies: [
      "Python",
      "IBM Diffpriv library",
      "Data Privacy",
      "Machine learning",
      "Logistic Regression",
      "Gaussian Naive Bayes",
      "Decision Trees",
      "Random Forest",
    ],
    achievements: [
      "Trained and compared multiple machine learning models including Logistic Regression, Gaussian Naive Bayes, Decision Trees, and Random Forest for fraud detection in mobile money transactions.",
      "Integrated differential privacy into the modeling pipeline using IBM Diffprivlib to ensure data confidentiality during model training and evaluation",
      "Evaluated model performance using metrics such as Matthews Correlation Coefficient (MCC), accuracy, precision, recall, F1-score, ROC curve, and AUC.",
      "Quantified the trade offs between data privacy and model utility by analyzing how varying privacy budgets (epsilon values) impact model accuracy and overall performance.",
    ],
    image: "/images/projects/mit-bitcoin-expo/momo2.png",
    github: "https://github.com/Denniskag/Python-Project-for-Data-Science/blob/main/Fraud_detection_in_Mobile_Money_Transactions_using_differentially_Private_Machine_learning_Techniques.ipynb",
    //liveUrl: "https://mitbitcoinexpo.org",
    featured: true,
  },
  {
    id: "skillbridge-ai",
    title: "Explainable Deep Ensemble Learning for Improved Credit Default Prediction",
    description:
      "Designing deep learning ensemble frameworks for credit default prediction and integrating SHAP and LIME methods to provide interepretable and explainable AI insights.",
    longDescription:
      "Designed a deep ensemble learning framework combining ANN, RNN, LSTM, and GRU models, with Logistic Regression as the meta-learner. Addressed class imbalance using SMOTETomek and enhanced model interpretability through SHAP and LIME.",
    technologies: [
      "Python",
      "Seaborn",
      "Tensorflow",
      "Keras",
      "SMoteTomek",
      "Scikit-learn",
      "SHAP",
      "LIME",
      "Deep learning",
      "Matplotlib",
      "Pandas",
    ],
    achievements: [
      "Developed a robust deep ensemble model integrating ANN, RNN, LSTM, and GRU, improving predictive performance and model stability.",
      "Implemented Logistic Regression as a meta learner to effectively combine base model outputs and boost overall accuracy.",
      "Addressed class imbalance using SMOTETomek, resulting in improved recall and balanced classification performance.",
      "Applied SHAP and LIME to enhance model interpretability, enabling clear insights into feature importance and decision making.",
    ],
    image: "/images/projects/skillbridge-ai/money.jpg",
    github: "https://nbviewer.org/github/Denniskag/Python-Project-for-Data-Science/blob/main/Explainable_Deep_Ensemble_Learning_for_Improved_Credit_Default_Prediction.ipynb",
    featured: true,
  },
  {
    id: "optimum-hacknet",
    title: "Traffic monitoring tool using deep learning",
    description:
      "Developed a vehicle classification system using annotated traffic video data, implementing ResNet, MobileNet, and GoogLeNet to detect saloon cars and motorcycles..",
    longDescription:
      "Identified saloon cars and motorcycles from the Nakawa traffic monitoring video dataset through image extraction and annotation. Implemented and compared deep learning models including ResNet, MobileNet, and GoogLeNet for vehicle classification.",
    technologies: [
      "Python",
      "Computer Vision",
      "Deep learning",
      "CNN",
      "YOLO",
      "OpenCV",
      "CVATT",
      "Tensorflow",
    ],
    achievements: [
      "Extracted and annotated traffic images from video data to build a labeled dataset for vehicle and motorcycle classification.",
      "Developed and trained multiple CNN architectures (ResNet, MobileNet, GoogLeNet) for accurate detection of saloon cars and motorcycles.",
      "Evaluated and compared model performance to identify the most efficient architecture for real-world deployment.",
      "Improved classification accuracy through data preprocessing and optimization techniques.",
    ],
    image: "/images/projects/optimum-hacknet/traffic.jpg",
    github: "https://github.com/Denniskag/Computer-vision-exam",
    featured: true,
  },

  // ── Other Projects ─────────────────────────────────────────────────
  {
    id: "payguard-ai",
    title: "Wildlife Classification Web App Using Machine Learning",
    description:
      "Developed and deployed a machine learning model to classify animal species in a national park, enabling automated wildlife identification through a user-friendly web application..",
    longDescription:
      "This project involves building a machine learning model to classify animal species using image data from a national park. The model was trained and evaluated to achieve reliable performance in identifying different animals. To make the solution practical, the model was deployed as a web application that allows users to upload images and receive real-time predictions, supporting wildlife monitoring and conservation efforts.",
    technologies: [
      "Python",
      "TensorFlow",
      "Keras",
      "Scikit-learn",
      "Streamlit",
      "OpenCV",
      //"Pera Wallet",
      //"Tailwind CSS",
      //"shadcn/ui",
      //"Blockchain",
    ],
    achievements: [
      "Built a robust image classification model capable of identifying multiple animal species with high accuracy",
      "Successfully deployed the model as an interactive web application for real-time use",
      "Improved model performance through effective data preprocessing and augmentation",
      "Designed a simple and intuitive user interface for ease of use",
    ],
    image: "/images/projects/payguard-ai/wildlife.jpg",
    github: "https://drive.google.com/file/d/1tGg2MDbNy1WpBRizXVCiVD1HBizdQ8cD/view",
    featured: false,
  },
  {
    id: "skillswap",
    title: "Gender-Based Violence Dashboard in Power BI",
    description:
      "Designed an interactive Power BI dashboard to analyze and visualize gender-based violence (GBV) data for better insights and decision-making..",
    longDescription:
      "This project involved developing a Power BI dashboard to analyze gender-based violence data. The dashboard provides clear visualizations of key trends, patterns, and risk factors, enabling stakeholders to better understand and respond to GBV issues.It includes interactive features that allow users to explore data by different categories such as location, time, and type of violence.",
    technologies: [
      "Power BI",
      "Power Query",
      "DAX",
      //"MongoDB",
      //"HTML5",
      //"CSS",
      //"JWT",
      //"REST API",
      //"Vercel",
    ],
    achievements: [
      "Built an interactive dashboard to visualize GBV trends and patterns",
      "Enabled data-driven insights through dynamic filtering and drill-down features",
      "Transformed raw data into clear, actionable visual reports",
      "Improved accessibility of insights for non-technical stakeholders",
    ],
    image: "/images/projects/skillswap/VIOLENCE.jpg",
    github: "https://drive.google.com/file/d/1tGg2MDbNy1WpBRizXVCiVD1HBizdQ8cD/view",
    liveUrl: "https://skill-swap-nine-sable.vercel.app/",
    featured: false,
  },
  {
    id: "collaborative-docs",
    title: "Sentiment Analysis Model for Text Classification",
    description:
      "Developed a machine learning model to classify text into positive, neutral, or negative sentiments.",
    longDescription:
      "This project involved building a sentiment analysis model to classify textual data into positive, neutral, or negative categories. The model was trained on labeled text data and evaluated to ensure accurate sentiment prediction. The solution includes text preprocessing techniques such as tokenization and vectorization to improve  model performance and handle real-world text data effectively.",
    technologies: [
      "Python",
      "Scikit-learn",
      "NLTK",
      "SpaCy",
      "Pandas",
      "TF-IDF",
      "Count Vectorizer",
      //"Kubernetes",
      //"Helm",
      //"GitHub Actions",
      //"TipTap",
    ],
    achievements: [
      "Built a text classification model for multi-class sentiment prediction",
      "Applied natural language processing techniques to clean and prepare text data",
      "Achieved reliable performance in distinguishing between positive, neutral, and negative sentiments",
      "Deployed the model on  a web app(streamlit)",
    ],
    image: "/images/projects/collaborative-docs/sentiment.webp",
    github: "https://github.com/Denniskag/Sentiment-Analysis",
    featured: false,
  },
  {
    id: "zenith",
    title: "Interpretable ML Model for Premium Subscription Classification",
    description:
      "Developed an interpretable machine learning model to classify premium subscription users using LIME and multiple classification algorithms.",
    longDescription:
      "This project involved building a classification model to predict premium subscription uptake using algorithms such as Decision Trees, Random Forest, and XGBoost. To enhance transparency, LIME was applied to explain individual predictions and provide insights into key factors influencing the model’s decisions. The solution helps stakeholders understand not just predictions, but also the reasoning behind them.",
    technologies: [
      "Python",
      "Scikit-learn",
      "XGBoost",
      "LIME",
      "Pandas",
      "Decision Trees",
      "Random Forest",
      //"Smart Contracts",
      //"Web3.js",
      //"Blockchain",
    ],
    achievements: [
      "Built and compared multiple classification models (Decision Tree, Random Forest, XGBoost)",
      "Applied LIME to generate interpretable explanations for model predictions",
      "Identified key features driving premium subscription behavior",
      "Improved model transparency and trust for decision-making",
    ],
    image: "/images/projects/zenith/premium.jpg",
    github: "https://github.com/achyut21/zenith",
    liveUrl: "https://devfolio.co/projects/zenith-202e",
    featured: false,
  },
  {
    id: "pokearena",
    title: "Road Accident Survey Analysis in Kampala",
    description:
      "Conducted data analysis on a survey of road accidents in Kampala to uncover trends and key risk factors.",
    longDescription:
      "This project involved analyzing survey data on road accidents in Kampala to identify patterns, causes, and high-risk factors. The analysis focused on extracting meaningful insights to support road safety improvements and inform policy or intervention strategies.Data cleaning, exploration, and visualization techniques were applied to transform raw survey data into actionable insights..",
    technologies: [
      "Python",
      //"Aptos",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      //"Node.js",
      //"Express",
      //"TailwindCSS",
      //"Three.js",
      //"MongoDB",
      //"Blockchain",
    ],
    achievements: [
      "Analyzed survey data to identify major causes and trends in road accidents",
      "Highlighted key risk factors such as location, time, and driver behavior",
      "Created clear visualizations to communicate findings effectively",
      "Provided insights to support data-driven road safety interventions",
    ],
    image: "/images/projects/pokearena/road.jpg",
    github: "https://github.com/Denniskag/Road-Accidents/blob/main/Road_Analysis_final_copy.ipynb",
    featured: false,
  },
  {
    id: "lightning-time",
    title: "Explainable Churn Prediction Model Using SHAP & LIME",
    description:
      "Developed an explainable machine learning model to predict customer churn using XGBoost with SHAP and LIME for interpretability.",
    longDescription:
      "This project involved building a churn prediction model using XGBoost to identify customers likely to leave a service. To enhance transparency, SHAP and LIME were applied to explain both global and individual model predictions.The approach enables stakeholders to understand key drivers of churn and supports more informed, data-driven retention strategies.",
    technologies: [
      "Python",
      "XGBoost",
      "SHAP",
      "LIME",
      "Pandas",
      "NumPy",
      //"Node.js",
      //"Express",
      //"TailwindCSS",
      //"Ethers.js",
      //"Blockchain",
    ],
    achievements: [
      "Built a high-performance churn prediction model using XGBoost",
      "Applied SHAP for global feature importance and model interpretability",
      "Used LIME to explain individual customer predictions",
      "dentified key factors influencing customer churn to guide retention efforts",
    ],
    image: "/images/projects/lightning-time/churn2.jpg",
    github: "https://www.kaggle.com/code/denniskag/explainable-churn-prediction-with-shap-lime",
    liveUrl: "https://devpost.com/software/lightning-time",
    featured: false,
  },
  {
    id: "infinitus",
    title: "The Simpsons Image Classification Using CNNs in PyTorch",
    description:
      "Developed a convolutional neural network (CNN) model in PyTorch to classify characters from The Simpsons..",
    longDescription:
      "This project involved building an image classification model using Convolutional Neural Networks (CNNs) in PyTorch to identify characters from the TV show The Simpsons. The model was trained on labeled image data and optimized to achieve accurate character recognition.he project demonstrates the application of deep learning techniques for image classification tasks.",
    technologies: [
      "Python",
      "PyTorch",
      "Torchvision",
      "NumPy",
      "Matplotlib",
      //"Express",
      //"MongoDB",
      //"Razorpay",
      //"Redux",
      //"Framer Motion",
    ],
    achievements: [
      "Built a CNN-based image classification model using PyTorch",
      "Achieved strong performance in classifying multiple characters",
      "Applied image preprocessing and augmentation techniques to improve accuracy",
    ],
    image: "/images/projects/infinitus/simpsons.webp",
    github: "https://nbviewer.org/github/Denniskag/Python-Project-for-Data-Science/blob/main/simpsons%20pytorch%20classification.ipynb",
    featured: false,
  },
  {
    id: "billrewards",
    title: "Employee Attrition Prediction Using Decision Trees",
    description:
      "Developed a machine learning model to predict employee attrition using Decision Trees, helping HR make data-driven retention decisions.",
    longDescription:
      "This project involved building a Decision Tree model to predict which employees are likely to leave an organization. The model was trained on HR datasets containing employee demographics, performance, and work-related features, enabling proactive retention strategies The approach emphasizes interpretability, allowing HR teams to understand key factors influencing attrition. ",
    technologies: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "Decision Trees",
      "Matplotlib",
      "Seaborn",
      "NumPy",
      //"MongoDB",
      //"Tesseract.js",
      //"OCR Technology",
      //"Blockchain",
    ],
    achievements: [
      "Built a Decision Tree model for predicting employee attrition",
      "Identified key features driving attrition, such as job satisfaction and tenure",
      "Provided actionable insights to support HR retention strategies",
      "Enabled data-driven decision-making for workforce management",
    ],
    image: "/images/projects/billrewards/employee.jpg",
    github: "https://github.com/Denniskag/Python-Assignment/blob/main/Employee_Attrition%20(1).ipynb",
    liveUrl: "https://devpost.com/software/billrewards",
    featured: false,
  },
  {
    id: "byteroot",
    title: "Diabetes Prediction Using Machine Learning Algorithms",
    description:
      "Developed a machine learning system to predict the presence or absence of diabetes using multiple algorithms including SVM, KNN, Naive Bayes, Logistic Regression, Decision Trees, and Random Forest.",
    longDescription:
      "This project involved building predictive models to classify patients as diabetic or non-diabetic using a variety of machine learning algorithms. The models were trained and evaluated on patient health data, allowing for accurate and early identification of diabetes risk. Multiple algorithms were implemented to compare performance and select the most effective approach for reliable predictions.",
    technologies: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "SVM",
      "KNN",
      "Naive Bayes",
      "Logistic Regression",
      "Decsion Trees",
      "Random Forest",
    ],
    achievements: [
      "Built and compared multiple ML models: SVM, KNN, Naive Bayes, Logistic Regression, Decision Trees, and Random Forest",
      "Achieved reliable prediction accuracy for diabetes detection",
      "dentified key health factors contributing to diabetes risk",
    ],
    image: "/images/projects/byteroot/diabetes.webp",
    github: "https://github.com/Denniskag/Python-Assignment/blob/main/Machine_Learning_Exam.ipynb",
    featured: false,
  },
  {
    id: "cryptovault-ipfs",
    title: "Building Insurance Claim Prediction Using Machine Learning",
    description:
      "Developed machine learning models to predict whether a building will have an insurance claim based on its characteristics, using SVM, Linear Regression, KNN, and Naive Bayes.",
    longDescription:
      "This project involves building predictive models to determine the likelihood of an insurance claim for a building during a specific period. Models were trained on building characteristic data and evaluated using the Area Under the Curve (AUC) metric to ensure accurate performance. The approach helps insurance providers assess risk and make informed underwriting decisions.",
    technologies: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "SVM",
      "Linear Regression",
      "KNN",
      "Naive Bayes",
    ],
    achievements: [
      "Built predictive models using SVM, Linear Regression, KNN, and Naive Bayes",
      "Evaluated model performance using AUC for reliable prediction",
      "Identified key building features influencing insurance claims",
      "Provided data-driven insights to support risk assessment and underwriting",
    ],
    image: "/images/projects/cryptovault-ipfs/insurance1.webp",
    github: "https://github.com/Denniskag/Python-Assignment/blob/main/ML_Assignment_3.ipynb",
    featured: false,
  },
  {
    id: "neunotes",
    title: "NeuNotes",
    description:
      "A comprehensive academic notes sharing platform facilitating knowledge exchange among students and faculty.",
    longDescription:
      "Designed and developed NeuNotes, a collaborative platform for sharing academic content with role-based access control. Features course organization, notes upload/preview, search, ratings, comments, and analytics dashboards.",
    technologies: [
      "MySQL",
      "React",
      "Vite",
      "Node.js",
      "Express",
      "TailwindCSS",
      "Zustand",
      "Axios",
      "Multer",
      "Bcrypt",
      "REST API",
    ],
    achievements: [
      "Built a comprehensive platform with role-based access for students, faculty, and admins",
      "Implemented a sophisticated database structure with 12 tables, stored procedures, and triggers",
      "Created a full-featured notes management system with ratings, comments, and favorites",
      "Developed an intuitive UI for browsing, uploading, and managing academic content",
    ],
    image: "/images/projects/neunotes/neunotes.webp",
    github: "https://github.com/achyut21/neunotes",
    featured: false,
  },
  {
    id: "noteit",
    title: "NoteIT",
    description:
      "A mobile app for sharing and accessing study notes and resources with social features and gamification.",
    longDescription:
      "Developed NoteIT, an Android mobile application that allows students to share and access study notes. Features user authentication, PDF uploading/downloading, badge rewards for engagement, and an intuitive navigation system.",
    technologies: ["Android Studio", "Java", "Firebase", "Material Design", "XML"],
    achievements: [
      "Created 9 activities and 4 fragments for comprehensive app functionality",
      "Implemented secure user authentication and data storage with Firebase",
      "Designed an engaging user interface with gamification elements like badges",
      "Built a robust PDF upload and retrieval system for educational resources",
    ],
    image: "/images/projects/noteit/noteit.webp",
    github: "https://github.com/Achyut21/Note_IT-Note-sharing-APP-",
    featured: false,
  },
];
