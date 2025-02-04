import React, { useEffect,useState } from 'react'

const localCache={};
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
    if(localCache[uri]){
      console.log('buscando en cache',localCache[uri])
        setState({
            data:localCache[uri],
            loading:false,
            hasError:false,
            error:null
        })
        return
    }
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
        console.log('Aqui se guarda en cache',localCache[uri])
        localCache[uri]=data
    }
    return {
        data:state.data,
        isLoading:state.loading,
        hasError:state.hasError,
        error:state.error
    }
  
}