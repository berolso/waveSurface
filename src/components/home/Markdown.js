import { useState, useEffect } from "react";
import ReactMarkdown from "markdown-to-jsx";
import myStory from "../../media/my-story.md";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const styles = (theme) => ({
  listItem: {
    marginTop: theme.spacing(1),
  },
});

const options = {
  overrides: {
    h1: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: "h1",
      },
    },
    h2: { component: Typography, props: { gutterBottom: true, variant: "h6" } },
    h3: {
      component: Typography,
      props: { gutterBottom: true, variant: "subtitle1" },
    },
    h4: {
      component: Typography,
      props: { gutterBottom: true, variant: "caption", paragraph: true },
    },
    p: { component: Typography, props: { paragraph: true } },
    a: { component: Link },
    li: {
      component: withStyles(styles)(({ classes, ...props }) => (
        <li className={classes.listItem}>
          <Typography component="span" {...props} />
        </li>
      )),
    },
  },
};

const Markdown = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(myStory)
      .then((res) => res.text())
      .then((md) => {
        setContent(md);
      });
  });

  return (
    <div>
      <ReactMarkdown children={content} options={options}/>
    </div>
  );
};

export default Markdown;

// export default function Markdown(props) {
//   return <ReactMarkdown options={options} {...props} />;
// }
