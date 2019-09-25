# Perlin Noise Deno

A simple to use perlin noise module for typescript. 

### Usage

The library is really simple to use, just import it then create a new instance of the PerlineNoise class. You can optionally pass in the permutations used for generation as the first parameter as a array of number, but this is not suggested. Once you have a new instance of PerlinNoise, simply run instance.noise(x, y, z) with x, y and z all being numbers. The value returned will be between 0.0 and 1.0 without ever being either. 

```
import {PerlinNoise} from 'https://github.com/herohamp/PerlinNoise-Deno/mod.ts';

const perlin = new PerlinNoise();

console.log(perlin.noise(0.1, 0.1, 0.1));
```

### Credits
This is a port of Kas Thomas' javascript function which is a port of Ken Perlin's Java code. Kas Thomas' code can be found at https://asserttrue.blogspot.com/2011/12/perlin-noise-in-javascript_31.html
Ken Perlin's code can be found at http://cs.nyu.edu/%7Eperlin/noise/
So really most of the work was done by them, I simply ported Kas' version to typescript by adding a few types to the functions