import React, { useEffect } from 'react'
import Swal from 'sweetalert2'


const ShowError = ({ error,setError,success,setSuccess }) => {
    useEffect(() => {
        if (error||success) {
            Swal.fire({
                icon:error? "error":"success",
                title:error? "Oops...":"successfully",
                text: error,
                // footer: '<a href="#">Why do I have this issue?</a>'
            });
        }

    }, [error,success])
    setError("")
    setSuccess("")

    return (
        <>

        </>
    )
}

export default ShowError