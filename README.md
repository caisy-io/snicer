# snicer

## snicer makes screenshots nicer

### In detail

We try to define a desired aspect ration (support only landscape for now) and then give the screenshot a nice padding, borderradius and very important a gradient background. 
Padding and radius should be a percentage so they scale with smaller or bigger images and outcome looks always the same.
For very small images we use a spcial focus mode.
Further we want to provide positioning of the image in: center, top left, top right, bottom left, bottom right
Maybe we add a slider to adjust some offset on x an y of the image so you focus better on a boint by cutting 


### Frameworks

React for the apps state, because I know react best and I am fast with it. 
NextJS because i am familar with the tooling and config. 
html-to-image for the core functionality
dropzone to updload images
downloadjs to download images
styled-components for styling 
plopjs for component generation because it makes me fast