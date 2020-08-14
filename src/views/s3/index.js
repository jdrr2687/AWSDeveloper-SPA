import React, { useState } from 'react'
import {
    CButton,
    CCard,
    CCardBody,
    CCardFooter,
    CCardHeader,
    CCol,
    CForm,
    CFormGroup,
    CInputFile,
    CLabel,
    CRow,
    CAlert
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { SubirArchivo } from '../../servicios';

const S3 = () => {
    const [error, setError] = useState(false)
    const [done, setDone] = useState(false)
    const [files, setFiles] = useState()

    const subir = async (e) => {
        let response = await SubirArchivo(files);
        if (response.error) {
            setError(true)
            setDone(false)
        }
        if (!response.error) {
            setError(false)
            setDone(true)
        }
    }

    return (
        <CRow>
            <CCol xs="12" md="8">
                <CCard>
                    <CCardHeader>
                        Subir archivo
                        <small> S3</small>
                    </CCardHeader>
                    <CCardBody>
                        <CForm action={""} method="post" encType="multipart/form-data" className="form-horizontal">
                            <CFormGroup row>
                                <CCol md="3">
                                    <CLabel>Multiple File input</CLabel>
                                </CCol>
                                <CCol xs="12" md="9">
                                    <CInputFile
                                        id="file-multiple-input"
                                        name="file-multiple-input"
                                        multiple
                                        onChange={(e) => setFiles(e.target.files)}
                                        custom
                                    />
                                    <CLabel htmlFor="file-multiple-input" variant="custom-file">
                                        Choose Files...
                                    </CLabel>
                                </CCol>
                            </CFormGroup>
                            {
                                error &&
                                <CAlert color="danger">
                                    Ha ocurrido un error!!
                                </CAlert>
                            }
                            {
                                done &&
                                <CAlert color="success">
                                    Accion realizada exitosamente!!
                                </CAlert>
                            }
                        </CForm>

                    </CCardBody>
                    <CCardFooter>
                        <CButton onClick={subir} size="lg" color="primary"><CIcon name="cil-scrubber" /> Submit</CButton>
                    </CCardFooter>
                </CCard>
            </CCol>
        </CRow>

    )
}

export default S3
