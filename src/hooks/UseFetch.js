import React, { useEffect,useState } from 'react'

export const UseFetch = (uri) => {

  const [state, setState] = useState({
    data:null,
    loading:true,
    hasError:false,
    error:null
  })

  useEffect(() => {
    fetchData()
  }, [uri])

  const setLoadingState = () => {
    setState({
        data:null,
        loading:true,
        hasError:false,
        error:null
    })
  }

  const fetchData = async () => {
    setLoadingState()
    const response = await fetch(uri)
        
    if(!response.ok){
        setState({
            data:null,
            loading:false,
            hasError:true,
            error:{
                status:response.status,
                statusText:response.statusText
            }
        })
        return
    }

    const data = await response.json()
        setState({
            data:data,
            loading:false,
            hasError:true,
            error:null
        })
        
    }
    return {
        data:state.data,
        loading:state.loading,
        hasError:state.hasError,
        error:state.error
    }
  
}