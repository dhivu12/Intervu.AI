import { Sentiment } from "@/components/SentimentCard";

export type Question = {
  question: string;
  suggestedAnswer: string;
};

// Expanded and shuffled question pool with suggested answers
export const allQuestions: Question[] = [
    {
        question: "Tell me about a time you had to handle a difficult stakeholder.",
        suggestedAnswer: "A good answer would follow the STAR method: Situation (describe the context), Task (what was required of you), Action (what you did), and Result (the positive outcome). For example: 'In my previous role, a key stakeholder for a project was unhappy with our progress (Situation). My task was to manage their expectations and get their buy-in (Task). I scheduled a meeting to demonstrate the work we'd done and created a new, more detailed timeline with clear milestones (Action). As a result, the stakeholder felt heard and became a strong advocate for the project, which we delivered on time (Result).'"
    },
    {
        question: "How do you prioritize your work when you have multiple competing deadlines?",
        suggestedAnswer: "Focus on your method. For example: 'I use a combination of the Eisenhower Matrix and impact analysis. I categorize tasks by urgency and importance. For tasks of similar priority, I assess which will have the greatest impact on our team's goals. I also believe in proactive communication, so I keep my manager updated on my workload and potential bottlenecks.'"
    },
    {
        question: "Describe a project you are particularly proud of and explain your role in it.",
        suggestedAnswer: "Be specific and highlight your contributions. 'I'm very proud of the Project X launch. I was responsible for developing the user authentication module. I took the initiative to implement multi-factor authentication, which wasn't in the original spec but increased security by 30%. The project launched successfully and received great user feedback.'"
    },
    {
        question: "Where do you see yourself in five years?",
        suggestedAnswer: "Show ambition that aligns with the company. 'In five years, I hope to have become a subject matter expert in this field and potentially be in a position to mentor junior team members. I'm excited by the growth opportunities at this company and see a long-term future here.'"
    },
    {
        question: "What is your biggest weakness and how are you working to improve it?",
        suggestedAnswer: "Choose a real but manageable weakness and show self-awareness. 'In the past, I sometimes took on too much work myself. I've learned to delegate more effectively and trust my teammates. I've been actively practicing this by leading smaller project teams, which has improved our overall efficiency.'"
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
        question: "Can you describe a time when you had to learn a new skill quickly?",
        suggestedAnswer: "Focus on your learning process and the outcome. 'In my last project, we needed to integrate a new payment gateway I had no experience with. I dedicated a weekend to reading the documentation and building a small prototype. I was able to quickly grasp the API and successfully implemented the integration ahead of schedule, which became a key feature for our launch.'"
    },
    {
        question: "How do you handle stress and pressure?",
        suggestedAnswer: "Show that you have healthy coping mechanisms and can stay productive. 'I find that staying organized helps me manage stress. I break down large tasks into smaller, manageable steps. I also believe in taking short breaks to clear my head. This approach helps me stay focused and calm, even when deadlines are tight.'"
    },
    {
        question: "Why are you interested in this role?",
        suggestedAnswer: "Connect your skills and passion to the job description and company mission. 'I've been following your company's work in AI-driven analytics for a while, and I'm very impressed. This role is a perfect match for my experience in data science and my passion for building tools that solve real-world problems. I'm particularly excited about the opportunity to work on [mention a specific project or product].'"
    },
    {
        question: "What do you know about our company?",
        suggestedAnswer: "Do your research. Mention their products, recent news, or company culture. 'I know that you are a leader in the cloud computing space, and I was particularly impressed by your recent launch of Product Y. I also read about your commitment to sustainability, which aligns with my own values. I'm excited by your mission to [company mission].'"
    }
];