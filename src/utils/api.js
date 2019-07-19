import axios from 'axios'

export const getActivity = (params = {}) => {
  return axios.get('https://www.boredapi.com/api/activity', {
    params
  })
}

export const getActivities = (keys = []) => {
  return Promise.all(keys.map(key => getActivity({ key })))
}
