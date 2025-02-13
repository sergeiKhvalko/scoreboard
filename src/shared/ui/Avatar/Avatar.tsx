import { CSSProperties, useMemo } from "react";
import cn from "classnames";
import cls from "./Avatar.module.scss";
import UserIcon from "../../assets/icons/user-filled.svg";
import { Icon } from "../Icon";
import { Skeleton } from "../Skeleton";
import { AppImage } from "../AppImage";

interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
}

export const Avatar = ({ className, src, size = 100, alt }: AvatarProps) => {
  const mods = {};

  const styles = useMemo<CSSProperties>(
    () => ({
      width: size,
      height: size,
    }),
    [size],
  );

  const fallback = (
    <Skeleton
      width={size}
      height={size}
      border="50%"
    />
  );
  const errorFallback = (
    <Icon
      width={size}
      height={size}
      Svg={UserIcon}
    />
  );

  return (
    <AppImage
      fallback={fallback}
      errorFallback={errorFallback}
      src={src}
      alt={alt}
      style={styles}
      className={cn(cls.Avatar, mods, [className])}
    />
  );
};
