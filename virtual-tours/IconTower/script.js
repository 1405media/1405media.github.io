(function(){
    var script = {
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "children": [
  "this.MainViewer",
  "this.Container_22BB12F4_3075_D173_4184_EC3BC4955417",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_4041C033_7558_FB6E_41CE_BFE427F3AF92",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9"
 ],
 "id": "rootPlayer",
 "scrollBarColor": "#000000",
 "vrPolyfillScale": 0.6,
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "mobileMipmappingEnabled": false,
 "borderSize": 0,
 "start": "this.playAudioList([this.audio_910EC3A5_855E_17F2_41D5_7E2D29C2AED4]); this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); this.playList_98A4CF95_857E_0F54_41D0_0E9112921C47.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "scrollBarVisible": "rollOver",
 "minHeight": 20,
 "definitions": [{
 "hfovMin": "150%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_709BD995_6195_7A3A_41D6_6F047F114DD0_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_709BD995_6195_7A3A_41D6_6F047F114DD0_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_709BD995_6195_7A3A_41D6_6F047F114DD0_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_709BD995_6195_7A3A_41D6_6F047F114DD0_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_709BD995_6195_7A3A_41D6_6F047F114DD0_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_709BD995_6195_7A3A_41D6_6F047F114DD0_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_709BD995_6195_7A3A_41D6_6F047F114DD0_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_709BD995_6195_7A3A_41D6_6F047F114DD0_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_709BD995_6195_7A3A_41D6_6F047F114DD0_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_709BD995_6195_7A3A_41D6_6F047F114DD0_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_709BD995_6195_7A3A_41D6_6F047F114DD0_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_709BD995_6195_7A3A_41D6_6F047F114DD0_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_709BD995_6195_7A3A_41D6_6F047F114DD0_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_709BD995_6195_7A3A_41D6_6F047F114DD0_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_709BD995_6195_7A3A_41D6_6F047F114DD0_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_709BD995_6195_7A3A_41D6_6F047F114DD0_t.jpg",
   "right": {
    "levels": [
     {
      "url": "media/panorama_709BD995_6195_7A3A_41D6_6F047F114DD0_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_709BD995_6195_7A3A_41D6_6F047F114DD0_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_709BD995_6195_7A3A_41D6_6F047F114DD0_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "Bedroom 1",
 "id": "panorama_709BD995_6195_7A3A_41D6_6F047F114DD0",
 "thumbnailUrl": "media/panorama_709BD995_6195_7A3A_41D6_6F047F114DD0_t.jpg",
 "hfovMax": 130,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_98C39FA4_857E_0F75_41CE_3F6A22CA94CC",
 "pitch": 0,
 "partial": false
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 73.76,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_A66663AC_857E_1774_41D1_1D2EBF4E3A24",
 "automaticZoomSpeed": 10
},
{
 "viewerArea": "this.MapViewer",
 "class": "MapPlayer",
 "id": "MapViewerMapPlayer",
 "movementMode": "constrained"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_711F14CD_6194_8A2A_41B2_8EC7CC97CF78_camera",
 "automaticZoomSpeed": 10
},
{
 "bodyBackgroundColorDirection": "vertical",
 "id": "window_3C622EB9_75D2_79BF_41C0_FF8692622F2C",
 "scrollBarColor": "#000000",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "width": 400,
 "bodyPaddingRight": 0,
 "scrollBarOpacity": 0.5,
 "headerVerticalAlign": "middle",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "scrollBarVisible": "rollOver",
 "minHeight": 20,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 0,
 "horizontalAlign": "center",
 "modal": true,
 "verticalAlign": "middle",
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "titlePaddingLeft": 5,
 "minWidth": 20,
 "titleFontColor": "#000000",
 "bodyPaddingTop": 0,
 "titleFontSize": "1.29vmin",
 "height": 600,
 "veilColorRatios": [
  0,
  1
 ],
 "headerBackgroundColorDirection": "vertical",
 "backgroundOpacity": 1,
 "backgroundColor": [],
 "closeButtonPressedIconLineWidth": 3,
 "class": "Window",
 "title": "",
 "bodyPaddingBottom": 0,
 "titleFontWeight": "normal",
 "footerHeight": 5,
 "paddingRight": 0,
 "headerBorderSize": 0,
 "closeButtonBackgroundColor": [],
 "veilShowEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "shadowSpread": 1,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "footerBackgroundOpacity": 0,
 "titlePaddingTop": 5,
 "propagateClick": false,
 "closeButtonPressedBackgroundColor": [],
 "overflow": "scroll",
 "veilOpacity": 0.4,
 "paddingLeft": 0,
 "headerPaddingRight": 0,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "titlePaddingRight": 5,
 "veilColorDirection": "horizontal",
 "children": [
  "this.viewer_uid98899F85_857E_0F34_41C0_5B5F4FC6E7DF"
 ],
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "closeButtonIconHeight": 20,
 "borderSize": 0,
 "titleFontFamily": "Arial",
 "titleFontStyle": "normal",
 "shadowVerticalLength": 0,
 "headerPaddingBottom": 5,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonIconColor": "#B2B2B2",
 "headerBorderColor": "#000000",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "shadowHorizontalLength": 3,
 "headerPaddingTop": 10,
 "shadowBlurRadius": 6,
 "closeButtonBorderRadius": 11,
 "gap": 10,
 "shadowOpacity": 0.5,
 "paddingTop": 0,
 "headerPaddingLeft": 10,
 "closeButtonRollOverBackgroundColor": [],
 "headerBackgroundOpacity": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderRadius": 5,
 "bodyPaddingLeft": 0,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonIconLineWidth": 2,
 "paddingBottom": 0,
 "titleTextDecoration": "none",
 "data": {
  "name": "Window135459"
 },
 "titlePaddingBottom": 5,
 "scrollBarWidth": 10,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "shadow": true,
 "closeButtonPressedIconColor": "#FFFFFF",
 "backgroundColorRatios": [],
 "closeButtonIconWidth": 20
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_711C506A_6194_8AEF_41D6_51A41933281D_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -12.89,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_A77F514A_857E_133D_41D3_786DF52BD41A",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -123.57,
  "pitch": 0.9
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_717488DE_6197_9A27_41D7_829FAF6E704A_camera",
 "displayMovements": [
  {
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "linear",
   "duration": 1000
  },
  {
   "targetPitch": 0.9,
   "class": "TargetRotationalCameraDisplayMovement",
   "targetStereographicFactor": 0,
   "easing": "cubic_in_out",
   "duration": 3000
  }
 ],
 "automaticZoomSpeed": 10,
 "displayOriginPosition": {
  "hfov": 165,
  "class": "RotationalCameraDisplayPosition",
  "yaw": -123.57,
  "stereographicFactor": 1,
  "pitch": -90
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 140.73,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_A7ADD273_857E_11EC_41DE_C8B080CD30E8",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 32.73,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_A72D907F_857E_11D4_41D8_DEB32AF397EE",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_71002081_6194_8A1D_41AF_00845E7D32A1_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PlayList",
 "id": "mainPlayList",
 "items": [
  {
   "media": "this.panorama_717488DE_6197_9A27_41D7_829FAF6E704A",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_717488DE_6197_9A27_41D7_829FAF6E704A_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_71100113_6194_8A3E_41B1_32BE30E8A7EB",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_71100113_6194_8A3E_41B1_32BE30E8A7EB_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_72863FC2_6A55_D264_41D9_8083E0BEF560",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_72863FC2_6A55_D264_41D9_8083E0BEF560_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_71002081_6194_8A1D_41AF_00845E7D32A1",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_71002081_6194_8A1D_41AF_00845E7D32A1_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  "this.PanoramaPlayListItem_98C8DFB4_857E_0F54_41C1_8CBC6B080671",
  "this.PanoramaPlayListItem_98F73FB4_857E_0F54_41D2_6201D810F19D",
  "this.PanoramaPlayListItem_98C9BFB4_857E_0F54_41D0_A917FFE049D4",
  "this.PanoramaPlayListItem_98F67FB4_857E_0F54_41C3_403226BB580E",
  "this.PanoramaPlayListItem_98F6BFB4_857E_0F54_41D3_91752BCA6385",
  "this.PanoramaPlayListItem_98C9DFB4_857E_0F54_41C6_E635AADD085D",
  "this.PanoramaPlayListItem_98C91FB4_857E_0F54_41BC_0BC3329F429B",
  {
   "media": "this.panorama_711C506A_6194_8AEF_41D6_51A41933281D",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_711C506A_6194_8AEF_41D6_51A41933281D_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_717A2675_6197_96FA_41D1_0E6D0808DCB9",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_717A2675_6197_96FA_41D1_0E6D0808DCB9_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_709BD995_6195_7A3A_41D6_6F047F114DD0",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_709BD995_6195_7A3A_41D6_6F047F114DD0_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_711F14CD_6194_8A2A_41B2_8EC7CC97CF78",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_711F14CD_6194_8A2A_41B2_8EC7CC97CF78_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_7102D860_6194_9A1A_41D3_15B34249EE93",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_7102D860_6194_9A1A_41D3_15B34249EE93_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_7173725B_6197_8E2D_41CC_7631E47EB4E1",
   "class": "PanoramaPlayListItem",
   "end": "this.trigger('tourEnded')",
   "camera": "this.panorama_7173725B_6197_8E2D_41CC_7631E47EB4E1_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 0)",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_7173725B_6197_8E2D_41CC_7631E47EB4E1_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 21.27,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_A7C29292_857E_112D_41CA_FDA78B350B1A",
 "automaticZoomSpeed": 10
},
{
 "class": "PlayList",
 "id": "playList_98A4CF95_857E_0F54_41D0_0E9112921C47",
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_37BB5E31_7A5E_3838_41DB_2011E458730F",
   "class": "MapPlayListItem",
   "player": "this.MapViewerMapPlayer"
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -153,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_A78ED225_857E_1174_41DE_095BC39B1E6F",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 78.14,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_A75190BE_857E_1154_41CA_0B205C21A1D1",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -55.43,
  "pitch": 5.91
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_71032291_6194_8E3D_41AA_CAF41E793173_camera",
 "automaticZoomSpeed": 10
},
{
 "duration": 5000,
 "label": "ON SITE (4)",
 "id": "album_349D36DC_7BAE_C86A_41DA_05DFA29EC9FF_3",
 "thumbnailUrl": "media/album_349D36DC_7BAE_C86A_41DA_05DFA29EC9FF_3_t.jpg",
 "width": 1024,
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_349D36DC_7BAE_C86A_41DA_05DFA29EC9FF_3.jpeg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 683
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 28.57,
  "pitch": 4.7
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_7102D860_6194_9A1A_41D3_15B34249EE93_camera",
 "automaticZoomSpeed": 10
},
{
 "duration": 5000,
 "label": "ON SITE (6)",
 "id": "album_349D36DC_7BAE_C86A_41DA_05DFA29EC9FF_5",
 "thumbnailUrl": "media/album_349D36DC_7BAE_C86A_41DA_05DFA29EC9FF_5_t.jpg",
 "width": 2048,
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_349D36DC_7BAE_C86A_41DA_05DFA29EC9FF_5.jpeg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1366
},
{
 "rollOverBackgroundColor": "#000000",
 "fontFamily": "Arial",
 "selectedFontColor": "#FFFFFF",
 "children": [
  {
   "label": "Exterior",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  },
  {
   "label": "Lobby",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  },
  {
   "label": "Elevator",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  },
  {
   "label": "Car Park",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 3)"
  },
  {
   "label": "Restaurant",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  },
  {
   "label": "Salon",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  },
  {
   "label": "Spa",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 6)"
  },
  {
   "label": "Play Area",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  },
  {
   "label": "Garden",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 8)"
  },
  {
   "label": "Gym",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 9)"
  },
  {
   "label": "Swimming Pool",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 10)"
  },
  {
   "label": "Living-room",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 11)"
  },
  {
   "label": "Family lounge",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 12)"
  },
  {
   "label": "Bedroom 1",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 13)"
  },
  {
   "label": "Bedroom 2",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 14)"
  },
  {
   "label": "Cinema",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 15)"
  },
  {
   "label": "Kitchen",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 16)"
  }
 ],
 "label": "Media",
 "id": "Menu_98C39FA4_857E_0F75_41CE_3F6A22CA94CC",
 "class": "Menu",
 "rollOverFontColor": "#FFFFFF",
 "opacity": 0.4,
 "rollOverOpacity": 0.8,
 "fontColor": "#FFFFFF",
 "backgroundColor": "#404040",
 "selectedBackgroundColor": "#202020"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 27,
   "backwardYaw": -106.15,
   "distance": 1,
   "panorama": "this.panorama_72863FC2_6A55_D264_41D9_8083E0BEF560"
  }
 ],
 "hfovMin": "117%",
 "hfovMax": 130,
 "hfov": 360,
 "id": "panorama_71032291_6194_8E3D_41AA_CAF41E793173",
 "thumbnailUrl": "media/panorama_71032291_6194_8E3D_41AA_CAF41E793173_t.jpg",
 "label": "Swimming Pool",
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_98C39FA4_857E_0F75_41CE_3F6A22CA94CC",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_71032291_6194_8E3D_41AA_CAF41E793173_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_71032291_6194_8E3D_41AA_CAF41E793173_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_71032291_6194_8E3D_41AA_CAF41E793173_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_71032291_6194_8E3D_41AA_CAF41E793173_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_71032291_6194_8E3D_41AA_CAF41E793173_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_71032291_6194_8E3D_41AA_CAF41E793173_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_71032291_6194_8E3D_41AA_CAF41E793173_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_71032291_6194_8E3D_41AA_CAF41E793173_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_71032291_6194_8E3D_41AA_CAF41E793173_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_71032291_6194_8E3D_41AA_CAF41E793173_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_71032291_6194_8E3D_41AA_CAF41E793173_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_71032291_6194_8E3D_41AA_CAF41E793173_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_71032291_6194_8E3D_41AA_CAF41E793173_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_71032291_6194_8E3D_41AA_CAF41E793173_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_71032291_6194_8E3D_41AA_CAF41E793173_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_71032291_6194_8E3D_41AA_CAF41E793173_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_71032291_6194_8E3D_41AA_CAF41E793173_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_71032291_6194_8E3D_41AA_CAF41E793173_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_71032291_6194_8E3D_41AA_CAF41E793173_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_71032291_6194_8E3D_41AA_CAF41E793173_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_71032291_6194_8E3D_41AA_CAF41E793173_t.jpg",
   "right": {
    "levels": [
     {
      "url": "media/panorama_71032291_6194_8E3D_41AA_CAF41E793173_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_71032291_6194_8E3D_41AA_CAF41E793173_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_71032291_6194_8E3D_41AA_CAF41E793173_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_71032291_6194_8E3D_41AA_CAF41E793173_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_4EBDA1A2_6ABD_CE24_41C5_2A11C9E6E41B"
 ]
},
{
 "viewerArea": "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "class": "PhotoAlbumPlayer",
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9CPhotoAlbumPlayer",
 "buttonPrevious": "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "buttonNext": "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_7104C9EC_6197_9DEA_41CA_604B9DD4BB02_camera",
 "automaticZoomSpeed": 10
},
{
 "duration": 5000,
 "label": "ON SITE (7)",
 "id": "album_349D36DC_7BAE_C86A_41DA_05DFA29EC9FF_6",
 "thumbnailUrl": "media/album_349D36DC_7BAE_C86A_41DA_05DFA29EC9FF_6_t.jpg",
 "width": 2048,
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_349D36DC_7BAE_C86A_41DA_05DFA29EC9FF_6.jpeg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1366
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 175.5,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_A7DE0283_857E_112C_41CA_6CB572B8D633",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_710C07D2_6197_F63F_41D1_02379524F040_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 178.71,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_A707A012_857E_112C_41A0_2A5B18DE7840",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 41.48,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_A71E7FF3_857E_0EEC_41CE_F2464A6F1A70",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -129.68,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_A7C9B2B2_857E_116C_41DE_7A64CCA9C0B6",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -158.73,
   "backwardYaw": -101.87,
   "distance": 1,
   "panorama": "this.panorama_72863FC2_6A55_D264_41D9_8083E0BEF560"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -147.27,
   "backwardYaw": 90,
   "distance": 1,
   "panorama": "this.panorama_717A2675_6197_96FA_41D1_0E6D0808DCB9"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -174.27,
   "backwardYaw": -91.8,
   "distance": 1,
   "panorama": "this.panorama_711F14CD_6194_8A2A_41B2_8EC7CC97CF78"
  }
 ],
 "hfovMin": "135%",
 "hfovMax": 130,
 "hfov": 360,
 "id": "panorama_711C506A_6194_8AEF_41D6_51A41933281D",
 "thumbnailUrl": "media/panorama_711C506A_6194_8AEF_41D6_51A41933281D_t.jpg",
 "label": "Living-room",
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_98C39FA4_857E_0F75_41CE_3F6A22CA94CC",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_711C506A_6194_8AEF_41D6_51A41933281D_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_711C506A_6194_8AEF_41D6_51A41933281D_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_711C506A_6194_8AEF_41D6_51A41933281D_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_711C506A_6194_8AEF_41D6_51A41933281D_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_711C506A_6194_8AEF_41D6_51A41933281D_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_711C506A_6194_8AEF_41D6_51A41933281D_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_711C506A_6194_8AEF_41D6_51A41933281D_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_711C506A_6194_8AEF_41D6_51A41933281D_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_711C506A_6194_8AEF_41D6_51A41933281D_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_711C506A_6194_8AEF_41D6_51A41933281D_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_711C506A_6194_8AEF_41D6_51A41933281D_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_711C506A_6194_8AEF_41D6_51A41933281D_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_711C506A_6194_8AEF_41D6_51A41933281D_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_711C506A_6194_8AEF_41D6_51A41933281D_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_711C506A_6194_8AEF_41D6_51A41933281D_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_711C506A_6194_8AEF_41D6_51A41933281D_t.jpg",
   "right": {
    "levels": [
     {
      "url": "media/panorama_711C506A_6194_8AEF_41D6_51A41933281D_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_711C506A_6194_8AEF_41D6_51A41933281D_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_711C506A_6194_8AEF_41D6_51A41933281D_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_4DBBAE72_6AD2_D224_419B_2AED40F52DAE",
  "this.overlay_51B617D9_75B2_3264_41C5_AAF01FBCA921",
  "this.overlay_553393CD_75D6_527C_41CE_F901D0C92E24"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -138.52,
   "backwardYaw": -1.23,
   "distance": 1,
   "panorama": "this.panorama_71100113_6194_8A3E_41B1_32BE30E8A7EB"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_71032291_6194_8E3D_41AA_CAF41E793173"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_711C506A_6194_8AEF_41D6_51A41933281D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7106ACA2_6195_9A1F_41C5_233FAC94B021"
  }
 ],
 "hfovMax": 130,
 "hfov": 360,
 "id": "panorama_717488DE_6197_9A27_41D7_829FAF6E704A",
 "thumbnailUrl": "media/panorama_717488DE_6197_9A27_41D7_829FAF6E704A_t.jpg",
 "label": "Exterior",
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_98C39FA4_857E_0F75_41CE_3F6A22CA94CC",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_717488DE_6197_9A27_41D7_829FAF6E704A_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_717488DE_6197_9A27_41D7_829FAF6E704A_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_717488DE_6197_9A27_41D7_829FAF6E704A_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_717488DE_6197_9A27_41D7_829FAF6E704A_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_717488DE_6197_9A27_41D7_829FAF6E704A_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_717488DE_6197_9A27_41D7_829FAF6E704A_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_717488DE_6197_9A27_41D7_829FAF6E704A_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_717488DE_6197_9A27_41D7_829FAF6E704A_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_717488DE_6197_9A27_41D7_829FAF6E704A_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_717488DE_6197_9A27_41D7_829FAF6E704A_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_717488DE_6197_9A27_41D7_829FAF6E704A_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_717488DE_6197_9A27_41D7_829FAF6E704A_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_717488DE_6197_9A27_41D7_829FAF6E704A_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_717488DE_6197_9A27_41D7_829FAF6E704A_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_717488DE_6197_9A27_41D7_829FAF6E704A_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_717488DE_6197_9A27_41D7_829FAF6E704A_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_717488DE_6197_9A27_41D7_829FAF6E704A_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_717488DE_6197_9A27_41D7_829FAF6E704A_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_717488DE_6197_9A27_41D7_829FAF6E704A_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_717488DE_6197_9A27_41D7_829FAF6E704A_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_717488DE_6197_9A27_41D7_829FAF6E704A_t.jpg",
   "right": {
    "levels": [
     {
      "url": "media/panorama_717488DE_6197_9A27_41D7_829FAF6E704A_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_717488DE_6197_9A27_41D7_829FAF6E704A_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_717488DE_6197_9A27_41D7_829FAF6E704A_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_717488DE_6197_9A27_41D7_829FAF6E704A_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_7B11D5FE_6A5E_D61C_41B7_A9B5AA6C0D6C",
  "this.overlay_799B633E_6AB2_521C_4165_A63E7BF89846",
  "this.overlay_703524A9_6BDF_D624_41D0_AED8EFDF417A",
  "this.overlay_77BA92E3_6BAE_5224_41D0_F0F91D7694E2",
  "this.panorama_717488DE_6197_9A27_41D7_829FAF6E704A_tcap0"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -71.45,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_A726C050_857E_112D_41BB_94F9309AE606",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -170.18,
   "backwardYaw": 0.58,
   "distance": 1,
   "panorama": "this.panorama_7102D860_6194_9A1A_41D3_15B34249EE93"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 167.11,
   "backwardYaw": 108.55,
   "distance": 1,
   "panorama": "this.panorama_7173725B_6197_8E2D_41CC_7631E47EB4E1"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 90,
   "backwardYaw": -147.27,
   "distance": 1,
   "panorama": "this.panorama_711C506A_6194_8AEF_41D6_51A41933281D"
  }
 ],
 "hfovMin": "135%",
 "hfovMax": 130,
 "hfov": 360,
 "id": "panorama_717A2675_6197_96FA_41D1_0E6D0808DCB9",
 "thumbnailUrl": "media/panorama_717A2675_6197_96FA_41D1_0E6D0808DCB9_t.jpg",
 "label": "Family lounge",
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_98C39FA4_857E_0F75_41CE_3F6A22CA94CC",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_717A2675_6197_96FA_41D1_0E6D0808DCB9_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_717A2675_6197_96FA_41D1_0E6D0808DCB9_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_717A2675_6197_96FA_41D1_0E6D0808DCB9_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_717A2675_6197_96FA_41D1_0E6D0808DCB9_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_717A2675_6197_96FA_41D1_0E6D0808DCB9_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_717A2675_6197_96FA_41D1_0E6D0808DCB9_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_717A2675_6197_96FA_41D1_0E6D0808DCB9_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_717A2675_6197_96FA_41D1_0E6D0808DCB9_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_717A2675_6197_96FA_41D1_0E6D0808DCB9_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_717A2675_6197_96FA_41D1_0E6D0808DCB9_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_717A2675_6197_96FA_41D1_0E6D0808DCB9_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_717A2675_6197_96FA_41D1_0E6D0808DCB9_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_717A2675_6197_96FA_41D1_0E6D0808DCB9_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_717A2675_6197_96FA_41D1_0E6D0808DCB9_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_717A2675_6197_96FA_41D1_0E6D0808DCB9_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_717A2675_6197_96FA_41D1_0E6D0808DCB9_t.jpg",
   "right": {
    "levels": [
     {
      "url": "media/panorama_717A2675_6197_96FA_41D1_0E6D0808DCB9_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_717A2675_6197_96FA_41D1_0E6D0808DCB9_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_717A2675_6197_96FA_41D1_0E6D0808DCB9_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_4EBB6B68_6AB2_7224_419B_171C8E6F7AF3",
  "this.overlay_4C12EA10_6AD2_5DE4_41BD_D00CE7429988",
  "this.overlay_592CCDBE_75B7_D61C_41DC_11123008700D"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -135.41,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_A70C4021_857E_116F_419D_6B50F8DA3FA8",
 "automaticZoomSpeed": 10
},
{
 "label": "ON SITE PHOTOS",
 "id": "album_349D36DC_7BAE_C86A_41DA_05DFA29EC9FF",
 "thumbnailUrl": "media/album_349D36DC_7BAE_C86A_41DA_05DFA29EC9FF_t.png",
 "playList": "this.album_349D36DC_7BAE_C86A_41DA_05DFA29EC9FF_AlbumPlayList",
 "class": "PhotoAlbum"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -169.36,
   "backwardYaw": -101.86,
   "distance": 1,
   "panorama": "this.panorama_72863FC2_6A55_D264_41D9_8083E0BEF560"
  }
 ],
 "hfovMin": "120%",
 "hfovMax": 130,
 "hfov": 360,
 "id": "panorama_716F106D_6195_8AEA_41D2_42589C07E77E",
 "thumbnailUrl": "media/panorama_716F106D_6195_8AEA_41D2_42589C07E77E_t.jpg",
 "label": "Salon",
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_98C39FA4_857E_0F75_41CE_3F6A22CA94CC",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_716F106D_6195_8AEA_41D2_42589C07E77E_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_716F106D_6195_8AEA_41D2_42589C07E77E_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_716F106D_6195_8AEA_41D2_42589C07E77E_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_716F106D_6195_8AEA_41D2_42589C07E77E_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_716F106D_6195_8AEA_41D2_42589C07E77E_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_716F106D_6195_8AEA_41D2_42589C07E77E_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_716F106D_6195_8AEA_41D2_42589C07E77E_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_716F106D_6195_8AEA_41D2_42589C07E77E_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_716F106D_6195_8AEA_41D2_42589C07E77E_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_716F106D_6195_8AEA_41D2_42589C07E77E_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_716F106D_6195_8AEA_41D2_42589C07E77E_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_716F106D_6195_8AEA_41D2_42589C07E77E_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_716F106D_6195_8AEA_41D2_42589C07E77E_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_716F106D_6195_8AEA_41D2_42589C07E77E_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_716F106D_6195_8AEA_41D2_42589C07E77E_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_716F106D_6195_8AEA_41D2_42589C07E77E_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_716F106D_6195_8AEA_41D2_42589C07E77E_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_716F106D_6195_8AEA_41D2_42589C07E77E_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_716F106D_6195_8AEA_41D2_42589C07E77E_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_716F106D_6195_8AEA_41D2_42589C07E77E_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_716F106D_6195_8AEA_41D2_42589C07E77E_t.jpg",
   "right": {
    "levels": [
     {
      "url": "media/panorama_716F106D_6195_8AEA_41D2_42589C07E77E_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_716F106D_6195_8AEA_41D2_42589C07E77E_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_716F106D_6195_8AEA_41D2_42589C07E77E_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_716F106D_6195_8AEA_41D2_42589C07E77E_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_7230CE34_6BB2_722C_41D8_5DB210466819"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -90,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_A644437D_857E_17D4_41B7_39F8D595978F",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 44.59,
   "backwardYaw": 149.73,
   "distance": 1,
   "panorama": "this.panorama_71100113_6194_8A3E_41B1_32BE30E8A7EB"
  }
 ],
 "hfovMin": "120%",
 "hfovMax": 130,
 "hfov": 360,
 "id": "panorama_71002081_6194_8A1D_41AF_00845E7D32A1",
 "thumbnailUrl": "media/panorama_71002081_6194_8A1D_41AF_00845E7D32A1_t.jpg",
 "label": "Car Park",
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_98C39FA4_857E_0F75_41CE_3F6A22CA94CC",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_71002081_6194_8A1D_41AF_00845E7D32A1_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_71002081_6194_8A1D_41AF_00845E7D32A1_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_71002081_6194_8A1D_41AF_00845E7D32A1_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_71002081_6194_8A1D_41AF_00845E7D32A1_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_71002081_6194_8A1D_41AF_00845E7D32A1_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_71002081_6194_8A1D_41AF_00845E7D32A1_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_71002081_6194_8A1D_41AF_00845E7D32A1_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_71002081_6194_8A1D_41AF_00845E7D32A1_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_71002081_6194_8A1D_41AF_00845E7D32A1_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_71002081_6194_8A1D_41AF_00845E7D32A1_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_71002081_6194_8A1D_41AF_00845E7D32A1_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_71002081_6194_8A1D_41AF_00845E7D32A1_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_71002081_6194_8A1D_41AF_00845E7D32A1_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_71002081_6194_8A1D_41AF_00845E7D32A1_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_71002081_6194_8A1D_41AF_00845E7D32A1_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_71002081_6194_8A1D_41AF_00845E7D32A1_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_71002081_6194_8A1D_41AF_00845E7D32A1_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_71002081_6194_8A1D_41AF_00845E7D32A1_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_71002081_6194_8A1D_41AF_00845E7D32A1_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_71002081_6194_8A1D_41AF_00845E7D32A1_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_71002081_6194_8A1D_41AF_00845E7D32A1_t.jpg",
   "right": {
    "levels": [
     {
      "url": "media/panorama_71002081_6194_8A1D_41AF_00845E7D32A1_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_71002081_6194_8A1D_41AF_00845E7D32A1_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_71002081_6194_8A1D_41AF_00845E7D32A1_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_71002081_6194_8A1D_41AF_00845E7D32A1_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_77ACFFB1_6BB2_5224_41C2_E5E346F7695F"
 ]
},
{
 "class": "PlayList",
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "items": [
  {
   "media": "this.panorama_717488DE_6197_9A27_41D7_829FAF6E704A",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_717488DE_6197_9A27_41D7_829FAF6E704A_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_71100113_6194_8A3E_41B1_32BE30E8A7EB",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_71100113_6194_8A3E_41B1_32BE30E8A7EB_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_72863FC2_6A55_D264_41D9_8083E0BEF560",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_72863FC2_6A55_D264_41D9_8083E0BEF560_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_71002081_6194_8A1D_41AF_00845E7D32A1",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_71002081_6194_8A1D_41AF_00845E7D32A1_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_7106ACA2_6195_9A1F_41C5_233FAC94B021",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_7106ACA2_6195_9A1F_41C5_233FAC94B021_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_716F106D_6195_8AEA_41D2_42589C07E77E",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_716F106D_6195_8AEA_41D2_42589C07E77E_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_710D1E1D_6195_9625_41C1_57EDFD131CC7",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_710D1E1D_6195_9625_41C1_57EDFD131CC7_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_7108C42C_6194_8A6A_41D3_2AC813940857",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_7108C42C_6194_8A6A_41D3_2AC813940857_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_710C07D2_6197_F63F_41D1_02379524F040",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_710C07D2_6197_F63F_41D1_02379524F040_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_7104C9EC_6197_9DEA_41CA_604B9DD4BB02",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_7104C9EC_6197_9DEA_41CA_604B9DD4BB02_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_71032291_6194_8E3D_41AA_CAF41E793173",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_71032291_6194_8E3D_41AA_CAF41E793173_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_711C506A_6194_8AEF_41D6_51A41933281D",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_711C506A_6194_8AEF_41D6_51A41933281D_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_717A2675_6197_96FA_41D1_0E6D0808DCB9",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_717A2675_6197_96FA_41D1_0E6D0808DCB9_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_709BD995_6195_7A3A_41D6_6F047F114DD0",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_709BD995_6195_7A3A_41D6_6F047F114DD0_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_711F14CD_6194_8A2A_41B2_8EC7CC97CF78",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_711F14CD_6194_8A2A_41B2_8EC7CC97CF78_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_7102D860_6194_9A1A_41D3_15B34249EE93",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_7102D860_6194_9A1A_41D3_15B34249EE93_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_7173725B_6197_8E2D_41CC_7631E47EB4E1",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_7173725B_6197_8E2D_41CC_7631E47EB4E1_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 17, 0)",
   "media": "this.album_349D36DC_7BAE_C86A_41DA_05DFA29EC9FF",
   "class": "PhotoAlbumPlayListItem",
   "player": "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9CPhotoAlbumPlayer"
  }
 ]
},
{
 "duration": 5000,
 "label": "ON SITE (2)",
 "id": "album_349D36DC_7BAE_C86A_41DA_05DFA29EC9FF_1",
 "thumbnailUrl": "media/album_349D36DC_7BAE_C86A_41DA_05DFA29EC9FF_1_t.jpg",
 "width": 1024,
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_349D36DC_7BAE_C86A_41DA_05DFA29EC9FF_1.jpeg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 682
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 78.13,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_A654A35E_857E_17D4_41BF_C071CDC06F16",
 "automaticZoomSpeed": 10
},
{
 "label": "Real Estate New Listing YouTube Intro",
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_493F3EE3_7E52_D9E5_41D4_B67C42A13526_t.jpg",
 "width": 1920,
 "class": "Video",
 "id": "video_493F3EE3_7E52_D9E5_41D4_B67C42A13526",
 "loop": false,
 "height": 1080,
 "video": {
  "width": 1280,
  "class": "VideoResource",
  "height": 720,
  "mp4Url": "media/video_493F3EE3_7E52_D9E5_41D4_B67C42A13526.mp4"
 }
},
{
 "displayPlaybackBar": true,
 "viewerArea": "this.MainViewer",
 "class": "VideoPlayer",
 "id": "MainViewerVideoPlayer"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 5.73,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_A602E30F_857E_1733_41D4_D19345DE4353",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -58.09,
   "backwardYaw": -97.6,
   "distance": 1,
   "panorama": "this.panorama_72863FC2_6A55_D264_41D9_8083E0BEF560"
  }
 ],
 "hfovMin": "120%",
 "hfovMax": 130,
 "hfov": 360,
 "id": "panorama_710D1E1D_6195_9625_41C1_57EDFD131CC7",
 "thumbnailUrl": "media/panorama_710D1E1D_6195_9625_41C1_57EDFD131CC7_t.jpg",
 "label": "Spa",
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_98C39FA4_857E_0F75_41CE_3F6A22CA94CC",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_710D1E1D_6195_9625_41C1_57EDFD131CC7_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_710D1E1D_6195_9625_41C1_57EDFD131CC7_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_710D1E1D_6195_9625_41C1_57EDFD131CC7_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_710D1E1D_6195_9625_41C1_57EDFD131CC7_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_710D1E1D_6195_9625_41C1_57EDFD131CC7_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_710D1E1D_6195_9625_41C1_57EDFD131CC7_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_710D1E1D_6195_9625_41C1_57EDFD131CC7_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_710D1E1D_6195_9625_41C1_57EDFD131CC7_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_710D1E1D_6195_9625_41C1_57EDFD131CC7_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_710D1E1D_6195_9625_41C1_57EDFD131CC7_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_710D1E1D_6195_9625_41C1_57EDFD131CC7_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_710D1E1D_6195_9625_41C1_57EDFD131CC7_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_710D1E1D_6195_9625_41C1_57EDFD131CC7_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_710D1E1D_6195_9625_41C1_57EDFD131CC7_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_710D1E1D_6195_9625_41C1_57EDFD131CC7_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_710D1E1D_6195_9625_41C1_57EDFD131CC7_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_710D1E1D_6195_9625_41C1_57EDFD131CC7_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_710D1E1D_6195_9625_41C1_57EDFD131CC7_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_710D1E1D_6195_9625_41C1_57EDFD131CC7_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_710D1E1D_6195_9625_41C1_57EDFD131CC7_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_710D1E1D_6195_9625_41C1_57EDFD131CC7_t.jpg",
   "right": {
    "levels": [
     {
      "url": "media/panorama_710D1E1D_6195_9625_41C1_57EDFD131CC7_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_710D1E1D_6195_9625_41C1_57EDFD131CC7_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_710D1E1D_6195_9625_41C1_57EDFD131CC7_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_710D1E1D_6195_9625_41C1_57EDFD131CC7_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_72E10CC8_6BBE_3664_41D7_E402F7FC82B2"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 0.58,
   "backwardYaw": -170.18,
   "distance": 1,
   "panorama": "this.panorama_717A2675_6197_96FA_41D1_0E6D0808DCB9"
  }
 ],
 "hfovMin": "150%",
 "hfovMax": 130,
 "hfov": 360,
 "id": "panorama_7102D860_6194_9A1A_41D3_15B34249EE93",
 "thumbnailUrl": "media/panorama_7102D860_6194_9A1A_41D3_15B34249EE93_t.jpg",
 "label": "Cinema",
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_98C39FA4_857E_0F75_41CE_3F6A22CA94CC",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_7102D860_6194_9A1A_41D3_15B34249EE93_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7102D860_6194_9A1A_41D3_15B34249EE93_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_7102D860_6194_9A1A_41D3_15B34249EE93_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7102D860_6194_9A1A_41D3_15B34249EE93_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_7102D860_6194_9A1A_41D3_15B34249EE93_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7102D860_6194_9A1A_41D3_15B34249EE93_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_7102D860_6194_9A1A_41D3_15B34249EE93_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7102D860_6194_9A1A_41D3_15B34249EE93_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_7102D860_6194_9A1A_41D3_15B34249EE93_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7102D860_6194_9A1A_41D3_15B34249EE93_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_7102D860_6194_9A1A_41D3_15B34249EE93_t.jpg",
   "right": {
    "levels": [
     {
      "url": "media/panorama_7102D860_6194_9A1A_41D3_15B34249EE93_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7102D860_6194_9A1A_41D3_15B34249EE93_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_539156B6_75D7_F22C_419E_CAE6DE8AFCC6",
  "this.overlay_4EB33D37_7E52_386D_41D0_863CB57D9026"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 82.4,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_A7634189_857E_133C_41D8_982A902F318B",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 50.32,
   "backwardYaw": -106.24,
   "distance": 1,
   "panorama": "this.panorama_72863FC2_6A55_D264_41D9_8083E0BEF560"
  }
 ],
 "hfovMax": 130,
 "hfov": 360,
 "id": "panorama_7106ACA2_6195_9A1F_41C5_233FAC94B021",
 "thumbnailUrl": "media/panorama_7106ACA2_6195_9A1F_41C5_233FAC94B021_t.jpg",
 "label": "Restaurant",
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_98C39FA4_857E_0F75_41CE_3F6A22CA94CC",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_7106ACA2_6195_9A1F_41C5_233FAC94B021_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7106ACA2_6195_9A1F_41C5_233FAC94B021_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7106ACA2_6195_9A1F_41C5_233FAC94B021_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7106ACA2_6195_9A1F_41C5_233FAC94B021_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_7106ACA2_6195_9A1F_41C5_233FAC94B021_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7106ACA2_6195_9A1F_41C5_233FAC94B021_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7106ACA2_6195_9A1F_41C5_233FAC94B021_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7106ACA2_6195_9A1F_41C5_233FAC94B021_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_7106ACA2_6195_9A1F_41C5_233FAC94B021_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7106ACA2_6195_9A1F_41C5_233FAC94B021_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7106ACA2_6195_9A1F_41C5_233FAC94B021_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7106ACA2_6195_9A1F_41C5_233FAC94B021_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_7106ACA2_6195_9A1F_41C5_233FAC94B021_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7106ACA2_6195_9A1F_41C5_233FAC94B021_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7106ACA2_6195_9A1F_41C5_233FAC94B021_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7106ACA2_6195_9A1F_41C5_233FAC94B021_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_7106ACA2_6195_9A1F_41C5_233FAC94B021_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7106ACA2_6195_9A1F_41C5_233FAC94B021_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7106ACA2_6195_9A1F_41C5_233FAC94B021_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7106ACA2_6195_9A1F_41C5_233FAC94B021_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_7106ACA2_6195_9A1F_41C5_233FAC94B021_t.jpg",
   "right": {
    "levels": [
     {
      "url": "media/panorama_7106ACA2_6195_9A1F_41C5_233FAC94B021_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7106ACA2_6195_9A1F_41C5_233FAC94B021_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7106ACA2_6195_9A1F_41C5_233FAC94B021_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7106ACA2_6195_9A1F_41C5_233FAC94B021_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_7254D1EF_6BDD_CE3C_41B5_8032CFFAED36"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -91.8,
   "backwardYaw": -174.27,
   "distance": 1,
   "panorama": "this.panorama_711C506A_6194_8AEF_41D6_51A41933281D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_709BD995_6195_7A3A_41D6_6F047F114DD0"
  }
 ],
 "hfovMin": "150%",
 "hfovMax": 130,
 "hfov": 360,
 "id": "panorama_711F14CD_6194_8A2A_41B2_8EC7CC97CF78",
 "thumbnailUrl": "media/panorama_711F14CD_6194_8A2A_41B2_8EC7CC97CF78_t.jpg",
 "label": "Bedroom 2",
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_98C39FA4_857E_0F75_41CE_3F6A22CA94CC",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_711F14CD_6194_8A2A_41B2_8EC7CC97CF78_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_711F14CD_6194_8A2A_41B2_8EC7CC97CF78_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_711F14CD_6194_8A2A_41B2_8EC7CC97CF78_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_711F14CD_6194_8A2A_41B2_8EC7CC97CF78_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_711F14CD_6194_8A2A_41B2_8EC7CC97CF78_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_711F14CD_6194_8A2A_41B2_8EC7CC97CF78_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_711F14CD_6194_8A2A_41B2_8EC7CC97CF78_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_711F14CD_6194_8A2A_41B2_8EC7CC97CF78_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_711F14CD_6194_8A2A_41B2_8EC7CC97CF78_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_711F14CD_6194_8A2A_41B2_8EC7CC97CF78_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_711F14CD_6194_8A2A_41B2_8EC7CC97CF78_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_711F14CD_6194_8A2A_41B2_8EC7CC97CF78_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_711F14CD_6194_8A2A_41B2_8EC7CC97CF78_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_711F14CD_6194_8A2A_41B2_8EC7CC97CF78_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_711F14CD_6194_8A2A_41B2_8EC7CC97CF78_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_711F14CD_6194_8A2A_41B2_8EC7CC97CF78_t.jpg",
   "right": {
    "levels": [
     {
      "url": "media/panorama_711F14CD_6194_8A2A_41B2_8EC7CC97CF78_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_711F14CD_6194_8A2A_41B2_8EC7CC97CF78_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_711F14CD_6194_8A2A_41B2_8EC7CC97CF78_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_536577AE_75DF_D23C_41D8_E37D0B4F3EB7",
  "this.overlay_535F999C_75DD_FE1C_41CF_93D068046C77"
 ]
},
{
 "class": "PlayList",
 "id": "playList_98D2FFA4_857E_0F75_41B4_8F34D31EFA7F",
 "items": [
  {
   "media": "this.video_493F3EE3_7E52_D9E5_41D4_B67C42A13526",
   "class": "VideoPlayListItem",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_98D2FFA4_857E_0F75_41B4_8F34D31EFA7F, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_98D2FFA4_857E_0F75_41B4_8F34D31EFA7F, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer"
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 73.85,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_A7E152E1_857E_16EC_41DE_E99B75DA2C32",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 52.33,
  "pitch": 2.23
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_71100113_6194_8A3E_41B1_32BE30E8A7EB_camera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -1.29,
   "backwardYaw": 52.57,
   "distance": 1,
   "panorama": "this.panorama_71100113_6194_8A3E_41B1_32BE30E8A7EB"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -101.83,
   "backwardYaw": 52.57,
   "distance": 1,
   "panorama": "this.panorama_71100113_6194_8A3E_41B1_32BE30E8A7EB"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -106.15,
   "backwardYaw": 27,
   "distance": 1,
   "panorama": "this.panorama_71032291_6194_8E3D_41AA_CAF41E793173"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_71002081_6194_8A1D_41AF_00845E7D32A1"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -101.86,
   "backwardYaw": -169.36,
   "distance": 1,
   "panorama": "this.panorama_716F106D_6195_8AEA_41D2_42589C07E77E"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -106.07,
   "backwardYaw": -132.95,
   "distance": 1,
   "panorama": "this.panorama_7108C42C_6194_8A6A_41D3_2AC813940857"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -101.91,
   "backwardYaw": -39.27,
   "distance": 1,
   "panorama": "this.panorama_710C07D2_6197_F63F_41D1_02379524F040"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -97.76,
   "backwardYaw": -4.5,
   "distance": 1,
   "panorama": "this.panorama_7104C9EC_6197_9DEA_41CA_604B9DD4BB02"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -101.87,
   "backwardYaw": -158.73,
   "distance": 1,
   "panorama": "this.panorama_711C506A_6194_8AEF_41D6_51A41933281D"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -106.24,
   "backwardYaw": 50.32,
   "distance": 1,
   "panorama": "this.panorama_7106ACA2_6195_9A1F_41C5_233FAC94B021"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -97.6,
   "backwardYaw": -58.09,
   "distance": 1,
   "panorama": "this.panorama_710D1E1D_6195_9625_41C1_57EDFD131CC7"
  }
 ],
 "hfovMin": "150%",
 "hfovMax": 130,
 "hfov": 360,
 "id": "panorama_72863FC2_6A55_D264_41D9_8083E0BEF560",
 "thumbnailUrl": "media/panorama_72863FC2_6A55_D264_41D9_8083E0BEF560_t.jpg",
 "label": "Elevator",
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_98C39FA4_857E_0F75_41CE_3F6A22CA94CC",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_72863FC2_6A55_D264_41D9_8083E0BEF560_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 5632,
      "colCount": 11,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_72863FC2_6A55_D264_41D9_8083E0BEF560_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_72863FC2_6A55_D264_41D9_8083E0BEF560_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_72863FC2_6A55_D264_41D9_8083E0BEF560_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_72863FC2_6A55_D264_41D9_8083E0BEF560_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_72863FC2_6A55_D264_41D9_8083E0BEF560_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 5632,
      "colCount": 11,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_72863FC2_6A55_D264_41D9_8083E0BEF560_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_72863FC2_6A55_D264_41D9_8083E0BEF560_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_72863FC2_6A55_D264_41D9_8083E0BEF560_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_72863FC2_6A55_D264_41D9_8083E0BEF560_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_72863FC2_6A55_D264_41D9_8083E0BEF560_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 5632,
      "colCount": 11,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_72863FC2_6A55_D264_41D9_8083E0BEF560_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_72863FC2_6A55_D264_41D9_8083E0BEF560_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_72863FC2_6A55_D264_41D9_8083E0BEF560_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_72863FC2_6A55_D264_41D9_8083E0BEF560_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_72863FC2_6A55_D264_41D9_8083E0BEF560_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 5632,
      "colCount": 11,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_72863FC2_6A55_D264_41D9_8083E0BEF560_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_72863FC2_6A55_D264_41D9_8083E0BEF560_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_72863FC2_6A55_D264_41D9_8083E0BEF560_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_72863FC2_6A55_D264_41D9_8083E0BEF560_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_72863FC2_6A55_D264_41D9_8083E0BEF560_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 5632,
      "colCount": 11,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_72863FC2_6A55_D264_41D9_8083E0BEF560_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_72863FC2_6A55_D264_41D9_8083E0BEF560_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_72863FC2_6A55_D264_41D9_8083E0BEF560_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_72863FC2_6A55_D264_41D9_8083E0BEF560_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_72863FC2_6A55_D264_41D9_8083E0BEF560_t.jpg",
   "right": {
    "levels": [
     {
      "url": "media/panorama_72863FC2_6A55_D264_41D9_8083E0BEF560_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 5632,
      "colCount": 11,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_72863FC2_6A55_D264_41D9_8083E0BEF560_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_72863FC2_6A55_D264_41D9_8083E0BEF560_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_72863FC2_6A55_D264_41D9_8083E0BEF560_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_72863FC2_6A55_D264_41D9_8083E0BEF560_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_72866FC2_6A55_D264_41C3_F327486A1592",
  "this.overlay_54A61EE1_75F6_5224_41CA_208A0BD1697B",
  "this.overlay_54E47A60_75FE_5224_41BB_169B0C8789C8",
  "this.overlay_54CA4B0B_75F6_D3E4_41D9_065A97B3292E",
  "this.overlay_54CAECE4_75F6_362C_41C8_8D6EEE091407",
  "this.overlay_5565E158_75EE_CE64_41B2_4EF5EAF8C80D",
  "this.overlay_55E145BC_75D2_361C_41D7_34E4C80154A1",
  "this.overlay_56521661_75D2_5224_41D2_71FA99BA72B5",
  "this.overlay_5617CAD4_75D6_526C_41D1_730D826A07EF",
  "this.overlay_56EAC034_75D2_4E2C_41B9_59DF8B47C1BA",
  "this.overlay_56CAD6DB_75D2_5264_41D6_C550F552ACC8"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 39.2,
  "pitch": -5.77
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_7108C42C_6194_8A6A_41D3_2AC813940857_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 178.77,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_A7166FE3_857E_0EEC_4183_981B371B3F49",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 9.82,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_A622634E_857E_1734_41C3_6D6C955A3CA4",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -30.27,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_A6104300_857E_172C_41D4_A3E6C5FD62F8",
 "automaticZoomSpeed": 10
},
{
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "fieldOfViewOverlayOutsideOpacity": 0,
 "scaleMode": "fit_inside",
 "fieldOfViewOverlayOutsideColor": "#000000",
 "label": "Maisonette 5th,7th,9th&11th Floor",
 "id": "map_37BB5E31_7A5E_3838_41DB_2011E458730F",
 "thumbnailUrl": "media/map_37BB5E31_7A5E_3838_41DB_2011E458730F_t.jpg",
 "width": 15812,
 "class": "Map",
 "fieldOfViewOverlayRadiusScale": 0.3,
 "image": {
  "levels": [
   {
    "url": "media/map_37BB5E31_7A5E_3838_41DB_2011E458730F.jpeg",
    "width": 3200,
    "class": "ImageResourceLevel",
    "height": 2528
   },
   {
    "url": "media/map_37BB5E31_7A5E_3838_41DB_2011E458730F_lq.jpeg",
    "width": 288,
    "class": "ImageResourceLevel",
    "height": 228,
    "tags": "preload"
   }
  ],
  "class": "ImageResource"
 },
 "maximumZoomFactor": 1.2,
 "minimumZoomFactor": 0.5,
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "initialZoomFactor": 1,
 "height": 12492
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -179.42,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_A7330031_857E_116C_41C8_CB0F948DC869",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -4.5,
   "backwardYaw": -97.76,
   "distance": 1,
   "panorama": "this.panorama_72863FC2_6A55_D264_41D9_8083E0BEF560"
  }
 ],
 "hfovMin": "120%",
 "hfovMax": 130,
 "hfov": 360,
 "id": "panorama_7104C9EC_6197_9DEA_41CA_604B9DD4BB02",
 "thumbnailUrl": "media/panorama_7104C9EC_6197_9DEA_41CA_604B9DD4BB02_t.jpg",
 "label": "Gym",
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_98C39FA4_857E_0F75_41CE_3F6A22CA94CC",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_7104C9EC_6197_9DEA_41CA_604B9DD4BB02_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_7104C9EC_6197_9DEA_41CA_604B9DD4BB02_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_7104C9EC_6197_9DEA_41CA_604B9DD4BB02_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7104C9EC_6197_9DEA_41CA_604B9DD4BB02_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_7104C9EC_6197_9DEA_41CA_604B9DD4BB02_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_7104C9EC_6197_9DEA_41CA_604B9DD4BB02_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_7104C9EC_6197_9DEA_41CA_604B9DD4BB02_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7104C9EC_6197_9DEA_41CA_604B9DD4BB02_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_7104C9EC_6197_9DEA_41CA_604B9DD4BB02_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_7104C9EC_6197_9DEA_41CA_604B9DD4BB02_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_7104C9EC_6197_9DEA_41CA_604B9DD4BB02_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7104C9EC_6197_9DEA_41CA_604B9DD4BB02_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_7104C9EC_6197_9DEA_41CA_604B9DD4BB02_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_7104C9EC_6197_9DEA_41CA_604B9DD4BB02_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_7104C9EC_6197_9DEA_41CA_604B9DD4BB02_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7104C9EC_6197_9DEA_41CA_604B9DD4BB02_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_7104C9EC_6197_9DEA_41CA_604B9DD4BB02_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_7104C9EC_6197_9DEA_41CA_604B9DD4BB02_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_7104C9EC_6197_9DEA_41CA_604B9DD4BB02_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7104C9EC_6197_9DEA_41CA_604B9DD4BB02_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_7104C9EC_6197_9DEA_41CA_604B9DD4BB02_t.jpg",
   "right": {
    "levels": [
     {
      "url": "media/panorama_7104C9EC_6197_9DEA_41CA_604B9DD4BB02_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_7104C9EC_6197_9DEA_41CA_604B9DD4BB02_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_7104C9EC_6197_9DEA_41CA_604B9DD4BB02_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7104C9EC_6197_9DEA_41CA_604B9DD4BB02_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_4FE0BCDD_6AB6_561C_41CC_2E61210B3360"
 ]
},
{
 "class": "PlayList",
 "id": "playList_8AF692C9_84B6_31B5_419F_9996CEAE5CFB",
 "items": [
  {
   "media": "this.video_493F3EE3_7E52_D9E5_41D4_B67C42A13526",
   "class": "VideoPlayListItem",
   "start": "this.viewer_uid98899F85_857E_0F34_41C0_5B5F4FC6E7DFVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_8AF692C9_84B6_31B5_419F_9996CEAE5CFB, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_8AF692C9_84B6_31B5_419F_9996CEAE5CFB, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid98899F85_857E_0F34_41C0_5B5F4FC6E7DFVideoPlayer)",
   "player": "this.viewer_uid98899F85_857E_0F34_41C0_5B5F4FC6E7DFVideoPlayer"
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 82.24,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_A748F11B_857E_1353_41B7_9DEE9658BFE5",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -39.27,
   "backwardYaw": -101.91,
   "distance": 1,
   "panorama": "this.panorama_72863FC2_6A55_D264_41D9_8083E0BEF560"
  }
 ],
 "hfovMin": "150%",
 "hfovMax": 130,
 "hfov": 360,
 "id": "panorama_710C07D2_6197_F63F_41D1_02379524F040",
 "thumbnailUrl": "media/panorama_710C07D2_6197_F63F_41D1_02379524F040_t.jpg",
 "label": "Garden",
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_98C39FA4_857E_0F75_41CE_3F6A22CA94CC",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_710C07D2_6197_F63F_41D1_02379524F040_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_710C07D2_6197_F63F_41D1_02379524F040_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_710C07D2_6197_F63F_41D1_02379524F040_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_710C07D2_6197_F63F_41D1_02379524F040_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_710C07D2_6197_F63F_41D1_02379524F040_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_710C07D2_6197_F63F_41D1_02379524F040_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_710C07D2_6197_F63F_41D1_02379524F040_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_710C07D2_6197_F63F_41D1_02379524F040_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_710C07D2_6197_F63F_41D1_02379524F040_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_710C07D2_6197_F63F_41D1_02379524F040_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_710C07D2_6197_F63F_41D1_02379524F040_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_710C07D2_6197_F63F_41D1_02379524F040_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_710C07D2_6197_F63F_41D1_02379524F040_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_710C07D2_6197_F63F_41D1_02379524F040_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_710C07D2_6197_F63F_41D1_02379524F040_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_710C07D2_6197_F63F_41D1_02379524F040_t.jpg",
   "right": {
    "levels": [
     {
      "url": "media/panorama_710C07D2_6197_F63F_41D1_02379524F040_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_710C07D2_6197_F63F_41D1_02379524F040_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_710C07D2_6197_F63F_41D1_02379524F040_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_4FD64896_6AB2_DEEC_41CA_05D613574FEA"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -132.95,
   "backwardYaw": -106.07,
   "distance": 1,
   "panorama": "this.panorama_72863FC2_6A55_D264_41D9_8083E0BEF560"
  }
 ],
 "hfovMin": "120%",
 "hfovMax": 130,
 "hfov": 360,
 "id": "panorama_7108C42C_6194_8A6A_41D3_2AC813940857",
 "thumbnailUrl": "media/panorama_7108C42C_6194_8A6A_41D3_2AC813940857_t.jpg",
 "label": "Play Area",
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_98C39FA4_857E_0F75_41CE_3F6A22CA94CC",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_7108C42C_6194_8A6A_41D3_2AC813940857_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_7108C42C_6194_8A6A_41D3_2AC813940857_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_7108C42C_6194_8A6A_41D3_2AC813940857_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7108C42C_6194_8A6A_41D3_2AC813940857_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_7108C42C_6194_8A6A_41D3_2AC813940857_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_7108C42C_6194_8A6A_41D3_2AC813940857_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_7108C42C_6194_8A6A_41D3_2AC813940857_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7108C42C_6194_8A6A_41D3_2AC813940857_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_7108C42C_6194_8A6A_41D3_2AC813940857_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_7108C42C_6194_8A6A_41D3_2AC813940857_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_7108C42C_6194_8A6A_41D3_2AC813940857_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7108C42C_6194_8A6A_41D3_2AC813940857_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_7108C42C_6194_8A6A_41D3_2AC813940857_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_7108C42C_6194_8A6A_41D3_2AC813940857_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_7108C42C_6194_8A6A_41D3_2AC813940857_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7108C42C_6194_8A6A_41D3_2AC813940857_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_7108C42C_6194_8A6A_41D3_2AC813940857_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_7108C42C_6194_8A6A_41D3_2AC813940857_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_7108C42C_6194_8A6A_41D3_2AC813940857_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7108C42C_6194_8A6A_41D3_2AC813940857_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_7108C42C_6194_8A6A_41D3_2AC813940857_t.jpg",
   "right": {
    "levels": [
     {
      "url": "media/panorama_7108C42C_6194_8A6A_41D3_2AC813940857_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_7108C42C_6194_8A6A_41D3_2AC813940857_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_7108C42C_6194_8A6A_41D3_2AC813940857_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7108C42C_6194_8A6A_41D3_2AC813940857_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_4F7185BB_6A52_5624_41D1_EE1066AAD561"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -53,
  "pitch": -22.73
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_710D1E1D_6195_9625_41C1_57EDFD131CC7_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_717A2675_6197_96FA_41D1_0E6D0808DCB9_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -99.68,
  "pitch": 0.06
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_72863FC2_6A55_D264_41D9_8083E0BEF560_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 78.09,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_A74470ED_857E_12F4_41E0_D593F8FD4F82",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 121.91,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_A7FA72C1_857E_112F_41CA_C925CE2DD76A",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 42.41,
  "pitch": -0.36
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_7106ACA2_6195_9A1F_41C5_233FAC94B021_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_709BD995_6195_7A3A_41D6_6F047F114DD0_camera",
 "automaticZoomSpeed": 10
},
{
 "duration": 5000,
 "label": "ON SITE (3)",
 "id": "album_349D36DC_7BAE_C86A_41DA_05DFA29EC9FF_2",
 "thumbnailUrl": "media/album_349D36DC_7BAE_C86A_41DA_05DFA29EC9FF_2_t.jpg",
 "width": 1024,
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_349D36DC_7BAE_C86A_41DA_05DFA29EC9FF_2.jpeg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 683
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -1.23,
   "backwardYaw": -138.52,
   "distance": 1,
   "panorama": "this.panorama_717488DE_6197_9A27_41D7_829FAF6E704A"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 52.57,
   "backwardYaw": -1.29,
   "distance": 1,
   "panorama": "this.panorama_72863FC2_6A55_D264_41D9_8083E0BEF560"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 149.73,
   "backwardYaw": 44.59,
   "distance": 1,
   "panorama": "this.panorama_71002081_6194_8A1D_41AF_00845E7D32A1"
  }
 ],
 "hfovMin": "120%",
 "hfovMax": 130,
 "hfov": 360,
 "id": "panorama_71100113_6194_8A3E_41B1_32BE30E8A7EB",
 "thumbnailUrl": "media/panorama_71100113_6194_8A3E_41B1_32BE30E8A7EB_t.jpg",
 "label": "Lobby",
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_98C39FA4_857E_0F75_41CE_3F6A22CA94CC",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_71100113_6194_8A3E_41B1_32BE30E8A7EB_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_71100113_6194_8A3E_41B1_32BE30E8A7EB_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_71100113_6194_8A3E_41B1_32BE30E8A7EB_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_71100113_6194_8A3E_41B1_32BE30E8A7EB_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_71100113_6194_8A3E_41B1_32BE30E8A7EB_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_71100113_6194_8A3E_41B1_32BE30E8A7EB_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_71100113_6194_8A3E_41B1_32BE30E8A7EB_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_71100113_6194_8A3E_41B1_32BE30E8A7EB_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_71100113_6194_8A3E_41B1_32BE30E8A7EB_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_71100113_6194_8A3E_41B1_32BE30E8A7EB_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_71100113_6194_8A3E_41B1_32BE30E8A7EB_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_71100113_6194_8A3E_41B1_32BE30E8A7EB_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_71100113_6194_8A3E_41B1_32BE30E8A7EB_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_71100113_6194_8A3E_41B1_32BE30E8A7EB_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_71100113_6194_8A3E_41B1_32BE30E8A7EB_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_71100113_6194_8A3E_41B1_32BE30E8A7EB_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_71100113_6194_8A3E_41B1_32BE30E8A7EB_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_71100113_6194_8A3E_41B1_32BE30E8A7EB_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_71100113_6194_8A3E_41B1_32BE30E8A7EB_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_71100113_6194_8A3E_41B1_32BE30E8A7EB_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_71100113_6194_8A3E_41B1_32BE30E8A7EB_t.jpg",
   "right": {
    "levels": [
     {
      "url": "media/panorama_71100113_6194_8A3E_41B1_32BE30E8A7EB_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_71100113_6194_8A3E_41B1_32BE30E8A7EB_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_71100113_6194_8A3E_41B1_32BE30E8A7EB_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_71100113_6194_8A3E_41B1_32BE30E8A7EB_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_7827AC91_6AAE_D6E4_41B2_F60EC21925B2",
  "this.overlay_79BA0E99_6AD2_52E4_41D1_C29E2F8BF069",
  "this.overlay_7968D65D_6A72_521C_41BB_048AABCDBBC8"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -127.43,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_A797D1B8_857E_135C_41B3_45EB4759CBF7",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 10.64,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_A7B27244_857E_1135_41D7_79DCA8E2C606",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 88.2,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_A676B38C_857E_1735_41D5_C754185B7AA4",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 108.55,
   "backwardYaw": 167.11,
   "distance": 1,
   "panorama": "this.panorama_717A2675_6197_96FA_41D1_0E6D0808DCB9"
  }
 ],
 "hfovMax": 130,
 "hfov": 360,
 "id": "panorama_7173725B_6197_8E2D_41CC_7631E47EB4E1",
 "thumbnailUrl": "media/panorama_7173725B_6197_8E2D_41CC_7631E47EB4E1_t.jpg",
 "label": "Kitchen",
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_98C39FA4_857E_0F75_41CE_3F6A22CA94CC",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_7173725B_6197_8E2D_41CC_7631E47EB4E1_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7173725B_6197_8E2D_41CC_7631E47EB4E1_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7173725B_6197_8E2D_41CC_7631E47EB4E1_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7173725B_6197_8E2D_41CC_7631E47EB4E1_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_7173725B_6197_8E2D_41CC_7631E47EB4E1_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7173725B_6197_8E2D_41CC_7631E47EB4E1_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7173725B_6197_8E2D_41CC_7631E47EB4E1_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7173725B_6197_8E2D_41CC_7631E47EB4E1_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_7173725B_6197_8E2D_41CC_7631E47EB4E1_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7173725B_6197_8E2D_41CC_7631E47EB4E1_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7173725B_6197_8E2D_41CC_7631E47EB4E1_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7173725B_6197_8E2D_41CC_7631E47EB4E1_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_7173725B_6197_8E2D_41CC_7631E47EB4E1_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7173725B_6197_8E2D_41CC_7631E47EB4E1_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7173725B_6197_8E2D_41CC_7631E47EB4E1_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7173725B_6197_8E2D_41CC_7631E47EB4E1_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_7173725B_6197_8E2D_41CC_7631E47EB4E1_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7173725B_6197_8E2D_41CC_7631E47EB4E1_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7173725B_6197_8E2D_41CC_7631E47EB4E1_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7173725B_6197_8E2D_41CC_7631E47EB4E1_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_7173725B_6197_8E2D_41CC_7631E47EB4E1_t.jpg",
   "right": {
    "levels": [
     {
      "url": "media/panorama_7173725B_6197_8E2D_41CC_7631E47EB4E1_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7173725B_6197_8E2D_41CC_7631E47EB4E1_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7173725B_6197_8E2D_41CC_7631E47EB4E1_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7173725B_6197_8E2D_41CC_7631E47EB4E1_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_553A0449_75D2_D664_41D2_FDA3802D9238"
 ]
},
{
 "gyroscopeEnabled": true,
 "buttonCardboardView": "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "displayPlaybackBar": true,
 "viewerArea": "this.MainViewer",
 "class": "PanoramaPlayer",
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "gyroscopeVerticalDraggingEnabled": true,
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "mouseControlMode": "drag_acceleration"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 47.05,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_A7A6A264_857E_11F4_41B5_171B625121B4",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 57.22,
  "pitch": -3.58
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_716F106D_6195_8AEA_41D2_42589C07E77E_camera",
 "automaticZoomSpeed": 10
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_910EC3A5_855E_17F2_41D5_7E2D29C2AED4.ogg",
  "mp3Url": "media/audio_910EC3A5_855E_17F2_41D5_7E2D29C2AED4.mp3"
 },
 "id": "audio_910EC3A5_855E_17F2_41D5_7E2D29C2AED4",
 "data": {
  "label": "Luxury 2"
 }
},
{
 "duration": 5000,
 "label": "ON SITE (5)",
 "id": "album_349D36DC_7BAE_C86A_41DA_05DFA29EC9FF_4",
 "thumbnailUrl": "media/album_349D36DC_7BAE_C86A_41DA_05DFA29EC9FF_4_t.jpg",
 "width": 2048,
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_349D36DC_7BAE_C86A_41DA_05DFA29EC9FF_4.jpeg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1364
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 73.93,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_A632A32F_857E_1774_41E0_AF20DB64AB53",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -127.43,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_A79A91F6_857E_12D4_41DC_CCEAEC812937",
 "automaticZoomSpeed": 10
},
{
 "duration": 5000,
 "label": "ON SITE (1)",
 "id": "album_349D36DC_7BAE_C86A_41DA_05DFA29EC9FF_0",
 "thumbnailUrl": "media/album_349D36DC_7BAE_C86A_41DA_05DFA29EC9FF_0_t.jpg",
 "width": 2048,
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_349D36DC_7BAE_C86A_41DA_05DFA29EC9FF_0.jpeg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1364
},
{
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "MainViewer",
 "left": 0,
 "toolTipOpacity": 0.5,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 13,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "width": "100%",
 "minHeight": 50,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 7,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 0,
 "playbackBarBorderRadius": 0,
 "paddingRight": 0,
 "minWidth": 100,
 "playbackBarHeadBorderRadius": 0,
 "class": "ViewerArea",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "height": "100%",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "toolTipShadowOpacity": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Georgia",
 "transitionMode": "blending",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "paddingLeft": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "playbackBarHeadShadowColor": "#000000",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "progressHeight": 10,
 "borderSize": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowHorizontalLength": 0,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "top": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingTop": 7,
 "toolTipPaddingLeft": 10,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 10,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipBorderRadius": 3,
 "paddingTop": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "borderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "paddingBottom": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 5,
 "data": {
  "name": "Main Viewer"
 },
 "shadow": false,
 "playbackBarHeadOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF"
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Image_366C2F02_6DD2_7ABA_4192_AE71FA0A303E"
 ],
 "id": "Container_22BB12F4_3075_D173_4184_EC3BC4955417",
 "left": 70,
 "width": 550,
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "verticalAlign": "top",
 "top": 34,
 "contentOpaque": false,
 "height": 140,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "class": "Container",
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "--STICKER"
 },
 "propagateClick": true,
 "shadow": false,
 "overflow": "visible",
 "paddingLeft": 0
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "scrollBarColor": "#000000",
 "width": 115.05,
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "right": "0%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "height": 641,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "class": "Container",
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "-- SETTINGS"
 },
 "propagateClick": true,
 "overflow": "scroll",
 "paddingLeft": 0,
 "shadow": false
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
  "this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD"
 ],
 "id": "Container_4041C033_7558_FB6E_41CE_BFE427F3AF92",
 "left": "0%",
 "width": 330,
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "verticalAlign": "top",
 "top": "0%",
 "paddingRight": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundOpacity": 0,
 "class": "Container",
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "--- LEFT PANEL 4 (Community)"
 },
 "height": "100%",
 "propagateClick": false,
 "shadow": false,
 "overflow": "scroll",
 "paddingLeft": 0
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "creationPolicy": "inAdvance",
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "paddingRight": 0,
 "class": "Container",
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "--INFO photo"
 },
 "visible": false,
 "propagateClick": true,
 "overflow": "scroll",
 "paddingLeft": 0,
 "shadow": false
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "creationPolicy": "inAdvance",
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "paddingRight": 0,
 "class": "Container",
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "--PANORAMA LIST"
 },
 "visible": false,
 "propagateClick": true,
 "overflow": "scroll",
 "paddingLeft": 0,
 "shadow": false
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "creationPolicy": "inAdvance",
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "paddingRight": 0,
 "class": "Container",
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "--LOCATION"
 },
 "visible": false,
 "propagateClick": true,
 "overflow": "scroll",
 "paddingLeft": 0,
 "shadow": false
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "creationPolicy": "inAdvance",
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "paddingRight": 0,
 "class": "Container",
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "--FLOORPLAN"
 },
 "visible": false,
 "propagateClick": true,
 "overflow": "scroll",
 "paddingLeft": 0,
 "shadow": false
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "creationPolicy": "inAdvance",
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "paddingRight": 0,
 "class": "Container",
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "--PHOTOALBUM"
 },
 "visible": false,
 "propagateClick": true,
 "overflow": "scroll",
 "paddingLeft": 0,
 "shadow": false
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "children": [
  "this.Container_1E19923C_57F1_802D_41C4_18DBE75E48C1",
  "this.Container_1E18A23C_57F1_802D_41B9_D08FA26C7F4C"
 ],
 "id": "Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9",
 "left": "0%",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "right": "0%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "creationPolicy": "inAdvance",
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "paddingRight": 0,
 "class": "Container",
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, false, 0, null, null, false)",
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "--REALTOR"
 },
 "visible": false,
 "propagateClick": true,
 "overflow": "scroll",
 "paddingLeft": 0,
 "shadow": false
},
{
 "paddingLeft": 0,
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "width": 58,
 "borderSize": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "transparencyActive": true,
 "verticalAlign": "middle",
 "height": 58,
 "mode": "toggle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "propagateClick": true,
 "shadow": false,
 "cursor": "hand",
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png"
},
{
 "paddingLeft": 0,
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "width": 58,
 "borderSize": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "transparencyActive": true,
 "verticalAlign": "middle",
 "height": 58,
 "mode": "toggle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "data": {
  "name": "IconButton MUTE"
 },
 "propagateClick": true,
 "shadow": false,
 "cursor": "hand",
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png"
},
{
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "MapViewer",
 "left": 0,
 "toolTipOpacity": 1,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 12,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "width": "100%",
 "minHeight": 1,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 0,
 "playbackBarBorderRadius": 0,
 "paddingRight": 0,
 "minWidth": 1,
 "playbackBarHeadBorderRadius": 0,
 "class": "ViewerArea",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "height": "99.975%",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "propagateClick": true,
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontFamily": "Arial",
 "playbackBarHeadBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "paddingLeft": 0,
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "playbackBarHeadShadowColor": "#000000",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "borderSize": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowHorizontalLength": 0,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "top": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipBorderRadius": 3,
 "paddingTop": 0,
 "click": "this.setMediaBehaviour(this.playList_98A4CF95_857E_0F54_41D0_0E9112921C47, 0)",
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "borderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "paddingBottom": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 0,
 "data": {
  "name": "Floor Plan"
 },
 "shadow": false,
 "playbackBarHeadOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF"
},
{
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "viewer_uid98899F85_857E_0F34_41C0_5B5F4FC6E7DF",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "width": "100%",
 "minHeight": 50,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 0,
 "playbackBarBorderRadius": 0,
 "paddingRight": 0,
 "minWidth": 100,
 "playbackBarHeadBorderRadius": 0,
 "class": "ViewerArea",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "height": "100%",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "transitionMode": "blending",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "paddingLeft": 0,
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "playbackBarHeadShadowColor": "#000000",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "borderSize": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowHorizontalLength": 0,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "paddingTop": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "paddingBottom": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 0,
 "data": {
  "name": "ViewerArea17055"
 },
 "shadow": false,
 "playbackBarHeadOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF"
},
{
 "media": "this.panorama_7106ACA2_6195_9A1F_41C5_233FAC94B021",
 "class": "PanoramaPlayListItem",
 "camera": "this.panorama_7106ACA2_6195_9A1F_41C5_233FAC94B021_camera",
 "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_98C8DFB4_857E_0F54_41C1_8CBC6B080671"
},
{
 "media": "this.panorama_716F106D_6195_8AEA_41D2_42589C07E77E",
 "class": "PanoramaPlayListItem",
 "camera": "this.panorama_716F106D_6195_8AEA_41D2_42589C07E77E_camera",
 "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_98F73FB4_857E_0F54_41D2_6201D810F19D"
},
{
 "media": "this.panorama_710D1E1D_6195_9625_41C1_57EDFD131CC7",
 "class": "PanoramaPlayListItem",
 "camera": "this.panorama_710D1E1D_6195_9625_41C1_57EDFD131CC7_camera",
 "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_98C9BFB4_857E_0F54_41D0_A917FFE049D4"
},
{
 "media": "this.panorama_7108C42C_6194_8A6A_41D3_2AC813940857",
 "class": "PanoramaPlayListItem",
 "camera": "this.panorama_7108C42C_6194_8A6A_41D3_2AC813940857_camera",
 "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_98F67FB4_857E_0F54_41C3_403226BB580E"
},
{
 "media": "this.panorama_710C07D2_6197_F63F_41D1_02379524F040",
 "class": "PanoramaPlayListItem",
 "camera": "this.panorama_710C07D2_6197_F63F_41D1_02379524F040_camera",
 "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_98F6BFB4_857E_0F54_41D3_91752BCA6385"
},
{
 "media": "this.panorama_7104C9EC_6197_9DEA_41CA_604B9DD4BB02",
 "class": "PanoramaPlayListItem",
 "camera": "this.panorama_7104C9EC_6197_9DEA_41CA_604B9DD4BB02_camera",
 "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_98C9DFB4_857E_0F54_41C6_E635AADD085D"
},
{
 "media": "this.panorama_71032291_6194_8E3D_41AA_CAF41E793173",
 "class": "PanoramaPlayListItem",
 "camera": "this.panorama_71032291_6194_8E3D_41AA_CAF41E793173_camera",
 "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_98C91FB4_857E_0F54_41BC_0BC3329F429B"
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_72863FC2_6A55_D264_41D9_8083E0BEF560, this.camera_A7E152E1_857E_16EC_41DE_E99B75DA2C32); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "ELEVATOR"
  }
 ],
 "data": {
  "label": "ELEVATOR"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.25,
   "image": "this.AnimatedImageResource_5A83B708_75D5_D3E4_41D5_A1332089EBEA",
   "pitch": -3.68,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 27,
   "distance": 100
  }
 ],
 "id": "overlay_4EBDA1A2_6ABD_CE24_41C5_2A11C9E6E41B",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 12.25,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 27,
   "image": {
    "levels": [
     {
      "url": "media/panorama_71032291_6194_8E3D_41AA_CAF41E793173_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.68
  }
 ]
},
{
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "toolTipOpacity": 1,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 12,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "width": "100%",
 "minHeight": 1,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 0,
 "playbackBarBorderRadius": 0,
 "paddingRight": 0,
 "minWidth": 1,
 "playbackBarHeadBorderRadius": 0,
 "class": "ViewerArea",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "height": "100%",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "propagateClick": true,
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontFamily": "Arial",
 "playbackBarHeadBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "paddingLeft": 0,
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "playbackBarHeadShadowColor": "#000000",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "borderSize": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowHorizontalLength": 0,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "top": "0%",
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipBorderRadius": 3,
 "paddingTop": 0,
 "click": "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist.set('selectedIndex', -1); }, this); this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist.set('selectedIndex', 17)",
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "borderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "paddingBottom": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 0,
 "data": {
  "name": "Viewer photoalbum 1"
 },
 "shadow": false,
 "playbackBarHeadOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF"
},
{
 "cursor": "hand",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "borderSize": 0,
 "horizontalAlign": "center",
 "minHeight": 50,
 "transparencyActive": false,
 "verticalAlign": "middle",
 "top": "20%",
 "width": "14.22%",
 "bottom": "20%",
 "paddingRight": 0,
 "mode": "push",
 "backgroundOpacity": 0,
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "borderRadius": 0,
 "minWidth": 50,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton <"
 },
 "propagateClick": true,
 "shadow": false,
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png"
},
{
 "cursor": "hand",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "right": 10,
 "borderSize": 0,
 "horizontalAlign": "center",
 "minHeight": 50,
 "transparencyActive": false,
 "verticalAlign": "middle",
 "top": "20%",
 "width": "14.22%",
 "bottom": "20%",
 "paddingRight": 0,
 "mode": "push",
 "backgroundOpacity": 0,
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "borderRadius": 0,
 "minWidth": 50,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton >"
 },
 "propagateClick": true,
 "shadow": false,
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png"
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_72863FC2_6A55_D264_41D9_8083E0BEF560, this.camera_A654A35E_857E_17D4_41BF_C071CDC06F16); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "ELEVATOR"
  }
 ],
 "data": {
  "label": "ELEVATOR"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.27,
   "image": "this.AnimatedImageResource_5A83F708_75D5_D3E4_41CC_FF4696AE9984",
   "pitch": -1.23,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -158.73,
   "distance": 100
  }
 ],
 "id": "overlay_4DBBAE72_6AD2_D224_419B_2AED40F52DAE",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 12.27,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -158.73,
   "image": {
    "levels": [
     {
      "url": "media/panorama_711C506A_6194_8AEF_41D6_51A41933281D_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.23
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_711F14CD_6194_8A2A_41B2_8EC7CC97CF78, this.camera_A676B38C_857E_1735_41D5_C754185B7AA4); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "BEDROOM"
  }
 ],
 "data": {
  "label": "BEDROOM"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.16,
   "image": "this.AnimatedImageResource_5AFC6708_75D5_D3E4_41B9_30006B34B052",
   "pitch": -15.95,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -174.27,
   "distance": 50
  }
 ],
 "id": "overlay_51B617D9_75B2_3264_41C5_AAF01FBCA921",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 14.16,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -174.27,
   "image": {
    "levels": [
     {
      "url": "media/panorama_711C506A_6194_8AEF_41D6_51A41933281D_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.95
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_717A2675_6197_96FA_41D1_0E6D0808DCB9, this.camera_A644437D_857E_17D4_41B7_39F8D595978F); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "FAMILY LOUNGE"
  }
 ],
 "data": {
  "label": "FAMILY LOUNGE"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.71,
   "image": "this.AnimatedImageResource_5AFCC708_75D5_D3E4_41C4_DDB0CA88CA0A",
   "pitch": -18.82,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -147.27,
   "distance": 50
  }
 ],
 "id": "overlay_553393CD_75D6_527C_41CE_F901D0C92E24",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 14.71,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -147.27,
   "image": {
    "levels": [
     {
      "url": "media/panorama_711C506A_6194_8AEF_41D6_51A41933281D_0_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.82
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "SWIMMING POOL"
  }
 ],
 "data": {
  "label": "SWIMMING POOL"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 27.84,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_717488DE_6197_9A27_41D7_829FAF6E704A_0_HS_2_0.png",
      "width": 1000,
      "class": "ImageResourceLevel",
      "height": 1223
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 39.35,
   "yaw": -108
  }
 ],
 "id": "overlay_7B11D5FE_6A5E_D61C_41B7_A9B5AA6C0D6C",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 27.84,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -108,
   "image": {
    "levels": [
     {
      "url": "media/panorama_717488DE_6197_9A27_41D7_829FAF6E704A_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 19
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 39.35
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_71100113_6194_8A3E_41B1_32BE30E8A7EB, this.camera_A7166FE3_857E_0EEC_4183_981B371B3F49); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "ENTRANCE"
  }
 ],
 "data": {
  "label": "ENTRANCE"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.44,
   "image": "this.AnimatedImageResource_5CD9635A_75B3_D264_41B1_EB459F43C334",
   "pitch": -2.93,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -138.52,
   "distance": 100
  }
 ],
 "id": "overlay_799B633E_6AB2_521C_4165_A63E7BF89846",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 5.44,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -138.52,
   "image": {
    "levels": [
     {
      "url": "media/panorama_717488DE_6197_9A27_41D7_829FAF6E704A_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.93
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "2 BEDROOM"
  }
 ],
 "data": {
  "label": "2 BEDROOM"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 32.32,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_717488DE_6197_9A27_41D7_829FAF6E704A_0_HS_5_0.png",
      "width": 1000,
      "class": "ImageResourceLevel",
      "height": 1224
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 26.12,
   "yaw": -133.19
  }
 ],
 "id": "overlay_703524A9_6BDF_D624_41D0_AED8EFDF417A",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 32.32,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -133.19,
   "image": {
    "levels": [
     {
      "url": "media/panorama_717488DE_6197_9A27_41D7_829FAF6E704A_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 19
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 26.12
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "RESTAURANT"
  }
 ],
 "data": {
  "label": "RESTAURANT"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 34.84,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_717488DE_6197_9A27_41D7_829FAF6E704A_0_HS_6_0.png",
      "width": 979,
      "class": "ImageResourceLevel",
      "height": 1224
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.67,
   "yaw": -107.43
  }
 ],
 "id": "overlay_77BA92E3_6BAE_5224_41D0_F0F91D7694E2",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 34.84,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -107.43,
   "image": {
    "levels": [
     {
      "url": "media/panorama_717488DE_6197_9A27_41D7_829FAF6E704A_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 20
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.67
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": -128,
 "image": {
  "levels": [
   {
    "url": "media/panorama_717488DE_6197_9A27_41D7_829FAF6E704A_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45,
 "id": "panorama_717488DE_6197_9A27_41D7_829FAF6E704A_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7102D860_6194_9A1A_41D3_15B34249EE93, this.camera_A7330031_857E_116C_41C8_CB0F948DC869); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "CINEMA"
  }
 ],
 "data": {
  "label": "CINEMA"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.26,
   "image": "this.AnimatedImageResource_5AFD1708_75D5_D3E4_41AD_9CCC0543C2D2",
   "pitch": -2.05,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -170.18,
   "distance": 100
  }
 ],
 "id": "overlay_4EBB6B68_6AB2_7224_419B_171C8E6F7AF3",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 12.26,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -170.18,
   "image": {
    "levels": [
     {
      "url": "media/panorama_717A2675_6197_96FA_41D1_0E6D0808DCB9_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.05
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7173725B_6197_8E2D_41CC_7631E47EB4E1, this.camera_A726C050_857E_112D_41BB_94F9309AE606); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "KITCHEN"
  }
 ],
 "data": {
  "label": "KITCHEN"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.83,
   "image": "this.AnimatedImageResource_5AFDC708_75D5_D3E4_41CD_AA2081A5DBC3",
   "pitch": 4.3,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 167.11,
   "distance": 100
  }
 ],
 "id": "overlay_4C12EA10_6AD2_5DE4_41BD_D00CE7429988",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 11.83,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 167.11,
   "image": {
    "levels": [
     {
      "url": "media/panorama_717A2675_6197_96FA_41D1_0E6D0808DCB9_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.3
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_711C506A_6194_8AEF_41D6_51A41933281D, this.camera_A72D907F_857E_11D4_41D8_DEB32AF397EE); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "LIVING ROOM"
  }
 ],
 "data": {
  "label": "LIVING ROOM"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.23,
   "image": "this.AnimatedImageResource_432C17E3_75B2_7224_41D1_703078EB394B",
   "pitch": -4.5,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 90,
   "distance": 100
  }
 ],
 "id": "overlay_592CCDBE_75B7_D61C_41DC_11123008700D",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 12.23,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 90,
   "image": {
    "levels": [
     {
      "url": "media/panorama_717A2675_6197_96FA_41D1_0E6D0808DCB9_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.5
  }
 ]
},
{
 "class": "PhotoPlayList",
 "id": "album_349D36DC_7BAE_C86A_41DA_05DFA29EC9FF_AlbumPlayList",
 "items": [
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "targetPosition": {
     "x": "0.74",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.42"
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   },
   "media": "this.album_349D36DC_7BAE_C86A_41DA_05DFA29EC9FF_0",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "targetPosition": {
     "x": "0.68",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.45"
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   },
   "media": "this.album_349D36DC_7BAE_C86A_41DA_05DFA29EC9FF_1",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "targetPosition": {
     "x": "0.70",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.42"
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   },
   "media": "this.album_349D36DC_7BAE_C86A_41DA_05DFA29EC9FF_2",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "targetPosition": {
     "x": "0.71",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.36"
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   },
   "media": "this.album_349D36DC_7BAE_C86A_41DA_05DFA29EC9FF_3",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "targetPosition": {
     "x": "0.51",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.74"
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   },
   "media": "this.album_349D36DC_7BAE_C86A_41DA_05DFA29EC9FF_4",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "targetPosition": {
     "x": "0.67",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.60"
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   },
   "media": "this.album_349D36DC_7BAE_C86A_41DA_05DFA29EC9FF_5",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "targetPosition": {
     "x": "0.38",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.47"
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   },
   "media": "this.album_349D36DC_7BAE_C86A_41DA_05DFA29EC9FF_6",
   "class": "PhotoPlayListItem"
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_72863FC2_6A55_D264_41D9_8083E0BEF560, this.camera_A75190BE_857E_1154_41CA_0B205C21A1D1); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "ELEVATOR"
  }
 ],
 "data": {
  "label": "ELEVATOR"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.79,
   "image": "this.AnimatedImageResource_4BDD5263_6A5E_3224_41C0_D0288C1AF37E",
   "pitch": -7.36,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -169.36,
   "distance": 100
  }
 ],
 "id": "overlay_7230CE34_6BB2_722C_41D8_5DB210466819",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 13.79,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -169.36,
   "image": {
    "levels": [
     {
      "url": "media/panorama_716F106D_6195_8AEA_41D2_42589C07E77E_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.36
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_71100113_6194_8A3E_41B1_32BE30E8A7EB, this.camera_A6104300_857E_172C_41D4_A3E6C5FD62F8); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "ENTRANCE"
  }
 ],
 "data": {
  "label": "ENTRANCE"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.27,
   "image": "this.AnimatedImageResource_4BDC2263_6A5E_3224_41C8_AE800A2CCB31",
   "pitch": -1.64,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 44.59,
   "distance": 100
  }
 ],
 "id": "overlay_77ACFFB1_6BB2_5224_41C2_E5E346F7695F",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 12.27,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 44.59,
   "image": {
    "levels": [
     {
      "url": "media/panorama_71002081_6194_8A1D_41AF_00845E7D32A1_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.64
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_72863FC2_6A55_D264_41D9_8083E0BEF560, this.camera_A7634189_857E_133C_41D8_982A902F318B); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "ELEVATOR"
  }
 ],
 "data": {
  "label": "ELEVATOR"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.18,
   "image": "this.AnimatedImageResource_4BDD1263_6A5E_3224_41B6_B9690776A34C",
   "pitch": -6.95,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -58.09,
   "distance": 100
  }
 ],
 "id": "overlay_72E10CC8_6BBE_3664_41D7_E402F7FC82B2",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 12.18,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -58.09,
   "image": {
    "levels": [
     {
      "url": "media/panorama_710D1E1D_6195_9625_41C1_57EDFD131CC7_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.95
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_717A2675_6197_96FA_41D1_0E6D0808DCB9, this.camera_A622634E_857E_1734_41C3_6D6C955A3CA4); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "FAMILY LOUNGE"
  }
 ],
 "data": {
  "label": "FAMILY LOUNGE"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.65,
   "image": "this.AnimatedImageResource_5AFEC708_75D5_D3E4_41D1_91119D1712C0",
   "pitch": -3.35,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 0.58,
   "distance": 100
  }
 ],
 "id": "overlay_539156B6_75D7_F22C_419E_CAE6DE8AFCC6",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 14.65,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.58,
   "image": {
    "levels": [
     {
      "url": "media/panorama_7102D860_6194_9A1A_41D3_15B34249EE93_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.35
  }
 ]
},
{
 "video": {
  "width": 1280,
  "class": "VideoResource",
  "height": 720,
  "mp4Url": "media/video_493F3EE3_7E52_D9E5_41D4_B67C42A13526.mp4"
 },
 "hfov": 77.2,
 "id": "overlay_4EB33D37_7E52_386D_41D0_863CB57D9026",
 "enabledInCardboard": true,
 "autoplay": false,
 "loop": true,
 "image": {
  "levels": [
   {
    "url": "media/overlay_4EB33D37_7E52_386D_41D0_863CB57D9026_t.jpg",
    "width": 1920,
    "class": "ImageResourceLevel",
    "height": 1080
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 0.52,
 "useHandCursor": true,
 "class": "VideoPanoramaOverlay",
 "yaw": 98.24,
 "data": {
  "label": "Video"
 },
 "rotationY": -26.98,
 "mouseEnter": "this.overlay_4EB33D37_7E52_386D_41D0_863CB57D9026.play()",
 "vfov": 28.7,
 "videoVisibleOnStop": false,
 "distance": 50,
 "rotationX": -3.37,
 "roll": 0.04,
 "blending": 0,
 "stateChange": "if(this.overlay_4EB33D37_7E52_386D_41D0_863CB57D9026.get('state') == 'playing'){ this.pauseGlobalAudios('overlay_4EB33D37_7E52_386D_41D0_863CB57D9026', [this.overlay_4EB33D37_7E52_386D_41D0_863CB57D9026]); } else { this.resumeGlobalAudios('overlay_4EB33D37_7E52_386D_41D0_863CB57D9026'); }"
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_72863FC2_6A55_D264_41D9_8083E0BEF560, this.camera_A66663AC_857E_1774_41D1_1D2EBF4E3A24); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "ELEVATOR"
  }
 ],
 "data": {
  "label": "ELEVATOR"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.21,
   "image": "this.AnimatedImageResource_4BDDC263_6A5E_3224_41C3_81046174D5E5",
   "pitch": -5.73,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 50.32,
   "distance": 100
  }
 ],
 "id": "overlay_7254D1EF_6BDD_CE3C_41B5_8032CFFAED36",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 12.21,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 50.32,
   "image": {
    "levels": [
     {
      "url": "media/panorama_7106ACA2_6195_9A1F_41C5_233FAC94B021_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.73
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_711C506A_6194_8AEF_41D6_51A41933281D, this.camera_A602E30F_857E_1733_41D4_D19345DE4353); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "LIVING ROOM"
  }
 ],
 "data": {
  "label": "LIVING ROOM"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.4,
   "image": "this.AnimatedImageResource_5AFE2708_75D5_D3E4_41CF_161B64CC68F4",
   "pitch": -0.25,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -91.8,
   "distance": 100
  }
 ],
 "id": "overlay_536577AE_75DF_D23C_41D8_E37D0B4F3EB7",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 14.4,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -91.8,
   "image": {
    "levels": [
     {
      "url": "media/panorama_711F14CD_6194_8A2A_41B2_8EC7CC97CF78_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.25
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "BEDRROM 2"
  }
 ],
 "data": {
  "label": "BEDRROM 2"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.4,
   "image": "this.AnimatedImageResource_5AFE6708_75D5_D3E4_41C8_A15F93AF7CC5",
   "pitch": 1.39,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 19.88,
   "distance": 100
  }
 ],
 "id": "overlay_535F999C_75DD_FE1C_41CF_93D068046C77",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 14.4,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 19.88,
   "image": {
    "levels": [
     {
      "url": "media/panorama_711F14CD_6194_8A2A_41B2_8EC7CC97CF78_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.39
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_71100113_6194_8A3E_41B1_32BE30E8A7EB, this.camera_A797D1B8_857E_135C_41B3_45EB4759CBF7); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "EXIT"
  }
 ],
 "data": {
  "label": "EXIT"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 47.78,
   "image": "this.AnimatedImageResource_4BDC8263_6A5E_3224_41D4_1ADA2A6F17A1",
   "pitch": 0.99,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -1.29,
   "distance": 100
  }
 ],
 "id": "overlay_72866FC2_6A55_D264_41C3_F327486A1592",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 47.78,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -1.29,
   "image": {
    "levels": [
     {
      "url": "media/panorama_72863FC2_6A55_D264_41D9_8083E0BEF560_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.99
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7106ACA2_6195_9A1F_41C5_233FAC94B021, this.camera_A7C9B2B2_857E_116C_41DE_7A64CCA9C0B6); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "RESTAURANT"
  }
 ],
 "data": {
  "label": "RESTAURANT"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.79,
   "image": "this.AnimatedImageResource_5A8636F8_75D5_D224_41D5_4D44016747C6",
   "pitch": 18.95,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -106.24,
   "distance": 100
  }
 ],
 "id": "overlay_54A61EE1_75F6_5224_41CA_208A0BD1697B",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 3.79,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -106.24,
   "image": {
    "levels": [
     {
      "url": "media/panorama_72863FC2_6A55_D264_41D9_8083E0BEF560_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 18.95
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_716F106D_6195_8AEA_41D2_42589C07E77E, this.camera_A7B27244_857E_1135_41D7_79DCA8E2C606); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "SALON"
  }
 ],
 "data": {
  "label": "SALON"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.27,
   "image": "this.AnimatedImageResource_5A86A6F8_75D5_D224_41D3_C27C34A6AF09",
   "pitch": 19,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -101.86,
   "distance": 100
  }
 ],
 "id": "overlay_54E47A60_75FE_5224_41BB_169B0C8789C8",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 3.27,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -101.86,
   "image": {
    "levels": [
     {
      "url": "media/panorama_72863FC2_6A55_D264_41D9_8083E0BEF560_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 19
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_710D1E1D_6195_9625_41C1_57EDFD131CC7, this.camera_A7FA72C1_857E_112F_41CA_C925CE2DD76A); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "SPA"
  }
 ],
 "data": {
  "label": "SPA"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.03,
   "image": "this.AnimatedImageResource_5A86F6F8_75D5_D224_41C8_F1470595D78A",
   "pitch": 18.93,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -97.6,
   "distance": 100
  }
 ],
 "id": "overlay_54CA4B0B_75F6_D3E4_41D9_065A97B3292E",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 3.03,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -97.6,
   "image": {
    "levels": [
     {
      "url": "media/panorama_72863FC2_6A55_D264_41D9_8083E0BEF560_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 18.93
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7108C42C_6194_8A6A_41D3_2AC813940857, this.camera_A7A6A264_857E_11F4_41B5_171B625121B4); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "PLAY AREA"
  }
 ],
 "data": {
  "label": "PLAY AREA"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.95,
   "image": "this.AnimatedImageResource_5A8736F8_75D5_D224_41D8_41641F79A1C7",
   "pitch": 14.11,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -106.07,
   "distance": 100
  }
 ],
 "id": "overlay_54CAECE4_75F6_362C_41C8_8D6EEE091407",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 2.95,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -106.07,
   "image": {
    "levels": [
     {
      "url": "media/panorama_72863FC2_6A55_D264_41D9_8083E0BEF560_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 14.11
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_710C07D2_6197_F63F_41D1_02379524F040, this.camera_A7ADD273_857E_11EC_41DE_C8B080CD30E8); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "GARDEN AREA"
  }
 ],
 "data": {
  "label": "GARDEN AREA"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.8,
   "image": "this.AnimatedImageResource_5A8796F8_75D5_D224_41D0_6ADB115E6DE7",
   "pitch": 14.11,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -101.91,
   "distance": 100
  }
 ],
 "id": "overlay_5565E158_75EE_CE64_41B2_4EF5EAF8C80D",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 2.8,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -101.91,
   "image": {
    "levels": [
     {
      "url": "media/panorama_72863FC2_6A55_D264_41D9_8083E0BEF560_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 14.11
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7104C9EC_6197_9DEA_41CA_604B9DD4BB02, this.camera_A7DE0283_857E_112C_41CA_6CB572B8D633); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "GYM"
  }
 ],
 "data": {
  "label": "GYM"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.95,
   "image": "this.AnimatedImageResource_5A87C6F8_75D5_D224_41D6_CCB850D65447",
   "pitch": 14.07,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -97.76,
   "distance": 100
  }
 ],
 "id": "overlay_55E145BC_75D2_361C_41D7_34E4C80154A1",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 2.95,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -97.76,
   "image": {
    "levels": [
     {
      "url": "media/panorama_72863FC2_6A55_D264_41D9_8083E0BEF560_0_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 14.07
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_71032291_6194_8E3D_41AA_CAF41E793173, this.camera_A78ED225_857E_1174_41DE_095BC39B1E6F); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "SWIMMING POOL"
  }
 ],
 "data": {
  "label": "SWIMMING POOL"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.85,
   "image": "this.AnimatedImageResource_5A8046F8_75D5_D224_419A_BFBFC40A3AEE",
   "pitch": 9.21,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -106.15,
   "distance": 100
  }
 ],
 "id": "overlay_56521661_75D2_5224_41D2_71FA99BA72B5",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 2.85,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -106.15,
   "image": {
    "levels": [
     {
      "url": "media/panorama_72863FC2_6A55_D264_41D9_8083E0BEF560_0_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 9.21
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_711C506A_6194_8AEF_41D6_51A41933281D, this.camera_A7C29292_857E_112D_41CA_FDA78B350B1A); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "APARTMENT"
  }
 ],
 "data": {
  "label": "APARTMENT"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.77,
   "image": "this.AnimatedImageResource_5A809708_75D5_D3E4_41D5_BACC831CBE22",
   "pitch": 9.25,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -101.87,
   "distance": 100
  }
 ],
 "id": "overlay_5617CAD4_75D6_526C_41D1_730D826A07EF",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 2.77,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -101.87,
   "image": {
    "levels": [
     {
      "url": "media/panorama_72863FC2_6A55_D264_41D9_8083E0BEF560_0_HS_9_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 9.25
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "CAR PARK"
  }
 ],
 "data": {
  "label": "CAR PARK"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.61,
   "image": "this.AnimatedImageResource_5A80F708_75D5_D3E4_41C3_787BE379AA3E",
   "pitch": 9.28,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -97.72,
   "distance": 100
  }
 ],
 "id": "overlay_56EAC034_75D2_4E2C_41B9_59DF8B47C1BA",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 2.61,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -97.72,
   "image": {
    "levels": [
     {
      "url": "media/panorama_72863FC2_6A55_D264_41D9_8083E0BEF560_0_HS_10_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 9.28
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_71100113_6194_8A3E_41B1_32BE30E8A7EB, this.camera_A79A91F6_857E_12D4_41DC_CCEAEC812937); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "GROUND FLOOR"
  }
 ],
 "data": {
  "label": "GROUND FLOOR"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.51,
   "image": "this.AnimatedImageResource_5A815708_75D5_D3E4_41CB_5BE67596CFAB",
   "pitch": 4.34,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -101.83,
   "distance": 100
  }
 ],
 "id": "overlay_56CAD6DB_75D2_5264_41D6_C550F552ACC8",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 3.51,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -101.83,
   "image": {
    "levels": [
     {
      "url": "media/panorama_72863FC2_6A55_D264_41D9_8083E0BEF560_0_HS_11_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.34
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_72863FC2_6A55_D264_41D9_8083E0BEF560, this.camera_A748F11B_857E_1353_41B7_9DEE9658BFE5); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "ELEVATOR"
  }
 ],
 "data": {
  "label": "ELEVATOR"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.27,
   "image": "this.AnimatedImageResource_5A835708_75D5_D3E4_41B8_0F331B9AE4D5",
   "pitch": -1.64,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -4.5,
   "distance": 100
  }
 ],
 "id": "overlay_4FE0BCDD_6AB6_561C_41CC_2E61210B3360",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 12.27,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -4.5,
   "image": {
    "levels": [
     {
      "url": "media/panorama_7104C9EC_6197_9DEA_41CA_604B9DD4BB02_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.64
  }
 ]
},
{
 "displayPlaybackBar": true,
 "viewerArea": "this.viewer_uid98899F85_857E_0F34_41C0_5B5F4FC6E7DF",
 "class": "VideoPlayer",
 "id": "viewer_uid98899F85_857E_0F34_41C0_5B5F4FC6E7DFVideoPlayer"
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_72863FC2_6A55_D264_41D9_8083E0BEF560, this.camera_A74470ED_857E_12F4_41E0_D593F8FD4F82); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "ELEVATOR"
  }
 ],
 "data": {
  "label": "ELEVATOR"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.26,
   "image": "this.AnimatedImageResource_5A82E708_75D5_D3E4_41D7_FD8CA5C3E66F",
   "pitch": 2.05,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -39.27,
   "distance": 100
  }
 ],
 "id": "overlay_4FD64896_6AB2_DEEC_41CA_05D613574FEA",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 12.26,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -39.27,
   "image": {
    "levels": [
     {
      "url": "media/panorama_710C07D2_6197_F63F_41D1_02379524F040_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.05
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_72863FC2_6A55_D264_41D9_8083E0BEF560, this.camera_A632A32F_857E_1774_41E0_AF20DB64AB53); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "ELEVATOR"
  }
 ],
 "data": {
  "label": "ELEVATOR"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.21,
   "image": "this.AnimatedImageResource_5A829708_75D5_D3E4_41BD_4F8B9F2F57DE",
   "pitch": -5.73,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -132.95,
   "distance": 100
  }
 ],
 "id": "overlay_4F7185BB_6A52_5624_41D1_EE1066AAD561",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 12.21,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -132.95,
   "image": {
    "levels": [
     {
      "url": "media/panorama_7108C42C_6194_8A6A_41D3_2AC813940857_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.73
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_717488DE_6197_9A27_41D7_829FAF6E704A, this.camera_A71E7FF3_857E_0EEC_41CE_F2464A6F1A70); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "EXIT THE BUILDING"
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.27,
   "image": "this.AnimatedImageResource_7C8CB1B5_6BDE_CE2C_41DA_BB44D25A5641",
   "pitch": -1.64,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -1.23,
   "distance": 100
  }
 ],
 "id": "overlay_7827AC91_6AAE_D6E4_41B2_F60EC21925B2",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 12.27,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -1.23,
   "image": {
    "levels": [
     {
      "url": "media/panorama_71100113_6194_8A3E_41B1_32BE30E8A7EB_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.64
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_71002081_6194_8A1D_41AF_00845E7D32A1, this.camera_A70C4021_857E_116F_419D_6B50F8DA3FA8); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "CAR PARK"
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.62,
   "image": "this.AnimatedImageResource_7C8C81B5_6BDE_CE2C_41BB_9DA365EEA10C",
   "pitch": -2.66,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 149.73,
   "distance": 100
  }
 ],
 "id": "overlay_79BA0E99_6AD2_52E4_41D1_C29E2F8BF069",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 19.62,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 149.73,
   "image": {
    "levels": [
     {
      "url": "media/panorama_71100113_6194_8A3E_41B1_32BE30E8A7EB_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.66
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_72863FC2_6A55_D264_41D9_8083E0BEF560, this.camera_A707A012_857E_112C_41A0_2A5B18DE7840); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "ELEVATOR"
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.29,
   "image": "this.AnimatedImageResource_7C8C21B5_6BDE_CE2C_41CB_4E35942EED06",
   "pitch": -3.48,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 52.57,
   "distance": 100
  }
 ],
 "id": "overlay_7968D65D_6A72_521C_41BB_048AABCDBBC8",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 14.29,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 52.57,
   "image": {
    "levels": [
     {
      "url": "media/panorama_71100113_6194_8A3E_41B1_32BE30E8A7EB_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.48
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_717A2675_6197_96FA_41D1_0E6D0808DCB9, this.camera_A77F514A_857E_133D_41D3_786DF52BD41A); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "FAMILY LOUNGE"
  }
 ],
 "data": {
  "label": "FAMILY LOUNGE"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.99,
   "image": "this.AnimatedImageResource_5AFF2708_75D5_D3E4_41D2_2219D26B9F75",
   "pitch": -33.14,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 108.55,
   "distance": 50
  }
 ],
 "id": "overlay_553A0449_75D2_D664_41D2_FDA3802D9238",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 15.99,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 108.55,
   "image": {
    "levels": [
     {
      "url": "media/panorama_7173725B_6197_8E2D_41CC_7631E47EB4E1_0_HS_0_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -33.14
  }
 ]
},
{
 "paddingLeft": 0,
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "width": 58,
 "borderSize": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "transparencyActive": true,
 "verticalAlign": "middle",
 "height": 58,
 "mode": "push",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton VR"
 },
 "propagateClick": true,
 "shadow": false,
 "cursor": "hand",
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png"
},
{
 "paddingLeft": 0,
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "width": 58,
 "borderSize": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "transparencyActive": true,
 "verticalAlign": "middle",
 "height": 58,
 "mode": "toggle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "data": {
  "name": "IconButton HS "
 },
 "propagateClick": true,
 "shadow": false,
 "cursor": "hand",
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png"
},
{
 "paddingLeft": 0,
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "width": 58,
 "borderSize": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "transparencyActive": true,
 "verticalAlign": "middle",
 "height": 58,
 "mode": "toggle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "data": {
  "name": "IconButton GYRO"
 },
 "propagateClick": true,
 "shadow": false,
 "cursor": "hand",
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png"
},
{
 "cursor": "hand",
 "maxHeight": 262,
 "maxWidth": 786,
 "scaleMode": "fit_inside",
 "id": "Image_366C2F02_6DD2_7ABA_4192_AE71FA0A303E",
 "left": "0%",
 "right": "70%",
 "borderSize": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "url": "skin/Image_366C2F02_6DD2_7ABA_4192_AE71FA0A303E.png",
 "verticalAlign": "middle",
 "top": "0%",
 "bottom": "50%",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "class": "Image",
 "paddingTop": 0,
 "click": "this.openLink('https://1405media.github.io', '_blank')",
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "Image150519"
 },
 "propagateClick": false,
 "shadow": false,
 "paddingLeft": 0
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "scrollBarColor": "#000000",
 "width": 110,
 "layout": "horizontal",
 "scrollBarOpacity": 0.5,
 "right": "0%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "verticalAlign": "middle",
 "top": "0%",
 "contentOpaque": false,
 "height": 110,
 "horizontalAlign": "center",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "class": "Container",
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "button menu sup"
 },
 "propagateClick": true,
 "overflow": "visible",
 "paddingLeft": 0,
 "shadow": false
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "scrollBarColor": "#000000",
 "layout": "vertical",
 "scrollBarOpacity": 0.5,
 "right": "0%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "bottom": "0%",
 "paddingRight": 0,
 "horizontalAlign": "center",
 "contentOpaque": false,
 "backgroundOpacity": 0,
 "width": "91.304%",
 "class": "Container",
 "gap": 3,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "-button set"
 },
 "height": "85.959%",
 "visible": false,
 "propagateClick": true,
 "overflow": "scroll",
 "paddingLeft": 0,
 "shadow": false
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_21F34780_3014_BF93_41A2_9BF700588BEC",
  "this.IconButton_223F0171_3014_B375_41C1_61063C3D73B3"
 ],
 "id": "Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
 "left": "0%",
 "width": 66,
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "top": "0%",
 "paddingRight": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundOpacity": 0,
 "class": "Container",
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "- COLLAPSE"
 },
 "height": "100%",
 "visible": false,
 "propagateClick": true,
 "shadow": false,
 "overflow": "scroll",
 "paddingLeft": 0
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_4521E58D_74A8_853A_418A_CF7FF914DD83",
  "this.IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882"
 ],
 "id": "Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD",
 "scrollBarColor": "#000000",
 "width": 330,
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "right": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "verticalAlign": "top",
 "top": "0%",
 "paddingRight": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundOpacity": 0,
 "class": "Container",
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "- EXPANDED"
 },
 "height": "100%",
 "propagateClick": false,
 "overflow": "visible",
 "paddingLeft": 0,
 "shadow": false
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "15%",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "15%",
 "borderSize": 0,
 "minHeight": 1,
 "shadowHorizontalLength": 0,
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "top": "10%",
 "scrollBarVisible": "rollOver",
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "shadowVerticalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "class": "Container",
 "gap": 10,
 "shadowSpread": 1,
 "paddingTop": 0,
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": true,
 "overflow": "scroll",
 "paddingLeft": 0
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "15%",
 "layout": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "15%",
 "borderSize": 0,
 "minHeight": 1,
 "verticalAlign": "top",
 "top": "10%",
 "scrollBarVisible": "rollOver",
 "bottom": "80%",
 "paddingRight": 20,
 "horizontalAlign": "right",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundOpacity": 0,
 "class": "Container",
 "gap": 10,
 "paddingTop": 20,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "Container X global"
 },
 "propagateClick": false,
 "shadow": false,
 "overflow": "visible",
 "paddingLeft": 0
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "15%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadowHorizontalLength": 0,
 "verticalAlign": "top",
 "top": "10%",
 "contentOpaque": false,
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "shadowVerticalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "center",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "class": "Container",
 "gap": 10,
 "shadowSpread": 1,
 "paddingTop": 0,
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "propagateClick": true,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": true,
 "overflow": "visible",
 "paddingLeft": 0
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "15%",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "15%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadowHorizontalLength": 0,
 "verticalAlign": "top",
 "top": "10%",
 "contentOpaque": false,
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "shadowVerticalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "class": "Container",
 "gap": 10,
 "shadowSpread": 1,
 "paddingTop": 0,
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "propagateClick": true,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": true,
 "overflow": "scroll",
 "paddingLeft": 0
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "15%",
 "layout": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "15%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "verticalAlign": "top",
 "top": "10%",
 "contentOpaque": false,
 "bottom": "80%",
 "paddingRight": 20,
 "horizontalAlign": "right",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "class": "Container",
 "gap": 10,
 "paddingTop": 20,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "Container X global"
 },
 "propagateClick": true,
 "overflow": "visible",
 "paddingLeft": 0,
 "shadow": false
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.MapViewer",
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C"
 ],
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "15%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadowHorizontalLength": 0,
 "verticalAlign": "top",
 "top": "10%",
 "contentOpaque": false,
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "shadowVerticalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "center",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "class": "Container",
 "gap": 10,
 "shadowSpread": 1,
 "paddingTop": 0,
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "propagateClick": true,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": true,
 "overflow": "visible",
 "paddingLeft": 0
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "15%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadowHorizontalLength": 0,
 "verticalAlign": "top",
 "top": "10%",
 "contentOpaque": false,
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "shadowVerticalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "center",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "class": "Container",
 "gap": 10,
 "shadowSpread": 1,
 "paddingTop": 0,
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "propagateClick": true,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": true,
 "overflow": "visible",
 "paddingLeft": 0
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_1E19E23C_57F1_802D_41D1_9B8B4D1D2BBD",
  "this.Container_1E19D23C_57F1_802D_41B0_92437DF80B82"
 ],
 "id": "Container_1E19923C_57F1_802D_41C4_18DBE75E48C1",
 "left": "15%",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "15%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadowHorizontalLength": 0,
 "verticalAlign": "top",
 "top": "10%",
 "contentOpaque": false,
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "shadowVerticalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "class": "Container",
 "gap": 10,
 "shadowSpread": 1,
 "paddingTop": 0,
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": true,
 "overflow": "scroll",
 "paddingLeft": 0
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF"
 ],
 "id": "Container_1E18A23C_57F1_802D_41B9_D08FA26C7F4C",
 "left": "15%",
 "layout": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "15%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "verticalAlign": "top",
 "top": "10%",
 "contentOpaque": false,
 "bottom": "80%",
 "paddingRight": 20,
 "horizontalAlign": "right",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "class": "Container",
 "gap": 10,
 "paddingTop": 20,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "Container X global"
 },
 "propagateClick": false,
 "overflow": "visible",
 "paddingLeft": 0,
 "shadow": false
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_5A83B708_75D5_D3E4_41D5_A1332089EBEA",
 "levels": [
  {
   "url": "media/panorama_71032291_6194_8E3D_41AA_CAF41E793173_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_5A83F708_75D5_D3E4_41CC_FF4696AE9984",
 "levels": [
  {
   "url": "media/panorama_711C506A_6194_8AEF_41D6_51A41933281D_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_5AFC6708_75D5_D3E4_41B9_30006B34B052",
 "levels": [
  {
   "url": "media/panorama_711C506A_6194_8AEF_41D6_51A41933281D_0_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_5AFCC708_75D5_D3E4_41C4_DDB0CA88CA0A",
 "levels": [
  {
   "url": "media/panorama_711C506A_6194_8AEF_41D6_51A41933281D_0_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_5CD9635A_75B3_D264_41B1_EB459F43C334",
 "levels": [
  {
   "url": "media/panorama_717488DE_6197_9A27_41D7_829FAF6E704A_0_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_5AFD1708_75D5_D3E4_41AD_9CCC0543C2D2",
 "levels": [
  {
   "url": "media/panorama_717A2675_6197_96FA_41D1_0E6D0808DCB9_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_5AFDC708_75D5_D3E4_41CD_AA2081A5DBC3",
 "levels": [
  {
   "url": "media/panorama_717A2675_6197_96FA_41D1_0E6D0808DCB9_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_432C17E3_75B2_7224_41D1_703078EB394B",
 "levels": [
  {
   "url": "media/panorama_717A2675_6197_96FA_41D1_0E6D0808DCB9_1_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4BDD5263_6A5E_3224_41C0_D0288C1AF37E",
 "levels": [
  {
   "url": "media/panorama_716F106D_6195_8AEA_41D2_42589C07E77E_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4BDC2263_6A5E_3224_41C8_AE800A2CCB31",
 "levels": [
  {
   "url": "media/panorama_71002081_6194_8A1D_41AF_00845E7D32A1_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4BDD1263_6A5E_3224_41B6_B9690776A34C",
 "levels": [
  {
   "url": "media/panorama_710D1E1D_6195_9625_41C1_57EDFD131CC7_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_5AFEC708_75D5_D3E4_41D1_91119D1712C0",
 "levels": [
  {
   "url": "media/panorama_7102D860_6194_9A1A_41D3_15B34249EE93_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4BDDC263_6A5E_3224_41C3_81046174D5E5",
 "levels": [
  {
   "url": "media/panorama_7106ACA2_6195_9A1F_41C5_233FAC94B021_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_5AFE2708_75D5_D3E4_41CF_161B64CC68F4",
 "levels": [
  {
   "url": "media/panorama_711F14CD_6194_8A2A_41B2_8EC7CC97CF78_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_5AFE6708_75D5_D3E4_41C8_A15F93AF7CC5",
 "levels": [
  {
   "url": "media/panorama_711F14CD_6194_8A2A_41B2_8EC7CC97CF78_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4BDC8263_6A5E_3224_41D4_1ADA2A6F17A1",
 "levels": [
  {
   "url": "media/panorama_72863FC2_6A55_D264_41D9_8083E0BEF560_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_5A8636F8_75D5_D224_41D5_4D44016747C6",
 "levels": [
  {
   "url": "media/panorama_72863FC2_6A55_D264_41D9_8083E0BEF560_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_5A86A6F8_75D5_D224_41D3_C27C34A6AF09",
 "levels": [
  {
   "url": "media/panorama_72863FC2_6A55_D264_41D9_8083E0BEF560_0_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_5A86F6F8_75D5_D224_41C8_F1470595D78A",
 "levels": [
  {
   "url": "media/panorama_72863FC2_6A55_D264_41D9_8083E0BEF560_0_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_5A8736F8_75D5_D224_41D8_41641F79A1C7",
 "levels": [
  {
   "url": "media/panorama_72863FC2_6A55_D264_41D9_8083E0BEF560_0_HS_5_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_5A8796F8_75D5_D224_41D0_6ADB115E6DE7",
 "levels": [
  {
   "url": "media/panorama_72863FC2_6A55_D264_41D9_8083E0BEF560_0_HS_6_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_5A87C6F8_75D5_D224_41D6_CCB850D65447",
 "levels": [
  {
   "url": "media/panorama_72863FC2_6A55_D264_41D9_8083E0BEF560_0_HS_7_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_5A8046F8_75D5_D224_419A_BFBFC40A3AEE",
 "levels": [
  {
   "url": "media/panorama_72863FC2_6A55_D264_41D9_8083E0BEF560_0_HS_8_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_5A809708_75D5_D3E4_41D5_BACC831CBE22",
 "levels": [
  {
   "url": "media/panorama_72863FC2_6A55_D264_41D9_8083E0BEF560_0_HS_9_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_5A80F708_75D5_D3E4_41C3_787BE379AA3E",
 "levels": [
  {
   "url": "media/panorama_72863FC2_6A55_D264_41D9_8083E0BEF560_0_HS_10_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_5A815708_75D5_D3E4_41CB_5BE67596CFAB",
 "levels": [
  {
   "url": "media/panorama_72863FC2_6A55_D264_41D9_8083E0BEF560_0_HS_11_0.png",
   "width": 920,
   "class": "ImageResourceLevel",
   "height": 1380
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_5A835708_75D5_D3E4_41B8_0F331B9AE4D5",
 "levels": [
  {
   "url": "media/panorama_7104C9EC_6197_9DEA_41CA_604B9DD4BB02_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_5A82E708_75D5_D3E4_41D7_FD8CA5C3E66F",
 "levels": [
  {
   "url": "media/panorama_710C07D2_6197_F63F_41D1_02379524F040_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_5A829708_75D5_D3E4_41BD_4F8B9F2F57DE",
 "levels": [
  {
   "url": "media/panorama_7108C42C_6194_8A6A_41D3_2AC813940857_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7C8CB1B5_6BDE_CE2C_41DA_BB44D25A5641",
 "levels": [
  {
   "url": "media/panorama_71100113_6194_8A3E_41B1_32BE30E8A7EB_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7C8C81B5_6BDE_CE2C_41BB_9DA365EEA10C",
 "levels": [
  {
   "url": "media/panorama_71100113_6194_8A3E_41B1_32BE30E8A7EB_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7C8C21B5_6BDE_CE2C_41CB_4E35942EED06",
 "levels": [
  {
   "url": "media/panorama_71100113_6194_8A3E_41B1_32BE30E8A7EB_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_5AFF2708_75D5_D3E4_41D2_2219D26B9F75",
 "levels": [
  {
   "url": "media/panorama_7173725B_6197_8E2D_41CC_7631E47EB4E1_0_HS_0_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ]
},
{
 "paddingLeft": 0,
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "width": 60,
 "borderSize": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "transparencyActive": true,
 "verticalAlign": "middle",
 "height": 60,
 "mode": "toggle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "paddingTop": 0,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "data": {
  "name": "image button menu"
 },
 "propagateClick": true,
 "shadow": false,
 "cursor": "hand",
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png"
},
{
 "paddingLeft": 0,
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "width": 58,
 "borderSize": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "transparencyActive": true,
 "verticalAlign": "middle",
 "height": 58,
 "mode": "push",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "paddingTop": 0,
 "click": "this.shareTwitter(window.location.href)",
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton TWITTER"
 },
 "visible": false,
 "propagateClick": true,
 "shadow": false,
 "cursor": "hand",
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png"
},
{
 "paddingLeft": 0,
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "width": 58,
 "borderSize": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "transparencyActive": true,
 "verticalAlign": "middle",
 "height": 58,
 "mode": "push",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "paddingTop": 0,
 "click": "this.shareFacebook(window.location.href)",
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton FB"
 },
 "visible": false,
 "propagateClick": true,
 "shadow": false,
 "cursor": "hand",
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png"
},
{
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "id": "Container_21F34780_3014_BF93_41A2_9BF700588BEC",
 "left": "0%",
 "width": 36,
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "top": "0%",
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000"
 ],
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundOpacity": 0.4,
 "paddingRight": 0,
 "class": "Container",
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "Container black"
 },
 "height": "100%",
 "propagateClick": true,
 "shadow": false,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0
 ]
},
{
 "cursor": "hand",
 "maxHeight": 80,
 "maxWidth": 80,
 "id": "IconButton_223F0171_3014_B375_41C1_61063C3D73B3",
 "left": 10,
 "width": 50,
 "borderSize": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "transparencyActive": true,
 "top": "40%",
 "bottom": "40%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "backgroundOpacity": 0,
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3_rollover.png",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, false, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, false, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, true, 0, null, null, false)",
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton arrow"
 },
 "propagateClick": true,
 "shadow": false,
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3.png"
},
{
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "children": [
  "this.Container_0B85764A_2D07_4D95_41A5_3AC872515A8C"
 ],
 "id": "Container_4521E58D_74A8_853A_418A_CF7FF914DD83",
 "left": "0%",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "verticalAlign": "top",
 "top": "0%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "width": "90%",
 "class": "Container",
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "Container"
 },
 "height": "100%",
 "propagateClick": false,
 "shadow": false,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "cursor": "hand",
 "maxHeight": 50,
 "maxWidth": 50,
 "id": "IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882",
 "width": 50,
 "right": 9,
 "borderSize": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "transparencyActive": true,
 "top": "40%",
 "bottom": "40%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "backgroundOpacity": 0,
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882_rollover.png",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false)",
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton collapse"
 },
 "propagateClick": true,
 "shadow": false,
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882.png"
},
{
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "verticalAlign": "middle",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000"
 ],
 "horizontalAlign": "center",
 "contentOpaque": false,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "width": "85%",
 "class": "Container",
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "-left"
 },
 "height": "100%",
 "propagateClick": false,
 "shadow": false,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0
 ]
},
{
 "paddingLeft": 50,
 "scrollBarWidth": 10,
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "scrollBarColor": "#0069A3",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.51,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "left",
 "contentOpaque": false,
 "backgroundOpacity": 1,
 "paddingRight": 50,
 "width": "50%",
 "class": "Container",
 "gap": 0,
 "paddingTop": 20,
 "borderRadius": 0,
 "minWidth": 460,
 "paddingBottom": 20,
 "data": {
  "name": "-right"
 },
 "height": "100%",
 "propagateClick": false,
 "shadow": false,
 "overflow": "visible",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "paddingLeft": 0,
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "borderSize": 0,
 "horizontalAlign": "center",
 "minHeight": 50,
 "transparencyActive": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "width": "25%",
 "mode": "push",
 "backgroundOpacity": 0,
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "borderRadius": 0,
 "minWidth": 50,
 "paddingBottom": 0,
 "data": {
  "name": "X"
 },
 "height": "75%",
 "propagateClick": false,
 "shadow": false,
 "cursor": "hand",
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg"
},
{
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "children": [
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 140,
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "class": "Container",
 "gap": 10,
 "paddingRight": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "header"
 },
 "propagateClick": true,
 "shadow": false,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "itemMaxWidth": 1000,
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "left": 0,
 "itemLabelHorizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "itemThumbnailOpacity": 1,
 "itemMode": "normal",
 "itemLabelFontStyle": "italic",
 "itemPaddingRight": 3,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "horizontalAlign": "center",
 "itemLabelFontFamily": "Oswald",
 "itemMaxHeight": 1000,
 "itemBorderRadius": 0,
 "verticalAlign": "middle",
 "paddingRight": 70,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemOpacity": 1,
 "selectedItemLabelFontColor": "#04A3E1",
 "itemLabelPosition": "bottom",
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "backgroundOpacity": 0,
 "minWidth": 1,
 "itemHorizontalAlign": "center",
 "class": "ThumbnailGrid",
 "itemBackgroundOpacity": 0,
 "itemPaddingLeft": 3,
 "itemThumbnailBorderRadius": 0,
 "width": "100%",
 "height": "92%",
 "propagateClick": true,
 "itemBackgroundColor": [],
 "itemPaddingTop": 3,
 "itemWidth": 220,
 "itemBackgroundColorRatios": [],
 "paddingLeft": 70,
 "itemMinHeight": 50,
 "borderSize": 0,
 "selectedItemThumbnailShadow": true,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "itemLabelTextDecoration": "none",
 "rollOverItemLabelFontColor": "#04A3E1",
 "itemLabelFontWeight": "normal",
 "selectedItemLabelFontWeight": "bold",
 "rollOverItemThumbnailShadow": true,
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "scrollBarMargin": 2,
 "bottom": -0.2,
 "itemLabelFontSize": 16,
 "itemVerticalAlign": "top",
 "itemMinWidth": 50,
 "itemThumbnailScaleMode": "fit_outside",
 "itemHeight": 160,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "gap": 26,
 "itemThumbnailHeight": 125,
 "paddingTop": 10,
 "itemLabelFontColor": "#666666",
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "itemBackgroundColorDirection": "vertical",
 "borderRadius": 5,
 "paddingBottom": 70,
 "data": {
  "name": "ThumbnailList"
 },
 "selectedItemThumbnailShadowVerticalLength": 0,
 "itemPaddingBottom": 3,
 "scrollBarWidth": 10,
 "itemThumbnailShadow": false,
 "itemLabelGap": 7,
 "itemThumbnailWidth": 220,
 "shadow": false
},
{
 "paddingLeft": 0,
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "scrollEnabled": true,
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.55330038866!2d-73.99492968084243!3d40.75084469078082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9f775f259%3A0x999668d0d7c3fd7d!2s400+5th+Ave%2C+New+York%2C+NY+10018!5e0!3m2!1ses!2sus!4v1467271743182\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen>",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "insetBorder": false,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "class": "WebFrame",
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "WebFrame"
 },
 "height": "100%",
 "propagateClick": true,
 "shadow": false,
 "backgroundColorRatios": [
  0
 ]
},
{
 "paddingLeft": 0,
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "borderSize": 0,
 "horizontalAlign": "center",
 "minHeight": 50,
 "transparencyActive": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "width": "25%",
 "mode": "push",
 "backgroundOpacity": 0,
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "borderRadius": 0,
 "minWidth": 50,
 "paddingBottom": 0,
 "data": {
  "name": "X"
 },
 "height": "75%",
 "propagateClick": true,
 "shadow": false,
 "cursor": "hand",
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg"
},
{
 "children": [
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 140,
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "width": "100%",
 "class": "Container",
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "header"
 },
 "scrollBarWidth": 10,
 "shadow": false,
 "overflow": "scroll",
 "paddingLeft": 0,
 "propagateClick": true
},
{
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "left",
 "contentOpaque": false,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "width": "100%",
 "class": "Container",
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "Container photo"
 },
 "height": "100%",
 "propagateClick": true,
 "shadow": false,
 "overflow": "visible",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "children": [
  "this.Image_1E19C23C_57F1_802D_41D1_9DC72DB5C1E1"
 ],
 "id": "Container_1E19E23C_57F1_802D_41D1_9B8B4D1D2BBD",
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "verticalAlign": "middle",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000"
 ],
 "horizontalAlign": "center",
 "contentOpaque": false,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "width": "55%",
 "class": "Container",
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "-left"
 },
 "height": "100%",
 "propagateClick": false,
 "shadow": false,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0
 ]
},
{
 "paddingLeft": 60,
 "scrollBarWidth": 10,
 "children": [
  "this.Container_1E18223C_57F1_802D_41D5_C1ECF1EB519F",
  "this.Container_1E18323C_57F1_802D_41AC_3EB4DE555BBC",
  "this.Container_1E18523C_57F1_802D_41B1_88C86CD9A273"
 ],
 "id": "Container_1E19D23C_57F1_802D_41B0_92437DF80B82",
 "scrollBarColor": "#0069A3",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.51,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "left",
 "contentOpaque": false,
 "backgroundOpacity": 1,
 "paddingRight": 60,
 "width": "45%",
 "class": "Container",
 "gap": 0,
 "paddingTop": 20,
 "borderRadius": 0,
 "minWidth": 460,
 "paddingBottom": 20,
 "data": {
  "name": "-right"
 },
 "height": "100%",
 "propagateClick": false,
 "shadow": false,
 "overflow": "visible",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "paddingLeft": 0,
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF",
 "borderSize": 0,
 "horizontalAlign": "center",
 "minHeight": 50,
 "transparencyActive": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "width": "25%",
 "mode": "push",
 "backgroundOpacity": 0,
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF_rollover.jpg",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF_pressed.jpg",
 "borderRadius": 0,
 "minWidth": 50,
 "paddingBottom": 0,
 "data": {
  "name": "X"
 },
 "height": "75%",
 "propagateClick": false,
 "shadow": false,
 "cursor": "hand",
 "iconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF.jpg"
},
{
 "paddingLeft": 40,
 "scrollBarWidth": 10,
 "children": [
  "this.Image_0435F73B_2D0F_4BF4_4181_65F86A8DAC19",
  "this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE",
  "this.Container_19256A12_2D07_45B5_41AB_E9DE96B2DFF3",
  "this.Container_2A2CB53C_310E_0014_41C3_AB834B10253B",
  "this.Container_159EADDD_31FA_0014_41C8_8A5203EC627B",
  "this.Container_17569D7D_31FA_0015_41C4_CBC688763A8D",
  "this.Container_1758A215_31FA_0014_41B6_9A4A5384548B",
  "this.Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE",
  "this.Container_168D8311_3106_01EC_41B0_F2D40886AB88"
 ],
 "id": "Container_0B85764A_2D07_4D95_41A5_3AC872515A8C",
 "left": "0%",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "verticalAlign": "top",
 "top": "0%",
 "backgroundColor": [
  "#000000"
 ],
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundOpacity": 0.91,
 "paddingRight": 40,
 "width": "100%",
 "class": "Container",
 "gap": 10,
 "paddingTop": 40,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 40,
 "data": {
  "name": "- Buttons set"
 },
 "height": "100%",
 "propagateClick": true,
 "shadow": false,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0
 ]
},
{
 "maxHeight": 1000,
 "maxWidth": 2000,
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "left": "0%",
 "borderSize": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "verticalAlign": "middle",
 "top": "0%",
 "paddingRight": 0,
 "width": "100%",
 "backgroundOpacity": 0,
 "class": "Image",
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "Image"
 },
 "height": "100%",
 "propagateClick": false,
 "scaleMode": "fit_outside",
 "shadow": false,
 "paddingLeft": 0
},
{
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "scrollBarColor": "#000000",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 0,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 60,
 "horizontalAlign": "right",
 "backgroundOpacity": 0.3,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "class": "Container",
 "gap": 0,
 "paddingRight": 0,
 "paddingTop": 20,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "Container space"
 },
 "propagateClick": false,
 "shadow": false,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "scrollBarColor": "#E73B2C",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.79,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 520,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "left",
 "contentOpaque": false,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "width": "100%",
 "class": "Container",
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 100,
 "paddingBottom": 30,
 "data": {
  "name": "Container text"
 },
 "height": "100%",
 "propagateClick": false,
 "shadow": false,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "scrollBarColor": "#000000",
 "width": 370,
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "height": 40,
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "gap": 10,
 "paddingRight": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "Container space"
 },
 "propagateClick": false,
 "shadow": false,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "paddingLeft": 0,
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "right": 20,
 "borderSize": 0,
 "horizontalAlign": "right",
 "minHeight": 50,
 "transparencyActive": false,
 "verticalAlign": "top",
 "top": 20,
 "paddingRight": 0,
 "width": "100%",
 "mode": "push",
 "backgroundOpacity": 0,
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "borderRadius": 0,
 "minWidth": 50,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton X"
 },
 "height": "36.14%",
 "propagateClick": true,
 "shadow": false,
 "cursor": "hand",
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg"
},
{
 "paddingLeft": 0,
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "right": 20,
 "borderSize": 0,
 "horizontalAlign": "right",
 "minHeight": 50,
 "transparencyActive": false,
 "verticalAlign": "top",
 "top": 20,
 "paddingRight": 0,
 "width": "100%",
 "mode": "push",
 "backgroundOpacity": 0,
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "borderRadius": 0,
 "minWidth": 50,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton X"
 },
 "height": "36.14%",
 "propagateClick": true,
 "shadow": false,
 "cursor": "hand",
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg"
},
{
 "paddingLeft": 0,
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "right": 20,
 "borderSize": 0,
 "horizontalAlign": "right",
 "minHeight": 50,
 "transparencyActive": false,
 "verticalAlign": "top",
 "top": 20,
 "paddingRight": 0,
 "width": "10%",
 "mode": "push",
 "backgroundOpacity": 0,
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "borderRadius": 0,
 "minWidth": 50,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton X"
 },
 "height": "10%",
 "propagateClick": true,
 "shadow": false,
 "cursor": "hand",
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg"
},
{
 "paddingLeft": 0,
 "maxHeight": 1000,
 "maxWidth": 2000,
 "scaleMode": "fit_outside",
 "id": "Image_1E19C23C_57F1_802D_41D1_9DC72DB5C1E1",
 "left": "0%",
 "borderSize": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "url": "skin/Image_1E19C23C_57F1_802D_41D1_9DC72DB5C1E1.jpg",
 "verticalAlign": "bottom",
 "top": "0%",
 "paddingRight": 0,
 "width": "100%",
 "backgroundOpacity": 0,
 "class": "Image",
 "paddingTop": 0,
 "click": "this.openLink('https://wa.me/2348066256275?text=Hello%20I%20am%20interested%20in%20your%20property', '_blank')",
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "Image40635"
 },
 "height": "100%",
 "propagateClick": false,
 "shadow": false,
 "cursor": "hand"
},
{
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "id": "Container_1E18223C_57F1_802D_41D5_C1ECF1EB519F",
 "scrollBarColor": "#000000",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 0,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "right",
 "contentOpaque": false,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "width": "100%",
 "class": "Container",
 "gap": 0,
 "paddingTop": 20,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "Container space"
 },
 "height": "5%",
 "propagateClick": false,
 "shadow": false,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "children": [
  "this.HTMLText_1E18123C_57F1_802D_41D2_B0CD0D6533F4",
  "this.Container_1E18623C_57F1_802D_41D5_C4D10C61A206"
 ],
 "id": "Container_1E18323C_57F1_802D_41AC_3EB4DE555BBC",
 "scrollBarColor": "#E73B2C",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.79,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 520,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "left",
 "contentOpaque": false,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "width": "100%",
 "class": "Container",
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 100,
 "paddingBottom": 30,
 "data": {
  "name": "Container text"
 },
 "height": "100%",
 "propagateClick": false,
 "shadow": false,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "id": "Container_1E18523C_57F1_802D_41B1_88C86CD9A273",
 "scrollBarColor": "#000000",
 "width": 370,
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "height": 40,
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "gap": 10,
 "paddingRight": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "Container space"
 },
 "propagateClick": false,
 "shadow": false,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "cursor": "hand",
 "maxHeight": 1095,
 "maxWidth": 1095,
 "scaleMode": "fit_inside",
 "id": "Image_0435F73B_2D0F_4BF4_4181_65F86A8DAC19",
 "left": "0%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "minHeight": 30,
 "url": "skin/Image_0435F73B_2D0F_4BF4_4181_65F86A8DAC19.png",
 "verticalAlign": "top",
 "top": "0%",
 "paddingRight": 0,
 "width": "100%",
 "backgroundOpacity": 0,
 "class": "Image",
 "paddingTop": 0,
 "click": "this.openLink('https://1405media.github.io', '_blank')",
 "borderRadius": 0,
 "minWidth": 40,
 "paddingBottom": 0,
 "data": {
  "name": "Image Company"
 },
 "height": "25%",
 "propagateClick": true,
 "shadow": false,
 "paddingLeft": 0
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_208C289A_3033_51B4_41BC_C3F8D8B8F86D",
  "this.Button_0AEB5577_2D08_CE7B_41B6_192923248F4E",
  "this.Container_106C4A62_2D09_C594_41C0_0D00619DF541",
  "this.Button_0A054365_2D09_CB9F_4145_8C365B373D19",
  "this.Container_152401E8_2D0B_4694_41C5_9141C985F9C3",
  "this.Button_0B73474A_2D18_CB95_41B5_180037BA80BC",
  "this.Container_1BA343A6_2D0B_4A9D_41A8_3A02573B3B89",
  "this.Button_1D2C4FDF_2D7F_BAAB_4198_FBD1E9E469FF",
  "this.Container_15283BED_2D08_DA6F_41C5_5635F0C6DB03",
  "this.Button_0399826A_2D79_4594_41BA_934A50D0E6B4",
  "this.Container_146FF082_2D09_C695_41C4_13DE74CDAF5E",
  "this.Button_1D0C50DE_2D07_C6AD_41C1_CF4547A6CFAB",
  "this.Container_207ECEAD_3035_51EC_41A3_EE49910C654D"
 ],
 "id": "Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE",
 "scrollBarColor": "#000000",
 "layout": "vertical",
 "scrollBarOpacity": 0.5,
 "right": "0%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "verticalAlign": "middle",
 "top": "26%",
 "contentOpaque": false,
 "bottom": "26%",
 "paddingRight": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "width": "100%",
 "class": "Container",
 "gap": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "-Level 1"
 },
 "propagateClick": true,
 "overflow": "scroll",
 "paddingLeft": 0,
 "shadow": false
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_193B8A52_2D1B_C5B5_41C3_F44FF520A3F0",
  "this.HTMLText_29DD1615_3597_79DF_41C4_7593739E5260",
  "this.IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F",
  "this.Container_2B9EE463_3593_BA7B_4195_8E8F4568BB13",
  "this.Container_283049D5_35F3_AA5F_419D_20B6A59ABCA6"
 ],
 "id": "Container_19256A12_2D07_45B5_41AB_E9DE96B2DFF3",
 "left": "0%",
 "layout": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "verticalAlign": "bottom",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "bottom": "0%",
 "height": 178,
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "width": "100%",
 "class": "Container",
 "gap": 5,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "-Container footer"
 },
 "propagateClick": true,
 "shadow": false,
 "overflow": "scroll",
 "paddingLeft": 0
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Button_2A2DA53B_310E_001C_41C7_8885E712C50B",
  "this.Container_2A2DB53B_310E_001C_41BA_0206228E495C",
  "this.Container_1303E3BB_3106_001D_41C8_60D6F4D70B2F",
  "this.Button_2A2D853B_310E_001C_41C4_1C2E2BAFC35D",
  "this.Button_2A2DE53B_310E_001C_41BB_C7AB6950A4DD",
  "this.Button_2A2C253B_310E_001C_41B6_D3A7F4F68C3E",
  "this.Button_2A2C053B_310E_001C_41A2_583DE489828C",
  "this.Button_2A2C753B_310E_001C_41C4_B649CCC20E3D",
  "this.Button_2A2C553C_310E_0014_41C4_86393D0ADCC7",
  "this.Button_15EF2665_3106_0035_41AE_9BACA1A48D02",
  "this.Button_15F5A318_3106_001C_41C5_9AA2EF2184CF",
  "this.Button_1203FDB8_3106_001C_41B6_C9BE8EDD0DA9",
  "this.Button_13D4FC1E_310A_0017_41BA_DDA6D071C1BA"
 ],
 "id": "Container_2A2CB53C_310E_0014_41C3_AB834B10253B",
 "left": "0%",
 "layout": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "creationPolicy": "inAdvance",
 "verticalAlign": "middle",
 "top": "25%",
 "contentOpaque": false,
 "bottom": "25%",
 "paddingRight": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "width": "100%",
 "class": "Container",
 "gap": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "-Level 2-1"
 },
 "visible": false,
 "propagateClick": true,
 "shadow": false,
 "overflow": "scroll",
 "paddingLeft": 0
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1",
  "this.Container_15A14DDC_31FA_0014_41BE_C93192DD207E",
  "this.Container_15A16DDC_31FA_0014_4199_0FBF7553300D",
  "this.Button_15A10DDC_31FA_0014_4185_021C898E177D",
  "this.Button_15A13DDC_31FA_0014_41C5_41AE80876834",
  "this.Button_15A12DDC_31FA_0014_416B_ED845741AE5F",
  "this.Button_159EDDDC_31FA_0014_419A_61C18E43FE01",
  "this.Button_159ECDDC_31FA_0014_41B9_2D5AB1021813",
  "this.Button_159EFDDC_31FA_0014_41C6_9CF7032F84E0",
  "this.Button_159EEDDC_31FA_0014_41B6_22A86B2D2FEB",
  "this.Button_159E9DDC_31FA_0015_41B6_CB1D433C7673",
  "this.Button_159E8DDD_31FA_0014_41C5_F18F441AF371",
  "this.Button_159EBDDD_31FA_0014_41C8_935504B30727"
 ],
 "id": "Container_159EADDD_31FA_0014_41C8_8A5203EC627B",
 "left": "0%",
 "layout": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "creationPolicy": "inAdvance",
 "verticalAlign": "middle",
 "top": "25%",
 "contentOpaque": false,
 "bottom": "25%",
 "paddingRight": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "width": "100%",
 "class": "Container",
 "gap": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "-Level 2-2"
 },
 "visible": false,
 "propagateClick": true,
 "shadow": false,
 "overflow": "scroll",
 "paddingLeft": 0
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Button_1757CD7D_31FA_0015_4143_A9E37B16A50B",
  "this.Container_17579D7D_31FA_0015_41A1_D2B94269F28D",
  "this.Container_17578D7D_31FA_0015_41BE_353D3005648A",
  "this.Button_1757AD7D_31FA_0015_41C7_FB79F56FA149",
  "this.Button_17565D7D_31FA_0015_4193_78BBCB2DC70F",
  "this.Button_17564D7D_31FA_0015_41B8_A9191CD56C52",
  "this.Button_17562D7D_31FA_0015_41A3_96B282B30DBA",
  "this.Button_17567D7D_31FA_0015_41C2_1E0D0AF05C7A",
  "this.Button_17566D7D_31FA_0015_41AD_98D7C60C694F",
  "this.Button_17561D7D_31FA_0015_41B5_BD72FAC26B8B",
  "this.Button_17560D7D_31FA_0015_41C4_7F0EC7540CC2",
  "this.Button_1756DD7D_31FA_0015_41A5_988B67FCF8B7",
  "this.Button_1756FD7D_31FA_0015_41C7_DA2AAC2AAAEC"
 ],
 "id": "Container_17569D7D_31FA_0015_41C4_CBC688763A8D",
 "left": "0%",
 "layout": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "creationPolicy": "inAdvance",
 "verticalAlign": "middle",
 "top": "25%",
 "contentOpaque": false,
 "bottom": "25%",
 "paddingRight": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "width": "100%",
 "class": "Container",
 "gap": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "-Level 2-3"
 },
 "visible": false,
 "propagateClick": true,
 "shadow": false,
 "overflow": "scroll",
 "paddingLeft": 0
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Button_175A5214_31FA_0014_4198_930DF49BADD9",
  "this.Container_175A4215_31FA_0014_41B2_5B8676CC3F2F",
  "this.Container_1759B215_31FA_0014_41C0_84C99CBD5517",
  "this.Button_1759A215_31FA_0014_41C7_F6B1044E5BB3",
  "this.Button_17598215_31FA_0014_41AC_1166AB319171",
  "this.Button_1759F215_31FA_0014_41BD_BBFA5FB0D882",
  "this.Button_1759D215_31FA_0014_41AD_B6C5744A0B97",
  "this.Button_17593215_31FA_0014_41C0_42BAFB0080F0",
  "this.Button_17592215_31FA_0014_41B2_AA3B5CC318B8",
  "this.Button_17590215_31FA_0014_41C1_2B2D012DCC76",
  "this.Button_17597215_31FA_0014_41C0_9BEE1DE4D7F6",
  "this.Button_17596215_31FA_0014_41C6_A42670770708",
  "this.Button_1758B215_31FA_0014_41BC_C4EAC2A9544B"
 ],
 "id": "Container_1758A215_31FA_0014_41B6_9A4A5384548B",
 "left": "0%",
 "layout": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "creationPolicy": "inAdvance",
 "verticalAlign": "middle",
 "top": "25%",
 "contentOpaque": false,
 "bottom": "25%",
 "paddingRight": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "width": "100%",
 "class": "Container",
 "gap": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "-Level 2-4"
 },
 "visible": false,
 "propagateClick": true,
 "shadow": false,
 "overflow": "scroll",
 "paddingLeft": 0
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C",
  "this.Container_17EA92B7_3106_0014_41A6_2B88DF32BBA7",
  "this.Container_17EAA2B7_3106_0014_41B0_ACBB1485A79E",
  "this.Button_17EAB2B7_3106_0014_41A7_209417AD3E9A",
  "this.Button_17EAD2B7_3106_0014_41C0_0B5453B4841D",
  "this.Button_17EAE2B7_3106_0014_41C7_DB7FC43AAEE0",
  "this.Button_17EB02B7_3106_0014_41AF_05D9AC36B189",
  "this.Button_17EB32B7_3106_0014_41C8_467BF6AECBE8",
  "this.Button_17EB42B7_3106_0014_41B0_CE70CBDDF438",
  "this.Button_17EB52B7_3106_0014_419C_439E593AEC43",
  "this.Button_17EB62B7_3106_0014_41C5_43B38271B353",
  "this.Button_17EB72B7_3106_0014_41B9_61857077BF4A",
  "this.Button_17EB92B7_3106_0014_41B2_34A3E3F63779"
 ],
 "id": "Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE",
 "left": "0%",
 "layout": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "creationPolicy": "inAdvance",
 "verticalAlign": "middle",
 "top": "25%",
 "contentOpaque": false,
 "bottom": "25%",
 "paddingRight": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "width": "100%",
 "class": "Container",
 "gap": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "-Level 2-5"
 },
 "visible": false,
 "propagateClick": true,
 "shadow": false,
 "overflow": "scroll",
 "paddingLeft": 0
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Button_168CA310_3106_01EC_41C7_72CE0522951A",
  "this.Container_168C8310_3106_01EC_4187_B16F315A4A23",
  "this.Container_168D7310_3106_01EC_41BE_5FCBD9E27BE4",
  "this.Button_168D6310_3106_01EC_41B8_A0B6BE627547",
  "this.Button_168D5310_3106_01EC_41B5_96D9387401B8",
  "this.Button_168D3310_3106_01EC_41AC_5D524E4677A5",
  "this.Button_168D2310_3106_01EC_41B8_9D7D1B2B55FA",
  "this.Button_168D0310_3106_01EC_41A1_FA8FC42E6FF3",
  "this.Button_168DE310_3106_01EC_4192_6A9F468A0ADE",
  "this.Button_168DD310_3106_01EC_4190_7815FA70349E",
  "this.Button_168DB310_3106_01EC_41B2_3511AA5E40E1",
  "this.Button_168DA310_3106_01EC_41BE_DF88732C2A28",
  "this.Button_168D9311_3106_01EC_41A8_3BD8769525D6"
 ],
 "id": "Container_168D8311_3106_01EC_41B0_F2D40886AB88",
 "left": "0%",
 "layout": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "creationPolicy": "inAdvance",
 "verticalAlign": "middle",
 "top": "25%",
 "contentOpaque": false,
 "bottom": "25%",
 "paddingRight": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "width": "100%",
 "class": "Container",
 "gap": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "-Level 2-6"
 },
 "visible": false,
 "propagateClick": true,
 "shadow": false,
 "overflow": "scroll",
 "paddingLeft": 0
},
{
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "scrollBarColor": "#04A3E1",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "width": "100%",
 "backgroundOpacity": 0,
 "class": "HTMLText",
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 20,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.46vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.98vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Oswald';\"><B><I>ICONIC TOWER</I></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.98vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.98vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.98vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-family:'Oswald';\"><B>2 BEDROOM LUXURY APARTMENT</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.98vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-family:'Oswald';\"><B>Managed by Mariana Real Estate</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.98vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.98vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.98vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Oswald';\"><I>Welcome to an architectural masterpiece rising 18 floors into the skyline of Banana Island one of Africa\u2019s most exclusive addresses. This luxury development offers elegantly designed 2-bedroom apartments, perfectly suited for modern living in a secure, serene, and upscale environment.</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.98vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.98vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.98vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-family:'Oswald';\"><I>APARTMENT FEATURES:</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.98vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Oswald';\"><I>2 spacious bedrooms with en-suite bathrooms</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.98vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.98vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.98vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Oswald';\"><I>Open-plan living &amp; dining area</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.98vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.98vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.98vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Oswald';\"><I>Fully fitted modern kitchen</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.98vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.98vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.98vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Oswald';\"><I>Floor-to-ceiling windows with panoramic views</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.98vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.98vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.98vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Oswald';\"><I>Premium finishes and smart-home technology</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.98vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.98vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.98vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#4a3e14;font-family:'Oswald';\"><I>WORLD-CLASS AMENITIES:</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.98vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.98vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.98vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Oswald';\"><I>Rooftop Swimming Pool</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.98vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.98vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.98vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Oswald';\"><I>Luxury Spa &amp; Wellness Center</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.98vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.98vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.98vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Oswald';\"><I>On-site Restaurant &amp; Lounge</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.98vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.98vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.98vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Oswald';\"><I>High-end Salon</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.98vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.98vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.98vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Oswald';\"><I>Fully Equipped Gym &amp; Fitness Studio</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.98vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.98vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.98vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Oswald';\"><I>Children\u2019s Play Area</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.98vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.98vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.98vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Oswald';\"><I>Landscaped Garden Area</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.98vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.98vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.98vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Oswald';\"><I>24/7 Security &amp; Concierge Services</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.98vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.98vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.98vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Oswald';\"><I>Ample Underground Parking</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.98vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.98vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.98vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Oswald';\"><I>(Payment plan options may be available upon request.)</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.98vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.98vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.98vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Oswald';\"><I>Managed By:</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.98vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Oswald';\"><B><I>Mariana Real Estate</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.98vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Oswald';\"><I>Your trusted partner in premium property management and investment.</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.98vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.98vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.98vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Oswald';\"><B><I>PRICE:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.98vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Oswald';\"><B><I>\u20a6700,000,000</I></B></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText"
 },
 "height": "66.735%",
 "scrollBarWidth": 10,
 "shadow": false,
 "paddingLeft": 10,
 "propagateClick": false
},
{
 "textDecoration": "none",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0
 ],
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "width": 180,
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "horizontalAlign": "center",
 "iconHeight": 32,
 "minHeight": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "height": 50,
 "mode": "push",
 "fontSize": "2.39vh",
 "rollOverBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0.7,
 "backgroundColor": [
  "#04A3E1"
 ],
 "class": "Button",
 "gap": 5,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingRight": 0,
 "paddingTop": 0,
 "label": "CONTACT US",
 "borderRadius": 50,
 "minWidth": 1,
 "click": "this.openLink('https://wa.me/2348066256275?text=Hello%20I%20am%20interested%20in%20your%20property', '_blank')",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "shadowSpread": 1,
 "propagateClick": false,
 "data": {
  "name": "Button"
 },
 "fontWeight": "bold",
 "shadow": false,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "id": "HTMLText_1E18123C_57F1_802D_41D2_B0CD0D6533F4",
 "scrollBarColor": "#04A3E1",
 "scrollBarOpacity": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "width": "100%",
 "backgroundOpacity": 0,
 "class": "HTMLText",
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.46vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.15vh;font-family:'Oswald';\"><B><I>CLICK THE PICTURE </I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.15vh;font-family:'Oswald';\"><B><I>TO CHAT WITH MR AKIN</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.15vh;font-family:'Oswald';\"><B><I> </I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.15vh;font-family:'Oswald';\"><B><I> </I></B></SPAN><SPAN STYLE=\"color:#ff0000;font-size:4.15vh;font-family:'Oswald';\"><B><I> </I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ff0000;font-size:4.15vh;font-family:'Oswald';\"><B><I> </I></B></SPAN><SPAN STYLE=\"color:#ff0000;font-size:6.47vh;font-family:'Arial CE';\"><B> </B></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText18899"
 },
 "height": "46%",
 "scrollBarWidth": 10,
 "shadow": false,
 "paddingLeft": 0,
 "propagateClick": false
},
{
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "children": [
  "this.Image_1E18723C_57F1_802D_41C5_8325536874A5",
  "this.HTMLText_1E18423C_57F1_802D_41C4_458DB7F892AC"
 ],
 "id": "Container_1E18623C_57F1_802D_41D5_C4D10C61A206",
 "scrollBarColor": "#000000",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "left",
 "contentOpaque": false,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "width": "100%",
 "class": "Container",
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "- content"
 },
 "height": "75%",
 "propagateClick": false,
 "shadow": false,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "id": "Container_208C289A_3033_51B4_41BC_C3F8D8B8F86D",
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "class": "Container",
 "gap": 10,
 "paddingRight": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "propagateClick": true,
 "shadow": false,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "textDecoration": "none",
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button Tour Info"
 },
 "shadowSpread": 1,
 "id": "Button_0AEB5577_2D08_CE7B_41B6_192923248F4E",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 50,
 "rollOverBackgroundColor": [
  "#333333"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "width": "73.064%",
 "class": "Button",
 "gap": 5,
 "paddingTop": 0,
 "label": "EXTERIOR >",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_2A2CB53C_310E_0014_41C3_AB834B10253B, true, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "id": "Container_106C4A62_2D09_C594_41C0_0D00619DF541",
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "class": "Container",
 "gap": 10,
 "paddingRight": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "propagateClick": true,
 "shadow": false,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "textDecoration": "none",
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button Panorama List"
 },
 "shadowSpread": 1,
 "id": "Button_0A054365_2D09_CB9F_4145_8C365B373D19",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 50,
 "rollOverBackgroundColor": [
  "#333333"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "width": "100%",
 "class": "Button",
 "gap": 23,
 "paddingTop": 0,
 "label": "APARTMENT >",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.mainPlayList.set('selectedIndex', 11)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "id": "Container_152401E8_2D0B_4694_41C5_9141C985F9C3",
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "class": "Container",
 "gap": 10,
 "paddingRight": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "propagateClick": true,
 "shadow": false,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "textDecoration": "none",
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "shadowSpread": 1,
 "id": "Button_0B73474A_2D18_CB95_41B5_180037BA80BC",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "data": {
  "name": "Button Location"
 },
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 50,
 "rollOverBackgroundColor": [
  "#333333"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "width": "100%",
 "class": "Button",
 "gap": 5,
 "paddingTop": 0,
 "label": "AMENITIES >",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_17569D7D_31FA_0015_41C4_CBC688763A8D, true, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "pressedLabel": "Inserdt Text",
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "id": "Container_1BA343A6_2D0B_4A9D_41A8_3A02573B3B89",
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "class": "Container",
 "gap": 10,
 "paddingRight": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "propagateClick": true,
 "shadow": false,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "textDecoration": "none",
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button Floorplan"
 },
 "shadowSpread": 1,
 "id": "Button_1D2C4FDF_2D7F_BAAB_4198_FBD1E9E469FF",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 50,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "width": "100%",
 "class": "Button",
 "gap": 5,
 "paddingTop": 0,
 "label": "SPORTS AREA >",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_1758A215_31FA_0014_41B6_9A4A5384548B, true, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "visible": false,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "id": "Container_15283BED_2D08_DA6F_41C5_5635F0C6DB03",
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "class": "Container",
 "gap": 10,
 "paddingRight": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "propagateClick": true,
 "shadow": false,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "textDecoration": "none",
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button Photoalbum"
 },
 "shadowSpread": 1,
 "id": "Button_0399826A_2D79_4594_41BA_934A50D0E6B4",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 50,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "width": "100%",
 "class": "Button",
 "gap": 5,
 "paddingTop": 0,
 "label": "SWIMMING POOL >",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE, true, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "visible": false,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "id": "Container_146FF082_2D09_C695_41C4_13DE74CDAF5E",
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "class": "Container",
 "gap": 10,
 "paddingRight": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "propagateClick": true,
 "shadow": false,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "textDecoration": "none",
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button Contact"
 },
 "shadowSpread": 1,
 "id": "Button_1D0C50DE_2D07_C6AD_41C1_CF4547A6CFAB",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 50,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "width": "100%",
 "class": "Button",
 "gap": 5,
 "paddingTop": 0,
 "label": "RESTAURANTS >",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_168D8311_3106_01EC_41B0_F2D40886AB88, true, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "visible": false,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "id": "Container_207ECEAD_3035_51EC_41A3_EE49910C654D",
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "class": "Container",
 "gap": 10,
 "paddingRight": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "propagateClick": true,
 "shadow": false,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "id": "Container_193B8A52_2D1B_C5B5_41C3_F44FF520A3F0",
 "scrollBarColor": "#000000",
 "width": 40,
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "height": 2,
 "horizontalAlign": "left",
 "backgroundOpacity": 1,
 "backgroundColor": [
  "#666666"
 ],
 "class": "Container",
 "gap": 10,
 "paddingRight": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "blue line"
 },
 "propagateClick": true,
 "shadow": false,
 "overflow": "visible",
 "backgroundColorRatios": [
  0
 ]
},
{
 "id": "HTMLText_29DD1615_3597_79DF_41C4_7593739E5260",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarMargin": 2,
 "width": "100%",
 "height": 78,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "class": "HTMLText",
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Company Name</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>info@loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText47602"
 },
 "visible": false,
 "scrollBarWidth": 10,
 "shadow": false,
 "paddingLeft": 0,
 "propagateClick": true
},
{
 "paddingLeft": 0,
 "maxHeight": 101,
 "maxWidth": 101,
 "toolTipShadowVerticalLength": 0,
 "toolTipBorderColor": "#767676",
 "id": "IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F",
 "width": 44,
 "toolTipFontSize": 12,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipOpacity": 1,
 "toolTipShadowBlurRadius": 3,
 "borderSize": 0,
 "toolTipTextShadowColor": "#000000",
 "horizontalAlign": "center",
 "minHeight": 1,
 "toolTipTextShadowBlurRadius": 3,
 "transparencyActive": false,
 "toolTipFontWeight": "normal",
 "toolTipPaddingBottom": 4,
 "toolTipFontColor": "#606060",
 "toolTipShadowColor": "#333333",
 "verticalAlign": "middle",
 "height": 44,
 "toolTipBorderSize": 1,
 "mode": "push",
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F_rollover.png",
 "toolTipPaddingRight": 6,
 "toolTipBorderRadius": 3,
 "paddingTop": 0,
 "click": "this.openLink('https://www.google.com/maps/dir//House+1+Plot+1501+Itirin+Court+I,+Off+Bishop+Aboyade+Cole+St,+Eti-Osa,+Victoria+Island+234001,+Lagos/@6.4346128,3.3553723,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x103bf5683e160695:0xd20ca591cf95ddb3!2m2!1d3.4377742!2d6.4346194?entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D', '_blank')",
 "toolTipFontStyle": "normal",
 "toolTipShadowOpacity": 1,
 "toolTipDisplayTime": 600,
 "borderRadius": 0,
 "minWidth": 1,
 "toolTip": "LOCATION",
 "paddingBottom": 0,
 "toolTipTextShadowOpacity": 0,
 "data": {
  "name": "IconButton Location"
 },
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "shadow": false,
 "cursor": "hand",
 "toolTipShadowHorizontalLength": 0,
 "toolTipShadowSpread": 0,
 "iconURL": "skin/IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F.png"
},
{
 "children": [
  "this.IconButton_2B90E40F_3593_B9CB_41B4_408768336038",
  "this.IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83",
  "this.IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5",
  "this.IconButton_3C0CEE6E_6A56_56A9_41CB_C2BD7D028B76"
 ],
 "id": "Container_2B9EE463_3593_BA7B_4195_8E8F4568BB13",
 "scrollBarColor": "#000000",
 "layout": "horizontal",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "verticalAlign": "bottom",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 56,
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "width": "100%",
 "class": "Container",
 "gap": 7,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "-Container Icons 1"
 },
 "scrollBarWidth": 10,
 "shadow": false,
 "overflow": "visible",
 "paddingLeft": 0,
 "propagateClick": false
},
{
 "children": [
  "this.IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15",
  "this.IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7",
  "this.IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF",
  "this.IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F"
 ],
 "id": "Container_283049D5_35F3_AA5F_419D_20B6A59ABCA6",
 "scrollBarColor": "#000000",
 "layout": "horizontal",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 44,
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "width": "67.742%",
 "class": "Container",
 "gap": 7,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "-Container Icons 2"
 },
 "scrollBarWidth": 10,
 "shadow": false,
 "overflow": "visible",
 "paddingLeft": 0,
 "propagateClick": false
},
{
 "textDecoration": "none",
 "paddingLeft": 5,
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverFontFamily": "Oswald",
 "data": {
  "name": "Button <BACK"
 },
 "shadowSpread": 1,
 "id": "Button_2A2DA53B_310E_001C_41C7_8885E712C50B",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 30,
 "minHeight": 1,
 "verticalAlign": "middle",
 "rollOverFontSize": 18,
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 50,
 "rollOverBackgroundColor": [
  "#333333"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "width": "100%",
 "class": "Button",
 "rollOverIconURL": "skin/Button_2A2DA53B_310E_001C_41C7_8885E712C50B_rollover.png",
 "paddingTop": 0,
 "label": "BACK",
 "borderRadius": 0,
 "minWidth": 1,
 "gap": 5,
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 30,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_2A2CB53C_310E_0014_41C3_AB834B10253B, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "pressedBackgroundOpacity": 1,
 "iconURL": "skin/Button_2A2DA53B_310E_001C_41C7_8885E712C50B.png"
},
{
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "id": "Container_2A2DB53B_310E_001C_41BA_0206228E495C",
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "horizontalAlign": "left",
 "backgroundOpacity": 0.5,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "class": "Container",
 "gap": 10,
 "paddingRight": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "propagateClick": true,
 "shadow": false,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "id": "Container_1303E3BB_3106_001D_41C8_60D6F4D70B2F",
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 8,
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "width": "100%",
 "class": "Container",
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "line separator"
 },
 "scrollBarWidth": 10,
 "shadow": false,
 "overflow": "scroll",
 "paddingLeft": 0,
 "propagateClick": true
},
{
 "textDecoration": "none",
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 1"
 },
 "shadowSpread": 1,
 "id": "Button_2A2D853B_310E_001C_41C4_1C2E2BAFC35D",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 15,
 "height": 36,
 "rollOverBackgroundColor": [
  "#333333"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverShadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "width": "100%",
 "class": "Button",
 "gap": 5,
 "paddingTop": 0,
 "label": "Outdoor View",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.mainPlayList.set('selectedIndex', 0)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "rollOverShadowBlurRadius": 18,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 2"
 },
 "shadowSpread": 1,
 "id": "Button_2A2DE53B_310E_001C_41BB_C7AB6950A4DD",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#333333"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "width": "100%",
 "class": "Button",
 "gap": 23,
 "paddingTop": 0,
 "label": "Main Entrance (Lobby)",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.mainPlayList.set('selectedIndex', 1)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "shadowSpread": 1,
 "id": "Button_2A2C253B_310E_001C_41B6_D3A7F4F68C3E",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "data": {
  "name": "Button text 3"
 },
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "width": "100%",
 "class": "Button",
 "gap": 5,
 "paddingTop": 0,
 "label": "Reception",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "visible": false,
 "propagateClick": true,
 "pressedLabel": "Reception",
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 4"
 },
 "shadowSpread": 1,
 "id": "Button_2A2C053B_310E_001C_41A2_583DE489828C",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "width": "100%",
 "class": "Button",
 "gap": 5,
 "paddingTop": 0,
 "label": "Meeting Area 1",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "visible": false,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 5"
 },
 "shadowSpread": 1,
 "id": "Button_2A2C753B_310E_001C_41C4_B649CCC20E3D",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "width": "100%",
 "class": "Button",
 "gap": 5,
 "paddingTop": 0,
 "label": "Meeting Area 2",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "visible": false,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 6"
 },
 "shadowSpread": 1,
 "id": "Button_2A2C553C_310E_0014_41C4_86393D0ADCC7",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "width": "100%",
 "class": "Button",
 "gap": 5,
 "paddingTop": 0,
 "label": "Bar",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "visible": false,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 7"
 },
 "shadowSpread": 1,
 "id": "Button_15EF2665_3106_0035_41AE_9BACA1A48D02",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "width": "100%",
 "class": "Button",
 "gap": 5,
 "paddingTop": 0,
 "label": "Chill Out",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "visible": false,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 8"
 },
 "shadowSpread": 1,
 "id": "Button_15F5A318_3106_001C_41C5_9AA2EF2184CF",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "width": "100%",
 "class": "Button",
 "gap": 5,
 "paddingTop": 0,
 "label": "Terrace",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "visible": false,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 9"
 },
 "shadowSpread": 1,
 "id": "Button_1203FDB8_3106_001C_41B6_C9BE8EDD0DA9",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "width": "100%",
 "class": "Button",
 "gap": 5,
 "paddingTop": 0,
 "label": "Garden",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "visible": false,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 10"
 },
 "shadowSpread": 1,
 "id": "Button_13D4FC1E_310A_0017_41BA_DDA6D071C1BA",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "width": "100%",
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "class": "Button",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "visible": false,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "paddingLeft": 5,
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverFontFamily": "Oswald",
 "data": {
  "name": "Button <BACK"
 },
 "shadowSpread": 1,
 "id": "Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 30,
 "minHeight": 1,
 "verticalAlign": "middle",
 "rollOverFontSize": 18,
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 50,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "width": "100%",
 "class": "Button",
 "rollOverIconURL": "skin/Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1_rollover.png",
 "paddingTop": 0,
 "label": "BACK",
 "borderRadius": 0,
 "minWidth": 1,
 "gap": 5,
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 30,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_159EADDD_31FA_0014_41C8_8A5203EC627B, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "pressedBackgroundOpacity": 1,
 "iconURL": "skin/Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1.png"
},
{
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "id": "Container_15A14DDC_31FA_0014_41BE_C93192DD207E",
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "horizontalAlign": "left",
 "backgroundOpacity": 0.5,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "class": "Container",
 "gap": 10,
 "paddingRight": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "propagateClick": true,
 "shadow": false,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "id": "Container_15A16DDC_31FA_0014_4199_0FBF7553300D",
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 8,
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "width": "100%",
 "class": "Container",
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "line separator"
 },
 "scrollBarWidth": 10,
 "shadow": false,
 "overflow": "scroll",
 "paddingLeft": 0,
 "propagateClick": true
},
{
 "textDecoration": "none",
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 1"
 },
 "shadowSpread": 1,
 "id": "Button_15A10DDC_31FA_0014_4185_021C898E177D",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 15,
 "height": 36,
 "rollOverBackgroundColor": [
  "#666666"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverShadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "width": "100%",
 "class": "Button",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "rollOverShadowBlurRadius": 18,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 2"
 },
 "shadowSpread": 1,
 "id": "Button_15A13DDC_31FA_0014_41C5_41AE80876834",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#666666"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "width": "100%",
 "class": "Button",
 "gap": 23,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "shadowSpread": 1,
 "id": "Button_15A12DDC_31FA_0014_416B_ED845741AE5F",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "data": {
  "name": "Button text 3"
 },
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#666666"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "width": "100%",
 "class": "Button",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "pressedLabel": "Lorem Ipsum",
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 4"
 },
 "shadowSpread": 1,
 "id": "Button_159EDDDC_31FA_0014_419A_61C18E43FE01",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#666666"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "width": "100%",
 "class": "Button",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 5"
 },
 "shadowSpread": 1,
 "id": "Button_159ECDDC_31FA_0014_41B9_2D5AB1021813",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#666666"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "width": "100%",
 "class": "Button",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 6"
 },
 "shadowSpread": 1,
 "id": "Button_159EFDDC_31FA_0014_41C6_9CF7032F84E0",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "width": "100%",
 "class": "Button",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 7"
 },
 "shadowSpread": 1,
 "id": "Button_159EEDDC_31FA_0014_41B6_22A86B2D2FEB",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "width": "100%",
 "class": "Button",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 8"
 },
 "shadowSpread": 1,
 "id": "Button_159E9DDC_31FA_0015_41B6_CB1D433C7673",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "width": "100%",
 "class": "Button",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 9"
 },
 "shadowSpread": 1,
 "id": "Button_159E8DDD_31FA_0014_41C5_F18F441AF371",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "width": "100%",
 "class": "Button",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 10"
 },
 "shadowSpread": 1,
 "id": "Button_159EBDDD_31FA_0014_41C8_935504B30727",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "width": "100%",
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "class": "Button",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "paddingLeft": 5,
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverFontFamily": "Oswald",
 "data": {
  "name": "Button <BACK"
 },
 "shadowSpread": 1,
 "id": "Button_1757CD7D_31FA_0015_4143_A9E37B16A50B",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 30,
 "minHeight": 1,
 "verticalAlign": "middle",
 "rollOverFontSize": 18,
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 50,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "width": "100%",
 "class": "Button",
 "rollOverIconURL": "skin/Button_1757CD7D_31FA_0015_4143_A9E37B16A50B_rollover.png",
 "paddingTop": 0,
 "label": "BACK",
 "borderRadius": 0,
 "minWidth": 1,
 "gap": 5,
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 30,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_17569D7D_31FA_0015_41C4_CBC688763A8D, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "pressedBackgroundOpacity": 1,
 "iconURL": "skin/Button_1757CD7D_31FA_0015_4143_A9E37B16A50B.png"
},
{
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "id": "Container_17579D7D_31FA_0015_41A1_D2B94269F28D",
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "horizontalAlign": "left",
 "backgroundOpacity": 0.5,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "class": "Container",
 "gap": 10,
 "paddingRight": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "propagateClick": true,
 "shadow": false,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "id": "Container_17578D7D_31FA_0015_41BE_353D3005648A",
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 8,
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "width": "100%",
 "class": "Container",
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "line separator"
 },
 "scrollBarWidth": 10,
 "shadow": false,
 "overflow": "scroll",
 "paddingLeft": 0,
 "propagateClick": true
},
{
 "textDecoration": "none",
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 1"
 },
 "shadowSpread": 1,
 "id": "Button_1757AD7D_31FA_0015_41C7_FB79F56FA149",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 15,
 "height": 36,
 "rollOverBackgroundColor": [
  "#666666"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverShadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "width": "100%",
 "class": "Button",
 "gap": 5,
 "paddingTop": 0,
 "label": "Restaurant",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setPanoramaCameraWithSpot(this.PanoramaPlayListItem_98C8DFB4_857E_0F54_41C1_8CBC6B080671, -115.71428571428571, -14.693877551020408);; this.mainPlayList.set('selectedIndex', 4)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "rollOverShadowBlurRadius": 18,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 2"
 },
 "shadowSpread": 1,
 "id": "Button_17565D7D_31FA_0015_4193_78BBCB2DC70F",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#666666"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "width": "100%",
 "class": "Button",
 "gap": 23,
 "paddingTop": 0,
 "label": "Swimming Pool",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setPanoramaCameraWithSpot(this.PanoramaPlayListItem_98C91FB4_857E_0F54_41BC_0BC3329F429B, -68.87755102040816, -8.26530612244898);; this.mainPlayList.set('selectedIndex', 10)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "shadowSpread": 1,
 "id": "Button_17564D7D_31FA_0015_41B8_A9191CD56C52",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "data": {
  "name": "Button text 3"
 },
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#666666"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "width": "100%",
 "class": "Button",
 "gap": 5,
 "paddingTop": 0,
 "label": "Spa",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setPanoramaCameraWithSpot(this.PanoramaPlayListItem_98C9BFB4_857E_0F54_41D0_A917FFE049D4, -36.734693877551024, -2.7551020408163267);; this.mainPlayList.set('selectedIndex', 6)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "visible": false,
 "propagateClick": true,
 "pressedLabel": "Lorem Ipsum",
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 8"
 },
 "shadowSpread": 1,
 "id": "Button_17562D7D_31FA_0015_41A3_96B282B30DBA",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#666666"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "width": "100%",
 "class": "Button",
 "gap": 5,
 "paddingTop": 0,
 "label": "Spa",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setPanoramaCameraWithSpot(this.PanoramaPlayListItem_98C9BFB4_857E_0F54_41D0_A917FFE049D4, -32.142857142857146, -2.7551020408163267);; this.mainPlayList.set('selectedIndex', 6)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 4"
 },
 "shadowSpread": 1,
 "id": "Button_17567D7D_31FA_0015_41C2_1E0D0AF05C7A",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#666666"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "width": "100%",
 "class": "Button",
 "gap": 5,
 "paddingTop": 0,
 "label": "Gym",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setPanoramaCameraWithSpot(this.PanoramaPlayListItem_98C9DFB4_857E_0F54_41C6_E635AADD085D, -116.63265306122449, -6.428571428571429);; this.mainPlayList.set('selectedIndex', 9)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 5"
 },
 "shadowSpread": 1,
 "id": "Button_17566D7D_31FA_0015_41AD_98D7C60C694F",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#666666"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "width": "100%",
 "class": "Button",
 "gap": 5,
 "paddingTop": 0,
 "label": "Play Area",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setPanoramaCameraWithSpot(this.PanoramaPlayListItem_98F67FB4_857E_0F54_41C3_403226BB580E, 81.73469387755102, -1.836734693877551);; this.mainPlayList.set('selectedIndex', 7)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 6"
 },
 "shadowSpread": 1,
 "id": "Button_17561D7D_31FA_0015_41B5_BD72FAC26B8B",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#666666"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "width": "100%",
 "class": "Button",
 "gap": 5,
 "paddingTop": 0,
 "label": "Gardern Area",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setPanoramaCameraWithSpot(this.PanoramaPlayListItem_98F6BFB4_857E_0F54_41D3_91752BCA6385, 0, 0);; this.mainPlayList.set('selectedIndex', 8)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 7"
 },
 "shadowSpread": 1,
 "id": "Button_17560D7D_31FA_0015_41C4_7F0EC7540CC2",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#666666"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "width": "100%",
 "class": "Button",
 "gap": 5,
 "paddingTop": 0,
 "label": "Salon",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setPanoramaCameraWithSpot(this.PanoramaPlayListItem_98F73FB4_857E_0F54_41D2_6201D810F19D, 1.836734693877551, -1.836734693877551);; this.mainPlayList.set('selectedIndex', 5)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 9"
 },
 "shadowSpread": 1,
 "id": "Button_1756DD7D_31FA_0015_41A5_988B67FCF8B7",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "width": "100%",
 "class": "Button",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "visible": false,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 10"
 },
 "shadowSpread": 1,
 "id": "Button_1756FD7D_31FA_0015_41C7_DA2AAC2AAAEC",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "width": "100%",
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "class": "Button",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "visible": false,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "paddingLeft": 5,
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverFontFamily": "Oswald",
 "data": {
  "name": "Button <BACK"
 },
 "shadowSpread": 1,
 "id": "Button_175A5214_31FA_0014_4198_930DF49BADD9",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 30,
 "minHeight": 1,
 "verticalAlign": "middle",
 "rollOverFontSize": 18,
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 50,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "width": "100%",
 "class": "Button",
 "rollOverIconURL": "skin/Button_175A5214_31FA_0014_4198_930DF49BADD9_rollover.png",
 "paddingTop": 0,
 "label": "BACK",
 "borderRadius": 0,
 "minWidth": 1,
 "gap": 5,
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 30,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_1758A215_31FA_0014_41B6_9A4A5384548B, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "pressedBackgroundOpacity": 1,
 "iconURL": "skin/Button_175A5214_31FA_0014_4198_930DF49BADD9.png"
},
{
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "id": "Container_175A4215_31FA_0014_41B2_5B8676CC3F2F",
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "horizontalAlign": "left",
 "backgroundOpacity": 0.5,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "class": "Container",
 "gap": 10,
 "paddingRight": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "propagateClick": true,
 "shadow": false,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "id": "Container_1759B215_31FA_0014_41C0_84C99CBD5517",
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 8,
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "width": "100%",
 "class": "Container",
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "line separator"
 },
 "scrollBarWidth": 10,
 "shadow": false,
 "overflow": "scroll",
 "paddingLeft": 0,
 "propagateClick": true
},
{
 "textDecoration": "none",
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 1"
 },
 "shadowSpread": 1,
 "id": "Button_1759A215_31FA_0014_41C7_F6B1044E5BB3",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 15,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverShadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "width": "100%",
 "class": "Button",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "rollOverShadowBlurRadius": 18,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 2"
 },
 "shadowSpread": 1,
 "id": "Button_17598215_31FA_0014_41AC_1166AB319171",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "width": "100%",
 "class": "Button",
 "gap": 23,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "shadowSpread": 1,
 "id": "Button_1759F215_31FA_0014_41BD_BBFA5FB0D882",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "data": {
  "name": "Button text 3"
 },
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "width": "100%",
 "class": "Button",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "pressedLabel": "Lorem Ipsum",
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 4"
 },
 "shadowSpread": 1,
 "id": "Button_1759D215_31FA_0014_41AD_B6C5744A0B97",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "width": "100%",
 "class": "Button",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 5"
 },
 "shadowSpread": 1,
 "id": "Button_17593215_31FA_0014_41C0_42BAFB0080F0",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "width": "100%",
 "class": "Button",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 6"
 },
 "shadowSpread": 1,
 "id": "Button_17592215_31FA_0014_41B2_AA3B5CC318B8",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "width": "100%",
 "class": "Button",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 7"
 },
 "shadowSpread": 1,
 "id": "Button_17590215_31FA_0014_41C1_2B2D012DCC76",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "width": "100%",
 "class": "Button",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 8"
 },
 "shadowSpread": 1,
 "id": "Button_17597215_31FA_0014_41C0_9BEE1DE4D7F6",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "width": "100%",
 "class": "Button",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 9"
 },
 "shadowSpread": 1,
 "id": "Button_17596215_31FA_0014_41C6_A42670770708",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "width": "100%",
 "class": "Button",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 10"
 },
 "shadowSpread": 1,
 "id": "Button_1758B215_31FA_0014_41BC_C4EAC2A9544B",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "width": "100%",
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "class": "Button",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "paddingLeft": 5,
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverFontFamily": "Oswald",
 "data": {
  "name": "Button <BACK"
 },
 "shadowSpread": 1,
 "id": "Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 30,
 "minHeight": 1,
 "verticalAlign": "middle",
 "rollOverFontSize": 18,
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 50,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "width": "100%",
 "class": "Button",
 "rollOverIconURL": "skin/Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C_rollover.png",
 "paddingTop": 0,
 "label": "BACK",
 "borderRadius": 0,
 "minWidth": 1,
 "gap": 5,
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 30,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "pressedBackgroundOpacity": 1,
 "iconURL": "skin/Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C.png"
},
{
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "id": "Container_17EA92B7_3106_0014_41A6_2B88DF32BBA7",
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "horizontalAlign": "left",
 "backgroundOpacity": 0.5,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "class": "Container",
 "gap": 10,
 "paddingRight": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "propagateClick": true,
 "shadow": false,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "id": "Container_17EAA2B7_3106_0014_41B0_ACBB1485A79E",
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 8,
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "width": "100%",
 "class": "Container",
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "line separator"
 },
 "scrollBarWidth": 10,
 "shadow": false,
 "overflow": "scroll",
 "paddingLeft": 0,
 "propagateClick": true
},
{
 "textDecoration": "none",
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 1"
 },
 "shadowSpread": 1,
 "id": "Button_17EAB2B7_3106_0014_41A7_209417AD3E9A",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 15,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverShadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "width": "100%",
 "class": "Button",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "rollOverShadowBlurRadius": 18,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 2"
 },
 "shadowSpread": 1,
 "id": "Button_17EAD2B7_3106_0014_41C0_0B5453B4841D",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "width": "100%",
 "class": "Button",
 "gap": 23,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "shadowSpread": 1,
 "id": "Button_17EAE2B7_3106_0014_41C7_DB7FC43AAEE0",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "data": {
  "name": "Button text 3"
 },
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "width": "100%",
 "class": "Button",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "pressedLabel": "Lorem Ipsum",
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 4"
 },
 "shadowSpread": 1,
 "id": "Button_17EB02B7_3106_0014_41AF_05D9AC36B189",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "width": "100%",
 "class": "Button",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 5"
 },
 "shadowSpread": 1,
 "id": "Button_17EB32B7_3106_0014_41C8_467BF6AECBE8",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "width": "100%",
 "class": "Button",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 6"
 },
 "shadowSpread": 1,
 "id": "Button_17EB42B7_3106_0014_41B0_CE70CBDDF438",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "width": "100%",
 "class": "Button",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 7"
 },
 "shadowSpread": 1,
 "id": "Button_17EB52B7_3106_0014_419C_439E593AEC43",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "width": "100%",
 "class": "Button",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 8"
 },
 "shadowSpread": 1,
 "id": "Button_17EB62B7_3106_0014_41C5_43B38271B353",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "width": "100%",
 "class": "Button",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 9"
 },
 "shadowSpread": 1,
 "id": "Button_17EB72B7_3106_0014_41B9_61857077BF4A",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "width": "100%",
 "class": "Button",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 10"
 },
 "shadowSpread": 1,
 "id": "Button_17EB92B7_3106_0014_41B2_34A3E3F63779",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "width": "100%",
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "class": "Button",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "paddingLeft": 5,
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverFontFamily": "Oswald",
 "data": {
  "name": "Button <BACK"
 },
 "shadowSpread": 1,
 "id": "Button_168CA310_3106_01EC_41C7_72CE0522951A",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 30,
 "minHeight": 1,
 "verticalAlign": "middle",
 "rollOverFontSize": 18,
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 50,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "width": "100%",
 "class": "Button",
 "rollOverIconURL": "skin/Button_168CA310_3106_01EC_41C7_72CE0522951A_rollover.png",
 "paddingTop": 0,
 "label": "BACK",
 "borderRadius": 0,
 "minWidth": 1,
 "gap": 5,
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 30,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_168D8311_3106_01EC_41B0_F2D40886AB88, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "pressedBackgroundOpacity": 1,
 "iconURL": "skin/Button_168CA310_3106_01EC_41C7_72CE0522951A.png"
},
{
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "id": "Container_168C8310_3106_01EC_4187_B16F315A4A23",
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "horizontalAlign": "left",
 "backgroundOpacity": 0.5,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "class": "Container",
 "gap": 10,
 "paddingRight": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "propagateClick": true,
 "shadow": false,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "id": "Container_168D7310_3106_01EC_41BE_5FCBD9E27BE4",
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 8,
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "width": "100%",
 "class": "Container",
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "line separator"
 },
 "scrollBarWidth": 10,
 "shadow": false,
 "overflow": "scroll",
 "paddingLeft": 0,
 "propagateClick": true
},
{
 "textDecoration": "none",
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 1"
 },
 "shadowSpread": 1,
 "id": "Button_168D6310_3106_01EC_41B8_A0B6BE627547",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 15,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverShadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "width": "100%",
 "class": "Button",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "rollOverShadowBlurRadius": 18,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 2"
 },
 "shadowSpread": 1,
 "id": "Button_168D5310_3106_01EC_41B5_96D9387401B8",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "width": "100%",
 "class": "Button",
 "gap": 23,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "shadowSpread": 1,
 "id": "Button_168D3310_3106_01EC_41AC_5D524E4677A5",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "data": {
  "name": "Button text 3"
 },
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "width": "100%",
 "class": "Button",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "pressedLabel": "Lorem Ipsum",
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 4"
 },
 "shadowSpread": 1,
 "id": "Button_168D2310_3106_01EC_41B8_9D7D1B2B55FA",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "width": "100%",
 "class": "Button",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 5"
 },
 "shadowSpread": 1,
 "id": "Button_168D0310_3106_01EC_41A1_FA8FC42E6FF3",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "width": "100%",
 "class": "Button",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 6"
 },
 "shadowSpread": 1,
 "id": "Button_168DE310_3106_01EC_4192_6A9F468A0ADE",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "width": "100%",
 "class": "Button",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 7"
 },
 "shadowSpread": 1,
 "id": "Button_168DD310_3106_01EC_4190_7815FA70349E",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "width": "100%",
 "class": "Button",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 8"
 },
 "shadowSpread": 1,
 "id": "Button_168DB310_3106_01EC_41B2_3511AA5E40E1",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "width": "100%",
 "class": "Button",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 9"
 },
 "shadowSpread": 1,
 "id": "Button_168DA310_3106_01EC_41BE_DF88732C2A28",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "width": "100%",
 "class": "Button",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 10"
 },
 "shadowSpread": 1,
 "id": "Button_168D9311_3106_01EC_41A8_3BD8769525D6",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "width": "100%",
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "class": "Button",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "paddingLeft": 0,
 "maxHeight": 200,
 "maxWidth": 200,
 "scaleMode": "fit_inside",
 "id": "Image_1E18723C_57F1_802D_41C5_8325536874A5",
 "borderSize": 0,
 "horizontalAlign": "left",
 "minHeight": 1,
 "url": "skin/Image_1E18723C_57F1_802D_41C5_8325536874A5.jpg",
 "verticalAlign": "top",
 "paddingRight": 0,
 "width": "25%",
 "backgroundOpacity": 0,
 "class": "Image",
 "paddingTop": 0,
 "click": "this.openLink('https://wa.me/2348066256275?text=Hello%20I%20am%20interested%20in%20your%20property', '_blank')",
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "agent photo"
 },
 "height": "100%",
 "propagateClick": false,
 "shadow": false,
 "cursor": "hand"
},
{
 "id": "HTMLText_1E18423C_57F1_802D_41C4_458DB7F892AC",
 "scrollBarColor": "#04A3E1",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "width": "75%",
 "backgroundOpacity": 0,
 "class": "HTMLText",
 "paddingTop": 0,
 "click": "this.openLink('https://wa.me/2348066256275?text=Hello%20I%20am%20interested%20in%20your%20property', '_blank')",
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.98vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-family:'Oswald';\"><B><I>MR AKIN</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.32vh;font-family:'Oswald';\"><I>SALES REPRESENTATIVE</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.49vh;font-family:'Oswald';\"><I>Mariana Real Estate</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.49vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.98vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "data": {
  "name": "HTMLText19460"
 },
 "height": "100%",
 "scrollBarWidth": 10,
 "shadow": false,
 "paddingLeft": 10,
 "propagateClick": false
},
{
 "paddingLeft": 0,
 "maxHeight": 101,
 "maxWidth": 101,
 "toolTipShadowVerticalLength": 0,
 "toolTipBorderColor": "#767676",
 "id": "IconButton_2B90E40F_3593_B9CB_41B4_408768336038",
 "width": 44,
 "toolTipFontSize": 12,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipOpacity": 1,
 "toolTipShadowBlurRadius": 3,
 "borderSize": 0,
 "toolTipTextShadowColor": "#000000",
 "horizontalAlign": "center",
 "minHeight": 1,
 "toolTipTextShadowBlurRadius": 3,
 "transparencyActive": true,
 "toolTipFontWeight": "normal",
 "toolTipPaddingBottom": 4,
 "toolTipFontColor": "#606060",
 "toolTipShadowColor": "#333333",
 "verticalAlign": "middle",
 "height": 44,
 "toolTipBorderSize": 1,
 "mode": "push",
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_2B90E40F_3593_B9CB_41B4_408768336038_rollover.png",
 "toolTipPaddingRight": 6,
 "toolTipBorderRadius": 3,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, true, 0, null, null, false)",
 "toolTipFontStyle": "normal",
 "toolTipShadowOpacity": 1,
 "toolTipDisplayTime": 600,
 "borderRadius": 0,
 "minWidth": 1,
 "toolTip": "PROPERTY INFO",
 "paddingBottom": 0,
 "toolTipTextShadowOpacity": 0,
 "data": {
  "name": "IconButton Info"
 },
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "shadow": false,
 "cursor": "hand",
 "toolTipShadowHorizontalLength": 0,
 "toolTipShadowSpread": 0,
 "iconURL": "skin/IconButton_2B90E40F_3593_B9CB_41B4_408768336038.png"
},
{
 "paddingLeft": 0,
 "maxHeight": 101,
 "maxWidth": 101,
 "toolTipShadowVerticalLength": 0,
 "toolTipBorderColor": "#767676",
 "id": "IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83",
 "width": 44,
 "toolTipFontSize": 12,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipOpacity": 1,
 "toolTipShadowBlurRadius": 3,
 "borderSize": 0,
 "toolTipTextShadowColor": "#000000",
 "horizontalAlign": "center",
 "minHeight": 1,
 "toolTipTextShadowBlurRadius": 3,
 "transparencyActive": false,
 "toolTipFontWeight": "normal",
 "toolTipPaddingBottom": 4,
 "toolTipFontColor": "#606060",
 "toolTipShadowColor": "#333333",
 "verticalAlign": "middle",
 "height": 44,
 "toolTipBorderSize": 1,
 "mode": "push",
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83_rollover.png",
 "toolTipPaddingRight": 6,
 "toolTipBorderRadius": 3,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "toolTipFontStyle": "normal",
 "toolTipShadowOpacity": 1,
 "toolTipDisplayTime": 600,
 "borderRadius": 0,
 "minWidth": 1,
 "toolTip": "PANORAMA LIST",
 "paddingBottom": 0,
 "toolTipTextShadowOpacity": 0,
 "data": {
  "name": "IconButton Thumblist"
 },
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "shadow": false,
 "cursor": "hand",
 "toolTipShadowHorizontalLength": 0,
 "toolTipShadowSpread": 0,
 "iconURL": "skin/IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83.png"
},
{
 "paddingLeft": 0,
 "maxHeight": 101,
 "maxWidth": 101,
 "toolTipShadowVerticalLength": 0,
 "toolTipBorderColor": "#767676",
 "id": "IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5",
 "width": 44,
 "toolTipFontSize": 12,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipOpacity": 1,
 "toolTipShadowBlurRadius": 3,
 "borderSize": 0,
 "toolTipTextShadowColor": "#000000",
 "horizontalAlign": "center",
 "minHeight": 1,
 "toolTipTextShadowBlurRadius": 3,
 "transparencyActive": false,
 "toolTipFontWeight": "normal",
 "toolTipPaddingBottom": 4,
 "toolTipFontColor": "#606060",
 "toolTipShadowColor": "#333333",
 "verticalAlign": "middle",
 "height": 44,
 "toolTipBorderSize": 1,
 "mode": "push",
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5_rollover.png",
 "toolTipPaddingRight": 6,
 "toolTipBorderRadius": 3,
 "paddingTop": 0,
 "click": "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist.set('selectedIndex', -1); }, this); this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist.set('selectedIndex', 17); this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, true, 0, null, null, false)",
 "toolTipFontStyle": "normal",
 "toolTipShadowOpacity": 1,
 "toolTipDisplayTime": 600,
 "borderRadius": 0,
 "minWidth": 1,
 "toolTip": "SITE PHOTOS",
 "paddingBottom": 0,
 "toolTipTextShadowOpacity": 0,
 "data": {
  "name": "IconButton Photoalbum"
 },
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "shadow": false,
 "cursor": "hand",
 "toolTipShadowHorizontalLength": 0,
 "toolTipShadowSpread": 0,
 "iconURL": "skin/IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5.png"
},
{
 "paddingLeft": 0,
 "maxHeight": 1064,
 "maxWidth": 1126,
 "toolTipShadowVerticalLength": 0,
 "toolTipBorderColor": "#767676",
 "id": "IconButton_3C0CEE6E_6A56_56A9_41CB_C2BD7D028B76",
 "width": 44,
 "toolTipFontSize": 12,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipOpacity": 1,
 "toolTipShadowBlurRadius": 3,
 "borderSize": 0,
 "toolTipTextShadowColor": "#000000",
 "horizontalAlign": "center",
 "minHeight": 1,
 "toolTipTextShadowBlurRadius": 3,
 "transparencyActive": false,
 "toolTipFontWeight": "normal",
 "toolTipPaddingBottom": 4,
 "toolTipFontColor": "#606060",
 "toolTipShadowColor": "#333333",
 "verticalAlign": "middle",
 "height": 43,
 "toolTipBorderSize": 1,
 "mode": "push",
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_3C0CEE6E_6A56_56A9_41CB_C2BD7D028B76_rollover.png",
 "toolTipPaddingRight": 6,
 "toolTipBorderRadius": 3,
 "paddingTop": 0,
 "click": "this.openLink('files/file_3D2C6710_6A52_D661_41BE_2012088843C9.pdf', '_blank')",
 "toolTipFontStyle": "normal",
 "toolTipShadowOpacity": 1,
 "toolTipDisplayTime": 600,
 "borderRadius": 0,
 "minWidth": 1,
 "toolTip": "BROCHURE",
 "paddingBottom": 0,
 "toolTipTextShadowOpacity": 0,
 "data": {
  "name": "IconButton143027"
 },
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "shadow": false,
 "cursor": "hand",
 "toolTipShadowHorizontalLength": 0,
 "toolTipShadowSpread": 0,
 "iconURL": "skin/IconButton_3C0CEE6E_6A56_56A9_41CB_C2BD7D028B76.png"
},
{
 "paddingLeft": 0,
 "maxHeight": 101,
 "maxWidth": 101,
 "toolTipShadowVerticalLength": 0,
 "toolTipBorderColor": "#767676",
 "id": "IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15",
 "width": 44,
 "toolTipFontSize": 12,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipOpacity": 1,
 "toolTipShadowBlurRadius": 3,
 "borderSize": 0,
 "toolTipTextShadowColor": "#000000",
 "horizontalAlign": "center",
 "minHeight": 1,
 "toolTipTextShadowBlurRadius": 3,
 "transparencyActive": true,
 "toolTipFontWeight": "normal",
 "toolTipPaddingBottom": 4,
 "toolTipFontColor": "#606060",
 "toolTipShadowColor": "#333333",
 "verticalAlign": "middle",
 "height": 44,
 "toolTipBorderSize": 1,
 "mode": "push",
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15_rollover.png",
 "toolTipPaddingRight": 6,
 "toolTipBorderRadius": 3,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, true, 0, null, null, false)",
 "toolTipFontStyle": "normal",
 "toolTipShadowOpacity": 1,
 "toolTipDisplayTime": 600,
 "borderRadius": 0,
 "minWidth": 1,
 "toolTip": "FLOOR PLAN",
 "paddingBottom": 0,
 "toolTipTextShadowOpacity": 0,
 "data": {
  "name": "IconButton Floorplan"
 },
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "shadow": false,
 "cursor": "hand",
 "toolTipShadowHorizontalLength": 0,
 "toolTipShadowSpread": 0,
 "iconURL": "skin/IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15.png"
},
{
 "paddingLeft": 0,
 "maxHeight": 101,
 "maxWidth": 101,
 "toolTipShadowVerticalLength": 0,
 "toolTipBorderColor": "#767676",
 "id": "IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7",
 "width": 44,
 "toolTipFontSize": 12,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipOpacity": 1,
 "toolTipShadowBlurRadius": 3,
 "borderSize": 0,
 "toolTipTextShadowColor": "#000000",
 "horizontalAlign": "center",
 "minHeight": 1,
 "toolTipTextShadowBlurRadius": 3,
 "transparencyActive": false,
 "toolTipFontWeight": "normal",
 "toolTipPaddingBottom": 4,
 "toolTipFontColor": "#606060",
 "toolTipShadowColor": "#333333",
 "verticalAlign": "middle",
 "height": 44,
 "toolTipBorderSize": 1,
 "mode": "push",
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7_rollover.png",
 "toolTipPaddingRight": 6,
 "toolTipBorderRadius": 3,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, true, 0, null, null, false)",
 "toolTipFontStyle": "normal",
 "toolTipShadowOpacity": 1,
 "toolTipDisplayTime": 600,
 "borderRadius": 0,
 "minWidth": 1,
 "toolTip": "OUR SALES REP",
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7_pressed.png",
 "toolTipTextShadowOpacity": 0,
 "data": {
  "name": "IconButton Realtor"
 },
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "shadow": false,
 "cursor": "hand",
 "toolTipShadowHorizontalLength": 0,
 "toolTipShadowSpread": 0,
 "iconURL": "skin/IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7.png"
},
{
 "paddingLeft": 0,
 "maxHeight": 101,
 "maxWidth": 101,
 "toolTipShadowVerticalLength": 0,
 "toolTipBorderColor": "#767676",
 "id": "IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF",
 "width": 44,
 "toolTipFontSize": 12,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipOpacity": 1,
 "toolTipShadowBlurRadius": 3,
 "borderSize": 0,
 "toolTipTextShadowColor": "#000000",
 "horizontalAlign": "center",
 "minHeight": 1,
 "toolTipTextShadowBlurRadius": 3,
 "transparencyActive": false,
 "toolTipFontWeight": "normal",
 "toolTipPaddingBottom": 4,
 "toolTipFontColor": "#606060",
 "toolTipShadowColor": "#333333",
 "verticalAlign": "middle",
 "height": 44,
 "toolTipBorderSize": 1,
 "mode": "push",
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF_rollover.png",
 "toolTipPaddingRight": 6,
 "toolTipBorderRadius": 3,
 "paddingTop": 0,
 "click": "this.showPopupMedia(this.window_3C622EB9_75D2_79BF_41C0_FF8692622F2C, this.video_493F3EE3_7E52_D9E5_41D4_B67C42A13526, this.playList_8AF692C9_84B6_31B5_419F_9996CEAE5CFB, '90%', '90%', false, true)",
 "toolTipFontStyle": "normal",
 "toolTipShadowOpacity": 1,
 "toolTipDisplayTime": 600,
 "borderRadius": 0,
 "minWidth": 1,
 "toolTip": "PROPERTY VIDEO",
 "paddingBottom": 0,
 "toolTipTextShadowOpacity": 0,
 "data": {
  "name": "IconButton Video"
 },
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "shadow": false,
 "cursor": "hand",
 "toolTipShadowHorizontalLength": 0,
 "toolTipShadowSpread": 0,
 "iconURL": "skin/IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF.png"
},
{
 "paddingLeft": 0,
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F",
 "width": 50,
 "borderSize": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "transparencyActive": false,
 "verticalAlign": "middle",
 "height": 50,
 "mode": "push",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F_pressed.png",
 "data": {
  "name": "IconButton --"
 },
 "visible": false,
 "propagateClick": false,
 "shadow": false,
 "cursor": "hand",
 "iconURL": "skin/IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F.png"
}],
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "scripts": {
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "unregisterKey": function(key){  delete window[key]; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "registerKey": function(key, value){  window[key] = value; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "existsKey": function(key){  return key in window; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getKey": function(key){  return window[key]; }
 },
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "defaultVRPointer": "gaze",
 "horizontalAlign": "left",
 "downloadEnabled": false,
 "contentOpaque": false,
 "paddingRight": 0,
 "backgroundPreloadEnabled": true,
 "class": "Player",
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 20,
 "mouseWheelEnabled": true,
 "paddingBottom": 0,
 "width": "100%",
 "desktopMipmappingEnabled": false,
 "height": "100%",
 "propagateClick": true,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "shadow": false,
 "overflow": "visible",
 "data": {
  "name": "Player468"
 }
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
