// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

"use client";

import { useEffect } from "react";

export function YandexMetrica({ counterId = "99919393" }) {
  useEffect(() => {
    // Create Yandex Metrica script
    const script = document.createElement("script");
    script.innerHTML = `
      (function(m,e,t,r,i,k,a){
        m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
      })
      (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

      ym(${counterId}, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
      });
    `;
    document.body.appendChild(script);

    // Track initial page view
    window.ym(counterId, "hit", window.location.href);

    // Clean up script on unmount
    return () => {
      document.body.removeChild(script);
    };
  }, [counterId]);

  return null;
}
