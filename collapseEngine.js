// Simulate quantum collapse and interference logic
import { QSV, interferencePattern } from './qsvMath.js';

export function collapseProjection(qsvs) {
  return qsvs.map((qsv, i) => {
    const reflected = new QSV(qsv.amplitude, Math.PI - qsv.theta, qsv.phi + Math.PI);
    const intensity = interferencePattern(qsv, reflected);
    return {
      index: i,
      probability: qsv.collapseProbability(),
      interference: intensity.toFixed(4),
    };
  });
}
