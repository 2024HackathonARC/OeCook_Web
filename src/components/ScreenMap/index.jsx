import React, { useEffect } from "react";

const ScreenMap = ({ keyword, onMount }) => {
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
          level: 5,
        };

        const map = new kakao.maps.Map(mapContainer, mapOption);
        const places = new kakao.maps.services.Places();

        places.keywordSearch(
          keyword,
          (data, status) => {
            if (status === kakao.maps.services.Status.OK) {
              const results = data.slice(0, 1);
              const firstStorePosition = new kakao.maps.LatLng(
                results[0].y,
                results[0].x
              );

              results.forEach((store) => {
                const markerPosition = new kakao.maps.LatLng(store.y, store.x);
                const marker = new kakao.maps.Marker({
                  position: markerPosition,
                });

                marker.setMap(map);

                const infoWindow = new kakao.maps.InfoWindow({
                  content: `<div style="padding:5px;">${store.place_name}</div>`,
                });
                onMount(store.address_name);

                kakao.maps.event.addListener(marker, "click", () => {
                  infoWindow.open(map, marker);
                });
              });

              const currentLocation = new kakao.maps.LatLng(36.3623, 127.3575); // 현재 위치 (예시)
              const linePath = [currentLocation, firstStorePosition];
              const polyline = new kakao.maps.Polyline({
                path: linePath,
                strokeWeight: 5,
                strokeColor: "#FF0000",
                strokeOpacity: 0.7,
                strokeStyle: "solid",
              });
              polyline.setMap(map); // 지도에 선 그리기

              const centerLat =
                (currentLocation.getLat() + firstStorePosition.getLat()) / 2;
              const centerLng =
                (currentLocation.getLng() + firstStorePosition.getLng()) / 2;
              const centerPosition = new kakao.maps.LatLng(
                centerLat,
                centerLng
              );
              map.setCenter(centerPosition); // 중심을 두 위치의 중간으로 설정

              const currentMarker = new kakao.maps.Marker({
                position: currentLocation,
              });
              currentMarker.setMap(map);

              const currentInfoWindow = new kakao.maps.InfoWindow({
                content: '<div style="padding:5px;">현위치</div>',
              });
              currentInfoWindow.open(map, currentMarker); // 현재 위치에 정보창 열기
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
  }, [keyword, onMount]);
  return <div id="map" style={{ width: "100vw", height: "400px" }}></div>;
};

export default ScreenMap;
