import { publicRequest, userRequest } from "../requestMethods";
import { getProductFailure, getProductSuccess ,getProductStart, deleteProductStart, deleteProductSuccess, deleteProductFailure,updateProductStart,updateProductSuccess,updateProductFailure, addProductStart , addProductSuccess , addProductFailure} from "./productRedux";
import { getUsersStart,getUsersSuccess,getUsersFailure,loginFailure, loginStart,loginSucces } from "./userRedux"

export const login = async (dispatch,user) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/auth/login",user)
        dispatch(loginSucces(res.data));
    }catch(err){
        dispatch(loginFailure())
    }
};
export const getUsers = async (dispatch) => {
    dispatch(getUsersStart());
    try {
        const res = await publicRequest.get("/users")
        dispatch(getUsersSuccess(res.data));
    }catch(err){
        dispatch(getUsersFailure())
    }
};
export const getProducts = async (dispatch) => {
    dispatch(getProductStart());
    try {
        const res = await publicRequest.get("/products")
        dispatch(getProductSuccess(res.data));
    }catch(err){
        dispatch(getProductFailure())
    }
};

export const deleteProduct = async (id,dispatch) => {
    dispatch(deleteProductStart());
    try {
        const res = await userRequest.delete(`/products/${id}`)
        dispatch(deleteProductSuccess(id));
    }catch(err){
        dispatch(deleteProductFailure())
    }
};


export const updateProduct = async (id, product, dispatch) => {
    dispatch(updateProductStart());
    try {
        const res = await userRequest.put(`/products/${id}`)
        dispatch(updateProductSuccess({id,product}));
    }catch(err){
        dispatch(updateProductFailure())
    }
};

export const addProduct = async (product ,dispatch) => {
    dispatch(addProductStart());
    try {
        const res = await userRequest.post(`/products`,product)
        dispatch(addProductSuccess(res.data));
    }catch(err){
        dispatch(addProductFailure())
    }
};