import React, { useEffect, useState } from 'react'
import {
    CButton,
    CCard,
    CCardBody,
    CCardFooter,
    CCardHeader,
    CCol,
    CForm,
    CFormGroup,
    CTextarea,
    CInput,
    CLabel,
    CRow,
    CAlert
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import { EnviarEmail } from '../../servicios';

const SES = () => {
    const [error, setError] = useState(false)
    const [done, setDone] = useState(false)

    const enviar = () => {

    }

    return (
        <CRow>
            <CCol xs="12" md="8">
                <CCard>
                    <CCardHeader>
                        Enviar correo electrónico con 
              <small> SES</small>
                    </CCardHeader>
                    <CCardBody>
                        <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
                            <CFormGroup row>
                                <CCol md="3">
                                    <CLabel htmlFor="text-input">Asunto</CLabel>
                                </CCol>
                                <CCol xs="12" md="9">
                                    <CInput id="text-input" name="text-input" placeholder="" />
                                </CCol>
                            </CFormGroup>
                            <CFormGroup row>
                                <CCol md="3">
                                    <CLabel htmlFor="email-input">Email</CLabel>
                                </CCol>
                                <CCol xs="12" md="9">
                                    <CInput type="email" id="email-input" name="email-input" placeholder="" autoComplete="email" />
                                </CCol>
                            </CFormGroup>
                            <CFormGroup row>
                                <CCol md="3">
                                    <CLabel htmlFor="textarea-input">Mensaje</CLabel>
                                </CCol>
                                <CCol xs="12" md="9">
                                    <CTextarea
                                        name="textarea-input"
                                        id="textarea-input"
                                        rows="9"
                                    />
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
                        <CButton type="submit" size="lg" color="primary">
                            <CIcon name="cil-scrubber" />
                             Submit
                        </CButton>
                    </CCardFooter>
                </CCard>
            </CCol>
        </CRow>

    )
}

export default SES
