import { useState, useEffect } from 'react';

export default function Typewriter({
  words,
  textClass = '',
  cursorClass = '',
  typingSpeed = 150,
  deletingSpeed = 75,
  pauseBetween = 2000
}) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    const handleType = () => {
      const currentWord = words[wordIndex % words.length];
      const updated = isDeleting
        ? currentWord.substring(0, text.length - 1)
        : currentWord.substring(0, text.length + 1);

      setText(updated);

      let nextSpeed = isDeleting ? deletingSpeed : typingSpeed;

      if (!isDeleting && updated === currentWord) {
        nextSpeed = pauseBetween;
        timeout = setTimeout(() => setIsDeleting(true), pauseBetween);
      } else if (isDeleting && updated === '') {
        setIsDeleting(false);
        setWordIndex((i) => i + 1);
        nextSpeed = typingSpeed;
      }

      timeout = setTimeout(handleType, nextSpeed);
    };

    timeout = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseBetween]);

  return (
    <p className={textClass} role="status" aria-live="polite">
      {text}
      <span className={`inline-block w-1 h-6 ${cursorClass} ml-1`} aria-hidden="true" />
    </p>
  );
}
