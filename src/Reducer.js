// import React from "react";
// export const Reducer=(state={data:[],loading:false,error:""},{type,payload})=>{
//     switch (type) {
//         case "getOrder":
//             console.log(state);

//           return payload

//         default:
//             return payload
//     }
// }
// جنس همه ی ریدیو.سر ها غانکشن است
export const Data = (
  state = { data: [], loading: false, error: "" },
  action
) => {
  // ریدیوسر 2 تا ورودی داره که اولیش مقدارداولیه ی استیت هست
  // اکشن ورودی فانکشن دیسپچ است که یک ابجکت بود با دوتا کی. حالا با استفاده از این پاس کاری ها میتونیم تغییرات را در استیت اعمال کنیم
  // برای راحتی کار میتوانیم تایپ را دی استراکت کنیم.{type}
  // باری اینکه ممکن است چندتا ریدیوسر داشته باشیم از اکسپورت با اسم استفاده کردیم
  //    if (action.type=="plus"){
  //     state+=1
  //    }
  switch (action.type) {
    case "getpost":
      return action.paylode;


    // case "changetext":
    //   return action.paylode;


    default:
      return state;
  }
};
export const cart = (state = { data: [], error: "" }, action) => {
  switch (action.type) {
    case "cart":

      return action.paylode

    default:
      return state;
  }
}
export const submit = (state = { data: [], loading: false, error: "" }, action) => {
  switch (action.type) {
    case "submit":

      return action.paylode

    default:
      return state;
  }
}
export const Allorders = (state = { data: [], loading: false, error: "" }, action) => {
  switch (action.type) {
    case "allorders":

      return action.paylode

    default:
      return state;
  }
}

export const pprice = (state = [], action) => {
  switch (action.type) {
    case "pprice":

      return action.paylode

    default:
      return state;
  }
}
export const oneorder = (state = { data: [], loading: false, error: "" }, action) => {
  switch (action.type) {
    case "oneorder":

      return action.paylode

    default:
      return state;
  }
}
export const search = (state = { tex: "" }, action) => {
  switch (action.type) {
    case "search":

      return action.paylode

    default:
      return state;
  }
}
export const flag = (state = false, action) => {
  switch (action.type) {
    case "flag":

      return action.paylode

    default:
      return state;
  }
}
export const getoneproduct = (state = { data: [], loading: false, error: "" }, action) => {
  switch (action.type) {
    case "getoneproduct":

      return action.paylode

    default:
      return state;
  }

}
export const getprofile = (state = { data: [], loading: false, error: "" }, action) => {
  switch (action.type) {
    case "getprofile":

      return action.paylode

    default:
      return state;
  }

}
export const changeprofile = (state = { data: [], loading: false, error: "" }, action) => {
  switch (action.type) {
    case "changeprofile":

      return action.paylode

    default:
      return state;
  }

}
export const singup = (state = { dataa: [], loading: false, error: "" }, action) => {
  switch (action.type) {
    case "singup":

      return action.paylode

    default:
      return state
  }

}
export const login = (state = { data: [], loading: false, error: "" }, action) => {
  switch (action.type) {
    case "login":

      return action.paylode

    default:
      return state
  }

}
export const number = (state = 0, action) => {
  switch (action.type) {
    case "number":

      return action.paylode

    default:
      return state
  }

}
  // console.log(Post());