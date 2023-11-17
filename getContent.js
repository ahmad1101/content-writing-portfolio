// getContent.js

const githubUsername = 'ahmad1101';
const repoName = 'content-writing-portfolio';

exports.handler = async function (event, context) {
    try {
        const response = await fetch(`https://raw.githubusercontent.com/${githubUsername}/${repoName}/main/content-files/${event.queryStringParameters.file}
`);
        const content = await response.text();

        return {
            statusCode: 200,
            body: content,
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Internal Server Error' }),
        };
    }
};

