import { FILTER_BUTTONS, type TODO_FILTERS } from '../consts'

interface Props {
  onFilterChange: (filter: typeof TODO_FILTERS[keyof typeof TODO_FILTERS]) => void
  filterSelected: typeof TODO_FILTERS[keyof typeof TODO_FILTERS]
}

export const Filters: React.FC<Props> = ({ onFilterChange, filterSelected }: Props) => {
  return (
    <ul className='filters'>
      {
        Object.entries(FILTER_BUTTONS).map(([key, { literal, href }]) => {
          return (
            <li
              key={key}
            >
              <a
                href={href}
                className={key === filterSelected ? 'selected' : ''}
                onClick={(e) => {
                  e.preventDefault()
                  onFilterChange(key as typeof TODO_FILTERS[keyof typeof TODO_FILTERS])
                }}
              >
                {literal}
              </a>
            </li>
          )
        })
      }
    </ul>
  )
}
