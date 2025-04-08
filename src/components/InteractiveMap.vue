<template>
  <div class="mt-10 w-full md:w-3/4 lg:w-2/3 mx-auto rounded-xl shadow-md overflow-hidden">
    <div class="relative w-full" style="height: 350px;">
      <LMap
        class="absolute top-0 left-0 w-full h-full rounded-xl z-0"
        :zoom="5.3"
        :center="[65, 14]"
        @click="redirectToExternalMap"
      >
        <LTileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />

        <LMarker :lat-lng="[67.2804, 14.4049]"><LPopup>Lofoten</LPopup></LMarker>
        <LMarker :lat-lng="[60.39299, 5.32415]"><LPopup>Bergen</LPopup></LMarker>
        <LMarker :lat-lng="[59.9139, 10.7522]"><LPopup>Oslo</LPopup></LMarker>
        <LMarker :lat-lng="[63.4305, 10.3951]"><LPopup>Trondheim</LPopup></LMarker>
        <LMarker :lat-lng="[69.6496, 18.9560]"><LPopup>Tromsø</LPopup></LMarker>
      </LMap>
    </div>
  </div>
</template>

<script setup>
import 'leaflet/dist/leaflet.css'
import { LMap, LTileLayer, LMarker, LPopup } from '@vue-leaflet/vue-leaflet'
import L from 'leaflet'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'

delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
})

const redirectToExternalMap = () => {
  window.open('https://www.rexby.com/asasteinars/norway/map', '_blank')
}
</script>
