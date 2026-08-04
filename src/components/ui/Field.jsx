import cn from '@/lib/cn'

/**
 * A labelled form control.
 *
 * `as` swaps the element — 'input', 'textarea' or 'select' — because the label,
 * the required marker and the focus ring are identical across all three, and
 * only the height and padding differ. A textarea takes both columns of a
 * two-column grid, which is the only layout either form uses it in.
 */
export default function Field({
  label,
  id,
  as = 'input',
  required,
  className,
  children,
  ...rest
}) {
  const Cmp = as

  return (
    <div className={cn(as === 'textarea' && 'sm:col-span-2', className)}>
      <label htmlFor={id} className="block text-sm font-medium text-neutral-700">
        {label}
        {required && <span className="ml-0.5 text-brand-700">*</span>}
      </label>
      <Cmp
        id={id}
        name={id}
        required={required}
        className={cn(
          'mt-2 w-full rounded-2xl border border-neutral-200 bg-white px-4 text-[15px] transition-colors',
          'placeholder:text-neutral-500 focus:border-brand-400 focus:outline-none focus:ring-4 focus:ring-brand-500/10',
          as === 'textarea' ? 'min-h-[8rem] resize-y py-3.5' : 'h-12',
        )}
        {...rest}
      >
        {children}
      </Cmp>
    </div>
  )
}
