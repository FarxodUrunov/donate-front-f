import { useState } from "react"

interface ScreeningUploadProps {
    title: string;
    subtitle?: string;
}

const FileUpload = (props: ScreeningUploadProps) => {
    const [file, setFile] = useState<string[]>([])

    const onFileChange = (e:any) => {
        setFile([...file, e.target.files[0].name])
    }

    return (
        <>
            <div className="form-group mb-4">
                <label className="form-label" htmlFor="photos">{props.title} (optional)</label>
                <div className="upload-file-box">
                    <p className="d-flex justify-content-center align-items-center">
                        <svg className="me-3" xmlns="http://www.w3.org/2000/svg" height={29} width={24.5} viewBox="0 0 448 512">
                            <path fill="currentColor" d="M246.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 109.3V320c0 17.7 14.3 32 32 32s32-14.3 32-32V109.3l73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 53 43 96 96 96H352c53 0 96-43 96-96V352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V352z" />
                        </svg>
                        <span>Drag and drop or <a href="#" onClick={() => document.querySelector<any>(".form-control-file").click()} id="chooseFileLink">choose file</a> less than 10MB
                        </span>
                    </p>
                    <input onChange={(e)=> onFileChange(e)} type="file" className="form-control-file d-none" id="photos" accept="image/*" multiple />
                </div>
                {
                    props.subtitle && 
                    <div className="form-text pb-3 mt-2 d-flex align-items-center">
                        <svg className="fa-solid fa-circle-info me-1 " xmlns="http://www.w3.org/2000/svg" height={14} width={14} viewBox="0 0 512 512">
                            <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                        </svg>
                        {props.subtitle}
                    </div>
                }
                <ul className="mt-2">
                    {
                        file?.map((item,i) => (
                            <li key={i} >{item}</li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

export default FileUpload
