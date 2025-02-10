import { memo } from "react";
import cn from "classnames";
import { VStack } from "@/shared/ui/Stack";
import { Skeleton } from "@/shared/ui/Skeleton";
// import { useNotifications } from "../../api/notificationApi";
import styles from "./NotificationList.module.scss";
import { NotificationItem } from "../NotificationItem/NotificationItem";
import { Notification } from "../../model/types/notification";

interface NotificationListProps {
  className?: string;
}

const NotificationList = memo((props: NotificationListProps) => {
  const { className } = props;
  // const { data, isLoading } = useNotifications(null, {
  //   pollingInterval: 10000,
  // });
  const data: Array<Notification> = [{ id: "1", title: "", description: "" }];
  const isLoading = false;

  if (isLoading) {
    return (
      <VStack
        gap="16"
        max
        className={cn(styles.NotificationList, {}, [className])}
      >
        <Skeleton
          width="100%"
          border="8px"
          height="80px"
        />
        <Skeleton
          width="100%"
          border="8px"
          height="80px"
        />
        <Skeleton
          width="100%"
          border="8px"
          height="80px"
        />
      </VStack>
    );
  }

  return (
    <VStack
      gap="16"
      max
      className={cn(styles.NotificationList, {}, [className])}
    >
      {data?.map((item) => (
        <NotificationItem
          key={item.id}
          item={item}
        />
      ))}
    </VStack>
  );
});

NotificationList.displayName = "NotificationList";
export { NotificationList };
