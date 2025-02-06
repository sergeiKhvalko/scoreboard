"use client";

import { motion } from "framer-motion";

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import styles from "./Tabs.module.scss";
import { TableMatchesProps } from "@/components/screens/league/League";
import { memo, useRef } from "react";
import cn from "classnames";
import Image from "next/image";

interface TabsProps {
  items: TableMatchesProps[];
  overflow?: "auto" | "hidden";
  className?: string;
  minWidth?: number;
}

const Tabs = memo(
  ({ items, overflow = "hidden", minWidth, className }: TabsProps) => {
    const tabsRef = useRef<HTMLDivElement>(null);
    const heightFix = () => {
      if (tabsRef.current && tabsRef.current.parentElement)
        tabsRef.current.parentElement.style.height = `${tabsRef.current.clientHeight}px`;
    };

    const tabContentVariant = {
      active: {
        display: "block",
        transition: {
          staggerChildren: 0.2,
        },
      },
      inactive: {
        display: "none",
      },
    };

    const cardVariant = {
      active: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.9,
        },
      },
      inactive: {
        opacity: 0,
        y: 10,
        transition: {
          duration: 0.9,
        },
      },
    };

    return (
      <TabGroup className={cn(styles.tabs, className)}>
        {({ selectedIndex }) => (
          <div>
            <TabList
              className={cn(styles.tabList, {
                [styles.tabListStat]: items[0].image,
              })}
            >
              {items.map((item) => (
                <Tab
                  key={item.title}
                  className={styles.tab}
                  onClick={() => heightFix()}
                >
                  {item.image ? (
                    <div className={styles.tabWrap}>
                      <Image
                        src={item.image || ""}
                        alt={"stats"}
                        width={50}
                        height={50}
                      />
                      {item.title}
                    </div>
                  ) : (
                    item.title
                  )}
                </Tab>
              ))}
            </TabList>
            <div className={cn({ [styles.panelsWrap]: overflow === "auto" })}>
              <TabPanels
                ref={tabsRef}
                className={styles.tabPanels}
                style={{ minWidth: `${minWidth}px` }}
              >
                {items.map((item, i) => (
                  <motion.div
                    key={item.title}
                    variants={tabContentVariant}
                    animate={selectedIndex === i ? "active" : "inactive"}
                    initial="inactive"
                  >
                    <motion.div variants={cardVariant}>
                      <TabPanel>{item.content}</TabPanel>
                    </motion.div>
                  </motion.div>
                ))}
              </TabPanels>
            </div>
          </div>
        )}
      </TabGroup>
    );
  },
);

Tabs.displayName = "Tabs";
export { Tabs };
