import React, { useEffect } from "react";

const ScreenMap = ({ keyword }) => {
  useEffect(() => {
    const loadKakaoMap = () => {
      const script = document.createElement("script");
      script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_KEY}&libraries=services`;
      script.async = true;
      document.head.appendChild(script);

      script.onload = () => {
        const kakao = window.kakao;
        const mapContainer = document.getElementById("map");
        const mapOption = {
          center: new kakao.maps.LatLng(36.3623, 127.3575),
          level: 3,
        };

        const map = new kakao.maps.Map(mapContainer, mapOption);
        const places = new kakao.maps.services.Places();

        places.keywordSearch(
          keyword,
          (data, status) => {
            if (status === kakao.maps.services.Status.OK) {
              const results = data.slice(0, 3);

              results.forEach((store) => {
                const markerPosition = new kakao.maps.LatLng(store.y, store.x);
                const marker = new kakao.maps.Marker({
                  position: markerPosition,
                });

                marker.setMap(map);

                const infoWindow = new kakao.maps.InfoWindow({
                  content: `<div style="padding:5px;">${store.place_name}</div>`,
                });

                kakao.maps.event.addListener(marker, "click", () => {
                  infoWindow.open(map, marker);
                });
              });

              const firstStorePosition = new kakao.maps.LatLng(
                results[0].y,
                results[0].x
              );
              map.setCenter(firstStorePosition);
            }
          },
          {
            location: map.getCenter(),
            radius: 10000,
          }
        );
      };
    };

    loadKakaoMap();
  }, [keyword]);
  return <div id="map" style={{ width: "100vw", height: "100vh" }}></div>;
};

export default ScreenMap;
