import { Button } from "@/shared/ui/Button";
import { Card } from "@/shared/ui/Card";
import Link from "next/link";
import { type PropsWithChildren } from "react";
import styles from "./AuthWrapper.module.scss";

// import { AuthSocial } from './AuthSocial'

interface AuthWrapperProps {
  heading: string;
  description?: string;
  backButtonLabel?: string;
  backButtonHref?: string;
  isShowSocial?: boolean;
}

export function AuthWrapper({
  children,
  heading,
  description,
  backButtonLabel,
  backButtonHref,
  isShowSocial = false,
}: PropsWithChildren<AuthWrapperProps>) {
  return (
    <Card className={styles.authCard}>
      <div className={styles.heading}>
        <h2>{heading}</h2>
        {description && <p>{description}</p>}
      </div>
      <div>
        {isShowSocial && "<AuthSocial />"}
        {children}
      </div>
      <div>
        {backButtonLabel && backButtonHref && (
          <Button
            variant="ghost"
            className={styles.wrapperBtn}
          >
            <Link href={backButtonHref}>{backButtonLabel}</Link>
          </Button>
        )}
      </div>
    </Card>
  );
}
