export const dataSource = data => {
  return {
    chart: {
      showpercentvalues: "1",
      defaultcenterlabel: "expense",

      // showLegend: "1",
      centerlabel: "$label: $value",
      centerLabelFontSize: "16",

      labelFontSize: "14",
      labelFont: "Exo2",

      centerLabelColor: "#DD4F42",
      aligncaptionwithcanvas: "0",
      captionpadding: "0",
      decimals: "1",
      plottooltext:
        "<b>$percentValue</b> of our Android users are on <b>$label</b>",

      paletteColors:
        "#C356EA,#00FFFF,#FF8000,#0000FE,#00CFD5,#4EB6FB,FFDB00,#FF207B,#97F849,",
      bgAlpha: "0",
      canvasBgAlpha: "0",
      showBorder: false,
      showShadow: false,
      showPlotBorder: false,
      use3DLighting: false,
      showValues: true,
      formatNumberScale: false,
      numberSuffix: " UAH",
      labelFontColor: "#fff"
    },
    data
  };
};
