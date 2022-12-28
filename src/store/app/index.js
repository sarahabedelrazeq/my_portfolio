import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_THEME, DEFAULT_LANGUAGE } from "constants";

const initialState = {
  language: DEFAULT_LANGUAGE,
  theme: DEFAULT_THEME,
  frontEnd: JSON.stringify([
    {
      title: "Internet",
      children: [
        {
          title: "DNS",
        },
        {
          title: "Domain Name",
          text: "",
        },
        {
          title: "Hosting",
          text: "Hi, I’m Tony Messer & in this video I’m going to explain everything you need to know about web hosting.\n\nAt the end of this video you’ll have all the information you need to make an informed decision when you come to buy a hosting service.\n\nOK, so the basics. Web Hosting is the home of your website. If you want a website you’ll need somewhere to host it. That’s exactly what a hosting service is.\n\nThere are different types of web hosting like shared hosting , reselle hostingr, Virtual Private Servers & Dedicated Servers.\n\nBut in this video I’ll cover shared hosting which is the most popular & most affordable type of hosting.\n\nCheck our web hosting plans at https://www.pickaweb.co.uk/web-hosting/\n\nSo hosting is basically the computer & network infrastructure that keeps your website available across the internet.\n\nIt also provides other key services like email for you.\n\nSo how does it all work?\n\nWell it all starts with a server. A server is basically a powerful computer that is kept in a highly secure, purpose built, multi-million pound facility called a datacentre.\n\nThe datacentre provides the necessary power and network connectivity with temperature control, backup & fire suppression systems and high levels of physical security.\n\nSecurity is also important at the server level so the server is built with things like dual parts for critical components like hard disks so there is no single point of failure.\n\nThis is so that your website will always be available.\n\nSo when you order a hosting service what you’re ordering is the physical disk space on one of the servers as well as the bandwidth which is the network connection to the server.\n\nMost of the time you will see hosting advertised in terms of Disk space and Bandwidth and is measured in GigaBytes like 5GB of space and 100GB of bandwidth.\n\nThe diskspace covers your website files including things like databases as well as your emails.\n\nThe monthly bandwidth is the network traffic to and from your web hosting and most of this will be email traffic that you send and receive but it will also include traffic to your website.\n\nIn order to manage your web hosting you’ll need a user friendly interface called a Control Panel. ",
        },
        {
          title: "Internet",
        },
        {
          title: "What is HTTP?",
          text: "What is HTTP?\nThe Hypertext Transfer Protocol (HTTP) is the foundation of the World Wide Web, and is used to load webpages using hypertext links. HTTP is an application layer protocol designed to transfer information between networked devices and runs on top of other layers of the network protocol stack. A typical flow over HTTP involves a client machine making a request to a server, which then sends a response message.\n\nWhat is in an HTTP request?\nAn HTTP request is the way Internet communications platforms such as web browsers ask for the information they need to load a website.\n\nEach HTTP request made across the Internet carries with it a series of encoded data that carries different types of information. A typical HTTP request contains:\n\nHTTP version type\na URL\nan HTTP method\nHTTP request headers\nOptional HTTP body.\nLet’s explore in greater depth how these requests work, and how the contents of a request can be used to share information.\n\nWhat is an HTTP method?\nAn HTTP method, sometimes referred to as an HTTP verb, indicates the action that the HTTP request expects from the queried server. For example, two of the most common HTTP methods are ‘GET’ and ‘POST’; a ‘GET’ request expects information back in return (usually in the form of a website), while a ‘POST’ request typically indicates that the client is submitting information to the web server (such as form information, e.g. a submitted username and password).\n\nWhat are HTTP request headers?\nHTTP headers contain text information stored in key-value pairs, and they are included in every HTTP request (and response, more on that later). These headers communicate core information, such as what browser the client is using and what data is being requested.\n\nExample of HTTP request headers from Google Chrome's network tab:\n\n",
        },
        {
          title: "Browsers",
        },
      ],
      text: "5 Exhibits from data a day \ninternet main cables length 130km - 19000km\nabout 60 percent of residential internet connections in the United States are provided by cable TV companies such as Comcast and Time Warner. \nfiber optic cables\nDSL (Digital Subscriber Line)\nA technology for high-speed network or Internet access over voice lines. There are various types, including asymmetric DSL (ADSL), high-bit-rate DSL (HDSL), symmetric DSL (SDSL) and very-high-bit-rate DSL (VDSL). The whole group is sometimes referred to as “xDSL.\n\nFor example, Google, Facebook, and Microsoft have all constructed vast data centers in Iowa. \n\nEstablishing a presence at IEPs ( internet exchange points ) makes it much easier for backbone providers to improve their connections to others.\n\nARPANET The project was led by Bob Taylor, and the network was built by Bolt, Beranek, and Newman consulting firm. It began operations in 1969.  \n\nIn 1973, software engineers Vint Cerf and Bob Kahn began work on the TCP/IP, which became the foundation of the modern internet. ARPANET switched to using TCP/IP on January 1, 1983.\n\nTCP/IP designers Bob Kahn and Vint Cerf \n\nInternet Engineering Task Force\n\nThe Internet Corporation for Assigned Names and Numbers (ICANN) \n\nWhat’s an IP address?\n\nInternet Protocol addresses are numbers that computers use to identify each other on the internet. For example, an IP address for vox.com is 216.146.46.10.\n\nAn ICANN department known as the Internet Assigned Numbers Authority is responsible for distributing IP addresses to ensure that two different organizations don’t use the same address.",
    },
    {
      title: "HTML",
      children: [
        {
          title: "Semantic HTML",
          text: "-Search engines will consider its contents as important keywords to influence the page's search rankings (see SEO)\n-Screen readers can use it as a signpost to help visually impaired users navigate a page\n-Finding blocks of meaningful code is significantly easier than searching through endless divs with or without semantic or namespaced classes\n-Suggests to the developer the type of data that will be populated\n-Semantic naming mirrors proper custom element/component naming\n\nSemantic elements in HTML:\n<article>\n<aside>\n<details>\n<figcaption>\n<figure>\n<footer>\n<header>\n<main>\n<mark>\n<nav>\n<section>\n<summary>\n<time>",
        },
        {
          title: "Forms and Validations",
          text: "Grouping form controls #\nSometimes you need to group form controls. You can use the <fieldset> element to do that.\n\nEvery <fieldset> element requires a <legend> element, just as every form control needs an associated <label> element. The <legend> also has to be the very first element in the <fieldset>. After the <legend> element, you can define the form controls which should be part of the group.\n\naria-describedby\n\npattern\n\nhttps://web.dev/learn/forms/testing/#does-your-form-work-on-other-devices // for more",
        },
        {
          title: "Best Practices",
          text: "https://github.com/hail2u/html-best-practices",
        },
        {
          title: "Accessibility",
        },
        {
          title: "Basics of SEO",
        },
      ],
    },
    {
      title: "CSS",
      children: [],
    },
    {
      title: "JavaScript",
      children: [
        {
          title: "DOM Manipulation",
        },
        {
          title: "Fetch API",
        },
        {
          title: "Modern JavaScript",
        },
        {
          title: "JavaScript Concepts",
          text: "JavaScript Hoisting:\nmove the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.\n\nconst, and let not hosted\n\n___________________________________________________________________________________________\nhttps://javascript.info/bubbling-and-capturing\nEvent Bubbling and Capturing\n\n\nhttps://developer.mozilla.org/en-US/docs/Glossary/Scope\nScope in JavaScript\n\nhttps://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/\nVar, Let and Const — What's the difference?\n\n\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain\nInheritance and Prototype Chain\n\n\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode\nJavaScript Strict Mode\n\nhttps://dev.to/lydiahallie/javascript-visualized-event-loop-3dif\nJavaScript Visualized (7 Part Series)\n\nhttps://www.youtube.com/watch?v=7Tok22qxPzQ\nDOM vs Shadow DOM vs\nVirtual DOM\n\nhttps://blog.greenroots.info/series/javascript-promises\nDemystifying JavaScript Promises\n",
        },
      ],
    },
    {
      title: "Version Control Systems",
      children: [],
    },
    {
      title: "Web Security Knowledge",
      children: [],
    },
    {
      title: "Package Managers",
      children: [],
    },
    {
      title: "CSS Architecture",
      children: [],
    },
    {
      title: "CSS Architecture",
      children: [],
    },
    {
      title: "Build Tools",
      children: [],
    },
    {
      title: "Pick a Framework",
      children: [],
      text: "React",
    },
  ]),
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    switchLanguage: (state, action) => {
      state.language = action.payload;
    },
    switchTheme: (state, action) => {
      state.theme = action.payload;
    },
    changeFrontEnd: (state, action) => {
      state.frontEnd = JSON.stringify([...action.payload]);
    },
  },
});

export const { switchLanguage, switchTheme, changeFrontEnd } = appSlice.actions;
export default appSlice.reducer;
