import {combineReducers} from 'redux';
import {registerReducer, photoReducer} from './auth';
import {homeReducer} from './home';
import {globalReducer} from './global';
import {orderReducer} from './order';
import {pakaianReducer} from './pakaian';
import {heelsReducer} from './heels';
import {categoryReducer} from './category';
import {uploadPhotoPembayaranReducer} from './pembayaran';
import {lelangReducer} from './lelang';
import { listUserLelangReducer } from './listuserlelang';
import { tukarBarangReducer } from './tukarbarang';


const reducer = combineReducers({
  registerReducer,
  globalReducer,
  photoReducer,
  homeReducer,
  orderReducer,
  pakaianReducer,
  heelsReducer,
  categoryReducer,
  uploadPhotoPembayaranReducer,
  lelangReducer,
  listUserLelangReducer,
  tukarBarangReducer
});

export default reducer;
