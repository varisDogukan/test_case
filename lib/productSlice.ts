import customFetch from "@/utils/customFetch";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import IProductState, { IGrupList, IUrunList } from "./interfaces";

const initialState = {
  grupList: [],
  grupLoading: false,
  urunLoading: false,
  error: undefined,
  selectedGrup: { id: 2, name: "Cloud-SSD Hizmeti" },
  urunList: [],
  modal: { modalName: "cancel", isShowModal: false },
  selectedUrunId: "",
} as IProductState;

const headers = {
  headers: {
    token: "87D84C3B6E92D82E73FCD4A1DC78F95E",
  },
};

export const getGrupList = createAsyncThunk(
  "product/getGrupList",
  async (thunkAPI) => {
    const response = await customFetch.post(
      "/public/customerUrun/grupList",
      {},
      headers
    );
    return await response.data.data;
  }
);

export const getUrunList = createAsyncThunk(
  "product/getUrunList",
  async (grupId: number, thunkAPI) => {
    const response = await customFetch.post(
      "/public/customerUrun/list",
      { paket_grup_id: grupId },
      headers
    );
    return await response.data.data;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    selectGrup: (state, { payload }) => {
      state.selectedGrup = { id: payload.id, name: payload.name };
    },
    showModal: (state, { payload }) => {
      state.modal = {
        modalName: payload.modalName,
        isShowModal: payload.isShowModal,
      };
    },
    selectUrunId: (state, { payload }) => {
      state.selectedUrunId = payload;
    },
    cancelUrun: (state, { payload }) => {
      state.urunList = state.urunList.map((urun) => {
        if (urun.id === payload.id) {
          return {
            ...urun,
            iptal_talep: payload.value,
            iptal_sebep: payload.sebep,
          };
        }

        return urun;
      });
    },
  },
  extraReducers(builder) {
    builder.addCase(getGrupList.pending, (state) => {
      state.grupLoading = true;
    });
    builder.addCase(
      getGrupList.fulfilled,
      (state, action: PayloadAction<Array<IGrupList>>) => {
        state.grupLoading = false;
        state.grupList = action.payload;
      }
    );
    builder.addCase(getGrupList.rejected, (state, action) => {
      state.grupLoading = false;
      state.grupList = [];
      state.error = action.error.message;
    });

    builder.addCase(getUrunList.pending, (state) => {
      state.urunLoading = true;
    });
    builder.addCase(
      getUrunList.fulfilled,
      (state, action: PayloadAction<Array<IUrunList>>) => {
        state.urunLoading = false;
        state.urunList = action.payload;
      }
    );
    builder.addCase(getUrunList.rejected, (state, action) => {
      state.urunLoading = false;
      state.urunList = [];
      state.error = action.error.message;
    });
  },
});

export const { selectGrup, showModal, cancelUrun, selectUrunId } =
  productSlice.actions;

export default productSlice.reducer;
