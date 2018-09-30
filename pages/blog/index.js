import Blog from "../blog";
import { meta as metaTestTwo } from "./test-two.mdx";
import { meta as metaTest } from "./test.mdx";

export const posts = [metaTestTwo, metaTest];

export default () => <Blog />;
