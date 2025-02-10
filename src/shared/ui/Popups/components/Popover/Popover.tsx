import {
  Popover as HPopover,
  PopoverButton as HPopoverButton,
  PopoverPanel as HPopoverPanel,
} from "@headlessui/react";
import { ReactNode } from "react";
import cn from "classnames";
import { DropdownDirection } from "../../dropdownDirections";
import { mapDirectionClass } from "../../styles/consts";
import styles from "./Popover.module.scss";
import popupCls from "../../styles/popup.module.scss";

interface PopoverProps {
  className?: string;
  direction?: DropdownDirection;
  trigger: ReactNode;
  children: ReactNode;
}

export function Popover(props: PopoverProps) {
  const { className, trigger, direction = "bottom right", children } = props;

  const menuClasses = [mapDirectionClass[direction], popupCls.menu];

  return (
    <HPopover className={cn(styles.Popover, {}, [className, popupCls.popup])}>
      <HPopoverButton
        as="div"
        className={popupCls.trigger}
      >
        {trigger}
      </HPopoverButton>

      <HPopoverPanel className={cn(styles.panel, {}, menuClasses)}>
        {children}
      </HPopoverPanel>
    </HPopover>
  );
}
