Cesium.BingMapsApi.defaultKey = "AgAV2Raf1lycoFKAuCHSCR6E7Ucbsm1EOVPd3rFvhAlj0BT3-GUmL92MybzfqajW";
var extent = Cesium.Rectangle.fromDegrees(72,0,92,42); //5.74678(BLat) ,37.4(TLat), 97.16712(RLong)
Cesium.Camera.DEFAULT_VIEW_RECTANGLE = extent;
Cesium.Camera.DEFAULT_VIEW_FACTOR = 0;
var cesiumContainer = document.getElementById('cesiumContainer');
var viewer = new Cesium.Viewer(cesiumContainer,{
    baseLayerPicker : false,
    geocoder : true,
    timeline : false,
    animation : false,
    vrButton : true,
    sceneModePicker : false,
    navigationHelpButton : false,
    fullscreenElement : cesiumContainer,
    imageryProvider : new Cesium.createOpenStreetMapImageryProvider()
    });
//viewer.scene.frameState.creditDisplay.removeDefaultCredit(viewer.cesiumWidget.cesiumCredit);
//viewer.imageryLayers.removeAll()
//viewer.imageryLayers.addImageryProvider(Cesium.createOpenStreetMapImageryProvider())
//Cesium.Fullscreen.requestFullscreen(document.body)

//var scene = viewer.scene;
////var modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(77.599617,12.978874, 0.0));
//var ChinnaswamyStadium = scene.primitives.add(Cesium.Model.fromGltf({
//url : '../Models/Bengaluru/ChinnaswamyStadium.gltf',
//modelMatrix : Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(77.599617,12.978874, 0.0)),
//scale : 1.0
//}));
//
//var BangalorePalace = scene.primitives.add(Cesium.Model.fromGltf({
//url : '../Models/Bengaluru/BangalorePalace.gltf',
//modelMatrix : Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(77.592043,12.998701, 0.0)),
//scale : 1.0
//}));
//
//var GarudaMall = scene.primitives.add(Cesium.Model.fromGltf({
//url : '../Models/Bengaluru/GarudaMall.gltf',
//modelMatrix : Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(77.609665, 12.970019, 0.0)),
//scale : 1.0
//}));
//
//var CentralLibrary = scene.primitives.add(Cesium.Model.fromGltf({
//url : '../Models/Bengaluru/CentralLibrary.gltf',
//modelMatrix : Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(77.590622, 12.974318, 0.0)),
//scale : 1.0
//}));
//
//var HighCourtKarnataka = scene.primitives.add(Cesium.Model.fromGltf({
//url : '../Models/Bengaluru/HighCourtKarnataka.gltf',
//modelMatrix : Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(77.5914602, 12.9777929, 0.0)),
//scale : 1.0
//}));
//
//var InfosysPyramid = scene.primitives.add(Cesium.Model.fromGltf({
//url : '../Models/Bengaluru/InfosysPyramid.gltf',
//modelMatrix : Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(77.667711, 12.849969, 0.0)),
//scale : 1.0
//}));
//
//var LeelaPalace = scene.primitives.add(Cesium.Model.fromGltf({
//url : '../Models/Bengaluru/LeelaPalace.gltf',
//modelMatrix : Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(77.648412, 12.960790, 0.0)),
//scale : 1.0
//}));
//
//var PublicUtilityBuilding = scene.primitives.add(Cesium.Model.fromGltf({
//url : '../Models/Bengaluru/PublicUtilityBuilding.gltf',
//modelMatrix : Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(77.609736, 12.974232, 0.0)),
//scale : 1.0
//}));
//
//var TownHall = scene.primitives.add(Cesium.Model.fromGltf({
//url : '../Models/Bengaluru/TownHall.gltf',
//modelMatrix : Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(77.585780, 12.963784, 0.0)),
//scale : 1.0
//}));
//
//var UBCity = scene.primitives.add(Cesium.Model.fromGltf({
//url : '../Models/Bengaluru/UBCity.gltf',
//modelMatrix : Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(77.596062, 12.971588, 0.0)),
//scale : 1.0
//}));
//
//var VidhanaSoudha = scene.primitives.add(Cesium.Model.fromGltf({
//url : '../Models/Bengaluru/VidhanaSoudha.gltf',
//modelMatrix : Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(77.590712, 12.979619, 0.0)),
//scale : 1.0
//}));
//
//var VisvesvarayaTower = scene.primitives.add(Cesium.Model.fromGltf({
//url : '../Models/Bengaluru/VisvesvarayaTower.gltf',
//modelMatrix : Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(77.595481, 12.982021, 0.0)),
//scale : 1.0
//}));
//
//var WTC = scene.primitives.add(Cesium.Model.fromGltf({
//url : '../Models/Bengaluru/WTC.gltf',
//modelMatrix : Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(77.556033, 13.012195, 0.0)),
//scale : 1.0
//}));
