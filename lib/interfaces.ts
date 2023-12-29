export interface IGrupList {
  paket_grup_id: number;
  paket_grup: string;
}

export interface Modal {
  isShowModal: boolean;
  modalName: "revoke" | "cancel" | "successful";
}

export interface IUrunList {
  id: string;
  json_ozellik: {
    aciklama: string;
    ozellik: Array<{}>;
  };
  urun_fiyat: number;
  sip_tarih: Date;
  hizmet_durum: "Aktif" | "Pasif" | "Beklemede" | "Durduruldu";
  iptal_talep: boolean;
  start_zaman: Date;
  urun_fiyat_tl: number;
  ozellik: any;
  iptal_sebep: string;
}

interface IProductState {
  grupList: IGrupList[];
  grupLoading: boolean;
  urunLoading: boolean;
  error: string | undefined;
  selectedGrup: { id: number; name: string };
  urunList: IUrunList[];
  modal: Modal;
  selectedUrunId: string;
}

export default IProductState;
