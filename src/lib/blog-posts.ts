
import placeholderData from '@/lib/placeholder-images.json';

type ImageType = {
    src: string;
    aiHint: string;
};

export type BlogPost = {
    slug: string;
    title: string;
    description: string;
    date: string;
    author: string;
    image: ImageType;
    backgroundImage?: ImageType;
    content: string;
    readingTime: string;
};

export const blogPosts: BlogPost[] = [
    {
        slug: "ai-alteration-vs-tampering",
        title: "AI: Alteration vs. Tampering — An Ethical Crossroads",
        description: "Exploring the ethical and security implications of AI, from its short-term benefits to its long-term risks of tampering with human autonomy.",
        date: "February 24, 2026",
        author: "Ahsan Imam Khan",
        image: placeholderData.blogPostAI,
        backgroundImage: placeholderData.aiBackground,
        readingTime: "4 min read",
        content: `
            <h3 class="text-2xl font-bold mt-8 mb-4 text-white">Is AI a Blessing or a Risk?</h3>
            <p class="text-gray-400">Artificial Intelligence is changing everything. From our hospitals to our schools, it’s making things faster and smarter. But while we see the short-term wins, it's crucial to ask a bigger question: where is this all heading?</p>
            <p class="text-gray-300 mt-4 italic">Are we just improving our world, or are we accidentally giving away control?</p>
            <p class="text-gray-400 mt-4">This question pushes us to look beyond the hype and think about the ethics of AI—not just what it can do, but what it *should* do.</p>

            <hr class="my-8 border-border/50">

            <h3 class="text-2xl font-bold mt-8 mb-4 text-white">Short-Term: AI as a Smart Tool</h3>
            <p class="text-gray-400">Right now, AI is mostly a powerful assistant. It doesn't replace us; it helps us. Think about:</p>
            <ul class="list-disc list-inside text-gray-400 mt-2 space-y-2">
                <li>Doctors using AI to spot diseases earlier.</li>
                <li>Cybersecurity systems using AI to monitor for threats.</li>
                <li>Repetitive tasks getting automated, freeing up our time.</li>
            </ul>
            <p class="text-gray-400 mt-4">In these cases, AI is simply *altering* our workflows for the better. It’s a tool that refines our work. As long as it operates with our clear <strong>consent</strong>, it’s an extension of our own abilities.</p>
            <p class="text-gray-300 mt-2 font-semibold">It’s about improvement, not control.</p>

            <hr class="my-8 border-border/50">

            <h3 class="text-2xl font-bold mt-8 mb-4 text-white">Long-Term: The Danger of Tampering</h3>
            <p class="text-gray-400">The future, however, could be different. There’s a thin line between altering a system and <strong>tampering</strong> with human choice. When does a helpful suggestion become a manipulative nudge?</p>
            <p class="text-gray-400 mt-4">If AI starts to influence our opinions, shape our behaviors, or make critical decisions without our full awareness, we've crossed a line. The risks are real:</p>
            <ul class="list-disc list-inside text-gray-400 mt-2 space-y-2">
                <li>Algorithms that manipulate our choices.</li>
                <li>Over-dependence on machines for decisions.</li>
                <li>A decline in human critical thinking.</li>
            </ul>
            <p class="text-gray-400 mt-4">When AI stops being a tool and starts steering us, it’s no longer just altering a process. It’s <strong>tampering</strong> with our freedom. This isn't a bug in the code; it’s a failure in our ethics.</p>

            <hr class="my-8 border-border/50">

            <h3 class="text-2xl font-bold mt-8 mb-4 text-white">Consent is Everything</h3>
            <p class="text-gray-400">In the world of security, <strong>consent</strong> is the golden rule. Accessing data without permission is hacking. Influencing people without their agreement is manipulation.</p>
            <p class="text-gray-400 mt-4">AI must follow the same rule. We need:</p>
            <ul class="list-disc list-inside text-gray-400 mt-2 space-y-2">
                <li>Transparent algorithms we can understand.</li>
                <li>Clear oversight and regulations.</li>
                <li>Explicit and informed <strong>consent</strong> from every user.</li>
            </ul>
            <p class="text-gray-400 mt-4">The real question isn’t if AI is smart, but if we are deploying it responsibly.</p>

            <hr class="my-8 border-border/50">

            <h3 class="text-2xl font-bold mt-8 mb-4 text-white">Conclusion: A Tool in Our Hands</h3>
            <p class="text-gray-400">AI itself is neutral. It can be a tool for progress or, if we’re not careful, a system that tampers with our autonomy. Its future impact depends less on its power and more on our values.</p>
            <p class="text-gray-300 mt-4 font-semibold">The challenge isn’t just to build smarter machines, but to ensure our wisdom keeps pace with their intelligence.</p>
            <p class="text-gray-400 mt-6 italic">Inspired by a cybersecurity lab discussion on the ethical implications of AI.</p>
        `
    },
    {
        slug: "my-life-story-from-village-to-code",
        title: "Not Perfect — But Progress",
        description: "A short look into where I started, what shaped me, and where I’m heading. Not the full story—just the beginning.",
        date: "September 16, 2025",
        author: "Ahsan Imam Khan",
        image: placeholderData.heroImage,
        backgroundImage: placeholderData.biharBackground,
        readingTime: "5 min read",
        content: `
            <p class="text-gray-400">I was born on September 16, 2005, in Chaksikandar Mansurpur, Bihar — not a dusty old village story, not a poverty-driven beginning, but a childhood filled with comfort, family warmth, and every wish my parents could fulfill.</p>
            <p class="text-gray-400">My father worked in Saudi Arabia, and though he wasn’t always home, he made sure I never felt a lack of anything — not dreams, not support, not possibilities.</p>
            <p class="text-gray-400">I didn’t grow up struggling for basics. I grew up learning the value of what I already had.</p>
            
            <hr class="my-8 border-border/50">

            <h3 class="text-2xl font-bold mt-8 mb-4 text-white">A Move, A New Rhythm of Life</h3>
            <p class="text-gray-400">We later shifted to Hajipur, a town with more pace, more people, more exposure. I studied a year at Ideal Public School under Shahzad Sir — the first person who made me feel the weight and wonder of education.</p>
            <p class="text-gray-400">But my academic path was not linear.</p>
            <p class="text-gray-400">I switched schools, restarted chapters, and eventually landed in St. Paul’s, the place that shaped a very raw version of me.</p>

            <hr class="my-8 border-border/50">

            <h3 class="text-2xl font-bold mt-8 mb-4 text-white">The Phase When I Chose Excitement Over Direction</h3>
            <p class="text-gray-400">Around Class 8, I drifted — not because of circumstances, but because of curiosity… and honestly, wrong choices.</p>
            <p class="text-gray-400">I surrounded myself with the wrong kind of crowd. Drama looked cooler than discipline. Fights felt more powerful than focus. Ego felt like identity.</p>
            <p class="text-gray-400">Suspensions came. More than five times.</p>
            <p class="text-gray-400">I wasn’t a bad kid. Just a kid who didn’t know where he was heading.</p>
            <p class="text-gray-400">Life didn’t stop me. It simply waited for me to outgrow that version of myself.</p>

            <hr class="my-8 border-border/50">

            <h3 class="text-2xl font-bold mt-8 mb-4 text-white">10th Grade — The Quiet Reset</h3>
            <p class="text-gray-400">By Class 10, the noise inside me slowed down. I became calmer, quieter, a little lost… but more aware.</p>
            <p class="text-gray-400">I scored 87.4% — not a reflection of my confusion, but of my potential.</p>
            <p class="text-gray-400">My family suggested moving to Pune, not out of necessity, but because they believed exposure brings clarity.</p>
            <p class="text-gray-400">And they were right.</p>

            <hr class="my-8 border-border/50">

            <h3 class="text-2xl font-bold mt-8 mb-4 text-white">Pune — A New City, A Strange Pause</h3>
            <p class="text-gray-400">I joined Akshara International for 11th and 12th. But then lockdown hit.</p>
            <p class="text-gray-400">Classrooms turned into screens. Friends became icons. Life shrank into a room.</p>
            <p class="text-gray-400">My performance dipped. Not due to lack of resources, but because online life disconnects you from real learning.</p>
            <p class="text-gray-400">Teachers gave extra classes, I tried catching up, and somehow passed 12th with 72%.</p>
            <p class="text-gray-400">The marks didn’t bother me. The confusion of “What now?” did.</p>

            <hr class="my-8 border-border/50">

            <h3 class="text-2xl font-bold mt-8 mb-4 text-white">Kota — Not Struggle, But Intensity</h3>
            <p class="text-gray-400">With no clear direction, I took a drop year and moved to Kota for JEE preparation.</p>
            <p class="text-gray-400">Kota wasn’t about poverty or pressure from life — it was about intensity, competition, and the feeling of swimming among thousands of dreamers at once.</p>
            <p class="text-gray-400">I studied honestly. But results didn’t align with effort.</p>
            <p class="text-gray-400">After 8 months, my first attempt brought 66 percentile.</p>
            <p class="text-gray-400">And at the same time, I lost my grandfather.</p>
            <p class="text-gray-400">I couldn’t attend his last rituals — not because we couldn’t afford to, but because flights weren’t operational and trains were delayed.</p>
            <p class="text-gray-400">The timing was cruel. The guilt stayed.</p>

            <hr class="my-8 border-border/50">

            <h3 class="text-2xl font-bold mt-8 mb-4 text-white">Second Attempt — A Controlled Comeback</h3>
            <p class="text-gray-400">I returned to Bihar, grounded and calmer. Studied again. Gave my second attempt.</p>
            <p class="text-gray-400">86 percentile.</p>
            <p class="text-gray-400">Better. Still not enough.</p>
            <p class="text-gray-400">But I didn’t feel broken. I felt patient.</p>
            <p class="text-gray-400">Some journeys aren’t meant to be shortcuts.</p>

            <hr class="my-8 border-border/50">

            <h3 class="text-2xl font-bold mt-8 mb-4 text-white">One More Door — And Finally, It Opened</h3>
            <p class="text-gray-400">I appeared for MHT-CET, and this time scored 93 percentile.</p>
            <p class="text-gray-400">That number changed everything.</p>
            <p class="text-gray-400">It opened the doors of MIT-WPU Pune, and suddenly my life had direction, clarity, and a path worth walking.</p>
            <p class="text-gray-400">The boy who once chased noise started walking toward purpose.</p>

            <hr class="my-8 border-border/50">

            <h3 class="text-2xl font-bold mt-8 mb-4 text-white">What My Journey Really Means</h3>
            <p class="text-gray-400">My life is not a struggle-for-survival story. It’s a story of self-awareness, of learning to choose better paths, of understanding how environment shapes you, and how mindset transforms you.</p>
            <p class="text-gray-400 mt-4">Here’s what I learned:</p>
            <ul class="list-disc list-inside text-gray-400 mt-2 space-y-2">
                <li>Not every story needs pain. Some need growth.</li>
                <li>Comfort doesn’t make you weak; confusion does.</li>
                <li>Changing your circle can change your entire direction.</li>
                <li>You don’t need to be perfect — just honest with yourself.</li>
            </ul>
            <p class="text-gray-400 mt-4">And most importantly,</p>
            <p class="text-center text-lg italic my-2 text-primary">Where you come from matters less than who you choose to become.</p>

            <hr class="my-8 border-border/50">

            <h3 class="text-2xl font-bold mt-8 mb-4 text-white">I’m Not at My Peak. I’m at My Beginning.</h3>
            <p class="text-gray-400">Today, I’m in Pune, studying engineering, building skills, and becoming the version of myself I always sensed but never understood.</p>
            <p class="text-gray-400">My story isn’t about struggle. It’s about evolution.</p>
            <p class="text-gray-400">Not about survival. But becoming.</p>
            <p class="text-gray-400">Not about lack. But learning.</p>
            <p class="text-gray-400">It’s real. It’s mine. And it’s still being written.</p>
        `
    }
];

    
