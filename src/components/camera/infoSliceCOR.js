import { createSlice } from "@reduxjs/toolkit";

export const infoSliceCOR = createSlice({
  name: "infoTextOCR",
  initialState: {
    text: "",
    extractedInfo: {
      plate_no: "",
      make: "",
      date: "",
      series: "",
      make: "",
      complete_owners_name: "",
      complete_address: "",
      telephone_no_contact_details: "",
    },
  },
  reducers: {
    setRecognizedText: (state, action) => {
      state.extractedInfo = action.payload;
      const recogText = state.extractedInfo;

      console.log(recogText);
    },
  },
});

export const { setRecognizedText } = infoSliceCOR.actions;

export default infoSliceCOR.reducer;
