import { createSlice } from "@reduxjs/toolkit";

export const infoSlice = createSlice({
  name: "infoText",
  initialState: {
    text: "",
    extractedInfo: {
      type: "",
      name: "",
      licenseNumber: "",
      dateOfBirth: "",
      bloodType: "",
      nationality: "",
      sex: "",
      address: "",
      weight: "",
      height: "",
      agency_code: "",
      dl_codes: "",
      expirationDate: "",
      conditions: "",
      restrictions: "",
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

export const { setRecognizedText } = infoSlice.actions;

export default infoSlice.reducer;
