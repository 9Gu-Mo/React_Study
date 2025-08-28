"use client";

import { useEffect } from "react";

export default function KakaoMap() {
  useEffect(() => {
    window.kakao.maps.load(() => {
      const container = document.getElementById("map");
      const options: kakao.maps.MapOptions = {
        center: new kakao.maps.LatLng(37.5665, 126.978),
        level: 4,
      };
      if (container) {
        const map = new kakao.maps.Map(container, options);

        const marker = new kakao.maps.Marker({
          position: options.center,
          map: map,
        });
      }
    });
  }, []);

  return (
    <>
      <div id="map"></div>
    </>
  );
}
