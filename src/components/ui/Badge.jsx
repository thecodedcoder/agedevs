'use client'

const colorMap = {
  btc: 'bg-btc/10 text-btc border-btc/20 dark:bg-btc/15 dark:text-btc-light',
  stacks: 'bg-stacks/10 text-stacks border-stacks/20 dark:bg-stacks/15 dark:text-stacks-light',
  accent: 'bg-accent/10 text-accent-dark border-accent/20 dark:bg-accent/15 dark:text-accent',
  ethereum: 'bg-blue-500/10 text-blue-600 border-blue-500/20 dark:bg-blue-500/15 dark:text-blue-400',
  default: 'bg-light-300 text-dark-700 border-light-400 dark:bg-dark-600 dark:text-light-400 dark:border-dark-400',
  success: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20 dark:bg-emerald-500/15 dark:text-emerald-400',
  warning: 'bg-amber-500/10 text-amber-600 border-amber-500/20 dark:bg-amber-500/15 dark:text-amber-400',
}

const Badge = ({ label, icon: Icon, color = 'default', size = 'sm' }) => {
  const sizeClasses = size === 'sm'
    ? 'text-xs px-2.5 py-1'
    : 'text-sm px-3 py-1.5'

  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border font-medium ${colorMap[color] || colorMap.default} ${sizeClasses}`}>
      {Icon && <Icon size={size === 'sm' ? 12 : 14} />}
      {label}
    </span>
  )
}

export default Badge
