import placeholderData from '@/lib/placeholder-images.json';

export type BlogPost = {
    slug: string;
    title: string;
    description: string;
    date: string;
    author: string;
    image: {
        src: string;
        aiHint: string;
    };
    content: string;
};

export const blogPosts: BlogPost[] = [
    {
        slug: "mastering-nextjs-a-beginners-guide",
        title: "Mastering Next.js: A Beginner's Guide to Building High-Performance Web Apps",
        description: "Dive deep into the fundamentals of Next.js and learn how to build fast, scalable, and SEO-friendly React applications from scratch.",
        date: "2024-08-15",
        author: "Ahsan Imam Khan",
        image: placeholderData.project3,
        content: `
            <p>Next.js has taken the web development world by storm, and for good reason. It provides a robust framework on top of React, enabling developers to build server-rendered applications, static websites, and more with ease. In this guide, we'll explore the core concepts of Next.js that make it a go-to choice for modern web development.</p>

            <h3 class="text-2xl font-bold mt-8 mb-4">Why Choose Next.js?</h3>
            <p>There are several compelling reasons to choose Next.js for your next project:</p>
            <ul class="list-disc list-inside space-y-2 my-4">
                <li><strong>Server-Side Rendering (SSR):</strong> Improve your app's performance and SEO by rendering pages on the server.</li>
                <li><strong>Static Site Generation (SSG):</strong> Pre-render pages at build time for lightning-fast load times.</li>
                <li><strong>File-based Routing:</strong> A simple and intuitive routing system where pages are automatically created based on your file structure.</li>
                <li><strong>API Routes:</strong> Easily create backend API endpoints within your Next.js application.</li>
                <li><strong>Built-in Optimizations:</strong> Features like Image Optimization and Automatic Code Splitting are included out of the box.</li>
            </ul>

            <h3 class="text-2xl font-bold mt-8 mb-4">Getting Started: Your First Next.js App</h3>
            <p>Creating a Next.js app is incredibly simple. Just run the following command in your terminal:</p>
            <pre class="bg-muted p-4 rounded-lg my-4 overflow-x-auto"><code class="language-bash">npx create-next-app@latest my-next-app</code></pre>
            <p>This command scaffolds a new Next.js project with all the necessary configurations. Once it's done, navigate into your new directory and start the development server:</p>
            <pre class="bg-muted p-4 rounded-lg my-4 overflow-x-auto"><code class="language-bash">cd my-next-app\nnpm run dev</code></pre>
            <p>And just like that, you have a running Next.js application! Explore the 'pages' directory to see how file-based routing works and start building your own pages.</p>
        `
    },
    {
        slug: "the-power-of-tailwind-css",
        title: "The Power of Tailwind CSS: A Utility-First Approach to Modern Design",
        description: "Discover how Tailwind CSS can revolutionize your design workflow, allowing you to build custom, responsive user interfaces faster than ever before.",
        date: "2024-07-28",
        author: "Ahsan Imam Khan",
        image: placeholderData.projectFessUp,
        content: `
            <p>If you're tired of writing custom CSS for every little design change, Tailwind CSS might be the solution you've been looking for. As a utility-first CSS framework, it provides low-level utility classes that let you build completely custom designs without ever leaving your HTML.</p>

            <h3 class="text-2xl font-bold mt-8 mb-4">What is "Utility-First"?</h3>
            <p>Instead of predefined components like 'card' or 'button', Tailwind gives you utility classes like 'p-4' (padding), 'text-center' (text alignment), and 'bg-primary' (background color). You compose these utilities directly in your markup to style your elements.</p>
            <p class="my-4">For example, a simple card component might look like this:</p>
            <pre class="bg-muted p-4 rounded-lg my-4 overflow-x-auto"><code class="language-html">&lt;div class="bg-card p-6 rounded-lg shadow-md"&gt;\n  &lt;h3 class="text-xl font-bold mb-2"&gt;Card Title&lt;/h3&gt;\n  &lt;p class="text-muted-foreground"&gt;This is a card built with Tailwind CSS.&lt;/p&gt;\n&lt;/div&gt;</code></pre>

            <h3 class="text-2xl font-bold mt-8 mb-4">Advantages of Tailwind CSS</h3>
            <ul class="list-disc list-inside space-y-2 my-4">
                <li><strong>Rapid Prototyping:</strong> Quickly build and test new designs without writing a single line of custom CSS.</li>
                <li><strong>Highly Customizable:</strong> Configure everything from colors to spacing in the 'tailwind.config.js' file to match your brand.</li>
                <li><strong>Responsive Design Made Easy:</strong> Use responsive prefixes like 'md:' or 'lg:' to apply styles at different breakpoints.</li>
                <li><strong>No Naming Conventions:</strong> Say goodbye to agonizing over class names like '.user-profile-header-container'.</li>
                <li><strong>Optimized for Production:</strong> Tailwind automatically removes all unused CSS at build time, resulting in a tiny final CSS file.</li>
            </ul>
            <p>While it might take a moment to get used to the utility-first approach, the speed and flexibility it offers can dramatically improve your development experience.</p>
        `
    }
];
