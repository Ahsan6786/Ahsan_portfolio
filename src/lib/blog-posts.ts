
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
        slug: "my-life-story-from-village-to-code",
        title: "My Story: From a Tiny Village to a World of Code",
        description: "A raw and real story of my journey through confusion, struggle, and growth. It’s not perfect, but it’s mine.",
        date: "September 16, 2025",
        author: "Ahsan Imam Khan",
        image: placeholderData.heroImage,
        backgroundImage: placeholderData.biharBackground,
        content: `
            <p class="text-gray-400">I was born on September 16, 2005, in a tiny village called Chaksikandar in Bihar. A place where mornings smelled of mitti, and evenings ended with the same old stories repeated under dim yellow bulbs.</p>
            <p class="text-gray-400">My childhood was simple… maybe too simple.</p>
            <p class="text-gray-400">My father worked far away in Saudi Arabia. I grew up watching the door more than anything else — hoping one day he’d walk in. He rarely did. And that’s how I first learned that life gives you love… but with distances attached.</p>
            
            <hr class="my-8 border-border/50">

            <h3 class="text-2xl font-bold mt-8 mb-4 text-white">A Move, A New Beginning, A New Confusion</h3>
            <p class="text-gray-400">We shifted to Hajipur, and life suddenly felt faster. I studied one year at Ideal Public School under Shazad Sir, the first teacher who taught me what a classroom feels like.</p>
            <p class="text-gray-400">But my path was never a straight line. I dropped out, switched schools… and eventually landed in St. Paul’s.</p>
            <p class="text-gray-400">That’s where the real storm began.</p>

            <hr class="my-8 border-border/50">

            <h3 class="text-2xl font-bold mt-8 mb-4 text-white">The Phase When I Chose The Wrong People Over The Right Path</h3>
            <p class="text-gray-400">Around Class 8, something inside me changed. I don’t know why — maybe because I was searching for identity, maybe because I wanted to feel powerful, maybe because I was just a kid trying to act older than he was.</p>
            <p class="text-gray-400">I became the boy who picked fights. The boy who loved attention. The boy who believed ego was strength. The boy who got suspended… again, and again.</p>
            <p class="text-gray-400">More than five times.</p>
            <p class="text-gray-400">Life wasn’t teaching me lessons. It was letting me fall, so the ground could teach me instead.</p>

            <hr class="my-8 border-border/50">

            <h3 class="text-2xl font-bold mt-8 mb-4 text-white">10th Grade — The Silence After the Storm</h3>
            <p class="text-gray-400">By Class 10, all the noise inside me faded. I became lazy, confused, lost.</p>
            <p class="text-gray-400">Yet somehow, I passed with 87.4%. People clapped. But inside, I felt empty — like someone walking without a destination.</p>
            <p class="text-gray-400">Family suggested, “Go to Pune. Your sister is there. Try something new.”</p>
            <p class="text-gray-400">And so I left home… not knowing I was leaving behind a version of myself too.</p>
            
            <hr class="my-8 border-border/50">

            <h3 class="text-2xl font-bold mt-8 mb-4 text-white">Pune — A City of Dreams, A Year of Darkness</h3>
            <p class="text-gray-400">I joined Akshara International for 11th–12th. But fate had another plan — lockdown.</p>
            <p class="text-gray-400">Suddenly, school turned into silent screens. Friends became display pictures. Teachers became voices. Life became a room.</p>
            <p class="text-gray-400">And I… became academically weak, mentally tired, emotionally flat.</p>
            <p class="text-gray-400">Teachers gave extra classes. I gave minimum attention. Still, by some miracle, I passed 12th with 72%.</p>
            <p class="text-gray-400">The marks didn’t hurt. The confusion did. What was I supposed to do with my life?</p>

            <hr class="my-8 border-border/50">

            <h3 class="text-2xl font-bold mt-8 mb-4 text-white">The Kota Chapter — The Hardest Scene of My Story</h3>
            <p class="text-gray-400">With no direction, I took a drop year and went to Kota.</p>
            <p class="text-gray-400">If you’ve been to Kota, you know. If you haven’t… imagine thousands of dreams packed into tiny rooms, crying silently every night, competing every morning.</p>
            <p class="text-gray-400">I studied. I tried. But the marks never listened. After 8 months, I gave my first attempt. I scored 66 percentile.</p>
            <p class="text-gray-400">And then… life hit me where it hurts the most.</p>
            <p class="text-gray-400">My grandfather died right before my exam. I wasn’t with him. I couldn’t be. No flights from Kota, trains too late. His last goodbye never reached me. And that guilt… that guilt still lives somewhere in my chest.</p>
            
            <hr class="my-8 border-border/50">

            <h3 class="text-2xl font-bold mt-8 mb-4 text-white">A Second Attempt — Not Victory, But Hope</h3>
            <p class="text-gray-400">I returned to Bihar. Studied again. Gave my second attempt. 86 percentile.</p>
            <p class="text-gray-400">Better than before, but still not enough.</p>
            <p class="text-gray-400">Life didn’t give me the college I wanted. But it gave me something else — patience.</p>

            <hr class="my-8 border-border/50">

            <h3 class="text-2xl font-bold mt-8 mb-4 text-white">One More Try — The Door That Finally Opened</h3>
            <p class="text-gray-400">I decided to give MHT-CET. This time, for the first time, luck smiled. 93 percentile.</p>
            <p class="text-gray-400">That number became the key that opened the gate of MIT-WPU Pune. And just like that, the boy who came from a tiny village in Bihar found himself walking toward a future that once felt impossible.</p>
            
            <hr class="my-8 border-border/50">

            <h3 class="text-2xl font-bold mt-8 mb-4 text-white">What My Journey Really Means</h3>
            <p class="text-gray-400">I’ve lived in silence and storms. In confusion and clarity. In guilt and hope. In mistakes and growth. And all of that taught me this:</p>
            <ul class="list-disc list-inside space-y-2 my-4 pl-4 text-gray-400">
                <li>You don’t become strong by pretending. You become strong by breaking.</li>
                <li>Life doesn’t move in straight lines. It moves in circles, loops, detours… until you finally understand why things happened the way they did.</li>
                <li>Your background is not your boundary. A village can raise a boy who builds a future in a city.</li>
                <li>And most importantly— you are not who you were at 14, or 16, or 18. You are who you’re becoming every single day.</li>
            </ul>

            <hr class="my-8 border-border/50">

            <h3 class="text-2xl font-bold mt-8 mb-4 text-white">I’m Not Finished. I’m Just Beginning.</h3>
            <p class="text-gray-400">Today, I’m in Pune. Studying engineering. Trying to make something out of the chaos I survived.</p>
            <p class="text-gray-400">My story is not perfect. Not clean. Not heroic.</p>
            <p class="text-gray-400">But it’s real. And it’s mine.</p>
            <p class="text-gray-400">And maybe… just maybe… that’s all a story needs to be.</p>
        `
    }
];
