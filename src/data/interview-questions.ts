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
  },
  {
    question: "You need to design a system that processes a high volume of real-time events. What architectural patterns and technologies would you consider?",
    suggestedAnswer: "I'd consider a stream-processing architecture. I would use a message broker like Apache Kafka to ingest the high-volume events. For processing, I'd use a framework like Apache Flink or Spark Streaming to perform real-time analytics, transformations, or aggregations. The results could then be pushed to a data warehouse, a real-time dashboard, or another service. This pattern decouples ingestion from processing and is highly scalable."
  },
  {
    question: "How would you design a URL shortening service like TinyURL?",
    suggestedAnswer: "The core is a hash function that converts a long URL to a short, unique key. This key is stored in a distributed database, mapping it back to the original URL. When a user accesses the short URL, the service does a database lookup for the key and redirects them to the original long URL. To handle collisions and generate unique keys, I might use a combination of hashing and a counter."
  },
  {
    question: "Explain the difference between concurrency and parallelism.",
    suggestedAnswer: "Concurrency is when multiple tasks can run in overlapping time periods, but not necessarily at the same instant (e.g., a single CPU core switching between tasks). Parallelism is when multiple tasks execute simultaneously (e.g., on multiple CPU cores). Concurrency is about dealing with lots of things at once; parallelism is about doing lots of things at once."
  },
  {
    question: "You are given a string. Find the length of the longest substring without repeating characters. Explain your algorithmic approach and its time complexity.",
    suggestedAnswer: "I would use the 'sliding window' technique. I'd have two pointers, `start` and `end`, and a hash set to store characters in the current window. I'd expand the window by moving `end`. If a character is already in the set, I'd shrink the window from the `start` until the duplicate is removed. The time complexity is O(n) because each character is visited at most twice."
  },
  {
    question: "How would you design a distributed key-value store like Amazon's DynamoDB? Discuss partitioning, replication, and consistency.",
    suggestedAnswer: "I'd use consistent hashing to partition the data across nodes. Each node would be replicated to several other nodes for fault tolerance. For consistency, I'd use a tunable model, like eventual consistency for high availability, but also offer strongly consistent reads at a higher latency cost. I'd use a mechanism like vector clocks to handle conflicting writes."
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
  },
  {
    question: "What are WebSockets, and when would you use them over traditional HTTP requests?",
    suggestedAnswer: "WebSockets provide a full-duplex communication channel over a single, long-lived TCP connection. Unlike HTTP, which is a request-response protocol, WebSockets allow the server to push data to the client without the client having to request it. I would use WebSockets for real-time applications like chat apps, live notifications, or collaborative editing tools where low-latency, bidirectional communication is essential."
  },
  {
    question: "How would you secure an API endpoint?",
    suggestedAnswer: "API security is multi-layered. It starts with authentication (e.g., JWT or OAuth 2.0) to verify identity. Then, authorization ensures the user has permission to perform the action. I'd also implement rate limiting to prevent abuse, validate all incoming data to prevent injection attacks, and use HTTPS to encrypt data in transit."
  },
  {
    question: "What is the N+1 query problem and how do you solve it?",
    suggestedAnswer: "The N+1 query problem occurs when an application makes one query to retrieve a list of items, and then N subsequent queries to fetch related data for each of those items. This is very inefficient. You can solve it by 'eager loading' the related data in the initial query, for example, by using a JOIN in SQL or a feature provided by an ORM."
  },
  {
    question: "How would you implement JWT-based authentication in a MERN stack application, ensuring secure token storage on the client-side?",
    suggestedAnswer: "On the backend (Node/Express), I'd create login/register endpoints. Upon successful login, I'd generate a JWT and an HTTP-only refresh token. The JWT is sent to the client to be stored in memory (e.g., React state), while the refresh token is stored in a secure, HTTP-only cookie. The JWT is used for authenticating API requests. If it expires, the client can use the refresh token to get a new JWT without forcing the user to log in again."
  },
  {
    question: "What is Server-Side Rendering (SSR) and how does it differ from Static Site Generation (SSG) in a framework like Next.js?",
    suggestedAnswer: "SSR generates the HTML for a page on the server in response to each request. This is great for pages with dynamic, user-specific content. SSG generates the HTML at build time, so a static file is served for every request, which is extremely fast. SSG is ideal for content that doesn't change often, like a blog post or marketing page."
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
  },
  {
    question: "Explain what MLOps is and why it's important.",
    suggestedAnswer: "MLOps is a set of practices that combines Machine Learning, DevOps, and Data Engineering to automate and streamline the end-to-end machine learning lifecycle. It's important because it brings rigor and reliability to ML projects, covering everything from data gathering and model training to deployment and monitoring. It helps ensure that models are reproducible, auditable, and can be updated and deployed efficiently and safely."
  },
  {
    question: "What are some common evaluation metrics for a classification model, and when would you use one over the other?",
    suggestedAnswer: "Common metrics include Accuracy, Precision, Recall, and F1-Score. Accuracy is good for balanced datasets. For imbalanced datasets, like fraud detection, Precision (how many positive predictions were correct) and Recall (how many actual positives were found) are better. F1-Score is the harmonic mean of Precision and Recall, providing a single metric that balances both."
  },
  {
    question: "Explain the difference between supervised, unsupervised, and reinforcement learning.",
    suggestedAnswer: "Supervised learning uses labeled data to train a model to make predictions (e.g., classification, regression). Unsupervised learning finds patterns in unlabeled data (e.g., clustering, dimensionality reduction). Reinforcement learning involves an agent learning to make decisions by taking actions in an environment to maximize a cumulative reward (e.g., training a bot to play a game)."
  },
  {
    question: "Explain the architecture of a Convolutional Neural Network (CNN). What are its key layers and what do they do?",
    suggestedAnswer: "A CNN typically consists of convolutional layers, pooling layers, and fully-connected layers. Convolutional layers apply filters to the input image to create feature maps. Pooling layers (like MaxPooling) downsample the feature maps to reduce dimensionality. Finally, fully-connected layers perform classification based on the high-level features extracted by the previous layers."
  },
  {
    question: "What is transfer learning and how would you apply it to an image classification task using a pre-trained model from TensorFlow Hub or PyTorch Hub?",
    suggestedAnswer: "Transfer learning is a technique where a model developed for a task is reused as the starting point for a model on a second task. I would load a pre-trained model (like MobileNetV2), freeze the convolutional base to preserve its learned features, and then add my own new classifier layers on top. I would then train only these new layers on my specific dataset, which is much faster and requires less data than training from scratch."
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
  },
  {
    question: "What strategies would you use to handle offline functionality in a mobile app?",
    suggestedAnswer: "I would use a local database, like SQLite or Realm, to cache data on the device. When the app is offline, it reads from and writes to this local cache. I'd implement a synchronization mechanism that, when the connection is restored, sends pending changes to the server and fetches any new data. This ensures a seamless user experience even with intermittent connectivity."
  },
  {
    question: "Describe the mobile application lifecycle on either iOS or Android.",
    suggestedAnswer: "On Android, for example, an Activity goes through states like `onCreate()`, `onStart()`, `onResume()` (when it's active), `onPause()` (when another activity comes to the foreground), `onStop()`, and `onDestroy()`. Understanding this lifecycle is critical for managing resources, saving state, and avoiding crashes."
  },
  {
    question: "Explain the difference between `Activity` and `Fragment` in Android development. How do they manage their lifecycles?",
    suggestedAnswer: "An `Activity` is a single, focused thing that the user can do, essentially a screen. A `Fragment` is a modular section of an activity, with its own lifecycle that is tied to the host activity's lifecycle. You can combine multiple fragments in a single activity to build a multi-pane UI and reuse a fragment in multiple activities."
  },
  {
    question: "In Flutter, what is the difference between a `StatelessWidget` and a `StatefulWidget`? Describe how state is managed in a `StatefulWidget`.",
    suggestedAnswer: "A `StatelessWidget` is immutable; its properties cannot change over time. A `StatefulWidget` can maintain state that might change during the widget's lifetime. State is managed in a separate `State` object. When the internal state changes (e.g., via a call to `setState()`), the framework is prompted to rebuild the widget to reflect the new state."
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
  },
  {
    question: "How would you implement a 'blue-green' deployment strategy?",
    suggestedAnswer: "In a blue-green deployment, I'd have two identical production environments: 'blue' (the current live version) and 'green' (the new version). I would deploy the new version to the green environment and run tests. Once it's verified, I'd switch the router to direct all traffic to the green environment. The blue environment is kept on standby for a quick rollback if needed. This strategy minimizes downtime and risk."
  },
  {
    question: "What is the purpose of a service mesh like Istio or Linkerd?",
    suggestedAnswer: "A service mesh is a dedicated infrastructure layer for managing service-to-service communication in a microservices architecture. It provides features like traffic management (e.g., canary deployments), security (e.g., mutual TLS encryption), and observability (e.g., metrics and tracing) without requiring changes to the application code itself."
  },
  {
    question: "How would you manage secrets (like API keys and database passwords) in your infrastructure?",
    suggestedAnswer: "Secrets should never be hardcoded in source code or configuration files. I would use a dedicated secrets management tool like HashiCorp Vault or a cloud provider's service (e.g., AWS Secrets Manager). These tools provide centralized storage, fine-grained access control, auditing, and dynamic secret rotation, which is crucial for security."
  },
  {
    question: "In Terraform, what is the difference between a 'resource' and a 'data source'? Provide an example of when you would use each.",
    suggestedAnswer: "A `resource` block in Terraform declares a piece of infrastructure to be created or managed (e.g., an AWS EC2 instance). A `data source` block allows you to fetch information about an existing resource for use elsewhere in your configuration. For example, you'd use a data source to get the ID of a pre-existing VPC to launch a new EC2 instance into it."
  },
  {
    question: "Describe the components of a Kubernetes control plane (e.g., etcd, kube-apiserver, kube-scheduler). What is the role of each?",
    suggestedAnswer: "The `kube-apiserver` exposes the Kubernetes API. `etcd` is a key-value store for all cluster data. The `kube-scheduler` watches for newly created pods and assigns them to nodes. The `kube-controller-manager` runs controller processes. These components work together to manage the state of the cluster."
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
  },
  {
    question: "What is a physics engine and what are some key concepts it handles?",
    suggestedAnswer: "A physics engine is a library that simulates physical systems. It handles concepts like collision detection (detecting when objects touch), collision response (how they react to touching), gravity, and forces. Using a physics engine like PhysX or Box2D saves developers from having to write complex physics code from scratch."
  },
  {
    question: "Explain the rendering pipeline in a modern game engine.",
    suggestedAnswer: "The rendering pipeline is the sequence of steps the GPU takes to render a 3D scene to a 2D screen. It starts with the application stage (CPU preparing data), then moves to the geometry stage (vertex shading, tessellation), and finally the rasterization stage (pixel shading, depth testing), where the final pixel colors are determined and drawn to the screen."
  },
  {
    question: "In Unity, what is the difference between `Update()`, `FixedUpdate()`, and `LateUpdate()`? When should each be used?",
    suggestedAnswer: "`Update()` is called once per frame and is used for most game logic. `FixedUpdate()` is called at a fixed time interval and is used for physics calculations to ensure consistency. `LateUpdate()` is called once per frame after all `Update()` functions have been called, which is useful for things like a camera that needs to track an object after it has moved."
  },
  {
    question: "Explain how a quaternion is used to represent rotations in 3D space and why it's often preferred over Euler angles.",
    suggestedAnswer: "A quaternion uses four numbers to represent a rotation in 3D space. They are preferred over Euler angles (pitch, yaw, roll) because they avoid the problem of 'gimbal lock,' where two axes can become aligned, causing a loss of one degree of rotational freedom. Quaternions also make interpolating between rotations smoother."
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
  },
  {
    question: "What is 'gas' in Ethereum and how do you optimize for it?",
    suggestedAnswer: "Gas is the fee required to conduct a transaction or execute a contract on the Ethereum blockchain. To optimize for gas, you can use efficient data types (e.g., `uint256`), minimize storage writes (which are very expensive), and write clean, simple code. Tools like the Solidity optimizer can also help reduce gas costs."
  },
  {
    question: "What is a Decentralized Autonomous Organization (DAO)?",
    suggestedAnswer: "A DAO is an organization represented by rules encoded as a computer program that is transparent, controlled by the organization members, and not influenced by a central government. Decisions are made via proposals and voting, and the rules are enforced by smart contracts on the blockchain."
  },
  {
    question: "Explain the role of an oracle in a blockchain ecosystem. Why are they necessary for smart contracts?",
    suggestedAnswer: "Smart contracts cannot access off-chain data (data outside the blockchain) on their own. An oracle is a service that acts as a bridge, finding and verifying real-world data and submitting it to the blockchain to be used by smart contracts. They are necessary for contracts that depend on external information, like weather data or price feeds."
  },
  {
    question: "How would you use Hardhat or Truffle to compile, deploy, and test a simple Solidity smart contract?",
    suggestedAnswer: "I would set up a project, write my Solidity contract in the `contracts` folder, and create a deployment script in the `scripts` folder. I'd configure my network settings (e.g., for a local testnet or a public testnet like Sepolia). Then I would run `npx hardhat compile`, `npx hardhat run scripts/deploy.js`, and write tests using Chai and Mocha in the `test` folder, which can be run with `npx hardhat test`."
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
  },
  {
    question: "What's the difference between user-centered design and human-centered design?",
    suggestedAnswer: "They are very similar, but human-centered design is broader. User-centered design focuses specifically on the end-user of a product. Human-centered design considers all humans affected by the system, including non-users and stakeholders, and also takes into account the ethical and societal impact of the design."
  },
  {
    question: "How do you use quantitative and qualitative data in your design process?",
    suggestedAnswer: "I use quantitative data (like analytics and A/B test results) to understand *what* users are doing at scale. I use qualitative data (like user interviews and usability tests) to understand the *why* behind their actions. Combining both gives a complete picture: the 'what' tells me where the problem is, and the 'why' tells me how to solve it."
  },
  {
    question: "How do you use auto layout and variants in Figma to create a responsive and reusable button component?",
    suggestedAnswer: "I'd create a frame for the button, add text and icon layers inside, and apply auto layout to manage spacing and padding. This makes the button resize automatically with its content. Then, I'd turn this into a component and create variants for different states (e.g., default, hover, disabled) and styles (e.g., primary, secondary), allowing me to switch between them easily across my designs."
  },
  {
    question: "What is Storybook, and how can it help bridge the gap between design and development in a component-based project?",
    suggestedAnswer: "Storybook is a tool for developing UI components in isolation. It allows designers and developers to see all the states and variants of a component without having to run the full application. This creates a shared language and ensures the final coded component perfectly matches the design intent, reducing inconsistencies."
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
    },
    {
        question: "What is the difference between `==` and `===` in JavaScript?",
        suggestedAnswer: "The `==` operator performs type coercion, meaning it tries to convert the operands to the same type before comparison. The `===` operator (strict equality) does not perform type coercion and returns true only if both the value and the type are the same. It's best practice to always use `===` to avoid unexpected behavior."
    },
    {
        question: "What is a closure in JavaScript? Provide an example.",
        suggestedAnswer: "A closure is a function that has access to its outer function's scope, even after the outer function has returned. For example: `function outer() { let count = 0; return function inner() { count++; console.log(count); } } const counter = outer(); counter(); // 1, counter(); // 2`. Here, `inner` has a closure over the `count` variable."
    },
    {
        question: "What is code splitting and how would you implement it in a React application using a tool like Webpack or Vite?",
        suggestedAnswer: "Code splitting is the process of breaking up your application's bundle into smaller chunks that can be loaded on demand. In React, I'd use `React.lazy()` to dynamically import components. This, combined with a bundler like Vite or Webpack, will automatically create separate files for these components, which are only fetched when they are first rendered."
    },
    {
        question: "Explain the difference between Redux and React's Context API for state management. When would you choose one over the other?",
        suggestedAnswer: "Context API is great for passing state down through a component tree without prop drilling, but it can cause performance issues if the state updates frequently, as it re-renders all consuming components. Redux is a more robust solution with a centralized store, middleware for side effects, and performance optimizations. I'd use Context for simple, low-frequency state (like theme) and Redux for complex, high-frequency global state."
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
    },
    {
        question: "What are the different types of database relationships? Explain one.",
        suggestedAnswer: "The main types are one-to-one, one-to-many, and many-to-many. A one-to-many relationship is common, like a `User` having many `Posts`. In a SQL database, this is implemented by having a `user_id` foreign key in the `posts` table, linking each post back to the user who created it."
    },
    {
        question: "What is the difference between authentication and authorization?",
        suggestedAnswer: "Authentication is the process of verifying who a user is (e.g., by checking a username and password). Authorization is the process of verifying what a user is allowed to do (e.g., checking if a user has permission to delete a record). You can't have authorization without authentication."
    },
    {
        question: "What is the difference between REST and GraphQL? Describe a scenario where GraphQL would be a better choice.",
        suggestedAnswer: "REST uses multiple endpoints to fetch fixed data structures, while GraphQL uses a single endpoint where the client can request exactly the data it needs. GraphQL is a better choice for applications with complex data requirements or mobile apps where minimizing payload size is critical, as it avoids over-fetching and under-fetching of data."
    },
    {
        question: "How does connection pooling work in a database, and why is it important for a high-traffic application?",
        suggestedAnswer: "Connection pooling maintains a cache of database connections that can be reused for future requests. Establishing a database connection is an expensive operation. In a high-traffic application, creating a new connection for every request would be very slow and resource-intensive. Connection pooling significantly improves performance by reusing existing connections."
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
    },
    {
        question: "What is the CIA triad in cybersecurity?",
        suggestedAnswer: "The CIA triad stands for Confidentiality, Integrity, and Availability. It's a model designed to guide policies for information security. Confidentiality ensures that data is accessible only to authorized users. Integrity ensures that data is accurate and trustworthy. Availability ensures that authorized users can access the data when they need it."
    },
    {
        question: "What is a DDoS attack, and how can it be mitigated?",
        suggestedAnswer: "A Distributed Denial-of-Service (DDoS) attack is a malicious attempt to disrupt the normal traffic of a targeted server or network by overwhelming it with a flood of internet traffic from multiple sources. Mitigation strategies include using a DDoS protection service (like Cloudflare or AWS Shield), implementing rate limiting, and having a scalable infrastructure that can absorb traffic spikes."
    },
    {
        question: "What is the OWASP Top 10? Name three vulnerabilities from the list and explain how to mitigate them.",
        suggestedAnswer: "The OWASP Top 10 is a standard awareness document for web application security. Three examples are: 1. Injection (like SQL injection), mitigated by using parameterized queries. 2. Broken Authentication, mitigated by implementing multi-factor authentication and strong password policies. 3. Security Misconfiguration, mitigated by hardening systems and removing default accounts or passwords."
    },
    {
        question: "Explain the concept of a Security Information and Event Management (SIEM) system and its role in a Security Operations Center (SOC).",
        suggestedAnswer: "A SIEM system aggregates log data from various sources across a network, analyzes it in real-time to identify potential security threats, and generates alerts. In a SOC, analysts use the SIEM as their primary tool to monitor for incidents, investigate alerts, and respond to threats, providing a centralized view of the organization's security posture."
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
    },
    {
        question: "What is A/B testing and how would you design an A/B test?",
        suggestedAnswer: "A/B testing is a method of comparing two versions of a webpage or app against each other to determine which one performs better. To design a test, I would first form a hypothesis (e.g., 'a green button will get more clicks than a blue one'). Then, I'd randomly split users into two groups, showing one group the control (A) and the other the variation (B). I'd run the test until I have a statistically significant result, then analyze the data to see which version won."
    },
    {
        question: "What are some common data visualization libraries you have used, and why would you choose one over another?",
        suggestedAnswer: "I've used libraries like Matplotlib, Seaborn, and Plotly. I'd use Matplotlib for basic, quick plots. I'd choose Seaborn for more complex statistical plots as it has a simpler API. For interactive dashboards and web-based visualizations, I'd use Plotly because it generates interactive graphs that are great for exploration."
    },
    {
        question: "Write a SQL query to find the second-highest salary from an `employees` table. Explain your logic.",
        suggestedAnswer: "One way is to use a subquery: `SELECT MAX(salary) FROM employees WHERE salary < (SELECT MAX(salary) FROM employees);`. Another common method is using `LIMIT` and `OFFSET`: `SELECT salary FROM employees ORDER BY salary DESC LIMIT 1 OFFSET 1;`. The second approach is often more readable and performant."
    },
    {
        question: "Using the Pandas library in Python, how would you clean a dataset by removing duplicate rows and filling missing numerical values with the column's median?",
        suggestedAnswer: "First, I would load the data into a DataFrame. Then, I'd use `df.drop_duplicates(inplace=True)` to remove duplicate rows. To fill missing values, I would iterate through the numerical columns, calculate the median for each using `df[col].median()`, and then use `df[col].fillna(median_value, inplace=True)` to fill the NaNs."
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
    },
    {
      question: "How do you say 'no' to a feature request, for example, from an important stakeholder or a loud customer?",
      suggestedAnswer: "I never just say 'no.' I listen to the request and seek to understand the underlying problem they are trying to solve. Then, I explain the trade-offs, showing how building their feature would mean de-prioritizing other work that has a higher impact on our overall goals, using data to support my reasoning. I try to find a middle ground, perhaps by suggesting a smaller, simpler solution or adding their problem to our backlog for future consideration."
    },
    {
      question: "What is your favorite product and why? How would you improve it?",
      suggestedAnswer: "Choose a product you genuinely use and admire. Explain what makes it great from a product perspective (e.g., its clear value proposition, intuitive design, strong user engagement). Then, identify a clear user problem it doesn't solve perfectly and propose a specific, well-reasoned feature improvement. This shows you can think critically about products."
    },
    {
      question: "How would you use a tool like Mixpanel or Amplitude to analyze a user funnel and identify drop-off points?",
      suggestedAnswer: "I would define the key steps in a user journey, such as 'Signed Up', 'Created Project', and 'Invited Teammate', and set these up as events in the analytics tool. Then, I would build a funnel visualization to see the conversion rate between each step. A large drop-off between two steps indicates a point of friction that needs investigation."
    },
    {
      question: "What is a Product Requirements Document (PRD)? What are the key sections you would include in one?",
      suggestedAnswer: "A PRD is a document that outlines the purpose, features, and requirements of a product or feature. Key sections include: 1. Problem Statement: What user problem are we solving? 2. Goals/Objectives: What are the success metrics? 3. User Stories/Use Cases: Descriptions of how users will interact with the feature. 4. Features and Requirements: A detailed list of what needs to be built. 5. Design Mockups: Links to visual designs. 6. Out of Scope: What we are explicitly not building."
    }
  ]
};