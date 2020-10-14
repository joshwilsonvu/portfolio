export const head = {
  title: "Josh Wilson | Software Engineer",
  lang: "en",
  description:
    "A home page for my projects, experience, and other information about me.",
};
export const hero = {
  title: "Hi! I'm",
  name: "Josh Wilson",
  makeThings: ["websites", "music", "gadgets", "experiences"],
};
export const about = {
  img: "profile.jpg",
  paragraphs: [
    `I'm a software engineer who does a bit of everything.`,
    `I got started programming on my TI-84 graphing calculator. From the moment I got my Galaga clone working,
    I was hooked.`,
    `I've been working with software for about 6 years and constantly learning new things. I've worked all
    the way down to assembly language and up to bleeding-edge JavaScript and TypeScript, so I know computers
    inside and out.`,
    `What fascinates me is the way software can augment our other experiences. Like many musicians and music
    producers, I'm always looking for interesting sounds. I've studied generating classic and experimental
    sounds with code, and I made it happen from scratch.`,
    `I'm deeply interested in pushing the limits of what we can do with software. I'm looking for a full-time
    role where we can make that happen.`,
  ],
  resume: "/Resume.pdf",
};

export const projects = [
  {
    id: 1,
    img: "magicmirror.jpg",
    title: "MagicMirror",
    paragraphs: [
      `I've spent the last few months transitioning the popular project MagicMirror to use React and Snowpack.`,
      `Though hobbyists could make custom modules for their smart mirror with JavaScript, there was no detection
      of errors before runtime, and viewing changes took 20 seconds or more.`,
      `I put in the infrastructure for hobbyists to make resilient modules with React and the latest JavaScript
      features, with linting, hot module reloading, and other goodies. Now, changes appear instantly and code
      quality is improved by default. Legacy code is seamlessly integrated for backwards compatibility.`,
    ],
    //url: "https://example.com",
    repo: "https://github.com/joshwilsonvu/MagicMirror",
  },
  {
    id: 2,
    img: "simulation.jpg",
    title: "Audio Processing",
    paragraphs: [
      `I have a soft spot for music applications. Recently, support for high-performance audio processing landed
      in Chrome, and I put together a playable keyboard that simulates plucked strings in real time in the browser.`,
      `After the first iteration, I came up with an ideal API for audio processing—using ES6 generator functions,
      the most obscure functions of all. I extracted the functionality to a separate package, published it, and
      hooked it into the application.`,
      `Since then, I've published more packages, making sure they're well-tested and well-documented, so other
      developers who run into the same problems I have can reuse my solutions.`,
    ],
    url: "https://music-simulation.netlify.app/",
    repo: "https://github.com/joshwilsonvu/simulation",
  },
];
export const contact = {
  cta: "Let's get in touch.",
};
export const footer = {
  email: {
    href: "mailto:joshwilsonvu@gmail.com",
    handle: "joshwilsonvu@gmail.com",
  },
  twitter: {
    href: "https://twitter.com/joshwilsonvu",
    handle: "@joshwilsonvu",
  },
  github: {
    href: "https://github.com/joshwilsonvu",
    handle: "@joshwilsonvu",
  },
  linkedin: {
    href: "https://www.linkedin.com/in/joshua-wilson-915192127/",
    handle: "Joshua Wilson",
  },
};
