import { ADD_NEW_NOTE, REMOVE_NOTE , DETAIL_NOTE } from "../../constain/index";
//action thêm note
export const actAddNote = (content,title) => {
  return { type: ADD_NEW_NOTE, content,title};
};
//action xóa note
export const actRemoveNote = (id) => {
  return {type: REMOVE_NOTE, id,};
};
// action chi tiết note
export const actDetailNote = (id,title) =>{
  return { type: DETAIL_NOTE , id , title ,};
}