import { memo } from "react";
import cn from "classnames";
import { Text } from "@/shared/ui/Text";
import styles from "./NotificationItem.module.scss";
import { Notification } from "../../model/types/notification";
import { Card } from "@/shared/ui/Card";

interface NotificationItemProps {
  className?: string;
  item: Notification;
}

const NotificationItem = memo((props: NotificationItemProps) => {
  const { className, item } = props;

  const content = (
    <Card className={cn(styles.NotificationItem, {}, [className])}>
      <Text
        title={item.title}
        text={item.description}
      />
    </Card>
  );

  if (item.href) {
    return (
      <a
        className={styles.link}
        target="_blank"
        href={item.href}
        rel="noreferrer"
      >
        {content}
      </a>
    );
  }

  return content;
});

NotificationItem.displayName = "NotificationItem";
export { NotificationItem };
