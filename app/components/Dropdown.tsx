import {
  Menu,
  MenuList,
  MenuButton,
  MenuItem,
  MenuItems,
  MenuPopover,
  MenuLink,
} from '@reach/menu-button'
import '@reach/menu-button/styles.css'

interface MenuOption {
  value: string | number
  label: string | number
}

interface DropdownInterface {
  onSelect: (value: string | number) => any
  options: MenuOption[]
  name: string
}

export const Dropdown = ({ onSelect, options, name }: DropdownInterface) => {
  return (
    <Menu name={name}>
      <MenuButton
        onChange={event => console.log('onChange', event)}
        onSelect={event => console.log('on select', event)}
        onSubmit={event => console.log('on submit', event)}
      >
        Select <span aria-hidden>▾</span>
      </MenuButton>
      <MenuList>
        {options.map(option => {
          return (
            <MenuItem
              onSubmit={event => console.log('menu item submit', event)}
              onSelect={() => onSelect(option.value)}
            >
              {option.label}
            </MenuItem>
          )
        })}
      </MenuList>
    </Menu>
  )
}
