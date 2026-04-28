const lessons = [
  {
    level: "Beginner",
    readTime: "~12 min",
    paceSeconds: 10,
    title: "Lesson 1: Planning Your Website Structure",
    summary:
      "Before writing any code, map your target first: define purpose, audience, page structure, content type, folder setup, starter HTML boilerplate, and file linking flow.",
    points: [
      "Ask the core planning questions: purpose, audience, one-page vs multi-page, and content types (text, images, videos, forms).",
      "Define clean folder structure early so files stay organized and scalable.",
      "Generate HTML boilerplate first (`!` in VS Code), then connect external CSS and JavaScript files.",
      "Separate concerns from day one: HTML for structure, CSS for style, JavaScript for behavior."
    ],
    checkpoint: [
      "You can explain exactly what your website is for and who it serves.",
      "Your project has a clear folder and file structure before coding begins.",
      "Your `index.html` starts with correct boilerplate and includes linked `style.css` and `script.js`."
    ],
    codeLabel: "Planning + Starter Setup",
    snippet: `project-folder/
|
|-- index.html
|-- about.html (if needed)
|-- contact.html (if needed)
|
|-- css/
|   |-- style.css
|
|-- js/
|   |-- script.js
|
|-- images/
    |-- (all your images)

<!-- In index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>My Website</title>
  <link rel="stylesheet" href="css/style.css" />
</head>
<body>
  <script src="js/script.js"></script>
</body>
</html>

/* Flat setup is okay for small projects too:
project/
  index.html
  styles.css
  script.js */
`
  },
  {
    level: "Beginner",
    readTime: "~10 min",
    paceSeconds: 9,
    title: "Lesson 2: Build the Semantic HTML Skeleton",
    summary:
      "Create the foundational document and semantic sections so the page is understandable and accessible before styling.",
    points: [
      "Use semantic elements like header, nav, section, and footer.",
      "Assign section IDs so navigation links can scroll to each area.",
      "Place content in logical order for readability and SEO."
    ],
    checkpoint: [
      "Your HTML contains all major sections with clean IDs.",
      "Navigation links map to real section IDs.",
      "The page is readable even before CSS is added."
    ],
    codeLabel: "HTML Structure",
    snippet: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>NovaTech | Modern Startup</title>
  </head>
  <body>
    <header>...</header>
    <section id="home">...</section>
    <section id="about">...</section>
    <section id="services">...</section>
    <section id="contact">...</section>
    <footer>...</footer>
  </body>
</html>`
  },
  {
    level: "Beginner",
    readTime: "~10 min",
    paceSeconds: 9,
    title: "Lesson 3: Create a Fixed Navigation That Anchors the Experience",
    summary:
      "Your nav should stay visible, clearly branded, and linked to all main sections. This is the primary user guide across the page.",
    points: [
      "Build a nav container with a logo and grouped links.",
      "Use a fixed header so navigation is always available.",
      "Prepare a mobile toggle element that JavaScript will control later."
    ],
    checkpoint: [
      "Header stays at top during scrolling.",
      "All nav links target your section IDs.",
      "A mobile toggle element exists in markup."
    ],
    codeLabel: "Navbar Markup + Base CSS",
    snippet: `<header>
  <nav class="nav">
    <div class="logo">NovaTech</div>
    <div class="nav-links" id="navLinks">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#services">Services</a>
      <a href="#contact">Contact</a>
    </div>
    <div id="menuToggle" class="menu-toggle">Menu</div>
  </nav>
</header>

header {
  position: fixed;
  width: 100%;
  background: white;
  z-index: 1000;
}`
  },
  {
    level: "Beginner",
    readTime: "~10 min",
    paceSeconds: 9,
    title: "Lesson 4: Build the Hero Section and Call to Action",
    summary:
      "The hero introduces your brand value. Keep the message clear and use one strong call-to-action button.",
    points: [
      "Use a full-height hero with centered content.",
      "Apply a bold gradient background to establish visual identity.",
      "Add CTA button that scrolls users toward services."
    ],
    checkpoint: [
      "Hero fills viewport height and looks centered.",
      "CTA button stands out against background.",
      "CTA moves user to services section."
    ],
    codeLabel: "Hero Section",
    snippet: `<section class="hero" id="home">
  <div>
    <h1>Build the Future with NovaTech</h1>
    <p>We create modern digital experiences for startups and businesses.</p>
    <button onclick="scrollToSection('services')">Explore Services</button>
  </div>
</section>

.hero {
  display: grid;
  place-items: center;
  text-align: center;
  height: 100vh;
  background: linear-gradient(to right, #4f46e5, #6366f1);
  color: white;
}`
  },
  {
    level: "Intermediate",
    readTime: "~12 min",
    paceSeconds: 10,
    title: "Lesson 5: Add About and Services Blocks with Reusable Card Design",
    summary:
      "Now you build the middle of the page: informative content and service cards. Reusable card styles make your UI consistent.",
    points: [
      "Create a responsive about layout using CSS grid.",
      "Build service cards with heading + short description.",
      "Add hover lift effect to cards for interactive polish."
    ],
    checkpoint: [
      "About section stacks on small screens and aligns on larger screens.",
      "Services show as cards in a responsive grid.",
      "Card hover effect works smoothly."
    ],
    codeLabel: "About + Services",
    snippet: `<section id="services">
  <h2>Our Services</h2>
  <div class="services">
    <div class="card"><h3>Web Design</h3><p>Modern and responsive designs.</p></div>
    <div class="card"><h3>Development</h3><p>High-performance websites.</p></div>
    <div class="card"><h3>Branding</h3><p>Strong identity that stands out.</p></div>
  </div>
</section>

.services {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}`
  },
  {
    level: "Intermediate",
    readTime: "~12 min",
    paceSeconds: 10,
    title: "Lesson 6: Build a Clean Contact Form with Usability in Mind",
    summary:
      "The contact section is where users take action. Keep fields simple, labels clear, and feedback visible.",
    points: [
      "Create name, email, and message inputs with required validation.",
      "Design a clear submit button and response text area.",
      "Use spacing and borders for comfortable form interaction."
    ],
    checkpoint: [
      "All required form inputs are present.",
      "Submit button is easy to identify.",
      "A feedback area exists for success or error messages."
    ],
    codeLabel: "Contact Form",
    snippet: `<section id="contact">
  <h2>Contact Us</h2>
  <form id="contactForm">
    <input type="text" id="name" placeholder="Your Name" required />
    <input type="email" id="email" placeholder="Your Email" required />
    <textarea id="message" rows="5" placeholder="Your Message" required></textarea>
    <button class="submit" type="submit">Send Message</button>
    <p id="formMsg"></p>
  </form>
</section>`
  },
  {
    level: "Intermediate",
    readTime: "~14 min",
    paceSeconds: 10,
    title: "Lesson 7: Establish a Scalable CSS System",
    summary:
      "Convert quick styling into a maintainable system using variables, spacing conventions, and reusable typography rules.",
    points: [
      "Define CSS variables in :root for colors and reuse them.",
      "Apply global reset and consistent typography choices.",
      "Use section spacing and max-width wrappers for rhythm."
    ],
    checkpoint: [
      "Your color values come from CSS variables.",
      "Spacing and widths are consistent across sections.",
      "Typography scale is readable and cohesive."
    ],
    codeLabel: "CSS System",
    snippet: `:root {
  --primary: #4f46e5;
  --dark: #0f172a;
  --light: #f8fafc;
  --gray: #64748b;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

section {
  padding: 80px 20px;
  max-width: 1100px;
  margin: auto;
}`
  },
  {
    level: "Intermediate",
    readTime: "~12 min",
    paceSeconds: 10,
    title: "Lesson 8: Make the Website Responsive for Mobile",
    summary:
      "Responsive behavior transforms your desktop layout into a usable mobile experience with smart breakpoints.",
    points: [
      "Hide desktop nav links under 768px and switch to toggle pattern.",
      "Keep cards and content stacking gracefully with grid auto-fit.",
      "Test spacing and button touch targets on small screens."
    ],
    checkpoint: [
      "Mobile menu appears only at small widths.",
      "Navigation links are usable when expanded.",
      "Sections remain readable without horizontal scrolling."
    ],
    codeLabel: "Media Query",
    snippet: `@media (max-width: 768px) {
  .nav-links {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 20px;
    background: white;
    padding: 20px;
  }

  .nav-links.active {
    display: flex;
  }

  .menu-toggle {
    display: block;
  }
}`
  },
  {
    level: "Advanced",
    readTime: "~14 min",
    paceSeconds: 11,
    title: "Lesson 9: Wire Navigation Interactions with JavaScript",
    summary:
      "Now behavior starts: mobile menu toggle and smooth section scrolling. These interactions make the site feel alive.",
    points: [
      "Select DOM elements once and store them in constants.",
      "Toggle nav class on menu icon click.",
      "Create reusable smooth scroll helper function."
    ],
    checkpoint: [
      "Clicking menu icon opens/closes mobile links.",
      "CTA and nav actions scroll smoothly to the right section.",
      "Your JS runs without console errors."
    ],
    codeLabel: "JavaScript Navigation",
    snippet: `const toggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}`
  },
  {
    level: "Advanced",
    readTime: "~15 min",
    paceSeconds: 11,
    title: "Lesson 10: Add Practical Form Validation and Feedback",
    summary:
      "User trust depends on clear form behavior. Validate input, explain issues, and confirm success in a friendly way.",
    points: [
      "Intercept form submit with preventDefault.",
      "Validate minimum name/message lengths and email format basics.",
      "Show explicit feedback and reset form on success."
    ],
    checkpoint: [
      "Short or invalid input shows clear error text.",
      "Successful submit shows a positive confirmation message.",
      "Form resets only when all validation passes."
    ],
    codeLabel: "JavaScript Form Logic",
    snippet: `document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const msg = document.getElementById('formMsg');

  if (name.length < 3) return (msg.textContent = 'Name must be at least 3 characters');
  if (!email.includes('@')) return (msg.textContent = 'Enter a valid email');
  if (message.length < 10) return (msg.textContent = 'Message must be at least 10 characters');

  msg.style.color = 'green';
  msg.textContent = 'Message sent successfully! (demo only)';
  this.reset();
});`
  },
  {
    level: "Pro",
    readTime: "~14 min",
    paceSeconds: 11,
    title: "Lesson 11: Implement Theme Toggling and Visual Polish",
    summary:
      "This is where your site feels finished. Add dark mode support and polish interaction details for a professional finish.",
    points: [
      "Create a dark mode toggle by adding/removing a body class.",
      "Define dark mode card/background overrides in CSS.",
      "Fine-tune transitions for hover, buttons, and navigation."
    ],
    checkpoint: [
      "Toggle button switches between light and dark themes.",
      "Cards and text remain readable in both modes.",
      "Transitions are smooth and not distracting."
    ],
    codeLabel: "Theme Toggle",
    snippet: `function toggleDarkMode() {
  document.body.classList.toggle('dark');
}

body.dark {
  background: var(--dark);
  color: var(--light);
}

body.dark .card {
  background: #1e293b;
}`
  },
  {
    level: "Pro",
    readTime: "~16 min",
    paceSeconds: 12,
    title: "Lesson 12: Final Integration, QA, and Launch Readiness",
    summary:
      "Bring all pieces together and verify that your build closely matches the target website in layout, behavior, and responsiveness.",
    points: [
      "Cross-check each section against the target in `lesson website/lesson result.html`.",
      "Test navigation, form validation, and dark mode on desktop/mobile.",
      "Refactor repeated CSS/JS for clarity and long-term maintenance."
    ],
    checkpoint: [
      "Your page mirrors the main structure and interactions of the target.",
      "No major responsiveness or interaction issues remain.",
      "You can explain each layer: HTML structure, CSS style, JS behavior."
    ],
    codeLabel: "Final QA Checklist",
    snippet: `QA pass list:
[ ] Navbar fixed and mobile toggle works
[ ] Hero CTA smooth-scrolls to Services
[ ] About + Services responsive layout works
[ ] Contact form validates correctly
[ ] Dark mode toggles cleanly
[ ] No obvious console errors
[ ] Visual spacing and typography feel consistent`
  }
];

const lessonGuidance = [
  {
    explain:
      "This first step prevents confusion later. Define purpose, audience, and page/content scope, then set up folder structure and starter boilerplate before writing feature code.",
    explainBlocks: [
      {
        type: "paragraph",
        text: "Before writing any code, the first and most important step is to map out your target. This means clearly understanding what you are about to build before touching your keyboard."
      },
      {
        type: "paragraph",
        text: "Start by asking yourself a few key questions:"
      },
      {
        type: "list",
        items: [
          "What is the purpose of this website?",
          "Who is it for?",
          "Will it be a single-page website or will it have multiple pages (for example: Home, About, Contact)?",
          "What kind of content will it display (text, images, videos, forms)?"
        ]
      },
      {
        type: "paragraph",
        text: "Answering these questions helps you avoid confusion later and gives your project a clear direction."
      },
      {
        type: "heading",
        text: "Defining Your Folder Structure"
      },
      {
        type: "paragraph",
        text: "Once you understand your website, the next step is to organize your project files properly."
      },
      {
        type: "list",
        items: [
          "Keep your project organized.",
          "Easily locate files.",
          "Scale your project as it grows."
        ]
      },
      {
        type: "paragraph",
        text: "If your website has multiple pages, create additional HTML files accordingly. If it is a single-page website, you may only need index.html."
      },
      {
        type: "heading",
        text: "Starting Your HTML File"
      },
      {
        type: "paragraph",
        text: "After setting up your folders, you can now begin coding."
      },
      {
        type: "paragraph",
        text: "Open your index.html file and type ! (in editors like VS Code) to generate the basic HTML boilerplate. This gives you a ready-made structure like:"
      },
      {
        type: "list",
        items: [
          "Document type declaration.",
          "<html>, <head>, and <body> tags.",
          "Meta tags for responsiveness and character encoding."
        ]
      },
      {
        type: "paragraph",
        text: "This step ensures your project starts with a proper foundation."
      },
      {
        type: "heading",
        text: "Linking Your CSS and JavaScript"
      },
      {
        type: "paragraph",
        text: "Before writing any actual content, you should connect your external files:"
      },
      {
        type: "list",
        items: [
          "Link your CSS file inside the <head> section.",
          "Link your JavaScript file before the closing </body> tag."
        ]
      },
      {
        type: "paragraph",
        text: "This keeps your styling and functionality separate from your HTML, which is a best practice in web development."
      },
      {
        type: "heading",
        text: "Key Takeaway"
      },
      {
        type: "paragraph",
        text: "Planning may seem simple, but it is what separates messy projects from clean, professional ones. A well-structured project makes everything easier, from coding to debugging to scaling."
      }
    ],
    doList: [
      "Write your planning answers before touching HTML sections.",
      "Create your folders (`css`, `js`, `images`) and file names first.",
      "Generate HTML boilerplate and link CSS in `<head>` and JS before `</body>`."
    ],
    dontList: [
      "Do not jump into styling with no project structure.",
      "Do not start coding sections without knowing site purpose and audience.",
      "Do not mix all logic in one file when external CSS/JS files are expected."
    ]
  },
  {
    explain:
      "Build the raw HTML structure first, section by section, before any styling.",
    explainBlocks: [
      {
        type: "paragraph",
        text: "In this lesson, your job is to write the base markup in index.html from top to bottom."
      },
      {
        type: "paragraph",
        text: "Do not style yet. Focus on getting a clean, working HTML skeleton with correct tags and IDs."
      },
      {
        type: "heading",
        text: "Exact Build Order"
      },
      {
        type: "list",
        items: [
          "Inside <body>, create <header> first.",
          "Add section blocks for home, about, services, and contact.",
          "Add <footer> as the last major block.",
          "Give each main section a unique ID such as id=\"home\" and id=\"services\"."
        ]
      },
      {
        type: "heading",
        text: "What to Check Before Moving On"
      },
      {
        type: "list",
        items: [
          "All section IDs are unique and spelled consistently.",
          "Heading structure is logical (h1 then h2/h3 as needed).",
          "The page is readable in plain HTML with no CSS."
        ]
      },
      {
        type: "paragraph",
        text: "If this skeleton is clean, every later CSS and JavaScript step becomes easier."
      }
    ],
    doList: [
      "Use meaningful elements like header, nav, section, and footer.",
      "Add clear IDs that match navigation anchors.",
      "Keep heading order logical and readable."
    ],
    dontList: [
      "Do not wrap the whole page in generic div tags only.",
      "Do not skip IDs if sections need to be linked.",
      "Do not use headings based only on text size."
    ]
  },
  {
    explain:
      "Write the navigation markup, connect each link to section IDs, then make the header stay visible.",
    explainBlocks: [
      {
        type: "paragraph",
        text: "Open your header block and create a nav container with three parts: brand, links, and mobile toggle placeholder."
      },
      {
        type: "paragraph",
        text: "Your links should point to real IDs that already exist in your HTML skeleton."
      },
      {
        type: "heading",
        text: "Implementation Steps"
      },
      {
        type: "list",
        items: [
          "Create a nav wrapper inside <header>.",
          "Add a logo/brand element.",
          "Add anchor links to #home, #about, #services, and #contact.",
          "Add a menu toggle element with an ID for later JavaScript use."
        ]
      },
      {
        type: "heading",
        text: "Base CSS for This Step"
      },
      {
        type: "list",
        items: [
          "Apply fixed or sticky positioning to the header.",
          "Set width, background, and z-index so it stays visible above content.",
          "Add top spacing to page sections if the fixed header overlaps content."
        ]
      }
    ],
    doList: [
      "Keep nav labels short and predictable.",
      "Use a clear brand mark or logo area.",
      "Prepare a mobile menu toggle early."
    ],
    dontList: [
      "Do not overcrowd nav with too many links.",
      "Do not hide the menu logic for mobile until the end.",
      "Do not use unclear link text like Click Here."
    ]
  },
  {
    explain:
      "Build the hero section markup, style it for full-screen impact, then wire its CTA target.",
    explainBlocks: [
      {
        type: "paragraph",
        text: "Now write the main hero block inside the home section. Keep structure simple: heading, supporting text, and one primary button."
      },
      {
        type: "paragraph",
        text: "After markup, add CSS to control height, alignment, background treatment, and text contrast."
      },
      {
        type: "heading",
        text: "Build Sequence"
      },
      {
        type: "list",
        items: [
          "Create <section id=\"home\" class=\"hero\">.",
          "Add h1, one short paragraph, and CTA button.",
          "Style hero with min-height/height and centered content.",
          "Apply a strong background (for example gradient) and confirm text readability."
        ]
      },
      {
        type: "heading",
        text: "CTA Wiring"
      },
      {
        type: "list",
        items: [
          "Set button action to move users toward services/contact.",
          "Use an anchor link or JavaScript helper that scrolls to a real section ID.",
          "Test the CTA immediately after wiring."
        ]
      }
    ],
    doList: [
      "Write one clear headline and one supporting sentence.",
      "Use a high-contrast CTA button.",
      "Guide users to a meaningful next section like Services."
    ],
    dontList: [
      "Do not overload the hero with multiple competing messages.",
      "Do not add too many buttons with equal visual weight.",
      "Do not use weak contrast that hurts readability."
    ]
  },
  {
    explain:
      "Code the About and Services sections, then apply one reusable card style across all service items.",
    explainBlocks: [
      {
        type: "paragraph",
        text: "In this lesson, you expand the page body. Start with About section markup, then add Services markup with repeated card blocks."
      },
      {
        type: "paragraph",
        text: "Write one CSS card pattern first, then reuse that class on each service card instead of styling each card separately."
      },
      {
        type: "heading",
        text: "Markup Steps"
      },
      {
        type: "list",
        items: [
          "Create <section id=\"about\"> with heading and supporting content.",
          "Add optional media or stat blocks if needed.",
          "Create <section id=\"services\"> with heading and card container.",
          "Add one <article class=\"card\"> per service item."
        ]
      },
      {
        type: "heading",
        text: "CSS Steps"
      },
      {
        type: "list",
        items: [
          "Set container to grid or flex for responsive layout.",
          "Define shared .card padding, border, radius, and background.",
          "Add subtle hover feedback to .card once the base layout works."
        ]
      }
    ],
    doList: [
      "Build one card pattern and reuse it for each service.",
      "Use grid to adapt across screen sizes.",
      "Keep copy short so cards stay scannable."
    ],
    dontList: [
      "Do not style each card with different spacing rules.",
      "Do not force fixed widths that break on mobile.",
      "Do not put long paragraphs in service cards."
    ]
  },
  {
    explain:
      "Create the contact markup first, then style form controls so they are readable and easy to use.",
    explainBlocks: [
      {
        type: "paragraph",
        text: "Build the contact section in two parts: contact info block and form block."
      },
      {
        type: "paragraph",
        text: "At this stage, focus on clean HTML fields and clear labels. JavaScript validation comes later."
      },
      {
        type: "heading",
        text: "Markup Steps"
      },
      {
        type: "list",
        items: [
          "Create <section id=\"contact\"> and add heading text.",
          "Add <form id=\"contactForm\">.",
          "Add name, email, and message fields with labels.",
          "Add submit button and a feedback paragraph element."
        ]
      },
      {
        type: "heading",
        text: "Styling Steps"
      },
      {
        type: "list",
        items: [
          "Set consistent spacing between inputs.",
          "Add clear borders and rounded corners for fields.",
          "Style :focus states so active field is obvious.",
          "Keep feedback text close to submit button."
        ]
      }
    ],
    doList: [
      "Ask only for information you really need.",
      "Use labels and placeholders that are easy to understand.",
      "Keep feedback messages near the submit button."
    ],
    dontList: [
      "Do not request unnecessary personal details.",
      "Do not hide validation feedback from the user.",
      "Do not use vague errors like Invalid input."
    ]
  },
  {
    explain:
      "Refactor scattered CSS into a reusable system with variables, global rules, and shared component patterns.",
    explainBlocks: [
      {
        type: "paragraph",
        text: "Now that most sections exist, clean up your CSS file so future changes are faster and safer."
      },
      {
        type: "paragraph",
        text: "Do this by centralizing tokens first, then normalizing base rules, then unifying repeated component styles."
      },
      {
        type: "heading",
        text: "Refactor Order"
      },
      {
        type: "list",
        items: [
          "Add :root variables for colors, spacing, radius, and shadows.",
          "Set global reset and box-sizing rules.",
          "Define typography scale for headings and body text.",
          "Create shared section/container spacing rules."
        ]
      },
      {
        type: "heading",
        text: "Code Cleanup Steps"
      },
      {
        type: "list",
        items: [
          "Replace hardcoded repeated values with var(...) tokens.",
          "Merge duplicate rules into shared utility/component classes.",
          "Group CSS by layout, components, and states for readability."
        ]
      }
    ],
    doList: [
      "Define color and spacing tokens in :root.",
      "Apply consistent container widths and section padding.",
      "Reuse utility patterns for cards and buttons."
    ],
    dontList: [
      "Do not hardcode a new color value in every block.",
      "Do not mix many unrelated font sizes without a scale.",
      "Do not repeat large style blocks if they can be shared."
    ]
  },
  {
    explain:
      "Add media queries that progressively adapt nav, layout grids, and spacing for smaller viewports.",
    explainBlocks: [
      {
        type: "paragraph",
        text: "This lesson is implementation-first: open your CSS and create breakpoint rules for tablet and mobile widths."
      },
      {
        type: "paragraph",
        text: "Start with navigation behavior, then content layout, then spacing and text adjustments."
      },
      {
        type: "heading",
        text: "Breakpoint Workflow"
      },
      {
        type: "list",
        items: [
          "At mobile width, hide desktop nav links and enable menu-toggle layout.",
          "Stack multi-column grids into one-column layout where needed.",
          "Increase vertical spacing where content feels crowded.",
          "Ensure buttons and links remain easy to tap."
        ]
      },
      {
        type: "heading",
        text: "Verification Steps"
      },
      {
        type: "list",
        items: [
          "Test desktop, tablet, and mobile widths in DevTools.",
          "Check for horizontal scroll and clipped content.",
          "Confirm forms, cards, and menu remain usable at each width."
        ]
      }
    ],
    doList: [
      "Test breakpoints while you build, not only after finishing.",
      "Use stack-friendly grid and flexible spacing units.",
      "Check tap targets for menu buttons and form controls."
    ],
    dontList: [
      "Do not rely on desktop-only spacing values.",
      "Do not hide content on mobile just to make layout fit.",
      "Do not ignore overflow issues or clipped text."
    ]
  },
  {
    explain:
      "Wire navigation behavior with focused JavaScript: menu toggle state and smooth scrolling helpers.",
    explainBlocks: [
      {
        type: "paragraph",
        text: "Open script.js and select the navigation elements you already prepared in HTML."
      },
      {
        type: "paragraph",
        text: "Implement one behavior at a time: toggle menu state, then smooth-scroll helper."
      },
      {
        type: "heading",
        text: "Coding Sequence"
      },
      {
        type: "list",
        items: [
          "Use getElementById/querySelector to store nav and toggle elements.",
          "Add click handler on toggle button and switch open state class.",
          "Update accessibility state such as aria-expanded when menu opens/closes.",
          "Create scrollToSection(id) helper using scrollIntoView."
        ]
      },
      {
        type: "heading",
        text: "Debug Checklist"
      },
      {
        type: "list",
        items: [
          "Confirm menu opens and closes repeatedly without glitches.",
          "Confirm links close the mobile menu after selection.",
          "Check browser console for errors after each interaction."
        ]
      }
    ],
    doList: [
      "Select elements once and keep references in constants.",
      "Use simple class toggles for state changes.",
      "Name interaction functions clearly, like scrollToSection."
    ],
    dontList: [
      "Do not write anonymous logic everywhere with no structure.",
      "Do not re-query the same DOM nodes repeatedly.",
      "Do not rely on brittle selectors that may change."
    ]
  },
  {
    explain:
      "Implement submit handling and field checks in JavaScript, then display clear success/error feedback.",
    explainBlocks: [
      {
        type: "paragraph",
        text: "Now connect logic to your contact form. Start by preventing default submit so validation runs first."
      },
      {
        type: "paragraph",
        text: "Read and trim each field value, validate one rule at a time, and return early when a rule fails."
      },
      {
        type: "heading",
        text: "Implementation Steps"
      },
      {
        type: "list",
        items: [
          "Attach submit listener to #contactForm.",
          "Call event.preventDefault() at the top of the handler.",
          "Validate name length, email pattern, and message length.",
          "Write feedback text into your form message element.",
          "Reset form only after all validations pass."
        ]
      },
      {
        type: "heading",
        text: "Code Quality Checks"
      },
      {
        type: "list",
        items: [
          "Keep each error message specific and actionable.",
          "Set distinct styles/colors for error vs success states.",
          "Test invalid and valid cases before moving to next lesson."
        ]
      }
    ],
    doList: [
      "Validate user inputs before accepting submission.",
      "Explain exactly what needs to be fixed.",
      "Show a visible success message when validation passes."
    ],
    dontList: [
      "Do not silently block form submit with no message.",
      "Do not use overly strict rules that reject valid entries.",
      "Do not clear the form unless submission is actually successful."
    ]
  },
  {
    explain:
      "Add theme toggle behavior with class switching, then polish transitions and state persistence.",
    explainBlocks: [
      {
        type: "paragraph",
        text: "Create a theme toggle function that adds/removes a class on body, then map dark-mode overrides in CSS."
      },
      {
        type: "paragraph",
        text: "After toggle works, persist preference in localStorage and restore it on page load."
      },
      {
        type: "heading",
        text: "Implementation Steps"
      },
      {
        type: "list",
        items: [
          "Add toggle button and connect click handler.",
          "Switch body class, for example body.dark.",
          "Define dark-mode overrides for backgrounds, text, cards, form controls, and nav.",
          "Store current theme value in localStorage."
        ]
      },
      {
        type: "heading",
        text: "Polish Pass"
      },
      {
        type: "list",
        items: [
          "Add subtle transition timing for color/background changes.",
          "Verify readable contrast in both light and dark modes.",
          "Test theme toggle repeatedly after refresh."
        ]
      }
    ],
    doList: [
      "Use a single class toggle for light and dark states.",
      "Ensure text contrast remains readable in both themes.",
      "Keep motion subtle and purposeful."
    ],
    dontList: [
      "Do not invert colors blindly without checking contrast.",
      "Do not add flashy animations that distract from content.",
      "Do not forget to test cards, forms, and buttons in dark mode."
    ]
  },
  {
    explain:
      "Run full integration checks, fix issues in order, then clean up code for launch-ready structure.",
    explainBlocks: [
      {
        type: "paragraph",
        text: "In this final step, you stop adding features and focus on testing and cleanup."
      },
      {
        type: "paragraph",
        text: "Work through a repeatable QA sequence so every section and interaction is verified."
      },
      {
        type: "heading",
        text: "QA Sequence"
      },
      {
        type: "list",
        items: [
          "Compare layout order and section content against target file.",
          "Test nav toggle, smooth scroll, form validation, and theme switching.",
          "Test responsiveness at common breakpoints and real scroll conditions.",
          "Open DevTools console and fix reported errors."
        ]
      },
      {
        type: "heading",
        text: "Cleanup Before Finish"
      },
      {
        type: "list",
        items: [
          "Remove duplicate CSS/JS blocks.",
          "Rename unclear variables and classes for readability.",
          "Keep file structure and comments clean so another developer can follow quickly."
        ]
      }
    ],
    doList: [
      "Run through a repeatable checklist for every major feature.",
      "Compare your build against the target section by section.",
      "Refactor duplicated code for readability."
    ],
    dontList: [
      "Do not ship without testing mobile behavior.",
      "Do not ignore console errors even if page looks okay.",
      "Do not keep messy code that future you cannot maintain."
    ]
  }
];

// BEGIN LESSON TEXT REPLACEMENTS
const lessonTextReplacements = {
  "2": {
    "explain": "In this lesson, your primary objective is to build the foundational HTML structure for your website by writing the complete base markup inside `index.html`, working carefully from top to bottom.",
    "explainBlocks": [
      {
        "type": "paragraph",
        "text": "In this lesson, your primary objective is to build the foundational HTML structure for your website by writing the complete base markup inside `index.html`, working carefully from top to bottom."
      },
      {
        "type": "paragraph",
        "text": "At this stage, focus exclusively on structurenot appearance. Avoid adding CSS styles, design elements, or JavaScript functionality. The goal is to create a clean, organized, and fully functional HTML skeleton that will serve as the backbone for all future styling and interactivity."
      },
      {
        "type": "heading",
        "text": "Core Development Focus"
      },
      {
        "type": "paragraph",
        "text": "You should:"
      },
      {
        "type": "list",
        "items": [
          "Build the page layout in a logical top-down order.",
          "Use proper semantic HTML tags for each major section.",
          "Assign clear, consistent IDs to sections for navigation and future styling.",
          "Ensure the document is readable and understandable even without CSS."
        ]
      },
      {
        "type": "heading",
        "text": "Exact Build Order"
      },
      {
        "type": "paragraph",
        "text": "Inside the `<body>` tag, construct your page in the following sequence:"
      },
      {
        "type": "heading",
        "text": "1. Create the `<header>`"
      },
      {
        "type": "paragraph",
        "text": "This should be the first major block and typically contains:"
      },
      {
        "type": "list",
        "items": [
          "Site title or logo",
          "Navigation menu",
          "Introductory branding elements"
        ]
      },
      {
        "type": "heading",
        "text": "2. Add Main Content Sections"
      },
      {
        "type": "paragraph",
        "text": "Create separate semantic `<section>` blocks for:"
      },
      {
        "type": "list",
        "items": [
          "Home",
          "About",
          "Services",
          "Contact"
        ]
      },
      {
        "type": "paragraph",
        "text": "Each section must:"
      },
      {
        "type": "list",
        "items": [
          "Be clearly separated",
          "Include relevant headings",
          "Use a unique ID"
        ]
      },
      {
        "type": "paragraph",
        "text": "Example:"
      },
      {
        "type": "list",
        "items": [
          "`id=\"home\"`",
          "`id=\"about\"`",
          "`id=\"services\"`",
          "`id=\"contact\"`"
        ]
      },
      {
        "type": "paragraph",
        "text": "These IDs are essential for:"
      },
      {
        "type": "list",
        "items": [
          "Navigation links",
          "CSS targeting",
          "JavaScript interactions",
          "Accessibility improvements"
        ]
      },
      {
        "type": "heading",
        "text": "3. Create the `<footer>`"
      },
      {
        "type": "paragraph",
        "text": "This should be the final major structural block on the page."
      },
      {
        "type": "paragraph",
        "text": "Typical footer content may include:"
      },
      {
        "type": "list",
        "items": [
          "Copyright",
          "Contact details",
          "Social links",
          "Additional navigation"
        ]
      },
      {
        "type": "heading",
        "text": "Important Structural Guidelines"
      },
      {
        "type": "heading",
        "text": "Use Semantic HTML"
      },
      {
        "type": "paragraph",
        "text": "Prioritize tags like:"
      },
      {
        "type": "list",
        "items": [
          "`<header>`",
          "`<nav>`",
          "`<main>` (if included)",
          "`<section>`",
          "`<footer>`"
        ]
      },
      {
        "type": "paragraph",
        "text": "This improves:"
      },
      {
        "type": "list",
        "items": [
          "SEO",
          "Accessibility",
          "Code maintainability"
        ]
      },
      {
        "type": "heading",
        "text": "What to Check Before Moving On"
      },
      {
        "type": "paragraph",
        "text": "Before proceeding to styling or scripting, verify the following:"
      },
      {
        "type": "heading",
        "text": "Section IDs"
      },
      {
        "type": "list",
        "items": [
          "Every section ID is unique",
          "Spelling is consistent across navigation and content",
          "IDs are descriptive and lowercase where possible"
        ]
      },
      {
        "type": "heading",
        "text": "Heading Hierarchy"
      },
      {
        "type": "list",
        "items": [
          "Use one `<h1>` for the main page title",
          "Use `<h2>` for major sections",
          "Use `<h3>` for subsection content if needed"
        ]
      },
      {
        "type": "paragraph",
        "text": "This creates:"
      },
      {
        "type": "list",
        "items": [
          "Better accessibility",
          "Cleaner document structure",
          "Easier content organization"
        ]
      },
      {
        "type": "heading",
        "text": "Plain HTML Readability"
      },
      {
        "type": "paragraph",
        "text": "Your page should:"
      },
      {
        "type": "list",
        "items": [
          "Make sense without CSS",
          "Display content clearly",
          "Be easy to scan",
          "Have logically ordered sections"
        ]
      },
      {
        "type": "heading",
        "text": "Why This Step Matters"
      },
      {
        "type": "paragraph",
        "text": "A strong HTML skeleton makes every future step easier:"
      },
      {
        "type": "list",
        "items": [
          "CSS styling becomes more predictable",
          "JavaScript integration is simpler",
          "Navigation works more reliably",
          "Maintenance becomes faster",
          "Debugging is easier"
        ]
      },
      {
        "type": "paragraph",
        "text": "Think of this stage as building the structural framework of a house: if the foundation is solid, everything else can be added more efficiently."
      },
      {
        "type": "heading",
        "text": "Final Goal"
      },
      {
        "type": "paragraph",
        "text": "By the end of this lesson, you should have:"
      },
      {
        "type": "list",
        "items": [
          "A complete structural webpage",
          "Clean semantic markup",
          "Proper IDs",
          "Logical heading order",
          "A solid base ready for CSS and JavaScript"
        ]
      },
      {
        "type": "paragraph",
        "text": "If this skeleton is built correctly now, every later stage of development will be smoother, faster, and far more professional."
      }
    ]
  },
  "3": {
    "explain": "In this step, you will expand your existing `<header>` structure by building a fully organized navigation system that will serve as the primary way users move through your website.",
    "explainBlocks": [
      {
        "type": "paragraph",
        "text": "In this step, you will expand your existing `<header>` structure by building a fully organized navigation system that will serve as the primary way users move through your website."
      },
      {
        "type": "paragraph",
        "text": "Your goal is to create a functional navigation layout that includes:"
      },
      {
        "type": "list",
        "items": [
          "A brand or logo area",
          "Navigation links connected to your existing page sections",
          "A mobile menu toggle placeholder for future responsive JavaScript functionality"
        ]
      },
      {
        "type": "paragraph",
        "text": "This step establishes the structural and functional framework of your sites navigation before advanced styling or interactivity is added."
      },
      {
        "type": "heading",
        "text": "Primary Objective"
      },
      {
        "type": "paragraph",
        "text": "Inside your existing `<header>` block:"
      },
      {
        "type": "heading",
        "text": "Build a `<nav>` container with three key parts:"
      },
      {
        "type": "heading",
        "text": "1. Brand Section"
      },
      {
        "type": "paragraph",
        "text": "This section should represent your site identity."
      },
      {
        "type": "paragraph",
        "text": "Possible examples:"
      },
      {
        "type": "list",
        "items": [
          "Website name",
          "Logo text",
          "Placeholder logo image",
          "Personal brand"
        ]
      },
      {
        "type": "paragraph",
        "text": "Purpose:"
      },
      {
        "type": "list",
        "items": [
          "Improves recognition",
          "Gives users an anchor point",
          "Often links back to the homepage"
        ]
      },
      {
        "type": "heading",
        "text": "2. Navigation Links Section"
      },
      {
        "type": "paragraph",
        "text": "Create anchor (`<a>`) links that connect directly to your existing section IDs."
      },
      {
        "type": "paragraph",
        "text": "Required links:"
      },
      {
        "type": "list",
        "items": [
          "`#home`",
          "`#about`",
          "`#services`",
          "`#contact`"
        ]
      },
      {
        "type": "paragraph",
        "text": "Example structure:"
      },
      {
        "type": "list",
        "items": [
          "Home",
          "About",
          "Services",
          "Contact"
        ]
      },
      {
        "type": "paragraph",
        "text": "Important: These links must match the IDs already created in your HTML skeleton exactly."
      },
      {
        "type": "paragraph",
        "text": "For example:"
      },
      {
        "type": "list",
        "items": [
          "`<section id=\"about\">`  `<a href=\"#about\">About</a>`"
        ]
      },
      {
        "type": "paragraph",
        "text": "This ensures:"
      },
      {
        "type": "list",
        "items": [
          "Smooth internal navigation",
          "Future scroll effects",
          "Better user experience",
          "Cleaner JavaScript integration"
        ]
      },
      {
        "type": "heading",
        "text": "3. Mobile Toggle Placeholder"
      },
      {
        "type": "paragraph",
        "text": "Add a menu toggle element for smaller screens."
      },
      {
        "type": "paragraph",
        "text": "This can be:"
      },
      {
        "type": "list",
        "items": [
          "A button",
          "A div",
          "A span/icon placeholder"
        ]
      },
      {
        "type": "paragraph",
        "text": "Requirements:"
      },
      {
        "type": "list",
        "items": [
          "Include a unique ID for future JavaScript targeting",
          "Example: `id=\"menu-toggle\"`"
        ]
      },
      {
        "type": "paragraph",
        "text": "Purpose:"
      },
      {
        "type": "list",
        "items": [
          "Prepares your layout for responsive design",
          "Allows later addition of hamburger menu functionality",
          "Keeps development scalable"
        ]
      },
      {
        "type": "heading",
        "text": "Recommended Structural Layout"
      },
      {
        "type": "paragraph",
        "text": "Inside `<header>`:"
      },
      {
        "type": "list",
        "items": [
          "`<nav>`"
        ]
      },
      {
        "type": "list",
        "items": [
          "Brand",
          "Navigation links",
          "Mobile toggle"
        ]
      },
      {
        "type": "paragraph",
        "text": "This keeps the header:"
      },
      {
        "type": "list",
        "items": [
          "Organized",
          "Semantic",
          "Responsive-ready",
          "Easy to style later"
        ]
      },
      {
        "type": "heading",
        "text": "Base CSS Requirements for This Step"
      },
      {
        "type": "paragraph",
        "text": "Although heavy styling is still not the focus, you should now add essential structural CSS to make the navigation functional."
      },
      {
        "type": "heading",
        "text": "Header Positioning"
      },
      {
        "type": "paragraph",
        "text": "Apply either:"
      },
      {
        "type": "heading",
        "text": "Fixed Header:"
      },
      {
        "type": "paragraph",
        "text": "Code example:\nposition: fixed;"
      },
      {
        "type": "heading",
        "text": "Or Sticky Header:"
      },
      {
        "type": "paragraph",
        "text": "Code example:\nposition: sticky;\ntop: 0;"
      },
      {
        "type": "heading",
        "text": "Additional Required CSS Properties"
      },
      {
        "type": "heading",
        "text": "Width"
      },
      {
        "type": "paragraph",
        "text": "Ensure the header spans the page:"
      },
      {
        "type": "paragraph",
        "text": "Code example:\nwidth: 100%;"
      },
      {
        "type": "heading",
        "text": "Background"
      },
      {
        "type": "paragraph",
        "text": "Add a visible background color so content does not show through:"
      },
      {
        "type": "paragraph",
        "text": "Code example:\nbackground: white;"
      },
      {
        "type": "heading",
        "text": "Z-Index"
      },
      {
        "type": "paragraph",
        "text": "Keep navigation above all page content:"
      },
      {
        "type": "paragraph",
        "text": "Code example:\nz-index: 1000;"
      },
      {
        "type": "heading",
        "text": "Section Spacing Adjustment"
      },
      {
        "type": "paragraph",
        "text": "If your fixed header covers content when users click navigation links:"
      },
      {
        "type": "paragraph",
        "text": "Add top padding or margin to sections:"
      },
      {
        "type": "paragraph",
        "text": "Code example:\npadding-top: 80px;"
      },
      {
        "type": "paragraph",
        "text": "This prevents:"
      },
      {
        "type": "list",
        "items": [
          "Hidden headings",
          "Poor scroll alignment",
          "Navigation overlap issues"
        ]
      },
      {
        "type": "heading",
        "text": "What to Check Before Moving Forward"
      },
      {
        "type": "heading",
        "text": "Navigation Structure"
      },
      {
        "type": "list",
        "items": [
          "Header contains nav wrapper",
          "Brand/logo exists",
          "All links function correctly",
          "Mobile toggle placeholder is present"
        ]
      },
      {
        "type": "heading",
        "text": "Link Accuracy"
      },
      {
        "type": "list",
        "items": [
          "Every href matches a real section ID",
          "No broken anchor links",
          "Navigation scrolls correctly"
        ]
      },
      {
        "type": "heading",
        "text": "Header Behavior"
      },
      {
        "type": "list",
        "items": [
          "Header remains visible during scroll",
          "Content does not overlap",
          "Header stays above page content"
        ]
      },
      {
        "type": "heading",
        "text": "Code Quality"
      },
      {
        "type": "list",
        "items": [
          "Semantic tags are used properly",
          "IDs are unique",
          "Layout is scalable for responsive design"
        ]
      },
      {
        "type": "heading",
        "text": "Why This Step Matters"
      },
      {
        "type": "paragraph",
        "text": "Your navigation is one of the most important usability features on the site."
      },
      {
        "type": "paragraph",
        "text": "A well-built nav system:"
      },
      {
        "type": "list",
        "items": [
          "Improves user experience",
          "Supports responsive layouts",
          "Makes JavaScript enhancements easier",
          "Provides better accessibility",
          "Creates professional structure"
        ]
      },
      {
        "type": "paragraph",
        "text": "By setting up the navigation properly now, you make future tasks like:"
      },
      {
        "type": "list",
        "items": [
          "Mobile menus",
          "Smooth scrolling",
          "Active link highlighting",
          "Sticky animations"
        ]
      },
      {
        "type": "paragraph",
        "text": "much easier to implement."
      },
      {
        "type": "heading",
        "text": "Final Goal"
      },
      {
        "type": "paragraph",
        "text": "By the end of this step, your website should have:"
      },
      {
        "type": "list",
        "items": [
          "A structured header",
          "Functional navigation links",
          "A recognizable brand area",
          "A mobile menu placeholder",
          "Basic fixed/sticky positioning",
          "Correct section spacing"
        ]
      },
      {
        "type": "paragraph",
        "text": "Once complete, your site will have a professional navigational foundation ready for deeper styling and responsive enhancements."
      }
    ]
  },
  "4": {
    "explain": "In this step, you will build the main hero section inside your `home` blockthe first major visual area users see when they land on your website.",
    "explainBlocks": [
      {
        "type": "paragraph",
        "text": "In this step, you will build the main hero section inside your `home` blockthe first major visual area users see when they land on your website."
      },
      {
        "type": "paragraph",
        "text": "The hero section is one of the most important conversion and branding components on the page. Its purpose is to immediately communicate who you are, what you offer, and where users should go next."
      },
      {
        "type": "paragraph",
        "text": "Your focus here is to create a clean, impactful structure first, then apply foundational CSS for layout, visibility, and user engagement."
      },
      {
        "type": "heading",
        "text": "Primary Objective"
      },
      {
        "type": "paragraph",
        "text": "Inside your existing homepage structure, create the hero area using:"
      },
      {
        "type": "paragraph",
        "text": "Code example:\n<section id=\"home\" class=\"hero\">"
      },
      {
        "type": "paragraph",
        "text": "This section should serve as the top-level landing block for your site."
      },
      {
        "type": "heading",
        "text": "Required Hero Content Structure"
      },
      {
        "type": "paragraph",
        "text": "Keep the structure simple and conversion-focused:"
      },
      {
        "type": "heading",
        "text": "1. Main Heading (`<h1>`)"
      },
      {
        "type": "paragraph",
        "text": "This is your primary value statement."
      },
      {
        "type": "paragraph",
        "text": "Purpose:"
      },
      {
        "type": "list",
        "items": [
          "Introduces your brand or service",
          "Captures user attention",
          "Defines page purpose"
        ]
      },
      {
        "type": "paragraph",
        "text": "Examples:"
      },
      {
        "type": "list",
        "items": [
          "Build Better Digital Experiences",
          "Professional Web Solutions",
          "Grow Your Business Online"
        ]
      },
      {
        "type": "heading",
        "text": "2. Supporting Paragraph (`<p>`)"
      },
      {
        "type": "paragraph",
        "text": "A short descriptive sentence that reinforces the heading."
      },
      {
        "type": "paragraph",
        "text": "Purpose:"
      },
      {
        "type": "list",
        "items": [
          "Adds clarity",
          "Supports messaging",
          "Encourages trust"
        ]
      },
      {
        "type": "paragraph",
        "text": "Best practice:"
      },
      {
        "type": "list",
        "items": [
          "Keep it concise",
          "Focus on value",
          "Avoid large text blocks"
        ]
      },
      {
        "type": "heading",
        "text": "3. Primary CTA Button"
      },
      {
        "type": "paragraph",
        "text": "This should guide users toward meaningful interaction."
      },
      {
        "type": "paragraph",
        "text": "Examples:"
      },
      {
        "type": "list",
        "items": [
          "View Services",
          "Contact Us",
          "Get Started",
          "Learn More"
        ]
      },
      {
        "type": "heading",
        "text": "CTA Wiring Requirements"
      },
      {
        "type": "paragraph",
        "text": "Your call-to-action button must be functional immediately."
      },
      {
        "type": "heading",
        "text": "Recommended options:"
      },
      {
        "type": "heading",
        "text": "Anchor Link:"
      },
      {
        "type": "paragraph",
        "text": "Code example:\n<a href=\"#services\">Our Services</a>"
      },
      {
        "type": "paragraph",
        "text": "or"
      },
      {
        "type": "paragraph",
        "text": "Code example:\n<a href=\"#contact\">Contact Us</a>"
      },
      {
        "type": "heading",
        "text": "JavaScript Scroll Helper:"
      },
      {
        "type": "paragraph",
        "text": "If preferred later, you can attach smooth scrolling via JS."
      },
      {
        "type": "paragraph",
        "text": "For now:"
      },
      {
        "type": "list",
        "items": [
          "Use real section IDs",
          "Confirm destination exists",
          "Test immediately"
        ]
      },
      {
        "type": "heading",
        "text": "Important:"
      },
      {
        "type": "paragraph",
        "text": "Broken CTAs reduce usability and professionalism, so ensure:"
      },
      {
        "type": "list",
        "items": [
          "Link target is real",
          "Scroll behavior works",
          "Destination section is visible"
        ]
      },
      {
        "type": "heading",
        "text": "CSS Development Goals"
      },
      {
        "type": "paragraph",
        "text": "Once markup is complete, style the hero section to create strong visual impact."
      },
      {
        "type": "heading",
        "text": "1. Height Control"
      },
      {
        "type": "paragraph",
        "text": "Ensure the hero fills a major portion of the viewport:"
      },
      {
        "type": "heading",
        "text": "Recommended:"
      },
      {
        "type": "paragraph",
        "text": "Code example:\nmin-height: 100vh;"
      },
      {
        "type": "paragraph",
        "text": "or"
      },
      {
        "type": "paragraph",
        "text": "Code example:\nheight: 100vh;"
      },
      {
        "type": "paragraph",
        "text": "Purpose:"
      },
      {
        "type": "list",
        "items": [
          "Creates strong first impression",
          "Provides modern landing-page feel",
          "Prioritizes hero visually"
        ]
      },
      {
        "type": "heading",
        "text": "2. Content Alignment"
      },
      {
        "type": "paragraph",
        "text": "Center content vertically and horizontally."
      },
      {
        "type": "heading",
        "text": "Recommended:"
      },
      {
        "type": "paragraph",
        "text": "Code example:\ndisplay: flex;\njustify-content: center;\nalign-items: center;\ntext-align: center;"
      },
      {
        "type": "paragraph",
        "text": "This improves:"
      },
      {
        "type": "list",
        "items": [
          "Readability",
          "Visual balance",
          "Mobile adaptability"
        ]
      },
      {
        "type": "heading",
        "text": "3. Background Treatment"
      },
      {
        "type": "paragraph",
        "text": "Apply a strong visual background."
      },
      {
        "type": "heading",
        "text": "Examples:"
      },
      {
        "type": "list",
        "items": [
          "Gradient",
          "Overlay",
          "Background image",
          "Dark solid color"
        ]
      },
      {
        "type": "paragraph",
        "text": "Example:"
      },
      {
        "type": "paragraph",
        "text": "Code example:\nbackground: linear-gradient(to right, #111, #333);"
      },
      {
        "type": "heading",
        "text": "4. Text Contrast"
      },
      {
        "type": "paragraph",
        "text": "Ensure all text is clearly readable against the background."
      },
      {
        "type": "heading",
        "text": "Example:"
      },
      {
        "type": "paragraph",
        "text": "Code example:\ncolor: white;"
      },
      {
        "type": "paragraph",
        "text": "Maintain:"
      },
      {
        "type": "list",
        "items": [
          "Strong contrast",
          "Accessibility",
          "Professional appearance"
        ]
      },
      {
        "type": "heading",
        "text": "CTA Button Base Styling"
      },
      {
        "type": "paragraph",
        "text": "Your button should be:"
      },
      {
        "type": "list",
        "items": [
          "Clearly visible",
          "Clickable",
          "Prominent"
        ]
      },
      {
        "type": "paragraph",
        "text": "Basic areas to control:"
      },
      {
        "type": "list",
        "items": [
          "Padding",
          "Background color",
          "Hover state",
          "Border radius"
        ]
      },
      {
        "type": "paragraph",
        "text": "Even minimal styling should make it stand out as the primary action."
      },
      {
        "type": "heading",
        "text": "What to Check Before Moving On"
      },
      {
        "type": "heading",
        "text": "Hero Structure"
      },
      {
        "type": "list",
        "items": [
          "Section has correct ID and class",
          "Includes h1",
          "Includes paragraph",
          "Includes CTA button"
        ]
      },
      {
        "type": "heading",
        "text": "CSS Functionality"
      },
      {
        "type": "list",
        "items": [
          "Hero fills screen effectively",
          "Content is centered",
          "Background is visually strong",
          "Text remains readable"
        ]
      },
      {
        "type": "heading",
        "text": "CTA Validation"
      },
      {
        "type": "list",
        "items": [
          "Button links correctly",
          "Scrolls to intended section",
          "No broken references",
          "User path is clear"
        ]
      },
      {
        "type": "heading",
        "text": "Why This Step Matters"
      },
      {
        "type": "paragraph",
        "text": "The hero section often determines whether users continue exploring or leave."
      },
      {
        "type": "paragraph",
        "text": "A strong hero:"
      },
      {
        "type": "list",
        "items": [
          "Creates first impressions",
          "Communicates brand identity",
          "Increases engagement",
          "Improves conversions",
          "Establishes design tone"
        ]
      },
      {
        "type": "paragraph",
        "text": "By building this section properly now, future enhancements such as:"
      },
      {
        "type": "list",
        "items": [
          "Animations",
          "Responsive layouts",
          "Background media",
          "Scroll effects",
          "Lead generation"
        ]
      },
      {
        "type": "paragraph",
        "text": "become significantly easier."
      },
      {
        "type": "heading",
        "text": "Final Goal"
      },
      {
        "type": "paragraph",
        "text": "By the end of this step, your site should have:"
      },
      {
        "type": "list",
        "items": [
          "A structured hero section",
          "Strong headline",
          "Supporting copy",
          "Functional CTA",
          "Full-height layout",
          "Centered content",
          "Professional background treatment",
          "Readable text contrast"
        ]
      },
      {
        "type": "paragraph",
        "text": "Once complete, your homepage will have a polished, conversion-focused entry point that forms the foundation for the rest of your website experience."
      }
    ]
  },
  "5": {
    "explain": "In this lesson, your goal is to expand the main body of your website by building out two critical content sections:",
    "explainBlocks": [
      {
        "type": "paragraph",
        "text": "In this lesson, your goal is to expand the main body of your website by building out two critical content sections:"
      },
      {
        "type": "list",
        "items": [
          "About",
          "Services"
        ]
      },
      {
        "type": "paragraph",
        "text": "These sections deepen your websites structure, provide important business or personal context, and create stronger opportunities for user engagement."
      },
      {
        "type": "paragraph",
        "text": "Your focus should remain on scalable structure and reusable CSS systems, rather than isolated styling."
      },
      {
        "type": "heading",
        "text": "Primary Objective"
      },
      {
        "type": "paragraph",
        "text": "You will:"
      },
      {
        "type": "heading",
        "text": "1. Build the About section"
      },
      {
        "type": "paragraph",
        "text": "Introduce who you are, what you do, or what your site represents."
      },
      {
        "type": "heading",
        "text": "2. Build the Services section"
      },
      {
        "type": "paragraph",
        "text": "Display offerings using reusable service cards."
      },
      {
        "type": "heading",
        "text": "3. Create one shared card design pattern"
      },
      {
        "type": "paragraph",
        "text": "Style once, reuse everywhere."
      },
      {
        "type": "paragraph",
        "text": "This approach improves:"
      },
      {
        "type": "list",
        "items": [
          "Maintainability",
          "Scalability",
          "Code cleanliness",
          "Responsive flexibility"
        ]
      },
      {
        "type": "heading",
        "text": "Part 1: About Section Markup"
      },
      {
        "type": "paragraph",
        "text": "Create:"
      },
      {
        "type": "paragraph",
        "text": "Code example:\n<section id=\"about\">"
      },
      {
        "type": "heading",
        "text": "Required Content:"
      },
      {
        "type": "heading",
        "text": "Include:"
      },
      {
        "type": "list",
        "items": [
          "Section heading (`<h2>`)",
          "Supporting paragraph(s)",
          "Optional subsections if helpful"
        ]
      },
      {
        "type": "heading",
        "text": "Purpose:"
      },
      {
        "type": "list",
        "items": [
          "Explain mission, expertise, or business identity",
          "Build trust",
          "Add context for visitors"
        ]
      },
      {
        "type": "heading",
        "text": "Optional Additions:"
      },
      {
        "type": "paragraph",
        "text": "You may also include:"
      },
      {
        "type": "list",
        "items": [
          "Image/media block",
          "Statistics",
          "Milestones",
          "Experience highlights",
          "Feature list"
        ]
      },
      {
        "type": "paragraph",
        "text": "Examples:"
      },
      {
        "type": "list",
        "items": [
          "5+ Years Experience",
          "100+ Projects Completed",
          "Trusted by 50+ Clients"
        ]
      },
      {
        "type": "heading",
        "text": "About Section Best Practices"
      },
      {
        "type": "list",
        "items": [
          "Keep content concise",
          "Prioritize clarity",
          "Maintain semantic structure",
          "Ensure readability without CSS"
        ]
      },
      {
        "type": "heading",
        "text": "Part 2: Services Section Markup"
      },
      {
        "type": "paragraph",
        "text": "Create:"
      },
      {
        "type": "paragraph",
        "text": "Code example:\n<section id=\"services\">"
      },
      {
        "type": "heading",
        "text": "Required Structure:"
      },
      {
        "type": "heading",
        "text": "Include:"
      },
      {
        "type": "list",
        "items": [
          "Section heading (`<h2>`)",
          "Introductory paragraph (optional but helpful)",
          "Card container wrapper",
          "Repeated service cards"
        ]
      },
      {
        "type": "heading",
        "text": "Service Card Structure"
      },
      {
        "type": "paragraph",
        "text": "Each service item should use:"
      },
      {
        "type": "paragraph",
        "text": "Code example:\n<article class=\"card\">"
      },
      {
        "type": "heading",
        "text": "Each card may contain:"
      },
      {
        "type": "list",
        "items": [
          "Service title",
          "Short description",
          "Optional icon",
          "Optional CTA"
        ]
      },
      {
        "type": "heading",
        "text": "Example Services:"
      },
      {
        "type": "list",
        "items": [
          "Web Design",
          "Development",
          "SEO",
          "Branding",
          "Consulting"
        ]
      },
      {
        "type": "heading",
        "text": "Important Rule: Reusable CSS"
      },
      {
        "type": "paragraph",
        "text": "Do NOT style each card individually."
      },
      {
        "type": "paragraph",
        "text": "Instead:"
      },
      {
        "type": "heading",
        "text": "Create one shared `.card` class"
      },
      {
        "type": "paragraph",
        "text": "This ensures:"
      },
      {
        "type": "list",
        "items": [
          "Consistent design",
          "Faster updates",
          "Cleaner CSS",
          "Better scalability"
        ]
      },
      {
        "type": "heading",
        "text": "CSS Development Steps"
      },
      {
        "type": "heading",
        "text": "1. Layout Container"
      },
      {
        "type": "paragraph",
        "text": "For your services container, use:"
      },
      {
        "type": "heading",
        "text": "Grid:"
      },
      {
        "type": "paragraph",
        "text": "Code example:\ndisplay: grid;"
      },
      {
        "type": "paragraph",
        "text": "or"
      },
      {
        "type": "heading",
        "text": "Flexbox:"
      },
      {
        "type": "paragraph",
        "text": "Code example:\ndisplay: flex;\nflex-wrap: wrap;"
      },
      {
        "type": "heading",
        "text": "Goal:"
      },
      {
        "type": "list",
        "items": [
          "Responsive layout",
          "Even spacing",
          "Multiple cards per row",
          "Mobile adaptability"
        ]
      },
      {
        "type": "heading",
        "text": "Recommended Grid Example:"
      },
      {
        "type": "paragraph",
        "text": "Code example:\ngrid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\ngap: 20px;"
      },
      {
        "type": "heading",
        "text": "2. Shared `.card` Pattern"
      },
      {
        "type": "paragraph",
        "text": "Define:"
      },
      {
        "type": "heading",
        "text": "Core properties:"
      },
      {
        "type": "list",
        "items": [
          "Padding",
          "Border",
          "Border-radius",
          "Background",
          "Shadow (optional)"
        ]
      },
      {
        "type": "paragraph",
        "text": "Example:"
      },
      {
        "type": "paragraph",
        "text": "Code example:\n.card {\n  padding: 20px;\n  border: 1px solid #ddd;\n  border-radius: 10px;\n  background: white;\n}"
      },
      {
        "type": "heading",
        "text": "Benefits:"
      },
      {
        "type": "list",
        "items": [
          "Unified visual style",
          "Easy updates",
          "Professional consistency"
        ]
      },
      {
        "type": "heading",
        "text": "3. Hover Feedback"
      },
      {
        "type": "paragraph",
        "text": "Once layout is stable, add subtle interaction:"
      },
      {
        "type": "paragraph",
        "text": "Examples:"
      },
      {
        "type": "list",
        "items": [
          "Slight lift",
          "Shadow increase",
          "Border highlight",
          "Scale effect"
        ]
      },
      {
        "type": "paragraph",
        "text": "Example:"
      },
      {
        "type": "paragraph",
        "text": "Code example:\n.card:hover {\n  transform: translateY(-5px);\n}"
      },
      {
        "type": "heading",
        "text": "Important:"
      },
      {
        "type": "paragraph",
        "text": "Hover effects should be subtlenot distracting."
      },
      {
        "type": "paragraph",
        "text": "Purpose:"
      },
      {
        "type": "list",
        "items": [
          "Improve engagement",
          "Add polish",
          "Signal interactivity"
        ]
      },
      {
        "type": "heading",
        "text": "What to Check Before Moving On"
      },
      {
        "type": "heading",
        "text": "About Section"
      },
      {
        "type": "list",
        "items": [
          "Correct ID",
          "Clear heading",
          "Meaningful supporting content",
          "Logical structure"
        ]
      },
      {
        "type": "heading",
        "text": "Services Section"
      },
      {
        "type": "list",
        "items": [
          "Correct ID",
          "Card container exists",
          "Each service uses `.card`",
          "Layout is responsive"
        ]
      },
      {
        "type": "heading",
        "text": "CSS System"
      },
      {
        "type": "list",
        "items": [
          "One shared card class",
          "No repeated card styling",
          "Responsive container works",
          "Hover state functions properly"
        ]
      },
      {
        "type": "heading",
        "text": "Why This Step Matters"
      },
      {
        "type": "paragraph",
        "text": "These sections significantly improve:"
      },
      {
        "type": "list",
        "items": [
          "User understanding",
          "Trust",
          "Content depth",
          "Conversion opportunities"
        ]
      },
      {
        "type": "paragraph",
        "text": "Building them correctly now creates a framework for:"
      },
      {
        "type": "list",
        "items": [
          "Team pages",
          "Portfolio sections",
          "Testimonials",
          "Pricing cards",
          "Blog previews"
        ]
      },
      {
        "type": "paragraph",
        "text": "Reusable systems reduce technical debt and make scaling much easier."
      },
      {
        "type": "heading",
        "text": "Final Goal"
      },
      {
        "type": "paragraph",
        "text": "By the end of this lesson, your website should include:"
      },
      {
        "type": "heading",
        "text": "About Section:"
      },
      {
        "type": "list",
        "items": [
          "Structured content",
          "Supporting text",
          "Optional supporting visuals/stats"
        ]
      },
      {
        "type": "heading",
        "text": "Services Section:"
      },
      {
        "type": "list",
        "items": [
          "Heading",
          "Card layout",
          "Multiple reusable service cards",
          "Shared `.card` CSS pattern",
          "Responsive layout",
          "Hover interactions"
        ]
      },
      {
        "type": "paragraph",
        "text": "Once complete, your website will evolve from a basic landing page into a more complete, professional multi-section experience."
      }
    ]
  },
  "6": {
    "explain": "In this lesson, you will build the Contact sectionthe final major interactive area of your website and one of the most important conversion points.",
    "explainBlocks": [
      {
        "type": "paragraph",
        "text": "In this lesson, you will build the Contact sectionthe final major interactive area of your website and one of the most important conversion points."
      },
      {
        "type": "paragraph",
        "text": "This section should make it easy for users to:"
      },
      {
        "type": "list",
        "items": [
          "Reach out",
          "Ask questions",
          "Request services",
          "Submit inquiries"
        ]
      },
      {
        "type": "paragraph",
        "text": "At this stage, your focus is on creating a clean, professional HTML structure with accessible form fields and clear visual organization."
      },
      {
        "type": "paragraph",
        "text": "Do not add JavaScript validation yet. Your priority is usability, readability, and strong foundational form design."
      },
      {
        "type": "heading",
        "text": "Primary Objective"
      },
      {
        "type": "paragraph",
        "text": "Build the Contact section in two main parts:"
      },
      {
        "type": "heading",
        "text": "1. Contact Information Block"
      },
      {
        "type": "paragraph",
        "text": "Display essential contact details or business information."
      },
      {
        "type": "heading",
        "text": "2. Contact Form Block"
      },
      {
        "type": "paragraph",
        "text": "Allow users to submit inquiries directly."
      },
      {
        "type": "paragraph",
        "text": "This two-column or stacked structure creates:"
      },
      {
        "type": "list",
        "items": [
          "Better usability",
          "Professional presentation",
          "Multiple contact options",
          "Stronger trust"
        ]
      },
      {
        "type": "heading",
        "text": "Part 1: Contact Section Markup"
      },
      {
        "type": "paragraph",
        "text": "Create:"
      },
      {
        "type": "paragraph",
        "text": "Code example:\n<section id=\"contact\">"
      },
      {
        "type": "heading",
        "text": "Required Content:"
      },
      {
        "type": "paragraph",
        "text": "Include:"
      },
      {
        "type": "list",
        "items": [
          "Section heading (`<h2>`)",
          "Introductory text",
          "Contact details block",
          "Form block"
        ]
      },
      {
        "type": "heading",
        "text": "Contact Info Block May Include:"
      },
      {
        "type": "list",
        "items": [
          "Email address",
          "Phone number",
          "Business address",
          "Social links",
          "Availability hours"
        ]
      },
      {
        "type": "paragraph",
        "text": "Purpose:"
      },
      {
        "type": "list",
        "items": [
          "Provides direct communication options",
          "Builds legitimacy",
          "Supports user preferences"
        ]
      },
      {
        "type": "heading",
        "text": "Part 2: Contact Form Markup"
      },
      {
        "type": "paragraph",
        "text": "Create:"
      },
      {
        "type": "paragraph",
        "text": "Code example:\n<form id=\"contactForm\">"
      },
      {
        "type": "heading",
        "text": "Required Fields"
      },
      {
        "type": "heading",
        "text": "Name Field"
      },
      {
        "type": "paragraph",
        "text": "Code example:\n<label for=\"name\">Name</label>\n<input type=\"text\" id=\"name\" name=\"name\">"
      },
      {
        "type": "heading",
        "text": "Email Field"
      },
      {
        "type": "paragraph",
        "text": "Code example:\n<label for=\"email\">Email</label>\n<input type=\"email\" id=\"email\" name=\"email\">"
      },
      {
        "type": "heading",
        "text": "Message Field"
      },
      {
        "type": "paragraph",
        "text": "Code example:\n<label for=\"message\">Message</label>\n<textarea id=\"message\" name=\"message\"></textarea>"
      },
      {
        "type": "heading",
        "text": "Submit Button"
      },
      {
        "type": "paragraph",
        "text": "Add a clear CTA:"
      },
      {
        "type": "list",
        "items": [
          "Send Message",
          "Submit",
          "Contact Us"
        ]
      },
      {
        "type": "heading",
        "text": "Feedback Paragraph"
      },
      {
        "type": "paragraph",
        "text": "Include a placeholder element for future validation or submission messages:"
      },
      {
        "type": "paragraph",
        "text": "Example:"
      },
      {
        "type": "paragraph",
        "text": "Code example:\n<p id=\"formFeedback\"></p>"
      },
      {
        "type": "heading",
        "text": "Purpose:"
      },
      {
        "type": "paragraph",
        "text": "This will later display:"
      },
      {
        "type": "list",
        "items": [
          "Success messages",
          "Error messages",
          "Validation notices"
        ]
      },
      {
        "type": "paragraph",
        "text": "For now:"
      },
      {
        "type": "list",
        "items": [
          "Keep it empty",
          "Position it near the submit button"
        ]
      },
      {
        "type": "heading",
        "text": "Accessibility Best Practices"
      },
      {
        "type": "paragraph",
        "text": "Ensure:"
      },
      {
        "type": "list",
        "items": [
          "Every field has a matching label",
          "`for` attributes match input IDs",
          "Inputs use correct field types",
          "Form structure is easy to navigate"
        ]
      },
      {
        "type": "paragraph",
        "text": "Benefits:"
      },
      {
        "type": "list",
        "items": [
          "Better screen reader support",
          "Improved accessibility",
          "Stronger usability",
          "Easier future validation"
        ]
      },
      {
        "type": "heading",
        "text": "CSS Styling Goals"
      },
      {
        "type": "paragraph",
        "text": "Once structure is complete, focus on professional, readable field styling."
      },
      {
        "type": "heading",
        "text": "1. Input Spacing"
      },
      {
        "type": "paragraph",
        "text": "Add consistent spacing between fields."
      },
      {
        "type": "paragraph",
        "text": "Recommended:"
      },
      {
        "type": "paragraph",
        "text": "Code example:\nmargin-bottom: 15px;"
      },
      {
        "type": "paragraph",
        "text": "Purpose:"
      },
      {
        "type": "list",
        "items": [
          "Improves readability",
          "Prevents clutter",
          "Creates clean visual rhythm"
        ]
      },
      {
        "type": "heading",
        "text": "2. Field Appearance"
      },
      {
        "type": "paragraph",
        "text": "Style:"
      },
      {
        "type": "list",
        "items": [
          "Inputs",
          "Textareas",
          "Buttons"
        ]
      },
      {
        "type": "paragraph",
        "text": "Recommended properties:"
      },
      {
        "type": "list",
        "items": [
          "Padding",
          "Border",
          "Border-radius",
          "Width"
        ]
      },
      {
        "type": "paragraph",
        "text": "Example:"
      },
      {
        "type": "paragraph",
        "text": "Code example:\npadding: 12px;\nborder: 1px solid #ccc;\nborder-radius: 8px;\nwidth: 100%;"
      },
      {
        "type": "heading",
        "text": "Goal:"
      },
      {
        "type": "list",
        "items": [
          "Professional appearance",
          "Easy interaction",
          "Modern UI consistency"
        ]
      },
      {
        "type": "heading",
        "text": "3. Focus States"
      },
      {
        "type": "paragraph",
        "text": "Active fields should be visually obvious."
      },
      {
        "type": "paragraph",
        "text": "Example:"
      },
      {
        "type": "paragraph",
        "text": "Code example:\ninput:focus,\ntextarea:focus {\n  outline: none;\n  border-color: #007bff;\n}"
      },
      {
        "type": "heading",
        "text": "Benefits:"
      },
      {
        "type": "list",
        "items": [
          "Better accessibility",
          "Improved usability",
          "Visual feedback",
          "Enhanced professionalism"
        ]
      },
      {
        "type": "heading",
        "text": "4. Feedback Placement"
      },
      {
        "type": "paragraph",
        "text": "Position feedback text directly near the submit button."
      },
      {
        "type": "paragraph",
        "text": "Purpose:"
      },
      {
        "type": "list",
        "items": [
          "Immediate user visibility",
          "Clear communication",
          "Better UX"
        ]
      },
      {
        "type": "heading",
        "text": "Suggested Layout Options"
      },
      {
        "type": "heading",
        "text": "Option A: Two-column layout"
      },
      {
        "type": "list",
        "items": [
          "Contact info left",
          "Form right"
        ]
      },
      {
        "type": "heading",
        "text": "Option B: Stacked layout"
      },
      {
        "type": "list",
        "items": [
          "Contact info top",
          "Form below"
        ]
      },
      {
        "type": "paragraph",
        "text": "Choose based on:"
      },
      {
        "type": "list",
        "items": [
          "Design simplicity",
          "Mobile responsiveness",
          "User clarity"
        ]
      },
      {
        "type": "heading",
        "text": "What to Check Before Moving On"
      },
      {
        "type": "heading",
        "text": "HTML Structure"
      },
      {
        "type": "list",
        "items": [
          "Correct section ID",
          "Form ID exists",
          "Labels match inputs",
          "Name/email/message fields included",
          "Submit button present",
          "Feedback paragraph included"
        ]
      },
      {
        "type": "heading",
        "text": "CSS Quality"
      },
      {
        "type": "list",
        "items": [
          "Consistent spacing",
          "Inputs readable",
          "Borders clean",
          "Focus states obvious",
          "Feedback placement logical"
        ]
      },
      {
        "type": "heading",
        "text": "Accessibility"
      },
      {
        "type": "list",
        "items": [
          "Semantic labels",
          "Proper field types",
          "Keyboard-friendly form",
          "Readable structure without CSS"
        ]
      },
      {
        "type": "heading",
        "text": "Why This Step Matters"
      },
      {
        "type": "paragraph",
        "text": "Your contact form is often the highest-value conversion point on the website."
      },
      {
        "type": "paragraph",
        "text": "A well-built contact section:"
      },
      {
        "type": "list",
        "items": [
          "Encourages inquiries",
          "Builds trust",
          "Supports lead generation",
          "Improves professionalism",
          "Simplifies future JavaScript integration"
        ]
      },
      {
        "type": "paragraph",
        "text": "By structuring this section properly now, later additions like:"
      },
      {
        "type": "list",
        "items": [
          "Validation",
          "AJAX submission",
          "Error handling",
          "Spam prevention",
          "CRM integrations"
        ]
      },
      {
        "type": "paragraph",
        "text": "become much easier."
      },
      {
        "type": "heading",
        "text": "Final Goal"
      },
      {
        "type": "paragraph",
        "text": "By the end of this lesson, your site should include:"
      },
      {
        "type": "heading",
        "text": "Contact Section:"
      },
      {
        "type": "list",
        "items": [
          "Contact info block",
          "Form block",
          "Name field",
          "Email field",
          "Message field",
          "Submit button",
          "Feedback placeholder"
        ]
      },
      {
        "type": "heading",
        "text": "CSS:"
      },
      {
        "type": "list",
        "items": [
          "Consistent spacing",
          "Professional form fields",
          "Rounded corners",
          "Clear focus states",
          "User-friendly layout"
        ]
      },
      {
        "type": "paragraph",
        "text": "Once complete, your website will have a polished, functional contact experience ready for future enhancements."
      }
    ]
  },
  "7": {
    "explain": "In this lesson, your focus shifts from building new sections to improving the quality, maintainability, and scalability of your CSS architecture.",
    "explainBlocks": [
      {
        "type": "paragraph",
        "text": "In this lesson, your focus shifts from building new sections to improving the quality, maintainability, and scalability of your CSS architecture."
      },
      {
        "type": "paragraph",
        "text": "Now that your major page sections are in place, this is the ideal time to refactor your stylesheet so future updates become:"
      },
      {
        "type": "list",
        "items": [
          "Faster",
          "Safer",
          "More consistent",
          "Easier to scale"
        ]
      },
      {
        "type": "paragraph",
        "text": "Rather than continuing with scattered styling, you will now organize your CSS into a structured system built around reusable design tokens and shared patterns."
      },
      {
        "type": "heading",
        "text": "Primary Objective"
      },
      {
        "type": "paragraph",
        "text": "You will refactor your CSS in three strategic phases:"
      },
      {
        "type": "heading",
        "text": "1. Centralize design tokens"
      },
      {
        "type": "heading",
        "text": "2. Normalize global base styles"
      },
      {
        "type": "heading",
        "text": "3. Unify repeated components"
      },
      {
        "type": "paragraph",
        "text": "This transforms your stylesheet from basic styling into a maintainable design system."
      },
      {
        "type": "heading",
        "text": "Refactor Order"
      },
      {
        "type": "paragraph",
        "text": "Follow this sequence carefully for maximum efficiency."
      },
      {
        "type": "heading",
        "text": "Phase 1: Add `:root` Variables (Design Tokens)"
      },
      {
        "type": "paragraph",
        "text": "Create a global `:root` block at the top of your CSS file."
      },
      {
        "type": "paragraph",
        "text": "Example categories:"
      },
      {
        "type": "heading",
        "text": "Colors"
      },
      {
        "type": "list",
        "items": [
          "Primary",
          "Secondary",
          "Background",
          "Text",
          "Borders",
          "Accent"
        ]
      },
      {
        "type": "heading",
        "text": "Spacing"
      },
      {
        "type": "list",
        "items": [
          "Small",
          "Medium",
          "Large",
          "Section padding",
          "Container padding"
        ]
      },
      {
        "type": "heading",
        "text": "Radius"
      },
      {
        "type": "list",
        "items": [
          "Buttons",
          "Cards",
          "Inputs"
        ]
      },
      {
        "type": "heading",
        "text": "Shadows"
      },
      {
        "type": "list",
        "items": [
          "Light",
          "Medium",
          "Hover states"
        ]
      },
      {
        "type": "heading",
        "text": "Example:"
      },
      {
        "type": "paragraph",
        "text": "Code example:\n:root {\n  --primary-color: #007bff;\n  --secondary-color: #333;\n  --background-color: #fff;\n  --text-color: #222;\n\n  --spacing-sm: 8px;\n  --spacing-md: 16px;\n  --spacing-lg: 40px;\n\n  --radius-sm: 5px;\n  --radius-md: 10px;\n\n  --shadow-sm: 0 2px 6px rgba(0,0,0,0.1);\n}"
      },
      {
        "type": "heading",
        "text": "Benefits:"
      },
      {
        "type": "list",
        "items": [
          "Faster global updates",
          "Better consistency",
          "Easier redesigns",
          "Reduced repetition",
          "Cleaner code"
        ]
      },
      {
        "type": "heading",
        "text": "Phase 2: Global Reset + Box-Sizing"
      },
      {
        "type": "paragraph",
        "text": "Normalize browser inconsistencies first."
      },
      {
        "type": "heading",
        "text": "Recommended Reset:"
      },
      {
        "type": "paragraph",
        "text": "Code example:\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}"
      },
      {
        "type": "heading",
        "text": "Purpose:"
      },
      {
        "type": "list",
        "items": [
          "Predictable sizing",
          "Cleaner spacing",
          "Easier layout control",
          "Cross-browser consistency"
        ]
      },
      {
        "type": "heading",
        "text": "Additional base rules:"
      },
      {
        "type": "paragraph",
        "text": "Set defaults for:"
      },
      {
        "type": "list",
        "items": [
          "`body`",
          "`img`",
          "`ul`",
          "`a`",
          "`button`"
        ]
      },
      {
        "type": "heading",
        "text": "Phase 3: Typography Scale"
      },
      {
        "type": "paragraph",
        "text": "Establish a consistent hierarchy for text."
      },
      {
        "type": "heading",
        "text": "Define:"
      },
      {
        "type": "list",
        "items": [
          "Body text",
          "h1",
          "h2",
          "h3",
          "Paragraph spacing",
          "Line-height"
        ]
      },
      {
        "type": "paragraph",
        "text": "Example:"
      },
      {
        "type": "paragraph",
        "text": "Code example:\nbody {\n  font-size: 16px;\n  line-height: 1.6;\n}\n\nh1 {\n  font-size: 3rem;\n}\n\nh2 {\n  font-size: 2rem;\n}"
      },
      {
        "type": "heading",
        "text": "Goal:"
      },
      {
        "type": "list",
        "items": [
          "Visual consistency",
          "Better readability",
          "Strong hierarchy",
          "Easier responsive scaling"
        ]
      },
      {
        "type": "heading",
        "text": "Shared Layout Rules"
      },
      {
        "type": "paragraph",
        "text": "Instead of styling each section separately, create shared rules."
      },
      {
        "type": "heading",
        "text": "Example:"
      },
      {
        "type": "paragraph",
        "text": "Code example:\nsection {\n  padding: var(--spacing-lg) 0;\n}\n\n.container {\n  width: 90%;\n  max-width: 1200px;\n  margin: 0 auto;\n}"
      },
      {
        "type": "heading",
        "text": "Benefits:"
      },
      {
        "type": "list",
        "items": [
          "Uniform spacing",
          "Easier maintenance",
          "Cleaner layouts",
          "Responsive consistency"
        ]
      },
      {
        "type": "heading",
        "text": "Code Cleanup Steps"
      },
      {
        "type": "heading",
        "text": "1. Replace Hardcoded Values"
      },
      {
        "type": "paragraph",
        "text": "Search for repeated values like:"
      },
      {
        "type": "list",
        "items": [
          "`#007bff`",
          "`20px`",
          "`10px`",
          "`box-shadow`"
        ]
      },
      {
        "type": "paragraph",
        "text": "Replace with:"
      },
      {
        "type": "paragraph",
        "text": "Code example:\nvar(--primary-color)"
      },
      {
        "type": "heading",
        "text": "Result:"
      },
      {
        "type": "list",
        "items": [
          "More flexible code",
          "Faster edits",
          "Better standardization"
        ]
      },
      {
        "type": "heading",
        "text": "2. Merge Duplicate Rules"
      },
      {
        "type": "paragraph",
        "text": "If multiple elements share styles:"
      },
      {
        "type": "heading",
        "text": "Instead of:"
      },
      {
        "type": "paragraph",
        "text": "Separate card, button, and form duplicates"
      },
      {
        "type": "heading",
        "text": "Use:"
      },
      {
        "type": "list",
        "items": [
          "`.card`",
          "`.btn`",
          "`.container`",
          "`.section-title`"
        ]
      },
      {
        "type": "heading",
        "text": "Goal:"
      },
      {
        "type": "paragraph",
        "text": "Create reusable components."
      },
      {
        "type": "heading",
        "text": "3. Organize CSS Structure"
      },
      {
        "type": "paragraph",
        "text": "Group stylesheet sections logically."
      },
      {
        "type": "heading",
        "text": "Recommended order:"
      },
      {
        "type": "heading",
        "text": "Tokens"
      },
      {
        "type": "list",
        "items": [
          "`:root`"
        ]
      },
      {
        "type": "heading",
        "text": "Base"
      },
      {
        "type": "list",
        "items": [
          "Reset",
          "Typography",
          "Layout"
        ]
      },
      {
        "type": "heading",
        "text": "Components"
      },
      {
        "type": "list",
        "items": [
          "Header",
          "Hero",
          "Cards",
          "Forms",
          "Buttons"
        ]
      },
      {
        "type": "heading",
        "text": "States"
      },
      {
        "type": "list",
        "items": [
          "Hover",
          "Focus",
          "Active"
        ]
      },
      {
        "type": "heading",
        "text": "Example:"
      },
      {
        "type": "paragraph",
        "text": "Code example:\n/* Variables */\n/* Reset */\n/* Typography */\n/* Layout */\n/* Components */\n/* States */"
      },
      {
        "type": "heading",
        "text": "Benefits:"
      },
      {
        "type": "list",
        "items": [
          "Easier navigation",
          "Faster debugging",
          "Team-friendly",
          "Professional codebase"
        ]
      },
      {
        "type": "heading",
        "text": "What to Check Before Moving On"
      },
      {
        "type": "heading",
        "text": "Design Tokens"
      },
      {
        "type": "list",
        "items": [
          "Colors centralized",
          "Spacing standardized",
          "Radius consistent",
          "Shadows reusable"
        ]
      },
      {
        "type": "heading",
        "text": "Global Rules"
      },
      {
        "type": "list",
        "items": [
          "Reset works properly",
          "Box-sizing set",
          "Typography scale consistent"
        ]
      },
      {
        "type": "heading",
        "text": "Reusable Systems"
      },
      {
        "type": "list",
        "items": [
          "Shared section spacing",
          "Shared containers",
          "Shared card styles",
          "Shared buttons"
        ]
      },
      {
        "type": "heading",
        "text": "Code Quality"
      },
      {
        "type": "list",
        "items": [
          "Reduced duplication",
          "Organized file structure",
          "Readable grouping",
          "Easier future scaling"
        ]
      },
      {
        "type": "heading",
        "text": "Why This Step Matters"
      },
      {
        "type": "paragraph",
        "text": "As projects grow, unmanaged CSS becomes difficult to maintain."
      },
      {
        "type": "paragraph",
        "text": "Refactoring now helps prevent:"
      },
      {
        "type": "list",
        "items": [
          "Style inconsistencies",
          "Repeated edits",
          "Design drift",
          "Technical debt",
          "Slower development"
        ]
      },
      {
        "type": "paragraph",
        "text": "A structured CSS system supports:"
      },
      {
        "type": "list",
        "items": [
          "Faster redesigns",
          "Theme changes",
          "Dark mode",
          "Responsive optimization",
          "Team collaboration"
        ]
      },
      {
        "type": "heading",
        "text": "Final Goal"
      },
      {
        "type": "paragraph",
        "text": "By the end of this lesson, your CSS should have:"
      },
      {
        "type": "heading",
        "text": "Foundation:"
      },
      {
        "type": "list",
        "items": [
          "`:root` variables",
          "Global reset",
          "Typography system",
          "Layout utilities"
        ]
      },
      {
        "type": "heading",
        "text": "Cleanup:"
      },
      {
        "type": "list",
        "items": [
          "Replaced hardcoded values",
          "Shared component classes",
          "Reduced duplication",
          "Organized file structure"
        ]
      },
      {
        "type": "heading",
        "text": "Outcome:"
      },
      {
        "type": "paragraph",
        "text": "A cleaner, safer, faster, and more professional stylesheet ready for advanced enhancements."
      },
      {
        "type": "paragraph",
        "text": "Once complete, your project will transition from a simple webpage into a scalable front-end system."
      }
    ]
  },
  "8": {
    "explain": "In this lesson, your priority is responsive implementationadapting your existing website so it functions smoothly across desktop, tablet, and mobile devices.",
    "explainBlocks": [
      {
        "type": "paragraph",
        "text": "In this lesson, your priority is responsive implementationadapting your existing website so it functions smoothly across desktop, tablet, and mobile devices."
      },
      {
        "type": "paragraph",
        "text": "This is an implementation-first stage, meaning your focus is on directly writing and testing media queries inside your CSS file to ensure your layout remains usable, readable, and visually balanced at every screen size."
      },
      {
        "type": "paragraph",
        "text": "Your responsive strategy should follow a clear progression:"
      },
      {
        "type": "heading",
        "text": "1. Navigation behavior"
      },
      {
        "type": "heading",
        "text": "2. Content layout"
      },
      {
        "type": "heading",
        "text": "3. Spacing and typography adjustments"
      },
      {
        "type": "paragraph",
        "text": "By approaching breakpoints in this order, you protect usability first, then improve presentation."
      },
      {
        "type": "heading",
        "text": "Primary Objective"
      },
      {
        "type": "paragraph",
        "text": "Open your CSS file and begin building responsive breakpoint rules that:"
      },
      {
        "type": "list",
        "items": [
          "Improve mobile navigation",
          "Adapt layouts for smaller screens",
          "Prevent overcrowding",
          "Preserve usability",
          "Maintain professional presentation"
        ]
      },
      {
        "type": "heading",
        "text": "Breakpoint Workflow"
      },
      {
        "type": "heading",
        "text": "Phase 1: Mobile Navigation Behavior"
      },
      {
        "type": "paragraph",
        "text": "Navigation is one of the most critical responsive systems."
      },
      {
        "type": "paragraph",
        "text": "At smaller widths:"
      },
      {
        "type": "heading",
        "text": "Desktop nav links should:"
      },
      {
        "type": "list",
        "items": [
          "Be hidden",
          "Collapse into mobile format"
        ]
      },
      {
        "type": "heading",
        "text": "Mobile toggle should:"
      },
      {
        "type": "list",
        "items": [
          "Become visible",
          "Be positioned clearly",
          "Prepare for JavaScript menu functionality"
        ]
      },
      {
        "type": "heading",
        "text": "Example:"
      },
      {
        "type": "paragraph",
        "text": "Code example:\n@media (max-width: 768px) {\n  .nav-links {\n    display: none;\n  }\n\n  #menu-toggle {\n    display: block;\n  }\n}"
      },
      {
        "type": "heading",
        "text": "Goal:"
      },
      {
        "type": "list",
        "items": [
          "Cleaner mobile header",
          "Better tap usability",
          "Responsive scalability",
          "Reduced clutter"
        ]
      },
      {
        "type": "heading",
        "text": "Phase 2: Content Layout Adjustments"
      },
      {
        "type": "paragraph",
        "text": "Multi-column layouts often break on smaller screens."
      },
      {
        "type": "paragraph",
        "text": "Examples:"
      },
      {
        "type": "list",
        "items": [
          "Services cards",
          "About columns",
          "Contact layouts",
          "Footer sections"
        ]
      },
      {
        "type": "heading",
        "text": "Solution:"
      },
      {
        "type": "paragraph",
        "text": "Convert:"
      },
      {
        "type": "list",
        "items": [
          "Grid columns  single column",
          "Flex rows  stacked layout"
        ]
      },
      {
        "type": "heading",
        "text": "Example:"
      },
      {
        "type": "paragraph",
        "text": "Code example:\n@media (max-width: 768px) {\n  .services-container {\n    grid-template-columns: 1fr;\n  }\n}"
      },
      {
        "type": "heading",
        "text": "Benefits:"
      },
      {
        "type": "list",
        "items": [
          "Better readability",
          "Improved scrolling",
          "Reduced overflow",
          "Mobile-friendly presentation"
        ]
      },
      {
        "type": "heading",
        "text": "Phase 3: Spacing Improvements"
      },
      {
        "type": "paragraph",
        "text": "On smaller screens:"
      },
      {
        "type": "list",
        "items": [
          "Content often feels compressed",
          "Margins may become too tight",
          "Sections can feel crowded"
        ]
      },
      {
        "type": "heading",
        "text": "Adjust:"
      },
      {
        "type": "list",
        "items": [
          "Padding",
          "Section spacing",
          "Card spacing",
          "Form spacing"
        ]
      },
      {
        "type": "heading",
        "text": "Example:"
      },
      {
        "type": "paragraph",
        "text": "Code example:\nsection {\n  padding: 60px 20px;\n}"
      },
      {
        "type": "heading",
        "text": "Goal:"
      },
      {
        "type": "list",
        "items": [
          "Better breathing room",
          "Improved readability",
          "Cleaner mobile design"
        ]
      },
      {
        "type": "heading",
        "text": "Phase 4: Typography Scaling"
      },
      {
        "type": "paragraph",
        "text": "Large desktop headings may overwhelm mobile screens."
      },
      {
        "type": "heading",
        "text": "Adjust:"
      },
      {
        "type": "list",
        "items": [
          "h1",
          "h2",
          "Paragraphs",
          "Buttons"
        ]
      },
      {
        "type": "heading",
        "text": "Example:"
      },
      {
        "type": "paragraph",
        "text": "Code example:\nh1 {\n  font-size: 2rem;\n}"
      },
      {
        "type": "heading",
        "text": "Purpose:"
      },
      {
        "type": "list",
        "items": [
          "Maintain hierarchy",
          "Prevent text overflow",
          "Improve readability",
          "Optimize visual balance"
        ]
      },
      {
        "type": "heading",
        "text": "Phase 5: Touch-Friendly Interactions"
      },
      {
        "type": "paragraph",
        "text": "Buttons and links must remain easy to tap."
      },
      {
        "type": "heading",
        "text": "Ensure:"
      },
      {
        "type": "list",
        "items": [
          "Adequate padding",
          "Larger touch targets",
          "Clear spacing between clickable elements"
        ]
      },
      {
        "type": "heading",
        "text": "Recommended:"
      },
      {
        "type": "list",
        "items": [
          "Minimum 44px height",
          "Larger buttons",
          "Comfortable link spacing"
        ]
      },
      {
        "type": "heading",
        "text": "Important:"
      },
      {
        "type": "paragraph",
        "text": "Poor tap targets reduce usability significantly on mobile devices."
      },
      {
        "type": "heading",
        "text": "Suggested Breakpoints"
      },
      {
        "type": "heading",
        "text": "Tablet:"
      },
      {
        "type": "paragraph",
        "text": "Code example:\n@media (max-width: 992px)"
      },
      {
        "type": "heading",
        "text": "Mobile:"
      },
      {
        "type": "paragraph",
        "text": "Code example:\n@media (max-width: 768px)"
      },
      {
        "type": "heading",
        "text": "Small Mobile:"
      },
      {
        "type": "paragraph",
        "text": "Code example:\n@media (max-width: 480px)"
      },
      {
        "type": "heading",
        "text": "Verification Steps"
      },
      {
        "type": "paragraph",
        "text": "Testing is essential after each responsive adjustment."
      },
      {
        "type": "heading",
        "text": "Use DevTools to verify:"
      },
      {
        "type": "heading",
        "text": "Desktop"
      },
      {
        "type": "list",
        "items": [
          "Full navigation visible",
          "Multi-column layouts functional",
          "Proper spacing"
        ]
      },
      {
        "type": "heading",
        "text": "Tablet"
      },
      {
        "type": "list",
        "items": [
          "Layout adjusts appropriately",
          "Cards resize properly",
          "Navigation remains usable"
        ]
      },
      {
        "type": "heading",
        "text": "Mobile"
      },
      {
        "type": "list",
        "items": [
          "Toggle appears",
          "Navigation is simplified",
          "Content stacks vertically",
          "Buttons remain tappable"
        ]
      },
      {
        "type": "heading",
        "text": "Critical Checks"
      },
      {
        "type": "heading",
        "text": "1. Horizontal Scroll"
      },
      {
        "type": "paragraph",
        "text": "Ensure:"
      },
      {
        "type": "list",
        "items": [
          "No overflow",
          "No clipped sections",
          "No broken containers"
        ]
      },
      {
        "type": "heading",
        "text": "2. Clipped Content"
      },
      {
        "type": "paragraph",
        "text": "Check:"
      },
      {
        "type": "list",
        "items": [
          "Headings",
          "Forms",
          "Cards",
          "Buttons",
          "Footer"
        ]
      },
      {
        "type": "heading",
        "text": "3. Functional Usability"
      },
      {
        "type": "paragraph",
        "text": "Confirm:"
      },
      {
        "type": "list",
        "items": [
          "Forms are accessible",
          "Cards are readable",
          "Navigation works",
          "Contact form remains usable"
        ]
      },
      {
        "type": "heading",
        "text": "Responsive Priorities Summary"
      },
      {
        "type": "heading",
        "text": "First:"
      },
      {
        "type": "paragraph",
        "text": "Navigation"
      },
      {
        "type": "heading",
        "text": "Second:"
      },
      {
        "type": "paragraph",
        "text": "Content structure"
      },
      {
        "type": "heading",
        "text": "Third:"
      },
      {
        "type": "paragraph",
        "text": "Spacing and typography"
      },
      {
        "type": "heading",
        "text": "Fourth:"
      },
      {
        "type": "paragraph",
        "text": "Interaction quality"
      },
      {
        "type": "heading",
        "text": "Why This Step Matters"
      },
      {
        "type": "paragraph",
        "text": "Responsive design is essential for:"
      },
      {
        "type": "list",
        "items": [
          "User experience",
          "SEO",
          "Accessibility",
          "Professional quality",
          "Conversion rates"
        ]
      },
      {
        "type": "paragraph",
        "text": "Without proper responsiveness:"
      },
      {
        "type": "list",
        "items": [
          "Users may leave",
          "Navigation breaks",
          "Forms become unusable",
          "Layout appears unprofessional"
        ]
      },
      {
        "type": "paragraph",
        "text": "Implementing responsive systems now ensures your website is practical and polished across all devices."
      },
      {
        "type": "heading",
        "text": "Final Goal"
      },
      {
        "type": "paragraph",
        "text": "By the end of this lesson, your website should include:"
      },
      {
        "type": "heading",
        "text": "Responsive Navigation:"
      },
      {
        "type": "list",
        "items": [
          "Desktop links hidden on mobile",
          "Mobile toggle enabled"
        ]
      },
      {
        "type": "heading",
        "text": "Adaptive Layout:"
      },
      {
        "type": "list",
        "items": [
          "Grids stacked",
          "Flex layouts adjusted",
          "Forms optimized"
        ]
      },
      {
        "type": "heading",
        "text": "Responsive Design:"
      },
      {
        "type": "list",
        "items": [
          "Improved spacing",
          "Scaled typography",
          "Touch-friendly buttons",
          "No horizontal overflow"
        ]
      },
      {
        "type": "heading",
        "text": "Validation:"
      },
      {
        "type": "list",
        "items": [
          "Desktop tested",
          "Tablet tested",
          "Mobile tested"
        ]
      },
      {
        "type": "paragraph",
        "text": "Once complete, your website will evolve from a static layout into a fully responsive modern web experience."
      }
    ]
  },
  "9": {
    "explain": "In this lesson, you will begin adding core interactivity to your website by implementing navigation functionality inside `script.js`.",
    "explainBlocks": [
      {
        "type": "paragraph",
        "text": "In this lesson, you will begin adding core interactivity to your website by implementing navigation functionality inside `script.js`."
      },
      {
        "type": "paragraph",
        "text": "Your goal is to enhance your prepared HTML navigation system with JavaScript in a structured, implementation-first sequence."
      },
      {
        "type": "paragraph",
        "text": "Rather than building everything at once, you will develop one behavior at a time:"
      },
      {
        "type": "heading",
        "text": "1. Mobile menu toggle"
      },
      {
        "type": "heading",
        "text": "2. Accessibility state updates"
      },
      {
        "type": "heading",
        "text": "3. Smooth scrolling navigation helper"
      },
      {
        "type": "paragraph",
        "text": "This approach improves:"
      },
      {
        "type": "list",
        "items": [
          "Debugging",
          "Maintainability",
          "Accessibility",
          "User experience"
        ]
      },
      {
        "type": "heading",
        "text": "Primary Objective"
      },
      {
        "type": "paragraph",
        "text": "Open your `script.js` file and connect JavaScript functionality to the navigation elements you already created in HTML."
      },
      {
        "type": "heading",
        "text": "Coding Sequence"
      },
      {
        "type": "paragraph",
        "text": "Follow this order carefully."
      },
      {
        "type": "heading",
        "text": "Phase 1: Select Navigation Elements"
      },
      {
        "type": "paragraph",
        "text": "Use DOM selectors to store references to:"
      },
      {
        "type": "list",
        "items": [
          "Menu toggle button",
          "Navigation links container",
          "Individual navigation links (if needed)"
        ]
      },
      {
        "type": "heading",
        "text": "Recommended methods:"
      },
      {
        "type": "heading",
        "text": "`getElementById()`"
      },
      {
        "type": "paragraph",
        "text": "For unique IDs"
      },
      {
        "type": "heading",
        "text": "`querySelector()`"
      },
      {
        "type": "paragraph",
        "text": "For class or element targeting"
      },
      {
        "type": "heading",
        "text": "Example:"
      },
      {
        "type": "paragraph",
        "text": "Code example:\nconst menuToggle = document.getElementById(\"menu-toggle\");\nconst navLinks = document.querySelector(\".nav-links\");"
      },
      {
        "type": "heading",
        "text": "Goal:"
      },
      {
        "type": "list",
        "items": [
          "Keep code organized",
          "Prevent repeated DOM queries",
          "Make future updates easier"
        ]
      },
      {
        "type": "heading",
        "text": "Phase 2: Toggle Mobile Menu State"
      },
      {
        "type": "paragraph",
        "text": "When users tap the toggle button:"
      },
      {
        "type": "heading",
        "text": "Required behavior:"
      },
      {
        "type": "list",
        "items": [
          "Open menu",
          "Close menu",
          "Toggle repeatedly without errors"
        ]
      },
      {
        "type": "heading",
        "text": "Recommended:"
      },
      {
        "type": "paragraph",
        "text": "Use `classList.toggle()`"
      },
      {
        "type": "paragraph",
        "text": "Example:"
      },
      {
        "type": "paragraph",
        "text": "Code example:\nmenuToggle.addEventListener(\"click\", () => {\n  navLinks.classList.toggle(\"open\");\n});"
      },
      {
        "type": "heading",
        "text": "Purpose:"
      },
      {
        "type": "list",
        "items": [
          "Controls mobile nav visibility",
          "Simplifies responsive behavior",
          "Creates scalable state management"
        ]
      },
      {
        "type": "heading",
        "text": "Phase 3: Accessibility Enhancements"
      },
      {
        "type": "paragraph",
        "text": "Accessibility should be implemented immediatelynot later."
      },
      {
        "type": "heading",
        "text": "Update:"
      },
      {
        "type": "heading",
        "text": "`aria-expanded`"
      },
      {
        "type": "paragraph",
        "text": "When menu is closed:"
      },
      {
        "type": "paragraph",
        "text": "Code example:\naria-expanded=\"false\""
      },
      {
        "type": "paragraph",
        "text": "When menu opens:"
      },
      {
        "type": "paragraph",
        "text": "Code example:\naria-expanded=\"true\""
      },
      {
        "type": "heading",
        "text": "JavaScript Example:"
      },
      {
        "type": "paragraph",
        "text": "Code example:\nconst expanded = menuToggle.getAttribute(\"aria-expanded\") === \"true\";\nmenuToggle.setAttribute(\"aria-expanded\", !expanded);"
      },
      {
        "type": "heading",
        "text": "Benefits:"
      },
      {
        "type": "list",
        "items": [
          "Better screen reader support",
          "Improved accessibility compliance",
          "More professional UI behavior"
        ]
      },
      {
        "type": "heading",
        "text": "Phase 4: Smooth Scroll Helper"
      },
      {
        "type": "paragraph",
        "text": "Create reusable function:"
      },
      {
        "type": "paragraph",
        "text": "Code example:\nfunction scrollToSection(id) {"
      },
      {
        "type": "heading",
        "text": "Purpose:"
      },
      {
        "type": "paragraph",
        "text": "Allows navigation links or CTA buttons to scroll smoothly to target sections."
      },
      {
        "type": "heading",
        "text": "Example:"
      },
      {
        "type": "paragraph",
        "text": "Code example:\nfunction scrollToSection(id) {\n  document.getElementById(id).scrollIntoView({\n    behavior: \"smooth\"\n  });\n}"
      },
      {
        "type": "heading",
        "text": "Advantages:"
      },
      {
        "type": "list",
        "items": [
          "Cleaner navigation",
          "Better user experience",
          "Reusable for multiple buttons/links",
          "Future-proofed functionality"
        ]
      },
      {
        "type": "heading",
        "text": "Phase 5: Link Integration"
      },
      {
        "type": "paragraph",
        "text": "Navigation links should:"
      },
      {
        "type": "list",
        "items": [
          "Scroll smoothly",
          "Close mobile menu after selection",
          "Reset toggle state"
        ]
      },
      {
        "type": "heading",
        "text": "Expected flow:"
      },
      {
        "type": "heading",
        "text": "User taps link:"
      },
      {
        "type": "list",
        "items": [
          "Page scrolls",
          "Menu closes",
          "`aria-expanded` resets"
        ]
      },
      {
        "type": "heading",
        "text": "Example logic:"
      },
      {
        "type": "paragraph",
        "text": "Code example:\nnavLinks.classList.remove(\"open\");\nmenuToggle.setAttribute(\"aria-expanded\", \"false\");"
      },
      {
        "type": "heading",
        "text": "Debug Checklist"
      },
      {
        "type": "paragraph",
        "text": "After each implementation phase, test immediately."
      },
      {
        "type": "heading",
        "text": "1. Toggle Functionality"
      },
      {
        "type": "paragraph",
        "text": "Confirm:"
      },
      {
        "type": "list",
        "items": [
          "Opens properly",
          "Closes properly",
          "Reopens reliably",
          "No visual glitches"
        ]
      },
      {
        "type": "heading",
        "text": "2. Accessibility"
      },
      {
        "type": "paragraph",
        "text": "Check:"
      },
      {
        "type": "list",
        "items": [
          "`aria-expanded` updates correctly",
          "Toggle state remains synchronized"
        ]
      },
      {
        "type": "heading",
        "text": "3. Smooth Scroll"
      },
      {
        "type": "paragraph",
        "text": "Verify:"
      },
      {
        "type": "list",
        "items": [
          "Correct sections are targeted",
          "Scroll animation works",
          "IDs match properly"
        ]
      },
      {
        "type": "heading",
        "text": "4. Mobile Link Behavior"
      },
      {
        "type": "paragraph",
        "text": "Ensure:"
      },
      {
        "type": "list",
        "items": [
          "Menu closes after click",
          "State resets",
          "Navigation remains functional"
        ]
      },
      {
        "type": "heading",
        "text": "5. Console Validation"
      },
      {
        "type": "paragraph",
        "text": "Open browser DevTools and confirm:"
      },
      {
        "type": "list",
        "items": [
          "No JavaScript errors",
          "No undefined selectors",
          "No event binding issues"
        ]
      },
      {
        "type": "heading",
        "text": "Best Practices"
      },
      {
        "type": "heading",
        "text": "Write incrementally:"
      },
      {
        "type": "paragraph",
        "text": "Implement Test Fix Continue"
      },
      {
        "type": "heading",
        "text": "Avoid:"
      },
      {
        "type": "list",
        "items": [
          "Large untested scripts",
          "Duplicate event listeners",
          "Hardcoded behaviors",
          "Ignoring accessibility"
        ]
      },
      {
        "type": "heading",
        "text": "Why This Step Matters"
      },
      {
        "type": "paragraph",
        "text": "This is your first major functional JavaScript layer."
      },
      {
        "type": "paragraph",
        "text": "Proper implementation here creates the foundation for:"
      },
      {
        "type": "list",
        "items": [
          "Responsive navigation",
          "Sticky behaviors",
          "Scrollspy",
          "Section highlighting",
          "Animated transitions",
          "Advanced accessibility"
        ]
      },
      {
        "type": "paragraph",
        "text": "A clean script architecture now makes all future interactive features significantly easier."
      },
      {
        "type": "heading",
        "text": "Final Goal"
      },
      {
        "type": "paragraph",
        "text": "By the end of this lesson, your website should have:"
      },
      {
        "type": "heading",
        "text": "Functional Mobile Navigation:"
      },
      {
        "type": "list",
        "items": [
          "Toggle button works",
          "Open/close state is stable",
          "Responsive menu behaves properly"
        ]
      },
      {
        "type": "heading",
        "text": "Accessibility:"
      },
      {
        "type": "list",
        "items": [
          "`aria-expanded` updates correctly",
          "User interactions are screen-reader friendly"
        ]
      },
      {
        "type": "heading",
        "text": "Smooth Navigation:"
      },
      {
        "type": "list",
        "items": [
          "Reusable `scrollToSection(id)` helper",
          "Internal navigation scrolls smoothly",
          "Menu closes after link selection"
        ]
      },
      {
        "type": "heading",
        "text": "Stability:"
      },
      {
        "type": "list",
        "items": [
          "No console errors",
          "Reliable interactions",
          "Clean, maintainable JavaScript structure"
        ]
      },
      {
        "type": "paragraph",
        "text": "Once complete, your project will move from static responsive design into an interactive modern web application foundation."
      }
    ]
  },
  "10": {
    "explain": "In this lesson, you will connect JavaScript logic to your contact form and implement client-side validation before any real submission occurs.",
    "explainBlocks": [
      {
        "type": "paragraph",
        "text": "In this lesson, you will connect JavaScript logic to your contact form and implement client-side validation before any real submission occurs."
      },
      {
        "type": "paragraph",
        "text": "Your priority is to create a reliable, user-friendly validation flow that ensures users receive immediate feedback when fields are incomplete or incorrectly formatted."
      },
      {
        "type": "paragraph",
        "text": "This stage focuses on:"
      },
      {
        "type": "heading",
        "text": "1. Preventing premature form submission"
      },
      {
        "type": "heading",
        "text": "2. Validating one rule at a time"
      },
      {
        "type": "heading",
        "text": "3. Providing clear feedback"
      },
      {
        "type": "heading",
        "text": "4. Resetting only after successful validation"
      },
      {
        "type": "paragraph",
        "text": "By following this structure, your form becomes more professional, easier to debug, and significantly more user-friendly."
      },
      {
        "type": "heading",
        "text": "Primary Objective"
      },
      {
        "type": "paragraph",
        "text": "Open `script.js` and attach behavior to your existing:"
      },
      {
        "type": "paragraph",
        "text": "Code example:\n<form id=\"contactForm\">"
      },
      {
        "type": "heading",
        "text": "Implementation Workflow"
      },
      {
        "type": "paragraph",
        "text": "Follow this sequence carefully."
      },
      {
        "type": "heading",
        "text": "Phase 1: Attach Submit Listener"
      },
      {
        "type": "paragraph",
        "text": "Select your form and feedback element first."
      },
      {
        "type": "heading",
        "text": "Required elements:"
      },
      {
        "type": "list",
        "items": [
          "Form",
          "Name input",
          "Email input",
          "Message textarea",
          "Feedback paragraph"
        ]
      },
      {
        "type": "heading",
        "text": "Example:"
      },
      {
        "type": "paragraph",
        "text": "Code example:\nconst contactForm = document.getElementById(\"contactForm\");\nconst feedback = document.getElementById(\"formFeedback\");"
      },
      {
        "type": "heading",
        "text": "Add submit event:"
      },
      {
        "type": "paragraph",
        "text": "Code example:\ncontactForm.addEventListener(\"submit\", function(event) {"
      },
      {
        "type": "heading",
        "text": "Phase 2: Prevent Default Submission"
      },
      {
        "type": "paragraph",
        "text": "At the top of your submit handler:"
      },
      {
        "type": "paragraph",
        "text": "Code example:\nevent.preventDefault();"
      },
      {
        "type": "heading",
        "text": "Purpose:"
      },
      {
        "type": "list",
        "items": [
          "Stops automatic page refresh",
          "Allows validation first",
          "Gives JavaScript full control"
        ]
      },
      {
        "type": "heading",
        "text": "Important:"
      },
      {
        "type": "paragraph",
        "text": "This should always happen before validation logic begins."
      },
      {
        "type": "heading",
        "text": "Phase 3: Read + Trim Input Values"
      },
      {
        "type": "paragraph",
        "text": "Retrieve and sanitize user input."
      },
      {
        "type": "heading",
        "text": "Example:"
      },
      {
        "type": "paragraph",
        "text": "Code example:\nconst name = document.getElementById(\"name\").value.trim();\nconst email = document.getElementById(\"email\").value.trim();\nconst message = document.getElementById(\"message\").value.trim();"
      },
      {
        "type": "heading",
        "text": "Why `.trim()` matters:"
      },
      {
        "type": "list",
        "items": [
          "Removes accidental spaces",
          "Prevents fake submissions",
          "Improves validation reliability"
        ]
      },
      {
        "type": "heading",
        "text": "Phase 4: Validate One Rule at a Time"
      },
      {
        "type": "paragraph",
        "text": "Use early returns to stop processing immediately when a rule fails."
      },
      {
        "type": "heading",
        "text": "Validation Order"
      },
      {
        "type": "heading",
        "text": "Rule 1: Name Length"
      },
      {
        "type": "paragraph",
        "text": "Check for:"
      },
      {
        "type": "list",
        "items": [
          "Empty input",
          "Too-short names"
        ]
      },
      {
        "type": "heading",
        "text": "Example:"
      },
      {
        "type": "paragraph",
        "text": "Code example:\nif (name.length < 2) {"
      },
      {
        "type": "heading",
        "text": "Goal:"
      },
      {
        "type": "paragraph",
        "text": "Ensure realistic user input."
      },
      {
        "type": "heading",
        "text": "Rule 2: Email Pattern"
      },
      {
        "type": "paragraph",
        "text": "Use regex or pattern validation."
      },
      {
        "type": "heading",
        "text": "Example:"
      },
      {
        "type": "paragraph",
        "text": "Code example:\nconst emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;"
      },
      {
        "type": "heading",
        "text": "Check:"
      },
      {
        "type": "list",
        "items": [
          "Proper format",
          "Missing @",
          "Missing domain"
        ]
      },
      {
        "type": "heading",
        "text": "Rule 3: Message Length"
      },
      {
        "type": "paragraph",
        "text": "Prevent:"
      },
      {
        "type": "list",
        "items": [
          "Empty messages",
          "Extremely short submissions"
        ]
      },
      {
        "type": "heading",
        "text": "Example:"
      },
      {
        "type": "paragraph",
        "text": "Code example:\nif (message.length < 10) {"
      },
      {
        "type": "heading",
        "text": "Purpose:"
      },
      {
        "type": "paragraph",
        "text": "Encourages meaningful inquiries."
      },
      {
        "type": "heading",
        "text": "Phase 5: Feedback Messaging"
      },
      {
        "type": "paragraph",
        "text": "Write feedback directly into your form message element."
      },
      {
        "type": "heading",
        "text": "Error Example:"
      },
      {
        "type": "paragraph",
        "text": "Code example:\nfeedback.textContent = \"Please enter a valid email address.\";"
      },
      {
        "type": "heading",
        "text": "Success Example:"
      },
      {
        "type": "paragraph",
        "text": "Code example:\nfeedback.textContent = \"Message sent successfully!\";"
      },
      {
        "type": "heading",
        "text": "Key Rule:"
      },
      {
        "type": "paragraph",
        "text": "Error messages should be:"
      },
      {
        "type": "heading",
        "text": "Specific:"
      },
      {
        "type": "paragraph",
        "text": "Bad:"
      },
      {
        "type": "list",
        "items": [
          "Invalid input"
        ]
      },
      {
        "type": "heading",
        "text": "Better:"
      },
      {
        "type": "list",
        "items": [
          "Name must be at least 2 characters.",
          "Please enter a valid email address.",
          "Message must be at least 10 characters."
        ]
      },
      {
        "type": "heading",
        "text": "Phase 6: Reset Form Only After Success"
      },
      {
        "type": "paragraph",
        "text": "Once all validation passes:"
      },
      {
        "type": "paragraph",
        "text": "Code example:\ncontactForm.reset();"
      },
      {
        "type": "heading",
        "text": "Important:"
      },
      {
        "type": "paragraph",
        "text": "Never reset the form if validation fails."
      },
      {
        "type": "heading",
        "text": "Styling Requirements"
      },
      {
        "type": "paragraph",
        "text": "Your feedback system should visually distinguish:"
      },
      {
        "type": "heading",
        "text": "Error state:"
      },
      {
        "type": "list",
        "items": [
          "Red text",
          "Warning style"
        ]
      },
      {
        "type": "heading",
        "text": "Success state:"
      },
      {
        "type": "list",
        "items": [
          "Green text",
          "Confirmation style"
        ]
      },
      {
        "type": "heading",
        "text": "Example:"
      },
      {
        "type": "paragraph",
        "text": "Code example:\n.error {\n  color: red;\n}\n\n.success {\n  color: green;\n}"
      },
      {
        "type": "heading",
        "text": "JavaScript:"
      },
      {
        "type": "paragraph",
        "text": "Toggle classes dynamically."
      },
      {
        "type": "heading",
        "text": "Benefits:"
      },
      {
        "type": "list",
        "items": [
          "Clear communication",
          "Better UX",
          "Faster user correction",
          "Professional polish"
        ]
      },
      {
        "type": "heading",
        "text": "Code Quality Best Practices"
      },
      {
        "type": "heading",
        "text": "Use Early Returns"
      },
      {
        "type": "paragraph",
        "text": "Example:"
      },
      {
        "type": "paragraph",
        "text": "Code example:\nif (...) {\n  return;\n}"
      },
      {
        "type": "heading",
        "text": "Advantages:"
      },
      {
        "type": "list",
        "items": [
          "Cleaner logic",
          "Easier debugging",
          "Reduced nesting",
          "Better maintainability"
        ]
      },
      {
        "type": "heading",
        "text": "Keep Validation Sequential"
      },
      {
        "type": "paragraph",
        "text": "Validate:"
      },
      {
        "type": "paragraph",
        "text": "1. Name 2. Email 3. Message"
      },
      {
        "type": "paragraph",
        "text": "This creates:"
      },
      {
        "type": "list",
        "items": [
          "Predictable flow",
          "Easier troubleshooting",
          "Better user guidance"
        ]
      },
      {
        "type": "heading",
        "text": "Testing Checklist"
      },
      {
        "type": "paragraph",
        "text": "Before moving forward:"
      },
      {
        "type": "heading",
        "text": "Invalid Cases:"
      },
      {
        "type": "paragraph",
        "text": "Test:"
      },
      {
        "type": "list",
        "items": [
          "Empty fields",
          "Short names",
          "Bad emails",
          "Short messages"
        ]
      },
      {
        "type": "heading",
        "text": "Valid Cases:"
      },
      {
        "type": "paragraph",
        "text": "Confirm:"
      },
      {
        "type": "list",
        "items": [
          "Success message appears",
          "Form resets properly",
          "Styles update correctly"
        ]
      },
      {
        "type": "heading",
        "text": "Browser Console:"
      },
      {
        "type": "paragraph",
        "text": "Check:"
      },
      {
        "type": "list",
        "items": [
          "No JS errors",
          "No null references",
          "No regex issues"
        ]
      },
      {
        "type": "heading",
        "text": "Why This Step Matters"
      },
      {
        "type": "paragraph",
        "text": "Contact forms are one of the highest-risk usability areas."
      },
      {
        "type": "paragraph",
        "text": "Poor validation causes:"
      },
      {
        "type": "list",
        "items": [
          "Frustration",
          "Lost leads",
          "Broken submissions",
          "Reduced trust"
        ]
      },
      {
        "type": "paragraph",
        "text": "Strong validation improves:"
      },
      {
        "type": "list",
        "items": [
          "User experience",
          "Lead quality",
          "Professionalism",
          "Future backend integration"
        ]
      },
      {
        "type": "paragraph",
        "text": "This system also prepares you for:"
      },
      {
        "type": "list",
        "items": [
          "API submissions",
          "AJAX forms",
          "Spam prevention",
          "Server validation",
          "CRM workflows"
        ]
      },
      {
        "type": "heading",
        "text": "Final Goal"
      },
      {
        "type": "paragraph",
        "text": "By the end of this lesson, your contact form should have:"
      },
      {
        "type": "heading",
        "text": "Functional JavaScript Validation:"
      },
      {
        "type": "list",
        "items": [
          "Submit listener",
          "Default prevention",
          "Trimmed values",
          "Name validation",
          "Email validation",
          "Message validation"
        ]
      },
      {
        "type": "heading",
        "text": "Feedback System:"
      },
      {
        "type": "list",
        "items": [
          "Specific messages",
          "Error/success states",
          "Dynamic styling"
        ]
      },
      {
        "type": "heading",
        "text": "Submission Logic:"
      },
      {
        "type": "list",
        "items": [
          "Early returns on failure",
          "Reset only on success"
        ]
      },
      {
        "type": "heading",
        "text": "Testing:"
      },
      {
        "type": "list",
        "items": [
          "Invalid cases verified",
          "Valid cases verified",
          "Console clean"
        ]
      },
      {
        "type": "paragraph",
        "text": "Once complete, your website will include a polished, interactive contact form that behaves like a professional production-ready system."
      }
    ]
  },
  "11": {
    "explain": "In this lesson, you will implement a full light/dark theme system for your website by combining JavaScript state management with CSS theme overrides.",
    "explainBlocks": [
      {
        "type": "paragraph",
        "text": "In this lesson, you will implement a full light/dark theme system for your website by combining JavaScript state management with CSS theme overrides."
      },
      {
        "type": "paragraph",
        "text": "Your objective is to create a polished, user-friendly theme toggle that:"
      },
      {
        "type": "heading",
        "text": "Core Features:"
      },
      {
        "type": "list",
        "items": [
          "Switches between light and dark mode",
          "Updates the UI instantly",
          "Persists user preference with `localStorage`",
          "Restores preference on future visits",
          "Maintains accessibility and readability"
        ]
      },
      {
        "type": "paragraph",
        "text": "This feature adds professionalism, personalization, and modern usability to your project."
      },
      {
        "type": "heading",
        "text": "Primary Objective"
      },
      {
        "type": "paragraph",
        "text": "Build a theme toggle system in three stages:"
      },
      {
        "type": "heading",
        "text": "1. Toggle functionality"
      },
      {
        "type": "heading",
        "text": "2. CSS dark mode overrides"
      },
      {
        "type": "heading",
        "text": "3. Persistent storage + restoration"
      },
      {
        "type": "heading",
        "text": "Implementation Workflow"
      },
      {
        "type": "heading",
        "text": "Phase 1: Add Theme Toggle Button"
      },
      {
        "type": "paragraph",
        "text": "Inside your navigation or header area, create a dedicated toggle control."
      },
      {
        "type": "heading",
        "text": "Example:"
      },
      {
        "type": "paragraph",
        "text": "Code example:\n<button id=\"themeToggle\" aria-label=\"Toggle dark mode\"></button>"
      },
      {
        "type": "heading",
        "text": "Purpose:"
      },
      {
        "type": "list",
        "items": [
          "User-accessible control",
          "Immediate theme switching",
          "Future icon swapping support"
        ]
      },
      {
        "type": "heading",
        "text": "Best Practices:"
      },
      {
        "type": "list",
        "items": [
          "Use clear button placement",
          "Ensure keyboard accessibility",
          "Add `aria-label`"
        ]
      },
      {
        "type": "heading",
        "text": "Phase 2: Select Button in JavaScript"
      },
      {
        "type": "paragraph",
        "text": "Inside `script.js`:"
      },
      {
        "type": "paragraph",
        "text": "Code example:\nconst themeToggle = document.getElementById(\"themeToggle\");"
      },
      {
        "type": "heading",
        "text": "Phase 3: Create Theme Toggle Function"
      },
      {
        "type": "paragraph",
        "text": "When clicked:"
      },
      {
        "type": "list",
        "items": [
          "Add/remove dark class on `<body>`",
          "Save state"
        ]
      },
      {
        "type": "heading",
        "text": "Example:"
      },
      {
        "type": "paragraph",
        "text": "Code example:\nthemeToggle.addEventListener(\"click\", () => {\n  document.body.classList.toggle(\"dark\");\n});"
      },
      {
        "type": "heading",
        "text": "Recommended class:"
      },
      {
        "type": "paragraph",
        "text": "Code example:\nbody.dark"
      },
      {
        "type": "heading",
        "text": "Why this approach works:"
      },
      {
        "type": "list",
        "items": [
          "Centralized theme state",
          "Easy CSS targeting",
          "Scalable for future themes",
          "Minimal JS complexity"
        ]
      },
      {
        "type": "heading",
        "text": "Phase 4: CSS Dark Mode Overrides"
      },
      {
        "type": "paragraph",
        "text": "Create dark-mode-specific overrides using:"
      },
      {
        "type": "paragraph",
        "text": "Code example:\nbody.dark"
      },
      {
        "type": "heading",
        "text": "Required areas to override:"
      },
      {
        "type": "heading",
        "text": "Backgrounds"
      },
      {
        "type": "paragraph",
        "text": "Examples:"
      },
      {
        "type": "list",
        "items": [
          "Body",
          "Header",
          "Sections",
          "Footer"
        ]
      },
      {
        "type": "heading",
        "text": "Text"
      },
      {
        "type": "paragraph",
        "text": "Ensure:"
      },
      {
        "type": "list",
        "items": [
          "Headings",
          "Paragraphs",
          "Links",
          "Labels"
        ]
      },
      {
        "type": "paragraph",
        "text": "remain readable."
      },
      {
        "type": "heading",
        "text": "Cards"
      },
      {
        "type": "paragraph",
        "text": "Override:"
      },
      {
        "type": "list",
        "items": [
          "Background",
          "Borders",
          "Shadows"
        ]
      },
      {
        "type": "heading",
        "text": "Form Controls"
      },
      {
        "type": "paragraph",
        "text": "Adjust:"
      },
      {
        "type": "list",
        "items": [
          "Inputs",
          "Textareas",
          "Buttons",
          "Focus states"
        ]
      },
      {
        "type": "heading",
        "text": "Navigation"
      },
      {
        "type": "paragraph",
        "text": "Update:"
      },
      {
        "type": "list",
        "items": [
          "Header background",
          "Link colors",
          "Mobile menu"
        ]
      },
      {
        "type": "heading",
        "text": "Example:"
      },
      {
        "type": "paragraph",
        "text": "Code example:\nbody.dark {\n  background: #121212;\n  color: #f5f5f5;\n}"
      },
      {
        "type": "heading",
        "text": "Key Goal:"
      },
      {
        "type": "paragraph",
        "text": "Maintain strong visual contrast and accessibility."
      },
      {
        "type": "heading",
        "text": "Phase 5: Persist Theme with localStorage"
      },
      {
        "type": "paragraph",
        "text": "When theme changes:"
      },
      {
        "type": "heading",
        "text": "Store preference:"
      },
      {
        "type": "paragraph",
        "text": "Code example:\nlocalStorage.setItem(\"theme\", \"dark\");"
      },
      {
        "type": "paragraph",
        "text": "or:"
      },
      {
        "type": "paragraph",
        "text": "Code example:\nlocalStorage.setItem(\"theme\", \"light\");"
      },
      {
        "type": "heading",
        "text": "Purpose:"
      },
      {
        "type": "list",
        "items": [
          "Remembers user choice",
          "Improves UX",
          "Prevents repeated resets"
        ]
      },
      {
        "type": "heading",
        "text": "Phase 6: Restore Theme on Page Load"
      },
      {
        "type": "paragraph",
        "text": "On initial load:"
      },
      {
        "type": "heading",
        "text": "Check saved preference:"
      },
      {
        "type": "paragraph",
        "text": "Code example:\nconst savedTheme = localStorage.getItem(\"theme\");"
      },
      {
        "type": "heading",
        "text": "If dark:"
      },
      {
        "type": "paragraph",
        "text": "Apply:"
      },
      {
        "type": "paragraph",
        "text": "Code example:\ndocument.body.classList.add(\"dark\");"
      },
      {
        "type": "heading",
        "text": "Goal:"
      },
      {
        "type": "paragraph",
        "text": "User returns to preferred mode automatically."
      },
      {
        "type": "heading",
        "text": "Phase 7: Add Smooth Visual Transitions"
      },
      {
        "type": "paragraph",
        "text": "To prevent abrupt switching:"
      },
      {
        "type": "heading",
        "text": "Recommended:"
      },
      {
        "type": "paragraph",
        "text": "Code example:\ntransition: background-color 0.3s ease, color 0.3s ease;"
      },
      {
        "type": "heading",
        "text": "Apply to:"
      },
      {
        "type": "list",
        "items": [
          "Body",
          "Cards",
          "Header",
          "Inputs",
          "Buttons"
        ]
      },
      {
        "type": "heading",
        "text": "Benefits:"
      },
      {
        "type": "list",
        "items": [
          "Professional feel",
          "Reduced visual harshness",
          "Better UX polish"
        ]
      },
      {
        "type": "heading",
        "text": "Accessibility Priorities"
      },
      {
        "type": "heading",
        "text": "Verify:"
      },
      {
        "type": "list",
        "items": [
          "Text remains readable",
          "Buttons visible",
          "Forms clear",
          "Contrast sufficient",
          "Links distinguishable"
        ]
      },
      {
        "type": "heading",
        "text": "Important:"
      },
      {
        "type": "paragraph",
        "text": "Dark mode should not reduce usability."
      },
      {
        "type": "heading",
        "text": "Testing Checklist"
      },
      {
        "type": "heading",
        "text": "Toggle Functionality"
      },
      {
        "type": "paragraph",
        "text": "Confirm:"
      },
      {
        "type": "list",
        "items": [
          "Light  Dark",
          "Dark  Light",
          "No glitches",
          "Repeated toggles work"
        ]
      },
      {
        "type": "heading",
        "text": "Persistence"
      },
      {
        "type": "paragraph",
        "text": "Test:"
      },
      {
        "type": "list",
        "items": [
          "Change theme",
          "Refresh page",
          "Preference remains"
        ]
      },
      {
        "type": "heading",
        "text": "Visual QA"
      },
      {
        "type": "paragraph",
        "text": "Check:"
      },
      {
        "type": "list",
        "items": [
          "Cards",
          "Forms",
          "Navigation",
          "Hero",
          "Footer"
        ]
      },
      {
        "type": "heading",
        "text": "Console"
      },
      {
        "type": "paragraph",
        "text": "Ensure:"
      },
      {
        "type": "list",
        "items": [
          "No JS errors",
          "localStorage works",
          "DOM selectors valid"
        ]
      },
      {
        "type": "heading",
        "text": "Code Structure Best Practices"
      },
      {
        "type": "heading",
        "text": "Keep logic modular:"
      },
      {
        "type": "heading",
        "text": "Suggested:"
      },
      {
        "type": "list",
        "items": [
          "`setTheme(theme)`",
          "`toggleTheme()`",
          "`loadThemePreference()`"
        ]
      },
      {
        "type": "heading",
        "text": "Benefits:"
      },
      {
        "type": "list",
        "items": [
          "Easier debugging",
          "Cleaner maintenance",
          "Expandable architecture"
        ]
      },
      {
        "type": "heading",
        "text": "Why This Step Matters"
      },
      {
        "type": "paragraph",
        "text": "Theme systems are now a standard feature in modern websites."
      },
      {
        "type": "paragraph",
        "text": "Adding this functionality improves:"
      },
      {
        "type": "list",
        "items": [
          "User personalization",
          "Accessibility",
          "Visual professionalism",
          "Device adaptability",
          "Long-term scalability"
        ]
      },
      {
        "type": "paragraph",
        "text": "It also prepares your project for:"
      },
      {
        "type": "list",
        "items": [
          "System theme detection",
          "Multiple color themes",
          "User settings panels",
          "Design systems"
        ]
      },
      {
        "type": "heading",
        "text": "Final Goal"
      },
      {
        "type": "paragraph",
        "text": "By the end of this lesson, your website should include:"
      },
      {
        "type": "heading",
        "text": "Functional Theme Toggle:"
      },
      {
        "type": "list",
        "items": [
          "Button connected",
          "Click handler works",
          "Body class switches properly"
        ]
      },
      {
        "type": "heading",
        "text": "Dark Mode Styling:"
      },
      {
        "type": "list",
        "items": [
          "Backgrounds adjusted",
          "Text readable",
          "Cards updated",
          "Forms styled",
          "Navigation themed"
        ]
      },
      {
        "type": "heading",
        "text": "Persistence:"
      },
      {
        "type": "list",
        "items": [
          "Theme saved in localStorage",
          "Theme restored on load"
        ]
      },
      {
        "type": "heading",
        "text": "Polish:"
      },
      {
        "type": "list",
        "items": [
          "Smooth transitions",
          "Accessibility maintained",
          "Refresh-tested functionality"
        ]
      },
      {
        "type": "paragraph",
        "text": "Once complete, your project will feature a modern, polished dark mode system comparable to professional production websites."
      }
    ]
  },
  "12": {
    "explain": "This final step is about making the project feel finished in a real-world sense: stable, predictable, and easy for another developer to understand without guessing. No new featuresjust verification, correction, and cleanup.",
    "explainBlocks": [
      {
        "type": "paragraph",
        "text": "This final step is about making the project feel finished in a real-world sense: stable, predictable, and easy for another developer to understand without guessing. No new featuresjust verification, correction, and cleanup."
      },
      {
        "type": "paragraph",
        "text": "Think of this as turning a working prototype into something youd actually ship or hand off."
      },
      {
        "type": "heading",
        "text": "Primary Objective"
      },
      {
        "type": "paragraph",
        "text": "You will run a structured QA (quality assurance) pass across:"
      },
      {
        "type": "list",
        "items": [
          "Layout and structure",
          "Interactions (JS features)",
          "Responsiveness",
          "Console stability",
          "Code cleanliness"
        ]
      },
      {
        "type": "paragraph",
        "text": "The goal is consistency and reliability, not new functionality."
      },
      {
        "type": "heading",
        "text": "QA Sequence (Repeatable Checklist)"
      },
      {
        "type": "paragraph",
        "text": "Go through each area in order. Dont skip ahead."
      },
      {
        "type": "heading",
        "text": "1. Layout + Structure Verification"
      },
      {
        "type": "paragraph",
        "text": "Compare your current HTML layout against your intended structure:"
      },
      {
        "type": "paragraph",
        "text": "Check:"
      },
      {
        "type": "list",
        "items": [
          "Header exists and contains:"
        ]
      },
      {
        "type": "list",
        "items": [
          "Brand",
          "Navigation links",
          "Mobile toggle button"
        ]
      },
      {
        "type": "list",
        "items": [
          "Sections appear in correct order:"
        ]
      },
      {
        "type": "list",
        "items": [
          "Home (hero)",
          "About",
          "Services",
          "Contact",
          "Footer"
        ]
      },
      {
        "type": "list",
        "items": [
          "Each section has:"
        ]
      },
      {
        "type": "list",
        "items": [
          "Correct `id`",
          "Correct heading hierarchy (`h1  h2  h3`)",
          "Logical content grouping"
        ]
      },
      {
        "type": "heading",
        "text": "What to fix:"
      },
      {
        "type": "list",
        "items": [
          "Misnamed IDs",
          "Missing sections",
          "Incorrect nesting",
          "Inconsistent headings"
        ]
      },
      {
        "type": "heading",
        "text": "2. Navigation Testing"
      },
      {
        "type": "paragraph",
        "text": "Test every navigation behavior manually:"
      },
      {
        "type": "heading",
        "text": "Verify:"
      },
      {
        "type": "list",
        "items": [
          "Menu toggle opens and closes reliably",
          "Navigation links scroll to correct sections",
          "Menu closes after clicking a link (mobile)",
          "No broken or incorrect anchors"
        ]
      },
      {
        "type": "heading",
        "text": "Common issues to fix:"
      },
      {
        "type": "list",
        "items": [
          "Wrong `href=\"#id\"`",
          "Missing event listeners",
          "Toggle state not resetting"
        ]
      },
      {
        "type": "heading",
        "text": "3. Smooth Scroll Testing"
      },
      {
        "type": "paragraph",
        "text": "Check `scrollIntoView` behavior:"
      },
      {
        "type": "heading",
        "text": "Confirm:"
      },
      {
        "type": "list",
        "items": [
          "Smooth scrolling works for all nav links",
          "Scroll lands at correct section start",
          "No abrupt jumps or offsets"
        ]
      },
      {
        "type": "heading",
        "text": "Fix if needed:"
      },
      {
        "type": "list",
        "items": [
          "Incorrect IDs",
          "Missing scroll helper calls"
        ]
      },
      {
        "type": "heading",
        "text": "4. Contact Form Testing"
      },
      {
        "type": "paragraph",
        "text": "Run through validation scenarios:"
      },
      {
        "type": "heading",
        "text": "Test invalid inputs:"
      },
      {
        "type": "list",
        "items": [
          "Empty fields",
          "Short name",
          "Invalid email format",
          "Too-short message"
        ]
      },
      {
        "type": "heading",
        "text": "Confirm:"
      },
      {
        "type": "list",
        "items": [
          "Error messages appear clearly",
          "Form does NOT submit",
          "Feedback is specific and helpful"
        ]
      },
      {
        "type": "heading",
        "text": "Test valid input:"
      },
      {
        "type": "list",
        "items": [
          "Success message appears",
          "Form resets correctly",
          "No lingering error state"
        ]
      },
      {
        "type": "heading",
        "text": "5. Theme Toggle Testing"
      },
      {
        "type": "paragraph",
        "text": "Cycle repeatedly:"
      },
      {
        "type": "heading",
        "text": "Verify:"
      },
      {
        "type": "list",
        "items": [
          "Light  dark works",
          "Dark  light works",
          "UI updates everywhere consistently",
          "No unreadable text or broken contrast"
        ]
      },
      {
        "type": "heading",
        "text": "Refresh test:"
      },
      {
        "type": "list",
        "items": [
          "Theme persists after reload",
          "`localStorage` value is correct"
        ]
      },
      {
        "type": "heading",
        "text": "6. Responsiveness Testing"
      },
      {
        "type": "paragraph",
        "text": "Use DevTools and real viewport checks."
      },
      {
        "type": "heading",
        "text": "Breakpoints to test:"
      },
      {
        "type": "list",
        "items": [
          "Desktop (large screens)",
          "Tablet (~768px)",
          "Mobile (~480px)"
        ]
      },
      {
        "type": "heading",
        "text": "Check:"
      },
      {
        "type": "heading",
        "text": "Navigation:"
      },
      {
        "type": "list",
        "items": [
          "Toggle visible on mobile",
          "Links hidden appropriately",
          "No overflow"
        ]
      },
      {
        "type": "heading",
        "text": "Layout:"
      },
      {
        "type": "list",
        "items": [
          "Cards stack properly",
          "Grids collapse cleanly",
          "No horizontal scrolling"
        ]
      },
      {
        "type": "heading",
        "text": "Forms:"
      },
      {
        "type": "list",
        "items": [
          "Inputs fit screen width",
          "Buttons remain tappable",
          "No clipped text"
        ]
      },
      {
        "type": "heading",
        "text": "General:"
      },
      {
        "type": "list",
        "items": [
          "No overlapping elements",
          "No broken alignment",
          "No cut-off sections"
        ]
      },
      {
        "type": "heading",
        "text": "7. Console Error Audit"
      },
      {
        "type": "paragraph",
        "text": "Open DevTools Console and inspect:"
      },
      {
        "type": "heading",
        "text": "Fix immediately:"
      },
      {
        "type": "list",
        "items": [
          "`null is not a function`",
          "`cannot read property of null`",
          "missing element selectors",
          "undefined variables"
        ]
      },
      {
        "type": "heading",
        "text": "Goal:"
      },
      {
        "type": "list",
        "items": [
          "Clean console with no red errors"
        ]
      },
      {
        "type": "heading",
        "text": "Cleanup Phase"
      },
      {
        "type": "paragraph",
        "text": "Once functionality is verified, clean your codebase."
      },
      {
        "type": "heading",
        "text": "1. Remove Duplicate Code"
      },
      {
        "type": "paragraph",
        "text": "Check:"
      },
      {
        "type": "heading",
        "text": "CSS:"
      },
      {
        "type": "list",
        "items": [
          "Repeated card styles",
          "Duplicate media queries",
          "Redundant overrides"
        ]
      },
      {
        "type": "heading",
        "text": "JS:"
      },
      {
        "type": "list",
        "items": [
          "Repeated event listeners",
          "Duplicate helper functions",
          "Unused variables"
        ]
      },
      {
        "type": "heading",
        "text": "2. Rename for Clarity"
      },
      {
        "type": "paragraph",
        "text": "Improve readability:"
      },
      {
        "type": "heading",
        "text": "Bad:"
      },
      {
        "type": "paragraph",
        "text": "Code example:\nconst x = document.getElementById(\"a1\");"
      },
      {
        "type": "heading",
        "text": "Better:"
      },
      {
        "type": "paragraph",
        "text": "Code example:\nconst menuToggle = document.getElementById(\"menu-toggle\");"
      },
      {
        "type": "heading",
        "text": "Goal:"
      },
      {
        "type": "paragraph",
        "text": "Another developer should understand your code instantly."
      },
      {
        "type": "heading",
        "text": "3. Organize CSS Structure"
      },
      {
        "type": "paragraph",
        "text": "Ensure clean grouping:"
      },
      {
        "type": "heading",
        "text": "Recommended order:"
      },
      {
        "type": "list",
        "items": [
          "Variables (`:root`)",
          "Reset / base styles",
          "Typography",
          "Layout",
          "Components",
          "Utilities",
          "States (hover, focus, dark mode)",
          "Media queries"
        ]
      },
      {
        "type": "heading",
        "text": "4. Clean Comments"
      },
      {
        "type": "paragraph",
        "text": "Keep comments:"
      },
      {
        "type": "list",
        "items": [
          "Short",
          "Useful",
          "Non-redundant"
        ]
      },
      {
        "type": "paragraph",
        "text": "Remove:"
      },
      {
        "type": "list",
        "items": [
          "Obvious explanations",
          "Old debugging notes",
          "Temporary comments"
        ]
      },
      {
        "type": "heading",
        "text": "5. Final Structure Check"
      },
      {
        "type": "paragraph",
        "text": "Make sure:"
      },
      {
        "type": "list",
        "items": [
          "HTML is semantic and minimal",
          "CSS is modular and grouped",
          "JS is event-driven and readable",
          "No unused code remains"
        ]
      },
      {
        "type": "heading",
        "text": "Final QA Checklist"
      },
      {
        "type": "paragraph",
        "text": "Before finishing, confirm:"
      },
      {
        "type": "heading",
        "text": "Functionality"
      },
      {
        "type": "list",
        "items": [
          "Navigation works",
          "Form validates correctly",
          "Theme toggle persists",
          "Smooth scroll works"
        ]
      },
      {
        "type": "heading",
        "text": "Responsiveness"
      },
      {
        "type": "list",
        "items": [
          "No horizontal scroll",
          "Layout adapts cleanly",
          "Mobile UX is usable"
        ]
      },
      {
        "type": "heading",
        "text": "Code Quality"
      },
      {
        "type": "list",
        "items": [
          "No duplicate logic",
          "Clear naming conventions",
          "Organized file structure"
        ]
      },
      {
        "type": "heading",
        "text": "Stability"
      },
      {
        "type": "list",
        "items": [
          "No console errors",
          "No broken selectors",
          "No undefined behavior"
        ]
      },
      {
        "type": "heading",
        "text": "Why This Step Matters"
      },
      {
        "type": "paragraph",
        "text": "Most real-world projects fail not because of missing features, but because of:"
      },
      {
        "type": "list",
        "items": [
          "Inconsistent behavior",
          "Unchecked edge cases",
          "Poor code organization",
          "Hidden bugs"
        ]
      },
      {
        "type": "paragraph",
        "text": "This step ensures your project is:"
      },
      {
        "type": "list",
        "items": [
          "Reliable",
          "Maintainable",
          "Professional-grade",
          "Ready for deployment or extension"
        ]
      },
      {
        "type": "heading",
        "text": "Final Outcome"
      },
      {
        "type": "paragraph",
        "text": "After completing this QA pass, your project should feel:"
      },
      {
        "type": "list",
        "items": [
          "Stable across all interactions",
          "Clean in structure and code",
          "Responsive on all screen sizes",
          "Free of console errors",
          "Easy to understand and extend"
        ]
      },
      {
        "type": "paragraph",
        "text": "At this point, youre no longer just building featuresyouve completed a full front-end workflow from structure styling interactivity production-ready cleanup."
      }
    ]
  }
};

Object.entries(lessonTextReplacements).forEach(([lessonNo, replacement]) => {
  const idx = Number(lessonNo) - 1;
  if (!Number.isInteger(idx) || idx < 0 || idx >= lessonGuidance.length) {
    return;
  }
  lessonGuidance[idx] = {
    ...lessonGuidance[idx],
    explain: replacement.explain,
    explainBlocks: replacement.explainBlocks
  };
});
// END LESSON TEXT REPLACEMENTS

const lessonElementBreakdown = [
  [
    {
      name: "<!DOCTYPE html>",
      type: "HTML",
      does: "Forces standards mode in modern browsers.",
      usage: "Always place on line 1 before any other markup."
    },
    {
      name: "<html>, <head>, <body>",
      type: "HTML",
      does: "Creates the core document structure for your page.",
      usage: "Use these as your guaranteed starter layout before adding sections."
    },
    {
      name: "<meta charset> + <meta viewport>",
      type: "HTML",
      does: "Defines text encoding and responsive viewport behavior.",
      usage: "Keep both in `<head>` so mobile scaling and text rendering work correctly."
    },
    {
      name: "<link rel=\"stylesheet\"> + <script src>",
      type: "HTML",
      does: "Connects external CSS and JavaScript files to your HTML.",
      usage: "Link CSS in `<head>` and include JS before `</body>` (or use `defer`)."
    }
  ],
  [
    {
      name: "<!DOCTYPE html>",
      type: "HTML",
      does: "Forces standards mode in browsers.",
      usage: "Always keep it on line 1 of every HTML page."
    },
    {
      name: "<nav>",
      type: "HTML",
      does: "Defines navigation landmark for menus and links.",
      usage: "Wrap primary page links inside nav for accessibility."
    },
    {
      name: "id",
      type: "HTML",
      does: "Creates unique target points in the document.",
      usage: "Match nav href values like #services to section IDs."
    },
    {
      name: "<meta viewport>",
      type: "HTML",
      does: "Controls mobile viewport scaling behavior.",
      usage: "Use it so your responsive CSS works correctly on phones."
    }
  ],
  [
    {
      name: "position: fixed/sticky",
      type: "CSS",
      does: "Keeps nav visible while page scrolls.",
      usage: "Use for persistent navigation, but test overlap with content."
    },
    {
      name: ".nav-links",
      type: "CSS",
      does: "Groups navigation links for shared layout rules.",
      usage: "Use flex + gap for clean horizontal alignment."
    },
    {
      name: "<a href=\"#...\">",
      type: "HTML",
      does: "Creates in-page jump links.",
      usage: "Use meaningful labels like Services, not vague text."
    },
    {
      name: "menu toggle button",
      type: "HTML/JS",
      does: "Controls mobile menu open/close state.",
      usage: "Attach click event to toggle classes in mobile breakpoint."
    }
  ],
  [
    {
      name: ".hero",
      type: "CSS",
      does: "Defines the first visual section of the site.",
      usage: "Set min-height and centered content for strong first impression."
    },
    {
      name: "linear-gradient(...)",
      type: "CSS",
      does: "Creates smooth color transitions in backgrounds.",
      usage: "Use for energetic style while preserving text contrast."
    },
    {
      name: "<button>",
      type: "HTML",
      does: "Triggers an action when clicked.",
      usage: "Use CTA buttons for one clear next step."
    },
    {
      name: "scrollIntoView()",
      type: "JavaScript",
      does: "Scrolls to a section programmatically.",
      usage: "Use with behavior:'smooth' for polished navigation."
    }
  ],
  [
    {
      name: "display: grid",
      type: "CSS",
      does: "Builds responsive rows/columns for layout.",
      usage: "Use for services card layout with auto-fit and minmax."
    },
    {
      name: ".card",
      type: "CSS",
      does: "Reusable UI block style for repeated content.",
      usage: "Style once, reuse many times for consistent visuals."
    },
    {
      name: "<article>",
      type: "HTML",
      does: "Represents standalone content chunks.",
      usage: "Use for each service card when it can stand alone conceptually."
    },
    {
      name: ":hover",
      type: "CSS",
      does: "Applies style on pointer hover state.",
      usage: "Use subtle movement/shadow for interactive feedback."
    }
  ],
  [
    {
      name: "<form>",
      type: "HTML",
      does: "Wraps inputs into a submit-ready group.",
      usage: "Use one form per user task and keep it focused."
    },
    {
      name: "<input> + <textarea>",
      type: "HTML",
      does: "Collects short and long user text input.",
      usage: "Use appropriate field types and required where necessary."
    },
    {
      name: "<label for=\"...\">",
      type: "HTML",
      does: "Associates text label with an input field.",
      usage: "Always include labels for accessibility and clarity."
    },
    {
      name: "required",
      type: "HTML",
      does: "Marks field as mandatory before submission.",
      usage: "Use for essential fields only to avoid user friction."
    }
  ],
  [
    {
      name: ":root variables",
      type: "CSS",
      does: "Defines reusable design tokens like colors and spacing.",
      usage: "Store palette and reuse via var(--token)."
    },
    {
      name: "box-sizing: border-box",
      type: "CSS",
      does: "Includes padding/border inside element width/height.",
      usage: "Set globally to make sizing behavior predictable."
    },
    {
      name: "max-width + margin:auto",
      type: "CSS",
      does: "Centers and constrains content width.",
      usage: "Use on sections/containers for readability on wide screens."
    },
    {
      name: "typography scale",
      type: "CSS",
      does: "Creates consistent heading/body sizing rhythm.",
      usage: "Reuse font sizes by role, not random per section."
    }
  ],
  [
    {
      name: "@media (max-width: ...)",
      type: "CSS",
      does: "Applies styles only under specific viewport sizes.",
      usage: "Use to switch nav/cards/layout for mobile screens."
    },
    {
      name: ".nav-links.active",
      type: "CSS",
      does: "Represents menu-open state in mobile mode.",
      usage: "Toggle this class from JS instead of inline styles."
    },
    {
      name: "flex-direction: column",
      type: "CSS",
      does: "Stacks items vertically.",
      usage: "Use for mobile dropdown menu and tight screens."
    },
    {
      name: "minmax()",
      type: "CSS",
      does: "Sets flexible grid track size limits.",
      usage: "Use in grid templates for adaptable card widths."
    }
  ],
  [
    {
      name: "document.getElementById()",
      type: "JavaScript",
      does: "Finds one element by its ID.",
      usage: "Use for stable references like menuToggle and navLinks."
    },
    {
      name: "addEventListener('click', ...)",
      type: "JavaScript",
      does: "Runs logic when user clicks an element.",
      usage: "Use to open/close mobile menu without page reload."
    },
    {
      name: "classList.toggle()",
      type: "JavaScript",
      does: "Adds/removes a class in one call.",
      usage: "Use for state toggles tied to CSS behavior."
    },
    {
      name: "function scrollToSection(id)",
      type: "JavaScript",
      does: "Reusable helper for smooth section navigation.",
      usage: "Use helper functions to avoid repeating scroll code."
    }
  ],
  [
    {
      name: "submit event",
      type: "JavaScript",
      does: "Runs when form attempts to submit.",
      usage: "Intercept with preventDefault for custom validation flow."
    },
    {
      name: "preventDefault()",
      type: "JavaScript",
      does: "Stops browser default submit behavior.",
      usage: "Use before validation so page does not refresh prematurely."
    },
    {
      name: ".trim()",
      type: "JavaScript",
      does: "Removes accidental surrounding spaces in user input.",
      usage: "Use before checking field length/format."
    },
    {
      name: "textContent",
      type: "JavaScript",
      does: "Sets text inside an element safely.",
      usage: "Use for validation/success messages shown to users."
    }
  ],
  [
    {
      name: "body.dark",
      type: "CSS",
      does: "Applies theme overrides when dark class exists on body.",
      usage: "Use class-based themes for clean, scalable mode switching."
    },
    {
      name: "classList.toggle('dark')",
      type: "JavaScript",
      does: "Switches between dark and light mode states.",
      usage: "Trigger from a theme button for user-controlled preference."
    },
    {
      name: "transition",
      type: "CSS",
      does: "Animates state changes smoothly.",
      usage: "Use subtle durations so UI feels responsive, not sluggish."
    },
    {
      name: "localStorage",
      type: "JavaScript",
      does: "Saves small user preferences in browser.",
      usage: "Store theme choice and restore it on next page load."
    }
  ],
  [
    {
      name: "QA checklist",
      type: "Process",
      does: "Ensures core features are verified before release.",
      usage: "Use repeatable checks for nav, responsive behavior, and form logic."
    },
    {
      name: "DevTools console",
      type: "Debug",
      does: "Shows runtime errors and warnings.",
      usage: "Fix console errors before considering the lesson complete."
    },
    {
      name: "Responsive testing",
      type: "Testing",
      does: "Validates layout across device widths.",
      usage: "Test small, medium, and large viewports each iteration."
    },
    {
      name: "refactor",
      type: "Code Quality",
      does: "Improves readability/maintainability without changing output.",
      usage: "Rename unclear variables and extract repeated blocks."
    }
  ]
];

const lessonCounterEl = document.querySelector("#lessonCounter");
const lessonLevelEl = document.querySelector("#lessonLevel");
const lessonReadTimeEl = document.querySelector("#lessonReadTime");
const progressFillEl = document.querySelector("#progressFill");
const lessonCardEl = document.querySelector("#lessonCard");
const lessonTitleEl = document.querySelector("#lessonTitle");
const lessonSummaryEl = document.querySelector("#lessonSummary");
const partCounterEl = document.querySelector("#partCounter");
const prevPartBtn = document.querySelector("#prevPartBtn");
const nextPartBtn = document.querySelector("#nextPartBtn");
const lessonSlideWindowEl = document.querySelector(".lesson-slide-window");
const lessonSlidesTrackEl = document.querySelector("#lessonSlidesTrack");
const lessonExplainEl = document.querySelector("#lessonExplain");
const lessonDoEl = document.querySelector("#lessonDo");
const lessonDontEl = document.querySelector("#lessonDont");
const lessonPointsEl = document.querySelector("#lessonPoints");
const lessonCheckpointEl = document.querySelector("#lessonCheckpoint");
const lessonElementsEl = document.querySelector("#lessonElements");
const codeLabelEl = document.querySelector("#codeLabel");
const lessonSnippetEl = document.querySelector("#lessonSnippet");
const slowTipEl = document.querySelector("#slowTip");
const roadmapDrawerEl = document.querySelector(".roadmap-drawer");
const roadmapToggleEl = document.querySelector("#roadmapToggle");
const roadmapBodyEl = document.querySelector("#roadmapBody");
const roadmapListEl = document.querySelector("#roadmapList");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
const copySnippetBtn = document.querySelector("#copySnippet");

let currentIndex = 0;
let currentPartIndex = 0;
let lockInterval = null;

function renderList(target, values) {
  target.innerHTML = values
    .map((value) => `<li>${escapeHtml(value)}</li>`)
    .join("");
}

function renderElementBreakdown(items) {
  lessonElementsEl.innerHTML = items
    .map((item) => {
      return `
        <article class="element-card-mini">
          <div class="element-head">
            <h4 class="element-name">${escapeHtml(item.name)}</h4>
            <span class="element-type">${escapeHtml(item.type)}</span>
          </div>
          <p><strong>What it does:</strong> ${escapeHtml(item.does)}</p>
          <p><strong>How to use it:</strong> ${escapeHtml(item.usage)}</p>
        </article>
      `;
    })
    .join("");
}

function renderExplain(guidance) {
  const fallback =
    "Take this lesson slowly, apply one concept at a time, and verify each step before moving on.";
  const blocks = guidance?.explainBlocks;

  if (!blocks || blocks.length === 0) {
    lessonExplainEl.textContent = guidance?.explain ?? fallback;
    return;
  }

  lessonExplainEl.innerHTML = blocks
    .map((block) => {
      if (block.type === "heading") {
        return `<h4>${escapeHtml(block.text ?? "")}</h4>`;
      }
      if (block.type === "list") {
        const items = Array.isArray(block.items) ? block.items : [];
        const itemMarkup = items
          .map((item) => `<li>${escapeHtml(item)}</li>`)
          .join("");
        return `<ul>${itemMarkup}</ul>`;
      }
      return `<p>${escapeHtml(block.text ?? "")}</p>`;
    })
    .join("");
}

function getExpandedElementBreakdown(index) {
  const expanded = [];
  for (let i = 0; i <= index; i += 1) {
    const current = lessonElementBreakdown[i] ?? [];
    current.forEach((item) => {
      expanded.push({
        ...item,
        usage: `${item.usage} (Also reinforced in Lesson ${i + 1}.)`
      });
    });
  }
  return expanded;
}

function getPartCount() {
  return lessonSlidesTrackEl.children.length;
}

function syncSlideWindowHeight() {
  const activeSlide = lessonSlidesTrackEl.children[currentPartIndex];
  if (!activeSlide) {
    return;
  }
  lessonSlideWindowEl.style.height = `${activeSlide.scrollHeight}px`;
}

function updatePartPager() {
  const partCount = getPartCount();
  const safeIndex = Math.min(Math.max(currentPartIndex, 0), partCount - 1);
  currentPartIndex = safeIndex;

  lessonSlidesTrackEl.style.transform = `translateX(-${safeIndex * 100}%)`;
  partCounterEl.textContent = `Part ${safeIndex + 1} of ${partCount}`;
  prevPartBtn.disabled = safeIndex === 0;
  nextPartBtn.disabled = safeIndex === partCount - 1;

  window.requestAnimationFrame(() => {
    syncSlideWindowHeight();
  });
}

function escapeHtml(input) {
  const text = input ?? "";
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("\"", "&quot;")
    .replaceAll("'", "&#39;");
}

function getNextButtonLabel() {
  if (currentIndex === lessons.length - 1) {
    return "Restart Course";
  }
  return "Next Lesson";
}

function renderRoadmap() {
  roadmapListEl.innerHTML = lessons
    .map((lesson, index) => {
      const statusClass =
        index === currentIndex ? "current" : index < currentIndex ? "done" : "";
      return `
        <li>
          <button class="roadmap-step ${statusClass}" type="button" data-index="${index}">
            ${escapeHtml(lesson.title)}
          </button>
        </li>
      `;
    })
    .join("");
}

function setRoadmapOpen(isOpen) {
  roadmapDrawerEl.classList.toggle("is-open", isOpen);
  roadmapToggleEl.setAttribute("aria-expanded", String(isOpen));
}

function lockNextForSeconds(seconds) {
  if (lockInterval) {
    clearInterval(lockInterval);
    lockInterval = null;
  }

  let remaining = Number.isFinite(seconds) ? Math.max(0, seconds) : 0;
  if (remaining === 0) {
    nextBtn.disabled = false;
    nextBtn.textContent = getNextButtonLabel();
    slowTipEl.textContent = "Take your time, then continue when you feel ready.";
    return;
  }

  nextBtn.disabled = true;
  slowTipEl.textContent = `Pacing mode: next unlocks in ${remaining}s so you have space to read this lesson calmly.`;
  nextBtn.textContent = `${getNextButtonLabel()} (${remaining}s)`;

  lockInterval = setInterval(() => {
    remaining -= 1;
    if (remaining <= 0) {
      clearInterval(lockInterval);
      lockInterval = null;
      nextBtn.disabled = false;
      nextBtn.textContent = getNextButtonLabel();
      slowTipEl.textContent =
        "Great pace. When ready, continue to the next lesson slide.";
      return;
    }
    nextBtn.textContent = `${getNextButtonLabel()} (${remaining}s)`;
    slowTipEl.textContent = `Pacing mode: next unlocks in ${remaining}s so you have space to read this lesson calmly.`;
  }, 1000);
}

function renderLesson() {
  const lesson = lessons[currentIndex];
  const guidance = lessonGuidance[currentIndex];
  const elements = getExpandedElementBreakdown(currentIndex);
  const progress = ((currentIndex + 1) / lessons.length) * 100;

  lessonCardEl.classList.add("is-switching");
  window.setTimeout(() => {
    lessonCounterEl.textContent = `Lesson ${currentIndex + 1} of ${lessons.length}`;
    lessonLevelEl.textContent = lesson.level;
    lessonReadTimeEl.textContent = lesson.readTime;
    progressFillEl.style.width = `${progress}%`;

    lessonTitleEl.textContent = lesson.title;
    lessonSummaryEl.textContent = lesson.summary;
    renderExplain(guidance);
    renderList(lessonDoEl, guidance?.doList ?? ["Build in small, testable steps."]);
    renderList(lessonDontEl, guidance?.dontList ?? ["Avoid rushing through the lesson."]);
    renderList(lessonPointsEl, lesson.points);
    renderList(lessonCheckpointEl, lesson.checkpoint);
    renderElementBreakdown(elements);
    currentPartIndex = 0;
    updatePartPager();

    codeLabelEl.textContent = lesson.codeLabel;
    lessonSnippetEl.textContent = lesson.snippet;

    prevBtn.disabled = currentIndex === 0;
    nextBtn.textContent = getNextButtonLabel();
    lockNextForSeconds(lesson.paceSeconds);
    renderRoadmap();

    lessonCardEl.classList.remove("is-switching");
  }, 140);
}

function goToLesson(index) {
  const safeIndex = Math.min(Math.max(index, 0), lessons.length - 1);
  currentIndex = safeIndex;
  renderLesson();
}

function copyCurrentSnippet() {
  const snippet = lessons[currentIndex].snippet;
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(snippet).then(() => {
      copySnippetBtn.textContent = "Copied!";
      window.setTimeout(() => {
        copySnippetBtn.textContent = "Copy Example";
      }, 1200);
    });
    return;
  }
  copySnippetBtn.textContent = "Copy unsupported";
  window.setTimeout(() => {
    copySnippetBtn.textContent = "Copy Example";
  }, 1200);
}

function setupEvents() {
  prevPartBtn.addEventListener("click", () => {
    if (currentPartIndex > 0) {
      currentPartIndex -= 1;
      updatePartPager();
    }
  });

  nextPartBtn.addEventListener("click", () => {
    if (currentPartIndex < getPartCount() - 1) {
      currentPartIndex += 1;
      updatePartPager();
    }
  });

  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      goToLesson(currentIndex - 1);
    }
  });

  nextBtn.addEventListener("click", () => {
    if (nextBtn.disabled) {
      return;
    }
    if (currentIndex === lessons.length - 1) {
      goToLesson(0);
      return;
    }
    goToLesson(currentIndex + 1);
  });

  copySnippetBtn.addEventListener("click", () => {
    copyCurrentSnippet();
  });

  roadmapToggleEl.addEventListener("click", () => {
    const isOpen = roadmapDrawerEl.classList.contains("is-open");
    setRoadmapOpen(!isOpen);
  });

  roadmapListEl.addEventListener("click", (event) => {
    const button = event.target.closest(".roadmap-step");
    if (!button) {
      return;
    }
    const index = Number(button.dataset.index);
    if (Number.isInteger(index)) {
      goToLesson(index);
      setRoadmapOpen(false);
    }
  });

  document.addEventListener("click", (event) => {
    if (!roadmapDrawerEl.classList.contains("is-open")) {
      return;
    }
    if (roadmapDrawerEl.contains(event.target)) {
      return;
    }
    setRoadmapOpen(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setRoadmapOpen(false);
    }
  });

  window.addEventListener("resize", () => {
    syncSlideWindowHeight();
  });
}

function init() {
  setRoadmapOpen(false);
  setupEvents();
  renderLesson();
}

init();

