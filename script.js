const guideData = {
  title: "Web Stack Guide: HTML, CSS, and JavaScript Reference",
  lastUpdated: "April 24, 2026",
  categories: [
    {
      id: "document-structure",
      title: "1. Document Structure Elements",
      elements: [
        {
          name: "<!DOCTYPE html>",
          syntax: "<!DOCTYPE html>",
          purpose: "Declares the document type and HTML version.",
          functionText:
            "Ensures browsers render the page in standards mode.",
          attributes: "None",
          example: "<!DOCTYPE html>",
          notes: "Always the first line in an HTML document."
        },
        {
          name: "<html>",
          syntax: "<html lang=\"en\">",
          purpose: "Root element of the HTML document.",
          functionText: "Wraps all other elements.",
          attributes: "lang, dir",
          example: "<html lang=\"en\">",
          notes: "Essential for all HTML documents."
        },
        {
          name: "<head>",
          syntax: "<head>...</head>",
          purpose: "Container for metadata.",
          functionText:
            "Holds information about the document not displayed on the page.",
          attributes: "None",
          example: "<head>...</head>",
          notes: "Must be the first child of <html>."
        },
        {
          name: "<body>",
          syntax: "<body>...</body>",
          purpose: "Document body.",
          functionText: "Contains all visible content.",
          attributes: "Global attributes",
          example: "<body>...</body>",
          notes: "Everything users see is inside this element."
        },
        {
          name: "<header>",
          syntax: "<header>...</header>",
          purpose: "Introductory content or navigation.",
          functionText:
            "Represents a container for introductory content.",
          attributes: "Global attributes",
          example: "<header><h1>Site Title</h1></header>",
          notes: "Can be used multiple times per page."
        },
        {
          name: "<nav>",
          syntax: "<nav>...</nav>",
          purpose: "Navigation links.",
          functionText: "Defines navigation sections.",
          attributes: "Global attributes",
          example: "<nav><ul><li><a href=\"/\">Home</a></li></ul></nav>",
          notes: "Use for main navigation menus."
        },
        {
          name: "<main>",
          syntax: "<main>...</main>",
          purpose: "Main content.",
          functionText:
            "Represents the primary content of the document.",
          attributes: "Global attributes",
          example: "<main><article>...</article></main>",
          notes: "Should be unique per page."
        },
        {
          name: "<section>",
          syntax: "<section>...</section>",
          purpose: "Thematic grouping.",
          functionText: "Defines sections of content.",
          attributes: "Global attributes",
          example: "<section><h2>Chapter 1</h2><p>Content...</p></section>",
          notes: "Use for logical divisions."
        },
        {
          name: "<article>",
          syntax: "<article>...</article>",
          purpose: "Self-contained content.",
          functionText: "Represents independent, reusable content.",
          attributes: "Global attributes",
          example: "<article><h2>News Story</h2><p>Details...</p></article>",
          notes: "Could be syndicated independently."
        },
        {
          name: "<aside>",
          syntax: "<aside>...</aside>",
          purpose: "Sidebar content.",
          functionText:
            "Represents content indirectly related to main content.",
          attributes: "Global attributes",
          example: "<aside><h3>Related Links</h3><ul>...</ul></aside>",
          notes: "Often used for sidebars or pull quotes."
        },
        {
          name: "<footer>",
          syntax: "<footer>...</footer>",
          purpose: "Footer content.",
          functionText:
            "Represents footer for its nearest sectioning element.",
          attributes: "Global attributes",
          example: "<footer><p>&copy; 2023 Company</p></footer>",
          notes: "Can contain copyright info, links, and more."
        }
      ]
    },
    {
      id: "metadata-head",
      title: "2. Metadata and Head Elements",
      elements: [
        {
          name: "<title>",
          syntax: "<title>My Website</title>",
          purpose: "Document title.",
          functionText:
            "Sets the title shown in browser tabs and bookmarks.",
          attributes: "None",
          example: "<title>My Website</title>",
          notes: "Important for SEO and user experience."
        },
        {
          name: "<meta>",
          syntax: "<meta charset=\"UTF-8\">",
          purpose: "Metadata.",
          functionText: "Provides metadata about the document.",
          attributes: "charset, name, content, http-equiv",
          example:
            "<meta name=\"description\" content=\"Site description\">",
          notes: "Used for character encoding, SEO, and browser behavior."
        },
        {
          name: "<link>",
          syntax: "<link rel=\"stylesheet\" href=\"styles.css\">",
          purpose: "External resource links.",
          functionText:
            "Links to external resources like stylesheets or favicons.",
          attributes: "rel, href, type, media",
          example: "<link rel=\"stylesheet\" href=\"styles.css\">",
          notes: "Commonly used for CSS and icons."
        },
        {
          name: "<style>",
          syntax: "<style>body { color: blue; }</style>",
          purpose: "Embedded styles.",
          functionText: "Contains CSS styles within the HTML.",
          attributes: "type, media",
          example: "<style>body { color: blue; }</style>",
          notes: "External stylesheets are better for maintainability."
        }
      ]
    },
    {
      id: "text-content",
      title: "3. Text Content Elements",
      elements: [
        {
          name: "<h1> to <h6>",
          syntax: "<h1>Main Title</h1>",
          purpose: "Headings.",
          functionText: "Define headings of different levels.",
          attributes: "Global attributes",
          example: "<h1>Main Title</h1>",
          notes: "<h1> is highest. Use heading hierarchy consistently."
        },
        {
          name: "<p>",
          syntax: "<p>This is a paragraph.</p>",
          purpose: "Paragraph.",
          functionText: "Represents a paragraph of text.",
          attributes: "Global attributes",
          example: "<p>This is a paragraph.</p>",
          notes: "Block-level element."
        },
        {
          name: "<div>",
          syntax: "<div class=\"container\">Content</div>",
          purpose: "Generic container.",
          functionText: "Groups content for styling or scripting.",
          attributes: "Global attributes",
          example: "<div class=\"container\">Content</div>",
          notes: "No semantic meaning. Use semantic elements when possible."
        },
        {
          name: "<span>",
          syntax: "<span class=\"highlight\">Text</span>",
          purpose: "Generic inline container.",
          functionText: "Groups inline content.",
          attributes: "Global attributes",
          example: "<span class=\"highlight\">Text</span>",
          notes: "Inline equivalent of <div>."
        }
      ]
    },
    {
      id: "inline-semantics",
      title: "4. Inline Text Semantics",
      elements: [
        {
          name: "<strong>",
          syntax: "<strong>Important!</strong>",
          purpose: "Strong importance.",
          functionText:
            "Indicates strong importance, typically displayed as bold text.",
          attributes: "Global attributes",
          example: "<strong>Important!</strong>",
          notes: "Use for emphasis, not only visual styling."
        },
        {
          name: "<em>",
          syntax: "<em>Stressed word</em>",
          purpose: "Emphasis.",
          functionText:
            "Indicates stress emphasis, usually rendered in italics.",
          attributes: "Global attributes",
          example: "<em>Stressed word</em>",
          notes: "Semantic emphasis improves readability."
        },
        {
          name: "<mark>",
          syntax: "<mark>Highlighted</mark>",
          purpose: "Highlighted text.",
          functionText: "Represents highlighted or marked text.",
          attributes: "Global attributes",
          example: "<mark>Highlighted</mark>",
          notes: "Often used to show search results."
        },
        {
          name: "<code>",
          syntax: "<code>console.log('Hello');</code>",
          purpose: "Code snippet.",
          functionText: "Represents computer code.",
          attributes: "Global attributes",
          example: "<code>console.log('Hello');</code>",
          notes: "Usually shown in a monospace font."
        }
      ]
    },
    {
      id: "links-navigation",
      title: "5. Links and Navigation",
      elements: [
        {
          name: "<a>",
          syntax: "<a href=\"https://example.com\">Link</a>",
          purpose: "Hyperlink.",
          functionText: "Creates links to other pages, files, or anchors.",
          attributes: "href, target, download, rel",
          example: "<a href=\"https://example.com\">Link</a>",
          notes: "Fundamental for web navigation."
        }
      ]
    },
    {
      id: "media-embedded",
      title: "6. Multimedia and Embedded Content",
      elements: [
        {
          name: "<img>",
          syntax: "<img src=\"image.jpg\" alt=\"Description\">",
          purpose: "Image.",
          functionText: "Embeds images in a document.",
          attributes: "src, alt, width, height",
          example: "<img src=\"image.jpg\" alt=\"Description\">",
          notes: "The alt attribute is crucial for accessibility."
        },
        {
          name: "<audio>",
          syntax: "<audio src=\"sound.mp3\" controls></audio>",
          purpose: "Audio content.",
          functionText: "Embeds audio files.",
          attributes: "src, controls, autoplay, loop",
          example: "<audio src=\"sound.mp3\" controls></audio>",
          notes: "Use controls so users can manage playback."
        },
        {
          name: "<video>",
          syntax: "<video src=\"movie.mp4\" controls></video>",
          purpose: "Video content.",
          functionText: "Embeds video files.",
          attributes: "src, controls, width, height",
          example: "<video src=\"movie.mp4\" controls></video>",
          notes: "Similar to audio, but for moving visual media."
        }
      ]
    },
    {
      id: "tables",
      title: "7. Tables",
      elements: [
        {
          name: "<table>",
          syntax: "<table><tr><td>Data</td></tr></table>",
          purpose: "Table.",
          functionText: "Represents tabular data.",
          attributes: "Global attributes",
          example: "<table><tr><td>Data</td></tr></table>",
          notes: "Use for data tables, not visual layout."
        },
        {
          name: "<tr>",
          syntax: "<tr><td>Cell</td></tr>",
          purpose: "Table row.",
          functionText: "Defines a row in a table.",
          attributes: "Global attributes",
          example: "<tr><td>Cell</td></tr>",
          notes: "Contains table header or data cells."
        },
        {
          name: "<td>",
          syntax: "<td>Data</td>",
          purpose: "Table cell.",
          functionText: "Defines a data cell within a row.",
          attributes: "colspan, rowspan",
          example: "<td>Data</td>",
          notes: "Can span multiple rows or columns."
        }
      ]
    },
    {
      id: "forms",
      title: "8. Forms",
      elements: [
        {
          name: "<form>",
          syntax: "<form action=\"/submit\" method=\"post\">...</form>",
          purpose: "Form.",
          functionText: "Creates a form for user input.",
          attributes: "action, method, enctype",
          example: "<form action=\"/submit\" method=\"post\">...</form>",
          notes: "Container for form controls."
        },
        {
          name: "<input>",
          syntax: "<input type=\"text\" name=\"username\">",
          purpose: "Input control.",
          functionText: "Creates various input types based on type attribute.",
          attributes: "type, name, value, placeholder",
          example: "<input type=\"text\" name=\"username\">",
          notes: "The type value determines control behavior."
        },
        {
          name: "<button>",
          syntax: "<button type=\"submit\">Submit</button>",
          purpose: "Button.",
          functionText: "Creates a clickable button element.",
          attributes: "type, name, value",
          example: "<button type=\"submit\">Submit</button>",
          notes: "Common types are submit, reset, and button."
        }
      ]
    },
    {
      id: "interactive-elements",
      title: "9. Interactive Elements",
      elements: [
        {
          name: "<details>",
          syntax: "<details><summary>More info</summary><p>Details...</p></details>",
          purpose: "Disclosure widget.",
          functionText: "Creates native expandable and collapsible content.",
          attributes: "open",
          example:
            "<details><summary>More info</summary><p>Details...</p></details>",
          notes: "Built-in accordion style behavior."
        },
        {
          name: "<summary>",
          syntax: "<summary>Click to expand</summary>",
          purpose: "Summary for details.",
          functionText: "Defines the visible heading for a <details> block.",
          attributes: "Global attributes",
          example: "<summary>Click to expand</summary>",
          notes: "Must be the first child inside <details>."
        }
      ]
    },
    {
      id: "scripting-programming",
      title: "10. Scripting and Programming",
      elements: [
        {
          name: "<script>",
          syntax: "<script src=\"script.js\"></script>",
          purpose: "Script.",
          functionText: "Embeds or references JavaScript.",
          attributes: "src, type, async, defer",
          example: "<script src=\"script.js\"></script>",
          notes: "Used for client-side scripting."
        },
        {
          name: "<noscript>",
          syntax: "<noscript>Please enable JavaScript.</noscript>",
          purpose: "No script fallback.",
          functionText: "Shows fallback content when scripts are disabled.",
          attributes: "None",
          example: "<noscript>Please enable JavaScript.</noscript>",
          notes: "Improves accessibility and graceful degradation."
        }
      ]
    },
    {
      id: "appendix-snippets",
      title: "Appendix: Additional Snippets Found in File Tail",
      elements: [
        {
          name: "<h2>",
          syntax: "<h2>Subsection</h2>",
          purpose: "Second-level heading.",
          functionText: "Used for subsections.",
          attributes: "Global attributes",
          example: "<h2>Section Title</h2>",
          notes: "Appeared in the trailing extracted lines."
        },
        {
          name: "<div class=\"profile\">",
          syntax: "<div class=\"profile\">...</div>",
          purpose: "Styled generic container.",
          functionText:
            "A div with class for targeted styling and layout.",
          attributes: "class, global attributes",
          example: "<div class=\"profile\">Content</div>",
          notes: "The class name enables custom CSS targeting."
        },
        {
          name: "<img src=\"https://via.placeholder.com/150\" alt=\"Profile Photo\">",
          syntax:
            "<img src=\"https://via.placeholder.com/150\" alt=\"Profile Photo\">",
          purpose: "Profile image example.",
          functionText: "Embeds a placeholder image with alt text.",
          attributes: "src, alt, width, height",
          example:
            "<img src=\"https://via.placeholder.com/150\" alt=\"Profile Photo\">",
          notes: "Uses placeholder source and accessibility-friendly alt."
        },
        {
          name: "<h3>",
          syntax: "<h3>Sub-subsection</h3>",
          purpose: "Third-level heading.",
          functionText: "Represents a deeper subsection heading level.",
          attributes: "Global attributes",
          example: "<h3>Topic Heading</h3>",
          notes: "Appeared in the trailing extracted lines."
        },
        {
          name: "<ul class=\"hobbies\">",
          syntax: "<ul class=\"hobbies\"><li>Reading</li></ul>",
          purpose: "Styled unordered list.",
          functionText:
            "An unordered list with class-based styling hook.",
          attributes: "class, global attributes",
          example: "<ul class=\"hobbies\"><li>Music</li></ul>",
          notes: "Shows how class attributes scope list styling."
        }
      ]
    },
    {
      id: "css-core-properties",
      title: "11. CSS Core Properties and Styling",
      elements: [
        {
          name: "color",
          syntax: "color: #1f2937;",
          purpose: "Text color styling.",
          functionText: "Sets the foreground color of text content.",
          attributes: "hex, rgb(), hsl(), named colors",
          example: ".title { color: #0f766e; }",
          notes: "Choose accessible contrast for readability."
        },
        {
          name: "background",
          syntax: "background: linear-gradient(120deg, #fff6d8, #d8f8f0);",
          purpose: "Background styling.",
          functionText:
            "Sets background color, image, position, repeat, and size in shorthand.",
          attributes: "color, image, position, size, repeat",
          example:
            ".hero { background: linear-gradient(120deg, #fff6d8, #d8f8f0); }",
          notes: "Great for colorful, modern visual depth."
        },
        {
          name: "padding",
          syntax: "padding: 12px 16px;",
          purpose: "Inner spacing.",
          functionText: "Adds space between content and element border.",
          attributes: "px, rem, em, %",
          example: ".card { padding: 16px; }",
          notes: "Improves readability and touch target comfort."
        },
        {
          name: "margin",
          syntax: "margin: 0 auto 24px;",
          purpose: "Outer spacing.",
          functionText:
            "Adds space outside the border to separate elements.",
          attributes: "px, rem, em, auto",
          example: ".section { margin-bottom: 24px; }",
          notes: "Use consistently to keep vertical rhythm clean."
        },
        {
          name: "border-radius",
          syntax: "border-radius: 14px;",
          purpose: "Corner styling.",
          functionText: "Rounds element corners for softer UI shapes.",
          attributes: "px, %, logical corner values",
          example: ".panel { border-radius: 14px; }",
          notes: "Pairs well with shadows in modern card layouts."
        },
        {
          name: "box-shadow",
          syntax: "box-shadow: 0 20px 40px -28px rgba(0,0,0,0.45);",
          purpose: "Depth and elevation.",
          functionText:
            "Applies one or more shadow layers to create visual hierarchy.",
          attributes: "offset-x, offset-y, blur, spread, color",
          example: ".card { box-shadow: 0 14px 28px -20px rgba(0,0,0,0.45); }",
          notes: "Use subtle values so cards feel elevated but not noisy."
        }
      ]
    },
    {
      id: "css-layout-responsive",
      title: "12. CSS Layout, Responsive Design, and Motion",
      elements: [
        {
          name: "display: flex",
          syntax: "display: flex;",
          purpose: "One-dimensional layout.",
          functionText:
            "Creates a flexible container for aligning items in rows or columns.",
          attributes: "flex-direction, justify-content, align-items, gap",
          example: ".toolbar { display: flex; gap: 8px; align-items: center; }",
          notes: "Best for nav bars, toolbars, and grouped controls."
        },
        {
          name: "display: grid",
          syntax: "display: grid;",
          purpose: "Two-dimensional layout.",
          functionText:
            "Creates row and column tracks for structured responsive layouts.",
          attributes: "grid-template-columns, gap, auto-fit, minmax()",
          example:
            ".cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); }",
          notes: "Ideal for card galleries and dashboard sections."
        },
        {
          name: "position",
          syntax: "position: sticky; top: 10px;",
          purpose: "Element positioning mode.",
          functionText:
            "Controls how elements are placed in normal flow or relative to viewport.",
          attributes: "static, relative, absolute, fixed, sticky",
          example: ".header { position: sticky; top: 8px; }",
          notes: "Sticky is useful for persistent navigation."
        },
        {
          name: "@media",
          syntax: "@media (max-width: 760px) { ... }",
          purpose: "Responsive rules.",
          functionText:
            "Applies CSS conditionally based on device or viewport features.",
          attributes: "max-width, min-width, orientation, prefers-reduced-motion",
          example:
            "@media (max-width: 760px) { .cards { grid-template-columns: 1fr; } }",
          notes: "Core tool for mobile-first responsive design."
        },
        {
          name: "transition",
          syntax: "transition: transform 0.2s ease;",
          purpose: "Smooth state changes.",
          functionText:
            "Animates property changes over time for hover/focus interactions.",
          attributes: "property, duration, timing-function, delay",
          example: ".btn { transition: transform 0.2s ease; }",
          notes: "Keep duration short for crisp UI feedback."
        },
        {
          name: "@keyframes + animation",
          syntax: "@keyframes drift { from { ... } to { ... } }",
          purpose: "Timeline-based animation.",
          functionText:
            "Defines reusable animation sequences and applies them to elements.",
          attributes: "name, duration, iteration-count, direction",
          example: ".orb { animation: drift 11s ease-in-out infinite alternate; }",
          notes: "Always provide reduced-motion fallback for accessibility."
        }
      ]
    },
    {
      id: "javascript-language-core",
      title: "13. JavaScript Core Language Patterns",
      elements: [
        {
          name: "const / let",
          syntax: "const apiUrl = '/data'; let count = 0;",
          purpose: "Variable declarations.",
          functionText:
            "Stores values with block scope for predictable state management.",
          attributes: "immutability of binding, block scope",
          example: "const searchInput = document.querySelector('#searchInput');",
          notes: "Use const by default; use let for reassignment."
        },
        {
          name: "function",
          syntax: "function renderCards(query) { ... }",
          purpose: "Reusable logic blocks.",
          functionText: "Groups behavior into callable units.",
          attributes: "parameters, return, scope",
          example: "function escapeHtml(text) { return text.replaceAll('<', '&lt;'); }",
          notes: "Keeps complex UI behavior modular and testable."
        },
        {
          name: "array.map()",
          syntax: "items.map((item) => `<li>${item}</li>`).join('');",
          purpose: "Transformation.",
          functionText:
            "Creates a new array by transforming each input item.",
          attributes: "callback, index, return value",
          example: "const cardsHtml = elements.map(renderCard).join('');",
          notes: "Perfect for generating UI from data arrays."
        },
        {
          name: "array.filter()",
          syntax: "items.filter((item) => item.includes(query));",
          purpose: "Selection.",
          functionText: "Returns only items that match a condition.",
          attributes: "predicate callback, boolean result",
          example: "const matches = elements.filter((el) => searchText.includes(query));",
          notes: "Commonly used for live search implementations."
        },
        {
          name: "template literals",
          syntax: "`Found ${count} results`",
          purpose: "Dynamic strings.",
          functionText:
            "Embeds expressions directly in strings for clear HTML generation.",
          attributes: "`${expression}` interpolation",
          example: "resultInfo.textContent = `${total} entries found.`;",
          notes: "Improves readability over string concatenation."
        },
        {
          name: "optional chaining + nullish coalescing",
          syntax: "const tag = item?.dataset?.search ?? '';",
          purpose: "Safe property access.",
          functionText:
            "Prevents runtime errors when nested values are missing.",
          attributes: "?. and ?? operators",
          example: "const selectedTag = tagButton.dataset.search ?? '';",
          notes: "Useful for resilient event and DOM code."
        }
      ]
    },
    {
      id: "javascript-dom-events",
      title: "14. JavaScript DOM, Events, and Async Behavior",
      elements: [
        {
          name: "document.querySelector()",
          syntax: "const input = document.querySelector('#searchInput');",
          purpose: "DOM selection.",
          functionText: "Finds the first element matching a CSS selector.",
          attributes: "selector string",
          example: "const contentSections = document.querySelector('#contentSections');",
          notes: "Core API for attaching dynamic behavior to markup."
        },
        {
          name: "addEventListener()",
          syntax: "input.addEventListener('input', handleSearch);",
          purpose: "Event handling.",
          functionText:
            "Runs a callback when user or browser events occur.",
          attributes: "event type, callback, options",
          example: "clearBtn.addEventListener('click', resetSearch);",
          notes: "Use semantic events like input, click, submit, and keydown."
        },
        {
          name: "classList",
          syntax: "element.classList.add('revealed');",
          purpose: "Class management.",
          functionText:
            "Adds, removes, toggles, or checks CSS classes programmatically.",
          attributes: "add, remove, toggle, contains",
          example: "entry.target.classList.add('revealed');",
          notes: "Connects JS state changes to visual CSS states."
        },
        {
          name: "IntersectionObserver",
          syntax: "new IntersectionObserver((entries) => { ... }, { threshold: 0.15 });",
          purpose: "Viewport visibility tracking.",
          functionText:
            "Observes when elements enter/leave the viewport without scroll polling.",
          attributes: "callback, root, rootMargin, threshold",
          example: "observer.observe(section);",
          notes: "Great for reveal animations and lazy-loaded content."
        },
        {
          name: "fetch() + async/await",
          syntax: "const res = await fetch('/api/data');",
          purpose: "Async data loading.",
          functionText:
            "Requests remote resources and processes responses asynchronously.",
          attributes: "URL, options, headers, method",
          example: "const data = await res.json();",
          notes: "Use try/catch for robust error handling."
        },
        {
          name: "JSON.parse() / JSON.stringify()",
          syntax: "localStorage.setItem('prefs', JSON.stringify(config));",
          purpose: "Data serialization.",
          functionText:
            "Converts between JavaScript objects and JSON text format.",
          attributes: "replacer, reviver, spacing",
          example: "const prefs = JSON.parse(localStorage.getItem('prefs') ?? '{}');",
          notes: "Useful for APIs and localStorage persistence."
        }
      ]
    }
  ]
};

const detailedUsageLibrary = [
  {
    pattern: /<!doctype html>/i,
    notes: [
      "Keeps browsers in standards mode so layout and CSS behave predictably across modern engines.",
      "Use exactly once, as the first line, before any comments or tags."
    ]
  },
  {
    pattern: /^<html/i,
    notes: [
      "Add a correct lang value, such as en, to improve screen reader pronunciation and search indexing.",
      "Use dir=\"rtl\" only when the whole document primarily reads right-to-left."
    ]
  },
  {
    pattern: /^<head/i,
    notes: [
      "Place SEO tags, social tags, stylesheets, and preload hints here so browsers prepare the page early.",
      "Keep metadata organized because head bloat can slow first paint."
    ]
  },
  {
    pattern: /^<body/i,
    notes: [
      "All visible UI belongs here, typically ordered as header, main content, then footer.",
      "Attach page-level classes on body to switch themes or layouts."
    ]
  },
  {
    pattern: /^<header/i,
    notes: [
      "Commonly holds logo, page title, and top actions for quick orientation.",
      "Can be nested inside article or section for local introductions."
    ]
  },
  {
    pattern: /^<nav/i,
    notes: [
      "Group primary links inside nav for better accessibility landmarks.",
      "Use clear link labels and keep menus concise so scanning is easy."
    ]
  },
  {
    pattern: /^<main/i,
    notes: [
      "Use one main per page so assistive tech can jump to core content quickly.",
      "Skip repetitive side links here and keep the primary topic flow."
    ]
  },
  {
    pattern: /^<section/i,
    notes: [
      "Each section should normally include a heading to define its topic.",
      "Great for grouping related cards, chapters, or feature blocks."
    ]
  },
  {
    pattern: /^<article/i,
    notes: [
      "Ideal for blog posts, news cards, comments, or any shareable standalone unit.",
      "Design articles so they still make sense when shown out of context."
    ]
  },
  {
    pattern: /^<aside/i,
    notes: [
      "Best for related links, callouts, ads, or glossary boxes supporting nearby content.",
      "Keep aside content supplementary so it does not disrupt reading flow."
    ]
  },
  {
    pattern: /^<footer/i,
    notes: [
      "Use for legal links, contact details, and secondary navigation at the end of a scope.",
      "Can exist at page level and section level with different responsibilities."
    ]
  },
  {
    pattern: /^<title/i,
    notes: [
      "Keep titles unique per page and front-load key topic words for clarity in tabs and search.",
      "Aim for concise wording to avoid truncation in browser tabs."
    ]
  },
  {
    pattern: /^<meta/i,
    notes: [
      "Set charset early and include a meaningful description meta tag for better snippet quality.",
      "Use viewport meta on responsive pages to control mobile scaling."
    ]
  },
  {
    pattern: /^<link/i,
    notes: [
      "Use rel values accurately, such as stylesheet, icon, or preload, to avoid loading mistakes.",
      "Keep critical stylesheets near the top of head for faster visual rendering."
    ]
  },
  {
    pattern: /^<style/i,
    notes: [
      "Useful for prototypes or component-scoped demos when external files are unnecessary.",
      "Move long CSS blocks into external files for maintainability."
    ]
  },
  {
    pattern: /<h[1-6]>/i,
    notes: [
      "Build a logical heading outline so users and search crawlers understand page structure.",
      "Use one clear h1 topic, then descend levels without skipping meaningfully."
    ]
  },
  {
    pattern: /^<p/i,
    notes: [
      "Use paragraphs for complete thoughts; split long text into short readable blocks.",
      "Avoid using p as a container for headings or lists."
    ]
  },
  {
    pattern: /^<div/i,
    notes: [
      "Use div when no semantic element fits and you need layout or styling hooks.",
      "Pair with class names that describe purpose, not appearance only."
    ]
  },
  {
    pattern: /^<span/i,
    notes: [
      "Wrap only the inline text fragment you want to style, annotate, or script.",
      "Do not use span as a block-level wrapper."
    ]
  },
  {
    pattern: /^<strong/i,
    notes: [
      "Strong conveys importance semantically, not just visual boldness.",
      "Reserve for critical words to keep emphasis meaningful."
    ]
  },
  {
    pattern: /^<em/i,
    notes: [
      "Em conveys stress emphasis and can change sentence meaning for screen readers.",
      "Use sparingly to keep tone clear and intentional."
    ]
  },
  {
    pattern: /^<mark/i,
    notes: [
      "Helpful for highlighting matched search terms or recently updated phrases.",
      "Ensure contrast remains readable with your chosen highlight color."
    ]
  },
  {
    pattern: /^<code/i,
    notes: [
      "Use for inline snippets, commands, and property names inside explanatory text.",
      "For multi-line code, pair with pre for preserved formatting."
    ]
  },
  {
    pattern: /^<a(?=[\s>])/i,
    notes: [
      "Use descriptive link text so users know destination before clicking.",
      "For external tabs, combine target=\"_blank\" with rel=\"noopener noreferrer\"."
    ]
  },
  {
    pattern: /^<img/i,
    notes: [
      "Alt text should describe meaning or function, not just repeat filename.",
      "Set width and height when possible to reduce layout shift."
    ]
  },
  {
    pattern: /^<audio/i,
    notes: [
      "Provide controls unless playback is purely decorative and accessibility-safe.",
      "Consider captions or transcripts when audio carries important information."
    ]
  },
  {
    pattern: /^<video/i,
    notes: [
      "Include controls and consider subtitles/captions for broader accessibility.",
      "Use poster images for a polished loading state."
    ]
  },
  {
    pattern: /^<table/i,
    notes: [
      "Use tables strictly for data relationships, not layout positioning.",
      "Add clear headers in real tables to improve comprehension."
    ]
  },
  {
    pattern: /^<tr/i,
    notes: [
      "Each row represents one record across related columns.",
      "Keep column order consistent across rows."
    ]
  },
  {
    pattern: /^<td/i,
    notes: [
      "Cells hold row data; use colspan and rowspan only when structure truly requires it.",
      "Keep cell content concise so tables stay scan-friendly."
    ]
  },
  {
    pattern: /^<form/i,
    notes: [
      "Group related inputs and keep labels obvious for fast completion.",
      "Choose method based on sensitivity and payload size."
    ]
  },
  {
    pattern: /^<input/i,
    notes: [
      "Pick the most accurate type (email, number, date) for better validation and mobile keyboards.",
      "Use name attributes carefully because they define submitted keys."
    ]
  },
  {
    pattern: /^<button/i,
    notes: [
      "Always set explicit type to avoid accidental form submissions.",
      "Use action-oriented button text, such as Save profile or Search."
    ]
  },
  {
    pattern: /^<details/i,
    notes: [
      "Great for FAQs and expandable notes without custom JavaScript.",
      "Use for optional depth so pages stay uncluttered at first glance."
    ]
  },
  {
    pattern: /^<summary/i,
    notes: [
      "Write concise summaries so users understand hidden content before expanding.",
      "Keep summary first inside details for valid structure."
    ]
  },
  {
    pattern: /^<script/i,
    notes: [
      "Use defer for non-blocking scripts loaded in head on most content-heavy pages.",
      "Keep inline scripts minimal and favor separate files for maintainability."
    ]
  },
  {
    pattern: /^<noscript/i,
    notes: [
      "Provide fallback messaging or links when JavaScript features are unavailable.",
      "Use for critical user guidance, not duplicated full UI."
    ]
  },
  {
    pattern: /^<ul/i,
    notes: [
      "Use unordered lists for groups where sequence is not essential.",
      "Class names on ul make it easy to style grouped items consistently."
    ]
  },
  {
    pattern: /^display:\s*flex/i,
    notes: [
      "Use flex for one-dimensional alignment where items flow in row or column.",
      "Pair with gap to avoid margin hacks between children."
    ]
  },
  {
    pattern: /^display:\s*grid/i,
    notes: [
      "Grid is ideal for two-dimensional layouts like card galleries and dashboards.",
      "Use auto-fit with minmax for responsive card wrapping."
    ]
  },
  {
    pattern: /^@media/i,
    notes: [
      "Start with a mobile-friendly baseline and layer breakpoint enhancements.",
      "Prefer content-driven breakpoints over device-specific values."
    ]
  },
  {
    pattern: /^transition/i,
    notes: [
      "Transition only properties that are inexpensive to animate, like transform and opacity.",
      "Keep durations short so interactions feel snappy."
    ]
  },
  {
    pattern: /^document\.queryselector/i,
    notes: [
      "Cache frequently used selectors when possible to avoid repeated DOM lookups.",
      "Prefer specific selectors for predictable behavior."
    ]
  },
  {
    pattern: /^addeventlistener/i,
    notes: [
      "Use event delegation for large dynamic lists to reduce listener overhead.",
      "Remember to clean up listeners when elements are removed in complex apps."
    ]
  },
  {
    pattern: /^intersectionobserver/i,
    notes: [
      "Efficiently powers reveal effects and lazy behavior without scroll loops.",
      "Tune threshold and rootMargin to match UX expectations."
    ]
  }
];

const categorySearchTags = {
  "document-structure": [
    "semantic layout",
    "page structure",
    "landmarks",
    "document outline",
    "content hierarchy"
  ],
  "metadata-head": [
    "seo",
    "meta tags",
    "head tags",
    "browser tab title",
    "charset"
  ],
  "text-content": [
    "headings",
    "paragraphs",
    "containers",
    "content blocks",
    "text hierarchy"
  ],
  "inline-semantics": [
    "text emphasis",
    "inline formatting",
    "highlighting",
    "code snippets",
    "semantic text"
  ],
  "links-navigation": [
    "hyperlinks",
    "internal links",
    "external links",
    "anchors",
    "routing"
  ],
  "media-embedded": [
    "images",
    "audio",
    "video",
    "embedded media",
    "alt text"
  ],
  tables: [
    "tabular data",
    "rows and cells",
    "table layout",
    "structured data",
    "data display"
  ],
  forms: [
    "user input",
    "form controls",
    "submission",
    "validation",
    "interactive inputs"
  ],
  "interactive-elements": [
    "accordion",
    "expandable content",
    "native interaction",
    "details summary",
    "progressive disclosure"
  ],
  "scripting-programming": [
    "javascript",
    "client scripting",
    "defer async",
    "fallback content",
    "noscript"
  ],
  "appendix-snippets": [
    "profile section",
    "class styling",
    "example snippets",
    "list styling",
    "sample markup"
  ],
  "css-core-properties": [
    "styling basics",
    "colors and shadows",
    "spacing",
    "visual design",
    "css properties"
  ],
  "css-layout-responsive": [
    "flexbox",
    "css grid",
    "responsive breakpoints",
    "media queries",
    "animation and transitions"
  ],
  "javascript-language-core": [
    "js syntax",
    "arrays and functions",
    "template literals",
    "safe operators",
    "data transformation"
  ],
  "javascript-dom-events": [
    "dom manipulation",
    "event listeners",
    "browser apis",
    "async fetch",
    "intersection observer"
  ]
};

const elementAliasTags = {
  "!doctype": ["doctype", "document type", "standards mode", "quirks mode"],
  html: ["root element", "language setting", "document root", "rtl", "ltr"],
  head: ["metadata", "seo metadata", "resource hints", "page metadata"],
  body: ["visible content", "page body", "ui container"],
  header: ["masthead", "top section", "intro area"],
  nav: ["menu", "site navigation", "navigation links"],
  main: ["primary content", "main landmark", "core page area"],
  section: ["content section", "topic grouping", "logical block"],
  article: ["standalone content", "blog post", "news item"],
  aside: ["sidebar", "related links", "supplementary content"],
  footer: ["page footer", "legal links", "bottom area"],
  title: ["tab title", "page title", "browser title"],
  meta: ["meta info", "seo meta", "description tag", "viewport tag"],
  link: ["stylesheet link", "favicon", "external resource"],
  style: ["embedded css", "inline stylesheet", "component styles"],
  h1: ["headings", "title levels", "document outline"],
  h2: ["subheading", "section heading", "heading level"],
  h3: ["subsection heading", "heading depth", "topic heading"],
  p: ["text paragraph", "body copy", "content text"],
  div: ["generic block", "layout wrapper", "container"],
  span: ["inline wrapper", "inline text", "text hook"],
  strong: ["importance", "bold emphasis", "semantic strength"],
  em: ["stress emphasis", "italic emphasis", "text stress"],
  mark: ["highlight", "search highlight", "marked text"],
  code: ["inline code", "snippet", "monospace text"],
  a: ["anchor", "hyperlink", "clickable link", "href"],
  img: ["image", "picture", "photo", "alt text"],
  audio: ["sound", "media playback", "audio controls"],
  video: ["movie", "media playback", "video controls"],
  table: ["data table", "grid data", "table structure"],
  tr: ["table row", "record row", "row data"],
  td: ["table cell", "cell value", "data cell"],
  form: ["form submission", "input group", "user form"],
  input: ["text field", "form input", "data entry"],
  button: ["click action", "submit button", "ui button"],
  details: ["accordion", "expandable panel", "toggle content"],
  summary: ["accordion title", "toggle label", "disclosure heading"],
  script: ["javascript file", "client js", "js execution"],
  noscript: ["no js fallback", "javascript disabled", "fallback message"],
  ul: ["unordered list", "bullet list", "list items"],
  color: ["text color", "font color", "foreground color"],
  background: ["background color", "gradient", "background image"],
  padding: ["inner spacing", "content spacing", "spacing inside"],
  margin: ["outer spacing", "layout spacing", "element gap"],
  "border-radius": ["rounded corners", "soft corners", "radius"],
  "box-shadow": ["drop shadow", "card depth", "elevation"],
  display: ["layout mode", "flex", "grid"],
  position: ["sticky header", "absolute positioning", "layout positioning"],
  transition: ["hover animation", "state animation", "smooth effect"],
  "@media": ["breakpoints", "responsive css", "mobile styles"],
  "@keyframes": ["css animation", "motion timeline", "animated effects"],
  const: ["constant variable", "immutable binding", "block scope"],
  function: ["js function", "reusable logic", "utility"],
  array: ["list methods", "map filter", "data arrays"],
  template: ["string interpolation", "dynamic strings", "backticks"],
  optional: ["safe access", "nullish fallback", "defensive code"],
  document: ["dom query", "selectors", "page elements"],
  addeventlistener: ["event handling", "click events", "input events"],
  classlist: ["css class toggle", "state class", "dynamic styling"],
  intersectionobserver: ["viewport observer", "reveal on scroll", "lazy behavior"],
  fetch: ["api request", "http request", "async data loading"],
  json: ["serialization", "parse stringify", "api payload"]
};

const starterSearchTags = [
  "semantic html",
  "accessibility",
  "seo",
  "forms",
  "media",
  "navigation",
  "tables",
  "javascript",
  "headings",
  "alt text",
  "metadata",
  "buttons",
  "accordion",
  "page structure",
  "input validation",
  "hyperlinks",
  "code snippets",
  "responsive",
  "flexbox",
  "css grid",
  "animations",
  "dom events",
  "fetch api"
];

const searchInput = document.querySelector("#searchInput");
const clearSearchBtn = document.querySelector("#clearSearch");
const resultInfo = document.querySelector("#resultInfo");
const contentSections = document.querySelector("#contentSections");
const categoryChips = document.querySelector("#categoryChips");
const totalElementsEl = document.querySelector("#totalElements");
const totalCategoriesEl = document.querySelector("#totalCategories");
const lastUpdatedEl = document.querySelector("#lastUpdated");

let revealObserver = null;

function escapeHtml(input) {
  const text = input ?? "";
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("\"", "&quot;")
    .replaceAll("'", "&#39;");
}

function getPrimaryTag(elementName) {
  const normalizedName = (elementName ?? "").trim().toLowerCase();
  if (normalizedName.startsWith("<!doctype")) {
    return "!doctype";
  }
  const tagMatch = normalizedName.match(/<\s*([a-z0-9-]+)/i);
  if (tagMatch) {
    return tagMatch[1].toLowerCase();
  }
  const tokenMatch = normalizedName.match(/[@a-z][a-z0-9.-]*/i);
  return tokenMatch ? tokenMatch[0].toLowerCase() : "";
}

function getExtraSearchTags(category, element) {
  const primaryTag = getPrimaryTag(element.name);
  const basePrimaryTag = primaryTag.split(/[.:]/)[0];
  const categoryTags = categorySearchTags[category.id] ?? [];
  const aliasTags = [
    ...(elementAliasTags[primaryTag] ?? []),
    ...(elementAliasTags[basePrimaryTag] ?? [])
  ];
  const attributeTags = (element.attributes ?? "")
    .split(",")
    .map((part) => part.trim().toLowerCase())
    .filter((part) => part && part !== "none" && part !== "global attributes");
  const simplifiedName = element.name
    .replaceAll("<", " ")
    .replaceAll(">", " ")
    .replaceAll("/", " ")
    .replaceAll("\"", " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();

  return [...categoryTags, ...aliasTags, ...attributeTags, simplifiedName];
}

function buildSearchText(category, element) {
  const detailedNotes = getDetailedUsageNotes(category.title, element).join(" ");
  const extraTags = getExtraSearchTags(category, element).join(" ");
  return [
    category.title,
    element.name,
    element.syntax,
    element.purpose,
    element.functionText,
    element.attributes,
    element.example,
    element.notes,
    detailedNotes,
    extraTags
  ]
    .join(" ")
    .toLowerCase();
}

function getDetailedUsageNotes(categoryTitle, element) {
  const cleanCategoryTitle = categoryTitle.replace(/^\d+\.\s*/, "");
  const hasAttributes = element.attributes.toLowerCase() !== "none";
  const genericNotes = [
    `Function insight: ${element.functionText}`,
    `Usage context: In ${cleanCategoryTitle}, this concept is typically combined with related patterns to keep implementation clear and maintainable.`,
    hasAttributes
      ? `Setup tip: Configure ${element.attributes} intentionally because these attributes directly change behavior.`
      : "Setup tip: This element has no dedicated attributes, so correctness depends mostly on placement and document structure."
  ];

  const libraryMatch = detailedUsageLibrary.find((item) => {
    return item.pattern.test(element.name);
  });

  const specificNotes = libraryMatch ? libraryMatch.notes : [];
  return [...genericNotes, ...specificNotes];
}

function getCategoryDomain(categoryId) {
  if (categoryId.startsWith("css-")) {
    return "css";
  }
  if (categoryId.startsWith("javascript-")) {
    return "js";
  }
  return "html";
}

function getDomainLabel(domain) {
  if (domain === "css") {
    return "CSS";
  }
  if (domain === "js") {
    return "JavaScript";
  }
  return "HTML";
}

function renderCategoryChips() {
  categoryChips.innerHTML = guideData.categories
    .map((category) => {
      const domain = getCategoryDomain(category.id);
      const domainLabel = getDomainLabel(domain);
      return `
        <a class="chip chip-${domain}" href="#${category.id}">
          <span>${escapeHtml(category.title)}</span>
          <span class="chip-domain">${escapeHtml(domainLabel)}</span>
          <span class="chip-count">${category.elements.length}</span>
        </a>
      `;
    })
    .join("");
}

function renderSearchPrompt() {
  const suggestionButtons = starterSearchTags
    .map((tag) => {
      const safeTag = escapeHtml(tag);
      return `<button type="button" class="suggest-tag" data-search="${safeTag}">${safeTag}</button>`;
    })
    .join("");

  contentSections.innerHTML = `
    <article class="search-hint">
      <h2>Start with a search to reveal stack cards</h2>
      <p>HTML, CSS, and JavaScript cards stay hidden until you search. Try a quick tag:</p>
      <div class="tag-suggestions">
        ${suggestionButtons}
      </div>
    </article>
  `;
}

function renderCategories(query = "") {
  const normalizedQuery = query.trim().toLowerCase();
  let visibleElementCount = 0;
  let visibleCategoryCount = 0;

  if (!normalizedQuery) {
    renderSearchPrompt();
    resultInfo.textContent =
      "Cards are hidden until you search. Enter a keyword or tap a suggested tag.";
    return;
  }

  const sectionsHtml = guideData.categories
    .map((category) => {
      const domain = getCategoryDomain(category.id);
      const domainLabel = getDomainLabel(domain);
      const matchingElements = category.elements.filter((element) => {
        if (!normalizedQuery) {
          return true;
        }
        return buildSearchText(category, element).includes(normalizedQuery);
      });

      if (matchingElements.length === 0) {
        return "";
      }

      visibleCategoryCount += 1;
      visibleElementCount += matchingElements.length;

      const cardsHtml = matchingElements
        .map((element) => {
          const isExactNameHit =
            normalizedQuery && element.name.toLowerCase().includes(normalizedQuery);
          const detailedNotes = getDetailedUsageNotes(category.title, element);
          const detailedNotesHtml = detailedNotes
            .map((note) => `<li>${escapeHtml(note)}</li>`)
            .join("");

          return `
            <article class="element-card element-card-${domain} ${isExactNameHit ? "match-hit" : ""}">
              <h4>${escapeHtml(element.name)}</h4>
              <span class="syntax-pill">${escapeHtml(element.syntax)}</span>
              <p class="detail"><strong>Purpose:</strong> ${escapeHtml(
                element.purpose
              )}</p>
              <p class="detail"><strong>Function:</strong> ${escapeHtml(
                element.functionText
              )}</p>
              <p class="detail"><strong>Attributes:</strong> ${escapeHtml(
                element.attributes
              )}</p>
              <p class="code-example">${escapeHtml(element.example)}</p>
              <p class="detail"><strong>Notes:</strong> ${escapeHtml(
                element.notes
              )}</p>
              <details class="deep-notes">
                <summary>How it works in real projects</summary>
                <ul class="note-list">
                  ${detailedNotesHtml}
                </ul>
              </details>
            </article>
          `;
        })
        .join("");

      return `
        <section class="category-section category-section-${domain}" id="${category.id}">
          <div class="category-title-row">
            <div class="category-title-main">
              <h2>${escapeHtml(category.title)}</h2>
              <span class="tech-badge tech-badge-${domain}">${escapeHtml(
                domainLabel
              )}</span>
            </div>
            <p>${matchingElements.length} item(s)</p>
          </div>
          <div class="cards-grid">
            ${cardsHtml}
          </div>
        </section>
      `;
    })
    .join("");

  if (!sectionsHtml) {
    contentSections.innerHTML = `
      <article class="no-results">
        No matches found for "${escapeHtml(query)}". Try another keyword.
      </article>
    `;
    resultInfo.textContent = "0 entries found across 0 categories.";
    setupRevealAnimation();
    return;
  }

  contentSections.innerHTML = sectionsHtml;
  resultInfo.textContent = `${visibleElementCount} entries found across ${visibleCategoryCount} categories.`;
  setupRevealAnimation();
}

function setupStats() {
  const totalElements = guideData.categories.reduce((sum, category) => {
    return sum + category.elements.length;
  }, 0);

  totalElementsEl.textContent = String(totalElements);
  totalCategoriesEl.textContent = String(guideData.categories.length);
  lastUpdatedEl.textContent = guideData.lastUpdated;
}

function setupRevealAnimation() {
  if (revealObserver) {
    revealObserver.disconnect();
  }

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll(".category-section").forEach((section) => {
    revealObserver.observe(section);
  });
}

function initializeSearch() {
  searchInput.addEventListener("input", (event) => {
    renderCategories(event.target.value);
  });

  clearSearchBtn.addEventListener("click", () => {
    searchInput.value = "";
    searchInput.focus();
    renderCategories("");
  });

  contentSections.addEventListener("click", (event) => {
    const tagButton = event.target.closest(".suggest-tag");
    if (!tagButton) {
      return;
    }
    const selectedTag = tagButton.dataset.search ?? "";
    searchInput.value = selectedTag;
    searchInput.focus();
    renderCategories(selectedTag);
  });
}

function init() {
  renderCategoryChips();
  setupStats();
  renderCategories("");
  initializeSearch();
}

init();
