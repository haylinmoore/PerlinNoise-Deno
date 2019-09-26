import {
    PerlinNoise
} from "./mod.ts";
import {
    runTests,
    test
} from "https://deno.land/std/testing/mod.ts";
import {
    assertEquals
} from "https://deno.land/std/testing/asserts.ts";

let perlin = new PerlinNoise()

// The goal of this test is to prevent the values generated from changing between updates
test({
    name: "Consistant Returns",
    fn(): void {
        let perlin = new PerlinNoise()
        assertEquals(perlin.noise(0.1, 0.1, 0.1), 0.5930803571772416);
        assertEquals(perlin.noise(0.23423, 0.14234, 0.9823), 0.3601689906984922);
        assertEquals(perlin.noise(0, 0, 0), 0.5);
        assertEquals(perlin.noise(Math.PI, Math.PI, Math.PI), 0.35982012327229496);
    }
});

// The goal of this test is to prevent the values generated from changing between updates
test({
    name: "Consistant Returns Between Range",
    fn(): void {
        let perlin = new PerlinNoise()
        assertEquals(perlin.noise(0.1, 0.1, 0.1, 1, 100), 59.71495536054692);
        assertEquals(perlin.noise(0.23423, 0.14234, 0.9823, -10, 100), 29.61858897683414);
        assertEquals(perlin.noise(0, 0, 0, 0, 100), 50);
        assertEquals(perlin.noise(Math.PI, Math.PI, Math.PI, -Math.E, Math.E), -0.7620968232490992);
    }
});

// The goal of this test is to prevent the values generated from changing between updates
test({
    name: "Custom Permutation",
    fn(): void {
        let perlin = new PerlinNoise([2, 75, 90, 70, 78, 152, 174, 163, 10, 108, 157, 15, 174, 148, 85, 208, 88, 153, 220, 70, 195, 235, 12, 48, 251, 194, 90, 113, 96, 227, 192, 38, 75, 233, 35, 197, 128, 23, 216, 31, 241, 163, 167, 192, 76, 154, 122, 184, 60, 85, 73, 127, 140, 49, 165, 173, 230, 123, 131, 151, 12, 138, 201, 92, 191, 186, 197, 70, 223, 69, 165, 38, 100, 206, 113, 215, 169, 63, 49, 20, 39, 108, 136, 82, 14, 74, 175, 105, 240, 249, 69, 185, 65, 149, 230, 222, 35, 39, 3, 199, 64, 65, 109, 194, 133, 161, 125, 94, 96, 109, 17, 108, 214, 223, 151, 8, 186, 98, 145, 142, 193, 69, 31, 103, 248, 246, 136, 185, 186, 155, 44, 48, 176, 229, 11, 123, 139, 5, 84, 141, 126, 10, 0, 174, 59, 241, 102, 3, 204, 255, 50, 10, 69, 251, 69, 142, 17, 247, 43, 3, 2, 219, 97, 224, 3, 74, 83, 2, 75, 165, 126, 231, 145, 20, 17, 54, 128, 160, 142, 202, 219, 243, 132, 238, 108, 58, 98, 137, 166, 9, 70, 65, 70, 64, 178, 196, 237, 99, 24, 73])
        assertEquals(perlin.noise(0.1, 0.1, 0.1), 0.492470915806976);
        assertEquals(perlin.noise(0.23423, 0.14234, 0.9823), 0.40457363783839756);
        assertEquals(perlin.noise(0, 0, 0), 0.5);
        assertEquals(perlin.noise(Math.PI, Math.PI, Math.PI), 0.6171301551144596);
    }
});

runTests();