// Iterative fractal algorithm (like Mandelbrot set)
export function fractalFeedback(seed, c, iterations = 10) {
  let z = seed;
  for (let i = 0; i < iterations; i++) {
    z = {
      real: z.real ** 2 - z.imag ** 2 + c.real,
      imag: 2 * z.real * z.imag + c.imag,
    };
  }
  return z;
}