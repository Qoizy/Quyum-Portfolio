import project1_img from "../images/project1.png";
import project1_img_1 from "../images/project1-img1.png";
import project2_img from "../images/project2.png";
import project2_img_1 from "../images/project2-img1.png";
import project3_img from "../images/project3.png";
import project3_img_1 from "../images/project3-img1.png";
import project4_img from "../images/project4.png";
import project4_img_1 from "../images/project4-img1.png";
import project5_img from "../images/project5.png";
import project5_img_1 from "../images/project5-img1.png";
import project6_img from "../images/project6.png";
import project6_img_1 from "../images/project6-img1.png";
import project7_img from "../images/project7.png";
import project7_img_1 from "../images/project7-img1.png";
import project8_img from "../images/project8.png";
import project8_img_1 from "../images/project8-img1.png";

const mywork_data = [
  {
    w_no: "01",
    w_name: "GigLink Africa",
    w_img: project3_img,
    w_img_1: project3_img_1,
    w_link: "https://www.giglink.africa/",
    w_type: "Freelance Marketplace",
    w_role: "Volunteer Frontend Engineer",
    w_description:
      "A Freelance platform where we connect Africa top creative talents with businesses in need. GigLink makes it fast, secure, and seamless to find, hire, and collaborate with vetted professionals.",
    w_purpose:
      "GigLink Africa was born out of a mission to bridge the gap between Africa's elite creative talent and the global market. The goal was to build a high-trust, scalable ecosystem that simplifies the hiring process while ensuring financial security for both parties through a custom-built escrow workflow. Phase one focused on creating a seamless 'apply-to-hire' journey for developers and designers across the continent.",
    w_contribution: [
      "Integrated dynamic job board features allowing talent to filter and apply for opportunities in real-time.",
      "Redesigned key sections of the Talent and Client dashboards to improve user flow and data visibility.",
      "Refined the company homepage UI to better reflect a professional, modern brand identity.",
      "Debugged complex state management issues within the hiring workflow to ensure a seamless user journey.",
    ],
    w_stack_explanation:
      "React was the definitive choice for the frontend to manage the complex, real-time states of the job board and talent dashboards. Tailwind CSS provided the utility-first flexibility needed to rapidly iterate on the UI during my redesign phase. By utilizing a modular component architecture, I was able to ensure that features like the job board were not only performant but also easily maintainable for future engineers.",
    w_problems:
      "One of the primary challenges was the dashboard redesign. We had to ensure that the interface could handle complex data like escrow status and job applications without overwhelming the user. I focused on component reusability to keep the codebase clean while adjusting the UI for various screen sizes.",
    w_lessons:
      "I learned a lot but the most important ones involved deep state management for escrow payments, Features Keys, API Integration and how to structure and organize a large-scale React application for better maintainability. I know how sloppy and disorganised code can come back and bite you, but now, I spend time refactoring and improving every line of code i write, for best readability and fewer headaches. Also, This role taught me the importance of collaborative development in a remote team. I gained deep experience in integrating complex features into an existing codebase and learned how to balance fast feature deployment with rigorous bug fixing.",
    w_technologies: ["React", "JavaScript", "TailWindcss"],
  },
  {
    w_no: "02",
    w_name: "Task Manager",
    w_img: project8_img,
    w_img_1: project8_img_1,
    w_link: "https://mini-task-manager-phi.vercel.app/",
    w_type: "Full-Stack Technical Assessment",
    w_role: "Full-Stack Developer",
    w_description:
      "A mini task manager for planning and tracking your day-to-day activities.",
    w_purpose:
      "The primary goal of this project was to showcase full-stack integration during an intensive interview process. I was tasked with building a scalable Task Manager that could handle real-time updates and persistent data. This required architecting a seamless flow between a Next.js client and a robust Node.js/Express API, ensuring data integrity was maintained through a custom MongoDB implementation.",
    w_contribution: [
      "Architected a scalable RESTful API using Node.js and Express to manage the end-to-end lifecycle of task data.",
      "Engineered a reactive user interface with Next.js, implementing optimized state management to handle real-time CRUD operations.",
      "Designed and deployed a MongoDB schema to ensure persistent, structured storage and efficient data retrieval.",
      "Integrated centralized error handling and loading states to maintain a seamless user experience during asynchronous API calls.",
      "Developed a clean, mobile-responsive layout focusing on intuitive UX for task creation and progress tracking.",
    ],
    w_stack_explanation:
      "Next.js was leveraged for the frontend to take advantage of its powerful routing and server-side rendering capabilities. For the backend, Node.js and Express.js were chosen to build a high-performance, non-blocking API. MongoDB provided the flexibility required for a task-based data model, allowing for rapid iteration and seamless storage of user-generated content. By choosing MongoDB, I was able to define a flexible document structure for tasks, allowing for easy schema evolution if new features like 'task categories' or 'priority levels' were to be added later.",
    w_problems:
      "The primary challenge was not just building the CRUD functionality, but doing so within the assigned constraints of the Next.js and MongoDB stack under a tight deadline. Since the stack was pre-defined, my focus shifted to architecting a clean separation of concerns. I had to ensure that the Next.js client communicated efficiently with the Express.js API, handling data persistence in MongoDB without blocking the main thread. I solved the problem of rapid data modeling by using Mongoose, which allowed me to implement a strict schema on top of a flexible NoSQL database, ensuring data integrity across the platform.",
    w_lessons:
      "Developing this project within a fixed technical requirement taught me how to maximize the strengths of a specific stack. It reinforced the importance of following a strict engineering brief while still finding creative ways to optimize performance—such as utilizing Next.js's fast refresh and server-side logic for initial data loads. I learned that meeting a client's specific technical requirements is just as much about precision and follow-through as it is about coding.",
    w_technologies: [
      "React",
      "JavaScript",
      "Node.js",
      "TailWindCSS",
      "MongoDB",
      "Express.js",
      "Axios",
    ],
  },
  {
    w_no: "03",
    w_name: "ValueRide",
    w_img: project4_img,
    w_img_1: project4_img_1,
    w_link: "https://valueride.vercel.app/",
    w_type: "Logistics & Transport Platform",
    w_role: "Team Lead & Lead Frontend Engineer",
    w_description:
      "A Transport and Logistics Platform where user connect with trusted bus owner and find their perfect transportation solution, with dashboard where bus owner can track their earning, fleet movement and user can track their activities based on their travel history.",
    w_purpose:
      "ValueRide was built to digitize and streamline the fragmented transportation market. The goal was to create a dual-sided ecosystem: a seamless booking experience for travelers and a powerful fleet management dashboard for bus owners to track earnings and logistics in real-time.",
    w_contribution: [
      "Spearheaded the technical direction and project roadmap as Team Lead, coordinating efforts between backend developers, designers, and product managers to ensure timely delivery.",
      "Architected and engineered over 70% of the frontend interface, building complex, data-heavy dashboards for fleet tracking and financial reporting.",
      "Facilitated cross-functional decision-making, synthesizing feedback from data analysts and the PM to refine core features like the booking engine.",
      "Established code quality standards and led the frontend architecture decisions, ensuring the platform was scalable and maintainable for future iterations.",
    ],
    w_stack_explanation:
      "React was the definitive choice for the frontend to manage the complex, state-heavy logic required for the dual-user dashboards. I utilized clean, modular CSS to ensure the platform was lightweight and fully responsive across devices. JavaScript (ES6+) drove the core functionality, particularly for handling asynchronous API communications via Axios during the payment integration process. Additionally, I integrated Chart.js to visualize complex fleet tracking and earnings data into digestible graphs for the bus owners.",
    w_problems:
      "As my first major team-based Capstone project, the initial challenge was adapting to a collaborative workflow, particularly orchestrating complex API integrations like the payment gateway. I initially struggled with the secure handling of transaction data, but by leveraging the collective knowledge of the backend team, we debugged the issue and implemented a robust solution. Another layer of complexity was decision fatigue, we often had conflicting views on design and functionality. However, as Team Lead, I learned to steer these debates back to our core objective: choosing the path that best aligned with the project's scalability and user goals, rather than personal preference.",
    w_lessons:
      "This Capstone was a masterclass in professional software development. It taught me that technical skills (like integrating a payment API) are only half the equation; the other half is communication. I learned that asking for help isn't a weakness, it's an efficiency hack. Furthermore, navigating team disagreements taught me that the best idea doesn't always win, the idea that best serves the product does.",
    w_technologies: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "PayStack",
      "Axios",
      "Chart.js",
    ],
  },
  {
    w_no: "04",
    w_name: "Happy Pet",
    w_img: project5_img,
    w_img_1: project5_img_1,
    w_link: "https://happy-pet-lime.vercel.app/",
    w_type: "Animal Wellness & E-commerce Concept",
    w_role: "Frontend Developer (Personal Poject)",
    w_description:
      "A Landing Page that's all about taking care of pet and all.",
    w_purpose:
      "Happy Pet was developed as a deep-dive into creating high-conversion user interfaces for the pet care industry. The goal was to build a clean, modern landing page that balances aesthetic appeal with functional navigation, focusing on how typography and imagery influence user trust in the animal wellness space.",
    w_contribution: [
      "Conceptualized and developed the entire frontend architecture using React and Tailwind CSS.",
      "Implemented a highly responsive layout optimized for mobile-first users, ensuring accessibility across all device types.",
      "Integrated Framer Motion to add subtle, high-quality animations that enhance the storytelling aspect of the pet-care services.",
      "Crafted a custom UI kit including reusable buttons, cards, and modal components to maintain design consistency throughout the project.",
    ],
    w_stack_explanation:
      "I chose React for its component-based architecture, which allowed me to build Happy Pet as a series of modular sections. Tailwind CSS was instrumental in achieving a soft aesthetic through custom color palettes and rounded UI elements, perfectly suited for a pet brand. To push the project beyond a static site, I used Framer Motion for scroll-linked animations, creating a more dynamic and engaging user journey.",
    w_problems:
      "The main challenge with this project was achieving a balance between high-quality imagery and performance. Large, high-resolution pet photos can slow down a site significantly. I tackled this by implementing lazy loading and optimizing image formats, ensuring that the visual impact didn't come at the cost of a high Lighthouse performance score.",
    w_lessons:
      "This practice project reinforced the importance of Design Systems. Building everything from scratch taught me how to manage a consistent theme and why choosing the right animation timing (easing) is the difference between a project that feels 'cheap' and one that feels 'premium'. It was a great exercise in refining my eye for UI/UX detail.",
    w_technologies: ["React", "JavaScript", "TailWindCSS", "Framer Motion"],
  },
  {
    w_no: "05",
    w_name: "Cafeu",
    w_img: project2_img,
    w_img_1: project2_img_1,
    w_link: "https://cafeu-amber.vercel.app/",
    w_type: "Food Ordering UI Prototype",
    w_role: "Frontend Engineer",
    w_description:
      "A specialized food-ordering frontend prototype built for speed and responsiveness. It showcases a modern approach to digital menus, utilizing Vite for lightning-fast asset delivery and React for a reactive, app-like user experience.",
    w_purpose:
      "Cafeu was developed as a high-fidelity frontend exploration for a modern digital restaurant experience. The primary goal was to design a fluid, responsive menu system that visualizes the 'order-to-cart' journey, focusing on clean layout transitions and intuitive navigation patterns in the food and beverage industry.",
    w_contribution: [
      "Designed and built a dynamic food menu featuring category-based filtering for an effortless browsing experience.",
      "Developed an interactive shopping cart UI to demonstrate high-fidelity state feedback and layout responsiveness.",
      "Integrated a mobile-first design strategy, ensuring that the visual hierarchy remains clear and accessible on smaller screens.",
      "Optimized asset delivery and component architecture using Vite to ensure a smooth, high-performance scrolling experience.",
    ],
    w_stack_explanation:
      "Built with React and Vite, this project focuses on 'UI Polish' and performance. I utilized a component-based architecture to keep the menu items modular and reusable. The styling was implemented with a focus on high-contrast visuals and interactive hover states, showcasing my ability to translate complex design requirements into a clean, functional frontend interface.",
    w_problems:
      "The main challenge was creating a visual hierarchy that handles high-resolution food imagery without overwhelming the user interface. I focused on white space and typography to ensure the menu items remained the focal point. Even as a UI-focused prototype, I had to ensure the code was structured in a way that would allow for easy integration of a global state management system (like Redux or Context API) in the future.",
    w_lessons:
      "This project reinforced the importance of 'Micro-interactions' in E-commerce. I learned that even in a UI-only prototype, the way an element reacts when a user clicks 'Add' significantly impacts the perceived quality of the app. It also gave me deeper experience in building scalable CSS patterns that maintain consistency across various menu categories.",
    w_technologies: ["React", "Vite", "TailWindCSS"],
  },
  {
    w_no: "06",
    w_name: "Todo Application",
    w_img: project1_img,
    w_img_1: project1_img_1,
    w_link: "https://todo-app-ten-zeta-86.vercel.app/",
    w_type: "Productivity & State Management Lab",
    w_role: "Frontend Engineer",
    w_description:
      "A high-performance productivity application engineered to demonstrate hybrid data handling, utilizing both RESTful APIs and persistent local storage for a seamless user experience.",
    w_purpose:
      "This project was architected to explore advanced state management and application resilience. The goal was to build a 'fail-safe' productivity tool that seamlessly switches between remote API data and local persistence, ensuring that user data remains intact regardless of network status.",
    w_contribution: [
      "Engineered a hybrid data layer that fetches initial state from JSONPlaceholder while maintaining user-generated updates via LocalStorage.",
      "Implemented a full CRUD lifecycle (Create, Read, Update, Delete) with real-time status toggling and persistent state synchronization.",
      "Developed a custom Error Boundary and 404 handling system to enhance application stability and provide a graceful fallback for edge cases.",
      "Optimized the UI for accessibility and ease of use, focusing on clear visual feedback for task transitions and status changes.",
    ],
    w_stack_explanation:
      "The application leverages React for its declarative UI, with Axios handling asynchronous data fetching. By integrating LocalStorage, I ensured that user progress is preserved across sessions. The architecture specifically includes Error Boundaries, a professional-grade pattern used to catch JavaScript errors anywhere in the child component tree, preventing the entire app from crashing.",
    w_technologies: ["React", "JavaScript", "HTML", "CSS", "Axios"],
    w_problems:
      "This was my first deep-dive into CRUD functionality, and the primary challenge was implementing persistent data without a backend. I had to architect a logic flow that could 'JSON.stringify' complex state objects into LocalStorage and 'JSON.parse' them back on mount without losing data integrity. Handling the edge cases like an empty storage or a corrupted data string required a defensive approach to state management that I hadn't encountered before.",
    w_lessons:
      "This project taught me the fundamental relationship between State and Persistence. Successfully implementing LocalStorage taught me how to bridge the gap between volatile React state and the browser's storage API. It was a 'stretch' moment that solidified my understanding of the component lifecycle specifically, knowing exactly when to pull data from storage to ensure the user sees their tasks immediately upon return.",
  },
  {
    w_no: "07",
    w_name: "Compatto",
    w_img: project6_img,
    w_img_1: project6_img_1,
    w_link: "https://compatto-seven.vercel.app/",
    w_type: "Interior Design Interface",
    w_role: "Frontend Engineer",
    w_description:
      "A premium furniture retail concept focused on minimalist aesthetics and high-conversion UI patterns for the luxury furnishing market.",
    w_purpose:
      "The objective of Compatto was to create a digital presence that reflects the 'simplicity and elegance' of the products it showcases. The project focuses on high-fidelity visual storytelling, using a clean architectural layout to guide users from product discovery to the point of purchase.",
    w_contribution: [
      "Engineered a pixel-perfect landing page using React and Tailwind CSS, translating a minimalist design vision into a responsive, high-performance interface.",
      "Implemented an optimized visual hierarchy that prioritizes high-resolution product imagery without sacrificing site speed.",
      "Developed reusable UI components for product showcases and lead-capture sections, ensuring design consistency across the application.",
      "Crafted smooth layout transitions and hover effects to enhance the premium user experience (UX).",
    ],
    w_stack_explanation:
      "Built with React for its modular component architecture, I utilized Tailwind CSS to implement a custom design system. This allowed for rapid iteration on the typography scales and spacing units that are critical for a minimalist luxury brand. The project relies on modern CSS techniques like CSS Grid and Flexbox to manage the complex, asymmetrical layouts common in high-end design sites.",
    w_problems:
      "The primary challenge was maintaining a minimalist 'white-space' aesthetic while ensuring all technical information was easily accessible. I had to carefully manage the layout breakpoints to prevent the content from feeling cluttered on smaller screens. Additionally, I focused on optimizing asset delivery to ensure the large hero images didn't negatively impact the initial Largest Contentful Paint (LCP).",
    w_lessons:
      "Compatto reinforced the principle that 'less is more' in web design. I learned how to use whitespace as a functional tool rather than just a design choice. This project also improved my proficiency with Tailwind CSS, specifically in creating custom configurations that go beyond the default utility classes to match a unique brand identity.",
    w_technologies: ["React", "JavaScript", "TailWindCSS", "Vite"],
  },
  {
    w_no: "08",
    w_name: "Halsa",
    w_img: project7_img,
    w_img_1: project7_img_1,
    w_link: "https://halsa-ashen.vercel.app/",
    w_type: "Healthcare Management Interface",
    w_role: "Frontend Engineer",
    w_description:
      "A comprehensive health-tech platform designed to unify medical services, patient scheduling, and wellness tracking into a single, intuitive ecosystem.",
    w_purpose:
      "Halsa was created to simplify the complex journey of healthcare management. The project focuses on creating a high-trust digital environment that allows users to navigate medical services, book appointments, and access health resources with zero friction.",
    w_contribution: [
      "Architected a clean, accessible frontend using React, ensuring the interface meets high standards for readability and user trust.",
      "Developed a modular service discovery system, allowing users to efficiently browse through various medical departments and wellness categories.",
      "Leveraged Tailwind CSS to build a calming, professional color palette and a consistent layout system optimized for patients of all technical skill levels.",
      "Engineered responsive navigation patterns to ensure critical healthcare information is accessible across mobile, tablet, and desktop environments.",
    ],
    w_stack_explanation:
      "The application utilizes React for its robust component-based architecture, which was essential for managing the various service modules within Halsa. Tailwind CSS allowed for the creation of a design system focused on 'Soft UI' using gentle shadows and a professional blue-hued palette to evoke a sense of medical reliability and calm. The project was bundled with Vite to ensure rapid delivery and a highly performant user experience.",
    w_problems:
      "A key challenge in building a healthcare platform is managing a vast amount of information without overwhelming the user. I solved this by focusing on 'Information Architecture' using whitespace and clear typography to separate concerns between appointment booking, service lists, and patient resources. I also focused on optimizing the 'Path to Care' so that users can reach their intended destination in as few clicks as possible.",
    w_lessons:
      "Halsa taught me the importance of Accessibility (a11y) in web development. In healthcare, the interface must be usable for everyone. I learned how to balance aesthetic modernism with the strict requirements of a high-utility service app. It also sharpened my skills in building Trust-based UI, where every design choice is made to reassure the user and provide clarity.",
    w_technologies: ["React", "JavaScript", "TailWindCSS", "Vite"],
  },
];

export default mywork_data;
