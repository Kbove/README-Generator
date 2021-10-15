const readMe = (data) => {
    console.log(data)
    return `# ${data.Title}
    https://github.com/${data.userName}/${data.Title}
    \r\n## Description
    ${data.Description}
    \r\n## Table of Contents
    \r\n* [Installation](#Installation)
    \r\n* [User Story](#Usage)
    \r\n* [License](#License)
    \r\n* [Badges](#Badges)
    \r\n* [Contributors](#Contributors)
    \r\n* [Tests](#Tests)
    \r\n* [Questions](#Question)
    \r\n## Installation <a id="Installation"></a>
    The following necessary dependencies must be installed to run the application: ${data.Installation}
    \r\n## User Story <a id="Usage"></a>
    ${data.Usage}
    \r\n## Licenses <a id="License"></a>
    ${data.License}
    \r\n## Badges <a id="Question"></a>
    \r\n![License](https://img.shields.io/static/v1?label=license&message=${data.License}&color=${data.Color})
    \r\n## Contributors <a id="Contributors"></a>
    Contributors: ${data.Contributors}
    \r\n## Tests <a id="Tests"></a>
    Tests: ${data.Tests}
    \r\n## Questions <a id="Question"></a>
    Frequently Asked Questions: ${data.Questions}
    `
}

module.exports = readMe
