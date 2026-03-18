
import {
    car,
    cura,
    vscode,
    blender,
    unity, 
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    redux,
    snapgram,
    summiz,
    tailwindcss,
    typescript,
    unreal,
    fusion,
    threads,
    freecad,
    python,
    latex,
    bia,
    abibac

} from "../assets/icons";

export const skills = [
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "python",
    },
    {
        imageUrl: vscode,
        name: "VScode",
        type: "App",
    },
    {
        imageUrl: blender,
        name: "Blender",
        type: "3D",
    },
    {
        imageUrl: unity,
        name: "Unity",
        type: "Game Engine",
    },
    {
        imageUrl: unreal,
        name: "Unreal",
        type: "Game Engine",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: fusion,
        name: "Fusion",
        type: "3D",
    },
    {
        imageUrl: freecad,
        name: "FreeCAD",
    },
    {
        imageUrl: cura,
        name: "Cura",
        type: "3D",
    },
    {
        imageUrl: latex,
        name: "LaTeX",
        type: "",
    }
];

export const experiences = [
    {
        title: "Python Developper",
        company_name: "Learning Courses",
        icon: python,
        iconBg: "#accbe1",
        date: "2021 - 2025",
        points: [
            "Learning to develop simple Python programs using fundamental concepts such as variables, control structures, functions, and basic object-oriented programming.",
            "Working on small Python projects and exercises, both individually and in collaboration, to apply programming concepts in practical scenarios.",
            "Reviewing and improving code through debugging",
        ],
    },
    {
        title: "3D modelisation",
        company_name: "Blender",
        icon: blender,
        iconBg: "#fbc3bc",
        date: "2022 - Present",
        points: [
            "Completing one year of advanced online coursework in Blender, building on two years of self-directed learning and prior experience with the software",
            "Creating 3D models using both hard-surface and organic modeling techniques.",
            "Producing basic animations and simulations (fluids, rigid bodies).",
        ],
    },
    {
        title: "BIA",
        company_name: "Aeroclub",
        icon: bia,
        iconBg: "#b7e4c7",
        date: "2023 and 2024",
        points: [
            "Completing the Brevet d’Initiation Aéronautique (BIA) with the distinction mention très bien, acquiring foundational knowledge in aerodynamics, flight mechanics, meteorology, navigation, and english.",
            "Participating in two instructional flights, during which I was able to briefly handle the flight controls.",
            "Observing and experiencinga controlled stall",
        ],
    },
    {
        title: "AbiBac",
        company_name: "Lycée",
        icon: abibac,
        iconBg: "#a2d2ff",
        date: "2024 - Present",
        points: [
            "Completing two years of the ABIBAC, a bilingual and bicultural program leading to both the German Abitur and the French Baccalauréat.",
            "Participating in two Brigitte Sauzay student exchange programs. (2 times 3 months in Germany )",
            "Taking part in two Model United Nations conferences within a German-speaking committee",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Rom-Un',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projectCategories = [
    { id: 1, name: "3D Modelisation projects" },
    { id: 2, name: "Aeronautic projects" },
    { id: 3, name: "Coding projects" },
    { id: 4, name: "Science project" },
];

export const projects = [
    {
        id: 1,
        categoryId: 4,
        type: 'website',
        favorite: true,
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Physics',
        description: 'Physical simulations, graphs, formulas, experiments, and much more!',

    },
    {
        id: 2,
        categoryId: 3,
        type: 'external',
        iconUrl: threads, // you can replace this with a Pronote icon later
        theme: 'btn-back-green',
        name: 'Pronote Web Client',
        description: 'A modern web interface for Pronote built using the pronotepy API wrapper, offering students an intuitive way to manage their school life.',
        liveDemo: 'https://romain.isnel.fr/fireflies',

    },

    {
        id: 3,
        categoryId: 4,
        type: 'website',
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        liveDemo: 'https://example.com/car-app',

    },
    {
        id: 4,
        categoryId: 1,
        type: '3d_model',
        iconUrl: blender,
        theme: 'btn-back-pink',
        name: 'Sung Jin Woo',
        description: 'A highly detailed 3D model of Sung Jin Woo from Solo Leveling, created with Blender.',
        previewImage: '/models/3d_modelisation/project_4/preview_image.png',
        models3d: [
            { name: 'Sung Jin Woo Model', url: '/models/3d_modelisation/project_4/SungJinWoo.glb' },
        ],
        documentation: `
            <h3 class="text-2xl font-bold mt-6 mb-4">Model Creation</h3>
            <p class="mb-4">This model was created using Blender, focusing on high-fidelity details and accurate representation of the character.</p>
            
            <h3 class="text-2xl font-bold mt-6 mb-4">Process</h3>
            <ul class="list-disc ml-5 mb-4">
                <li>Sculpting the base mesh</li>
                <li>Retopology for better animation performance</li>
                <li>Texturing with high-resolution maps</li>
                <li>Rigging for pose and animation</li>
            </ul>
        `,
        techStack: ['Blender'],
        timeline: {
            start: 'Jan 2024',
            end: 'Feb 2024',
        },
        team: [
            { name: 'Romain', role: '3D Artist' },
        ],
        gallery: [
            { url: '/models/3d_modelisation/project_4/preview_image.png', alt: 'Sung Jin Woo Preview' },
        ],
    },
    {
        id: 5,
        categoryId: 4,
        type: 'website',
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
        liveDemo: 'https://example.com/realestate',
        github: 'https://github.com/adrianhajdin/projects_realestate',
        featured_image: estate,
        gallery: [
            { url: estate, alt: 'Property listings' },
            { url: estate, alt: 'Property details' },
            { url: estate, alt: 'Map view' },
        ],
        techStack: ['React', 'Express', 'MongoDB', 'Mapbox', 'Tailwind CSS'],
        team: [
            { name: 'Adrian Hajdin', role: 'Full Stack Developer' },
        ],
        timeline: {
            start: 'May 2023',
            end: 'August 2023',
        },
        documentation: `
            <h3 class="text-2xl font-bold mt-6 mb-4">Overview</h3>
            <p class="mb-4">A comprehensive real estate platform for property listings and management.</p>
            
            <h3 class="text-2xl font-bold mt-6 mb-4">Features</h3>
            <ul class="list-disc ml-5 mb-4">
                <li>Property listings with photos</li>
                <li>Advanced search and filters</li>
                <li>Interactive map view</li>
                <li>Favorite properties</li>
                <li>Agent contact information</li>
            </ul>
        `,
        models3d: [
            { name: 'Building Model', url: '/models/building.glb' },
        ],
    },
    {
        id: 6,
        categoryId: 1,
        type: '3d_model',
        iconUrl: blender,
        theme: 'btn-back-yellow',
        name: 'Cloud Dragon',
        description: 'A highly detailed 3D model of a cloudy dragon without retopology using Blender',
        previewImage: '/models/3d_modelisation/project_6/preview_image.png',
        models3d: [
            { name: 'Cloud Dragon', url: '/models/3d_modelisation/project_6/CloudDragon.glb' },
        ],
        documentation: `
            <h3 class="text-2xl font-bold mt-6 mb-4">Model Creation</h3>
            <p class="mb-4">This model was created using Blender.</p>
            
            <h3 class="text-2xl font-bold mt-6 mb-4">Process</h3>
            <ul class="list-disc ml-5 mb-4">
                <li>Sculpting the base mesh</li>
            </ul>
        `,
        techStack: ['Blender'],
        timeline: {
            start: 'Jan 2026',
            end: 'Feb 2026',
        },
        team: [
            { name: 'Romain', role: '3D Artist' },
        ],
        gallery: [
            { url: '/models/3d_modelisation/project_6/preview_image.png', alt: 'Cloud Dragon preview' },
        ],
    },
    {
        id: 7,
        categoryId: 1,
        type: '3d_model',
        iconUrl: blender,
        theme: 'btn-back-green',
        name: 'Leaf Dragon',
        description: 'A highly detailed 3D model of a leaf dragon without retopology using Blender',
        previewImage: '/models/3d_modelisation/project_7/preview_image.png',
        models3d: [
            { name: 'Leaf Dragon', url: '/models/3d_modelisation/project_7/LeafDragon.glb' },
        ],
        documentation: `
            <h3 class="text-2xl font-bold mt-6 mb-4">Model Creation</h3>
            <p class="mb-4">This model was created using Blender.</p>
            
            <h3 class="text-2xl font-bold mt-6 mb-4">Process</h3>
            <ul class="list-disc ml-5 mb-4">
                <li>Sculpting the base mesh</li>
            </ul>
        `,
        techStack: ['Blender'],
        timeline: {
            start: 'March 2026',
            end: 'March 2026',
        },
        team: [
            { name: 'Romain', role: '3D Artist' },
        ],
        gallery: [
            { url: '/models/3d_modelisation/project_7/preview_image.png', alt: 'Leaf Dragon preview' },
        ],
    },
    {
        id: 8,
        categoryId: 1,
        type: '3d_model',
        iconUrl: blender,
        theme: 'btn-back-black',
        name: 'Wasp Dragon',
        description: 'A highly detailed 3D model of a wasp dragon without retopology using Blender',
        previewImage: '/models/3d_modelisation/project_8/preview_image.png',
        models3d: [
            { name: 'Wasp Dragon', url: '/models/3d_modelisation/project_8/WaspDragon.glb' },
        ],
        documentation: `
            <h3 class="text-2xl font-bold mt-6 mb-4">Model Creation</h3>
            <p class="mb-4">This model was created using Blender.</p>
            
            <h3 class="text-2xl font-bold mt-6 mb-4">Process</h3>
            <ul class="list-disc ml-5 mb-4">
                <li>Sculpting the base mesh</li>
            </ul>
        `,
        techStack: ['Blender'],
        timeline: {
            start: 'March 2026',
            end: 'March 2026',
        },
        team: [
            { name: 'Romain', role: '3D Artist' },
        ],
        gallery: [
            { url: '/models/3d_modelisation/project_8/preview_image.png', alt: 'Wasp Dragon preview' },
        ],
    },
    {
        id: 9,
        categoryId: 1,
        type: '3d_model',
        iconUrl: blender,
        theme: 'btn-back-blue',
        name: 'Fish Dragon',
        description: 'A highly detailed 3D model of a fish dragon without retopology using Blender',
        previewImage: '/models/3d_modelisation/project_9/preview_image.png',
        models3d: [
            { name: 'Fish Dragon', url: '/models/3d_modelisation/project_9/FishDragon.glb' },
        ],
        documentation: `
            <h3 class="text-2xl font-bold mt-6 mb-4">Model Creation</h3>
            <p class="mb-4">This model was created using Blender.</p>
            
            <h3 class="text-2xl font-bold mt-6 mb-4">Process</h3>
            <ul class="list-disc ml-5 mb-4">
                <li>Sculpting the base mesh</li>
            </ul>
        `,
        techStack: ['Blender'],
        timeline: {
            start: 'March 2026',
            end: 'March 2026',
        },
        team: [
            { name: 'Romain', role: '3D Artist' },
        ],
        gallery: [
            { url: '/models/3d_modelisation/project_9/preview_image.png', alt: 'Fish Dragon preview' },
        ],
    },
];
