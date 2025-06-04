'use client';
import { motion } from 'framer-motion';

const metrics = [
  { label: 'Years Experience', value: '5+' },
  { label: 'Medical Device Projects', value: '3' },
  { label: 'ISO Certifications', value: '2' },
];

export default function TechnicalMetrics() {
  return (
    <div className="flex justify-center gap-6 mt-6">
      {metrics.map((m, i) => (
        <motion.div
          key={m.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 * i }}
          className="text-center"
        >
          <div className="text-3xl font-bold text-primary">{m.value}</div>
          <div className="text-sm text-muted-foreground">{m.label}</div>
        </motion.div>
      ))}
    </div>
  );
}
