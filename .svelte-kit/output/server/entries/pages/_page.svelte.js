import { c as create_ssr_component, e as escape, d as add_attribute, f as each, v as validate_component, g as getContext, a as setContext } from "../../chunks/ssr.js";
const Meta = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "Title TK" } = $$props;
  let { description = "Description TK" } = $$props;
  let { url = "https://pudding.cool" } = $$props;
  let { keywords = "" } = $$props;
  let { preloadFont = [] } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  if ($$props.keywords === void 0 && $$bindings.keywords && keywords !== void 0)
    $$bindings.keywords(keywords);
  if ($$props.preloadFont === void 0 && $$bindings.preloadFont && preloadFont !== void 0)
    $$bindings.preloadFont(preloadFont);
  return `${$$result.head += `<!-- HEAD_svelte-1htu80s_START -->${$$result.title = `<title>${escape(title)}</title>`, ""}<meta name="description"${add_attribute("content", description, 0)}><meta name="author" content="The Pudding"><meta name="news_keywords"${add_attribute("content", keywords, 0)}><meta property="og:title"${add_attribute("content", title, 0)}><meta property="og:site_name" content="The Pudding"><meta property="og:url"${add_attribute("content", url, 0)}><meta property="og:description"${add_attribute("content", description, 0)}><meta property="og:type" content="article"><meta property="og:locale" content="en_US"><meta property="og:image" content="${escape(url, true) + "/assets/social-facebook.jpg"}"><meta property="og:image:type" content="image/jpeg"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="600"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:site" content="https://pudding.cool"><meta name="twitter:creator" content="@puddingviz"><meta name="twitter:title"${add_attribute("content", title, 0)}><meta name="twitter:description"${add_attribute("content", description, 0)}><meta name="twitter:image:src" content="${escape(url, true) + "/assets/social-twitter.jpg"}"><meta name="robots" content="max-image-preview:large"><link rel="canonical" href="${escape(url, true) + "/"}">${each(preloadFont, (href) => {
    return `<link rel="preload"${add_attribute("href", href, 0)} as="font" type="font/woff2" crossorigin>`;
  })}<!-- HEAD_svelte-1htu80s_END -->`, ""}`;
});
const Scrolly = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { root = null } = $$props;
  let { top = 0 } = $$props;
  let { bottom = 0 } = $$props;
  let { increments = 100 } = $$props;
  let { value = void 0 } = $$props;
  const steps = [];
  const threshold = [];
  let nodes = [];
  let intersectionObservers = [];
  let container;
  const update = () => {
    if (!nodes.length)
      return;
    nodes.forEach(createObserver);
  };
  const mostInView = () => {
    let maxRatio = 0;
    let maxIndex = 0;
    for (let i = 0; i < steps.length; i++) {
      if (steps[i] > maxRatio) {
        maxRatio = steps[i];
        maxIndex = i;
      }
    }
    if (maxRatio > 0)
      value = maxIndex;
    else
      value = void 0;
  };
  const createObserver = (node, index) => {
    const handleIntersect = (e) => {
      e[0].isIntersecting;
      const ratio = e[0].intersectionRatio;
      steps[index] = ratio;
      mostInView();
    };
    const marginTop = top ? top * -1 : 0;
    const marginBottom = bottom ? bottom * -1 : 0;
    const rootMargin = `${marginTop}px 0px ${marginBottom}px 0px`;
    const options = { root, rootMargin, threshold };
    if (intersectionObservers[index])
      intersectionObservers[index].disconnect();
    const io = new IntersectionObserver(handleIntersect, options);
    io.observe(node);
    intersectionObservers[index] = io;
  };
  if ($$props.root === void 0 && $$bindings.root && root !== void 0)
    $$bindings.root(root);
  if ($$props.top === void 0 && $$bindings.top && top !== void 0)
    $$bindings.top(top);
  if ($$props.bottom === void 0 && $$bindings.bottom && bottom !== void 0)
    $$bindings.bottom(bottom);
  if ($$props.increments === void 0 && $$bindings.increments && increments !== void 0)
    $$bindings.increments(increments);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  {
    update();
  }
  return `<div${add_attribute("this", container, 0)}>${slots.default ? slots.default({}) : ``}</div>`;
});
const TESEX = {
  "1": "male",
  "2": "female"
};
const PEEDUCA = {
  "31": "1st grade or less",
  "32": "1st to 4th grade",
  "33": "5th or 6th grade",
  "34": "7th or 8th grade",
  "35": "9th grade",
  "36": "10th grade",
  "37": "11th grade",
  "38": "12th grade - no diploma",
  "39": "High school grad or GED",
  "40": "Some college",
  "41": "Associate degree",
  "42": "Associate degree",
  "43": "Bachelor's degree",
  "44": "Master's degree",
  "45": "Professional degree",
  "46": "Doctoral degree"
};
const PTDTRACE = {
  "1": "white",
  "2": "Black",
  "3": "Am. Indian, Alaskan Native",
  "4": "Asian",
  "5": "Hawaiian/Pacific Islander",
  "6": "White-Black",
  "7": "White-American Indian",
  "8": "White-Asian",
  "9": "White-Hawaiian",
  "10": "Black-American Indian",
  "11": "Black-Asian",
  "12": "Black-Hawaiian",
  "13": "American Indian-Asian",
  "14": "Asian-Hawaiian or Am. Indian-Hawaiian",
  "15": "White-Black-American Indian or Asian-Hawaiian",
  "16": "White-Black-Asian or White-Black-American Indian",
  "17": "White-American Indian-Asian or White-Black-Asian",
  "18": "White-Asian-Hawaiian or White-Black-Hawaiian",
  "19": "White-Black-American Indian-Asian or White-American Indian-Asian",
  "20": "2 or 3 races or White-American Indian-Hawaiian",
  "21": "4 or 5 races or White-Asian-Hawaiian",
  "22": "Black-American Indian-Asian",
  "23": "White-Black-American Indian-Asian",
  "24": "White-American Indian-Asian-Hawaiian",
  "25": "Other 3 race combinations"
};
const WEGENHTH = {
  "1": "Excellent",
  "2": "Very Good",
  "3": "Good",
  "4": "Fair",
  "5": "Poor"
};
const WEYesNo = {
  "1": "Yes",
  "2": "No"
};
const WEREST = {
  "1": "Very",
  "2": "Somewhat",
  "3": "A little",
  "4": "A lot"
};
const WETYPICAL = {
  "1": "Better",
  "2": "The same",
  "3": "Worse"
};
const PEHSPNON = {
  "1": "Hispanic",
  "2": "Non-Hispanic"
};
const TRDTIND1 = {
  "1": "Agriculture",
  "2": "Forestry, logging, fishing, hunting, and trapping",
  "3": "Mining",
  "4": "Construction",
  "5": "Nonmetallic mineral products",
  "6": "Primary metals and fabricated metal products",
  "7": "Machinery manufacturing",
  "8": "Computer and electronic products",
  "9": "Electrical equipment, appliance manufacturing",
  "10": "Transportation equipment manufacturing",
  "11": "Wood products",
  "12": "Furniture and fixtures manufacturing",
  "13": "Miscellaneous and not specified manufacturing",
  "14": "Food manufacturing",
  "15": "Beverage and tobacco products",
  "16": "Textile, apparel, and leather manufacturing",
  "17": "Paper and printing",
  "18": "Petroleum and coal products",
  "19": "Chemical manufacturing",
  "20": "Plastics and rubber products",
  "21": "Wholesale trade",
  "22": "Retail trade",
  "23": "Transportation and warehousing",
  "24": "Utilities",
  "25": "Publishing industries (except internet)",
  "26": "Motion picture and sound recording industries",
  "27": "Broadcasting (except internet)",
  "28": "Internet publishing and broadcasting",
  "29": "Telecommunications",
  "30": "Internet service providers and data processing services",
  "31": "Other information services",
  "32": "Finance",
  "33": "Insurance",
  "34": "Real estate",
  "35": "Rental and leasing services",
  "36": "Professional and technical services",
  "37": "Management of companies and enterprises",
  "38": "Administrative and support services",
  "39": "Waste management and remediation services",
  "40": "Educational services",
  "41": "Hospitals",
  "42": "Health care services, except hospitals",
  "43": "Social assistance",
  "44": "Arts, entertainment, and recreation",
  "45": "Accommodation",
  "46": "Food services and drinking places",
  "47": "Repair and maintenance",
  "48": "Personal and laundry services",
  "49": "Membership associations and organizations",
  "50": "Private households",
  "51": "Public administration",
  "52": "Armed forces",
  "-1": "--"
};
const TRDPFTPT_x = {
  "1": "Full time",
  "2": "Part time",
  "-1": ""
};
const TUDIARYDAY_x = {
  "1": "Sunday",
  "2": "Monday",
  "3": "Tuesday",
  "4": "Wednesday",
  "5": "Thursday",
  "6": "Friday",
  "7": "Saturday"
};
const ACTIVITY = {
  "10101": {
    task: "Sleeping",
    group: "Personal Care Activities",
    "class": "sleep",
    animClass: "sleeping",
    childclass: "standing",
    otherClass: "sleeping"
  },
  "10102": {
    task: "Sleeplessness",
    group: "Personal Care Activities",
    "class": "sleep",
    animClass: "sleeping",
    childclass: "standing",
    otherClass: "sleeping"
  },
  "10199": {
    task: "Sleeping, n.e.c.*",
    group: "Personal Care Activities",
    "class": "sleep",
    animClass: "sleeping",
    childclass: "standing",
    otherClass: "sleeping"
  },
  "10201": {
    task: "Washing, dressing and grooming oneself",
    group: "Personal Care Activities",
    "class": "personal",
    animClass: "selfcare",
    childclass: "selfcare",
    otherClass: "selfcare"
  },
  "10299": {
    task: "Grooming, n.e.c.*",
    group: "Personal Care Activities",
    "class": "personal",
    animClass: "selfcare",
    childclass: "selfcare",
    otherClass: "selfcare"
  },
  "10301": {
    task: "Health-related self care",
    group: "Personal Care Activities",
    "class": "personal",
    animClass: "selfcare",
    childclass: "selfcare",
    otherClass: "selfcare"
  },
  "10399": {
    task: "Self care, n.e.c.*",
    group: "Personal Care Activities",
    "class": "personal",
    animClass: "selfcare",
    childclass: "selfcare",
    otherClass: "selfcare"
  },
  "10401": {
    task: "Personal/Private activities",
    group: "Personal Care Activities",
    "class": "personal",
    animClass: "sitting",
    childclass: "sitting",
    otherClass: "sitting"
  },
  "10499": {
    task: "Personal activities, n.e.c.*",
    group: "Personal Care Activities",
    "class": "personal",
    animClass: "sitting",
    childclass: "sitting",
    otherClass: "sitting"
  },
  "10501": {
    task: "Personal emergencies",
    group: "Personal Care Activities",
    "class": "personal",
    animClass: "walking",
    childclass: "walking",
    otherClass: "walking"
  },
  "10599": {
    task: "Personal care emergencies, n.e.c.*",
    group: "Personal Care Activities",
    "class": "personal",
    animClass: "walking",
    childclass: "walking",
    otherClass: "walking"
  },
  "19999": {
    task: "Personal care, n.e.c.*",
    group: "Personal Care Activities",
    "class": "personal",
    animClass: "selfcare",
    childclass: "selfcare",
    otherClass: "selfcare"
  },
  "20101": {
    task: "Interior cleaning",
    group: "Household Activities",
    "class": "household",
    animClass: "household",
    childclass: "sports",
    otherClass: "standing"
  },
  "20102": {
    task: "Laundry",
    group: "Household Activities",
    "class": "household",
    animClass: "household",
    childclass: "walking",
    otherClass: "careadult"
  },
  "20103": {
    task: "Sewing, repairing, & maintaining textiles",
    group: "Household Activities",
    "class": "household",
    animClass: "household",
    childclass: "sports",
    otherClass: "social"
  },
  "20104": {
    task: "Storing interior hh items, inc. food",
    group: "Household Activities",
    "class": "household",
    animClass: "household",
    childclass: "sitting",
    otherClass: "eating"
  },
  "20199": {
    task: "Housework, n.e.c.*",
    group: "Household Activities",
    "class": "household",
    animClass: "household",
    childclass: "sitting",
    otherClass: "standing"
  },
  "20201": {
    task: "Food and drink preparation",
    group: "Household Activities",
    "class": "household",
    animClass: "foodprep",
    childclass: "sitting",
    otherClass: "careadult"
  },
  "20202": {
    task: "Food presentation",
    group: "Household Activities",
    "class": "household",
    animClass: "foodprep",
    childclass: "sports",
    otherClass: "social"
  },
  "20203": {
    task: "Kitchen and food clean-up",
    group: "Household Activities",
    "class": "household",
    animClass: "foodprep",
    childclass: "walking",
    otherClass: "standing"
  },
  "20299": {
    task: "Food & drink prep, presentation, & clean-up, n.e.c.*",
    group: "Household Activities",
    "class": "household",
    animClass: "foodprep",
    childclass: "social",
    otherClass: "careadult"
  },
  "20301": {
    task: "Interior arrangement, decoration, & repairs",
    group: "Household Activities",
    "class": "household",
    animClass: "household",
    childclass: "social",
    otherClass: "social"
  },
  "20302": {
    task: "Building and repairing furniture",
    group: "Household Activities",
    "class": "household",
    animClass: "household",
    childclass: "walking",
    otherClass: "eating"
  },
  "20303": {
    task: "Heating and cooling",
    group: "Household Activities",
    "class": "household",
    animClass: "household",
    childclass: "standing",
    otherClass: "standing"
  },
  "20399": {
    task: "Interior maintenance, repair, & decoration, n.e.c.*",
    group: "Household Activities",
    "class": "household",
    animClass: "household",
    childclass: "standing",
    otherClass: "careadult"
  },
  "20401": {
    task: "Exterior cleaning",
    group: "Household Activities",
    "class": "household",
    animClass: "household",
    childclass: "sports",
    otherClass: "social"
  },
  "20402": {
    task: "Exterior repair, improvements, & decoration",
    group: "Household Activities",
    "class": "household",
    animClass: "household",
    childclass: "standing",
    otherClass: "standing"
  },
  "20499": {
    task: "Exterior maintenance, repair & decoration, n.e.c.*",
    group: "Household Activities",
    "class": "household",
    animClass: "household",
    childclass: "sitting",
    otherClass: "careadult"
  },
  "20501": {
    task: "Lawn, garden, and houseplant care",
    group: "Household Activities",
    "class": "household",
    animClass: "household",
    childclass: "sitting",
    otherClass: "social"
  },
  "20502": {
    task: "Ponds, pools, and hot tubs",
    group: "Household Activities",
    "class": "household",
    animClass: "household",
    childclass: "sports",
    otherClass: "eating"
  },
  "20599": {
    task: "Lawn and garden, n.e.c.*",
    group: "Household Activities",
    "class": "household",
    animClass: "household",
    childclass: "walking",
    otherClass: "standing"
  },
  "20681": {
    task: "Care for animals and pets (not veterinary care)",
    group: "Household Activities",
    "class": "household",
    animClass: "pets",
    childclass: "social",
    otherClass: "careadult"
  },
  "20699": {
    task: "Pet and animal care, n.e.c.*",
    group: "Household Activities",
    "class": "household",
    animClass: "pets",
    childclass: "social",
    otherClass: "social"
  },
  "20701": {
    task: "Vehicle repair and maintenance (by self)",
    group: "Household Activities",
    "class": "household",
    animClass: "household",
    childclass: "walking",
    otherClass: "standing"
  },
  "20799": {
    task: "Vehicles, n.e.c.*",
    group: "Household Activities",
    "class": "household",
    animClass: "household",
    childclass: "standing",
    otherClass: "careadult"
  },
  "20801": {
    task: "Appliance, tool, and toy set-up, repair, & maintenance (by self)",
    group: "Household Activities",
    "class": "household",
    animClass: "household",
    childclass: "standing",
    otherClass: "social"
  },
  "20899": {
    task: "Appliances and tools, n.e.c.*",
    group: "Household Activities",
    "class": "household",
    animClass: "household",
    childclass: "sports",
    otherClass: "eating"
  },
  "20901": {
    task: "Financial management",
    group: "Household Activities",
    "class": "household",
    animClass: "household",
    childclass: "standing",
    otherClass: "standing"
  },
  "20902": {
    task: "Household & personal organization and planning",
    group: "Household Activities",
    "class": "household",
    animClass: "household",
    childclass: "sitting",
    otherClass: "careadult"
  },
  "20903": {
    task: "HH & personal mail & messages (except e-mail)",
    group: "Household Activities",
    "class": "household",
    animClass: "workingdesk",
    childclass: "sitting",
    otherClass: "social"
  },
  "20904": {
    task: "HH & personal e-mail and messages",
    group: "Household Activities",
    "class": "household",
    animClass: "workingdesk",
    childclass: "sports",
    otherClass: "standing"
  },
  "20905": {
    task: "Home security",
    group: "Household Activities",
    "class": "household",
    animClass: "household",
    childclass: "walking",
    otherClass: "careadult"
  },
  "20999": {
    task: "Household management, n.e.c.*",
    group: "Household Activities",
    "class": "household",
    animClass: "household",
    childclass: "social",
    otherClass: "social"
  },
  "29999": {
    task: "Household activities, n.e.c.*",
    group: "Household Activities",
    "class": "household",
    animClass: "household",
    childclass: "social",
    otherClass: "eating"
  },
  "30101": {
    task: "Physical care for hh children",
    group: "Caring For & Helping Household (HH) Members",
    "class": "caringhh",
    animClass: "carekids",
    childclass: "social",
    otherClass: "standing"
  },
  "30102": {
    task: "Reading to/with hh children",
    group: "Caring For & Helping Household (HH) Members",
    "class": "caringhh",
    animClass: "carekids",
    childclass: "social",
    otherClass: "careadult"
  },
  "30103": {
    task: "Playing with hh children, not sports",
    group: "Caring For & Helping Household (HH) Members",
    "class": "caringhh",
    animClass: "carekids",
    childclass: "social",
    otherClass: "social"
  },
  "30104": {
    task: "Arts and crafts with hh children",
    group: "Caring For & Helping Household (HH) Members",
    "class": "caringhh",
    animClass: "carekids",
    childclass: "social",
    otherClass: "social"
  },
  "30105": {
    task: "Playing sports with hh children",
    group: "Caring For & Helping Household (HH) Members",
    "class": "caringhh",
    animClass: "carekids",
    childclass: "social",
    otherClass: "sports"
  },
  "30108": {
    task: "Organization & planning for hh children",
    group: "Caring For & Helping Household (HH) Members",
    "class": "caringhh",
    animClass: "carekids",
    childclass: "social",
    otherClass: "social"
  },
  "30109": {
    task: "Looking after hh children (as a primary activity)",
    group: "Caring For & Helping Household (HH) Members",
    "class": "caringhh",
    animClass: "carekids",
    childclass: "social",
    otherClass: "standing"
  },
  "30110": {
    task: "Attending hh children's events",
    group: "Caring For & Helping Household (HH) Members",
    "class": "caringhh",
    animClass: "carekids",
    childclass: "social",
    otherClass: "careadult"
  },
  "30111": {
    task: "Waiting for/with hh children",
    group: "Caring For & Helping Household (HH) Members",
    "class": "caringhh",
    animClass: "standing",
    childclass: "social",
    otherClass: "standing"
  },
  "30112": {
    task: "Picking up/dropping off hh children",
    group: "Caring For & Helping Household (HH) Members",
    "class": "caringhh",
    animClass: "carekids",
    childclass: "social",
    otherClass: "social"
  },
  "30186": {
    task: "Talking with/listening to hh children",
    group: "Caring For & Helping Household (HH) Members",
    "class": "caringhh",
    animClass: "social",
    childclass: "social",
    otherClass: "social"
  },
  "30199": {
    task: "Caring for & helping hh children, n.e.c.*",
    group: "Caring For & Helping Household (HH) Members",
    "class": "caringhh",
    animClass: "carekids",
    childclass: "social",
    otherClass: "standing"
  },
  "30201": {
    task: "Homework (hh children)",
    group: "Caring For & Helping Household (HH) Members",
    "class": "caringhh",
    animClass: "carekids",
    childclass: "social",
    otherClass: "social"
  },
  "30202": {
    task: "Meetings and school conferences (hh children)",
    group: "Caring For & Helping Household (HH) Members",
    "class": "caringhh",
    animClass: "social",
    childclass: "social",
    otherClass: "social"
  },
  "30203": {
    task: "Home schooling of hh children",
    group: "Caring For & Helping Household (HH) Members",
    "class": "caringhh",
    animClass: "carekids",
    childclass: "social",
    otherClass: "social"
  },
  "30204": {
    task: "Waiting associated with hh children's education",
    group: "Caring For & Helping Household (HH) Members",
    "class": "caringhh",
    animClass: "standing",
    childclass: "standing",
    otherClass: "standing"
  },
  "30299": {
    task: "Activities related to hh child's education, n.e.c.*",
    group: "Caring For & Helping Household (HH) Members",
    "class": "caringhh",
    animClass: "carekids",
    childclass: "social",
    otherClass: "careadult"
  },
  "30301": {
    task: "Providing medical care to hh children",
    group: "Caring For & Helping Household (HH) Members",
    "class": "caringhh",
    animClass: "carekids",
    childclass: "social",
    otherClass: "standing"
  },
  "30302": {
    task: "Obtaining medical care for hh children",
    group: "Caring For & Helping Household (HH) Members",
    "class": "caringhh",
    animClass: "carekids",
    childclass: "social",
    otherClass: "careadult"
  },
  "30303": {
    task: "Waiting associated with hh children's health",
    group: "Caring For & Helping Household (HH) Members",
    "class": "caringhh",
    animClass: "carekids",
    childclass: "social",
    otherClass: "social"
  },
  "30399": {
    task: "Activities related to hh child's health, n.e.c.*",
    group: "Caring For & Helping Household (HH) Members",
    "class": "caringhh",
    animClass: "carekids",
    childclass: "social",
    otherClass: "careadult"
  },
  "30401": {
    task: "Physical care for hh adults",
    group: "Caring For & Helping Household (HH) Members",
    "class": "caringhh",
    animClass: "careadult",
    childclass: "sitting",
    otherClass: "social"
  },
  "30402": {
    task: "Looking after hh adult (as a primary activity)",
    group: "Caring For & Helping Household (HH) Members",
    "class": "caringhh",
    animClass: "careadult",
    childclass: "sitting",
    otherClass: "social"
  },
  "30403": {
    task: "Providing medical care to hh adult",
    group: "Caring For & Helping Household (HH) Members",
    "class": "caringhh",
    animClass: "careadult",
    childclass: "sports",
    otherClass: "standing"
  },
  "30404": {
    task: "Obtaining medical and care services for hh adult",
    group: "Caring For & Helping Household (HH) Members",
    "class": "caringhh",
    animClass: "careadult",
    childclass: "walking",
    otherClass: "social"
  },
  "30405": {
    task: "Waiting associated with caring for household adults",
    group: "Caring For & Helping Household (HH) Members",
    "class": "caringhh",
    animClass: "careadult",
    childclass: "social",
    otherClass: "social"
  },
  "30499": {
    task: "Caring for household adults, n.e.c.*",
    group: "Caring For & Helping Household (HH) Members",
    "class": "caringhh",
    animClass: "careadult",
    childclass: "social",
    otherClass: "social"
  },
  "30501": {
    task: "Helping hh adults",
    group: "Caring For & Helping Household (HH) Members",
    "class": "caringhh",
    animClass: "careadult",
    childclass: "walking",
    otherClass: "social"
  },
  "30502": {
    task: "Organization & planning for hh adults",
    group: "Caring For & Helping Household (HH) Members",
    "class": "caringhh",
    animClass: "careadult",
    childclass: "standing",
    otherClass: "standing"
  },
  "30503": {
    task: "Picking up/dropping off hh adult",
    group: "Caring For & Helping Household (HH) Members",
    "class": "caringhh",
    animClass: "careadult",
    childclass: "standing",
    otherClass: "social"
  },
  "30504": {
    task: "Waiting associated with helping hh adults",
    group: "Caring For & Helping Household (HH) Members",
    "class": "caringhh",
    animClass: "careadult",
    childclass: "sports",
    otherClass: "social"
  },
  "30599": {
    task: "Helping household adults, n.e.c.*",
    group: "Caring For & Helping Household (HH) Members",
    "class": "caringhh",
    animClass: "careadult",
    childclass: "standing",
    otherClass: "social"
  },
  "39999": {
    task: "Caring for & helping hh members, n.e.c.*",
    group: "Caring For & Helping Household (HH) Members",
    "class": "caringhh",
    animClass: "careadult",
    childclass: "sitting",
    otherClass: "social"
  },
  "40101": {
    task: "Physical care for nonhh children",
    group: "Caring For & Helping Nonhousehold (NonHH) Members",
    "class": "caringnhh",
    animClass: "carekids",
    childclass: "social",
    otherClass: "standing"
  },
  "40102": {
    task: "Reading to/with nonhh children",
    group: "Caring For & Helping Nonhousehold (NonHH) Members",
    "class": "caringnhh",
    animClass: "carekids",
    childclass: "social",
    otherClass: "social"
  },
  "40103": {
    task: "Playing with nonhh children, not sports",
    group: "Caring For & Helping Nonhousehold (NonHH) Members",
    "class": "caringnhh",
    animClass: "carekids",
    childclass: "social",
    otherClass: "social"
  },
  "40104": {
    task: "Arts and crafts with nonhh children",
    group: "Caring For & Helping Nonhousehold (NonHH) Members",
    "class": "caringnhh",
    animClass: "carekids",
    childclass: "social",
    otherClass: "social"
  },
  "40105": {
    task: "Playing sports with nonhh children",
    group: "Caring For & Helping Nonhousehold (NonHH) Members",
    "class": "caringnhh",
    animClass: "carekids",
    childclass: "social",
    otherClass: "standing"
  },
  "40108": {
    task: "Organization & planning for nonhh children",
    group: "Caring For & Helping Nonhousehold (NonHH) Members",
    "class": "caringnhh",
    animClass: "carekids",
    childclass: "social",
    otherClass: "social"
  },
  "40109": {
    task: "Looking after nonhh children (as primary activity)",
    group: "Caring For & Helping Nonhousehold (NonHH) Members",
    "class": "caringnhh",
    animClass: "carekids",
    childclass: "social",
    otherClass: "standing"
  },
  "40110": {
    task: "Attending nonhh children's events",
    group: "Caring For & Helping Nonhousehold (NonHH) Members",
    "class": "caringnhh",
    animClass: "carekids",
    childclass: "social",
    otherClass: "standing"
  },
  "40111": {
    task: "Waiting for/with nonhh children",
    group: "Caring For & Helping Nonhousehold (NonHH) Members",
    "class": "caringnhh",
    animClass: "carekids",
    childclass: "social",
    otherClass: "social"
  },
  "40112": {
    task: "Dropping off/picking up nonhh children",
    group: "Caring For & Helping Nonhousehold (NonHH) Members",
    "class": "caringnhh",
    animClass: "carekids",
    childclass: "social",
    otherClass: "standing"
  },
  "40186": {
    task: "Talking with/listening to nonhh children",
    group: "Caring For & Helping Nonhousehold (NonHH) Members",
    "class": "caringnhh",
    animClass: "carekids",
    childclass: "social",
    otherClass: "social"
  },
  "40199": {
    task: "Caring for and helping nonhh children, n.e.c.*",
    group: "Caring For & Helping Nonhousehold (NonHH) Members",
    "class": "caringnhh",
    animClass: "carekids",
    childclass: "social",
    otherClass: "standing"
  },
  "40201": {
    task: "Homework (nonhh children)",
    group: "Caring For & Helping Nonhousehold (NonHH) Members",
    "class": "caringnhh",
    animClass: "carekids",
    childclass: "social",
    otherClass: "social"
  },
  "40202": {
    task: "Meetings and school conferences (nonhh children)",
    group: "Caring For & Helping Nonhousehold (NonHH) Members",
    "class": "caringnhh",
    animClass: "carekids",
    childclass: "social",
    otherClass: "social"
  },
  "40203": {
    task: "Home schooling of nonhh children",
    group: "Caring For & Helping Nonhousehold (NonHH) Members",
    "class": "caringnhh",
    animClass: "carekids",
    childclass: "social",
    otherClass: "social"
  },
  "40204": {
    task: "Waiting associated with nonhh children's education",
    group: "Caring For & Helping Nonhousehold (NonHH) Members",
    "class": "caringnhh",
    animClass: "carekids",
    childclass: "social",
    otherClass: "standing"
  },
  "40299": {
    task: "Activities related to nonhh child's educ., n.e.c.*",
    group: "Caring For & Helping Nonhousehold (NonHH) Members",
    "class": "caringnhh",
    animClass: "carekids",
    childclass: "social",
    otherClass: "standing"
  },
  "40301": {
    task: "Providing medical care to nonhh children",
    group: "Caring For & Helping Nonhousehold (NonHH) Members",
    "class": "caringnhh",
    animClass: "carekids",
    childclass: "social",
    otherClass: "social"
  },
  "40302": {
    task: "Obtaining medical care for nonhh children",
    group: "Caring For & Helping Nonhousehold (NonHH) Members",
    "class": "caringnhh",
    animClass: "carekids",
    childclass: "social",
    otherClass: "standing"
  },
  "40303": {
    task: "Waiting associated with nonhh children's health",
    group: "Caring For & Helping Nonhousehold (NonHH) Members",
    "class": "caringnhh",
    animClass: "carekids",
    childclass: "social",
    otherClass: "social"
  },
  "40399": {
    task: "Activities related to nonhh child's health, n.e.c.*",
    group: "Caring For & Helping Nonhousehold (NonHH) Members",
    "class": "caringnhh",
    animClass: "carekids",
    childclass: "social",
    otherClass: "standing"
  },
  "40401": {
    task: "Physical care for nonhh adults",
    group: "Caring For & Helping Nonhousehold (NonHH) Members",
    "class": "caringnhh",
    animClass: "careadult",
    childclass: "standing",
    otherClass: "social"
  },
  "40402": {
    task: "Looking after nonhh adult (as a primary activity)",
    group: "Caring For & Helping Nonhousehold (NonHH) Members",
    "class": "caringnhh",
    animClass: "careadult",
    childclass: "sitting",
    otherClass: "social"
  },
  "40403": {
    task: "Providing medical care to nonhh adult",
    group: "Caring For & Helping Nonhousehold (NonHH) Members",
    "class": "caringnhh",
    animClass: "careadult",
    childclass: "sitting",
    otherClass: "standing"
  },
  "40404": {
    task: "Obtaining medical and care services for nonhh adult",
    group: "Caring For & Helping Nonhousehold (NonHH) Members",
    "class": "caringnhh",
    animClass: "careadult",
    childclass: "sports",
    otherClass: "social"
  },
  "40405": {
    task: "Waiting associated with caring for nonhh adults",
    group: "Caring For & Helping Nonhousehold (NonHH) Members",
    "class": "caringnhh",
    animClass: "careadult",
    childclass: "walking",
    otherClass: "social"
  },
  "40499": {
    task: "Caring for nonhh adults, n.e.c.*",
    group: "Caring For & Helping Nonhousehold (NonHH) Members",
    "class": "caringnhh",
    animClass: "careadult",
    childclass: "social",
    otherClass: "social"
  },
  "40501": {
    task: "Housework, cooking, & shopping assistance for nonhh adults",
    group: "Caring For & Helping Nonhousehold (NonHH) Members",
    "class": "caringnhh",
    animClass: "careadult",
    childclass: "social",
    otherClass: "social"
  },
  "40502": {
    task: "House & lawn maintenance & repair assistance for nonhh adults",
    group: "Caring For & Helping Nonhousehold (NonHH) Members",
    "class": "caringnhh",
    animClass: "careadult",
    childclass: "walking",
    otherClass: "standing"
  },
  "40503": {
    task: "Animal & pet care assistance for nonhh adults",
    group: "Caring For & Helping Nonhousehold (NonHH) Members",
    "class": "caringnhh",
    animClass: "careadult",
    childclass: "standing",
    otherClass: "social"
  },
  "40504": {
    task: "Vehicle & appliance maintenance/repair assistance for nonhh adults",
    group: "Caring For & Helping Nonhousehold (NonHH) Members",
    "class": "caringnhh",
    animClass: "careadult",
    childclass: "standing",
    otherClass: "social"
  },
  "40505": {
    task: "Financial management assistance for nonhh adults",
    group: "Caring For & Helping Nonhousehold (NonHH) Members",
    "class": "caringnhh",
    animClass: "careadult",
    childclass: "sports",
    otherClass: "social"
  },
  "40506": {
    task: "Household management & paperwork assistance for nonhh adults",
    group: "Caring For & Helping Nonhousehold (NonHH) Members",
    "class": "caringnhh",
    animClass: "careadult",
    childclass: "sports",
    otherClass: "social"
  },
  "40507": {
    task: "Picking up/dropping off nonhh adult",
    group: "Caring For & Helping Nonhousehold (NonHH) Members",
    "class": "caringnhh",
    animClass: "careadult",
    childclass: "sitting",
    otherClass: "standing"
  },
  "40508": {
    task: "Waiting associated with helping nonhh adults",
    group: "Caring For & Helping Nonhousehold (NonHH) Members",
    "class": "caringnhh",
    animClass: "careadult",
    childclass: "sitting",
    otherClass: "social"
  },
  "40599": {
    task: "Helping nonhh adults, n.e.c.*",
    group: "Caring For & Helping Nonhousehold (NonHH) Members",
    "class": "caringnhh",
    animClass: "careadult",
    childclass: "sports",
    otherClass: "social"
  },
  "49999": {
    task: "Caring for & helping nonhh members, n.e.c.*",
    group: "Caring For & Helping Nonhousehold (NonHH) Members",
    "class": "caringnhh",
    animClass: "careadult",
    childclass: "walking",
    otherClass: "standing"
  },
  "50101": {
    task: "Work, main job",
    group: "Work & Work-Related Activities",
    "class": "work",
    animClass: "workingdesk",
    childclass: "standing",
    otherClass: "careadult"
  },
  "50102": {
    task: "Work, other job(s)",
    group: "Work & Work-Related Activities",
    "class": "work",
    animClass: "workingdesk",
    childclass: "sitting",
    otherClass: "standing"
  },
  "50103": {
    task: "Security procedures related to work",
    group: "Work & Work-Related Activities",
    "class": "work",
    animClass: "workingdesk",
    childclass: "sitting",
    otherClass: "walking"
  },
  "50189": {
    task: "Working, n.e.c.*",
    group: "Work & Work-Related Activities",
    "class": "work",
    animClass: "workingdesk",
    childclass: "sports",
    otherClass: "eating"
  },
  "50201": {
    task: "Socializing, relaxing, and leisure as part of job",
    group: "Work & Work-Related Activities",
    "class": "work",
    animClass: "social",
    childclass: "walking",
    otherClass: "social"
  },
  "50202": {
    task: "Eating and drinking as part of job",
    group: "Work & Work-Related Activities",
    "class": "work",
    animClass: "eating",
    childclass: "eating",
    otherClass: "eating"
  },
  "50203": {
    task: "Sports and exercise as part of job",
    group: "Work & Work-Related Activities",
    "class": "work",
    animClass: "sports",
    childclass: "social",
    otherClass: "sports"
  },
  "50204": {
    task: "Security procedures as part of job",
    group: "Work & Work-Related Activities",
    "class": "work",
    animClass: "workingdesk",
    childclass: "walking",
    otherClass: "careadult"
  },
  "50289": {
    task: "Work-related activities, n.e.c.*",
    group: "Work & Work-Related Activities",
    "class": "work",
    animClass: "workingdesk",
    childclass: "standing",
    otherClass: "standing"
  },
  "50301": {
    task: "Income-generating hobbies, crafts, and food",
    group: "Work & Work-Related Activities",
    "class": "work",
    animClass: "workinglabor",
    childclass: "standing",
    otherClass: "walking"
  },
  "50302": {
    task: "Income-generating performances",
    group: "Work & Work-Related Activities",
    "class": "work",
    animClass: "workingdesk",
    childclass: "sports",
    otherClass: "eating"
  },
  "50303": {
    task: "Income-generating services",
    group: "Work & Work-Related Activities",
    "class": "work",
    animClass: "workingdesk",
    childclass: "standing",
    otherClass: "social"
  },
  "50304": {
    task: "Income-generating rental property activities",
    group: "Work & Work-Related Activities",
    "class": "work",
    animClass: "workingdesk",
    childclass: "sitting",
    otherClass: "eating"
  },
  "50389": {
    task: "Other income-generating activities, n.e.c.*",
    group: "Work & Work-Related Activities",
    "class": "work",
    animClass: "workingdesk",
    childclass: "sitting",
    otherClass: "sports"
  },
  "50403": {
    task: "Job interviewing",
    group: "Work & Work-Related Activities",
    "class": "work",
    animClass: "talking",
    childclass: "sports",
    otherClass: "careadult"
  },
  "50404": {
    task: "Waiting associated with job search or interview",
    group: "Work & Work-Related Activities",
    "class": "work",
    animClass: "workingdesk",
    childclass: "walking",
    otherClass: "standing"
  },
  "50405": {
    task: "Security procedures rel. to job search/interviewing",
    group: "Work & Work-Related Activities",
    "class": "work",
    animClass: "workingdesk",
    childclass: "sitting",
    otherClass: "walking"
  },
  "50481": {
    task: "Job search activities",
    group: "Work & Work-Related Activities",
    "class": "work",
    animClass: "workingdesk",
    childclass: "sitting",
    otherClass: "eating"
  },
  "50499": {
    task: "Job search and Interviewing, n.e.c.*",
    group: "Work & Work-Related Activities",
    "class": "work",
    animClass: "workingdesk",
    childclass: "sitting",
    otherClass: "social"
  },
  "59999": {
    task: "Work and work-related activities, n.e.c.*",
    group: "Work & Work-Related Activities",
    "class": "work",
    animClass: "workingdesk",
    childclass: "sports",
    otherClass: "eating"
  },
  "60101": {
    task: "Taking class for degree, certification, or licensure",
    group: "Education",
    "class": "education",
    animClass: "workingdesk",
    childclass: "walking",
    otherClass: "sports"
  },
  "60102": {
    task: "Taking class for personal interest",
    group: "Education",
    "class": "education",
    animClass: "workingdesk",
    childclass: "social",
    otherClass: "careadult"
  },
  "60103": {
    task: "Waiting associated with taking classes",
    group: "Education",
    "class": "education",
    animClass: "workingdesk",
    childclass: "social",
    otherClass: "standing"
  },
  "60104": {
    task: "Security procedures rel. to taking classes",
    group: "Education",
    "class": "education",
    animClass: "workingdesk",
    childclass: "walking",
    otherClass: "walking"
  },
  "60199": {
    task: "Taking class, n.e.c.*",
    group: "Education",
    "class": "education",
    animClass: "workingdesk",
    childclass: "standing",
    otherClass: "eating"
  },
  "60201": {
    task: "Extracurricular club activities",
    group: "Education",
    "class": "education",
    animClass: "sports",
    childclass: "standing",
    otherClass: "sports"
  },
  "60202": {
    task: "Extracurricular music & performance activities",
    group: "Education",
    "class": "education",
    animClass: "talking",
    childclass: "sports",
    otherClass: "talking"
  },
  "60203": {
    task: "Extracurricular student government activities",
    group: "Education",
    "class": "education",
    animClass: "talking",
    childclass: "standing",
    otherClass: "talking"
  },
  "60289": {
    task: "Education-related extracurricular activities, n.e.c.*",
    group: "Education",
    "class": "education",
    animClass: "workingdesk",
    childclass: "sitting",
    otherClass: "talking"
  },
  "60301": {
    task: "Research/homework for class for degree, certification, or licensure",
    group: "Education",
    "class": "education",
    animClass: "workingdesk",
    childclass: "sitting",
    otherClass: "social"
  },
  "60302": {
    task: "Research/homework for class for pers. interest",
    group: "Education",
    "class": "education",
    animClass: "workingdesk",
    childclass: "sports",
    otherClass: "eating"
  },
  "60303": {
    task: "Waiting associated with research/homework",
    group: "Education",
    "class": "education",
    animClass: "workingdesk",
    childclass: "standing",
    otherClass: "sports"
  },
  "60399": {
    task: "Research/homework n.e.c.*",
    group: "Education",
    "class": "education",
    animClass: "workingdesk",
    childclass: "standing",
    otherClass: "careadult"
  },
  "60401": {
    task: "Administrative activities: class for degree, certification, or licensure",
    group: "Education",
    "class": "education",
    animClass: "workingdesk",
    childclass: "sitting",
    otherClass: "standing"
  },
  "60402": {
    task: "Administrative activities: class for personal interest",
    group: "Education",
    "class": "education",
    animClass: "workingdesk",
    childclass: "sitting",
    otherClass: "walking"
  },
  "60403": {
    task: "Waiting associated w/admin. activities (education)",
    group: "Education",
    "class": "education",
    animClass: "workingdesk",
    childclass: "sports",
    otherClass: "eating"
  },
  "60499": {
    task: "Administrative for education, n.e.c.*",
    group: "Education",
    "class": "education",
    animClass: "workingdesk",
    childclass: "standing",
    otherClass: "social"
  },
  "69999": {
    task: "Education, n.e.c.*",
    group: "Education",
    "class": "education",
    animClass: "workingdesk",
    childclass: "social",
    otherClass: "eating"
  },
  "70101": {
    task: "Grocery shopping",
    group: "Consumer Purchases",
    "class": "consumer",
    animClass: "shopping",
    childclass: "social",
    otherClass: "sports"
  },
  "70102": {
    task: "Purchasing gas",
    group: "Consumer Purchases",
    "class": "consumer",
    animClass: "shopping",
    childclass: "standing",
    otherClass: "careadult"
  },
  "70103": {
    task: "Purchasing food (not groceries)",
    group: "Consumer Purchases",
    "class": "consumer",
    animClass: "shopping",
    childclass: "standing",
    otherClass: "standing"
  },
  "70104": {
    task: "Shopping, except groceries, food and gas",
    group: "Consumer Purchases",
    "class": "consumer",
    animClass: "shopping",
    childclass: "sports",
    otherClass: "walking"
  },
  "70105": {
    task: "Waiting associated with shopping",
    group: "Consumer Purchases",
    "class": "consumer",
    animClass: "shopping",
    childclass: "sports",
    otherClass: "eating"
  },
  "70199": {
    task: "Shopping, n.e.c.*",
    group: "Consumer Purchases",
    "class": "consumer",
    animClass: "shopping",
    childclass: "standing",
    otherClass: "eating"
  },
  "70201": {
    task: "Comparison shopping",
    group: "Consumer Purchases",
    "class": "consumer",
    animClass: "shopping",
    childclass: "sitting",
    otherClass: "standing"
  },
  "70299": {
    task: "Researching purchases, n.e.c.*",
    group: "Consumer Purchases",
    "class": "consumer",
    animClass: "shopping",
    childclass: "sitting",
    otherClass: "talking"
  },
  "70301": {
    task: "Security procedures rel. to consumer purchases",
    group: "Consumer Purchases",
    "class": "consumer",
    animClass: "shopping",
    childclass: "sports",
    otherClass: "talking"
  },
  "70399": {
    task: "Security procedures rel. to consumer purchases, n.e.c.*",
    group: "Consumer Purchases",
    "class": "consumer",
    animClass: "shopping",
    childclass: "standing",
    otherClass: "talking"
  },
  "79999": {
    task: "Consumer purchases, n.e.c.*",
    group: "Consumer Purchases",
    "class": "consumer",
    animClass: "shopping",
    childclass: "standing",
    otherClass: "talking"
  },
  "80101": {
    task: "Using paid childcare services",
    group: "Professional & Personal Care Services",
    "class": "professional",
    animClass: "sitting",
    childclass: "sitting",
    otherClass: "sitting"
  },
  "80102": {
    task: "Waiting associated w/purchasing childcare svcs",
    group: "Professional & Personal Care Services",
    "class": "professional",
    animClass: "sitting",
    childclass: "sitting",
    otherClass: "sitting"
  },
  "80199": {
    task: "Using paid childcare services, n.e.c.*",
    group: "Professional & Personal Care Services",
    "class": "professional",
    animClass: "sitting",
    childclass: "sports",
    otherClass: "sitting"
  },
  "80201": {
    task: "Banking",
    group: "Professional & Personal Care Services",
    "class": "professional",
    animClass: "talking",
    childclass: "walking",
    otherClass: "talking"
  },
  "80202": {
    task: "Using other financial services",
    group: "Professional & Personal Care Services",
    "class": "professional",
    animClass: "talking",
    childclass: "social",
    otherClass: "talking"
  },
  "80203": {
    task: "Waiting associated w/banking/financial services",
    group: "Professional & Personal Care Services",
    "class": "professional",
    animClass: "standing",
    childclass: "social",
    otherClass: "standing"
  },
  "80299": {
    task: "Using financial services and banking, n.e.c.*",
    group: "Professional & Personal Care Services",
    "class": "professional",
    animClass: "talking",
    childclass: "walking",
    otherClass: "talking"
  },
  "80301": {
    task: "Using legal services",
    group: "Professional & Personal Care Services",
    "class": "professional",
    animClass: "talking",
    childclass: "standing",
    otherClass: "talking"
  },
  "80302": {
    task: "Waiting associated with legal services",
    group: "Professional & Personal Care Services",
    "class": "professional",
    animClass: "standing",
    childclass: "standing",
    otherClass: "standing"
  },
  "80399": {
    task: "Using legal services, n.e.c.*",
    group: "Professional & Personal Care Services",
    "class": "professional",
    animClass: "talking",
    childclass: "sports",
    otherClass: "talking"
  },
  "80401": {
    task: "Using health and care services outside the home",
    group: "Professional & Personal Care Services",
    "class": "professional",
    animClass: "talking",
    childclass: "standing",
    otherClass: "talking"
  },
  "80402": {
    task: "Using in-home health and care services",
    group: "Professional & Personal Care Services",
    "class": "professional",
    animClass: "workingdesk",
    childclass: "sitting",
    otherClass: "social"
  },
  "80403": {
    task: "Waiting associated with medical services",
    group: "Professional & Personal Care Services",
    "class": "professional",
    animClass: "sitting",
    childclass: "sitting",
    otherClass: "sitting"
  },
  "80499": {
    task: "Using medical services, n.e.c.*",
    group: "Professional & Personal Care Services",
    "class": "professional",
    animClass: "standing",
    childclass: "sports",
    otherClass: "standing"
  },
  "80501": {
    task: "Using personal care services",
    group: "Professional & Personal Care Services",
    "class": "professional",
    animClass: "standing",
    childclass: "standing",
    otherClass: "standing"
  },
  "80502": {
    task: "Waiting associated w/personal care services",
    group: "Professional & Personal Care Services",
    "class": "professional",
    animClass: "standing",
    childclass: "sitting",
    otherClass: "standing"
  },
  "80599": {
    task: "Using personal care services, n.e.c.*",
    group: "Professional & Personal Care Services",
    "class": "professional",
    animClass: "sitting",
    childclass: "sitting",
    otherClass: "sitting"
  },
  "80601": {
    task: "Activities rel. to purchasing/selling real estate",
    group: "Professional & Personal Care Services",
    "class": "professional",
    animClass: "sitting",
    childclass: "sitting",
    otherClass: "sitting"
  },
  "80602": {
    task: "Waiting associated w/purchasing/selling real estate",
    group: "Professional & Personal Care Services",
    "class": "professional",
    animClass: "sitting",
    childclass: "sports",
    otherClass: "standing"
  },
  "80699": {
    task: "Using real estate services, n.e.c.*",
    group: "Professional & Personal Care Services",
    "class": "professional",
    animClass: "sitting",
    childclass: "standing",
    otherClass: "sitting"
  },
  "80701": {
    task: "Using veterinary services",
    group: "Professional & Personal Care Services",
    "class": "professional",
    animClass: "pets",
    childclass: "social",
    otherClass: "sitting"
  },
  "80702": {
    task: "Waiting associated with veterinary services",
    group: "Professional & Personal Care Services",
    "class": "professional",
    animClass: "pets",
    childclass: "social",
    otherClass: "pets"
  },
  "80799": {
    task: "Using veterinary services, n.e.c.*",
    group: "Professional & Personal Care Services",
    "class": "professional",
    animClass: "pets",
    childclass: "standing",
    otherClass: "pets"
  },
  "80801": {
    task: "Security procedures rel. to professional/personal svcs.",
    group: "Professional & Personal Care Services",
    "class": "professional",
    animClass: "workingdesk",
    childclass: "standing",
    otherClass: "workingdesk"
  },
  "80899": {
    task: "Security procedures rel. to professional/personal svcs n.e.c.*",
    group: "Professional & Personal Care Services",
    "class": "professional",
    animClass: "workingdesk",
    childclass: "walking",
    otherClass: "workingdesk"
  },
  "89999": {
    task: "Professional and personal services, n.e.c.*",
    group: "Professional & Personal Care Services",
    "class": "professional",
    animClass: "workingdesk",
    childclass: "sports",
    otherClass: "workingdesk"
  },
  "90101": {
    task: "Using interior cleaning services",
    group: "Household Services",
    "class": "householdservices",
    animClass: "sitting",
    childclass: "walking",
    otherClass: "eating"
  },
  "90102": {
    task: "Using meal preparation services",
    group: "Household Services",
    "class": "householdservices",
    animClass: "sitting",
    childclass: "sitting",
    otherClass: "social"
  },
  "90103": {
    task: "Using clothing repair and cleaning services",
    group: "Household Services",
    "class": "householdservices",
    animClass: "sitting",
    childclass: "sitting",
    otherClass: "talking"
  },
  "90104": {
    task: "Waiting associated with using household services",
    group: "Household Services",
    "class": "householdservices",
    animClass: "sitting",
    childclass: "sports",
    otherClass: "talking"
  },
  "90199": {
    task: "Using household services, n.e.c.*",
    group: "Household Services",
    "class": "householdservices",
    animClass: "sitting",
    childclass: "standing",
    otherClass: "social"
  },
  "90201": {
    task: "Using home maint/repair/décor/construction svcs",
    group: "Household Services",
    "class": "householdservices",
    animClass: "sitting",
    childclass: "sitting",
    otherClass: "talking"
  },
  "90202": {
    task: "Waiting associated w/ home main/repair/décor/constr",
    group: "Household Services",
    "class": "householdservices",
    animClass: "sitting",
    childclass: "sitting",
    otherClass: "talking"
  },
  "90299": {
    task: "Using home maint/repair/décor/constr services, n.e.c.*",
    group: "Household Services",
    "class": "householdservices",
    animClass: "sitting",
    childclass: "sitting",
    otherClass: "social"
  },
  "90301": {
    task: "Using pet services",
    group: "Household Services",
    "class": "householdservices",
    animClass: "pets",
    childclass: "sports",
    otherClass: "talking"
  },
  "90302": {
    task: "Waiting associated with pet services",
    group: "Household Services",
    "class": "householdservices",
    animClass: "household",
    childclass: "standing",
    otherClass: "talking"
  },
  "90399": {
    task: "Using pet services, n.e.c.*",
    group: "Household Services",
    "class": "householdservices",
    animClass: "pets",
    childclass: "social",
    otherClass: "pets"
  },
  "90401": {
    task: "Using lawn and garden services",
    group: "Household Services",
    "class": "householdservices",
    animClass: "sitting",
    childclass: "social",
    otherClass: "social"
  },
  "90402": {
    task: "Waiting associated with using lawn & garden services",
    group: "Household Services",
    "class": "householdservices",
    animClass: "sitting",
    childclass: "walking",
    otherClass: "talking"
  },
  "90499": {
    task: "Using lawn and garden services, n.e.c.*",
    group: "Household Services",
    "class": "householdservices",
    animClass: "sitting",
    childclass: "standing",
    otherClass: "talking"
  },
  "90501": {
    task: "Using vehicle maintenance or repair services",
    group: "Household Services",
    "class": "householdservices",
    animClass: "sitting",
    childclass: "standing",
    otherClass: "social"
  },
  "90502": {
    task: "Waiting associated with vehicle main. or repair svcs",
    group: "Household Services",
    "class": "householdservices",
    animClass: "sitting",
    childclass: "sports",
    otherClass: "talking"
  },
  "90599": {
    task: "Using vehicle maint. & repair svcs, n.e.c.*",
    group: "Household Services",
    "class": "householdservices",
    animClass: "sitting",
    childclass: "standing",
    otherClass: "talking"
  },
  "99999": {
    task: "Using household services, n.e.c.*",
    group: "Household Services",
    "class": "householdservices",
    animClass: "sitting",
    childclass: "sitting",
    otherClass: "talking"
  },
  "100101": {
    task: "Using police and fire services",
    group: "Government Services & Civic Obligations",
    "class": "gov",
    animClass: "phone",
    childclass: "sitting",
    otherClass: "phone"
  },
  "100102": {
    task: "Using social services",
    group: "Government Services & Civic Obligations",
    "class": "gov",
    animClass: "phone",
    childclass: "sports",
    otherClass: "phone"
  },
  "100103": {
    task: "Obtaining licenses & paying fines, fees, taxes",
    group: "Government Services & Civic Obligations",
    "class": "gov",
    animClass: "phone",
    childclass: "standing",
    otherClass: "phone"
  },
  "100199": {
    task: "Using government services, n.e.c.*",
    group: "Government Services & Civic Obligations",
    "class": "gov",
    animClass: "phone",
    childclass: "standing",
    otherClass: "phone"
  },
  "100201": {
    task: "Civic obligations & participation",
    group: "Government Services & Civic Obligations",
    "class": "gov",
    animClass: "talking",
    childclass: "sitting",
    otherClass: "talking"
  },
  "100299": {
    task: "Civic obligations & participation, n.e.c.*",
    group: "Government Services & Civic Obligations",
    "class": "gov",
    animClass: "talking",
    childclass: "sitting",
    otherClass: "talking"
  },
  "100381": {
    task: "Waiting associated with using government services",
    group: "Government Services & Civic Obligations",
    "class": "gov",
    animClass: "standing",
    childclass: "sports",
    otherClass: "standing"
  },
  "100383": {
    task: "Waiting associated w/civic obligations & participation",
    group: "Government Services & Civic Obligations",
    "class": "gov",
    animClass: "standing",
    childclass: "standing",
    otherClass: "standing"
  },
  "100399": {
    task: "Waiting assoc. w/govt svcs or civic obligations, n.e.c.*",
    group: "Government Services & Civic Obligations",
    "class": "gov",
    animClass: "standing",
    childclass: "social",
    otherClass: "standing"
  },
  "100401": {
    task: "Security procedures rel. to govt svcs/civic obligations",
    group: "Government Services & Civic Obligations",
    "class": "gov",
    animClass: "standing",
    childclass: "social",
    otherClass: "standing"
  },
  "100499": {
    task: "Security procedures rel. to govt svcs/civic obligations, n.e.c.*",
    group: "Government Services & Civic Obligations",
    "class": "gov",
    animClass: "standing",
    childclass: "standing",
    otherClass: "standing"
  },
  "109999": {
    task: "Government services, n.e.c.*",
    group: "Government Services & Civic Obligations",
    "class": "gov",
    animClass: "standing",
    childclass: "standing",
    otherClass: "standing"
  },
  "110101": {
    task: "Eating and drinking",
    group: "Eating and Drinking",
    "class": "eating",
    animClass: "eating",
    childclass: "eating",
    otherClass: "eating"
  },
  "110199": {
    task: "Eating and drinking, n.e.c.*",
    group: "Eating and Drinking",
    "class": "eating",
    animClass: "eating",
    childclass: "eating",
    otherClass: "eating"
  },
  "110281": {
    task: "Waiting associated w/eating & drinking",
    group: "Eating and Drinking",
    "class": "eating",
    animClass: "eating",
    childclass: "eating",
    otherClass: "eating"
  },
  "110289": {
    task: "Waiting associated with eating & drinking, n.e.c.*",
    group: "Eating and Drinking",
    "class": "eating",
    animClass: "eating",
    childclass: "eating",
    otherClass: "eating"
  },
  "119999": {
    task: "Eating and drinking, n.e.c.*",
    group: "Eating and Drinking",
    "class": "eating",
    animClass: "eating",
    childclass: "eating",
    otherClass: "eating"
  },
  "120101": {
    task: "Socializing and communicating with others",
    group: "Socializing, Relaxing, and Leisure",
    "class": "leisure",
    animClass: "social",
    childclass: "social",
    otherClass: "social"
  },
  "120199": {
    task: "Socializing and communicating, n.e.c.*",
    group: "Socializing, Relaxing, and Leisure",
    "class": "leisure",
    animClass: "social",
    childclass: "social",
    otherClass: "social"
  },
  "120201": {
    task: "Attending or hosting parties/receptions/ceremonies",
    group: "Socializing, Relaxing, and Leisure",
    "class": "leisure",
    animClass: "social",
    childclass: "social",
    otherClass: "social"
  },
  "120202": {
    task: "Attending meetings for personal interest (not volunteering)",
    group: "Socializing, Relaxing, and Leisure",
    "class": "leisure",
    animClass: "social",
    childclass: "social",
    otherClass: "social"
  },
  "120299": {
    task: "Attending/hosting social events, n.e.c.*",
    group: "Socializing, Relaxing, and Leisure",
    "class": "leisure",
    animClass: "social",
    childclass: "social",
    otherClass: "social"
  },
  "120301": {
    task: "Relaxing, thinking",
    group: "Socializing, Relaxing, and Leisure",
    "class": "leisure",
    animClass: "sitting",
    childclass: "standing",
    otherClass: "standing"
  },
  "120302": {
    task: "Tobacco and drug use",
    group: "Socializing, Relaxing, and Leisure",
    "class": "leisure",
    animClass: "sitting",
    childclass: "standing",
    otherClass: "standing"
  },
  "120303": {
    task: "Television and movies (not religious)",
    group: "Socializing, Relaxing, and Leisure",
    "class": "leisure",
    animClass: "sitting",
    childclass: "talking",
    otherClass: "standing"
  },
  "120304": {
    task: "Television (religious)",
    group: "Socializing, Relaxing, and Leisure",
    "class": "leisure",
    animClass: "sitting",
    childclass: "social",
    otherClass: "standing"
  },
  "120305": {
    task: "Listening to the radio",
    group: "Socializing, Relaxing, and Leisure",
    "class": "leisure",
    animClass: "sitting",
    childclass: "standing",
    otherClass: "standing"
  },
  "120306": {
    task: "Listening to/playing music (not radio)",
    group: "Socializing, Relaxing, and Leisure",
    "class": "leisure",
    animClass: "sitting",
    childclass: "talking",
    otherClass: "standing"
  },
  "120307": {
    task: "Playing games",
    group: "Socializing, Relaxing, and Leisure",
    "class": "leisure",
    animClass: "workingdesk",
    childclass: "social",
    otherClass: "standing"
  },
  "120308": {
    task: "Computer use for leisure (exc. Games)",
    group: "Socializing, Relaxing, and Leisure",
    "class": "leisure",
    animClass: "workingdesk",
    childclass: "standing",
    otherClass: "standing"
  },
  "120309": {
    task: "Arts and crafts as a hobby",
    group: "Socializing, Relaxing, and Leisure",
    "class": "leisure",
    animClass: "standing",
    childclass: "talking",
    otherClass: "standing"
  },
  "120310": {
    task: "Collecting as a hobby",
    group: "Socializing, Relaxing, and Leisure",
    "class": "leisure",
    animClass: "workingdesk",
    childclass: "social",
    otherClass: "standing"
  },
  "120311": {
    task: "Hobbies, except arts & crafts and collecting",
    group: "Socializing, Relaxing, and Leisure",
    "class": "leisure",
    animClass: "workingdesk",
    childclass: "standing",
    otherClass: "standing"
  },
  "120312": {
    task: "Reading for personal interest",
    group: "Socializing, Relaxing, and Leisure",
    "class": "leisure",
    animClass: "sitting",
    childclass: "talking",
    otherClass: "standing"
  },
  "120313": {
    task: "Writing for personal interest",
    group: "Socializing, Relaxing, and Leisure",
    "class": "leisure",
    animClass: "workingdesk",
    childclass: "social",
    otherClass: "standing"
  },
  "120399": {
    task: "Relaxing and leisure, n.e.c.*",
    group: "Socializing, Relaxing, and Leisure",
    "class": "leisure",
    animClass: "sitting",
    childclass: "standing",
    otherClass: "standing"
  },
  "120401": {
    task: "Attending performing arts",
    group: "Socializing, Relaxing, and Leisure",
    "class": "leisure",
    animClass: "sitting",
    childclass: "talking",
    otherClass: "sitting"
  },
  "120402": {
    task: "Attending museums",
    group: "Socializing, Relaxing, and Leisure",
    "class": "leisure",
    animClass: "standing",
    childclass: "standing",
    otherClass: "standing"
  },
  "120403": {
    task: "Attending movies/film",
    group: "Socializing, Relaxing, and Leisure",
    "class": "leisure",
    animClass: "sitting",
    childclass: "sitting",
    otherClass: "sitting"
  },
  "120404": {
    task: "Attending gambling establishments",
    group: "Socializing, Relaxing, and Leisure",
    "class": "leisure",
    animClass: "sitting",
    childclass: "sitting",
    otherClass: "sitting"
  },
  "120405": {
    task: "Security procedures rel. to arts & entertainment",
    group: "Socializing, Relaxing, and Leisure",
    "class": "leisure",
    animClass: "sitting",
    childclass: "sitting",
    otherClass: "sitting"
  },
  "120499": {
    task: "Arts and entertainment, n.e.c.*",
    group: "Socializing, Relaxing, and Leisure",
    "class": "leisure",
    animClass: "sitting",
    childclass: "sitting",
    otherClass: "sitting"
  },
  "120501": {
    task: "Waiting assoc. w/socializing & communicating",
    group: "Socializing, Relaxing, and Leisure",
    "class": "leisure",
    animClass: "standing",
    childclass: "standing",
    otherClass: "standing"
  },
  "120502": {
    task: "Waiting assoc. w/attending/hosting social events",
    group: "Socializing, Relaxing, and Leisure",
    "class": "leisure",
    animClass: "standing",
    childclass: "standing",
    otherClass: "standing"
  },
  "120503": {
    task: "Waiting associated with relaxing/leisure",
    group: "Socializing, Relaxing, and Leisure",
    "class": "leisure",
    animClass: "standing",
    childclass: "standing",
    otherClass: "standing"
  },
  "120504": {
    task: "Waiting associated with arts & entertainment",
    group: "Socializing, Relaxing, and Leisure",
    "class": "leisure",
    animClass: "standing",
    childclass: "standing",
    otherClass: "standing"
  },
  "120599": {
    task: "Waiting associated with socializing, n.e.c.*",
    group: "Socializing, Relaxing, and Leisure",
    "class": "leisure",
    animClass: "standing",
    childclass: "standing",
    otherClass: "standing"
  },
  "129999": {
    task: "Socializing, relaxing, and leisure, n.e.c.*",
    group: "Socializing, Relaxing, and Leisure",
    "class": "leisure",
    animClass: "social",
    childclass: "social",
    otherClass: "social"
  },
  "130101": {
    task: "Doing aerobics",
    group: "Sports, Exercise, & Recreation",
    "class": "sports",
    animClass: "sports",
    childclass: "sports",
    otherClass: "sports"
  },
  "130102": {
    task: "Playing baseball",
    group: "Sports, Exercise, & Recreation",
    "class": "sports",
    animClass: "sports",
    childclass: "sports",
    otherClass: "social"
  },
  "130103": {
    task: "Playing basketball",
    group: "Sports, Exercise, & Recreation",
    "class": "sports",
    animClass: "sports",
    childclass: "sports",
    otherClass: "talking"
  },
  "130104": {
    task: "Biking",
    group: "Sports, Exercise, & Recreation",
    "class": "sports",
    animClass: "sports",
    childclass: "sports",
    otherClass: "talking"
  },
  "130105": {
    task: "Playing billiards",
    group: "Sports, Exercise, & Recreation",
    "class": "sports",
    animClass: "sports",
    childclass: "sports",
    otherClass: "social"
  },
  "130106": {
    task: "Boating",
    group: "Sports, Exercise, & Recreation",
    "class": "sports",
    animClass: "sports",
    childclass: "sports",
    otherClass: "talking"
  },
  "130107": {
    task: "Bowling",
    group: "Sports, Exercise, & Recreation",
    "class": "sports",
    animClass: "sports",
    childclass: "sports",
    otherClass: "talking"
  },
  "130108": {
    task: "Climbing, spelunking, caving",
    group: "Sports, Exercise, & Recreation",
    "class": "sports",
    animClass: "sports",
    childclass: "sports",
    otherClass: "social"
  },
  "130109": {
    task: "Dancing",
    group: "Sports, Exercise, & Recreation",
    "class": "sports",
    animClass: "sports",
    childclass: "sports",
    otherClass: "talking"
  },
  "130110": {
    task: "Participating in equestrian sports",
    group: "Sports, Exercise, & Recreation",
    "class": "sports",
    animClass: "sports",
    childclass: "sports",
    otherClass: "talking"
  },
  "130111": {
    task: "Fencing",
    group: "Sports, Exercise, & Recreation",
    "class": "sports",
    animClass: "sports",
    childclass: "sports",
    otherClass: "social"
  },
  "130112": {
    task: "Fishing",
    group: "Sports, Exercise, & Recreation",
    "class": "sports",
    animClass: "sports",
    childclass: "sports",
    otherClass: "talking"
  },
  "130113": {
    task: "Playing football",
    group: "Sports, Exercise, & Recreation",
    "class": "sports",
    animClass: "sports",
    childclass: "sports",
    otherClass: "talking"
  },
  "130114": {
    task: "Golfing",
    group: "Sports, Exercise, & Recreation",
    "class": "sports",
    animClass: "sports",
    childclass: "sports",
    otherClass: "sports"
  },
  "130115": {
    task: "Doing gymnastics",
    group: "Sports, Exercise, & Recreation",
    "class": "sports",
    animClass: "sports",
    childclass: "sports",
    otherClass: "sports"
  },
  "130116": {
    task: "Hiking",
    group: "Sports, Exercise, & Recreation",
    "class": "sports",
    animClass: "sports",
    childclass: "sports",
    otherClass: "sports"
  },
  "130117": {
    task: "Playing hockey",
    group: "Sports, Exercise, & Recreation",
    "class": "sports",
    animClass: "sports",
    childclass: "sports",
    otherClass: "social"
  },
  "130118": {
    task: "Hunting",
    group: "Sports, Exercise, & Recreation",
    "class": "sports",
    animClass: "sports",
    childclass: "sports",
    otherClass: "talking"
  },
  "130119": {
    task: "Participating in martial arts",
    group: "Sports, Exercise, & Recreation",
    "class": "sports",
    animClass: "sports",
    childclass: "sports",
    otherClass: "talking"
  },
  "130120": {
    task: "Playing racquet sports",
    group: "Sports, Exercise, & Recreation",
    "class": "sports",
    animClass: "sports",
    childclass: "sports",
    otherClass: "social"
  },
  "130121": {
    task: "Participating in rodeo competitions",
    group: "Sports, Exercise, & Recreation",
    "class": "sports",
    animClass: "sports",
    childclass: "sports",
    otherClass: "talking"
  },
  "130122": {
    task: "Rollerblading",
    group: "Sports, Exercise, & Recreation",
    "class": "sports",
    animClass: "sports",
    childclass: "sports",
    otherClass: "talking"
  },
  "130123": {
    task: "Playing rugby",
    group: "Sports, Exercise, & Recreation",
    "class": "sports",
    animClass: "sports",
    childclass: "sports",
    otherClass: "sports"
  },
  "130124": {
    task: "Running",
    group: "Sports, Exercise, & Recreation",
    "class": "sports",
    animClass: "sports",
    childclass: "sports",
    otherClass: "sports"
  },
  "130125": {
    task: "Skiing, ice skating, snowboarding",
    group: "Sports, Exercise, & Recreation",
    "class": "sports",
    animClass: "sports",
    childclass: "sports",
    otherClass: "sports"
  },
  "130126": {
    task: "Playing soccer",
    group: "Sports, Exercise, & Recreation",
    "class": "sports",
    animClass: "sports",
    childclass: "sports",
    otherClass: "social"
  },
  "130127": {
    task: "Softball",
    group: "Sports, Exercise, & Recreation",
    "class": "sports",
    animClass: "sports",
    childclass: "sports",
    otherClass: "talking"
  },
  "130128": {
    task: "Using cardiovascular equipment",
    group: "Sports, Exercise, & Recreation",
    "class": "sports",
    animClass: "sports",
    childclass: "sports",
    otherClass: "talking"
  },
  "130129": {
    task: "Vehicle touring/racing",
    group: "Sports, Exercise, & Recreation",
    "class": "sports",
    animClass: "sports",
    childclass: "sports",
    otherClass: "social"
  },
  "130130": {
    task: "Playing volleyball",
    group: "Sports, Exercise, & Recreation",
    "class": "sports",
    animClass: "sports",
    childclass: "sports",
    otherClass: "talking"
  },
  "130131": {
    task: "Walking",
    group: "Sports, Exercise, & Recreation",
    "class": "sports",
    animClass: "walking",
    childclass: "walking",
    otherClass: "talking"
  },
  "130132": {
    task: "Participating in water sports",
    group: "Sports, Exercise, & Recreation",
    "class": "sports",
    animClass: "sports",
    childclass: "sports",
    otherClass: "sports"
  },
  "130133": {
    task: "Weightlifting/strength training",
    group: "Sports, Exercise, & Recreation",
    "class": "sports",
    animClass: "sports",
    childclass: "sports",
    otherClass: "sports"
  },
  "130134": {
    task: "Working out, unspecified",
    group: "Sports, Exercise, & Recreation",
    "class": "sports",
    animClass: "sports",
    childclass: "sports",
    otherClass: "sports"
  },
  "130135": {
    task: "Wrestling",
    group: "Sports, Exercise, & Recreation",
    "class": "sports",
    animClass: "sports",
    childclass: "sports",
    otherClass: "sports"
  },
  "130136": {
    task: "Doing yoga",
    group: "Sports, Exercise, & Recreation",
    "class": "sports",
    animClass: "sports",
    childclass: "sports",
    otherClass: "sports"
  },
  "130199": {
    task: "Playing sports n.e.c.*",
    group: "Sports, Exercise, & Recreation",
    "class": "sports",
    animClass: "sports",
    childclass: "sports",
    otherClass: "sports"
  },
  "130201": {
    task: "Watching aerobics",
    group: "Sports, Exercise, & Recreation",
    "class": "sitting",
    animClass: "sitting",
    childclass: "social",
    otherClass: "social"
  },
  "130202": {
    task: "Watching baseball",
    group: "Sports, Exercise, & Recreation",
    "class": "sitting",
    animClass: "sitting",
    childclass: "standing",
    otherClass: "standing"
  },
  "130203": {
    task: "Watching basketball",
    group: "Sports, Exercise, & Recreation",
    "class": "sitting",
    animClass: "sitting",
    childclass: "talking",
    otherClass: "talking"
  },
  "130204": {
    task: "Watching biking",
    group: "Sports, Exercise, & Recreation",
    "class": "sitting",
    animClass: "sitting",
    childclass: "social",
    otherClass: "social"
  },
  "130205": {
    task: "Watching billiards",
    group: "Sports, Exercise, & Recreation",
    "class": "sitting",
    animClass: "sitting",
    childclass: "standing",
    otherClass: "standing"
  },
  "130206": {
    task: "Watching boating",
    group: "Sports, Exercise, & Recreation",
    "class": "sitting",
    animClass: "sitting",
    childclass: "talking",
    otherClass: "talking"
  },
  "130207": {
    task: "Watching bowling",
    group: "Sports, Exercise, & Recreation",
    "class": "sitting",
    animClass: "sitting",
    childclass: "social",
    otherClass: "social"
  },
  "130208": {
    task: "Watching climbing, spelunking, caving",
    group: "Sports, Exercise, & Recreation",
    "class": "sitting",
    animClass: "sitting",
    childclass: "standing",
    otherClass: "standing"
  },
  "130209": {
    task: "Watching dancing",
    group: "Sports, Exercise, & Recreation",
    "class": "sitting",
    animClass: "sitting",
    childclass: "talking",
    otherClass: "talking"
  },
  "130210": {
    task: "Watching equestrian sports",
    group: "Sports, Exercise, & Recreation",
    "class": "sitting",
    animClass: "sitting",
    childclass: "social",
    otherClass: "social"
  },
  "130211": {
    task: "Watching fencing",
    group: "Sports, Exercise, & Recreation",
    "class": "sitting",
    animClass: "sitting",
    childclass: "standing",
    otherClass: "standing"
  },
  "130212": {
    task: "Watching fishing",
    group: "Sports, Exercise, & Recreation",
    "class": "sitting",
    animClass: "sitting",
    childclass: "talking",
    otherClass: "talking"
  },
  "130213": {
    task: "Watching football",
    group: "Sports, Exercise, & Recreation",
    "class": "sitting",
    animClass: "sitting",
    childclass: "social",
    otherClass: "social"
  },
  "130214": {
    task: "Watching golfing",
    group: "Sports, Exercise, & Recreation",
    "class": "sitting",
    animClass: "sitting",
    childclass: "standing",
    otherClass: "standing"
  },
  "130215": {
    task: "Watching gymnastics",
    group: "Sports, Exercise, & Recreation",
    "class": "sitting",
    animClass: "sitting",
    childclass: "talking",
    otherClass: "talking"
  },
  "130216": {
    task: "Watching hockey",
    group: "Sports, Exercise, & Recreation",
    "class": "sitting",
    animClass: "sitting",
    childclass: "social",
    otherClass: "social"
  },
  "130217": {
    task: "Watching martial arts",
    group: "Sports, Exercise, & Recreation",
    "class": "sitting",
    animClass: "sitting",
    childclass: "standing",
    otherClass: "standing"
  },
  "130218": {
    task: "Watching racquet sports",
    group: "Sports, Exercise, & Recreation",
    "class": "sitting",
    animClass: "sitting",
    childclass: "talking",
    otherClass: "talking"
  },
  "130219": {
    task: "Watching rodeo competitions",
    group: "Sports, Exercise, & Recreation",
    "class": "sitting",
    animClass: "sitting",
    childclass: "social",
    otherClass: "social"
  },
  "130220": {
    task: "Watching rollerblading",
    group: "Sports, Exercise, & Recreation",
    "class": "sitting",
    animClass: "sitting",
    childclass: "standing",
    otherClass: "standing"
  },
  "130221": {
    task: "Watching rugby",
    group: "Sports, Exercise, & Recreation",
    "class": "sitting",
    animClass: "sitting",
    childclass: "talking",
    otherClass: "talking"
  },
  "130222": {
    task: "Watching running",
    group: "Sports, Exercise, & Recreation",
    "class": "sitting",
    animClass: "sitting",
    childclass: "social",
    otherClass: "social"
  },
  "130223": {
    task: "Watching skiing, ice skating, snowboarding",
    group: "Sports, Exercise, & Recreation",
    "class": "sitting",
    animClass: "sitting",
    childclass: "standing",
    otherClass: "standing"
  },
  "130224": {
    task: "Watching soccer",
    group: "Sports, Exercise, & Recreation",
    "class": "sitting",
    animClass: "sitting",
    childclass: "talking",
    otherClass: "talking"
  },
  "130225": {
    task: "Watching softball",
    group: "Sports, Exercise, & Recreation",
    "class": "sitting",
    animClass: "sitting",
    childclass: "social",
    otherClass: "social"
  },
  "130226": {
    task: "Watching vehicle touring/racing",
    group: "Sports, Exercise, & Recreation",
    "class": "sitting",
    animClass: "sitting",
    childclass: "standing",
    otherClass: "standing"
  },
  "130227": {
    task: "Watching volleyball",
    group: "Sports, Exercise, & Recreation",
    "class": "sitting",
    animClass: "sitting",
    childclass: "talking",
    otherClass: "talking"
  },
  "130228": {
    task: "Watching walking",
    group: "Sports, Exercise, & Recreation",
    "class": "sitting",
    animClass: "sitting",
    childclass: "social",
    otherClass: "social"
  },
  "130229": {
    task: "Watching water sports",
    group: "Sports, Exercise, & Recreation",
    "class": "sitting",
    animClass: "sitting",
    childclass: "standing",
    otherClass: "standing"
  },
  "130230": {
    task: "Watching weightlifting/strength training",
    group: "Sports, Exercise, & Recreation",
    "class": "sitting",
    animClass: "sitting",
    childclass: "talking",
    otherClass: "talking"
  },
  "130231": {
    task: "Watching people working out, unspecified",
    group: "Sports, Exercise, & Recreation",
    "class": "sitting",
    animClass: "sitting",
    childclass: "social",
    otherClass: "social"
  },
  "130232": {
    task: "Watching wrestling",
    group: "Sports, Exercise, & Recreation",
    "class": "sitting",
    animClass: "sitting",
    childclass: "standing",
    otherClass: "standing"
  },
  "130299": {
    task: "Attending sporting events, n.e.c.*",
    group: "Sports, Exercise, & Recreation",
    "class": "sports",
    animClass: "sitting",
    childclass: "sitting",
    otherClass: "sitting"
  },
  "130301": {
    task: "Waiting related to playing sports or exercising",
    group: "Sports, Exercise, & Recreation",
    "class": "sports",
    animClass: "standing",
    childclass: "standing",
    otherClass: "standing"
  },
  "130302": {
    task: "Waiting related to attending sporting events",
    group: "Sports, Exercise, & Recreation",
    "class": "sports",
    animClass: "standing",
    childclass: "standing",
    otherClass: "standing"
  },
  "130399": {
    task: "Waiting associated with sports, exercise, & recreation, n.e.c.*",
    group: "Sports, Exercise, & Recreation",
    "class": "sports",
    animClass: "standing",
    childclass: "standing",
    otherClass: "standing"
  },
  "130401": {
    task: "Security related to playing sports or exercising",
    group: "Sports, Exercise, & Recreation",
    "class": "sports",
    animClass: "standing",
    childclass: "standing",
    otherClass: "standing"
  },
  "130402": {
    task: "Security related to attending sporting events",
    group: "Sports, Exercise, & Recreation",
    "class": "sports",
    animClass: "standing",
    childclass: "standing",
    otherClass: "standing"
  },
  "130499": {
    task: "Security related to sports, exercise, & recreation, n.e.c.*",
    group: "Sports, Exercise, & Recreation",
    "class": "sports",
    animClass: "standing",
    childclass: "standing",
    otherClass: "standing"
  },
  "139999": {
    task: "Sports, exercise, & recreation, n.e.c.*",
    group: "Sports, Exercise, & Recreation",
    "class": "sports",
    animClass: "sports",
    childclass: "sports",
    otherClass: "sports"
  },
  "140101": {
    task: "Attending religious services",
    group: "Religious and Spiritual Activities",
    "class": "religious",
    animClass: "sitting",
    childclass: "sitting",
    otherClass: "sitting"
  },
  "140102": {
    task: "Participation in religious practices",
    group: "Religious and Spiritual Activities",
    "class": "religious",
    animClass: "sitting",
    childclass: "sitting",
    otherClass: "sitting"
  },
  "140103": {
    task: "Waiting associated w/religious & spiritual activities",
    group: "Religious and Spiritual Activities",
    "class": "religious",
    animClass: "sitting",
    childclass: "sitting",
    otherClass: "sitting"
  },
  "140104": {
    task: "Security procedures rel. to religious & spiritual activities",
    group: "Religious and Spiritual Activities",
    "class": "religious",
    animClass: "sitting",
    childclass: "sitting",
    otherClass: "sitting"
  },
  "140105": {
    task: "Religious education activities",
    group: "Religious and Spiritual Activities",
    "class": "religious",
    animClass: "sitting",
    childclass: "sitting",
    otherClass: "sitting"
  },
  "149999": {
    task: "Religious and spiritual activities, n.e.c.*",
    group: "Religious and Spiritual Activities",
    "class": "religious",
    animClass: "sitting",
    childclass: "sitting",
    otherClass: "sitting"
  },
  "150101": {
    task: "Computer use",
    group: "Volunteer Activities",
    "class": "volunteer",
    animClass: "workingdesk",
    childclass: "sitting",
    otherClass: "standing"
  },
  "150102": {
    task: "Organizing and preparing",
    group: "Volunteer Activities",
    "class": "volunteer",
    animClass: "workingdesk",
    childclass: "sports",
    otherClass: "sitting"
  },
  "150103": {
    task: "Reading",
    group: "Volunteer Activities",
    "class": "volunteer",
    animClass: "workingdesk",
    childclass: "walking",
    otherClass: "social"
  },
  "150104": {
    task: "Telephone calls (except hotline counseling)",
    group: "Volunteer Activities",
    "class": "volunteer",
    animClass: "phone",
    childclass: "standing",
    otherClass: "phone"
  },
  "150105": {
    task: "Writing",
    group: "Volunteer Activities",
    "class": "volunteer",
    animClass: "workingdesk",
    childclass: "sitting",
    otherClass: "standing"
  },
  "150106": {
    task: "Fundraising",
    group: "Volunteer Activities",
    "class": "volunteer",
    animClass: "workingdesk",
    childclass: "sitting",
    otherClass: "sitting"
  },
  "150199": {
    task: "Administrative & support activities, n.e.c.*",
    group: "Volunteer Activities",
    "class": "volunteer",
    animClass: "workingdesk",
    childclass: "sports",
    otherClass: "social"
  },
  "150201": {
    task: "Food preparation, presentation, clean-up",
    group: "Volunteer Activities",
    "class": "volunteer",
    animClass: "foodprep",
    childclass: "walking",
    otherClass: "foodprep"
  },
  "150202": {
    task: "Collecting & delivering clothing & other goods",
    group: "Volunteer Activities",
    "class": "volunteer",
    animClass: "walking",
    childclass: "social",
    otherClass: "walking"
  },
  "150203": {
    task: "Providing care",
    group: "Volunteer Activities",
    "class": "volunteer",
    animClass: "careadult",
    childclass: "social",
    otherClass: "standing"
  },
  "150204": {
    task: "Teaching, leading, counseling, mentoring",
    group: "Volunteer Activities",
    "class": "volunteer",
    animClass: "talking",
    childclass: "walking",
    otherClass: "talking"
  },
  "150299": {
    task: "Social service & care activities, n.e.c.*",
    group: "Volunteer Activities",
    "class": "volunteer",
    animClass: "careadult",
    childclass: "social",
    otherClass: "standing"
  },
  "150301": {
    task: "Building houses, wildlife sites, & other structures",
    group: "Volunteer Activities",
    "class": "volunteer",
    animClass: "workinglabor",
    childclass: "sitting",
    otherClass: "standing"
  },
  "150302": {
    task: "Indoor & outdoor maintenance, repair, & clean-up",
    group: "Volunteer Activities",
    "class": "volunteer",
    animClass: "workinglabor",
    childclass: "sports",
    otherClass: "sitting"
  },
  "150399": {
    task: "Indoor & outdoor maintenance, building & clean-up activities, n.e.c.*",
    group: "Volunteer Activities",
    "class": "volunteer",
    animClass: "workinglabor",
    childclass: "walking",
    otherClass: "social"
  },
  "150401": {
    task: "Performing",
    group: "Volunteer Activities",
    "class": "volunteer",
    animClass: "talking",
    childclass: "social",
    otherClass: "talking"
  },
  "150402": {
    task: "Serving at volunteer events & cultural activities",
    group: "Volunteer Activities",
    "class": "volunteer",
    animClass: "standing",
    childclass: "sitting",
    otherClass: "standing"
  },
  "150499": {
    task: "Participating in performance & cultural activities, n.e.c.*",
    group: "Volunteer Activities",
    "class": "volunteer",
    animClass: "talking",
    childclass: "sitting",
    otherClass: "talking"
  },
  "150501": {
    task: "Attending meetings, conferences, & training",
    group: "Volunteer Activities",
    "class": "volunteer",
    animClass: "sitting",
    childclass: "sports",
    otherClass: "sitting"
  },
  "150599": {
    task: "Attending meetings, conferences, & training, n.e.c.*",
    group: "Volunteer Activities",
    "class": "volunteer",
    animClass: "sitting",
    childclass: "walking",
    otherClass: "sitting"
  },
  "150601": {
    task: "Public health activities",
    group: "Volunteer Activities",
    "class": "volunteer",
    animClass: "standing",
    childclass: "social",
    otherClass: "standing"
  },
  "150602": {
    task: "Public safety activities",
    group: "Volunteer Activities",
    "class": "volunteer",
    animClass: "standing",
    childclass: "social",
    otherClass: "sitting"
  },
  "150699": {
    task: "Public health & safety activities, n.e.c.*",
    group: "Volunteer Activities",
    "class": "volunteer",
    animClass: "standing",
    childclass: "walking",
    otherClass: "social"
  },
  "159989": {
    task: "Volunteer activities, n.e.c.*",
    group: "Volunteer Activities",
    "class": "volunteer",
    animClass: "standing",
    childclass: "social",
    otherClass: "standing"
  },
  "160101": {
    task: "Telephone calls to/from family members",
    group: "Telephone Calls",
    "class": "telephone",
    animClass: "phone",
    childclass: "sitting",
    otherClass: "sitting"
  },
  "160102": {
    task: "Telephone calls to/from friends, neighbors, or acquaintances",
    group: "Telephone Calls",
    "class": "telephone",
    animClass: "phone",
    childclass: "sports",
    otherClass: "social"
  },
  "160103": {
    task: "Telephone calls to/from education services providers",
    group: "Telephone Calls",
    "class": "telephone",
    animClass: "phone",
    childclass: "walking",
    otherClass: "phone"
  },
  "160104": {
    task: "Telephone calls to/from salespeople",
    group: "Telephone Calls",
    "class": "telephone",
    animClass: "phone",
    childclass: "social",
    otherClass: "phone"
  },
  "160105": {
    task: "Telephone calls to/from professional or personal care svcs providers",
    group: "Telephone Calls",
    "class": "telephone",
    animClass: "phone",
    childclass: "sitting",
    otherClass: "phone"
  },
  "160106": {
    task: "Telephone calls to/from household services providers",
    group: "Telephone Calls",
    "class": "telephone",
    animClass: "phone",
    childclass: "sitting",
    otherClass: "phone"
  },
  "160107": {
    task: "Telephone calls to/from paid child or adult care providers",
    group: "Telephone Calls",
    "class": "telephone",
    animClass: "phone",
    childclass: "sports",
    otherClass: "phone"
  },
  "160108": {
    task: "Telephone calls to/from government officials",
    group: "Telephone Calls",
    "class": "telephone",
    animClass: "phone",
    childclass: "walking",
    otherClass: "phone"
  },
  "169989": {
    task: "Telephone calls, n.e.c.*",
    group: "Telephone Calls",
    "class": "telephone",
    animClass: "phone",
    childclass: "social",
    otherClass: "phone"
  },
  "180101": {
    task: "Travel related to personal care",
    group: "Traveling",
    "class": "traveling",
    animClass: "walking",
    childclass: "walking",
    otherClass: "walking"
  },
  "180199": {
    task: "Travel related to personal care, n.e.c.*",
    group: "Traveling",
    "class": "traveling",
    animClass: "walking",
    childclass: "walking",
    otherClass: "walking"
  },
  "180280": {
    task: "Travel related to household activities",
    group: "Traveling",
    "class": "traveling",
    animClass: "walking",
    childclass: "walking",
    otherClass: "walking"
  },
  "180381": {
    task: "Travel related to caring for and helping hh children",
    group: "Traveling",
    "class": "traveling",
    animClass: "walking",
    childclass: "walking",
    otherClass: "walking"
  },
  "180382": {
    task: "Travel related to caring for and helping hh adults",
    group: "Traveling",
    "class": "traveling",
    animClass: "walking",
    childclass: "walking",
    otherClass: "walking"
  },
  "180399": {
    task: "Travel rel. to caring for & helping hh members, n.e.c.*",
    group: "Traveling",
    "class": "traveling",
    animClass: "walking",
    childclass: "walking",
    otherClass: "walking"
  },
  "180481": {
    task: "Travel related to caring for and helping nonhh children",
    group: "Traveling",
    "class": "traveling",
    animClass: "walking",
    childclass: "walking",
    otherClass: "walking"
  },
  "180482": {
    task: "Travel related to caring for and helping nonhh adults",
    group: "Traveling",
    "class": "traveling",
    animClass: "walking",
    childclass: "walking",
    otherClass: "walking"
  },
  "180499": {
    task: "Travel rel. to caring for & helping nonhh members, n.e.c.*",
    group: "Traveling",
    "class": "traveling",
    animClass: "walking",
    childclass: "walking",
    otherClass: "walking"
  },
  "180501": {
    task: "Travel related to working",
    group: "Traveling",
    "class": "traveling",
    animClass: "walking",
    childclass: "walking",
    otherClass: "walking"
  },
  "180502": {
    task: "Travel related to work-related activities",
    group: "Traveling",
    "class": "traveling",
    animClass: "walking",
    childclass: "walking",
    otherClass: "walking"
  },
  "180589": {
    task: "Travel related to work, n.e.c.*",
    group: "Traveling",
    "class": "traveling",
    animClass: "walking",
    childclass: "walking",
    otherClass: "walking"
  },
  "180601": {
    task: "Travel related to taking class",
    group: "Traveling",
    "class": "traveling",
    animClass: "walking",
    childclass: "walking",
    otherClass: "walking"
  },
  "180682": {
    task: "Travel related to education (except taking class)",
    group: "Traveling",
    "class": "traveling",
    animClass: "walking",
    childclass: "walking",
    otherClass: "walking"
  },
  "180699": {
    task: "Travel related to education, n.e.c.*",
    group: "Traveling",
    "class": "traveling",
    animClass: "walking",
    childclass: "walking",
    otherClass: "walking"
  },
  "180701": {
    task: "Travel related to grocery shopping",
    group: "Traveling",
    "class": "traveling",
    animClass: "walking",
    childclass: "walking",
    otherClass: "walking"
  },
  "180782": {
    task: "Travel related to shopping (except grocery shopping)",
    group: "Traveling",
    "class": "traveling",
    animClass: "walking",
    childclass: "walking",
    otherClass: "walking"
  },
  "180801": {
    task: "Travel related to using childcare services",
    group: "Traveling",
    "class": "traveling",
    animClass: "walking",
    childclass: "walking",
    otherClass: "walking"
  },
  "180802": {
    task: "Travel related to using financial services and banking",
    group: "Traveling",
    "class": "traveling",
    animClass: "walking",
    childclass: "walking",
    otherClass: "walking"
  },
  "180803": {
    task: "Travel related to using legal services",
    group: "Traveling",
    "class": "traveling",
    animClass: "walking",
    childclass: "walking",
    otherClass: "walking"
  },
  "180804": {
    task: "Travel related to using medical services",
    group: "Traveling",
    "class": "traveling",
    animClass: "walking",
    childclass: "walking",
    otherClass: "walking"
  },
  "180805": {
    task: "Travel related to using personal care services",
    group: "Traveling",
    "class": "traveling",
    animClass: "walking",
    childclass: "walking",
    otherClass: "walking"
  },
  "180806": {
    task: "Travel related to using real estate services",
    group: "Traveling",
    "class": "traveling",
    animClass: "walking",
    childclass: "walking",
    otherClass: "walking"
  },
  "180807": {
    task: "Travel related to using veterinary services",
    group: "Traveling",
    "class": "traveling",
    animClass: "walking",
    childclass: "walking",
    otherClass: "walking"
  },
  "180899": {
    task: "Travel rel. to using prof. & personal care services, n.e.c.*",
    group: "Traveling",
    "class": "traveling",
    animClass: "walking",
    childclass: "walking",
    otherClass: "walking"
  },
  "180901": {
    task: "Travel related to using household services",
    group: "Traveling",
    "class": "traveling",
    animClass: "walking",
    childclass: "walking",
    otherClass: "walking"
  },
  "180902": {
    task: "Travel related to using home main./repair/décor./construction svcs",
    group: "Traveling",
    "class": "traveling",
    animClass: "walking",
    childclass: "walking",
    otherClass: "walking"
  },
  "180903": {
    task: "Travel related to using pet services (not vet)",
    group: "Traveling",
    "class": "traveling",
    animClass: "walking",
    childclass: "walking",
    otherClass: "walking"
  },
  "180904": {
    task: "Travel related to using lawn and garden services",
    group: "Traveling",
    "class": "traveling",
    animClass: "walking",
    childclass: "walking",
    otherClass: "walking"
  },
  "180905": {
    task: "Travel related to using vehicle maintenance & repair services",
    group: "Traveling",
    "class": "traveling",
    animClass: "walking",
    childclass: "walking",
    otherClass: "walking"
  },
  "180999": {
    task: "Travel related to using household services, n.e.c.*",
    group: "Traveling",
    "class": "traveling",
    animClass: "walking",
    childclass: "walking",
    otherClass: "walking"
  },
  "181002": {
    task: "Travel related to civic obligations & participation",
    group: "Traveling",
    "class": "traveling",
    animClass: "walking",
    childclass: "walking",
    otherClass: "walking"
  },
  "181081": {
    task: "Travel related to using government services",
    group: "Traveling",
    "class": "traveling",
    animClass: "walking",
    childclass: "walking",
    otherClass: "walking"
  },
  "181099": {
    task: "Travel rel. to govt svcs & civic obligations, n.e.c.*",
    group: "Traveling",
    "class": "traveling",
    animClass: "walking",
    childclass: "walking",
    otherClass: "walking"
  },
  "181101": {
    task: "Travel related to eating and drinking",
    group: "Traveling",
    "class": "traveling",
    animClass: "walking",
    childclass: "walking",
    otherClass: "walking"
  },
  "181199": {
    task: "Travel related to eating and drinking, n.e.c.*",
    group: "Traveling",
    "class": "traveling",
    animClass: "walking",
    childclass: "walking",
    otherClass: "walking"
  },
  "181201": {
    task: "Travel related to socializing and communicating",
    group: "Traveling",
    "class": "traveling",
    animClass: "walking",
    childclass: "walking",
    otherClass: "walking"
  },
  "181202": {
    task: "Travel related to attending or hosting social events",
    group: "Traveling",
    "class": "traveling",
    animClass: "walking",
    childclass: "walking",
    otherClass: "walking"
  },
  "181204": {
    task: "Travel related to arts and entertainment",
    group: "Traveling",
    "class": "traveling",
    animClass: "walking",
    childclass: "walking",
    otherClass: "walking"
  },
  "181283": {
    task: "Travel related to relaxing and leisure",
    group: "Traveling",
    "class": "traveling",
    animClass: "walking",
    childclass: "walking",
    otherClass: "walking"
  },
  "181299": {
    task: "Travel rel. to socializing, relaxing, & leisure, n.e.c.*",
    group: "Traveling",
    "class": "traveling",
    animClass: "walking",
    childclass: "walking",
    otherClass: "walking"
  },
  "181301": {
    task: "Travel related to participating in sports/exercise/recreation",
    group: "Traveling",
    "class": "traveling",
    animClass: "walking",
    childclass: "walking",
    otherClass: "walking"
  },
  "181302": {
    task: "Travel related to attending sporting/recreational events",
    group: "Traveling",
    "class": "traveling",
    animClass: "walking",
    childclass: "walking",
    otherClass: "walking"
  },
  "181399": {
    task: "Travel related to sports, exercise, & recreation, n.e.c.*",
    group: "Traveling",
    "class": "traveling",
    animClass: "walking",
    childclass: "walking",
    otherClass: "walking"
  },
  "181401": {
    task: "Travel related to religious/spiritual practices",
    group: "Traveling",
    "class": "traveling",
    animClass: "walking",
    childclass: "walking",
    otherClass: "walking"
  },
  "181499": {
    task: "Travel rel. to religious/spiritual activities, n.e.c.*",
    group: "Traveling",
    "class": "traveling",
    animClass: "walking",
    childclass: "walking",
    otherClass: "walking"
  },
  "181501": {
    task: "Travel related to volunteering",
    group: "Traveling",
    "class": "traveling",
    animClass: "walking",
    childclass: "walking",
    otherClass: "walking"
  },
  "181599": {
    task: "Travel related to volunteer activities, n.e.c.*",
    group: "Traveling",
    "class": "traveling",
    animClass: "walking",
    childclass: "walking",
    otherClass: "walking"
  },
  "181601": {
    task: "Travel related to phone calls",
    group: "Traveling",
    "class": "traveling",
    animClass: "walking",
    childclass: "walking",
    otherClass: "walking"
  },
  "181699": {
    task: "Travel rel. to phone calls, n.e.c.*",
    group: "Traveling",
    "class": "traveling",
    animClass: "walking",
    childclass: "walking",
    otherClass: "walking"
  },
  "181801": {
    task: "Security procedures related to traveling",
    group: "Traveling",
    "class": "traveling",
    animClass: "walking",
    childclass: "walking",
    otherClass: "walking"
  },
  "181899": {
    task: "Security procedures related to traveling, n.e.c.*",
    group: "Traveling",
    "class": "traveling",
    animClass: "walking",
    childclass: "walking",
    otherClass: "walking"
  },
  "189999": {
    task: "Traveling, n.e.c.*",
    group: "Traveling",
    "class": "traveling",
    animClass: "walking",
    childclass: "walking",
    otherClass: "walking"
  },
  "500101": {
    task: "Insufficient detail in verbatim",
    group: "Data Codes",
    "class": "data",
    animClass: "standing",
    childclass: "standing",
    otherClass: "standing"
  },
  "500103": {
    task: "Missing travel or destination",
    group: "Data Codes",
    "class": "data",
    animClass: "walking",
    childclass: "walking",
    otherClass: "walking"
  },
  "500104": {
    task: "Recorded simultaneous activities incorrectly",
    group: "Data Codes",
    "class": "data",
    animClass: "standing",
    childclass: "standing",
    otherClass: "standing"
  },
  "500105": {
    task: "Respondent refused to provide information/",
    group: "Data Codes",
    "class": "data",
    animClass: "standing",
    childclass: "standing",
    otherClass: "standing"
  },
  "500106": {
    task: "Gap/can't remember",
    group: "Data Codes",
    "class": "data",
    animClass: "standing",
    childclass: "standing",
    otherClass: "standing"
  },
  "500107": {
    task: "Unable to code activity at 1st tier",
    group: "Data Codes",
    "class": "data",
    animClass: "standing",
    childclass: "standing",
    otherClass: "standing"
  },
  "509989": {
    task: "Data codes, n.e.c.*",
    group: "Data Codes",
    "class": "data",
    animClass: "standing",
    childclass: "standing",
    otherClass: "standing"
  }
};
const TRSPPRES = {
  "1": "Spouse",
  "2": "Unmarried partner",
  "3": "None"
};
const TESCHENR = {
  "1": "Yes",
  "2": "No",
  "-1": "--"
};
const WU = {
  "10301": {
    happy: 3.735655912,
    interact: 1.431386464,
    meaning: 2.844621775
  },
  "10399": {
    happy: 0,
    interact: 1,
    meaning: 0
  },
  "20101": {
    happy: 3.840101742,
    interact: 1.620375976,
    meaning: 4.019106715
  },
  "20102": {
    happy: 4.134932781,
    interact: 1.593098665,
    meaning: 4.007823229
  },
  "20103": {
    happy: 4.637580586,
    interact: 1.764466811,
    meaning: 5.015302126
  },
  "20104": {
    happy: 4.257082166,
    interact: 1.33447959,
    meaning: 3.526287547
  },
  "20199": {
    happy: 5,
    interact: 2,
    meaning: 5
  },
  "20201": {
    happy: 4.504444596,
    interact: 1.368052781,
    meaning: 4.402151512
  },
  "20202": {
    happy: 5.363005614,
    interact: 1.133237542,
    meaning: 5.022637574
  },
  "20203": {
    happy: 3.784267268,
    interact: 1.547010731,
    meaning: 3.717898593
  },
  "20301": {
    happy: 4.515433364,
    interact: 1.477441521,
    meaning: 5.094335049
  },
  "20302": {
    happy: 4.555534054,
    interact: 1.222232973,
    meaning: 5.333301081
  },
  "20303": {
    happy: 4.871935754,
    interact: 1.497081472,
    meaning: 4.971943169
  },
  "20401": {
    happy: 4.316797844,
    interact: 1.584681598,
    meaning: 4.358893223
  },
  "20402": {
    happy: 3.146482502,
    interact: 1.310170735,
    meaning: 3.939675093
  },
  "20501": {
    happy: 4.619433422,
    interact: 1.69300343,
    meaning: 4.500061478
  },
  "20502": {
    happy: 4.349268918,
    interact: 1.605215785,
    meaning: 3.681853859
  },
  "20681": {
    happy: 4.592634646,
    interact: 1.670009825,
    meaning: 4.760341364
  },
  "20699": {
    happy: 5,
    interact: 1,
    meaning: 5
  },
  "20701": {
    happy: 4.061074436,
    interact: 1.5906371,
    meaning: 4.861328266
  },
  "20799": {
    happy: 4,
    interact: 1,
    meaning: 3
  },
  "20801": {
    happy: 3.743144813,
    interact: 1.696425213,
    meaning: 5.017267744
  },
  "20899": {
    happy: 4,
    interact: 2,
    meaning: 2
  },
  "20901": {
    happy: 2.791729576,
    interact: 1.675483895,
    meaning: 4.52434741
  },
  "20902": {
    happy: 3.981723879,
    interact: 1.464837007,
    meaning: 4.255305695
  },
  "20903": {
    happy: 4.30996418,
    interact: 1.406118241,
    meaning: 4.531092123
  },
  "20904": {
    happy: 3.732604401,
    interact: 1.517446976,
    meaning: 3.555605389
  },
  "20905": {
    happy: 3.543431566,
    interact: 1.6308705,
    meaning: 3.561311318
  },
  "20999": {
    happy: 3,
    interact: 2,
    meaning: 3
  },
  "29999": {
    happy: 2,
    interact: 2,
    meaning: 4
  },
  "30101": {
    happy: 4.628512419,
    interact: 1.16296119,
    meaning: 5.21334551
  },
  "30102": {
    happy: 5.470493613,
    interact: 1.480974894,
    meaning: 5.615129692
  },
  "30103": {
    happy: 5.475872354,
    interact: 1.134799302,
    meaning: 5.661702639
  },
  "30104": {
    happy: 4.993144576,
    interact: 1,
    meaning: 5.647934523
  },
  "30105": {
    happy: 6,
    interact: 1,
    meaning: 6
  },
  "30108": {
    happy: 4.09826648,
    interact: 1.214073304,
    meaning: 4.847932065
  },
  "30109": {
    happy: 4.963972521,
    interact: 1.133650953,
    meaning: 4.599450207
  },
  "30110": {
    happy: 4.666424557,
    interact: 1.243218367,
    meaning: 4.987739745
  },
  "30111": {
    happy: 5.192533232,
    interact: 1.36639859,
    meaning: 5.499230039
  },
  "30112": {
    happy: 4.608260074,
    interact: 1.219602439,
    meaning: 4.598506268
  },
  "30186": {
    happy: 5.252370664,
    interact: 1.011742914,
    meaning: 5.218149545
  },
  "30199": {
    happy: 6,
    interact: 1,
    meaning: 6
  },
  "30201": {
    happy: 4.809843164,
    interact: 1.043753552,
    meaning: 5.752678577
  },
  "30203": {
    happy: 4.95264716,
    interact: 1,
    meaning: 5.853958689
  },
  "30299": {
    happy: 3.686884139,
    interact: 1,
    meaning: 6
  },
  "30301": {
    happy: 2.307225533,
    interact: 1.219852875,
    meaning: 5.687725668
  },
  "30302": {
    happy: 5.791287436,
    interact: 1,
    meaning: 5.582574872
  },
  "30303": {
    happy: 4.802790875,
    interact: 1.277315332,
    meaning: 5.445369335
  },
  "30401": {
    happy: 4.004684865,
    interact: 1.064581179,
    meaning: 4.191036897
  },
  "30402": {
    happy: 5,
    interact: 1,
    meaning: 6
  },
  "30403": {
    happy: 2.308200936,
    interact: 1,
    meaning: 4.030780618
  },
  "30404": {
    happy: 5,
    interact: 1.159868224,
    meaning: 6
  },
  "30405": {
    happy: 1.166061495,
    interact: 1,
    meaning: 5.708484626
  },
  "30499": {
    happy: 0,
    interact: 1,
    meaning: 6
  },
  "30501": {
    happy: 4.670527029,
    interact: 1.05320807,
    meaning: 6
  },
  "30503": {
    happy: 3.644074097,
    interact: 1.158488655,
    meaning: 3.799681796
  },
  "30504": {
    happy: 3.300805239,
    interact: 1.915206152,
    meaning: 1.895693938
  },
  "30599": {
    happy: 4,
    interact: 1,
    meaning: 3
  },
  "40101": {
    happy: 5.104124685,
    interact: 1.073534454,
    meaning: 5.200066577
  },
  "40102": {
    happy: 5.925706756,
    interact: 1,
    meaning: 6
  },
  "40103": {
    happy: 5.909357806,
    interact: 1.106304168,
    meaning: 5.923529153
  },
  "40104": {
    happy: 6,
    interact: 1,
    meaning: 6
  },
  "40105": {
    happy: 6,
    interact: 1,
    meaning: 6
  },
  "40108": {
    happy: 4.830001906,
    interact: 1,
    meaning: 4.705317517
  },
  "40109": {
    happy: 5.625342494,
    interact: 1.278065004,
    meaning: 4.331609976
  },
  "40110": {
    happy: 5.572554584,
    interact: 1.224762444,
    meaning: 5.775237556
  },
  "40111": {
    happy: 6,
    interact: 1.573593164,
    meaning: 6
  },
  "40112": {
    happy: 4.430772651,
    interact: 1.480501293,
    meaning: 4.493292528
  },
  "40186": {
    happy: 6,
    interact: 1.090832453,
    meaning: 6
  },
  "40199": {
    happy: 4,
    interact: 1,
    meaning: 4
  },
  "40201": {
    happy: 6,
    interact: 1,
    meaning: 6
  },
  "40203": {
    happy: 5,
    interact: 2,
    meaning: 5
  },
  "40401": {
    happy: 4.725545098,
    interact: 1.2562164,
    meaning: 4.579706621
  },
  "40402": {
    happy: 5.478418724,
    interact: 2,
    meaning: 5.869604681
  },
  "40403": {
    happy: 4.600846892,
    interact: 1,
    meaning: 6
  },
  "40405": {
    happy: 3.783937402,
    interact: 1.608031299,
    meaning: 6
  },
  "40499": {
    happy: 3.928248441,
    interact: 1,
    meaning: 6
  },
  "40501": {
    happy: 4.534075105,
    interact: 1.260548985,
    meaning: 5.453141213
  },
  "40502": {
    happy: 5.269170064,
    interact: 1.295901925,
    meaning: 4.939500244
  },
  "40503": {
    happy: 3.87481296,
    interact: 1.339175297,
    meaning: 3.887200292
  },
  "40504": {
    happy: 2.930337534,
    interact: 1,
    meaning: 3.075843386
  },
  "40505": {
    happy: 6,
    interact: 1,
    meaning: 6
  },
  "40506": {
    happy: 3.860083754,
    interact: 1.003510601,
    meaning: 5.840815462
  },
  "40507": {
    happy: 4.901548936,
    interact: 1.090710733,
    meaning: 5.082267528
  },
  "40508": {
    happy: 2.943970769,
    interact: 1.558625097,
    meaning: 4.932970176
  },
  "40599": {
    happy: 5.573576478,
    interact: 1,
    meaning: 5.786006807
  },
  "50101": {
    happy: 3.83352805,
    interact: 1.156794619,
    meaning: 4.103734806
  },
  "50102": {
    happy: 3.719706316,
    interact: 1.30865192,
    meaning: 3.691081733
  },
  "50189": {
    happy: 5.146613527,
    interact: 1.798289978,
    meaning: 3.778063286
  },
  "50201": {
    happy: 5,
    interact: 1,
    meaning: 4.411764706
  },
  "50301": {
    happy: 6,
    interact: 2,
    meaning: 6
  },
  "50303": {
    happy: 4.017823205,
    interact: 1.523519693,
    meaning: 4.512524957
  },
  "50304": {
    happy: 4,
    interact: 1,
    meaning: 4
  },
  "50389": {
    happy: 3.937701307,
    interact: 1.517351114,
    meaning: 4.004114753
  },
  "50403": {
    happy: 6,
    interact: 1,
    meaning: 6
  },
  "50481": {
    happy: 3.201942344,
    interact: 1.268968537,
    meaning: 4.557233002
  },
  "50499": {
    happy: 5,
    interact: 2,
    meaning: 5
  },
  "60101": {
    happy: 3.866703064,
    interact: 1.131754713,
    meaning: 4.163845995
  },
  "60102": {
    happy: 3.701335605,
    interact: 1,
    meaning: 5.579262712
  },
  "60202": {
    happy: 4.536904818,
    interact: 1,
    meaning: 5.010644363
  },
  "60289": {
    happy: 4.552657571,
    interact: 1,
    meaning: 3.105315142
  },
  "60301": {
    happy: 3.124429767,
    interact: 1.684522437,
    meaning: 3.94832927
  },
  "60302": {
    happy: 4.583895688,
    interact: 2,
    meaning: 5.610736208
  },
  "60399": {
    happy: 3.089778186,
    interact: 2,
    meaning: 4.9978095
  },
  "69999": {
    happy: 4.35164232,
    interact: 2,
    meaning: 5.546115379
  },
  "70101": {
    happy: 4.153861668,
    interact: 1.336679544,
    meaning: 4.313639863
  },
  "70102": {
    happy: 4.322984217,
    interact: 1.526629958,
    meaning: 4.039272655
  },
  "70103": {
    happy: 4.379030802,
    interact: 1.144947015,
    meaning: 3.896554242
  },
  "70104": {
    happy: 4.511436124,
    interact: 1.231735237,
    meaning: 4.264742048
  },
  "70105": {
    happy: 5.007737193,
    interact: 1.165080667,
    meaning: 5.165080667
  },
  "70201": {
    happy: 3.649694401,
    interact: 1.72993888,
    meaning: 4.379633281
  },
  "80101": {
    happy: 3,
    interact: 1,
    meaning: 1.806524565
  },
  "80201": {
    happy: 3.79958701,
    interact: 1.547946566,
    meaning: 2.268918548
  },
  "80203": {
    happy: 4,
    interact: 1,
    meaning: 5
  },
  "80301": {
    happy: 6,
    interact: 2,
    meaning: 6
  },
  "80401": {
    happy: 3.875257044,
    interact: 1.194670025,
    meaning: 4.78206337
  },
  "80402": {
    happy: 1.149509265,
    interact: 1,
    meaning: 5.75058551
  },
  "80403": {
    happy: 3.482748554,
    interact: 1.262370254,
    meaning: 4.316807681
  },
  "80501": {
    happy: 5.110463631,
    interact: 1.076083866,
    meaning: 4.797137002
  },
  "80502": {
    happy: 5.288499456,
    interact: 1.711500544,
    meaning: 4.423001088
  },
  "80601": {
    happy: 3.193741091,
    interact: 1,
    meaning: 4.193741091
  },
  "80701": {
    happy: 1.660441091,
    interact: 1,
    meaning: 6
  },
  "89999": {
    happy: 4,
    interact: 1,
    meaning: 4
  },
  "90103": {
    happy: 4,
    interact: 1,
    meaning: 5
  },
  "90201": {
    happy: 4.012771973,
    interact: 1,
    meaning: 3.990588803
  },
  "90202": {
    happy: 2.939116435,
    interact: 1.04270941,
    meaning: 4.225367979
  },
  "90301": {
    happy: 4.981561288,
    interact: 1,
    meaning: 4.472341932
  },
  "90399": {
    happy: 3,
    interact: 1,
    meaning: 2
  },
  "90401": {
    happy: 0,
    interact: 1,
    meaning: 1
  },
  "90501": {
    happy: 2.448518681,
    interact: 1.532777213,
    meaning: 2.743546804
  },
  "90502": {
    happy: 3.221639356,
    interact: 1.010243075,
    meaning: 2.528639382
  },
  "99999": {
    happy: 6,
    interact: 1,
    meaning: 6
  },
  "100381": {
    happy: 4,
    interact: 1,
    meaning: 4
  },
  "110101": {
    happy: 4.659316305,
    interact: 1.319659939,
    meaning: 4.383794379
  },
  "110281": {
    happy: 5.089267892,
    interact: 1.166963111,
    meaning: 5.000374197
  },
  "120101": {
    happy: 5.122448503,
    interact: 1.056231804,
    meaning: 5.051325609
  },
  "120201": {
    happy: 5.460271277,
    interact: 1,
    meaning: 5.621785893
  },
  "120202": {
    happy: 3.940762539,
    interact: 1,
    meaning: 5.561760011
  },
  "120301": {
    happy: 4.225655574,
    interact: 1.514091288,
    meaning: 3.979352808
  },
  "120302": {
    happy: 4.666761572,
    interact: 1.257974667,
    meaning: 1.838773066
  },
  "120303": {
    happy: 4.268735289,
    interact: 1.464729343,
    meaning: 3.592427438
  },
  "120304": {
    happy: 4.241253635,
    interact: 1.731446281,
    meaning: 5.136184352
  },
  "120305": {
    happy: 3.998348598,
    interact: 1.63790281,
    meaning: 3.525557276
  },
  "120306": {
    happy: 4.785661936,
    interact: 1.564044202,
    meaning: 4.562968121
  },
  "120307": {
    happy: 4.631789994,
    interact: 1.377285291,
    meaning: 3.458235478
  },
  "120308": {
    happy: 3.753363314,
    interact: 1.560042272,
    meaning: 3.125850916
  },
  "120309": {
    happy: 4.457363908,
    interact: 1.635602064,
    meaning: 4.474030833
  },
  "120310": {
    happy: 5,
    interact: 2,
    meaning: 4
  },
  "120311": {
    happy: 1.927610224,
    interact: 1.426647317,
    meaning: 3.104738995
  },
  "120312": {
    happy: 4.179407912,
    interact: 1.675959408,
    meaning: 4.105837798
  },
  "120313": {
    happy: 4.453419413,
    interact: 1.90621273,
    meaning: 5.028721668
  },
  "120399": {
    happy: 5.361502324,
    interact: 1.131011252,
    meaning: 5.09585548
  },
  "120401": {
    happy: 4.530055095,
    interact: 1,
    meaning: 4.530055095
  },
  "120402": {
    happy: 4.132098714,
    interact: 1,
    meaning: 5.459165904
  },
  "120403": {
    happy: 4.957706791,
    interact: 1,
    meaning: 4.827276719
  },
  "120404": {
    happy: 4.678595331,
    interact: 1.297823146,
    meaning: 3.884088011
  },
  "120499": {
    happy: 5.119095706,
    interact: 1.022050441,
    meaning: 5.13888826
  },
  "120502": {
    happy: 3,
    interact: 1,
    meaning: 5
  },
  "120504": {
    happy: 6,
    interact: 1,
    meaning: 6
  },
  "130101": {
    happy: 5.175068259,
    interact: 1.950698366,
    meaning: 5.950698366
  },
  "130104": {
    happy: 5.003659044,
    interact: 1.46452817,
    meaning: 4.667459135
  },
  "130105": {
    happy: 6,
    interact: 1,
    meaning: 5
  },
  "130106": {
    happy: 5.474352064,
    interact: 1,
    meaning: 3.806784505
  },
  "130107": {
    happy: 2.749431575,
    interact: 1,
    meaning: 5.121652347
  },
  "130109": {
    happy: 5.452429224,
    interact: 1.881224951,
    meaning: 5.452429224
  },
  "130110": {
    happy: 3.622105781,
    interact: 1,
    meaning: 6
  },
  "130112": {
    happy: 3,
    interact: 2,
    meaning: 2
  },
  "130113": {
    happy: 6,
    interact: 1,
    meaning: 4
  },
  "130114": {
    happy: 4.441887982,
    interact: 1,
    meaning: 4.585756892
  },
  "130116": {
    happy: 5.473182215,
    interact: 1.354624012,
    meaning: 4.350863526
  },
  "130118": {
    happy: 6,
    interact: 2,
    meaning: 6
  },
  "130120": {
    happy: 5.418648518,
    interact: 1,
    meaning: 3.274648402
  },
  "130122": {
    happy: 5.648522666,
    interact: 1,
    meaning: 5.164783838
  },
  "130124": {
    happy: 5.039230019,
    interact: 1.839320026,
    meaning: 5.676080823
  },
  "130125": {
    happy: 5.502153772,
    interact: 1,
    meaning: 3.497846228
  },
  "130128": {
    happy: 4.147094744,
    interact: 1.906038485,
    meaning: 4.787714969
  },
  "130130": {
    happy: 5,
    interact: 1,
    meaning: 5
  },
  "130131": {
    happy: 4.8439575,
    interact: 1.384722802,
    meaning: 4.851969434
  },
  "130132": {
    happy: 5.430737829,
    interact: 1.208651758,
    meaning: 5.303398372
  },
  "130133": {
    happy: 5.053649004,
    interact: 1.407707747,
    meaning: 4.965664604
  },
  "130134": {
    happy: 4.122035016,
    interact: 1.547748052,
    meaning: 4.882078149
  },
  "130135": {
    happy: 5,
    interact: 2,
    meaning: 4
  },
  "130136": {
    happy: 3.651688807,
    interact: 1.777349656,
    meaning: 5.291290907
  },
  "130199": {
    happy: 5.39653277,
    interact: 1.293352739,
    meaning: 4.703476226
  },
  "130202": {
    happy: 5.38870362,
    interact: 1,
    meaning: 5.250834607
  },
  "130203": {
    happy: 6,
    interact: 1,
    meaning: 5
  },
  "130213": {
    happy: 5.573738158,
    interact: 1,
    meaning: 5.202652954
  },
  "130224": {
    happy: 6,
    interact: 1,
    meaning: 6
  },
  "130226": {
    happy: 6,
    interact: 1,
    meaning: 6
  },
  "130227": {
    happy: 5.736669712,
    interact: 1.736669712,
    meaning: 5.210009136
  },
  "130299": {
    happy: 4.246455659,
    interact: 1,
    meaning: 5.246455659
  },
  "140101": {
    happy: 4.994619965,
    interact: 1.328227506,
    meaning: 5.553391049
  },
  "140102": {
    happy: 4.951653456,
    interact: 1.589529542,
    meaning: 5.523842281
  },
  "140103": {
    happy: 3.637390547,
    interact: 1.100426071,
    meaning: 3.336112333
  },
  "140105": {
    happy: 5.041351515,
    interact: 1.385971346,
    meaning: 5.491862939
  },
  "149999": {
    happy: 5.525701247,
    interact: 1,
    meaning: 6
  },
  "150101": {
    happy: 3.972307166,
    interact: 1.392521648,
    meaning: 5.121455085
  },
  "150102": {
    happy: 4.427783063,
    interact: 1.531750433,
    meaning: 5.227071185
  },
  "150103": {
    happy: 5.053455104,
    interact: 1.946544896,
    meaning: 5.053455104
  },
  "150104": {
    happy: 3.787826398,
    interact: 1,
    meaning: 4.80006942
  },
  "150199": {
    happy: 5.622784819,
    interact: 1.774388312,
    meaning: 5.622784819
  },
  "150201": {
    happy: 6,
    interact: 1.017522188,
    meaning: 6
  },
  "150203": {
    happy: 5.421824542,
    interact: 1.490518726,
    meaning: 5.762635595
  },
  "150204": {
    happy: 5.76578271,
    interact: 1,
    meaning: 5.883909196
  },
  "150299": {
    happy: 4.313142405,
    interact: 1.482500858,
    meaning: 5.317476324
  },
  "150302": {
    happy: 6,
    interact: 1,
    meaning: 4.965792251
  },
  "150401": {
    happy: 5.874752062,
    interact: 1,
    meaning: 6
  },
  "150402": {
    happy: 5.370144533,
    interact: 1,
    meaning: 5.960143583
  },
  "150501": {
    happy: 4.509972389,
    interact: 1.048650159,
    meaning: 5.37626647
  },
  "150601": {
    happy: 3,
    interact: 1,
    meaning: 6
  },
  "150602": {
    happy: 4,
    interact: 1,
    meaning: 6
  },
  "159989": {
    happy: 4.854392627,
    interact: 1.026218288,
    meaning: 5.391527865
  },
  "160101": {
    happy: 4.838220623,
    interact: 1.047156026,
    meaning: 5.206778315
  },
  "160102": {
    happy: 4.174170318,
    interact: 1.000133527,
    meaning: 4.558901686
  },
  "160104": {
    happy: 3.888620475,
    interact: 1,
    meaning: 5.888620475
  },
  "160105": {
    happy: 1.256302394,
    interact: 1,
    meaning: 5.217019612
  },
  "160106": {
    happy: 0.10721555,
    interact: 1,
    meaning: 5.677265217
  },
  "160108": {
    happy: 3,
    interact: 1,
    meaning: 6
  },
  "169989": {
    happy: 3.575485847,
    interact: 1.288153081,
    meaning: 3.775875148
  },
  "180101": {
    happy: 3.668004118,
    interact: 1.249007329,
    meaning: 3.747405563
  },
  "180280": {
    happy: 4.155913547,
    interact: 1.432911529,
    meaning: 3.716959211
  },
  "180381": {
    happy: 4.628405193,
    interact: 1.278820453,
    meaning: 3.941282379
  },
  "180382": {
    happy: 3.821131479,
    interact: 1.25365729,
    meaning: 4.799562775
  },
  "180481": {
    happy: 4.99679901,
    interact: 1.291534674,
    meaning: 5.123201002
  },
  "180482": {
    happy: 4.433752396,
    interact: 1.445444702,
    meaning: 3.325157796
  },
  "180501": {
    happy: 4.118021932,
    interact: 1.666752391,
    meaning: 3.664150828
  },
  "180589": {
    happy: 3.466036882,
    interact: 1.214514969,
    meaning: 5.156719401
  },
  "180601": {
    happy: 4.646615244,
    interact: 1.570103034,
    meaning: 3.698371434
  },
  "180682": {
    happy: 3.213046884,
    interact: 1.231270216,
    meaning: 2.577093666
  },
  "180701": {
    happy: 4.272007047,
    interact: 1.476584842,
    meaning: 3.693690657
  },
  "180782": {
    happy: 4.520029217,
    interact: 1.383089732,
    meaning: 3.913469159
  },
  "180802": {
    happy: 2.828477188,
    interact: 1.337339955,
    meaning: 2.936484652
  },
  "180803": {
    happy: 5.539041484,
    interact: 1.539041484,
    meaning: 5.078082967
  },
  "180804": {
    happy: 3.687606405,
    interact: 1.502210471,
    meaning: 4.172860088
  },
  "180805": {
    happy: 5.362758638,
    interact: 1.567828129,
    meaning: 4.801749645
  },
  "180806": {
    happy: 3.323719972,
    interact: 1,
    meaning: 4.947995993
  },
  "180807": {
    happy: 2.387838968,
    interact: 1.039655735,
    meaning: 4.0894419
  },
  "180901": {
    happy: 4.591938918,
    interact: 1.469353694,
    meaning: 6
  },
  "180903": {
    happy: 3.221305279,
    interact: 1.739230617,
    meaning: 1.465162671
  },
  "180905": {
    happy: 5.092185651,
    interact: 1.365687698,
    meaning: 4.631898292
  },
  "181002": {
    happy: 4,
    interact: 2,
    meaning: 1
  },
  "181081": {
    happy: 0.441942972,
    interact: 1,
    meaning: 0.441942972
  },
  "181101": {
    happy: 4.69919593,
    interact: 1.31554744,
    meaning: 4.186739863
  },
  "181201": {
    happy: 4.470909798,
    interact: 1.36316368,
    meaning: 4.417171929
  },
  "181202": {
    happy: 5.16156082,
    interact: 1.338622576,
    meaning: 4.643696565
  },
  "181204": {
    happy: 5.2416586,
    interact: 1.107634882,
    meaning: 4.704876569
  },
  "181283": {
    happy: 4.537146485,
    interact: 1.428278224,
    meaning: 4.322586774
  },
  "181299": {
    happy: 6,
    interact: 1,
    meaning: 6
  },
  "181301": {
    happy: 4.567616657,
    interact: 1.416177429,
    meaning: 3.845127821
  },
  "181302": {
    happy: 3.478624727,
    interact: 1.150935692,
    meaning: 5.524716211
  },
  "181401": {
    happy: 4.936797889,
    interact: 1.34636659,
    meaning: 4.679404354
  },
  "181501": {
    happy: 4.606006234,
    interact: 1.395831509,
    meaning: 4.298755827
  },
  "181599": {
    happy: 5.362408652,
    interact: 1.637591348,
    meaning: 6
  },
  "181601": {
    happy: 5.203559661,
    interact: 1.248422602,
    meaning: 5.660562328
  },
  "181801": {
    happy: 4.526056991,
    interact: 1.079688892,
    meaning: 3.694522844
  },
  "189999": {
    happy: 4.678506561,
    interact: 1.181632116,
    meaning: 4.030343536
  },
  "500101": {
    happy: 3.916238057,
    interact: 1.381727446,
    meaning: 4.056925185
  },
  "500103": {
    happy: 5.033500592,
    interact: 1.280903777,
    meaning: 4.745894897
  }
};
const WHO = {
  "18": {
    person: "Alone",
    "class": "alone"
  },
  "19": {
    person: "Alone",
    "class": "alone"
  },
  "20": {
    person: "Spouse",
    "class": "partner"
  },
  "21": {
    person: "Unmarried partner",
    "class": "partner"
  },
  "22": {
    person: "Own household child",
    "class": "child_family"
  },
  "23": {
    person: "Grandchild",
    "class": "child_family"
  },
  "24": {
    person: "Parent",
    "class": "adult_family"
  },
  "25": {
    person: "Brother/sister",
    "class": "adult_family"
  },
  "26": {
    person: "Other related person",
    "class": "adult_family"
  },
  "27": {
    person: "Foster child",
    "class": "child_family"
  },
  "28": {
    person: "Housemate/roommate",
    "class": "adult_nonfamily"
  },
  "29": {
    person: "Roomer/boarder",
    "class": "adult_nonfamily"
  },
  "30": {
    person: "Other nonrelative",
    "class": "adult_nonfamily"
  },
  "40": {
    person: "Own nonhousehold child < 18",
    "class": "child_nonfamily"
  },
  "51": {
    person: "Parents (not living in household)",
    "class": "adult_family"
  },
  "52": {
    person: "Other nonhousehold family members < 18",
    "class": "child_family"
  },
  "53": {
    person: "Other nonhousehold family members 18 and older (including parents- in-law)",
    "class": "adult_family"
  },
  "54": {
    person: "Friends",
    "class": "friend"
  },
  "55": {
    person: "Co-workers/colleagues/clients",
    "class": "workrelated"
  },
  "56": {
    person: "Neighbors/acquaintances",
    "class": "adult_nonfamily"
  },
  "57": {
    person: "Other nonhousehold children < 18",
    "class": "child_nonfamily"
  },
  "58": {
    person: "Other nonhousehold adults 18 and older",
    "class": "adult_nonfamily"
  },
  "59": {
    person: "Boss or manager",
    "class": "workrelated"
  },
  "60": {
    person: "People whom I supervise",
    "class": "workrelated"
  },
  "61": {
    person: "Co-workers",
    "class": "workrelated"
  },
  "62": {
    person: "Customers",
    "class": "workrelated"
  },
  "-1": {
    person: "Alone",
    "class": "alone"
  }
};
const DAYS = {
  "1": "Sun",
  "2": "Mon",
  "3": "Tue",
  "4": "Wed",
  "5": "Thu",
  "6": "Fri",
  "7": "Sat"
};
const FRAMERATE = {
  other: 96,
  adult_family: 97,
  partner: 106,
  child_nonfamily: 103,
  child_family: 106,
  friend: 104,
  adult_nonfamily: 110,
  workrelated: 120,
  alone: 100
};
const PEOPLESCORE = {
  "18": 0,
  "19": 0,
  "20": 3,
  "21": 3,
  "22": 2.5,
  "23": 2.5,
  "24": 2.5,
  "25": 2.5,
  "26": 2.5,
  "27": 2,
  "28": 2,
  "29": 2,
  "30": 2,
  "40": 2.5,
  "51": 3.5,
  "52": 3,
  "53": 3,
  "54": 3.5,
  "55": 2,
  "56": 2,
  "57": 1.5,
  "58": 1.5,
  "59": 1.5,
  "60": 1.5,
  "61": 1.5,
  "62": 1.5,
  "-1": 0
};
const lookup = {
  TESEX,
  PEEDUCA,
  PTDTRACE,
  WEGENHTH,
  WEYesNo,
  WEREST,
  WETYPICAL,
  PEHSPNON,
  TRDTIND1,
  TRDPFTPT_x,
  TUDIARYDAY_x,
  ACTIVITY,
  TRSPPRES,
  TESCHENR,
  WU,
  WHO,
  DAYS,
  FRAMERATE,
  PEOPLESCORE
};
const HappyDays_sprites_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: '.ff.svelte-5tdohq{position:absolute;bottom:0px;width:20%;margin-left:-5%;height:40%;-webkit-transition:opacity 1000ms cubic-bezier(0.420, 0.000, 0.580, 1.000);transition:opacity 1000ms cubic-bezier(0.420, 0.000, 0.580, 1.000);-webkit-transition-timing-function:cubic-bezier(0.420, 0.000, 0.580, 1.000);transition-timing-function:cubic-bezier(0.420, 0.000, 0.580, 1.000);font-size:10px;color:white;opacity:0;pointer-events:none}.ff.shown1.svelte-5tdohq{opacity:1;pointer-events:all}.ff-other.svelte-5tdohq{display:none !important}.ff-adult_family.svelte-5tdohq{left:4.5%}.ff-partner.svelte-5tdohq{left:calc(4.5% + 13%)}.ff-child_nonfamily.svelte-5tdohq,.ff-child_family.svelte-5tdohq{left:calc(4.5% + 26%)}.ff-alone.svelte-5tdohq{left:calc(4.5% + 39%);bottom:0%}.ff-friend.svelte-5tdohq{left:calc(4.5% + 52%)}.ff-adult_nonfamily.svelte-5tdohq{left:calc(4.5% + 65%)}.ff-workrelated.svelte-5tdohq{left:calc(4.5% + 78%)}.sprite.svelte-5tdohq{position:absolute;width:100%;height:100%;bottom:0px;left:50%;-webkit-transform:translateX(-50%) !important;transform:translateX(-50%) !important;background-repeat:no-repeat;zoom:3;image-rendering:optimizeSpeed;image-rendering:-o-crisp-edges;image-rendering:-webkit-optimize-contrast;image-rendering:pixelated;image-rendering:optimize-contrast;-ms-interpolation-mode:nearest-neighbor;-webkit-transition:opacity 1000ms cubic-bezier(0.420, 0.000, 0.580, 1.000);transition:opacity 1000ms cubic-bezier(0.420, 0.000, 0.580, 1.000);-webkit-transition-timing-function:cubic-bezier(0.420, 0.000, 0.580, 1.000);transition-timing-function:cubic-bezier(0.420, 0.000, 0.580, 1.000)}[anim].svelte-5tdohq{background-image:url(/assets/happydays/sprite-master.png);background-size:440px 1880px }[anim="child-eating-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px 0px }[anim="child-eating-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px 0px }[anim="child-eating-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px 0px }[anim="child-eating-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px 0px }[anim="child-eating-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px 0px }[anim="child-eating-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px 0px }[anim="child-eating-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px 0px }[anim="child-eating-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px 0px }[anim="child-eating-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px 0px }[anim="child-eating-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px 0px }[anim="child-eating-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px 0px }[anim="child-leisure-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px -40px }[anim="child-leisure-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px -40px }[anim="child-leisure-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px -40px }[anim="child-leisure-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px -40px }[anim="child-leisure-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px -40px }[anim="child-leisure-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px -40px }[anim="child-leisure-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px -40px }[anim="child-leisure-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px -40px }[anim="child-leisure-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px -40px }[anim="child-leisure-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px -40px }[anim="child-leisure-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px -40px }[anim="child-selfcare-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px -80px }[anim="child-selfcare-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px -80px }[anim="child-selfcare-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px -80px }[anim="child-selfcare-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px -80px }[anim="child-selfcare-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px -80px }[anim="child-selfcare-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px -80px }[anim="child-selfcare-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px -80px }[anim="child-selfcare-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px -80px }[anim="child-selfcare-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px -80px }[anim="child-selfcare-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px -80px }[anim="child-selfcare-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px -80px }[anim="child-sitting-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px -120px }[anim="child-sitting-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px -120px }[anim="child-sitting-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px -120px }[anim="child-sitting-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px -120px }[anim="child-sitting-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px -120px }[anim="child-sitting-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px -120px }[anim="child-sitting-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px -120px }[anim="child-sitting-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px -120px }[anim="child-sitting-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px -120px }[anim="child-sitting-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px -120px }[anim="child-sitting-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px -120px }[anim="child-social-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px -160px }[anim="child-social-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px -160px }[anim="child-social-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px -160px }[anim="child-social-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px -160px }[anim="child-social-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px -160px }[anim="child-social-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px -160px }[anim="child-social-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px -160px }[anim="child-social-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px -160px }[anim="child-social-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px -160px }[anim="child-social-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px -160px }[anim="child-social-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px -160px }[anim="child-sports-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px -200px }[anim="child-sports-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px -200px }[anim="child-sports-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px -200px }[anim="child-sports-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px -200px }[anim="child-sports-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px -200px }[anim="child-sports-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px -200px }[anim="child-sports-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px -200px }[anim="child-sports-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px -200px }[anim="child-sports-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px -200px }[anim="child-sports-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px -200px }[anim="child-sports-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px -200px }[anim="child-standing-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px -240px }[anim="child-standing-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px -240px }[anim="child-standing-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px -240px }[anim="child-standing-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px -240px }[anim="child-standing-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px -240px }[anim="child-standing-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px -240px }[anim="child-standing-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px -240px }[anim="child-standing-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px -240px }[anim="child-standing-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px -240px }[anim="child-standing-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px -240px }[anim="child-standing-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px -240px }[anim="child-talking-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px -280px }[anim="child-talking-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px -280px }[anim="child-talking-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px -280px }[anim="child-talking-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px -280px }[anim="child-talking-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px -280px }[anim="child-talking-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px -280px }[anim="child-talking-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px -280px }[anim="child-talking-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px -280px }[anim="child-talking-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px -280px }[anim="child-talking-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px -280px }[anim="child-talking-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px -280px }[anim="child-walking-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px -320px }[anim="child-walking-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px -320px }[anim="child-walking-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px -320px }[anim="child-walking-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px -320px }[anim="child-walking-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px -320px }[anim="child-walking-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px -320px }[anim="child-walking-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px -320px }[anim="child-walking-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px -320px }[anim="child-walking-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px -320px }[anim="child-walking-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px -320px }[anim="child-walking-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px -320px }[anim="female-careadult-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px -360px }[anim="female-careadult-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px -360px }[anim="female-careadult-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px -360px }[anim="female-careadult-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px -360px }[anim="female-careadult-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px -360px }[anim="female-careadult-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px -360px }[anim="female-careadult-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px -360px }[anim="female-careadult-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px -360px }[anim="female-careadult-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px -360px }[anim="female-careadult-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px -360px }[anim="female-careadult-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px -360px }[anim="female-carekids-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px -400px }[anim="female-carekids-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px -400px }[anim="female-carekids-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px -400px }[anim="female-carekids-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px -400px }[anim="female-carekids-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px -400px }[anim="female-carekids-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px -400px }[anim="female-carekids-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px -400px }[anim="female-carekids-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px -400px }[anim="female-carekids-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px -400px }[anim="female-carekids-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px -400px }[anim="female-carekids-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px -400px }[anim="female-eating-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px -440px }[anim="female-eating-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px -440px }[anim="female-eating-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px -440px }[anim="female-eating-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px -440px }[anim="female-eating-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px -440px }[anim="female-eating-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px -440px }[anim="female-eating-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px -440px }[anim="female-eating-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px -440px }[anim="female-eating-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px -440px }[anim="female-eating-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px -440px }[anim="female-eating-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px -440px }[anim="female-foodprep-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px -480px }[anim="female-foodprep-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px -480px }[anim="female-foodprep-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px -480px }[anim="female-foodprep-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px -480px }[anim="female-foodprep-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px -480px }[anim="female-foodprep-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px -480px }[anim="female-foodprep-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px -480px }[anim="female-foodprep-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px -480px }[anim="female-foodprep-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px -480px }[anim="female-foodprep-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px -480px }[anim="female-foodprep-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px -480px }[anim="female-household-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px -520px }[anim="female-household-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px -520px }[anim="female-household-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px -520px }[anim="female-household-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px -520px }[anim="female-household-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px -520px }[anim="female-household-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px -520px }[anim="female-household-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px -520px }[anim="female-household-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px -520px }[anim="female-household-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px -520px }[anim="female-household-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px -520px }[anim="female-household-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px -520px }[anim="female-leisure-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px -560px }[anim="female-leisure-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px -560px }[anim="female-leisure-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px -560px }[anim="female-leisure-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px -560px }[anim="female-leisure-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px -560px }[anim="female-leisure-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px -560px }[anim="female-leisure-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px -560px }[anim="female-leisure-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px -560px }[anim="female-leisure-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px -560px }[anim="female-leisure-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px -560px }[anim="female-leisure-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px -560px }[anim="female-pets-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px -600px }[anim="female-pets-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px -600px }[anim="female-pets-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px -600px }[anim="female-pets-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px -600px }[anim="female-pets-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px -600px }[anim="female-pets-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px -600px }[anim="female-pets-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px -600px }[anim="female-pets-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px -600px }[anim="female-pets-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px -600px }[anim="female-pets-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px -600px }[anim="female-pets-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px -600px }[anim="female-phone-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px -640px }[anim="female-phone-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px -640px }[anim="female-phone-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px -640px }[anim="female-phone-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px -640px }[anim="female-phone-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px -640px }[anim="female-phone-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px -640px }[anim="female-phone-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px -640px }[anim="female-phone-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px -640px }[anim="female-phone-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px -640px }[anim="female-phone-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px -640px }[anim="female-phone-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px -640px }[anim="female-selfcare-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px -680px }[anim="female-selfcare-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px -680px }[anim="female-selfcare-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px -680px }[anim="female-selfcare-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px -680px }[anim="female-selfcare-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px -680px }[anim="female-selfcare-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px -680px }[anim="female-selfcare-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px -680px }[anim="female-selfcare-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px -680px }[anim="female-selfcare-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px -680px }[anim="female-selfcare-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px -680px }[anim="female-selfcare-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px -680px }[anim="female-shopping-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px -720px }[anim="female-shopping-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px -720px }[anim="female-shopping-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px -720px }[anim="female-shopping-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px -720px }[anim="female-shopping-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px -720px }[anim="female-shopping-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px -720px }[anim="female-shopping-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px -720px }[anim="female-shopping-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px -720px }[anim="female-shopping-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px -720px }[anim="female-shopping-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px -720px }[anim="female-shopping-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px -720px }[anim="female-sitting-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px -760px }[anim="female-sitting-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px -760px }[anim="female-sitting-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px -760px }[anim="female-sitting-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px -760px }[anim="female-sitting-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px -760px }[anim="female-sitting-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px -760px }[anim="female-sitting-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px -760px }[anim="female-sitting-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px -760px }[anim="female-sitting-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px -760px }[anim="female-sitting-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px -760px }[anim="female-sitting-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px -760px }[anim="female-sleeping-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px -800px }[anim="female-sleeping-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px -800px }[anim="female-sleeping-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px -800px }[anim="female-sleeping-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px -800px }[anim="female-sleeping-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px -800px }[anim="female-sleeping-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px -800px }[anim="female-sleeping-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px -800px }[anim="female-sleeping-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px -800px }[anim="female-sleeping-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px -800px }[anim="female-sleeping-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px -800px }[anim="female-sleeping-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px -800px }[anim="female-social-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px -840px }[anim="female-social-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px -840px }[anim="female-social-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px -840px }[anim="female-social-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px -840px }[anim="female-social-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px -840px }[anim="female-social-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px -840px }[anim="female-social-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px -840px }[anim="female-social-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px -840px }[anim="female-social-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px -840px }[anim="female-social-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px -840px }[anim="female-social-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px -840px }[anim="female-sports-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px -880px }[anim="female-sports-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px -880px }[anim="female-sports-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px -880px }[anim="female-sports-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px -880px }[anim="female-sports-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px -880px }[anim="female-sports-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px -880px }[anim="female-sports-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px -880px }[anim="female-sports-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px -880px }[anim="female-sports-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px -880px }[anim="female-sports-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px -880px }[anim="female-sports-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px -880px }[anim="female-standing-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px -920px }[anim="female-standing-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px -920px }[anim="female-standing-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px -920px }[anim="female-standing-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px -920px }[anim="female-standing-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px -920px }[anim="female-standing-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px -920px }[anim="female-standing-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px -920px }[anim="female-standing-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px -920px }[anim="female-standing-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px -920px }[anim="female-standing-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px -920px }[anim="female-standing-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px -920px }[anim="female-talking-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px -960px }[anim="female-talking-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px -960px }[anim="female-talking-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px -960px }[anim="female-talking-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px -960px }[anim="female-talking-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px -960px }[anim="female-talking-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px -960px }[anim="female-talking-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px -960px }[anim="female-talking-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px -960px }[anim="female-talking-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px -960px }[anim="female-talking-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px -960px }[anim="female-talking-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px -960px }[anim="female-walking-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px -1000px }[anim="female-walking-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px -1000px }[anim="female-walking-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px -1000px }[anim="female-walking-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px -1000px }[anim="female-walking-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px -1000px }[anim="female-walking-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px -1000px }[anim="female-walking-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px -1000px }[anim="female-walking-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px -1000px }[anim="female-walking-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px -1000px }[anim="female-walking-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px -1000px }[anim="female-walking-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px -1000px }[anim="female-workingdesk-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px -1040px }[anim="female-workingdesk-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px -1040px }[anim="female-workingdesk-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px -1040px }[anim="female-workingdesk-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px -1040px }[anim="female-workingdesk-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px -1040px }[anim="female-workingdesk-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px -1040px }[anim="female-workingdesk-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px -1040px }[anim="female-workingdesk-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px -1040px }[anim="female-workingdesk-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px -1040px }[anim="female-workingdesk-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px -1040px }[anim="female-workingdesk-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px -1040px }[anim="female-workinglabor-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px -1080px }[anim="female-workinglabor-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px -1080px }[anim="female-workinglabor-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px -1080px }[anim="female-workinglabor-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px -1080px }[anim="female-workinglabor-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px -1080px }[anim="female-workinglabor-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px -1080px }[anim="female-workinglabor-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px -1080px }[anim="female-workinglabor-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px -1080px }[anim="female-workinglabor-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px -1080px }[anim="female-workinglabor-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px -1080px }[anim="female-workinglabor-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px -1080px }[anim="male-careadult-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px -1120px }[anim="male-careadult-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px -1120px }[anim="male-careadult-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px -1120px }[anim="male-careadult-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px -1120px }[anim="male-careadult-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px -1120px }[anim="male-careadult-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px -1120px }[anim="male-careadult-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px -1120px }[anim="male-careadult-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px -1120px }[anim="male-careadult-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px -1120px }[anim="male-careadult-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px -1120px }[anim="male-careadult-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px -1120px }[anim="male-carekids-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px -1160px }[anim="male-carekids-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px -1160px }[anim="male-carekids-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px -1160px }[anim="male-carekids-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px -1160px }[anim="male-carekids-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px -1160px }[anim="male-carekids-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px -1160px }[anim="male-carekids-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px -1160px }[anim="male-carekids-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px -1160px }[anim="male-carekids-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px -1160px }[anim="male-carekids-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px -1160px }[anim="male-carekids-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px -1160px }[anim="male-eating-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px -1200px }[anim="male-eating-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px -1200px }[anim="male-eating-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px -1200px }[anim="male-eating-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px -1200px }[anim="male-eating-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px -1200px }[anim="male-eating-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px -1200px }[anim="male-eating-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px -1200px }[anim="male-eating-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px -1200px }[anim="male-eating-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px -1200px }[anim="male-eating-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px -1200px }[anim="male-eating-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px -1200px }[anim="male-foodprep-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px -1240px }[anim="male-foodprep-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px -1240px }[anim="male-foodprep-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px -1240px }[anim="male-foodprep-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px -1240px }[anim="male-foodprep-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px -1240px }[anim="male-foodprep-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px -1240px }[anim="male-foodprep-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px -1240px }[anim="male-foodprep-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px -1240px }[anim="male-foodprep-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px -1240px }[anim="male-foodprep-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px -1240px }[anim="male-foodprep-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px -1240px }[anim="male-household-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px -1280px }[anim="male-household-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px -1280px }[anim="male-household-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px -1280px }[anim="male-household-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px -1280px }[anim="male-household-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px -1280px }[anim="male-household-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px -1280px }[anim="male-household-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px -1280px }[anim="male-household-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px -1280px }[anim="male-household-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px -1280px }[anim="male-household-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px -1280px }[anim="male-household-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px -1280px }[anim="male-leisure-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px -1320px }[anim="male-leisure-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px -1320px }[anim="male-leisure-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px -1320px }[anim="male-leisure-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px -1320px }[anim="male-leisure-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px -1320px }[anim="male-leisure-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px -1320px }[anim="male-leisure-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px -1320px }[anim="male-leisure-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px -1320px }[anim="male-leisure-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px -1320px }[anim="male-leisure-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px -1320px }[anim="male-leisure-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px -1320px }[anim="male-pets-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px -1360px }[anim="male-pets-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px -1360px }[anim="male-pets-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px -1360px }[anim="male-pets-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px -1360px }[anim="male-pets-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px -1360px }[anim="male-pets-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px -1360px }[anim="male-pets-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px -1360px }[anim="male-pets-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px -1360px }[anim="male-pets-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px -1360px }[anim="male-pets-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px -1360px }[anim="male-pets-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px -1360px }[anim="male-phone-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px -1400px }[anim="male-phone-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px -1400px }[anim="male-phone-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px -1400px }[anim="male-phone-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px -1400px }[anim="male-phone-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px -1400px }[anim="male-phone-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px -1400px }[anim="male-phone-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px -1400px }[anim="male-phone-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px -1400px }[anim="male-phone-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px -1400px }[anim="male-phone-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px -1400px }[anim="male-phone-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px -1400px }[anim="male-selfcare-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px -1440px }[anim="male-selfcare-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px -1440px }[anim="male-selfcare-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px -1440px }[anim="male-selfcare-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px -1440px }[anim="male-selfcare-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px -1440px }[anim="male-selfcare-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px -1440px }[anim="male-selfcare-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px -1440px }[anim="male-selfcare-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px -1440px }[anim="male-selfcare-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px -1440px }[anim="male-selfcare-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px -1440px }[anim="male-selfcare-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px -1440px }[anim="male-shopping-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px -1480px }[anim="male-shopping-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px -1480px }[anim="male-shopping-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px -1480px }[anim="male-shopping-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px -1480px }[anim="male-shopping-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px -1480px }[anim="male-shopping-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px -1480px }[anim="male-shopping-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px -1480px }[anim="male-shopping-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px -1480px }[anim="male-shopping-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px -1480px }[anim="male-shopping-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px -1480px }[anim="male-shopping-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px -1480px }[anim="male-sitting-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px -1520px }[anim="male-sitting-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px -1520px }[anim="male-sitting-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px -1520px }[anim="male-sitting-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px -1520px }[anim="male-sitting-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px -1520px }[anim="male-sitting-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px -1520px }[anim="male-sitting-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px -1520px }[anim="male-sitting-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px -1520px }[anim="male-sitting-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px -1520px }[anim="male-sitting-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px -1520px }[anim="male-sitting-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px -1520px }[anim="male-sleeping-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px -1560px }[anim="male-sleeping-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px -1560px }[anim="male-sleeping-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px -1560px }[anim="male-sleeping-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px -1560px }[anim="male-sleeping-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px -1560px }[anim="male-sleeping-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px -1560px }[anim="male-sleeping-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px -1560px }[anim="male-sleeping-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px -1560px }[anim="male-sleeping-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px -1560px }[anim="male-sleeping-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px -1560px }[anim="male-sleeping-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px -1560px }[anim="male-social-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px -1600px }[anim="male-social-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px -1600px }[anim="male-social-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px -1600px }[anim="male-social-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px -1600px }[anim="male-social-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px -1600px }[anim="male-social-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px -1600px }[anim="male-social-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px -1600px }[anim="male-social-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px -1600px }[anim="male-social-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px -1600px }[anim="male-social-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px -1600px }[anim="male-social-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px -1600px }[anim="male-sports-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px -1640px }[anim="male-sports-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px -1640px }[anim="male-sports-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px -1640px }[anim="male-sports-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px -1640px }[anim="male-sports-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px -1640px }[anim="male-sports-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px -1640px }[anim="male-sports-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px -1640px }[anim="male-sports-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px -1640px }[anim="male-sports-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px -1640px }[anim="male-sports-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px -1640px }[anim="male-sports-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px -1640px }[anim="male-standing-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px -1680px }[anim="male-standing-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px -1680px }[anim="male-standing-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px -1680px }[anim="male-standing-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px -1680px }[anim="male-standing-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px -1680px }[anim="male-standing-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px -1680px }[anim="male-standing-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px -1680px }[anim="male-standing-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px -1680px }[anim="male-standing-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px -1680px }[anim="male-standing-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px -1680px }[anim="male-standing-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px -1680px }[anim="male-talking-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px -1720px }[anim="male-talking-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px -1720px }[anim="male-talking-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px -1720px }[anim="male-talking-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px -1720px }[anim="male-talking-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px -1720px }[anim="male-talking-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px -1720px }[anim="male-talking-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px -1720px }[anim="male-talking-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px -1720px }[anim="male-talking-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px -1720px }[anim="male-talking-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px -1720px }[anim="male-talking-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px -1720px }[anim="male-walking-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px -1760px }[anim="male-walking-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px -1760px }[anim="male-walking-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px -1760px }[anim="male-walking-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px -1760px }[anim="male-walking-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px -1760px }[anim="male-walking-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px -1760px }[anim="male-walking-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px -1760px }[anim="male-walking-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px -1760px }[anim="male-walking-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px -1760px }[anim="male-walking-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px -1760px }[anim="male-walking-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px -1760px }[anim="male-workingdesk-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px -1800px }[anim="male-workingdesk-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px -1800px }[anim="male-workingdesk-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px -1800px }[anim="male-workingdesk-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px -1800px }[anim="male-workingdesk-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px -1800px }[anim="male-workingdesk-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px -1800px }[anim="male-workingdesk-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px -1800px }[anim="male-workingdesk-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px -1800px }[anim="male-workingdesk-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px -1800px }[anim="male-workingdesk-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px -1800px }[anim="male-workingdesk-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px -1800px }[anim="male-workinglabor-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px -1840px }[anim="male-workinglabor-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px -1840px }[anim="male-workinglabor-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px -1840px }[anim="male-workinglabor-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px -1840px }[anim="male-workinglabor-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px -1840px }[anim="male-workinglabor-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px -1840px }[anim="male-workinglabor-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px -1840px }[anim="male-workinglabor-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px -1840px }[anim="male-workinglabor-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px -1840px }[anim="male-workinglabor-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px -1840px }[anim="male-workinglabor-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px -1840px }[anim2].svelte-5tdohq{background-image:url(/assets/happydays/sprite-master-nonalone.png);background-size:440px 1880px }[anim2="child-eating-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px 0px }[anim2="child-eating-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px 0px }[anim2="child-eating-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px 0px }[anim2="child-eating-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px 0px }[anim2="child-eating-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px 0px }[anim2="child-eating-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px 0px }[anim2="child-eating-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px 0px }[anim2="child-eating-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px 0px }[anim2="child-eating-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px 0px }[anim2="child-eating-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px 0px }[anim2="child-eating-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px 0px }[anim2="child-leisure-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px -40px }[anim2="child-leisure-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px -40px }[anim2="child-leisure-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px -40px }[anim2="child-leisure-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px -40px }[anim2="child-leisure-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px -40px }[anim2="child-leisure-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px -40px }[anim2="child-leisure-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px -40px }[anim2="child-leisure-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px -40px }[anim2="child-leisure-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px -40px }[anim2="child-leisure-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px -40px }[anim2="child-leisure-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px -40px }[anim2="child-selfcare-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px -80px }[anim2="child-selfcare-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px -80px }[anim2="child-selfcare-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px -80px }[anim2="child-selfcare-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px -80px }[anim2="child-selfcare-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px -80px }[anim2="child-selfcare-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px -80px }[anim2="child-selfcare-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px -80px }[anim2="child-selfcare-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px -80px }[anim2="child-selfcare-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px -80px }[anim2="child-selfcare-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px -80px }[anim2="child-selfcare-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px -80px }[anim2="child-sitting-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px -120px }[anim2="child-sitting-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px -120px }[anim2="child-sitting-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px -120px }[anim2="child-sitting-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px -120px }[anim2="child-sitting-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px -120px }[anim2="child-sitting-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px -120px }[anim2="child-sitting-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px -120px }[anim2="child-sitting-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px -120px }[anim2="child-sitting-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px -120px }[anim2="child-sitting-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px -120px }[anim2="child-sitting-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px -120px }[anim2="child-social-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px -160px }[anim2="child-social-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px -160px }[anim2="child-social-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px -160px }[anim2="child-social-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px -160px }[anim2="child-social-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px -160px }[anim2="child-social-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px -160px }[anim2="child-social-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px -160px }[anim2="child-social-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px -160px }[anim2="child-social-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px -160px }[anim2="child-social-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px -160px }[anim2="child-social-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px -160px }[anim2="child-sports-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px -200px }[anim2="child-sports-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px -200px }[anim2="child-sports-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px -200px }[anim2="child-sports-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px -200px }[anim2="child-sports-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px -200px }[anim2="child-sports-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px -200px }[anim2="child-sports-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px -200px }[anim2="child-sports-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px -200px }[anim2="child-sports-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px -200px }[anim2="child-sports-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px -200px }[anim2="child-sports-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px -200px }[anim2="child-standing-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px -240px }[anim2="child-standing-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px -240px }[anim2="child-standing-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px -240px }[anim2="child-standing-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px -240px }[anim2="child-standing-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px -240px }[anim2="child-standing-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px -240px }[anim2="child-standing-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px -240px }[anim2="child-standing-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px -240px }[anim2="child-standing-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px -240px }[anim2="child-standing-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px -240px }[anim2="child-standing-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px -240px }[anim2="child-talking-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px -280px }[anim2="child-talking-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px -280px }[anim2="child-talking-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px -280px }[anim2="child-talking-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px -280px }[anim2="child-talking-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px -280px }[anim2="child-talking-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px -280px }[anim2="child-talking-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px -280px }[anim2="child-talking-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px -280px }[anim2="child-talking-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px -280px }[anim2="child-talking-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px -280px }[anim2="child-talking-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px -280px }[anim2="child-walking-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px -320px }[anim2="child-walking-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px -320px }[anim2="child-walking-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px -320px }[anim2="child-walking-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px -320px }[anim2="child-walking-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px -320px }[anim2="child-walking-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px -320px }[anim2="child-walking-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px -320px }[anim2="child-walking-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px -320px }[anim2="child-walking-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px -320px }[anim2="child-walking-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px -320px }[anim2="child-walking-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px -320px }[anim2="female-careadult-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px -360px }[anim2="female-careadult-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px -360px }[anim2="female-careadult-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px -360px }[anim2="female-careadult-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px -360px }[anim2="female-careadult-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px -360px }[anim2="female-careadult-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px -360px }[anim2="female-careadult-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px -360px }[anim2="female-careadult-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px -360px }[anim2="female-careadult-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px -360px }[anim2="female-careadult-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px -360px }[anim2="female-careadult-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px -360px }[anim2="female-carekids-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px -400px }[anim2="female-carekids-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px -400px }[anim2="female-carekids-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px -400px }[anim2="female-carekids-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px -400px }[anim2="female-carekids-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px -400px }[anim2="female-carekids-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px -400px }[anim2="female-carekids-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px -400px }[anim2="female-carekids-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px -400px }[anim2="female-carekids-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px -400px }[anim2="female-carekids-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px -400px }[anim2="female-carekids-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px -400px }[anim2="female-eating-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px -440px }[anim2="female-eating-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px -440px }[anim2="female-eating-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px -440px }[anim2="female-eating-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px -440px }[anim2="female-eating-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px -440px }[anim2="female-eating-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px -440px }[anim2="female-eating-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px -440px }[anim2="female-eating-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px -440px }[anim2="female-eating-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px -440px }[anim2="female-eating-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px -440px }[anim2="female-eating-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px -440px }[anim2="female-foodprep-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px -480px }[anim2="female-foodprep-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px -480px }[anim2="female-foodprep-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px -480px }[anim2="female-foodprep-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px -480px }[anim2="female-foodprep-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px -480px }[anim2="female-foodprep-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px -480px }[anim2="female-foodprep-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px -480px }[anim2="female-foodprep-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px -480px }[anim2="female-foodprep-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px -480px }[anim2="female-foodprep-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px -480px }[anim2="female-foodprep-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px -480px }[anim2="female-household-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px -520px }[anim2="female-household-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px -520px }[anim2="female-household-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px -520px }[anim2="female-household-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px -520px }[anim2="female-household-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px -520px }[anim2="female-household-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px -520px }[anim2="female-household-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px -520px }[anim2="female-household-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px -520px }[anim2="female-household-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px -520px }[anim2="female-household-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px -520px }[anim2="female-household-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px -520px }[anim2="female-leisure-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px -560px }[anim2="female-leisure-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px -560px }[anim2="female-leisure-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px -560px }[anim2="female-leisure-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px -560px }[anim2="female-leisure-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px -560px }[anim2="female-leisure-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px -560px }[anim2="female-leisure-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px -560px }[anim2="female-leisure-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px -560px }[anim2="female-leisure-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px -560px }[anim2="female-leisure-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px -560px }[anim2="female-leisure-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px -560px }[anim2="female-pets-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px -600px }[anim2="female-pets-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px -600px }[anim2="female-pets-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px -600px }[anim2="female-pets-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px -600px }[anim2="female-pets-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px -600px }[anim2="female-pets-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px -600px }[anim2="female-pets-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px -600px }[anim2="female-pets-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px -600px }[anim2="female-pets-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px -600px }[anim2="female-pets-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px -600px }[anim2="female-pets-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px -600px }[anim2="female-phone-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px -640px }[anim2="female-phone-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px -640px }[anim2="female-phone-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px -640px }[anim2="female-phone-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px -640px }[anim2="female-phone-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px -640px }[anim2="female-phone-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px -640px }[anim2="female-phone-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px -640px }[anim2="female-phone-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px -640px }[anim2="female-phone-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px -640px }[anim2="female-phone-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px -640px }[anim2="female-phone-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px -640px }[anim2="female-selfcare-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px -680px }[anim2="female-selfcare-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px -680px }[anim2="female-selfcare-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px -680px }[anim2="female-selfcare-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px -680px }[anim2="female-selfcare-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px -680px }[anim2="female-selfcare-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px -680px }[anim2="female-selfcare-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px -680px }[anim2="female-selfcare-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px -680px }[anim2="female-selfcare-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px -680px }[anim2="female-selfcare-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px -680px }[anim2="female-selfcare-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px -680px }[anim2="female-shopping-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px -720px }[anim2="female-shopping-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px -720px }[anim2="female-shopping-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px -720px }[anim2="female-shopping-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px -720px }[anim2="female-shopping-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px -720px }[anim2="female-shopping-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px -720px }[anim2="female-shopping-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px -720px }[anim2="female-shopping-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px -720px }[anim2="female-shopping-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px -720px }[anim2="female-shopping-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px -720px }[anim2="female-shopping-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px -720px }[anim2="female-sitting-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px -760px }[anim2="female-sitting-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px -760px }[anim2="female-sitting-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px -760px }[anim2="female-sitting-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px -760px }[anim2="female-sitting-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px -760px }[anim2="female-sitting-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px -760px }[anim2="female-sitting-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px -760px }[anim2="female-sitting-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px -760px }[anim2="female-sitting-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px -760px }[anim2="female-sitting-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px -760px }[anim2="female-sitting-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px -760px }[anim2="female-sleeping-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px -800px }[anim2="female-sleeping-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px -800px }[anim2="female-sleeping-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px -800px }[anim2="female-sleeping-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px -800px }[anim2="female-sleeping-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px -800px }[anim2="female-sleeping-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px -800px }[anim2="female-sleeping-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px -800px }[anim2="female-sleeping-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px -800px }[anim2="female-sleeping-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px -800px }[anim2="female-sleeping-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px -800px }[anim2="female-sleeping-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px -800px }[anim2="female-social-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px -840px }[anim2="female-social-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px -840px }[anim2="female-social-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px -840px }[anim2="female-social-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px -840px }[anim2="female-social-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px -840px }[anim2="female-social-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px -840px }[anim2="female-social-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px -840px }[anim2="female-social-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px -840px }[anim2="female-social-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px -840px }[anim2="female-social-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px -840px }[anim2="female-social-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px -840px }[anim2="female-sports-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px -880px }[anim2="female-sports-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px -880px }[anim2="female-sports-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px -880px }[anim2="female-sports-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px -880px }[anim2="female-sports-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px -880px }[anim2="female-sports-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px -880px }[anim2="female-sports-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px -880px }[anim2="female-sports-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px -880px }[anim2="female-sports-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px -880px }[anim2="female-sports-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px -880px }[anim2="female-sports-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px -880px }[anim2="female-standing-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px -920px }[anim2="female-standing-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px -920px }[anim2="female-standing-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px -920px }[anim2="female-standing-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px -920px }[anim2="female-standing-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px -920px }[anim2="female-standing-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px -920px }[anim2="female-standing-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px -920px }[anim2="female-standing-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px -920px }[anim2="female-standing-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px -920px }[anim2="female-standing-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px -920px }[anim2="female-standing-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px -920px }[anim2="female-talking-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px -960px }[anim2="female-talking-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px -960px }[anim2="female-talking-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px -960px }[anim2="female-talking-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px -960px }[anim2="female-talking-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px -960px }[anim2="female-talking-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px -960px }[anim2="female-talking-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px -960px }[anim2="female-talking-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px -960px }[anim2="female-talking-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px -960px }[anim2="female-talking-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px -960px }[anim2="female-talking-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px -960px }[anim2="female-walking-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px -1000px }[anim2="female-walking-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px -1000px }[anim2="female-walking-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px -1000px }[anim2="female-walking-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px -1000px }[anim2="female-walking-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px -1000px }[anim2="female-walking-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px -1000px }[anim2="female-walking-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px -1000px }[anim2="female-walking-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px -1000px }[anim2="female-walking-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px -1000px }[anim2="female-walking-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px -1000px }[anim2="female-walking-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px -1000px }[anim2="female-workingdesk-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px -1040px }[anim2="female-workingdesk-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px -1040px }[anim2="female-workingdesk-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px -1040px }[anim2="female-workingdesk-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px -1040px }[anim2="female-workingdesk-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px -1040px }[anim2="female-workingdesk-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px -1040px }[anim2="female-workingdesk-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px -1040px }[anim2="female-workingdesk-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px -1040px }[anim2="female-workingdesk-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px -1040px }[anim2="female-workingdesk-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px -1040px }[anim2="female-workingdesk-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px -1040px }[anim2="female-workinglabor-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px -1080px }[anim2="female-workinglabor-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px -1080px }[anim2="female-workinglabor-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px -1080px }[anim2="female-workinglabor-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px -1080px }[anim2="female-workinglabor-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px -1080px }[anim2="female-workinglabor-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px -1080px }[anim2="female-workinglabor-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px -1080px }[anim2="female-workinglabor-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px -1080px }[anim2="female-workinglabor-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px -1080px }[anim2="female-workinglabor-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px -1080px }[anim2="female-workinglabor-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px -1080px }[anim2="male-careadult-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px -1120px }[anim2="male-careadult-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px -1120px }[anim2="male-careadult-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px -1120px }[anim2="male-careadult-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px -1120px }[anim2="male-careadult-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px -1120px }[anim2="male-careadult-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px -1120px }[anim2="male-careadult-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px -1120px }[anim2="male-careadult-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px -1120px }[anim2="male-careadult-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px -1120px }[anim2="male-careadult-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px -1120px }[anim2="male-careadult-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px -1120px }[anim2="male-carekids-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px -1160px }[anim2="male-carekids-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px -1160px }[anim2="male-carekids-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px -1160px }[anim2="male-carekids-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px -1160px }[anim2="male-carekids-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px -1160px }[anim2="male-carekids-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px -1160px }[anim2="male-carekids-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px -1160px }[anim2="male-carekids-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px -1160px }[anim2="male-carekids-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px -1160px }[anim2="male-carekids-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px -1160px }[anim2="male-carekids-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px -1160px }[anim2="male-eating-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px -1200px }[anim2="male-eating-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px -1200px }[anim2="male-eating-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px -1200px }[anim2="male-eating-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px -1200px }[anim2="male-eating-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px -1200px }[anim2="male-eating-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px -1200px }[anim2="male-eating-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px -1200px }[anim2="male-eating-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px -1200px }[anim2="male-eating-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px -1200px }[anim2="male-eating-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px -1200px }[anim2="male-eating-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px -1200px }[anim2="male-foodprep-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px -1240px }[anim2="male-foodprep-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px -1240px }[anim2="male-foodprep-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px -1240px }[anim2="male-foodprep-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px -1240px }[anim2="male-foodprep-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px -1240px }[anim2="male-foodprep-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px -1240px }[anim2="male-foodprep-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px -1240px }[anim2="male-foodprep-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px -1240px }[anim2="male-foodprep-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px -1240px }[anim2="male-foodprep-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px -1240px }[anim2="male-foodprep-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px -1240px }[anim2="male-household-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px -1280px }[anim2="male-household-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px -1280px }[anim2="male-household-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px -1280px }[anim2="male-household-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px -1280px }[anim2="male-household-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px -1280px }[anim2="male-household-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px -1280px }[anim2="male-household-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px -1280px }[anim2="male-household-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px -1280px }[anim2="male-household-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px -1280px }[anim2="male-household-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px -1280px }[anim2="male-household-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px -1280px }[anim2="male-leisure-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px -1320px }[anim2="male-leisure-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px -1320px }[anim2="male-leisure-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px -1320px }[anim2="male-leisure-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px -1320px }[anim2="male-leisure-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px -1320px }[anim2="male-leisure-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px -1320px }[anim2="male-leisure-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px -1320px }[anim2="male-leisure-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px -1320px }[anim2="male-leisure-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px -1320px }[anim2="male-leisure-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px -1320px }[anim2="male-leisure-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px -1320px }[anim2="male-pets-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px -1360px }[anim2="male-pets-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px -1360px }[anim2="male-pets-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px -1360px }[anim2="male-pets-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px -1360px }[anim2="male-pets-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px -1360px }[anim2="male-pets-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px -1360px }[anim2="male-pets-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px -1360px }[anim2="male-pets-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px -1360px }[anim2="male-pets-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px -1360px }[anim2="male-pets-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px -1360px }[anim2="male-pets-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px -1360px }[anim2="male-phone-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px -1400px }[anim2="male-phone-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px -1400px }[anim2="male-phone-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px -1400px }[anim2="male-phone-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px -1400px }[anim2="male-phone-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px -1400px }[anim2="male-phone-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px -1400px }[anim2="male-phone-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px -1400px }[anim2="male-phone-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px -1400px }[anim2="male-phone-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px -1400px }[anim2="male-phone-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px -1400px }[anim2="male-phone-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px -1400px }[anim2="male-selfcare-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px -1440px }[anim2="male-selfcare-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px -1440px }[anim2="male-selfcare-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px -1440px }[anim2="male-selfcare-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px -1440px }[anim2="male-selfcare-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px -1440px }[anim2="male-selfcare-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px -1440px }[anim2="male-selfcare-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px -1440px }[anim2="male-selfcare-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px -1440px }[anim2="male-selfcare-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px -1440px }[anim2="male-selfcare-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px -1440px }[anim2="male-selfcare-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px -1440px }[anim2="male-shopping-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px -1480px }[anim2="male-shopping-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px -1480px }[anim2="male-shopping-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px -1480px }[anim2="male-shopping-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px -1480px }[anim2="male-shopping-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px -1480px }[anim2="male-shopping-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px -1480px }[anim2="male-shopping-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px -1480px }[anim2="male-shopping-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px -1480px }[anim2="male-shopping-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px -1480px }[anim2="male-shopping-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px -1480px }[anim2="male-shopping-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px -1480px }[anim2="male-sitting-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px -1520px }[anim2="male-sitting-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px -1520px }[anim2="male-sitting-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px -1520px }[anim2="male-sitting-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px -1520px }[anim2="male-sitting-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px -1520px }[anim2="male-sitting-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px -1520px }[anim2="male-sitting-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px -1520px }[anim2="male-sitting-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px -1520px }[anim2="male-sitting-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px -1520px }[anim2="male-sitting-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px -1520px }[anim2="male-sitting-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px -1520px }[anim2="male-sleeping-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px -1560px }[anim2="male-sleeping-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px -1560px }[anim2="male-sleeping-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px -1560px }[anim2="male-sleeping-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px -1560px }[anim2="male-sleeping-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px -1560px }[anim2="male-sleeping-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px -1560px }[anim2="male-sleeping-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px -1560px }[anim2="male-sleeping-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px -1560px }[anim2="male-sleeping-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px -1560px }[anim2="male-sleeping-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px -1560px }[anim2="male-sleeping-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px -1560px }[anim2="male-social-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px -1600px }[anim2="male-social-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px -1600px }[anim2="male-social-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px -1600px }[anim2="male-social-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px -1600px }[anim2="male-social-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px -1600px }[anim2="male-social-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px -1600px }[anim2="male-social-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px -1600px }[anim2="male-social-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px -1600px }[anim2="male-social-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px -1600px }[anim2="male-social-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px -1600px }[anim2="male-social-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px -1600px }[anim2="male-sports-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px -1640px }[anim2="male-sports-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px -1640px }[anim2="male-sports-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px -1640px }[anim2="male-sports-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px -1640px }[anim2="male-sports-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px -1640px }[anim2="male-sports-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px -1640px }[anim2="male-sports-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px -1640px }[anim2="male-sports-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px -1640px }[anim2="male-sports-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px -1640px }[anim2="male-sports-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px -1640px }[anim2="male-sports-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px -1640px }[anim2="male-standing-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px -1680px }[anim2="male-standing-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px -1680px }[anim2="male-standing-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px -1680px }[anim2="male-standing-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px -1680px }[anim2="male-standing-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px -1680px }[anim2="male-standing-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px -1680px }[anim2="male-standing-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px -1680px }[anim2="male-standing-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px -1680px }[anim2="male-standing-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px -1680px }[anim2="male-standing-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px -1680px }[anim2="male-standing-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px -1680px }[anim2="male-talking-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px -1720px }[anim2="male-talking-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px -1720px }[anim2="male-talking-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px -1720px }[anim2="male-talking-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px -1720px }[anim2="male-talking-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px -1720px }[anim2="male-talking-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px -1720px }[anim2="male-talking-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px -1720px }[anim2="male-talking-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px -1720px }[anim2="male-talking-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px -1720px }[anim2="male-talking-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px -1720px }[anim2="male-talking-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px -1720px }[anim2="male-walking-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px -1760px }[anim2="male-walking-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px -1760px }[anim2="male-walking-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px -1760px }[anim2="male-walking-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px -1760px }[anim2="male-walking-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px -1760px }[anim2="male-walking-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px -1760px }[anim2="male-walking-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px -1760px }[anim2="male-walking-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px -1760px }[anim2="male-walking-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px -1760px }[anim2="male-walking-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px -1760px }[anim2="male-walking-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px -1760px }[anim2="male-workingdesk-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px -1800px }[anim2="male-workingdesk-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px -1800px }[anim2="male-workingdesk-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px -1800px }[anim2="male-workingdesk-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px -1800px }[anim2="male-workingdesk-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px -1800px }[anim2="male-workingdesk-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px -1800px }[anim2="male-workingdesk-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px -1800px }[anim2="male-workingdesk-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px -1800px }[anim2="male-workingdesk-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px -1800px }[anim2="male-workingdesk-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px -1800px }[anim2="male-workingdesk-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px -1800px }[anim2="male-workinglabor-1.png"].svelte-5tdohq{width:40px;height:40px;background-position:0px -1840px }[anim2="male-workinglabor-2.png"].svelte-5tdohq{width:40px;height:40px;background-position:-40px -1840px }[anim2="male-workinglabor-3.png"].svelte-5tdohq{width:40px;height:40px;background-position:-80px -1840px }[anim2="male-workinglabor-4.png"].svelte-5tdohq{width:40px;height:40px;background-position:-120px -1840px }[anim2="male-workinglabor-5.png"].svelte-5tdohq{width:40px;height:40px;background-position:-160px -1840px }[anim2="male-workinglabor-6.png"].svelte-5tdohq{width:40px;height:40px;background-position:-200px -1840px }[anim2="male-workinglabor-7.png"].svelte-5tdohq{width:40px;height:40px;background-position:-240px -1840px }[anim2="male-workinglabor-8.png"].svelte-5tdohq{width:40px;height:40px;background-position:-280px -1840px }[anim2="male-workinglabor-9.png"].svelte-5tdohq{width:40px;height:40px;background-position:-320px -1840px }[anim2="male-workinglabor-10.png"].svelte-5tdohq{width:40px;height:40px;background-position:-360px -1840px }[anim2="male-workinglabor-11.png"].svelte-5tdohq{width:40px;height:40px;background-position:-400px -1840px }',
  map: null
};
const HappyDays_sprites = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let name;
  let { person } = $$props;
  let { sex } = $$props;
  let { act } = $$props;
  let { shown } = $$props;
  let { begin, end, frameRate } = $$props;
  let animClass;
  if (person == "alone") {
    animClass = lookup.ACTIVITY[act].animClass;
    sex = sex == 1 ? "male" : "female";
  } else if (person != "alone") {
    sex = Math.random() > 0.5 ? "male" : "female";
    animClass = lookup.ACTIVITY[act]["otherClass"];
  }
  if (person.indexOf("child") != -1) {
    sex = "child";
    animClass = lookup.ACTIVITY[act]["childclass"];
  }
  let pos = { x: 0, y: 0 };
  let names = [];
  function buildList(who, what, when) {
    for (let i = 1; i < when + 1; i++) {
      names.push(who + "-" + what + "-" + i);
    }
  }
  buildList(sex, animClass, 11);
  let current = 0;
  if ($$props.person === void 0 && $$bindings.person && person !== void 0)
    $$bindings.person(person);
  if ($$props.sex === void 0 && $$bindings.sex && sex !== void 0)
    $$bindings.sex(sex);
  if ($$props.act === void 0 && $$bindings.act && act !== void 0)
    $$bindings.act(act);
  if ($$props.shown === void 0 && $$bindings.shown && shown !== void 0)
    $$bindings.shown(shown);
  if ($$props.begin === void 0 && $$bindings.begin && begin !== void 0)
    $$bindings.begin(begin);
  if ($$props.end === void 0 && $$bindings.end && end !== void 0)
    $$bindings.end(end);
  if ($$props.frameRate === void 0 && $$bindings.frameRate && frameRate !== void 0)
    $$bindings.frameRate(frameRate);
  $$result.css.add(css$4);
  name = names[current];
  return `<div class="${"ff ff-" + escape(person, true) + " shown" + escape(shown, true) + " svelte-5tdohq"}">${person == "alone" ? `<div class="sprite svelte-5tdohq" anim="${escape(name, true) + ".png"}" style="${"transform: translate(" + escape(pos.x, true) + "px," + escape(pos.y, true) + "px)"}"></div>` : `<div class="sprite svelte-5tdohq" anim2="${escape(name, true) + ".png"}" style="${"transform: translate(" + escape(pos.x, true) + "px," + escape(pos.y, true) + "px)"}"></div>`} </div>`;
});
const HappyDays_person_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".person.svelte-1n3b6s9{position:relative;height:20vh;display:inline-block;margin:1%;font-size:15px;width:16%;-webkit-box-sizing:border-box;box-sizing:border-box;opacity:0;overflow:hidden;-webkit-transition:opacity 600ms cubic-bezier(0.420, 0.000, 0.580, 1.000);transition:opacity 600ms cubic-bezier(0.420, 0.000, 0.580, 1.000);-webkit-transition-timing-function:cubic-bezier(0.420, 0.000, 0.580, 1.000);transition-timing-function:cubic-bezier(0.420, 0.000, 0.580, 1.000);pointer-events:none}.person.shown.svelte-1n3b6s9{opacity:1;cursor:pointer;pointer-events:all}@media only screen  and (max-width: 1800px){.person.svelte-1n3b6s9{width:18%;height:20vh}}@media only screen  and (max-width: 1500px){.person.svelte-1n3b6s9{width:23%;height:20vh}}@media only screen  and (max-width: 1200px){.person.svelte-1n3b6s9{width:31.33333%;height:20vh}}@media only screen  and (max-width: 800px){.person.svelte-1n3b6s9{width:48%;height:20vh}}@media only screen  and (max-width: 500px){.person.svelte-1n3b6s9{height:20vh}}.personViz.svelte-1n3b6s9{position:relative;width:100%;left:0%;height:100%;overflow:hidden;-webkit-transition:all 600ms cubic-bezier(0.250, 0.250, 0.750, 0.750);transition:all 600ms cubic-bezier(0.250, 0.250, 0.750, 0.750);-webkit-transition-timing-function:cubic-bezier(0.250, 0.250, 0.750, 0.750);transition-timing-function:cubic-bezier(0.250, 0.250, 0.750, 0.750);border-bottom:10px solid #000}.happyBar.svelte-1n3b6s9{position:absolute;left:10px;top:10px;height:50%;width:15px;border-left:2px solid #E7BCE0;border-right:2px solid #E7BCE0;-webkit-transition:all 400ms cubic-bezier(0.250, 0.250, 0.750, 0.750);transition:all 400ms cubic-bezier(0.250, 0.250, 0.750, 0.750);-webkit-transition-timing-function:cubic-bezier(0.250, 0.250, 0.750, 0.750);transition-timing-function:cubic-bezier(0.250, 0.250, 0.750, 0.750)}.ladderItem.svelte-1n3b6s9{height:10%;width:100%;position:absolute;border-top:2px solid #E7BCE0}.happyBarScore.svelte-1n3b6s9{width:100%;background:#FF389B;position:absolute;bottom:0px;-webkit-transition:all 2000ms cubic-bezier(0.250, 0.250, 0.750, 0.750);transition:all 2000ms cubic-bezier(0.250, 0.250, 0.750, 0.750);-webkit-transition-timing-function:cubic-bezier(0.250, 0.250, 0.750, 0.750);transition-timing-function:cubic-bezier(0.250, 0.250, 0.750, 0.750)}.ladderItem.svelte-1n3b6s9:last-child{border:none}.personLabel.svelte-1n3b6s9{width:100%;padding:0 30px;color:white;font-weight:bold}.currentActivity.svelte-1n3b6s9{width:100%;padding:0 30px;font-size:13px;color:white}.details.svelte-1n3b6s9{position:absolute;left:0px;top:0px;width:100%;height:100%;background:rgba(0,0,0,0.88);color:white;display:none;padding:20px;text-align:left;font-size:13px}.details.shown.svelte-1n3b6s9{display:block}.detailsClose.svelte-1n3b6s9{margin-top:10px;font-weight:bold;font-size:13px;color:#888}",
  map: null
};
function raceConvert(r1, r2) {
  return r2 == "Hispanic" ? "Hispanic" : r1;
}
function formatMoney(n) {
  return n > 0 ? "$" + comma(Math.round(n / 100)) : "--";
}
function comma(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
const HappyDays_person = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { person, time, beginTime: beginTime2, customClicked, happyBar, happyGroup, personKey, peopleColor, view } = $$props;
  let peopleTextColor = [
    "#fff",
    "#fff",
    "#fff",
    "#fff",
    "#fff",
    "#fff",
    "#36374c",
    "#36374c",
    "#36374c",
    "#36374c"
  ];
  let details = -1;
  function convertWHO(a, returnClass) {
    let val = a[a.length - 2];
    if (val == -1) {
      return "alone";
    }
    try {
      return returnClass ? lookup.WHO[val].class : lookup.WHO[val].person;
    } catch {
      return "alone";
    }
  }
  if ($$props.person === void 0 && $$bindings.person && person !== void 0)
    $$bindings.person(person);
  if ($$props.time === void 0 && $$bindings.time && time !== void 0)
    $$bindings.time(time);
  if ($$props.beginTime === void 0 && $$bindings.beginTime && beginTime2 !== void 0)
    $$bindings.beginTime(beginTime2);
  if ($$props.customClicked === void 0 && $$bindings.customClicked && customClicked !== void 0)
    $$bindings.customClicked(customClicked);
  if ($$props.happyBar === void 0 && $$bindings.happyBar && happyBar !== void 0)
    $$bindings.happyBar(happyBar);
  if ($$props.happyGroup === void 0 && $$bindings.happyGroup && happyGroup !== void 0)
    $$bindings.happyGroup(happyGroup);
  if ($$props.personKey === void 0 && $$bindings.personKey && personKey !== void 0)
    $$bindings.personKey(personKey);
  if ($$props.peopleColor === void 0 && $$bindings.peopleColor && peopleColor !== void 0)
    $$bindings.peopleColor(peopleColor);
  if ($$props.view === void 0 && $$bindings.view && view !== void 0)
    $$bindings.view(view);
  $$result.css.add(css$3);
  {
    {
      if (view != happyGroup) {
        details = -1;
      }
    }
  }
  return `<div class="${"person " + escape(
    person.start <= time || time < beginTime2 || customClicked ? "shown" : "",
    true
  ) + " svelte-1n3b6s9"}"><div class="personViz svelte-1n3b6s9" style="${"background: " + escape(peopleColor[person.peopleScore], true) + ";"}"><div class="personLabel svelte-1n3b6s9" style="${"color: " + escape(peopleTextColor[person.peopleScore], true) + ";"}">Age ${escape(person.TEAGE)}, ${escape(raceConvert(lookup.PTDTRACE[person.PTDTRACE], lookup.PEHSPNON[person.PEHSPNON]))} ${escape(lookup.TESEX[person.TESEX])}</div> <div class="currentActivity svelte-1n3b6s9" style="${"color: " + escape(peopleTextColor[person.peopleScore], true) + ";"}">${escape(person.current_activity)}</div> <div class="happyBar svelte-1n3b6s9" style="${"opacity:" + escape(happyBar, true) + ";"}"><div class="happyBarScore svelte-1n3b6s9" style="${"height:" + escape(time < 344 ? 0 : person.WECANTRIL * 10, true) + "%;"}"></div> ${each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (ladder) => {
    return `<div class="ladderItem svelte-1n3b6s9" style="${"bottom:" + escape(ladder * 10, true) + "%;"}"></div>`;
  })}</div> ${each(person.activity, (act) => {
    return `${validate_component(HappyDays_sprites, "Sprites").$$render(
      $$result,
      {
        person: "alone",
        sex: person.TESEX,
        act: act[2],
        shown: act[act.length - 1],
        begin: act[0],
        end: act[1],
        frameRate: lookup.FRAMERATE["alone"]
      },
      {},
      {}
    )} ${person.peopleScore != 0 && convertWHO(act, true) != "alone" ? `${validate_component(HappyDays_sprites, "Sprites").$$render(
      $$result,
      {
        person: convertWHO(act, true),
        sex: person.TESEX,
        act: act[2],
        shown: act[act.length - 1],
        begin: act[0],
        end: act[1],
        frameRate: lookup.FRAMERATE[convertWHO(act, true)]
      },
      {},
      {}
    )}` : ``}`;
  })}</div> <div class="${"details " + escape(details == 1 && view == happyGroup ? "shown" : "", true) + " svelte-1n3b6s9"}">${escape(person.TEAGE)}-year-old ${escape(raceConvert(lookup.PTDTRACE[person.PTDTRACE], lookup.PEHSPNON[person.PEHSPNON]))} ${escape(lookup.TESEX[person.TESEX])} in ${escape(lookup.WEGENHTH[person.WEGENHTH].toLowerCase())} health.
		Has ${escape(person.TRSPPRES == 3 ? "no partner" : "a " + lookup.TRSPPRES[person.TRSPPRES].toLowerCase())} and ${escape(person.TRCHILDNUM_x == 1 ? person.TRCHILDNUM_x + " child" : person.TRCHILDNUM_x + " children")} in the household. 
		${escape(person.TESCHENR == 1 ? "Enrolled in school." : "")} Has a ${escape(lookup.PEEDUCA[person.PEEDUCA].toLowerCase())} education. 
		${escape(person.TRDTIND1 != -1 ? "Works in " + lookup.TRDTIND1[person.TRDTIND1].toLowerCase() + " earning " + formatMoney(person.TRERNWA_x) + " a week." : "")} <div class="detailsClose svelte-1n3b6s9" data-svelte-h="svelte-1lc4obo">Click to close</div></div> </div>`;
});
const HappyDays_grid_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".wideViewButton.svelte-wk4puh{margin-left:10px;position:absolute;left:10px;bottom:10%;z-index:100}.interactive.svelte-wk4puh{-webkit-transform-origin:center;transform-origin:center;text-align:center;width:100%;height:100vh}.interactiveBackground.svelte-wk4puh{display:block;width:100%;height:100%;position:absolute;left:0;top:0;cursor:pointer;-webkit-transition:background 1200ms cubic-bezier(0.455, 0.030, 0.515, 0.955);transition:background 1200ms cubic-bezier(0.455, 0.030, 0.515, 0.955);-webkit-transition-timing-function:cubic-bezier(0.455, 0.030, 0.515, 0.955);transition-timing-function:cubic-bezier(0.455, 0.030, 0.515, 0.955)}.displayContainter.svelte-wk4puh{width:100%;overflow:hidden;margin:0 auto;padding-right:50px}.groupContainer.svelte-wk4puh{position:relative;width:300%;height:100vh;-webkit-transition:all 2000ms cubic-bezier(0.455, 0.030, 0.515, 0.955);transition:all 2000ms cubic-bezier(0.455, 0.030, 0.515, 0.955);-webkit-transition-timing-function:cubic-bezier(0.455, 0.030, 0.515, 0.955);transition-timing-function:cubic-bezier(0.455, 0.030, 0.515, 0.955);pointer-events:none}.groupContainer.zoomIn.svelte-wk4puh{-webkit-transform:perspective(0) translate3d(-63.05%, 33%, 0.2px);transform:perspective(0) translate3d(-63.05%, 33%, 0.2px)\n	}.groupContainer.zoomOut.svelte-wk4puh{-webkit-transform:perspective(0) translate3d(-100%, -50%, -1px);transform:perspective(0) translate3d(-100%, -50%, -1px)}.groupContainer.group1.svelte-wk4puh{-webkit-transform:perspective(0) translate3d(0, 0, 0);transform:perspective(0) translate3d(0, 0, 0)}.groupContainer.group2.svelte-wk4puh{-webkit-transform:perspective(0) translate3d(-33%, 0, 0);transform:perspective(0) translate3d(-33%, 0, 0)}.groupContainer.group3.svelte-wk4puh{-webkit-transform:perspective(0) translate3d(-66%, 0, 0);transform:perspective(0) translate3d(-66%, 0, 0)}@media only screen  and (max-width: 1800px){.groupContainer.zoomIn.svelte-wk4puh{-webkit-transform:perspective(0) translate3d(-64%, 33%, 0.2px);transform:perspective(0) translate3d(-64%, 33%, 0.2px)}}@media only screen  and (max-width: 1500px){.groupContainer.zoomIn.svelte-wk4puh{-webkit-transform:perspective(0) translate3d(-41.5%, 16%, 0.2px);transform:perspective(0) translate3d(-41.5%, 16%, 0.2px)}}@media only screen  and (max-width: 1200px){.groupContainer.zoomIn.svelte-wk4puh{-webkit-transform:perspective(0) translate3d(-52.5%, 7%, 0.2px);transform:perspective(0) translate3d(-52.5%, 7%, 0.2px)}}@media only screen  and (max-width: 800px){.groupContainer.zoomIn.svelte-wk4puh{-webkit-transform:perspective(0) translate3d(-45%, 0, 0.2px);transform:perspective(0) translate3d(-45%, 0, 0.2px)}}@media only screen  and (max-width: 500px){.groupContainer.zoomIn.svelte-wk4puh{-webkit-transform:perspective(0) translate3d(-45%, 0, 0.2px);transform:perspective(0) translate3d(-45%, 0, 0.2px)}}.group.svelte-wk4puh{display:-webkit-box;display:flex;position:absolute;left:0px;top:0px;display:block;width:calc(100% / 3);padding:0 2%;-webkit-box-sizing:border-box;box-sizing:border-box;padding-top:20px;pointer-events:all;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-flow:column wrap}.groupButton.svelte-wk4puh{font-size:40px;cursor:pointer;width:200px;background:#eee}.groupButton.svelte-wk4puh:hover{background:#ddd}.group.svelte-wk4puh:nth-child(2){left:33%}.group.svelte-wk4puh:nth-child(3){left:66%}",
  map: null
};
const HappyDays_grid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let screenWidth;
  let peopleColor = [
    "#36374c",
    "#4a475e",
    "#5e5870",
    "#736a82",
    "#897c95",
    "#a08fa8",
    "#b7a2bb",
    "#cfb6ce",
    "#e7cae2",
    "#ffdef5"
  ];
  let customClicked = false;
  let { time, beginTime: beginTime2, timeline: timeline2, currentPeople, options } = $$props;
  time = time > 239 ? time : 241;
  let happyBar = 0;
  let selectedViewIndex = 4;
  let maxPeople2 = 9;
  let viewTranslate = ["zoomOut", "group1", "group2", "group3", "zoomIn"];
  function checkWindow(w) {
    const breakpoints = { 0: 2, 800: 3, 1200: 4, 1500: 5 };
    let breakpoint = 0;
    for (const [key, bp] of Object.entries(breakpoints)) {
      if (w > Number(key)) {
        breakpoint = bp;
      }
    }
    maxPeople2 = breakpoint * 4;
  }
  function checkTiming() {
    time = time > 239 ? time : 241;
    timeline2.forEach(function(line) {
      if (time - 2 > line.time) {
        selectedViewIndex = line.view;
      }
    });
    if (isNaN(time)) {
      time = 240;
    }
    if (time > 1440) {
      time = time - 1440;
    }
    customClicked = time >= 780 ? true : false;
    happyBar = time >= 343 || time < beginTime2 ? 1 : 0;
  }
  function checkPeople() {
    for (let i = 0; i < options.length; i++) {
      const opt = options[i];
      for (let j = 0; j < currentPeople[opt].length; j++) {
        let peopleScore = 0;
        for (let k = 0; k < currentPeople[opt][j]["activity"].length; k++) {
          let start = currentPeople[opt][j]["activity"][k][0];
          let end = currentPeople[opt][j]["activity"][k][1];
          if (start <= time && end > time || start <= time - 1440 && end > time - 1440) {
            currentPeople[opt][j]["activity"][k][6] = 1;
            currentPeople[opt][j]["current_activity"] = lookup.ACTIVITY[currentPeople[opt][j]["activity"][k][2]].task;
            peopleScore += lookup.PEOPLESCORE[currentPeople[opt][j]["activity"][k][5]];
          } else {
            currentPeople[opt][j]["activity"][k][6] = 0;
          }
          currentPeople[opt][j]["peopleScore"] = peopleScore > peopleColor.length - 1 ? peopleColor.length - 1 : Math.round(peopleScore);
        }
      }
    }
  }
  if ($$props.time === void 0 && $$bindings.time && time !== void 0)
    $$bindings.time(time);
  if ($$props.beginTime === void 0 && $$bindings.beginTime && beginTime2 !== void 0)
    $$bindings.beginTime(beginTime2);
  if ($$props.timeline === void 0 && $$bindings.timeline && timeline2 !== void 0)
    $$bindings.timeline(timeline2);
  if ($$props.currentPeople === void 0 && $$bindings.currentPeople && currentPeople !== void 0)
    $$bindings.currentPeople(currentPeople);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  $$result.css.add(css$2);
  {
    checkPeople(), checkTiming(), checkWindow(screenWidth);
  }
  return `  ${selectedViewIndex != 0 && selectedViewIndex != 4 && customClicked ? `<button class="wideViewButton svelte-wk4puh" data-svelte-h="svelte-w000gt">Zoom out</button>` : ``} <div class="interactive svelte-wk4puh"><div class="interactiveBackground svelte-wk4puh"></div> <div class="displayContainter svelte-wk4puh"><div class="${"groupContainer " + escape(viewTranslate[selectedViewIndex], true) + " svelte-wk4puh"}">${each(Object.entries(currentPeople), ([key, happy_group]) => {
    return `<div class="group svelte-wk4puh">${each(happy_group, (person, personKey) => {
      return `${personKey < maxPeople2 ? `${validate_component(HappyDays_person, "Person").$$render(
        $$result,
        {
          person,
          time,
          beginTime: beginTime2,
          customClicked,
          happyBar,
          happyGroup: key,
          personKey,
          peopleColor,
          view: selectedViewIndex
        },
        {},
        {}
      )}` : ``}`;
    })} </div>`;
  })}</div></div> </div>`;
});
const HappyDays_text_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '.imageContainer.svelte-d6csjr{width:100%;min-height:300px;background:gray}.textContainer.svelte-d6csjr{max-width:500px;margin:0 auto;color:white !important;text-align:left;font-size:20px;line-height:1.6em;font-weight:normal;font-family:"Tiempos Text Web", Iowan Old Style, Times New Roman, Times, serif;position:absolute;top:45%;left:50%;-webkit-transform:translateY(-50%) translateX(-50%);transform:translateY(-50%) translateX(-50%);background:black;padding:20px}',
  map: null
};
function convertToHTML(text) {
  let finalText = [];
  let textArray = text.split("\n");
  textArray.forEach(function(line) {
    if (line.indexOf("Component|") != -1) {
      let compName = line.split("|")[1];
      line = `<svelte:component this=${compName}></svelte:component>`;
    }
    finalText.push(line);
  });
  return "<p>" + finalText.join("</p><p>") + "</p>";
}
const HappyDays_text = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { copy: copy2, image, imageLoc } = $$props;
  if ($$props.copy === void 0 && $$bindings.copy && copy2 !== void 0)
    $$bindings.copy(copy2);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.imageLoc === void 0 && $$bindings.imageLoc && imageLoc !== void 0)
    $$bindings.imageLoc(imageLoc);
  $$result.css.add(css$1);
  return `<div class="textContainer svelte-d6csjr">${imageLoc == "top" ? `<div class="imageContainer svelte-d6csjr" data-svelte-h="svelte-17rgp3b"></div>` : ``} <!-- HTML_TAG_START -->${convertToHTML(copy2)}<!-- HTML_TAG_END --> ${imageLoc == "bottom" ? `<div class="imageContainer svelte-d6csjr" data-svelte-h="svelte-17rgp3b"></div>` : ``} </div>`;
});
const people = [
  {
    activity: [
      [
        240,
        360,
        10101,
        120,
        -1,
        -1,
        0
      ],
      [
        360,
        420,
        10201,
        60,
        -1,
        -1,
        0
      ],
      [
        420,
        440,
        189999,
        20,
        11,
        20,
        0
      ],
      [
        440,
        445,
        181801,
        5,
        11,
        58,
        0
      ],
      [
        440,
        445,
        181801,
        5,
        11,
        20,
        0
      ],
      [
        445,
        1005,
        189999,
        560,
        11,
        20,
        0
      ],
      [
        1005,
        1055,
        189999,
        50,
        13,
        20,
        0
      ],
      [
        1055,
        1145,
        20902,
        90,
        1,
        20,
        0
      ],
      [
        1145,
        1148,
        181101,
        3,
        13,
        20,
        0
      ],
      [
        1148,
        1193,
        110101,
        45,
        4,
        20,
        0
      ],
      [
        1193,
        1196,
        181101,
        3,
        13,
        20,
        0
      ],
      [
        1196,
        1380,
        120303,
        184,
        1,
        20,
        0
      ],
      [
        1380,
        1680,
        10101,
        300,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210301211430,
    WECANTRIL: 10,
    WEGENHTH: 1,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 3,
    WETYPICAL: 3,
    TUDIARYDAY_x: 6,
    TRHOLIDAY_x: 0,
    TEAGE: 72,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 42,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 0,
    TRTFAMILY: 960,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 1,
    TESCHENR: -1,
    happy_group: 3
  },
  {
    activity: [
      [
        240,
        360,
        10101,
        120,
        -1,
        -1,
        0
      ],
      [
        360,
        450,
        130131,
        90,
        1,
        58,
        0
      ],
      [
        450,
        510,
        20201,
        60,
        1,
        20,
        0
      ],
      [
        450,
        510,
        20201,
        60,
        1,
        22,
        0
      ],
      [
        450,
        510,
        20201,
        60,
        1,
        22,
        0
      ],
      [
        510,
        630,
        30103,
        120,
        1,
        20,
        0
      ],
      [
        510,
        630,
        30103,
        120,
        1,
        22,
        0
      ],
      [
        510,
        630,
        30103,
        120,
        1,
        22,
        0
      ],
      [
        630,
        690,
        10201,
        60,
        -1,
        -1,
        0
      ],
      [
        690,
        693,
        180501,
        3,
        12,
        20,
        0
      ],
      [
        690,
        693,
        180501,
        3,
        12,
        22,
        0
      ],
      [
        690,
        693,
        180501,
        3,
        12,
        22,
        0
      ],
      [
        693,
        813,
        50101,
        120,
        2,
        20,
        0
      ],
      [
        693,
        813,
        50101,
        120,
        2,
        22,
        0
      ],
      [
        693,
        813,
        50101,
        120,
        2,
        22,
        0
      ],
      [
        813,
        828,
        180782,
        15,
        12,
        18,
        0
      ],
      [
        828,
        829,
        180782,
        1,
        7,
        22,
        0
      ],
      [
        829,
        834,
        70104,
        5,
        7,
        22,
        0
      ],
      [
        834,
        859,
        30111,
        25,
        11,
        22,
        0
      ],
      [
        859,
        869,
        180782,
        10,
        4,
        22,
        0
      ],
      [
        859,
        869,
        180782,
        10,
        4,
        22,
        0
      ],
      [
        869,
        879,
        70103,
        10,
        4,
        22,
        0
      ],
      [
        869,
        879,
        70103,
        10,
        4,
        22,
        0
      ],
      [
        879,
        887,
        180782,
        8,
        12,
        22,
        0
      ],
      [
        879,
        887,
        180782,
        8,
        12,
        22,
        0
      ],
      [
        887,
        917,
        110101,
        30,
        1,
        22,
        0
      ],
      [
        887,
        917,
        110101,
        30,
        1,
        22,
        0
      ],
      [
        917,
        977,
        30103,
        60,
        1,
        22,
        0
      ],
      [
        917,
        977,
        30103,
        60,
        1,
        22,
        0
      ],
      [
        977,
        1007,
        120301,
        30,
        1,
        22,
        0
      ],
      [
        977,
        1007,
        120301,
        30,
        1,
        22,
        0
      ],
      [
        1007,
        1017,
        10201,
        10,
        -1,
        -1,
        0
      ],
      [
        1017,
        1047,
        180501,
        30,
        12,
        18,
        0
      ],
      [
        1047,
        1107,
        50101,
        60,
        4,
        58,
        0
      ],
      [
        1107,
        1137,
        180501,
        30,
        12,
        18,
        0
      ],
      [
        1137,
        1197,
        30103,
        60,
        1,
        22,
        0
      ],
      [
        1137,
        1197,
        30103,
        60,
        1,
        22,
        0
      ],
      [
        1197,
        1227,
        10201,
        30,
        -1,
        -1,
        0
      ],
      [
        1227,
        1257,
        30102,
        30,
        1,
        20,
        0
      ],
      [
        1227,
        1257,
        30102,
        30,
        1,
        22,
        0
      ],
      [
        1227,
        1257,
        30102,
        30,
        1,
        22,
        0
      ],
      [
        1257,
        1680,
        10101,
        423,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210808211420,
    WECANTRIL: 10,
    WEGENHTH: 2,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 2,
    WETYPICAL: 2,
    TUDIARYDAY_x: 1,
    TRHOLIDAY_x: 0,
    TEAGE: 39,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 44,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 40,
    TRDPFTPT_x: 1,
    TRERNWA_x: 244444,
    TRERNHLY: -1,
    TRTALONE: 75,
    TRTFAMILY: 452,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 2,
    TRSPPRES: 1,
    TESCHENR: 2,
    happy_group: 3
  },
  {
    activity: [
      [
        240,
        1080,
        10101,
        840,
        -1,
        -1,
        0
      ],
      [
        1080,
        1120,
        10201,
        40,
        -1,
        -1,
        0
      ],
      [
        1120,
        1165,
        181283,
        45,
        12,
        19,
        0
      ],
      [
        1165,
        1440,
        120307,
        275,
        3,
        53,
        0
      ],
      [
        1165,
        1440,
        120307,
        275,
        3,
        54,
        0
      ],
      [
        0,
        120,
        181283,
        120,
        12,
        19,
        0
      ],
      [
        120,
        240,
        10101,
        120,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210908211717,
    WECANTRIL: 8,
    WEGENHTH: 3,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 1,
    WETYPICAL: 2,
    TUDIARYDAY_x: 3,
    TRHOLIDAY_x: 0,
    TEAGE: 66,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 34,
    PEHSPNON: 2,
    PTDTRACE: 2,
    TRDTIND1: 22,
    TRDPFTPT_x: 1,
    TRERNWA_x: 36600,
    TRERNHLY: 915,
    TRTALONE: 165,
    TRTFAMILY: 275,
    TRTFRIEND: 275,
    TRCHILDNUM_x: 0,
    TRSPPRES: 3,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        360,
        10101,
        120,
        -1,
        -1,
        0
      ],
      [
        360,
        390,
        10201,
        30,
        -1,
        -1,
        0
      ],
      [
        390,
        405,
        180501,
        15,
        12,
        19,
        0
      ],
      [
        405,
        660,
        50101,
        255,
        2,
        59,
        0
      ],
      [
        405,
        660,
        50101,
        255,
        2,
        61,
        0
      ],
      [
        660,
        705,
        110101,
        45,
        2,
        19,
        0
      ],
      [
        705,
        930,
        50101,
        225,
        2,
        59,
        0
      ],
      [
        705,
        930,
        50101,
        225,
        2,
        61,
        0
      ],
      [
        930,
        945,
        180501,
        15,
        12,
        19,
        0
      ],
      [
        945,
        975,
        10201,
        30,
        -1,
        -1,
        0
      ],
      [
        975,
        995,
        180782,
        20,
        12,
        19,
        0
      ],
      [
        995,
        1015,
        70103,
        20,
        4,
        19,
        0
      ],
      [
        1015,
        1035,
        180782,
        20,
        12,
        19,
        0
      ],
      [
        1035,
        1065,
        110101,
        30,
        1,
        19,
        0
      ],
      [
        1065,
        1380,
        120303,
        315,
        1,
        19,
        0
      ],
      [
        1380,
        1680,
        10101,
        300,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210503211430,
    WECANTRIL: 10,
    WEGENHTH: 3,
    WEHBP: 1,
    WEPAINMD: 2,
    WEREST: 3,
    WETYPICAL: 2,
    TUDIARYDAY_x: 5,
    TRHOLIDAY_x: 0,
    TEAGE: 64,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 36,
    PEHSPNON: 2,
    PTDTRACE: 2,
    TRDTIND1: 41,
    TRDPFTPT_x: 1,
    TRERNWA_x: 44e3,
    TRERNHLY: 1100,
    TRTALONE: 480,
    TRTFAMILY: 0,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 3,
    TESCHENR: -1,
    happy_group: 3
  },
  {
    activity: [
      [
        240,
        390,
        10101,
        150,
        -1,
        -1,
        0
      ],
      [
        390,
        405,
        10201,
        15,
        -1,
        -1,
        0
      ],
      [
        405,
        410,
        180501,
        5,
        1,
        18,
        0
      ],
      [
        410,
        425,
        180501,
        15,
        12,
        18,
        0
      ],
      [
        425,
        720,
        50101,
        295,
        2,
        18,
        0
      ],
      [
        720,
        750,
        110101,
        30,
        2,
        18,
        0
      ],
      [
        750,
        960,
        50101,
        210,
        2,
        62,
        0
      ],
      [
        960,
        990,
        180501,
        30,
        12,
        18,
        0
      ],
      [
        990,
        995,
        10201,
        5,
        -1,
        -1,
        0
      ],
      [
        995,
        1055,
        20501,
        60,
        1,
        20,
        0
      ],
      [
        1055,
        1085,
        120101,
        30,
        1,
        20,
        0
      ],
      [
        1085,
        1125,
        20201,
        40,
        1,
        20,
        0
      ],
      [
        1125,
        1140,
        120303,
        15,
        1,
        20,
        0
      ],
      [
        1140,
        1160,
        110101,
        20,
        1,
        20,
        0
      ],
      [
        1160,
        1175,
        20203,
        15,
        1,
        20,
        0
      ],
      [
        1175,
        1185,
        120303,
        10,
        1,
        18,
        0
      ],
      [
        1185,
        1200,
        10201,
        15,
        -1,
        -1,
        0
      ],
      [
        1200,
        1220,
        20681,
        20,
        9,
        18,
        0
      ],
      [
        1220,
        1260,
        120308,
        40,
        1,
        18,
        0
      ],
      [
        1260,
        1320,
        120303,
        60,
        1,
        18,
        0
      ],
      [
        1320,
        1350,
        120101,
        30,
        1,
        20,
        0
      ],
      [
        1350,
        1680,
        10101,
        330,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210403211003,
    WECANTRIL: 8,
    WEGENHTH: 3,
    WEHBP: 1,
    WEPAINMD: 1,
    WEREST: 2,
    WETYPICAL: 2,
    TUDIARYDAY_x: 2,
    TRHOLIDAY_x: 0,
    TEAGE: 49,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 39,
    PEHSPNON: 1,
    PTDTRACE: 1,
    TRDTIND1: 38,
    TRDPFTPT_x: 1,
    TRERNWA_x: 15e4,
    TRERNHLY: -1,
    TRTALONE: 210,
    TRTFAMILY: 210,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 1,
    TESCHENR: 2,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        570,
        10101,
        330,
        -1,
        -1,
        0
      ],
      [
        570,
        580,
        20201,
        10,
        1,
        18,
        0
      ],
      [
        580,
        590,
        110101,
        10,
        1,
        18,
        0
      ],
      [
        590,
        605,
        10201,
        15,
        -1,
        -1,
        0
      ],
      [
        605,
        632,
        20102,
        27,
        1,
        18,
        0
      ],
      [
        632,
        662,
        120303,
        30,
        1,
        18,
        0
      ],
      [
        662,
        707,
        20102,
        45,
        1,
        18,
        0
      ],
      [
        707,
        752,
        120303,
        45,
        1,
        18,
        0
      ],
      [
        752,
        782,
        20102,
        30,
        1,
        20,
        0
      ],
      [
        782,
        807,
        180481,
        25,
        12,
        18,
        0
      ],
      [
        807,
        844,
        40111,
        37,
        89,
        57,
        0
      ],
      [
        844,
        869,
        180481,
        25,
        12,
        57,
        0
      ],
      [
        869,
        871,
        40112,
        2,
        3,
        18,
        0
      ],
      [
        871,
        886,
        180481,
        15,
        12,
        18,
        0
      ],
      [
        886,
        946,
        20201,
        60,
        1,
        18,
        0
      ],
      [
        946,
        976,
        110101,
        30,
        1,
        20,
        0
      ],
      [
        976,
        1021,
        20203,
        45,
        1,
        18,
        0
      ],
      [
        1021,
        1140,
        120301,
        119,
        1,
        20,
        0
      ],
      [
        1140,
        1200,
        30401,
        60,
        1,
        20,
        0
      ],
      [
        1200,
        1245,
        10201,
        45,
        -1,
        -1,
        0
      ],
      [
        1245,
        1290,
        140105,
        45,
        1,
        18,
        0
      ],
      [
        1290,
        1380,
        120303,
        90,
        1,
        20,
        0
      ],
      [
        1380,
        1680,
        10101,
        300,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210504210671,
    WECANTRIL: 10,
    WEGENHTH: 4,
    WEHBP: 2,
    WEPAINMD: 1,
    WEREST: 4,
    WETYPICAL: 2,
    TUDIARYDAY_x: 3,
    TRHOLIDAY_x: 0,
    TEAGE: 76,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 39,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 359,
    TRTFAMILY: 329,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 1,
    TESCHENR: -1,
    happy_group: 3
  },
  {
    activity: [
      [
        240,
        480,
        10101,
        240,
        -1,
        -1,
        0
      ],
      [
        480,
        510,
        10201,
        30,
        -1,
        -1,
        0
      ],
      [
        510,
        525,
        180782,
        15,
        12,
        20,
        0
      ],
      [
        525,
        535,
        70104,
        10,
        11,
        20,
        0
      ],
      [
        535,
        565,
        189999,
        30,
        11,
        20,
        0
      ],
      [
        565,
        655,
        189999,
        90,
        11,
        20,
        0
      ],
      [
        655,
        745,
        189999,
        90,
        20,
        20,
        0
      ],
      [
        745,
        775,
        189999,
        30,
        12,
        20,
        0
      ],
      [
        775,
        960,
        20902,
        185,
        1,
        20,
        0
      ],
      [
        960,
        990,
        110101,
        30,
        1,
        20,
        0
      ],
      [
        990,
        1170,
        120303,
        180,
        1,
        20,
        0
      ],
      [
        1170,
        1680,
        10101,
        510,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20211009210515,
    WECANTRIL: 10,
    WEGENHTH: 2,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 2,
    WETYPICAL: 2,
    TUDIARYDAY_x: 3,
    TRHOLIDAY_x: 0,
    TEAGE: 68,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 45,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 0,
    TRTFAMILY: 660,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 1,
    TESCHENR: -1,
    happy_group: 3
  },
  {
    activity: [
      [
        240,
        420,
        181101,
        180,
        12,
        22,
        0
      ],
      [
        420,
        430,
        110101,
        10,
        12,
        22,
        0
      ],
      [
        430,
        900,
        181101,
        470,
        12,
        22,
        0
      ],
      [
        900,
        915,
        110101,
        15,
        4,
        22,
        0
      ],
      [
        915,
        1020,
        180280,
        105,
        12,
        22,
        0
      ],
      [
        1020,
        1050,
        20681,
        30,
        11,
        22,
        0
      ],
      [
        1050,
        1170,
        180280,
        120,
        12,
        22,
        0
      ],
      [
        1170,
        1200,
        20681,
        30,
        11,
        22,
        0
      ],
      [
        1200,
        1260,
        180280,
        60,
        12,
        22,
        0
      ],
      [
        1260,
        1320,
        120101,
        60,
        1,
        20,
        0
      ],
      [
        1260,
        1320,
        120101,
        60,
        1,
        22,
        0
      ],
      [
        1260,
        1320,
        120101,
        60,
        1,
        22,
        0
      ],
      [
        1320,
        1380,
        20681,
        60,
        1,
        20,
        0
      ],
      [
        1320,
        1380,
        20681,
        60,
        1,
        22,
        0
      ],
      [
        1320,
        1380,
        20681,
        60,
        1,
        22,
        0
      ],
      [
        1380,
        1680,
        10101,
        300,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20211211210545,
    WECANTRIL: 7,
    WEGENHTH: 4,
    WEHBP: 1,
    WEPAINMD: 2,
    WEREST: 3,
    WETYPICAL: 2,
    TUDIARYDAY_x: 5,
    TRHOLIDAY_x: 0,
    TEAGE: 51,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 39,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 22,
    TRDPFTPT_x: 1,
    TRERNWA_x: 6e4,
    TRERNHLY: 1500,
    TRTALONE: 0,
    TRTFAMILY: 1140,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 1,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        420,
        10101,
        180,
        -1,
        -1,
        0
      ],
      [
        420,
        480,
        500101,
        60,
        1,
        20,
        0
      ],
      [
        420,
        480,
        500101,
        60,
        1,
        22,
        0
      ],
      [
        480,
        510,
        10201,
        30,
        -1,
        -1,
        0
      ],
      [
        510,
        690,
        50101,
        180,
        1,
        18,
        0
      ],
      [
        690,
        700,
        20201,
        10,
        1,
        18,
        0
      ],
      [
        700,
        720,
        110101,
        20,
        1,
        18,
        0
      ],
      [
        720,
        1020,
        50101,
        300,
        1,
        18,
        0
      ],
      [
        1020,
        1050,
        20201,
        30,
        1,
        18,
        0
      ],
      [
        1050,
        1110,
        110101,
        60,
        1,
        20,
        0
      ],
      [
        1050,
        1110,
        110101,
        60,
        1,
        22,
        0
      ],
      [
        1110,
        1140,
        30101,
        30,
        1,
        20,
        0
      ],
      [
        1110,
        1140,
        30101,
        30,
        1,
        22,
        0
      ],
      [
        1140,
        1200,
        500101,
        60,
        1,
        22,
        0
      ],
      [
        1200,
        1320,
        120303,
        120,
        1,
        20,
        0
      ],
      [
        1320,
        1350,
        10201,
        30,
        -1,
        -1,
        0
      ],
      [
        1350,
        1680,
        10101,
        330,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210908212215,
    WECANTRIL: 9,
    WEGENHTH: 2,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 2,
    WETYPICAL: 2,
    TUDIARYDAY_x: 4,
    TRHOLIDAY_x: 0,
    TEAGE: 33,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 43,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 36,
    TRDPFTPT_x: 2,
    TRERNWA_x: 137600,
    TRERNHLY: 4300,
    TRTALONE: 60,
    TRTFAMILY: 330,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 1,
    TRSPPRES: 1,
    TESCHENR: 2,
    happy_group: 3
  },
  {
    activity: [
      [
        240,
        450,
        10101,
        210,
        -1,
        -1,
        0
      ],
      [
        450,
        480,
        20681,
        30,
        9,
        19,
        0
      ],
      [
        480,
        540,
        20902,
        60,
        1,
        19,
        0
      ],
      [
        540,
        570,
        20102,
        30,
        1,
        19,
        0
      ],
      [
        570,
        600,
        20681,
        30,
        1,
        19,
        0
      ],
      [
        600,
        630,
        110101,
        30,
        1,
        19,
        0
      ],
      [
        630,
        660,
        20203,
        30,
        1,
        19,
        0
      ],
      [
        660,
        690,
        20101,
        30,
        1,
        19,
        0
      ],
      [
        690,
        710,
        110101,
        20,
        1,
        19,
        0
      ],
      [
        710,
        740,
        20101,
        30,
        1,
        19,
        0
      ],
      [
        740,
        770,
        20681,
        30,
        9,
        19,
        0
      ],
      [
        770,
        785,
        20681,
        15,
        1,
        19,
        0
      ],
      [
        785,
        1380,
        120303,
        595,
        1,
        19,
        0
      ],
      [
        1380,
        1395,
        160101,
        15,
        1,
        19,
        0
      ],
      [
        1395,
        1425,
        180804,
        30,
        1,
        19,
        0
      ],
      [
        1425,
        1455,
        180804,
        30,
        13,
        53,
        0
      ],
      [
        15,
        210,
        80401,
        195,
        11,
        53,
        0
      ],
      [
        210,
        240,
        180804,
        30,
        13,
        53,
        0
      ]
    ],
    TUCASEID: 20211111212238,
    WECANTRIL: 5,
    WEGENHTH: 2,
    WEHBP: 1,
    WEPAINMD: 1,
    WEREST: 4,
    WETYPICAL: 2,
    TUDIARYDAY_x: 3,
    TRHOLIDAY_x: 0,
    TEAGE: 85,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 39,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 975,
    TRTFAMILY: 255,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 3,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        330,
        10101,
        90,
        -1,
        -1,
        0
      ],
      [
        330,
        365,
        110101,
        35,
        1,
        20,
        0
      ],
      [
        365,
        425,
        20402,
        60,
        1,
        20,
        0
      ],
      [
        425,
        435,
        180782,
        10,
        12,
        20,
        0
      ],
      [
        435,
        480,
        70104,
        45,
        7,
        20,
        0
      ],
      [
        480,
        490,
        180782,
        10,
        12,
        20,
        0
      ],
      [
        490,
        750,
        20402,
        260,
        1,
        20,
        0
      ],
      [
        750,
        765,
        180701,
        15,
        12,
        18,
        0
      ],
      [
        765,
        780,
        70101,
        15,
        6,
        18,
        0
      ],
      [
        780,
        795,
        180701,
        15,
        12,
        18,
        0
      ],
      [
        795,
        805,
        20201,
        10,
        1,
        20,
        0
      ],
      [
        805,
        825,
        110101,
        20,
        1,
        20,
        0
      ],
      [
        825,
        845,
        180782,
        20,
        12,
        20,
        0
      ],
      [
        845,
        890,
        70104,
        45,
        7,
        20,
        0
      ],
      [
        890,
        895,
        180782,
        5,
        12,
        20,
        0
      ],
      [
        895,
        905,
        70102,
        10,
        7,
        20,
        0
      ],
      [
        905,
        980,
        181283,
        75,
        12,
        20,
        0
      ],
      [
        980,
        995,
        70103,
        15,
        4,
        20,
        0
      ],
      [
        995,
        1035,
        180782,
        40,
        12,
        20,
        0
      ],
      [
        1035,
        1060,
        110101,
        25,
        1,
        20,
        0
      ],
      [
        1060,
        1305,
        120303,
        245,
        1,
        20,
        0
      ],
      [
        1305,
        1315,
        10201,
        10,
        -1,
        -1,
        0
      ],
      [
        1315,
        1620,
        10101,
        305,
        -1,
        -1,
        0
      ],
      [
        180,
        185,
        30402,
        5,
        1,
        20,
        0
      ],
      [
        185,
        240,
        10101,
        55,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210403211134,
    WECANTRIL: 7,
    WEGENHTH: 2,
    WEHBP: 1,
    WEPAINMD: 1,
    WEREST: 2,
    WETYPICAL: 1,
    TUDIARYDAY_x: 7,
    TRHOLIDAY_x: 0,
    TEAGE: 60,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 43,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 4,
    TRDPFTPT_x: 1,
    TRERNWA_x: 259615,
    TRERNHLY: -1,
    TRTALONE: 45,
    TRTFAMILY: 935,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 1,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        380,
        120303,
        140,
        1,
        19,
        0
      ],
      [
        380,
        400,
        10201,
        20,
        -1,
        -1,
        0
      ],
      [
        400,
        410,
        20201,
        10,
        1,
        19,
        0
      ],
      [
        410,
        411,
        10301,
        1,
        1,
        19,
        0
      ],
      [
        411,
        501,
        10301,
        90,
        1,
        19,
        0
      ],
      [
        501,
        591,
        20101,
        90,
        1,
        19,
        0
      ],
      [
        591,
        741,
        10301,
        150,
        1,
        19,
        0
      ],
      [
        741,
        742,
        110101,
        1,
        1,
        19,
        0
      ],
      [
        742,
        840,
        10301,
        98,
        1,
        19,
        0
      ],
      [
        840,
        1080,
        10301,
        240,
        1,
        19,
        0
      ],
      [
        1080,
        1155,
        20201,
        75,
        1,
        19,
        0
      ],
      [
        1155,
        1185,
        110101,
        30,
        1,
        19,
        0
      ],
      [
        1185,
        1260,
        10301,
        75,
        1,
        19,
        0
      ],
      [
        1260,
        1262,
        10201,
        2,
        -1,
        -1,
        0
      ],
      [
        1262,
        1264,
        110101,
        2,
        1,
        19,
        0
      ],
      [
        1264,
        1470,
        10101,
        206,
        -1,
        -1,
        0
      ],
      [
        30,
        32,
        10201,
        2,
        -1,
        -1,
        0
      ],
      [
        32,
        150,
        120303,
        118,
        1,
        19,
        0
      ],
      [
        150,
        210,
        10101,
        60,
        -1,
        -1,
        0
      ],
      [
        210,
        212,
        10201,
        2,
        -1,
        -1,
        0
      ],
      [
        212,
        222,
        20681,
        10,
        1,
        19,
        0
      ],
      [
        222,
        223,
        10301,
        1,
        1,
        19,
        0
      ],
      [
        223,
        240,
        120303,
        17,
        1,
        19,
        0
      ]
    ],
    TUCASEID: 20211111211307,
    WECANTRIL: 4,
    WEGENHTH: 4,
    WEHBP: 1,
    WEPAINMD: 1,
    WEREST: 4,
    WETYPICAL: 3,
    TUDIARYDAY_x: 1,
    TRHOLIDAY_x: 0,
    TEAGE: 56,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 40,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 1148,
    TRTFAMILY: 0,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 3,
    TESCHENR: -1,
    happy_group: 1
  },
  {
    activity: [
      [
        240,
        570,
        10101,
        330,
        -1,
        -1,
        0
      ],
      [
        570,
        590,
        110101,
        20,
        1,
        30,
        0
      ],
      [
        590,
        620,
        20903,
        30,
        1,
        30,
        0
      ],
      [
        620,
        800,
        60301,
        180,
        1,
        18,
        0
      ],
      [
        800,
        815,
        110101,
        15,
        1,
        30,
        0
      ],
      [
        815,
        935,
        120303,
        120,
        1,
        30,
        0
      ],
      [
        935,
        1055,
        60301,
        120,
        1,
        18,
        0
      ],
      [
        1055,
        1100,
        120308,
        45,
        1,
        18,
        0
      ],
      [
        1100,
        1130,
        110101,
        30,
        1,
        30,
        0
      ],
      [
        1130,
        1160,
        130134,
        30,
        1,
        18,
        0
      ],
      [
        1160,
        1190,
        60301,
        30,
        1,
        18,
        0
      ],
      [
        1190,
        1250,
        120308,
        60,
        1,
        18,
        0
      ],
      [
        1250,
        1280,
        10201,
        30,
        -1,
        -1,
        0
      ],
      [
        1280,
        1680,
        10101,
        400,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20211111210604,
    WECANTRIL: 6,
    WEGENHTH: 2,
    WEHBP: 1,
    WEPAINMD: 1,
    WEREST: 1,
    WETYPICAL: 3,
    TUDIARYDAY_x: 1,
    TRHOLIDAY_x: 0,
    TEAGE: 18,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 39,
    PEHSPNON: 1,
    PTDTRACE: 1,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 465,
    TRTFAMILY: 0,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 3,
    TESCHENR: 1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        450,
        10101,
        210,
        -1,
        -1,
        0
      ],
      [
        450,
        510,
        10201,
        60,
        -1,
        -1,
        0
      ],
      [
        510,
        520,
        180802,
        10,
        12,
        19,
        0
      ],
      [
        520,
        522,
        80201,
        2,
        30,
        19,
        0
      ],
      [
        522,
        524,
        180782,
        2,
        12,
        19,
        0
      ],
      [
        524,
        534,
        70104,
        10,
        7,
        19,
        0
      ],
      [
        534,
        544,
        180501,
        10,
        12,
        19,
        0
      ],
      [
        544,
        784,
        50101,
        240,
        2,
        62,
        0
      ],
      [
        784,
        799,
        120301,
        15,
        2,
        19,
        0
      ],
      [
        799,
        1039,
        50101,
        240,
        2,
        19,
        0
      ],
      [
        1039,
        1219,
        120308,
        180,
        2,
        19,
        0
      ],
      [
        1219,
        1234,
        181283,
        15,
        12,
        19,
        0
      ],
      [
        1234,
        1244,
        20681,
        10,
        1,
        19,
        0
      ],
      [
        1244,
        1264,
        20201,
        20,
        1,
        19,
        0
      ],
      [
        1264,
        1309,
        110101,
        45,
        1,
        19,
        0
      ],
      [
        1309,
        1489,
        120303,
        180,
        1,
        19,
        0
      ],
      [
        49,
        240,
        10101,
        191,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210403210568,
    WECANTRIL: 5,
    WEGENHTH: 4,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 1,
    WETYPICAL: 1,
    TUDIARYDAY_x: 2,
    TRHOLIDAY_x: 0,
    TEAGE: 64,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 44,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 43,
    TRDPFTPT_x: 1,
    TRERNWA_x: 62040,
    TRERNHLY: 1551,
    TRTALONE: 499,
    TRTFAMILY: 0,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 3,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        480,
        10101,
        240,
        -1,
        -1,
        0
      ],
      [
        480,
        540,
        20201,
        60,
        11,
        52,
        0
      ],
      [
        480,
        540,
        20201,
        60,
        11,
        53,
        0
      ],
      [
        480,
        540,
        20201,
        60,
        11,
        21,
        0
      ],
      [
        540,
        570,
        20201,
        30,
        11,
        52,
        0
      ],
      [
        540,
        570,
        20201,
        30,
        11,
        53,
        0
      ],
      [
        540,
        570,
        20201,
        30,
        11,
        21,
        0
      ],
      [
        570,
        600,
        110101,
        30,
        11,
        52,
        0
      ],
      [
        570,
        600,
        110101,
        30,
        11,
        53,
        0
      ],
      [
        570,
        600,
        110101,
        30,
        11,
        21,
        0
      ],
      [
        600,
        660,
        20902,
        60,
        11,
        52,
        0
      ],
      [
        600,
        660,
        20902,
        60,
        11,
        53,
        0
      ],
      [
        600,
        660,
        20902,
        60,
        11,
        21,
        0
      ],
      [
        660,
        680,
        181301,
        20,
        12,
        52,
        0
      ],
      [
        660,
        680,
        181301,
        20,
        12,
        53,
        0
      ],
      [
        660,
        680,
        181301,
        20,
        12,
        21,
        0
      ],
      [
        680,
        960,
        130132,
        280,
        11,
        52,
        0
      ],
      [
        680,
        960,
        130132,
        280,
        11,
        53,
        0
      ],
      [
        680,
        960,
        130132,
        280,
        11,
        21,
        0
      ],
      [
        960,
        990,
        20902,
        30,
        11,
        52,
        0
      ],
      [
        960,
        990,
        20902,
        30,
        11,
        53,
        0
      ],
      [
        960,
        990,
        20902,
        30,
        11,
        21,
        0
      ],
      [
        990,
        1005,
        180280,
        15,
        12,
        52,
        0
      ],
      [
        990,
        1005,
        180280,
        15,
        12,
        53,
        0
      ],
      [
        990,
        1005,
        180280,
        15,
        12,
        21,
        0
      ],
      [
        1005,
        1035,
        20201,
        30,
        11,
        52,
        0
      ],
      [
        1005,
        1035,
        20201,
        30,
        11,
        53,
        0
      ],
      [
        1005,
        1035,
        20201,
        30,
        11,
        21,
        0
      ],
      [
        1035,
        1065,
        110101,
        30,
        11,
        52,
        0
      ],
      [
        1035,
        1065,
        110101,
        30,
        11,
        53,
        0
      ],
      [
        1035,
        1065,
        110101,
        30,
        11,
        21,
        0
      ],
      [
        1065,
        1245,
        120101,
        180,
        11,
        52,
        0
      ],
      [
        1065,
        1245,
        120101,
        180,
        11,
        53,
        0
      ],
      [
        1065,
        1245,
        120101,
        180,
        11,
        21,
        0
      ],
      [
        1245,
        1680,
        10101,
        435,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210605211569,
    WECANTRIL: 9,
    WEGENHTH: 1,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 2,
    WETYPICAL: 1,
    TUDIARYDAY_x: 7,
    TRHOLIDAY_x: 0,
    TEAGE: 32,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 43,
    PEHSPNON: 1,
    PTDTRACE: 1,
    TRDTIND1: 1,
    TRDPFTPT_x: 1,
    TRERNWA_x: 119230,
    TRERNHLY: -1,
    TRTALONE: 0,
    TRTFAMILY: 765,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 2,
    TESCHENR: 2,
    happy_group: 3
  },
  {
    activity: [
      [
        240,
        720,
        10101,
        480,
        -1,
        -1,
        0
      ],
      [
        720,
        780,
        10201,
        60,
        -1,
        -1,
        0
      ],
      [
        780,
        810,
        110101,
        30,
        1,
        19,
        0
      ],
      [
        810,
        930,
        120312,
        120,
        1,
        19,
        0
      ],
      [
        930,
        990,
        20102,
        60,
        1,
        19,
        0
      ],
      [
        990,
        1110,
        20101,
        120,
        1,
        19,
        0
      ],
      [
        1110,
        1290,
        120303,
        180,
        1,
        19,
        0
      ],
      [
        1290,
        1680,
        10101,
        390,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20211110210577,
    WECANTRIL: 8,
    WEGENHTH: 2,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 1,
    WETYPICAL: 2,
    TUDIARYDAY_x: 1,
    TRHOLIDAY_x: 0,
    TEAGE: 41,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 43,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 40,
    TRDPFTPT_x: 1,
    TRERNWA_x: 90300,
    TRERNHLY: -1,
    TRTALONE: 510,
    TRTFAMILY: 0,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 3,
    TESCHENR: 2,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        360,
        10101,
        120,
        -1,
        -1,
        0
      ],
      [
        360,
        375,
        120312,
        15,
        1,
        20,
        0
      ],
      [
        375,
        420,
        10201,
        45,
        -1,
        -1,
        0
      ],
      [
        420,
        430,
        180501,
        10,
        12,
        18,
        0
      ],
      [
        430,
        720,
        50101,
        290,
        2,
        61,
        0
      ],
      [
        720,
        735,
        110101,
        15,
        1,
        18,
        0
      ],
      [
        735,
        1020,
        50101,
        285,
        2,
        61,
        0
      ],
      [
        1020,
        1030,
        180782,
        10,
        12,
        18,
        0
      ],
      [
        1030,
        1035,
        70104,
        5,
        7,
        18,
        0
      ],
      [
        1035,
        1040,
        181201,
        5,
        12,
        18,
        0
      ],
      [
        1040,
        1130,
        120101,
        90,
        3,
        51,
        0
      ],
      [
        1130,
        1150,
        10201,
        20,
        -1,
        -1,
        0
      ],
      [
        1150,
        1165,
        180782,
        15,
        12,
        18,
        0
      ],
      [
        1165,
        1175,
        70104,
        10,
        7,
        18,
        0
      ],
      [
        1175,
        1185,
        181301,
        10,
        12,
        18,
        0
      ],
      [
        1185,
        1290,
        130120,
        105,
        11,
        54,
        0
      ],
      [
        1290,
        1310,
        181301,
        20,
        12,
        18,
        0
      ],
      [
        1310,
        1315,
        10201,
        5,
        -1,
        -1,
        0
      ],
      [
        1315,
        1325,
        110101,
        10,
        1,
        20,
        0
      ],
      [
        1325,
        1327,
        20903,
        2,
        2,
        20,
        0
      ],
      [
        1327,
        1365,
        120303,
        38,
        1,
        20,
        0
      ],
      [
        1365,
        1680,
        10101,
        315,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210302210663,
    WECANTRIL: 7,
    WEGENHTH: 1,
    WEHBP: 1,
    WEPAINMD: 2,
    WEREST: 2,
    WETYPICAL: 2,
    TUDIARYDAY_x: 5,
    TRHOLIDAY_x: 0,
    TEAGE: 68,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 44,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 36,
    TRDPFTPT_x: 1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 100,
    TRTFAMILY: 155,
    TRTFRIEND: 105,
    TRCHILDNUM_x: 0,
    TRSPPRES: 1,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        420,
        10101,
        180,
        -1,
        -1,
        0
      ],
      [
        420,
        480,
        130131,
        60,
        9,
        20,
        0
      ],
      [
        480,
        510,
        20201,
        30,
        1,
        18,
        0
      ],
      [
        510,
        540,
        110101,
        30,
        1,
        20,
        0
      ],
      [
        540,
        630,
        20101,
        90,
        1,
        18,
        0
      ],
      [
        630,
        690,
        20501,
        60,
        1,
        18,
        0
      ],
      [
        690,
        750,
        20201,
        60,
        1,
        18,
        0
      ],
      [
        750,
        770,
        10201,
        20,
        -1,
        -1,
        0
      ],
      [
        770,
        785,
        180782,
        15,
        13,
        54,
        0
      ],
      [
        785,
        905,
        70104,
        120,
        7,
        54,
        0
      ],
      [
        905,
        920,
        180782,
        15,
        13,
        54,
        0
      ],
      [
        920,
        935,
        120301,
        15,
        1,
        18,
        0
      ],
      [
        935,
        1140,
        120303,
        205,
        1,
        18,
        0
      ],
      [
        1140,
        1200,
        130131,
        60,
        9,
        20,
        0
      ],
      [
        1200,
        1230,
        120301,
        30,
        1,
        20,
        0
      ],
      [
        1230,
        1270,
        110101,
        40,
        1,
        20,
        0
      ],
      [
        1270,
        1300,
        120301,
        30,
        1,
        20,
        0
      ],
      [
        1300,
        1315,
        10201,
        15,
        -1,
        -1,
        0
      ],
      [
        1315,
        1405,
        120303,
        90,
        1,
        20,
        0
      ],
      [
        1405,
        1680,
        10101,
        275,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210605212091,
    WECANTRIL: 8,
    WEGENHTH: 2,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 1,
    WETYPICAL: 2,
    TUDIARYDAY_x: 5,
    TRHOLIDAY_x: 0,
    TEAGE: 60,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 35,
    PEHSPNON: 1,
    PTDTRACE: 1,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 460,
    TRTFAMILY: 340,
    TRTFRIEND: 150,
    TRCHILDNUM_x: 0,
    TRSPPRES: 1,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        660,
        10101,
        420,
        -1,
        -1,
        0
      ],
      [
        660,
        1050,
        120309,
        390,
        1,
        18,
        0
      ],
      [
        1050,
        1080,
        110101,
        30,
        1,
        20,
        0
      ],
      [
        1080,
        1260,
        120312,
        180,
        1,
        20,
        0
      ],
      [
        1260,
        1500,
        120309,
        240,
        1,
        18,
        0
      ],
      [
        60,
        150,
        120312,
        90,
        1,
        18,
        0
      ],
      [
        150,
        165,
        10201,
        15,
        -1,
        -1,
        0
      ],
      [
        165,
        240,
        10101,
        75,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210302211627,
    WECANTRIL: 10,
    WEGENHTH: 2,
    WEHBP: 2,
    WEPAINMD: 1,
    WEREST: 1,
    WETYPICAL: 2,
    TUDIARYDAY_x: 3,
    TRHOLIDAY_x: 0,
    TEAGE: 80,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 43,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 720,
    TRTFAMILY: 210,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 1,
    TESCHENR: -1,
    happy_group: 3
  },
  {
    activity: [
      [
        240,
        420,
        10101,
        180,
        -1,
        -1,
        0
      ],
      [
        420,
        435,
        20201,
        15,
        1,
        18,
        0
      ],
      [
        435,
        495,
        10201,
        60,
        -1,
        -1,
        0
      ],
      [
        495,
        515,
        180482,
        20,
        13,
        20,
        0
      ],
      [
        515,
        635,
        40502,
        120,
        3,
        53,
        0
      ],
      [
        515,
        635,
        40502,
        120,
        3,
        20,
        0
      ],
      [
        635,
        655,
        180482,
        20,
        13,
        20,
        0
      ],
      [
        655,
        665,
        20201,
        10,
        1,
        18,
        0
      ],
      [
        665,
        675,
        110101,
        10,
        1,
        20,
        0
      ],
      [
        675,
        960,
        20101,
        285,
        1,
        18,
        0
      ],
      [
        960,
        1020,
        120301,
        60,
        1,
        20,
        0
      ],
      [
        1020,
        1035,
        20201,
        15,
        1,
        18,
        0
      ],
      [
        1035,
        1080,
        120303,
        45,
        1,
        20,
        0
      ],
      [
        1080,
        1095,
        110101,
        15,
        1,
        20,
        0
      ],
      [
        1095,
        1115,
        20203,
        20,
        1,
        18,
        0
      ],
      [
        1115,
        1290,
        120301,
        175,
        1,
        20,
        0
      ],
      [
        1290,
        1680,
        10101,
        390,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210908211379,
    WECANTRIL: 8,
    WEGENHTH: 2,
    WEHBP: 1,
    WEPAINMD: 1,
    WEREST: 1,
    WETYPICAL: 1,
    TUDIARYDAY_x: 1,
    TRHOLIDAY_x: 0,
    TEAGE: 75,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 40,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 345,
    TRTFAMILY: 465,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 1,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        435,
        10101,
        195,
        -1,
        -1,
        0
      ],
      [
        435,
        455,
        10201,
        20,
        -1,
        -1,
        0
      ],
      [
        455,
        470,
        120312,
        15,
        1,
        19,
        0
      ],
      [
        470,
        500,
        120307,
        30,
        1,
        19,
        0
      ],
      [
        500,
        560,
        20201,
        60,
        1,
        19,
        0
      ],
      [
        560,
        680,
        160102,
        120,
        1,
        19,
        0
      ],
      [
        680,
        690,
        100101,
        10,
        1,
        58,
        0
      ],
      [
        690,
        710,
        181401,
        20,
        12,
        19,
        0
      ],
      [
        710,
        780,
        140101,
        70,
        5,
        19,
        0
      ],
      [
        780,
        800,
        181401,
        20,
        12,
        19,
        0
      ],
      [
        800,
        810,
        20201,
        10,
        1,
        19,
        0
      ],
      [
        810,
        811,
        160101,
        1,
        1,
        19,
        0
      ],
      [
        811,
        821,
        181101,
        10,
        12,
        19,
        0
      ],
      [
        821,
        881,
        110101,
        60,
        4,
        52,
        0
      ],
      [
        821,
        881,
        110101,
        60,
        4,
        53,
        0
      ],
      [
        881,
        891,
        181101,
        10,
        12,
        19,
        0
      ],
      [
        891,
        951,
        20201,
        60,
        1,
        19,
        0
      ],
      [
        951,
        981,
        10101,
        30,
        -1,
        -1,
        0
      ],
      [
        981,
        1080,
        20201,
        99,
        1,
        19,
        0
      ],
      [
        1080,
        1085,
        20202,
        5,
        1,
        52,
        0
      ],
      [
        1080,
        1085,
        20202,
        5,
        1,
        53,
        0
      ],
      [
        1085,
        1145,
        110101,
        60,
        1,
        52,
        0
      ],
      [
        1085,
        1145,
        110101,
        60,
        1,
        53,
        0
      ],
      [
        1145,
        1175,
        40109,
        30,
        1,
        52,
        0
      ],
      [
        1145,
        1175,
        40109,
        30,
        1,
        53,
        0
      ],
      [
        1175,
        1178,
        180482,
        3,
        12,
        19,
        0
      ],
      [
        1178,
        1188,
        40501,
        10,
        3,
        58,
        0
      ],
      [
        1188,
        1191,
        180482,
        3,
        12,
        19,
        0
      ],
      [
        1191,
        1251,
        20203,
        60,
        1,
        19,
        0
      ],
      [
        1251,
        1281,
        20904,
        30,
        1,
        19,
        0
      ],
      [
        1281,
        1401,
        120303,
        120,
        1,
        19,
        0
      ],
      [
        1401,
        1416,
        10201,
        15,
        -1,
        -1,
        0
      ],
      [
        1416,
        1680,
        10101,
        264,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210403210676,
    WECANTRIL: 10,
    WEGENHTH: 1,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 1,
    WETYPICAL: 1,
    TUDIARYDAY_x: 6,
    TRHOLIDAY_x: 0,
    TEAGE: 71,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 46,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 741,
    TRTFAMILY: 155,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 3,
    TESCHENR: -1,
    happy_group: 3
  },
  {
    activity: [
      [
        240,
        540,
        10101,
        300,
        -1,
        -1,
        0
      ],
      [
        540,
        555,
        20681,
        15,
        1,
        18,
        0
      ],
      [
        555,
        585,
        10201,
        30,
        -1,
        -1,
        0
      ],
      [
        585,
        600,
        50101,
        15,
        1,
        18,
        0
      ],
      [
        600,
        660,
        20101,
        60,
        1,
        22,
        0
      ],
      [
        660,
        720,
        120303,
        60,
        1,
        22,
        0
      ],
      [
        720,
        750,
        20201,
        30,
        1,
        22,
        0
      ],
      [
        720,
        750,
        20201,
        30,
        1,
        22,
        0
      ],
      [
        750,
        780,
        110101,
        30,
        1,
        22,
        0
      ],
      [
        750,
        780,
        110101,
        30,
        1,
        22,
        0
      ],
      [
        750,
        780,
        110101,
        30,
        1,
        22,
        0
      ],
      [
        750,
        780,
        110101,
        30,
        1,
        22,
        0
      ],
      [
        780,
        810,
        20203,
        30,
        1,
        22,
        0
      ],
      [
        780,
        810,
        20203,
        30,
        1,
        22,
        0
      ],
      [
        780,
        810,
        20203,
        30,
        1,
        22,
        0
      ],
      [
        780,
        810,
        20203,
        30,
        1,
        22,
        0
      ],
      [
        810,
        820,
        20102,
        10,
        1,
        18,
        0
      ],
      [
        820,
        840,
        10201,
        20,
        -1,
        -1,
        0
      ],
      [
        840,
        855,
        180501,
        15,
        12,
        18,
        0
      ],
      [
        855,
        1065,
        50101,
        210,
        2,
        61,
        0
      ],
      [
        1065,
        1095,
        110101,
        30,
        2,
        18,
        0
      ],
      [
        1095,
        1335,
        50101,
        240,
        2,
        61,
        0
      ],
      [
        1335,
        1350,
        180501,
        15,
        12,
        18,
        0
      ],
      [
        1350,
        1360,
        20681,
        10,
        1,
        18,
        0
      ],
      [
        1360,
        1390,
        10201,
        30,
        -1,
        -1,
        0
      ],
      [
        1390,
        1400,
        20102,
        10,
        1,
        18,
        0
      ],
      [
        1400,
        1405,
        110101,
        5,
        1,
        18,
        0
      ],
      [
        1405,
        1435,
        120303,
        30,
        1,
        18,
        0
      ],
      [
        1435,
        1680,
        10101,
        245,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210706212309,
    WECANTRIL: 10,
    WEGENHTH: 2,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 2,
    WETYPICAL: 2,
    TUDIARYDAY_x: 4,
    TRHOLIDAY_x: 0,
    TEAGE: 36,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 39,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 42,
    TRDPFTPT_x: 2,
    TRERNWA_x: 57750,
    TRERNHLY: 1925,
    TRTALONE: 140,
    TRTFAMILY: 210,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 4,
    TRSPPRES: 1,
    TESCHENR: 1,
    happy_group: 3
  },
  {
    activity: [
      [
        240,
        390,
        10101,
        150,
        -1,
        -1,
        0
      ],
      [
        390,
        570,
        50481,
        180,
        1,
        18,
        0
      ],
      [
        570,
        750,
        50481,
        180,
        1,
        18,
        0
      ],
      [
        750,
        840,
        110101,
        90,
        1,
        18,
        0
      ],
      [
        840,
        885,
        50481,
        45,
        1,
        18,
        0
      ],
      [
        885,
        1080,
        59999,
        195,
        1,
        18,
        0
      ],
      [
        1080,
        1140,
        130124,
        60,
        9,
        18,
        0
      ],
      [
        1140,
        1200,
        20201,
        60,
        1,
        18,
        0
      ],
      [
        1200,
        1290,
        50481,
        90,
        1,
        18,
        0
      ],
      [
        1290,
        1410,
        160101,
        120,
        1,
        18,
        0
      ],
      [
        1410,
        1440,
        160101,
        30,
        1,
        18,
        0
      ],
      [
        0,
        90,
        20101,
        90,
        1,
        18,
        0
      ],
      [
        90,
        240,
        120303,
        150,
        1,
        18,
        0
      ]
    ],
    TUCASEID: 20210807211111,
    WECANTRIL: 4,
    WEGENHTH: 2,
    WEHBP: 2,
    WEPAINMD: 1,
    WEREST: 3,
    WETYPICAL: 2,
    TUDIARYDAY_x: 3,
    TRHOLIDAY_x: 0,
    TEAGE: 52,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 43,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 1290,
    TRTFAMILY: 0,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 1,
    TRSPPRES: 3,
    TESCHENR: -1,
    happy_group: 1
  },
  {
    activity: [
      [
        240,
        360,
        10101,
        120,
        -1,
        -1,
        0
      ],
      [
        360,
        390,
        10201,
        30,
        -1,
        -1,
        0
      ],
      [
        390,
        420,
        20201,
        30,
        1,
        18,
        0
      ],
      [
        420,
        425,
        180381,
        5,
        12,
        22,
        0
      ],
      [
        425,
        440,
        30112,
        15,
        89,
        22,
        0
      ],
      [
        440,
        443,
        180501,
        3,
        12,
        18,
        0
      ],
      [
        443,
        645,
        50101,
        202,
        2,
        61,
        0
      ],
      [
        645,
        653,
        180381,
        8,
        12,
        22,
        0
      ],
      [
        653,
        655,
        30112,
        2,
        89,
        22,
        0
      ],
      [
        655,
        660,
        180501,
        5,
        12,
        18,
        0
      ],
      [
        660,
        750,
        50101,
        90,
        2,
        61,
        0
      ],
      [
        750,
        755,
        181101,
        5,
        12,
        18,
        0
      ],
      [
        755,
        775,
        110101,
        20,
        1,
        20,
        0
      ],
      [
        775,
        780,
        180501,
        5,
        12,
        20,
        0
      ],
      [
        780,
        1020,
        50101,
        240,
        2,
        61,
        0
      ],
      [
        1020,
        1025,
        180501,
        5,
        12,
        18,
        0
      ],
      [
        1025,
        1145,
        20201,
        120,
        1,
        22,
        0
      ],
      [
        1025,
        1145,
        20201,
        120,
        1,
        22,
        0
      ],
      [
        1025,
        1145,
        20201,
        120,
        1,
        22,
        0
      ],
      [
        1025,
        1145,
        20201,
        120,
        1,
        22,
        0
      ],
      [
        1025,
        1145,
        20201,
        120,
        1,
        20,
        0
      ],
      [
        1145,
        1170,
        110101,
        25,
        1,
        22,
        0
      ],
      [
        1145,
        1170,
        110101,
        25,
        1,
        22,
        0
      ],
      [
        1145,
        1170,
        110101,
        25,
        1,
        22,
        0
      ],
      [
        1145,
        1170,
        110101,
        25,
        1,
        22,
        0
      ],
      [
        1145,
        1170,
        110101,
        25,
        1,
        20,
        0
      ],
      [
        1170,
        1185,
        10201,
        15,
        -1,
        -1,
        0
      ],
      [
        1185,
        1260,
        120303,
        75,
        1,
        20,
        0
      ],
      [
        1260,
        1680,
        10101,
        420,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210907210874,
    WECANTRIL: 10,
    WEGENHTH: 2,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 2,
    WETYPICAL: 2,
    TUDIARYDAY_x: 5,
    TRHOLIDAY_x: 0,
    TEAGE: 42,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 43,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 19,
    TRDPFTPT_x: 1,
    TRERNWA_x: 5e4,
    TRERNHLY: 1250,
    TRTALONE: 48,
    TRTFAMILY: 275,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 3,
    TRSPPRES: 1,
    TESCHENR: 2,
    happy_group: 3
  },
  {
    activity: [
      [
        240,
        540,
        10101,
        300,
        -1,
        -1,
        0
      ],
      [
        540,
        555,
        110101,
        15,
        1,
        18,
        0
      ],
      [
        555,
        675,
        120303,
        120,
        1,
        20,
        0
      ],
      [
        675,
        810,
        120307,
        135,
        1,
        18,
        0
      ],
      [
        810,
        835,
        10201,
        25,
        -1,
        -1,
        0
      ],
      [
        835,
        842,
        180905,
        7,
        12,
        18,
        0
      ],
      [
        842,
        902,
        90501,
        60,
        11,
        18,
        0
      ],
      [
        902,
        908,
        180782,
        6,
        12,
        18,
        0
      ],
      [
        908,
        918,
        70103,
        10,
        4,
        18,
        0
      ],
      [
        918,
        923,
        180782,
        5,
        12,
        18,
        0
      ],
      [
        923,
        928,
        20902,
        5,
        1,
        18,
        0
      ],
      [
        928,
        948,
        180701,
        20,
        12,
        18,
        0
      ],
      [
        948,
        993,
        70101,
        45,
        6,
        18,
        0
      ],
      [
        993,
        1013,
        180701,
        20,
        12,
        18,
        0
      ],
      [
        1013,
        1025,
        20201,
        12,
        1,
        20,
        0
      ],
      [
        1025,
        1035,
        110101,
        10,
        1,
        20,
        0
      ],
      [
        1035,
        1155,
        120303,
        120,
        1,
        20,
        0
      ],
      [
        1155,
        1305,
        120307,
        150,
        1,
        18,
        0
      ],
      [
        1305,
        1320,
        10201,
        15,
        -1,
        -1,
        0
      ],
      [
        1320,
        1680,
        10101,
        360,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20211211211085,
    WECANTRIL: 6,
    WEGENHTH: 3,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 4,
    WETYPICAL: 2,
    TUDIARYDAY_x: 1,
    TRHOLIDAY_x: 0,
    TEAGE: 48,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 40,
    PEHSPNON: 1,
    PTDTRACE: 1,
    TRDTIND1: 36,
    TRDPFTPT_x: 1,
    TRERNWA_x: 108461,
    TRERNHLY: -1,
    TRTALONE: 478,
    TRTFAMILY: 262,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 1,
    TESCHENR: 2,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        270,
        10101,
        30,
        -1,
        -1,
        0
      ],
      [
        270,
        300,
        120303,
        30,
        1,
        18,
        0
      ],
      [
        300,
        600,
        10101,
        300,
        -1,
        -1,
        0
      ],
      [
        600,
        620,
        110101,
        20,
        1,
        20,
        0
      ],
      [
        620,
        625,
        10301,
        5,
        1,
        18,
        0
      ],
      [
        625,
        775,
        120307,
        150,
        1,
        20,
        0
      ],
      [
        775,
        805,
        50101,
        30,
        1,
        18,
        0
      ],
      [
        805,
        830,
        150104,
        25,
        1,
        20,
        0
      ],
      [
        830,
        1015,
        120303,
        185,
        1,
        20,
        0
      ],
      [
        1015,
        1020,
        10301,
        5,
        1,
        20,
        0
      ],
      [
        1020,
        1050,
        20681,
        30,
        1,
        20,
        0
      ],
      [
        1050,
        1320,
        10301,
        270,
        1,
        20,
        0
      ],
      [
        1320,
        1330,
        10301,
        10,
        1,
        18,
        0
      ],
      [
        1330,
        1380,
        120303,
        50,
        1,
        18,
        0
      ],
      [
        1380,
        1680,
        10101,
        300,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20211109212274,
    WECANTRIL: 8,
    WEGENHTH: 3,
    WEHBP: 1,
    WEPAINMD: 1,
    WEREST: 1,
    WETYPICAL: 2,
    TUDIARYDAY_x: 7,
    TRHOLIDAY_x: 0,
    TEAGE: 68,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 43,
    PEHSPNON: 2,
    PTDTRACE: 2,
    TRDTIND1: 38,
    TRDPFTPT_x: 1,
    TRERNWA_x: 65e3,
    TRERNHLY: 1550,
    TRTALONE: 95,
    TRTFAMILY: 685,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 1,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        360,
        10101,
        120,
        -1,
        -1,
        0
      ],
      [
        360,
        390,
        10201,
        30,
        -1,
        -1,
        0
      ],
      [
        390,
        420,
        30101,
        30,
        1,
        57,
        0
      ],
      [
        390,
        420,
        30101,
        30,
        1,
        58,
        0
      ],
      [
        420,
        440,
        30101,
        20,
        1,
        57,
        0
      ],
      [
        420,
        440,
        30101,
        20,
        1,
        20,
        0
      ],
      [
        420,
        440,
        30101,
        20,
        1,
        22,
        0
      ],
      [
        420,
        440,
        30101,
        20,
        1,
        22,
        0
      ],
      [
        420,
        440,
        30101,
        20,
        1,
        22,
        0
      ],
      [
        420,
        440,
        30101,
        20,
        1,
        22,
        0
      ],
      [
        440,
        510,
        500105,
        70,
        -1,
        -1,
        0
      ],
      [
        510,
        530,
        181401,
        20,
        12,
        57,
        0
      ],
      [
        510,
        530,
        181401,
        20,
        12,
        20,
        0
      ],
      [
        510,
        530,
        181401,
        20,
        12,
        22,
        0
      ],
      [
        510,
        530,
        181401,
        20,
        12,
        22,
        0
      ],
      [
        510,
        530,
        181401,
        20,
        12,
        22,
        0
      ],
      [
        510,
        530,
        181401,
        20,
        12,
        22,
        0
      ],
      [
        530,
        620,
        140101,
        90,
        5,
        57,
        0
      ],
      [
        530,
        620,
        140101,
        90,
        5,
        20,
        0
      ],
      [
        530,
        620,
        140101,
        90,
        5,
        22,
        0
      ],
      [
        530,
        620,
        140101,
        90,
        5,
        22,
        0
      ],
      [
        530,
        620,
        140101,
        90,
        5,
        22,
        0
      ],
      [
        530,
        620,
        140101,
        90,
        5,
        22,
        0
      ],
      [
        620,
        640,
        181401,
        20,
        1,
        57,
        0
      ],
      [
        620,
        640,
        181401,
        20,
        1,
        20,
        0
      ],
      [
        620,
        640,
        181401,
        20,
        1,
        22,
        0
      ],
      [
        620,
        640,
        181401,
        20,
        1,
        22,
        0
      ],
      [
        620,
        640,
        181401,
        20,
        1,
        22,
        0
      ],
      [
        620,
        640,
        181401,
        20,
        1,
        22,
        0
      ],
      [
        640,
        645,
        110101,
        5,
        1,
        57,
        0
      ],
      [
        640,
        645,
        110101,
        5,
        1,
        20,
        0
      ],
      [
        640,
        645,
        110101,
        5,
        1,
        22,
        0
      ],
      [
        640,
        645,
        110101,
        5,
        1,
        22,
        0
      ],
      [
        640,
        645,
        110101,
        5,
        1,
        22,
        0
      ],
      [
        640,
        645,
        110101,
        5,
        1,
        22,
        0
      ],
      [
        645,
        705,
        130113,
        60,
        1,
        57,
        0
      ],
      [
        645,
        705,
        130113,
        60,
        1,
        20,
        0
      ],
      [
        645,
        705,
        130113,
        60,
        1,
        22,
        0
      ],
      [
        645,
        705,
        130113,
        60,
        1,
        22,
        0
      ],
      [
        645,
        705,
        130113,
        60,
        1,
        22,
        0
      ],
      [
        645,
        705,
        130113,
        60,
        1,
        22,
        0
      ],
      [
        705,
        825,
        120303,
        120,
        1,
        57,
        0
      ],
      [
        705,
        825,
        120303,
        120,
        1,
        20,
        0
      ],
      [
        705,
        825,
        120303,
        120,
        1,
        22,
        0
      ],
      [
        705,
        825,
        120303,
        120,
        1,
        22,
        0
      ],
      [
        705,
        825,
        120303,
        120,
        1,
        22,
        0
      ],
      [
        705,
        825,
        120303,
        120,
        1,
        22,
        0
      ],
      [
        825,
        845,
        180381,
        20,
        1,
        57,
        0
      ],
      [
        825,
        845,
        180381,
        20,
        1,
        22,
        0
      ],
      [
        845,
        850,
        30112,
        5,
        11,
        57,
        0
      ],
      [
        845,
        850,
        30112,
        5,
        11,
        22,
        0
      ],
      [
        850,
        870,
        180381,
        20,
        1,
        18,
        0
      ],
      [
        870,
        930,
        30105,
        60,
        1,
        20,
        0
      ],
      [
        870,
        930,
        30105,
        60,
        1,
        22,
        0
      ],
      [
        870,
        930,
        30105,
        60,
        1,
        22,
        0
      ],
      [
        870,
        930,
        30105,
        60,
        1,
        22,
        0
      ],
      [
        930,
        940,
        10201,
        10,
        -1,
        -1,
        0
      ],
      [
        940,
        960,
        30101,
        20,
        1,
        20,
        0
      ],
      [
        940,
        960,
        30101,
        20,
        1,
        22,
        0
      ],
      [
        940,
        960,
        30101,
        20,
        1,
        22,
        0
      ],
      [
        940,
        960,
        30101,
        20,
        1,
        22,
        0
      ],
      [
        960,
        980,
        180381,
        20,
        13,
        20,
        0
      ],
      [
        960,
        980,
        180381,
        20,
        13,
        22,
        0
      ],
      [
        960,
        980,
        180381,
        20,
        13,
        22,
        0
      ],
      [
        960,
        980,
        180381,
        20,
        13,
        22,
        0
      ],
      [
        980,
        1070,
        30110,
        90,
        8,
        20,
        0
      ],
      [
        980,
        1070,
        30110,
        90,
        8,
        22,
        0
      ],
      [
        980,
        1070,
        30110,
        90,
        8,
        22,
        0
      ],
      [
        980,
        1070,
        30110,
        90,
        8,
        22,
        0
      ],
      [
        1070,
        1072,
        180381,
        2,
        13,
        20,
        0
      ],
      [
        1070,
        1072,
        180381,
        2,
        13,
        22,
        0
      ],
      [
        1070,
        1072,
        180381,
        2,
        13,
        22,
        0
      ],
      [
        1070,
        1072,
        180381,
        2,
        13,
        22,
        0
      ],
      [
        1072,
        1092,
        110101,
        20,
        1,
        20,
        0
      ],
      [
        1072,
        1092,
        110101,
        20,
        1,
        22,
        0
      ],
      [
        1072,
        1092,
        110101,
        20,
        1,
        22,
        0
      ],
      [
        1072,
        1092,
        110101,
        20,
        1,
        22,
        0
      ],
      [
        1072,
        1092,
        110101,
        20,
        1,
        22,
        0
      ],
      [
        1092,
        1102,
        30101,
        10,
        1,
        20,
        0
      ],
      [
        1092,
        1102,
        30101,
        10,
        1,
        22,
        0
      ],
      [
        1092,
        1102,
        30101,
        10,
        1,
        22,
        0
      ],
      [
        1092,
        1102,
        30101,
        10,
        1,
        22,
        0
      ],
      [
        1092,
        1102,
        30101,
        10,
        1,
        22,
        0
      ],
      [
        1102,
        1122,
        30101,
        20,
        1,
        20,
        0
      ],
      [
        1102,
        1122,
        30101,
        20,
        1,
        22,
        0
      ],
      [
        1102,
        1122,
        30101,
        20,
        1,
        22,
        0
      ],
      [
        1102,
        1122,
        30101,
        20,
        1,
        22,
        0
      ],
      [
        1102,
        1122,
        30101,
        20,
        1,
        22,
        0
      ],
      [
        1122,
        1152,
        20203,
        30,
        1,
        20,
        0
      ],
      [
        1152,
        1212,
        120303,
        60,
        1,
        20,
        0
      ],
      [
        1212,
        1680,
        10101,
        468,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20211009210736,
    WECANTRIL: 10,
    WEGENHTH: 2,
    WEHBP: 2,
    WEPAINMD: 1,
    WEREST: 1,
    WETYPICAL: 1,
    TUDIARYDAY_x: 1,
    TRHOLIDAY_x: 0,
    TEAGE: 36,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 44,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 20,
    TRTFAMILY: 692,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 4,
    TRSPPRES: 1,
    TESCHENR: 2,
    happy_group: 3
  },
  {
    activity: [
      [
        240,
        450,
        10101,
        210,
        -1,
        -1,
        0
      ],
      [
        450,
        480,
        120312,
        30,
        1,
        19,
        0
      ],
      [
        480,
        495,
        20201,
        15,
        1,
        19,
        0
      ],
      [
        495,
        510,
        110101,
        15,
        1,
        19,
        0
      ],
      [
        510,
        570,
        120303,
        60,
        1,
        19,
        0
      ],
      [
        570,
        600,
        20203,
        30,
        1,
        19,
        0
      ],
      [
        600,
        720,
        120312,
        120,
        1,
        19,
        0
      ],
      [
        720,
        735,
        10201,
        15,
        -1,
        -1,
        0
      ],
      [
        735,
        745,
        20101,
        10,
        1,
        19,
        0
      ],
      [
        745,
        925,
        120303,
        180,
        1,
        19,
        0
      ],
      [
        925,
        935,
        20201,
        10,
        1,
        19,
        0
      ],
      [
        935,
        975,
        120312,
        40,
        1,
        19,
        0
      ],
      [
        975,
        1035,
        120303,
        60,
        1,
        19,
        0
      ],
      [
        1035,
        1065,
        20201,
        30,
        1,
        19,
        0
      ],
      [
        1065,
        1095,
        110101,
        30,
        1,
        19,
        0
      ],
      [
        1095,
        1140,
        120303,
        45,
        1,
        19,
        0
      ],
      [
        1140,
        1170,
        20203,
        30,
        1,
        19,
        0
      ],
      [
        1170,
        1350,
        120303,
        180,
        1,
        19,
        0
      ],
      [
        1350,
        1680,
        10101,
        330,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210707211421,
    WECANTRIL: 8,
    WEGENHTH: 2,
    WEHBP: 1,
    WEPAINMD: 2,
    WEREST: 1,
    WETYPICAL: 2,
    TUDIARYDAY_x: 1,
    TRHOLIDAY_x: 0,
    TEAGE: 85,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 43,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 885,
    TRTFAMILY: 0,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 3,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        480,
        10101,
        240,
        -1,
        -1,
        0
      ],
      [
        480,
        510,
        20201,
        30,
        1,
        18,
        0
      ],
      [
        510,
        520,
        30101,
        10,
        1,
        22,
        0
      ],
      [
        510,
        520,
        30101,
        10,
        1,
        22,
        0
      ],
      [
        510,
        520,
        30101,
        10,
        1,
        27,
        0
      ],
      [
        520,
        550,
        110101,
        30,
        1,
        22,
        0
      ],
      [
        520,
        550,
        110101,
        30,
        1,
        22,
        0
      ],
      [
        520,
        550,
        110101,
        30,
        1,
        27,
        0
      ],
      [
        550,
        590,
        10301,
        40,
        1,
        18,
        0
      ],
      [
        590,
        650,
        30105,
        60,
        1,
        22,
        0
      ],
      [
        590,
        650,
        30105,
        60,
        1,
        22,
        0
      ],
      [
        650,
        710,
        20201,
        60,
        1,
        18,
        0
      ],
      [
        710,
        740,
        180804,
        30,
        12,
        22,
        0
      ],
      [
        710,
        740,
        180804,
        30,
        12,
        22,
        0
      ],
      [
        740,
        800,
        80401,
        60,
        11,
        58,
        0
      ],
      [
        800,
        830,
        180804,
        30,
        12,
        22,
        0
      ],
      [
        800,
        830,
        180804,
        30,
        12,
        22,
        0
      ],
      [
        830,
        860,
        20201,
        30,
        1,
        18,
        0
      ],
      [
        860,
        890,
        110101,
        30,
        1,
        22,
        0
      ],
      [
        860,
        890,
        110101,
        30,
        1,
        22,
        0
      ],
      [
        890,
        920,
        20203,
        30,
        1,
        22,
        0
      ],
      [
        890,
        920,
        20203,
        30,
        1,
        22,
        0
      ],
      [
        920,
        935,
        160101,
        15,
        1,
        18,
        0
      ],
      [
        935,
        995,
        120303,
        60,
        1,
        22,
        0
      ],
      [
        935,
        995,
        120303,
        60,
        1,
        22,
        0
      ],
      [
        995,
        1005,
        181301,
        10,
        17,
        20,
        0
      ],
      [
        995,
        1005,
        181301,
        10,
        17,
        22,
        0
      ],
      [
        995,
        1005,
        181301,
        10,
        17,
        22,
        0
      ],
      [
        995,
        1005,
        181301,
        10,
        17,
        27,
        0
      ],
      [
        1005,
        1065,
        130104,
        60,
        9,
        20,
        0
      ],
      [
        1005,
        1065,
        130104,
        60,
        9,
        22,
        0
      ],
      [
        1005,
        1065,
        130104,
        60,
        9,
        22,
        0
      ],
      [
        1005,
        1065,
        130104,
        60,
        9,
        27,
        0
      ],
      [
        1065,
        1095,
        30103,
        30,
        9,
        20,
        0
      ],
      [
        1065,
        1095,
        30103,
        30,
        9,
        22,
        0
      ],
      [
        1065,
        1095,
        30103,
        30,
        9,
        22,
        0
      ],
      [
        1065,
        1095,
        30103,
        30,
        9,
        27,
        0
      ],
      [
        1095,
        1125,
        30109,
        30,
        9,
        20,
        0
      ],
      [
        1095,
        1125,
        30109,
        30,
        9,
        22,
        0
      ],
      [
        1095,
        1125,
        30109,
        30,
        9,
        22,
        0
      ],
      [
        1095,
        1125,
        30109,
        30,
        9,
        27,
        0
      ],
      [
        1125,
        1135,
        180381,
        10,
        17,
        20,
        0
      ],
      [
        1125,
        1135,
        180381,
        10,
        17,
        22,
        0
      ],
      [
        1125,
        1135,
        180381,
        10,
        17,
        22,
        0
      ],
      [
        1125,
        1135,
        180381,
        10,
        17,
        27,
        0
      ],
      [
        1135,
        1150,
        30101,
        15,
        1,
        22,
        0
      ],
      [
        1150,
        1155,
        20201,
        5,
        1,
        20,
        0
      ],
      [
        1150,
        1155,
        20201,
        5,
        1,
        22,
        0
      ],
      [
        1150,
        1155,
        20201,
        5,
        1,
        22,
        0
      ],
      [
        1150,
        1155,
        20201,
        5,
        1,
        27,
        0
      ],
      [
        1155,
        1275,
        160101,
        120,
        1,
        18,
        0
      ],
      [
        1275,
        1365,
        120303,
        90,
        1,
        20,
        0
      ],
      [
        1275,
        1365,
        120303,
        90,
        1,
        22,
        0
      ],
      [
        1275,
        1365,
        120303,
        90,
        1,
        22,
        0
      ],
      [
        1275,
        1365,
        120303,
        90,
        1,
        27,
        0
      ],
      [
        1365,
        1680,
        10101,
        315,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210605211078,
    WECANTRIL: 7,
    WEGENHTH: 5,
    WEHBP: 1,
    WEPAINMD: 1,
    WEREST: 1,
    WETYPICAL: 2,
    TUDIARYDAY_x: 5,
    TRHOLIDAY_x: 0,
    TEAGE: 42,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 39,
    PEHSPNON: 1,
    PTDTRACE: 1,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 295,
    TRTFAMILY: 530,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 3,
    TRSPPRES: 1,
    TESCHENR: 2,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        480,
        10101,
        240,
        -1,
        -1,
        0
      ],
      [
        480,
        500,
        10201,
        20,
        -1,
        -1,
        0
      ],
      [
        500,
        515,
        110101,
        15,
        1,
        19,
        0
      ],
      [
        515,
        530,
        181301,
        15,
        14,
        19,
        0
      ],
      [
        530,
        540,
        130112,
        10,
        11,
        19,
        0
      ],
      [
        540,
        555,
        181301,
        15,
        14,
        19,
        0
      ],
      [
        555,
        780,
        120303,
        225,
        1,
        19,
        0
      ],
      [
        780,
        795,
        130131,
        15,
        9,
        19,
        0
      ],
      [
        795,
        1170,
        120303,
        375,
        1,
        19,
        0
      ],
      [
        1170,
        1200,
        20201,
        30,
        1,
        19,
        0
      ],
      [
        1200,
        1220,
        110101,
        20,
        1,
        19,
        0
      ],
      [
        1220,
        1350,
        120303,
        130,
        1,
        19,
        0
      ],
      [
        1350,
        1680,
        10101,
        330,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210504211226,
    WECANTRIL: 3,
    WEGENHTH: 5,
    WEHBP: 1,
    WEPAINMD: 1,
    WEREST: 4,
    WETYPICAL: 2,
    TUDIARYDAY_x: 1,
    TRHOLIDAY_x: 0,
    TEAGE: 61,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 39,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 850,
    TRTFAMILY: 0,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 3,
    TESCHENR: -1,
    happy_group: 1
  },
  {
    activity: [
      [
        240,
        510,
        10101,
        270,
        -1,
        -1,
        0
      ],
      [
        510,
        520,
        10201,
        10,
        -1,
        -1,
        0
      ],
      [
        520,
        540,
        20201,
        20,
        1,
        19,
        0
      ],
      [
        540,
        548,
        110101,
        8,
        1,
        19,
        0
      ],
      [
        548,
        568,
        20203,
        20,
        1,
        19,
        0
      ],
      [
        568,
        573,
        20101,
        5,
        1,
        19,
        0
      ],
      [
        573,
        753,
        120303,
        180,
        1,
        19,
        0
      ],
      [
        753,
        758,
        20903,
        5,
        1,
        19,
        0
      ],
      [
        758,
        763,
        20903,
        5,
        1,
        19,
        0
      ],
      [
        763,
        773,
        20201,
        10,
        1,
        19,
        0
      ],
      [
        773,
        778,
        110101,
        5,
        1,
        19,
        0
      ],
      [
        778,
        868,
        120301,
        90,
        1,
        19,
        0
      ],
      [
        868,
        1020,
        120303,
        152,
        1,
        19,
        0
      ],
      [
        1020,
        1200,
        120101,
        180,
        1,
        53,
        0
      ],
      [
        1200,
        1320,
        120303,
        120,
        1,
        19,
        0
      ],
      [
        1320,
        1680,
        10101,
        360,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20211211211750,
    WECANTRIL: 6,
    WEGENHTH: 4,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 1,
    WETYPICAL: 2,
    TUDIARYDAY_x: 3,
    TRHOLIDAY_x: 0,
    TEAGE: 76,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 40,
    PEHSPNON: 2,
    PTDTRACE: 2,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 620,
    TRTFAMILY: 180,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 3,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        420,
        10101,
        180,
        -1,
        -1,
        0
      ],
      [
        420,
        440,
        20201,
        20,
        1,
        18,
        0
      ],
      [
        440,
        540,
        120303,
        100,
        1,
        18,
        0
      ],
      [
        540,
        630,
        20102,
        90,
        1,
        18,
        0
      ],
      [
        630,
        750,
        120303,
        120,
        1,
        18,
        0
      ],
      [
        750,
        810,
        20201,
        60,
        1,
        18,
        0
      ],
      [
        810,
        830,
        110101,
        20,
        1,
        18,
        0
      ],
      [
        830,
        1010,
        120303,
        180,
        1,
        18,
        0
      ],
      [
        1010,
        1070,
        10101,
        60,
        -1,
        -1,
        0
      ],
      [
        1070,
        1085,
        180782,
        15,
        12,
        18,
        0
      ],
      [
        1085,
        1090,
        70103,
        5,
        7,
        18,
        0
      ],
      [
        1090,
        1095,
        180782,
        5,
        12,
        18,
        0
      ],
      [
        1095,
        1275,
        120303,
        180,
        1,
        18,
        0
      ],
      [
        1275,
        1295,
        10201,
        20,
        -1,
        -1,
        0
      ],
      [
        1295,
        1320,
        10102,
        25,
        -1,
        -1,
        0
      ],
      [
        1320,
        1680,
        10101,
        360,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20211211211791,
    WECANTRIL: 4,
    WEGENHTH: 3,
    WEHBP: 1,
    WEPAINMD: 2,
    WEREST: 1,
    WETYPICAL: 2,
    TUDIARYDAY_x: 7,
    TRHOLIDAY_x: 1,
    TEAGE: 54,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 39,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 46,
    TRDPFTPT_x: 2,
    TRERNWA_x: 31250,
    TRERNHLY: 1250,
    TRTALONE: 795,
    TRTFAMILY: 0,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 1,
    TRSPPRES: 3,
    TESCHENR: -1,
    happy_group: 1
  },
  {
    activity: [
      [
        240,
        480,
        10101,
        240,
        -1,
        -1,
        0
      ],
      [
        480,
        485,
        20904,
        5,
        1,
        18,
        0
      ],
      [
        485,
        495,
        20201,
        10,
        1,
        18,
        0
      ],
      [
        495,
        515,
        110101,
        20,
        1,
        18,
        0
      ],
      [
        515,
        635,
        120303,
        120,
        1,
        18,
        0
      ],
      [
        635,
        725,
        60301,
        90,
        1,
        18,
        0
      ],
      [
        725,
        815,
        120301,
        90,
        9,
        18,
        0
      ],
      [
        815,
        905,
        130104,
        90,
        9,
        18,
        0
      ],
      [
        905,
        925,
        20201,
        20,
        1,
        18,
        0
      ],
      [
        925,
        945,
        110101,
        20,
        1,
        24,
        0
      ],
      [
        945,
        1005,
        120308,
        60,
        1,
        18,
        0
      ],
      [
        1005,
        1035,
        30201,
        30,
        1,
        25,
        0
      ],
      [
        1035,
        1140,
        500106,
        105,
        -1,
        -1,
        0
      ],
      [
        1140,
        1150,
        110101,
        10,
        1,
        24,
        0
      ],
      [
        1140,
        1150,
        110101,
        10,
        1,
        24,
        0
      ],
      [
        1140,
        1150,
        110101,
        10,
        1,
        25,
        0
      ],
      [
        1140,
        1150,
        110101,
        10,
        1,
        25,
        0
      ],
      [
        1140,
        1150,
        110101,
        10,
        1,
        25,
        0
      ],
      [
        1150,
        1170,
        10201,
        20,
        -1,
        -1,
        0
      ],
      [
        1170,
        1230,
        10201,
        60,
        -1,
        -1,
        0
      ],
      [
        1230,
        1680,
        10101,
        450,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20211009210159,
    WECANTRIL: 6,
    WEGENHTH: 2,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 1,
    WETYPICAL: 1,
    TUDIARYDAY_x: 2,
    TRHOLIDAY_x: 0,
    TEAGE: 16,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 37,
    PEHSPNON: 2,
    PTDTRACE: 2,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 505,
    TRTFAMILY: 60,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 4,
    TRSPPRES: 3,
    TESCHENR: 1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        480,
        10101,
        240,
        -1,
        -1,
        0
      ],
      [
        480,
        490,
        20201,
        10,
        1,
        18,
        0
      ],
      [
        490,
        520,
        110101,
        30,
        1,
        18,
        0
      ],
      [
        520,
        535,
        20101,
        15,
        1,
        18,
        0
      ],
      [
        535,
        555,
        180782,
        20,
        13,
        52,
        0
      ],
      [
        555,
        675,
        70104,
        120,
        7,
        52,
        0
      ],
      [
        675,
        810,
        110101,
        135,
        7,
        52,
        0
      ],
      [
        810,
        960,
        70104,
        150,
        7,
        52,
        0
      ],
      [
        960,
        975,
        180782,
        15,
        13,
        52,
        0
      ],
      [
        975,
        1020,
        120303,
        45,
        1,
        20,
        0
      ],
      [
        1020,
        1065,
        110101,
        45,
        1,
        20,
        0
      ],
      [
        1065,
        1350,
        120303,
        285,
        1,
        20,
        0
      ],
      [
        1350,
        1680,
        10101,
        330,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20211110212512,
    WECANTRIL: 7,
    WEGENHTH: 3,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 1,
    WETYPICAL: 1,
    TUDIARYDAY_x: 7,
    TRHOLIDAY_x: 0,
    TEAGE: 74,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 39,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 55,
    TRTFAMILY: 815,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 1,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        510,
        10101,
        270,
        -1,
        -1,
        0
      ],
      [
        510,
        520,
        20201,
        10,
        1,
        18,
        0
      ],
      [
        520,
        530,
        110101,
        10,
        1,
        18,
        0
      ],
      [
        530,
        780,
        60301,
        250,
        1,
        18,
        0
      ],
      [
        780,
        810,
        110101,
        30,
        1,
        18,
        0
      ],
      [
        810,
        960,
        60301,
        150,
        1,
        18,
        0
      ],
      [
        960,
        975,
        180682,
        15,
        12,
        20,
        0
      ],
      [
        975,
        1065,
        60301,
        90,
        4,
        20,
        0
      ],
      [
        1065,
        1080,
        180682,
        15,
        12,
        20,
        0
      ],
      [
        1080,
        1110,
        20203,
        30,
        1,
        18,
        0
      ],
      [
        1110,
        1170,
        120309,
        60,
        1,
        18,
        0
      ],
      [
        1170,
        1320,
        120303,
        150,
        1,
        20,
        0
      ],
      [
        1320,
        1680,
        10101,
        360,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210302212245,
    WECANTRIL: 2,
    WEGENHTH: 2,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 3,
    WETYPICAL: 2,
    TUDIARYDAY_x: 1,
    TRHOLIDAY_x: 0,
    TEAGE: 33,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 44,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 40,
    TRDPFTPT_x: 1,
    TRERNWA_x: 115384,
    TRERNHLY: -1,
    TRTALONE: 540,
    TRTFAMILY: 270,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 1,
    TESCHENR: 1,
    happy_group: 1
  },
  {
    activity: [
      [
        240,
        360,
        10101,
        120,
        -1,
        -1,
        0
      ],
      [
        360,
        390,
        110101,
        30,
        1,
        20,
        0
      ],
      [
        390,
        570,
        20501,
        180,
        1,
        18,
        0
      ],
      [
        570,
        660,
        20701,
        90,
        1,
        18,
        0
      ],
      [
        660,
        720,
        110101,
        60,
        1,
        18,
        0
      ],
      [
        720,
        900,
        40103,
        180,
        1,
        52,
        0
      ],
      [
        900,
        1020,
        120303,
        120,
        1,
        52,
        0
      ],
      [
        1020,
        1050,
        110101,
        30,
        1,
        20,
        0
      ],
      [
        1050,
        1170,
        20102,
        120,
        1,
        18,
        0
      ],
      [
        1170,
        1260,
        120303,
        90,
        1,
        20,
        0
      ],
      [
        1260,
        1680,
        10101,
        420,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20211008212054,
    WECANTRIL: 10,
    WEGENHTH: 2,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 1,
    WETYPICAL: 2,
    TUDIARYDAY_x: 3,
    TRHOLIDAY_x: 0,
    TEAGE: 68,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 42,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 450,
    TRTFAMILY: 450,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 1,
    TESCHENR: -1,
    happy_group: 3
  },
  {
    activity: [
      [
        240,
        300,
        10101,
        60,
        -1,
        -1,
        0
      ],
      [
        300,
        305,
        20681,
        5,
        1,
        18,
        0
      ],
      [
        305,
        335,
        10201,
        30,
        -1,
        -1,
        0
      ],
      [
        335,
        355,
        180501,
        20,
        12,
        18,
        0
      ],
      [
        355,
        690,
        50101,
        335,
        2,
        61,
        0
      ],
      [
        690,
        695,
        110101,
        5,
        2,
        18,
        0
      ],
      [
        695,
        825,
        50101,
        130,
        2,
        61,
        0
      ],
      [
        825,
        830,
        130131,
        5,
        2,
        18,
        0
      ],
      [
        830,
        1005,
        50101,
        175,
        2,
        18,
        0
      ],
      [
        1005,
        1030,
        180501,
        25,
        12,
        18,
        0
      ],
      [
        1030,
        1035,
        20681,
        5,
        1,
        22,
        0
      ],
      [
        1035,
        1045,
        180782,
        10,
        12,
        22,
        0
      ],
      [
        1045,
        1075,
        70104,
        30,
        7,
        22,
        0
      ],
      [
        1075,
        1085,
        180782,
        10,
        12,
        22,
        0
      ],
      [
        1085,
        1105,
        20201,
        20,
        1,
        18,
        0
      ],
      [
        1105,
        1130,
        110101,
        25,
        1,
        22,
        0
      ],
      [
        1130,
        1135,
        20203,
        5,
        1,
        18,
        0
      ],
      [
        1135,
        1170,
        20201,
        35,
        1,
        18,
        0
      ],
      [
        1170,
        1185,
        20203,
        15,
        1,
        18,
        0
      ],
      [
        1185,
        1230,
        120303,
        45,
        1,
        18,
        0
      ],
      [
        1230,
        1240,
        10201,
        10,
        -1,
        -1,
        0
      ],
      [
        1240,
        1270,
        120308,
        30,
        1,
        18,
        0
      ],
      [
        1270,
        1680,
        10101,
        410,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210807211894,
    WECANTRIL: 6,
    WEGENHTH: 2,
    WEHBP: 2,
    WEPAINMD: 1,
    WEREST: 2,
    WETYPICAL: 2,
    TUDIARYDAY_x: 3,
    TRHOLIDAY_x: 0,
    TEAGE: 45,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 43,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 14,
    TRDPFTPT_x: 1,
    TRERNWA_x: 115384,
    TRERNHLY: -1,
    TRTALONE: 210,
    TRTFAMILY: 80,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 1,
    TRSPPRES: 3,
    TESCHENR: 2,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        355,
        10101,
        115,
        -1,
        -1,
        0
      ],
      [
        355,
        370,
        10201,
        15,
        -1,
        -1,
        0
      ],
      [
        370,
        420,
        180501,
        50,
        12,
        18,
        0
      ],
      [
        420,
        660,
        50101,
        240,
        2,
        61,
        0
      ],
      [
        660,
        670,
        110101,
        10,
        2,
        61,
        0
      ],
      [
        670,
        675,
        120101,
        5,
        2,
        61,
        0
      ],
      [
        675,
        780,
        50101,
        105,
        2,
        61,
        0
      ],
      [
        780,
        795,
        120101,
        15,
        2,
        61,
        0
      ],
      [
        795,
        900,
        50101,
        105,
        2,
        61,
        0
      ],
      [
        900,
        915,
        120101,
        15,
        2,
        61,
        0
      ],
      [
        915,
        960,
        50101,
        45,
        2,
        61,
        0
      ],
      [
        960,
        1080,
        180501,
        120,
        12,
        18,
        0
      ],
      [
        1080,
        1110,
        120301,
        30,
        1,
        21,
        0
      ],
      [
        1080,
        1110,
        120301,
        30,
        1,
        22,
        0
      ],
      [
        1080,
        1110,
        120301,
        30,
        1,
        22,
        0
      ],
      [
        1110,
        1140,
        110101,
        30,
        1,
        21,
        0
      ],
      [
        1110,
        1140,
        110101,
        30,
        1,
        22,
        0
      ],
      [
        1110,
        1140,
        110101,
        30,
        1,
        22,
        0
      ],
      [
        1140,
        1170,
        120303,
        30,
        1,
        22,
        0
      ],
      [
        1140,
        1170,
        120303,
        30,
        1,
        22,
        0
      ],
      [
        1170,
        1190,
        130131,
        20,
        9,
        21,
        0
      ],
      [
        1170,
        1190,
        130131,
        20,
        9,
        22,
        0
      ],
      [
        1170,
        1190,
        130131,
        20,
        9,
        22,
        0
      ],
      [
        1190,
        1205,
        10201,
        15,
        -1,
        -1,
        0
      ],
      [
        1205,
        1235,
        120308,
        30,
        1,
        21,
        0
      ],
      [
        1205,
        1235,
        120308,
        30,
        1,
        22,
        0
      ],
      [
        1205,
        1235,
        120308,
        30,
        1,
        22,
        0
      ],
      [
        1235,
        1680,
        10101,
        445,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210705211185,
    WECANTRIL: 7,
    WEGENHTH: 3,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 2,
    WETYPICAL: 2,
    TUDIARYDAY_x: 4,
    TRHOLIDAY_x: 0,
    TEAGE: 35,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 39,
    PEHSPNON: 1,
    PTDTRACE: 1,
    TRDTIND1: 4,
    TRDPFTPT_x: 1,
    TRERNWA_x: 75e3,
    TRERNHLY: 2200,
    TRTALONE: 170,
    TRTFAMILY: 140,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 5,
    TRSPPRES: 2,
    TESCHENR: 2,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        300,
        10101,
        60,
        -1,
        -1,
        0
      ],
      [
        300,
        360,
        130133,
        60,
        1,
        20,
        0
      ],
      [
        360,
        420,
        10201,
        60,
        -1,
        -1,
        0
      ],
      [
        420,
        450,
        180501,
        30,
        12,
        18,
        0
      ],
      [
        450,
        720,
        50101,
        270,
        2,
        61,
        0
      ],
      [
        720,
        810,
        110101,
        90,
        2,
        18,
        0
      ],
      [
        810,
        960,
        50101,
        150,
        2,
        61,
        0
      ],
      [
        960,
        990,
        180501,
        30,
        12,
        18,
        0
      ],
      [
        990,
        1140,
        30103,
        150,
        1,
        20,
        0
      ],
      [
        990,
        1140,
        30103,
        150,
        1,
        22,
        0
      ],
      [
        990,
        1140,
        30103,
        150,
        1,
        22,
        0
      ],
      [
        1140,
        1170,
        20201,
        30,
        1,
        20,
        0
      ],
      [
        1140,
        1170,
        20201,
        30,
        1,
        22,
        0
      ],
      [
        1140,
        1170,
        20201,
        30,
        1,
        22,
        0
      ],
      [
        1170,
        1200,
        110101,
        30,
        1,
        20,
        0
      ],
      [
        1170,
        1200,
        110101,
        30,
        1,
        22,
        0
      ],
      [
        1170,
        1200,
        110101,
        30,
        1,
        22,
        0
      ],
      [
        1200,
        1230,
        30101,
        30,
        1,
        20,
        0
      ],
      [
        1200,
        1230,
        30101,
        30,
        1,
        22,
        0
      ],
      [
        1200,
        1230,
        30101,
        30,
        1,
        22,
        0
      ],
      [
        1230,
        1260,
        20101,
        30,
        2,
        18,
        0
      ],
      [
        1260,
        1320,
        120303,
        60,
        1,
        20,
        0
      ],
      [
        1320,
        1680,
        10101,
        360,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210807211870,
    WECANTRIL: 8,
    WEGENHTH: 2,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 3,
    WETYPICAL: 2,
    TUDIARYDAY_x: 4,
    TRHOLIDAY_x: 0,
    TEAGE: 37,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 43,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 40,
    TRDPFTPT_x: 1,
    TRERNWA_x: 1e5,
    TRERNHLY: 3400,
    TRTALONE: 180,
    TRTFAMILY: 360,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 2,
    TRSPPRES: 1,
    TESCHENR: 2,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        300,
        10101,
        60,
        -1,
        -1,
        0
      ],
      [
        300,
        330,
        10201,
        30,
        -1,
        -1,
        0
      ],
      [
        330,
        360,
        180501,
        30,
        12,
        18,
        0
      ],
      [
        360,
        720,
        50101,
        360,
        2,
        61,
        0
      ],
      [
        720,
        780,
        110101,
        60,
        2,
        61,
        0
      ],
      [
        780,
        1140,
        50101,
        360,
        2,
        61,
        0
      ],
      [
        1140,
        1200,
        110101,
        60,
        2,
        61,
        0
      ],
      [
        1200,
        1380,
        50101,
        180,
        2,
        61,
        0
      ],
      [
        1380,
        1420,
        180501,
        40,
        12,
        18,
        0
      ],
      [
        1420,
        1455,
        10201,
        35,
        -1,
        -1,
        0
      ],
      [
        15,
        180,
        10101,
        165,
        -1,
        -1,
        0
      ],
      [
        180,
        210,
        20902,
        30,
        1,
        18,
        0
      ],
      [
        210,
        240,
        181301,
        30,
        12,
        22,
        0
      ]
    ],
    TUCASEID: 20211210211880,
    WECANTRIL: 10,
    WEGENHTH: 1,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 1,
    WETYPICAL: 1,
    TUDIARYDAY_x: 7,
    TRHOLIDAY_x: 0,
    TEAGE: 32,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 39,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 38,
    TRDPFTPT_x: 1,
    TRERNWA_x: 115384,
    TRERNHLY: 2400,
    TRTALONE: 100,
    TRTFAMILY: 30,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 4,
    TRSPPRES: 1,
    TESCHENR: 2,
    happy_group: 3
  },
  {
    activity: [
      [
        240,
        420,
        10101,
        180,
        -1,
        -1,
        0
      ],
      [
        420,
        460,
        10201,
        40,
        -1,
        -1,
        0
      ],
      [
        460,
        870,
        50101,
        410,
        1,
        19,
        0
      ],
      [
        870,
        880,
        180482,
        10,
        12,
        19,
        0
      ],
      [
        880,
        890,
        40507,
        10,
        11,
        53,
        0
      ],
      [
        890,
        895,
        181201,
        5,
        12,
        58,
        0
      ],
      [
        895,
        930,
        120101,
        35,
        11,
        53,
        0
      ],
      [
        930,
        940,
        181201,
        10,
        12,
        19,
        0
      ],
      [
        940,
        960,
        50101,
        20,
        1,
        19,
        0
      ],
      [
        960,
        975,
        20201,
        15,
        1,
        19,
        0
      ],
      [
        975,
        1140,
        50101,
        165,
        1,
        19,
        0
      ],
      [
        1140,
        1155,
        20203,
        15,
        1,
        19,
        0
      ],
      [
        1155,
        1215,
        20102,
        60,
        1,
        19,
        0
      ],
      [
        1215,
        1350,
        120303,
        135,
        1,
        19,
        0
      ],
      [
        1350,
        1680,
        10101,
        330,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210706212180,
    WECANTRIL: 8,
    WEGENHTH: 3,
    WEHBP: 2,
    WEPAINMD: 1,
    WEREST: 3,
    WETYPICAL: 3,
    TUDIARYDAY_x: 5,
    TRHOLIDAY_x: 0,
    TEAGE: 54,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 40,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 18,
    TRDPFTPT_x: 1,
    TRERNWA_x: 104e3,
    TRERNHLY: 2600,
    TRTALONE: 245,
    TRTFAMILY: 45,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 3,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        450,
        10101,
        210,
        -1,
        -1,
        0
      ],
      [
        450,
        540,
        110101,
        90,
        1,
        19,
        0
      ],
      [
        540,
        585,
        10201,
        45,
        -1,
        -1,
        0
      ],
      [
        585,
        675,
        20102,
        90,
        1,
        19,
        0
      ],
      [
        675,
        735,
        120312,
        60,
        1,
        19,
        0
      ],
      [
        735,
        765,
        110101,
        30,
        1,
        19,
        0
      ],
      [
        765,
        785,
        180782,
        20,
        12,
        19,
        0
      ],
      [
        785,
        805,
        70104,
        20,
        7,
        19,
        0
      ],
      [
        805,
        825,
        180782,
        20,
        12,
        19,
        0
      ],
      [
        825,
        870,
        20102,
        45,
        1,
        19,
        0
      ],
      [
        870,
        960,
        20101,
        90,
        1,
        19,
        0
      ],
      [
        960,
        990,
        160101,
        30,
        1,
        19,
        0
      ],
      [
        990,
        1050,
        120303,
        60,
        1,
        19,
        0
      ],
      [
        1050,
        1095,
        110101,
        45,
        1,
        19,
        0
      ],
      [
        1095,
        1125,
        20203,
        30,
        1,
        19,
        0
      ],
      [
        1125,
        1440,
        120303,
        315,
        1,
        19,
        0
      ],
      [
        0,
        240,
        10101,
        240,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20211009211266,
    WECANTRIL: 10,
    WEGENHTH: 1,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 1,
    WETYPICAL: 2,
    TUDIARYDAY_x: 6,
    TRHOLIDAY_x: 0,
    TEAGE: 62,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 40,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 945,
    TRTFAMILY: 0,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 3,
    TESCHENR: -1,
    happy_group: 3
  },
  {
    activity: [
      [
        240,
        360,
        10101,
        120,
        -1,
        -1,
        0
      ],
      [
        360,
        375,
        10201,
        15,
        -1,
        -1,
        0
      ],
      [
        375,
        390,
        110101,
        15,
        1,
        18,
        0
      ],
      [
        390,
        420,
        180501,
        30,
        1,
        18,
        0
      ],
      [
        420,
        720,
        50101,
        300,
        2,
        -3,
        0
      ],
      [
        720,
        750,
        110101,
        30,
        2,
        18,
        0
      ],
      [
        750,
        990,
        50101,
        240,
        2,
        -3,
        0
      ],
      [
        990,
        1010,
        180501,
        20,
        12,
        18,
        0
      ],
      [
        1010,
        1320,
        120303,
        310,
        1,
        18,
        0
      ],
      [
        1320,
        1680,
        10101,
        360,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210302211534,
    WECANTRIL: 10,
    WEGENHTH: 1,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 1,
    WETYPICAL: 2,
    TUDIARYDAY_x: 3,
    TRHOLIDAY_x: 0,
    TEAGE: 40,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 39,
    PEHSPNON: 2,
    PTDTRACE: 2,
    TRDTIND1: 21,
    TRDPFTPT_x: 1,
    TRERNWA_x: 74e3,
    TRERNHLY: 1850,
    TRTALONE: 405,
    TRTFAMILY: 0,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 3,
    TESCHENR: 2,
    happy_group: 3
  },
  {
    activity: [
      [
        240,
        420,
        10101,
        180,
        -1,
        -1,
        0
      ],
      [
        420,
        480,
        110101,
        60,
        1,
        20,
        0
      ],
      [
        480,
        540,
        10201,
        60,
        -1,
        -1,
        0
      ],
      [
        540,
        555,
        180501,
        15,
        12,
        18,
        0
      ],
      [
        555,
        735,
        50101,
        180,
        2,
        61,
        0
      ],
      [
        735,
        765,
        110101,
        30,
        2,
        18,
        0
      ],
      [
        765,
        945,
        50101,
        180,
        2,
        61,
        0
      ],
      [
        945,
        960,
        120301,
        15,
        2,
        18,
        0
      ],
      [
        960,
        1050,
        50101,
        90,
        2,
        61,
        0
      ],
      [
        1050,
        1070,
        180501,
        20,
        12,
        18,
        0
      ],
      [
        1070,
        1100,
        110101,
        30,
        1,
        20,
        0
      ],
      [
        1070,
        1100,
        110101,
        30,
        1,
        22,
        0
      ],
      [
        1070,
        1100,
        110101,
        30,
        1,
        22,
        0
      ],
      [
        1100,
        1220,
        120303,
        120,
        1,
        18,
        0
      ],
      [
        1220,
        1250,
        120312,
        30,
        1,
        20,
        0
      ],
      [
        1250,
        1680,
        10101,
        430,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20211211211336,
    WECANTRIL: 3,
    WEGENHTH: 5,
    WEHBP: 1,
    WEPAINMD: 1,
    WEREST: 2,
    WETYPICAL: 2,
    TUDIARYDAY_x: 4,
    TRHOLIDAY_x: 0,
    TEAGE: 60,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 44,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 7,
    TRDPFTPT_x: 1,
    TRERNWA_x: 284615,
    TRERNHLY: -1,
    TRTALONE: 200,
    TRTFAMILY: 120,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 2,
    TRSPPRES: 1,
    TESCHENR: -1,
    happy_group: 1
  },
  {
    activity: [
      [
        240,
        480,
        10101,
        240,
        -1,
        -1,
        0
      ],
      [
        480,
        530,
        30101,
        50,
        1,
        22,
        0
      ],
      [
        480,
        530,
        30101,
        50,
        1,
        22,
        0
      ],
      [
        480,
        530,
        30101,
        50,
        1,
        22,
        0
      ],
      [
        530,
        545,
        10201,
        15,
        -1,
        -1,
        0
      ],
      [
        545,
        605,
        120303,
        60,
        1,
        20,
        0
      ],
      [
        545,
        605,
        120303,
        60,
        1,
        22,
        0
      ],
      [
        545,
        605,
        120303,
        60,
        1,
        22,
        0
      ],
      [
        545,
        605,
        120303,
        60,
        1,
        22,
        0
      ],
      [
        605,
        645,
        30101,
        40,
        1,
        20,
        0
      ],
      [
        605,
        645,
        30101,
        40,
        1,
        22,
        0
      ],
      [
        605,
        645,
        30101,
        40,
        1,
        22,
        0
      ],
      [
        605,
        645,
        30101,
        40,
        1,
        22,
        0
      ],
      [
        645,
        675,
        180782,
        30,
        13,
        20,
        0
      ],
      [
        645,
        675,
        180782,
        30,
        13,
        22,
        0
      ],
      [
        645,
        675,
        180782,
        30,
        13,
        22,
        0
      ],
      [
        645,
        675,
        180782,
        30,
        13,
        22,
        0
      ],
      [
        675,
        705,
        70104,
        30,
        7,
        18,
        0
      ],
      [
        705,
        720,
        180381,
        15,
        13,
        20,
        0
      ],
      [
        705,
        720,
        180381,
        15,
        13,
        22,
        0
      ],
      [
        705,
        720,
        180381,
        15,
        13,
        22,
        0
      ],
      [
        705,
        720,
        180381,
        15,
        13,
        22,
        0
      ],
      [
        720,
        765,
        30109,
        45,
        11,
        20,
        0
      ],
      [
        720,
        765,
        30109,
        45,
        11,
        22,
        0
      ],
      [
        720,
        765,
        30109,
        45,
        11,
        22,
        0
      ],
      [
        720,
        765,
        30109,
        45,
        11,
        22,
        0
      ],
      [
        765,
        840,
        120201,
        75,
        11,
        20,
        0
      ],
      [
        765,
        840,
        120201,
        75,
        11,
        22,
        0
      ],
      [
        765,
        840,
        120201,
        75,
        11,
        22,
        0
      ],
      [
        765,
        840,
        120201,
        75,
        11,
        22,
        0
      ],
      [
        840,
        875,
        181202,
        35,
        13,
        20,
        0
      ],
      [
        840,
        875,
        181202,
        35,
        13,
        22,
        0
      ],
      [
        840,
        875,
        181202,
        35,
        13,
        22,
        0
      ],
      [
        840,
        875,
        181202,
        35,
        13,
        22,
        0
      ],
      [
        875,
        905,
        30101,
        30,
        1,
        20,
        0
      ],
      [
        875,
        905,
        30101,
        30,
        1,
        22,
        0
      ],
      [
        875,
        905,
        30101,
        30,
        1,
        22,
        0
      ],
      [
        875,
        905,
        30101,
        30,
        1,
        22,
        0
      ],
      [
        905,
        945,
        30101,
        40,
        1,
        20,
        0
      ],
      [
        905,
        945,
        30101,
        40,
        1,
        22,
        0
      ],
      [
        905,
        945,
        30101,
        40,
        1,
        22,
        0
      ],
      [
        905,
        945,
        30101,
        40,
        1,
        22,
        0
      ],
      [
        945,
        1080,
        120303,
        135,
        1,
        20,
        0
      ],
      [
        1080,
        1110,
        20201,
        30,
        1,
        20,
        0
      ],
      [
        1110,
        1125,
        120301,
        15,
        1,
        18,
        0
      ],
      [
        1125,
        1140,
        30101,
        15,
        1,
        22,
        0
      ],
      [
        1140,
        1160,
        20201,
        20,
        1,
        18,
        0
      ],
      [
        1160,
        1190,
        110101,
        30,
        1,
        20,
        0
      ],
      [
        1160,
        1190,
        110101,
        30,
        1,
        22,
        0
      ],
      [
        1160,
        1190,
        110101,
        30,
        1,
        22,
        0
      ],
      [
        1160,
        1190,
        110101,
        30,
        1,
        22,
        0
      ],
      [
        1190,
        1220,
        30109,
        30,
        1,
        20,
        0
      ],
      [
        1190,
        1220,
        30109,
        30,
        1,
        22,
        0
      ],
      [
        1190,
        1220,
        30109,
        30,
        1,
        22,
        0
      ],
      [
        1190,
        1220,
        30109,
        30,
        1,
        22,
        0
      ],
      [
        1220,
        1235,
        20501,
        15,
        1,
        22,
        0
      ],
      [
        1235,
        1260,
        30109,
        25,
        1,
        20,
        0
      ],
      [
        1235,
        1260,
        30109,
        25,
        1,
        22,
        0
      ],
      [
        1235,
        1260,
        30109,
        25,
        1,
        22,
        0
      ],
      [
        1235,
        1260,
        30109,
        25,
        1,
        22,
        0
      ],
      [
        1260,
        1290,
        30102,
        30,
        1,
        20,
        0
      ],
      [
        1260,
        1290,
        30102,
        30,
        1,
        22,
        0
      ],
      [
        1260,
        1290,
        30102,
        30,
        1,
        22,
        0
      ],
      [
        1260,
        1290,
        30102,
        30,
        1,
        22,
        0
      ],
      [
        1290,
        1300,
        20681,
        10,
        1,
        20,
        0
      ],
      [
        1300,
        1440,
        120303,
        140,
        1,
        20,
        0
      ],
      [
        0,
        240,
        10101,
        240,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210605211216,
    WECANTRIL: 8,
    WEGENHTH: 2,
    WEHBP: 1,
    WEPAINMD: 2,
    WEREST: 2,
    WETYPICAL: 1,
    TUDIARYDAY_x: 1,
    TRHOLIDAY_x: 0,
    TEAGE: 34,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 44,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 40,
    TRDPFTPT_x: 1,
    TRERNWA_x: 123076,
    TRERNHLY: -1,
    TRTALONE: 65,
    TRTFAMILY: 880,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 3,
    TRSPPRES: 1,
    TESCHENR: 2,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        540,
        10101,
        300,
        -1,
        -1,
        0
      ],
      [
        540,
        550,
        20201,
        10,
        1,
        22,
        0
      ],
      [
        540,
        550,
        20201,
        10,
        1,
        22,
        0
      ],
      [
        550,
        560,
        30402,
        10,
        1,
        20,
        0
      ],
      [
        560,
        720,
        120303,
        160,
        1,
        20,
        0
      ],
      [
        560,
        720,
        120303,
        160,
        1,
        22,
        0
      ],
      [
        560,
        720,
        120303,
        160,
        1,
        22,
        0
      ],
      [
        720,
        735,
        180701,
        15,
        12,
        18,
        0
      ],
      [
        735,
        795,
        70101,
        60,
        6,
        18,
        0
      ],
      [
        795,
        805,
        180782,
        10,
        12,
        18,
        0
      ],
      [
        805,
        810,
        70102,
        5,
        7,
        18,
        0
      ],
      [
        810,
        820,
        180782,
        10,
        12,
        18,
        0
      ],
      [
        820,
        865,
        20201,
        45,
        1,
        18,
        0
      ],
      [
        865,
        870,
        20202,
        5,
        1,
        20,
        0
      ],
      [
        865,
        870,
        20202,
        5,
        1,
        22,
        0
      ],
      [
        865,
        870,
        20202,
        5,
        1,
        22,
        0
      ],
      [
        870,
        900,
        110101,
        30,
        1,
        20,
        0
      ],
      [
        870,
        900,
        110101,
        30,
        1,
        22,
        0
      ],
      [
        870,
        900,
        110101,
        30,
        1,
        22,
        0
      ],
      [
        900,
        1080,
        120303,
        180,
        1,
        20,
        0
      ],
      [
        900,
        1080,
        120303,
        180,
        1,
        22,
        0
      ],
      [
        900,
        1080,
        120303,
        180,
        1,
        22,
        0
      ],
      [
        1080,
        1095,
        20201,
        15,
        1,
        18,
        0
      ],
      [
        1095,
        1125,
        110101,
        30,
        1,
        20,
        0
      ],
      [
        1095,
        1125,
        110101,
        30,
        1,
        22,
        0
      ],
      [
        1095,
        1125,
        110101,
        30,
        1,
        22,
        0
      ],
      [
        1125,
        1290,
        120303,
        165,
        1,
        20,
        0
      ],
      [
        1125,
        1290,
        120303,
        165,
        1,
        22,
        0
      ],
      [
        1125,
        1290,
        120303,
        165,
        1,
        22,
        0
      ],
      [
        1290,
        1320,
        30101,
        30,
        1,
        20,
        0
      ],
      [
        1290,
        1320,
        30101,
        30,
        1,
        22,
        0
      ],
      [
        1290,
        1320,
        30101,
        30,
        1,
        22,
        0
      ],
      [
        1320,
        1330,
        30101,
        10,
        1,
        20,
        0
      ],
      [
        1320,
        1330,
        30101,
        10,
        1,
        22,
        0
      ],
      [
        1320,
        1330,
        30101,
        10,
        1,
        22,
        0
      ],
      [
        1330,
        1340,
        70103,
        10,
        1,
        20,
        0
      ],
      [
        1340,
        1380,
        120303,
        40,
        1,
        20,
        0
      ],
      [
        1380,
        1410,
        110101,
        30,
        1,
        20,
        0
      ],
      [
        1410,
        1470,
        120308,
        60,
        1,
        18,
        0
      ],
      [
        30,
        240,
        10101,
        210,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210403211901,
    WECANTRIL: 5,
    WEGENHTH: 3,
    WEHBP: 1,
    WEPAINMD: 1,
    WEREST: 4,
    WETYPICAL: 2,
    TUDIARYDAY_x: 1,
    TRHOLIDAY_x: 0,
    TEAGE: 30,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 39,
    PEHSPNON: 2,
    PTDTRACE: 2,
    TRDTIND1: 13,
    TRDPFTPT_x: 1,
    TRERNWA_x: 1e5,
    TRERNHLY: 2500,
    TRTALONE: 220,
    TRTFAMILY: 710,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 2,
    TRSPPRES: 1,
    TESCHENR: 2,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        600,
        10101,
        360,
        -1,
        -1,
        0
      ],
      [
        600,
        615,
        20201,
        15,
        1,
        19,
        0
      ],
      [
        615,
        630,
        110101,
        15,
        1,
        19,
        0
      ],
      [
        630,
        640,
        20102,
        10,
        1,
        19,
        0
      ],
      [
        640,
        670,
        120303,
        30,
        1,
        19,
        0
      ],
      [
        670,
        700,
        130131,
        30,
        9,
        19,
        0
      ],
      [
        700,
        790,
        160101,
        90,
        1,
        19,
        0
      ],
      [
        790,
        910,
        10101,
        120,
        -1,
        -1,
        0
      ],
      [
        910,
        1210,
        120308,
        300,
        1,
        19,
        0
      ],
      [
        1210,
        1270,
        120303,
        60,
        1,
        19,
        0
      ],
      [
        1270,
        1290,
        110101,
        20,
        1,
        19,
        0
      ],
      [
        1290,
        1350,
        120308,
        60,
        1,
        19,
        0
      ],
      [
        1350,
        1380,
        140102,
        30,
        1,
        19,
        0
      ],
      [
        1380,
        1680,
        10101,
        300,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20211110210692,
    WECANTRIL: 8,
    WEGENHTH: 3,
    WEHBP: 1,
    WEPAINMD: 1,
    WEREST: 3,
    WETYPICAL: 2,
    TUDIARYDAY_x: 1,
    TRHOLIDAY_x: 0,
    TEAGE: 50,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 43,
    PEHSPNON: 2,
    PTDTRACE: 4,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 660,
    TRTFAMILY: 0,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 3,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        435,
        10101,
        195,
        -1,
        -1,
        0
      ],
      [
        435,
        450,
        10201,
        15,
        -1,
        -1,
        0
      ],
      [
        450,
        470,
        110101,
        20,
        1,
        20,
        0
      ],
      [
        470,
        515,
        130131,
        45,
        9,
        18,
        0
      ],
      [
        515,
        575,
        120312,
        60,
        1,
        18,
        0
      ],
      [
        575,
        815,
        120303,
        240,
        1,
        18,
        0
      ],
      [
        815,
        905,
        10101,
        90,
        -1,
        -1,
        0
      ],
      [
        905,
        1080,
        120303,
        175,
        1,
        20,
        0
      ],
      [
        1080,
        1140,
        120303,
        60,
        1,
        20,
        0
      ],
      [
        1140,
        1170,
        110101,
        30,
        1,
        20,
        0
      ],
      [
        1170,
        1350,
        120301,
        180,
        1,
        20,
        0
      ],
      [
        1350,
        1680,
        10101,
        330,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210301211130,
    WECANTRIL: 6,
    WEGENHTH: 2,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 1,
    WETYPICAL: 2,
    TUDIARYDAY_x: 1,
    TRHOLIDAY_x: 0,
    TEAGE: 80,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 39,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 345,
    TRTFAMILY: 465,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 1,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        360,
        10101,
        120,
        -1,
        -1,
        0
      ],
      [
        360,
        370,
        20201,
        10,
        1,
        18,
        0
      ],
      [
        370,
        390,
        10201,
        20,
        -1,
        -1,
        0
      ],
      [
        390,
        400,
        20102,
        10,
        1,
        18,
        0
      ],
      [
        400,
        430,
        20201,
        30,
        1,
        18,
        0
      ],
      [
        430,
        510,
        120303,
        80,
        1,
        20,
        0
      ],
      [
        510,
        645,
        20302,
        135,
        1,
        20,
        0
      ],
      [
        645,
        750,
        20401,
        105,
        1,
        18,
        0
      ],
      [
        750,
        840,
        120307,
        90,
        1,
        53,
        0
      ],
      [
        750,
        840,
        120307,
        90,
        1,
        22,
        0
      ],
      [
        840,
        900,
        120101,
        60,
        1,
        53,
        0
      ],
      [
        840,
        900,
        120101,
        60,
        1,
        20,
        0
      ],
      [
        840,
        900,
        120101,
        60,
        1,
        22,
        0
      ],
      [
        900,
        960,
        20201,
        60,
        1,
        20,
        0
      ],
      [
        960,
        1050,
        110101,
        90,
        1,
        53,
        0
      ],
      [
        960,
        1050,
        110101,
        90,
        1,
        20,
        0
      ],
      [
        960,
        1050,
        110101,
        90,
        1,
        22,
        0
      ],
      [
        1050,
        1080,
        20203,
        30,
        1,
        20,
        0
      ],
      [
        1080,
        1200,
        120303,
        120,
        1,
        53,
        0
      ],
      [
        1080,
        1200,
        120303,
        120,
        1,
        20,
        0
      ],
      [
        1080,
        1200,
        120303,
        120,
        1,
        22,
        0
      ],
      [
        1200,
        1220,
        120101,
        20,
        1,
        53,
        0
      ],
      [
        1200,
        1220,
        120101,
        20,
        1,
        58,
        0
      ],
      [
        1200,
        1220,
        120101,
        20,
        1,
        20,
        0
      ],
      [
        1200,
        1220,
        120101,
        20,
        1,
        22,
        0
      ],
      [
        1220,
        1295,
        120101,
        75,
        1,
        53,
        0
      ],
      [
        1295,
        1415,
        120303,
        120,
        1,
        20,
        0
      ],
      [
        1415,
        1425,
        120308,
        10,
        1,
        20,
        0
      ],
      [
        1425,
        1680,
        10101,
        255,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20211210212469,
    WECANTRIL: 8,
    WEGENHTH: 2,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 1,
    WETYPICAL: 1,
    TUDIARYDAY_x: 7,
    TRHOLIDAY_x: 1,
    TEAGE: 52,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 40,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 22,
    TRDPFTPT_x: 1,
    TRERNWA_x: 288461,
    TRERNHLY: -1,
    TRTALONE: 155,
    TRTFAMILY: 890,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 1,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        510,
        10101,
        270,
        -1,
        -1,
        0
      ],
      [
        510,
        570,
        20201,
        60,
        1,
        20,
        0
      ],
      [
        510,
        570,
        20201,
        60,
        1,
        22,
        0
      ],
      [
        510,
        570,
        20201,
        60,
        1,
        22,
        0
      ],
      [
        570,
        600,
        20203,
        30,
        1,
        20,
        0
      ],
      [
        570,
        600,
        20203,
        30,
        1,
        22,
        0
      ],
      [
        570,
        600,
        20203,
        30,
        1,
        22,
        0
      ],
      [
        600,
        615,
        120312,
        15,
        1,
        18,
        0
      ],
      [
        615,
        616,
        20681,
        1,
        1,
        18,
        0
      ],
      [
        616,
        676,
        20102,
        60,
        1,
        18,
        0
      ],
      [
        676,
        736,
        10201,
        60,
        -1,
        -1,
        0
      ],
      [
        736,
        856,
        20101,
        120,
        1,
        22,
        0
      ],
      [
        736,
        856,
        20101,
        120,
        1,
        22,
        0
      ],
      [
        856,
        946,
        120303,
        90,
        1,
        20,
        0
      ],
      [
        856,
        946,
        120303,
        90,
        1,
        22,
        0
      ],
      [
        856,
        946,
        120303,
        90,
        1,
        22,
        0
      ],
      [
        946,
        966,
        180806,
        20,
        12,
        20,
        0
      ],
      [
        946,
        966,
        180806,
        20,
        12,
        22,
        0
      ],
      [
        946,
        966,
        180806,
        20,
        12,
        22,
        0
      ],
      [
        966,
        1056,
        80601,
        90,
        9,
        20,
        0
      ],
      [
        966,
        1056,
        80601,
        90,
        9,
        22,
        0
      ],
      [
        966,
        1056,
        80601,
        90,
        9,
        22,
        0
      ],
      [
        1056,
        1071,
        180806,
        15,
        12,
        20,
        0
      ],
      [
        1056,
        1071,
        180806,
        15,
        12,
        22,
        0
      ],
      [
        1056,
        1071,
        180806,
        15,
        12,
        22,
        0
      ],
      [
        1071,
        1091,
        110101,
        20,
        1,
        20,
        0
      ],
      [
        1071,
        1091,
        110101,
        20,
        1,
        22,
        0
      ],
      [
        1071,
        1091,
        110101,
        20,
        1,
        22,
        0
      ],
      [
        1091,
        1136,
        20201,
        45,
        1,
        20,
        0
      ],
      [
        1091,
        1136,
        20201,
        45,
        1,
        22,
        0
      ],
      [
        1091,
        1136,
        20201,
        45,
        1,
        22,
        0
      ],
      [
        1136,
        1176,
        110101,
        40,
        1,
        20,
        0
      ],
      [
        1136,
        1176,
        110101,
        40,
        1,
        22,
        0
      ],
      [
        1136,
        1176,
        110101,
        40,
        1,
        22,
        0
      ],
      [
        1176,
        1211,
        20203,
        35,
        1,
        20,
        0
      ],
      [
        1211,
        1271,
        120303,
        60,
        1,
        18,
        0
      ],
      [
        1271,
        1286,
        30101,
        15,
        1,
        22,
        0
      ],
      [
        1271,
        1286,
        30101,
        15,
        1,
        22,
        0
      ],
      [
        1286,
        1301,
        10201,
        15,
        -1,
        -1,
        0
      ],
      [
        1301,
        1680,
        10101,
        379,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210605211628,
    WECANTRIL: 8,
    WEGENHTH: 1,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 2,
    WETYPICAL: 2,
    TUDIARYDAY_x: 7,
    TRHOLIDAY_x: 0,
    TEAGE: 44,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 44,
    PEHSPNON: 1,
    PTDTRACE: 1,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 136,
    TRTFAMILY: 580,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 2,
    TRSPPRES: 1,
    TESCHENR: 2,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        660,
        10101,
        420,
        -1,
        -1,
        0
      ],
      [
        660,
        690,
        110101,
        30,
        1,
        19,
        0
      ],
      [
        690,
        750,
        10201,
        60,
        -1,
        -1,
        0
      ],
      [
        750,
        870,
        50481,
        120,
        1,
        19,
        0
      ],
      [
        870,
        880,
        180701,
        10,
        12,
        19,
        0
      ],
      [
        880,
        910,
        70101,
        30,
        6,
        19,
        0
      ],
      [
        910,
        920,
        180701,
        10,
        12,
        19,
        0
      ],
      [
        920,
        950,
        20104,
        30,
        1,
        19,
        0
      ],
      [
        950,
        1100,
        20102,
        150,
        1,
        19,
        0
      ],
      [
        1100,
        1130,
        110101,
        30,
        1,
        19,
        0
      ],
      [
        1130,
        1260,
        120303,
        130,
        1,
        19,
        0
      ],
      [
        1260,
        1290,
        120312,
        30,
        1,
        19,
        0
      ],
      [
        1290,
        1680,
        10101,
        390,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210504212122,
    WECANTRIL: 7,
    WEGENHTH: 4,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 1,
    WETYPICAL: 2,
    TUDIARYDAY_x: 3,
    TRHOLIDAY_x: 0,
    TEAGE: 65,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 43,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 570,
    TRTFAMILY: 0,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 3,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        450,
        10101,
        210,
        -1,
        -1,
        0
      ],
      [
        450,
        460,
        20681,
        10,
        1,
        18,
        0
      ],
      [
        460,
        461,
        10301,
        1,
        1,
        18,
        0
      ],
      [
        461,
        481,
        20904,
        20,
        1,
        18,
        0
      ],
      [
        481,
        482,
        10301,
        1,
        1,
        18,
        0
      ],
      [
        482,
        492,
        20201,
        10,
        1,
        18,
        0
      ],
      [
        492,
        502,
        110101,
        10,
        1,
        18,
        0
      ],
      [
        502,
        517,
        20681,
        15,
        1,
        18,
        0
      ],
      [
        517,
        547,
        10201,
        30,
        -1,
        -1,
        0
      ],
      [
        547,
        600,
        120307,
        53,
        1,
        18,
        0
      ],
      [
        600,
        620,
        20102,
        20,
        1,
        18,
        0
      ],
      [
        620,
        680,
        20501,
        60,
        1,
        18,
        0
      ],
      [
        680,
        800,
        120303,
        120,
        1,
        18,
        0
      ],
      [
        800,
        820,
        180802,
        20,
        12,
        18,
        0
      ],
      [
        820,
        825,
        80201,
        5,
        30,
        18,
        0
      ],
      [
        825,
        835,
        180782,
        10,
        12,
        18,
        0
      ],
      [
        835,
        845,
        70102,
        10,
        11,
        18,
        0
      ],
      [
        845,
        855,
        180782,
        10,
        12,
        18,
        0
      ],
      [
        855,
        895,
        20201,
        40,
        1,
        18,
        0
      ],
      [
        895,
        910,
        110101,
        15,
        1,
        18,
        0
      ],
      [
        910,
        940,
        20501,
        30,
        1,
        18,
        0
      ],
      [
        940,
        1e3,
        120307,
        60,
        1,
        18,
        0
      ],
      [
        1e3,
        1060,
        160101,
        60,
        1,
        18,
        0
      ],
      [
        1060,
        1075,
        20681,
        15,
        1,
        18,
        0
      ],
      [
        1075,
        1095,
        20301,
        20,
        1,
        18,
        0
      ],
      [
        1095,
        1215,
        120303,
        120,
        1,
        18,
        0
      ],
      [
        1215,
        1260,
        50101,
        45,
        1,
        18,
        0
      ],
      [
        1260,
        1320,
        120303,
        60,
        1,
        18,
        0
      ],
      [
        1320,
        1410,
        120312,
        90,
        1,
        18,
        0
      ],
      [
        1410,
        1455,
        10102,
        45,
        -1,
        -1,
        0
      ],
      [
        15,
        30,
        20681,
        15,
        1,
        18,
        0
      ],
      [
        30,
        60,
        120312,
        30,
        1,
        18,
        0
      ],
      [
        60,
        210,
        10101,
        150,
        -1,
        -1,
        0
      ],
      [
        210,
        220,
        20681,
        10,
        1,
        18,
        0
      ],
      [
        220,
        240,
        10101,
        20,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20211110211550,
    WECANTRIL: 8,
    WEGENHTH: 3,
    WEHBP: 1,
    WEPAINMD: 1,
    WEREST: 1,
    WETYPICAL: 1,
    TUDIARYDAY_x: 6,
    TRHOLIDAY_x: 0,
    TEAGE: 51,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 44,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 8,
    TRDPFTPT_x: 1,
    TRERNWA_x: 288461,
    TRERNHLY: -1,
    TRTALONE: 940,
    TRTFAMILY: 0,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 1,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        510,
        10101,
        270,
        -1,
        -1,
        0
      ],
      [
        510,
        540,
        20201,
        30,
        1,
        20,
        0
      ],
      [
        540,
        570,
        110101,
        30,
        1,
        20,
        0
      ],
      [
        570,
        580,
        20101,
        10,
        1,
        18,
        0
      ],
      [
        580,
        610,
        20101,
        30,
        1,
        18,
        0
      ],
      [
        610,
        730,
        20501,
        120,
        1,
        18,
        0
      ],
      [
        730,
        790,
        20201,
        60,
        1,
        18,
        0
      ],
      [
        790,
        810,
        110101,
        20,
        1,
        20,
        0
      ],
      [
        810,
        840,
        120101,
        30,
        1,
        20,
        0
      ],
      [
        840,
        900,
        20501,
        60,
        1,
        18,
        0
      ],
      [
        900,
        960,
        10201,
        60,
        -1,
        -1,
        0
      ],
      [
        960,
        1020,
        120303,
        60,
        1,
        20,
        0
      ],
      [
        1020,
        1260,
        120101,
        240,
        1,
        53,
        0
      ],
      [
        1020,
        1260,
        120101,
        240,
        1,
        20,
        0
      ],
      [
        1260,
        1680,
        10101,
        420,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20211008210698,
    WECANTRIL: 5,
    WEGENHTH: 3,
    WEHBP: 1,
    WEPAINMD: 1,
    WEREST: 2,
    WETYPICAL: 2,
    TUDIARYDAY_x: 1,
    TRHOLIDAY_x: 0,
    TEAGE: 63,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 39,
    PEHSPNON: 1,
    PTDTRACE: 1,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 280,
    TRTFAMILY: 410,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 1,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        540,
        10101,
        300,
        -1,
        -1,
        0
      ],
      [
        540,
        555,
        181101,
        15,
        12,
        19,
        0
      ],
      [
        555,
        615,
        110101,
        60,
        4,
        19,
        0
      ],
      [
        615,
        618,
        180782,
        3,
        12,
        19,
        0
      ],
      [
        618,
        623,
        70102,
        5,
        11,
        19,
        0
      ],
      [
        623,
        627,
        180782,
        4,
        12,
        19,
        0
      ],
      [
        627,
        657,
        70104,
        30,
        7,
        19,
        0
      ],
      [
        657,
        682,
        181283,
        25,
        12,
        19,
        0
      ],
      [
        682,
        772,
        120301,
        90,
        9,
        19,
        0
      ],
      [
        772,
        802,
        180782,
        30,
        12,
        19,
        0
      ],
      [
        802,
        809,
        70103,
        7,
        4,
        19,
        0
      ],
      [
        809,
        824,
        181283,
        15,
        12,
        19,
        0
      ],
      [
        824,
        854,
        120301,
        30,
        9,
        19,
        0
      ],
      [
        854,
        864,
        181283,
        10,
        12,
        19,
        0
      ],
      [
        864,
        924,
        120303,
        60,
        1,
        19,
        0
      ],
      [
        924,
        1200,
        120303,
        276,
        1,
        19,
        0
      ],
      [
        1200,
        1220,
        10201,
        20,
        -1,
        -1,
        0
      ],
      [
        1220,
        1290,
        20201,
        70,
        1,
        19,
        0
      ],
      [
        1290,
        1320,
        110101,
        30,
        1,
        19,
        0
      ],
      [
        1320,
        1400,
        20203,
        80,
        1,
        19,
        0
      ],
      [
        1400,
        1415,
        10201,
        15,
        -1,
        -1,
        0
      ],
      [
        1415,
        1680,
        10101,
        265,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210706210506,
    WECANTRIL: 6,
    WEGENHTH: 4,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 1,
    WETYPICAL: 1,
    TUDIARYDAY_x: 1,
    TRHOLIDAY_x: 0,
    TEAGE: 50,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 36,
    PEHSPNON: 1,
    PTDTRACE: 1,
    TRDTIND1: 12,
    TRDPFTPT_x: 1,
    TRERNWA_x: 5e4,
    TRERNHLY: -1,
    TRTALONE: 840,
    TRTFAMILY: 0,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 3,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        480,
        10101,
        240,
        -1,
        -1,
        0
      ],
      [
        480,
        510,
        20201,
        30,
        1,
        18,
        0
      ],
      [
        510,
        540,
        110101,
        30,
        1,
        18,
        0
      ],
      [
        540,
        600,
        20102,
        60,
        1,
        18,
        0
      ],
      [
        600,
        840,
        20102,
        240,
        1,
        18,
        0
      ],
      [
        840,
        900,
        20102,
        60,
        1,
        18,
        0
      ],
      [
        900,
        930,
        20201,
        30,
        1,
        18,
        0
      ],
      [
        930,
        940,
        110101,
        10,
        1,
        18,
        0
      ],
      [
        940,
        950,
        20203,
        10,
        1,
        18,
        0
      ],
      [
        950,
        1070,
        20201,
        120,
        1,
        18,
        0
      ],
      [
        1070,
        1100,
        10201,
        30,
        -1,
        -1,
        0
      ],
      [
        1100,
        1115,
        20201,
        15,
        1,
        18,
        0
      ],
      [
        1115,
        1130,
        110101,
        15,
        1,
        18,
        0
      ],
      [
        1130,
        1190,
        120308,
        60,
        1,
        18,
        0
      ],
      [
        1190,
        1210,
        160101,
        20,
        1,
        18,
        0
      ],
      [
        1210,
        1230,
        110101,
        20,
        1,
        18,
        0
      ],
      [
        1230,
        1250,
        120303,
        20,
        1,
        18,
        0
      ],
      [
        1250,
        1270,
        20203,
        20,
        1,
        18,
        0
      ],
      [
        1270,
        1380,
        120303,
        110,
        1,
        18,
        0
      ],
      [
        1380,
        1410,
        10201,
        30,
        -1,
        -1,
        0
      ],
      [
        1410,
        1680,
        10101,
        270,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20211009212254,
    WECANTRIL: 8,
    WEGENHTH: 4,
    WEHBP: 1,
    WEPAINMD: 1,
    WEREST: 1,
    WETYPICAL: 2,
    TUDIARYDAY_x: 6,
    TRHOLIDAY_x: 0,
    TEAGE: 62,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 36,
    PEHSPNON: 1,
    PTDTRACE: 1,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 870,
    TRTFAMILY: 0,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 3,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        480,
        10101,
        240,
        -1,
        -1,
        0
      ],
      [
        480,
        500,
        10201,
        20,
        -1,
        -1,
        0
      ],
      [
        500,
        540,
        120308,
        40,
        1,
        20,
        0
      ],
      [
        540,
        542,
        181401,
        2,
        13,
        20,
        0
      ],
      [
        542,
        630,
        140101,
        88,
        5,
        20,
        0
      ],
      [
        630,
        690,
        150204,
        60,
        5,
        57,
        0
      ],
      [
        630,
        690,
        150204,
        60,
        5,
        58,
        0
      ],
      [
        690,
        692,
        181501,
        2,
        12,
        20,
        0
      ],
      [
        692,
        707,
        110101,
        15,
        1,
        20,
        0
      ],
      [
        707,
        752,
        120303,
        45,
        1,
        20,
        0
      ],
      [
        752,
        812,
        10101,
        60,
        -1,
        -1,
        0
      ],
      [
        812,
        960,
        120308,
        148,
        1,
        18,
        0
      ],
      [
        960,
        990,
        181101,
        30,
        12,
        20,
        0
      ],
      [
        990,
        1035,
        110101,
        45,
        3,
        51,
        0
      ],
      [
        990,
        1035,
        110101,
        45,
        3,
        20,
        0
      ],
      [
        1035,
        1200,
        120307,
        165,
        3,
        51,
        0
      ],
      [
        1035,
        1200,
        120307,
        165,
        3,
        20,
        0
      ],
      [
        1200,
        1260,
        120101,
        60,
        3,
        51,
        0
      ],
      [
        1200,
        1260,
        120101,
        60,
        3,
        20,
        0
      ],
      [
        1260,
        1270,
        181283,
        10,
        12,
        20,
        0
      ],
      [
        1270,
        1290,
        181283,
        20,
        12,
        20,
        0
      ],
      [
        1290,
        1320,
        181283,
        30,
        12,
        20,
        0
      ],
      [
        1320,
        1350,
        10201,
        30,
        -1,
        -1,
        0
      ],
      [
        1350,
        1680,
        10101,
        330,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20211211211138,
    WECANTRIL: 5,
    WEGENHTH: 2,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 3,
    WETYPICAL: 2,
    TUDIARYDAY_x: 1,
    TRHOLIDAY_x: 0,
    TEAGE: 26,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 44,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 36,
    TRDPFTPT_x: 1,
    TRERNWA_x: 119230,
    TRERNHLY: -1,
    TRTALONE: 148,
    TRTFAMILY: 552,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 1,
    TESCHENR: 2,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        420,
        10101,
        180,
        -1,
        -1,
        0
      ],
      [
        420,
        780,
        20501,
        360,
        1,
        18,
        0
      ],
      [
        780,
        1020,
        20101,
        240,
        1,
        18,
        0
      ],
      [
        1020,
        1080,
        20201,
        60,
        1,
        20,
        0
      ],
      [
        1080,
        1110,
        110101,
        30,
        1,
        20,
        0
      ],
      [
        1110,
        1380,
        120303,
        270,
        1,
        20,
        0
      ],
      [
        1380,
        1680,
        10101,
        300,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210706212213,
    WECANTRIL: 8,
    WEGENHTH: 1,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 3,
    WETYPICAL: 1,
    TUDIARYDAY_x: 2,
    TRHOLIDAY_x: 0,
    TEAGE: 64,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 44,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 51,
    TRDPFTPT_x: 1,
    TRERNWA_x: 148436,
    TRERNHLY: -1,
    TRTALONE: 600,
    TRTFAMILY: 360,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 1,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        420,
        10101,
        180,
        -1,
        -1,
        0
      ],
      [
        420,
        421,
        20201,
        1,
        1,
        20,
        0
      ],
      [
        420,
        421,
        20201,
        1,
        1,
        22,
        0
      ],
      [
        421,
        431,
        110101,
        10,
        1,
        20,
        0
      ],
      [
        421,
        431,
        110101,
        10,
        1,
        22,
        0
      ],
      [
        431,
        433,
        20681,
        2,
        1,
        18,
        0
      ],
      [
        433,
        434,
        20681,
        1,
        1,
        18,
        0
      ],
      [
        434,
        444,
        120308,
        10,
        1,
        20,
        0
      ],
      [
        444,
        524,
        180381,
        80,
        13,
        20,
        0
      ],
      [
        444,
        524,
        180381,
        80,
        13,
        22,
        0
      ],
      [
        524,
        527,
        30112,
        3,
        8,
        20,
        0
      ],
      [
        524,
        527,
        30112,
        3,
        8,
        22,
        0
      ],
      [
        527,
        529,
        180381,
        2,
        13,
        20,
        0
      ],
      [
        529,
        539,
        180280,
        10,
        13,
        20,
        0
      ],
      [
        539,
        540,
        20902,
        1,
        6,
        20,
        0
      ],
      [
        539,
        540,
        20902,
        1,
        6,
        22,
        0
      ],
      [
        540,
        620,
        180280,
        80,
        13,
        20,
        0
      ],
      [
        620,
        640,
        120303,
        20,
        1,
        20,
        0
      ],
      [
        640,
        680,
        180782,
        40,
        13,
        56,
        0
      ],
      [
        640,
        680,
        180782,
        40,
        13,
        20,
        0
      ],
      [
        680,
        690,
        70104,
        10,
        11,
        56,
        0
      ],
      [
        680,
        690,
        70104,
        10,
        11,
        20,
        0
      ],
      [
        690,
        745,
        180280,
        55,
        13,
        56,
        0
      ],
      [
        690,
        745,
        180280,
        55,
        13,
        20,
        0
      ],
      [
        745,
        840,
        20902,
        95,
        3,
        56,
        0
      ],
      [
        745,
        840,
        20902,
        95,
        3,
        20,
        0
      ],
      [
        840,
        845,
        500103,
        5,
        13,
        20,
        0
      ],
      [
        845,
        905,
        180381,
        60,
        13,
        20,
        0
      ],
      [
        905,
        912,
        30112,
        7,
        6,
        20,
        0
      ],
      [
        905,
        912,
        30112,
        7,
        6,
        22,
        0
      ],
      [
        912,
        932,
        180782,
        20,
        13,
        20,
        0
      ],
      [
        912,
        932,
        180782,
        20,
        13,
        22,
        0
      ],
      [
        932,
        937,
        70103,
        5,
        4,
        20,
        0
      ],
      [
        932,
        937,
        70103,
        5,
        4,
        22,
        0
      ],
      [
        937,
        943,
        110101,
        6,
        4,
        20,
        0
      ],
      [
        937,
        943,
        110101,
        6,
        4,
        22,
        0
      ],
      [
        943,
        1003,
        70104,
        60,
        7,
        20,
        0
      ],
      [
        943,
        1003,
        70104,
        60,
        7,
        22,
        0
      ],
      [
        1003,
        1008,
        180782,
        5,
        13,
        20,
        0
      ],
      [
        1003,
        1008,
        180782,
        5,
        13,
        22,
        0
      ],
      [
        1008,
        1023,
        70104,
        15,
        7,
        20,
        0
      ],
      [
        1023,
        1063,
        180382,
        40,
        13,
        20,
        0
      ],
      [
        1023,
        1063,
        180382,
        40,
        13,
        22,
        0
      ],
      [
        1063,
        1113,
        30504,
        50,
        7,
        18,
        0
      ],
      [
        1113,
        1203,
        180382,
        90,
        13,
        20,
        0
      ],
      [
        1113,
        1203,
        180382,
        90,
        13,
        22,
        0
      ],
      [
        1203,
        1323,
        500103,
        120,
        3,
        53,
        0
      ],
      [
        1203,
        1323,
        500103,
        120,
        3,
        22,
        0
      ],
      [
        1323,
        1325,
        189999,
        2,
        14,
        18,
        0
      ],
      [
        1325,
        1445,
        120303,
        120,
        1,
        20,
        0
      ],
      [
        1325,
        1445,
        120303,
        120,
        1,
        22,
        0
      ],
      [
        5,
        240,
        10101,
        235,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210706211609,
    WECANTRIL: 10,
    WEGENHTH: 4,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 4,
    WETYPICAL: 2,
    TUDIARYDAY_x: 6,
    TRHOLIDAY_x: 0,
    TEAGE: 46,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 39,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 55,
    TRTFAMILY: 970,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 1,
    TRSPPRES: 1,
    TESCHENR: 2,
    happy_group: 3
  },
  {
    activity: [
      [
        240,
        450,
        10101,
        210,
        -1,
        -1,
        0
      ],
      [
        450,
        460,
        20201,
        10,
        1,
        20,
        0
      ],
      [
        450,
        460,
        20201,
        10,
        1,
        22,
        0
      ],
      [
        450,
        460,
        20201,
        10,
        1,
        22,
        0
      ],
      [
        460,
        480,
        110101,
        20,
        1,
        20,
        0
      ],
      [
        460,
        480,
        110101,
        20,
        1,
        22,
        0
      ],
      [
        460,
        480,
        110101,
        20,
        1,
        22,
        0
      ],
      [
        480,
        570,
        50101,
        90,
        1,
        20,
        0
      ],
      [
        480,
        570,
        50101,
        90,
        1,
        22,
        0
      ],
      [
        480,
        570,
        50101,
        90,
        1,
        22,
        0
      ],
      [
        570,
        610,
        500101,
        40,
        1,
        18,
        0
      ],
      [
        610,
        640,
        10201,
        30,
        -1,
        -1,
        0
      ],
      [
        640,
        680,
        60399,
        40,
        1,
        18,
        0
      ],
      [
        680,
        720,
        110101,
        40,
        1,
        20,
        0
      ],
      [
        680,
        720,
        110101,
        40,
        1,
        22,
        0
      ],
      [
        680,
        720,
        110101,
        40,
        1,
        22,
        0
      ],
      [
        720,
        780,
        120303,
        60,
        1,
        18,
        0
      ],
      [
        780,
        840,
        10101,
        60,
        -1,
        -1,
        0
      ],
      [
        840,
        870,
        120312,
        30,
        1,
        18,
        0
      ],
      [
        870,
        960,
        50101,
        90,
        1,
        18,
        0
      ],
      [
        960,
        970,
        30102,
        10,
        1,
        22,
        0
      ],
      [
        970,
        1e3,
        50101,
        30,
        1,
        18,
        0
      ],
      [
        1e3,
        1020,
        160102,
        20,
        1,
        18,
        0
      ],
      [
        1020,
        1080,
        110101,
        60,
        1,
        26,
        0
      ],
      [
        1020,
        1080,
        110101,
        60,
        1,
        20,
        0
      ],
      [
        1020,
        1080,
        110101,
        60,
        1,
        22,
        0
      ],
      [
        1020,
        1080,
        110101,
        60,
        1,
        22,
        0
      ],
      [
        1080,
        1100,
        20203,
        20,
        1,
        26,
        0
      ],
      [
        1100,
        1120,
        20102,
        20,
        1,
        18,
        0
      ],
      [
        1120,
        1160,
        60399,
        40,
        1,
        18,
        0
      ],
      [
        1160,
        1200,
        10201,
        40,
        -1,
        -1,
        0
      ],
      [
        1200,
        1220,
        30101,
        20,
        1,
        22,
        0
      ],
      [
        1200,
        1220,
        30101,
        20,
        1,
        22,
        0
      ],
      [
        1220,
        1225,
        30101,
        5,
        1,
        22,
        0
      ],
      [
        1225,
        1235,
        50101,
        10,
        1,
        20,
        0
      ],
      [
        1235,
        1320,
        120303,
        85,
        1,
        20,
        0
      ],
      [
        1320,
        1680,
        10101,
        360,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210403211882,
    WECANTRIL: 9,
    WEGENHTH: 1,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 2,
    WETYPICAL: 2,
    TUDIARYDAY_x: 1,
    TRHOLIDAY_x: 0,
    TEAGE: 32,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 44,
    PEHSPNON: 2,
    PTDTRACE: 4,
    TRDTIND1: 40,
    TRDPFTPT_x: 2,
    TRERNWA_x: 107692,
    TRERNHLY: -1,
    TRTALONE: 250,
    TRTFAMILY: 270,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 2,
    TRSPPRES: 1,
    TESCHENR: 2,
    happy_group: 3
  },
  {
    activity: [
      [
        240,
        360,
        10101,
        120,
        -1,
        -1,
        0
      ],
      [
        360,
        420,
        180501,
        60,
        12,
        19,
        0
      ],
      [
        420,
        720,
        50101,
        300,
        2,
        19,
        0
      ],
      [
        720,
        750,
        110101,
        30,
        2,
        19,
        0
      ],
      [
        750,
        1200,
        50101,
        450,
        2,
        19,
        0
      ],
      [
        1200,
        1260,
        180501,
        60,
        12,
        19,
        0
      ],
      [
        1260,
        1290,
        110101,
        30,
        1,
        19,
        0
      ],
      [
        1290,
        1680,
        10101,
        390,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210505211234,
    WECANTRIL: 8,
    WEGENHTH: 3,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 1,
    WETYPICAL: 2,
    TUDIARYDAY_x: 3,
    TRHOLIDAY_x: 0,
    TEAGE: 61,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 33,
    PEHSPNON: 1,
    PTDTRACE: 1,
    TRDTIND1: 4,
    TRDPFTPT_x: 2,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 180,
    TRTFAMILY: 0,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 3,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        420,
        10101,
        180,
        -1,
        -1,
        0
      ],
      [
        420,
        425,
        20201,
        5,
        1,
        22,
        0
      ],
      [
        420,
        425,
        20201,
        5,
        1,
        22,
        0
      ],
      [
        420,
        425,
        20201,
        5,
        1,
        22,
        0
      ],
      [
        425,
        427,
        30186,
        2,
        1,
        22,
        0
      ],
      [
        425,
        427,
        30186,
        2,
        1,
        22,
        0
      ],
      [
        425,
        427,
        30186,
        2,
        1,
        22,
        0
      ],
      [
        427,
        437,
        30101,
        10,
        1,
        22,
        0
      ],
      [
        427,
        437,
        30101,
        10,
        1,
        22,
        0
      ],
      [
        437,
        457,
        10201,
        20,
        -1,
        -1,
        0
      ],
      [
        457,
        462,
        30108,
        5,
        1,
        22,
        0
      ],
      [
        457,
        462,
        30108,
        5,
        1,
        22,
        0
      ],
      [
        457,
        462,
        30108,
        5,
        1,
        22,
        0
      ],
      [
        462,
        464,
        180381,
        2,
        1,
        18,
        0
      ],
      [
        464,
        474,
        20681,
        10,
        1,
        22,
        0
      ],
      [
        474,
        479,
        30101,
        5,
        13,
        20,
        0
      ],
      [
        474,
        479,
        30101,
        5,
        13,
        22,
        0
      ],
      [
        474,
        479,
        30101,
        5,
        13,
        22,
        0
      ],
      [
        474,
        479,
        30101,
        5,
        13,
        22,
        0
      ],
      [
        479,
        494,
        180381,
        15,
        13,
        20,
        0
      ],
      [
        479,
        494,
        180381,
        15,
        13,
        22,
        0
      ],
      [
        479,
        494,
        180381,
        15,
        13,
        22,
        0
      ],
      [
        479,
        494,
        180381,
        15,
        13,
        22,
        0
      ],
      [
        494,
        509,
        30108,
        15,
        11,
        20,
        0
      ],
      [
        494,
        509,
        30108,
        15,
        11,
        22,
        0
      ],
      [
        494,
        509,
        30108,
        15,
        11,
        22,
        0
      ],
      [
        494,
        509,
        30108,
        15,
        11,
        22,
        0
      ],
      [
        509,
        690,
        30110,
        181,
        11,
        20,
        0
      ],
      [
        509,
        690,
        30110,
        181,
        11,
        22,
        0
      ],
      [
        509,
        690,
        30110,
        181,
        11,
        22,
        0
      ],
      [
        509,
        690,
        30110,
        181,
        11,
        22,
        0
      ],
      [
        690,
        710,
        180280,
        20,
        13,
        20,
        0
      ],
      [
        690,
        710,
        180280,
        20,
        13,
        22,
        0
      ],
      [
        690,
        710,
        180280,
        20,
        13,
        22,
        0
      ],
      [
        690,
        710,
        180280,
        20,
        13,
        22,
        0
      ],
      [
        710,
        725,
        20701,
        15,
        3,
        54,
        0
      ],
      [
        710,
        725,
        20701,
        15,
        3,
        20,
        0
      ],
      [
        710,
        725,
        20701,
        15,
        3,
        22,
        0
      ],
      [
        710,
        725,
        20701,
        15,
        3,
        22,
        0
      ],
      [
        710,
        725,
        20701,
        15,
        3,
        22,
        0
      ],
      [
        725,
        745,
        180280,
        20,
        13,
        54,
        0
      ],
      [
        725,
        745,
        180280,
        20,
        13,
        20,
        0
      ],
      [
        725,
        745,
        180280,
        20,
        13,
        22,
        0
      ],
      [
        725,
        745,
        180280,
        20,
        13,
        22,
        0
      ],
      [
        725,
        745,
        180280,
        20,
        13,
        22,
        0
      ],
      [
        745,
        747,
        20902,
        2,
        1,
        18,
        0
      ],
      [
        747,
        757,
        20681,
        10,
        1,
        18,
        0
      ],
      [
        757,
        787,
        20102,
        30,
        1,
        18,
        0
      ],
      [
        787,
        797,
        20203,
        10,
        1,
        18,
        0
      ],
      [
        797,
        887,
        120303,
        90,
        1,
        18,
        0
      ],
      [
        887,
        889,
        20102,
        2,
        1,
        18,
        0
      ],
      [
        889,
        960,
        120303,
        71,
        1,
        18,
        0
      ],
      [
        960,
        970,
        20681,
        10,
        1,
        18,
        0
      ],
      [
        970,
        990,
        20102,
        20,
        1,
        18,
        0
      ],
      [
        990,
        1110,
        120303,
        120,
        1,
        18,
        0
      ],
      [
        1110,
        1170,
        110101,
        60,
        1,
        54,
        0
      ],
      [
        1110,
        1170,
        110101,
        60,
        1,
        20,
        0
      ],
      [
        1110,
        1170,
        110101,
        60,
        1,
        22,
        0
      ],
      [
        1110,
        1170,
        110101,
        60,
        1,
        22,
        0
      ],
      [
        1110,
        1170,
        110101,
        60,
        1,
        22,
        0
      ],
      [
        1170,
        1175,
        500101,
        5,
        1,
        54,
        0
      ],
      [
        1175,
        1205,
        20102,
        30,
        1,
        18,
        0
      ],
      [
        1205,
        1230,
        120303,
        25,
        1,
        18,
        0
      ],
      [
        1230,
        1275,
        30101,
        45,
        1,
        22,
        0
      ],
      [
        1230,
        1275,
        30101,
        45,
        1,
        22,
        0
      ],
      [
        1275,
        1276,
        20201,
        1,
        1,
        22,
        0
      ],
      [
        1275,
        1276,
        20201,
        1,
        1,
        22,
        0
      ],
      [
        1276,
        1380,
        120303,
        104,
        1,
        22,
        0
      ],
      [
        1276,
        1380,
        120303,
        104,
        1,
        22,
        0
      ],
      [
        1380,
        1410,
        10102,
        30,
        -1,
        -1,
        0
      ],
      [
        1410,
        1680,
        10101,
        270,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210605212238,
    WECANTRIL: 8,
    WEGENHTH: 3,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 3,
    WETYPICAL: 2,
    TUDIARYDAY_x: 7,
    TRHOLIDAY_x: 0,
    TEAGE: 45,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 39,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 7,
    TRDPFTPT_x: 1,
    TRERNWA_x: 114e3,
    TRERNHLY: 2400,
    TRTALONE: 422,
    TRTFAMILY: 513,
    TRTFRIEND: 100,
    TRCHILDNUM_x: 3,
    TRSPPRES: 1,
    TESCHENR: 2,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        330,
        10101,
        90,
        -1,
        -1,
        0
      ],
      [
        330,
        350,
        110101,
        20,
        1,
        19,
        0
      ],
      [
        350,
        395,
        10201,
        45,
        -1,
        -1,
        0
      ],
      [
        395,
        425,
        120312,
        30,
        1,
        19,
        0
      ],
      [
        425,
        480,
        120312,
        55,
        1,
        19,
        0
      ],
      [
        480,
        488,
        181501,
        8,
        12,
        19,
        0
      ],
      [
        488,
        540,
        150302,
        52,
        5,
        19,
        0
      ],
      [
        540,
        600,
        140101,
        60,
        5,
        19,
        0
      ],
      [
        600,
        660,
        140105,
        60,
        5,
        19,
        0
      ],
      [
        660,
        662,
        181101,
        2,
        12,
        19,
        0
      ],
      [
        662,
        840,
        110101,
        178,
        4,
        58,
        0
      ],
      [
        840,
        847,
        181101,
        7,
        12,
        19,
        0
      ],
      [
        847,
        1050,
        120303,
        203,
        1,
        19,
        0
      ],
      [
        1050,
        1100,
        20201,
        50,
        1,
        19,
        0
      ],
      [
        1100,
        1320,
        120303,
        220,
        1,
        19,
        0
      ],
      [
        1320,
        1680,
        10101,
        360,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20211010212111,
    WECANTRIL: 10,
    WEGENHTH: 2,
    WEHBP: 2,
    WEPAINMD: 1,
    WEREST: 1,
    WETYPICAL: 2,
    TUDIARYDAY_x: 1,
    TRHOLIDAY_x: 0,
    TEAGE: 71,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 44,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 767,
    TRTFAMILY: 0,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 3,
    TESCHENR: -1,
    happy_group: 3
  },
  {
    activity: [
      [
        240,
        300,
        130134,
        60,
        1,
        18,
        0
      ],
      [
        300,
        330,
        10201,
        30,
        -1,
        -1,
        0
      ],
      [
        330,
        340,
        20201,
        10,
        1,
        18,
        0
      ],
      [
        340,
        385,
        180501,
        45,
        12,
        18,
        0
      ],
      [
        385,
        720,
        50101,
        335,
        2,
        59,
        0
      ],
      [
        385,
        720,
        50101,
        335,
        2,
        60,
        0
      ],
      [
        385,
        720,
        50101,
        335,
        2,
        61,
        0
      ],
      [
        385,
        720,
        50101,
        335,
        2,
        62,
        0
      ],
      [
        720,
        735,
        110101,
        15,
        2,
        61,
        0
      ],
      [
        735,
        750,
        120101,
        15,
        2,
        61,
        0
      ],
      [
        750,
        930,
        50101,
        180,
        2,
        59,
        0
      ],
      [
        750,
        930,
        50101,
        180,
        2,
        60,
        0
      ],
      [
        750,
        930,
        50101,
        180,
        2,
        61,
        0
      ],
      [
        750,
        930,
        50101,
        180,
        2,
        62,
        0
      ],
      [
        930,
        975,
        180501,
        45,
        12,
        18,
        0
      ],
      [
        975,
        1035,
        30105,
        60,
        1,
        22,
        0
      ],
      [
        1035,
        1065,
        20101,
        30,
        1,
        20,
        0
      ],
      [
        1035,
        1065,
        20101,
        30,
        1,
        22,
        0
      ],
      [
        1035,
        1065,
        20101,
        30,
        1,
        22,
        0
      ],
      [
        1035,
        1065,
        20101,
        30,
        1,
        22,
        0
      ],
      [
        1065,
        1095,
        110101,
        30,
        1,
        20,
        0
      ],
      [
        1065,
        1095,
        110101,
        30,
        1,
        22,
        0
      ],
      [
        1065,
        1095,
        110101,
        30,
        1,
        22,
        0
      ],
      [
        1065,
        1095,
        110101,
        30,
        1,
        22,
        0
      ],
      [
        1095,
        1110,
        189999,
        15,
        12,
        18,
        0
      ],
      [
        1110,
        1260,
        500101,
        150,
        11,
        58,
        0
      ],
      [
        1260,
        1275,
        189999,
        15,
        12,
        18,
        0
      ],
      [
        1275,
        1320,
        10201,
        45,
        -1,
        -1,
        0
      ],
      [
        1320,
        1680,
        10101,
        360,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210302211788,
    WECANTRIL: 10,
    WEGENHTH: 1,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 2,
    WETYPICAL: 2,
    TUDIARYDAY_x: 3,
    TRHOLIDAY_x: 0,
    TEAGE: 34,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 39,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 22,
    TRDPFTPT_x: 1,
    TRERNWA_x: 170400,
    TRERNHLY: 3575,
    TRTALONE: 190,
    TRTFAMILY: 120,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 3,
    TRSPPRES: 1,
    TESCHENR: 2,
    happy_group: 3
  },
  {
    activity: [
      [
        240,
        360,
        10101,
        120,
        -1,
        -1,
        0
      ],
      [
        360,
        367,
        181301,
        7,
        12,
        30,
        0
      ],
      [
        367,
        397,
        130133,
        30,
        31,
        30,
        0
      ],
      [
        397,
        427,
        130134,
        30,
        31,
        30,
        0
      ],
      [
        427,
        434,
        181301,
        7,
        12,
        30,
        0
      ],
      [
        434,
        479,
        10201,
        45,
        -1,
        -1,
        0
      ],
      [
        479,
        516,
        180501,
        37,
        12,
        18,
        0
      ],
      [
        516,
        540,
        50101,
        24,
        2,
        18,
        0
      ],
      [
        540,
        1080,
        50101,
        540,
        2,
        61,
        0
      ],
      [
        1080,
        1120,
        180782,
        40,
        12,
        18,
        0
      ],
      [
        1120,
        1160,
        70103,
        40,
        4,
        18,
        0
      ],
      [
        1160,
        1170,
        180782,
        10,
        12,
        18,
        0
      ],
      [
        1170,
        1190,
        110101,
        20,
        1,
        18,
        0
      ],
      [
        1190,
        1260,
        120303,
        70,
        1,
        18,
        0
      ],
      [
        1260,
        1280,
        10201,
        20,
        -1,
        -1,
        0
      ],
      [
        1280,
        1680,
        10101,
        400,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210403210370,
    WECANTRIL: 8,
    WEGENHTH: 2,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 1,
    WETYPICAL: 2,
    TUDIARYDAY_x: 4,
    TRHOLIDAY_x: 0,
    TEAGE: 24,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 40,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 22,
    TRDPFTPT_x: 1,
    TRERNWA_x: 76153,
    TRERNHLY: -1,
    TRTALONE: 217,
    TRTFAMILY: 0,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 3,
    TESCHENR: 1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        540,
        500101,
        300,
        1,
        18,
        0
      ],
      [
        540,
        1020,
        120101,
        480,
        3,
        22,
        0
      ],
      [
        1020,
        1030,
        181201,
        10,
        12,
        22,
        0
      ],
      [
        1030,
        1060,
        110101,
        30,
        1,
        22,
        0
      ],
      [
        1060,
        1260,
        120303,
        200,
        1,
        22,
        0
      ],
      [
        1260,
        1680,
        10101,
        420,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210404210771,
    WECANTRIL: 9,
    WEGENHTH: 2,
    WEHBP: 2,
    WEPAINMD: 1,
    WEREST: 2,
    WETYPICAL: 2,
    TUDIARYDAY_x: 1,
    TRHOLIDAY_x: 0,
    TEAGE: 56,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 39,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 32,
    TRDPFTPT_x: 1,
    TRERNWA_x: 103375,
    TRERNHLY: 2250,
    TRTALONE: 300,
    TRTFAMILY: 720,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 1,
    TESCHENR: -1,
    happy_group: 3
  },
  {
    activity: [
      [
        240,
        480,
        10101,
        240,
        -1,
        -1,
        0
      ],
      [
        480,
        720,
        20101,
        240,
        1,
        20,
        0
      ],
      [
        720,
        750,
        180701,
        30,
        12,
        20,
        0
      ],
      [
        750,
        780,
        70101,
        30,
        6,
        20,
        0
      ],
      [
        780,
        795,
        180701,
        15,
        12,
        20,
        0
      ],
      [
        795,
        825,
        70101,
        30,
        6,
        20,
        0
      ],
      [
        825,
        840,
        180701,
        15,
        12,
        20,
        0
      ],
      [
        840,
        845,
        70101,
        5,
        6,
        20,
        0
      ],
      [
        845,
        850,
        180701,
        5,
        12,
        20,
        0
      ],
      [
        850,
        865,
        20902,
        15,
        1,
        18,
        0
      ],
      [
        865,
        885,
        20104,
        20,
        1,
        18,
        0
      ],
      [
        885,
        905,
        20201,
        20,
        1,
        22,
        0
      ],
      [
        885,
        905,
        20201,
        20,
        1,
        22,
        0
      ],
      [
        885,
        905,
        20201,
        20,
        1,
        22,
        0
      ],
      [
        885,
        905,
        20201,
        20,
        1,
        22,
        0
      ],
      [
        905,
        907,
        20202,
        2,
        1,
        22,
        0
      ],
      [
        905,
        907,
        20202,
        2,
        1,
        22,
        0
      ],
      [
        905,
        907,
        20202,
        2,
        1,
        22,
        0
      ],
      [
        905,
        907,
        20202,
        2,
        1,
        22,
        0
      ],
      [
        907,
        1087,
        20101,
        180,
        1,
        20,
        0
      ],
      [
        1087,
        1207,
        20201,
        120,
        1,
        20,
        0
      ],
      [
        1207,
        1217,
        20202,
        10,
        1,
        20,
        0
      ],
      [
        1207,
        1217,
        20202,
        10,
        1,
        22,
        0
      ],
      [
        1207,
        1217,
        20202,
        10,
        1,
        22,
        0
      ],
      [
        1207,
        1217,
        20202,
        10,
        1,
        22,
        0
      ],
      [
        1207,
        1217,
        20202,
        10,
        1,
        22,
        0
      ],
      [
        1217,
        1320,
        120303,
        103,
        1,
        20,
        0
      ],
      [
        1320,
        1680,
        10101,
        360,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210503211495,
    WECANTRIL: 6,
    WEGENHTH: 4,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 2,
    WETYPICAL: 2,
    TUDIARYDAY_x: 7,
    TRHOLIDAY_x: 0,
    TEAGE: 37,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 39,
    PEHSPNON: 2,
    PTDTRACE: 2,
    TRDTIND1: 36,
    TRDPFTPT_x: 1,
    TRERNWA_x: 75e3,
    TRERNHLY: -1,
    TRTALONE: 35,
    TRTFAMILY: 805,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 3,
    TRSPPRES: 1,
    TESCHENR: 2,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        300,
        10101,
        60,
        -1,
        -1,
        0
      ],
      [
        300,
        302,
        20201,
        2,
        1,
        19,
        0
      ],
      [
        302,
        510,
        120303,
        208,
        1,
        19,
        0
      ],
      [
        510,
        513,
        10301,
        3,
        1,
        19,
        0
      ],
      [
        513,
        515,
        110101,
        2,
        1,
        19,
        0
      ],
      [
        515,
        720,
        120303,
        205,
        1,
        19,
        0
      ],
      [
        720,
        780,
        10201,
        60,
        -1,
        -1,
        0
      ],
      [
        780,
        840,
        120308,
        60,
        1,
        19,
        0
      ],
      [
        840,
        960,
        120101,
        120,
        1,
        53,
        0
      ],
      [
        960,
        990,
        110101,
        30,
        1,
        19,
        0
      ],
      [
        990,
        1290,
        120303,
        300,
        1,
        19,
        0
      ],
      [
        1290,
        1320,
        120303,
        30,
        1,
        19,
        0
      ],
      [
        1320,
        1680,
        10101,
        360,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210404212337,
    WECANTRIL: 5,
    WEGENHTH: 4,
    WEHBP: 1,
    WEPAINMD: 2,
    WEREST: 1,
    WETYPICAL: 1,
    TUDIARYDAY_x: 1,
    TRHOLIDAY_x: 0,
    TEAGE: 77,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 41,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 48,
    TRDPFTPT_x: 2,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 840,
    TRTFAMILY: 120,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 3,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        690,
        10101,
        450,
        -1,
        -1,
        0
      ],
      [
        690,
        710,
        10201,
        20,
        -1,
        -1,
        0
      ],
      [
        710,
        720,
        110101,
        10,
        1,
        19,
        0
      ],
      [
        720,
        722,
        10301,
        2,
        1,
        19,
        0
      ],
      [
        722,
        752,
        130131,
        30,
        9,
        19,
        0
      ],
      [
        752,
        812,
        120301,
        60,
        1,
        19,
        0
      ],
      [
        812,
        990,
        120303,
        178,
        1,
        19,
        0
      ],
      [
        990,
        1020,
        10101,
        30,
        -1,
        -1,
        0
      ],
      [
        1020,
        1140,
        120301,
        120,
        1,
        19,
        0
      ],
      [
        1140,
        1142,
        10301,
        2,
        1,
        19,
        0
      ],
      [
        1142,
        1172,
        10201,
        30,
        -1,
        -1,
        0
      ],
      [
        1172,
        1680,
        10101,
        508,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210605211842,
    WECANTRIL: 8,
    WEGENHTH: 4,
    WEHBP: 1,
    WEPAINMD: 1,
    WEREST: 2,
    WETYPICAL: 2,
    TUDIARYDAY_x: 7,
    TRHOLIDAY_x: 0,
    TEAGE: 46,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 37,
    PEHSPNON: 2,
    PTDTRACE: 2,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 402,
    TRTFAMILY: 0,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 3,
    TESCHENR: 2,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        540,
        10101,
        300,
        -1,
        -1,
        0
      ],
      [
        540,
        555,
        20201,
        15,
        1,
        19,
        0
      ],
      [
        555,
        750,
        120313,
        195,
        1,
        19,
        0
      ],
      [
        750,
        840,
        20401,
        90,
        1,
        19,
        0
      ],
      [
        840,
        850,
        20201,
        10,
        1,
        19,
        0
      ],
      [
        850,
        865,
        110101,
        15,
        1,
        19,
        0
      ],
      [
        865,
        1050,
        20402,
        185,
        1,
        19,
        0
      ],
      [
        1050,
        1065,
        20402,
        15,
        1,
        19,
        0
      ],
      [
        1065,
        1080,
        20201,
        15,
        1,
        19,
        0
      ],
      [
        1080,
        1110,
        110101,
        30,
        1,
        19,
        0
      ],
      [
        1110,
        1155,
        130131,
        45,
        9,
        19,
        0
      ],
      [
        1155,
        1185,
        130134,
        30,
        1,
        19,
        0
      ],
      [
        1185,
        1260,
        120312,
        75,
        1,
        19,
        0
      ],
      [
        1260,
        1275,
        110101,
        15,
        1,
        19,
        0
      ],
      [
        1275,
        1350,
        120312,
        75,
        1,
        19,
        0
      ],
      [
        1350,
        1380,
        10201,
        30,
        -1,
        -1,
        0
      ],
      [
        1380,
        1680,
        10101,
        300,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210908210920,
    WECANTRIL: 5,
    WEGENHTH: 3,
    WEHBP: 1,
    WEPAINMD: 1,
    WEREST: 3,
    WETYPICAL: 2,
    TUDIARYDAY_x: 1,
    TRHOLIDAY_x: 0,
    TEAGE: 79,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 43,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 810,
    TRTFAMILY: 0,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 3,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        300,
        10101,
        60,
        -1,
        -1,
        0
      ],
      [
        300,
        345,
        10201,
        45,
        -1,
        -1,
        0
      ],
      [
        345,
        346,
        20201,
        1,
        1,
        18,
        0
      ],
      [
        346,
        386,
        180501,
        40,
        12,
        18,
        0
      ],
      [
        386,
        506,
        50101,
        120,
        2,
        59,
        0
      ],
      [
        386,
        506,
        50101,
        120,
        2,
        60,
        0
      ],
      [
        386,
        506,
        50101,
        120,
        2,
        61,
        0
      ],
      [
        386,
        506,
        50101,
        120,
        2,
        62,
        0
      ],
      [
        506,
        511,
        20904,
        5,
        2,
        18,
        0
      ],
      [
        511,
        513,
        20201,
        2,
        2,
        18,
        0
      ],
      [
        513,
        633,
        50101,
        120,
        2,
        59,
        0
      ],
      [
        513,
        633,
        50101,
        120,
        2,
        60,
        0
      ],
      [
        513,
        633,
        50101,
        120,
        2,
        61,
        0
      ],
      [
        513,
        633,
        50101,
        120,
        2,
        62,
        0
      ],
      [
        633,
        653,
        110101,
        20,
        2,
        18,
        0
      ],
      [
        653,
        675,
        50101,
        22,
        2,
        59,
        0
      ],
      [
        653,
        675,
        50101,
        22,
        2,
        60,
        0
      ],
      [
        653,
        675,
        50101,
        22,
        2,
        61,
        0
      ],
      [
        653,
        675,
        50101,
        22,
        2,
        62,
        0
      ],
      [
        675,
        720,
        180381,
        45,
        12,
        18,
        0
      ],
      [
        720,
        725,
        30112,
        5,
        8,
        22,
        0
      ],
      [
        725,
        735,
        180782,
        10,
        12,
        22,
        0
      ],
      [
        735,
        750,
        70103,
        15,
        4,
        22,
        0
      ],
      [
        750,
        770,
        180782,
        20,
        12,
        22,
        0
      ],
      [
        770,
        960,
        50101,
        190,
        1,
        18,
        0
      ],
      [
        960,
        975,
        500101,
        15,
        1,
        18,
        0
      ],
      [
        975,
        990,
        20904,
        15,
        1,
        18,
        0
      ],
      [
        990,
        1035,
        120101,
        45,
        1,
        20,
        0
      ],
      [
        1035,
        1055,
        180805,
        20,
        13,
        20,
        0
      ],
      [
        1055,
        1065,
        80502,
        10,
        11,
        18,
        0
      ],
      [
        1065,
        1080,
        80501,
        15,
        11,
        58,
        0
      ],
      [
        1080,
        1085,
        180782,
        5,
        14,
        18,
        0
      ],
      [
        1085,
        1130,
        70104,
        45,
        7,
        20,
        0
      ],
      [
        1130,
        1132,
        181101,
        2,
        13,
        20,
        0
      ],
      [
        1132,
        1177,
        110101,
        45,
        4,
        20,
        0
      ],
      [
        1177,
        1192,
        181101,
        15,
        13,
        20,
        0
      ],
      [
        1192,
        1237,
        30186,
        45,
        1,
        20,
        0
      ],
      [
        1192,
        1237,
        30186,
        45,
        1,
        22,
        0
      ],
      [
        1192,
        1237,
        30186,
        45,
        1,
        22,
        0
      ],
      [
        1237,
        1252,
        10201,
        15,
        -1,
        -1,
        0
      ],
      [
        1252,
        1680,
        10101,
        428,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210302212341,
    WECANTRIL: 5,
    WEGENHTH: 4,
    WEHBP: 2,
    WEPAINMD: 1,
    WEREST: 4,
    WETYPICAL: 2,
    TUDIARYDAY_x: 5,
    TRHOLIDAY_x: 0,
    TEAGE: 48,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 43,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 14,
    TRDPFTPT_x: 1,
    TRERNWA_x: 115384,
    TRERNHLY: -1,
    TRTALONE: 158,
    TRTFAMILY: 267,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 2,
    TRSPPRES: 1,
    TESCHENR: 2,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        600,
        10101,
        360,
        -1,
        -1,
        0
      ],
      [
        600,
        605,
        20201,
        5,
        1,
        19,
        0
      ],
      [
        605,
        720,
        120303,
        115,
        1,
        19,
        0
      ],
      [
        720,
        730,
        110101,
        10,
        1,
        19,
        0
      ],
      [
        730,
        1200,
        120303,
        470,
        1,
        19,
        0
      ],
      [
        1200,
        1680,
        10101,
        480,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210302211687,
    WECANTRIL: 5,
    WEGENHTH: 4,
    WEHBP: 1,
    WEPAINMD: 2,
    WEREST: 4,
    WETYPICAL: 3,
    TUDIARYDAY_x: 2,
    TRHOLIDAY_x: 0,
    TEAGE: 67,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 41,
    PEHSPNON: 1,
    PTDTRACE: 1,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 600,
    TRTFAMILY: 0,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 3,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        420,
        10101,
        180,
        -1,
        -1,
        0
      ],
      [
        420,
        425,
        20681,
        5,
        1,
        19,
        0
      ],
      [
        425,
        426,
        10301,
        1,
        1,
        19,
        0
      ],
      [
        426,
        429,
        20201,
        3,
        1,
        19,
        0
      ],
      [
        429,
        434,
        10201,
        5,
        -1,
        -1,
        0
      ],
      [
        434,
        435,
        20681,
        1,
        1,
        19,
        0
      ],
      [
        435,
        445,
        20101,
        10,
        1,
        19,
        0
      ],
      [
        445,
        450,
        20102,
        5,
        1,
        19,
        0
      ],
      [
        450,
        495,
        120301,
        45,
        1,
        19,
        0
      ],
      [
        495,
        675,
        20501,
        180,
        1,
        19,
        0
      ],
      [
        675,
        720,
        10201,
        45,
        -1,
        -1,
        0
      ],
      [
        720,
        750,
        20301,
        30,
        1,
        19,
        0
      ],
      [
        750,
        780,
        90201,
        30,
        1,
        58,
        0
      ],
      [
        780,
        800,
        180782,
        20,
        12,
        19,
        0
      ],
      [
        800,
        810,
        70103,
        10,
        4,
        19,
        0
      ],
      [
        810,
        820,
        180782,
        10,
        12,
        19,
        0
      ],
      [
        820,
        850,
        70104,
        30,
        11,
        19,
        0
      ],
      [
        850,
        860,
        180701,
        10,
        12,
        19,
        0
      ],
      [
        860,
        890,
        70101,
        30,
        6,
        19,
        0
      ],
      [
        890,
        905,
        180280,
        15,
        12,
        19,
        0
      ],
      [
        905,
        920,
        20701,
        15,
        11,
        19,
        0
      ],
      [
        920,
        922,
        180782,
        2,
        12,
        19,
        0
      ],
      [
        922,
        937,
        70104,
        15,
        11,
        19,
        0
      ],
      [
        937,
        952,
        180782,
        15,
        12,
        19,
        0
      ],
      [
        952,
        1042,
        120301,
        90,
        1,
        19,
        0
      ],
      [
        1042,
        1087,
        160102,
        45,
        1,
        19,
        0
      ],
      [
        1087,
        1127,
        10201,
        40,
        -1,
        -1,
        0
      ],
      [
        1127,
        1187,
        120303,
        60,
        1,
        19,
        0
      ],
      [
        1187,
        1202,
        110101,
        15,
        1,
        19,
        0
      ],
      [
        1202,
        1205,
        20681,
        3,
        1,
        19,
        0
      ],
      [
        1205,
        1207,
        20201,
        2,
        1,
        19,
        0
      ],
      [
        1207,
        1209,
        20681,
        2,
        1,
        19,
        0
      ],
      [
        1209,
        1320,
        120308,
        111,
        1,
        19,
        0
      ],
      [
        1320,
        1470,
        10101,
        150,
        -1,
        -1,
        0
      ],
      [
        30,
        33,
        10201,
        3,
        -1,
        -1,
        0
      ],
      [
        33,
        210,
        10101,
        177,
        -1,
        -1,
        0
      ],
      [
        210,
        212,
        20681,
        2,
        1,
        19,
        0
      ],
      [
        212,
        215,
        20201,
        3,
        1,
        19,
        0
      ],
      [
        215,
        240,
        10101,
        25,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210302211100,
    WECANTRIL: 8,
    WEGENHTH: 3,
    WEHBP: 2,
    WEPAINMD: 1,
    WEREST: 1,
    WETYPICAL: 2,
    TUDIARYDAY_x: 4,
    TRHOLIDAY_x: 0,
    TEAGE: 48,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 42,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 41,
    TRDPFTPT_x: 1,
    TRERNWA_x: 161250,
    TRERNHLY: 3750,
    TRTALONE: 785,
    TRTFAMILY: 0,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 3,
    TESCHENR: 2,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        540,
        10101,
        300,
        -1,
        -1,
        0
      ],
      [
        540,
        660,
        10201,
        120,
        -1,
        -1,
        0
      ],
      [
        660,
        663,
        181401,
        3,
        13,
        53,
        0
      ],
      [
        663,
        723,
        140101,
        60,
        5,
        53,
        0
      ],
      [
        723,
        728,
        181101,
        5,
        13,
        53,
        0
      ],
      [
        728,
        758,
        110101,
        30,
        3,
        52,
        0
      ],
      [
        728,
        758,
        110101,
        30,
        3,
        53,
        0
      ],
      [
        758,
        908,
        120101,
        150,
        3,
        52,
        0
      ],
      [
        758,
        908,
        120101,
        150,
        3,
        53,
        0
      ],
      [
        908,
        913,
        181201,
        5,
        13,
        53,
        0
      ],
      [
        913,
        1200,
        120312,
        287,
        1,
        19,
        0
      ],
      [
        1200,
        1210,
        10201,
        10,
        -1,
        -1,
        0
      ],
      [
        1210,
        1270,
        10102,
        60,
        -1,
        -1,
        0
      ],
      [
        1270,
        1560,
        10101,
        290,
        -1,
        -1,
        0
      ],
      [
        120,
        130,
        10102,
        10,
        -1,
        -1,
        0
      ],
      [
        130,
        240,
        10101,
        110,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210504212179,
    WECANTRIL: 9,
    WEGENHTH: 3,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 2,
    WETYPICAL: 2,
    TUDIARYDAY_x: 1,
    TRHOLIDAY_x: 0,
    TEAGE: 85,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 39,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 287,
    TRTFAMILY: 253,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 3,
    TESCHENR: -1,
    happy_group: 3
  },
  {
    activity: [
      [
        240,
        405,
        10101,
        165,
        -1,
        -1,
        0
      ],
      [
        405,
        465,
        10201,
        60,
        -1,
        -1,
        0
      ],
      [
        465,
        480,
        181301,
        15,
        12,
        19,
        0
      ],
      [
        480,
        525,
        130134,
        45,
        31,
        56,
        0
      ],
      [
        525,
        530,
        180701,
        5,
        1,
        19,
        0
      ],
      [
        530,
        550,
        70101,
        20,
        6,
        19,
        0
      ],
      [
        550,
        560,
        180802,
        10,
        12,
        19,
        0
      ],
      [
        560,
        585,
        80202,
        25,
        11,
        19,
        0
      ],
      [
        585,
        600,
        180802,
        15,
        12,
        19,
        0
      ],
      [
        600,
        610,
        10201,
        10,
        -1,
        -1,
        0
      ],
      [
        610,
        630,
        20201,
        20,
        1,
        19,
        0
      ],
      [
        630,
        660,
        110101,
        30,
        1,
        19,
        0
      ],
      [
        660,
        690,
        20203,
        30,
        1,
        19,
        0
      ],
      [
        690,
        720,
        20401,
        30,
        1,
        19,
        0
      ],
      [
        720,
        885,
        120303,
        165,
        1,
        19,
        0
      ],
      [
        885,
        895,
        189999,
        10,
        12,
        19,
        0
      ],
      [
        895,
        905,
        500101,
        10,
        32,
        19,
        0
      ],
      [
        905,
        915,
        181301,
        10,
        12,
        19,
        0
      ],
      [
        915,
        960,
        130131,
        45,
        11,
        19,
        0
      ],
      [
        960,
        975,
        180782,
        15,
        12,
        19,
        0
      ],
      [
        975,
        995,
        70103,
        20,
        4,
        19,
        0
      ],
      [
        995,
        1010,
        180782,
        15,
        1,
        19,
        0
      ],
      [
        1010,
        1025,
        10201,
        15,
        -1,
        -1,
        0
      ],
      [
        1025,
        1070,
        110101,
        45,
        1,
        19,
        0
      ],
      [
        1070,
        1115,
        120301,
        45,
        1,
        19,
        0
      ],
      [
        1115,
        1140,
        120303,
        25,
        1,
        19,
        0
      ],
      [
        1140,
        1170,
        20901,
        30,
        1,
        19,
        0
      ],
      [
        1170,
        1320,
        120307,
        150,
        1,
        19,
        0
      ],
      [
        1320,
        1470,
        120303,
        150,
        1,
        19,
        0
      ],
      [
        30,
        50,
        10201,
        20,
        -1,
        -1,
        0
      ],
      [
        50,
        240,
        10101,
        190,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210302210579,
    WECANTRIL: 8,
    WEGENHTH: 2,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 1,
    WETYPICAL: 2,
    TUDIARYDAY_x: 2,
    TRHOLIDAY_x: 0,
    TEAGE: 69,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 43,
    PEHSPNON: 2,
    PTDTRACE: 2,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 935,
    TRTFAMILY: 0,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 3,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        330,
        10101,
        90,
        -1,
        -1,
        0
      ],
      [
        330,
        338,
        20201,
        8,
        1,
        19,
        0
      ],
      [
        338,
        340,
        20681,
        2,
        1,
        19,
        0
      ],
      [
        340,
        342,
        10201,
        2,
        -1,
        -1,
        0
      ],
      [
        342,
        347,
        180501,
        5,
        12,
        19,
        0
      ],
      [
        347,
        647,
        50101,
        300,
        2,
        19,
        0
      ],
      [
        647,
        652,
        181301,
        5,
        12,
        19,
        0
      ],
      [
        652,
        682,
        130133,
        30,
        31,
        62,
        0
      ],
      [
        682,
        687,
        181301,
        5,
        12,
        19,
        0
      ],
      [
        687,
        692,
        20201,
        5,
        1,
        19,
        0
      ],
      [
        692,
        702,
        110101,
        10,
        1,
        19,
        0
      ],
      [
        702,
        717,
        10201,
        15,
        -1,
        -1,
        0
      ],
      [
        717,
        722,
        180501,
        5,
        12,
        19,
        0
      ],
      [
        722,
        1020,
        50101,
        298,
        2,
        62,
        0
      ],
      [
        1020,
        1025,
        180501,
        5,
        12,
        19,
        0
      ],
      [
        1025,
        1027,
        20681,
        2,
        1,
        19,
        0
      ],
      [
        1027,
        1147,
        120303,
        120,
        1,
        19,
        0
      ],
      [
        1147,
        1149,
        181201,
        2,
        12,
        19,
        0
      ],
      [
        1149,
        1209,
        120101,
        60,
        5,
        54,
        0
      ],
      [
        1209,
        1211,
        181201,
        2,
        12,
        19,
        0
      ],
      [
        1211,
        1226,
        110101,
        15,
        1,
        19,
        0
      ],
      [
        1226,
        1680,
        10101,
        454,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210403212263,
    WECANTRIL: 5,
    WEGENHTH: 1,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 3,
    WETYPICAL: 2,
    TUDIARYDAY_x: 5,
    TRHOLIDAY_x: 0,
    TEAGE: 58,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 43,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 32,
    TRDPFTPT_x: 1,
    TRERNWA_x: 196153,
    TRERNHLY: -1,
    TRTALONE: 191,
    TRTFAMILY: 0,
    TRTFRIEND: 60,
    TRCHILDNUM_x: 0,
    TRSPPRES: 3,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        510,
        10101,
        270,
        -1,
        -1,
        0
      ],
      [
        510,
        540,
        110101,
        30,
        1,
        19,
        0
      ],
      [
        540,
        780,
        50101,
        240,
        1,
        19,
        0
      ],
      [
        780,
        810,
        110101,
        30,
        1,
        19,
        0
      ],
      [
        810,
        960,
        50101,
        150,
        1,
        19,
        0
      ],
      [
        960,
        1020,
        130133,
        60,
        1,
        19,
        0
      ],
      [
        1020,
        1080,
        120312,
        60,
        1,
        19,
        0
      ],
      [
        1080,
        1110,
        10201,
        30,
        -1,
        -1,
        0
      ],
      [
        1110,
        1130,
        120308,
        20,
        1,
        19,
        0
      ],
      [
        1130,
        1145,
        181201,
        15,
        14,
        19,
        0
      ],
      [
        1145,
        1295,
        120101,
        150,
        4,
        54,
        0
      ],
      [
        1295,
        1335,
        110101,
        40,
        4,
        54,
        0
      ],
      [
        1335,
        1350,
        181101,
        15,
        14,
        19,
        0
      ],
      [
        1350,
        1378,
        160101,
        28,
        1,
        19,
        0
      ],
      [
        1378,
        1470,
        120312,
        92,
        1,
        19,
        0
      ],
      [
        30,
        240,
        10101,
        210,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20211211210887,
    WECANTRIL: 6,
    WEGENHTH: 3,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 2,
    WETYPICAL: 2,
    TUDIARYDAY_x: 6,
    TRHOLIDAY_x: 0,
    TEAGE: 30,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 45,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 36,
    TRDPFTPT_x: 1,
    TRERNWA_x: 190384,
    TRERNHLY: -1,
    TRTALONE: 350,
    TRTFAMILY: 0,
    TRTFRIEND: 190,
    TRCHILDNUM_x: 0,
    TRSPPRES: 3,
    TESCHENR: 2,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        480,
        10101,
        240,
        -1,
        -1,
        0
      ],
      [
        480,
        520,
        10201,
        40,
        -1,
        -1,
        0
      ],
      [
        520,
        540,
        110101,
        20,
        5,
        61,
        0
      ],
      [
        540,
        780,
        50102,
        240,
        5,
        61,
        0
      ],
      [
        780,
        790,
        180501,
        10,
        12,
        18,
        0
      ],
      [
        790,
        910,
        10101,
        120,
        -1,
        -1,
        0
      ],
      [
        910,
        930,
        110101,
        20,
        1,
        20,
        0
      ],
      [
        930,
        950,
        10201,
        20,
        -1,
        -1,
        0
      ],
      [
        950,
        960,
        180501,
        10,
        12,
        18,
        0
      ],
      [
        960,
        1680,
        50101,
        720,
        2,
        60,
        0
      ],
      [
        960,
        1680,
        50101,
        720,
        2,
        61,
        0
      ],
      [
        960,
        1680,
        50101,
        720,
        2,
        62,
        0
      ]
    ],
    TUCASEID: 20210403210909,
    WECANTRIL: 10,
    WEGENHTH: 1,
    WEHBP: 1,
    WEPAINMD: 2,
    WEREST: 2,
    WETYPICAL: 2,
    TUDIARYDAY_x: 1,
    TRHOLIDAY_x: 0,
    TEAGE: 64,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 44,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 51,
    TRDPFTPT_x: 1,
    TRERNWA_x: 153846,
    TRERNHLY: 4600,
    TRTALONE: 20,
    TRTFAMILY: 20,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 1,
    TESCHENR: -1,
    happy_group: 3
  },
  {
    activity: [
      [
        240,
        450,
        10101,
        210,
        -1,
        -1,
        0
      ],
      [
        450,
        455,
        10201,
        5,
        -1,
        -1,
        0
      ],
      [
        455,
        480,
        120312,
        25,
        5,
        18,
        0
      ],
      [
        480,
        495,
        140102,
        15,
        5,
        18,
        0
      ],
      [
        495,
        540,
        10201,
        45,
        -1,
        -1,
        0
      ],
      [
        540,
        795,
        50101,
        255,
        5,
        59,
        0
      ],
      [
        540,
        795,
        50101,
        255,
        5,
        61,
        0
      ],
      [
        540,
        795,
        50101,
        255,
        5,
        62,
        0
      ],
      [
        795,
        810,
        181101,
        15,
        13,
        51,
        0
      ],
      [
        810,
        840,
        110101,
        30,
        4,
        51,
        0
      ],
      [
        810,
        840,
        110101,
        30,
        4,
        54,
        0
      ],
      [
        840,
        915,
        120101,
        75,
        4,
        51,
        0
      ],
      [
        840,
        915,
        120101,
        75,
        4,
        54,
        0
      ],
      [
        915,
        930,
        180501,
        15,
        13,
        51,
        0
      ],
      [
        930,
        1095,
        50101,
        165,
        5,
        61,
        0
      ],
      [
        930,
        1095,
        50101,
        165,
        5,
        62,
        0
      ],
      [
        1095,
        1110,
        181101,
        15,
        13,
        51,
        0
      ],
      [
        1110,
        1245,
        110101,
        135,
        4,
        51,
        0
      ],
      [
        1110,
        1245,
        110101,
        135,
        4,
        54,
        0
      ],
      [
        1245,
        1260,
        181201,
        15,
        13,
        51,
        0
      ],
      [
        1260,
        1261,
        120101,
        1,
        5,
        51,
        0
      ],
      [
        1261,
        1276,
        10201,
        15,
        -1,
        -1,
        0
      ],
      [
        1276,
        1286,
        140102,
        10,
        5,
        18,
        0
      ],
      [
        1286,
        1320,
        120312,
        34,
        5,
        18,
        0
      ],
      [
        1320,
        1365,
        50101,
        45,
        5,
        18,
        0
      ],
      [
        1365,
        1680,
        10101,
        315,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210707210176,
    WECANTRIL: 8,
    WEGENHTH: 4,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 1,
    WETYPICAL: 1,
    TUDIARYDAY_x: 7,
    TRHOLIDAY_x: 0,
    TEAGE: 24,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 44,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 49,
    TRDPFTPT_x: 2,
    TRERNWA_x: 8653,
    TRERNHLY: -1,
    TRTALONE: 84,
    TRTFAMILY: 301,
    TRTFRIEND: 240,
    TRCHILDNUM_x: 1,
    TRSPPRES: 3,
    TESCHENR: 1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        480,
        10101,
        240,
        -1,
        -1,
        0
      ],
      [
        480,
        510,
        10201,
        30,
        -1,
        -1,
        0
      ],
      [
        510,
        535,
        20681,
        25,
        9,
        18,
        0
      ],
      [
        535,
        595,
        120312,
        60,
        1,
        20,
        0
      ],
      [
        595,
        660,
        500106,
        65,
        -1,
        -1,
        0
      ],
      [
        660,
        690,
        181101,
        30,
        12,
        20,
        0
      ],
      [
        690,
        780,
        110101,
        90,
        11,
        58,
        0
      ],
      [
        690,
        780,
        110101,
        90,
        11,
        20,
        0
      ],
      [
        780,
        930,
        120401,
        150,
        11,
        58,
        0
      ],
      [
        780,
        930,
        120401,
        150,
        11,
        20,
        0
      ],
      [
        930,
        960,
        180482,
        30,
        12,
        58,
        0
      ],
      [
        930,
        960,
        180482,
        30,
        12,
        20,
        0
      ],
      [
        960,
        962,
        40507,
        2,
        3,
        58,
        0
      ],
      [
        960,
        962,
        40507,
        2,
        3,
        20,
        0
      ],
      [
        962,
        965,
        180482,
        3,
        12,
        20,
        0
      ],
      [
        965,
        995,
        20681,
        30,
        9,
        18,
        0
      ],
      [
        995,
        1110,
        120303,
        115,
        1,
        20,
        0
      ],
      [
        1110,
        1140,
        110101,
        30,
        1,
        20,
        0
      ],
      [
        1140,
        1155,
        20203,
        15,
        1,
        20,
        0
      ],
      [
        1155,
        1260,
        120303,
        105,
        1,
        20,
        0
      ],
      [
        1260,
        1680,
        10101,
        420,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210302211160,
    WECANTRIL: 8,
    WEGENHTH: 3,
    WEHBP: 1,
    WEPAINMD: 2,
    WEREST: 2,
    WETYPICAL: 1,
    TUDIARYDAY_x: 1,
    TRHOLIDAY_x: 0,
    TEAGE: 80,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 40,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 55,
    TRTFAMILY: 630,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 1,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        300,
        10101,
        60,
        -1,
        -1,
        0
      ],
      [
        300,
        350,
        10201,
        50,
        -1,
        -1,
        0
      ],
      [
        350,
        360,
        180501,
        10,
        12,
        19,
        0
      ],
      [
        360,
        600,
        50101,
        240,
        2,
        59,
        0
      ],
      [
        360,
        600,
        50101,
        240,
        2,
        61,
        0
      ],
      [
        360,
        600,
        50101,
        240,
        2,
        62,
        0
      ],
      [
        600,
        630,
        110101,
        30,
        2,
        61,
        0
      ],
      [
        630,
        750,
        50101,
        120,
        2,
        59,
        0
      ],
      [
        630,
        750,
        50101,
        120,
        2,
        61,
        0
      ],
      [
        630,
        750,
        50101,
        120,
        2,
        62,
        0
      ],
      [
        750,
        765,
        180782,
        15,
        12,
        19,
        0
      ],
      [
        765,
        780,
        70104,
        15,
        7,
        19,
        0
      ],
      [
        780,
        785,
        180782,
        5,
        12,
        19,
        0
      ],
      [
        785,
        805,
        20681,
        20,
        1,
        56,
        0
      ],
      [
        805,
        865,
        10301,
        60,
        1,
        19,
        0
      ],
      [
        865,
        895,
        110101,
        30,
        1,
        19,
        0
      ],
      [
        895,
        1320,
        120303,
        425,
        1,
        19,
        0
      ],
      [
        1320,
        1440,
        120303,
        120,
        1,
        21,
        0
      ],
      [
        0,
        240,
        10101,
        240,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210808210281,
    WECANTRIL: 7,
    WEGENHTH: 1,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 4,
    WETYPICAL: 2,
    TUDIARYDAY_x: 6,
    TRHOLIDAY_x: 0,
    TEAGE: 21,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 40,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 45,
    TRDPFTPT_x: 2,
    TRERNWA_x: 23600,
    TRERNHLY: 1100,
    TRTALONE: 560,
    TRTFAMILY: 0,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 2,
    TESCHENR: 1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        600,
        10101,
        360,
        -1,
        -1,
        0
      ],
      [
        600,
        610,
        20201,
        10,
        1,
        18,
        0
      ],
      [
        610,
        630,
        20681,
        20,
        1,
        18,
        0
      ],
      [
        630,
        900,
        60301,
        270,
        1,
        18,
        0
      ],
      [
        900,
        930,
        110101,
        30,
        1,
        18,
        0
      ],
      [
        930,
        1140,
        60301,
        210,
        1,
        18,
        0
      ],
      [
        1140,
        1260,
        20201,
        120,
        1,
        21,
        0
      ],
      [
        1260,
        1280,
        110101,
        20,
        1,
        21,
        0
      ],
      [
        1280,
        1320,
        120303,
        40,
        1,
        21,
        0
      ],
      [
        1320,
        1680,
        10101,
        360,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20211008210131,
    WECANTRIL: 8,
    WEGENHTH: 3,
    WEHBP: 2,
    WEPAINMD: 1,
    WEREST: 2,
    WETYPICAL: 3,
    TUDIARYDAY_x: 7,
    TRHOLIDAY_x: 0,
    TEAGE: 23,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 43,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 540,
    TRTFAMILY: 0,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 2,
    TESCHENR: 1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        330,
        10101,
        90,
        -1,
        -1,
        0
      ],
      [
        330,
        345,
        180501,
        15,
        12,
        18,
        0
      ],
      [
        345,
        690,
        50101,
        345,
        2,
        61,
        0
      ],
      [
        690,
        705,
        110101,
        15,
        2,
        18,
        0
      ],
      [
        705,
        720,
        120301,
        15,
        2,
        18,
        0
      ],
      [
        720,
        1020,
        50101,
        300,
        2,
        61,
        0
      ],
      [
        1020,
        1035,
        180501,
        15,
        12,
        18,
        0
      ],
      [
        1035,
        1215,
        30103,
        180,
        1,
        22,
        0
      ],
      [
        1035,
        1215,
        30103,
        180,
        1,
        22,
        0
      ],
      [
        1215,
        1240,
        110101,
        25,
        1,
        20,
        0
      ],
      [
        1215,
        1240,
        110101,
        25,
        1,
        22,
        0
      ],
      [
        1215,
        1240,
        110101,
        25,
        1,
        22,
        0
      ],
      [
        1240,
        1260,
        120303,
        20,
        1,
        20,
        0
      ],
      [
        1260,
        1680,
        10101,
        420,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20211211210796,
    WECANTRIL: 5,
    WEGENHTH: 2,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 1,
    WETYPICAL: 2,
    TUDIARYDAY_x: 4,
    TRHOLIDAY_x: 0,
    TEAGE: 29,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 39,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 22,
    TRDPFTPT_x: 1,
    TRERNWA_x: 100050,
    TRERNHLY: 2300,
    TRTALONE: 60,
    TRTFAMILY: 225,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 2,
    TRSPPRES: 1,
    TESCHENR: 2,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        660,
        10101,
        420,
        -1,
        -1,
        0
      ],
      [
        660,
        840,
        120303,
        180,
        1,
        21,
        0
      ],
      [
        840,
        900,
        20681,
        60,
        1,
        19,
        0
      ],
      [
        900,
        930,
        110101,
        30,
        1,
        19,
        0
      ],
      [
        930,
        1440,
        10101,
        510,
        -1,
        -1,
        0
      ],
      [
        0,
        20,
        110101,
        20,
        1,
        21,
        0
      ],
      [
        20,
        240,
        10101,
        220,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20211111211542,
    WECANTRIL: 3,
    WEGENHTH: 3,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 3,
    WETYPICAL: 2,
    TUDIARYDAY_x: 5,
    TRHOLIDAY_x: 1,
    TEAGE: 20,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 39,
    PEHSPNON: 1,
    PTDTRACE: 1,
    TRDTIND1: 4,
    TRDPFTPT_x: 1,
    TRERNWA_x: 62e3,
    TRERNHLY: 1500,
    TRTALONE: 90,
    TRTFAMILY: 0,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 2,
    TESCHENR: 2,
    happy_group: 1
  },
  {
    activity: [
      [
        240,
        480,
        10101,
        240,
        -1,
        -1,
        0
      ],
      [
        480,
        510,
        10201,
        30,
        -1,
        -1,
        0
      ],
      [
        510,
        540,
        110101,
        30,
        1,
        20,
        0
      ],
      [
        540,
        550,
        20501,
        10,
        1,
        18,
        0
      ],
      [
        550,
        730,
        120309,
        180,
        1,
        18,
        0
      ],
      [
        730,
        850,
        120312,
        120,
        1,
        20,
        0
      ],
      [
        850,
        860,
        20501,
        10,
        1,
        18,
        0
      ],
      [
        860,
        1020,
        120312,
        160,
        1,
        20,
        0
      ],
      [
        1020,
        1110,
        120303,
        90,
        1,
        20,
        0
      ],
      [
        1110,
        1140,
        10201,
        30,
        -1,
        -1,
        0
      ],
      [
        1140,
        1380,
        120303,
        240,
        1,
        20,
        0
      ],
      [
        1380,
        1680,
        10101,
        300,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210707210922,
    WECANTRIL: 8,
    WEGENHTH: 4,
    WEHBP: 1,
    WEPAINMD: 1,
    WEREST: 1,
    WETYPICAL: 2,
    TUDIARYDAY_x: 6,
    TRHOLIDAY_x: 0,
    TEAGE: 67,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 40,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 200,
    TRTFAMILY: 640,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 1,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        420,
        10101,
        180,
        -1,
        -1,
        0
      ],
      [
        420,
        840,
        20301,
        420,
        1,
        58,
        0
      ],
      [
        840,
        855,
        110101,
        15,
        1,
        19,
        0
      ],
      [
        855,
        1050,
        20301,
        195,
        1,
        58,
        0
      ],
      [
        1050,
        1110,
        10201,
        60,
        -1,
        -1,
        0
      ],
      [
        1110,
        1140,
        110101,
        30,
        1,
        19,
        0
      ],
      [
        1140,
        1350,
        50101,
        210,
        1,
        19,
        0
      ],
      [
        1350,
        1470,
        120303,
        120,
        1,
        19,
        0
      ],
      [
        30,
        240,
        10101,
        210,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210706211127,
    WECANTRIL: 6,
    WEGENHTH: 4,
    WEHBP: 1,
    WEPAINMD: 1,
    WEREST: 2,
    WETYPICAL: 3,
    TUDIARYDAY_x: 7,
    TRHOLIDAY_x: 0,
    TEAGE: 68,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 40,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 36,
    TRDPFTPT_x: 1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 165,
    TRTFAMILY: 0,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 3,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        360,
        10101,
        120,
        -1,
        -1,
        0
      ],
      [
        360,
        390,
        10201,
        30,
        -1,
        -1,
        0
      ],
      [
        390,
        397,
        189999,
        7,
        12,
        18,
        0
      ],
      [
        397,
        417,
        500101,
        20,
        2,
        18,
        0
      ],
      [
        417,
        540,
        50101,
        123,
        1,
        61,
        0
      ],
      [
        540,
        570,
        110101,
        30,
        2,
        61,
        0
      ],
      [
        570,
        690,
        50101,
        120,
        2,
        61,
        0
      ],
      [
        690,
        720,
        110101,
        30,
        2,
        61,
        0
      ],
      [
        720,
        870,
        50101,
        150,
        2,
        61,
        0
      ],
      [
        870,
        900,
        110101,
        30,
        2,
        61,
        0
      ],
      [
        900,
        930,
        10201,
        30,
        -1,
        -1,
        0
      ],
      [
        930,
        937,
        180101,
        7,
        12,
        18,
        0
      ],
      [
        937,
        997,
        20201,
        60,
        1,
        18,
        0
      ],
      [
        997,
        1027,
        110101,
        30,
        1,
        20,
        0
      ],
      [
        1027,
        1067,
        20203,
        40,
        1,
        18,
        0
      ],
      [
        1067,
        1127,
        10201,
        60,
        -1,
        -1,
        0
      ],
      [
        1127,
        1290,
        120303,
        163,
        1,
        20,
        0
      ],
      [
        1290,
        1680,
        10101,
        390,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210705212015,
    WECANTRIL: 7,
    WEGENHTH: 3,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 2,
    WETYPICAL: 2,
    TUDIARYDAY_x: 3,
    TRHOLIDAY_x: 0,
    TEAGE: 60,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 39,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 14,
    TRDPFTPT_x: 1,
    TRERNWA_x: 94400,
    TRERNHLY: 1400,
    TRTALONE: 134,
    TRTFAMILY: 193,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 1,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        480,
        10101,
        240,
        -1,
        -1,
        0
      ],
      [
        480,
        540,
        20501,
        60,
        1,
        20,
        0
      ],
      [
        540,
        570,
        20201,
        30,
        1,
        20,
        0
      ],
      [
        570,
        600,
        110101,
        30,
        1,
        20,
        0
      ],
      [
        600,
        660,
        20101,
        60,
        1,
        20,
        0
      ],
      [
        660,
        900,
        120303,
        240,
        1,
        20,
        0
      ],
      [
        900,
        930,
        20201,
        30,
        1,
        20,
        0
      ],
      [
        930,
        960,
        110101,
        30,
        1,
        20,
        0
      ],
      [
        960,
        1200,
        120303,
        240,
        1,
        20,
        0
      ],
      [
        1200,
        1260,
        120303,
        60,
        1,
        20,
        0
      ],
      [
        1260,
        1680,
        10101,
        420,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210504211520,
    WECANTRIL: 5,
    WEGENHTH: 4,
    WEHBP: 2,
    WEPAINMD: 1,
    WEREST: 1,
    WETYPICAL: 2,
    TUDIARYDAY_x: 1,
    TRHOLIDAY_x: 0,
    TEAGE: 55,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 31,
    PEHSPNON: 1,
    PTDTRACE: 1,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 0,
    TRTFAMILY: 780,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 1,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        330,
        181601,
        90,
        12,
        18,
        0
      ],
      [
        330,
        331,
        160101,
        1,
        3,
        18,
        0
      ],
      [
        331,
        376,
        181601,
        45,
        12,
        18,
        0
      ],
      [
        376,
        1050,
        39999,
        674,
        1,
        20,
        0
      ],
      [
        376,
        1050,
        39999,
        674,
        1,
        22,
        0
      ],
      [
        376,
        1050,
        39999,
        674,
        1,
        22,
        0
      ],
      [
        376,
        1050,
        39999,
        674,
        1,
        22,
        0
      ],
      [
        1050,
        1080,
        20201,
        30,
        1,
        18,
        0
      ],
      [
        1080,
        1200,
        30103,
        120,
        1,
        22,
        0
      ],
      [
        1080,
        1200,
        30103,
        120,
        1,
        22,
        0
      ],
      [
        1080,
        1200,
        30103,
        120,
        1,
        22,
        0
      ],
      [
        1200,
        1205,
        30101,
        5,
        1,
        22,
        0
      ],
      [
        1200,
        1205,
        30101,
        5,
        1,
        22,
        0
      ],
      [
        1200,
        1205,
        30101,
        5,
        1,
        22,
        0
      ],
      [
        1205,
        1265,
        120303,
        60,
        1,
        20,
        0
      ],
      [
        1265,
        1680,
        10101,
        415,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210402211289,
    WECANTRIL: 10,
    WEGENHTH: 3,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 1,
    WETYPICAL: 3,
    TUDIARYDAY_x: 7,
    TRHOLIDAY_x: 0,
    TEAGE: 34,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 39,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 14,
    TRDPFTPT_x: 1,
    TRERNWA_x: 72e3,
    TRERNHLY: 1800,
    TRTALONE: 166,
    TRTFAMILY: 859,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 3,
    TRSPPRES: 1,
    TESCHENR: 2,
    happy_group: 3
  },
  {
    activity: [
      [
        240,
        420,
        10101,
        180,
        -1,
        -1,
        0
      ],
      [
        420,
        730,
        60101,
        310,
        1,
        -1,
        0
      ],
      [
        730,
        765,
        110101,
        35,
        1,
        25,
        0
      ],
      [
        765,
        870,
        60101,
        105,
        1,
        -1,
        0
      ],
      [
        870,
        1050,
        500101,
        180,
        1,
        18,
        0
      ],
      [
        1050,
        1080,
        20201,
        30,
        1,
        24,
        0
      ],
      [
        1080,
        1110,
        110101,
        30,
        1,
        24,
        0
      ],
      [
        1080,
        1110,
        110101,
        30,
        1,
        25,
        0
      ],
      [
        1080,
        1110,
        110101,
        30,
        1,
        25,
        0
      ],
      [
        1110,
        1140,
        10201,
        30,
        -1,
        -1,
        0
      ],
      [
        1140,
        1141,
        181501,
        1,
        14,
        24,
        0
      ],
      [
        1140,
        1141,
        181501,
        1,
        14,
        25,
        0
      ],
      [
        1140,
        1141,
        181501,
        1,
        14,
        25,
        0
      ],
      [
        1141,
        1245,
        159989,
        104,
        5,
        24,
        0
      ],
      [
        1141,
        1245,
        159989,
        104,
        5,
        25,
        0
      ],
      [
        1141,
        1245,
        159989,
        104,
        5,
        25,
        0
      ],
      [
        1245,
        1246,
        181501,
        1,
        14,
        24,
        0
      ],
      [
        1245,
        1246,
        181501,
        1,
        14,
        25,
        0
      ],
      [
        1245,
        1246,
        181501,
        1,
        14,
        25,
        0
      ],
      [
        1246,
        1276,
        20201,
        30,
        1,
        24,
        0
      ],
      [
        1246,
        1276,
        20201,
        30,
        1,
        24,
        0
      ],
      [
        1246,
        1276,
        20201,
        30,
        1,
        25,
        0
      ],
      [
        1246,
        1276,
        20201,
        30,
        1,
        25,
        0
      ],
      [
        1276,
        1306,
        110101,
        30,
        1,
        24,
        0
      ],
      [
        1276,
        1306,
        110101,
        30,
        1,
        24,
        0
      ],
      [
        1276,
        1306,
        110101,
        30,
        1,
        25,
        0
      ],
      [
        1276,
        1306,
        110101,
        30,
        1,
        25,
        0
      ],
      [
        1306,
        1410,
        120303,
        104,
        1,
        24,
        0
      ],
      [
        1306,
        1410,
        120303,
        104,
        1,
        24,
        0
      ],
      [
        1306,
        1410,
        120303,
        104,
        1,
        25,
        0
      ],
      [
        1306,
        1410,
        120303,
        104,
        1,
        25,
        0
      ],
      [
        1410,
        1440,
        10201,
        30,
        -1,
        -1,
        0
      ],
      [
        0,
        240,
        10101,
        240,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210404210191,
    WECANTRIL: 8,
    WEGENHTH: 1,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 2,
    WETYPICAL: 2,
    TUDIARYDAY_x: 5,
    TRHOLIDAY_x: 0,
    TEAGE: 16,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 35,
    PEHSPNON: 1,
    PTDTRACE: 1,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 180,
    TRTFAMILY: 365,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 3,
    TRSPPRES: 3,
    TESCHENR: 1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        450,
        10101,
        210,
        -1,
        -1,
        0
      ],
      [
        450,
        460,
        30101,
        10,
        1,
        22,
        0
      ],
      [
        450,
        460,
        30101,
        10,
        1,
        22,
        0
      ],
      [
        460,
        475,
        20201,
        15,
        1,
        22,
        0
      ],
      [
        460,
        475,
        20201,
        15,
        1,
        22,
        0
      ],
      [
        475,
        485,
        110101,
        10,
        1,
        22,
        0
      ],
      [
        475,
        485,
        110101,
        10,
        1,
        22,
        0
      ],
      [
        485,
        500,
        10201,
        15,
        -1,
        -1,
        0
      ],
      [
        500,
        540,
        120301,
        40,
        1,
        22,
        0
      ],
      [
        500,
        540,
        120301,
        40,
        1,
        22,
        0
      ],
      [
        540,
        560,
        180381,
        20,
        13,
        20,
        0
      ],
      [
        540,
        560,
        180381,
        20,
        13,
        22,
        0
      ],
      [
        540,
        560,
        180381,
        20,
        13,
        22,
        0
      ],
      [
        560,
        565,
        30108,
        5,
        5,
        20,
        0
      ],
      [
        560,
        565,
        30108,
        5,
        5,
        22,
        0
      ],
      [
        560,
        565,
        30108,
        5,
        5,
        22,
        0
      ],
      [
        565,
        625,
        140101,
        60,
        5,
        20,
        0
      ],
      [
        625,
        632,
        180701,
        7,
        13,
        20,
        0
      ],
      [
        625,
        632,
        180701,
        7,
        13,
        22,
        0
      ],
      [
        625,
        632,
        180701,
        7,
        13,
        22,
        0
      ],
      [
        632,
        692,
        70101,
        60,
        6,
        20,
        0
      ],
      [
        632,
        692,
        70101,
        60,
        6,
        22,
        0
      ],
      [
        632,
        692,
        70101,
        60,
        6,
        22,
        0
      ],
      [
        692,
        707,
        180701,
        15,
        13,
        20,
        0
      ],
      [
        692,
        707,
        180701,
        15,
        13,
        22,
        0
      ],
      [
        692,
        707,
        180701,
        15,
        13,
        22,
        0
      ],
      [
        707,
        722,
        20104,
        15,
        1,
        20,
        0
      ],
      [
        707,
        722,
        20104,
        15,
        1,
        22,
        0
      ],
      [
        707,
        722,
        20104,
        15,
        1,
        22,
        0
      ],
      [
        722,
        737,
        20201,
        15,
        1,
        20,
        0
      ],
      [
        722,
        737,
        20201,
        15,
        1,
        22,
        0
      ],
      [
        722,
        737,
        20201,
        15,
        1,
        22,
        0
      ],
      [
        737,
        752,
        110101,
        15,
        1,
        20,
        0
      ],
      [
        737,
        752,
        110101,
        15,
        1,
        22,
        0
      ],
      [
        737,
        752,
        110101,
        15,
        1,
        22,
        0
      ],
      [
        752,
        772,
        30101,
        20,
        1,
        22,
        0
      ],
      [
        772,
        892,
        50102,
        120,
        1,
        18,
        0
      ],
      [
        892,
        922,
        30101,
        30,
        1,
        22,
        0
      ],
      [
        922,
        947,
        181401,
        25,
        12,
        20,
        0
      ],
      [
        922,
        947,
        181401,
        25,
        12,
        22,
        0
      ],
      [
        922,
        947,
        181401,
        25,
        12,
        22,
        0
      ],
      [
        947,
        1067,
        140105,
        120,
        3,
        54,
        0
      ],
      [
        947,
        1067,
        140105,
        120,
        3,
        20,
        0
      ],
      [
        1067,
        1127,
        110101,
        60,
        3,
        54,
        0
      ],
      [
        1067,
        1127,
        110101,
        60,
        3,
        58,
        0
      ],
      [
        1067,
        1127,
        110101,
        60,
        3,
        20,
        0
      ],
      [
        1067,
        1127,
        110101,
        60,
        3,
        22,
        0
      ],
      [
        1067,
        1127,
        110101,
        60,
        3,
        22,
        0
      ],
      [
        1127,
        1152,
        181101,
        25,
        12,
        20,
        0
      ],
      [
        1127,
        1152,
        181101,
        25,
        12,
        22,
        0
      ],
      [
        1127,
        1152,
        181101,
        25,
        12,
        22,
        0
      ],
      [
        1152,
        1182,
        30101,
        30,
        1,
        20,
        0
      ],
      [
        1152,
        1182,
        30101,
        30,
        1,
        22,
        0
      ],
      [
        1152,
        1182,
        30101,
        30,
        1,
        22,
        0
      ],
      [
        1182,
        1272,
        50102,
        90,
        1,
        20,
        0
      ],
      [
        1272,
        1302,
        20101,
        30,
        1,
        20,
        0
      ],
      [
        1302,
        1322,
        10201,
        20,
        -1,
        -1,
        0
      ],
      [
        1322,
        1680,
        10101,
        358,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20211110210947,
    WECANTRIL: 8,
    WEGENHTH: 2,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 2,
    WETYPICAL: 2,
    TUDIARYDAY_x: 1,
    TRHOLIDAY_x: 0,
    TEAGE: 35,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 43,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 40,
    TRDPFTPT_x: 1,
    TRERNWA_x: 67307,
    TRERNHLY: -1,
    TRTALONE: 0,
    TRTFAMILY: 627,
    TRTFRIEND: 180,
    TRCHILDNUM_x: 2,
    TRSPPRES: 1,
    TESCHENR: 2,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        360,
        10101,
        120,
        -1,
        -1,
        0
      ],
      [
        360,
        480,
        140102,
        120,
        1,
        19,
        0
      ],
      [
        480,
        510,
        110101,
        30,
        1,
        19,
        0
      ],
      [
        510,
        540,
        10201,
        30,
        -1,
        -1,
        0
      ],
      [
        540,
        600,
        150101,
        60,
        1,
        19,
        0
      ],
      [
        600,
        645,
        150101,
        45,
        1,
        19,
        0
      ],
      [
        645,
        660,
        10201,
        15,
        -1,
        -1,
        0
      ],
      [
        660,
        1020,
        120303,
        360,
        1,
        19,
        0
      ],
      [
        1020,
        1140,
        150102,
        120,
        1,
        19,
        0
      ],
      [
        1140,
        1245,
        150501,
        105,
        1,
        19,
        0
      ],
      [
        1245,
        1260,
        20201,
        15,
        1,
        19,
        0
      ],
      [
        1260,
        1290,
        110101,
        30,
        1,
        19,
        0
      ],
      [
        1290,
        1440,
        120303,
        150,
        1,
        19,
        0
      ],
      [
        0,
        240,
        10101,
        240,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210302212271,
    WECANTRIL: 5,
    WEGENHTH: 4,
    WEHBP: 1,
    WEPAINMD: 2,
    WEREST: 1,
    WETYPICAL: 2,
    TUDIARYDAY_x: 2,
    TRHOLIDAY_x: 0,
    TEAGE: 67,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 44,
    PEHSPNON: 2,
    PTDTRACE: 2,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 1035,
    TRTFAMILY: 0,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 3,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        360,
        10101,
        120,
        -1,
        -1,
        0
      ],
      [
        360,
        365,
        20201,
        5,
        1,
        18,
        0
      ],
      [
        365,
        425,
        140102,
        60,
        1,
        20,
        0
      ],
      [
        425,
        455,
        20201,
        30,
        1,
        22,
        0
      ],
      [
        455,
        470,
        110101,
        15,
        1,
        22,
        0
      ],
      [
        455,
        470,
        110101,
        15,
        1,
        22,
        0
      ],
      [
        455,
        470,
        110101,
        15,
        1,
        22,
        0
      ],
      [
        470,
        480,
        140102,
        10,
        1,
        22,
        0
      ],
      [
        470,
        480,
        140102,
        10,
        1,
        22,
        0
      ],
      [
        470,
        480,
        140102,
        10,
        1,
        22,
        0
      ],
      [
        480,
        510,
        20203,
        30,
        1,
        22,
        0
      ],
      [
        510,
        600,
        10201,
        90,
        -1,
        -1,
        0
      ],
      [
        600,
        660,
        20101,
        60,
        1,
        22,
        0
      ],
      [
        660,
        705,
        130131,
        45,
        9,
        18,
        0
      ],
      [
        705,
        720,
        20501,
        15,
        1,
        18,
        0
      ],
      [
        720,
        750,
        20101,
        30,
        1,
        22,
        0
      ],
      [
        720,
        750,
        20101,
        30,
        1,
        22,
        0
      ],
      [
        720,
        750,
        20101,
        30,
        1,
        22,
        0
      ],
      [
        750,
        780,
        30186,
        30,
        1,
        22,
        0
      ],
      [
        780,
        800,
        20201,
        20,
        1,
        22,
        0
      ],
      [
        800,
        815,
        110101,
        15,
        1,
        22,
        0
      ],
      [
        800,
        815,
        110101,
        15,
        1,
        22,
        0
      ],
      [
        800,
        815,
        110101,
        15,
        1,
        22,
        0
      ],
      [
        815,
        830,
        20203,
        15,
        1,
        22,
        0
      ],
      [
        830,
        840,
        180280,
        10,
        12,
        18,
        0
      ],
      [
        840,
        870,
        20902,
        30,
        8,
        53,
        0
      ],
      [
        870,
        880,
        180280,
        10,
        12,
        18,
        0
      ],
      [
        880,
        910,
        20101,
        30,
        1,
        22,
        0
      ],
      [
        910,
        955,
        20501,
        45,
        1,
        22,
        0
      ],
      [
        910,
        955,
        20501,
        45,
        1,
        22,
        0
      ],
      [
        910,
        955,
        20501,
        45,
        1,
        22,
        0
      ],
      [
        955,
        985,
        120303,
        30,
        1,
        22,
        0
      ],
      [
        955,
        985,
        120303,
        30,
        1,
        22,
        0
      ],
      [
        955,
        985,
        120303,
        30,
        1,
        22,
        0
      ],
      [
        985,
        1020,
        120301,
        35,
        1,
        22,
        0
      ],
      [
        985,
        1020,
        120301,
        35,
        1,
        22,
        0
      ],
      [
        985,
        1020,
        120301,
        35,
        1,
        22,
        0
      ],
      [
        1020,
        1050,
        20201,
        30,
        1,
        22,
        0
      ],
      [
        1020,
        1050,
        20201,
        30,
        1,
        22,
        0
      ],
      [
        1020,
        1050,
        20201,
        30,
        1,
        22,
        0
      ],
      [
        1050,
        1110,
        110101,
        60,
        1,
        20,
        0
      ],
      [
        1050,
        1110,
        110101,
        60,
        1,
        22,
        0
      ],
      [
        1050,
        1110,
        110101,
        60,
        1,
        22,
        0
      ],
      [
        1050,
        1110,
        110101,
        60,
        1,
        22,
        0
      ],
      [
        1110,
        1120,
        180280,
        10,
        13,
        20,
        0
      ],
      [
        1110,
        1120,
        180280,
        10,
        13,
        22,
        0
      ],
      [
        1110,
        1120,
        180280,
        10,
        13,
        22,
        0
      ],
      [
        1110,
        1120,
        180280,
        10,
        13,
        22,
        0
      ],
      [
        1120,
        1180,
        20501,
        60,
        11,
        20,
        0
      ],
      [
        1120,
        1180,
        20501,
        60,
        11,
        22,
        0
      ],
      [
        1120,
        1180,
        20501,
        60,
        11,
        22,
        0
      ],
      [
        1120,
        1180,
        20501,
        60,
        11,
        22,
        0
      ],
      [
        1180,
        1445,
        120101,
        265,
        11,
        52,
        0
      ],
      [
        1180,
        1445,
        120101,
        265,
        11,
        53,
        0
      ],
      [
        1180,
        1445,
        120101,
        265,
        11,
        20,
        0
      ],
      [
        1180,
        1445,
        120101,
        265,
        11,
        22,
        0
      ],
      [
        1180,
        1445,
        120101,
        265,
        11,
        22,
        0
      ],
      [
        1180,
        1445,
        120101,
        265,
        11,
        22,
        0
      ],
      [
        5,
        15,
        181201,
        10,
        13,
        20,
        0
      ],
      [
        5,
        15,
        181201,
        10,
        13,
        22,
        0
      ],
      [
        5,
        15,
        181201,
        10,
        13,
        22,
        0
      ],
      [
        5,
        15,
        181201,
        10,
        13,
        22,
        0
      ],
      [
        15,
        35,
        20902,
        20,
        1,
        20,
        0
      ],
      [
        15,
        35,
        20902,
        20,
        1,
        22,
        0
      ],
      [
        15,
        35,
        20902,
        20,
        1,
        22,
        0
      ],
      [
        15,
        35,
        20902,
        20,
        1,
        22,
        0
      ],
      [
        35,
        45,
        30101,
        10,
        1,
        20,
        0
      ],
      [
        35,
        45,
        30101,
        10,
        1,
        22,
        0
      ],
      [
        35,
        45,
        30101,
        10,
        1,
        22,
        0
      ],
      [
        35,
        45,
        30101,
        10,
        1,
        22,
        0
      ],
      [
        45,
        55,
        10201,
        10,
        -1,
        -1,
        0
      ],
      [
        55,
        240,
        10101,
        185,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210605210825,
    WECANTRIL: 10,
    WEGENHTH: 2,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 1,
    WETYPICAL: 2,
    TUDIARYDAY_x: 6,
    TRHOLIDAY_x: 0,
    TEAGE: 43,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 39,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 85,
    TRTFAMILY: 950,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 3,
    TRSPPRES: 1,
    TESCHENR: 2,
    happy_group: 3
  },
  {
    activity: [
      [
        240,
        570,
        10101,
        330,
        -1,
        -1,
        0
      ],
      [
        570,
        660,
        20101,
        90,
        1,
        18,
        0
      ],
      [
        660,
        720,
        10201,
        60,
        -1,
        -1,
        0
      ],
      [
        720,
        735,
        181201,
        15,
        12,
        22,
        0
      ],
      [
        735,
        855,
        120101,
        120,
        3,
        51,
        0
      ],
      [
        735,
        855,
        120101,
        120,
        3,
        22,
        0
      ],
      [
        855,
        870,
        180782,
        15,
        1,
        22,
        0
      ],
      [
        870,
        890,
        70104,
        20,
        7,
        22,
        0
      ],
      [
        890,
        915,
        180782,
        25,
        12,
        22,
        0
      ],
      [
        915,
        1050,
        120301,
        135,
        1,
        22,
        0
      ],
      [
        1050,
        1140,
        10201,
        90,
        -1,
        -1,
        0
      ],
      [
        1140,
        1155,
        181101,
        15,
        1,
        54,
        0
      ],
      [
        1155,
        1260,
        110101,
        105,
        4,
        54,
        0
      ],
      [
        1260,
        1275,
        181101,
        15,
        1,
        54,
        0
      ],
      [
        1275,
        1425,
        120303,
        150,
        1,
        54,
        0
      ],
      [
        1425,
        1680,
        10101,
        255,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210706212321,
    WECANTRIL: 8,
    WEGENHTH: 2,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 1,
    WETYPICAL: 1,
    TUDIARYDAY_x: 1,
    TRHOLIDAY_x: 0,
    TEAGE: 29,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 34,
    PEHSPNON: 1,
    PTDTRACE: 1,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 90,
    TRTFAMILY: 330,
    TRTFRIEND: 285,
    TRCHILDNUM_x: 1,
    TRSPPRES: 3,
    TESCHENR: 2,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        600,
        10101,
        360,
        -1,
        -1,
        0
      ],
      [
        600,
        620,
        10201,
        20,
        -1,
        -1,
        0
      ],
      [
        620,
        630,
        110101,
        10,
        1,
        19,
        0
      ],
      [
        630,
        660,
        120308,
        30,
        1,
        19,
        0
      ],
      [
        660,
        720,
        120312,
        60,
        1,
        19,
        0
      ],
      [
        720,
        750,
        130131,
        30,
        89,
        19,
        0
      ],
      [
        750,
        770,
        120312,
        20,
        1,
        19,
        0
      ],
      [
        770,
        780,
        110101,
        10,
        1,
        19,
        0
      ],
      [
        780,
        800,
        20201,
        20,
        1,
        19,
        0
      ],
      [
        800,
        860,
        120312,
        60,
        1,
        19,
        0
      ],
      [
        860,
        1050,
        120303,
        190,
        1,
        19,
        0
      ],
      [
        1050,
        1140,
        110101,
        90,
        1,
        19,
        0
      ],
      [
        1140,
        1365,
        120303,
        225,
        1,
        19,
        0
      ],
      [
        1365,
        1395,
        120312,
        30,
        1,
        19,
        0
      ],
      [
        1395,
        1405,
        10201,
        10,
        -1,
        -1,
        0
      ],
      [
        1405,
        1680,
        10101,
        275,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210908211085,
    WECANTRIL: 6,
    WEGENHTH: 3,
    WEHBP: 1,
    WEPAINMD: 2,
    WEREST: 2,
    WETYPICAL: 2,
    TUDIARYDAY_x: 1,
    TRHOLIDAY_x: 0,
    TEAGE: 80,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 46,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 775,
    TRTFAMILY: 0,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 3,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        285,
        10101,
        45,
        -1,
        -1,
        0
      ],
      [
        285,
        315,
        10201,
        30,
        -1,
        -1,
        0
      ],
      [
        315,
        316,
        10301,
        1,
        1,
        20,
        0
      ],
      [
        316,
        329,
        181501,
        13,
        1,
        20,
        0
      ],
      [
        329,
        374,
        150106,
        45,
        11,
        20,
        0
      ],
      [
        374,
        570,
        150106,
        196,
        11,
        20,
        0
      ],
      [
        570,
        580,
        180782,
        10,
        12,
        20,
        0
      ],
      [
        580,
        590,
        70103,
        10,
        4,
        20,
        0
      ],
      [
        590,
        600,
        181101,
        10,
        12,
        20,
        0
      ],
      [
        600,
        610,
        110101,
        10,
        11,
        20,
        0
      ],
      [
        610,
        840,
        150106,
        230,
        11,
        20,
        0
      ],
      [
        840,
        853,
        181501,
        13,
        13,
        20,
        0
      ],
      [
        853,
        863,
        20104,
        10,
        1,
        20,
        0
      ],
      [
        863,
        908,
        10101,
        45,
        -1,
        -1,
        0
      ],
      [
        908,
        968,
        120312,
        60,
        1,
        18,
        0
      ],
      [
        968,
        983,
        20904,
        15,
        1,
        18,
        0
      ],
      [
        983,
        998,
        120308,
        15,
        1,
        18,
        0
      ],
      [
        998,
        1028,
        120307,
        30,
        1,
        18,
        0
      ],
      [
        1028,
        1073,
        110101,
        45,
        1,
        20,
        0
      ],
      [
        1073,
        1088,
        120101,
        15,
        1,
        20,
        0
      ],
      [
        1088,
        1093,
        70103,
        5,
        1,
        20,
        0
      ],
      [
        1093,
        1110,
        120101,
        17,
        1,
        20,
        0
      ],
      [
        1110,
        1140,
        110101,
        30,
        1,
        20,
        0
      ],
      [
        1140,
        1320,
        120303,
        180,
        1,
        20,
        0
      ],
      [
        1320,
        1680,
        10101,
        360,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20211009211359,
    WECANTRIL: 9,
    WEGENHTH: 2,
    WEHBP: 2,
    WEPAINMD: 1,
    WEREST: 1,
    WETYPICAL: 1,
    TUDIARYDAY_x: 7,
    TRHOLIDAY_x: 0,
    TEAGE: 77,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 43,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 120,
    TRTFAMILY: 840,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 1,
    TESCHENR: -1,
    happy_group: 3
  },
  {
    activity: [
      [
        240,
        420,
        10101,
        180,
        -1,
        -1,
        0
      ],
      [
        420,
        450,
        20201,
        30,
        1,
        18,
        0
      ],
      [
        450,
        480,
        30101,
        30,
        1,
        22,
        0
      ],
      [
        450,
        480,
        30101,
        30,
        1,
        22,
        0
      ],
      [
        480,
        495,
        180701,
        15,
        12,
        18,
        0
      ],
      [
        495,
        585,
        70101,
        90,
        6,
        18,
        0
      ],
      [
        585,
        600,
        180701,
        15,
        12,
        18,
        0
      ],
      [
        600,
        660,
        20201,
        60,
        1,
        18,
        0
      ],
      [
        660,
        750,
        20101,
        90,
        1,
        18,
        0
      ],
      [
        750,
        870,
        10101,
        120,
        -1,
        -1,
        0
      ],
      [
        870,
        930,
        20201,
        60,
        1,
        18,
        0
      ],
      [
        930,
        940,
        180381,
        10,
        14,
        22,
        0
      ],
      [
        940,
        1e3,
        30112,
        60,
        8,
        22,
        0
      ],
      [
        940,
        1e3,
        30112,
        60,
        8,
        22,
        0
      ],
      [
        1e3,
        1010,
        180381,
        10,
        14,
        22,
        0
      ],
      [
        1e3,
        1010,
        180381,
        10,
        14,
        22,
        0
      ],
      [
        1010,
        1070,
        20201,
        60,
        1,
        18,
        0
      ],
      [
        1070,
        1140,
        110101,
        70,
        1,
        20,
        0
      ],
      [
        1070,
        1140,
        110101,
        70,
        1,
        22,
        0
      ],
      [
        1070,
        1140,
        110101,
        70,
        1,
        22,
        0
      ],
      [
        1140,
        1200,
        130104,
        60,
        1,
        20,
        0
      ],
      [
        1140,
        1200,
        130104,
        60,
        1,
        22,
        0
      ],
      [
        1140,
        1200,
        130104,
        60,
        1,
        22,
        0
      ],
      [
        1200,
        1260,
        30101,
        60,
        1,
        22,
        0
      ],
      [
        1260,
        1275,
        30102,
        15,
        1,
        22,
        0
      ],
      [
        1275,
        1395,
        120308,
        120,
        1,
        18,
        0
      ],
      [
        1395,
        1425,
        10201,
        30,
        -1,
        -1,
        0
      ],
      [
        1425,
        1680,
        10101,
        255,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210504211330,
    WECANTRIL: 4,
    WEGENHTH: 3,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 4,
    WETYPICAL: 3,
    TUDIARYDAY_x: 3,
    TRHOLIDAY_x: 0,
    TEAGE: 46,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 43,
    PEHSPNON: 2,
    PTDTRACE: 4,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 540,
    TRTFAMILY: 315,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 2,
    TRSPPRES: 1,
    TESCHENR: 2,
    happy_group: 1
  },
  {
    activity: [
      [
        240,
        540,
        10101,
        300,
        -1,
        -1,
        0
      ],
      [
        540,
        570,
        20201,
        30,
        1,
        19,
        0
      ],
      [
        570,
        600,
        110101,
        30,
        1,
        19,
        0
      ],
      [
        600,
        660,
        140102,
        60,
        1,
        19,
        0
      ],
      [
        660,
        680,
        500101,
        20,
        1,
        19,
        0
      ],
      [
        680,
        700,
        130131,
        20,
        1,
        19,
        0
      ],
      [
        700,
        710,
        110101,
        10,
        1,
        19,
        0
      ],
      [
        710,
        800,
        120312,
        90,
        1,
        19,
        0
      ],
      [
        800,
        860,
        120301,
        60,
        1,
        19,
        0
      ],
      [
        860,
        960,
        500106,
        100,
        -1,
        -1,
        0
      ],
      [
        960,
        1080,
        120101,
        120,
        1,
        52,
        0
      ],
      [
        960,
        1080,
        120101,
        120,
        1,
        53,
        0
      ],
      [
        1080,
        1140,
        110101,
        60,
        1,
        52,
        0
      ],
      [
        1080,
        1140,
        110101,
        60,
        1,
        53,
        0
      ],
      [
        1140,
        1350,
        120303,
        210,
        1,
        19,
        0
      ],
      [
        1350,
        1680,
        10101,
        330,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210707211903,
    WECANTRIL: 6,
    WEGENHTH: 3,
    WEHBP: 1,
    WEPAINMD: 2,
    WEREST: 2,
    WETYPICAL: 1,
    TUDIARYDAY_x: 4,
    TRHOLIDAY_x: 0,
    TEAGE: 79,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 43,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 530,
    TRTFAMILY: 180,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 3,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        450,
        10101,
        210,
        -1,
        -1,
        0
      ],
      [
        450,
        455,
        10201,
        5,
        -1,
        -1,
        0
      ],
      [
        455,
        460,
        20101,
        5,
        1,
        19,
        0
      ],
      [
        460,
        470,
        10301,
        10,
        1,
        19,
        0
      ],
      [
        470,
        475,
        20681,
        5,
        1,
        19,
        0
      ],
      [
        475,
        535,
        120312,
        60,
        1,
        19,
        0
      ],
      [
        535,
        720,
        120303,
        185,
        1,
        19,
        0
      ],
      [
        720,
        750,
        110101,
        30,
        1,
        19,
        0
      ],
      [
        750,
        960,
        120303,
        210,
        1,
        19,
        0
      ],
      [
        960,
        990,
        110101,
        30,
        1,
        19,
        0
      ],
      [
        990,
        1260,
        120303,
        270,
        1,
        19,
        0
      ],
      [
        1260,
        1275,
        10201,
        15,
        -1,
        -1,
        0
      ],
      [
        1275,
        1290,
        20303,
        15,
        1,
        19,
        0
      ],
      [
        1290,
        1410,
        120303,
        120,
        1,
        19,
        0
      ],
      [
        1410,
        1680,
        10101,
        270,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210908210687,
    WECANTRIL: 6,
    WEGENHTH: 3,
    WEHBP: 2,
    WEPAINMD: 1,
    WEREST: 2,
    WETYPICAL: 1,
    TUDIARYDAY_x: 7,
    TRHOLIDAY_x: 0,
    TEAGE: 80,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 43,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 940,
    TRTFAMILY: 0,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 3,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        300,
        10101,
        60,
        -1,
        -1,
        0
      ],
      [
        300,
        330,
        10201,
        30,
        -1,
        -1,
        0
      ],
      [
        330,
        360,
        150102,
        30,
        1,
        18,
        0
      ],
      [
        360,
        480,
        150501,
        120,
        1,
        18,
        0
      ],
      [
        480,
        525,
        20201,
        45,
        1,
        18,
        0
      ],
      [
        525,
        600,
        110101,
        75,
        1,
        18,
        0
      ],
      [
        600,
        720,
        120303,
        120,
        1,
        20,
        0
      ],
      [
        720,
        735,
        20201,
        15,
        1,
        18,
        0
      ],
      [
        735,
        795,
        150103,
        60,
        1,
        20,
        0
      ],
      [
        795,
        855,
        10101,
        60,
        -1,
        -1,
        0
      ],
      [
        855,
        900,
        20201,
        45,
        1,
        20,
        0
      ],
      [
        900,
        960,
        110101,
        60,
        1,
        20,
        0
      ],
      [
        960,
        1020,
        150102,
        60,
        1,
        20,
        0
      ],
      [
        1020,
        1080,
        150104,
        60,
        1,
        20,
        0
      ],
      [
        1080,
        1110,
        150102,
        30,
        1,
        20,
        0
      ],
      [
        1110,
        1140,
        150104,
        30,
        1,
        20,
        0
      ],
      [
        1140,
        1260,
        150501,
        120,
        1,
        20,
        0
      ],
      [
        1260,
        1290,
        10201,
        30,
        -1,
        -1,
        0
      ],
      [
        1290,
        1680,
        10101,
        390,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20211009210750,
    WECANTRIL: 8,
    WEGENHTH: 2,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 2,
    WETYPICAL: 2,
    TUDIARYDAY_x: 7,
    TRHOLIDAY_x: 0,
    TEAGE: 73,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 43,
    PEHSPNON: 1,
    PTDTRACE: 1,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 285,
    TRTFAMILY: 585,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 1,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        270,
        110101,
        30,
        1,
        18,
        0
      ],
      [
        270,
        420,
        120303,
        150,
        1,
        18,
        0
      ],
      [
        420,
        440,
        130131,
        20,
        1,
        18,
        0
      ],
      [
        440,
        450,
        120101,
        10,
        1,
        20,
        0
      ],
      [
        450,
        460,
        10301,
        10,
        1,
        18,
        0
      ],
      [
        460,
        490,
        20101,
        30,
        1,
        18,
        0
      ],
      [
        490,
        515,
        169989,
        25,
        1,
        18,
        0
      ],
      [
        515,
        575,
        20902,
        60,
        1,
        18,
        0
      ],
      [
        575,
        635,
        20902,
        60,
        1,
        18,
        0
      ],
      [
        635,
        665,
        120303,
        30,
        1,
        18,
        0
      ],
      [
        665,
        690,
        10401,
        25,
        -1,
        -1,
        0
      ],
      [
        690,
        750,
        20201,
        60,
        1,
        22,
        0
      ],
      [
        750,
        770,
        20203,
        20,
        1,
        22,
        0
      ],
      [
        770,
        900,
        10101,
        130,
        -1,
        -1,
        0
      ],
      [
        900,
        910,
        120101,
        10,
        1,
        20,
        0
      ],
      [
        910,
        930,
        120301,
        20,
        1,
        18,
        0
      ],
      [
        930,
        990,
        160101,
        60,
        1,
        18,
        0
      ],
      [
        990,
        1110,
        120303,
        120,
        1,
        18,
        0
      ],
      [
        1110,
        1125,
        20681,
        15,
        1,
        18,
        0
      ],
      [
        1125,
        1155,
        20102,
        30,
        1,
        18,
        0
      ],
      [
        1155,
        1195,
        10301,
        40,
        1,
        18,
        0
      ],
      [
        1195,
        1205,
        120101,
        10,
        1,
        20,
        0
      ],
      [
        1195,
        1205,
        120101,
        10,
        1,
        22,
        0
      ],
      [
        1195,
        1205,
        120101,
        10,
        1,
        26,
        0
      ],
      [
        1205,
        1225,
        110101,
        20,
        1,
        18,
        0
      ],
      [
        1225,
        1235,
        10201,
        10,
        -1,
        -1,
        0
      ],
      [
        1235,
        1241,
        10301,
        6,
        1,
        18,
        0
      ],
      [
        1241,
        1251,
        120301,
        10,
        1,
        18,
        0
      ],
      [
        1251,
        1261,
        10201,
        10,
        -1,
        -1,
        0
      ],
      [
        1261,
        1291,
        120301,
        30,
        1,
        18,
        0
      ],
      [
        1291,
        1296,
        120101,
        5,
        1,
        20,
        0
      ],
      [
        1296,
        1416,
        120303,
        120,
        1,
        18,
        0
      ],
      [
        1416,
        1422,
        10201,
        6,
        -1,
        -1,
        0
      ],
      [
        1422,
        1620,
        10101,
        198,
        -1,
        -1,
        0
      ],
      [
        180,
        184,
        20201,
        4,
        1,
        18,
        0
      ],
      [
        184,
        204,
        10401,
        20,
        -1,
        -1,
        0
      ],
      [
        204,
        234,
        20203,
        30,
        1,
        18,
        0
      ],
      [
        234,
        240,
        120303,
        6,
        1,
        18,
        0
      ]
    ],
    TUCASEID: 20210807212179,
    WECANTRIL: 6,
    WEGENHTH: 5,
    WEHBP: 1,
    WEPAINMD: 2,
    WEREST: 4,
    WETYPICAL: 3,
    TUDIARYDAY_x: 3,
    TRHOLIDAY_x: 0,
    TEAGE: 63,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 39,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 926,
    TRTFAMILY: 115,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 1,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        270,
        10101,
        30,
        -1,
        -1,
        0
      ],
      [
        270,
        315,
        130124,
        45,
        9,
        19,
        0
      ],
      [
        315,
        335,
        500101,
        20,
        1,
        19,
        0
      ],
      [
        335,
        350,
        120312,
        15,
        1,
        19,
        0
      ],
      [
        350,
        395,
        10201,
        45,
        -1,
        -1,
        0
      ],
      [
        395,
        420,
        500105,
        25,
        -1,
        -1,
        0
      ],
      [
        420,
        435,
        180501,
        15,
        12,
        57,
        0
      ],
      [
        435,
        915,
        50101,
        480,
        2,
        57,
        0
      ],
      [
        915,
        930,
        180501,
        15,
        12,
        57,
        0
      ],
      [
        930,
        945,
        20201,
        15,
        1,
        53,
        0
      ],
      [
        945,
        975,
        110101,
        30,
        1,
        53,
        0
      ],
      [
        975,
        977,
        180589,
        2,
        1,
        19,
        0
      ],
      [
        977,
        1305,
        50389,
        328,
        8,
        57,
        0
      ],
      [
        1305,
        1307,
        180589,
        2,
        12,
        19,
        0
      ],
      [
        1307,
        1327,
        10201,
        20,
        -1,
        -1,
        0
      ],
      [
        1327,
        1680,
        10101,
        353,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210909212289,
    WECANTRIL: 8,
    WEGENHTH: 2,
    WEHBP: 2,
    WEPAINMD: 1,
    WEREST: 3,
    WETYPICAL: 3,
    TUDIARYDAY_x: 5,
    TRHOLIDAY_x: 0,
    TEAGE: 46,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 43,
    PEHSPNON: 2,
    PTDTRACE: 2,
    TRDTIND1: 40,
    TRDPFTPT_x: 2,
    TRERNWA_x: 80769,
    TRERNHLY: -1,
    TRTALONE: 84,
    TRTFAMILY: 45,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 3,
    TESCHENR: 2,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        660,
        10101,
        420,
        -1,
        -1,
        0
      ],
      [
        660,
        1050,
        120309,
        390,
        1,
        18,
        0
      ],
      [
        1050,
        1080,
        110101,
        30,
        1,
        20,
        0
      ],
      [
        1080,
        1260,
        120312,
        180,
        1,
        20,
        0
      ],
      [
        1260,
        1500,
        120309,
        240,
        1,
        18,
        0
      ],
      [
        60,
        150,
        120312,
        90,
        1,
        18,
        0
      ],
      [
        150,
        165,
        10201,
        15,
        -1,
        -1,
        0
      ],
      [
        165,
        240,
        10101,
        75,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210302211627,
    WECANTRIL: 10,
    WEGENHTH: 2,
    WEHBP: 2,
    WEPAINMD: 1,
    WEREST: 1,
    WETYPICAL: 2,
    TUDIARYDAY_x: 3,
    TRHOLIDAY_x: 0,
    TEAGE: 80,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 43,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 720,
    TRTFAMILY: 210,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 1,
    TESCHENR: -1,
    happy_group: 3
  },
  {
    activity: [
      [
        240,
        480,
        10101,
        240,
        -1,
        -1,
        0
      ],
      [
        480,
        720,
        120303,
        240,
        1,
        19,
        0
      ],
      [
        720,
        735,
        20201,
        15,
        1,
        19,
        0
      ],
      [
        735,
        750,
        110101,
        15,
        1,
        19,
        0
      ],
      [
        750,
        1200,
        120303,
        450,
        1,
        19,
        0
      ],
      [
        1200,
        1680,
        10101,
        480,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210604211213,
    WECANTRIL: 7,
    WEGENHTH: 2,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 1,
    WETYPICAL: 2,
    TUDIARYDAY_x: 7,
    TRHOLIDAY_x: 0,
    TEAGE: 27,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 43,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 22,
    TRDPFTPT_x: 1,
    TRERNWA_x: 134615,
    TRERNHLY: -1,
    TRTALONE: 720,
    TRTFAMILY: 0,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 3,
    TESCHENR: 2,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        600,
        10101,
        360,
        -1,
        -1,
        0
      ],
      [
        600,
        620,
        10201,
        20,
        -1,
        -1,
        0
      ],
      [
        620,
        740,
        120303,
        120,
        1,
        24,
        0
      ],
      [
        740,
        920,
        20401,
        180,
        1,
        24,
        0
      ],
      [
        920,
        1040,
        20201,
        120,
        1,
        24,
        0
      ],
      [
        1040,
        1060,
        110101,
        20,
        1,
        24,
        0
      ],
      [
        1060,
        1090,
        10201,
        30,
        -1,
        -1,
        0
      ],
      [
        1090,
        1210,
        120303,
        120,
        1,
        18,
        0
      ],
      [
        1210,
        1680,
        10101,
        470,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210908210184,
    WECANTRIL: 7,
    WEGENHTH: 3,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 1,
    WETYPICAL: 1,
    TUDIARYDAY_x: 1,
    TRHOLIDAY_x: 0,
    TEAGE: 21,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 39,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 22,
    TRDPFTPT_x: 1,
    TRERNWA_x: 57692,
    TRERNHLY: -1,
    TRTALONE: 120,
    TRTFAMILY: 440,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 3,
    TESCHENR: 2,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        420,
        10101,
        180,
        -1,
        -1,
        0
      ],
      [
        420,
        450,
        110101,
        30,
        1,
        53,
        0
      ],
      [
        450,
        510,
        10201,
        60,
        -1,
        -1,
        0
      ],
      [
        510,
        533,
        181301,
        23,
        12,
        19,
        0
      ],
      [
        533,
        630,
        130126,
        97,
        11,
        54,
        0
      ],
      [
        630,
        640,
        181101,
        10,
        12,
        54,
        0
      ],
      [
        640,
        750,
        110101,
        110,
        4,
        54,
        0
      ],
      [
        750,
        773,
        181101,
        23,
        12,
        19,
        0
      ],
      [
        773,
        803,
        10201,
        30,
        -1,
        -1,
        0
      ],
      [
        803,
        930,
        120303,
        127,
        1,
        19,
        0
      ],
      [
        930,
        940,
        180905,
        10,
        12,
        19,
        0
      ],
      [
        940,
        950,
        90501,
        10,
        12,
        19,
        0
      ],
      [
        950,
        965,
        180782,
        15,
        12,
        19,
        0
      ],
      [
        965,
        1085,
        70104,
        120,
        7,
        19,
        0
      ],
      [
        1085,
        1105,
        180782,
        20,
        12,
        19,
        0
      ],
      [
        1105,
        1140,
        120306,
        35,
        1,
        19,
        0
      ],
      [
        1140,
        1165,
        110281,
        25,
        1,
        19,
        0
      ],
      [
        1165,
        1180,
        110101,
        15,
        1,
        19,
        0
      ],
      [
        1180,
        1290,
        10201,
        110,
        -1,
        -1,
        0
      ],
      [
        1290,
        1303,
        180482,
        13,
        12,
        19,
        0
      ],
      [
        1303,
        1304,
        40507,
        1,
        89,
        54,
        0
      ],
      [
        1304,
        1314,
        181201,
        10,
        12,
        54,
        0
      ],
      [
        1314,
        1560,
        120101,
        246,
        4,
        54,
        0
      ],
      [
        120,
        130,
        180482,
        10,
        12,
        54,
        0
      ],
      [
        130,
        140,
        40507,
        10,
        89,
        54,
        0
      ],
      [
        140,
        153,
        180482,
        13,
        12,
        19,
        0
      ],
      [
        153,
        158,
        10201,
        5,
        -1,
        -1,
        0
      ],
      [
        158,
        240,
        10101,
        82,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20211008212060,
    WECANTRIL: 10,
    WEGENHTH: 4,
    WEHBP: 2,
    WEPAINMD: 1,
    WEREST: 4,
    WETYPICAL: 2,
    TUDIARYDAY_x: 7,
    TRHOLIDAY_x: 0,
    TEAGE: 33,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 40,
    PEHSPNON: 1,
    PTDTRACE: 1,
    TRDTIND1: 4,
    TRDPFTPT_x: 1,
    TRERNWA_x: 6e4,
    TRERNHLY: 1500,
    TRTALONE: 449,
    TRTFAMILY: 30,
    TRTFRIEND: 494,
    TRCHILDNUM_x: 0,
    TRSPPRES: 3,
    TESCHENR: 2,
    happy_group: 3
  },
  {
    activity: [
      [
        240,
        360,
        10101,
        120,
        -1,
        -1,
        0
      ],
      [
        360,
        380,
        20201,
        20,
        1,
        18,
        0
      ],
      [
        380,
        381,
        30101,
        1,
        1,
        22,
        0
      ],
      [
        380,
        381,
        30101,
        1,
        1,
        22,
        0
      ],
      [
        381,
        391,
        30101,
        10,
        1,
        22,
        0
      ],
      [
        381,
        391,
        30101,
        10,
        1,
        22,
        0
      ],
      [
        391,
        401,
        10201,
        10,
        -1,
        -1,
        0
      ],
      [
        401,
        450,
        500106,
        49,
        -1,
        -1,
        0
      ],
      [
        450,
        455,
        500103,
        5,
        9,
        22,
        0
      ],
      [
        455,
        465,
        500103,
        10,
        12,
        22,
        0
      ],
      [
        465,
        470,
        180501,
        5,
        12,
        18,
        0
      ],
      [
        470,
        710,
        50101,
        240,
        2,
        18,
        0
      ],
      [
        710,
        725,
        110101,
        15,
        2,
        18,
        0
      ],
      [
        725,
        960,
        50101,
        235,
        2,
        18,
        0
      ],
      [
        960,
        965,
        180381,
        5,
        12,
        18,
        0
      ],
      [
        965,
        968,
        30112,
        3,
        8,
        18,
        0
      ],
      [
        968,
        978,
        180381,
        10,
        12,
        22,
        0
      ],
      [
        978,
        988,
        10201,
        10,
        -1,
        -1,
        0
      ],
      [
        988,
        1048,
        20201,
        60,
        1,
        22,
        0
      ],
      [
        988,
        1048,
        20201,
        60,
        1,
        22,
        0
      ],
      [
        1048,
        1078,
        20203,
        30,
        1,
        22,
        0
      ],
      [
        1048,
        1078,
        20203,
        30,
        1,
        22,
        0
      ],
      [
        1078,
        1088,
        20904,
        10,
        1,
        18,
        0
      ],
      [
        1088,
        1208,
        120303,
        120,
        1,
        22,
        0
      ],
      [
        1088,
        1208,
        120303,
        120,
        1,
        22,
        0
      ],
      [
        1208,
        1238,
        10201,
        30,
        -1,
        -1,
        0
      ],
      [
        1238,
        1248,
        30186,
        10,
        1,
        22,
        0
      ],
      [
        1238,
        1248,
        30186,
        10,
        1,
        22,
        0
      ],
      [
        1248,
        1680,
        10101,
        432,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20211009211092,
    WECANTRIL: 8,
    WEGENHTH: 2,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 1,
    WETYPICAL: 1,
    TUDIARYDAY_x: 4,
    TRHOLIDAY_x: 0,
    TEAGE: 41,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 43,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 36,
    TRDPFTPT_x: 1,
    TRERNWA_x: 1e5,
    TRERNHLY: 2500,
    TRTALONE: 58,
    TRTFAMILY: 256,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 2,
    TRSPPRES: 3,
    TESCHENR: 2,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        540,
        10101,
        300,
        -1,
        -1,
        0
      ],
      [
        540,
        555,
        110101,
        15,
        1,
        22,
        0
      ],
      [
        555,
        585,
        30101,
        30,
        1,
        22,
        0
      ],
      [
        585,
        645,
        110101,
        60,
        1,
        18,
        0
      ],
      [
        645,
        900,
        20101,
        255,
        1,
        18,
        0
      ],
      [
        900,
        915,
        180782,
        15,
        12,
        18,
        0
      ],
      [
        915,
        975,
        70104,
        60,
        7,
        18,
        0
      ],
      [
        975,
        990,
        180782,
        15,
        12,
        18,
        0
      ],
      [
        990,
        1560,
        20101,
        570,
        1,
        18,
        0
      ],
      [
        120,
        240,
        10101,
        120,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210403211429,
    WECANTRIL: 7,
    WEGENHTH: 1,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 2,
    WETYPICAL: 3,
    TUDIARYDAY_x: 7,
    TRHOLIDAY_x: 0,
    TEAGE: 46,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 40,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 27,
    TRDPFTPT_x: 1,
    TRERNWA_x: 115384,
    TRERNHLY: -1,
    TRTALONE: 975,
    TRTFAMILY: 45,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 1,
    TRSPPRES: 3,
    TESCHENR: 2,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        540,
        10101,
        300,
        -1,
        -1,
        0
      ],
      [
        540,
        555,
        110101,
        15,
        1,
        24,
        0
      ],
      [
        540,
        555,
        110101,
        15,
        1,
        24,
        0
      ],
      [
        540,
        555,
        110101,
        15,
        1,
        25,
        0
      ],
      [
        540,
        555,
        110101,
        15,
        1,
        25,
        0
      ],
      [
        540,
        555,
        110101,
        15,
        1,
        25,
        0
      ],
      [
        540,
        555,
        110101,
        15,
        1,
        25,
        0
      ],
      [
        540,
        555,
        110101,
        15,
        1,
        25,
        0
      ],
      [
        555,
        600,
        120312,
        45,
        1,
        24,
        0
      ],
      [
        555,
        600,
        120312,
        45,
        1,
        24,
        0
      ],
      [
        555,
        600,
        120312,
        45,
        1,
        25,
        0
      ],
      [
        555,
        600,
        120312,
        45,
        1,
        25,
        0
      ],
      [
        555,
        600,
        120312,
        45,
        1,
        25,
        0
      ],
      [
        555,
        600,
        120312,
        45,
        1,
        25,
        0
      ],
      [
        555,
        600,
        120312,
        45,
        1,
        25,
        0
      ],
      [
        600,
        660,
        10201,
        60,
        -1,
        -1,
        0
      ],
      [
        660,
        705,
        120312,
        45,
        1,
        24,
        0
      ],
      [
        660,
        705,
        120312,
        45,
        1,
        24,
        0
      ],
      [
        660,
        705,
        120312,
        45,
        1,
        25,
        0
      ],
      [
        660,
        705,
        120312,
        45,
        1,
        25,
        0
      ],
      [
        660,
        705,
        120312,
        45,
        1,
        25,
        0
      ],
      [
        660,
        705,
        120312,
        45,
        1,
        25,
        0
      ],
      [
        660,
        705,
        120312,
        45,
        1,
        25,
        0
      ],
      [
        705,
        735,
        120303,
        30,
        1,
        24,
        0
      ],
      [
        705,
        735,
        120303,
        30,
        1,
        24,
        0
      ],
      [
        705,
        735,
        120303,
        30,
        1,
        25,
        0
      ],
      [
        705,
        735,
        120303,
        30,
        1,
        25,
        0
      ],
      [
        705,
        735,
        120303,
        30,
        1,
        25,
        0
      ],
      [
        705,
        735,
        120303,
        30,
        1,
        25,
        0
      ],
      [
        705,
        735,
        120303,
        30,
        1,
        25,
        0
      ],
      [
        735,
        750,
        20201,
        15,
        1,
        24,
        0
      ],
      [
        750,
        765,
        110101,
        15,
        1,
        24,
        0
      ],
      [
        750,
        765,
        110101,
        15,
        1,
        25,
        0
      ],
      [
        750,
        765,
        110101,
        15,
        1,
        25,
        0
      ],
      [
        750,
        765,
        110101,
        15,
        1,
        25,
        0
      ],
      [
        765,
        780,
        10201,
        15,
        -1,
        -1,
        0
      ],
      [
        780,
        810,
        181202,
        30,
        13,
        24,
        0
      ],
      [
        780,
        810,
        181202,
        30,
        13,
        25,
        0
      ],
      [
        810,
        975,
        120201,
        165,
        3,
        52,
        0
      ],
      [
        810,
        975,
        120201,
        165,
        3,
        53,
        0
      ],
      [
        810,
        975,
        120201,
        165,
        3,
        24,
        0
      ],
      [
        810,
        975,
        120201,
        165,
        3,
        25,
        0
      ],
      [
        975,
        990,
        180280,
        15,
        13,
        24,
        0
      ],
      [
        975,
        990,
        180280,
        15,
        13,
        25,
        0
      ],
      [
        990,
        1020,
        20902,
        30,
        13,
        53,
        0
      ],
      [
        990,
        1020,
        20902,
        30,
        13,
        24,
        0
      ],
      [
        990,
        1020,
        20902,
        30,
        13,
        25,
        0
      ],
      [
        1020,
        1040,
        180782,
        20,
        13,
        24,
        0
      ],
      [
        1020,
        1040,
        180782,
        20,
        13,
        25,
        0
      ],
      [
        1040,
        1050,
        70104,
        10,
        7,
        24,
        0
      ],
      [
        1040,
        1050,
        70104,
        10,
        7,
        25,
        0
      ],
      [
        1050,
        1060,
        180782,
        10,
        7,
        24,
        0
      ],
      [
        1050,
        1060,
        180782,
        10,
        7,
        25,
        0
      ],
      [
        1060,
        1070,
        70104,
        10,
        7,
        24,
        0
      ],
      [
        1060,
        1070,
        70104,
        10,
        7,
        25,
        0
      ],
      [
        1070,
        1080,
        10201,
        10,
        -1,
        -1,
        0
      ],
      [
        1080,
        1090,
        120101,
        10,
        1,
        24,
        0
      ],
      [
        1080,
        1090,
        120101,
        10,
        1,
        25,
        0
      ],
      [
        1080,
        1090,
        120101,
        10,
        1,
        25,
        0
      ],
      [
        1090,
        1120,
        110101,
        30,
        1,
        24,
        0
      ],
      [
        1090,
        1120,
        110101,
        30,
        1,
        24,
        0
      ],
      [
        1120,
        1180,
        120301,
        60,
        1,
        18,
        0
      ],
      [
        1180,
        1210,
        120303,
        30,
        1,
        25,
        0
      ],
      [
        1180,
        1210,
        120303,
        30,
        1,
        25,
        0
      ],
      [
        1180,
        1210,
        120303,
        30,
        1,
        25,
        0
      ],
      [
        1180,
        1210,
        120303,
        30,
        1,
        25,
        0
      ],
      [
        1210,
        1245,
        120312,
        35,
        1,
        25,
        0
      ],
      [
        1210,
        1245,
        120312,
        35,
        1,
        25,
        0
      ],
      [
        1245,
        1248,
        181201,
        3,
        12,
        18,
        0
      ],
      [
        1248,
        1273,
        120101,
        25,
        3,
        18,
        0
      ],
      [
        1273,
        1276,
        181201,
        3,
        12,
        18,
        0
      ],
      [
        1276,
        1283,
        10201,
        7,
        -1,
        -1,
        0
      ],
      [
        1283,
        1390,
        120303,
        107,
        1,
        25,
        0
      ],
      [
        1390,
        1420,
        120301,
        30,
        1,
        18,
        0
      ],
      [
        1420,
        1680,
        10101,
        260,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210504210105,
    WECANTRIL: 8,
    WEGENHTH: 2,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 1,
    WETYPICAL: 2,
    TUDIARYDAY_x: 7,
    TRHOLIDAY_x: 0,
    TEAGE: 19,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 40,
    PEHSPNON: 1,
    PTDTRACE: 1,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 121,
    TRTFAMILY: 667,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 5,
    TRSPPRES: 3,
    TESCHENR: 1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        720,
        10101,
        480,
        -1,
        -1,
        0
      ],
      [
        720,
        735,
        10201,
        15,
        -1,
        -1,
        0
      ],
      [
        735,
        745,
        110101,
        10,
        1,
        18,
        0
      ],
      [
        745,
        865,
        120307,
        120,
        1,
        24,
        0
      ],
      [
        865,
        870,
        160101,
        5,
        1,
        24,
        0
      ],
      [
        870,
        880,
        10201,
        10,
        -1,
        -1,
        0
      ],
      [
        880,
        1080,
        120303,
        200,
        1,
        24,
        0
      ],
      [
        880,
        1080,
        120303,
        200,
        1,
        25,
        0
      ],
      [
        1080,
        1110,
        180782,
        30,
        13,
        24,
        0
      ],
      [
        1080,
        1110,
        180782,
        30,
        13,
        24,
        0
      ],
      [
        1080,
        1110,
        180782,
        30,
        13,
        25,
        0
      ],
      [
        1110,
        1170,
        70104,
        60,
        7,
        24,
        0
      ],
      [
        1110,
        1170,
        70104,
        60,
        7,
        24,
        0
      ],
      [
        1110,
        1170,
        70104,
        60,
        7,
        25,
        0
      ],
      [
        1170,
        1173,
        181101,
        3,
        14,
        24,
        0
      ],
      [
        1170,
        1173,
        181101,
        3,
        14,
        24,
        0
      ],
      [
        1170,
        1173,
        181101,
        3,
        14,
        25,
        0
      ],
      [
        1173,
        1218,
        110101,
        45,
        4,
        24,
        0
      ],
      [
        1173,
        1218,
        110101,
        45,
        4,
        24,
        0
      ],
      [
        1173,
        1218,
        110101,
        45,
        4,
        25,
        0
      ],
      [
        1218,
        1220,
        180782,
        2,
        13,
        24,
        0
      ],
      [
        1218,
        1220,
        180782,
        2,
        13,
        24,
        0
      ],
      [
        1218,
        1220,
        180782,
        2,
        13,
        25,
        0
      ],
      [
        1220,
        1250,
        70104,
        30,
        7,
        24,
        0
      ],
      [
        1220,
        1250,
        70104,
        30,
        7,
        24,
        0
      ],
      [
        1220,
        1250,
        70104,
        30,
        7,
        25,
        0
      ],
      [
        1250,
        1265,
        180782,
        15,
        13,
        24,
        0
      ],
      [
        1250,
        1265,
        180782,
        15,
        13,
        24,
        0
      ],
      [
        1250,
        1265,
        180782,
        15,
        13,
        25,
        0
      ],
      [
        1265,
        1325,
        120303,
        60,
        1,
        24,
        0
      ],
      [
        1325,
        1385,
        120307,
        60,
        1,
        18,
        0
      ],
      [
        1385,
        1680,
        10101,
        295,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210706210299,
    WECANTRIL: 7,
    WEGENHTH: 2,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 1,
    WETYPICAL: 3,
    TUDIARYDAY_x: 4,
    TRHOLIDAY_x: 0,
    TEAGE: 17,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 37,
    PEHSPNON: 2,
    PTDTRACE: 8,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 70,
    TRTFAMILY: 570,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 2,
    TRSPPRES: 3,
    TESCHENR: 2,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        450,
        10101,
        210,
        -1,
        -1,
        0
      ],
      [
        450,
        570,
        120308,
        120,
        1,
        20,
        0
      ],
      [
        570,
        690,
        10201,
        120,
        -1,
        -1,
        0
      ],
      [
        690,
        720,
        20102,
        30,
        1,
        20,
        0
      ],
      [
        720,
        810,
        20203,
        90,
        1,
        20,
        0
      ],
      [
        810,
        840,
        110101,
        30,
        1,
        18,
        0
      ],
      [
        840,
        960,
        120312,
        120,
        1,
        20,
        0
      ],
      [
        960,
        1050,
        20902,
        90,
        1,
        20,
        0
      ],
      [
        1050,
        1080,
        20201,
        30,
        1,
        18,
        0
      ],
      [
        1080,
        1140,
        110101,
        60,
        1,
        18,
        0
      ],
      [
        1140,
        1230,
        20901,
        90,
        1,
        18,
        0
      ],
      [
        1230,
        1320,
        120312,
        90,
        1,
        18,
        0
      ],
      [
        1320,
        1560,
        10101,
        240,
        -1,
        -1,
        0
      ],
      [
        120,
        165,
        120301,
        45,
        1,
        18,
        0
      ],
      [
        165,
        240,
        10101,
        75,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20211212210536,
    WECANTRIL: 8,
    WEGENHTH: 4,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 3,
    WETYPICAL: 2,
    TUDIARYDAY_x: 1,
    TRHOLIDAY_x: 0,
    TEAGE: 65,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 42,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 345,
    TRTFAMILY: 450,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 1,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        420,
        10101,
        180,
        -1,
        -1,
        0
      ],
      [
        420,
        480,
        120303,
        60,
        1,
        20,
        0
      ],
      [
        420,
        480,
        120303,
        60,
        1,
        22,
        0
      ],
      [
        480,
        510,
        110101,
        30,
        1,
        20,
        0
      ],
      [
        480,
        510,
        110101,
        30,
        1,
        22,
        0
      ],
      [
        510,
        515,
        180701,
        5,
        12,
        20,
        0
      ],
      [
        510,
        515,
        180701,
        5,
        12,
        22,
        0
      ],
      [
        515,
        695,
        70101,
        180,
        6,
        20,
        0
      ],
      [
        515,
        695,
        70101,
        180,
        6,
        22,
        0
      ],
      [
        695,
        700,
        180701,
        5,
        12,
        20,
        0
      ],
      [
        695,
        700,
        180701,
        5,
        12,
        22,
        0
      ],
      [
        700,
        702,
        181301,
        2,
        14,
        20,
        0
      ],
      [
        700,
        702,
        181301,
        2,
        14,
        22,
        0
      ],
      [
        702,
        882,
        130132,
        180,
        9,
        20,
        0
      ],
      [
        702,
        882,
        130132,
        180,
        9,
        22,
        0
      ],
      [
        882,
        884,
        181301,
        2,
        4,
        20,
        0
      ],
      [
        882,
        884,
        181301,
        2,
        4,
        22,
        0
      ],
      [
        884,
        889,
        30101,
        5,
        1,
        20,
        0
      ],
      [
        884,
        889,
        30101,
        5,
        1,
        22,
        0
      ],
      [
        889,
        1009,
        10101,
        120,
        -1,
        -1,
        0
      ],
      [
        1009,
        1069,
        120303,
        60,
        1,
        20,
        0
      ],
      [
        1069,
        1129,
        20201,
        60,
        1,
        18,
        0
      ],
      [
        1129,
        1174,
        110101,
        45,
        1,
        20,
        0
      ],
      [
        1129,
        1174,
        110101,
        45,
        1,
        22,
        0
      ],
      [
        1174,
        1204,
        30101,
        30,
        1,
        22,
        0
      ],
      [
        1204,
        1230,
        120303,
        26,
        1,
        20,
        0
      ],
      [
        1204,
        1230,
        120303,
        26,
        1,
        22,
        0
      ],
      [
        1230,
        1260,
        30101,
        30,
        1,
        22,
        0
      ],
      [
        1260,
        1320,
        120303,
        60,
        1,
        20,
        0
      ],
      [
        1320,
        1680,
        10101,
        360,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210807210915,
    WECANTRIL: 8,
    WEGENHTH: 2,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 2,
    WETYPICAL: 2,
    TUDIARYDAY_x: 1,
    TRHOLIDAY_x: 0,
    TEAGE: 35,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 44,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 40,
    TRDPFTPT_x: 1,
    TRERNWA_x: 111538,
    TRERNHLY: -1,
    TRTALONE: 60,
    TRTFAMILY: 720,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 1,
    TRSPPRES: 1,
    TESCHENR: 2,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        450,
        10101,
        210,
        -1,
        -1,
        0
      ],
      [
        450,
        455,
        10201,
        5,
        -1,
        -1,
        0
      ],
      [
        455,
        470,
        10301,
        15,
        1,
        19,
        0
      ],
      [
        470,
        480,
        20201,
        10,
        1,
        19,
        0
      ],
      [
        480,
        490,
        110101,
        10,
        1,
        19,
        0
      ],
      [
        490,
        530,
        140102,
        40,
        1,
        19,
        0
      ],
      [
        530,
        560,
        20102,
        30,
        1,
        19,
        0
      ],
      [
        560,
        590,
        20101,
        30,
        1,
        19,
        0
      ],
      [
        590,
        690,
        20101,
        100,
        1,
        19,
        0
      ],
      [
        690,
        750,
        120303,
        60,
        1,
        19,
        0
      ],
      [
        750,
        810,
        20902,
        60,
        1,
        19,
        0
      ],
      [
        810,
        840,
        110101,
        30,
        1,
        19,
        0
      ],
      [
        840,
        870,
        20203,
        30,
        1,
        19,
        0
      ],
      [
        870,
        900,
        20101,
        30,
        1,
        19,
        0
      ],
      [
        900,
        930,
        20801,
        30,
        1,
        19,
        0
      ],
      [
        930,
        1050,
        20103,
        120,
        1,
        19,
        0
      ],
      [
        1050,
        1110,
        120312,
        60,
        1,
        19,
        0
      ],
      [
        1110,
        1140,
        20201,
        30,
        1,
        19,
        0
      ],
      [
        1140,
        1200,
        120101,
        60,
        3,
        52,
        0
      ],
      [
        1200,
        1230,
        120303,
        30,
        1,
        19,
        0
      ],
      [
        1230,
        1260,
        120101,
        30,
        3,
        52,
        0
      ],
      [
        1260,
        1290,
        20103,
        30,
        1,
        19,
        0
      ],
      [
        1290,
        1320,
        140102,
        30,
        1,
        19,
        0
      ],
      [
        1320,
        1335,
        10301,
        15,
        1,
        19,
        0
      ],
      [
        1335,
        1350,
        10201,
        15,
        -1,
        -1,
        0
      ],
      [
        1350,
        1680,
        10101,
        330,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20211212211399,
    WECANTRIL: 7,
    WEGENHTH: 3,
    WEHBP: 1,
    WEPAINMD: 1,
    WEREST: 1,
    WETYPICAL: 2,
    TUDIARYDAY_x: 2,
    TRHOLIDAY_x: 0,
    TEAGE: 85,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 37,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 790,
    TRTFAMILY: 90,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 3,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        300,
        10102,
        60,
        -1,
        -1,
        0
      ],
      [
        300,
        390,
        120303,
        90,
        1,
        19,
        0
      ],
      [
        390,
        405,
        181202,
        15,
        15,
        19,
        0
      ],
      [
        405,
        420,
        120202,
        15,
        11,
        19,
        0
      ],
      [
        420,
        425,
        181202,
        5,
        15,
        19,
        0
      ],
      [
        425,
        440,
        110101,
        15,
        1,
        19,
        0
      ],
      [
        440,
        570,
        120303,
        130,
        1,
        19,
        0
      ],
      [
        570,
        615,
        180701,
        45,
        14,
        19,
        0
      ],
      [
        615,
        635,
        70101,
        20,
        6,
        19,
        0
      ],
      [
        635,
        680,
        180701,
        45,
        14,
        19,
        0
      ],
      [
        680,
        685,
        20104,
        5,
        1,
        19,
        0
      ],
      [
        685,
        720,
        20201,
        35,
        1,
        19,
        0
      ],
      [
        720,
        730,
        110101,
        10,
        1,
        19,
        0
      ],
      [
        730,
        1020,
        120303,
        290,
        1,
        19,
        0
      ],
      [
        1020,
        1030,
        10201,
        10,
        -1,
        -1,
        0
      ],
      [
        1030,
        1230,
        120303,
        200,
        1,
        19,
        0
      ],
      [
        1230,
        1440,
        10101,
        210,
        -1,
        -1,
        0
      ],
      [
        0,
        60,
        10101,
        60,
        -1,
        -1,
        0
      ],
      [
        60,
        180,
        10102,
        120,
        -1,
        -1,
        0
      ],
      [
        180,
        240,
        10101,
        60,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210706212196,
    WECANTRIL: 0,
    WEGENHTH: 5,
    WEHBP: 1,
    WEPAINMD: 1,
    WEREST: 4,
    WETYPICAL: 2,
    TUDIARYDAY_x: 1,
    TRHOLIDAY_x: 0,
    TEAGE: 62,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 39,
    PEHSPNON: 1,
    PTDTRACE: 1,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 920,
    TRTFAMILY: 0,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 3,
    TESCHENR: -1,
    happy_group: 1
  },
  {
    activity: [
      [
        240,
        570,
        10101,
        330,
        -1,
        -1,
        0
      ],
      [
        570,
        720,
        20102,
        150,
        1,
        18,
        0
      ],
      [
        720,
        730,
        110101,
        10,
        1,
        18,
        0
      ],
      [
        730,
        880,
        20301,
        150,
        1,
        18,
        0
      ],
      [
        880,
        1140,
        20901,
        260,
        1,
        18,
        0
      ],
      [
        1140,
        1150,
        180782,
        10,
        12,
        24,
        0
      ],
      [
        1150,
        1170,
        70105,
        20,
        7,
        24,
        0
      ],
      [
        1170,
        1190,
        70104,
        20,
        7,
        24,
        0
      ],
      [
        1190,
        1200,
        180782,
        10,
        12,
        24,
        0
      ],
      [
        1200,
        1245,
        20201,
        45,
        1,
        18,
        0
      ],
      [
        1245,
        1260,
        110101,
        15,
        1,
        20,
        0
      ],
      [
        1245,
        1260,
        110101,
        15,
        1,
        22,
        0
      ],
      [
        1260,
        1280,
        120307,
        20,
        1,
        18,
        0
      ],
      [
        1280,
        1470,
        120303,
        190,
        1,
        18,
        0
      ],
      [
        30,
        75,
        160102,
        45,
        1,
        18,
        0
      ],
      [
        75,
        120,
        120312,
        45,
        1,
        20,
        0
      ],
      [
        120,
        240,
        10101,
        120,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210705211359,
    WECANTRIL: 8,
    WEGENHTH: 3,
    WEHBP: 1,
    WEPAINMD: 2,
    WEREST: 4,
    WETYPICAL: 2,
    TUDIARYDAY_x: 3,
    TRHOLIDAY_x: 0,
    TEAGE: 54,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 39,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 870,
    TRTFAMILY: 120,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 1,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        510,
        10101,
        270,
        -1,
        -1,
        0
      ],
      [
        510,
        512,
        10201,
        2,
        -1,
        -1,
        0
      ],
      [
        512,
        660,
        120303,
        148,
        1,
        19,
        0
      ],
      [
        660,
        680,
        180482,
        20,
        14,
        19,
        0
      ],
      [
        680,
        700,
        40506,
        20,
        3,
        19,
        0
      ],
      [
        700,
        710,
        180701,
        10,
        14,
        19,
        0
      ],
      [
        710,
        715,
        70101,
        5,
        6,
        19,
        0
      ],
      [
        715,
        730,
        180782,
        15,
        14,
        19,
        0
      ],
      [
        730,
        745,
        70104,
        15,
        7,
        19,
        0
      ],
      [
        745,
        748,
        181283,
        3,
        14,
        19,
        0
      ],
      [
        748,
        838,
        120308,
        90,
        10,
        19,
        0
      ],
      [
        838,
        849,
        181283,
        11,
        14,
        19,
        0
      ],
      [
        849,
        894,
        110101,
        45,
        1,
        19,
        0
      ],
      [
        894,
        895,
        20903,
        1,
        1,
        19,
        0
      ],
      [
        895,
        915,
        181283,
        20,
        14,
        19,
        0
      ],
      [
        915,
        990,
        120308,
        75,
        10,
        19,
        0
      ],
      [
        990,
        992,
        180782,
        2,
        14,
        19,
        0
      ],
      [
        992,
        997,
        70104,
        5,
        7,
        19,
        0
      ],
      [
        997,
        999,
        181283,
        2,
        14,
        19,
        0
      ],
      [
        999,
        1110,
        120308,
        111,
        10,
        19,
        0
      ],
      [
        1110,
        1130,
        181283,
        20,
        14,
        19,
        0
      ],
      [
        1130,
        1132,
        10201,
        2,
        -1,
        -1,
        0
      ],
      [
        1132,
        1320,
        120303,
        188,
        1,
        19,
        0
      ],
      [
        1320,
        1680,
        10101,
        360,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210302211025,
    WECANTRIL: 7,
    WEGENHTH: 3,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 2,
    WETYPICAL: 2,
    TUDIARYDAY_x: 3,
    TRHOLIDAY_x: 0,
    TEAGE: 49,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 39,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 806,
    TRTFAMILY: 0,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 3,
    TESCHENR: 2,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        450,
        10101,
        210,
        -1,
        -1,
        0
      ],
      [
        450,
        495,
        10201,
        45,
        -1,
        -1,
        0
      ],
      [
        495,
        555,
        110101,
        60,
        1,
        20,
        0
      ],
      [
        555,
        585,
        20203,
        30,
        1,
        18,
        0
      ],
      [
        585,
        720,
        120303,
        135,
        1,
        20,
        0
      ],
      [
        720,
        840,
        40199,
        120,
        1,
        18,
        0
      ],
      [
        840,
        960,
        20201,
        120,
        1,
        20,
        0
      ],
      [
        960,
        990,
        110101,
        30,
        1,
        20,
        0
      ],
      [
        990,
        1050,
        40199,
        60,
        1,
        20,
        0
      ],
      [
        1050,
        1290,
        120303,
        240,
        1,
        20,
        0
      ],
      [
        1290,
        1680,
        10101,
        390,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210303211548,
    WECANTRIL: 2,
    WEGENHTH: 4,
    WEHBP: 1,
    WEPAINMD: 2,
    WEREST: 1,
    WETYPICAL: 3,
    TUDIARYDAY_x: 2,
    TRHOLIDAY_x: 0,
    TEAGE: 65,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 43,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 150,
    TRTFAMILY: 645,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 1,
    TESCHENR: -1,
    happy_group: 1
  },
  {
    activity: [
      [
        240,
        540,
        10101,
        300,
        -1,
        -1,
        0
      ],
      [
        540,
        547,
        10301,
        7,
        1,
        21,
        0
      ],
      [
        547,
        567,
        110101,
        20,
        1,
        21,
        0
      ],
      [
        567,
        657,
        120312,
        90,
        1,
        21,
        0
      ],
      [
        657,
        667,
        180802,
        10,
        12,
        18,
        0
      ],
      [
        667,
        669,
        80201,
        2,
        30,
        18,
        0
      ],
      [
        669,
        673,
        180782,
        4,
        12,
        18,
        0
      ],
      [
        673,
        688,
        70104,
        15,
        7,
        18,
        0
      ],
      [
        688,
        703,
        180782,
        15,
        12,
        18,
        0
      ],
      [
        703,
        870,
        120303,
        167,
        1,
        21,
        0
      ],
      [
        870,
        885,
        20201,
        15,
        1,
        21,
        0
      ],
      [
        885,
        915,
        110101,
        30,
        1,
        21,
        0
      ],
      [
        915,
        1440,
        120303,
        525,
        1,
        21,
        0
      ],
      [
        0,
        240,
        10101,
        240,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210707212133,
    WECANTRIL: 10,
    WEGENHTH: 3,
    WEHBP: 1,
    WEPAINMD: 1,
    WEREST: 1,
    WETYPICAL: 2,
    TUDIARYDAY_x: 4,
    TRHOLIDAY_x: 0,
    TEAGE: 64,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 43,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 46,
    TRTFAMILY: 0,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 2,
    TESCHENR: -1,
    happy_group: 3
  },
  {
    activity: [
      [
        240,
        345,
        10101,
        105,
        -1,
        -1,
        0
      ],
      [
        345,
        348,
        20904,
        3,
        1,
        20,
        0
      ],
      [
        348,
        368,
        30101,
        20,
        1,
        22,
        0
      ],
      [
        368,
        600,
        120303,
        232,
        1,
        22,
        0
      ],
      [
        600,
        630,
        120101,
        30,
        1,
        54,
        0
      ],
      [
        600,
        630,
        120101,
        30,
        1,
        20,
        0
      ],
      [
        600,
        630,
        120101,
        30,
        1,
        22,
        0
      ],
      [
        630,
        633,
        181202,
        3,
        14,
        54,
        0
      ],
      [
        630,
        633,
        181202,
        3,
        14,
        20,
        0
      ],
      [
        630,
        633,
        181202,
        3,
        14,
        22,
        0
      ],
      [
        633,
        1080,
        120201,
        447,
        3,
        51,
        0
      ],
      [
        633,
        1080,
        120201,
        447,
        3,
        52,
        0
      ],
      [
        633,
        1080,
        120201,
        447,
        3,
        53,
        0
      ],
      [
        633,
        1080,
        120201,
        447,
        3,
        54,
        0
      ],
      [
        633,
        1080,
        120201,
        447,
        3,
        56,
        0
      ],
      [
        633,
        1080,
        120201,
        447,
        3,
        20,
        0
      ],
      [
        633,
        1080,
        120201,
        447,
        3,
        22,
        0
      ],
      [
        1080,
        1083,
        181202,
        3,
        13,
        53,
        0
      ],
      [
        1080,
        1083,
        181202,
        3,
        13,
        20,
        0
      ],
      [
        1080,
        1083,
        181202,
        3,
        13,
        22,
        0
      ],
      [
        1083,
        1093,
        30101,
        10,
        1,
        22,
        0
      ],
      [
        1093,
        1103,
        20681,
        10,
        1,
        18,
        0
      ],
      [
        1103,
        1170,
        120101,
        67,
        1,
        51,
        0
      ],
      [
        1103,
        1170,
        120101,
        67,
        1,
        20,
        0
      ],
      [
        1103,
        1170,
        120101,
        67,
        1,
        22,
        0
      ],
      [
        1170,
        1180,
        30101,
        10,
        1,
        22,
        0
      ],
      [
        1180,
        1230,
        120101,
        50,
        1,
        51,
        0
      ],
      [
        1180,
        1230,
        120101,
        50,
        1,
        20,
        0
      ],
      [
        1230,
        1290,
        70104,
        60,
        1,
        20,
        0
      ],
      [
        1290,
        1350,
        120303,
        60,
        1,
        20,
        0
      ],
      [
        1350,
        1680,
        10101,
        330,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20211109210742,
    WECANTRIL: 10,
    WEGENHTH: 2,
    WEHBP: 1,
    WEPAINMD: 2,
    WEREST: 2,
    WETYPICAL: 1,
    TUDIARYDAY_x: 1,
    TRHOLIDAY_x: 0,
    TEAGE: 33,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 46,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 22,
    TRDPFTPT_x: 1,
    TRERNWA_x: 245192,
    TRERNHLY: -1,
    TRTALONE: 10,
    TRTFAMILY: 995,
    TRTFRIEND: 480,
    TRCHILDNUM_x: 1,
    TRSPPRES: 1,
    TESCHENR: 2,
    happy_group: 3
  },
  {
    activity: [
      [
        240,
        480,
        10101,
        240,
        -1,
        -1,
        0
      ],
      [
        480,
        500,
        20501,
        20,
        1,
        18,
        0
      ],
      [
        500,
        510,
        110101,
        10,
        1,
        18,
        0
      ],
      [
        510,
        570,
        120303,
        60,
        1,
        18,
        0
      ],
      [
        570,
        630,
        130131,
        60,
        9,
        18,
        0
      ],
      [
        630,
        660,
        120303,
        30,
        1,
        18,
        0
      ],
      [
        660,
        780,
        20501,
        120,
        1,
        18,
        0
      ],
      [
        780,
        800,
        20903,
        20,
        1,
        18,
        0
      ],
      [
        800,
        830,
        110101,
        30,
        1,
        18,
        0
      ],
      [
        830,
        890,
        20902,
        60,
        1,
        18,
        0
      ],
      [
        890,
        965,
        160101,
        75,
        1,
        18,
        0
      ],
      [
        965,
        995,
        130131,
        30,
        9,
        18,
        0
      ],
      [
        995,
        1025,
        160101,
        30,
        1,
        18,
        0
      ],
      [
        1025,
        1055,
        120303,
        30,
        1,
        18,
        0
      ],
      [
        1055,
        1100,
        110101,
        45,
        1,
        20,
        0
      ],
      [
        1100,
        1120,
        20501,
        20,
        1,
        20,
        0
      ],
      [
        1120,
        1150,
        160101,
        30,
        1,
        18,
        0
      ],
      [
        1150,
        1350,
        120303,
        200,
        1,
        18,
        0
      ],
      [
        1350,
        1370,
        20203,
        20,
        1,
        18,
        0
      ],
      [
        1370,
        1415,
        130104,
        45,
        1,
        18,
        0
      ],
      [
        1415,
        1680,
        10101,
        265,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210404210676,
    WECANTRIL: 8,
    WEGENHTH: 2,
    WEHBP: 1,
    WEPAINMD: 2,
    WEREST: 1,
    WETYPICAL: 2,
    TUDIARYDAY_x: 1,
    TRHOLIDAY_x: 0,
    TEAGE: 71,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 44,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 870,
    TRTFAMILY: 65,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 1,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        360,
        10101,
        120,
        -1,
        -1,
        0
      ],
      [
        360,
        420,
        10201,
        60,
        -1,
        -1,
        0
      ],
      [
        420,
        450,
        180501,
        30,
        12,
        18,
        0
      ],
      [
        450,
        1050,
        50101,
        600,
        2,
        57,
        0
      ],
      [
        450,
        1050,
        50101,
        600,
        2,
        61,
        0
      ],
      [
        1050,
        1080,
        180501,
        30,
        12,
        18,
        0
      ],
      [
        1080,
        1090,
        110101,
        10,
        1,
        20,
        0
      ],
      [
        1080,
        1090,
        110101,
        10,
        1,
        22,
        0
      ],
      [
        1080,
        1090,
        110101,
        10,
        1,
        22,
        0
      ],
      [
        1090,
        1260,
        50101,
        170,
        1,
        20,
        0
      ],
      [
        1260,
        1320,
        120303,
        60,
        1,
        20,
        0
      ],
      [
        1320,
        1680,
        10101,
        360,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20211210212379,
    WECANTRIL: 8,
    WEGENHTH: 3,
    WEHBP: 1,
    WEPAINMD: 2,
    WEREST: 2,
    WETYPICAL: 2,
    TUDIARYDAY_x: 2,
    TRHOLIDAY_x: 0,
    TEAGE: 35,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 44,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 40,
    TRDPFTPT_x: 1,
    TRERNWA_x: 207692,
    TRERNHLY: -1,
    TRTALONE: 60,
    TRTFAMILY: 70,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 2,
    TRSPPRES: 1,
    TESCHENR: 2,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        480,
        10101,
        240,
        -1,
        -1,
        0
      ],
      [
        480,
        510,
        110101,
        30,
        1,
        18,
        0
      ],
      [
        510,
        515,
        189999,
        5,
        12,
        18,
        0
      ],
      [
        515,
        560,
        500101,
        45,
        31,
        58,
        0
      ],
      [
        560,
        565,
        189999,
        5,
        12,
        18,
        0
      ],
      [
        565,
        585,
        10201,
        20,
        -1,
        -1,
        0
      ],
      [
        585,
        720,
        50101,
        135,
        1,
        18,
        0
      ],
      [
        720,
        750,
        110101,
        30,
        1,
        18,
        0
      ],
      [
        750,
        900,
        50101,
        150,
        1,
        18,
        0
      ],
      [
        900,
        915,
        180381,
        15,
        12,
        18,
        0
      ],
      [
        915,
        945,
        30112,
        30,
        8,
        18,
        0
      ],
      [
        945,
        960,
        180381,
        15,
        12,
        22,
        0
      ],
      [
        960,
        1020,
        50101,
        60,
        1,
        18,
        0
      ],
      [
        1020,
        1040,
        20201,
        20,
        1,
        22,
        0
      ],
      [
        1040,
        1080,
        120303,
        40,
        1,
        20,
        0
      ],
      [
        1080,
        1200,
        60102,
        120,
        1,
        18,
        0
      ],
      [
        1200,
        1260,
        120303,
        60,
        1,
        20,
        0
      ],
      [
        1200,
        1260,
        120303,
        60,
        1,
        22,
        0
      ],
      [
        1260,
        1320,
        120303,
        60,
        1,
        20,
        0
      ],
      [
        1320,
        1680,
        10101,
        360,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210403211736,
    WECANTRIL: 8,
    WEGENHTH: 2,
    WEHBP: 1,
    WEPAINMD: 2,
    WEREST: 2,
    WETYPICAL: 2,
    TUDIARYDAY_x: 5,
    TRHOLIDAY_x: 0,
    TEAGE: 51,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 44,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 49,
    TRDPFTPT_x: 1,
    TRERNWA_x: 105769,
    TRERNHLY: -1,
    TRTALONE: 235,
    TRTFAMILY: 195,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 1,
    TRSPPRES: 1,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        600,
        10101,
        360,
        -1,
        -1,
        0
      ],
      [
        600,
        660,
        10201,
        60,
        -1,
        -1,
        0
      ],
      [
        660,
        780,
        181101,
        120,
        12,
        20,
        0
      ],
      [
        780,
        840,
        110101,
        60,
        9,
        20,
        0
      ],
      [
        840,
        1020,
        181101,
        180,
        12,
        20,
        0
      ],
      [
        1020,
        1500,
        120303,
        480,
        1,
        20,
        0
      ],
      [
        60,
        240,
        10101,
        180,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210908211563,
    WECANTRIL: 8,
    WEGENHTH: 2,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 1,
    WETYPICAL: 2,
    TUDIARYDAY_x: 1,
    TRHOLIDAY_x: 0,
    TEAGE: 27,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 39,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 23,
    TRDPFTPT_x: 1,
    TRERNWA_x: 100450,
    TRERNHLY: 2450,
    TRTALONE: 0,
    TRTFAMILY: 840,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 1,
    TESCHENR: 2,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        600,
        10101,
        360,
        -1,
        -1,
        0
      ],
      [
        600,
        690,
        10201,
        90,
        -1,
        -1,
        0
      ],
      [
        690,
        695,
        180482,
        5,
        12,
        18,
        0
      ],
      [
        695,
        705,
        40507,
        10,
        3,
        18,
        0
      ],
      [
        705,
        725,
        181201,
        20,
        4,
        53,
        0
      ],
      [
        725,
        735,
        120501,
        10,
        4,
        53,
        0
      ],
      [
        725,
        735,
        120501,
        10,
        4,
        54,
        0
      ],
      [
        735,
        765,
        120101,
        30,
        4,
        53,
        0
      ],
      [
        735,
        765,
        120101,
        30,
        4,
        54,
        0
      ],
      [
        765,
        900,
        110101,
        135,
        4,
        53,
        0
      ],
      [
        765,
        900,
        110101,
        135,
        4,
        54,
        0
      ],
      [
        900,
        1125,
        120101,
        225,
        4,
        53,
        0
      ],
      [
        900,
        1125,
        120101,
        225,
        4,
        54,
        0
      ],
      [
        1125,
        1140,
        181201,
        15,
        12,
        53,
        0
      ],
      [
        1140,
        1380,
        120101,
        240,
        4,
        53,
        0
      ],
      [
        1140,
        1380,
        120101,
        240,
        4,
        54,
        0
      ],
      [
        1380,
        1400,
        180482,
        20,
        12,
        53,
        0
      ],
      [
        1400,
        1402,
        40507,
        2,
        89,
        53,
        0
      ],
      [
        1402,
        1407,
        180482,
        5,
        12,
        18,
        0
      ],
      [
        1407,
        1422,
        160101,
        15,
        1,
        18,
        0
      ],
      [
        1422,
        1680,
        10101,
        258,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210403211874,
    WECANTRIL: 7,
    WEGENHTH: 4,
    WEHBP: 1,
    WEPAINMD: 1,
    WEREST: 1,
    WETYPICAL: 2,
    TUDIARYDAY_x: 7,
    TRHOLIDAY_x: 0,
    TEAGE: 56,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 40,
    PEHSPNON: 2,
    PTDTRACE: 2,
    TRDTIND1: 32,
    TRDPFTPT_x: 1,
    TRERNWA_x: 136538,
    TRERNHLY: -1,
    TRTALONE: 35,
    TRTFAMILY: 697,
    TRTFRIEND: 640,
    TRCHILDNUM_x: 0,
    TRSPPRES: 3,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        315,
        10101,
        75,
        -1,
        -1,
        0
      ],
      [
        315,
        330,
        110101,
        15,
        1,
        18,
        0
      ],
      [
        330,
        360,
        120301,
        30,
        1,
        18,
        0
      ],
      [
        360,
        390,
        10201,
        30,
        -1,
        -1,
        0
      ],
      [
        390,
        400,
        20681,
        10,
        1,
        18,
        0
      ],
      [
        400,
        402,
        30101,
        2,
        1,
        22,
        0
      ],
      [
        402,
        420,
        30101,
        18,
        1,
        22,
        0
      ],
      [
        420,
        445,
        20902,
        25,
        1,
        18,
        0
      ],
      [
        445,
        465,
        180502,
        20,
        12,
        18,
        0
      ],
      [
        465,
        480,
        50204,
        15,
        2,
        18,
        0
      ],
      [
        480,
        570,
        50101,
        90,
        2,
        61,
        0
      ],
      [
        570,
        590,
        180804,
        20,
        12,
        18,
        0
      ],
      [
        590,
        680,
        80401,
        90,
        11,
        18,
        0
      ],
      [
        680,
        695,
        180501,
        15,
        12,
        18,
        0
      ],
      [
        695,
        875,
        50101,
        180,
        1,
        61,
        0
      ],
      [
        875,
        890,
        180804,
        15,
        12,
        18,
        0
      ],
      [
        890,
        930,
        80403,
        40,
        11,
        18,
        0
      ],
      [
        930,
        950,
        80401,
        20,
        11,
        18,
        0
      ],
      [
        950,
        970,
        180782,
        20,
        12,
        18,
        0
      ],
      [
        970,
        973,
        70103,
        3,
        1,
        18,
        0
      ],
      [
        973,
        978,
        180381,
        5,
        12,
        18,
        0
      ],
      [
        978,
        983,
        30112,
        5,
        3,
        22,
        0
      ],
      [
        983,
        988,
        180381,
        5,
        12,
        22,
        0
      ],
      [
        988,
        993,
        20902,
        5,
        1,
        22,
        0
      ],
      [
        993,
        998,
        20104,
        5,
        1,
        18,
        0
      ],
      [
        998,
        1028,
        110101,
        30,
        1,
        22,
        0
      ],
      [
        1028,
        1038,
        20681,
        10,
        1,
        18,
        0
      ],
      [
        1038,
        1053,
        20203,
        15,
        1,
        18,
        0
      ],
      [
        1053,
        1141,
        120303,
        88,
        1,
        22,
        0
      ],
      [
        1141,
        1171,
        30101,
        30,
        1,
        18,
        0
      ],
      [
        1171,
        1181,
        30102,
        10,
        1,
        22,
        0
      ],
      [
        1181,
        1186,
        30101,
        5,
        1,
        18,
        0
      ],
      [
        1186,
        1196,
        20102,
        10,
        1,
        18,
        0
      ],
      [
        1196,
        1260,
        500101,
        64,
        1,
        18,
        0
      ],
      [
        1260,
        1680,
        10101,
        420,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210302210753,
    WECANTRIL: 7,
    WEGENHTH: 3,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 4,
    WETYPICAL: 2,
    TUDIARYDAY_x: 6,
    TRHOLIDAY_x: 0,
    TEAGE: 39,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 43,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 41,
    TRDPFTPT_x: 1,
    TRERNWA_x: 135e3,
    TRERNHLY: 4500,
    TRTALONE: 482,
    TRTFAMILY: 163,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 1,
    TRSPPRES: 1,
    TESCHENR: 2,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        360,
        10101,
        120,
        -1,
        -1,
        0
      ],
      [
        360,
        420,
        500101,
        60,
        1,
        20,
        0
      ],
      [
        360,
        420,
        500101,
        60,
        1,
        22,
        0
      ],
      [
        360,
        420,
        500101,
        60,
        1,
        22,
        0
      ],
      [
        420,
        450,
        10201,
        30,
        -1,
        -1,
        0
      ],
      [
        450,
        470,
        180381,
        20,
        12,
        22,
        0
      ],
      [
        470,
        475,
        30112,
        5,
        8,
        22,
        0
      ],
      [
        475,
        485,
        180501,
        10,
        12,
        18,
        0
      ],
      [
        485,
        1110,
        50101,
        625,
        2,
        61,
        0
      ],
      [
        1110,
        1130,
        180501,
        20,
        12,
        18,
        0
      ],
      [
        1130,
        1160,
        20201,
        30,
        1,
        20,
        0
      ],
      [
        1130,
        1160,
        20201,
        30,
        1,
        22,
        0
      ],
      [
        1130,
        1160,
        20201,
        30,
        1,
        22,
        0
      ],
      [
        1160,
        1180,
        110101,
        20,
        1,
        20,
        0
      ],
      [
        1160,
        1180,
        110101,
        20,
        1,
        22,
        0
      ],
      [
        1160,
        1180,
        110101,
        20,
        1,
        22,
        0
      ],
      [
        1180,
        1260,
        120303,
        80,
        1,
        20,
        0
      ],
      [
        1180,
        1260,
        120303,
        80,
        1,
        22,
        0
      ],
      [
        1180,
        1260,
        120303,
        80,
        1,
        22,
        0
      ],
      [
        1260,
        1680,
        10101,
        420,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210604210804,
    WECANTRIL: 7,
    WEGENHTH: 3,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 2,
    WETYPICAL: 3,
    TUDIARYDAY_x: 6,
    TRHOLIDAY_x: 0,
    TEAGE: 38,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 43,
    PEHSPNON: 2,
    PTDTRACE: 2,
    TRDTIND1: 32,
    TRDPFTPT_x: 1,
    TRERNWA_x: 125e3,
    TRERNHLY: -1,
    TRTALONE: 30,
    TRTFAMILY: 215,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 2,
    TRSPPRES: 1,
    TESCHENR: 2,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        780,
        10101,
        540,
        -1,
        -1,
        0
      ],
      [
        780,
        795,
        110101,
        15,
        1,
        19,
        0
      ],
      [
        795,
        1140,
        20101,
        345,
        1,
        19,
        0
      ],
      [
        1140,
        1200,
        110101,
        60,
        1,
        19,
        0
      ],
      [
        1200,
        1380,
        120303,
        180,
        1,
        19,
        0
      ],
      [
        1380,
        1680,
        10101,
        300,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210504210950,
    WECANTRIL: 8,
    WEGENHTH: 2,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 1,
    WETYPICAL: 2,
    TUDIARYDAY_x: 7,
    TRHOLIDAY_x: 0,
    TEAGE: 67,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 43,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 600,
    TRTFAMILY: 0,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 3,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        600,
        10101,
        360,
        -1,
        -1,
        0
      ],
      [
        600,
        750,
        120303,
        150,
        1,
        19,
        0
      ],
      [
        750,
        752,
        180701,
        2,
        12,
        19,
        0
      ],
      [
        752,
        782,
        70101,
        30,
        6,
        19,
        0
      ],
      [
        782,
        784,
        180701,
        2,
        12,
        19,
        0
      ],
      [
        784,
        814,
        10201,
        30,
        -1,
        -1,
        0
      ],
      [
        814,
        834,
        181201,
        20,
        12,
        19,
        0
      ],
      [
        834,
        839,
        120101,
        5,
        3,
        52,
        0
      ],
      [
        834,
        839,
        120101,
        5,
        3,
        53,
        0
      ],
      [
        839,
        849,
        181201,
        10,
        12,
        19,
        0
      ],
      [
        849,
        854,
        120101,
        5,
        3,
        52,
        0
      ],
      [
        849,
        854,
        120101,
        5,
        3,
        53,
        0
      ],
      [
        854,
        869,
        181201,
        15,
        12,
        19,
        0
      ],
      [
        869,
        874,
        120101,
        5,
        12,
        52,
        0
      ],
      [
        869,
        874,
        120101,
        5,
        12,
        53,
        0
      ],
      [
        874,
        894,
        181201,
        20,
        12,
        19,
        0
      ],
      [
        894,
        960,
        500101,
        66,
        1,
        19,
        0
      ],
      [
        960,
        970,
        110101,
        10,
        1,
        19,
        0
      ],
      [
        970,
        985,
        20681,
        15,
        1,
        19,
        0
      ],
      [
        985,
        1350,
        120303,
        365,
        1,
        19,
        0
      ],
      [
        1350,
        1680,
        10101,
        330,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20211010210934,
    WECANTRIL: 5,
    WEGENHTH: 2,
    WEHBP: 2,
    WEPAINMD: 1,
    WEREST: 1,
    WETYPICAL: 2,
    TUDIARYDAY_x: 7,
    TRHOLIDAY_x: 0,
    TEAGE: 79,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 37,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 705,
    TRTFAMILY: 15,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 3,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        540,
        10101,
        300,
        -1,
        -1,
        0
      ],
      [
        540,
        570,
        10201,
        30,
        -1,
        -1,
        0
      ],
      [
        570,
        580,
        20902,
        10,
        1,
        18,
        0
      ],
      [
        580,
        590,
        181201,
        10,
        13,
        20,
        0
      ],
      [
        580,
        590,
        181201,
        10,
        13,
        22,
        0
      ],
      [
        590,
        610,
        120101,
        20,
        2,
        57,
        0
      ],
      [
        590,
        610,
        120101,
        20,
        2,
        58,
        0
      ],
      [
        610,
        730,
        40501,
        120,
        2,
        58,
        0
      ],
      [
        730,
        750,
        110101,
        20,
        2,
        57,
        0
      ],
      [
        730,
        750,
        110101,
        20,
        2,
        58,
        0
      ],
      [
        750,
        765,
        40501,
        15,
        2,
        18,
        0
      ],
      [
        765,
        855,
        20203,
        90,
        2,
        18,
        0
      ],
      [
        855,
        885,
        40501,
        30,
        2,
        18,
        0
      ],
      [
        885,
        930,
        40501,
        45,
        2,
        18,
        0
      ],
      [
        930,
        990,
        40501,
        60,
        2,
        18,
        0
      ],
      [
        990,
        1035,
        40501,
        45,
        2,
        18,
        0
      ],
      [
        1035,
        1055,
        110101,
        20,
        2,
        57,
        0
      ],
      [
        1035,
        1055,
        110101,
        20,
        2,
        58,
        0
      ],
      [
        1055,
        1140,
        500106,
        85,
        -1,
        -1,
        0
      ],
      [
        1140,
        1230,
        40501,
        90,
        2,
        18,
        0
      ],
      [
        1230,
        1240,
        180482,
        10,
        13,
        20,
        0
      ],
      [
        1230,
        1240,
        180482,
        10,
        13,
        22,
        0
      ],
      [
        1240,
        1300,
        120301,
        60,
        1,
        18,
        0
      ],
      [
        1300,
        1330,
        110101,
        30,
        1,
        18,
        0
      ],
      [
        1330,
        1440,
        160101,
        110,
        1,
        18,
        0
      ],
      [
        0,
        240,
        10101,
        240,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210403211705,
    WECANTRIL: 5,
    WEGENHTH: 3,
    WEHBP: 2,
    WEPAINMD: 1,
    WEREST: 3,
    WETYPICAL: 1,
    TUDIARYDAY_x: 7,
    TRHOLIDAY_x: 0,
    TEAGE: 32,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 39,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 585,
    TRTFAMILY: 20,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 2,
    TRSPPRES: 1,
    TESCHENR: 2,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        570,
        10101,
        330,
        -1,
        -1,
        0
      ],
      [
        570,
        600,
        110101,
        30,
        1,
        18,
        0
      ],
      [
        600,
        630,
        20102,
        30,
        1,
        18,
        0
      ],
      [
        630,
        960,
        50101,
        330,
        1,
        18,
        0
      ],
      [
        960,
        1050,
        20201,
        90,
        1,
        18,
        0
      ],
      [
        1050,
        1110,
        120303,
        60,
        1,
        20,
        0
      ],
      [
        1110,
        1170,
        110101,
        60,
        1,
        20,
        0
      ],
      [
        1170,
        1350,
        120303,
        180,
        1,
        20,
        0
      ],
      [
        1350,
        1380,
        10201,
        30,
        -1,
        -1,
        0
      ],
      [
        1380,
        1680,
        10101,
        300,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210403210500,
    WECANTRIL: 9,
    WEGENHTH: 3,
    WEHBP: 1,
    WEPAINMD: 2,
    WEREST: 1,
    WETYPICAL: 2,
    TUDIARYDAY_x: 6,
    TRHOLIDAY_x: 0,
    TEAGE: 67,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 44,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 43,
    TRDPFTPT_x: 2,
    TRERNWA_x: 80769,
    TRERNHLY: -1,
    TRTALONE: 150,
    TRTFAMILY: 300,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 1,
    TESCHENR: -1,
    happy_group: 3
  },
  {
    activity: [
      [
        240,
        900,
        189999,
        660,
        20,
        19,
        0
      ],
      [
        900,
        960,
        189999,
        60,
        16,
        19,
        0
      ],
      [
        960,
        965,
        20902,
        5,
        1,
        19,
        0
      ],
      [
        965,
        980,
        70103,
        15,
        1,
        19,
        0
      ],
      [
        980,
        1010,
        110281,
        30,
        1,
        19,
        0
      ],
      [
        1010,
        1025,
        110101,
        15,
        1,
        19,
        0
      ],
      [
        1025,
        1680,
        10101,
        655,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210706210949,
    WECANTRIL: 10,
    WEGENHTH: 2,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 1,
    WETYPICAL: 2,
    TUDIARYDAY_x: 2,
    TRHOLIDAY_x: 0,
    TEAGE: 40,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 43,
    PEHSPNON: 2,
    PTDTRACE: 2,
    TRDTIND1: 42,
    TRDPFTPT_x: 1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 785,
    TRTFAMILY: 0,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 3,
    TESCHENR: 2,
    happy_group: 3
  },
  {
    activity: [
      [
        240,
        390,
        10101,
        150,
        -1,
        -1,
        0
      ],
      [
        390,
        420,
        120303,
        30,
        1,
        18,
        0
      ],
      [
        420,
        435,
        110101,
        15,
        1,
        18,
        0
      ],
      [
        435,
        450,
        10201,
        15,
        -1,
        -1,
        0
      ],
      [
        450,
        495,
        20901,
        45,
        1,
        18,
        0
      ],
      [
        495,
        510,
        10201,
        15,
        -1,
        -1,
        0
      ],
      [
        510,
        515,
        20502,
        5,
        1,
        18,
        0
      ],
      [
        515,
        525,
        181201,
        10,
        12,
        20,
        0
      ],
      [
        525,
        540,
        120101,
        15,
        5,
        56,
        0
      ],
      [
        525,
        540,
        120101,
        15,
        5,
        20,
        0
      ],
      [
        540,
        600,
        140101,
        60,
        5,
        56,
        0
      ],
      [
        540,
        600,
        140101,
        60,
        5,
        20,
        0
      ],
      [
        600,
        615,
        181101,
        15,
        12,
        20,
        0
      ],
      [
        615,
        675,
        110101,
        60,
        4,
        20,
        0
      ],
      [
        675,
        780,
        181201,
        105,
        12,
        20,
        0
      ],
      [
        780,
        1050,
        120101,
        270,
        3,
        51,
        0
      ],
      [
        780,
        1050,
        120101,
        270,
        3,
        20,
        0
      ],
      [
        1050,
        1095,
        110101,
        45,
        3,
        51,
        0
      ],
      [
        1050,
        1095,
        110101,
        45,
        3,
        20,
        0
      ],
      [
        1095,
        1110,
        120101,
        15,
        3,
        51,
        0
      ],
      [
        1095,
        1110,
        120101,
        15,
        3,
        20,
        0
      ],
      [
        1110,
        1210,
        180782,
        100,
        12,
        20,
        0
      ],
      [
        1210,
        1215,
        70102,
        5,
        7,
        20,
        0
      ],
      [
        1215,
        1230,
        180782,
        15,
        12,
        20,
        0
      ],
      [
        1230,
        1380,
        120303,
        150,
        1,
        20,
        0
      ],
      [
        1380,
        1385,
        10201,
        5,
        -1,
        -1,
        0
      ],
      [
        1385,
        1680,
        10101,
        295,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210807210584,
    WECANTRIL: 8,
    WEGENHTH: 3,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 3,
    WETYPICAL: 1,
    TUDIARYDAY_x: 1,
    TRHOLIDAY_x: 0,
    TEAGE: 62,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 43,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 4,
    TRDPFTPT_x: 2,
    TRERNWA_x: 113712,
    TRERNHLY: 9476,
    TRTALONE: 95,
    TRTFAMILY: 865,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 1,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        360,
        10101,
        120,
        -1,
        -1,
        0
      ],
      [
        360,
        450,
        30101,
        90,
        1,
        22,
        0
      ],
      [
        360,
        450,
        30101,
        90,
        1,
        22,
        0
      ],
      [
        360,
        450,
        30101,
        90,
        1,
        22,
        0
      ],
      [
        450,
        457,
        180381,
        7,
        12,
        22,
        0
      ],
      [
        450,
        457,
        180381,
        7,
        12,
        22,
        0
      ],
      [
        450,
        457,
        180381,
        7,
        12,
        22,
        0
      ],
      [
        457,
        472,
        30112,
        15,
        8,
        22,
        0
      ],
      [
        457,
        472,
        30112,
        15,
        8,
        22,
        0
      ],
      [
        457,
        472,
        30112,
        15,
        8,
        22,
        0
      ],
      [
        472,
        502,
        180381,
        30,
        12,
        22,
        0
      ],
      [
        502,
        622,
        30302,
        120,
        11,
        22,
        0
      ],
      [
        622,
        657,
        180782,
        35,
        12,
        22,
        0
      ],
      [
        657,
        667,
        70103,
        10,
        4,
        22,
        0
      ],
      [
        667,
        676,
        180782,
        9,
        12,
        22,
        0
      ],
      [
        676,
        681,
        20202,
        5,
        1,
        22,
        0
      ],
      [
        681,
        771,
        20102,
        90,
        1,
        18,
        0
      ],
      [
        771,
        806,
        20203,
        35,
        1,
        18,
        0
      ],
      [
        806,
        885,
        120303,
        79,
        1,
        22,
        0
      ],
      [
        885,
        905,
        189999,
        20,
        12,
        22,
        0
      ],
      [
        905,
        910,
        500101,
        5,
        8,
        22,
        0
      ],
      [
        905,
        910,
        500101,
        5,
        8,
        22,
        0
      ],
      [
        905,
        910,
        500101,
        5,
        8,
        22,
        0
      ],
      [
        910,
        916,
        180381,
        6,
        12,
        22,
        0
      ],
      [
        910,
        916,
        180381,
        6,
        12,
        22,
        0
      ],
      [
        910,
        916,
        180381,
        6,
        12,
        22,
        0
      ],
      [
        916,
        926,
        30112,
        10,
        7,
        22,
        0
      ],
      [
        916,
        926,
        30112,
        10,
        7,
        22,
        0
      ],
      [
        916,
        926,
        30112,
        10,
        7,
        22,
        0
      ],
      [
        926,
        941,
        180782,
        15,
        12,
        18,
        0
      ],
      [
        941,
        956,
        70103,
        15,
        4,
        18,
        0
      ],
      [
        956,
        966,
        180782,
        10,
        12,
        18,
        0
      ],
      [
        966,
        986,
        110101,
        20,
        1,
        18,
        0
      ],
      [
        986,
        1080,
        120303,
        94,
        1,
        18,
        0
      ],
      [
        1080,
        1090,
        181101,
        10,
        12,
        18,
        0
      ],
      [
        1090,
        1105,
        110101,
        15,
        3,
        54,
        0
      ],
      [
        1090,
        1105,
        110101,
        15,
        3,
        58,
        0
      ],
      [
        1105,
        1155,
        120101,
        50,
        3,
        54,
        0
      ],
      [
        1105,
        1155,
        120101,
        50,
        3,
        58,
        0
      ],
      [
        1155,
        1165,
        180381,
        10,
        12,
        18,
        0
      ],
      [
        1165,
        1180,
        30111,
        15,
        4,
        18,
        0
      ],
      [
        1180,
        1200,
        180782,
        20,
        12,
        22,
        0
      ],
      [
        1180,
        1200,
        180782,
        20,
        12,
        22,
        0
      ],
      [
        1180,
        1200,
        180782,
        20,
        12,
        22,
        0
      ],
      [
        1200,
        1205,
        70104,
        5,
        7,
        22,
        0
      ],
      [
        1200,
        1205,
        70104,
        5,
        7,
        22,
        0
      ],
      [
        1200,
        1205,
        70104,
        5,
        7,
        22,
        0
      ],
      [
        1205,
        1225,
        180782,
        20,
        12,
        22,
        0
      ],
      [
        1205,
        1225,
        180782,
        20,
        12,
        22,
        0
      ],
      [
        1205,
        1225,
        180782,
        20,
        12,
        22,
        0
      ],
      [
        1225,
        1270,
        30101,
        45,
        1,
        22,
        0
      ],
      [
        1225,
        1270,
        30101,
        45,
        1,
        22,
        0
      ],
      [
        1225,
        1270,
        30101,
        45,
        1,
        22,
        0
      ],
      [
        1270,
        1285,
        20201,
        15,
        1,
        22,
        0
      ],
      [
        1270,
        1285,
        20201,
        15,
        1,
        22,
        0
      ],
      [
        1270,
        1285,
        20201,
        15,
        1,
        22,
        0
      ],
      [
        1285,
        1315,
        30186,
        30,
        1,
        22,
        0
      ],
      [
        1285,
        1315,
        30186,
        30,
        1,
        22,
        0
      ],
      [
        1285,
        1315,
        30186,
        30,
        1,
        22,
        0
      ],
      [
        1315,
        1335,
        30101,
        20,
        1,
        22,
        0
      ],
      [
        1315,
        1335,
        30101,
        20,
        1,
        22,
        0
      ],
      [
        1315,
        1335,
        30101,
        20,
        1,
        22,
        0
      ],
      [
        1335,
        1395,
        10201,
        60,
        -1,
        -1,
        0
      ],
      [
        1395,
        1402,
        20905,
        7,
        1,
        18,
        0
      ],
      [
        1402,
        1680,
        10101,
        278,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210908211834,
    WECANTRIL: 7,
    WEGENHTH: 1,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 2,
    WETYPICAL: 2,
    TUDIARYDAY_x: 6,
    TRHOLIDAY_x: 0,
    TEAGE: 32,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 42,
    PEHSPNON: 1,
    PTDTRACE: 1,
    TRDTIND1: 41,
    TRDPFTPT_x: 1,
    TRERNWA_x: 71153,
    TRERNHLY: 1825,
    TRTALONE: 321,
    TRTFAMILY: 596,
    TRTFRIEND: 65,
    TRCHILDNUM_x: 3,
    TRSPPRES: 3,
    TESCHENR: 2,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        450,
        10101,
        210,
        -1,
        -1,
        0
      ],
      [
        450,
        495,
        10201,
        45,
        -1,
        -1,
        0
      ],
      [
        495,
        540,
        180501,
        45,
        15,
        57,
        0
      ],
      [
        495,
        540,
        180501,
        45,
        15,
        58,
        0
      ],
      [
        540,
        840,
        50101,
        300,
        2,
        62,
        0
      ],
      [
        840,
        890,
        180501,
        50,
        16,
        57,
        0
      ],
      [
        840,
        890,
        180501,
        50,
        16,
        58,
        0
      ],
      [
        890,
        900,
        20201,
        10,
        1,
        18,
        0
      ],
      [
        900,
        915,
        110101,
        15,
        1,
        18,
        0
      ],
      [
        915,
        930,
        181283,
        15,
        14,
        18,
        0
      ],
      [
        930,
        960,
        120307,
        30,
        11,
        58,
        0
      ],
      [
        960,
        1005,
        120101,
        45,
        11,
        58,
        0
      ],
      [
        1005,
        1215,
        80501,
        210,
        11,
        58,
        0
      ],
      [
        1215,
        1230,
        180805,
        15,
        14,
        18,
        0
      ],
      [
        1230,
        1260,
        20201,
        30,
        1,
        18,
        0
      ],
      [
        1260,
        1275,
        110101,
        15,
        1,
        18,
        0
      ],
      [
        1275,
        1335,
        120303,
        60,
        1,
        18,
        0
      ],
      [
        1335,
        1365,
        10201,
        30,
        -1,
        -1,
        0
      ],
      [
        1365,
        1395,
        120303,
        30,
        1,
        22,
        0
      ],
      [
        1395,
        1440,
        10102,
        45,
        -1,
        -1,
        0
      ],
      [
        0,
        240,
        10101,
        240,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20211110212110,
    WECANTRIL: 6,
    WEGENHTH: 3,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 3,
    WETYPICAL: 1,
    TUDIARYDAY_x: 5,
    TRHOLIDAY_x: 0,
    TEAGE: 47,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 43,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 42,
    TRDPFTPT_x: 2,
    TRERNWA_x: 48076,
    TRERNHLY: 1700,
    TRTALONE: 160,
    TRTFAMILY: 30,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 1,
    TRSPPRES: 3,
    TESCHENR: 2,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        420,
        10101,
        180,
        -1,
        -1,
        0
      ],
      [
        420,
        430,
        10201,
        10,
        -1,
        -1,
        0
      ],
      [
        430,
        490,
        130131,
        60,
        9,
        19,
        0
      ],
      [
        490,
        520,
        120301,
        30,
        1,
        19,
        0
      ],
      [
        520,
        580,
        20501,
        60,
        1,
        19,
        0
      ],
      [
        580,
        625,
        20502,
        45,
        1,
        19,
        0
      ],
      [
        625,
        655,
        20501,
        30,
        1,
        19,
        0
      ],
      [
        655,
        685,
        20501,
        30,
        1,
        19,
        0
      ],
      [
        685,
        810,
        120303,
        125,
        1,
        19,
        0
      ],
      [
        810,
        820,
        20201,
        10,
        1,
        19,
        0
      ],
      [
        820,
        930,
        120303,
        110,
        1,
        19,
        0
      ],
      [
        930,
        940,
        180701,
        10,
        12,
        19,
        0
      ],
      [
        940,
        965,
        70101,
        25,
        6,
        19,
        0
      ],
      [
        965,
        980,
        180782,
        15,
        12,
        19,
        0
      ],
      [
        980,
        1e3,
        70102,
        20,
        11,
        19,
        0
      ],
      [
        1e3,
        1030,
        180782,
        30,
        12,
        19,
        0
      ],
      [
        1030,
        1045,
        20104,
        15,
        1,
        19,
        0
      ],
      [
        1045,
        1075,
        20201,
        30,
        1,
        19,
        0
      ],
      [
        1075,
        1105,
        110101,
        30,
        1,
        19,
        0
      ],
      [
        1105,
        1125,
        20203,
        20,
        1,
        19,
        0
      ],
      [
        1125,
        1135,
        10201,
        10,
        -1,
        -1,
        0
      ],
      [
        1135,
        1155,
        120301,
        20,
        1,
        19,
        0
      ],
      [
        1155,
        1190,
        10201,
        35,
        -1,
        -1,
        0
      ],
      [
        1190,
        1320,
        120303,
        130,
        1,
        19,
        0
      ],
      [
        1320,
        1335,
        10201,
        15,
        -1,
        -1,
        0
      ],
      [
        1335,
        1680,
        10101,
        345,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20211110211835,
    WECANTRIL: 7,
    WEGENHTH: 3,
    WEHBP: 1,
    WEPAINMD: 1,
    WEREST: 1,
    WETYPICAL: 2,
    TUDIARYDAY_x: 1,
    TRHOLIDAY_x: 0,
    TEAGE: 69,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 40,
    PEHSPNON: 2,
    PTDTRACE: 2,
    TRDTIND1: 36,
    TRDPFTPT_x: 2,
    TRERNWA_x: 8e4,
    TRERNHLY: 4e3,
    TRTALONE: 845,
    TRTFAMILY: 0,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 3,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        360,
        10101,
        120,
        -1,
        -1,
        0
      ],
      [
        360,
        405,
        10201,
        45,
        -1,
        -1,
        0
      ],
      [
        405,
        420,
        110101,
        15,
        1,
        18,
        0
      ],
      [
        420,
        435,
        140102,
        15,
        1,
        18,
        0
      ],
      [
        435,
        440,
        140102,
        5,
        1,
        18,
        0
      ],
      [
        440,
        460,
        180501,
        20,
        12,
        18,
        0
      ],
      [
        460,
        660,
        50101,
        200,
        2,
        61,
        0
      ],
      [
        660,
        675,
        160101,
        15,
        2,
        18,
        0
      ],
      [
        675,
        780,
        50101,
        105,
        2,
        61,
        0
      ],
      [
        780,
        785,
        20201,
        5,
        2,
        61,
        0
      ],
      [
        785,
        800,
        110101,
        15,
        2,
        61,
        0
      ],
      [
        800,
        990,
        50101,
        190,
        2,
        61,
        0
      ],
      [
        990,
        1020,
        180501,
        30,
        12,
        18,
        0
      ],
      [
        1020,
        1030,
        10201,
        10,
        -1,
        -1,
        0
      ],
      [
        1030,
        1045,
        181301,
        15,
        12,
        18,
        0
      ],
      [
        1045,
        1057,
        130128,
        12,
        31,
        58,
        0
      ],
      [
        1057,
        1069,
        130133,
        12,
        31,
        58,
        0
      ],
      [
        1069,
        1081,
        130104,
        12,
        31,
        58,
        0
      ],
      [
        1081,
        1093,
        130133,
        12,
        31,
        58,
        0
      ],
      [
        1093,
        1098,
        181201,
        5,
        12,
        18,
        0
      ],
      [
        1098,
        1118,
        120101,
        20,
        3,
        51,
        0
      ],
      [
        1098,
        1118,
        120101,
        20,
        3,
        53,
        0
      ],
      [
        1118,
        1138,
        181201,
        20,
        12,
        18,
        0
      ],
      [
        1138,
        1153,
        10201,
        15,
        -1,
        -1,
        0
      ],
      [
        1153,
        1183,
        110101,
        30,
        1,
        20,
        0
      ],
      [
        1183,
        1198,
        20203,
        15,
        1,
        18,
        0
      ],
      [
        1198,
        1228,
        140102,
        30,
        1,
        18,
        0
      ],
      [
        1228,
        1440,
        120303,
        212,
        1,
        18,
        0
      ],
      [
        0,
        240,
        10101,
        240,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210706211062,
    WECANTRIL: 10,
    WEGENHTH: 1,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 1,
    WETYPICAL: 2,
    TUDIARYDAY_x: 3,
    TRHOLIDAY_x: 0,
    TEAGE: 64,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 42,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 32,
    TRDPFTPT_x: 1,
    TRERNWA_x: 144230,
    TRERNHLY: -1,
    TRTALONE: 397,
    TRTFAMILY: 50,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 1,
    TESCHENR: -1,
    happy_group: 3
  },
  {
    activity: [
      [
        240,
        360,
        10101,
        120,
        -1,
        -1,
        0
      ],
      [
        360,
        390,
        110101,
        30,
        1,
        18,
        0
      ],
      [
        390,
        510,
        120308,
        120,
        1,
        20,
        0
      ],
      [
        510,
        570,
        10201,
        60,
        -1,
        -1,
        0
      ],
      [
        570,
        630,
        20101,
        60,
        1,
        18,
        0
      ],
      [
        630,
        640,
        180701,
        10,
        12,
        18,
        0
      ],
      [
        640,
        700,
        70101,
        60,
        1,
        18,
        0
      ],
      [
        700,
        710,
        180782,
        10,
        12,
        18,
        0
      ],
      [
        710,
        725,
        70102,
        15,
        11,
        18,
        0
      ],
      [
        725,
        735,
        180782,
        10,
        12,
        18,
        0
      ],
      [
        735,
        740,
        20902,
        5,
        1,
        20,
        0
      ],
      [
        740,
        770,
        20201,
        30,
        1,
        18,
        0
      ],
      [
        770,
        800,
        110101,
        30,
        1,
        20,
        0
      ],
      [
        800,
        830,
        20203,
        30,
        1,
        18,
        0
      ],
      [
        830,
        950,
        20101,
        120,
        1,
        20,
        0
      ],
      [
        950,
        1080,
        120303,
        130,
        1,
        20,
        0
      ],
      [
        1080,
        1100,
        110101,
        20,
        1,
        20,
        0
      ],
      [
        1100,
        1120,
        20203,
        20,
        1,
        20,
        0
      ],
      [
        1120,
        1260,
        120303,
        140,
        1,
        20,
        0
      ],
      [
        1260,
        1270,
        10201,
        10,
        -1,
        -1,
        0
      ],
      [
        1270,
        1680,
        10101,
        410,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210302211746,
    WECANTRIL: 3,
    WEGENHTH: 4,
    WEHBP: 2,
    WEPAINMD: 1,
    WEREST: 1,
    WETYPICAL: 1,
    TUDIARYDAY_x: 7,
    TRHOLIDAY_x: 0,
    TEAGE: 60,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 43,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 36,
    TRDPFTPT_x: 1,
    TRERNWA_x: 16e4,
    TRERNHLY: 4e3,
    TRTALONE: 255,
    TRTFAMILY: 585,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 1,
    TESCHENR: -1,
    happy_group: 1
  },
  {
    activity: [
      [
        240,
        420,
        10101,
        180,
        -1,
        -1,
        0
      ],
      [
        420,
        480,
        120301,
        60,
        1,
        18,
        0
      ],
      [
        480,
        510,
        20201,
        30,
        1,
        18,
        0
      ],
      [
        510,
        570,
        10201,
        60,
        -1,
        -1,
        0
      ],
      [
        570,
        585,
        30101,
        15,
        1,
        22,
        0
      ],
      [
        570,
        585,
        30101,
        15,
        1,
        22,
        0
      ],
      [
        585,
        600,
        180381,
        15,
        12,
        22,
        0
      ],
      [
        585,
        600,
        180381,
        15,
        12,
        22,
        0
      ],
      [
        600,
        660,
        30110,
        60,
        11,
        18,
        0
      ],
      [
        660,
        670,
        180782,
        10,
        12,
        22,
        0
      ],
      [
        660,
        670,
        180782,
        10,
        12,
        22,
        0
      ],
      [
        670,
        730,
        70104,
        60,
        7,
        22,
        0
      ],
      [
        670,
        730,
        70104,
        60,
        7,
        22,
        0
      ],
      [
        730,
        740,
        180782,
        10,
        12,
        22,
        0
      ],
      [
        730,
        740,
        180782,
        10,
        12,
        22,
        0
      ],
      [
        740,
        755,
        20201,
        15,
        1,
        18,
        0
      ],
      [
        755,
        765,
        110101,
        10,
        1,
        22,
        0
      ],
      [
        755,
        765,
        110101,
        10,
        1,
        22,
        0
      ],
      [
        765,
        775,
        20102,
        10,
        1,
        18,
        0
      ],
      [
        775,
        805,
        30301,
        30,
        1,
        22,
        0
      ],
      [
        805,
        865,
        20102,
        60,
        1,
        22,
        0
      ],
      [
        805,
        865,
        20102,
        60,
        1,
        22,
        0
      ],
      [
        865,
        985,
        20101,
        120,
        1,
        22,
        0
      ],
      [
        865,
        985,
        20101,
        120,
        1,
        22,
        0
      ],
      [
        985,
        1005,
        180782,
        20,
        12,
        22,
        0
      ],
      [
        985,
        1005,
        180782,
        20,
        12,
        22,
        0
      ],
      [
        1005,
        1010,
        70103,
        5,
        4,
        22,
        0
      ],
      [
        1005,
        1010,
        70103,
        5,
        4,
        22,
        0
      ],
      [
        1010,
        1030,
        180782,
        20,
        12,
        22,
        0
      ],
      [
        1010,
        1030,
        180782,
        20,
        12,
        22,
        0
      ],
      [
        1030,
        1050,
        110101,
        20,
        1,
        22,
        0
      ],
      [
        1030,
        1050,
        110101,
        20,
        1,
        22,
        0
      ],
      [
        1050,
        1055,
        20203,
        5,
        1,
        18,
        0
      ],
      [
        1055,
        1115,
        120301,
        60,
        1,
        22,
        0
      ],
      [
        1055,
        1115,
        120301,
        60,
        1,
        22,
        0
      ],
      [
        1115,
        1130,
        180782,
        15,
        12,
        22,
        0
      ],
      [
        1115,
        1130,
        180782,
        15,
        12,
        22,
        0
      ],
      [
        1130,
        1150,
        70105,
        20,
        4,
        22,
        0
      ],
      [
        1130,
        1150,
        70105,
        20,
        4,
        22,
        0
      ],
      [
        1150,
        1155,
        70103,
        5,
        4,
        22,
        0
      ],
      [
        1150,
        1155,
        70103,
        5,
        4,
        22,
        0
      ],
      [
        1155,
        1170,
        180782,
        15,
        12,
        22,
        0
      ],
      [
        1155,
        1170,
        180782,
        15,
        12,
        22,
        0
      ],
      [
        1170,
        1230,
        120301,
        60,
        1,
        22,
        0
      ],
      [
        1170,
        1230,
        120301,
        60,
        1,
        22,
        0
      ],
      [
        1230,
        1250,
        30101,
        20,
        1,
        22,
        0
      ],
      [
        1230,
        1250,
        30101,
        20,
        1,
        22,
        0
      ],
      [
        1250,
        1260,
        30101,
        10,
        1,
        22,
        0
      ],
      [
        1250,
        1260,
        30101,
        10,
        1,
        22,
        0
      ],
      [
        1260,
        1290,
        20203,
        30,
        1,
        18,
        0
      ],
      [
        1290,
        1295,
        20201,
        5,
        1,
        18,
        0
      ],
      [
        1295,
        1305,
        10201,
        10,
        -1,
        -1,
        0
      ],
      [
        1305,
        1365,
        120312,
        60,
        1,
        18,
        0
      ],
      [
        1365,
        1680,
        10101,
        315,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210908211075,
    WECANTRIL: 9,
    WEGENHTH: 2,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 1,
    WETYPICAL: 2,
    TUDIARYDAY_x: 7,
    TRHOLIDAY_x: 0,
    TEAGE: 43,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 43,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 33,
    TRDPFTPT_x: 1,
    TRERNWA_x: 230769,
    TRERNHLY: -1,
    TRTALONE: 275,
    TRTFAMILY: 600,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 2,
    TRSPPRES: 1,
    TESCHENR: 2,
    happy_group: 3
  },
  {
    activity: [
      [
        240,
        260,
        10201,
        20,
        -1,
        -1,
        0
      ],
      [
        260,
        300,
        180501,
        40,
        12,
        18,
        0
      ],
      [
        300,
        480,
        50101,
        180,
        2,
        61,
        0
      ],
      [
        480,
        525,
        500101,
        45,
        2,
        18,
        0
      ],
      [
        525,
        720,
        50101,
        195,
        2,
        61,
        0
      ],
      [
        720,
        765,
        500101,
        45,
        2,
        18,
        0
      ],
      [
        765,
        960,
        50101,
        195,
        2,
        61,
        0
      ],
      [
        960,
        1e3,
        180501,
        40,
        12,
        18,
        0
      ],
      [
        1e3,
        1230,
        20701,
        230,
        1,
        53,
        0
      ],
      [
        1230,
        1238,
        181101,
        8,
        12,
        20,
        0
      ],
      [
        1238,
        1300,
        110101,
        62,
        4,
        20,
        0
      ],
      [
        1300,
        1308,
        181101,
        8,
        12,
        20,
        0
      ],
      [
        1308,
        1650,
        10101,
        342,
        -1,
        -1,
        0
      ],
      [
        210,
        240,
        10201,
        30,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210403210115,
    WECANTRIL: 9,
    WEGENHTH: 3,
    WEHBP: 2,
    WEPAINMD: 1,
    WEREST: 3,
    WETYPICAL: 3,
    TUDIARYDAY_x: 6,
    TRHOLIDAY_x: 0,
    TEAGE: 32,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 43,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 14,
    TRDPFTPT_x: 1,
    TRERNWA_x: 54432,
    TRERNHLY: 1296,
    TRTALONE: 170,
    TRTFAMILY: 308,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 2,
    TRSPPRES: 1,
    TESCHENR: 2,
    happy_group: 3
  },
  {
    activity: [
      [
        240,
        360,
        10101,
        120,
        -1,
        -1,
        0
      ],
      [
        360,
        375,
        10201,
        15,
        -1,
        -1,
        0
      ],
      [
        375,
        380,
        180501,
        5,
        13,
        20,
        0
      ],
      [
        380,
        420,
        50189,
        40,
        2,
        18,
        0
      ],
      [
        420,
        540,
        50101,
        120,
        2,
        61,
        0
      ],
      [
        540,
        550,
        120301,
        10,
        2,
        18,
        0
      ],
      [
        550,
        720,
        50101,
        170,
        2,
        61,
        0
      ],
      [
        720,
        750,
        110101,
        30,
        2,
        61,
        0
      ],
      [
        750,
        960,
        50101,
        210,
        2,
        61,
        0
      ],
      [
        960,
        965,
        180501,
        5,
        13,
        20,
        0
      ],
      [
        965,
        1025,
        120303,
        60,
        1,
        20,
        0
      ],
      [
        1025,
        1085,
        110101,
        60,
        1,
        20,
        0
      ],
      [
        1085,
        1265,
        120303,
        180,
        1,
        20,
        0
      ],
      [
        1265,
        1680,
        10101,
        415,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210302211062,
    WECANTRIL: 6,
    WEGENHTH: 1,
    WEHBP: 1,
    WEPAINMD: 2,
    WEREST: 1,
    WETYPICAL: 1,
    TUDIARYDAY_x: 3,
    TRHOLIDAY_x: 0,
    TEAGE: 50,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 34,
    PEHSPNON: 2,
    PTDTRACE: 2,
    TRDTIND1: 46,
    TRDPFTPT_x: 1,
    TRERNWA_x: 76900,
    TRERNHLY: -1,
    TRTALONE: 10,
    TRTFAMILY: 310,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 2,
    TRSPPRES: 1,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        300,
        10101,
        60,
        -1,
        -1,
        0
      ],
      [
        300,
        320,
        110101,
        20,
        1,
        19,
        0
      ],
      [
        320,
        340,
        120303,
        20,
        1,
        19,
        0
      ],
      [
        340,
        350,
        120307,
        10,
        1,
        19,
        0
      ],
      [
        350,
        360,
        20901,
        10,
        1,
        19,
        0
      ],
      [
        360,
        390,
        10201,
        30,
        -1,
        -1,
        0
      ],
      [
        390,
        420,
        120303,
        30,
        1,
        21,
        0
      ],
      [
        420,
        450,
        180501,
        30,
        13,
        21,
        0
      ],
      [
        450,
        600,
        50101,
        150,
        2,
        59,
        0
      ],
      [
        450,
        600,
        50101,
        150,
        2,
        61,
        0
      ],
      [
        450,
        600,
        50101,
        150,
        2,
        62,
        0
      ],
      [
        600,
        615,
        120301,
        15,
        2,
        19,
        0
      ],
      [
        615,
        750,
        50101,
        135,
        2,
        59,
        0
      ],
      [
        615,
        750,
        50101,
        135,
        2,
        61,
        0
      ],
      [
        615,
        750,
        50101,
        135,
        2,
        62,
        0
      ],
      [
        750,
        780,
        110101,
        30,
        2,
        61,
        0
      ],
      [
        780,
        930,
        50101,
        150,
        2,
        60,
        0
      ],
      [
        780,
        930,
        50101,
        150,
        2,
        61,
        0
      ],
      [
        780,
        930,
        50101,
        150,
        2,
        62,
        0
      ],
      [
        930,
        945,
        120301,
        15,
        2,
        19,
        0
      ],
      [
        945,
        1020,
        50101,
        75,
        2,
        59,
        0
      ],
      [
        945,
        1020,
        50101,
        75,
        2,
        61,
        0
      ],
      [
        945,
        1020,
        50101,
        75,
        2,
        62,
        0
      ],
      [
        1020,
        1025,
        120101,
        5,
        2,
        53,
        0
      ],
      [
        1025,
        1040,
        40508,
        15,
        2,
        19,
        0
      ],
      [
        1040,
        1045,
        181101,
        5,
        13,
        53,
        0
      ],
      [
        1045,
        1105,
        110101,
        60,
        4,
        52,
        0
      ],
      [
        1045,
        1105,
        110101,
        60,
        4,
        53,
        0
      ],
      [
        1045,
        1105,
        110101,
        60,
        4,
        21,
        0
      ],
      [
        1105,
        1165,
        120101,
        60,
        4,
        52,
        0
      ],
      [
        1105,
        1165,
        120101,
        60,
        4,
        53,
        0
      ],
      [
        1105,
        1165,
        120101,
        60,
        4,
        21,
        0
      ],
      [
        1165,
        1195,
        181201,
        30,
        13,
        21,
        0
      ],
      [
        1195,
        1255,
        120301,
        60,
        1,
        21,
        0
      ],
      [
        1255,
        1260,
        20801,
        5,
        1,
        19,
        0
      ],
      [
        1260,
        1680,
        10101,
        420,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210403211137,
    WECANTRIL: 5,
    WEGENHTH: 2,
    WEHBP: 1,
    WEPAINMD: 1,
    WEREST: 2,
    WETYPICAL: 2,
    TUDIARYDAY_x: 7,
    TRHOLIDAY_x: 0,
    TEAGE: 69,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 39,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 22,
    TRDPFTPT_x: 1,
    TRERNWA_x: 4e4,
    TRERNHLY: 1300,
    TRTALONE: 110,
    TRTFAMILY: 130,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 2,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        510,
        10101,
        270,
        -1,
        -1,
        0
      ],
      [
        510,
        540,
        20201,
        30,
        1,
        20,
        0
      ],
      [
        510,
        540,
        20201,
        30,
        1,
        22,
        0
      ],
      [
        510,
        540,
        20201,
        30,
        1,
        22,
        0
      ],
      [
        540,
        570,
        110101,
        30,
        1,
        20,
        0
      ],
      [
        540,
        570,
        110101,
        30,
        1,
        22,
        0
      ],
      [
        540,
        570,
        110101,
        30,
        1,
        22,
        0
      ],
      [
        570,
        630,
        20101,
        60,
        1,
        18,
        0
      ],
      [
        630,
        690,
        20102,
        60,
        1,
        18,
        0
      ],
      [
        690,
        780,
        120307,
        90,
        1,
        20,
        0
      ],
      [
        690,
        780,
        120307,
        90,
        1,
        22,
        0
      ],
      [
        690,
        780,
        120307,
        90,
        1,
        22,
        0
      ],
      [
        780,
        810,
        110101,
        30,
        1,
        20,
        0
      ],
      [
        780,
        810,
        110101,
        30,
        1,
        22,
        0
      ],
      [
        780,
        810,
        110101,
        30,
        1,
        22,
        0
      ],
      [
        810,
        840,
        120301,
        30,
        1,
        20,
        0
      ],
      [
        840,
        855,
        181301,
        15,
        12,
        20,
        0
      ],
      [
        840,
        855,
        181301,
        15,
        12,
        22,
        0
      ],
      [
        840,
        855,
        181301,
        15,
        12,
        22,
        0
      ],
      [
        855,
        1005,
        130116,
        150,
        9,
        20,
        0
      ],
      [
        855,
        1005,
        130116,
        150,
        9,
        22,
        0
      ],
      [
        855,
        1005,
        130116,
        150,
        9,
        22,
        0
      ],
      [
        1005,
        1035,
        181301,
        30,
        12,
        20,
        0
      ],
      [
        1005,
        1035,
        181301,
        30,
        12,
        22,
        0
      ],
      [
        1005,
        1035,
        181301,
        30,
        12,
        22,
        0
      ],
      [
        1035,
        1065,
        20201,
        30,
        1,
        20,
        0
      ],
      [
        1065,
        1125,
        110101,
        60,
        1,
        20,
        0
      ],
      [
        1065,
        1125,
        110101,
        60,
        1,
        22,
        0
      ],
      [
        1065,
        1125,
        110101,
        60,
        1,
        22,
        0
      ],
      [
        1125,
        1150,
        30101,
        25,
        1,
        22,
        0
      ],
      [
        1150,
        1180,
        30102,
        30,
        1,
        22,
        0
      ],
      [
        1180,
        1195,
        30186,
        15,
        1,
        22,
        0
      ],
      [
        1195,
        1225,
        20203,
        30,
        1,
        18,
        0
      ],
      [
        1225,
        1255,
        20201,
        30,
        1,
        18,
        0
      ],
      [
        1255,
        1315,
        120303,
        60,
        1,
        18,
        0
      ],
      [
        1315,
        1680,
        10101,
        365,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210504211964,
    WECANTRIL: 8,
    WEGENHTH: 1,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 1,
    WETYPICAL: 2,
    TUDIARYDAY_x: 1,
    TRHOLIDAY_x: 0,
    TEAGE: 44,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 43,
    PEHSPNON: 1,
    PTDTRACE: 1,
    TRDTIND1: 40,
    TRDPFTPT_x: 2,
    TRERNWA_x: 32692,
    TRERNHLY: -1,
    TRTALONE: 240,
    TRTFAMILY: 565,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 2,
    TRSPPRES: 1,
    TESCHENR: 2,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        330,
        10101,
        90,
        -1,
        -1,
        0
      ],
      [
        330,
        350,
        20681,
        20,
        1,
        18,
        0
      ],
      [
        350,
        365,
        20681,
        15,
        1,
        18,
        0
      ],
      [
        365,
        395,
        130134,
        30,
        1,
        18,
        0
      ],
      [
        395,
        435,
        10201,
        40,
        -1,
        -1,
        0
      ],
      [
        435,
        510,
        20101,
        75,
        1,
        18,
        0
      ],
      [
        510,
        530,
        180501,
        20,
        12,
        18,
        0
      ],
      [
        530,
        1110,
        50101,
        580,
        2,
        59,
        0
      ],
      [
        530,
        1110,
        50101,
        580,
        2,
        61,
        0
      ],
      [
        530,
        1110,
        50101,
        580,
        2,
        62,
        0
      ],
      [
        1110,
        1125,
        180501,
        15,
        12,
        18,
        0
      ],
      [
        1125,
        1185,
        110101,
        60,
        1,
        20,
        0
      ],
      [
        1125,
        1185,
        110101,
        60,
        1,
        22,
        0
      ],
      [
        1185,
        1245,
        120101,
        60,
        1,
        20,
        0
      ],
      [
        1245,
        1265,
        10201,
        20,
        -1,
        -1,
        0
      ],
      [
        1265,
        1305,
        30186,
        40,
        1,
        22,
        0
      ],
      [
        1305,
        1325,
        120308,
        20,
        1,
        18,
        0
      ],
      [
        1325,
        1680,
        10101,
        355,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210806211390,
    WECANTRIL: 8,
    WEGENHTH: 2,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 1,
    WETYPICAL: 2,
    TUDIARYDAY_x: 2,
    TRHOLIDAY_x: 0,
    TEAGE: 54,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 46,
    PEHSPNON: 1,
    PTDTRACE: 1,
    TRDTIND1: 36,
    TRDPFTPT_x: 2,
    TRERNWA_x: 0,
    TRERNHLY: -1,
    TRTALONE: 195,
    TRTFAMILY: 160,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 1,
    TRSPPRES: 1,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        480,
        10101,
        240,
        -1,
        -1,
        0
      ],
      [
        480,
        510,
        20201,
        30,
        1,
        19,
        0
      ],
      [
        510,
        525,
        20203,
        15,
        1,
        19,
        0
      ],
      [
        525,
        555,
        10201,
        30,
        -1,
        -1,
        0
      ],
      [
        555,
        795,
        120303,
        240,
        1,
        19,
        0
      ],
      [
        795,
        825,
        110101,
        30,
        1,
        19,
        0
      ],
      [
        825,
        830,
        180701,
        5,
        12,
        19,
        0
      ],
      [
        830,
        890,
        70101,
        60,
        6,
        19,
        0
      ],
      [
        890,
        895,
        180701,
        5,
        12,
        19,
        0
      ],
      [
        895,
        915,
        20104,
        20,
        1,
        19,
        0
      ],
      [
        915,
        1095,
        50101,
        180,
        1,
        19,
        0
      ],
      [
        1095,
        1275,
        50102,
        180,
        1,
        19,
        0
      ],
      [
        1275,
        1305,
        110101,
        30,
        1,
        19,
        0
      ],
      [
        1305,
        1320,
        20203,
        15,
        1,
        19,
        0
      ],
      [
        1320,
        1680,
        10101,
        360,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210403210863,
    WECANTRIL: 10,
    WEGENHTH: 1,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 1,
    WETYPICAL: 2,
    TUDIARYDAY_x: 7,
    TRHOLIDAY_x: 0,
    TEAGE: 41,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 45,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 36,
    TRDPFTPT_x: 1,
    TRERNWA_x: 173076,
    TRERNHLY: -1,
    TRTALONE: 450,
    TRTFAMILY: 0,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 3,
    TESCHENR: 2,
    happy_group: 3
  },
  {
    activity: [
      [
        240,
        540,
        10101,
        300,
        -1,
        -1,
        0
      ],
      [
        540,
        545,
        10201,
        5,
        -1,
        -1,
        0
      ],
      [
        545,
        665,
        10301,
        120,
        1,
        21,
        0
      ],
      [
        665,
        675,
        110101,
        10,
        1,
        18,
        0
      ],
      [
        675,
        690,
        10301,
        15,
        1,
        18,
        0
      ],
      [
        690,
        750,
        20902,
        60,
        1,
        18,
        0
      ],
      [
        750,
        780,
        20901,
        30,
        1,
        18,
        0
      ],
      [
        780,
        810,
        20902,
        30,
        1,
        18,
        0
      ],
      [
        810,
        820,
        10301,
        10,
        1,
        18,
        0
      ],
      [
        820,
        840,
        20903,
        20,
        1,
        18,
        0
      ],
      [
        840,
        940,
        10301,
        100,
        1,
        18,
        0
      ],
      [
        940,
        955,
        10301,
        15,
        1,
        18,
        0
      ],
      [
        955,
        1020,
        10301,
        65,
        1,
        18,
        0
      ],
      [
        1020,
        1040,
        110101,
        20,
        1,
        18,
        0
      ],
      [
        1040,
        1055,
        10301,
        15,
        1,
        18,
        0
      ],
      [
        1055,
        1115,
        10301,
        60,
        1,
        18,
        0
      ],
      [
        1115,
        1145,
        10201,
        30,
        -1,
        -1,
        0
      ],
      [
        1145,
        1265,
        10301,
        120,
        1,
        18,
        0
      ],
      [
        1265,
        1485,
        120303,
        220,
        1,
        18,
        0
      ],
      [
        45,
        50,
        10301,
        5,
        1,
        18,
        0
      ],
      [
        50,
        240,
        10101,
        190,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210909211612,
    WECANTRIL: 6,
    WEGENHTH: 1,
    WEHBP: 2,
    WEPAINMD: 1,
    WEREST: 3,
    WETYPICAL: 2,
    TUDIARYDAY_x: 5,
    TRHOLIDAY_x: 0,
    TEAGE: 66,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 40,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 795,
    TRTFAMILY: 0,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 2,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        360,
        10101,
        120,
        -1,
        -1,
        0
      ],
      [
        360,
        390,
        10201,
        30,
        -1,
        -1,
        0
      ],
      [
        390,
        410,
        20681,
        20,
        1,
        19,
        0
      ],
      [
        410,
        435,
        20681,
        25,
        1,
        19,
        0
      ],
      [
        435,
        445,
        180782,
        10,
        12,
        19,
        0
      ],
      [
        445,
        450,
        70104,
        5,
        7,
        19,
        0
      ],
      [
        450,
        455,
        180280,
        5,
        12,
        19,
        0
      ],
      [
        455,
        460,
        20401,
        5,
        7,
        19,
        0
      ],
      [
        460,
        495,
        181101,
        35,
        12,
        19,
        0
      ],
      [
        495,
        515,
        110101,
        20,
        3,
        52,
        0
      ],
      [
        495,
        515,
        110101,
        20,
        3,
        53,
        0
      ],
      [
        515,
        755,
        40103,
        240,
        3,
        52,
        0
      ],
      [
        515,
        755,
        40103,
        240,
        3,
        53,
        0
      ],
      [
        755,
        760,
        180782,
        5,
        12,
        19,
        0
      ],
      [
        760,
        765,
        70104,
        5,
        7,
        19,
        0
      ],
      [
        765,
        800,
        180782,
        35,
        12,
        19,
        0
      ],
      [
        800,
        820,
        20402,
        20,
        1,
        19,
        0
      ],
      [
        820,
        940,
        20501,
        120,
        1,
        19,
        0
      ],
      [
        940,
        970,
        10201,
        30,
        -1,
        -1,
        0
      ],
      [
        970,
        990,
        20681,
        20,
        1,
        19,
        0
      ],
      [
        990,
        1005,
        20201,
        15,
        1,
        19,
        0
      ],
      [
        1005,
        1065,
        120303,
        60,
        1,
        19,
        0
      ],
      [
        1065,
        1500,
        10101,
        435,
        -1,
        -1,
        0
      ],
      [
        60,
        61,
        10301,
        1,
        1,
        19,
        0
      ],
      [
        61,
        68,
        10201,
        7,
        -1,
        -1,
        0
      ],
      [
        68,
        240,
        10101,
        172,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210403212256,
    WECANTRIL: 5,
    WEGENHTH: 5,
    WEHBP: 1,
    WEPAINMD: 2,
    WEREST: 2,
    WETYPICAL: 1,
    TUDIARYDAY_x: 6,
    TRHOLIDAY_x: 0,
    TEAGE: 56,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 43,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 40,
    TRDPFTPT_x: 2,
    TRERNWA_x: 37753,
    TRERNHLY: 1642,
    TRTALONE: 386,
    TRTFAMILY: 260,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 3,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        420,
        10101,
        180,
        -1,
        -1,
        0
      ],
      [
        420,
        480,
        10201,
        60,
        -1,
        -1,
        0
      ],
      [
        480,
        490,
        180280,
        10,
        13,
        51,
        0
      ],
      [
        490,
        505,
        20902,
        15,
        5,
        51,
        0
      ],
      [
        505,
        540,
        180280,
        35,
        13,
        51,
        0
      ],
      [
        540,
        750,
        20201,
        210,
        3,
        51,
        0
      ],
      [
        540,
        750,
        20201,
        210,
        3,
        52,
        0
      ],
      [
        540,
        750,
        20201,
        210,
        3,
        53,
        0
      ],
      [
        750,
        840,
        110101,
        90,
        3,
        51,
        0
      ],
      [
        750,
        840,
        110101,
        90,
        3,
        52,
        0
      ],
      [
        750,
        840,
        110101,
        90,
        3,
        53,
        0
      ],
      [
        840,
        1320,
        120201,
        480,
        3,
        51,
        0
      ],
      [
        840,
        1320,
        120201,
        480,
        3,
        52,
        0
      ],
      [
        840,
        1320,
        120201,
        480,
        3,
        53,
        0
      ],
      [
        1320,
        1350,
        20902,
        30,
        3,
        18,
        0
      ],
      [
        1350,
        1380,
        10201,
        30,
        -1,
        -1,
        0
      ],
      [
        1380,
        1395,
        120312,
        15,
        3,
        18,
        0
      ],
      [
        1395,
        1680,
        10101,
        285,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210707212053,
    WECANTRIL: 7,
    WEGENHTH: 2,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 3,
    WETYPICAL: 1,
    TUDIARYDAY_x: 7,
    TRHOLIDAY_x: 0,
    TEAGE: 43,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 44,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 40,
    TRDPFTPT_x: 1,
    TRERNWA_x: 169230,
    TRERNHLY: -1,
    TRTALONE: 45,
    TRTFAMILY: 840,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 2,
    TRSPPRES: 1,
    TESCHENR: 2,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        660,
        10101,
        420,
        -1,
        -1,
        0
      ],
      [
        660,
        670,
        10301,
        10,
        1,
        21,
        0
      ],
      [
        670,
        790,
        120303,
        120,
        1,
        21,
        0
      ],
      [
        790,
        810,
        10201,
        20,
        -1,
        -1,
        0
      ],
      [
        810,
        1380,
        120303,
        570,
        1,
        19,
        0
      ],
      [
        1380,
        1680,
        10101,
        300,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210403211232,
    WECANTRIL: 10,
    WEGENHTH: 3,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 2,
    WETYPICAL: 2,
    TUDIARYDAY_x: 4,
    TRHOLIDAY_x: 0,
    TEAGE: 63,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 39,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 570,
    TRTFAMILY: 0,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 2,
    TESCHENR: -1,
    happy_group: 3
  },
  {
    activity: [
      [
        240,
        480,
        10101,
        240,
        -1,
        -1,
        0
      ],
      [
        480,
        510,
        10201,
        30,
        -1,
        -1,
        0
      ],
      [
        510,
        515,
        181101,
        5,
        9,
        20,
        0
      ],
      [
        515,
        575,
        110101,
        60,
        4,
        20,
        0
      ],
      [
        575,
        580,
        180782,
        5,
        9,
        20,
        0
      ],
      [
        580,
        605,
        180782,
        25,
        12,
        20,
        0
      ],
      [
        605,
        755,
        70104,
        150,
        7,
        20,
        0
      ],
      [
        755,
        815,
        110101,
        60,
        4,
        20,
        0
      ],
      [
        815,
        935,
        70104,
        120,
        7,
        20,
        0
      ],
      [
        935,
        960,
        181283,
        25,
        12,
        20,
        0
      ],
      [
        960,
        1080,
        120301,
        120,
        11,
        20,
        0
      ],
      [
        1080,
        1200,
        120301,
        120,
        9,
        20,
        0
      ],
      [
        1200,
        1245,
        110101,
        45,
        11,
        20,
        0
      ],
      [
        1245,
        1305,
        20902,
        60,
        11,
        20,
        0
      ],
      [
        1305,
        1680,
        10101,
        375,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210908210779,
    WECANTRIL: 8,
    WEGENHTH: 3,
    WEHBP: 1,
    WEPAINMD: 1,
    WEREST: 1,
    WETYPICAL: 2,
    TUDIARYDAY_x: 7,
    TRHOLIDAY_x: 0,
    TEAGE: 38,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 41,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 22,
    TRDPFTPT_x: 1,
    TRERNWA_x: 1e5,
    TRERNHLY: -1,
    TRTALONE: 0,
    TRTFAMILY: 795,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 1,
    TRSPPRES: 1,
    TESCHENR: 2,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        840,
        10101,
        600,
        -1,
        -1,
        0
      ],
      [
        840,
        902,
        20101,
        62,
        1,
        18,
        0
      ],
      [
        902,
        962,
        20681,
        60,
        9,
        18,
        0
      ],
      [
        962,
        1052,
        120303,
        90,
        1,
        18,
        0
      ],
      [
        1052,
        1112,
        20201,
        60,
        1,
        18,
        0
      ],
      [
        1112,
        1155,
        10201,
        43,
        -1,
        -1,
        0
      ],
      [
        1155,
        1185,
        180501,
        30,
        12,
        18,
        0
      ],
      [
        1185,
        1440,
        50101,
        255,
        2,
        61,
        0
      ],
      [
        1185,
        1440,
        50101,
        255,
        2,
        62,
        0
      ],
      [
        0,
        30,
        110101,
        30,
        2,
        61,
        0
      ],
      [
        30,
        240,
        50101,
        210,
        2,
        61,
        0
      ],
      [
        30,
        240,
        50101,
        210,
        2,
        62,
        0
      ]
    ],
    TUCASEID: 20210301210736,
    WECANTRIL: 7,
    WEGENHTH: 2,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 2,
    WETYPICAL: 2,
    TUDIARYDAY_x: 7,
    TRHOLIDAY_x: 0,
    TEAGE: 57,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 43,
    PEHSPNON: 1,
    PTDTRACE: 1,
    TRDTIND1: 44,
    TRDPFTPT_x: 1,
    TRERNWA_x: 115384,
    TRERNHLY: 3400,
    TRTALONE: 302,
    TRTFAMILY: 0,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 1,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        420,
        10101,
        180,
        -1,
        -1,
        0
      ],
      [
        420,
        450,
        110101,
        30,
        1,
        18,
        0
      ],
      [
        450,
        750,
        60301,
        300,
        1,
        18,
        0
      ],
      [
        750,
        840,
        130131,
        90,
        1,
        26,
        0
      ],
      [
        840,
        960,
        60301,
        120,
        1,
        18,
        0
      ],
      [
        960,
        1080,
        20103,
        120,
        1,
        18,
        0
      ],
      [
        1080,
        1170,
        120306,
        90,
        1,
        26,
        0
      ],
      [
        1170,
        1230,
        110101,
        60,
        1,
        26,
        0
      ],
      [
        1230,
        1290,
        120303,
        60,
        1,
        26,
        0
      ],
      [
        1290,
        1300,
        10201,
        10,
        -1,
        -1,
        0
      ],
      [
        1300,
        1680,
        10101,
        380,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210402210274,
    WECANTRIL: 8,
    WEGENHTH: 1,
    WEHBP: 2,
    WEPAINMD: 1,
    WEREST: 2,
    WETYPICAL: 3,
    TUDIARYDAY_x: 1,
    TRHOLIDAY_x: 1,
    TEAGE: 25,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 43,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 49,
    TRDPFTPT_x: 2,
    TRERNWA_x: 24e3,
    TRERNHLY: -1,
    TRTALONE: 570,
    TRTFAMILY: 300,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 3,
    TESCHENR: 1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        420,
        10101,
        180,
        -1,
        -1,
        0
      ],
      [
        420,
        570,
        20101,
        150,
        1,
        19,
        0
      ],
      [
        570,
        600,
        110101,
        30,
        1,
        52,
        0
      ],
      [
        600,
        840,
        20101,
        240,
        1,
        19,
        0
      ],
      [
        840,
        870,
        110101,
        30,
        1,
        52,
        0
      ],
      [
        870,
        1020,
        20101,
        150,
        1,
        19,
        0
      ],
      [
        1020,
        1080,
        10201,
        60,
        -1,
        -1,
        0
      ],
      [
        1080,
        1140,
        110101,
        60,
        1,
        52,
        0
      ],
      [
        1080,
        1140,
        110101,
        60,
        1,
        21,
        0
      ],
      [
        1140,
        1215,
        180481,
        75,
        12,
        52,
        0
      ],
      [
        1215,
        1220,
        40112,
        5,
        89,
        52,
        0
      ],
      [
        1220,
        1295,
        180481,
        75,
        12,
        19,
        0
      ],
      [
        1295,
        1320,
        120303,
        25,
        1,
        21,
        0
      ],
      [
        1320,
        1680,
        10101,
        360,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210403212269,
    WECANTRIL: 2,
    WEGENHTH: 4,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 4,
    WETYPICAL: 2,
    TUDIARYDAY_x: 1,
    TRHOLIDAY_x: 0,
    TEAGE: 34,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 43,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 22,
    TRDPFTPT_x: 1,
    TRERNWA_x: 288461,
    TRERNHLY: 4469,
    TRTALONE: 615,
    TRTFAMILY: 200,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 2,
    TESCHENR: 2,
    happy_group: 1
  },
  {
    activity: [
      [
        240,
        450,
        10101,
        210,
        -1,
        -1,
        0
      ],
      [
        450,
        455,
        20201,
        5,
        1,
        19,
        0
      ],
      [
        455,
        475,
        110101,
        20,
        1,
        22,
        0
      ],
      [
        475,
        485,
        120101,
        10,
        1,
        22,
        0
      ],
      [
        485,
        500,
        20201,
        15,
        1,
        19,
        0
      ],
      [
        500,
        520,
        110101,
        20,
        1,
        22,
        0
      ],
      [
        520,
        570,
        20203,
        50,
        1,
        19,
        0
      ],
      [
        570,
        580,
        10201,
        10,
        -1,
        -1,
        0
      ],
      [
        580,
        610,
        130131,
        30,
        1,
        22,
        0
      ],
      [
        610,
        615,
        20101,
        5,
        1,
        19,
        0
      ],
      [
        615,
        625,
        20903,
        10,
        1,
        19,
        0
      ],
      [
        625,
        635,
        20101,
        10,
        1,
        19,
        0
      ],
      [
        635,
        665,
        160102,
        30,
        1,
        19,
        0
      ],
      [
        665,
        680,
        20501,
        15,
        1,
        22,
        0
      ],
      [
        680,
        690,
        120303,
        10,
        1,
        19,
        0
      ],
      [
        690,
        695,
        180701,
        5,
        13,
        22,
        0
      ],
      [
        695,
        715,
        70101,
        20,
        6,
        22,
        0
      ],
      [
        715,
        718,
        180280,
        3,
        13,
        22,
        0
      ],
      [
        718,
        720,
        20903,
        2,
        32,
        19,
        0
      ],
      [
        720,
        725,
        180280,
        5,
        13,
        22,
        0
      ],
      [
        725,
        730,
        20104,
        5,
        1,
        19,
        0
      ],
      [
        730,
        745,
        160101,
        15,
        1,
        19,
        0
      ],
      [
        745,
        755,
        110101,
        10,
        1,
        19,
        0
      ],
      [
        755,
        785,
        10301,
        30,
        1,
        19,
        0
      ],
      [
        785,
        810,
        120101,
        25,
        1,
        22,
        0
      ],
      [
        810,
        815,
        20102,
        5,
        1,
        19,
        0
      ],
      [
        815,
        827,
        120301,
        12,
        1,
        22,
        0
      ],
      [
        827,
        847,
        20102,
        20,
        1,
        19,
        0
      ],
      [
        847,
        857,
        160101,
        10,
        1,
        19,
        0
      ],
      [
        857,
        867,
        120301,
        10,
        1,
        19,
        0
      ],
      [
        867,
        987,
        120101,
        120,
        1,
        53,
        0
      ],
      [
        987,
        997,
        20202,
        10,
        1,
        19,
        0
      ],
      [
        997,
        1017,
        110101,
        20,
        1,
        22,
        0
      ],
      [
        1017,
        1027,
        20203,
        10,
        1,
        22,
        0
      ],
      [
        1027,
        1042,
        130131,
        15,
        1,
        22,
        0
      ],
      [
        1042,
        1132,
        120303,
        90,
        1,
        19,
        0
      ],
      [
        1132,
        1207,
        120312,
        75,
        1,
        19,
        0
      ],
      [
        1207,
        1267,
        120303,
        60,
        1,
        19,
        0
      ],
      [
        1267,
        1297,
        10201,
        30,
        -1,
        -1,
        0
      ],
      [
        1297,
        1302,
        10301,
        5,
        1,
        19,
        0
      ],
      [
        1302,
        1347,
        120312,
        45,
        1,
        19,
        0
      ],
      [
        1347,
        1467,
        120303,
        120,
        1,
        19,
        0
      ],
      [
        27,
        135,
        120312,
        108,
        1,
        19,
        0
      ],
      [
        135,
        240,
        10101,
        105,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210706211215,
    WECANTRIL: 6,
    WEGENHTH: 4,
    WEHBP: 1,
    WEPAINMD: 1,
    WEREST: 2,
    WETYPICAL: 2,
    TUDIARYDAY_x: 7,
    TRHOLIDAY_x: 0,
    TEAGE: 80,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 39,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 755,
    TRTFAMILY: 330,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 3,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        360,
        10101,
        120,
        -1,
        -1,
        0
      ],
      [
        360,
        390,
        110101,
        30,
        1,
        22,
        0
      ],
      [
        390,
        420,
        10201,
        30,
        -1,
        -1,
        0
      ],
      [
        420,
        435,
        30101,
        15,
        1,
        22,
        0
      ],
      [
        435,
        440,
        180381,
        5,
        12,
        22,
        0
      ],
      [
        440,
        450,
        30112,
        10,
        3,
        22,
        0
      ],
      [
        450,
        495,
        180501,
        45,
        12,
        18,
        0
      ],
      [
        495,
        505,
        180501,
        10,
        15,
        18,
        0
      ],
      [
        505,
        690,
        50101,
        185,
        1,
        62,
        0
      ],
      [
        690,
        720,
        110101,
        30,
        2,
        61,
        0
      ],
      [
        720,
        1080,
        50101,
        360,
        2,
        62,
        0
      ],
      [
        1080,
        1090,
        181101,
        10,
        15,
        18,
        0
      ],
      [
        1090,
        1100,
        181101,
        10,
        12,
        18,
        0
      ],
      [
        1100,
        1160,
        110101,
        60,
        4,
        58,
        0
      ],
      [
        1160,
        1195,
        181101,
        35,
        12,
        18,
        0
      ],
      [
        1195,
        1220,
        20203,
        25,
        1,
        18,
        0
      ],
      [
        1220,
        1250,
        10201,
        30,
        -1,
        -1,
        0
      ],
      [
        1250,
        1310,
        120303,
        60,
        1,
        18,
        0
      ],
      [
        1310,
        1340,
        120312,
        30,
        1,
        18,
        0
      ],
      [
        1340,
        1680,
        10101,
        340,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210806211630,
    WECANTRIL: 5,
    WEGENHTH: 1,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 2,
    WETYPICAL: 2,
    TUDIARYDAY_x: 2,
    TRHOLIDAY_x: 0,
    TEAGE: 37,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 43,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 45,
    TRDPFTPT_x: 1,
    TRERNWA_x: 18e4,
    TRERNHLY: -1,
    TRTALONE: 225,
    TRTFAMILY: 60,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 1,
    TRSPPRES: 3,
    TESCHENR: 2,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        510,
        10101,
        270,
        -1,
        -1,
        0
      ],
      [
        510,
        570,
        10201,
        60,
        -1,
        -1,
        0
      ],
      [
        570,
        600,
        110101,
        30,
        1,
        18,
        0
      ],
      [
        600,
        630,
        120303,
        30,
        1,
        18,
        0
      ],
      [
        630,
        675,
        20901,
        45,
        1,
        18,
        0
      ],
      [
        675,
        705,
        160101,
        30,
        1,
        18,
        0
      ],
      [
        705,
        715,
        181101,
        10,
        12,
        20,
        0
      ],
      [
        715,
        835,
        110101,
        120,
        11,
        20,
        0
      ],
      [
        835,
        855,
        181101,
        20,
        12,
        20,
        0
      ],
      [
        855,
        1005,
        20501,
        150,
        1,
        18,
        0
      ],
      [
        1005,
        1035,
        160101,
        30,
        1,
        18,
        0
      ],
      [
        1035,
        1050,
        10201,
        15,
        -1,
        -1,
        0
      ],
      [
        1050,
        1080,
        110101,
        30,
        1,
        20,
        0
      ],
      [
        1080,
        1110,
        120303,
        30,
        1,
        20,
        0
      ],
      [
        1110,
        1230,
        20501,
        120,
        1,
        18,
        0
      ],
      [
        1230,
        1260,
        120312,
        30,
        1,
        18,
        0
      ],
      [
        1260,
        1290,
        110101,
        30,
        1,
        18,
        0
      ],
      [
        1290,
        1350,
        29999,
        60,
        1,
        18,
        0
      ],
      [
        1350,
        1440,
        120303,
        90,
        1,
        18,
        0
      ],
      [
        0,
        30,
        20201,
        30,
        1,
        18,
        0
      ],
      [
        30,
        75,
        20203,
        45,
        1,
        18,
        0
      ],
      [
        75,
        105,
        20902,
        30,
        1,
        18,
        0
      ],
      [
        105,
        240,
        10101,
        135,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210808211030,
    WECANTRIL: 5,
    WEGENHTH: 3,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 3,
    WETYPICAL: 1,
    TUDIARYDAY_x: 7,
    TRHOLIDAY_x: 0,
    TEAGE: 71,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 43,
    PEHSPNON: 2,
    PTDTRACE: 7,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 750,
    TRTFAMILY: 210,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 1,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        245,
        10101,
        5,
        -1,
        -1,
        0
      ],
      [
        245,
        285,
        10201,
        40,
        -1,
        -1,
        0
      ],
      [
        285,
        300,
        20201,
        15,
        1,
        18,
        0
      ],
      [
        300,
        330,
        180501,
        30,
        13,
        20,
        0
      ],
      [
        330,
        540,
        50101,
        210,
        2,
        61,
        0
      ],
      [
        540,
        555,
        20201,
        15,
        2,
        18,
        0
      ],
      [
        555,
        750,
        50101,
        195,
        2,
        61,
        0
      ],
      [
        750,
        780,
        110101,
        30,
        2,
        61,
        0
      ],
      [
        780,
        930,
        50101,
        150,
        2,
        61,
        0
      ],
      [
        930,
        945,
        120301,
        15,
        2,
        18,
        0
      ],
      [
        945,
        1110,
        50101,
        165,
        2,
        61,
        0
      ],
      [
        1110,
        1140,
        180501,
        30,
        13,
        20,
        0
      ],
      [
        1140,
        1185,
        110101,
        45,
        1,
        20,
        0
      ],
      [
        1140,
        1185,
        110101,
        45,
        1,
        22,
        0
      ],
      [
        1140,
        1185,
        110101,
        45,
        1,
        22,
        0
      ],
      [
        1140,
        1185,
        110101,
        45,
        1,
        26,
        0
      ],
      [
        1140,
        1185,
        110101,
        45,
        1,
        26,
        0
      ],
      [
        1185,
        1230,
        120101,
        45,
        1,
        20,
        0
      ],
      [
        1185,
        1230,
        120101,
        45,
        1,
        22,
        0
      ],
      [
        1185,
        1230,
        120101,
        45,
        1,
        22,
        0
      ],
      [
        1185,
        1230,
        120101,
        45,
        1,
        26,
        0
      ],
      [
        1185,
        1230,
        120101,
        45,
        1,
        26,
        0
      ],
      [
        1230,
        1680,
        10101,
        450,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210403211582,
    WECANTRIL: 10,
    WEGENHTH: 2,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 2,
    WETYPICAL: 2,
    TUDIARYDAY_x: 6,
    TRHOLIDAY_x: 0,
    TEAGE: 43,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 43,
    PEHSPNON: 2,
    PTDTRACE: 4,
    TRDTIND1: 13,
    TRDPFTPT_x: 1,
    TRERNWA_x: 93600,
    TRERNHLY: 1800,
    TRTALONE: 45,
    TRTFAMILY: 150,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 1,
    TRSPPRES: 1,
    TESCHENR: 2,
    happy_group: 3
  },
  {
    activity: [
      [
        240,
        390,
        10101,
        150,
        -1,
        -1,
        0
      ],
      [
        390,
        400,
        10201,
        10,
        -1,
        -1,
        0
      ],
      [
        400,
        460,
        120303,
        60,
        1,
        18,
        0
      ],
      [
        460,
        660,
        10301,
        200,
        1,
        18,
        0
      ],
      [
        660,
        690,
        160101,
        30,
        1,
        18,
        0
      ],
      [
        690,
        900,
        10301,
        210,
        1,
        18,
        0
      ],
      [
        900,
        990,
        130131,
        90,
        9,
        20,
        0
      ],
      [
        990,
        1020,
        10201,
        30,
        -1,
        -1,
        0
      ],
      [
        1020,
        1080,
        120303,
        60,
        1,
        18,
        0
      ],
      [
        1080,
        1110,
        110101,
        30,
        1,
        18,
        0
      ],
      [
        1110,
        1155,
        160101,
        45,
        1,
        18,
        0
      ],
      [
        1155,
        1290,
        120303,
        135,
        1,
        18,
        0
      ],
      [
        1290,
        1500,
        10101,
        210,
        -1,
        -1,
        0
      ],
      [
        60,
        65,
        10201,
        5,
        -1,
        -1,
        0
      ],
      [
        65,
        240,
        120303,
        175,
        1,
        18,
        0
      ]
    ],
    TUCASEID: 20210705210828,
    WECANTRIL: 10,
    WEGENHTH: 3,
    WEHBP: 1,
    WEPAINMD: 1,
    WEREST: 2,
    WETYPICAL: 2,
    TUDIARYDAY_x: 3,
    TRHOLIDAY_x: 0,
    TEAGE: 72,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 39,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 945,
    TRTFAMILY: 90,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 1,
    TESCHENR: -1,
    happy_group: 3
  },
  {
    activity: [
      [
        240,
        300,
        10101,
        60,
        -1,
        -1,
        0
      ],
      [
        300,
        320,
        20681,
        20,
        1,
        18,
        0
      ],
      [
        320,
        350,
        10201,
        30,
        -1,
        -1,
        0
      ],
      [
        350,
        380,
        20681,
        30,
        1,
        18,
        0
      ],
      [
        380,
        500,
        50481,
        120,
        1,
        18,
        0
      ],
      [
        500,
        512,
        180782,
        12,
        12,
        18,
        0
      ],
      [
        512,
        557,
        70104,
        45,
        7,
        18,
        0
      ],
      [
        557,
        572,
        180782,
        15,
        12,
        18,
        0
      ],
      [
        572,
        662,
        50403,
        90,
        1,
        18,
        0
      ],
      [
        662,
        707,
        180589,
        45,
        12,
        18,
        0
      ],
      [
        707,
        827,
        50403,
        120,
        2,
        58,
        0
      ],
      [
        827,
        882,
        180589,
        55,
        12,
        18,
        0
      ],
      [
        882,
        892,
        110101,
        10,
        1,
        18,
        0
      ],
      [
        892,
        907,
        10201,
        15,
        -1,
        -1,
        0
      ],
      [
        907,
        929,
        181201,
        22,
        13,
        20,
        0
      ],
      [
        929,
        1019,
        120101,
        90,
        11,
        54,
        0
      ],
      [
        1019,
        1024,
        180782,
        5,
        13,
        20,
        0
      ],
      [
        1024,
        1044,
        70104,
        20,
        7,
        18,
        0
      ],
      [
        1044,
        1062,
        180782,
        18,
        13,
        20,
        0
      ],
      [
        1062,
        1082,
        20102,
        20,
        1,
        20,
        0
      ],
      [
        1082,
        1112,
        20201,
        30,
        1,
        20,
        0
      ],
      [
        1112,
        1142,
        110101,
        30,
        1,
        20,
        0
      ],
      [
        1142,
        1172,
        120303,
        30,
        1,
        20,
        0
      ],
      [
        1172,
        1680,
        10101,
        508,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210908211704,
    WECANTRIL: 8,
    WEGENHTH: 2,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 3,
    WETYPICAL: 2,
    TUDIARYDAY_x: 4,
    TRHOLIDAY_x: 0,
    TEAGE: 31,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 43,
    PEHSPNON: 2,
    PTDTRACE: 4,
    TRDTIND1: 41,
    TRDPFTPT_x: 1,
    TRERNWA_x: 213912,
    TRERNHLY: 5942,
    TRTALONE: 462,
    TRTFAMILY: 155,
    TRTFRIEND: 90,
    TRCHILDNUM_x: 0,
    TRSPPRES: 1,
    TESCHENR: 2,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        450,
        10101,
        210,
        -1,
        -1,
        0
      ],
      [
        450,
        495,
        110101,
        45,
        1,
        20,
        0
      ],
      [
        450,
        495,
        110101,
        45,
        1,
        22,
        0
      ],
      [
        495,
        810,
        50101,
        315,
        1,
        18,
        0
      ],
      [
        810,
        840,
        110101,
        30,
        1,
        18,
        0
      ],
      [
        840,
        1170,
        50101,
        330,
        1,
        18,
        0
      ],
      [
        1170,
        1320,
        120303,
        150,
        1,
        20,
        0
      ],
      [
        1320,
        1680,
        10101,
        360,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20211109210700,
    WECANTRIL: 6,
    WEGENHTH: 3,
    WEHBP: 1,
    WEPAINMD: 2,
    WEREST: 2,
    WETYPICAL: 2,
    TUDIARYDAY_x: 7,
    TRHOLIDAY_x: 0,
    TEAGE: 54,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 40,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 33,
    TRDPFTPT_x: 1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 30,
    TRTFAMILY: 195,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 1,
    TRSPPRES: 1,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        420,
        10101,
        180,
        -1,
        -1,
        0
      ],
      [
        420,
        430,
        181301,
        10,
        14,
        18,
        0
      ],
      [
        430,
        490,
        130131,
        60,
        31,
        18,
        0
      ],
      [
        490,
        500,
        181301,
        10,
        14,
        18,
        0
      ],
      [
        500,
        680,
        20101,
        180,
        1,
        18,
        0
      ],
      [
        680,
        800,
        20102,
        120,
        1,
        18,
        0
      ],
      [
        800,
        830,
        20101,
        30,
        1,
        18,
        0
      ],
      [
        830,
        920,
        20201,
        90,
        1,
        18,
        0
      ],
      [
        920,
        1080,
        20103,
        160,
        1,
        18,
        0
      ],
      [
        1080,
        1140,
        110101,
        60,
        1,
        20,
        0
      ],
      [
        1140,
        1260,
        20103,
        120,
        1,
        20,
        0
      ],
      [
        1260,
        1680,
        10101,
        420,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210604211299,
    WECANTRIL: 8,
    WEGENHTH: 3,
    WEHBP: 1,
    WEPAINMD: 1,
    WEREST: 1,
    WETYPICAL: 2,
    TUDIARYDAY_x: 1,
    TRHOLIDAY_x: 0,
    TEAGE: 74,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 39,
    PEHSPNON: 1,
    PTDTRACE: 1,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 660,
    TRTFAMILY: 180,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 1,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        360,
        10101,
        120,
        -1,
        -1,
        0
      ],
      [
        360,
        480,
        20201,
        120,
        1,
        18,
        0
      ],
      [
        480,
        540,
        10201,
        60,
        -1,
        -1,
        0
      ],
      [
        540,
        550,
        110101,
        10,
        1,
        20,
        0
      ],
      [
        550,
        560,
        181401,
        10,
        12,
        20,
        0
      ],
      [
        560,
        620,
        140101,
        60,
        5,
        56,
        0
      ],
      [
        620,
        630,
        181101,
        10,
        12,
        20,
        0
      ],
      [
        630,
        690,
        110101,
        60,
        4,
        20,
        0
      ],
      [
        690,
        700,
        181101,
        10,
        1,
        20,
        0
      ],
      [
        700,
        760,
        130131,
        60,
        9,
        56,
        0
      ],
      [
        760,
        880,
        120312,
        120,
        1,
        20,
        0
      ],
      [
        880,
        940,
        20101,
        60,
        1,
        18,
        0
      ],
      [
        940,
        1030,
        120312,
        90,
        1,
        18,
        0
      ],
      [
        1030,
        1032,
        20201,
        2,
        1,
        18,
        0
      ],
      [
        1032,
        1042,
        110101,
        10,
        1,
        20,
        0
      ],
      [
        1042,
        1200,
        120303,
        158,
        1,
        18,
        0
      ],
      [
        1200,
        1320,
        120303,
        120,
        1,
        20,
        0
      ],
      [
        1320,
        1680,
        10101,
        360,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210404211768,
    WECANTRIL: 7,
    WEGENHTH: 2,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 2,
    WETYPICAL: 2,
    TUDIARYDAY_x: 1,
    TRHOLIDAY_x: 0,
    TEAGE: 70,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 42,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 430,
    TRTFAMILY: 350,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 1,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        420,
        10101,
        180,
        -1,
        -1,
        0
      ],
      [
        420,
        435,
        20681,
        15,
        1,
        18,
        0
      ],
      [
        435,
        440,
        20201,
        5,
        1,
        18,
        0
      ],
      [
        440,
        470,
        20681,
        30,
        1,
        18,
        0
      ],
      [
        470,
        570,
        120303,
        100,
        1,
        18,
        0
      ],
      [
        570,
        580,
        20201,
        10,
        1,
        18,
        0
      ],
      [
        580,
        640,
        120101,
        60,
        1,
        20,
        0
      ],
      [
        640,
        660,
        20681,
        20,
        1,
        18,
        0
      ],
      [
        660,
        720,
        20101,
        60,
        1,
        20,
        0
      ],
      [
        720,
        780,
        110101,
        60,
        1,
        20,
        0
      ],
      [
        780,
        840,
        130131,
        60,
        9,
        20,
        0
      ],
      [
        840,
        900,
        20501,
        60,
        1,
        18,
        0
      ],
      [
        900,
        910,
        180701,
        10,
        12,
        18,
        0
      ],
      [
        910,
        970,
        70101,
        60,
        6,
        18,
        0
      ],
      [
        970,
        980,
        180701,
        10,
        12,
        18,
        0
      ],
      [
        980,
        995,
        20902,
        15,
        1,
        20,
        0
      ],
      [
        995,
        1055,
        120301,
        60,
        1,
        20,
        0
      ],
      [
        1055,
        1085,
        20201,
        30,
        1,
        20,
        0
      ],
      [
        1085,
        1145,
        110101,
        60,
        1,
        20,
        0
      ],
      [
        1145,
        1320,
        120303,
        175,
        1,
        20,
        0
      ],
      [
        1320,
        1335,
        10201,
        15,
        -1,
        -1,
        0
      ],
      [
        1335,
        1680,
        10101,
        345,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210303211328,
    WECANTRIL: 5,
    WEGENHTH: 3,
    WEHBP: 1,
    WEPAINMD: 1,
    WEREST: 3,
    WETYPICAL: 2,
    TUDIARYDAY_x: 7,
    TRHOLIDAY_x: 0,
    TEAGE: 73,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 43,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 320,
    TRTFAMILY: 580,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 1,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        360,
        10101,
        120,
        -1,
        -1,
        0
      ],
      [
        360,
        480,
        120303,
        120,
        1,
        18,
        0
      ],
      [
        480,
        570,
        130131,
        90,
        9,
        18,
        0
      ],
      [
        570,
        573,
        30101,
        3,
        1,
        22,
        0
      ],
      [
        573,
        603,
        20201,
        30,
        1,
        18,
        0
      ],
      [
        603,
        633,
        20203,
        30,
        1,
        18,
        0
      ],
      [
        633,
        723,
        30108,
        90,
        1,
        22,
        0
      ],
      [
        633,
        723,
        30108,
        90,
        1,
        21,
        0
      ],
      [
        723,
        728,
        180805,
        5,
        12,
        18,
        0
      ],
      [
        728,
        733,
        80501,
        5,
        11,
        21,
        0
      ],
      [
        733,
        840,
        80501,
        107,
        11,
        58,
        0
      ],
      [
        840,
        845,
        180805,
        5,
        12,
        18,
        0
      ],
      [
        845,
        853,
        181301,
        8,
        12,
        18,
        0
      ],
      [
        853,
        915,
        130131,
        62,
        11,
        18,
        0
      ],
      [
        915,
        922,
        181301,
        7,
        12,
        18,
        0
      ],
      [
        922,
        1020,
        120101,
        98,
        1,
        21,
        0
      ],
      [
        1020,
        1065,
        20201,
        45,
        1,
        21,
        0
      ],
      [
        1065,
        1110,
        110101,
        45,
        1,
        21,
        0
      ],
      [
        1110,
        1140,
        20203,
        30,
        1,
        21,
        0
      ],
      [
        1140,
        1200,
        130131,
        60,
        9,
        21,
        0
      ],
      [
        1200,
        1290,
        120312,
        90,
        1,
        21,
        0
      ],
      [
        1290,
        1305,
        20905,
        15,
        1,
        21,
        0
      ],
      [
        1305,
        1320,
        10201,
        15,
        -1,
        -1,
        0
      ],
      [
        1320,
        1680,
        10101,
        360,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210704211634,
    WECANTRIL: 10,
    WEGENHTH: 2,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 1,
    WETYPICAL: 3,
    TUDIARYDAY_x: 6,
    TRHOLIDAY_x: 0,
    TEAGE: 65,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 44,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 357,
    TRTFAMILY: 93,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 1,
    TRSPPRES: 2,
    TESCHENR: -1,
    happy_group: 3
  },
  {
    activity: [
      [
        240,
        600,
        10101,
        360,
        -1,
        -1,
        0
      ],
      [
        600,
        630,
        110101,
        30,
        1,
        18,
        0
      ],
      [
        630,
        1080,
        120312,
        450,
        1,
        18,
        0
      ],
      [
        1080,
        1200,
        120303,
        120,
        1,
        20,
        0
      ],
      [
        1200,
        1380,
        169989,
        180,
        1,
        18,
        0
      ],
      [
        1380,
        1410,
        160101,
        30,
        1,
        18,
        0
      ],
      [
        1410,
        1680,
        10101,
        270,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20211209211888,
    WECANTRIL: 6,
    WEGENHTH: 2,
    WEHBP: 2,
    WEPAINMD: 1,
    WEREST: 2,
    WETYPICAL: 1,
    TUDIARYDAY_x: 7,
    TRHOLIDAY_x: 0,
    TEAGE: 70,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 44,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 690,
    TRTFAMILY: 120,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 1,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        270,
        20681,
        30,
        1,
        18,
        0
      ],
      [
        270,
        275,
        20681,
        5,
        1,
        18,
        0
      ],
      [
        275,
        305,
        120312,
        30,
        1,
        18,
        0
      ],
      [
        305,
        365,
        10201,
        60,
        -1,
        -1,
        0
      ],
      [
        365,
        380,
        110101,
        15,
        1,
        18,
        0
      ],
      [
        380,
        400,
        20904,
        20,
        1,
        18,
        0
      ],
      [
        400,
        415,
        20902,
        15,
        1,
        18,
        0
      ],
      [
        415,
        435,
        10201,
        20,
        -1,
        -1,
        0
      ],
      [
        435,
        455,
        120301,
        20,
        1,
        18,
        0
      ],
      [
        455,
        470,
        120308,
        15,
        1,
        18,
        0
      ],
      [
        470,
        480,
        10201,
        10,
        -1,
        -1,
        0
      ],
      [
        480,
        495,
        120301,
        15,
        1,
        20,
        0
      ],
      [
        495,
        510,
        20681,
        15,
        1,
        18,
        0
      ],
      [
        510,
        555,
        20902,
        45,
        1,
        18,
        0
      ],
      [
        555,
        565,
        181401,
        10,
        12,
        20,
        0
      ],
      [
        565,
        625,
        140101,
        60,
        5,
        20,
        0
      ],
      [
        625,
        645,
        120101,
        20,
        5,
        56,
        0
      ],
      [
        625,
        645,
        120101,
        20,
        5,
        20,
        0
      ],
      [
        645,
        655,
        181201,
        10,
        12,
        20,
        0
      ],
      [
        655,
        665,
        10201,
        10,
        -1,
        -1,
        0
      ],
      [
        665,
        685,
        20902,
        20,
        1,
        20,
        0
      ],
      [
        685,
        700,
        160101,
        15,
        1,
        20,
        0
      ],
      [
        700,
        720,
        20201,
        20,
        1,
        20,
        0
      ],
      [
        720,
        725,
        180701,
        5,
        12,
        18,
        0
      ],
      [
        725,
        740,
        70101,
        15,
        6,
        18,
        0
      ],
      [
        740,
        745,
        180701,
        5,
        12,
        18,
        0
      ],
      [
        745,
        760,
        20201,
        15,
        1,
        20,
        0
      ],
      [
        760,
        820,
        120301,
        60,
        1,
        20,
        0
      ],
      [
        820,
        850,
        110101,
        30,
        1,
        52,
        0
      ],
      [
        820,
        850,
        110101,
        30,
        1,
        53,
        0
      ],
      [
        820,
        850,
        110101,
        30,
        1,
        20,
        0
      ],
      [
        850,
        870,
        20203,
        20,
        1,
        53,
        0
      ],
      [
        870,
        1050,
        120301,
        180,
        1,
        52,
        0
      ],
      [
        870,
        1050,
        120301,
        180,
        1,
        53,
        0
      ],
      [
        870,
        1050,
        120301,
        180,
        1,
        20,
        0
      ],
      [
        1050,
        1110,
        120303,
        60,
        1,
        20,
        0
      ],
      [
        1110,
        1290,
        120303,
        180,
        1,
        20,
        0
      ],
      [
        1290,
        1320,
        500106,
        30,
        -1,
        -1,
        0
      ],
      [
        1320,
        1350,
        120303,
        30,
        1,
        20,
        0
      ],
      [
        1350,
        1680,
        10101,
        330,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210504211741,
    WECANTRIL: 8,
    WEGENHTH: 3,
    WEHBP: 1,
    WEPAINMD: 1,
    WEREST: 1,
    WETYPICAL: 1,
    TUDIARYDAY_x: 1,
    TRHOLIDAY_x: 0,
    TEAGE: 71,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 40,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 49,
    TRDPFTPT_x: 2,
    TRERNWA_x: 12853,
    TRERNHLY: -1,
    TRTALONE: 235,
    TRTFAMILY: 745,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 1,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        450,
        10101,
        210,
        -1,
        -1,
        0
      ],
      [
        450,
        495,
        10201,
        45,
        -1,
        -1,
        0
      ],
      [
        495,
        525,
        20201,
        30,
        1,
        24,
        0
      ],
      [
        525,
        540,
        110101,
        15,
        1,
        24,
        0
      ],
      [
        540,
        550,
        180280,
        10,
        12,
        18,
        0
      ],
      [
        550,
        580,
        20701,
        30,
        11,
        18,
        0
      ],
      [
        580,
        590,
        180782,
        10,
        12,
        18,
        0
      ],
      [
        590,
        591,
        70102,
        1,
        11,
        18,
        0
      ],
      [
        591,
        621,
        180782,
        30,
        12,
        18,
        0
      ],
      [
        621,
        641,
        70104,
        20,
        7,
        18,
        0
      ],
      [
        641,
        661,
        70101,
        20,
        6,
        18,
        0
      ],
      [
        661,
        686,
        20901,
        25,
        11,
        18,
        0
      ],
      [
        686,
        706,
        180782,
        20,
        12,
        18,
        0
      ],
      [
        706,
        714,
        70103,
        8,
        4,
        18,
        0
      ],
      [
        714,
        744,
        110101,
        30,
        4,
        18,
        0
      ],
      [
        744,
        764,
        181101,
        20,
        12,
        18,
        0
      ],
      [
        764,
        779,
        20902,
        15,
        1,
        18,
        0
      ],
      [
        779,
        789,
        20104,
        10,
        1,
        24,
        0
      ],
      [
        789,
        900,
        10201,
        111,
        -1,
        -1,
        0
      ],
      [
        900,
        990,
        120305,
        90,
        1,
        18,
        0
      ],
      [
        990,
        1035,
        20201,
        45,
        1,
        18,
        0
      ],
      [
        1035,
        1060,
        110101,
        25,
        1,
        24,
        0
      ],
      [
        1060,
        1090,
        10201,
        30,
        -1,
        -1,
        0
      ],
      [
        1090,
        1365,
        120303,
        275,
        1,
        18,
        0
      ],
      [
        1365,
        1680,
        10101,
        315,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210807210777,
    WECANTRIL: 8,
    WEGENHTH: 1,
    WEHBP: 2,
    WEPAINMD: 1,
    WEREST: 1,
    WETYPICAL: 2,
    TUDIARYDAY_x: 7,
    TRHOLIDAY_x: 0,
    TEAGE: 38,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 39,
    PEHSPNON: 2,
    PTDTRACE: 2,
    TRDTIND1: 14,
    TRDPFTPT_x: 1,
    TRERNWA_x: 44100,
    TRERNHLY: 1225,
    TRTALONE: 649,
    TRTFAMILY: 80,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 3,
    TESCHENR: 2,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        450,
        10101,
        210,
        -1,
        -1,
        0
      ],
      [
        450,
        451,
        10201,
        1,
        -1,
        -1,
        0
      ],
      [
        451,
        452,
        20681,
        1,
        1,
        20,
        0
      ],
      [
        452,
        457,
        20201,
        5,
        1,
        18,
        0
      ],
      [
        457,
        487,
        110101,
        30,
        1,
        20,
        0
      ],
      [
        487,
        502,
        120303,
        15,
        1,
        20,
        0
      ],
      [
        502,
        517,
        10201,
        15,
        -1,
        -1,
        0
      ],
      [
        517,
        525,
        10201,
        8,
        -1,
        -1,
        0
      ],
      [
        525,
        540,
        20902,
        15,
        1,
        20,
        0
      ],
      [
        540,
        720,
        150302,
        180,
        9,
        20,
        0
      ],
      [
        720,
        725,
        181501,
        5,
        14,
        20,
        0
      ],
      [
        725,
        730,
        10201,
        5,
        -1,
        -1,
        0
      ],
      [
        730,
        735,
        20103,
        5,
        1,
        20,
        0
      ],
      [
        735,
        765,
        10201,
        30,
        -1,
        -1,
        0
      ],
      [
        765,
        810,
        120303,
        45,
        1,
        20,
        0
      ],
      [
        810,
        815,
        180782,
        5,
        12,
        20,
        0
      ],
      [
        815,
        830,
        70103,
        15,
        4,
        20,
        0
      ],
      [
        830,
        870,
        110101,
        40,
        4,
        20,
        0
      ],
      [
        870,
        875,
        180782,
        5,
        12,
        20,
        0
      ],
      [
        875,
        905,
        70104,
        30,
        7,
        20,
        0
      ],
      [
        905,
        925,
        180782,
        20,
        12,
        20,
        0
      ],
      [
        925,
        955,
        70104,
        30,
        7,
        20,
        0
      ],
      [
        955,
        960,
        181101,
        5,
        12,
        20,
        0
      ],
      [
        960,
        1005,
        110101,
        45,
        4,
        20,
        0
      ],
      [
        1005,
        1025,
        181101,
        20,
        12,
        20,
        0
      ],
      [
        1025,
        1115,
        20801,
        90,
        1,
        18,
        0
      ],
      [
        1115,
        1295,
        120303,
        180,
        1,
        18,
        0
      ],
      [
        1295,
        1355,
        20904,
        60,
        1,
        18,
        0
      ],
      [
        1355,
        1385,
        120303,
        30,
        1,
        18,
        0
      ],
      [
        1385,
        1680,
        10101,
        295,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20211110211334,
    WECANTRIL: 10,
    WEGENHTH: 3,
    WEHBP: 2,
    WEPAINMD: 1,
    WEREST: 1,
    WETYPICAL: 2,
    TUDIARYDAY_x: 4,
    TRHOLIDAY_x: 0,
    TEAGE: 68,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 43,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 365,
    TRTFAMILY: 511,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 1,
    TESCHENR: -1,
    happy_group: 3
  },
  {
    activity: [
      [
        240,
        450,
        10101,
        210,
        -1,
        -1,
        0
      ],
      [
        450,
        480,
        110101,
        30,
        1,
        19,
        0
      ],
      [
        480,
        510,
        120312,
        30,
        1,
        19,
        0
      ],
      [
        510,
        720,
        120303,
        210,
        1,
        19,
        0
      ],
      [
        720,
        840,
        120303,
        120,
        1,
        19,
        0
      ],
      [
        840,
        900,
        20102,
        60,
        1,
        19,
        0
      ],
      [
        900,
        1080,
        120303,
        180,
        1,
        19,
        0
      ],
      [
        1080,
        1100,
        20201,
        20,
        1,
        19,
        0
      ],
      [
        1100,
        1140,
        110101,
        40,
        1,
        19,
        0
      ],
      [
        1140,
        1620,
        120303,
        480,
        1,
        19,
        0
      ],
      [
        180,
        240,
        10101,
        60,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20211009211808,
    WECANTRIL: 8,
    WEGENHTH: 2,
    WEHBP: 1,
    WEPAINMD: 2,
    WEREST: 2,
    WETYPICAL: 2,
    TUDIARYDAY_x: 2,
    TRHOLIDAY_x: 0,
    TEAGE: 73,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 43,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 1170,
    TRTFAMILY: 0,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 3,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        720,
        10101,
        480,
        -1,
        -1,
        0
      ],
      [
        720,
        765,
        110101,
        45,
        1,
        19,
        0
      ],
      [
        765,
        960,
        120303,
        195,
        1,
        19,
        0
      ],
      [
        960,
        990,
        20201,
        30,
        1,
        19,
        0
      ],
      [
        990,
        1020,
        110101,
        30,
        1,
        19,
        0
      ],
      [
        1020,
        1440,
        120303,
        420,
        1,
        19,
        0
      ],
      [
        0,
        240,
        10101,
        240,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20211211211566,
    WECANTRIL: 9,
    WEGENHTH: 3,
    WEHBP: 2,
    WEPAINMD: 1,
    WEREST: 3,
    WETYPICAL: 3,
    TUDIARYDAY_x: 7,
    TRHOLIDAY_x: 0,
    TEAGE: 61,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 37,
    PEHSPNON: 1,
    PTDTRACE: 1,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 720,
    TRTFAMILY: 0,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 3,
    TESCHENR: -1,
    happy_group: 3
  },
  {
    activity: [
      [
        240,
        330,
        10101,
        90,
        -1,
        -1,
        0
      ],
      [
        330,
        365,
        110101,
        35,
        1,
        20,
        0
      ],
      [
        365,
        425,
        20402,
        60,
        1,
        20,
        0
      ],
      [
        425,
        435,
        180782,
        10,
        12,
        20,
        0
      ],
      [
        435,
        480,
        70104,
        45,
        7,
        20,
        0
      ],
      [
        480,
        490,
        180782,
        10,
        12,
        20,
        0
      ],
      [
        490,
        750,
        20402,
        260,
        1,
        20,
        0
      ],
      [
        750,
        765,
        180701,
        15,
        12,
        18,
        0
      ],
      [
        765,
        780,
        70101,
        15,
        6,
        18,
        0
      ],
      [
        780,
        795,
        180701,
        15,
        12,
        18,
        0
      ],
      [
        795,
        805,
        20201,
        10,
        1,
        20,
        0
      ],
      [
        805,
        825,
        110101,
        20,
        1,
        20,
        0
      ],
      [
        825,
        845,
        180782,
        20,
        12,
        20,
        0
      ],
      [
        845,
        890,
        70104,
        45,
        7,
        20,
        0
      ],
      [
        890,
        895,
        180782,
        5,
        12,
        20,
        0
      ],
      [
        895,
        905,
        70102,
        10,
        7,
        20,
        0
      ],
      [
        905,
        980,
        181283,
        75,
        12,
        20,
        0
      ],
      [
        980,
        995,
        70103,
        15,
        4,
        20,
        0
      ],
      [
        995,
        1035,
        180782,
        40,
        12,
        20,
        0
      ],
      [
        1035,
        1060,
        110101,
        25,
        1,
        20,
        0
      ],
      [
        1060,
        1305,
        120303,
        245,
        1,
        20,
        0
      ],
      [
        1305,
        1315,
        10201,
        10,
        -1,
        -1,
        0
      ],
      [
        1315,
        1620,
        10101,
        305,
        -1,
        -1,
        0
      ],
      [
        180,
        185,
        30402,
        5,
        1,
        20,
        0
      ],
      [
        185,
        240,
        10101,
        55,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210403211134,
    WECANTRIL: 7,
    WEGENHTH: 2,
    WEHBP: 1,
    WEPAINMD: 1,
    WEREST: 2,
    WETYPICAL: 1,
    TUDIARYDAY_x: 7,
    TRHOLIDAY_x: 0,
    TEAGE: 60,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 43,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 4,
    TRDPFTPT_x: 1,
    TRERNWA_x: 259615,
    TRERNHLY: -1,
    TRTALONE: 45,
    TRTFAMILY: 935,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 1,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        435,
        10101,
        195,
        -1,
        -1,
        0
      ],
      [
        435,
        480,
        181301,
        45,
        12,
        56,
        0
      ],
      [
        480,
        900,
        130112,
        420,
        11,
        56,
        0
      ],
      [
        900,
        945,
        181301,
        45,
        12,
        56,
        0
      ],
      [
        945,
        1005,
        10101,
        60,
        -1,
        -1,
        0
      ],
      [
        1005,
        1035,
        20701,
        30,
        1,
        18,
        0
      ],
      [
        1035,
        1095,
        120308,
        60,
        1,
        18,
        0
      ],
      [
        1095,
        1140,
        500106,
        45,
        -1,
        -1,
        0
      ],
      [
        1140,
        1260,
        110101,
        120,
        1,
        20,
        0
      ],
      [
        1260,
        1290,
        20701,
        30,
        1,
        18,
        0
      ],
      [
        1290,
        1320,
        10301,
        30,
        1,
        20,
        0
      ],
      [
        1320,
        1350,
        10299,
        30,
        -1,
        -1,
        0
      ],
      [
        1350,
        1680,
        10101,
        330,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20211211212436,
    WECANTRIL: 8,
    WEGENHTH: 3,
    WEHBP: 1,
    WEPAINMD: 1,
    WEREST: 2,
    WETYPICAL: 1,
    TUDIARYDAY_x: 6,
    TRHOLIDAY_x: 0,
    TEAGE: 79,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 44,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 120,
    TRTFAMILY: 150,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 1,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        450,
        10101,
        210,
        -1,
        -1,
        0
      ],
      [
        450,
        480,
        110101,
        30,
        1,
        19,
        0
      ],
      [
        480,
        510,
        10201,
        30,
        -1,
        -1,
        0
      ],
      [
        510,
        530,
        180701,
        20,
        12,
        19,
        0
      ],
      [
        530,
        620,
        70101,
        90,
        7,
        19,
        0
      ],
      [
        620,
        640,
        180701,
        20,
        12,
        19,
        0
      ],
      [
        640,
        685,
        10201,
        45,
        -1,
        -1,
        0
      ],
      [
        685,
        690,
        181401,
        5,
        12,
        19,
        0
      ],
      [
        690,
        750,
        140101,
        60,
        5,
        57,
        0
      ],
      [
        690,
        750,
        140101,
        60,
        5,
        58,
        0
      ],
      [
        750,
        755,
        181401,
        5,
        12,
        19,
        0
      ],
      [
        755,
        900,
        20101,
        145,
        1,
        19,
        0
      ],
      [
        900,
        925,
        180481,
        25,
        12,
        19,
        0
      ],
      [
        925,
        955,
        40112,
        30,
        3,
        52,
        0
      ],
      [
        955,
        985,
        180782,
        30,
        12,
        52,
        0
      ],
      [
        985,
        1015,
        70104,
        30,
        1,
        52,
        0
      ],
      [
        1015,
        1025,
        180782,
        10,
        12,
        52,
        0
      ],
      [
        1025,
        1170,
        40109,
        145,
        1,
        52,
        0
      ],
      [
        1170,
        1190,
        110101,
        20,
        1,
        52,
        0
      ],
      [
        1190,
        1260,
        40186,
        70,
        1,
        52,
        0
      ],
      [
        1260,
        1280,
        10201,
        20,
        -1,
        -1,
        0
      ],
      [
        1280,
        1400,
        120303,
        120,
        1,
        19,
        0
      ],
      [
        1400,
        1680,
        10101,
        280,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210706210585,
    WECANTRIL: 5,
    WEGENHTH: 3,
    WEHBP: 1,
    WEPAINMD: 2,
    WEREST: 2,
    WETYPICAL: 1,
    TUDIARYDAY_x: 1,
    TRHOLIDAY_x: 0,
    TEAGE: 64,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 44,
    PEHSPNON: 2,
    PTDTRACE: 2,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 460,
    TRTFAMILY: 335,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 3,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        360,
        10101,
        120,
        -1,
        -1,
        0
      ],
      [
        360,
        380,
        10201,
        20,
        -1,
        -1,
        0
      ],
      [
        380,
        390,
        20201,
        10,
        1,
        24,
        0
      ],
      [
        380,
        390,
        20201,
        10,
        1,
        24,
        0
      ],
      [
        390,
        400,
        110101,
        10,
        1,
        24,
        0
      ],
      [
        390,
        400,
        110101,
        10,
        1,
        24,
        0
      ],
      [
        400,
        410,
        20902,
        10,
        1,
        18,
        0
      ],
      [
        410,
        420,
        10201,
        10,
        -1,
        -1,
        0
      ],
      [
        420,
        500,
        180601,
        80,
        12,
        18,
        0
      ],
      [
        500,
        690,
        60101,
        190,
        8,
        58,
        0
      ],
      [
        690,
        695,
        180782,
        5,
        12,
        18,
        0
      ],
      [
        695,
        705,
        70102,
        10,
        11,
        18,
        0
      ],
      [
        705,
        710,
        180782,
        5,
        12,
        18,
        0
      ],
      [
        710,
        725,
        70103,
        15,
        4,
        18,
        0
      ],
      [
        725,
        810,
        180782,
        85,
        12,
        18,
        0
      ],
      [
        810,
        815,
        10201,
        5,
        -1,
        -1,
        0
      ],
      [
        815,
        875,
        180804,
        60,
        12,
        18,
        0
      ],
      [
        875,
        915,
        80401,
        40,
        11,
        62,
        0
      ],
      [
        915,
        975,
        180804,
        60,
        12,
        18,
        0
      ],
      [
        975,
        1005,
        110101,
        30,
        1,
        18,
        0
      ],
      [
        1005,
        1050,
        20201,
        45,
        1,
        24,
        0
      ],
      [
        1005,
        1050,
        20201,
        45,
        1,
        24,
        0
      ],
      [
        1050,
        1080,
        110101,
        30,
        1,
        24,
        0
      ],
      [
        1050,
        1080,
        110101,
        30,
        1,
        24,
        0
      ],
      [
        1080,
        1125,
        20203,
        45,
        1,
        24,
        0
      ],
      [
        1125,
        1200,
        60301,
        75,
        1,
        18,
        0
      ],
      [
        1200,
        1305,
        120303,
        105,
        1,
        24,
        0
      ],
      [
        1200,
        1305,
        120303,
        105,
        1,
        24,
        0
      ],
      [
        1305,
        1680,
        10101,
        375,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20211211212527,
    WECANTRIL: 8,
    WEGENHTH: 3,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 2,
    WETYPICAL: 2,
    TUDIARYDAY_x: 6,
    TRHOLIDAY_x: 0,
    TEAGE: 41,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 43,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 36,
    TRDPFTPT_x: 2,
    TRERNWA_x: 72e3,
    TRERNHLY: 4500,
    TRTALONE: 435,
    TRTFAMILY: 245,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 3,
    TESCHENR: 1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        450,
        10101,
        210,
        -1,
        -1,
        0
      ],
      [
        450,
        480,
        110101,
        30,
        1,
        19,
        0
      ],
      [
        480,
        495,
        10201,
        15,
        -1,
        -1,
        0
      ],
      [
        495,
        500,
        20203,
        5,
        1,
        19,
        0
      ],
      [
        500,
        540,
        20902,
        40,
        1,
        19,
        0
      ],
      [
        540,
        570,
        181301,
        30,
        12,
        19,
        0
      ],
      [
        570,
        690,
        130104,
        120,
        11,
        54,
        0
      ],
      [
        690,
        720,
        120101,
        30,
        11,
        54,
        0
      ],
      [
        720,
        735,
        181101,
        15,
        12,
        19,
        0
      ],
      [
        735,
        855,
        110101,
        120,
        4,
        54,
        0
      ],
      [
        855,
        885,
        181101,
        30,
        12,
        19,
        0
      ],
      [
        885,
        890,
        20902,
        5,
        1,
        19,
        0
      ],
      [
        890,
        950,
        20701,
        60,
        1,
        19,
        0
      ],
      [
        950,
        1010,
        20101,
        60,
        1,
        19,
        0
      ],
      [
        1010,
        1070,
        20201,
        60,
        1,
        19,
        0
      ],
      [
        1070,
        1100,
        110101,
        30,
        1,
        19,
        0
      ],
      [
        1100,
        1260,
        120309,
        160,
        1,
        19,
        0
      ],
      [
        1260,
        1290,
        10201,
        30,
        -1,
        -1,
        0
      ],
      [
        1290,
        1680,
        10101,
        390,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20211009211400,
    WECANTRIL: 8,
    WEGENHTH: 1,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 1,
    WETYPICAL: 2,
    TUDIARYDAY_x: 7,
    TRHOLIDAY_x: 0,
    TEAGE: 35,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 43,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 51,
    TRDPFTPT_x: 1,
    TRERNWA_x: 176923,
    TRERNHLY: 4400,
    TRTALONE: 525,
    TRTFAMILY: 0,
    TRTFRIEND: 270,
    TRCHILDNUM_x: 0,
    TRSPPRES: 3,
    TESCHENR: 2,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        480,
        10101,
        240,
        -1,
        -1,
        0
      ],
      [
        480,
        600,
        20201,
        120,
        1,
        22,
        0
      ],
      [
        480,
        600,
        20201,
        120,
        1,
        22,
        0
      ],
      [
        600,
        780,
        20203,
        180,
        1,
        22,
        0
      ],
      [
        780,
        1080,
        20102,
        300,
        1,
        22,
        0
      ],
      [
        1080,
        1200,
        20201,
        120,
        1,
        22,
        0
      ],
      [
        1200,
        1260,
        110101,
        60,
        1,
        22,
        0
      ],
      [
        1200,
        1260,
        110101,
        60,
        1,
        20,
        0
      ],
      [
        1200,
        1260,
        110101,
        60,
        1,
        22,
        0
      ],
      [
        1200,
        1260,
        110101,
        60,
        1,
        22,
        0
      ],
      [
        1260,
        1320,
        20203,
        60,
        1,
        22,
        0
      ],
      [
        1320,
        1380,
        120303,
        60,
        1,
        22,
        0
      ],
      [
        1380,
        1680,
        10101,
        300,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210301212237,
    WECANTRIL: 9,
    WEGENHTH: 2,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 1,
    WETYPICAL: 1,
    TUDIARYDAY_x: 7,
    TRHOLIDAY_x: 0,
    TEAGE: 48,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 34,
    PEHSPNON: 1,
    PTDTRACE: 1,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 0,
    TRTFAMILY: 900,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 1,
    TRSPPRES: 1,
    TESCHENR: 2,
    happy_group: 3
  },
  {
    activity: [
      [
        240,
        480,
        10101,
        240,
        -1,
        -1,
        0
      ],
      [
        480,
        510,
        10201,
        30,
        -1,
        -1,
        0
      ],
      [
        510,
        520,
        20681,
        10,
        1,
        18,
        0
      ],
      [
        520,
        540,
        120301,
        20,
        1,
        18,
        0
      ],
      [
        540,
        550,
        180804,
        10,
        12,
        18,
        0
      ],
      [
        550,
        615,
        80403,
        65,
        11,
        58,
        0
      ],
      [
        615,
        660,
        80401,
        45,
        11,
        58,
        0
      ],
      [
        660,
        670,
        180804,
        10,
        12,
        18,
        0
      ],
      [
        670,
        700,
        20102,
        30,
        1,
        18,
        0
      ],
      [
        700,
        715,
        20681,
        15,
        1,
        18,
        0
      ],
      [
        715,
        775,
        10101,
        60,
        -1,
        -1,
        0
      ],
      [
        775,
        820,
        120101,
        45,
        1,
        56,
        0
      ],
      [
        820,
        850,
        20102,
        30,
        1,
        18,
        0
      ],
      [
        850,
        860,
        160105,
        10,
        1,
        18,
        0
      ],
      [
        860,
        920,
        120303,
        60,
        1,
        18,
        0
      ],
      [
        920,
        940,
        30111,
        20,
        1,
        18,
        0
      ],
      [
        940,
        942,
        30112,
        2,
        1,
        23,
        0
      ],
      [
        940,
        942,
        30112,
        2,
        1,
        23,
        0
      ],
      [
        942,
        962,
        20201,
        20,
        1,
        23,
        0
      ],
      [
        942,
        962,
        20201,
        20,
        1,
        23,
        0
      ],
      [
        962,
        980,
        120303,
        18,
        1,
        22,
        0
      ],
      [
        980,
        1010,
        120101,
        30,
        1,
        20,
        0
      ],
      [
        1010,
        1030,
        180381,
        20,
        13,
        22,
        0
      ],
      [
        1030,
        1045,
        30111,
        15,
        4,
        22,
        0
      ],
      [
        1045,
        1065,
        180381,
        20,
        13,
        22,
        0
      ],
      [
        1065,
        1105,
        110101,
        40,
        1,
        20,
        0
      ],
      [
        1065,
        1105,
        110101,
        40,
        1,
        22,
        0
      ],
      [
        1065,
        1105,
        110101,
        40,
        1,
        23,
        0
      ],
      [
        1065,
        1105,
        110101,
        40,
        1,
        23,
        0
      ],
      [
        1065,
        1105,
        110101,
        40,
        1,
        23,
        0
      ],
      [
        1105,
        1135,
        20203,
        30,
        1,
        20,
        0
      ],
      [
        1135,
        1200,
        120303,
        65,
        1,
        20,
        0
      ],
      [
        1135,
        1200,
        120303,
        65,
        1,
        23,
        0
      ],
      [
        1200,
        1220,
        30101,
        20,
        1,
        23,
        0
      ],
      [
        1200,
        1220,
        30101,
        20,
        1,
        23,
        0
      ],
      [
        1200,
        1220,
        30101,
        20,
        1,
        23,
        0
      ],
      [
        1220,
        1230,
        10201,
        10,
        -1,
        -1,
        0
      ],
      [
        1230,
        1290,
        120303,
        60,
        1,
        20,
        0
      ],
      [
        1290,
        1680,
        10101,
        390,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20211009211505,
    WECANTRIL: 5,
    WEGENHTH: 5,
    WEHBP: 1,
    WEPAINMD: 2,
    WEREST: 4,
    WETYPICAL: 2,
    TUDIARYDAY_x: 2,
    TRHOLIDAY_x: 0,
    TEAGE: 49,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 41,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 215,
    TRTFAMILY: 340,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 4,
    TRSPPRES: 1,
    TESCHENR: 2,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        360,
        10101,
        120,
        -1,
        -1,
        0
      ],
      [
        360,
        420,
        10201,
        60,
        -1,
        -1,
        0
      ],
      [
        420,
        455,
        20201,
        35,
        1,
        18,
        0
      ],
      [
        455,
        485,
        110101,
        30,
        1,
        22,
        0
      ],
      [
        455,
        485,
        110101,
        30,
        1,
        22,
        0
      ],
      [
        485,
        575,
        500106,
        90,
        -1,
        -1,
        0
      ],
      [
        575,
        585,
        180782,
        10,
        12,
        18,
        0
      ],
      [
        585,
        625,
        70104,
        40,
        6,
        18,
        0
      ],
      [
        625,
        626,
        180782,
        1,
        12,
        18,
        0
      ],
      [
        626,
        641,
        70104,
        15,
        7,
        18,
        0
      ],
      [
        641,
        646,
        180782,
        5,
        12,
        18,
        0
      ],
      [
        646,
        651,
        70104,
        5,
        7,
        18,
        0
      ],
      [
        651,
        661,
        180782,
        10,
        12,
        18,
        0
      ],
      [
        661,
        691,
        70103,
        30,
        4,
        18,
        0
      ],
      [
        691,
        716,
        180782,
        25,
        1,
        18,
        0
      ],
      [
        716,
        736,
        20902,
        20,
        12,
        18,
        0
      ],
      [
        736,
        756,
        20104,
        20,
        1,
        18,
        0
      ],
      [
        756,
        846,
        50101,
        90,
        1,
        18,
        0
      ],
      [
        846,
        891,
        120101,
        45,
        1,
        56,
        0
      ],
      [
        891,
        951,
        160102,
        60,
        1,
        18,
        0
      ],
      [
        951,
        1071,
        10101,
        120,
        -1,
        -1,
        0
      ],
      [
        1071,
        1111,
        110101,
        40,
        1,
        22,
        0
      ],
      [
        1071,
        1111,
        110101,
        40,
        1,
        22,
        0
      ],
      [
        1111,
        1380,
        120303,
        269,
        1,
        22,
        0
      ],
      [
        1111,
        1380,
        120303,
        269,
        1,
        22,
        0
      ],
      [
        1380,
        1680,
        10101,
        300,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210402210687,
    WECANTRIL: 8,
    WEGENHTH: 2,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 1,
    WETYPICAL: 1,
    TUDIARYDAY_x: 5,
    TRHOLIDAY_x: 0,
    TEAGE: 49,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 44,
    PEHSPNON: 2,
    PTDTRACE: 2,
    TRDTIND1: 42,
    TRDPFTPT_x: 1,
    TRERNWA_x: 125e3,
    TRERNHLY: -1,
    TRTALONE: 276,
    TRTFAMILY: 339,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 2,
    TRSPPRES: 3,
    TESCHENR: 2,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        360,
        10101,
        120,
        -1,
        -1,
        0
      ],
      [
        360,
        420,
        120312,
        60,
        1,
        19,
        0
      ],
      [
        420,
        480,
        10201,
        60,
        -1,
        -1,
        0
      ],
      [
        480,
        540,
        20101,
        60,
        1,
        19,
        0
      ],
      [
        540,
        555,
        20201,
        15,
        1,
        19,
        0
      ],
      [
        555,
        615,
        110101,
        60,
        1,
        19,
        0
      ],
      [
        615,
        720,
        20904,
        105,
        1,
        19,
        0
      ],
      [
        720,
        780,
        20101,
        60,
        1,
        19,
        0
      ],
      [
        780,
        795,
        20201,
        15,
        1,
        19,
        0
      ],
      [
        795,
        840,
        160101,
        45,
        1,
        19,
        0
      ],
      [
        840,
        900,
        130131,
        60,
        9,
        19,
        0
      ],
      [
        900,
        915,
        20902,
        15,
        1,
        19,
        0
      ],
      [
        915,
        945,
        181201,
        30,
        12,
        19,
        0
      ],
      [
        945,
        1005,
        120101,
        60,
        3,
        52,
        0
      ],
      [
        1005,
        1035,
        120101,
        30,
        3,
        53,
        0
      ],
      [
        1035,
        1050,
        181201,
        15,
        12,
        19,
        0
      ],
      [
        1050,
        1065,
        120101,
        15,
        1,
        19,
        0
      ],
      [
        1065,
        1085,
        20201,
        20,
        1,
        19,
        0
      ],
      [
        1085,
        1145,
        120303,
        60,
        1,
        19,
        0
      ],
      [
        1145,
        1205,
        110101,
        60,
        1,
        19,
        0
      ],
      [
        1205,
        1385,
        120303,
        180,
        1,
        19,
        0
      ],
      [
        1385,
        1680,
        10101,
        295,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210402211424,
    WECANTRIL: 6,
    WEGENHTH: 1,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 2,
    WETYPICAL: 1,
    TUDIARYDAY_x: 4,
    TRHOLIDAY_x: 0,
    TEAGE: 85,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 40,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 875,
    TRTFAMILY: 90,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 3,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        480,
        10101,
        240,
        -1,
        -1,
        0
      ],
      [
        480,
        500,
        110101,
        20,
        3,
        51,
        0
      ],
      [
        480,
        500,
        110101,
        20,
        3,
        53,
        0
      ],
      [
        500,
        620,
        181201,
        120,
        13,
        52,
        0
      ],
      [
        500,
        620,
        181201,
        120,
        13,
        53,
        0
      ],
      [
        620,
        1020,
        120101,
        400,
        3,
        52,
        0
      ],
      [
        620,
        1020,
        120101,
        400,
        3,
        53,
        0
      ],
      [
        1020,
        1080,
        110101,
        60,
        3,
        52,
        0
      ],
      [
        1020,
        1080,
        110101,
        60,
        3,
        53,
        0
      ],
      [
        1080,
        1200,
        120101,
        120,
        3,
        52,
        0
      ],
      [
        1080,
        1200,
        120101,
        120,
        3,
        53,
        0
      ],
      [
        1200,
        1230,
        120308,
        30,
        3,
        18,
        0
      ],
      [
        1230,
        1680,
        10101,
        450,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20211111210847,
    WECANTRIL: 5,
    WEGENHTH: 3,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 1,
    WETYPICAL: 1,
    TUDIARYDAY_x: 7,
    TRHOLIDAY_x: 0,
    TEAGE: 24,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 40,
    PEHSPNON: 1,
    PTDTRACE: 1,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 30,
    TRTFAMILY: 720,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 1,
    TESCHENR: 2,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        450,
        10101,
        210,
        -1,
        -1,
        0
      ],
      [
        450,
        510,
        120308,
        60,
        1,
        18,
        0
      ],
      [
        510,
        540,
        20201,
        30,
        1,
        20,
        0
      ],
      [
        540,
        570,
        110101,
        30,
        1,
        20,
        0
      ],
      [
        540,
        570,
        110101,
        30,
        1,
        22,
        0
      ],
      [
        540,
        570,
        110101,
        30,
        1,
        22,
        0
      ],
      [
        570,
        590,
        20902,
        20,
        1,
        20,
        0
      ],
      [
        590,
        620,
        20501,
        30,
        1,
        22,
        0
      ],
      [
        590,
        620,
        20501,
        30,
        1,
        22,
        0
      ],
      [
        620,
        680,
        10201,
        60,
        -1,
        -1,
        0
      ],
      [
        680,
        695,
        20902,
        15,
        1,
        20,
        0
      ],
      [
        680,
        695,
        20902,
        15,
        1,
        22,
        0
      ],
      [
        680,
        695,
        20902,
        15,
        1,
        22,
        0
      ],
      [
        695,
        750,
        181201,
        55,
        13,
        20,
        0
      ],
      [
        695,
        750,
        181201,
        55,
        13,
        22,
        0
      ],
      [
        695,
        750,
        181201,
        55,
        13,
        22,
        0
      ],
      [
        750,
        840,
        120101,
        90,
        3,
        51,
        0
      ],
      [
        750,
        840,
        120101,
        90,
        3,
        20,
        0
      ],
      [
        750,
        840,
        120101,
        90,
        3,
        22,
        0
      ],
      [
        750,
        840,
        120101,
        90,
        3,
        22,
        0
      ],
      [
        840,
        870,
        180381,
        30,
        13,
        20,
        0
      ],
      [
        840,
        870,
        180381,
        30,
        13,
        22,
        0
      ],
      [
        840,
        870,
        180381,
        30,
        13,
        22,
        0
      ],
      [
        870,
        930,
        30103,
        60,
        11,
        20,
        0
      ],
      [
        870,
        930,
        30103,
        60,
        11,
        22,
        0
      ],
      [
        870,
        930,
        30103,
        60,
        11,
        22,
        0
      ],
      [
        930,
        950,
        110101,
        20,
        11,
        20,
        0
      ],
      [
        930,
        950,
        110101,
        20,
        11,
        22,
        0
      ],
      [
        930,
        950,
        110101,
        20,
        11,
        22,
        0
      ],
      [
        950,
        955,
        180782,
        5,
        13,
        20,
        0
      ],
      [
        950,
        955,
        180782,
        5,
        13,
        22,
        0
      ],
      [
        950,
        955,
        180782,
        5,
        13,
        22,
        0
      ],
      [
        955,
        1015,
        70104,
        60,
        7,
        20,
        0
      ],
      [
        955,
        1015,
        70104,
        60,
        7,
        22,
        0
      ],
      [
        955,
        1015,
        70104,
        60,
        7,
        22,
        0
      ],
      [
        1015,
        1040,
        180782,
        25,
        13,
        20,
        0
      ],
      [
        1015,
        1040,
        180782,
        25,
        13,
        22,
        0
      ],
      [
        1015,
        1040,
        180782,
        25,
        13,
        22,
        0
      ],
      [
        1040,
        1050,
        10201,
        10,
        -1,
        -1,
        0
      ],
      [
        1050,
        1055,
        181202,
        5,
        14,
        20,
        0
      ],
      [
        1050,
        1055,
        181202,
        5,
        14,
        22,
        0
      ],
      [
        1050,
        1055,
        181202,
        5,
        14,
        22,
        0
      ],
      [
        1055,
        1170,
        120201,
        115,
        9,
        54,
        0
      ],
      [
        1055,
        1170,
        120201,
        115,
        9,
        20,
        0
      ],
      [
        1055,
        1170,
        120201,
        115,
        9,
        22,
        0
      ],
      [
        1055,
        1170,
        120201,
        115,
        9,
        22,
        0
      ],
      [
        1170,
        1175,
        181202,
        5,
        14,
        20,
        0
      ],
      [
        1170,
        1175,
        181202,
        5,
        14,
        22,
        0
      ],
      [
        1170,
        1175,
        181202,
        5,
        14,
        22,
        0
      ],
      [
        1175,
        1190,
        20201,
        15,
        1,
        18,
        0
      ],
      [
        1190,
        1200,
        20202,
        10,
        1,
        22,
        0
      ],
      [
        1190,
        1200,
        20202,
        10,
        1,
        22,
        0
      ],
      [
        1200,
        1230,
        110101,
        30,
        1,
        20,
        0
      ],
      [
        1230,
        1290,
        120303,
        60,
        1,
        20,
        0
      ],
      [
        1290,
        1295,
        30186,
        5,
        1,
        20,
        0
      ],
      [
        1290,
        1295,
        30186,
        5,
        1,
        22,
        0
      ],
      [
        1290,
        1295,
        30186,
        5,
        1,
        22,
        0
      ],
      [
        1295,
        1310,
        10201,
        15,
        -1,
        -1,
        0
      ],
      [
        1310,
        1680,
        10101,
        370,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210504212067,
    WECANTRIL: 7,
    WEGENHTH: 3,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 2,
    WETYPICAL: 1,
    TUDIARYDAY_x: 7,
    TRHOLIDAY_x: 0,
    TEAGE: 44,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 43,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 36,
    TRDPFTPT_x: 2,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 75,
    TRTFAMILY: 700,
    TRTFRIEND: 115,
    TRCHILDNUM_x: 2,
    TRSPPRES: 1,
    TESCHENR: 2,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        360,
        10101,
        120,
        -1,
        -1,
        0
      ],
      [
        360,
        420,
        120303,
        60,
        1,
        19,
        0
      ],
      [
        420,
        450,
        50101,
        30,
        1,
        19,
        0
      ],
      [
        450,
        480,
        10201,
        30,
        -1,
        -1,
        0
      ],
      [
        480,
        490,
        180501,
        10,
        12,
        19,
        0
      ],
      [
        490,
        690,
        50101,
        200,
        2,
        61,
        0
      ],
      [
        690,
        700,
        180501,
        10,
        12,
        19,
        0
      ],
      [
        700,
        1020,
        50101,
        320,
        1,
        19,
        0
      ],
      [
        1020,
        1050,
        120101,
        30,
        1,
        54,
        0
      ],
      [
        1050,
        1170,
        20101,
        120,
        1,
        19,
        0
      ],
      [
        1170,
        1185,
        181101,
        15,
        12,
        19,
        0
      ],
      [
        1185,
        1260,
        110101,
        75,
        4,
        54,
        0
      ],
      [
        1260,
        1380,
        120101,
        120,
        4,
        54,
        0
      ],
      [
        1380,
        1395,
        181201,
        15,
        12,
        19,
        0
      ],
      [
        1395,
        1680,
        10101,
        285,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20211009211008,
    WECANTRIL: 5,
    WEGENHTH: 3,
    WEHBP: 2,
    WEPAINMD: 1,
    WEREST: 4,
    WETYPICAL: 2,
    TUDIARYDAY_x: 6,
    TRHOLIDAY_x: 0,
    TEAGE: 38,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 45,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 22,
    TRDPFTPT_x: 1,
    TRERNWA_x: 96153,
    TRERNHLY: -1,
    TRTALONE: 230,
    TRTFAMILY: 0,
    TRTFRIEND: 225,
    TRCHILDNUM_x: 0,
    TRSPPRES: 3,
    TESCHENR: 2,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        330,
        120308,
        90,
        1,
        18,
        0
      ],
      [
        330,
        390,
        10101,
        60,
        -1,
        -1,
        0
      ],
      [
        390,
        420,
        10102,
        30,
        -1,
        -1,
        0
      ],
      [
        420,
        440,
        10201,
        20,
        -1,
        -1,
        0
      ],
      [
        440,
        441,
        10301,
        1,
        1,
        18,
        0
      ],
      [
        441,
        451,
        20201,
        10,
        1,
        18,
        0
      ],
      [
        451,
        463,
        110101,
        12,
        1,
        18,
        0
      ],
      [
        463,
        470,
        180501,
        7,
        1,
        18,
        0
      ],
      [
        470,
        600,
        50101,
        130,
        2,
        60,
        0
      ],
      [
        600,
        615,
        110101,
        15,
        2,
        60,
        0
      ],
      [
        615,
        810,
        50101,
        195,
        2,
        60,
        0
      ],
      [
        810,
        825,
        110101,
        15,
        2,
        60,
        0
      ],
      [
        825,
        990,
        50101,
        165,
        2,
        60,
        0
      ],
      [
        990,
        997,
        180481,
        7,
        12,
        18,
        0
      ],
      [
        997,
        1022,
        40186,
        25,
        3,
        52,
        0
      ],
      [
        997,
        1022,
        40186,
        25,
        3,
        53,
        0
      ],
      [
        1022,
        1037,
        180481,
        15,
        12,
        18,
        0
      ],
      [
        1037,
        1057,
        10201,
        20,
        -1,
        -1,
        0
      ],
      [
        1057,
        1097,
        110101,
        40,
        1,
        20,
        0
      ],
      [
        1097,
        1140,
        120303,
        43,
        1,
        20,
        0
      ],
      [
        1140,
        1175,
        140102,
        35,
        1,
        20,
        0
      ],
      [
        1175,
        1410,
        120303,
        235,
        1,
        20,
        0
      ],
      [
        1410,
        1680,
        10101,
        270,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210403212021,
    WECANTRIL: 8,
    WEGENHTH: 3,
    WEHBP: 1,
    WEPAINMD: 1,
    WEREST: 2,
    WETYPICAL: 2,
    TUDIARYDAY_x: 3,
    TRHOLIDAY_x: 0,
    TEAGE: 79,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 43,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 34,
    TRDPFTPT_x: 2,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 142,
    TRTFAMILY: 378,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 1,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        420,
        10101,
        180,
        -1,
        -1,
        0
      ],
      [
        420,
        440,
        30101,
        20,
        1,
        22,
        0
      ],
      [
        420,
        440,
        30101,
        20,
        1,
        22,
        0
      ],
      [
        420,
        440,
        30101,
        20,
        1,
        22,
        0
      ],
      [
        440,
        460,
        30101,
        20,
        1,
        22,
        0
      ],
      [
        440,
        460,
        30101,
        20,
        1,
        22,
        0
      ],
      [
        440,
        460,
        30101,
        20,
        1,
        22,
        0
      ],
      [
        460,
        495,
        30101,
        35,
        1,
        22,
        0
      ],
      [
        460,
        495,
        30101,
        35,
        1,
        22,
        0
      ],
      [
        460,
        495,
        30101,
        35,
        1,
        22,
        0
      ],
      [
        495,
        500,
        180381,
        5,
        12,
        22,
        0
      ],
      [
        495,
        500,
        180381,
        5,
        12,
        22,
        0
      ],
      [
        500,
        505,
        30112,
        5,
        8,
        18,
        0
      ],
      [
        505,
        510,
        180381,
        5,
        12,
        22,
        0
      ],
      [
        510,
        570,
        120303,
        60,
        1,
        22,
        0
      ],
      [
        570,
        630,
        20101,
        60,
        1,
        18,
        0
      ],
      [
        630,
        690,
        20102,
        60,
        1,
        18,
        0
      ],
      [
        690,
        710,
        30101,
        20,
        1,
        22,
        0
      ],
      [
        710,
        770,
        10201,
        60,
        -1,
        -1,
        0
      ],
      [
        770,
        775,
        180782,
        5,
        12,
        22,
        0
      ],
      [
        775,
        820,
        70104,
        45,
        7,
        22,
        0
      ],
      [
        820,
        827,
        180381,
        7,
        12,
        22,
        0
      ],
      [
        827,
        880,
        30111,
        53,
        8,
        22,
        0
      ],
      [
        880,
        881,
        30112,
        1,
        8,
        22,
        0
      ],
      [
        880,
        881,
        30112,
        1,
        8,
        22,
        0
      ],
      [
        880,
        881,
        30112,
        1,
        8,
        22,
        0
      ],
      [
        881,
        886,
        180381,
        5,
        12,
        22,
        0
      ],
      [
        881,
        886,
        180381,
        5,
        12,
        22,
        0
      ],
      [
        881,
        886,
        180381,
        5,
        12,
        22,
        0
      ],
      [
        886,
        895,
        20104,
        9,
        1,
        22,
        0
      ],
      [
        886,
        895,
        20104,
        9,
        1,
        22,
        0
      ],
      [
        886,
        895,
        20104,
        9,
        1,
        22,
        0
      ],
      [
        895,
        900,
        180804,
        5,
        12,
        18,
        0
      ],
      [
        900,
        960,
        80401,
        60,
        11,
        18,
        0
      ],
      [
        960,
        967,
        180701,
        7,
        12,
        18,
        0
      ],
      [
        967,
        1020,
        70101,
        53,
        6,
        18,
        0
      ],
      [
        1020,
        1025,
        180701,
        5,
        12,
        18,
        0
      ],
      [
        1025,
        1045,
        20104,
        20,
        1,
        18,
        0
      ],
      [
        1045,
        1100,
        30101,
        55,
        1,
        20,
        0
      ],
      [
        1045,
        1100,
        30101,
        55,
        1,
        22,
        0
      ],
      [
        1045,
        1100,
        30101,
        55,
        1,
        22,
        0
      ],
      [
        1045,
        1100,
        30101,
        55,
        1,
        22,
        0
      ],
      [
        1100,
        1110,
        180381,
        10,
        13,
        20,
        0
      ],
      [
        1100,
        1110,
        180381,
        10,
        13,
        22,
        0
      ],
      [
        1100,
        1110,
        180381,
        10,
        13,
        22,
        0
      ],
      [
        1100,
        1110,
        180381,
        10,
        13,
        22,
        0
      ],
      [
        1110,
        1135,
        30109,
        25,
        11,
        20,
        0
      ],
      [
        1110,
        1135,
        30109,
        25,
        11,
        22,
        0
      ],
      [
        1110,
        1135,
        30109,
        25,
        11,
        22,
        0
      ],
      [
        1110,
        1135,
        30109,
        25,
        11,
        22,
        0
      ],
      [
        1135,
        1150,
        180280,
        15,
        13,
        20,
        0
      ],
      [
        1135,
        1150,
        180280,
        15,
        13,
        22,
        0
      ],
      [
        1135,
        1150,
        180280,
        15,
        13,
        22,
        0
      ],
      [
        1135,
        1150,
        180280,
        15,
        13,
        22,
        0
      ],
      [
        1150,
        1152,
        20902,
        2,
        3,
        20,
        0
      ],
      [
        1150,
        1152,
        20902,
        2,
        3,
        22,
        0
      ],
      [
        1150,
        1152,
        20902,
        2,
        3,
        22,
        0
      ],
      [
        1150,
        1152,
        20902,
        2,
        3,
        22,
        0
      ],
      [
        1152,
        1157,
        180782,
        5,
        13,
        20,
        0
      ],
      [
        1152,
        1157,
        180782,
        5,
        13,
        22,
        0
      ],
      [
        1152,
        1157,
        180782,
        5,
        13,
        22,
        0
      ],
      [
        1152,
        1157,
        180782,
        5,
        13,
        22,
        0
      ],
      [
        1157,
        1172,
        70103,
        15,
        4,
        52,
        0
      ],
      [
        1157,
        1172,
        70103,
        15,
        4,
        20,
        0
      ],
      [
        1157,
        1172,
        70103,
        15,
        4,
        22,
        0
      ],
      [
        1157,
        1172,
        70103,
        15,
        4,
        22,
        0
      ],
      [
        1157,
        1172,
        70103,
        15,
        4,
        22,
        0
      ],
      [
        1172,
        1177,
        180782,
        5,
        13,
        52,
        0
      ],
      [
        1172,
        1177,
        180782,
        5,
        13,
        20,
        0
      ],
      [
        1172,
        1177,
        180782,
        5,
        13,
        22,
        0
      ],
      [
        1172,
        1177,
        180782,
        5,
        13,
        22,
        0
      ],
      [
        1172,
        1177,
        180782,
        5,
        13,
        22,
        0
      ],
      [
        1177,
        1202,
        110101,
        25,
        1,
        52,
        0
      ],
      [
        1177,
        1202,
        110101,
        25,
        1,
        20,
        0
      ],
      [
        1177,
        1202,
        110101,
        25,
        1,
        22,
        0
      ],
      [
        1177,
        1202,
        110101,
        25,
        1,
        22,
        0
      ],
      [
        1177,
        1202,
        110101,
        25,
        1,
        22,
        0
      ],
      [
        1202,
        1222,
        30101,
        20,
        1,
        52,
        0
      ],
      [
        1202,
        1222,
        30101,
        20,
        1,
        20,
        0
      ],
      [
        1202,
        1222,
        30101,
        20,
        1,
        22,
        0
      ],
      [
        1202,
        1222,
        30101,
        20,
        1,
        22,
        0
      ],
      [
        1202,
        1222,
        30101,
        20,
        1,
        22,
        0
      ],
      [
        1222,
        1227,
        30101,
        5,
        1,
        52,
        0
      ],
      [
        1222,
        1227,
        30101,
        5,
        1,
        20,
        0
      ],
      [
        1222,
        1227,
        30101,
        5,
        1,
        22,
        0
      ],
      [
        1222,
        1227,
        30101,
        5,
        1,
        22,
        0
      ],
      [
        1222,
        1227,
        30101,
        5,
        1,
        22,
        0
      ],
      [
        1227,
        1260,
        30101,
        33,
        1,
        52,
        0
      ],
      [
        1227,
        1260,
        30101,
        33,
        1,
        20,
        0
      ],
      [
        1227,
        1260,
        30101,
        33,
        1,
        22,
        0
      ],
      [
        1227,
        1260,
        30101,
        33,
        1,
        22,
        0
      ],
      [
        1227,
        1260,
        30101,
        33,
        1,
        22,
        0
      ],
      [
        1260,
        1380,
        120303,
        120,
        1,
        18,
        0
      ],
      [
        1380,
        1410,
        10201,
        30,
        -1,
        -1,
        0
      ],
      [
        1410,
        1680,
        10101,
        270,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20211009211037,
    WECANTRIL: 8,
    WEGENHTH: 3,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 3,
    WETYPICAL: 1,
    TUDIARYDAY_x: 5,
    TRHOLIDAY_x: 0,
    TEAGE: 27,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 40,
    PEHSPNON: 2,
    PTDTRACE: 6,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 395,
    TRTFAMILY: 505,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 3,
    TRSPPRES: 1,
    TESCHENR: 2,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        480,
        10101,
        240,
        -1,
        -1,
        0
      ],
      [
        480,
        540,
        120312,
        60,
        1,
        18,
        0
      ],
      [
        540,
        630,
        500101,
        90,
        1,
        18,
        0
      ],
      [
        630,
        705,
        140101,
        75,
        1,
        20,
        0
      ],
      [
        630,
        705,
        140101,
        75,
        1,
        22,
        0
      ],
      [
        705,
        735,
        20201,
        30,
        1,
        20,
        0
      ],
      [
        705,
        735,
        20201,
        30,
        1,
        22,
        0
      ],
      [
        735,
        750,
        110101,
        15,
        1,
        20,
        0
      ],
      [
        735,
        750,
        110101,
        15,
        1,
        22,
        0
      ],
      [
        750,
        810,
        30502,
        60,
        1,
        22,
        0
      ],
      [
        810,
        1110,
        20501,
        300,
        1,
        18,
        0
      ],
      [
        1110,
        1140,
        20201,
        30,
        1,
        20,
        0
      ],
      [
        1140,
        1170,
        110101,
        30,
        1,
        20,
        0
      ],
      [
        1170,
        1320,
        120303,
        150,
        1,
        20,
        0
      ],
      [
        1320,
        1350,
        120307,
        30,
        1,
        20,
        0
      ],
      [
        1350,
        1680,
        10101,
        330,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210303211330,
    WECANTRIL: 10,
    WEGENHTH: 2,
    WEHBP: 1,
    WEPAINMD: 2,
    WEREST: 1,
    WETYPICAL: 2,
    TUDIARYDAY_x: 1,
    TRHOLIDAY_x: 0,
    TEAGE: 60,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 41,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 51,
    TRDPFTPT_x: 1,
    TRERNWA_x: 85e3,
    TRERNHLY: 2400,
    TRTALONE: 450,
    TRTFAMILY: 420,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 1,
    TESCHENR: -1,
    happy_group: 3
  },
  {
    activity: [
      [
        240,
        390,
        10101,
        150,
        -1,
        -1,
        0
      ],
      [
        390,
        510,
        20681,
        120,
        1,
        58,
        0
      ],
      [
        510,
        540,
        20201,
        30,
        1,
        58,
        0
      ],
      [
        540,
        580,
        20203,
        40,
        1,
        58,
        0
      ],
      [
        580,
        640,
        20902,
        60,
        1,
        58,
        0
      ],
      [
        640,
        660,
        181301,
        20,
        12,
        58,
        0
      ],
      [
        660,
        840,
        130131,
        180,
        9,
        58,
        0
      ],
      [
        840,
        930,
        130129,
        90,
        9,
        58,
        0
      ],
      [
        930,
        960,
        120303,
        30,
        3,
        53,
        0
      ],
      [
        930,
        960,
        120303,
        30,
        3,
        58,
        0
      ],
      [
        930,
        960,
        120303,
        30,
        3,
        20,
        0
      ],
      [
        960,
        1020,
        110101,
        60,
        3,
        53,
        0
      ],
      [
        960,
        1020,
        110101,
        60,
        3,
        58,
        0
      ],
      [
        960,
        1020,
        110101,
        60,
        3,
        20,
        0
      ],
      [
        1020,
        1040,
        20101,
        20,
        3,
        53,
        0
      ],
      [
        1020,
        1040,
        20101,
        20,
        3,
        58,
        0
      ],
      [
        1020,
        1040,
        20101,
        20,
        3,
        20,
        0
      ],
      [
        1040,
        1070,
        20902,
        30,
        3,
        53,
        0
      ],
      [
        1040,
        1070,
        20902,
        30,
        3,
        58,
        0
      ],
      [
        1040,
        1070,
        20902,
        30,
        3,
        20,
        0
      ],
      [
        1070,
        1095,
        180280,
        25,
        12,
        58,
        0
      ],
      [
        1095,
        1170,
        130106,
        75,
        9,
        58,
        0
      ],
      [
        1170,
        1320,
        120303,
        150,
        1,
        58,
        0
      ],
      [
        1320,
        1335,
        10201,
        15,
        -1,
        -1,
        0
      ],
      [
        1335,
        1680,
        10101,
        345,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210503210674,
    WECANTRIL: 10,
    WEGENHTH: 2,
    WEHBP: 1,
    WEPAINMD: 2,
    WEREST: 1,
    WETYPICAL: 3,
    TUDIARYDAY_x: 7,
    TRHOLIDAY_x: 0,
    TEAGE: 54,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 39,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 33,
    TRDPFTPT_x: 1,
    TRERNWA_x: 288461,
    TRERNHLY: -1,
    TRTALONE: 0,
    TRTFAMILY: 140,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 1,
    TESCHENR: -1,
    happy_group: 3
  },
  {
    activity: [
      [
        240,
        450,
        10101,
        210,
        -1,
        -1,
        0
      ],
      [
        450,
        480,
        10201,
        30,
        -1,
        -1,
        0
      ],
      [
        480,
        510,
        180501,
        30,
        12,
        18,
        0
      ],
      [
        510,
        870,
        50101,
        360,
        2,
        62,
        0
      ],
      [
        870,
        900,
        180682,
        30,
        12,
        18,
        0
      ],
      [
        900,
        930,
        60301,
        30,
        8,
        18,
        0
      ],
      [
        930,
        935,
        30112,
        5,
        8,
        22,
        0
      ],
      [
        930,
        935,
        30112,
        5,
        8,
        22,
        0
      ],
      [
        935,
        955,
        180381,
        20,
        12,
        22,
        0
      ],
      [
        935,
        955,
        180381,
        20,
        12,
        22,
        0
      ],
      [
        955,
        985,
        60301,
        30,
        1,
        22,
        0
      ],
      [
        985,
        1015,
        180382,
        30,
        12,
        18,
        0
      ],
      [
        1015,
        1016,
        30503,
        1,
        11,
        20,
        0
      ],
      [
        1016,
        1031,
        180382,
        15,
        12,
        20,
        0
      ],
      [
        1031,
        1380,
        60301,
        349,
        1,
        22,
        0
      ],
      [
        1031,
        1380,
        60301,
        349,
        1,
        22,
        0
      ],
      [
        1380,
        1405,
        110101,
        25,
        1,
        18,
        0
      ],
      [
        1405,
        1495,
        120303,
        90,
        1,
        18,
        0
      ],
      [
        55,
        235,
        10102,
        180,
        -1,
        -1,
        0
      ],
      [
        235,
        240,
        10101,
        5,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20211210211950,
    WECANTRIL: 8,
    WEGENHTH: 3,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 3,
    WETYPICAL: 2,
    TUDIARYDAY_x: 6,
    TRHOLIDAY_x: 0,
    TEAGE: 41,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 40,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 40,
    TRDPFTPT_x: 1,
    TRERNWA_x: 57692,
    TRERNHLY: -1,
    TRTALONE: 235,
    TRTFAMILY: 420,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 2,
    TRSPPRES: 1,
    TESCHENR: 1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        480,
        10101,
        240,
        -1,
        -1,
        0
      ],
      [
        480,
        500,
        110101,
        20,
        1,
        20,
        0
      ],
      [
        500,
        530,
        20201,
        30,
        1,
        18,
        0
      ],
      [
        530,
        560,
        120303,
        30,
        1,
        20,
        0
      ],
      [
        560,
        575,
        180782,
        15,
        12,
        18,
        0
      ],
      [
        575,
        605,
        70104,
        30,
        7,
        18,
        0
      ],
      [
        605,
        620,
        180782,
        15,
        12,
        18,
        0
      ],
      [
        620,
        650,
        120307,
        30,
        1,
        20,
        0
      ],
      [
        650,
        710,
        20102,
        60,
        1,
        20,
        0
      ],
      [
        710,
        740,
        20101,
        30,
        1,
        20,
        0
      ],
      [
        740,
        1020,
        120303,
        280,
        1,
        20,
        0
      ],
      [
        1020,
        1080,
        20201,
        60,
        1,
        20,
        0
      ],
      [
        1080,
        1110,
        110101,
        30,
        1,
        20,
        0
      ],
      [
        1110,
        1200,
        120303,
        90,
        1,
        20,
        0
      ],
      [
        1200,
        1260,
        70104,
        60,
        1,
        20,
        0
      ],
      [
        1260,
        1380,
        120303,
        120,
        1,
        20,
        0
      ],
      [
        1380,
        1680,
        10101,
        300,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210908211298,
    WECANTRIL: 6,
    WEGENHTH: 3,
    WEHBP: 1,
    WEPAINMD: 1,
    WEREST: 1,
    WETYPICAL: 1,
    TUDIARYDAY_x: 3,
    TRHOLIDAY_x: 0,
    TEAGE: 67,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 39,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 90,
    TRTFAMILY: 810,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 1,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        570,
        10101,
        330,
        -1,
        -1,
        0
      ],
      [
        570,
        585,
        10301,
        15,
        1,
        20,
        0
      ],
      [
        585,
        615,
        120303,
        30,
        1,
        18,
        0
      ],
      [
        615,
        675,
        110101,
        60,
        1,
        18,
        0
      ],
      [
        675,
        795,
        10301,
        120,
        1,
        18,
        0
      ],
      [
        795,
        900,
        120303,
        105,
        1,
        18,
        0
      ],
      [
        900,
        930,
        10201,
        30,
        -1,
        -1,
        0
      ],
      [
        930,
        940,
        180701,
        10,
        12,
        18,
        0
      ],
      [
        940,
        970,
        70101,
        30,
        6,
        18,
        0
      ],
      [
        970,
        980,
        180701,
        10,
        12,
        18,
        0
      ],
      [
        980,
        990,
        20902,
        10,
        1,
        18,
        0
      ],
      [
        990,
        1005,
        180905,
        15,
        12,
        18,
        0
      ],
      [
        1005,
        1020,
        90501,
        15,
        11,
        52,
        0
      ],
      [
        1020,
        1080,
        180905,
        60,
        12,
        18,
        0
      ],
      [
        1080,
        1200,
        10101,
        120,
        -1,
        -1,
        0
      ],
      [
        1200,
        1320,
        120303,
        120,
        1,
        20,
        0
      ],
      [
        1320,
        1410,
        110101,
        90,
        1,
        20,
        0
      ],
      [
        1410,
        1500,
        20901,
        90,
        1,
        20,
        0
      ],
      [
        60,
        240,
        10101,
        180,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210604210639,
    WECANTRIL: 8,
    WEGENHTH: 3,
    WEHBP: 1,
    WEPAINMD: 1,
    WEREST: 2,
    WETYPICAL: 3,
    TUDIARYDAY_x: 4,
    TRHOLIDAY_x: 0,
    TEAGE: 67,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 41,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 450,
    TRTFAMILY: 330,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 1,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        450,
        10101,
        210,
        -1,
        -1,
        0
      ],
      [
        450,
        460,
        30101,
        10,
        1,
        22,
        0
      ],
      [
        450,
        460,
        30101,
        10,
        1,
        22,
        0
      ],
      [
        460,
        475,
        20201,
        15,
        1,
        22,
        0
      ],
      [
        460,
        475,
        20201,
        15,
        1,
        22,
        0
      ],
      [
        475,
        485,
        110101,
        10,
        1,
        22,
        0
      ],
      [
        475,
        485,
        110101,
        10,
        1,
        22,
        0
      ],
      [
        485,
        500,
        10201,
        15,
        -1,
        -1,
        0
      ],
      [
        500,
        540,
        120301,
        40,
        1,
        22,
        0
      ],
      [
        500,
        540,
        120301,
        40,
        1,
        22,
        0
      ],
      [
        540,
        560,
        180381,
        20,
        13,
        20,
        0
      ],
      [
        540,
        560,
        180381,
        20,
        13,
        22,
        0
      ],
      [
        540,
        560,
        180381,
        20,
        13,
        22,
        0
      ],
      [
        560,
        565,
        30108,
        5,
        5,
        20,
        0
      ],
      [
        560,
        565,
        30108,
        5,
        5,
        22,
        0
      ],
      [
        560,
        565,
        30108,
        5,
        5,
        22,
        0
      ],
      [
        565,
        625,
        140101,
        60,
        5,
        20,
        0
      ],
      [
        625,
        632,
        180701,
        7,
        13,
        20,
        0
      ],
      [
        625,
        632,
        180701,
        7,
        13,
        22,
        0
      ],
      [
        625,
        632,
        180701,
        7,
        13,
        22,
        0
      ],
      [
        632,
        692,
        70101,
        60,
        6,
        20,
        0
      ],
      [
        632,
        692,
        70101,
        60,
        6,
        22,
        0
      ],
      [
        632,
        692,
        70101,
        60,
        6,
        22,
        0
      ],
      [
        692,
        707,
        180701,
        15,
        13,
        20,
        0
      ],
      [
        692,
        707,
        180701,
        15,
        13,
        22,
        0
      ],
      [
        692,
        707,
        180701,
        15,
        13,
        22,
        0
      ],
      [
        707,
        722,
        20104,
        15,
        1,
        20,
        0
      ],
      [
        707,
        722,
        20104,
        15,
        1,
        22,
        0
      ],
      [
        707,
        722,
        20104,
        15,
        1,
        22,
        0
      ],
      [
        722,
        737,
        20201,
        15,
        1,
        20,
        0
      ],
      [
        722,
        737,
        20201,
        15,
        1,
        22,
        0
      ],
      [
        722,
        737,
        20201,
        15,
        1,
        22,
        0
      ],
      [
        737,
        752,
        110101,
        15,
        1,
        20,
        0
      ],
      [
        737,
        752,
        110101,
        15,
        1,
        22,
        0
      ],
      [
        737,
        752,
        110101,
        15,
        1,
        22,
        0
      ],
      [
        752,
        772,
        30101,
        20,
        1,
        22,
        0
      ],
      [
        772,
        892,
        50102,
        120,
        1,
        18,
        0
      ],
      [
        892,
        922,
        30101,
        30,
        1,
        22,
        0
      ],
      [
        922,
        947,
        181401,
        25,
        12,
        20,
        0
      ],
      [
        922,
        947,
        181401,
        25,
        12,
        22,
        0
      ],
      [
        922,
        947,
        181401,
        25,
        12,
        22,
        0
      ],
      [
        947,
        1067,
        140105,
        120,
        3,
        54,
        0
      ],
      [
        947,
        1067,
        140105,
        120,
        3,
        20,
        0
      ],
      [
        1067,
        1127,
        110101,
        60,
        3,
        54,
        0
      ],
      [
        1067,
        1127,
        110101,
        60,
        3,
        58,
        0
      ],
      [
        1067,
        1127,
        110101,
        60,
        3,
        20,
        0
      ],
      [
        1067,
        1127,
        110101,
        60,
        3,
        22,
        0
      ],
      [
        1067,
        1127,
        110101,
        60,
        3,
        22,
        0
      ],
      [
        1127,
        1152,
        181101,
        25,
        12,
        20,
        0
      ],
      [
        1127,
        1152,
        181101,
        25,
        12,
        22,
        0
      ],
      [
        1127,
        1152,
        181101,
        25,
        12,
        22,
        0
      ],
      [
        1152,
        1182,
        30101,
        30,
        1,
        20,
        0
      ],
      [
        1152,
        1182,
        30101,
        30,
        1,
        22,
        0
      ],
      [
        1152,
        1182,
        30101,
        30,
        1,
        22,
        0
      ],
      [
        1182,
        1272,
        50102,
        90,
        1,
        20,
        0
      ],
      [
        1272,
        1302,
        20101,
        30,
        1,
        20,
        0
      ],
      [
        1302,
        1322,
        10201,
        20,
        -1,
        -1,
        0
      ],
      [
        1322,
        1680,
        10101,
        358,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20211110210947,
    WECANTRIL: 8,
    WEGENHTH: 2,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 2,
    WETYPICAL: 2,
    TUDIARYDAY_x: 1,
    TRHOLIDAY_x: 0,
    TEAGE: 35,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 43,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 40,
    TRDPFTPT_x: 1,
    TRERNWA_x: 67307,
    TRERNHLY: -1,
    TRTALONE: 0,
    TRTFAMILY: 627,
    TRTFRIEND: 180,
    TRCHILDNUM_x: 2,
    TRSPPRES: 1,
    TESCHENR: 2,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        270,
        10201,
        30,
        -1,
        -1,
        0
      ],
      [
        270,
        280,
        180501,
        10,
        9,
        19,
        0
      ],
      [
        280,
        660,
        50101,
        380,
        2,
        59,
        0
      ],
      [
        280,
        660,
        50101,
        380,
        2,
        60,
        0
      ],
      [
        280,
        660,
        50101,
        380,
        2,
        61,
        0
      ],
      [
        660,
        720,
        110101,
        60,
        2,
        19,
        0
      ],
      [
        720,
        840,
        50101,
        120,
        2,
        59,
        0
      ],
      [
        720,
        840,
        50101,
        120,
        2,
        60,
        0
      ],
      [
        720,
        840,
        50101,
        120,
        2,
        61,
        0
      ],
      [
        840,
        850,
        180101,
        10,
        9,
        19,
        0
      ],
      [
        850,
        880,
        10201,
        30,
        -1,
        -1,
        0
      ],
      [
        880,
        890,
        70103,
        10,
        11,
        19,
        0
      ],
      [
        890,
        960,
        120303,
        70,
        11,
        19,
        0
      ],
      [
        960,
        990,
        110101,
        30,
        11,
        19,
        0
      ],
      [
        990,
        1140,
        50101,
        150,
        11,
        19,
        0
      ],
      [
        1140,
        1320,
        120303,
        180,
        11,
        19,
        0
      ],
      [
        1320,
        1680,
        10101,
        360,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210504212253,
    WECANTRIL: 8,
    WEGENHTH: 2,
    WEHBP: 2,
    WEPAINMD: 1,
    WEREST: 2,
    WETYPICAL: 2,
    TUDIARYDAY_x: 2,
    TRHOLIDAY_x: 0,
    TEAGE: 26,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 42,
    PEHSPNON: 2,
    PTDTRACE: 4,
    TRDTIND1: 51,
    TRDPFTPT_x: 1,
    TRERNWA_x: 9e4,
    TRERNHLY: 1900,
    TRTALONE: 370,
    TRTFAMILY: 0,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 2,
    TESCHENR: 2,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        570,
        10101,
        330,
        -1,
        -1,
        0
      ],
      [
        570,
        575,
        20681,
        5,
        1,
        18,
        0
      ],
      [
        575,
        578,
        20201,
        3,
        1,
        18,
        0
      ],
      [
        578,
        720,
        110101,
        142,
        1,
        18,
        0
      ],
      [
        720,
        1170,
        120303,
        450,
        1,
        22,
        0
      ],
      [
        1170,
        1230,
        110101,
        60,
        1,
        22,
        0
      ],
      [
        1230,
        1530,
        120303,
        300,
        1,
        18,
        0
      ],
      [
        90,
        240,
        10101,
        150,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210302211370,
    WECANTRIL: 3,
    WEGENHTH: 4,
    WEHBP: 1,
    WEPAINMD: 1,
    WEREST: 3,
    WETYPICAL: 2,
    TUDIARYDAY_x: 1,
    TRHOLIDAY_x: 0,
    TEAGE: 62,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 39,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 450,
    TRTFAMILY: 510,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 3,
    TESCHENR: -1,
    happy_group: 1
  },
  {
    activity: [
      [
        240,
        330,
        10101,
        90,
        -1,
        -1,
        0
      ],
      [
        330,
        335,
        30101,
        5,
        1,
        22,
        0
      ],
      [
        335,
        365,
        30101,
        30,
        1,
        22,
        0
      ],
      [
        365,
        425,
        30109,
        60,
        1,
        22,
        0
      ],
      [
        425,
        445,
        180501,
        20,
        12,
        18,
        0
      ],
      [
        445,
        720,
        50101,
        275,
        2,
        18,
        0
      ],
      [
        720,
        780,
        110101,
        60,
        1,
        18,
        0
      ],
      [
        780,
        1020,
        50101,
        240,
        2,
        18,
        0
      ],
      [
        1020,
        1040,
        180782,
        20,
        12,
        18,
        0
      ],
      [
        1040,
        1050,
        70103,
        10,
        4,
        18,
        0
      ],
      [
        1050,
        1055,
        180782,
        5,
        12,
        18,
        0
      ],
      [
        1055,
        1115,
        110101,
        60,
        1,
        20,
        0
      ],
      [
        1055,
        1115,
        110101,
        60,
        1,
        22,
        0
      ],
      [
        1115,
        1200,
        120303,
        85,
        1,
        20,
        0
      ],
      [
        1115,
        1200,
        120303,
        85,
        1,
        22,
        0
      ],
      [
        1200,
        1260,
        30101,
        60,
        1,
        20,
        0
      ],
      [
        1200,
        1260,
        30101,
        60,
        1,
        22,
        0
      ],
      [
        1260,
        1560,
        10101,
        300,
        -1,
        -1,
        0
      ],
      [
        120,
        180,
        30101,
        60,
        1,
        20,
        0
      ],
      [
        120,
        180,
        30101,
        60,
        1,
        22,
        0
      ],
      [
        180,
        240,
        10101,
        60,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210706211935,
    WECANTRIL: 6,
    WEGENHTH: 2,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 2,
    WETYPICAL: 2,
    TUDIARYDAY_x: 3,
    TRHOLIDAY_x: 0,
    TEAGE: 26,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 43,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 4,
    TRDPFTPT_x: 1,
    TRERNWA_x: 8e4,
    TRERNHLY: 2050,
    TRTALONE: 115,
    TRTFAMILY: 360,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 1,
    TRSPPRES: 1,
    TESCHENR: 2,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        540,
        10101,
        300,
        -1,
        -1,
        0
      ],
      [
        540,
        545,
        20681,
        5,
        1,
        20,
        0
      ],
      [
        545,
        605,
        10201,
        60,
        -1,
        -1,
        0
      ],
      [
        605,
        610,
        180782,
        5,
        12,
        18,
        0
      ],
      [
        610,
        615,
        70102,
        5,
        7,
        18,
        0
      ],
      [
        615,
        620,
        180782,
        5,
        12,
        18,
        0
      ],
      [
        620,
        622,
        30112,
        2,
        1,
        22,
        0
      ],
      [
        622,
        682,
        180381,
        60,
        12,
        22,
        0
      ],
      [
        682,
        687,
        30112,
        5,
        3,
        22,
        0
      ],
      [
        687,
        692,
        181201,
        5,
        12,
        18,
        0
      ],
      [
        692,
        722,
        120101,
        30,
        3,
        53,
        0
      ],
      [
        722,
        812,
        181283,
        90,
        12,
        18,
        0
      ],
      [
        812,
        872,
        181283,
        60,
        9,
        18,
        0
      ],
      [
        872,
        992,
        180381,
        120,
        12,
        18,
        0
      ],
      [
        992,
        997,
        30112,
        5,
        3,
        22,
        0
      ],
      [
        997,
        1057,
        180381,
        60,
        12,
        22,
        0
      ],
      [
        1057,
        1087,
        110101,
        30,
        1,
        20,
        0
      ],
      [
        1057,
        1087,
        110101,
        30,
        1,
        22,
        0
      ],
      [
        1087,
        1320,
        120303,
        233,
        1,
        20,
        0
      ],
      [
        1087,
        1320,
        120303,
        233,
        1,
        22,
        0
      ],
      [
        1320,
        1410,
        10102,
        90,
        -1,
        -1,
        0
      ],
      [
        1410,
        1680,
        10101,
        270,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210706211868,
    WECANTRIL: 6,
    WEGENHTH: 3,
    WEHBP: 1,
    WEPAINMD: 2,
    WEREST: 1,
    WETYPICAL: 2,
    TUDIARYDAY_x: 7,
    TRHOLIDAY_x: 0,
    TEAGE: 44,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 39,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 33,
    TRDPFTPT_x: 1,
    TRERNWA_x: 70400,
    TRERNHLY: 1760,
    TRTALONE: 290,
    TRTFAMILY: 430,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 1,
    TRSPPRES: 1,
    TESCHENR: 2,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        360,
        10101,
        120,
        -1,
        -1,
        0
      ],
      [
        360,
        405,
        10201,
        45,
        -1,
        -1,
        0
      ],
      [
        405,
        510,
        500106,
        105,
        -1,
        -1,
        0
      ],
      [
        510,
        525,
        181401,
        15,
        12,
        20,
        0
      ],
      [
        525,
        615,
        140101,
        90,
        5,
        20,
        0
      ],
      [
        615,
        630,
        110101,
        15,
        5,
        20,
        0
      ],
      [
        630,
        690,
        140105,
        60,
        5,
        20,
        0
      ],
      [
        690,
        705,
        181401,
        15,
        12,
        20,
        0
      ],
      [
        705,
        720,
        10201,
        15,
        -1,
        -1,
        0
      ],
      [
        720,
        795,
        120301,
        75,
        1,
        20,
        0
      ],
      [
        795,
        815,
        181302,
        20,
        12,
        20,
        0
      ],
      [
        815,
        935,
        130202,
        120,
        11,
        20,
        0
      ],
      [
        935,
        955,
        181302,
        20,
        12,
        20,
        0
      ],
      [
        955,
        1015,
        140105,
        60,
        1,
        20,
        0
      ],
      [
        1015,
        1030,
        181401,
        15,
        12,
        20,
        0
      ],
      [
        1030,
        1120,
        140105,
        90,
        3,
        54,
        0
      ],
      [
        1030,
        1120,
        140105,
        90,
        3,
        20,
        0
      ],
      [
        1120,
        1180,
        110101,
        60,
        3,
        54,
        0
      ],
      [
        1120,
        1180,
        110101,
        60,
        3,
        20,
        0
      ],
      [
        1180,
        1195,
        181101,
        15,
        12,
        20,
        0
      ],
      [
        1195,
        1260,
        20101,
        65,
        1,
        20,
        0
      ],
      [
        1260,
        1680,
        10101,
        420,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210404211986,
    WECANTRIL: 8,
    WEGENHTH: 2,
    WEHBP: 1,
    WEPAINMD: 2,
    WEREST: 1,
    WETYPICAL: 2,
    TUDIARYDAY_x: 1,
    TRHOLIDAY_x: 0,
    TEAGE: 72,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 41,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 0,
    TRTFAMILY: 735,
    TRTFRIEND: 150,
    TRCHILDNUM_x: 0,
    TRSPPRES: 1,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        480,
        10101,
        240,
        -1,
        -1,
        0
      ],
      [
        480,
        600,
        20101,
        120,
        1,
        19,
        0
      ],
      [
        600,
        720,
        120308,
        120,
        1,
        19,
        0
      ],
      [
        720,
        730,
        180782,
        10,
        12,
        19,
        0
      ],
      [
        730,
        745,
        70103,
        15,
        4,
        54,
        0
      ],
      [
        745,
        746,
        181101,
        1,
        14,
        54,
        0
      ],
      [
        746,
        806,
        110101,
        60,
        4,
        54,
        0
      ],
      [
        806,
        808,
        180782,
        2,
        14,
        54,
        0
      ],
      [
        808,
        838,
        70104,
        30,
        7,
        54,
        0
      ],
      [
        838,
        840,
        180782,
        2,
        14,
        54,
        0
      ],
      [
        840,
        860,
        70104,
        20,
        7,
        54,
        0
      ],
      [
        860,
        870,
        180782,
        10,
        14,
        54,
        0
      ],
      [
        870,
        890,
        70104,
        20,
        7,
        54,
        0
      ],
      [
        890,
        895,
        180782,
        5,
        14,
        54,
        0
      ],
      [
        895,
        905,
        180782,
        10,
        12,
        19,
        0
      ],
      [
        905,
        965,
        20501,
        60,
        1,
        19,
        0
      ],
      [
        965,
        1025,
        120308,
        60,
        1,
        19,
        0
      ],
      [
        1025,
        1145,
        10201,
        120,
        -1,
        -1,
        0
      ],
      [
        1145,
        1205,
        169989,
        60,
        1,
        19,
        0
      ],
      [
        1205,
        1215,
        181101,
        10,
        12,
        54,
        0
      ],
      [
        1215,
        1335,
        110101,
        120,
        4,
        54,
        0
      ],
      [
        1335,
        1345,
        181201,
        10,
        14,
        54,
        0
      ],
      [
        1345,
        1455,
        120101,
        110,
        4,
        54,
        0
      ],
      [
        15,
        25,
        181201,
        10,
        14,
        54,
        0
      ],
      [
        25,
        35,
        181201,
        10,
        12,
        54,
        0
      ],
      [
        35,
        95,
        120303,
        60,
        1,
        19,
        0
      ],
      [
        95,
        240,
        10101,
        145,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210403211432,
    WECANTRIL: 5,
    WEGENHTH: 3,
    WEHBP: 2,
    WEPAINMD: 1,
    WEREST: 2,
    WETYPICAL: 1,
    TUDIARYDAY_x: 7,
    TRHOLIDAY_x: 0,
    TEAGE: 32,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 40,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 38,
    TRDPFTPT_x: 1,
    TRERNWA_x: 105769,
    TRERNHLY: -1,
    TRTALONE: 500,
    TRTFAMILY: 0,
    TRTFRIEND: 435,
    TRCHILDNUM_x: 0,
    TRSPPRES: 3,
    TESCHENR: 2,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        480,
        10101,
        240,
        -1,
        -1,
        0
      ],
      [
        480,
        500,
        110101,
        20,
        1,
        19,
        0
      ],
      [
        500,
        520,
        20101,
        20,
        1,
        19,
        0
      ],
      [
        520,
        580,
        120301,
        60,
        1,
        19,
        0
      ],
      [
        580,
        700,
        20102,
        120,
        1,
        19,
        0
      ],
      [
        700,
        730,
        20101,
        30,
        1,
        19,
        0
      ],
      [
        730,
        790,
        20101,
        60,
        1,
        19,
        0
      ],
      [
        790,
        850,
        10201,
        60,
        -1,
        -1,
        0
      ],
      [
        850,
        853,
        180701,
        3,
        12,
        19,
        0
      ],
      [
        853,
        943,
        70104,
        90,
        7,
        19,
        0
      ],
      [
        943,
        948,
        20902,
        5,
        1,
        19,
        0
      ],
      [
        948,
        983,
        20104,
        35,
        1,
        19,
        0
      ],
      [
        983,
        1063,
        20201,
        80,
        1,
        19,
        0
      ],
      [
        1063,
        1083,
        110101,
        20,
        1,
        19,
        0
      ],
      [
        1083,
        1093,
        20203,
        10,
        1,
        19,
        0
      ],
      [
        1093,
        1103,
        20203,
        10,
        1,
        19,
        0
      ],
      [
        1103,
        1380,
        120303,
        277,
        1,
        19,
        0
      ],
      [
        1380,
        1680,
        10101,
        300,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20211009211953,
    WECANTRIL: 3,
    WEGENHTH: 5,
    WEHBP: 1,
    WEPAINMD: 1,
    WEREST: 4,
    WETYPICAL: 2,
    TUDIARYDAY_x: 7,
    TRHOLIDAY_x: 0,
    TEAGE: 46,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 39,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 840,
    TRTFAMILY: 0,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 3,
    TESCHENR: 2,
    happy_group: 1
  },
  {
    activity: [
      [
        240,
        390,
        10101,
        150,
        -1,
        -1,
        0
      ],
      [
        390,
        420,
        20101,
        30,
        1,
        18,
        0
      ],
      [
        420,
        480,
        50101,
        60,
        1,
        18,
        0
      ],
      [
        480,
        540,
        20902,
        60,
        1,
        18,
        0
      ],
      [
        540,
        600,
        10201,
        60,
        -1,
        -1,
        0
      ],
      [
        600,
        610,
        180482,
        10,
        12,
        18,
        0
      ],
      [
        610,
        611,
        40507,
        1,
        3,
        51,
        0
      ],
      [
        611,
        616,
        181401,
        5,
        12,
        51,
        0
      ],
      [
        616,
        695,
        140101,
        79,
        5,
        51,
        0
      ],
      [
        695,
        700,
        180482,
        5,
        12,
        51,
        0
      ],
      [
        700,
        710,
        40507,
        10,
        3,
        51,
        0
      ],
      [
        710,
        720,
        180280,
        10,
        12,
        18,
        0
      ],
      [
        720,
        780,
        20681,
        60,
        11,
        20,
        0
      ],
      [
        780,
        790,
        180280,
        10,
        12,
        18,
        0
      ],
      [
        790,
        805,
        20201,
        15,
        1,
        20,
        0
      ],
      [
        805,
        825,
        110101,
        20,
        1,
        20,
        0
      ],
      [
        825,
        900,
        20101,
        75,
        1,
        20,
        0
      ],
      [
        900,
        930,
        20501,
        30,
        1,
        20,
        0
      ],
      [
        930,
        935,
        180482,
        5,
        13,
        20,
        0
      ],
      [
        935,
        980,
        40502,
        45,
        3,
        20,
        0
      ],
      [
        980,
        1050,
        20701,
        70,
        3,
        20,
        0
      ],
      [
        1050,
        1080,
        20902,
        30,
        3,
        20,
        0
      ],
      [
        1080,
        1085,
        180280,
        5,
        12,
        20,
        0
      ],
      [
        1085,
        1105,
        20201,
        20,
        1,
        20,
        0
      ],
      [
        1105,
        1140,
        110101,
        35,
        1,
        20,
        0
      ],
      [
        1140,
        1155,
        180701,
        15,
        13,
        20,
        0
      ],
      [
        1155,
        1185,
        70101,
        30,
        6,
        20,
        0
      ],
      [
        1185,
        1200,
        180701,
        15,
        13,
        20,
        0
      ],
      [
        1200,
        1230,
        20203,
        30,
        1,
        18,
        0
      ],
      [
        1230,
        1260,
        20201,
        30,
        1,
        18,
        0
      ],
      [
        1260,
        1305,
        120303,
        45,
        1,
        18,
        0
      ],
      [
        1305,
        1320,
        10201,
        15,
        -1,
        -1,
        0
      ],
      [
        1320,
        1425,
        120303,
        105,
        1,
        20,
        0
      ],
      [
        1425,
        1680,
        10101,
        255,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210808210592,
    WECANTRIL: 8,
    WEGENHTH: 2,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 2,
    WETYPICAL: 1,
    TUDIARYDAY_x: 1,
    TRHOLIDAY_x: 0,
    TEAGE: 61,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 44,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 40,
    TRDPFTPT_x: 1,
    TRERNWA_x: 101923,
    TRERNHLY: -1,
    TRTALONE: 225,
    TRTFAMILY: 675,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 1,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        450,
        10101,
        210,
        -1,
        -1,
        0
      ],
      [
        450,
        465,
        20201,
        15,
        1,
        19,
        0
      ],
      [
        465,
        495,
        110101,
        30,
        1,
        19,
        0
      ],
      [
        495,
        525,
        130131,
        30,
        89,
        19,
        0
      ],
      [
        525,
        645,
        20501,
        120,
        1,
        19,
        0
      ],
      [
        645,
        675,
        20102,
        30,
        1,
        19,
        0
      ],
      [
        675,
        705,
        20201,
        30,
        1,
        19,
        0
      ],
      [
        705,
        735,
        110101,
        30,
        1,
        19,
        0
      ],
      [
        735,
        736,
        20303,
        1,
        1,
        19,
        0
      ],
      [
        736,
        766,
        20203,
        30,
        1,
        19,
        0
      ],
      [
        766,
        796,
        20101,
        30,
        1,
        19,
        0
      ],
      [
        796,
        916,
        120303,
        120,
        1,
        19,
        0
      ],
      [
        916,
        946,
        20501,
        30,
        1,
        19,
        0
      ],
      [
        946,
        1066,
        120312,
        120,
        1,
        19,
        0
      ],
      [
        1066,
        1096,
        20102,
        30,
        1,
        19,
        0
      ],
      [
        1096,
        1111,
        20201,
        15,
        1,
        19,
        0
      ],
      [
        1111,
        1141,
        110101,
        30,
        1,
        19,
        0
      ],
      [
        1141,
        1143,
        120303,
        2,
        1,
        19,
        0
      ],
      [
        1143,
        1173,
        10201,
        30,
        -1,
        -1,
        0
      ],
      [
        1173,
        1320,
        120303,
        147,
        1,
        19,
        0
      ],
      [
        1320,
        1335,
        120312,
        15,
        1,
        19,
        0
      ],
      [
        1335,
        1350,
        120307,
        15,
        1,
        19,
        0
      ],
      [
        1350,
        1351,
        10301,
        1,
        1,
        19,
        0
      ],
      [
        1351,
        1680,
        10101,
        329,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210807211761,
    WECANTRIL: 10,
    WEGENHTH: 2,
    WEHBP: 1,
    WEPAINMD: 2,
    WEREST: 1,
    WETYPICAL: 2,
    TUDIARYDAY_x: 7,
    TRHOLIDAY_x: 0,
    TEAGE: 80,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 40,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 871,
    TRTFAMILY: 0,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 3,
    TESCHENR: -1,
    happy_group: 3
  },
  {
    activity: [
      [
        240,
        420,
        10101,
        180,
        -1,
        -1,
        0
      ],
      [
        420,
        1020,
        50101,
        600,
        1,
        18,
        0
      ],
      [
        1020,
        1080,
        160101,
        60,
        1,
        18,
        0
      ],
      [
        1080,
        1170,
        110101,
        90,
        1,
        20,
        0
      ],
      [
        1080,
        1170,
        110101,
        90,
        1,
        22,
        0
      ],
      [
        1080,
        1170,
        110101,
        90,
        1,
        22,
        0
      ],
      [
        1170,
        1200,
        20203,
        30,
        1,
        20,
        0
      ],
      [
        1170,
        1200,
        20203,
        30,
        1,
        22,
        0
      ],
      [
        1170,
        1200,
        20203,
        30,
        1,
        22,
        0
      ],
      [
        1200,
        1245,
        120307,
        45,
        1,
        56,
        0
      ],
      [
        1200,
        1245,
        120307,
        45,
        1,
        57,
        0
      ],
      [
        1200,
        1245,
        120307,
        45,
        1,
        20,
        0
      ],
      [
        1200,
        1245,
        120307,
        45,
        1,
        22,
        0
      ],
      [
        1200,
        1245,
        120307,
        45,
        1,
        22,
        0
      ],
      [
        1245,
        1260,
        20201,
        15,
        1,
        57,
        0
      ],
      [
        1245,
        1260,
        20201,
        15,
        1,
        22,
        0
      ],
      [
        1260,
        1350,
        120303,
        90,
        1,
        20,
        0
      ],
      [
        1350,
        1680,
        10101,
        330,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20211008212234,
    WECANTRIL: 5,
    WEGENHTH: 3,
    WEHBP: 1,
    WEPAINMD: 1,
    WEREST: 2,
    WETYPICAL: 1,
    TUDIARYDAY_x: 6,
    TRHOLIDAY_x: 0,
    TEAGE: 47,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 45,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 36,
    TRDPFTPT_x: 1,
    TRERNWA_x: 153846,
    TRERNHLY: -1,
    TRTALONE: 60,
    TRTFAMILY: 270,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 2,
    TRSPPRES: 1,
    TESCHENR: 2,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        420,
        10101,
        180,
        -1,
        -1,
        0
      ],
      [
        420,
        465,
        30101,
        45,
        1,
        22,
        0
      ],
      [
        465,
        540,
        10101,
        75,
        -1,
        -1,
        0
      ],
      [
        540,
        560,
        20201,
        20,
        1,
        18,
        0
      ],
      [
        560,
        605,
        30101,
        45,
        1,
        22,
        0
      ],
      [
        560,
        605,
        30101,
        45,
        1,
        22,
        0
      ],
      [
        605,
        620,
        20201,
        15,
        1,
        18,
        0
      ],
      [
        620,
        635,
        110101,
        15,
        1,
        18,
        0
      ],
      [
        635,
        640,
        20201,
        5,
        1,
        18,
        0
      ],
      [
        640,
        685,
        30101,
        45,
        1,
        22,
        0
      ],
      [
        685,
        695,
        30101,
        10,
        1,
        22,
        0
      ],
      [
        685,
        695,
        30101,
        10,
        1,
        22,
        0
      ],
      [
        695,
        740,
        120303,
        45,
        1,
        22,
        0
      ],
      [
        695,
        740,
        120303,
        45,
        1,
        22,
        0
      ],
      [
        695,
        740,
        120303,
        45,
        1,
        22,
        0
      ],
      [
        740,
        770,
        30101,
        30,
        1,
        22,
        0
      ],
      [
        770,
        790,
        30101,
        20,
        1,
        22,
        0
      ],
      [
        790,
        840,
        30101,
        50,
        1,
        22,
        0
      ],
      [
        840,
        860,
        30101,
        20,
        1,
        22,
        0
      ],
      [
        860,
        880,
        30101,
        20,
        1,
        22,
        0
      ],
      [
        880,
        900,
        30101,
        20,
        1,
        22,
        0
      ],
      [
        880,
        900,
        30101,
        20,
        1,
        22,
        0
      ],
      [
        900,
        945,
        30101,
        45,
        1,
        22,
        0
      ],
      [
        945,
        960,
        30101,
        15,
        1,
        22,
        0
      ],
      [
        960,
        970,
        30101,
        10,
        1,
        22,
        0
      ],
      [
        970,
        1020,
        120301,
        50,
        1,
        22,
        0
      ],
      [
        1020,
        1080,
        120101,
        60,
        1,
        22,
        0
      ],
      [
        1080,
        1110,
        20681,
        30,
        9,
        18,
        0
      ],
      [
        1110,
        1115,
        20681,
        5,
        1,
        18,
        0
      ],
      [
        1115,
        1125,
        10201,
        10,
        -1,
        -1,
        0
      ],
      [
        1125,
        1130,
        20101,
        5,
        1,
        18,
        0
      ],
      [
        1130,
        1175,
        130124,
        45,
        9,
        18,
        0
      ],
      [
        1175,
        1182,
        70101,
        7,
        6,
        18,
        0
      ],
      [
        1182,
        1200,
        130124,
        18,
        9,
        18,
        0
      ],
      [
        1200,
        1260,
        30101,
        60,
        1,
        22,
        0
      ],
      [
        1200,
        1260,
        30101,
        60,
        1,
        22,
        0
      ],
      [
        1260,
        1275,
        110101,
        15,
        1,
        20,
        0
      ],
      [
        1275,
        1285,
        30101,
        10,
        1,
        22,
        0
      ],
      [
        1285,
        1300,
        30101,
        15,
        1,
        22,
        0
      ],
      [
        1300,
        1315,
        10201,
        15,
        -1,
        -1,
        0
      ],
      [
        1315,
        1680,
        10101,
        365,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210909210590,
    WECANTRIL: 8,
    WEGENHTH: 3,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 2,
    WETYPICAL: 2,
    TUDIARYDAY_x: 1,
    TRHOLIDAY_x: 0,
    TEAGE: 47,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 43,
    PEHSPNON: 1,
    PTDTRACE: 1,
    TRDTIND1: 32,
    TRDPFTPT_x: 1,
    TRERNWA_x: 288461,
    TRERNHLY: -1,
    TRTALONE: 165,
    TRTFAMILY: 630,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 3,
    TRSPPRES: 1,
    TESCHENR: 2,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        390,
        10101,
        150,
        -1,
        -1,
        0
      ],
      [
        390,
        420,
        10201,
        30,
        -1,
        -1,
        0
      ],
      [
        420,
        430,
        180501,
        10,
        12,
        18,
        0
      ],
      [
        430,
        720,
        50101,
        290,
        2,
        61,
        0
      ],
      [
        720,
        750,
        110101,
        30,
        2,
        61,
        0
      ],
      [
        750,
        1140,
        50101,
        390,
        2,
        61,
        0
      ],
      [
        1140,
        1150,
        180501,
        10,
        12,
        18,
        0
      ],
      [
        1150,
        1180,
        110101,
        30,
        1,
        22,
        0
      ],
      [
        1150,
        1180,
        110101,
        30,
        1,
        22,
        0
      ],
      [
        1150,
        1180,
        110101,
        30,
        1,
        22,
        0
      ],
      [
        1180,
        1195,
        30101,
        15,
        1,
        22,
        0
      ],
      [
        1180,
        1195,
        30101,
        15,
        1,
        22,
        0
      ],
      [
        1195,
        1255,
        30186,
        60,
        1,
        22,
        0
      ],
      [
        1195,
        1255,
        30186,
        60,
        1,
        22,
        0
      ],
      [
        1195,
        1255,
        30186,
        60,
        1,
        22,
        0
      ],
      [
        1255,
        1290,
        30103,
        35,
        1,
        20,
        0
      ],
      [
        1255,
        1290,
        30103,
        35,
        1,
        22,
        0
      ],
      [
        1255,
        1290,
        30103,
        35,
        1,
        22,
        0
      ],
      [
        1255,
        1290,
        30103,
        35,
        1,
        22,
        0
      ],
      [
        1290,
        1305,
        500105,
        15,
        -1,
        -1,
        0
      ],
      [
        1305,
        1680,
        10101,
        375,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20211110211587,
    WECANTRIL: 5,
    WEGENHTH: 4,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 3,
    WETYPICAL: 2,
    TUDIARYDAY_x: 2,
    TRHOLIDAY_x: 0,
    TEAGE: 37,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 40,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 4,
    TRDPFTPT_x: 1,
    TRERNWA_x: 1e5,
    TRERNHLY: -1,
    TRTALONE: 20,
    TRTFAMILY: 140,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 3,
    TRSPPRES: 1,
    TESCHENR: 2,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        420,
        10101,
        180,
        -1,
        -1,
        0
      ],
      [
        420,
        510,
        120303,
        90,
        1,
        19,
        0
      ],
      [
        510,
        520,
        110101,
        10,
        1,
        19,
        0
      ],
      [
        520,
        600,
        120303,
        80,
        1,
        19,
        0
      ],
      [
        600,
        620,
        20203,
        20,
        1,
        19,
        0
      ],
      [
        620,
        640,
        10201,
        20,
        -1,
        -1,
        0
      ],
      [
        640,
        670,
        20681,
        30,
        9,
        19,
        0
      ],
      [
        670,
        780,
        120303,
        110,
        1,
        19,
        0
      ],
      [
        780,
        790,
        20201,
        10,
        1,
        19,
        0
      ],
      [
        790,
        820,
        110101,
        30,
        1,
        19,
        0
      ],
      [
        820,
        880,
        20101,
        60,
        1,
        19,
        0
      ],
      [
        880,
        1080,
        120303,
        200,
        1,
        19,
        0
      ],
      [
        1080,
        1110,
        20201,
        30,
        1,
        19,
        0
      ],
      [
        1110,
        1140,
        110101,
        30,
        1,
        19,
        0
      ],
      [
        1140,
        1380,
        120303,
        240,
        1,
        19,
        0
      ],
      [
        1380,
        1440,
        120308,
        60,
        1,
        19,
        0
      ],
      [
        0,
        240,
        10101,
        240,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210302210897,
    WECANTRIL: 8,
    WEGENHTH: 3,
    WEHBP: 1,
    WEPAINMD: 2,
    WEREST: 2,
    WETYPICAL: 2,
    TUDIARYDAY_x: 1,
    TRHOLIDAY_x: 0,
    TEAGE: 68,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 44,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 1e3,
    TRTFAMILY: 0,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 3,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        330,
        10101,
        90,
        -1,
        -1,
        0
      ],
      [
        330,
        360,
        10201,
        30,
        -1,
        -1,
        0
      ],
      [
        360,
        390,
        180501,
        30,
        12,
        19,
        0
      ],
      [
        390,
        720,
        50101,
        330,
        2,
        19,
        0
      ],
      [
        720,
        730,
        181101,
        10,
        12,
        19,
        0
      ],
      [
        730,
        750,
        110101,
        20,
        4,
        19,
        0
      ],
      [
        750,
        760,
        180501,
        10,
        12,
        19,
        0
      ],
      [
        760,
        990,
        50101,
        230,
        2,
        19,
        0
      ],
      [
        990,
        1020,
        180782,
        30,
        12,
        19,
        0
      ],
      [
        1020,
        1050,
        70104,
        30,
        7,
        19,
        0
      ],
      [
        1050,
        1055,
        180782,
        5,
        12,
        19,
        0
      ],
      [
        1055,
        1095,
        110101,
        40,
        1,
        19,
        0
      ],
      [
        1095,
        1140,
        120303,
        45,
        1,
        19,
        0
      ],
      [
        1140,
        1145,
        181301,
        5,
        12,
        19,
        0
      ],
      [
        1145,
        1204,
        130128,
        59,
        31,
        19,
        0
      ],
      [
        1204,
        1230,
        130133,
        26,
        31,
        19,
        0
      ],
      [
        1230,
        1235,
        181301,
        5,
        12,
        19,
        0
      ],
      [
        1235,
        1295,
        120303,
        60,
        1,
        19,
        0
      ],
      [
        1295,
        1305,
        10201,
        10,
        -1,
        -1,
        0
      ],
      [
        1305,
        1680,
        10101,
        375,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210807212170,
    WECANTRIL: 5,
    WEGENHTH: 3,
    WEHBP: 1,
    WEPAINMD: 1,
    WEREST: 3,
    WETYPICAL: 2,
    TUDIARYDAY_x: 3,
    TRHOLIDAY_x: 0,
    TEAGE: 46,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 43,
    PEHSPNON: 1,
    PTDTRACE: 1,
    TRDTIND1: 18,
    TRDPFTPT_x: 1,
    TRERNWA_x: 288461,
    TRERNHLY: -1,
    TRTALONE: 375,
    TRTFAMILY: 0,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 3,
    TESCHENR: 2,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        420,
        10101,
        180,
        -1,
        -1,
        0
      ],
      [
        420,
        422,
        180381,
        2,
        12,
        22,
        0
      ],
      [
        420,
        422,
        180381,
        2,
        12,
        22,
        0
      ],
      [
        422,
        427,
        30112,
        5,
        8,
        22,
        0
      ],
      [
        422,
        427,
        30112,
        5,
        8,
        22,
        0
      ],
      [
        427,
        442,
        180482,
        15,
        12,
        18,
        0
      ],
      [
        442,
        462,
        40507,
        20,
        3,
        18,
        0
      ],
      [
        462,
        507,
        180280,
        45,
        12,
        53,
        0
      ],
      [
        507,
        537,
        20101,
        30,
        11,
        53,
        0
      ],
      [
        537,
        557,
        180782,
        20,
        12,
        53,
        0
      ],
      [
        557,
        617,
        70104,
        60,
        7,
        53,
        0
      ],
      [
        617,
        622,
        180782,
        5,
        12,
        53,
        0
      ],
      [
        622,
        652,
        70104,
        30,
        7,
        53,
        0
      ],
      [
        652,
        682,
        70104,
        30,
        7,
        53,
        0
      ],
      [
        682,
        702,
        181101,
        20,
        12,
        53,
        0
      ],
      [
        702,
        792,
        110101,
        90,
        4,
        53,
        0
      ],
      [
        792,
        822,
        180782,
        30,
        12,
        53,
        0
      ],
      [
        822,
        912,
        70104,
        90,
        7,
        53,
        0
      ],
      [
        912,
        942,
        180482,
        30,
        12,
        53,
        0
      ],
      [
        942,
        947,
        40507,
        5,
        3,
        53,
        0
      ],
      [
        947,
        957,
        180701,
        10,
        12,
        18,
        0
      ],
      [
        957,
        967,
        70101,
        10,
        6,
        18,
        0
      ],
      [
        967,
        977,
        180701,
        10,
        12,
        18,
        0
      ],
      [
        977,
        1037,
        20101,
        60,
        1,
        18,
        0
      ],
      [
        1037,
        1039,
        180381,
        2,
        12,
        18,
        0
      ],
      [
        1039,
        1044,
        30112,
        5,
        8,
        18,
        0
      ],
      [
        1044,
        1046,
        180381,
        2,
        12,
        22,
        0
      ],
      [
        1044,
        1046,
        180381,
        2,
        12,
        22,
        0
      ],
      [
        1046,
        1076,
        20201,
        30,
        1,
        20,
        0
      ],
      [
        1046,
        1076,
        20201,
        30,
        1,
        22,
        0
      ],
      [
        1046,
        1076,
        20201,
        30,
        1,
        22,
        0
      ],
      [
        1076,
        1106,
        110101,
        30,
        1,
        20,
        0
      ],
      [
        1076,
        1106,
        110101,
        30,
        1,
        22,
        0
      ],
      [
        1076,
        1106,
        110101,
        30,
        1,
        22,
        0
      ],
      [
        1106,
        1166,
        20903,
        60,
        1,
        20,
        0
      ],
      [
        1166,
        1260,
        120303,
        94,
        1,
        20,
        0
      ],
      [
        1260,
        1290,
        10201,
        30,
        -1,
        -1,
        0
      ],
      [
        1290,
        1320,
        120303,
        30,
        1,
        18,
        0
      ],
      [
        1320,
        1680,
        10101,
        360,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20211110210505,
    WECANTRIL: 8,
    WEGENHTH: 2,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 1,
    WETYPICAL: 1,
    TUDIARYDAY_x: 3,
    TRHOLIDAY_x: 0,
    TEAGE: 45,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 45,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 22,
    TRDPFTPT_x: 1,
    TRERNWA_x: 184615,
    TRERNHLY: -1,
    TRTALONE: 162,
    TRTFAMILY: 708,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 2,
    TRSPPRES: 1,
    TESCHENR: 2,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        405,
        10101,
        165,
        -1,
        -1,
        0
      ],
      [
        405,
        420,
        120308,
        15,
        1,
        18,
        0
      ],
      [
        420,
        425,
        10201,
        5,
        -1,
        -1,
        0
      ],
      [
        425,
        460,
        130124,
        35,
        9,
        18,
        0
      ],
      [
        460,
        475,
        10201,
        15,
        -1,
        -1,
        0
      ],
      [
        475,
        510,
        180501,
        35,
        12,
        18,
        0
      ],
      [
        510,
        780,
        50101,
        270,
        2,
        18,
        0
      ],
      [
        780,
        795,
        130131,
        15,
        89,
        18,
        0
      ],
      [
        795,
        800,
        180782,
        5,
        12,
        18,
        0
      ],
      [
        800,
        805,
        70102,
        5,
        7,
        18,
        0
      ],
      [
        805,
        810,
        181101,
        5,
        12,
        18,
        0
      ],
      [
        810,
        820,
        110101,
        10,
        2,
        18,
        0
      ],
      [
        820,
        825,
        180501,
        5,
        12,
        18,
        0
      ],
      [
        825,
        1050,
        50101,
        225,
        2,
        18,
        0
      ],
      [
        1050,
        1080,
        60301,
        30,
        1,
        18,
        0
      ],
      [
        1080,
        1115,
        180682,
        35,
        12,
        18,
        0
      ],
      [
        1115,
        1125,
        120101,
        10,
        1,
        18,
        0
      ],
      [
        1125,
        1140,
        20201,
        15,
        1,
        20,
        0
      ],
      [
        1125,
        1140,
        20201,
        15,
        1,
        22,
        0
      ],
      [
        1125,
        1140,
        20201,
        15,
        1,
        22,
        0
      ],
      [
        1140,
        1175,
        110101,
        35,
        1,
        20,
        0
      ],
      [
        1140,
        1175,
        110101,
        35,
        1,
        22,
        0
      ],
      [
        1140,
        1175,
        110101,
        35,
        1,
        22,
        0
      ],
      [
        1175,
        1205,
        120303,
        30,
        1,
        22,
        0
      ],
      [
        1205,
        1250,
        60301,
        45,
        1,
        22,
        0
      ],
      [
        1250,
        1260,
        10201,
        10,
        -1,
        -1,
        0
      ],
      [
        1260,
        1680,
        10101,
        420,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210303211362,
    WECANTRIL: 9,
    WEGENHTH: 3,
    WEHBP: 2,
    WEPAINMD: 1,
    WEREST: 1,
    WETYPICAL: 2,
    TUDIARYDAY_x: 3,
    TRHOLIDAY_x: 0,
    TEAGE: 37,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 43,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 42,
    TRDPFTPT_x: 1,
    TRERNWA_x: 128e3,
    TRERNHLY: 3200,
    TRTALONE: 205,
    TRTFAMILY: 125,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 2,
    TRSPPRES: 1,
    TESCHENR: 1,
    happy_group: 3
  },
  {
    activity: [
      [
        240,
        630,
        10101,
        390,
        -1,
        -1,
        0
      ],
      [
        630,
        750,
        120301,
        120,
        1,
        18,
        0
      ],
      [
        750,
        780,
        110101,
        30,
        1,
        18,
        0
      ],
      [
        780,
        840,
        10201,
        60,
        -1,
        -1,
        0
      ],
      [
        840,
        990,
        120303,
        150,
        1,
        18,
        0
      ],
      [
        990,
        1005,
        180501,
        15,
        12,
        18,
        0
      ],
      [
        1005,
        1080,
        50101,
        75,
        2,
        61,
        0
      ],
      [
        1080,
        1095,
        70103,
        15,
        2,
        18,
        0
      ],
      [
        1095,
        1230,
        50101,
        135,
        2,
        61,
        0
      ],
      [
        1230,
        1245,
        180501,
        15,
        12,
        18,
        0
      ],
      [
        1245,
        1680,
        10101,
        435,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20211110212333,
    WECANTRIL: 4,
    WEGENHTH: 2,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 1,
    WETYPICAL: 2,
    TUDIARYDAY_x: 1,
    TRHOLIDAY_x: 0,
    TEAGE: 16,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 35,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 46,
    TRDPFTPT_x: 2,
    TRERNWA_x: 20535,
    TRERNHLY: 1369,
    TRTALONE: 345,
    TRTFAMILY: 0,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 1,
    TRSPPRES: 3,
    TESCHENR: 1,
    happy_group: 1
  },
  {
    activity: [
      [
        240,
        540,
        10101,
        300,
        -1,
        -1,
        0
      ],
      [
        540,
        555,
        110101,
        15,
        1,
        22,
        0
      ],
      [
        540,
        555,
        110101,
        15,
        1,
        22,
        0
      ],
      [
        555,
        735,
        120303,
        180,
        1,
        18,
        0
      ],
      [
        735,
        750,
        110101,
        15,
        1,
        22,
        0
      ],
      [
        750,
        760,
        50101,
        10,
        1,
        22,
        0
      ],
      [
        760,
        910,
        20102,
        150,
        1,
        22,
        0
      ],
      [
        760,
        910,
        20102,
        150,
        1,
        22,
        0
      ],
      [
        910,
        1e3,
        120101,
        90,
        1,
        57,
        0
      ],
      [
        910,
        1e3,
        120101,
        90,
        1,
        58,
        0
      ],
      [
        1e3,
        1015,
        10201,
        15,
        -1,
        -1,
        0
      ],
      [
        1015,
        1025,
        180280,
        10,
        12,
        57,
        0
      ],
      [
        1015,
        1025,
        180280,
        10,
        12,
        58,
        0
      ],
      [
        1015,
        1025,
        180280,
        10,
        12,
        22,
        0
      ],
      [
        1015,
        1025,
        180280,
        10,
        12,
        22,
        0
      ],
      [
        1015,
        1025,
        180280,
        10,
        12,
        22,
        0
      ],
      [
        1025,
        1028,
        20902,
        3,
        11,
        58,
        0
      ],
      [
        1028,
        1140,
        130132,
        112,
        11,
        57,
        0
      ],
      [
        1028,
        1140,
        130132,
        112,
        11,
        58,
        0
      ],
      [
        1028,
        1140,
        130132,
        112,
        11,
        22,
        0
      ],
      [
        1028,
        1140,
        130132,
        112,
        11,
        22,
        0
      ],
      [
        1028,
        1140,
        130132,
        112,
        11,
        22,
        0
      ],
      [
        1140,
        1155,
        110101,
        15,
        11,
        57,
        0
      ],
      [
        1140,
        1155,
        110101,
        15,
        11,
        58,
        0
      ],
      [
        1140,
        1155,
        110101,
        15,
        11,
        20,
        0
      ],
      [
        1140,
        1155,
        110101,
        15,
        11,
        22,
        0
      ],
      [
        1140,
        1155,
        110101,
        15,
        11,
        22,
        0
      ],
      [
        1140,
        1155,
        110101,
        15,
        11,
        22,
        0
      ],
      [
        1155,
        1170,
        120301,
        15,
        11,
        18,
        0
      ],
      [
        1170,
        1180,
        181283,
        10,
        12,
        57,
        0
      ],
      [
        1170,
        1180,
        181283,
        10,
        12,
        58,
        0
      ],
      [
        1170,
        1180,
        181283,
        10,
        12,
        22,
        0
      ],
      [
        1170,
        1180,
        181283,
        10,
        12,
        22,
        0
      ],
      [
        1170,
        1180,
        181283,
        10,
        12,
        22,
        0
      ],
      [
        1180,
        1260,
        10201,
        80,
        -1,
        -1,
        0
      ],
      [
        1260,
        1261,
        10201,
        1,
        -1,
        -1,
        0
      ],
      [
        1261,
        1276,
        120101,
        15,
        1,
        20,
        0
      ],
      [
        1261,
        1276,
        120101,
        15,
        1,
        22,
        0
      ],
      [
        1276,
        1306,
        10102,
        30,
        -1,
        -1,
        0
      ],
      [
        1306,
        1680,
        10101,
        374,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210806212331,
    WECANTRIL: 7,
    WEGENHTH: 3,
    WEHBP: 2,
    WEPAINMD: 1,
    WEREST: 2,
    WETYPICAL: 2,
    TUDIARYDAY_x: 1,
    TRHOLIDAY_x: 0,
    TEAGE: 35,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 44,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 10,
    TRDPFTPT_x: 1,
    TRERNWA_x: 115384,
    TRERNHLY: -1,
    TRTALONE: 195,
    TRTFAMILY: 342,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 3,
    TRSPPRES: 1,
    TESCHENR: 2,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        480,
        10101,
        240,
        -1,
        -1,
        0
      ],
      [
        480,
        540,
        20201,
        60,
        1,
        22,
        0
      ],
      [
        480,
        540,
        20201,
        60,
        1,
        22,
        0
      ],
      [
        540,
        550,
        110101,
        10,
        1,
        22,
        0
      ],
      [
        550,
        610,
        20101,
        60,
        1,
        18,
        0
      ],
      [
        610,
        720,
        140101,
        110,
        1,
        22,
        0
      ],
      [
        610,
        720,
        140101,
        110,
        1,
        22,
        0
      ],
      [
        720,
        840,
        20102,
        120,
        1,
        18,
        0
      ],
      [
        840,
        900,
        20101,
        60,
        1,
        22,
        0
      ],
      [
        840,
        900,
        20101,
        60,
        1,
        22,
        0
      ],
      [
        900,
        1020,
        120303,
        120,
        1,
        22,
        0
      ],
      [
        900,
        1020,
        120303,
        120,
        1,
        22,
        0
      ],
      [
        1020,
        1140,
        20201,
        120,
        1,
        22,
        0
      ],
      [
        1020,
        1140,
        20201,
        120,
        1,
        22,
        0
      ],
      [
        1140,
        1200,
        110101,
        60,
        1,
        22,
        0
      ],
      [
        1140,
        1200,
        110101,
        60,
        1,
        22,
        0
      ],
      [
        1200,
        1260,
        10201,
        60,
        -1,
        -1,
        0
      ],
      [
        1260,
        1680,
        10101,
        420,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210303212126,
    WECANTRIL: 9,
    WEGENHTH: 3,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 1,
    WETYPICAL: 2,
    TUDIARYDAY_x: 1,
    TRHOLIDAY_x: 0,
    TEAGE: 30,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 40,
    PEHSPNON: 2,
    PTDTRACE: 2,
    TRDTIND1: 41,
    TRDPFTPT_x: 1,
    TRERNWA_x: 71600,
    TRERNHLY: 1790,
    TRTALONE: 180,
    TRTFAMILY: 540,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 2,
    TRSPPRES: 1,
    TESCHENR: 2,
    happy_group: 3
  },
  {
    activity: [
      [
        240,
        360,
        10101,
        120,
        -1,
        -1,
        0
      ],
      [
        360,
        900,
        20501,
        540,
        1,
        20,
        0
      ],
      [
        360,
        900,
        20501,
        540,
        1,
        22,
        0
      ],
      [
        900,
        1110,
        120301,
        210,
        1,
        20,
        0
      ],
      [
        900,
        1110,
        120301,
        210,
        1,
        22,
        0
      ],
      [
        1110,
        1185,
        110101,
        75,
        1,
        20,
        0
      ],
      [
        1110,
        1185,
        110101,
        75,
        1,
        22,
        0
      ],
      [
        1185,
        1305,
        120303,
        120,
        1,
        20,
        0
      ],
      [
        1185,
        1305,
        120303,
        120,
        1,
        22,
        0
      ],
      [
        1305,
        1365,
        10201,
        60,
        -1,
        -1,
        0
      ],
      [
        1365,
        1680,
        10101,
        315,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210807211992,
    WECANTRIL: 9,
    WEGENHTH: 2,
    WEHBP: 2,
    WEPAINMD: 1,
    WEREST: 1,
    WETYPICAL: 2,
    TUDIARYDAY_x: 7,
    TRHOLIDAY_x: 0,
    TEAGE: 52,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 43,
    PEHSPNON: 2,
    PTDTRACE: 4,
    TRDTIND1: 8,
    TRDPFTPT_x: 1,
    TRERNWA_x: 288461,
    TRERNHLY: -1,
    TRTALONE: 0,
    TRTFAMILY: 945,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 1,
    TESCHENR: -1,
    happy_group: 3
  },
  {
    activity: [
      [
        240,
        540,
        10101,
        300,
        -1,
        -1,
        0
      ],
      [
        540,
        600,
        110101,
        60,
        1,
        19,
        0
      ],
      [
        600,
        660,
        10201,
        60,
        -1,
        -1,
        0
      ],
      [
        660,
        720,
        140102,
        60,
        1,
        19,
        0
      ],
      [
        720,
        750,
        110101,
        30,
        1,
        19,
        0
      ],
      [
        750,
        810,
        120312,
        60,
        1,
        19,
        0
      ],
      [
        810,
        930,
        160102,
        120,
        1,
        19,
        0
      ],
      [
        930,
        960,
        10101,
        30,
        -1,
        -1,
        0
      ],
      [
        960,
        962,
        20903,
        2,
        1,
        19,
        0
      ],
      [
        962,
        992,
        20201,
        30,
        1,
        19,
        0
      ],
      [
        992,
        1022,
        110101,
        30,
        1,
        19,
        0
      ],
      [
        1022,
        1382,
        120303,
        360,
        1,
        19,
        0
      ],
      [
        1382,
        1680,
        10101,
        298,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210706211722,
    WECANTRIL: 8,
    WEGENHTH: 3,
    WEHBP: 1,
    WEPAINMD: 2,
    WEREST: 1,
    WETYPICAL: 2,
    TUDIARYDAY_x: 7,
    TRHOLIDAY_x: 0,
    TEAGE: 76,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 42,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 752,
    TRTFAMILY: 0,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 3,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        420,
        10101,
        180,
        -1,
        -1,
        0
      ],
      [
        420,
        435,
        20102,
        15,
        1,
        18,
        0
      ],
      [
        435,
        555,
        20101,
        120,
        1,
        18,
        0
      ],
      [
        555,
        585,
        120303,
        30,
        1,
        18,
        0
      ],
      [
        585,
        630,
        140102,
        45,
        1,
        18,
        0
      ],
      [
        630,
        690,
        20102,
        60,
        1,
        18,
        0
      ],
      [
        690,
        735,
        20203,
        45,
        1,
        18,
        0
      ],
      [
        735,
        765,
        10201,
        30,
        -1,
        -1,
        0
      ],
      [
        765,
        870,
        140105,
        105,
        1,
        58,
        0
      ],
      [
        870,
        885,
        120101,
        15,
        1,
        20,
        0
      ],
      [
        885,
        895,
        181101,
        10,
        12,
        18,
        0
      ],
      [
        895,
        910,
        110101,
        15,
        6,
        18,
        0
      ],
      [
        910,
        1100,
        70104,
        190,
        6,
        18,
        0
      ],
      [
        1100,
        1110,
        180782,
        10,
        12,
        18,
        0
      ],
      [
        1110,
        1120,
        20104,
        10,
        1,
        18,
        0
      ],
      [
        1120,
        1130,
        20201,
        10,
        1,
        18,
        0
      ],
      [
        1130,
        1160,
        20102,
        30,
        1,
        18,
        0
      ],
      [
        1160,
        1220,
        20101,
        60,
        1,
        20,
        0
      ],
      [
        1220,
        1560,
        120303,
        340,
        1,
        18,
        0
      ],
      [
        120,
        240,
        10101,
        120,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20211009212151,
    WECANTRIL: 8,
    WEGENHTH: 3,
    WEHBP: 1,
    WEPAINMD: 2,
    WEREST: 1,
    WETYPICAL: 2,
    TUDIARYDAY_x: 1,
    TRHOLIDAY_x: 0,
    TEAGE: 63,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 39,
    PEHSPNON: 2,
    PTDTRACE: 2,
    TRDTIND1: 51,
    TRDPFTPT_x: 2,
    TRERNWA_x: 32274,
    TRERNHLY: 1467,
    TRTALONE: 930,
    TRTFAMILY: 75,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 1,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        540,
        10101,
        300,
        -1,
        -1,
        0
      ],
      [
        540,
        560,
        10201,
        20,
        -1,
        -1,
        0
      ],
      [
        560,
        590,
        110101,
        30,
        1,
        18,
        0
      ],
      [
        590,
        605,
        500101,
        15,
        1,
        18,
        0
      ],
      [
        605,
        665,
        30103,
        60,
        1,
        20,
        0
      ],
      [
        605,
        665,
        30103,
        60,
        1,
        22,
        0
      ],
      [
        665,
        725,
        20201,
        60,
        1,
        20,
        0
      ],
      [
        665,
        725,
        20201,
        60,
        1,
        22,
        0
      ],
      [
        725,
        755,
        110101,
        30,
        1,
        20,
        0
      ],
      [
        725,
        755,
        110101,
        30,
        1,
        22,
        0
      ],
      [
        725,
        755,
        110101,
        30,
        1,
        24,
        0
      ],
      [
        755,
        770,
        20203,
        15,
        1,
        20,
        0
      ],
      [
        770,
        830,
        120307,
        60,
        1,
        18,
        0
      ],
      [
        830,
        860,
        181201,
        30,
        12,
        18,
        0
      ],
      [
        860,
        1040,
        120101,
        180,
        3,
        51,
        0
      ],
      [
        1040,
        1070,
        181201,
        30,
        12,
        18,
        0
      ],
      [
        1070,
        1130,
        20201,
        60,
        1,
        20,
        0
      ],
      [
        1070,
        1130,
        20201,
        60,
        1,
        24,
        0
      ],
      [
        1130,
        1160,
        110101,
        30,
        1,
        20,
        0
      ],
      [
        1130,
        1160,
        110101,
        30,
        1,
        24,
        0
      ],
      [
        1160,
        1175,
        20203,
        15,
        1,
        20,
        0
      ],
      [
        1175,
        1185,
        30101,
        10,
        1,
        20,
        0
      ],
      [
        1175,
        1185,
        30101,
        10,
        1,
        22,
        0
      ],
      [
        1185,
        1290,
        120303,
        105,
        1,
        24,
        0
      ],
      [
        1290,
        1305,
        10201,
        15,
        -1,
        -1,
        0
      ],
      [
        1305,
        1320,
        120303,
        15,
        1,
        20,
        0
      ],
      [
        1320,
        1680,
        10101,
        360,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210907211345,
    WECANTRIL: 7,
    WEGENHTH: 1,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 1,
    WETYPICAL: 1,
    TUDIARYDAY_x: 1,
    TRHOLIDAY_x: 0,
    TEAGE: 36,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 43,
    PEHSPNON: 2,
    PTDTRACE: 4,
    TRDTIND1: 23,
    TRDPFTPT_x: 1,
    TRERNWA_x: 76e3,
    TRERNHLY: 1900,
    TRTALONE: 165,
    TRTFAMILY: 580,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 1,
    TRSPPRES: 1,
    TESCHENR: 2,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        510,
        10101,
        270,
        -1,
        -1,
        0
      ],
      [
        510,
        530,
        110101,
        20,
        1,
        19,
        0
      ],
      [
        530,
        600,
        10201,
        70,
        -1,
        -1,
        0
      ],
      [
        600,
        625,
        181401,
        25,
        12,
        19,
        0
      ],
      [
        625,
        670,
        140101,
        45,
        9,
        52,
        0
      ],
      [
        625,
        670,
        140101,
        45,
        9,
        53,
        0
      ],
      [
        625,
        670,
        140101,
        45,
        9,
        54,
        0
      ],
      [
        670,
        685,
        181101,
        15,
        12,
        19,
        0
      ],
      [
        685,
        775,
        110101,
        90,
        4,
        52,
        0
      ],
      [
        685,
        775,
        110101,
        90,
        4,
        53,
        0
      ],
      [
        685,
        775,
        110101,
        90,
        4,
        54,
        0
      ],
      [
        775,
        785,
        180701,
        10,
        12,
        19,
        0
      ],
      [
        785,
        805,
        70101,
        20,
        6,
        19,
        0
      ],
      [
        805,
        825,
        180280,
        20,
        12,
        19,
        0
      ],
      [
        825,
        840,
        20681,
        15,
        9,
        19,
        0
      ],
      [
        840,
        870,
        120101,
        30,
        1,
        56,
        0
      ],
      [
        870,
        900,
        110101,
        30,
        1,
        19,
        0
      ],
      [
        900,
        990,
        120303,
        90,
        1,
        19,
        0
      ],
      [
        990,
        1050,
        120101,
        60,
        1,
        56,
        0
      ],
      [
        1050,
        1080,
        110101,
        30,
        1,
        19,
        0
      ],
      [
        1080,
        1200,
        120303,
        120,
        1,
        19,
        0
      ],
      [
        1200,
        1290,
        120301,
        90,
        1,
        19,
        0
      ],
      [
        1290,
        1500,
        120307,
        210,
        1,
        19,
        0
      ],
      [
        60,
        240,
        10101,
        180,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210706210097,
    WECANTRIL: 5,
    WEGENHTH: 3,
    WEHBP: 1,
    WEPAINMD: 2,
    WEREST: 2,
    WETYPICAL: 2,
    TUDIARYDAY_x: 7,
    TRHOLIDAY_x: 0,
    TEAGE: 69,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 41,
    PEHSPNON: 2,
    PTDTRACE: 2,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 695,
    TRTFAMILY: 135,
    TRTFRIEND: 135,
    TRCHILDNUM_x: 0,
    TRSPPRES: 3,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        300,
        10101,
        60,
        -1,
        -1,
        0
      ],
      [
        300,
        315,
        20201,
        15,
        1,
        18,
        0
      ],
      [
        315,
        405,
        120303,
        90,
        1,
        18,
        0
      ],
      [
        405,
        690,
        50101,
        285,
        1,
        18,
        0
      ],
      [
        690,
        750,
        110101,
        60,
        1,
        20,
        0
      ],
      [
        690,
        750,
        110101,
        60,
        1,
        22,
        0
      ],
      [
        750,
        1020,
        50101,
        270,
        1,
        18,
        0
      ],
      [
        1020,
        1023,
        181101,
        3,
        12,
        18,
        0
      ],
      [
        1023,
        1068,
        110101,
        45,
        4,
        20,
        0
      ],
      [
        1023,
        1068,
        110101,
        45,
        4,
        22,
        0
      ],
      [
        1068,
        1200,
        50102,
        132,
        4,
        20,
        0
      ],
      [
        1200,
        1203,
        180501,
        3,
        12,
        18,
        0
      ],
      [
        1203,
        1350,
        120303,
        147,
        1,
        20,
        0
      ],
      [
        1350,
        1680,
        10101,
        330,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20211009210920,
    WECANTRIL: 9,
    WEGENHTH: 3,
    WEHBP: 1,
    WEPAINMD: 1,
    WEREST: 2,
    WETYPICAL: 1,
    TUDIARYDAY_x: 5,
    TRHOLIDAY_x: 0,
    TEAGE: 60,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 42,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 7,
    TRDPFTPT_x: 1,
    TRERNWA_x: 121153,
    TRERNHLY: 3028,
    TRTALONE: 111,
    TRTFAMILY: 252,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 1,
    TRSPPRES: 1,
    TESCHENR: -1,
    happy_group: 3
  },
  {
    activity: [
      [
        240,
        300,
        10101,
        60,
        -1,
        -1,
        0
      ],
      [
        300,
        310,
        130136,
        10,
        1,
        18,
        0
      ],
      [
        310,
        430,
        50102,
        120,
        1,
        18,
        0
      ],
      [
        430,
        460,
        120308,
        30,
        1,
        18,
        0
      ],
      [
        460,
        490,
        50102,
        30,
        1,
        18,
        0
      ],
      [
        490,
        730,
        20101,
        240,
        1,
        20,
        0
      ],
      [
        730,
        790,
        50101,
        60,
        1,
        20,
        0
      ],
      [
        790,
        910,
        20201,
        120,
        1,
        20,
        0
      ],
      [
        910,
        1090,
        120312,
        180,
        1,
        20,
        0
      ],
      [
        1090,
        1150,
        110101,
        60,
        1,
        20,
        0
      ],
      [
        1150,
        1240,
        120312,
        90,
        1,
        20,
        0
      ],
      [
        1240,
        1680,
        10101,
        440,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20211110211088,
    WECANTRIL: 8,
    WEGENHTH: 1,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 1,
    WETYPICAL: 1,
    TUDIARYDAY_x: 2,
    TRHOLIDAY_x: 0,
    TEAGE: 51,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 40,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 1,
    TRDPFTPT_x: 1,
    TRERNWA_x: 184615,
    TRERNHLY: -1,
    TRTALONE: 40,
    TRTFAMILY: 690,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 1,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        300,
        10101,
        60,
        -1,
        -1,
        0
      ],
      [
        300,
        420,
        50101,
        120,
        2,
        18,
        0
      ],
      [
        420,
        435,
        120301,
        15,
        2,
        18,
        0
      ],
      [
        435,
        660,
        50101,
        225,
        2,
        18,
        0
      ],
      [
        660,
        720,
        110101,
        60,
        2,
        18,
        0
      ],
      [
        720,
        840,
        50101,
        120,
        2,
        18,
        0
      ],
      [
        840,
        1200,
        120303,
        360,
        1,
        18,
        0
      ],
      [
        1200,
        1220,
        110101,
        20,
        3,
        18,
        0
      ],
      [
        1220,
        1320,
        120303,
        100,
        1,
        20,
        0
      ],
      [
        1320,
        1350,
        10201,
        30,
        -1,
        -1,
        0
      ],
      [
        1350,
        1680,
        10101,
        330,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210504212058,
    WECANTRIL: 7,
    WEGENHTH: 3,
    WEHBP: 1,
    WEPAINMD: 2,
    WEREST: 1,
    WETYPICAL: 1,
    TUDIARYDAY_x: 4,
    TRHOLIDAY_x: 0,
    TEAGE: 60,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 39,
    PEHSPNON: 2,
    PTDTRACE: 2,
    TRDTIND1: 22,
    TRDPFTPT_x: 1,
    TRERNWA_x: 35250,
    TRERNHLY: 1100,
    TRTALONE: 455,
    TRTFAMILY: 100,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 1,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        270,
        110101,
        30,
        1,
        18,
        0
      ],
      [
        270,
        360,
        120308,
        90,
        1,
        18,
        0
      ],
      [
        360,
        390,
        120303,
        30,
        1,
        18,
        0
      ],
      [
        390,
        420,
        10201,
        30,
        -1,
        -1,
        0
      ],
      [
        420,
        421,
        30186,
        1,
        1,
        18,
        0
      ],
      [
        421,
        441,
        10201,
        20,
        -1,
        -1,
        0
      ],
      [
        441,
        480,
        20101,
        39,
        1,
        18,
        0
      ],
      [
        480,
        510,
        180501,
        30,
        12,
        18,
        0
      ],
      [
        510,
        750,
        50101,
        240,
        2,
        61,
        0
      ],
      [
        750,
        770,
        110101,
        20,
        2,
        18,
        0
      ],
      [
        770,
        990,
        50101,
        220,
        2,
        18,
        0
      ],
      [
        990,
        1020,
        180501,
        30,
        12,
        18,
        0
      ],
      [
        1020,
        1080,
        30186,
        60,
        1,
        23,
        0
      ],
      [
        1080,
        1110,
        110101,
        30,
        1,
        18,
        0
      ],
      [
        1110,
        1200,
        120303,
        90,
        1,
        18,
        0
      ],
      [
        1200,
        1620,
        10101,
        420,
        -1,
        -1,
        0
      ],
      [
        180,
        195,
        20201,
        15,
        1,
        18,
        0
      ],
      [
        195,
        215,
        110101,
        20,
        1,
        18,
        0
      ],
      [
        215,
        218,
        20203,
        3,
        1,
        18,
        0
      ],
      [
        218,
        240,
        120303,
        22,
        1,
        18,
        0
      ]
    ],
    TUCASEID: 20211110212260,
    WECANTRIL: 6,
    WEGENHTH: 4,
    WEHBP: 2,
    WEPAINMD: 1,
    WEREST: 1,
    WETYPICAL: 2,
    TUDIARYDAY_x: 5,
    TRHOLIDAY_x: 0,
    TEAGE: 69,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 40,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 46,
    TRDPFTPT_x: 1,
    TRERNWA_x: 83e3,
    TRERNHLY: -1,
    TRTALONE: 450,
    TRTFAMILY: 60,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 1,
    TRSPPRES: 3,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        540,
        10101,
        300,
        -1,
        -1,
        0
      ],
      [
        540,
        547,
        10301,
        7,
        1,
        21,
        0
      ],
      [
        547,
        567,
        110101,
        20,
        1,
        21,
        0
      ],
      [
        567,
        657,
        120312,
        90,
        1,
        21,
        0
      ],
      [
        657,
        667,
        180802,
        10,
        12,
        18,
        0
      ],
      [
        667,
        669,
        80201,
        2,
        30,
        18,
        0
      ],
      [
        669,
        673,
        180782,
        4,
        12,
        18,
        0
      ],
      [
        673,
        688,
        70104,
        15,
        7,
        18,
        0
      ],
      [
        688,
        703,
        180782,
        15,
        12,
        18,
        0
      ],
      [
        703,
        870,
        120303,
        167,
        1,
        21,
        0
      ],
      [
        870,
        885,
        20201,
        15,
        1,
        21,
        0
      ],
      [
        885,
        915,
        110101,
        30,
        1,
        21,
        0
      ],
      [
        915,
        1440,
        120303,
        525,
        1,
        21,
        0
      ],
      [
        0,
        240,
        10101,
        240,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210707212133,
    WECANTRIL: 10,
    WEGENHTH: 3,
    WEHBP: 1,
    WEPAINMD: 1,
    WEREST: 1,
    WETYPICAL: 2,
    TUDIARYDAY_x: 4,
    TRHOLIDAY_x: 0,
    TEAGE: 64,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 43,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 46,
    TRTFAMILY: 0,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 2,
    TESCHENR: -1,
    happy_group: 3
  },
  {
    activity: [
      [
        240,
        480,
        10101,
        240,
        -1,
        -1,
        0
      ],
      [
        480,
        490,
        110101,
        10,
        1,
        18,
        0
      ],
      [
        490,
        510,
        10201,
        20,
        -1,
        -1,
        0
      ],
      [
        510,
        518,
        181301,
        8,
        12,
        18,
        0
      ],
      [
        518,
        563,
        130134,
        45,
        31,
        56,
        0
      ],
      [
        518,
        563,
        130134,
        45,
        31,
        58,
        0
      ],
      [
        563,
        570,
        180782,
        7,
        13,
        56,
        0
      ],
      [
        570,
        600,
        70104,
        30,
        7,
        57,
        0
      ],
      [
        570,
        600,
        70104,
        30,
        7,
        58,
        0
      ],
      [
        600,
        603,
        180782,
        3,
        13,
        56,
        0
      ],
      [
        603,
        663,
        70104,
        60,
        7,
        57,
        0
      ],
      [
        603,
        663,
        70104,
        60,
        7,
        58,
        0
      ],
      [
        663,
        675,
        180782,
        12,
        13,
        56,
        0
      ],
      [
        675,
        685,
        20681,
        10,
        1,
        18,
        0
      ],
      [
        685,
        690,
        181283,
        5,
        12,
        18,
        0
      ],
      [
        690,
        810,
        120303,
        120,
        3,
        51,
        0
      ],
      [
        810,
        820,
        180905,
        10,
        12,
        18,
        0
      ],
      [
        820,
        835,
        90501,
        15,
        11,
        58,
        0
      ],
      [
        835,
        843,
        180905,
        8,
        12,
        18,
        0
      ],
      [
        843,
        853,
        20102,
        10,
        1,
        18,
        0
      ],
      [
        853,
        883,
        20203,
        30,
        1,
        18,
        0
      ],
      [
        883,
        918,
        10201,
        35,
        -1,
        -1,
        0
      ],
      [
        918,
        978,
        120303,
        60,
        1,
        20,
        0
      ],
      [
        978,
        1020,
        10101,
        42,
        -1,
        -1,
        0
      ],
      [
        1020,
        1080,
        20201,
        60,
        1,
        18,
        0
      ],
      [
        1080,
        1110,
        110101,
        30,
        1,
        18,
        0
      ],
      [
        1110,
        1200,
        120303,
        90,
        1,
        20,
        0
      ],
      [
        1200,
        1210,
        20681,
        10,
        1,
        18,
        0
      ],
      [
        1210,
        1220,
        110101,
        10,
        1,
        20,
        0
      ],
      [
        1220,
        1320,
        120303,
        100,
        1,
        20,
        0
      ],
      [
        1320,
        1680,
        10101,
        360,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20211211212033,
    WECANTRIL: 8,
    WEGENHTH: 2,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 4,
    WETYPICAL: 1,
    TUDIARYDAY_x: 3,
    TRHOLIDAY_x: 0,
    TEAGE: 25,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 41,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 191,
    TRTFAMILY: 380,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 1,
    TESCHENR: 1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        390,
        10101,
        150,
        -1,
        -1,
        0
      ],
      [
        390,
        420,
        110101,
        30,
        1,
        51,
        0
      ],
      [
        390,
        420,
        110101,
        30,
        1,
        53,
        0
      ],
      [
        390,
        420,
        110101,
        30,
        1,
        20,
        0
      ],
      [
        420,
        480,
        10201,
        60,
        -1,
        -1,
        0
      ],
      [
        480,
        540,
        20201,
        60,
        1,
        51,
        0
      ],
      [
        480,
        540,
        20201,
        60,
        1,
        52,
        0
      ],
      [
        480,
        540,
        20201,
        60,
        1,
        53,
        0
      ],
      [
        480,
        540,
        20201,
        60,
        1,
        20,
        0
      ],
      [
        540,
        600,
        110101,
        60,
        1,
        51,
        0
      ],
      [
        540,
        600,
        110101,
        60,
        1,
        52,
        0
      ],
      [
        540,
        600,
        110101,
        60,
        1,
        53,
        0
      ],
      [
        540,
        600,
        110101,
        60,
        1,
        20,
        0
      ],
      [
        600,
        780,
        120101,
        180,
        1,
        51,
        0
      ],
      [
        600,
        780,
        120101,
        180,
        1,
        52,
        0
      ],
      [
        600,
        780,
        120101,
        180,
        1,
        53,
        0
      ],
      [
        600,
        780,
        120101,
        180,
        1,
        20,
        0
      ],
      [
        780,
        810,
        120309,
        30,
        1,
        51,
        0
      ],
      [
        780,
        810,
        120309,
        30,
        1,
        52,
        0
      ],
      [
        780,
        810,
        120309,
        30,
        1,
        53,
        0
      ],
      [
        780,
        810,
        120309,
        30,
        1,
        20,
        0
      ],
      [
        810,
        930,
        120101,
        120,
        1,
        51,
        0
      ],
      [
        810,
        930,
        120101,
        120,
        1,
        52,
        0
      ],
      [
        810,
        930,
        120101,
        120,
        1,
        53,
        0
      ],
      [
        810,
        930,
        120101,
        120,
        1,
        20,
        0
      ],
      [
        930,
        990,
        110101,
        60,
        1,
        51,
        0
      ],
      [
        930,
        990,
        110101,
        60,
        1,
        52,
        0
      ],
      [
        930,
        990,
        110101,
        60,
        1,
        53,
        0
      ],
      [
        930,
        990,
        110101,
        60,
        1,
        20,
        0
      ],
      [
        990,
        1260,
        120101,
        270,
        1,
        51,
        0
      ],
      [
        990,
        1260,
        120101,
        270,
        1,
        52,
        0
      ],
      [
        990,
        1260,
        120101,
        270,
        1,
        53,
        0
      ],
      [
        990,
        1260,
        120101,
        270,
        1,
        20,
        0
      ],
      [
        1260,
        1320,
        120101,
        60,
        1,
        51,
        0
      ],
      [
        1260,
        1320,
        120101,
        60,
        1,
        20,
        0
      ],
      [
        1320,
        1340,
        10201,
        20,
        -1,
        -1,
        0
      ],
      [
        1340,
        1440,
        120101,
        100,
        1,
        53,
        0
      ],
      [
        0,
        240,
        10101,
        240,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20211010211770,
    WECANTRIL: 7,
    WEGENHTH: 1,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 2,
    WETYPICAL: 1,
    TUDIARYDAY_x: 1,
    TRHOLIDAY_x: 0,
    TEAGE: 60,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 42,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 0,
    TRTFAMILY: 970,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 1,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        360,
        10101,
        120,
        -1,
        -1,
        0
      ],
      [
        360,
        390,
        30101,
        30,
        1,
        22,
        0
      ],
      [
        360,
        390,
        30101,
        30,
        1,
        22,
        0
      ],
      [
        360,
        390,
        30101,
        30,
        1,
        24,
        0
      ],
      [
        390,
        392,
        180381,
        2,
        14,
        22,
        0
      ],
      [
        392,
        395,
        30111,
        3,
        11,
        22,
        0
      ],
      [
        395,
        397,
        180381,
        2,
        14,
        18,
        0
      ],
      [
        397,
        427,
        30101,
        30,
        1,
        22,
        0
      ],
      [
        427,
        442,
        30111,
        15,
        1,
        18,
        0
      ],
      [
        442,
        472,
        140102,
        30,
        1,
        18,
        0
      ],
      [
        472,
        482,
        180381,
        10,
        14,
        22,
        0
      ],
      [
        482,
        483,
        30112,
        1,
        8,
        22,
        0
      ],
      [
        483,
        498,
        180381,
        15,
        14,
        18,
        0
      ],
      [
        498,
        528,
        30101,
        30,
        1,
        22,
        0
      ],
      [
        498,
        528,
        30101,
        30,
        1,
        22,
        0
      ],
      [
        528,
        588,
        30101,
        60,
        1,
        22,
        0
      ],
      [
        528,
        588,
        30101,
        60,
        1,
        22,
        0
      ],
      [
        588,
        593,
        30403,
        5,
        1,
        22,
        0
      ],
      [
        588,
        593,
        30403,
        5,
        1,
        22,
        0
      ],
      [
        588,
        593,
        30403,
        5,
        1,
        24,
        0
      ],
      [
        593,
        603,
        20201,
        10,
        1,
        22,
        0
      ],
      [
        593,
        603,
        20201,
        10,
        1,
        22,
        0
      ],
      [
        603,
        604,
        20202,
        1,
        1,
        22,
        0
      ],
      [
        603,
        604,
        20202,
        1,
        1,
        22,
        0
      ],
      [
        603,
        604,
        20202,
        1,
        1,
        24,
        0
      ],
      [
        604,
        724,
        30103,
        120,
        1,
        20,
        0
      ],
      [
        604,
        724,
        30103,
        120,
        1,
        22,
        0
      ],
      [
        604,
        724,
        30103,
        120,
        1,
        22,
        0
      ],
      [
        724,
        784,
        30203,
        60,
        1,
        20,
        0
      ],
      [
        724,
        784,
        30203,
        60,
        1,
        22,
        0
      ],
      [
        784,
        814,
        10201,
        30,
        -1,
        -1,
        0
      ],
      [
        814,
        874,
        180501,
        60,
        12,
        18,
        0
      ],
      [
        874,
        885,
        50101,
        11,
        2,
        18,
        0
      ],
      [
        885,
        1380,
        50101,
        495,
        2,
        59,
        0
      ],
      [
        885,
        1380,
        50101,
        495,
        2,
        61,
        0
      ],
      [
        1380,
        1425,
        180501,
        45,
        12,
        18,
        0
      ],
      [
        1425,
        1470,
        10201,
        45,
        -1,
        -1,
        0
      ],
      [
        30,
        40,
        110101,
        10,
        1,
        22,
        0
      ],
      [
        40,
        240,
        10101,
        200,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20211211211808,
    WECANTRIL: 5,
    WEGENHTH: 3,
    WEHBP: 1,
    WEPAINMD: 1,
    WEREST: 4,
    WETYPICAL: 2,
    TUDIARYDAY_x: 2,
    TRHOLIDAY_x: 0,
    TEAGE: 40,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 41,
    PEHSPNON: 2,
    PTDTRACE: 2,
    TRDTIND1: 42,
    TRDPFTPT_x: 1,
    TRERNWA_x: 43200,
    TRERNHLY: 1350,
    TRTALONE: 167,
    TRTFAMILY: 372,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 4,
    TRSPPRES: 1,
    TESCHENR: 2,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        570,
        10101,
        330,
        -1,
        -1,
        0
      ],
      [
        570,
        590,
        20201,
        20,
        1,
        18,
        0
      ],
      [
        590,
        600,
        160101,
        10,
        1,
        18,
        0
      ],
      [
        600,
        750,
        10201,
        150,
        -1,
        -1,
        0
      ],
      [
        750,
        780,
        181101,
        30,
        13,
        52,
        0
      ],
      [
        780,
        930,
        110101,
        150,
        4,
        52,
        0
      ],
      [
        930,
        935,
        181101,
        5,
        13,
        52,
        0
      ],
      [
        935,
        1025,
        110101,
        90,
        4,
        52,
        0
      ],
      [
        1025,
        1065,
        181101,
        40,
        13,
        52,
        0
      ],
      [
        1065,
        1095,
        10201,
        30,
        -1,
        -1,
        0
      ],
      [
        1095,
        1320,
        120303,
        225,
        1,
        18,
        0
      ],
      [
        1320,
        1680,
        10101,
        360,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210503211785,
    WECANTRIL: 10,
    WEGENHTH: 2,
    WEHBP: 1,
    WEPAINMD: 2,
    WEREST: 1,
    WETYPICAL: 1,
    TUDIARYDAY_x: 1,
    TRHOLIDAY_x: 0,
    TEAGE: 66,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 39,
    PEHSPNON: 1,
    PTDTRACE: 1,
    TRDTIND1: 38,
    TRDPFTPT_x: 1,
    TRERNWA_x: 76923,
    TRERNHLY: -1,
    TRTALONE: 255,
    TRTFAMILY: 315,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 1,
    TESCHENR: -1,
    happy_group: 3
  },
  {
    activity: [
      [
        240,
        330,
        10101,
        90,
        -1,
        -1,
        0
      ],
      [
        330,
        345,
        20201,
        15,
        1,
        20,
        0
      ],
      [
        345,
        350,
        110101,
        5,
        1,
        20,
        0
      ],
      [
        350,
        360,
        20681,
        10,
        1,
        18,
        0
      ],
      [
        360,
        361,
        10301,
        1,
        1,
        18,
        0
      ],
      [
        361,
        368,
        10201,
        7,
        -1,
        -1,
        0
      ],
      [
        368,
        388,
        20201,
        20,
        1,
        20,
        0
      ],
      [
        388,
        418,
        180501,
        30,
        12,
        18,
        0
      ],
      [
        418,
        690,
        50101,
        272,
        2,
        61,
        0
      ],
      [
        690,
        720,
        110101,
        30,
        12,
        18,
        0
      ],
      [
        720,
        1005,
        50101,
        285,
        2,
        61,
        0
      ],
      [
        1005,
        1020,
        180804,
        15,
        12,
        18,
        0
      ],
      [
        1020,
        1080,
        80401,
        60,
        11,
        57,
        0
      ],
      [
        1020,
        1080,
        80401,
        60,
        11,
        58,
        0
      ],
      [
        1020,
        1080,
        80401,
        60,
        11,
        61,
        0
      ],
      [
        1080,
        1125,
        181201,
        45,
        12,
        18,
        0
      ],
      [
        1125,
        1145,
        120101,
        20,
        2,
        18,
        0
      ],
      [
        1145,
        1160,
        181201,
        15,
        12,
        18,
        0
      ],
      [
        1160,
        1175,
        20681,
        15,
        1,
        18,
        0
      ],
      [
        1175,
        1195,
        10201,
        20,
        -1,
        -1,
        0
      ],
      [
        1195,
        1225,
        110101,
        30,
        1,
        20,
        0
      ],
      [
        1225,
        1285,
        120303,
        60,
        1,
        20,
        0
      ],
      [
        1285,
        1290,
        10201,
        5,
        -1,
        -1,
        0
      ],
      [
        1290,
        1680,
        10101,
        390,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20211110211830,
    WECANTRIL: 8,
    WEGENHTH: 2,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 1,
    WETYPICAL: 1,
    TUDIARYDAY_x: 2,
    TRHOLIDAY_x: 0,
    TEAGE: 38,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 39,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 13,
    TRDPFTPT_x: 1,
    TRERNWA_x: 8e4,
    TRERNHLY: 2e3,
    TRTALONE: 181,
    TRTFAMILY: 130,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 2,
    TRSPPRES: 1,
    TESCHENR: 2,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        420,
        10101,
        180,
        -1,
        -1,
        0
      ],
      [
        420,
        460,
        10201,
        40,
        -1,
        -1,
        0
      ],
      [
        460,
        470,
        180482,
        10,
        12,
        20,
        0
      ],
      [
        470,
        560,
        40502,
        90,
        3,
        54,
        0
      ],
      [
        470,
        560,
        40502,
        90,
        3,
        20,
        0
      ],
      [
        560,
        650,
        40506,
        90,
        3,
        54,
        0
      ],
      [
        560,
        650,
        40506,
        90,
        3,
        20,
        0
      ],
      [
        650,
        670,
        180280,
        20,
        12,
        20,
        0
      ],
      [
        670,
        730,
        20902,
        60,
        11,
        54,
        0
      ],
      [
        670,
        730,
        20902,
        60,
        11,
        20,
        0
      ],
      [
        730,
        750,
        180280,
        20,
        12,
        20,
        0
      ],
      [
        750,
        810,
        20902,
        60,
        3,
        54,
        0
      ],
      [
        750,
        810,
        20902,
        60,
        3,
        20,
        0
      ],
      [
        810,
        825,
        180782,
        15,
        12,
        20,
        0
      ],
      [
        825,
        885,
        70104,
        60,
        7,
        20,
        0
      ],
      [
        885,
        895,
        180782,
        10,
        12,
        20,
        0
      ],
      [
        895,
        925,
        20902,
        30,
        1,
        20,
        0
      ],
      [
        925,
        955,
        180782,
        30,
        12,
        20,
        0
      ],
      [
        925,
        955,
        180782,
        30,
        12,
        22,
        0
      ],
      [
        955,
        995,
        70104,
        40,
        7,
        20,
        0
      ],
      [
        955,
        995,
        70104,
        40,
        7,
        22,
        0
      ],
      [
        995,
        1015,
        180701,
        20,
        12,
        20,
        0
      ],
      [
        995,
        1015,
        180701,
        20,
        12,
        22,
        0
      ],
      [
        1015,
        1035,
        70101,
        20,
        6,
        20,
        0
      ],
      [
        1015,
        1035,
        70101,
        20,
        6,
        22,
        0
      ],
      [
        1035,
        1050,
        180701,
        15,
        12,
        20,
        0
      ],
      [
        1035,
        1050,
        180701,
        15,
        12,
        22,
        0
      ],
      [
        1050,
        1080,
        20501,
        30,
        1,
        18,
        0
      ],
      [
        1080,
        1110,
        110101,
        30,
        1,
        20,
        0
      ],
      [
        1080,
        1110,
        110101,
        30,
        1,
        22,
        0
      ],
      [
        1080,
        1110,
        110101,
        30,
        1,
        22,
        0
      ],
      [
        1110,
        1130,
        180782,
        20,
        12,
        20,
        0
      ],
      [
        1110,
        1130,
        180782,
        20,
        12,
        22,
        0
      ],
      [
        1130,
        1170,
        70104,
        40,
        7,
        20,
        0
      ],
      [
        1130,
        1170,
        70104,
        40,
        7,
        22,
        0
      ],
      [
        1170,
        1175,
        180782,
        5,
        12,
        20,
        0
      ],
      [
        1170,
        1175,
        180782,
        5,
        12,
        22,
        0
      ],
      [
        1175,
        1190,
        70104,
        15,
        7,
        20,
        0
      ],
      [
        1175,
        1190,
        70104,
        15,
        7,
        22,
        0
      ],
      [
        1190,
        1210,
        180782,
        20,
        12,
        20,
        0
      ],
      [
        1190,
        1210,
        180782,
        20,
        12,
        22,
        0
      ],
      [
        1210,
        1380,
        120303,
        170,
        1,
        22,
        0
      ],
      [
        1210,
        1380,
        120303,
        170,
        1,
        22,
        0
      ],
      [
        1380,
        1385,
        20681,
        5,
        1,
        18,
        0
      ],
      [
        1385,
        1680,
        10101,
        295,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210502211057,
    WECANTRIL: 10,
    WEGENHTH: 2,
    WEHBP: 1,
    WEPAINMD: 2,
    WEREST: 1,
    WETYPICAL: 1,
    TUDIARYDAY_x: 7,
    TRHOLIDAY_x: 0,
    TEAGE: 53,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 40,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 4,
    TRDPFTPT_x: 1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 35,
    TRTFAMILY: 890,
    TRTFRIEND: 300,
    TRCHILDNUM_x: 0,
    TRSPPRES: 1,
    TESCHENR: -1,
    happy_group: 3
  },
  {
    activity: [
      [
        240,
        480,
        10101,
        240,
        -1,
        -1,
        0
      ],
      [
        480,
        510,
        110101,
        30,
        1,
        18,
        0
      ],
      [
        510,
        630,
        120312,
        120,
        1,
        20,
        0
      ],
      [
        630,
        780,
        120307,
        150,
        1,
        20,
        0
      ],
      [
        780,
        960,
        150101,
        180,
        1,
        18,
        0
      ],
      [
        960,
        964,
        180701,
        4,
        12,
        18,
        0
      ],
      [
        964,
        984,
        70101,
        20,
        6,
        18,
        0
      ],
      [
        984,
        988,
        180701,
        4,
        12,
        18,
        0
      ],
      [
        988,
        1078,
        120303,
        90,
        1,
        18,
        0
      ],
      [
        1078,
        1083,
        20201,
        5,
        1,
        20,
        0
      ],
      [
        1083,
        1113,
        110101,
        30,
        1,
        20,
        0
      ],
      [
        1113,
        1140,
        120303,
        27,
        1,
        20,
        0
      ],
      [
        1140,
        1230,
        120307,
        90,
        1,
        18,
        0
      ],
      [
        1230,
        1425,
        120303,
        195,
        1,
        20,
        0
      ],
      [
        1425,
        1440,
        110101,
        15,
        1,
        20,
        0
      ],
      [
        0,
        240,
        10101,
        240,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210908211070,
    WECANTRIL: 8,
    WEGENHTH: 3,
    WEHBP: 1,
    WEPAINMD: 2,
    WEREST: 1,
    WETYPICAL: 2,
    TUDIARYDAY_x: 1,
    TRHOLIDAY_x: 0,
    TEAGE: 67,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 40,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 418,
    TRTFAMILY: 542,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 1,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        270,
        10201,
        30,
        -1,
        -1,
        0
      ],
      [
        270,
        300,
        20201,
        30,
        1,
        18,
        0
      ],
      [
        300,
        390,
        180280,
        90,
        12,
        18,
        0
      ],
      [
        390,
        405,
        20904,
        15,
        2,
        18,
        0
      ],
      [
        405,
        600,
        50101,
        195,
        2,
        60,
        0
      ],
      [
        600,
        615,
        120301,
        15,
        2,
        60,
        0
      ],
      [
        615,
        720,
        50101,
        105,
        2,
        60,
        0
      ],
      [
        720,
        750,
        110101,
        30,
        2,
        60,
        0
      ],
      [
        750,
        945,
        50101,
        195,
        2,
        60,
        0
      ],
      [
        945,
        1035,
        180501,
        90,
        12,
        18,
        0
      ],
      [
        1035,
        1050,
        10201,
        15,
        -1,
        -1,
        0
      ],
      [
        1050,
        1065,
        120301,
        15,
        1,
        20,
        0
      ],
      [
        1065,
        1150,
        20201,
        85,
        1,
        20,
        0
      ],
      [
        1150,
        1180,
        110101,
        30,
        1,
        20,
        0
      ],
      [
        1150,
        1180,
        110101,
        30,
        1,
        22,
        0
      ],
      [
        1150,
        1180,
        110101,
        30,
        1,
        23,
        0
      ],
      [
        1150,
        1180,
        110101,
        30,
        1,
        23,
        0
      ],
      [
        1180,
        1210,
        20203,
        30,
        1,
        20,
        0
      ],
      [
        1210,
        1320,
        120303,
        110,
        1,
        20,
        0
      ],
      [
        1320,
        1365,
        120301,
        45,
        1,
        20,
        0
      ],
      [
        1365,
        1680,
        10101,
        315,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20211210212566,
    WECANTRIL: 10,
    WEGENHTH: 2,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 2,
    WETYPICAL: 2,
    TUDIARYDAY_x: 6,
    TRHOLIDAY_x: 0,
    TEAGE: 54,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 39,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 6,
    TRDPFTPT_x: 1,
    TRERNWA_x: 17e4,
    TRERNHLY: 4250,
    TRTALONE: 225,
    TRTFAMILY: 315,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 3,
    TRSPPRES: 1,
    TESCHENR: -1,
    happy_group: 3
  },
  {
    activity: [
      [
        240,
        420,
        10101,
        180,
        -1,
        -1,
        0
      ],
      [
        420,
        430,
        20201,
        10,
        1,
        18,
        0
      ],
      [
        430,
        445,
        110101,
        15,
        1,
        18,
        0
      ],
      [
        445,
        465,
        10201,
        20,
        -1,
        -1,
        0
      ],
      [
        465,
        475,
        180280,
        10,
        12,
        18,
        0
      ],
      [
        475,
        655,
        20902,
        180,
        11,
        18,
        0
      ],
      [
        655,
        670,
        180589,
        15,
        12,
        18,
        0
      ],
      [
        670,
        680,
        50389,
        10,
        11,
        58,
        0
      ],
      [
        680,
        690,
        180782,
        10,
        12,
        18,
        0
      ],
      [
        690,
        735,
        70104,
        45,
        11,
        62,
        0
      ],
      [
        735,
        765,
        181201,
        30,
        12,
        18,
        0
      ],
      [
        765,
        915,
        120101,
        150,
        11,
        54,
        0
      ],
      [
        915,
        935,
        180782,
        20,
        12,
        18,
        0
      ],
      [
        935,
        955,
        70103,
        20,
        4,
        62,
        0
      ],
      [
        955,
        975,
        180782,
        20,
        12,
        18,
        0
      ],
      [
        975,
        1035,
        50389,
        60,
        1,
        18,
        0
      ],
      [
        1035,
        1125,
        110101,
        90,
        1,
        53,
        0
      ],
      [
        1125,
        1245,
        120303,
        120,
        1,
        53,
        0
      ],
      [
        1245,
        1305,
        130131,
        60,
        9,
        18,
        0
      ],
      [
        1305,
        1680,
        10101,
        375,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210605212309,
    WECANTRIL: 5,
    WEGENHTH: 4,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 2,
    WETYPICAL: 2,
    TUDIARYDAY_x: 5,
    TRHOLIDAY_x: 0,
    TEAGE: 61,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 40,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 21,
    TRDPFTPT_x: 2,
    TRERNWA_x: 65e3,
    TRERNHLY: -1,
    TRTALONE: 430,
    TRTFAMILY: 210,
    TRTFRIEND: 150,
    TRCHILDNUM_x: 0,
    TRSPPRES: 3,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        330,
        10101,
        90,
        -1,
        -1,
        0
      ],
      [
        330,
        390,
        10201,
        60,
        -1,
        -1,
        0
      ],
      [
        390,
        420,
        180501,
        30,
        12,
        18,
        0
      ],
      [
        420,
        750,
        50101,
        330,
        2,
        59,
        0
      ],
      [
        420,
        750,
        50101,
        330,
        2,
        60,
        0
      ],
      [
        420,
        750,
        50101,
        330,
        2,
        61,
        0
      ],
      [
        420,
        750,
        50101,
        330,
        2,
        62,
        0
      ],
      [
        750,
        753,
        20201,
        3,
        2,
        18,
        0
      ],
      [
        753,
        773,
        110101,
        20,
        2,
        61,
        0
      ],
      [
        773,
        960,
        50101,
        187,
        2,
        59,
        0
      ],
      [
        773,
        960,
        50101,
        187,
        2,
        60,
        0
      ],
      [
        773,
        960,
        50101,
        187,
        2,
        61,
        0
      ],
      [
        773,
        960,
        50101,
        187,
        2,
        62,
        0
      ],
      [
        960,
        990,
        180501,
        30,
        12,
        18,
        0
      ],
      [
        990,
        1050,
        10201,
        60,
        -1,
        -1,
        0
      ],
      [
        1050,
        1095,
        20201,
        45,
        1,
        22,
        0
      ],
      [
        1095,
        1115,
        110101,
        20,
        1,
        22,
        0
      ],
      [
        1115,
        1235,
        60301,
        120,
        1,
        18,
        0
      ],
      [
        1235,
        1275,
        30186,
        40,
        1,
        22,
        0
      ],
      [
        1275,
        1295,
        60301,
        20,
        1,
        18,
        0
      ],
      [
        1295,
        1300,
        10201,
        5,
        -1,
        -1,
        0
      ],
      [
        1300,
        1315,
        10102,
        15,
        -1,
        -1,
        0
      ],
      [
        1315,
        1680,
        10101,
        365,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20211111212434,
    WECANTRIL: 8,
    WEGENHTH: 1,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 1,
    WETYPICAL: 2,
    TUDIARYDAY_x: 7,
    TRHOLIDAY_x: 0,
    TEAGE: 39,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 42,
    PEHSPNON: 2,
    PTDTRACE: 2,
    TRDTIND1: 42,
    TRDPFTPT_x: 1,
    TRERNWA_x: 122208,
    TRERNHLY: 3174,
    TRTALONE: 203,
    TRTFAMILY: 105,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 1,
    TRSPPRES: 3,
    TESCHENR: 2,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        390,
        10101,
        150,
        -1,
        -1,
        0
      ],
      [
        390,
        420,
        110101,
        30,
        1,
        19,
        0
      ],
      [
        420,
        480,
        20201,
        60,
        1,
        19,
        0
      ],
      [
        480,
        500,
        110101,
        20,
        1,
        19,
        0
      ],
      [
        500,
        560,
        20203,
        60,
        1,
        19,
        0
      ],
      [
        560,
        680,
        120303,
        120,
        1,
        19,
        0
      ],
      [
        680,
        710,
        181201,
        30,
        13,
        53,
        0
      ],
      [
        710,
        800,
        120101,
        90,
        11,
        53,
        0
      ],
      [
        800,
        820,
        180701,
        20,
        13,
        53,
        0
      ],
      [
        820,
        850,
        70101,
        30,
        6,
        53,
        0
      ],
      [
        850,
        865,
        180701,
        15,
        13,
        53,
        0
      ],
      [
        865,
        880,
        70101,
        15,
        6,
        53,
        0
      ],
      [
        880,
        895,
        180701,
        15,
        13,
        53,
        0
      ],
      [
        895,
        910,
        70101,
        15,
        6,
        53,
        0
      ],
      [
        910,
        940,
        180701,
        30,
        13,
        53,
        0
      ],
      [
        940,
        1140,
        130105,
        200,
        1,
        54,
        0
      ],
      [
        1140,
        1260,
        120303,
        120,
        1,
        19,
        0
      ],
      [
        1260,
        1680,
        10101,
        420,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20211211210694,
    WECANTRIL: 8,
    WEGENHTH: 3,
    WEHBP: 1,
    WEPAINMD: 1,
    WEREST: 1,
    WETYPICAL: 2,
    TUDIARYDAY_x: 6,
    TRHOLIDAY_x: 0,
    TEAGE: 67,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 39,
    PEHSPNON: 2,
    PTDTRACE: 2,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 410,
    TRTFAMILY: 260,
    TRTFRIEND: 200,
    TRCHILDNUM_x: 0,
    TRSPPRES: 3,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        480,
        10101,
        240,
        -1,
        -1,
        0
      ],
      [
        480,
        540,
        110101,
        60,
        1,
        18,
        0
      ],
      [
        540,
        585,
        130131,
        45,
        9,
        20,
        0
      ],
      [
        585,
        720,
        120303,
        135,
        1,
        18,
        0
      ],
      [
        720,
        750,
        110101,
        30,
        1,
        18,
        0
      ],
      [
        750,
        780,
        20203,
        30,
        1,
        18,
        0
      ],
      [
        780,
        900,
        10101,
        120,
        -1,
        -1,
        0
      ],
      [
        900,
        1020,
        120303,
        120,
        1,
        18,
        0
      ],
      [
        1020,
        1080,
        20201,
        60,
        1,
        20,
        0
      ],
      [
        1080,
        1140,
        110101,
        60,
        1,
        20,
        0
      ],
      [
        1140,
        1230,
        120303,
        90,
        1,
        20,
        0
      ],
      [
        1230,
        1290,
        120312,
        60,
        1,
        20,
        0
      ],
      [
        1290,
        1680,
        10101,
        390,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210706212254,
    WECANTRIL: 9,
    WEGENHTH: 1,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 1,
    WETYPICAL: 2,
    TUDIARYDAY_x: 1,
    TRHOLIDAY_x: 0,
    TEAGE: 72,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 45,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 375,
    TRTFAMILY: 315,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 1,
    TESCHENR: -1,
    happy_group: 3
  },
  {
    activity: [
      [
        240,
        360,
        10101,
        120,
        -1,
        -1,
        0
      ],
      [
        360,
        390,
        20201,
        30,
        1,
        18,
        0
      ],
      [
        390,
        420,
        20904,
        30,
        1,
        18,
        0
      ],
      [
        420,
        480,
        20901,
        60,
        1,
        18,
        0
      ],
      [
        480,
        510,
        50481,
        30,
        1,
        18,
        0
      ],
      [
        510,
        530,
        10201,
        20,
        -1,
        -1,
        0
      ],
      [
        530,
        540,
        20201,
        10,
        1,
        18,
        0
      ],
      [
        540,
        600,
        160105,
        60,
        1,
        18,
        0
      ],
      [
        600,
        690,
        20201,
        90,
        1,
        18,
        0
      ],
      [
        690,
        705,
        110101,
        15,
        1,
        22,
        0
      ],
      [
        690,
        705,
        110101,
        15,
        1,
        22,
        0
      ],
      [
        705,
        720,
        20203,
        15,
        1,
        18,
        0
      ],
      [
        720,
        810,
        20101,
        90,
        1,
        18,
        0
      ],
      [
        810,
        900,
        160105,
        90,
        1,
        18,
        0
      ],
      [
        900,
        960,
        120303,
        60,
        1,
        18,
        0
      ],
      [
        960,
        990,
        20201,
        30,
        1,
        18,
        0
      ],
      [
        990,
        1005,
        181301,
        15,
        12,
        18,
        0
      ],
      [
        1005,
        1065,
        130131,
        60,
        31,
        18,
        0
      ],
      [
        1065,
        1080,
        180782,
        15,
        12,
        18,
        0
      ],
      [
        1080,
        1100,
        70104,
        20,
        7,
        18,
        0
      ],
      [
        1100,
        1115,
        180782,
        15,
        12,
        18,
        0
      ],
      [
        1115,
        1260,
        120301,
        145,
        1,
        20,
        0
      ],
      [
        1115,
        1260,
        120301,
        145,
        1,
        22,
        0
      ],
      [
        1115,
        1260,
        120301,
        145,
        1,
        26,
        0
      ],
      [
        1115,
        1260,
        120301,
        145,
        1,
        26,
        0
      ],
      [
        1115,
        1260,
        120301,
        145,
        1,
        22,
        0
      ],
      [
        1260,
        1290,
        30101,
        30,
        1,
        22,
        0
      ],
      [
        1290,
        1380,
        120303,
        90,
        1,
        20,
        0
      ],
      [
        1380,
        1420,
        10201,
        40,
        -1,
        -1,
        0
      ],
      [
        1420,
        1440,
        120303,
        20,
        1,
        18,
        0
      ],
      [
        0,
        240,
        10101,
        240,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210403210543,
    WECANTRIL: 10,
    WEGENHTH: 1,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 1,
    WETYPICAL: 3,
    TUDIARYDAY_x: 4,
    TRHOLIDAY_x: 0,
    TEAGE: 32,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 39,
    PEHSPNON: 1,
    PTDTRACE: 1,
    TRDTIND1: 40,
    TRDPFTPT_x: 1,
    TRERNWA_x: 9e4,
    TRERNHLY: -1,
    TRTALONE: 740,
    TRTFAMILY: 280,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 2,
    TRSPPRES: 1,
    TESCHENR: 2,
    happy_group: 3
  },
  {
    activity: [
      [
        240,
        480,
        10101,
        240,
        -1,
        -1,
        0
      ],
      [
        480,
        645,
        120303,
        165,
        1,
        28,
        0
      ],
      [
        480,
        645,
        120303,
        165,
        1,
        30,
        0
      ],
      [
        645,
        795,
        181101,
        150,
        12,
        28,
        0
      ],
      [
        795,
        1140,
        110101,
        345,
        4,
        54,
        0
      ],
      [
        795,
        1140,
        110101,
        345,
        4,
        28,
        0
      ],
      [
        1140,
        1290,
        110101,
        150,
        4,
        54,
        0
      ],
      [
        1140,
        1290,
        110101,
        150,
        4,
        28,
        0
      ],
      [
        1290,
        1300,
        180101,
        10,
        11,
        28,
        0
      ],
      [
        1300,
        1680,
        10101,
        380,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20211211212332,
    WECANTRIL: 7,
    WEGENHTH: 1,
    WEHBP: 1,
    WEPAINMD: 1,
    WEREST: 1,
    WETYPICAL: 1,
    TUDIARYDAY_x: 7,
    TRHOLIDAY_x: 0,
    TEAGE: 35,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 43,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 36,
    TRDPFTPT_x: 1,
    TRERNWA_x: 240384,
    TRERNHLY: -1,
    TRTALONE: 0,
    TRTFAMILY: 0,
    TRTFRIEND: 495,
    TRCHILDNUM_x: 0,
    TRSPPRES: 3,
    TESCHENR: 2,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        360,
        10101,
        120,
        -1,
        -1,
        0
      ],
      [
        360,
        365,
        30101,
        5,
        1,
        18,
        0
      ],
      [
        365,
        375,
        20201,
        10,
        1,
        20,
        0
      ],
      [
        365,
        375,
        20201,
        10,
        1,
        22,
        0
      ],
      [
        365,
        375,
        20201,
        10,
        1,
        22,
        0
      ],
      [
        365,
        375,
        20201,
        10,
        1,
        22,
        0
      ],
      [
        375,
        405,
        110101,
        30,
        1,
        20,
        0
      ],
      [
        375,
        405,
        110101,
        30,
        1,
        22,
        0
      ],
      [
        375,
        405,
        110101,
        30,
        1,
        22,
        0
      ],
      [
        375,
        405,
        110101,
        30,
        1,
        22,
        0
      ],
      [
        405,
        465,
        30103,
        60,
        1,
        22,
        0
      ],
      [
        405,
        465,
        30103,
        60,
        1,
        22,
        0
      ],
      [
        405,
        465,
        30103,
        60,
        1,
        22,
        0
      ],
      [
        465,
        495,
        120303,
        30,
        1,
        22,
        0
      ],
      [
        465,
        495,
        120303,
        30,
        1,
        22,
        0
      ],
      [
        465,
        495,
        120303,
        30,
        1,
        22,
        0
      ],
      [
        495,
        720,
        30103,
        225,
        1,
        22,
        0
      ],
      [
        495,
        720,
        30103,
        225,
        1,
        22,
        0
      ],
      [
        495,
        720,
        30103,
        225,
        1,
        22,
        0
      ],
      [
        720,
        750,
        110101,
        30,
        1,
        20,
        0
      ],
      [
        720,
        750,
        110101,
        30,
        1,
        22,
        0
      ],
      [
        720,
        750,
        110101,
        30,
        1,
        22,
        0
      ],
      [
        720,
        750,
        110101,
        30,
        1,
        22,
        0
      ],
      [
        750,
        780,
        30103,
        30,
        1,
        20,
        0
      ],
      [
        750,
        780,
        30103,
        30,
        1,
        22,
        0
      ],
      [
        750,
        780,
        30103,
        30,
        1,
        22,
        0
      ],
      [
        750,
        780,
        30103,
        30,
        1,
        22,
        0
      ],
      [
        780,
        781,
        30101,
        1,
        1,
        18,
        0
      ],
      [
        781,
        990,
        30103,
        209,
        1,
        20,
        0
      ],
      [
        781,
        990,
        30103,
        209,
        1,
        22,
        0
      ],
      [
        781,
        990,
        30103,
        209,
        1,
        22,
        0
      ],
      [
        990,
        995,
        30101,
        5,
        1,
        18,
        0
      ],
      [
        995,
        1050,
        30103,
        55,
        1,
        20,
        0
      ],
      [
        995,
        1050,
        30103,
        55,
        1,
        22,
        0
      ],
      [
        995,
        1050,
        30103,
        55,
        1,
        22,
        0
      ],
      [
        995,
        1050,
        30103,
        55,
        1,
        22,
        0
      ],
      [
        1050,
        1080,
        110101,
        30,
        1,
        20,
        0
      ],
      [
        1050,
        1080,
        110101,
        30,
        1,
        22,
        0
      ],
      [
        1050,
        1080,
        110101,
        30,
        1,
        22,
        0
      ],
      [
        1050,
        1080,
        110101,
        30,
        1,
        22,
        0
      ],
      [
        1080,
        1140,
        30103,
        60,
        1,
        20,
        0
      ],
      [
        1080,
        1140,
        30103,
        60,
        1,
        22,
        0
      ],
      [
        1080,
        1140,
        30103,
        60,
        1,
        22,
        0
      ],
      [
        1080,
        1140,
        30103,
        60,
        1,
        22,
        0
      ],
      [
        1140,
        1160,
        30101,
        20,
        1,
        18,
        0
      ],
      [
        1160,
        1200,
        30103,
        40,
        1,
        22,
        0
      ],
      [
        1200,
        1230,
        30102,
        30,
        1,
        22,
        0
      ],
      [
        1230,
        1320,
        120303,
        90,
        1,
        20,
        0
      ],
      [
        1320,
        1335,
        10102,
        15,
        -1,
        -1,
        0
      ],
      [
        1335,
        1680,
        10101,
        345,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20211211211609,
    WECANTRIL: 7,
    WEGENHTH: 3,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 3,
    WETYPICAL: 1,
    TUDIARYDAY_x: 2,
    TRHOLIDAY_x: 0,
    TEAGE: 36,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 44,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 40,
    TRDPFTPT_x: 1,
    TRERNWA_x: 288461,
    TRERNHLY: -1,
    TRTALONE: 31,
    TRTFAMILY: 929,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 3,
    TRSPPRES: 1,
    TESCHENR: 2,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        420,
        10101,
        180,
        -1,
        -1,
        0
      ],
      [
        420,
        440,
        110101,
        20,
        1,
        20,
        0
      ],
      [
        440,
        560,
        120303,
        120,
        1,
        20,
        0
      ],
      [
        560,
        680,
        20101,
        120,
        1,
        20,
        0
      ],
      [
        680,
        740,
        120303,
        60,
        1,
        20,
        0
      ],
      [
        740,
        920,
        20901,
        180,
        1,
        20,
        0
      ],
      [
        920,
        980,
        10101,
        60,
        -1,
        -1,
        0
      ],
      [
        980,
        1010,
        20201,
        30,
        1,
        20,
        0
      ],
      [
        1010,
        1030,
        110101,
        20,
        1,
        20,
        0
      ],
      [
        1030,
        1060,
        20901,
        30,
        1,
        20,
        0
      ],
      [
        1060,
        1120,
        160101,
        60,
        1,
        20,
        0
      ],
      [
        1120,
        1300,
        120303,
        180,
        1,
        20,
        0
      ],
      [
        1300,
        1680,
        10101,
        380,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210403210922,
    WECANTRIL: 7,
    WEGENHTH: 2,
    WEHBP: 2,
    WEPAINMD: 1,
    WEREST: 3,
    WETYPICAL: 3,
    TUDIARYDAY_x: 7,
    TRHOLIDAY_x: 0,
    TEAGE: 53,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 43,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 7,
    TRDPFTPT_x: 1,
    TRERNWA_x: 184615,
    TRERNHLY: -1,
    TRTALONE: 0,
    TRTFAMILY: 820,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 1,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        360,
        10101,
        120,
        -1,
        -1,
        0
      ],
      [
        360,
        400,
        10201,
        40,
        -1,
        -1,
        0
      ],
      [
        400,
        410,
        181301,
        10,
        12,
        19,
        0
      ],
      [
        410,
        455,
        130131,
        45,
        9,
        19,
        0
      ],
      [
        455,
        460,
        20201,
        5,
        2,
        19,
        0
      ],
      [
        460,
        475,
        110101,
        15,
        2,
        19,
        0
      ],
      [
        475,
        720,
        50101,
        245,
        2,
        19,
        0
      ],
      [
        720,
        730,
        130131,
        10,
        2,
        19,
        0
      ],
      [
        730,
        735,
        20201,
        5,
        2,
        19,
        0
      ],
      [
        735,
        750,
        110101,
        15,
        2,
        19,
        0
      ],
      [
        750,
        960,
        50101,
        210,
        2,
        19,
        0
      ],
      [
        960,
        990,
        181202,
        30,
        12,
        19,
        0
      ],
      [
        990,
        1200,
        120201,
        210,
        3,
        57,
        0
      ],
      [
        990,
        1200,
        120201,
        210,
        3,
        58,
        0
      ],
      [
        1200,
        1220,
        181202,
        20,
        12,
        19,
        0
      ],
      [
        1220,
        1280,
        120312,
        60,
        1,
        19,
        0
      ],
      [
        1280,
        1620,
        10101,
        340,
        -1,
        -1,
        0
      ],
      [
        180,
        240,
        120303,
        60,
        1,
        19,
        0
      ]
    ],
    TUCASEID: 20210605211525,
    WECANTRIL: 8,
    WEGENHTH: 1,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 2,
    WETYPICAL: 1,
    TUDIARYDAY_x: 1,
    TRHOLIDAY_x: 0,
    TEAGE: 75,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 44,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 9,
    TRDPFTPT_x: 1,
    TRERNWA_x: 25e4,
    TRERNHLY: -1,
    TRTALONE: 275,
    TRTFAMILY: 0,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 3,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        480,
        10101,
        240,
        -1,
        -1,
        0
      ],
      [
        480,
        570,
        20101,
        90,
        1,
        19,
        0
      ],
      [
        570,
        575,
        180701,
        5,
        12,
        19,
        0
      ],
      [
        575,
        660,
        70101,
        85,
        7,
        19,
        0
      ],
      [
        660,
        670,
        181201,
        10,
        12,
        19,
        0
      ],
      [
        670,
        790,
        120101,
        120,
        3,
        54,
        0
      ],
      [
        790,
        800,
        181201,
        10,
        12,
        19,
        0
      ],
      [
        800,
        1080,
        120303,
        280,
        1,
        19,
        0
      ],
      [
        1080,
        1095,
        20201,
        15,
        1,
        19,
        0
      ],
      [
        1095,
        1110,
        110101,
        15,
        1,
        19,
        0
      ],
      [
        1110,
        1350,
        120303,
        240,
        1,
        19,
        0
      ],
      [
        1350,
        1680,
        10101,
        330,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20211110212485,
    WECANTRIL: 8,
    WEGENHTH: 2,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 1,
    WETYPICAL: 1,
    TUDIARYDAY_x: 7,
    TRHOLIDAY_x: 0,
    TEAGE: 66,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 40,
    PEHSPNON: 2,
    PTDTRACE: 2,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 750,
    TRTFAMILY: 0,
    TRTFRIEND: 120,
    TRCHILDNUM_x: 0,
    TRSPPRES: 3,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        390,
        10101,
        150,
        -1,
        -1,
        0
      ],
      [
        390,
        405,
        20201,
        15,
        1,
        52,
        0
      ],
      [
        405,
        420,
        110101,
        15,
        1,
        52,
        0
      ],
      [
        420,
        690,
        40103,
        270,
        1,
        52,
        0
      ],
      [
        420,
        690,
        40103,
        270,
        1,
        20,
        0
      ],
      [
        690,
        720,
        20101,
        30,
        1,
        52,
        0
      ],
      [
        720,
        740,
        110101,
        20,
        1,
        52,
        0
      ],
      [
        720,
        740,
        110101,
        20,
        1,
        20,
        0
      ],
      [
        740,
        780,
        40103,
        40,
        1,
        52,
        0
      ],
      [
        740,
        780,
        40103,
        40,
        1,
        20,
        0
      ],
      [
        780,
        810,
        20902,
        30,
        1,
        20,
        0
      ],
      [
        810,
        1050,
        180101,
        240,
        13,
        20,
        0
      ],
      [
        1050,
        1060,
        10201,
        10,
        -1,
        -1,
        0
      ],
      [
        1060,
        1180,
        180782,
        120,
        13,
        20,
        0
      ],
      [
        1180,
        1185,
        70104,
        5,
        11,
        20,
        0
      ],
      [
        1185,
        1245,
        20902,
        60,
        11,
        20,
        0
      ],
      [
        1245,
        1250,
        181101,
        5,
        13,
        20,
        0
      ],
      [
        1250,
        1340,
        110101,
        90,
        4,
        20,
        0
      ],
      [
        1340,
        1345,
        180101,
        5,
        13,
        20,
        0
      ],
      [
        1345,
        1680,
        10101,
        335,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210605211076,
    WECANTRIL: 9,
    WEGENHTH: 3,
    WEHBP: 1,
    WEPAINMD: 2,
    WEREST: 2,
    WETYPICAL: 2,
    TUDIARYDAY_x: 7,
    TRHOLIDAY_x: 0,
    TEAGE: 63,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 43,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 0,
    TRTFAMILY: 945,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 1,
    TESCHENR: -1,
    happy_group: 3
  },
  {
    activity: [
      [
        240,
        600,
        10101,
        360,
        -1,
        -1,
        0
      ],
      [
        600,
        615,
        20203,
        15,
        1,
        21,
        0
      ],
      [
        615,
        630,
        120101,
        15,
        1,
        21,
        0
      ],
      [
        630,
        660,
        110101,
        30,
        1,
        21,
        0
      ],
      [
        660,
        670,
        20203,
        10,
        1,
        21,
        0
      ],
      [
        670,
        735,
        120101,
        65,
        1,
        21,
        0
      ],
      [
        735,
        780,
        10201,
        45,
        -1,
        -1,
        0
      ],
      [
        780,
        790,
        180501,
        10,
        14,
        19,
        0
      ],
      [
        790,
        805,
        180501,
        15,
        11,
        19,
        0
      ],
      [
        805,
        840,
        180501,
        35,
        16,
        19,
        0
      ],
      [
        840,
        845,
        180501,
        5,
        14,
        19,
        0
      ],
      [
        845,
        1050,
        50101,
        205,
        2,
        59,
        0
      ],
      [
        845,
        1050,
        50101,
        205,
        2,
        61,
        0
      ],
      [
        845,
        1050,
        50101,
        205,
        2,
        62,
        0
      ],
      [
        1050,
        1065,
        110101,
        15,
        2,
        19,
        0
      ],
      [
        1065,
        1230,
        50101,
        165,
        2,
        59,
        0
      ],
      [
        1065,
        1230,
        50101,
        165,
        2,
        61,
        0
      ],
      [
        1065,
        1230,
        50101,
        165,
        2,
        62,
        0
      ],
      [
        1230,
        1235,
        180501,
        5,
        14,
        19,
        0
      ],
      [
        1235,
        1240,
        180501,
        5,
        11,
        19,
        0
      ],
      [
        1240,
        1275,
        180501,
        35,
        16,
        19,
        0
      ],
      [
        1275,
        1285,
        180501,
        10,
        14,
        19,
        0
      ],
      [
        1285,
        1300,
        110101,
        15,
        1,
        21,
        0
      ],
      [
        1300,
        1360,
        160102,
        60,
        1,
        19,
        0
      ],
      [
        1360,
        1365,
        110101,
        5,
        1,
        21,
        0
      ],
      [
        1365,
        1410,
        120303,
        45,
        1,
        19,
        0
      ],
      [
        1410,
        1425,
        10201,
        15,
        -1,
        -1,
        0
      ],
      [
        1425,
        1440,
        120101,
        15,
        1,
        21,
        0
      ],
      [
        0,
        30,
        120312,
        30,
        1,
        19,
        0
      ],
      [
        30,
        240,
        10101,
        210,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20211110212273,
    WECANTRIL: 7,
    WEGENHTH: 2,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 3,
    WETYPICAL: 2,
    TUDIARYDAY_x: 7,
    TRHOLIDAY_x: 0,
    TEAGE: 32,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 43,
    PEHSPNON: 2,
    PTDTRACE: 8,
    TRDTIND1: 44,
    TRDPFTPT_x: 2,
    TRERNWA_x: 105400,
    TRERNHLY: 3100,
    TRTALONE: 270,
    TRTFAMILY: 0,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 2,
    TESCHENR: 2,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        420,
        10101,
        180,
        -1,
        -1,
        0
      ],
      [
        420,
        480,
        130104,
        60,
        1,
        53,
        0
      ],
      [
        480,
        500,
        110101,
        20,
        1,
        19,
        0
      ],
      [
        500,
        560,
        120312,
        60,
        1,
        19,
        0
      ],
      [
        560,
        690,
        120303,
        130,
        1,
        19,
        0
      ],
      [
        690,
        810,
        10101,
        120,
        -1,
        -1,
        0
      ],
      [
        810,
        870,
        120312,
        60,
        1,
        19,
        0
      ],
      [
        870,
        1350,
        120303,
        480,
        1,
        19,
        0
      ],
      [
        1350,
        1680,
        10101,
        330,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210504211895,
    WECANTRIL: 8,
    WEGENHTH: 2,
    WEHBP: 1,
    WEPAINMD: 2,
    WEREST: 1,
    WETYPICAL: 2,
    TUDIARYDAY_x: 7,
    TRHOLIDAY_x: 0,
    TEAGE: 78,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 40,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 3,
    TRDPFTPT_x: 1,
    TRERNWA_x: 288461,
    TRERNHLY: -1,
    TRTALONE: 750,
    TRTFAMILY: 60,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 3,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        300,
        10101,
        60,
        -1,
        -1,
        0
      ],
      [
        300,
        340,
        20681,
        40,
        1,
        18,
        0
      ],
      [
        340,
        355,
        110101,
        15,
        1,
        18,
        0
      ],
      [
        355,
        385,
        10201,
        30,
        -1,
        -1,
        0
      ],
      [
        385,
        405,
        180501,
        20,
        12,
        18,
        0
      ],
      [
        405,
        570,
        50101,
        165,
        2,
        61,
        0
      ],
      [
        405,
        570,
        50101,
        165,
        2,
        62,
        0
      ],
      [
        570,
        585,
        110101,
        15,
        2,
        18,
        0
      ],
      [
        585,
        750,
        50101,
        165,
        2,
        61,
        0
      ],
      [
        585,
        750,
        50101,
        165,
        2,
        62,
        0
      ],
      [
        750,
        840,
        110101,
        90,
        2,
        18,
        0
      ],
      [
        840,
        900,
        50101,
        60,
        2,
        61,
        0
      ],
      [
        840,
        900,
        50101,
        60,
        2,
        62,
        0
      ],
      [
        900,
        915,
        120301,
        15,
        2,
        18,
        0
      ],
      [
        915,
        960,
        50101,
        45,
        2,
        61,
        0
      ],
      [
        915,
        960,
        50101,
        45,
        2,
        62,
        0
      ],
      [
        960,
        985,
        180501,
        25,
        12,
        18,
        0
      ],
      [
        985,
        1045,
        120301,
        60,
        1,
        18,
        0
      ],
      [
        1045,
        1065,
        20681,
        20,
        1,
        18,
        0
      ],
      [
        1065,
        1110,
        120301,
        45,
        1,
        18,
        0
      ],
      [
        1110,
        1155,
        110101,
        45,
        1,
        21,
        0
      ],
      [
        1155,
        1170,
        120303,
        15,
        1,
        21,
        0
      ],
      [
        1170,
        1680,
        10101,
        510,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20211211211885,
    WECANTRIL: 8,
    WEGENHTH: 4,
    WEHBP: 2,
    WEPAINMD: 1,
    WEREST: 1,
    WETYPICAL: 2,
    TUDIARYDAY_x: 7,
    TRHOLIDAY_x: 0,
    TEAGE: 51,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 39,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 22,
    TRDPFTPT_x: 1,
    TRERNWA_x: 62500,
    TRERNHLY: 1632,
    TRTALONE: 345,
    TRTFAMILY: 0,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 2,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        480,
        10101,
        240,
        -1,
        -1,
        0
      ],
      [
        480,
        510,
        20201,
        30,
        1,
        20,
        0
      ],
      [
        510,
        555,
        110101,
        45,
        1,
        20,
        0
      ],
      [
        555,
        575,
        180280,
        20,
        12,
        18,
        0
      ],
      [
        575,
        930,
        20501,
        355,
        3,
        53,
        0
      ],
      [
        930,
        950,
        180280,
        20,
        12,
        18,
        0
      ],
      [
        950,
        1010,
        10101,
        60,
        -1,
        -1,
        0
      ],
      [
        1010,
        1080,
        120303,
        70,
        1,
        18,
        0
      ],
      [
        1080,
        1110,
        110101,
        30,
        1,
        20,
        0
      ],
      [
        1110,
        1200,
        20203,
        90,
        1,
        18,
        0
      ],
      [
        1200,
        1410,
        120303,
        210,
        1,
        20,
        0
      ],
      [
        1410,
        1680,
        10101,
        270,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210303211764,
    WECANTRIL: 9,
    WEGENHTH: 3,
    WEHBP: 2,
    WEPAINMD: 1,
    WEREST: 1,
    WETYPICAL: 2,
    TUDIARYDAY_x: 4,
    TRHOLIDAY_x: 0,
    TEAGE: 80,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 40,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 200,
    TRTFAMILY: 670,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 1,
    TESCHENR: -1,
    happy_group: 3
  },
  {
    activity: [
      [
        240,
        390,
        10101,
        150,
        -1,
        -1,
        0
      ],
      [
        390,
        420,
        110101,
        30,
        1,
        19,
        0
      ],
      [
        420,
        480,
        20681,
        60,
        9,
        19,
        0
      ],
      [
        480,
        490,
        150101,
        10,
        1,
        19,
        0
      ],
      [
        490,
        730,
        150101,
        240,
        1,
        19,
        0
      ],
      [
        730,
        760,
        20681,
        30,
        9,
        19,
        0
      ],
      [
        760,
        770,
        180701,
        10,
        12,
        19,
        0
      ],
      [
        770,
        830,
        70101,
        60,
        6,
        19,
        0
      ],
      [
        830,
        831,
        180782,
        1,
        12,
        19,
        0
      ],
      [
        831,
        861,
        70104,
        30,
        7,
        19,
        0
      ],
      [
        861,
        862,
        181101,
        1,
        14,
        19,
        0
      ],
      [
        862,
        982,
        110101,
        120,
        4,
        19,
        0
      ],
      [
        982,
        992,
        181101,
        10,
        12,
        19,
        0
      ],
      [
        992,
        1002,
        20903,
        10,
        1,
        19,
        0
      ],
      [
        1002,
        1042,
        20201,
        40,
        1,
        19,
        0
      ],
      [
        1042,
        1072,
        110101,
        30,
        1,
        19,
        0
      ],
      [
        1072,
        1132,
        120303,
        60,
        1,
        19,
        0
      ],
      [
        1132,
        1142,
        20681,
        10,
        1,
        19,
        0
      ],
      [
        1142,
        1202,
        20681,
        60,
        9,
        19,
        0
      ],
      [
        1202,
        1410,
        120303,
        208,
        1,
        19,
        0
      ],
      [
        1410,
        1415,
        10201,
        5,
        -1,
        -1,
        0
      ],
      [
        1415,
        1680,
        10101,
        265,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210806211177,
    WECANTRIL: 5,
    WEGENHTH: 3,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 2,
    WETYPICAL: 2,
    TUDIARYDAY_x: 2,
    TRHOLIDAY_x: 0,
    TEAGE: 39,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 40,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 1020,
    TRTFAMILY: 0,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 3,
    TESCHENR: 2,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        420,
        10101,
        180,
        -1,
        -1,
        0
      ],
      [
        420,
        435,
        10301,
        15,
        1,
        19,
        0
      ],
      [
        435,
        440,
        20201,
        5,
        1,
        19,
        0
      ],
      [
        440,
        500,
        120308,
        60,
        1,
        19,
        0
      ],
      [
        500,
        540,
        10201,
        40,
        -1,
        -1,
        0
      ],
      [
        540,
        545,
        180280,
        5,
        12,
        19,
        0
      ],
      [
        545,
        550,
        20903,
        5,
        32,
        19,
        0
      ],
      [
        550,
        560,
        20903,
        10,
        12,
        19,
        0
      ],
      [
        560,
        565,
        180802,
        5,
        12,
        19,
        0
      ],
      [
        565,
        575,
        80201,
        10,
        30,
        19,
        0
      ],
      [
        575,
        585,
        180802,
        10,
        12,
        19,
        0
      ],
      [
        585,
        600,
        80201,
        15,
        30,
        19,
        0
      ],
      [
        600,
        605,
        180782,
        5,
        12,
        19,
        0
      ],
      [
        605,
        615,
        70102,
        10,
        7,
        19,
        0
      ],
      [
        615,
        625,
        180782,
        10,
        12,
        19,
        0
      ],
      [
        625,
        685,
        120312,
        60,
        1,
        19,
        0
      ],
      [
        685,
        750,
        120308,
        65,
        1,
        19,
        0
      ],
      [
        750,
        765,
        20201,
        15,
        1,
        19,
        0
      ],
      [
        765,
        780,
        110101,
        15,
        1,
        19,
        0
      ],
      [
        780,
        840,
        120312,
        60,
        1,
        19,
        0
      ],
      [
        840,
        870,
        181283,
        30,
        12,
        19,
        0
      ],
      [
        870,
        930,
        160102,
        60,
        1,
        19,
        0
      ],
      [
        930,
        960,
        50301,
        30,
        1,
        19,
        0
      ],
      [
        960,
        1110,
        120312,
        150,
        1,
        19,
        0
      ],
      [
        1110,
        1130,
        20201,
        20,
        1,
        19,
        0
      ],
      [
        1130,
        1160,
        110101,
        30,
        1,
        19,
        0
      ],
      [
        1160,
        1335,
        120303,
        175,
        1,
        19,
        0
      ],
      [
        1335,
        1680,
        10101,
        345,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210706212086,
    WECANTRIL: 7,
    WEGENHTH: 3,
    WEHBP: 2,
    WEPAINMD: 1,
    WEREST: 2,
    WETYPICAL: 1,
    TUDIARYDAY_x: 3,
    TRHOLIDAY_x: 0,
    TEAGE: 80,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 43,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 875,
    TRTFAMILY: 0,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 3,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        420,
        10101,
        180,
        -1,
        -1,
        0
      ],
      [
        420,
        440,
        30101,
        20,
        1,
        22,
        0
      ],
      [
        440,
        460,
        30101,
        20,
        1,
        20,
        0
      ],
      [
        440,
        460,
        30101,
        20,
        1,
        22,
        0
      ],
      [
        440,
        460,
        30101,
        20,
        1,
        22,
        0
      ],
      [
        460,
        580,
        30103,
        120,
        1,
        20,
        0
      ],
      [
        460,
        580,
        30103,
        120,
        1,
        22,
        0
      ],
      [
        460,
        580,
        30103,
        120,
        1,
        22,
        0
      ],
      [
        580,
        780,
        90202,
        200,
        1,
        58,
        0
      ],
      [
        580,
        780,
        90202,
        200,
        1,
        22,
        0
      ],
      [
        780,
        800,
        110101,
        20,
        1,
        20,
        0
      ],
      [
        780,
        800,
        110101,
        20,
        1,
        22,
        0
      ],
      [
        780,
        800,
        110101,
        20,
        1,
        22,
        0
      ],
      [
        800,
        801,
        30101,
        1,
        1,
        22,
        0
      ],
      [
        801,
        921,
        30103,
        120,
        1,
        20,
        0
      ],
      [
        801,
        921,
        30103,
        120,
        1,
        22,
        0
      ],
      [
        921,
        1041,
        120101,
        120,
        1,
        53,
        0
      ],
      [
        921,
        1041,
        120101,
        120,
        1,
        20,
        0
      ],
      [
        921,
        1041,
        120101,
        120,
        1,
        22,
        0
      ],
      [
        921,
        1041,
        120101,
        120,
        1,
        22,
        0
      ],
      [
        1041,
        1071,
        20201,
        30,
        1,
        18,
        0
      ],
      [
        1071,
        1091,
        110101,
        20,
        1,
        20,
        0
      ],
      [
        1071,
        1091,
        110101,
        20,
        1,
        22,
        0
      ],
      [
        1071,
        1091,
        110101,
        20,
        1,
        22,
        0
      ],
      [
        1091,
        1170,
        120303,
        79,
        1,
        20,
        0
      ],
      [
        1091,
        1170,
        120303,
        79,
        1,
        22,
        0
      ],
      [
        1091,
        1170,
        120303,
        79,
        1,
        22,
        0
      ],
      [
        1170,
        1200,
        30101,
        30,
        1,
        22,
        0
      ],
      [
        1200,
        1205,
        30101,
        5,
        1,
        22,
        0
      ],
      [
        1205,
        1325,
        120303,
        120,
        1,
        20,
        0
      ],
      [
        1205,
        1325,
        120303,
        120,
        1,
        22,
        0
      ],
      [
        1325,
        1355,
        30101,
        30,
        1,
        22,
        0
      ],
      [
        1355,
        1380,
        120303,
        25,
        1,
        20,
        0
      ],
      [
        1380,
        1680,
        10101,
        300,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20211110211240,
    WECANTRIL: 9,
    WEGENHTH: 2,
    WEHBP: 2,
    WEPAINMD: 1,
    WEREST: 3,
    WETYPICAL: 2,
    TUDIARYDAY_x: 6,
    TRHOLIDAY_x: 0,
    TEAGE: 30,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 44,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 40,
    TRDPFTPT_x: 1,
    TRERNWA_x: 115384,
    TRERNHLY: -1,
    TRTALONE: 30,
    TRTFAMILY: 930,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 2,
    TRSPPRES: 1,
    TESCHENR: 1,
    happy_group: 3
  },
  {
    activity: [
      [
        240,
        900,
        10101,
        660,
        -1,
        -1,
        0
      ],
      [
        900,
        960,
        120303,
        60,
        1,
        18,
        0
      ],
      [
        960,
        990,
        20201,
        30,
        1,
        18,
        0
      ],
      [
        990,
        1110,
        120303,
        120,
        1,
        18,
        0
      ],
      [
        1110,
        1140,
        160101,
        30,
        1,
        18,
        0
      ],
      [
        1140,
        1440,
        120303,
        300,
        1,
        18,
        0
      ],
      [
        0,
        10,
        10201,
        10,
        -1,
        -1,
        0
      ],
      [
        10,
        240,
        10101,
        230,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20211010212064,
    WECANTRIL: 5,
    WEGENHTH: 4,
    WEHBP: 2,
    WEPAINMD: 1,
    WEREST: 1,
    WETYPICAL: 2,
    TUDIARYDAY_x: 1,
    TRHOLIDAY_x: 0,
    TEAGE: 54,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 39,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 540,
    TRTFAMILY: 0,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 1,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        540,
        10101,
        300,
        -1,
        -1,
        0
      ],
      [
        540,
        570,
        110101,
        30,
        1,
        19,
        0
      ],
      [
        570,
        600,
        20102,
        30,
        1,
        19,
        0
      ],
      [
        600,
        620,
        180782,
        20,
        12,
        19,
        0
      ],
      [
        620,
        624,
        70103,
        4,
        4,
        19,
        0
      ],
      [
        624,
        629,
        180782,
        5,
        12,
        19,
        0
      ],
      [
        629,
        632,
        70104,
        3,
        11,
        58,
        0
      ],
      [
        632,
        872,
        130114,
        240,
        11,
        56,
        0
      ],
      [
        872,
        877,
        181101,
        5,
        12,
        19,
        0
      ],
      [
        877,
        897,
        110101,
        20,
        4,
        58,
        0
      ],
      [
        897,
        917,
        181101,
        20,
        12,
        19,
        0
      ],
      [
        917,
        962,
        120301,
        45,
        1,
        19,
        0
      ],
      [
        962,
        972,
        181301,
        10,
        12,
        19,
        0
      ],
      [
        972,
        1092,
        130124,
        120,
        31,
        58,
        0
      ],
      [
        1092,
        1102,
        181301,
        10,
        12,
        19,
        0
      ],
      [
        1102,
        1192,
        120303,
        90,
        1,
        19,
        0
      ],
      [
        1192,
        1222,
        20101,
        30,
        1,
        19,
        0
      ],
      [
        1222,
        1262,
        20102,
        40,
        1,
        19,
        0
      ],
      [
        1262,
        1302,
        160101,
        40,
        1,
        19,
        0
      ],
      [
        1302,
        1452,
        120303,
        150,
        1,
        19,
        0
      ],
      [
        12,
        52,
        120312,
        40,
        1,
        19,
        0
      ],
      [
        52,
        240,
        10101,
        188,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20211009210892,
    WECANTRIL: 7,
    WEGENHTH: 3,
    WEHBP: 1,
    WEPAINMD: 1,
    WEREST: 2,
    WETYPICAL: 3,
    TUDIARYDAY_x: 1,
    TRHOLIDAY_x: 0,
    TEAGE: 59,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 42,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 569,
    TRTFAMILY: 0,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 3,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        420,
        10101,
        180,
        -1,
        -1,
        0
      ],
      [
        420,
        450,
        10201,
        30,
        -1,
        -1,
        0
      ],
      [
        450,
        452,
        180501,
        2,
        12,
        18,
        0
      ],
      [
        452,
        572,
        50101,
        120,
        2,
        61,
        0
      ],
      [
        452,
        572,
        50101,
        120,
        2,
        62,
        0
      ],
      [
        572,
        587,
        120308,
        15,
        2,
        61,
        0
      ],
      [
        587,
        780,
        50101,
        193,
        2,
        61,
        0
      ],
      [
        587,
        780,
        50101,
        193,
        2,
        62,
        0
      ],
      [
        780,
        800,
        180501,
        20,
        12,
        18,
        0
      ],
      [
        800,
        830,
        10101,
        30,
        -1,
        -1,
        0
      ],
      [
        830,
        950,
        160101,
        120,
        1,
        24,
        0
      ],
      [
        830,
        950,
        160101,
        120,
        1,
        24,
        0
      ],
      [
        950,
        980,
        110101,
        30,
        1,
        24,
        0
      ],
      [
        950,
        980,
        110101,
        30,
        1,
        24,
        0
      ],
      [
        980,
        985,
        20681,
        5,
        1,
        24,
        0
      ],
      [
        985,
        1045,
        120303,
        60,
        1,
        18,
        0
      ],
      [
        1045,
        1225,
        70104,
        180,
        1,
        18,
        0
      ],
      [
        1225,
        1230,
        20681,
        5,
        1,
        18,
        0
      ],
      [
        1230,
        1260,
        10201,
        30,
        -1,
        -1,
        0
      ],
      [
        1260,
        1290,
        160101,
        30,
        1,
        18,
        0
      ],
      [
        1290,
        1295,
        20681,
        5,
        1,
        18,
        0
      ],
      [
        1295,
        1300,
        20681,
        5,
        1,
        18,
        0
      ],
      [
        1300,
        1360,
        120308,
        60,
        1,
        18,
        0
      ],
      [
        1360,
        1680,
        10101,
        320,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210907210269,
    WECANTRIL: 10,
    WEGENHTH: 1,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 2,
    WETYPICAL: 2,
    TUDIARYDAY_x: 5,
    TRHOLIDAY_x: 0,
    TEAGE: 20,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 40,
    PEHSPNON: 1,
    PTDTRACE: 1,
    TRDTIND1: 46,
    TRDPFTPT_x: 2,
    TRERNWA_x: 23076,
    TRERNHLY: -1,
    TRTALONE: 367,
    TRTFAMILY: 155,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 3,
    TESCHENR: 2,
    happy_group: 3
  },
  {
    activity: [
      [
        240,
        570,
        10101,
        330,
        -1,
        -1,
        0
      ],
      [
        570,
        575,
        130134,
        5,
        1,
        18,
        0
      ],
      [
        575,
        577,
        130134,
        2,
        1,
        18,
        0
      ],
      [
        577,
        607,
        110101,
        30,
        1,
        18,
        0
      ],
      [
        607,
        637,
        10201,
        30,
        -1,
        -1,
        0
      ],
      [
        637,
        795,
        120311,
        158,
        1,
        18,
        0
      ],
      [
        795,
        825,
        110101,
        30,
        1,
        20,
        0
      ],
      [
        825,
        1095,
        20501,
        270,
        1,
        20,
        0
      ],
      [
        1095,
        1170,
        110101,
        75,
        1,
        20,
        0
      ],
      [
        1170,
        1440,
        120311,
        270,
        1,
        18,
        0
      ],
      [
        0,
        30,
        10201,
        30,
        -1,
        -1,
        0
      ],
      [
        30,
        60,
        160101,
        30,
        1,
        18,
        0
      ],
      [
        60,
        240,
        10101,
        180,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210403211216,
    WECANTRIL: 8,
    WEGENHTH: 2,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 2,
    WETYPICAL: 1,
    TUDIARYDAY_x: 7,
    TRHOLIDAY_x: 0,
    TEAGE: 71,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 44,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 495,
    TRTFAMILY: 375,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 1,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        480,
        10101,
        240,
        -1,
        -1,
        0
      ],
      [
        480,
        510,
        20201,
        30,
        1,
        18,
        0
      ],
      [
        510,
        520,
        30101,
        10,
        1,
        22,
        0
      ],
      [
        510,
        520,
        30101,
        10,
        1,
        22,
        0
      ],
      [
        510,
        520,
        30101,
        10,
        1,
        27,
        0
      ],
      [
        520,
        550,
        110101,
        30,
        1,
        22,
        0
      ],
      [
        520,
        550,
        110101,
        30,
        1,
        22,
        0
      ],
      [
        520,
        550,
        110101,
        30,
        1,
        27,
        0
      ],
      [
        550,
        590,
        10301,
        40,
        1,
        18,
        0
      ],
      [
        590,
        650,
        30105,
        60,
        1,
        22,
        0
      ],
      [
        590,
        650,
        30105,
        60,
        1,
        22,
        0
      ],
      [
        650,
        710,
        20201,
        60,
        1,
        18,
        0
      ],
      [
        710,
        740,
        180804,
        30,
        12,
        22,
        0
      ],
      [
        710,
        740,
        180804,
        30,
        12,
        22,
        0
      ],
      [
        740,
        800,
        80401,
        60,
        11,
        58,
        0
      ],
      [
        800,
        830,
        180804,
        30,
        12,
        22,
        0
      ],
      [
        800,
        830,
        180804,
        30,
        12,
        22,
        0
      ],
      [
        830,
        860,
        20201,
        30,
        1,
        18,
        0
      ],
      [
        860,
        890,
        110101,
        30,
        1,
        22,
        0
      ],
      [
        860,
        890,
        110101,
        30,
        1,
        22,
        0
      ],
      [
        890,
        920,
        20203,
        30,
        1,
        22,
        0
      ],
      [
        890,
        920,
        20203,
        30,
        1,
        22,
        0
      ],
      [
        920,
        935,
        160101,
        15,
        1,
        18,
        0
      ],
      [
        935,
        995,
        120303,
        60,
        1,
        22,
        0
      ],
      [
        935,
        995,
        120303,
        60,
        1,
        22,
        0
      ],
      [
        995,
        1005,
        181301,
        10,
        17,
        20,
        0
      ],
      [
        995,
        1005,
        181301,
        10,
        17,
        22,
        0
      ],
      [
        995,
        1005,
        181301,
        10,
        17,
        22,
        0
      ],
      [
        995,
        1005,
        181301,
        10,
        17,
        27,
        0
      ],
      [
        1005,
        1065,
        130104,
        60,
        9,
        20,
        0
      ],
      [
        1005,
        1065,
        130104,
        60,
        9,
        22,
        0
      ],
      [
        1005,
        1065,
        130104,
        60,
        9,
        22,
        0
      ],
      [
        1005,
        1065,
        130104,
        60,
        9,
        27,
        0
      ],
      [
        1065,
        1095,
        30103,
        30,
        9,
        20,
        0
      ],
      [
        1065,
        1095,
        30103,
        30,
        9,
        22,
        0
      ],
      [
        1065,
        1095,
        30103,
        30,
        9,
        22,
        0
      ],
      [
        1065,
        1095,
        30103,
        30,
        9,
        27,
        0
      ],
      [
        1095,
        1125,
        30109,
        30,
        9,
        20,
        0
      ],
      [
        1095,
        1125,
        30109,
        30,
        9,
        22,
        0
      ],
      [
        1095,
        1125,
        30109,
        30,
        9,
        22,
        0
      ],
      [
        1095,
        1125,
        30109,
        30,
        9,
        27,
        0
      ],
      [
        1125,
        1135,
        180381,
        10,
        17,
        20,
        0
      ],
      [
        1125,
        1135,
        180381,
        10,
        17,
        22,
        0
      ],
      [
        1125,
        1135,
        180381,
        10,
        17,
        22,
        0
      ],
      [
        1125,
        1135,
        180381,
        10,
        17,
        27,
        0
      ],
      [
        1135,
        1150,
        30101,
        15,
        1,
        22,
        0
      ],
      [
        1150,
        1155,
        20201,
        5,
        1,
        20,
        0
      ],
      [
        1150,
        1155,
        20201,
        5,
        1,
        22,
        0
      ],
      [
        1150,
        1155,
        20201,
        5,
        1,
        22,
        0
      ],
      [
        1150,
        1155,
        20201,
        5,
        1,
        27,
        0
      ],
      [
        1155,
        1275,
        160101,
        120,
        1,
        18,
        0
      ],
      [
        1275,
        1365,
        120303,
        90,
        1,
        20,
        0
      ],
      [
        1275,
        1365,
        120303,
        90,
        1,
        22,
        0
      ],
      [
        1275,
        1365,
        120303,
        90,
        1,
        22,
        0
      ],
      [
        1275,
        1365,
        120303,
        90,
        1,
        27,
        0
      ],
      [
        1365,
        1680,
        10101,
        315,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210605211078,
    WECANTRIL: 7,
    WEGENHTH: 5,
    WEHBP: 1,
    WEPAINMD: 1,
    WEREST: 1,
    WETYPICAL: 2,
    TUDIARYDAY_x: 5,
    TRHOLIDAY_x: 0,
    TEAGE: 42,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 39,
    PEHSPNON: 1,
    PTDTRACE: 1,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 295,
    TRTFAMILY: 530,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 3,
    TRSPPRES: 1,
    TESCHENR: 2,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        480,
        10101,
        240,
        -1,
        -1,
        0
      ],
      [
        480,
        490,
        20201,
        10,
        1,
        19,
        0
      ],
      [
        490,
        500,
        110101,
        10,
        1,
        19,
        0
      ],
      [
        500,
        530,
        20203,
        30,
        1,
        19,
        0
      ],
      [
        530,
        534,
        10301,
        4,
        1,
        19,
        0
      ],
      [
        534,
        579,
        10201,
        45,
        -1,
        -1,
        0
      ],
      [
        579,
        583,
        180280,
        4,
        12,
        19,
        0
      ],
      [
        583,
        613,
        20903,
        30,
        32,
        19,
        0
      ],
      [
        613,
        618,
        180482,
        5,
        12,
        19,
        0
      ],
      [
        618,
        633,
        40503,
        15,
        3,
        19,
        0
      ],
      [
        633,
        637,
        180701,
        4,
        12,
        19,
        0
      ],
      [
        637,
        682,
        70101,
        45,
        6,
        19,
        0
      ],
      [
        682,
        687,
        180701,
        5,
        12,
        19,
        0
      ],
      [
        687,
        702,
        20104,
        15,
        1,
        19,
        0
      ],
      [
        702,
        882,
        20103,
        180,
        1,
        19,
        0
      ],
      [
        882,
        892,
        20201,
        10,
        1,
        19,
        0
      ],
      [
        892,
        902,
        110101,
        10,
        1,
        19,
        0
      ],
      [
        902,
        932,
        20103,
        30,
        1,
        19,
        0
      ],
      [
        932,
        947,
        10201,
        15,
        -1,
        -1,
        0
      ],
      [
        947,
        980,
        500106,
        33,
        -1,
        -1,
        0
      ],
      [
        980,
        990,
        181401,
        10,
        12,
        19,
        0
      ],
      [
        990,
        1020,
        140103,
        30,
        5,
        19,
        0
      ],
      [
        1020,
        1080,
        140101,
        60,
        5,
        19,
        0
      ],
      [
        1080,
        1084,
        181201,
        4,
        12,
        19,
        0
      ],
      [
        1084,
        1129,
        120101,
        45,
        3,
        53,
        0
      ],
      [
        1129,
        1134,
        181201,
        5,
        12,
        19,
        0
      ],
      [
        1134,
        1164,
        20201,
        30,
        1,
        52,
        0
      ],
      [
        1134,
        1164,
        20201,
        30,
        1,
        53,
        0
      ],
      [
        1164,
        1179,
        110101,
        15,
        1,
        52,
        0
      ],
      [
        1164,
        1179,
        110101,
        15,
        1,
        53,
        0
      ],
      [
        1179,
        1209,
        20203,
        30,
        1,
        19,
        0
      ],
      [
        1209,
        1269,
        20103,
        60,
        1,
        52,
        0
      ],
      [
        1209,
        1269,
        20103,
        60,
        1,
        53,
        0
      ],
      [
        1269,
        1380,
        120303,
        111,
        1,
        52,
        0
      ],
      [
        1269,
        1380,
        120303,
        111,
        1,
        53,
        0
      ],
      [
        1380,
        1440,
        10102,
        60,
        -1,
        -1,
        0
      ],
      [
        0,
        240,
        10101,
        240,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20211211212405,
    WECANTRIL: 7,
    WEGENHTH: 4,
    WEHBP: 1,
    WEPAINMD: 2,
    WEREST: 2,
    WETYPICAL: 2,
    TUDIARYDAY_x: 7,
    TRHOLIDAY_x: 0,
    TEAGE: 68,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 41,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: -1,
    TRDPFTPT_x: -1,
    TRERNWA_x: -1,
    TRERNHLY: -1,
    TRTALONE: 546,
    TRTFAMILY: 261,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 3,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        300,
        10101,
        60,
        -1,
        -1,
        0
      ],
      [
        300,
        330,
        10201,
        30,
        -1,
        -1,
        0
      ],
      [
        330,
        335,
        20201,
        5,
        1,
        19,
        0
      ],
      [
        335,
        345,
        110101,
        10,
        1,
        19,
        0
      ],
      [
        345,
        360,
        20101,
        15,
        1,
        19,
        0
      ],
      [
        360,
        660,
        50101,
        300,
        1,
        19,
        0
      ],
      [
        660,
        665,
        180782,
        5,
        14,
        19,
        0
      ],
      [
        665,
        675,
        70103,
        10,
        4,
        19,
        0
      ],
      [
        675,
        705,
        110101,
        30,
        4,
        19,
        0
      ],
      [
        705,
        710,
        181101,
        5,
        14,
        19,
        0
      ],
      [
        710,
        960,
        50101,
        250,
        1,
        19,
        0
      ],
      [
        960,
        1020,
        120312,
        60,
        1,
        19,
        0
      ],
      [
        1020,
        1140,
        50101,
        120,
        1,
        19,
        0
      ],
      [
        1140,
        1260,
        120303,
        120,
        1,
        19,
        0
      ],
      [
        1260,
        1275,
        10201,
        15,
        -1,
        -1,
        0
      ],
      [
        1275,
        1395,
        120312,
        120,
        1,
        19,
        0
      ],
      [
        1395,
        1680,
        10101,
        285,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20211210210628,
    WECANTRIL: 9,
    WEGENHTH: 2,
    WEHBP: 1,
    WEPAINMD: 1,
    WEREST: 2,
    WETYPICAL: 2,
    TUDIARYDAY_x: 3,
    TRHOLIDAY_x: 0,
    TEAGE: 54,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 43,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 25,
    TRDPFTPT_x: 1,
    TRERNWA_x: 211538,
    TRERNHLY: -1,
    TRTALONE: 380,
    TRTFAMILY: 0,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 3,
    TESCHENR: -1,
    happy_group: 3
  },
  {
    activity: [
      [
        240,
        480,
        10101,
        240,
        -1,
        -1,
        0
      ],
      [
        480,
        500,
        20201,
        20,
        1,
        22,
        0
      ],
      [
        500,
        600,
        20101,
        100,
        1,
        20,
        0
      ],
      [
        600,
        615,
        180701,
        15,
        12,
        18,
        0
      ],
      [
        615,
        705,
        70101,
        90,
        6,
        18,
        0
      ],
      [
        705,
        720,
        180701,
        15,
        12,
        18,
        0
      ],
      [
        720,
        750,
        20902,
        30,
        1,
        20,
        0
      ],
      [
        750,
        780,
        110101,
        30,
        1,
        20,
        0
      ],
      [
        780,
        900,
        120303,
        120,
        1,
        20,
        0
      ],
      [
        900,
        1080,
        20101,
        180,
        1,
        20,
        0
      ],
      [
        1080,
        1110,
        20201,
        30,
        1,
        20,
        0
      ],
      [
        1110,
        1170,
        110101,
        60,
        1,
        20,
        0
      ],
      [
        1110,
        1170,
        110101,
        60,
        1,
        22,
        0
      ],
      [
        1110,
        1170,
        110101,
        60,
        1,
        22,
        0
      ],
      [
        1170,
        1350,
        120301,
        180,
        1,
        20,
        0
      ],
      [
        1350,
        1680,
        10101,
        330,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20210504211057,
    WECANTRIL: 8,
    WEGENHTH: 1,
    WEHBP: 1,
    WEPAINMD: 2,
    WEREST: 1,
    WETYPICAL: 2,
    TUDIARYDAY_x: 1,
    TRHOLIDAY_x: 0,
    TEAGE: 48,
    TESEX: 1,
    GEMETSTA: -1,
    PEEDUCA: 43,
    PEHSPNON: 2,
    PTDTRACE: 1,
    TRDTIND1: 36,
    TRDPFTPT_x: 1,
    TRERNWA_x: 96100,
    TRERNHLY: -1,
    TRTALONE: 120,
    TRTFAMILY: 750,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 1,
    TRSPPRES: 1,
    TESCHENR: 2,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        330,
        10101,
        90,
        -1,
        -1,
        0
      ],
      [
        330,
        350,
        10201,
        20,
        -1,
        -1,
        0
      ],
      [
        350,
        351,
        20681,
        1,
        1,
        18,
        0
      ],
      [
        351,
        400,
        120303,
        49,
        1,
        18,
        0
      ],
      [
        400,
        443,
        180501,
        43,
        15,
        18,
        0
      ],
      [
        443,
        900,
        50101,
        457,
        2,
        61,
        0
      ],
      [
        900,
        915,
        110101,
        15,
        2,
        18,
        0
      ],
      [
        915,
        960,
        50101,
        45,
        2,
        61,
        0
      ],
      [
        960,
        1010,
        180501,
        50,
        15,
        18,
        0
      ],
      [
        1010,
        1140,
        120303,
        130,
        1,
        18,
        0
      ],
      [
        1140,
        1170,
        20201,
        30,
        1,
        18,
        0
      ],
      [
        1170,
        1180,
        110101,
        10,
        1,
        22,
        0
      ],
      [
        1170,
        1180,
        110101,
        10,
        1,
        22,
        0
      ],
      [
        1180,
        1230,
        120101,
        50,
        1,
        22,
        0
      ],
      [
        1180,
        1230,
        120101,
        50,
        1,
        22,
        0
      ],
      [
        1230,
        1290,
        20203,
        60,
        1,
        22,
        0
      ],
      [
        1230,
        1290,
        20203,
        60,
        1,
        22,
        0
      ],
      [
        1290,
        1295,
        120301,
        5,
        1,
        22,
        0
      ],
      [
        1290,
        1295,
        120301,
        5,
        1,
        22,
        0
      ],
      [
        1295,
        1320,
        20101,
        25,
        1,
        18,
        0
      ],
      [
        1320,
        1325,
        10201,
        5,
        -1,
        -1,
        0
      ],
      [
        1325,
        1680,
        10101,
        355,
        -1,
        -1,
        0
      ]
    ],
    TUCASEID: 20211009210935,
    WECANTRIL: 8,
    WEGENHTH: 4,
    WEHBP: 2,
    WEPAINMD: 2,
    WEREST: 1,
    WETYPICAL: 2,
    TUDIARYDAY_x: 2,
    TRHOLIDAY_x: 0,
    TEAGE: 56,
    TESEX: 2,
    GEMETSTA: -1,
    PEEDUCA: 39,
    PEHSPNON: 2,
    PTDTRACE: 2,
    TRDTIND1: 42,
    TRDPFTPT_x: 1,
    TRERNWA_x: 23076,
    TRERNHLY: 1600,
    TRTALONE: 343,
    TRTFAMILY: 125,
    TRTFRIEND: 0,
    TRCHILDNUM_x: 0,
    TRSPPRES: 3,
    TESCHENR: -1,
    happy_group: 2
  },
  {
    activity: [
      [
        240,
        360,
        10101,
        120,
        -1,
        -1,
        0
      ],
      [
        360,
        380,
        20201,
        20,
        1,
        19,
        0
      ],
      [
        380,
        390,
        110101,
        10,
        1,
        19,
        0
      ],
      [
        390,
        440,
        120303,
        50,
        1,
        19,
        0
      ],
      [
        440,
        460,
        10201,
        20,
        -1,
        -1,
        0
      ],
      [
        460,
        730,
        20901,
        270,
        1,
        19,
        0
      ],
      [
        730,
        735,
        20801,
        5,
        1,
        19,
        0
      ],
      [
        735,
        740,
        20201,
        5,
        1,
        19,
        0
      ],
      [
        740,
        755,
        110101,
        15,
        1,
        19,
        0
      ],
      [
        755,
        780,
        120303,
        25,
        1,
        19,
        0
      ],
      [
        780,
        820,
        130128,
        40,
        1,
        19,
        0
      ],
      [
        820,
        855,
        130104,
        35,
        1,
        19,
        0
      ],
      [
        855,
        870,
        500101,
        15,
        1,
        19,
        0
      ],
      [
        870,
        1020,
        20801,
        150,
        1,
        19,
        0
      ],
      [
        1020,
        1140,
        120303,
        120,
        1,
        19,
        0
      ],
      [
        1140,
        1160,
        20201,
        20,
        1,
        19,
        0
      ],
      [
        1160,
        1190,
        110101,
        30,
        1,
        19,
        0
      ],
      [
        1190,
        1200,
        120303,
        10,
        1,
        19,
        0
      ],
      [
        1200,
        1220,
        130131,
        20,
        1,
        19,
        0
      ],
      [
        1220,
        1250,
        20903,
        30,
        1,
        19,
        0
      ],
      [
        1250,
        1260,
        10201,
        10,
        -1,
        -1,
  },