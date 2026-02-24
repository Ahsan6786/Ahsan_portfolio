
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
            <p class="text-gray-400">It started as a simple question during one of our Cyber Security lab sessions.</p>
            <p class="text-gray-400 mt-4">Mangesh Bedkar Sir paused the lecture and asked:</p>
            <blockquote class="border-l-4 border-primary pl-4 italic text-gray-300 my-4">
            “AI is powerful right now. But tell me — in the long run, will it still serve us… or will it start controlling us?”
            </blockquote>
            <p class="text-gray-400">The lab went silent.</p>
            <p class="text-gray-400 mt-4">Until that moment, AI had always felt exciting — efficient, innovative, revolutionary. But that question shifted the perspective. It wasn’t about what AI can do. It was about what it might become.</p>
            <p class="text-gray-400 mt-4">That discussion stayed with me long after the lab ended. And it pushed me to explore a deeper concern:</p>
            <p class="text-gray-300 mt-4 italic text-center">Are we merely altering our systems for improvement —<br>or are we slowly allowing technology to tamper with human autonomy?</p>
            
            <hr class="my-8 border-border/50">

            <h3 class="text-2xl font-bold mt-8 mb-4 text-white">Short-Term: AI as Intelligent Alteration</h3>
            <p class="text-gray-400">Right now, AI is undeniably transformative — in a positive way.</p>
            <ul class="list-disc list-inside text-gray-400 mt-4 space-y-2">
                <li>Doctors use AI to detect diseases earlier.</li>
                <li>Cybersecurity systems use AI to monitor anomalies in real time.</li>
                <li>Students use AI tools to learn more efficiently.</li>
                <li>Businesses automate repetitive tasks to increase productivity.</li>
            </ul>
            <p class="text-gray-400 mt-4">In these examples, AI is not replacing human judgment — it is altering workflows for optimization.</p>
            <p class="text-gray-400 mt-4">It refines processes.<br>It enhances speed.<br>It reduces error.</p>
            <p class="text-gray-400 mt-4">Most importantly, when deployed with transparency and clear user <strong>consent</strong>, AI becomes an extension of human capability — not a substitute for it.</p>
            <p class="text-gray-300 mt-4 font-semibold">In the short term, AI is about improvement, not control.</p>

            <hr class="my-8 border-border/50">

            <h3 class="text-2xl font-bold mt-8 mb-4 text-white">The Subtle Shift: From Alteration to Tampering</h3>
            <p class="text-gray-400">But the long-term question is more complex.</p>
            <p class="text-gray-400 mt-4">There is a thin ethical boundary between:</p>
            <ul class="list-disc list-inside text-gray-400 my-4 space-y-1">
                <li>Altering systems for efficiency</li>
                <li class="list-none text-center">and</li>
                <li><strong>Tampering</strong> with human choice.</li>
            </ul>
            <p class="text-gray-400">When does a helpful recommendation become behavioral influence?</p>
            <p class="text-gray-400 mt-2">When does automation become dependence?</p>
            <p class="text-gray-400 mt-4">If AI begins shaping opinions, filtering realities, or nudging decisions without explicit awareness or informed <strong>consent</strong>, then we move beyond assistance.</p>
            <p class="text-gray-300 mt-2 font-semibold">We enter manipulation.</p>
            <p class="text-gray-400 mt-4">Long-term risks include:</p>
            <ul class="list-disc list-inside text-gray-400 mt-2 space-y-2">
                <li>Algorithmic influence over personal choices</li>
                <li>Over-dependence on automated decision systems</li>
                <li>Decline in human critical thinking</li>
                <li>Loss of privacy and autonomy</li>
                <li>Centralization of power within AI-driven platforms</li>
            </ul>
            <p class="text-gray-400 mt-4">When AI starts steering behavior rather than supporting it, it is no longer simply altering processes — it is <strong>tampering</strong> with freedom.</p>
            <p class="text-gray-400 mt-4">And that is not a technical glitch.</p>
            <p class="text-gray-300 mt-2 font-semibold">It is an ethical failure.</p>

            <hr class="my-8 border-border/50">

            <h3 class="text-2xl font-bold mt-8 mb-4 text-white">Consent: The Cyber Security Perspective</h3>
            <p class="text-gray-400">In cybersecurity, one principle stands above all:</p>
            <p class="text-primary text-2xl font-bold my-4 text-center">Consent.</p>
            <p class="text-gray-400 mt-4">Access without consent is intrusion.<br>Data collection without consent is surveillance.<br>Influence without consent is manipulation.</p>
            <p class="text-gray-400 mt-4">AI systems must follow the same ethical standard.</p>
            <p class="text-gray-400 mt-4">We need:</p>
            <ul class="list-disc list-inside text-gray-400 mt-2 space-y-2">
                <li>Transparent algorithms</li>
                <li>Explainable decision-making</li>
                <li>Regulatory oversight</li>
                <li>Explicit and informed user <strong>consent</strong></li>
            </ul>
            <p class="text-gray-400 mt-4">Without <strong>consent</strong>, even the most advanced AI becomes ethically unstable.</p>
            <p class="text-gray-300 mt-4">The issue is not intelligence.</p>
            <p class="text-gray-300 mt-2 font-semibold">The issue is accountability.</p>

            <hr class="my-8 border-border/50">

            <h3 class="text-2xl font-bold mt-8 mb-4 text-white">A Reflection Beyond the Lab</h3>
            <p class="text-gray-400">That day in the lab, the discussion wasn’t dramatic. There were no extreme predictions about machines taking over the world.</p>
            <p class="text-gray-400 mt-4">It was a quieter concern.</p>
            <p class="text-gray-300 mt-2 font-semibold">A more realistic one.</p>
            <p class="text-gray-400 mt-4">Technology does not suddenly overthrow society. It gradually integrates into it. It slowly alters habits. It subtly reshapes behavior.</p>
            <p class="text-gray-400 mt-4">The real risk is not that AI becomes evil.</p>
            <p class="text-gray-300 mt-2 font-semibold">The real risk is that we stop noticing how much control we have surrendered.</p>

            <hr class="my-8 border-border/50">

            <h3 class="text-2xl font-bold mt-8 mb-4 text-white">Conclusion: Progress With Boundaries</h3>
            <p class="text-gray-400">Artificial Intelligence is neither a villain nor a savior.</p>
            <p class="text-gray-300 mt-4 font-semibold">It is a tool.</p>
            <p class="text-gray-400 mt-4">In the short term, it alters systems for efficiency and progress.<br>In the long term, if unchecked, it has the potential to <strong>tamper</strong> with autonomy.</p>
            <p class="text-gray-400 mt-4">Its future impact will depend less on its computational power and more on the ethical boundaries we enforce.</p>
            <p class="text-gray-400 mt-4">The challenge is not simply building smarter machines.</p>
            <p class="text-gray-300 mt-2 font-semibold">It is ensuring that human wisdom, regulation, and <strong>consent</strong> evolve alongside them.</p>
            <p class="text-gray-400 mt-4">Because the question is not:</p>
            <blockquote class="border-l-4 border-primary pl-4 italic text-gray-300 my-4">
            “Is AI intelligent?”
            </blockquote>
            <p class="text-gray-400 mt-4">The real question is:</p>
            <blockquote class="border-l-4 border-primary pl-4 italic text-gray-300 my-4">
            “Are we responsible enough to control what we create?”
            </blockquote>
            
            <hr class="my-8 border-border/50">
            
            <p class="text-gray-500 mt-6 italic text-sm">Inspired by a cybersecurity lab discussion with Mangesh Bedkar Sir on the ethical implications of Artificial Intelligence.</p>
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

    
