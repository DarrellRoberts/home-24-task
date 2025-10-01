## Notes

1. First I wanted to get the app running and I ran into some issues regarding the proxy-server on the package.json on the client. The issue was that an empty value was being passed to the allowedHosts on the config of the Webpack Dev Server, meaning the react-scripts couldn't start.
   I tried multiple solutions such downgrading the react version, but found the only quick solution that worked for me was removing the proxy server line from the package.json and changing the fetch url to localhost:3001.
   Meanwhile I added CORs to the server directory to allow my client's requests, and once I ran both my server and client, the client app ran and could fetch the data

2. Once running the app I had a brief look at the app as well as the code, and formed a todo list.

3. For my first task, I wanted to restructure the client to make it easier to navigate with appropriate directories. I kept the code as it is and refactor the components so that it fitted within its corresponding directory. When I had finished this, I would check to make sure the app on local host looked the same as before I did the restructure. Satisfied I then moved onto changing the code.

4. I wanted to use React hooks so I first implemented useState and useEffect to create graphQL POST request.
