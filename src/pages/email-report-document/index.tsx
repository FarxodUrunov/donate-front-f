import Image from "next/image"
import Link from "next/link"

const EmailReportDocument = () => {
    return (

        <table width="100%" bgcolor="#f5f5f5" cellPadding={0} cellSpacing={0} border={0} align="center">
            <tbody>
                <tr>
                    <td>
                        <table width={650} bgcolor="#fff" cellPadding={0} cellSpacing={0} border={0} align="center">
                            <tbody>
                                <tr>
                                    <td colSpan={3} height={22} align="center">&nbsp;</td>
                                </tr>
                                <tr>
                                    <td width={24}>&nbsp;</td>
                                    <td align="left" valign="top">
                                        <Link href="#">
                                            <Image src="/images/logo.png" width={140} height={47.75} style={{ maxWidth: '140px', width: '140px' }} alt="Mysight" border={0} />
                                        </Link>
                                    </td>
                                    <td width={24}>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td height={30} align="center">&nbsp;</td>
                                </tr>
                                <tr>
                                    <td width={24} />
                                    <td valign="top" colSpan={2}>
                                        <table width="100%" cellPadding={0} cellSpacing={0} border={0}>
                                            <tbody>
                                                <tr>
                                                    <td width={90}>
                                                        <div style={{ paddingBottom: '10px', fontSize: '11px', fontWeight: 400, color: '#999999' }}>
                                                            File Number</div>
                                                    </td>
                                                    <td>
                                                        <div style={{ paddingBottom: '10px', fontSize: '12px', fontWeight: 'bold', color: '#333333' }}>
                                                            775755</div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td width={90}>
                                                        <div style={{ paddingBottom: '10px', fontSize: '11px', fontWeight: 400, color: '#999999' }}>
                                                            Report to</div>
                                                    </td>
                                                    <td>
                                                        <div style={{ paddingBottom: '10px', fontSize: '12px', fontWeight: 'bold', color: '#333333' }}>
                                                            Lincoln workman</div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                    <td>
                                        <table width="100%" cellPadding={0} cellSpacing={0} border={0}>
                                            <tbody>
                                                <tr>
                                                    <td width={90}>
                                                        <div style={{ paddingBottom: '10px', fontSize: '11px', fontWeight: 400, color: '#999999' }}>
                                                            Report Date</div>
                                                    </td>
                                                    <td>
                                                        <div style={{ paddingBottom: '10px', fontSize: '12px', fontWeight: 'bold', color: '#333333' }}>
                                                            12-30-2019</div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td width={90}>
                                                        <div style={{ paddingBottom: '10px', fontSize: '11px', fontWeight: 400, color: '#999999' }}>
                                                            Order Date</div>
                                                    </td>
                                                    <td>
                                                        <div style={{ paddingBottom: '10px', fontSize: '12px', fontWeight: 'bold', color: '#333333' }}>
                                                            12-30-2019</div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td width={90}>
                                                        <div style={{ fontSize: '11px', fontWeight: 400, color: '#999999' }}>
                                                            Type</div>
                                                    </td>
                                                    <td>
                                                        <div style={{ fontSize: '12px', fontWeight: 'bold', color: '#333333' }}>
                                                            General Screening</div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                    <td width={24} />
                                </tr>
                                <tr>
                                    <td width={24} />
                                    <td height={30} colSpan={4} style={{ borderBottom: '1px solid #cccccc' }} />
                                    <td width={24} />
                                </tr>
                                <tr>
                                    <td height={28} />
                                </tr>
                                <tr>
                                    <td width={24} />
                                    <td>
                                        <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#333333' }}>
                                            General Information</div>
                                    </td>
                                    <td width={24} />
                                </tr>
                                <tr>
                                    <td height={22} />
                                </tr>
                                <tr>
                                    <td width={24} />
                                    <td valign="top" colSpan={2}>
                                        <table width="100%" cellPadding={0} cellSpacing={0} border={0}>
                                            <tbody>
                                                <tr>
                                                    <td width={120}>
                                                        <div style={{ paddingBottom: '10px', fontSize: '11px', fontWeight: 400, color: '#999999' }}>
                                                            Candidate Full First and Last name</div>
                                                    </td>
                                                    <td width={12} />
                                                    <td valign="top">
                                                        <div style={{ paddingBottom: '10px', fontSize: '12px', fontWeight: 'bold', color: '#333333' }}>
                                                            Lincoln Workman</div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div style={{ paddingBottom: '10px', fontSize: '11px', fontWeight: 400, color: '#999999' }}>
                                                            Date of birth</div>
                                                    </td>
                                                    <td width={12} />
                                                    <td valign="top">
                                                        <div style={{ paddingBottom: '10px', fontSize: '12px', fontWeight: 'bold', color: '#333333' }}>
                                                            01- 01-XXXX</div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div style={{ paddingBottom: '10px', fontSize: '11px', fontWeight: 400, color: '#999999' }}>
                                                            Gender</div>
                                                    </td>
                                                    <td width={12} />
                                                    <td valign="top">
                                                        <div style={{ paddingBottom: '10px', fontSize: '12px', fontWeight: 'bold', color: '#333333' }}>
                                                            Male</div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                    <td>
                                        <table width="100%" cellPadding={0} cellSpacing={0} border={0}>
                                            <tbody>
                                                <tr>
                                                    <td width={110}>
                                                        <div style={{ paddingBottom: '10px', fontSize: '11px', fontWeight: 400, color: '#999999' }}>
                                                            State of origin and LGA</div>
                                                    </td>
                                                    <td width={4} />
                                                    <td valign="top">
                                                        <div style={{ paddingBottom: '10px', fontSize: '12px', fontWeight: 'bold', color: '#333333' }}>
                                                            White River Junction, VT 05009</div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div style={{ paddingBottom: '10px', fontSize: '11px', fontWeight: 400, color: '#999999' }}>
                                                            Paternal State of origin and LGA</div>
                                                    </td>
                                                    <td width={4} />
                                                    <td valign="top">
                                                        <div style={{ paddingBottom: '10px', fontSize: '12px', fontWeight: 'bold', color: '#333333' }}>
                                                            Paternal State of origin and LGA</div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div style={{ fontSize: '11px', fontWeight: 400, color: '#999999' }}>
                                                            Maternal State of origin and LGA</div>
                                                    </td>
                                                    <td width={4} />
                                                    <td valign="top">
                                                        <div style={{ fontSize: '12px', fontWeight: 'bold', color: '#333333' }}>
                                                            Paternal State of origin and LGA</div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                    <td width={24} />
                                </tr>
                                <tr>
                                    <td width={24} />
                                    <td height={30} colSpan={4} style={{ borderBottom: '1px solid #cccccc' }} />
                                    <td width={24} />
                                </tr>
                                <tr>
                                    <td height={24} />
                                </tr>
                                <tr>
                                    <td width={24} />
                                    <td>
                                        <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#333333' }}>
                                            Investigative Information</div>
                                    </td>
                                    <td width={24} />
                                </tr>
                                <tr>
                                    <td height={22} />
                                </tr>
                                <tr>
                                    <td width={24} />
                                    <td colSpan={3}>
                                        <table width="100%" cellPadding={0} cellSpacing={0} border={0}>
                                            <tbody>
                                                <tr>
                                                    <td width={120}>
                                                        <div style={{ paddingBottom: '10px', fontSize: '11px', fontWeight: 400, color: '#999999' }}>
                                                            Report Date</div>
                                                    </td>
                                                    <td width={12} />
                                                    <td valign="top">
                                                        <div style={{ paddingBottom: '10px', fontSize: '12px', fontWeight: 'bold', color: '#333333' }}>
                                                            1/20/2021</div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div style={{ paddingBottom: '10px', fontSize: '11px', fontWeight: 400, color: '#999999' }}>
                                                            Completed Date</div>
                                                    </td>
                                                    <td width={12} />
                                                    <td valign="top">
                                                        <div style={{ paddingBottom: '10px', fontSize: '12px', fontWeight: 'bold', color: '#333333' }}>
                                                            1/20/2021</div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td valign="top">
                                                        <div style={{ paddingBottom: '10px', fontSize: '11px', fontWeight: 400, color: '#999999' }}>
                                                            Search Scope</div>
                                                    </td>
                                                    <td width={12} />
                                                    <td>
                                                        <div style={{ paddingBottom: '10px', fontSize: '12px', fontWeight: 'bold', color: '#333333' }}>
                                                            Spritual, love and compatibility</div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                    <td width={24} />
                                </tr>
                                <tr>
                                    <td height={10} />
                                </tr>
                                <tr>
                                    <td width={24} />
                                    <td>
                                        <table width="100%" cellPadding={0} cellSpacing={0} border={0}>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div style={{ paddingBottom: '10px', fontSize: '11px', fontWeight: 400, color: '#999999' }}>
                                                            Question Asked?</div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div style={{ paddingBottom: '10px', fontSize: '12px', fontWeight: 'bold', color: '#333333' }}>
                                                            1. Is the foundation of this good?</div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div style={{ paddingBottom: 0, fontSize: '12px', fontWeight: 'bold', color: '#333333' }}>
                                                            2. Is the house good enough to move in?</div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                    <td width={24} />
                                </tr>
                                <tr>
                                    <td height={24} />
                                </tr>
                                <tr>
                                    <td width={24} />
                                    <td colSpan={3}>
                                        <table width="100%" cellSpacing={0} cellPadding={0} border={0}>
                                            <tbody>
                                                <tr>
                                                    <td width={130} valign="top">
                                                        <div style={{ fontSize: '12px', fontWeight: 400, color: '#999999' }}>
                                                            Directivities</div>
                                                    </td>
                                                    <td>
                                                        <table width="100%" cellSpacing={0} cellPadding={0} border={0}>
                                                            <tbody><tr>
                                                                <td width={70} valign="center">
                                                                    <div style={{ padding: 0, margin: 0, fontSize: '12px', fontWeight: 'bold', color: '#333' }}>
                                                                        Directives 1</div>
                                                                </td>
                                                                <td colSpan={1} valign="top">
                                                                    <a href="#" style={{ padding: '6px 12px', margin: 0, textDecoration: 'none', marginLeft: '6px', borderRadius: '5px', display: 'inline-block', backgroundColor: '#72bd2f', color: '#ffffff', fontSize: '8px', fontWeight: 'bold' }}>PDF</a>
                                                                </td>
                                                            </tr>
                                                                <tr>
                                                                    <td colSpan={2}>
                                                                        <div style={{ padding: 0, paddingTop: '10px', margin: 0, fontSize: '10px', fontWeight: 400, color: '#333', lineHeight: '1.4' }}>
                                                                            Lorem ipsum dolor sit amet, consectetur adipiscing
                                                                            elit, sed do eiusmod tempor incididunt ut labore et
                                                                            dolore magna aliqua. Ut enim ad minim veniam, quis
                                                                            nostrud exercitation ullamco laboris nisi ut aliquip
                                                                            ex ea commodo consequat. Duis aute irure dolor in
                                                                            reprehenderit in voluptate velit esse cillum dolore
                                                                            eu fugiat nulla pariatur. Excepteur sint occaecat
                                                                            cupidatat non proident, sunt in culpa qui officia
                                                                            deserunt mollit anim id est laborum
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td colSpan={2}>
                                                                        <div style={{ padding: 0, paddingTop: '10px', margin: 0, fontSize: '10px', fontWeight: 400, color: '#333', lineHeight: '1.4' }}>
                                                                            Lorem ipsum dolor sit amet, consectetur adipiscing
                                                                            elit, sed do eiusmod tempor incididunt ut labore et
                                                                            dolore magna aliqua. Ut enim ad minim veniam, quis
                                                                            nostrud exercitation ullamco laboris nisi ut aliquip
                                                                            ex ea commodo consequat.
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td colSpan={2}>
                                                                        <div style={{ padding: 0, paddingTop: '10px', margin: 0, fontSize: '10px', fontWeight: 400, color: '#333', lineHeight: '1.4' }}>
                                                                            Lorem ipsum dolor sit amet, consectetur adipiscing
                                                                            elit, sed do eiusmod tempor incididunt ut labore et
                                                                            dolore magna aliqua. Ut enim ad minim veniam, quis
                                                                            nostrud exercitation ullamco laboris nisi ut aliquip
                                                                            ex ea commodo consequat. Duis aute irure dolor in
                                                                            reprehenderit in voluptate velit esse cillum dolore
                                                                            eu fugiat nulla pariatur. Excepteur sint occaecat
                                                                            cupidatat non proident, sunt in culpa qui officia
                                                                            deserunt mollit anim id est laborum
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </tbody></table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                    <td width={24} />
                                </tr>
                                <tr>
                                    <td height={20} />
                                </tr>
                                <tr>
                                    <td width={24} />
                                    <td colSpan={3}>
                                        <table width="100%" cellSpacing={0} cellPadding={0} border={0}>
                                            <tbody>
                                                <tr>
                                                    <td width={130} valign="top">
                                                        <div style={{ fontSize: '12px', fontWeight: 400, color: '#999999' }}>
                                                            Conclusion</div>
                                                    </td>
                                                    <td>
                                                        <table width="100%" cellSpacing={0} cellPadding={0} border={0}>
                                                            <tbody><tr>
                                                                <td width={120} valign="center">
                                                                    <div style={{ padding: 0, margin: 0, fontSize: '12px', fontWeight: 'bold', color: '#333' }}>
                                                                        Generaal Screening</div>
                                                                </td>
                                                                <td valign="top">
                                                                    <a href="#" style={{ padding: '6px 12px', margin: 0, textDecoration: 'none', marginLeft: '6px', borderRadius: '5px', display: 'inline-block', backgroundColor: '#72bd2f', color: '#ffffff', fontSize: '8px', fontWeight: 'bold' }}>PDF</a>
                                                                </td>
                                                            </tr>
                                                            </tbody></table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                    <td width={24} />
                                </tr>
                                <tr>
                                    <td width={24} />
                                    <td height={30} colSpan={4} style={{ borderBottom: '1px solid #cccccc' }} />
                                    <td width={24} />
                                </tr>
                                <tr>
                                    <td height={24} />
                                </tr>
                                <tr>
                                    <td width={24} />
                                    <td style={{ textAlign: 'center' }} colSpan={4}>
                                        <table width="100%" cellPadding={0} cellSpacing={0} border={0}>
                                            <tbody><tr>
                                                <td align="center">
                                                    <div style={{ padding: 0, margin: 0, fontSize: '18px', fontWeight: 'bold', color: '#333333' }}>
                                                        Disclaimer</div>
                                                </td>
                                            </tr>
                                                <tr>
                                                    <td align="center">
                                                        <div style={{ padding: 0, paddingBottom:"32px", paddingTop: '12px', margin: 0, fontSize: '11px', fontWeight: 400, color: '#333333' }}>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                            culpa qui officia deserunt mollit anim id est laborum
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody></table>
                                    </td>
                                    <td width={24} />
                                </tr>
                                <tr>
                                    <td width="50%" colSpan={3} />
                                    <td width="50%">
                                        <table width="100%" cellSpacing={0} cellPadding={0}>
                                            <tbody><tr>
                                                <td>
                                                    <div style={{ fontSize: '13px', fontWeight: 500, color: '#777777', padding: 0, margin: 0 }}>By:</div>
                                                </td>
                                                <td style={{ verticalAlign: 'bottom' }}>
                                                    <div style={{ borderBottom: '1px solid #777777', width: '100px' }} />
                                                </td>
                                                <td>
                                                    <div style={{ fontSize: '13px', fontWeight: 500, color: '#777777', padding: 0, margin: 0 }}>Date:</div>
                                                </td>
                                                <td style={{ verticalAlign: 'bottom' }}>
                                                    <div style={{ fontSize: '13px', fontWeight: 500, color: '#777777', padding: 0, margin: 0, borderBottom: '1px solid #777', width: '90px' }}>02-07-2022</div>
                                                </td>
                                            </tr>
                                                <tr>
                                                    <td colSpan={1} />
                                                    <td>
                                                        <div style={{ fontSize: '13px', fontWeight: 500, color: '#444444', padding: '3px 0', margin: 0 }}>Joe Swason</div>
                                                    </td>
                                                </tr>
                                            </tbody></table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default EmailReportDocument
