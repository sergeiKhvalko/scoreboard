import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Fragment, ReactNode } from "react";
import cn from "classnames";
import styles from "./Dropdown.module.scss";
import { mapDirectionClass } from "../../styles/consts";
import popupCls from "../../styles/popup.module.scss";
import { DropdownDirection } from "../../dropdownDirections";
import { AppLink } from "@/shared/ui/AppLink";

export interface DropdownItem {
  disabled?: boolean;
  content?: ReactNode;
  onClick?: () => void;
  href?: string;
}

interface DropdownProps {
  className?: string;
  items: DropdownItem[];
  direction?: DropdownDirection;
  trigger: ReactNode;
}

export function Dropdown(props: DropdownProps) {
  const { className, trigger, items, direction = "bottom right" } = props;

  const menuClasses = [mapDirectionClass[direction], popupCls.menu];

  return (
    <Menu
      as="div"
      className={cn(styles.Dropdown, {}, [className, popupCls.popup])}
    >
      <MenuButton className={popupCls.trigger}>{trigger}</MenuButton>
      <MenuItems className={cn(styles.menu, {}, menuClasses)}>
        {items.map((item, index) => {
          const content = ({ active }: { active: boolean }) => (
            <button
              type="button"
              disabled={item.disabled}
              onClick={item.onClick}
              className={cn(styles.item, {
                [popupCls.active]: active,
              })}
            >
              {item.content}
            </button>
          );

          if (item.href) {
            return (
              <MenuItem
                as={AppLink}
                href={item.href}
                disabled={item.disabled}
                key={`dropdown-key-${index}`}
              >
                {content}
              </MenuItem>
            );
          }

          return (
            <MenuItem
              key={`dropdown-key-${index}`}
              as={Fragment}
              disabled={item.disabled}
            >
              {content}
            </MenuItem>
          );
        })}
      </MenuItems>
    </Menu>
  );
}
