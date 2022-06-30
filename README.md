### 15 High-Converting Landing Pages guide

https://unbounce.com/landing-page-examples/high-converting-landing-pages/

### blueprint

https://amielfilarca.me/shopping-cart
https://github.com/amielfilarca/shopping-cart

### good landing page ex:

https://seb-graf.github.io/fashionify/

### image & specs

https://www.ibuypower.com/store/AMD-Ryzen-Streaming-PC-Daily-Deal


### Typescript workflow:

Create a file called index.ts and write some typescript in it. Then, in the cli, run 'tsc index.ts'. This compiles the typescript in index.ts into javascript in a new file called index.js in the same directory.

The command 'tsc index.ts' is short for 'tsc index.ts index.js', which compiles ts into a new js file of the same name. If you want the js output file name to be something other than 'index.js', you can specify it like this: 'tsc index.ts somefile.js'

The watch mode recompiles on every save: 'tsc index.ts -w'

### tsconfig workflow:

The previous workflow is fine if you have a simple html, css, and ts file structure, but if you have a more complex project that is organized into /src and a output file like /public (or /dist or whatever), it is essential to use a tsconfig.json file so you can run typescript compile commands (tsc ...)without specifying input/output filepaths each time.

Run 'tsc --init' to create tsconfig.json and in it, inside "compilerOptions", set "rootDir" to "./src" and "outDir" to "./public". And just outside of "compilerOptions", write "'include':["src"]" to only compile things from the src folder. Otherwise, any ts file anywhere will be compiled into /public.

Now running 'tsc' (or better yet, 'tsc -w' for watch mode) will compile the ts files in /src and output them into js file in /public.
