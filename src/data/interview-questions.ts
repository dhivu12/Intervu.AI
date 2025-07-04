export type Question = {
  question: string;
  suggestedAnswer: string;
};

export type RoleQuestions = {
  [role:string]: Question[];
};

const generalQuestions: Question[] = [
  {
    question: "Tell me about a time you had to handle a difficult stakeholder.",
    suggestedAnswer: "A good answer would follow the STAR method: Situation (describe the context), Task (what was required of you), Action (what you did), and Result (the positive outcome). For example: 'In my previous role, a key stakeholder for a project was unhappy with our progress (Situation). My task was to manage their expectations and get their buy-in (Task). I scheduled a meeting to demonstrate the work we'd done and created a new, more detailed timeline with clear milestones (Action). As a result, the stakeholder felt heard and became a strong advocate for the project, which we delivered on time (Result).'"
  },
  {
    question: "How do you prioritize your work when you have multiple competing deadlines?",
    suggestedAnswer: "Focus on your method. For example: 'I use a combination of the Eisenhower Matrix and impact analysis. I categorize tasks by urgency and importance. For tasks of similar priority, I assess which will have the greatest impact on our team's goals. I also believe in proactive communication, so I keep my manager updated on my workload and potential bottlenecks.'"
  },
  {
    question: "Describe a time you disagreed with your boss. How did you handle it?",
    suggestedAnswer: "Focus on professionalism and positive resolution. 'My manager suggested a technical approach I felt wasn't scalable. I gathered data to support an alternative solution and presented it to them privately, focusing on the long-term benefits. They appreciated the research, and we ultimately went with a hybrid approach that incorporated both our ideas.'"
  },
  {
    question: "Tell me about a time you failed. What did you learn from it?",
    suggestedAnswer: "Emphasize learning and growth. 'Early in my career, I missed a deadline on a small project because I didn't ask for help. It was a valuable lesson in the importance of communication and teamwork. Since then, I've made it a point to provide regular progress updates and never hesitate to collaborate with colleagues when facing a challenge.'"
  },
  {
    question: "Where do you see yourself in five years?",
    suggestedAnswer: "Show ambition that aligns with the company. 'In five years, I hope to have become a subject matter expert in this field and potentially be in a position to mentor junior team members. I'm excited by the growth opportunities at this company and see a long-term future here.'"
  },
  {
    question: "Tell me about a time you received difficult feedback. How did you handle it?",
    suggestedAnswer: "Focus on your receptiveness and growth. 'In a code review, a senior developer pointed out that my approach was inefficient. Initially, I was a bit defensive, but I took a step back and asked them to walk me through their suggestion. I realized they were right, and their approach was much better. I thanked them for the feedback and have used that pattern ever since. It taught me to see feedback as a gift for improvement, not a criticism.'"
  }
];

const softwareEngineerSDEQuestions: Question[] = [
  {
    question: "Given a 2D matrix of 0s and 1s, how would you find the number of islands (a group of connected 1s)?",
    suggestedAnswer: "I would traverse the matrix. Whenever I encounter a '1', I'd start a Depth-First Search (DFS) or Breadth-First Search (BFS) from that cell. I'd increment an island counter, and the search would visit all connected '1's, marking them as visited (e.g., changing them to '0') to avoid recounting. I'd continue traversing the matrix until all cells are visited."
  },
  {
    question: "How would you design the backend for a service like Twitter's news feed?",
    suggestedAnswer: "For a scalable feed, a 'fan-out-on-write' approach is effective. When a user tweets, a background job pushes that tweet into the feeds (e.g., Redis lists) of all their followers. This makes feed retrieval very fast, as it's just a read operation. For users with millions of followers (celebrities), you can use a hybrid approach, fetching their tweets at read-time to avoid massive write operations."
  },
  {
    question: "Explain different data structures you could use to implement a Least Recently Used (LRU) Cache.",
    suggestedAnswer: "The most efficient way is to use a combination of a hash map and a doubly-linked list. The hash map provides O(1) time complexity for lookups, mapping keys to nodes in the list. The doubly-linked list maintains the order of usage; whenever an item is accessed, it's moved to the front. When the cache is full, the item at the end of the list is evicted, which is also an O(1) operation."
  },
  {
    question: "What are the SOLID principles of object-oriented design? Provide an example for one of them.",
    suggestedAnswer: "SOLID stands for Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion. For example, the Single Responsibility Principle states a class should have only one reason to change. A `User` class shouldn't handle both user profile data and database logic. Instead, you'd have a `User` class for data and a `UserRepository` class for database operations."
  },
  {
    question: "Describe a situation where you had to make a trade-off between performance and code readability. How did you decide?",
    suggestedAnswer: "In a data processing pipeline, a highly optimized but complex algorithm was faster than a simple, readable one. I chose the readable version initially because the performance gain was negligible for our current data size, and maintainability was more important. I documented the optimized alternative in the code, noting it could be implemented if performance became a bottleneck in the future."
  }
];

const fullStackDeveloperQuestions: Question[] = [
  {
    question: "Describe the process of a user request from the browser to the database and back in a full-stack application you've built.",
    suggestedAnswer: "A user action triggers an HTTP request from the browser to my backend API. The request hits a specific route, which is handled by a controller. The controller validates the input, calls a service layer for business logic, which in turn interacts with a database model (e.g., an ORM) to query the database. The data is returned up the chain, serialized into JSON, and sent back to the browser, where the frontend updates the UI."
  },
  {
    question: "What are Cross-Origin Resource Sharing (CORS) errors and how do you resolve them on the backend?",
    suggestedAnswer: "CORS is a security mechanism that restricts web pages from making requests to a different domain than the one that served the page. You resolve this on the backend by enabling CORS. In a Node.js/Express app, for example, you'd use the `cors` middleware to add the `Access-Control-Allow-Origin` header to your responses, specifying which origins are allowed to access your API."
  },
  {
    question: "Explain the benefits of using a framework like Next.js over a traditional client-side SPA like Create React App.",
    suggestedAnswer: "Next.js offers server-side rendering (SSR) and static site generation (SSG), which provide better SEO and faster initial page loads compared to a purely client-side rendered app. It also has built-in features like file-based routing and API routes, which simplify development and provide a more integrated full-stack experience."
  },
  {
    question: "How do you handle user authentication and session management in a full-stack application?",
    suggestedAnswer: "I typically use JSON Web Tokens (JWT). After a user logs in with their credentials, the server generates a signed JWT containing user information and sends it to the client. The client stores this token (e.g., in an HttpOnly cookie) and includes it in the Authorization header of subsequent requests. The server then verifies the token's signature to authenticate the user for protected routes."
  },
  {
    question: "Discuss the pros and cons of using a monolithic architecture versus a microservices architecture for a new project.",
    suggestedAnswer: "A monolith is simpler to develop, test, and deploy initially, making it great for small teams or MVPs. However, it can become tightly coupled and difficult to scale. Microservices offer independent scalability and deployment, and technology flexibility, but they introduce operational complexity, network latency, and challenges with distributed data management."
  }
];

const aiMlEngineerQuestions: Question[] = [
  {
    question: "Explain the difference between L1 and L2 regularization and their effects on a model's weights.",
    suggestedAnswer: "Both are techniques to prevent overfitting. L1 regularization (Lasso) adds a penalty equal to the absolute value of the magnitude of coefficients, which can shrink some coefficients to zero, effectively performing feature selection. L2 regularization (Ridge) adds a penalty equal to the square of the magnitude of coefficients, which shrinks them towards zero but rarely to exactly zero."
  },
  {
    question: "How would you design a data pipeline for training a large-scale image classification model?",
    suggestedAnswer: "I'd start with raw images in a cloud storage bucket. The pipeline would use a distributed processing framework like Apache Spark or a cloud service to pre-process the images in parallel (resizing, normalization, augmentation). The processed data would be stored in an efficient format like TFRecord. During training, a data loader would feed batches of this data to the model, which could be training on multiple GPUs."
  },
  {
    question: "Describe the trade-off between bias and variance in machine learning.",
    suggestedAnswer: "Bias is the error from erroneous assumptions in the learning algorithm. High bias can cause a model to miss relevant relations between features and target outputs (underfitting). Variance is the error from sensitivity to small fluctuations in the training set. High variance can cause a model to capture random noise (overfitting). The trade-off is that decreasing one often increases the other, and the goal is to find a balance that minimizes total error."
  },
  {
    question: "What are transformer models and why have they become so dominant in NLP?",
    suggestedAnswer: "Transformers are a neural network architecture based on a self-attention mechanism. Unlike RNNs, they process input data in parallel, not sequentially, making them highly efficient. The attention mechanism allows them to weigh the importance of different words in the input when processing a specific word, giving them a much better understanding of context and long-range dependencies in text."
  },
  {
    question: "How would you deploy a trained machine learning model as a REST API for real-time inference?",
    suggestedAnswer: "I would containerize the model and the API server (e.g., using Flask or FastAPI) with Docker. This container would include all necessary dependencies. I'd then deploy this container to a cloud service like AWS SageMaker, Google AI Platform, or a Kubernetes cluster. This provides a scalable and isolated environment for the API endpoint."
  }
];

const mobileAppDeveloperQuestions: Question[] = [
  {
    question: "What are the key differences between developing a native iOS/Android app versus using a cross-platform framework like React Native or Flutter?",
    suggestedAnswer: "Native development offers the best performance and access to the latest platform features. Cross-platform development allows for code reuse, saving time and money, but can suffer from performance limitations and a delay in accessing new native features. The choice depends on the app's complexity, performance requirements, and budget."
  },
  {
    question: "How do you manage an application's state in a complex mobile app?",
    suggestedAnswer: "For simple cases, built-in state management like React's `useState` or SwiftUI's `@State` is fine. For complex apps, a more structured approach is needed. In Flutter, I might use Provider or BLoC. In React Native, I'd use Redux or Zustand. These libraries provide a centralized store for state, making it predictable and easier to manage across many screens."
  },
  {
    question: "Describe the process of publishing an app to the Apple App Store and Google Play Store.",
    suggestedAnswer: "For both, you need a developer account. For iOS, you create provisioning profiles and certificates, archive the build in Xcode, and upload it via App Store Connect, providing metadata and screenshots. For Android, you generate a signed APK or App Bundle in Android Studio and upload it to the Google Play Console, also providing store listing details. Both have a review process."
  },
  {
    question: "How would you optimize a mobile app for performance and battery life?",
    suggestedAnswer: "I'd use profiling tools like Xcode's Instruments or Android Profiler to identify bottlenecks. Optimizations include reducing large image sizes, minimizing network requests, performing heavy computations on background threads, and avoiding memory leaks. For battery life, I'd limit background processes and GPS usage."
  },
  {
    question: "Explain the importance of platform-specific UI/UX guidelines.",
    suggestedAnswer: "Following Apple's Human Interface Guidelines and Android's Material Design is crucial because users are accustomed to their platform's navigation patterns, controls, and visual language. Adhering to these guidelines makes the app feel intuitive and 'at home' on the device, leading to a better user experience."
  }
];

const cloudDevOpsEngineerQuestions: Question[] = [
  {
    question: "What is 'Infrastructure as Code' (IaC) and what are its benefits? Name some tools you've used.",
    suggestedAnswer: "IaC is the practice of managing and provisioning infrastructure through code and automation, rather than manual processes. The benefits are consistency, speed, and version control for your infrastructure. I've used Terraform to define cloud resources declaratively and Ansible for configuration management."
  },
  {
    question: "Explain the role of Kubernetes in a modern cloud architecture.",
    suggestedAnswer: "Kubernetes is a container orchestration platform that automates the deployment, scaling, and management of containerized applications. It handles things like load balancing, self-healing (restarting failed containers), and service discovery, allowing you to run resilient applications at scale without manually managing every container."
  },
  {
    question: "How would you design a CI/CD pipeline to automatically build, test, and deploy a web application to the cloud?",
    suggestedAnswer: "I'd use a tool like Jenkins or GitHub Actions. When a developer pushes to a feature branch, the pipeline runs unit tests. On a merge to the main branch, it builds a Docker image, runs integration tests, and pushes the image to a container registry. Finally, it triggers a deployment to a staging environment for review, with a manual approval step to promote it to production."
  },
  {
    question: "What's the difference between a container and a virtual machine?",
    suggestedAnswer: "A VM virtualizes the hardware to run a full guest operating system. A container virtualizes the OS, allowing multiple containers to run on a single host OS kernel. Containers are much more lightweight, start faster, and use fewer resources, making them ideal for microservices. VMs provide stronger isolation and are better for running different operating systems."
  },
  {
    question: "Describe a strategy for monitoring a production application for performance and errors.",
    suggestedAnswer: "I'd implement a three-pronged approach: 1. Logging: Aggregate application logs using a service like Datadog or the ELK stack. 2. Metrics: Collect time-series data on system performance (CPU, memory) and application metrics (request latency, error rate) using Prometheus. 3. Tracing: Use a tool like Jaeger or OpenTelemetry to trace requests as they move through different services, helping to pinpoint bottlenecks."
  }
];

const gameArVrDeveloperQuestions: Question[] = [
  {
    question: "Explain the concept of a 'game loop' and its main components.",
    suggestedAnswer: "The game loop is the core of a game. It's an infinite loop that keeps the game running. Its main components are: 1. Process Input: Handle player controls. 2. Update: Update the game state, physics, and AI based on input and time passed. 3. Render: Draw the updated game state to the screen. This loop runs every frame."
  },
  {
    question: "What is a shader, and what are some common types of shaders used in game development?",
    suggestedAnswer: "A shader is a program that runs on the GPU and is responsible for rendering graphics. Common types include Vertex Shaders, which manipulate the position of vertices in 3D space, and Fragment (or Pixel) Shaders, which calculate the color of individual pixels. They are used for everything from lighting and shadows to special effects."
  },
  {
    question: "How would you optimize a game to maintain a high frame rate (FPS) on lower-end hardware?",
    suggestedAnswer: "Optimization is key. I'd start by profiling to find bottlenecks. Common techniques include reducing polygon counts in models, using lower-resolution textures, implementing Level of Detail (LOD) systems, optimizing shaders, and 'baking' lighting into lightmaps instead of calculating it in real-time."
  },
  {
    question: "What are the unique challenges of developing for VR compared to traditional screen-based games?",
    suggestedAnswer: "The biggest challenge in VR is maintaining a high and stable frame rate (typically 90 FPS or more) to prevent motion sickness. Other challenges include designing intuitive interaction and locomotion systems that don't cause discomfort, and creating a user interface that works well in a 3D space."
  },
  {
    question: "Describe the difference between object-oriented programming and data-oriented design in the context of game development.",
    suggestedAnswer: "OOP focuses on creating abstractions with objects and classes. Data-Oriented Design (DOD) focuses on how data is laid out in memory to be processed efficiently by the CPU cache. In games with thousands of objects, DOD can be much more performant because it avoids cache misses by keeping data needed for a specific task contiguous in memory."
  }
];

const blockchainDeveloperQuestions: Question[] = [
  {
    question: "What is a smart contract and what are its key properties?",
    suggestedAnswer: "A smart contract is a self-executing contract with the terms of the agreement directly written into code. They run on a blockchain, making them immutable (cannot be changed) and deterministic (they produce the same result for everyone who runs them). They are stored on the public ledger and are transparent."
  },
  {
    question: "Explain the difference between Proof of Work (PoW) and Proof of Stake (PoS) consensus mechanisms.",
    suggestedAnswer: "PoW, used by Bitcoin, requires miners to solve complex computational puzzles to validate transactions and create new blocks, which is energy-intensive. PoS, used by Ethereum, allows validators to stake their own cryptocurrency for a chance to be chosen to create a new block. PoS is much more energy-efficient and has a lower barrier to entry."
  },
  {
    question: "What is the 're-entrancy' attack in Solidity and how can it be prevented?",
    suggestedAnswer: "A re-entrancy attack occurs when a malicious contract calls back into the calling contract before the first invocation of the function is finished. This can be used to drain funds. The best prevention is to use the 'Checks-Effects-Interactions' pattern, where you perform all internal state changes (like updating balances) *before* calling an external contract."
  },
  {
    question: "Describe the architecture of a decentralized application (dApp).",
    suggestedAnswer: "A dApp's backend logic resides on a decentralized peer-to-peer network (the blockchain), consisting of smart contracts. The frontend is typically a standard web application (e.g., built with React) that communicates with the blockchain via a user's wallet (like MetaMask), which handles transactions and cryptographic signatures."
  },
  {
    question: "What are ERC-20 and ERC-721 tokens, and what is the main difference between them?",
    suggestedAnswer: "Both are standards for tokens on the Ethereum blockchain. ERC-20 is a standard for fungible tokens, meaning each token is identical and interchangeable, like currency. ERC-721 is a standard for non-fungible tokens (NFTs), where each token is unique and has a distinct value, like a piece of art or a collectible."
  }
];

const uiUxDesignerQuestions: Question[] = [
  {
    question: "Walk me through your process for designing a new feature, from user research to final handoff.",
    suggestedAnswer: "My process starts with understanding the problem through user research and stakeholder interviews. Then, I move to ideation, creating user flows and wireframes. After feedback, I develop high-fidelity mockups and interactive prototypes in a tool like Figma. I conduct usability testing on the prototype and iterate based on feedback. Finally, I hand off the polished designs, specs, and assets to the engineering team."
  },
  {
    question: "What is the importance of a design system, and how do you contribute to one?",
    suggestedAnswer: "A design system ensures consistency and efficiency across a product. It's a single source of truth for UI components, styles, and guidelines. I contribute by identifying and creating reusable components, documenting their usage, and working with developers to ensure the coded components match the design specifications."
  },
  {
    question: "How do you ensure your designs are accessible (a11y) and how would you implement those considerations in HTML/CSS?",
    suggestedAnswer: "I design with accessibility in mind from the start, ensuring sufficient color contrast, clear typography, and logical focus order. In code, I would use semantic HTML (e.g., `<nav>`, `<button>`) to provide context for screen readers, add ARIA attributes where necessary, and ensure all interactive elements are keyboard-navigable."
  },
  {
    question: "Describe a time you had to balance user needs with business requirements or technical constraints.",
    suggestedAnswer: "A user research study showed a desire for a complex feature, but the business needed a faster MVP launch and engineering had technical limitations. I acted as a facilitator, proposing a phased approach. We launched a simplified version of the feature that met the core user need and business deadline, with a clear roadmap to build out the full functionality later."
  },
  {
    question: "Given a design mockup, how would you translate it into a responsive component using HTML and CSS?",
    suggestedAnswer: "First, I'd break the mockup into logical HTML elements with semantic tags. Then, I'd use CSS for styling. For layout, I'd primarily use Flexbox or CSS Grid as they are powerful and flexible. To ensure responsiveness, I'd use relative units like `rem` and `em`, and apply media queries to adjust the layout, font sizes, and spacing for different screen sizes, from mobile to desktop."
  }
];

export const roleBasedQuestions: RoleQuestions = {
  "General": generalQuestions,
  "Software Engineer (SDE – Product-based Companies)": softwareEngineerSDEQuestions,
  "Full-Stack Developer": fullStackDeveloperQuestions,
  "AI / Machine Learning Engineer": aiMlEngineerQuestions,
  "Frontend Developer": [
    {
        question: "What is the difference between `let`, `const`, and `var` in JavaScript?",
        suggestedAnswer: "`var` is function-scoped and hoisted, `let` and `const` are block-scoped. `let` can be reassigned, but `const` cannot. Using `let` and `const` is modern best practice as it prevents common bugs related to scope."
    },
    {
        question: "Can you explain the concept of the Virtual DOM and why frameworks like React use it?",
        suggestedAnswer: "The Virtual DOM is a lightweight in-memory representation of the real DOM. When an application's state changes, React creates a new Virtual DOM tree, compares it with the previous one (a process called 'diffing'), and then calculates the most efficient way to update the real DOM. This avoids costly direct manipulations of the real DOM, leading to better performance."
    },
    {
        question: "How would you optimize a web page for performance?",
        suggestedAnswer: "I'd focus on several areas: minimizing HTTP requests by bundling CSS and JS, compressing assets (like images and code), using browser caching, optimizing the critical rendering path by loading CSS before JS, and using techniques like lazy loading for images and code splitting for JavaScript bundles."
    },
    {
        question: "What are React Hooks, and what problem do they solve?",
        suggestedAnswer: "React Hooks are functions that let you 'hook into' React state and lifecycle features from function components. They solve the problem of having to write complex class components to manage state or side effects, allowing for cleaner, more reusable, and more composable logic without classes."
    },
    {
        question: "Explain the CSS box model.",
        suggestedAnswer: "The CSS box model is a box that wraps around every HTML element. It consists of: margins, borders, padding, and the actual content. Understanding it is fundamental for layout and spacing, as it dictates how elements are sized and positioned on the page."
    }
  ],
  "Backend Developer": [
    {
        question: "Explain the difference between SQL and NoSQL databases. When would you choose one over the other?",
        suggestedAnswer: "SQL databases are relational, with structured data and a predefined schema (e.g., PostgreSQL, MySQL). NoSQL databases are non-relational and have dynamic schemas for unstructured data (e.g., MongoDB, Cassandra). I'd choose SQL for applications requiring complex queries and data integrity, like an e-commerce site. I'd use NoSQL for applications with large amounts of data and flexible schema needs, like a social media feed or IoT application."
    },
    {
        question: "Describe the request/response lifecycle in a typical web application.",
        suggestedAnswer: "A user's browser sends an HTTP request to a server. A load balancer might route it to a web server, which passes it to the application code. The application processes the request (e.g., queries a database, performs business logic), generates an HTML page or JSON data, and sends it back as an HTTP response. The browser then renders the response for the user."
    },
    {
        question: "What is the purpose of indexing in a database?",
        suggestedAnswer: "Database indexing is a technique to speed up the retrieval of records from a table. An index is a special lookup table that the database search engine can use to find data quickly, much like an index in a book. While it speeds up read operations (SELECT), it can slow down write operations (INSERT, UPDATE, DELETE) because the index also needs to be updated."
    },
    {
        question: "Explain the concept of idempotency in the context of APIs.",
        suggestedAnswer: "An idempotent API endpoint is one where making the same request multiple times produces the same result as making it once. For example, a `DELETE` request is idempotent because deleting a resource multiple times has the same effect as deleting it once. This is important for building robust systems, as it allows clients to safely retry requests without causing unintended side effects."
    },
    {
        question: "What is a message queue, and what are some use cases for it?",
        suggestedAnswer: "A message queue (like RabbitMQ or Kafka) is a form of asynchronous service-to-service communication. It allows services to communicate without being directly connected. Use cases include: decoupling services, load balancing, and handling long-running background jobs like video processing or sending emails without blocking the main application thread."
    }
  ],
  "Cybersecurity Engineer": [
    {
        question: "What is the difference between symmetric and asymmetric encryption?",
        suggestedAnswer: "Symmetric encryption uses a single key for both encryption and decryption, making it fast but requiring a secure way to share the key. Asymmetric encryption uses a key pair: a public key to encrypt and a private key to decrypt. It's slower but more secure for key exchange, as the private key is never shared."
    },
    {
        question: "How would you respond to a suspected data breach?",
        suggestedAnswer: "I would follow an incident response plan: 1. Containment: Isolate the affected systems to prevent further damage. 2. Eradication: Identify and remove the root cause of the breach. 3. Recovery: Restore systems from clean backups and monitor for any further malicious activity. 4. Post-mortem: Document the incident, analyze what went wrong, and improve security controls to prevent recurrence."
    },
    {
        question: "What are the common types of web application vulnerabilities, and how can they be prevented?",
        suggestedAnswer: "Common vulnerabilities include SQL Injection (prevented with parameterized queries), Cross-Site Scripting (XSS) (prevented by sanitizing user input and using Content Security Policy), and Cross-Site Request Forgery (CSRF) (prevented with anti-CSRF tokens). Regular security audits and secure coding practices are essential."
    },
    {
        question: "What is a 'man-in-the-middle' (MITM) attack?",
        suggestedAnswer: "A man-in-the-middle attack is when an attacker secretly intercepts and relays communication between two parties who believe they are directly communicating with each other. The attacker can eavesdrop on the conversation or even alter the data being transmitted. Using encrypted communication protocols like HTTPS is a primary defense against MITM attacks."
    },
    {
        question: "What is the principle of least privilege, and why is it important?",
        suggestedAnswer: "The principle of least privilege dictates that a user or system should only have the minimum levels of access—or permissions—necessary to perform its job functions. This is a fundamental security concept because it limits the damage that can be caused by an accident, error, or a compromised account. If an account is breached, the attacker's access is confined to a limited scope."
    }
  ],
  "Mobile App Developer": mobileAppDeveloperQuestions,
  "Cloud / DevOps Engineer": cloudDevOpsEngineerQuestions,
  "Data Scientist / Data Analyst": [
    {
        question: "Explain the difference between a classification and a regression model.",
        suggestedAnswer: "Define the core distinction. 'A classification model predicts a discrete category, like 'spam' or 'not spam'. A regression model predicts a continuous value, like a house price or future sales. The key difference is the output: a category versus a number.'"
    },
    {
        question: "You're given a dataset with many missing values. How would you handle it?",
        suggestedAnswer: "Discuss various techniques. 'My approach depends on the context. If the missing data is small, I might remove the rows. For numerical data, I could use mean, median, or mode imputation. For more complex cases, I might build a predictive model (like k-NN or a regression) to estimate the missing values based on other features in the dataset.'"
    },
    {
        question: "What is overfitting, and how can you prevent it?",
        suggestedAnswer: "Overfitting occurs when a machine learning model learns the training data too well, including its noise and random fluctuations, and as a result, it performs poorly on new, unseen data. You can prevent it by using techniques like cross-validation, simplifying the model, using more training data, or applying regularization methods like L1 or L2 to penalize complex models."
    },
    {
        question: "What is the difference between a data warehouse and a data lake?",
        suggestedAnswer: "A data warehouse stores structured, filtered data that has already been processed for a specific purpose. A data lake is a vast pool of raw data in its native format. Data warehouses are ideal for traditional business intelligence, while data lakes are better for deep learning and data science, where you want to explore raw, unstructured data."
    },
    {
        question: "How would you explain a p-value to a non-technical stakeholder?",
        suggestedAnswer: "I'd use an analogy. 'Imagine we have a hypothesis, like 'this new website design increases sales.' The p-value is the probability of seeing our results (or even more extreme results) if the new design had *no effect* at all. A small p-value (typically less than 5%) suggests that our results are unlikely to be due to random chance, so we can be more confident that the new design actually works.'"
    }
  ],
  "Game Developer / AR/VR Developer": gameArVrDeveloperQuestions,
  "Blockchain Developer": blockchainDeveloperQuestions,
  "UI/UX Designer": uiUxDesignerQuestions,
  "Product Manager": [
    {
      question: "How would you decide what feature to build next for our product?",
      suggestedAnswer: "Talk about your prioritization framework. 'I'd use a framework like RICE (Reach, Impact, Confidence, Effort). I'd gather data from user feedback, market research, and stakeholder input to score potential features. This data-driven approach helps us focus on features that deliver the most value to the most users with a reasonable amount of effort.'"
    },
    {
      question: "Our user engagement is down 10% month-over-month. How would you investigate this?",
      suggestedAnswer: "Show your analytical process. 'First, I'd work with data analysts to segment the drop: is it affecting all users or a specific cohort? Is it tied to a recent release or a change in marketing? I'd then move to qualitative analysis, like user surveys or interviews, to understand the 'why' behind the data. The goal is to form a hypothesis and then test it.'"
    },
    {
      question: "How do you measure the success of a feature after it's launched?",
      suggestedAnswer: "I'd define Key Performance Indicators (KPIs) before launch. These could include adoption rate (how many users are using the feature), user satisfaction (measured via surveys or feedback), and impact on business metrics (like conversion rate or revenue). I'd track these KPIs on a dashboard and compare them to our initial goals to determine success."
    }
  ]
};