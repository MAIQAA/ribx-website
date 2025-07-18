// -- --------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------- NAVLINKS ---------------------------------------------------------

import { TbMessageChatbot } from "react-icons/tb";
import { MdOutlineGeneratingTokens } from "react-icons/md";
import { GiArtificialIntelligence } from "react-icons/gi";
import { CgWebsite } from "react-icons/cg";
import { MdOutlineRealEstateAgent } from "react-icons/md";

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  {
    label: "Services",
    dropdown: [
      { to: "/services/chatbot", label: "AI Chatbot", icon: TbMessageChatbot },
      {
        to: "/services/generative-development",
        label: "Generative AI Development",
        icon: MdOutlineGeneratingTokens,
      },
      {
        to: "/services/web-applications",
        label: "Web Application",
        icon: CgWebsite,
      },
      {
        to: "/services/machine-learning",
        label: "Machine Learning & Deep Learning",
        icon: GiArtificialIntelligence,
      },
      {
        to: "/services/tokenization",
        label: "Tokenization",
        icon: MdOutlineRealEstateAgent,
      },
    ],
  },
  { to: "/blog", label: "Blogs" },
  { to: "/contact", label: "Contact" },
];

// --------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------- HOME ----------------------------------------------------------

// ---------------------------------------------------------- WHY CHOOSE US SECTION

export const WhyChooseUs = [
  "Enterprise Ready",
  "Unlock Cross-Platform AI",
  "Startup Friendly",
  "Most Advanced Technology",
  "Cost-Effectiveness",
  "Scalable Solutions",
];

export const whyUsStats = [
  { id: 1, title: "10k", description: "Completed Projects" },
  {
    id: 2,
    title: "30",
    description: "Worldwide Branches",
  },
  {
    id: 3,
    title: "08",
    description: "Awards Winner",
  },
];

// ---------------------------------------------------------- SERVICES SECTION

export const servicesType = [
  {
    id: 1,
    title: "Data Analytics & Insights",
  },
  {
    id: 2,
    title: "AI Training & Workshops",
  },
  {
    id: 3,
    title: "Custom Software Development",
  },
  {
    id: 4,
    title: "Open AI",
  },
  {
    id: 5,
    title: "Robotic Process Automation",
  },
];

export const servicesDetailed = [
  {
    id: 1,
    url: "/services/chatbot",
    bgSrc: "/home/services/ServicesCardBg-1.png",
    title: "AI Chatbot",
    description:
      "Engage customers 24/7 with intelligent, human-like chatbots that automate support, increase conversions, and deliver personalized user experiences.",
  },

  {
    id: 2,
    url: "/services/generative-development",
    bgSrc: "/home/services/ServicesCardBg-2.png",
    title: "Generative AI Development",
    description:
      "Transform your operations with AI-powered tools that generate content, ideas, and insights—boosting creativity, efficiency, and innovation across your business.",
  },

  {
    id: 3,
    url: "/services/web-applications",
    bgSrc: "/home/services/ServicesCardBg-3.png",
    title: "Web Application",
    description:
      "We design and develop scalable, fast, and secure web applications tailored to your business goals using modern frameworks and best development practices.",
  },

  {
    id: 4,
    url: "/services/machine-learning",
    bgSrc: "/home/services/ServicesCardBg-1.png",
    title: "Machine Learning & Deep Learning",
    description:
      "Build intelligent systems that learn from data, automate tasks, and deliver smarter decision-making with our advanced machine and deep learning solutions.",
  },

  {
    id: 5,
    url: "/services/tokenization",
    bgSrc: "/home/services/ServicesCardBg-2.png",
    title: "Tokenization",
    description:
      "Convert your real estate or physical assets into digital tokens using secure blockchain solutions. Unlock liquidity, streamline ownership, and enable fractional investments.",
  },
];

// ---------------------------------------------------------- PROJECTS SECTION

export const projects = [
  {
    title: "Intelliwriter",
    url: "",
    imgSrc: "/home/projects/Project2.jpg",
  },
  {
    title: "I am Scientist",
    url: "",
    imgSrc: "/home/projects/Project6.jpg",
  },
  {
    title: "GPT Professor",
    url: "",
    imgSrc: "/home/projects/Project1.jpg",
  },
  {
    title: "Happy Mind",
    url: "",
    imgSrc: "/home/projects/Project8.jpg",
  },
  {
    title: "Wakeel App",
    url: "",
    imgSrc: "/home/projects/Project3.jpg",
  },

  {
    title: "Snapcheck",
    url: "",
    imgSrc: "/home/projects/Project5.jpg",
  },
];

// ---------------------------------------------------------- BLOG SECTION

const articles = [
  {
    id: 1,
    author: "Smith",
    avatar: "/home/hero/Avatar1.svg",
    tag: "AI Agency",
    date: "April 16, 2024",
    title: "How AI is enhancing customer experience in retail",
    description:
      "AI is enhancing retail customer experience by leveraging data analytics and machine learning to offer ...",
    imageUrl: "/blog/blogimage3.png",
    link: "/article3",
  },
  {
    id: 2,
    author: "Samantha",
    avatar: "/home/hero/Avatar2.svg",
    tag: "AI Agency",
    date: "June 04, 2024",
    title: "How our AI services can transform your business",
    description:
      "Paraphrasing features are prevalent in AI tools, allowing users to alter text effectively. Merlin and Quillbot are key platforms offering advanced paraphrasing options.",
    imageUrl: "/blog/blogimage1.png",
    link: "/article1",
  },
  {
    id: 3,
    author: "Robert",
    avatar: "/home/hero/Avatar3.svg",
    tag: "AI Agency",
    date: "August 29, 2024",
    title: "Top programming languages for AI Development",
    description:
      "Rewriting text has become easier with paraphrasing tools found on most AI platforms. Both Merlin and Quillbot deliver user-friendly paraphrasing solutions.",
    imageUrl: "/blog/blogimage2.png",
    link: "/article2",
  },

  {
    id: 4,
    author: "Lucy",
    avatar: "/home/hero/Avatar2.svg",
    tag: "AI Agency",
    date: "November 21, 2024",
    title: "AI education: personalized learning and more",
    description:
      "Many AI platforms include paraphrasing tools to simplify rewording tasks. Merlin and Quillbot are two platforms recognized for their efficient paraphrasing capabilities.",
    imageUrl: "/blog/blogimage6.png",
    link: "/article6",
  },
];

// --------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------- CHATBOT -------------------------------------------------------

// ---------------------------------------------------------- CHOOSE CHATBOT SECTION
export const chatbotChooseServices = [
  {
    id: 1,
    title: "Language Understanding",
    description: `Our chatbot understands and processes messages like a human. Whether it's text or voice, it quickly figures out what users are saying and gives them helpful replies right away — no delays, no confusion.`,
  },
  {
    id: 2,
    title: "Efficient Issue Handling",
    description: `We set up smart workflows that automatically send complex issues to the right support team. This ensures faster responses and happy customers, while your team works more efficiently.`,
  },
  {
    id: 3,
    title: "Automated Conversations",
    description: `Our bots greet visitors, follow up on chats, and handle FAQs without human help. They’re always available, making sure every customer gets support right when they need it.`,
  },
  {
    id: 4,
    title: "Easy System Integration",
    description: `Our chatbots smoothly connect with your existing tools — whether it's CRM, support platforms, or internal systems. No major changes required — just better performance.`,
  },
  {
    id: 5,
    title: "Smart Lead Management",
    description: `Capture leads, qualify them, and send them to your sales team — automatically. Our chatbot ensures no opportunity is lost while saving time and effort.`,
  },
  {
    id: 6,
    title: "Gear up your business",
    bgSrc: "/chatbot/GearUpBusinessBg.png",
  },
];

// ---------------------------------------------------------- BENEFITS OF CHATBOT SECTION

export const chatbotBenefitofServices = [
  {
    id: 1,
    bgSrc: "/home/services/ServicesCardBg-1.png",
    imgsrc: "/chatbot/service/Faster-help.svg",
    title: "Faster Help",
    description:
      "Our AI chatbot offers instant responses, so your customers never have to wait — improving satisfaction and trust in your brand.",
  },
  {
    id: 2,
    bgSrc: "/home/services/ServicesCardBg-2.png",
    imgsrc: "/chatbot/service/Cost-efficiency.svg",
    title: "Cost Efficient",
    description:
      "Cut down support costs by handling repetitive tasks automatically, letting your team focus on what really matters.",
  },
  {
    id: 3,
    bgSrc: "/home/services/ServicesCardBg-3.png",
    imgsrc: "/chatbot/service/Easy-conversations.svg",
    title: "Easy Conversations",
    description:
      "Our bots use natural language to talk with customers — making every interaction smooth and friendly.",
  },
  {
    id: 4,
    bgSrc: "/home/services/ServicesCardBg-1.png",
    imgsrc: "/chatbot/service/Multiple-Users.svg",
    title: "Scalable for All Users",
    description:
      "Whether you serve 10 or 10,000 customers a day, our chatbots handle multiple chats at once — without breaking a sweat.",
  },
  {
    id: 5,
    bgSrc: "/home/services/ServicesCardBg-2.png",
    imgsrc: "/chatbot/service/Easy-Tools.svg",
    title: "User-Friendly Tools",
    description:
      "Our platform is easy to use — manage conversations, see insights, and update bot behavior without needing tech skills.",
  },
  {
    id: 6,
    bgSrc: "/home/services/ServicesCardBg-3.png",
    imgsrc: "/chatbot/service/Smart-Learning.svg",
    title: "Continuous Learning",
    description:
      "Our chatbots learn from conversations and get smarter over time, helping you serve your users better every day.",
  },
];

// ---------------------------------------------------------- INTEGRATE CHATBOT SECTION

export const integrateData = [
  {
    id: 1,
    imgsrc: "/chatbot/integrate/Web.png",
    title: "Website",
    description:
      "Add our chatbot to your site and help visitors 24/7 — answer their questions, guide them, or collect leads.",
  },
  {
    id: 2,
    imgsrc: "/chatbot/integrate/E-commerce.png",
    title: "E-commerce",
    description:
      "Boost sales with bots that help customers browse, ask product questions, and complete purchases easily.",
  },
  {
    id: 3,
    imgsrc: "/chatbot/integrate/IOS.png",
    title: "iOS Apps",
    description:
      "Create smart assistants in your iOS apps that understand what users say and respond like a human.",
  },
  {
    id: 4,
    imgsrc: "/chatbot/integrate/Social.svg",
    title: "Social Media",
    description:
      "Link the chatbot to platforms like Facebook or Instagram to instantly chat with your audience.",
  },
  {
    id: 5,
    imgsrc: "/chatbot/integrate/Android.png",
    title: "Android Apps",
    description:
      "Support your Android users with real-time help and smarter interactions built right into your app.",
  },
  {
    id: 6,
    imgsrc: "/chatbot/integrate/CRM.svg",
    title: "CRM & HR Portals",
    description:
      "Use bots within internal systems like CRM and HR tools to support both customers and employees.",
  },
];

// --------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------- GENERATIVE DEVELOPMENT ----------------------------------------

// ---------------------------------------------------------- SERVICE SECTION
export const generativeServicesData = [
  {
    id: 1,
    title: "Generative AI Integration",
    description:
      "We help you connect Generative AI tools with your current systems and workflows. Whether it’s chatbots, automation tools, or smart analytics, we make sure everything works smoothly together without disrupting your operations. Our focus is on scalable, secure, and efficient AI setups tailored to your business.",
    imgSrc: "/generative/services/Generative-AI-Integration.svg",
    details: [
      "Smooth integration with existing systems",
      "Real-time AI feature deployment",
      "Secure and scalable setup",
      "Workflow automation with AI",
      "Complete integration support",
    ],
  },
  {
    id: 2,
    title: "ChatGPT Development & Integration",
    description:
      "We design and set up ChatGPT-powered chatbots that talk just like humans. These chatbots improve customer support, answer questions instantly, and help with content tasks. Our team ensures your chatbot fits right into your platforms and boosts engagement across all channels.",
    imgSrc: "/generative/services/ChatGPT-Development-and-Integration.svg",
    details: [
      "Human-like AI chatbot conversations",
      "Cross-platform deployment",
      "Smart and personalized replies",
      "Supports content & customer automation",
      "Fast and scalable chatbot integration",
    ],
  },
  {
    id: 3,
    title: "Custom AI Model Development",
    description:
      "Our team builds custom AI models specifically for your business needs—whether it’s content creation, automation, or data prediction. Using tools like GPT, NLP, and computer vision, we deliver powerful, high-performing models that support your industry and goals.",
    imgSrc: "/generative/services/Generative-AI-Model-Development.svg",
    details: [
      "Custom-trained AI models",
      "Accurate and fast performance",
      "Built for your industry needs",
      "Deep learning and NLP powered",
      "Scalable for future growth",
    ],
  },
  {
    id: 4,
    title: "Generative AI Consulting",
    description:
      "Not sure how to start with AI? Our experts guide you through the process. We help you understand where AI fits best in your business, what tools to use, and how to plan everything properly. You’ll get a clear roadmap to follow with full support from idea to execution.",
    imgSrc: "/generative/services/Generative-AI-Consulting.svg",
    details: [
      "AI opportunity discovery",
      "Clear action plan and roadmap",
      "Risk & feasibility check",
      "AI strategy and planning",
      "Support through every stage",
    ],
  },
  {
    id: 5,
    title: "Tailored Generative AI Solutions",
    description:
      "We build custom AI solutions to solve your exact business challenges. Whether it's smart content tools, automated workflows, or industry-specific models, we design AI systems that match your goals and work perfectly with your current setup.",
    imgSrc: "/generative/services/Custom-generative-AI-Development.svg",
    details: [
      "AI tools built for your needs",
      "Optimized for specific industries",
      "Full solution development",
      "Fast, reliable performance",
      "Easy integration into your workflow",
    ],
  },
  {
    id: 6,
    title: "Generative AI API Development",
    description:
      "We create powerful APIs that allow you to plug AI features like text generation, analysis, and automation directly into your software or platforms. Our APIs are fast, secure, and easy to scale, giving you flexibility without building a full AI system from scratch.",
    imgSrc: "/generative/services/Generative-AI-API-Development-1.svg",
    details: [
      "Custom-built AI APIs",
      "Real-time processing support",
      "Seamless third-party integration",
      "Reliable performance and security",
      "Designed for long-term use",
    ],
  },
];

// ---------------------------------------------------------- BENEFITS SECTION

export const GenerativeBenefits = [
  {
    id: "001",
    title: "Consistent Brand Voice Across Platforms",
    description:
      "With Generative AI, you can keep your brand tone and style the same across websites, emails, product descriptions, and social media. It helps businesses deliver clear and unified messages, no matter the platform.",
  },
  {
    id: "002",
    title: "Faster Legal and Compliance Document Creation",
    description:
      "Generative AI helps create contracts, audit reports, and other legal documents quickly and accurately. It reduces human errors, saves time, and ensures your business stays compliant with the latest regulations.",
  },
  {
    id: "003",
    title: "Smarter Insights and Market Predictions",
    description:
      "Use AI to analyze large data sets and uncover trends, competitor strategies, and customer behavior. This helps you make better marketing decisions, predict demand, and improve pricing strategies.",
  },
  {
    id: "004",
    title: "AI Assistants for Procurement Teams",
    description:
      "Our AI tools help your procurement team manage suppliers, track orders, and analyze costs. This means fewer delays, better supplier choices, and smoother day-to-day operations.",
  },
  {
    id: "005",
    title: "Personalized Sales Pitches Made Easy",
    description:
      "Generative AI helps your sales team create custom pitches based on customer data, past behavior, and interests. The result: better communication, stronger engagement, and higher conversions.",
  },
  {
    id: "006",
    title: "Understand Customer Feelings in Real-Time",
    description:
      "Our sentiment analysis tools detect customer emotions during chats or support conversations. This helps your team respond better, improve satisfaction, and deliver a more human-like experience.",
  },
];

// --------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------- WEB APPLICATIONB ----------------------------------------------

// ---------------------------------------------------------- CHOOSE WEB APP SECTION
export const webAppChooseServices = [
  {
    id: 1,
    title: "Custom Web App Development",
    description: `We build secure, high-performing web applications tailored to your business needs — from dashboards and portals to full-scale platforms.`,
  },
  {
    id: 2,
    title: "Scalable Architecture",
    description: `Our solutions grow with your business. We use flexible and scalable technologies that ensure your web app performs well as traffic and data increase.`,
  },
  {
    id: 3,
    title: "Responsive & Fast Interfaces",
    description: `We focus on user-friendly designs that work smoothly on all devices — delivering fast load times, intuitive layouts, and a seamless experience.`,
  },
  {
    id: 4,
    title: "Easy Integration with Tools",
    description: `We connect your web app with CRMs, payment gateways, databases, and third-party services — making everything work together effortlessly.`,
  },
  {
    id: 5,
    title: "Maintenance & Support",
    description: `Beyond development, we provide continuous support, updates, and optimization to keep your web application running at its best.`,
  },
  {
    id: 6,
    title: "Gear up your business",
    bgSrc: "/chatbot/GearUpBusinessBg.png",
  },
];

// ---------------------------------------------------------- BENEFITS OF WEB APP SECTION

export const webAppBenefitofServices = [
  {
    id: 1,
    bgSrc: "/home/services/ServicesCardBg-1.png",
    imgsrc: "/web-applications/benefits/highPerformance.png",
    title: "High Performance",
    description:
      "We build fast, responsive web apps that load quickly and perform smoothly across all devices—keeping users engaged and satisfied.",
  },
  {
    id: 2,
    bgSrc: "/home/services/ServicesCardBg-2.png",
    imgsrc: "/web-applications/benefits/costEffective.png",
    title: "Cost-Effective Solutions",
    description:
      "Our custom-built apps help you reduce long-term costs by streamlining operations, automating tasks, and eliminating third-party tool dependencies.",
  },
  {
    id: 3,
    bgSrc: "/home/services/ServicesCardBg-3.png",
    imgsrc: "/web-applications/benefits/userFriendly.png",
    title: "User-Friendly Interfaces",
    description:
      "We design intuitive, easy-to-use interfaces so your users can navigate your platform effortlessly, increasing satisfaction and retention.",
  },
  {
    id: 4,
    bgSrc: "/home/services/ServicesCardBg-1.png",
    imgsrc: "/web-applications/benefits/Scale.png",
    title: "Built to Scale",
    description:
      "From startups to enterprises, our web apps grow with your business. We ensure your platform can handle increasing traffic and functionality with ease.",
  },
  {
    id: 5,
    bgSrc: "/home/services/ServicesCardBg-2.png",
    imgsrc: "/web-applications/benefits/Ownership.png",
    title: "Full Ownership & Control",
    description:
      "No vendor lock-in. You get full access and control over your application’s features, updates, and data—built just for you.",
  },
  {
    id: 6,
    bgSrc: "/home/services/ServicesCardBg-3.png",
    imgsrc: "/web-applications/benefits/Secure.png",
    title: "Secure & Reliable",
    description:
      "Security is a priority. We implement best practices to protect your users’ data and ensure your web app runs smoothly around the clock.",
  },
];

// ---------------------------------------------------------- TABS SECTION

export const tabData = [
  {
    title: "Backend Development",
    description: `Our backend developers build powerful, scalable systems using technologies like Node.js, Python, PHP, .NET and Express. We create secure, high-performance APIs, manage data flow, and ensure smooth server operations. Whether you're building custom features, connecting third-party services, or enabling real-time functionality — we build backends that are flexible, reliable, and ready to scale.`,
  },
  {
    title: "Frontend Web Development",
    description: `We design responsive, interactive, and visually appealing user interfaces using React, NEXT, and modern CSS frameworks. Our frontend team focuses on fast load times, clean layouts, and seamless user journeys — ensuring your web application looks great and works flawlessly across all devices and browsers.`,
  },
  {
    title: "Full-Stack Web Development",
    description: `Our full-stack developers handle both frontend and backend — building complete web solutions from start to finish. Using popular stacks like MERN, MEAN, or custom combinations, we ensure all parts of your app work together smoothly. From database to interface, we deliver cohesive, high-performing web apps tailored to your goals.`,
  },
  {
    title: "Infrastructure",
    description: `We set up secure, scalable, and efficient infrastructures using AWS, Azure, Docker, and Kubernetes. Our DevOps practices, including CI/CD pipelines and automated deployments, ensure your web application runs reliably and is always ready for growth — with minimal downtime and maximum performance.`,
  },
  {
    title: "Databases",
    description: `We plan, integrate, and maintain fast and secure databases to support your web applications. Whether it’s SQL (PostgreSQL, MySQL) or NoSQL (MongoDB), we ensure data is organized, accessible, and optimized for performance — supporting smooth functionality and smart decision-making at every level.`,
  },
];

// -----------------------------------------------------------------------------------------------------------------------------
// --------------------------------------- MACHINE LEARNING & DEEP LEARNING SERVICE --------------------------------------------

// ---------------------------------------------------------- SLIDER SECTION

export const slides = [
  {
    id: 1,
    image: "/machine-learning/Self-service analytics tools.svg",
    title: "AI-Powered Business Intelligence",
    description:
      "Unlock deeper insights with self-service analytics driven by machine learning. Empower non-technical teams to run reports, ask questions in natural language, and visualize data instantly—without relying on IT support.",
  },
  {
    id: 2,
    image: "/machine-learning/Advanced cybersecurity.svg",
    title: "Predictive Cybersecurity Solutions",
    description:
      "Leverage ML algorithms to detect threats before they strike. Our advanced cybersecurity tools offer real-time monitoring, anomaly detection, and automated threat response to keep your digital assets secure 24/7.",
  },
  {
    id: 3,
    image: "/machine-learning/ML-powered customer service.svg",
    title: "Intelligent Customer Engagement",
    description:
      "Enhance customer satisfaction with ML-powered systems that understand user behavior, predict needs, and personalize support. Ideal for industries like healthcare, finance, and e-commerce where service quality drives loyalty.",
  },
  {
    id: 4,
    image: "/machine-learning/Self-service analytics tools.svg",
    title: "Automated Data Preparation",
    description:
      "Cut down manual data prep time using smart ML pipelines that clean, organize, and structure data automatically—so your team can focus on analysis, not formatting.",
  },
  {
    id: 5,
    image: "/machine-learning/ML-powered customer service.svg",
    title: "Real-Time Sentiment Analysis",
    description:
      "Monitor public opinion and customer sentiment in real time. Our ML models analyze reviews, social media, and chat logs to provide instant insights into brand perception and customer mood.",
  },
  {
    id: 6,
    image: "/machine-learning/Advanced cybersecurity.svg",
    title: "Fraud Detection & Risk Scoring",
    description:
      "Protect your business with ML-based fraud detection that adapts over time. Identify anomalies, score transactions, and prevent financial threats across banking, fintech, and e-commerce platforms.",
  },
];

// ---------------------------------------------------------- WHAT OUR COMPOANY CAN DO

export const tabs = [
  {
    title: "ML/DL Strategy & Consulting",
    content:
      "As a trusted ML/DL consulting company, we guide organizations in aligning AI strategies with business goals. From identifying use cases to deploying scalable solutions, we help clients harness ML/DL to reduce costs, optimize processes, and unlock hidden data-driven opportunities.",
    details: [
      "Align business goals with AI potential",
      "Define high-impact ML/DL use cases",
      "Choose the right tools and models",
      "Design scalable architecture",
      "Conduct PoCs and pilot tests",
      "Ensure AI governance and compliance",
    ],
  },
  {
    title: "Natural Language Processing (NLP)",
    content:
      "We develop NLP solutions that help machines comprehend and interact with human language effectively. From chatbots and semantic search to text analysis and intelligent routing, we empower enterprises to automate communication and unlock insights hidden in unstructured data.",
    details: [
      "Build chatbots and assistants",
      "Text classification & sentiment analysis",
      "Extract information with NER",
      "Document summarization & translation",
      "Search unstructured content",
      "Auto-route support tickets and emails",
    ],
  },
  {
    title: "Computer Vision Development",
    content:
      "We engineer robust computer vision systems that interpret images and video to automate tasks across industries. From object detection and facial recognition to OCR and surveillance, our solutions enable smarter decision-making with real-time image-based intelligence.",
    details: [
      "Detect objects and faces",
      "Analyze visual scenes",
      "Use OCR for text extraction",
      "Enable emotion and activity recognition",
      "Deploy quality control systems",
      "Support AR/VR enhancements",
    ],
  },
  {
    title: "AI-Powered Recommendation Engines",
    content:
      "Our recommendation systems personalize user experiences by predicting what your customers want. Using hybrid algorithms, we help businesses increase conversions, boost retention, and improve product discovery with relevant and timely content suggestions across platforms.",
    details: [
      "Collaborative/content-based filtering",
      "Behavioral targeting",
      "Real-time recommendations",
      "Customer segmentation",
      "A/B testing",
    ],
  },
  {
    title: "Forecasting & Predictive Modeling",
    content:
      "We build predictive tools that allow organizations to anticipate future trends and make proactive decisions. Leveraging historical data and statistical models, we help businesses improve forecasting accuracy and minimize operational and financial risks.",
    details: [
      "Sales/demand forecasting",
      "Customer churn prediction",
      "Risk modeling",
      "Inventory optimization",
      "Scenario simulations",
    ],
  },
  {
    title: "Anomaly & Fraud Detection",
    content:
      "Our intelligent detection systems monitor data in real time to spot unusual patterns or behaviors. From financial fraud and cybersecurity breaches to equipment malfunctions, we help prevent costly incidents through early alerts and root cause analysis.",
    details: [
      "Detect fraud and intrusions",
      "Monitor for system anomalies",
      "Trigger real-time alerts",
      "Score risk levels",
      "Identify root causes",
    ],
  },
  {
    title: "Reinforcement Learning Systems",
    content:
      "We develop reinforcement learning (RL) agents capable of learning from trial and error. RL is perfect for solving dynamic problems in robotics, finance, and logistics—where continuous feedback is used to adapt and optimize actions over time.",
    details: [
      "Optimize strategy in dynamic systems",
      "Train autonomous agents",
      "Simulate environments",
      "Apply RL in logistics and gaming",
      "Deploy adaptive policies",
    ],
  },
  {
    title: "Custom AI Model Development",
    content:
      "We specialize in building custom AI models tailored to your business goals. From data preprocessing to training, deployment, and monitoring, we deliver end-to-end solutions designed for performance, reliability, and seamless integration into your operations.",
    details: [
      "Collect and clean data",
      "Train ML/DL models",
      "Fine-tune performance",
      "Build APIs and integrations",
      "Deploy to cloud or edge",
    ],
  },
];

// --------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------- TOKENIZATION --------------------------------------------------

// ---------------------------------------------------------- ENTERPRISE GRADE TOKENIZATION SECTION

export const gradeTokenizationData = [
  {
    id: 1,
    title: "Launch Tokenized Securities",
    description:
      "Easily define asset details, compliance parameters, supply limits, and transfer rules—then deploy tokens using no-code tools or APIs.",
    imgSrc: "/tokenization/grade-tokenization/issueTokenized.svg",
  },
  {
    id: 2,
    title: "Streamline Security Lifecycle",
    description:
      "Manage tokenized assets and investors, assign operational roles, and automate key corporate actions with full control.",
    imgSrc: "/tokenization/grade-tokenization/lifecycleOfSeurities.svg",
  },
  {
    id: 3,
    title: "Distribute Across Networks",
    description:
      "Expand access through multiple distribution channels, integrate with DeFi platforms, and maintain compliance in every transaction.",
    imgSrc: "/tokenization/grade-tokenization/distributeToOpenNetworks.svg",
  },
];

// ---------------------------------------------------------- PIONEER SECTION

export const pioneerData = [
  {
    id: 1,
    highlight: "The Pioneer ",
    title: "in Compliant Tokenization",
    description:
      "Without a standard, we will recreate silos in the era of tokenization. In 2018, we created the open-source ERC-3643 standard to address this issue. Recognized as the sole official ERC standard for compliant tokenization and audited by Hacken, it is now acknowledged by industry giants as the market standard.",
    imgSrc: "/tokenization/Token.svg",
    details: [
      "Enforce on-chain compliance",
      "Identify investors via digital identity",
      "Open-source suites of smart contracts",
    ],
  },
  {
    id: 2,
    highlight: "Gain immediate access",
    title: "to a fully integrated ecosystem",
    description:
      "We navigate you through the complexities of tokenization by partnering with selected industry leaders. With 7 years of experience and over 120 customers, we have integrated with allnecessary tools, ensuring a seamless and efficient process.",
    imgSrc: "/tokenization/Token.svg",
    details: [
      "100+ ecosystem partners",
      "7-year unmatched expertise",
      "Bridging banking and tokenization rails",
    ],
  },
];

// ---------------------------------------------------------- DIVERSIFIED AUDIENCE SECTION

export const diversifiedAudiences = [
  {
    id: 1,
    imgSrc: "/tokenization/diversified-audiences/Retail-Investors.svg",
    title: "Retail Investors",
    description:
      "Tokenization removes traditional barriers, allowing retail investors to purchase fractional shares of real estate assets. This opens the door to wealth-building opportunities once limited to high-net-worth individuals.",
  },
  {
    id: 2,
    imgSrc: "/tokenization/diversified-audiences/Global-Investors.svg",
    title: "Global Investors",
    description:
      "Geography is no longer a constraint. Tokenized real estate enables investors from around the world to seamlessly access and invest in foreign property markets without the usual regulatory friction.",
  },
  {
    id: 3,
    imgSrc: "/tokenization/diversified-audiences/Asset-Portfolio-Managers.svg",
    title: "Asset & Portfolio Managers",
    description:
      "Tokenization offers portfolio managers a modern tool for asset diversification, enabling broader investment strategies and enhanced liquidity compared to traditional real estate holdings.",
  },
  {
    id: 4,
    imgSrc: "/tokenization/diversified-audiences/Tech-Savvy.svg",
    title: "Tech-Savvy Millennials & Gen Z",
    description:
      "Digital-native generations are naturally drawn to tokenized real estate. Combining blockchain and property investment appeals to their tech-first mindset and desire for accessible, modern financial tools.",
  },
  {
    id: 5,
    imgSrc: "/tokenization/diversified-audiences/Institutional-Investors.svg",
    title: "Institutional Investors",
    description:
      "Tokenized assets offer institutional investors a strategic edge—enhancing portfolio diversification, improving liquidity, and streamlining real estate acquisition at scale.",
  },
];

// ---------------------------------------------------------- TOKENIZATION SECTION

export const tokenizationData = [
  {
    id: 1,
    imgSrc: "/tokenization/diversified-audiences/Retail-Investors.svg",
    title: "Project Review & Legal Check",
    description:
      "We assess your project, classify tokens, and choose the right legal setup—balancing risks, goals, and STO compliance.",
  },
  {
    id: 2,
    imgSrc: "/tokenization/diversified-audiences/Global-Investors.svg",
    title: "Legal Docs & Process Handling",
    description:
      "We draft key legal documents and manage procedures to ensure your STO runs smoothly and stays compliant.",
  },
  {
    id: 3,
    imgSrc: "/tokenization/diversified-audiences/Asset-Portfolio-Managers.svg",
    title: "Compliance & Reporting",
    description:
      "We take care of filings and reporting to keep your project aligned with STO laws—avoiding delays and penalties.",
  },
  {
    id: 4,
    imgSrc: "/tokenization/diversified-audiences/Tech-Savvy.svg",
    title: "Entity Structuring Support",
    description:
      "We set up legal entities and define relationships to protect investors, reduce taxes, and follow DeFi regulations.",
  },
];

// --------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------- CONTACT --------------------------------------------------

// ---------------------------------------------------------- CONTACT US SECTION

const ContactUs = [
  {
    id: 1,
    imageUrl: "/contact/phone.png",
    title: "Phone",
    details: "+44 7456 393704",
  },
  {
    id: 2,
    imageUrl: "/contact/location.png",
    title: "Address",
    details:
      "Office 8785 182-184 High Street North, East Ham, London, United Kingdom, E6 2JA",
  },
  {
    id: 3,
    imageUrl: "/contact/email.png",
    title: "Email",
    details: "info@robx.ai",
    link: "mailto:info@robx.ai",
  },
  {
    id: 4,
    imageUrl: "/contact/phone.png",
    title: "Follow Us",
    details: [
      {
        name: "linkedin/robx.ai",
        url: "https://www.linkedin.com/company/robx-ai",
      },
      { name: "instagram/robx.ai", url: "https://www.instagram.com/robx.ai" },
    ],
  },
];
//Post Data
const postData = [
  {
    title1: "Transforming Industries and Changing Lives With AI.",
    date: "June 04, 2024",
    image: "/singleblog/AI-tech.png",
    text: "Emphasizes the profound influence of artificial intelligence across multiple fields. AI enhances efficiency, drives innovation, and enables automation, revolutionizing industries like healthcare, finance, and manufacturing. By offering personalized solutions and improving decision-making, AI empowers individuals and businesses, paving the way for a more connected and efficient world, while creating new opportunities and elevating the quality of life.",
    quote:
      "The purpose of the patent system is to foster and encourage new inventions of usefulness.",
    vrImage: "/singleblog/process-transform.png",
    title: "Top Transforming Process",
    paragraphs: [
      "We are a team of the our dedicated patent professionals, united by our commitment tour excellence patent protection. With years of collective experience across diverse industries team of this dedicated patent professionals, united by our",
      "Expertise In Patent Protection",
      "Commitment To Excellence",
      "Collaborative Partnership",
      "We are a team of the dedicated patent professionals, united by our commitment tour excellence patent protection. With years of collective experience across diverse industries.",
    ],
  },
];
// Latest Post
const latestPost = [
  {
    id: 1,
    imageUrl: "/singleblog/post-1.png",
    title: "How AI Is Changing The Face of Digital Marketing.",
    date: "June 04, 2024",
  },
  {
    id: 2,
    imageUrl: "/singleblog/post-2.png",
    title: "Shaping the Future of Learning and Teaching",
    date: "June 10, 2024",
  },
  {
    id: 3,
    imageUrl: "/singleblog/post-3.png",
    title: "The Rise of the Internet of Things, Connecting Our World",
    date: "July 07, 2024",
  },
];

const popularTags = [
  {
    id: 1,
    tag: "Coding AI",
  },
  {
    id: 2,
    tag: "Digital AI",
  },
  {
    id: 3,
    tag: "Future AI",
  },
  {
    id: 4,
    tag: "Tech Blog",
  },
  {
    id: 5,
    tag: "Tech Innovate",
  },
];

const servicesData = [
  {
    id: 1,
    imageUrl: "/services/logo.png",
    title: "Web Development",
    description:
      "Building and maintaining websites and web applications, focusing on front-end and back-end technologies.",
  },
  {
    id: 2,
    imageUrl: "/services/logo.png",
    title: "Computer Vision",
    description: " Analyzes and interprets visual data from images or videos.",
  },
  {
    id: 3,
    imageUrl: "/services/logo.png",
    title: "Recommendation Systems",
    description: " Suggests products or content based on user preferences.",
  },
  {
    id: 4,
    imageUrl: "/services/logo.png",
    title: "Chatbots",
    description:
      "Simulates human conversation for customer support or information",
  },
  {
    id: 5,
    imageUrl: "/services/logo.png",
    title: "Mobile Development",
    description:
      "Creating applications for mobile devices like smartphones and tablets, involving coding and design.",
  },
  {
    id: 6,
    imageUrl: "/services/logo.png",
    title: "Generative AI (GenAI)",
    description:
      "Creating new content or data, such as text, images, or audio, using AI models.",
  },
  {
    id: 7,
    imageUrl: "/services/logo.png",
    title: "Robotics",
    description:
      "Developing intelligent robots capable of performing tasks autonomously.",
  },
  {
    id: 8,
    imageUrl: "/services/logo.png",
    title: "Machine Learning ",
    description:
      "Algorithms that learn patterns from data for decision-making.",
  },
  {
    id: 9,
    imageUrl: "/services/logo.png",
    title: "Deep Learning ",
    description:
      "Neural networks with multiple layers for complex pattern recognition.",
  },
  {
    id: 10,
    imageUrl: "/services/logo.png",
    title: "Data Analysis",
    description:
      "Interpreting and analyzing data to uncover insights and patterns.",
  },
  // {
  //   id: 11,
  //   imageUrl: "/services/logo.png",
  //   title: "Natural Language Processing",
  //   description:
  //     "we specialize in creating bespoke AI solutions tailored to your specific business.",
  // },
];

// Our Team section

const ourTeam = [
  {
    id: 1,
    imageUrl: "/team/img1.png",
    name: "Dr. Atif Ali",
    designation: "CEO",
  },
  {
    id: 2,
    imageUrl: "/team/img2.png",
    name: "Ali Raza",
    designation: "CTO",
  },
  {
    id: 3,
    imageUrl: "/team/img3.png",
    name: "Taimor Ali Khan",
    designation: "HR Manager",
  },
  {
    id: 4,
    imageUrl: "/team/img4.png",
    name: "Daniyal Ahmed",
    designation: "Full Stack Developer",
  },
  {
    id: 5,
    imageUrl: "/team/img5.png",
    name: "Muhammad Bilal",
    designation: "Graphic Designer",
  },
  {
    id: 6,
    imageUrl: "/team/img6.png",
    name: "Usman Qamar",
    designation: "Front End Developer",
  },
  {
    id: 7,
    imageUrl: "/team/img7.png",
    name: "Abdul Basit",
    designation: "Front End Developer",
  },
  {
    id: 8,
    imageUrl: "/team/img8.png",
    name: "Shehbaz Ali",
    designation: "Front End Developer",
  },
];

const homeFAQs = [
  {
    id: 1,
    question: "What types of AI solutions does ROBX.AI offer?",
    answer:
      "ROBX.AI offers a range of AI solutions, including natural language processing (NLP), machine learning (ML), computer vision, robotic process automation (RPA), speech recognition, and AI-powered analytics.",
  },
  {
    id: 2,
    question: "How can AI benefit my business?",
    answer:
      "AI can streamline operations, improve decision-making, enhance customer experiences, and provide predictive insights. Whether you're looking to automate repetitive tasks, personalize customer interactions, or gain deeper insights from data, AI can help achieve these goals.",
  },
  {
    id: 3,
    question: "What industries does ROBX.AI serve?",
    answer:
      "ROBX.AI serves a variety of industries, including healthcare, retail, finance, manufacturing, and more. Our solutions are tailored to meet the unique needs and challenges of each sector.",
  },
  {
    id: 4,
    question: "Do you offer custom AI solutions?",
    answer:
      "Yes, we specialize in creating custom AI solutions tailored to your business's specific needs. Our team works closely with you to understand your requirements and develop AI models and systems that align with your goals.",
  },
  {
    id: 5,
    question: "How do I get started with implementing AI in my business?",
    answer:
      "Getting started with AI involves understanding your business needs and identifying the right AI solutions. You can reach out to our team for a consultation, where we'll discuss your objectives and how our AI services can help you achieve them. We guide you through the entire process, from planning to deployment and ongoing support.",
  },
];
// services section Faqs
const servicesFAQs = [
  {
    id: 1,
    question:
      "What is the difference between Machine Learning and Deep Learning?",
    answer:
      "Machine Learning involves algorithms that learn patterns from data, while Deep Learning is a subset of Machine Learning that uses neural networks with multiple layers for more complex pattern recognition.",
  },
  {
    id: 2,
    question: "How does Data Engineering differ from Data Analysis?",
    answer:
      "Data Engineering focuses on designing and building systems for data collection, storage, and processing, whereas Data Analysis involves interpreting and analyzing data to extract insights.",
  },
  {
    id: 3,
    question: "What are the key applications of Generative AI (GenAI)?",
    answer:
      "Generative AI is used in content creation, such as generating text, images, music, and even code, as well as in applications like chatbots, art creation, and synthetic data generation.",
  },
  {
    id: 4,
    question: "What skills are essential for Mobile Development?",
    answer:
      "Essential skills for Mobile Development include proficiency in programming languages like Swift, Kotlin, or Java, understanding of mobile UI/UX design, and knowledge of mobile platforms like iOS and Android.",
  },
  {
    id: 5,
    question: "What is involved in Web Development?",
    answer:
      "Web Development involves building and maintaining websites or web applications, including front-end development (user interface), back-end development (server-side logic), and ensuring responsive design and functionality.",
  },
];

const projectImages = [
  { src: "/project/project1.png", alt: "project 1" },
  { src: "/project/project2.png", alt: "project 2" },
  { src: "/project/project3.webp", alt: "project 3" },
  { src: "/project/project4.png", alt: "project 4" },
  { src: "/project/project5.png", alt: "project 5" },
  { src: "/project/project6.png", alt: "project 6" },
  { src: "/project/project7.webp", alt: "project 7" },
  { src: "/project/project8.webp", alt: "project 8" },
]; // Project Images

export {
  articles,
  ContactUs,
  postData,
  popularTags,
  latestPost,
  servicesData,
  ourTeam,
  homeFAQs,
  servicesFAQs,
  projectImages,
};
