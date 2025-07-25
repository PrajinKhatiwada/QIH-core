// Handles Quantum State Vector math (θ, φ, interference)
export class QSV {
  constructor(amplitude, theta, phi = 0) {
    this.amplitude = amplitude;
    this.theta = theta;
    this.phi = phi;
  }

  collapseProbability() {
    return Math.cos(this.theta / 2) ** 2;
  }

  complexValue() {
    const real = this.amplitude * Math.cos(this.phi);
    const imag = this.amplitude * Math.sin(this.phi);
    return { real, imag };
  }
}

export function interferencePattern(qsv1, qsv2) {
  const val1 = qsv1.complexValue();
  const val2 = qsv2.complexValue();

  const real = val1.real + val2.real;
  const imag = val1.imag + val2.imag;

  const magnitude = Math.sqrt(real ** 2 + imag ** 2);
  return magnitude ** 2;
}