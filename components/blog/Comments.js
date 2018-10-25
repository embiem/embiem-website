import "gitalk/dist/gitalk.css";
import Gitalk from "gitalk";

class Comments extends React.Component {
  componentDidMount() {
    const gitalk = new Gitalk({
      clientID: "1fafea611298dbdc18d4",
      clientSecret: "7ef6030b23501853c8dc643bd3ada3bec6d86bdc",
      repo: "embiem-website-comments",
      owner: "embiem",
      admin: [
        "embiem"
      ],
      id: location.pathname, // Ensure uniqueness and length less than 50
      distractionFreeMode: false // Facebook-like distraction free mode
    });

    gitalk.render("gitalk-container");
  }

  render() {
    return <div id="gitalk-container" />;
  }
}

export default Comments;
