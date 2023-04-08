import img1 from "../../assets/solution1.png";
import img2 from "../../assets/solution2.png";
import img3 from "../../assets/solution3.png";

import c1 from "../../assets/compare1.png";
import c2 from "../../assets/compare2.png";
import c3 from "../../assets/compare3.png";

let solutionData = [
  {
    img: img1,
    head: "Customer Relationship management",
    para: "A basic CRM page that allows you to add your customer portfolio as well as related data. Easily filter and search for information whenever needed",
  },
  {
    img: img2,
    head: "Task management and collaboration ",
    para: "Designed to support post-sales customer activities. Create and manage tasks and map directly to your selected customer in one place. Assign and receive assigned tasks within members of your immediate or project team. ",
  },
  {
    img: img3,
    head: "Document and information management",
    para: "Easily add and manage important customer documents such as customer plans, meeting notes, invoices etc. in one place. Retrieve and share at the touch of a button or a few buttons!",
  },
];

let compare = [
  {
    head: "Typical SaaS CRM",
    img: c1,
    content: [
      "Often sales focused ",
      "Can be complex",
      "Difficult to master",
      "Data overload ",
    ],
  },
  {
    head: "Traaak",
    img: c2,
    content: [
      "Simple and user friendly",
      "Task focused",
      "Easy to learn",
      "Basic yet practical",
    ],
  },
  {
    head: "Typical Task Application",
    img: c1,
    content: [
      "Generic in nature ",
      "Usually doesn’t allow for customer portfolio mapping",
      "Too simple or too complex",
    ],
  },
];

let UseData = [
  {
    head: "Small Business",
    points: [
      "Sole business to business owners",
      "Currently manages customer activities with spreadsheets and non-cloud applications",
    ],
  },
  {
    head: "Medium Scale Business",
    points: [
      "Customer service teams",
      "Relationship teams",
      "Existing CRM is not post-sale focused.",
      "Managing some customer or work-related tasks with spreadsheets",
      "Ability to integrate to integrate existing platforms.",
    ],
  },
  {
    head: "Small Startup",
    points: [
      "Customer success teams",
      "Relationship management teams",
      "Account management teams",
      "Existing CRM is not post-sale focused focused ",
      "Managing customer activity on multiple platforms",
      "Managing some customer or work-related tasks with spreadsheets",
      "Ability to integrate existing platforms.",
    ],
  },
  {
    head: "Medium Startup",
    points: [
      "Customer success teams",
      "Relationship management teams",
      "Account management teams",
      "Client service teams",
      "Existing CRM is not post-sale focused",
      "Managing few customers or work-related tasks using spreadsheets",
      "Able to integrate existing platforms.",
    ],
  },
];

export { solutionData, compare, UseData };
