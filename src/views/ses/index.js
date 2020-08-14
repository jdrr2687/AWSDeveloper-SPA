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
    const [state, setState] = useState({
        subject: "",
        message: "",
        sendedEmail: ""
    })

    const enviar = async (e) => {
        let response = await EnviarEmail(state);
        if (response.error) {
            setError(true)
            setDone(false)
        }
        if (!response.error) {
            setError(false)
            setDone(true)
        }
    }
    const onChange = (e) => {
        const { target } = e

        setState({
            ...state,
            [target.name]: target.value
        })
    }

    return (
        <CRow>
            <CCol xs="12" md="8">
                <CCard>
                    <CCardHeader>
                        Envio de correo
              <small> SES</small>
                    </CCardHeader>
                    <CCardBody>
                        <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
                            <CFormGroup row>
                                <CCol md="3">
                                    <CLabel htmlFor="text-input">Asunto</CLabel>
                                </CCol>
                                <CCol xs="12" md="9">
                                    <CInput value={state.subject} onChange={onChange} id="text-input" name="subject" placeholder="" />
                                </CCol>
                            </CFormGroup>
                            <CFormGroup row>
                                <CCol md="3">
                                    <CLabel htmlFor="email-input">Correo</CLabel>
                                </CCol>
                                <CCol xs="12" md="9">
                                    <CInput value={state.sendedEmail} onChange={onChange} type="email" id="email-input" name="sendedEmail" placeholder="" autoComplete="email" />
                                </CCol>
                            </CFormGroup>
                            <CFormGroup row>
                                <CCol md="3">
                                    <CLabel htmlFor="textarea-input">Mensaje</CLabel>
                                </CCol>
                                <CCol xs="12" md="9">
                                    <CTextarea
                                        value={state.message}
                                        name="message"
                                        onChange={onChange}
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
                        <CButton onClick={enviar} type="submit" size="lg" color="primary">
                            <CIcon name="cil-scrubber" />
                             Enviar
                        </CButton>
                    </CCardFooter>
                </CCard>
            </CCol>
        </CRow>

    )
}

export default SES
