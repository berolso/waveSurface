import request from "../../media/request.png";
import sections from "../../media/sections.png";
import slack from "../../media/slack.png";
import instructionals from "../../media/instructionals.png";

export const previewMain = {
  title: "Resources for All things sheet wave",
  description:
    "We want to share our knowlege and help benefit the industry we love. Free resource to share instructionals, drawings, materials, and anything we can to bring health to the industry",
  image: instructionals,
  imgText: "image text",
  linkText: "Continue reading…",
};

export const previews = [
  {
    title: "Request Instructional",
    description:
      "Is there anything you'd like to know about sheet wave specifics? we might have the answer. Just ask",
    image: request,
    imageText: "Image Text",
  },
  {
    title: "Intuitive Search",
    description:
      "focus your search and find exactly what you need with our clickable map. if it's not there we'll do our best to add it",
    image: sections,
    imageText: "Image Text",
  },
  {
    title: "Slack integration",
    description:
      "We've built this feature to integrate directly to our slack channel. This alows our team to start working on requests collectively the second they are made and your contact info is available to respond via text. No more inquiry emails sent to the @info ether.",
    image: slack,
    imageText: "Image Text",
  },
];
