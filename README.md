Run `npm run dev`

Nodemon watches for file changes. Tsc compiles it and checks for type errors.
Parcel bundles the files together and handles the module loading and bundling issues for me.
Concurrently runs it in parallel. We use the <meta> tag to always refresh it since Parcel doesn't refresh.

Notes
src/ is for typescript. The entry point for parcel is actually `public/index.html`. So dist is where we serve it up.
It goes

src - (tsc) -> public -(parcel)-> dist
