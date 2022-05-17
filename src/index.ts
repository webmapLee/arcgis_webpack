import './index.css';
import MapView from '@arcgis/core/views/MapView'
import WebMap from '@arcgis/core/WebMap'
import Hello from './widget';

const map = new WebMap({
    portalItem: {
        id: 'f2e9b762544945f390ca4ac3671cfa72'
    }
})

const view = new MapView({
    container: 'viewDiv',
    map:map,
})

view.when(()=>{
    const recenterWidget = new Hello();
      view.ui.add(recenterWidget, "top-right");  
})