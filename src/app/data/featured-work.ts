export type FeaturedProject = {
  title: string;
  description: string;
  roles: string[];
  image: string;
  imageFit?: "cover";
  href: string;
};

export const featuredWorkData: FeaturedProject[] = [
  {
    title: "Ceylon Voyages - Tourism Review System",
    description:
      "Displayed ratings and reviews for 2 travel categories, hotels and restaurants, with map-based place discovery.",
    roles: ["MERN Stack", "Redux", "Tailwind CSS"],
    image: "/images/feature-work/CeylonVoyages - Tourism Review System.jpg",
    href: "https://github.com/MenushaKatipearachchi/AF_PROJECT_G34",
  },
  {
    title: "WellnessRoots",
    description:
      "WellnessRoots, a web-based platform, offers top-notch Ayurvedic skincare and pharmaceuticals. Customers can create accounts, browse, order, and pay securely.",
    roles: ["React.js", "Node.js", "MongoDB", "Docker", "Kubernetes"],
    image: "/images/feature-work/WellnessRoots.jpg",
    href: "https://github.com/MenushaKatipearachchi/DS-Y3S1-PROJECT",
  },
  {
    title: "PoochPaw - Intelligent Systems for Comprehensive Dog Management",
    description:
      "Combined machine learning and IoT into 2 capabilities for canine care: health monitoring and skin-disease detection.",
    roles: ["Python", "TensorFlow", "FastAPI", "Firebase", "Google Colab"],
    image: "/images/feature-work/PoochPaw - Intelligent Dog Management.jpg",
    href: "https://github.com/OmeshSachethana/PoochPaw",
  },
  {
    title: "GazeGenius - Vision Problem Detector",
    description:
      "Created a mobile screening flow with 2 computerized assessments: eye-fatigue checks and color-blindness detection.",
    roles: ["Flutter", "Firebase", "Google ML Kit", "TensorFlow Lite"],
    image: "/images/feature-work/GazeGenius - Vision Problem Detector.png",
    href: "https://github.com/MenushaKatipearachchi/SPM_Project",
  },
  {
    title: "LECO SMS with RabbitMQ Integration",
    description:
      "Orchestrated SMS processing with RabbitMQ and linked workflows with the Hutch API across 2 connected services.",
    roles: ["Java", "Spring Boot", "RabbitMQ", "Django REST Framework", "Oracle DB"],
    image: "/images/feature-work/LECO SMS with RabbitMQ Integration.png",
    imageFit: "cover",
    href: "https://github.com/MenushaKatipearachchi",
  },
];
