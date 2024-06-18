import { readFileSync } from "fs";
import fs from "fs";
import path from "path";

//cwd: Current Worink Directory
const postDirectory = path.join(process.cwd(), "blogposts");

export function getSortedPostsData() {
  // get the file names under /post
  const filename = fs.readFileSync(postDirectory);
}
