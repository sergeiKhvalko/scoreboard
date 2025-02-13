"use client";

// import { useTranslation } from 'react-i18next';
import React, { memo, useCallback } from "react";
// import { useDispatch, useSelector } from 'react-redux';
import cn from "classnames";
// import {
//     getUserAuthData,
//     isUserAdmin,
//     isUserManager,
//     userActions,
// } from '@/entities/User';
// import {
//     getRouteAdmin,
//     getRouteProfile,
//     getRouteSettings,
// } from '@/shared/const/router';
import { Dropdown } from "@/shared/ui/Popups";
import { Avatar } from "@/shared/ui/Avatar";

interface AvatarDropdownProps {
  className?: string;
}

const AvatarDropdown = memo((props: AvatarDropdownProps) => {
  const { className } = props;
  // const { t } = useTranslation();
  // const dispatch = useDispatch();
  // const isAdmin = useSelector(isUserAdmin);
  // const isManager = useSelector(isUserManager);
  // const authData = useSelector(getUserAuthData);
  const authData = { id: 1, avatar: "" };

  // const onLogout = useCallback(() => {
  //     dispatch(userActions.logout());
  // }, [dispatch]);
  const onLogout = useCallback(() => {}, []);

  // const isAdminPanelAvailable = isAdmin || isManager;

  // if (!authData) {
  //     return null;
  // }

  const items = [
    // ...(isAdminPanelAvailable
    //     ? [
    //           {
    //               content: t('Админка'),
    //               href: getRouteAdmin(),
    //           },
    //       ]
    //     : []),
    {
      content: "Настройки",
      // href: getRouteSettings(),
      href: "",
    },
    {
      content: "Профиль",
      // href: getRouteProfile(authData.id),
      href: "",
    },
    {
      content: "Выйти",
      onClick: onLogout,
    },
  ];

  return (
    <Dropdown
      direction="bottom left"
      className={cn("", {}, [className])}
      items={items}
      trigger={
        <Avatar
          size={40}
          src={authData.avatar}
        />
      }
    />
  );
});

AvatarDropdown.displayName = "AvatarDropdown";
export { AvatarDropdown };
