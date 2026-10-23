const asset = (p) => import.meta.env.BASE_URL + p

export const profile = {
    name: 'Sheikh Sadi',
    initials: '5S4D1',
    role: 'Master of None',
    tagline: ['I build fast,', 'elegant', 'software.'],
    intro:
        'CSE student at United International University. I work across software, robotics and autonomous systems, from rover navigation to production web apps.',
    about:
        'I am a Computer Science & Engineering student at United International University. I have competed internationally with the UIU Mars Rover Team, interned as a software engineer working with Odoo, and worked as a QA engineer on a live product. I enjoy turning hard problems into clean, reliable software.',
    university: 'United International University',
    email: 'sheikhsadi045@gmail.com',
    github: 'https://github.com/5S4D1',
    linkedin: 'https://www.linkedin.com/in/5s4d1',
}

export const skills = [
    'Python', 'JavaScript', 'React', 'Three.js', 'Odoo', 'ROS',
    'Autonomous Systems', 'QA Testing', 'CTF', 'Git', 'SQL',
]

export const stats = [
    { n: '2', t: 'Rover competitions' },
    { n: '5', t: 'Awards in 2025' },
    { n: '3', t: 'Teams & roles' },
]

/* newest first */
export const experience = [
    {
        role: 'Software Engineer Intern & QA',
        org: 'Tirzok Private Limited',
        project: 'Shobar Khamar App',
        period: 'Mar 2026 — Aug 2026',
        current: false,
        points: [
            'Worked as a software engineer intern for 6 months, building features on Odoo.',
            'Acted as QA for the Shobar Khamar app: test planning, bug reporting and release checks.',
        ],
        tags: ['Odoo', 'QA', 'Python', 'JavaScript'],
    },
    {
        role: 'Executive Committee — Project Showcase Specialist (Software & Hardware)',
        org: 'UIU Robotics',
        period: 'Feb 2026 — Present',
        current: true,
        points: [
            'Showcase and present the club\'s software and hardware projects at events and competitions.',
            'Bridge the software and hardware teams to get projects demo-ready.',
        ],
        tags: ['Robotics', 'Software', 'Hardware'],
    },
    {
        role: 'Software & Autonomous Team Member',
        org: 'UIU Mars Rover Team',
        period: 'Nov 2024 — Feb 2026',
        current: false,
        points: [
            'Developed software and autonomous navigation for the rover.',
            'Competed at the University Rover Challenge (URC) 2025.',
            'Competed at the Anatolian Rover Challenge (ARC) 2025.',
        ],
        tags: ['ROS', 'Autonomous', 'OpenCV', 'URC', 'ARC'],
    },
]

export const achievements = [
    { rank: 'Champion', event: 'UIU CSE Fest 2025', year: '2025' },
    { rank: 'Champion', event: 'KYAU Sci-Fi Fest 2025', year: '2025' },
    {
        rank: '1st Runner-Up',
        event: '1st S.N. Bose National Science Festival 2025',
        detail: 'Innovation & Display segment',
        year: '2025',
    },
    { rank: '2nd Runner-Up', event: 'BCS ICT Fest 2025', year: '2025' },
    { rank: '2nd Runner-Up', event: 'UAP Techtron 2025', year: '2025' },
]

export const otherActivities = [
    'URC 2025', 'ARC 2025', 'CTF competitions', 'Hackathon', 'Multiple inter-university events',
]

/* replace with your real academic projects */
export const projects = [
    {
        title: 'Mini Freelancer Hub',
        desc: 'FreelancerHub — a freelancer marketplace platform.',
        tags: 'HTML · CSS · JavaScript · Node · SQL',
        year: '2026',
        link: 'https://mini-freelancer-hub.vercel.app/',
        repo: 'https://github.com/5S4D1/FreelancerHubBackend.git',
    },
    {
        title: 'Codeforces Theme Extension',
        desc: '',
        tags: 'HTML · CSS · JavaScript',
        year: '2026',
        link: '',
        repo: 'https://github.com/5S4D1/Cftheme.git',
    },
    {
        title: 'MediTrack - Smart Health Companion for Families',
        desc: 'A modern, user-friendly web application designed to help families manage their health effectively. MediTrack enables users to track medications, store prescriptions, maintain health notes, and access AI-powered health insights—all in one secure platform.',
        tags: 'React · Node · SQL · Flutter',
        year: '2025',
        link: 'https://meditrackweb.vercel.app/',
        repo: 'https://github.com/5S4D1',
    },
    {
        title: 'UIU CGPA Calculator & Student Tools',
        desc: 'uiu-calculator : calculating CGPA, tuition fees and get Prerequisites course for UIU students.',
        tags: 'HTML · CSS · JavaScript',
        year: '2025',
        link: 'https://5s4d1.github.io/uiu-calculator/',
        repo: 'https://github.com/5S4D1/uiu-calculator.git',
    },
    {
        title: 'UMRT Website',
        desc: '',
        tags: 'HTML · CSS · JavaScript · Three.js',
        year: '2024',
        link: 'https://uiumarsrover.org/',
        repo: 'https://github.com/uiumarsrover/uiumarsrover.github.io.git',
    },
    {
        title: '3x3 Rubik\'s cube solver using ROS2',
        desc: '',
        tags: 'HTML · CSS · JavaScript · Python',
        year: '2025',
        link: '',
        repo: 'https://github.com/5S4D1/cube_solver_workspace.git',
    },
    {
        title: 'UIU Mars Rover System Dashboard',
        desc: '',
        tags: 'HTML · CSS · JavaScript',
        year: '2025',
        link: '',
        repo: 'https://github.com/5S4D1/UMRT_dashboard.git',
    },
    {
        title: 'Campus Ride',
        desc: '',
        tags: 'HTML · CSS · JavaScript',
        year: '2024',
        link: 'https://campus-ride-phi.vercel.app/',
        repo: 'https://github.com/badhon-dalbot/campus-ride.git',
    },
]

export const certificatesVisible = 7

export const certificates = [
    { issuer: 'Cisco', title: 'Linux Essentials', year: '2026', image: asset('/certificates/Linux_Essentials_certificate_msadi223646-bscse-uiu-ac-bd.png'), link: 'https://www.credly.com/badges/6e091470-fbba-4450-a4f3-f10988ce1bc5/public_url' },
    { issuer: 'Cisco', title: 'Python Essentials 1', year: '2025', image: asset('/certificates/Python_Essentials_1_certificate_msadi223646-bscse-uiu-ac-bd.png'), link: 'https://www.credly.com/badges/ee9dd60f-d4c2-4b08-b6fe-f2fca853b4a4/public_url' },
    { issuer: 'Cisco', title: 'CCNA: Introduction to Networks', year: '2024', image: asset('/certificates/CCNA-ITN Certificate - Md. Sheikh Sadi.png'), link: 'https://www.credly.com/badges/ca1a09e2-82bd-4d5a-a1bb-8eaa8e4b4521/public_url' },
    { issuer: 'IBM', title: 'Artificial Intelligence Fundamentals', year: '2026', image: asset('/certificates/IBM_Artificial Intelligence Fundamentals.png'), link: 'https://www.credly.com/badges/1d9b5470-939d-40e8-af22-2ff036c71a79/public_url' },
    { issuer: 'IBM', title: 'Cybersecurity Fundamentals', year: '2025', image: asset('/certificates/IBMDesign20251124-28-xr9lpk.png'), link: 'https://www.credly.com/badges/4a78c550-8da0-48fd-866b-405d1dc2ad36/public_url' },
    { issuer: 'Cisco', title: 'Computer Hardware Basics', year: '2026', image: asset('/certificates/Computer_Hardware_Basics_certificate_msadi.png'), link: 'https://www.credly.com/badges/8368b7d4-e8e2-4b86-8804-e7fb93782a62/public_url' },
    { issuer: 'Cisco', title: 'Introduction to Cybersecurity', year: '2025', image: asset('/certificates/Introduction_to_Cybersecurity_certificate_msadi223646-bscse-uiu-ac-bd.png'), link: 'https://www.credly.com/badges/37453fa4-0829-41ab-aaa7-544988e509c8/public_url' },
    { issuer: 'REDX', title: 'REDX CTFv3', year: '2026', image: asset('/certificates/REDX-sheikh-sadi.jpg'), link: '' },
    { issuer: 'BCS', title: 'BCS ICT FEST 2026 (CTF)', year: '2026', image: asset('/certificates/BCS-CTF-2026-g2C3yCMb52XBvnuh.png'), link: '' },
    { issuer: 'BUP', title: 'BUP CSE FEST 2026 (CTF)', year: '2026', image: asset('/certificates/BCF26-CTF-P2LNQLKA.jpg'), link: '' },
]

export { asset }