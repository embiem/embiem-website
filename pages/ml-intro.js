import Link from "next/link";
import { Trail } from "react-spring";
import Layout from "../components/Layout";
import PaperPage from "../components/blog/PaperPage";
import { MediaQueryConsumer } from "../utils/withMediaQuery";

import { meta as metaAutoGenerateSitemapInNextJs } from "./blog/auto-generate-sitemap-in-next-js.mdx";
import { meta as metaWebsiteAndBlogWithNextJs } from "./blog/website-and-blog-with-next-js.mdx";

const posts = [metaAutoGenerateSitemapInNextJs, metaWebsiteAndBlogWithNextJs];

posts.sort(function(a, b) {
  // Turn your strings into dates, and then subtract them
  // to get a value that is either negative, positive, or zero.
  return new Date(b.date) - new Date(a.date);
});

export default class extends React.Component {
  render() {
    return (
      <Layout>
        <MediaQueryConsumer>
          {({ isMobile, isTablet }) =>
            isMobile || isTablet ? null : <div className="spacer" />
          }
        </MediaQueryConsumer>

        <div className="blog-posts">
          <h1>ML-Intro Workshop</h1>
          <h2>Workshop's Code Repos:</h2>
          <ul>
            <li>
              <a href="https://github.com/embiem/ml-pong">ML-Pong</a>
            </li>
            <li>
              <a href="https://github.com/embiem/ml-pong-tf">
                ML-Pong Tensorflow NN-Train App
              </a>
            </li>
          </ul>
          <h2>Links:</h2>
          <ul>
            <li>
              <a href="https://colab.research.google.com/github/jakevdp/PythonDataScienceHandbook/blob/master/notebooks/05.02-Introducing-Scikit-Learn.ipynb">
                Intro notebook to Sci-Kit Learn
              </a>
            </li>
            <li>
              <a href="https://gym.openai.com/">OpenAI’s Gym</a> &{" "}
              <a href="https://gym.openai.com/envs/Pong-ram-v0/">
                Pong-ram environment
              </a>
            </li>
            <li>
              <a href="https://www.tensorflow.org/js/models/">
                TensorFlow.js pre-trained models
              </a>
            </li>
            <li>
              <a href="https://ml5js.org/">Ml5.js</a>
            </li>
            <li>
              <a href="https://www.tensorflow.org/guide/keras/overview">
                Keras in TF Overview
              </a>{" "}
              (<a href="https://keras.io/">Keras API Spec</a>)
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UC0rqucBdTuFTjJiefW5t-IQ">
                Tensorflow YouTube
              </a>
            </li>
            <li>
              <a href="https://github.com/Unity-Technologies/ml-agents">
                Unity's ML-Agents
              </a>
            </li>
            <li>
              <a href="https://blogs.unity3d.com/2018/06/20/announcing-kinematica-animation-meets-machine-learning/">
                Unity’s Kinematica: Animation meets ML
              </a>
            </li>
            <li>
              <a href="https://heartbeat.fritz.ai/learning-machine-learning-2e3a3fd77655">
                Article collection about ML
              </a>
            </li>
            <li>
              <a href="https://www.kaggle.com/">
                Kaggle for datasets & ML competitions
              </a>
            </li>
          </ul>
        </div>
        <style jsx>{`
          .spacer {
            height: 55px;
          }
          .blog-posts {
            display: flex;
            flex-direction: column;
            max-width: 600px;
          }

          a {
            color: inherit;
            text-decoration: none;
          }

          content {
            padding: 1em;
            display: flex;
          }
        `}</style>
      </Layout>
    );
  }
}
