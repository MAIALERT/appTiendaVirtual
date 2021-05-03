//import React, { Component } from 'react'
import axios from 'axios'


//cargar la url base
const base_url_roles = process.env.REACT_APP_BASE_URL

export async function getRoles(){
   try {
       
       const res =  await axios.get(base_url_roles);
       return res;
   } catch (e) {
       console.log(e);
   }
}