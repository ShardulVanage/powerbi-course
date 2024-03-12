import clsx from 'clsx'

export function SectionHeading({  children, className, ...props }) {
  return (
    <h2
      className={clsx(
        className,
        'inline-flex items-center rounded-full px-4 py-1  ring-1  '
      )}
      {...props}
    >
      <span className="font-mono text-sm" aria-hidden="true">
        
      </span>
      
      <span className="ml-1 text-base font-medium tracking-tight">
        {children}
      </span>
    </h2>
  )
}