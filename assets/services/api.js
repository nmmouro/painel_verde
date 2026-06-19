import { API_URL } from "../config/config.js";

export async function apiGet(sheet){
  const res = await fetch(`${API_URL}?sheet=${sheet}`);
  return (await res.json()).data || [];
}

export async function apiPost(sheet, data){
  return fetch(API_URL, {
    method:"POST",
    body: JSON.stringify({
      action:"create",
      sheet,
      data
    })
  });
}

export async function apiPut(sheet, row, data){
  return fetch(API_URL, {
    method:"POST",
    body: JSON.stringify({
      action:"update",
      sheet,
      row,
      data
    })
  });
}

export async function apiDelete(sheet, row){
  return fetch(API_URL, {
    method:"POST",
    body: JSON.stringify({
      action:"delete",
      sheet,
      row
    })
  });
}
