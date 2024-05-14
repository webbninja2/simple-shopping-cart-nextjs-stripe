import moment from "moment";

const restructureIncidentsRawData = (data) => {
  /*
    The purpose of this method is to process data from the api so that the UI can use it.
    The UI needs Date(YYYY-MM-DD) and Time(HH:MM:SS) and not the timestamp.
    */
  const reteriveData = data.map((item) => {
    const date = moment.unix(item?.time).format("YYYY/MM/DD");
    const time = moment.unix(item?.time).format("hh:mm:ss");
    const timeStamp = item?.time;
    return { ...item, date, time, timeStamp };
  });
  return reteriveData;
};

/*
This helper function prioritize ui_material_name over material
for material found in incident list
*/
const updateMaterialFoundName = (data) => {
  return data.map((item) => {
    const material =
      item.ui_material_name && item.ui_material_name.trim() !== ""
        ? item.ui_material_name
        : item.material;

    return {
      ...item,
      material,
    };
  });
};

export { restructureIncidentsRawData, updateMaterialFoundName };
