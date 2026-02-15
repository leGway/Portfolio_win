import { motion } from 'framer-motion';

export default function ExpertiseCard({
  icon,
  title,
  tags,
  description,
  progress
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className="bg-white dark:bg-neutral-800/40 shadow-md rounded-lg p-6 flex flex-col"
    >
      <div className="flex items-center mb-4">
        <span className="text-2xl mr-2">{icon}</span>
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
          {title}
        </h3>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
        {description}
      </p>
      {tags && (
        <div className="mb-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-gray-200 dark:bg-neutral-700 px-2 py-1 rounded-full text-gray-700 dark:text-gray-200"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      {typeof progress === 'number' && (
        <div className="w-full h-2 bg-gray-200 dark:bg-neutral-700 rounded-full">
          <div
            className="h-full bg-cyan-600 dark:bg-cyan-500 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
    </motion.div>
  );
}
