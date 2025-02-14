"use client";

import React, { memo, useCallback, useState } from "react";
import NotificationIcon from "@/shared/assets/icons/notification.svg";
import { NotificationList } from "@/entities/Notification";
import styles from "./NotificationButton.module.scss";
import { Icon } from "@/shared/ui/Icon";
import { Popover } from "@/shared/ui/Popups";
import cn from "classnames";

interface NotificationButtonProps {
  className?: string;
}

const NotificationButton = memo((props: NotificationButtonProps) => {
  const { className } = props;
  const [isOpen, setIsOpen] = useState(false);

  const onOpenDrawer = useCallback(() => {
    setIsOpen(true);
  }, []);

  const onCloseDrawer = useCallback(() => {
    setIsOpen(false);
  }, []);

  const trigger = (
    <Icon
      Svg={NotificationIcon}
      clickable
      onClick={onOpenDrawer}
    />
  );

  return (
    <div>
      <Popover
        className={cn(styles.NotificationButton, {}, [className])}
        direction="bottom left"
        trigger={trigger}
      >
        <NotificationList className={styles.notifications} />
      </Popover>
    </div>
  );
});

NotificationButton.displayName = "NotificationButton";
export { NotificationButton };
