const lessons = [
  {
    level: "Beginner",
    readTime: "~8 min",
    paceSeconds: 8,
    title: "Lesson 1: Understand the Final Website Blueprint",
    summary:
      "Before coding, map the target. The lesson site has fixed navigation, a full hero, about, services, contact form, footer, and small JavaScript interactions.",
    points: [
      "Read the target file in `lesson website/lesson result.html` and identify each section.",
      "Separate concerns: HTML for structure, CSS for style, JavaScript for behavior.",
      "Plan your file setup so features are easy to build and test step by step."
    ],
    checkpoint: [
      "You can name every target section in order: header, hero, about, services, contact, footer.",
      "You understand the site has both layout features and interaction features.",
      "You are ready to create the starter structure."
    ],
    codeLabel: "Project Setup",
    snippet: `project/
  index.html
  styles.css
  script.js

<!-- In index.html -->
<link rel="stylesheet" href="styles.css" />
<script src="script.js" defer></script>`
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
      "This step is about reducing confusion. If you understand the finished site first, every coding decision becomes intentional instead of random.",
    doList: [
      "Sketch the page flow from top to bottom before writing code.",
      "Label each section with a purpose, not just a name.",
      "Keep the target file open while building."
    ],
    dontList: [
      "Do not start styling before the structure is mapped.",
      "Do not copy sections blindly without understanding what they do.",
      "Do not mix HTML, CSS, and JavaScript responsibilities too early."
    ]
  },
  {
    explain:
      "Semantic HTML creates a strong foundation. It improves accessibility, SEO, and makes your project easier to maintain later.",
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
      "Navigation is your user's map. A fixed nav improves orientation, especially on longer one-page websites.",
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
      "The hero is your first impression. It should communicate value quickly and lead users to one obvious action.",
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
      "Reusable cards help your site stay consistent. About and Services should feel connected through layout and spacing rhythm.",
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
      "A clean form lowers friction and increases trust. Good form UX is about clarity and feedback, not number of fields.",
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
      "A CSS system turns random styling into a reliable design language. Variables and spacing rules prevent visual drift.",
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
      "Responsive design is not optional. The mobile experience must be planned, not patched at the end.",
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
      "JavaScript should enhance, not fight the structure. Small interaction helpers create a smoother user journey.",
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
      "Validation exists to help users complete the form successfully. Clear error messages reduce frustration and improve quality.",
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
      "Theme toggles and micro-polish improve perceived quality. Professional feel comes from consistent details, not complexity.",
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
      "Final QA is where good projects become reliable projects. Review, test, and refine before calling it done.",
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

const lessonElementBreakdown = [
  [
    {
      name: "<section>",
      type: "HTML",
      does: "Groups a major part of the page into a logical block.",
      usage: "Use one section for each major page area like hero, about, and contact."
    },
    {
      name: "<header>",
      type: "HTML",
      does: "Defines introductory area, usually containing branding and navigation.",
      usage: "Place logo and top nav here so users can orient quickly."
    },
    {
      name: "<footer>",
      type: "HTML",
      does: "Marks the closing area of the page or section.",
      usage: "Use it for copyright, secondary actions, and utility links."
    },
    {
      name: "defer",
      type: "HTML",
      does: "Loads JavaScript without blocking HTML parsing.",
      usage: "Use on script tags so layout appears quickly before JS executes."
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
const lessonExplainEl = document.querySelector("#lessonExplain");
const lessonDoEl = document.querySelector("#lessonDo");
const lessonDontEl = document.querySelector("#lessonDont");
const lessonPointsEl = document.querySelector("#lessonPoints");
const lessonCheckpointEl = document.querySelector("#lessonCheckpoint");
const lessonElementsEl = document.querySelector("#lessonElements");
const codeLabelEl = document.querySelector("#codeLabel");
const lessonSnippetEl = document.querySelector("#lessonSnippet");
const slowTipEl = document.querySelector("#slowTip");
const roadmapListEl = document.querySelector("#roadmapList");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
const copySnippetBtn = document.querySelector("#copySnippet");

let currentIndex = 0;
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
  const elements = lessonElementBreakdown[currentIndex] ?? [];
  const progress = ((currentIndex + 1) / lessons.length) * 100;

  lessonCardEl.classList.add("is-switching");
  window.setTimeout(() => {
    lessonCounterEl.textContent = `Lesson ${currentIndex + 1} of ${lessons.length}`;
    lessonLevelEl.textContent = lesson.level;
    lessonReadTimeEl.textContent = lesson.readTime;
    progressFillEl.style.width = `${progress}%`;

    lessonTitleEl.textContent = lesson.title;
    lessonSummaryEl.textContent = lesson.summary;
    lessonExplainEl.textContent =
      guidance?.explain ??
      "Take this lesson slowly, apply one concept at a time, and verify each step before moving on.";
    renderList(lessonDoEl, guidance?.doList ?? ["Build in small, testable steps."]);
    renderList(lessonDontEl, guidance?.dontList ?? ["Avoid rushing through the lesson."]);
    renderList(lessonPointsEl, lesson.points);
    renderList(lessonCheckpointEl, lesson.checkpoint);
    renderElementBreakdown(elements);

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

  roadmapListEl.addEventListener("click", (event) => {
    const button = event.target.closest(".roadmap-step");
    if (!button) {
      return;
    }
    const index = Number(button.dataset.index);
    if (Number.isInteger(index)) {
      goToLesson(index);
    }
  });
}

function init() {
  setupEvents();
  renderLesson();
}

init();

