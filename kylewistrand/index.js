// Website HTML
const website = `
<!doctypehtml><html lang=en><meta charset=UTF-8><meta content="width=device-width,initial-scale=1"name=viewport><meta content="ie=edge"http-equiv=X-UA-Compatible><title>Kyle Wistrand</title><style>body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif}h1{width:100%;display:flex;justify-content:center;font-weight:lighter;font-size:4em}main{width:calc(100% - 4em);display:flex;justify-content:center;flex-wrap:wrap;padding:2em}main a{margin:1em}a{text-decoration:none;font-size:1.5em;font-weight:bolder;color:#4b2e83}a:hover{text-decoration:underline}footer{width:100%;position:fixed;left:0;bottom:0;opacity:.5;display:flex;justify-content:center;font-size:.6em;font-style:italic}@media (max-width:400px){h1{font-size:12vw}}</style><header><h1>Kyle Wistand</h1></header><main><a href=https://www.linkedin.com/in/kyle-wistrand>LinkedIn</a> <a href=https://github.com/kylewistrand>GitHub</a> <a href=https://kylewistrand.s3-us-west-1.amazonaws.com/Kyle+Wistrand+Resume.pdf>Resume (PDF)</a></main><footer><p>Hosted using Cloudflare Workers for minimum latency.</footer>
`

/**
 * rawHtmlResponse delievers a response with HTML inputted directly
 * into the worker script
 * @param {string} html
 */
async function rawHtmlResponse(html) {
  const init = {
    headers: {
      'content-type': 'text/html;charset=UTF-8',
    },
  }

  return new Response(html, init)
}

addEventListener('fetch', event => {
  event.respondWith(rawHtmlResponse(website))
})