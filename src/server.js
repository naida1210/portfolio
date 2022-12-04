// First install node-fetch:
// npm install node-fetch --save
const fetch = require('node-fetch');

const userAgent = request.headers['user-agent'];
const apiKey = 'pk_139f356777ac8dce8f4de4c25b4d1501';

fetch(`https://public.herotofu.com/v1/useragent?ua=${userAgent}&key=${apiKey}`)
  .then((response) => response.json())
  .then((result) => {
    if (result.error) {
      console.error(result.error);
    } else {
      /* Example response JSON:
{
  "browser": "Chrome",
  "os": "Mac OS",
  "botWarning": false
}
      */
      console.log(result);
    }
  })
  .catch((err) => {
    console.error(err);
  })