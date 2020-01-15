# backend_interview


Some of the advantages of using Node.js for writing server side code are:

- JavaScript on the server: use the same programming language and paradigm for both client and server. This minimizes context switching and makes it easy to share code between the client and the server.
- Single-threaded: removes the complexity involved in handling multiple threads.
- Asynchronous: can take full advantage of the processor it’s running on. This matters because the node process will be running on a single CPU.
- npm repository: access the largest ecosystem of useful libraries (most of them free to use) in the form of npm modules.

Some of the disadvantages of using Node.js for writing server-side code are:

- JavaScript on the server: we lose the ability to use the right tool (language) for the job.
- single-threaded: can’t take advantage of servers with multiple cores/processors.
- asynchronous: it is harder to learn for developers that have only worked with languages that default to synchronous operations that block the execution thread.
- npm repository: too many packages that do the same thing makes it harder to choose one and, in some cases, may introduce vulnerabilities into our code.