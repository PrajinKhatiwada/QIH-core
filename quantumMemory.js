// Recursive quantum buffer for prediction + compression
export class TimeCrystalMemory {
  constructor() {
    this.states = [];
  }

  update(state) {
    this.states.push(state);
    if (this.states.length > 20) this.states.shift();
  }

  projectFuture() {
    return this.states.reduce((acc, curr, i) => {
      return {
        real: acc.real + curr.real * Math.cos(i),
        imag: acc.imag + curr.imag * Math.sin(i),
      };
    }, { real: 0, imag: 0 });
  }
}