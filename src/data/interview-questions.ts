export type Question = {
  question: string;
  suggestedAnswer: string;
};

export type RoleQuestions = {
  [role: string]: Question[];
};

const softwareEngineerQuestions: Question[] = [
    {
      question: "Describe the most challenging bug you've ever fixed.",
      suggestedAnswer: "Explain the bug's complexity, your debugging process, and what you learned. 'I once chased a memory leak in a Node.js service that only occurred under heavy load. I used heap dumps and memory profiling tools to trace it back to a third-party library's event listener that wasn't being properly garbage collected. I submitted a patch to the library and implemented a temporary workaround, preventing service crashes and teaching me a lot about memory management.'"
    },
    {
      question: "How would you design a simple URL shortening service like TinyURL?",
      suggestedAnswer: "Discuss system design concepts. 'I'd start with a simple key-value store. The user provides a long URL, the system generates a unique short key (e.g., a 6-character alphanumeric string), and stores the mapping. When a user hits the short URL, the service does a lookup and redirects them. For scalability, I'd consider a distributed database, a load balancer, and a robust algorithm for generating non-colliding short keys, perhaps using a base-62 encoding of a unique counter.'"
    },
    {
      question: "What's the difference between REST and GraphQL? When would you use one over the other?",
      suggestedAnswer: "Explain the core concepts. 'REST is an architectural style with fixed endpoints, while GraphQL is a query language that allows clients to request exactly the data they need. I'd use REST for simple, well-defined APIs. I'd choose GraphQL for complex applications with nested data or mobile apps where minimizing data transfer is critical, as it avoids over-fetching.'"
    }
];

export const roleBasedQuestions: RoleQuestions = {
  "General": [
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
  ],
  "Software Engineer": softwareEngineerQuestions,
  "Software Developer": softwareEngineerQuestions,
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
    }
  ],
  "Backend Developer": [
    {
        question: "Explain the difference between SQL and NoSQL databases. When would you choose one over the other?",
        suggestedAnswer: "SQL databases are relational, with structured data and a predefined schema (e.g., PostgreSQL, MySQL). NoSQL databases are non-relational and have dynamic schemas for unstructured data (e.g., MongoDB, Cassandra). I'd choose SQL for applications requiring complex queries and data integrity, like an e-commerce site. I'd use NoSQL for applications with large amounts of data and flexible schema needs, like a social media feed or IoT application."
    },
    {
        question: "What are microservices, and what are their pros and cons compared to a monolithic architecture?",
        suggestedAnswer: "Microservices is an architectural style that structures an application as a collection of loosely coupled services. Pros include independent deployment, technology diversity, and improved scalability. Cons can include complexity in management, network latency, and challenges with data consistency across services. A monolith is simpler to start with but can become difficult to scale and maintain."
    },
    {
        question: "Describe the request/response lifecycle in a typical web application.",
        suggestedAnswer: "A user's browser sends an HTTP request to a server. A load balancer might route it to a web server, which passes it to the application code. The application processes the request (e.g., queries a database, performs business logic), generates an HTML page or JSON data, and sends it back as an HTTP response. The browser then renders the response for the user."
    }
  ],
  "Cybersecurity Analyst": [
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
    }
  ],
  "Product Manager": [
    {
      question: "How would you decide what feature to build next for our product?",
      suggestedAnswer: "Talk about your prioritization framework. 'I'd use a framework like RICE (Reach, Impact, Confidence, Effort). I'd gather data from user feedback, market research, and stakeholder input to score potential features. This data-driven approach helps us focus on features that deliver the most value to the most users with a reasonable amount of effort.'"
    },
    {
      question: "Our user engagement is down 10% month-over-month. How would you investigate this?",
      suggestedAnswer: "Show your analytical process. 'First, I'd work with data analysts to segment the drop: is it affecting all users or a specific cohort? Is it tied to a recent release or a change in marketing? I'd then move to qualitative analysis, like user surveys or interviews, to understand the 'why' behind the data. The goal is to form a hypothesis and then test it.'"
    }
  ],
  "Data Scientist": [
    {
        question: "Explain the difference between a classification and a regression model.",
        suggestedAnswer: "Define the core distinction. 'A classification model predicts a discrete category, like 'spam' or 'not spam'. A regression model predicts a continuous value, like a house price or future sales. The key difference is the output: a category versus a number.'"
    },
    {
        question: "You're given a dataset with many missing values. How would you handle it?",
        suggestedAnswer: "Discuss various techniques. 'My approach depends on the context. If the missing data is small, I might remove the rows. For numerical data, I could use mean, median, or mode imputation. For more complex cases, I might build a predictive model (like k-NN or a regression) to estimate the missing values based on other features in the dataset.'"
    }
  ]
};