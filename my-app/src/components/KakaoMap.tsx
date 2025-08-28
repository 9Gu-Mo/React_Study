"use client";

import { useEffect } from "react";

export default function KakaoMap() {
  useEffect(() => {
    const loadMap = () => {
      if (window.kakao && window.kakao.maps) {
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
      } else {
        setTimeout(loadMap, 100);
      }
    };

    loadMap();
  }, []);

  return (
    <>
      <div id="map"></div>
    </>
  );
}
