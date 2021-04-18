import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getAllUsersFromAPI} from "./actions/users"


export const Users = () =>{
  const dispatch = useDispatch()
  const {users} = useSelector((store) => store)

  useEffect(() => {
    const getUsers = async () => {
      await dispatch(getAllUsersFromAPI())
    }
    getUsers()
  },[dispatch])

  console.log('userss',users);


  return ('hi')
}