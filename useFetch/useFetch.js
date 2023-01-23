import { useEffect, useState } from "react"

export const useFetch = (url) => {

    const [state, setState] = useState({

        data: null,
        isLoading: true,
        hasError: null,

    });

    const getFetch = async() => {

        setState({

            ...state,
            isLoading: true,

        }); //Colocamos el isLoading en true mientras se realiza la petición https

        try {
   
            const resp = await fetch(url);
            const data = await resp.json();

            setState({

                data,
                isLoading: false,
                hasError: null,
    
            }) //Asignamos los valores del objeto una vez termina la petición

        } catch(e) {

            setState({

                ...state,
                isLoading: false,
                hasError: e

            })

        }

    }

    useEffect(() => {
      
        getFetch();

    }, [url])
    

  return {

    data:       state.data,
    isLoading:  state.isLoading,
    hasError:   state.hasError, 

  };
}
