
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
            <p class="text-gray-400">I was born on September 16, 2005, in Chaksikandar Mansurpur, Bihar — a place that wasn’t a village struggle story, but a quiet beginning.</p>
            <p class="text-gray-400">Soon after, we moved to Hajipur, and that’s where I actually grew up. A proper town life — schools, friends, normal routines, and parents who always made sure my wishes were fulfilled. Not rich, not poor — just a simple, comfortable middle-class family where dreams were never denied.</p>
            <p class="text-gray-400">My father worked in Saudi Arabia, not because we were struggling, but because he wanted to give us stability and opportunities. And he did.</p>

            <hr class="my-8 border-border/50">

            <h3 class="text-2xl font-bold mt-8 mb-4 text-white">A Move, A New Chance, and a Normal Childhood</h3>
            <p class="text-gray-400">I studied one year at Ideal Public School under Shahzad Sir — the teacher who gave me my first real sense of discipline and confidence.</p>
            <p class="text-gray-400">My path wasn’t straight, but it wasn’t tragic either. I switched schools, landed in St. Paul’s, and lived the kind of school life every normal kid relates to — friends, jokes, mischief, attitude, drama… everything.</p>

            <hr class="my-8 border-border/50">

            <h3 class="text-2xl font-bold mt-8 mb-4 text-white">The Phase When I Chose the Wrong People, Not the Wrong Life</h3>
            <p class="text-gray-400">Around Class 8, I got influenced by the wrong circle — not criminals or anything extreme — just the typical school-age “cool crowd” where fights, attitude, and ego felt like identity.</p>
            <p class="text-gray-400">I wasn’t a bad kid. I was just a kid trying to act bigger than he was.</p>
            <p class="text-gray-400">I got suspended multiple times. Not because my upbringing was bad, but because my ego was louder than my sense.</p>
            <p class="text-gray-400 mt-4">But that phase taught me the difference between:</p>
            <p class="text-center text-lg italic my-2 text-primary">who you are</p>
            <p class="text-center text-lg italic my-2 text-primary">and</p>
            <p class="text-center text-lg italic my-2 text-primary">who you pretend to be.</p>
            <p class="text-gray-400 mt-4">And that changed everything later.</p>
        `
    }
];

