import fs from "node:fs";
import path from "node:path";

const inputPath = path.resolve("../../README.md");
const outputPath = path.resolve("content/docs/index.mdx");

const frontmatter = `---
title: Home
description: Homepage of ZeroCN
---

`;

if (!fs.existsSync(inputPath)) {
  throw new Error("README.md not found");
}

// Ensure content directory exists
fs.mkdirSync(path.dirname(outputPath), { recursive: true });

const readmeContent = fs.readFileSync(inputPath, "utf8");

// Write MDX with frontmatter
fs.writeFileSync(outputPath, frontmatter + readmeContent, "utf8");

console.log("README.md copied to content/index.mdx with frontmatter");
