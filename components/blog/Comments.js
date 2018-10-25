import getConfig from "next/config";
import "gitalk/dist/gitalk.css";
import Gitalk from "gitalk";

class Comments extends React.Component {
  componentDidMount() {
    const {
      publicRuntimeConfig: { githubClientId, githubClientSecret }
    } = getConfig();
    console.log(getConfig());

    const gitalk = new Gitalk({
      clientID: githubClientId,
      clientSecret: githubClientSecret,
      repo: "embiem-website-comments",
      owner: "embiem",
      admin: ["embiem"],
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
