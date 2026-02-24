
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
};

export const blogPosts: BlogPost[] = [
    {
        slug: "ai-alteration-vs-tampering",
        title: "AI: Alteration vs. Tampering — An Ethical Crossroads",
        description: "Exploring the ethical and security implications of AI, from its short-term benefits to its long-term risks of tampering with human autonomy.",
        date: "October 05, 2025",
        author: "Ahsan Imam Khan",
        image: placeholderData.blogPostAI,
        backgroundImage: placeholderData.aiBackground,
        content: `
            <p class="text-gray-400 text-sm">📅 Published on: October 05, 2025</p>
            <p class="text-gray-400 text-sm mb-6">🏷 Tags: Artificial Intelligence, Cyber Security, Ethics, Technology</p>
            
            <hr class="my-8 border-border/50">

            <h3 class="text-2xl font-bold mt-8 mb-4 text-white">Introduction</h3>
            <p class="text-gray-400">Artificial Intelligence is often celebrated as the most transformative technology of our generation. From healthcare to education, cybersecurity to finance, AI is modifying industries at an unprecedented pace.</p>
            <p class="text-gray-300 mt-4 italic">But an important question deserves attention: Is AI truly a long-term blessing, or are we only witnessing its short-term advantages?</p>
            <p class="text-gray-400 mt-4">This question led me to explore the deeper ethical and security implications of artificial intelligence — not just its capabilities, but its consequences.</p>
            
            <hr class="my-8 border-border/50">

            <h3 class="text-2xl font-bold mt-8 mb-4 text-white">AI in the Short Term: Intelligent Modification, Not Replacement</h3>
            <p class="text-gray-400">In the short term, AI acts as a powerful tool that enhances human efficiency rather than replacing it. It modifies workflows, alters inefficient systems, and optimizes decision-making processes.</p>
            <p class="text-gray-400 mt-4">Examples include:</p>
            <ul class="list-disc list-inside text-gray-400 mt-2 space-y-2">
                <li>AI assisting doctors in early disease detection.</li>
                <li>AI strengthening cybersecurity threat monitoring.</li>
                <li>AI personalizing learning experiences.</li>
                <li>AI automating repetitive and time-consuming tasks.</li>
            </ul>
            <p class="text-gray-400 mt-4">In these situations, AI is not tampering with human roles — it is refining and supporting them. When AI operates transparently and with proper user consent, it becomes an empowering extension of human intelligence.</p>
            <p class="text-gray-300 mt-2 font-semibold">It modifies systems for improvement, not control.</p>

            <hr class="my-8 border-border/50">

            <h3 class="text-2xl font-bold mt-8 mb-4 text-white">The Long-Term Concern: From Alteration to Tampering</h3>
            <p class="text-gray-400">However, the long-term trajectory of AI introduces more complex concerns. There is a crucial difference between altering systems to improve efficiency and tampering with human autonomy and decision-making.</p>
            <p class="text-gray-400 mt-4">If AI systems begin influencing behavior, shaping opinions, or making decisions without transparency or explicit consent, the ethical boundary shifts.</p>
            <p class="text-gray-400 mt-4">Potential long-term risks include:</p>
            <ul class="list-disc list-inside text-gray-400 mt-2 space-y-2">
                <li>Large-scale job displacement</li>
                <li>Over-dependence on automated decision systems</li>
                <li>Gradual decline in human critical thinking</li>
                <li>Data misuse without informed consent</li>
                <li>Behavioral manipulation through recommendation algorithms</li>
            </ul>
            <p class="text-gray-400 mt-4">When AI begins subtly steering choices rather than supporting them, it moves from modifying processes to tampering with independence. This is not a technological failure — it is a governance and ethics failure.</p>
            
            <hr class="my-8 border-border/50">

            <h3 class="text-2xl font-bold mt-8 mb-4 text-white">The Importance of Consent in the AI Era</h3>
            <p class="text-gray-400">In cybersecurity, consent is foundational. Data access without consent is intrusion. Data collection without consent is surveillance. Behavioral influence without consent is manipulation.</p>
            <p class="text-gray-400 mt-4">Similarly, AI systems must operate within clearly defined boundaries:</p>
            <ul class="list-disc list-inside text-gray-400 mt-2 space-y-2">
                <li>Transparent algorithms</li>
                <li>Explainable decision-making</li>
                <li>Regulatory oversight</li>
                <li>Explicit informed consent from users</li>
            </ul>
            <p class="text-gray-400 mt-4">Without consent, even advanced AI becomes ethically unstable.</p>
             <p class="text-gray-300 mt-2 italic">The question is not whether AI is intelligent enough. The question is whether it is deployed responsibly.</p>

            <hr class="my-8 border-border/50">

            <h3 class="text-2xl font-bold mt-8 mb-4 text-white">Limited Power vs Expanding Influence</h3>
            <p class="text-gray-400">Technically, AI systems operate within defined models and datasets. But socially, their influence can expand rapidly. While AI has no consciousness or intention, its deployment can unintentionally reshape:</p>
            <ul class="list-disc list-inside text-gray-400 mt-2 space-y-2">
                <li>Economic structures</li>
                <li>Privacy expectations</li>
                <li>Human creativity</li>
                <li>Social interactions</li>
            </ul>
            <p class="text-gray-400 mt-4">If not carefully regulated, AI may gradually alter society in ways that are difficult to reverse. The line between assistance and interference becomes thin.</p>

            <hr class="my-8 border-border/50">

            <h3 class="text-2xl font-bold mt-8 mb-4 text-white">Conclusion: Tool, Partner, or Controller?</h3>
            <p class="text-gray-400">Artificial Intelligence itself is neutral. It can modify systems for progress, or gradually tamper with human autonomy if misused.</p>
            <p class="text-gray-400 mt-4">The long-term impact of AI will not depend solely on its computational power. It will depend on how responsibly we integrate ethics, cybersecurity principles, and consent into its foundation.</p>
            <p class="text-gray-300 mt-4 font-semibold">The real challenge is not building smarter machines. It is ensuring that intelligence does not outpace accountability.</p>
            <p class="text-gray-300 mt-4 italic">The future of AI will not be decided by algorithms alone — but by the values we embed within them.</p>
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

    

