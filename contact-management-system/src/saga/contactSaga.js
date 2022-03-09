
import { call,put,takeEvery } from 'redux-saga/effects';
import axios from 'axios';

  export function* watchGetUser(){
    yield takeEvery('GET_USER',getUser);
  }

  export function* watchAddUser(){
    yield takeEvery('PUT_USER_INFO',putUser);
  }

  export function* watchUpdateUser() {
    yield takeEvery('UPDATE_USER', updateUser);
  }
  
  export function* watchDeleteUser() {
    yield takeEvery('DELETE_USER', deleteUser);
  }


  function* getUser(){
    try{
      console.log('..inside get saga')
      const res = yield call(axios.get,"http://localhost:4000/users");
      yield put({type:'GET_USER_INFO_SUCCESS',getInfo : res.data});
    }
    catch (e) { console.log('error',e) }
  }


  function* putUser(action){
    try{
      const udata = action.payload;
      const res = yield call(axios.post,"http://localhost:4000/users",udata);
      console.log(res);
      yield put({type:'PUT_USER_INFO_SUCCESS',putInfo : res.data});
    }
    catch (e) { console.log('error',e) }
  }


  function* updateUser(action){
    try{
        const udata = action.payload;
        yield call(axios.put,"http://localhost:4000/users/"+udata.id, udata); 
        yield put({type:"GET_USER"});
      }
      catch (e) { console.log('error',e) }
  }


  function* deleteUser(action){
    try{
      const userId = action.payload
      yield call( axios.delete, "http://localhost:4000/users/"+userId);
      yield put({type:'GET_USER'});
    }
    catch (e) { console.log('error',e) }
  }
