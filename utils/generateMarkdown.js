// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => 
 `# ${data.projectName}
![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)
## Description
${data.description}
## Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
## Installation
To install necessary dependencies, run the following command:
\`\`\`
${data.install}
\`\`\`
## Usage
${data.usage}
## License
This project is licensed under the ${data.license} license.
## Contributing
${data.repo}
## Tests
To run tests, run the following command:
\`\`\`
${data.test}
\`\`\`
##Link To Walkthrough
\nhttps://drive.google.com/file/d/1ytskR1BFaYUG3pfgRyJykApXJVjLYPhI/view
## Questions
If you have any questions about the repo, open an issue or contact me directly at ${data.Emailaddress}. You can find more of my work at [${data.githubUsername}](https://github.com/${data.githubUsername}/).
`;

module.exports = generateMarkdown;
