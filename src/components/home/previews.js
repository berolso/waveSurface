import request from "../../media/request.png";
import sections from "../../media/sections.png";
import slack from "../../media/slack.png";
import instructionals from "../../media/instructionals.png";

export const previewMain = {
  title: "Sheet wave resources",
  description:
    "I want to share my knowlege and contribute to the industry I know some things about. The goal is a free resource to share instructionals, drawings, materials, and anything of value",
  image: instructionals,
  imgText: "image text",
  linkText: "Browse Instructionals…",
  link: '/instructionals'
};

export const previews = [
  {
    title: "Request Instructional",
    description:
      "Is there anything you'd like to know about sheet wave specifics? we might have the answer. Just ask",
    image: request,
    imageText: "Image Text",
    linkText: 'Request Instructional',
    link: '/instructionals/request'
  },
  {
    title: "Intuitive Search",
    description:
      "focus your search and find exactly what you need with our clickable map. if it's not there I'll do my best to add it",
    image: sections,
    imageText: "Image Text",
    linkText: 'Map',
    link: '/instructionals'
  },
  {
    title: "Slack Integration",
    description:
      "I've built this feature to integrate directly to our slack channel. This allows a team of contributers to start working on requests collectively the second they are made and your contact info is available to respond via text. No more inquiry emails sent to the info@ ether.",
    image: slack,
  },
];
