import { forwardRef, useId } from 'react';
import config from '~/config.json';
import { classes } from '~/utils/style';
import styles from './monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id.replaceAll(':', '')}-monogram-clip`;

  return (
    <svg
      aria-hidden
      className={classes(styles.monogram, className)}
      width="48"
      height="29"
      viewBox="0 0 48 29"
      ref={ref}
      {...props}
    >
      <defs>
        <clipPath id={clipId}>
          <text
            transform="translate(24 14.5) scale(1.28) translate(-24 -14.5)"
            x="24"
            y="14.5"
            dominantBaseline="central"
            textAnchor="middle"
            fontFamily="Gotham, system-ui, sans-serif"
            fontWeight="700"
            fontSize="32"
          >
            {config.initials ?? 'S'}
          </text>
        </clipPath>
      </defs>
      <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
      {highlight && (
        <g clipPath={`url(#${clipId})`}>
          <rect className={styles.highlight} width="100%" height="100%" />
        </g>
      )}
    </svg>
  );
});
