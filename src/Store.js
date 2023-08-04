import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import { Data, getoneproduct, login, singup, cart, getprofile, changeprofile, number, search, flag, submit, pprice, Allorders, oneorder } from "./Reducer";
import thunk from "redux-thunk";
// ریدیوسر ها باید به صورت ایتم های ابجکت داخل یک ابجکت ذخیره بشن و داخل یک متغیر ریخته بشن و ما این متغیر را به
// استور میدهیم تا استور ریدیوسر ها را بشناسد
// در ئاقع این نامبر هم خودش یک ابجکت هست که اسم کی با اسم ابجکت یکی است برای همین یکیش و مینویسیم
// Number={Number:the thing that reducer returns}
const reducer = combineReducers({ Data, getoneproduct, singup, login, cart, getprofile, changeprofile, number, pprice, search, oneorder, submit, Allorders, flag });
const middleware = [thunk];
//برای خوندن دیتا از لوکال استوریج از گت ایتم استفاده میکنیم و تبدیل میکنیم به ارایه که قبلا بود
// const data = JSON.parse(localStorage.getItem("data")) || [];
//حال باید دیتا را داخل استیت بارگذاری کنیم.اسم استیت را به عنوان کی مینویسیم و برای ولیو دیتایی که
//از لوکال استوریج خواندیم و بریزیم در استیت
// const initialstate = { Post: { data: [...data], loading: false, error: "" } };
const initialstate = {};
const store = createStore(
  reducer,
  initialstate,
  applyMiddleware(...middleware)
);
export default store;
//چیزی داریم به اسم اینیشیال استیت که اجازه میده از یک منبع خارجی مثل لوکال استوریج
//ما چیزی را بخوانیم و داخل استیت مقدار دهی بکنیم و این اینیشیال استیت در ورودی دوم قرار میگیرد در استور
//همیشه باید ابجکت باشه
