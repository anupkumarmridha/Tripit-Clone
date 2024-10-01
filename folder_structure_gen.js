const fs = require("fs");
const path = require("path");

const outputFileName = "README.md";
const gitIgnorePath = path.join(process.cwd(), ".gitignore");
let gitIgnoreContent;
try {
    gitIgnoreContent = fs.readFileSync(gitIgnorePath, "utf-8");
} catch (err) {
    console.error(`Error reading .gitignore file: ${err.message}`);
    gitIgnoreContent = "";
}

const gitIgnoreItems = gitIgnoreContent
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("#"));

const excludedItems = [
    ".DS_Store",
    ".git",
    "node_modules",
    ".vscode",
    "__pycache__",
    ".gitignore",
    ".npmignore",
    ".eslintignore",
    "obj",
    "bin",
    "packages.config",
    "yarn.lock",
    ".vs",
    ".csproj",
    "directory_structure.md",
    "package-lock.json",
    ".github",
];

excludedItems.push(...gitIgnoreItems);

function getDirectoryStructure(dir, level = 0, parentIsLast = []) {
    let structure = "";

    const files = fs
        .readdirSync(dir)
        .filter((file) => !excludedItems.includes(file));
    files.forEach((file, index) => {
        const fullPath = path.join(dir, file);
        const stats = fs.statSync(fullPath);
        const isLastItem = index === files.length - 1;

        const prefix = parentIsLast
            .map((isLast) => (isLast ? "    " : "│   "))
            .join("");
        const line = isLastItem ? "└── " : "├── ";

        if (stats.isDirectory()) {
            structure += `${prefix}${line}${file}\n`;
            structure += getDirectoryStructure(fullPath, level + 1, [
                ...parentIsLast,
                isLastItem,
            ]);
        } else {
            structure += `${prefix}${line}${file}\n`;
        }
    });

    return structure;
}

function writeDirectoryStructureToFile() {
    const currentDir = process.cwd();
    let structure = `└── Tripit-clone\n`;
    structure += getDirectoryStructure(currentDir, 1, [true]);
    const deployedUrl = "https://anupkumarmridha.github.io/Tripit-Clone/tripit-clone/dist/";
    const content = `# Project Directory Structure\n\nDeployed URL: [${deployedUrl}](${deployedUrl})\n\n\`\`\`\n${structure}\`\`\`\n`;
    fs.writeFileSync(outputFileName, content);
    console.log(`Directory structure written to ${outputFileName}`);
}

writeDirectoryStructureToFile();