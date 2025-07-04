export type Question = {
  question: string;
  suggestedAnswer: string;
};

export type RoleQuestions = {
  [role:string]: Question[];
};

const softwareEngineerQuestions: Question[] = [
    {
      question: "How would you design a scalable system for a service like Instagram?",
      suggestedAnswer: "Discuss high-level components. 'I'd start with a load balancer distributing requests to web servers. These servers would handle user authentication and API requests. For the feed, I'd use a fan-out-on-write approach where, upon upload, a photo is pushed to the feeds of all followers. This would be managed by a message queue and worker services. We'd use a distributed database for photo metadata and a CDN for image storage and delivery to ensure low latency.'"
    },
    {
      question: "Explain the concept of CI/CD and why it's important for a development team.",
      suggestedAnswer: "CI/CD stands for Continuous Integration and Continuous Deployment/Delivery. CI is the practice of automatically building and testing code every time a developer commits changes. CD is the practice of automatically deploying all code changes to a testing or production environment. It's crucial because it automates the release process, catches bugs early, and allows teams to deliver value to users faster and more reliably."
    },
    {
      question: "What is containerization (e.g., Docker), and how does it differ from virtualization (e.g., VMware)?",
      suggestedAnswer: "Containerization packages an application and its dependencies into a single, isolated unit that runs on a shared OS kernel, making it lightweight and fast. Virtualization creates a full virtual machine with its own guest OS, which is much heavier. I'd use containers for deploying microservices or ensuring consistent environments, and VMs for running different operating systems on a single server or for legacy applications."
    },
    {
      question: "What are the trade-offs between monolithic and microservices architectures?",
      suggestedAnswer: "A monolith is simpler to develop and deploy initially but can become complex and slow to change as it grows. Microservices offer independent scalability and deployment, and allow for technology diversity, but they introduce operational complexity, network latency, and challenges with data consistency across services. The choice depends on the team's size, the complexity of the application, and scalability requirements."
    },
    {
      question: "Explain the CAP theorem and how it applies to distributed systems.",
      suggestedAnswer: "The CAP theorem states that a distributed database can only provide two of the following three guarantees: Consistency (every read receives the most recent write), Availability (every request receives a response), and Partition Tolerance (the system continues to operate despite network partitions). In modern distributed systems, partition tolerance is a must, so designers must choose between consistency (CP systems like Google's Bigtable) and availability (AP systems like Amazon's DynamoDB)."
    }
];

const softwareDeveloperQuestions: Question[] = [
    {
      question: "Describe the most challenging bug you've ever fixed.",
      suggestedAnswer: "Explain the bug's complexity, your debugging process, and what you learned. 'I once chased a memory leak in a Node.js service that only occurred under heavy load. I used heap dumps and memory profiling tools to trace it back to a third-party library's event listener that wasn't being properly garbage collected. I submitted a patch to the library and implemented a temporary workaround, preventing service crashes and teaching me a lot about memory management.'"
    },
    {
      question: "What is Big O notation, and why is it important for a developer?",
      suggestedAnswer: "Big O notation describes the performance or complexity of an algorithm in the worst-case scenario. It's crucial for developers to understand because it helps in choosing efficient algorithms that scale well with large amounts of data, directly impacting the application's performance and user experience."
    },
    {
      question: "Explain the difference between an abstract class and an interface.",
      suggestedAnswer: "An abstract class can have both implemented and unimplemented methods, and a class can only inherit from one abstract class. An interface can only have method signatures (no implementation), and a class can implement multiple interfaces. Use an abstract class for a strong 'is-a' relationship, and an interface to define a 'can-do' capability."
    },
    {
      question: "How do you approach code reviews? What are the key things you look for?",
      suggestedAnswer: "I approach code reviews collaboratively, aiming to improve the code, not criticize the author. I look for correctness (does it do what it's supposed to?), readability and maintainability, potential bugs or edge cases, and adherence to our team's coding standards. I always provide constructive suggestions and explain the 'why' behind my comments."
    },
    {
      question: "Explain the difference between `git merge` and `git rebase`.",
      suggestedAnswer: "`git merge` creates a new 'merge commit' in the history, tying together the histories of two branches. It's non-destructive. `git rebase` moves the entire feature branch to begin on the tip of the main branch, rewriting the project history and creating a cleaner, linear sequence of commits. I use merge for public branches and rebase for my local feature branches to keep the history clean before merging."
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
    {
      question: "Tell me about a time you received difficult feedback. How did you handle it?",
      suggestedAnswer: "Focus on your receptiveness and growth. 'In a code review, a senior developer pointed out that my approach was inefficient. Initially, I was a bit defensive, but I took a step back and asked them to walk me through their suggestion. I realized they were right, and their approach was much better. I thanked them for the feedback and have used that pattern ever since. It taught me to see feedback as a gift for improvement, not a criticism.'"
    }
  ],
  "Software Engineer": softwareEngineerQuestions,
  "Software Developer": softwareDeveloperQuestions,
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
    },
    {
        question: "What is web accessibility (a11y), and why is it important?",
        suggestedAnswer: "Web accessibility, or a11y, is the practice of ensuring that websites and applications are usable by everyone, including people with disabilities. This is important not only for ethical reasons but also because it can improve SEO and reach a wider audience. Key practices include using semantic HTML, providing alt text for images, ensuring keyboard navigability, and maintaining sufficient color contrast."
    },
    {
        question: "When would you use a state management library like Redux or Zustand instead of just React's built-in state management?",
        suggestedAnswer: "I'd reach for a global state management library when multiple, non-related components need to share and update the same state. While React's Context API can handle this, libraries like Redux or Zustand offer more powerful developer tools, middleware for handling side effects, and more optimized performance for complex, large-scale applications where state is frequently updated from many different places."
    }
  ],
  "Backend Developer": [
    {
        question: "Explain the difference between SQL and NoSQL databases. When would you choose one over the other?",
        suggestedAnswer: "SQL databases are relational, with structured data and a predefined schema (e.g., PostgreSQL, MySQL). NoSQL databases are non-relational and have dynamic schemas for unstructured data (e.g., MongoDB, Cassandra). I'd choose SQL for applications requiring complex queries and data integrity, like an e-commerce site. I'd use NoSQL for applications with large amounts of data and flexible schema needs, like a social media feed or IoT application."
    },
    {
        question: "What's the difference between REST and GraphQL? When would you use one over the other?",
        suggestedAnswer: "Explain the core concepts. 'REST is an architectural style with fixed endpoints, while GraphQL is a query language that allows clients to request exactly the data they need. I'd use REST for simple, well-defined APIs. I'd choose GraphQL for complex applications with nested data or mobile apps where minimizing data transfer is critical, as it avoids over-fetching.'"
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
        question: "Describe a few common caching strategies.",
        suggestedAnswer: "Common caching strategies include: 1. Cache-Aside: The application code is responsible for checking the cache first, and if it's a miss, it queries the database and then populates the cache. 2. Read-Through: The cache library itself handles the logic of fetching from the database on a cache miss. 3. Write-Through: Data is written to the cache and the database at the same time, ensuring consistency but adding latency to write operations. The best strategy depends on the application's read/write patterns."
    },
    {
        question: "What is a message queue, and what are some use cases for it?",
        suggestedAnswer: "A message queue (like RabbitMQ or Kafka) is a form of asynchronous service-to-service communication. It allows services to communicate without being directly connected. Use cases include: decoupling services so that the failure of one doesn't impact others, load balancing by distributing tasks among multiple workers, and handling long-running background jobs like video processing or sending emails without blocking the main application thread."
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
    },
    {
        question: "What is a 'man-in-the-middle' (MITM) attack?",
        suggestedAnswer: "A man-in-the-middle attack is when an attacker secretly intercepts and relays communication between two parties who believe they are directly communicating with each other. The attacker can eavesdrop on the conversation or even alter the data being transmitted. Using encrypted communication protocols like HTTPS is a primary defense against MITM attacks."
    },
    {
        question: "What is the principle of least privilege, and why is it important?",
        suggestedAnswer: "The principle of least privilege dictates that a user or system should only have the minimum levels of access—or permissions—necessary to perform its job functions. This is a fundamental security concept because it limits the damage that can be caused by an accident, error, or a compromised account. If an account is breached, the attacker's access is confined to a limited scope."
    },
    {
        question: "What is a SIEM, and what are its primary functions?",
        suggestedAnswer: "SIEM stands for Security Information and Event Management. It's a tool that aggregates log data from various sources across a network, analyzes it for security threats, and generates alerts. Its primary functions are to provide real-time analysis of security alerts, help with incident response, and generate reports for compliance purposes."
    },
    {
        question: "How would you educate employees to recognize and avoid phishing attacks?",
        suggestedAnswer: "I would implement a multi-layered training program. This would include regular, mandatory training sessions on identifying phishing red flags (like suspicious sender addresses, urgent language, and unexpected attachments). I'd also run simulated phishing campaigns to test employees' awareness and provide immediate feedback. Finally, I'd establish a clear process for employees to report suspected phishing emails to the security team."
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
    },
    {
      question: "How do you measure the success of a feature after it's launched?",
      suggestedAnswer: "I'd define Key Performance Indicators (KPIs) before launch. These could include adoption rate (how many users are using the feature), user satisfaction (measured via surveys or feedback), and impact on business metrics (like conversion rate or revenue). I'd track these KPIs on a dashboard and compare them to our initial goals to determine success."
    },
    {
      question: "How do you balance building new features with paying down technical debt?",
      suggestedAnswer: "I view technical debt as a product concern, not just an engineering one. I work with the engineering lead to understand the impact of the debt and quantify its cost (e.g., slower development, increased bugs). I then advocate for allocating a percentage of each sprint—say, 15-20%—to addressing tech debt, framing it as an investment in future velocity and product quality. This ensures we're not just building a 'feature factory' but a sustainable product."
    },
    {
      question: "What is the role of user personas in product development?",
      suggestedAnswer: "User personas are fictional characters created to represent the different user types that might use a product. They are crucial because they help the entire team (designers, developers, marketers) build empathy for the users. Personas guide design decisions, help prioritize features based on user needs, and ensure we're building a product for a real person with real problems, not just for ourselves."
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
    },
    {
        question: "What is overfitting, and how can you prevent it?",
        suggestedAnswer: "Overfitting occurs when a machine learning model learns the training data too well, including its noise and random fluctuations, and as a result, it performs poorly on new, unseen data. You can prevent it by using techniques like cross-validation, simplifying the model, using more training data, or applying regularization methods like L1 or L2 to penalize complex models."
    },
    {
        question: "What is feature engineering, and why is it important in machine learning?",
        suggestedAnswer: "Feature engineering is the process of using domain knowledge to create new input variables (features) from the raw data to improve the performance of a machine learning model. It's crucial because even the best model can't perform well with poor features. Examples include creating interaction terms, extracting components from a date, or using one-hot encoding for categorical variables."
    },
    {
        question: "How can you detect and mitigate bias in a machine learning model?",
        suggestedAnswer: "Detecting bias involves auditing the model's predictions across different demographic groups to see if there are significant performance disparities. Mitigation strategies include: 1. Pre-processing: Resampling the training data to be more balanced. 2. In-processing: Adding constraints to the model during training to reduce its reliance on sensitive attributes. 3. Post-processing: Adjusting the model's prediction thresholds for different groups to achieve fairness."
    }
  ]
};