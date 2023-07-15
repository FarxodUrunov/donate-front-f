import Image from "next/image"
import Link from "next/link"

const EmailPasswordChanged = () => {
    return (
        <>
            <div>
                <table width="100%" bgcolor="#f5f5f5" cellPadding={0} cellSpacing={0} border={0} align="center">
                    <tbody>
                        <tr>
                            <td align="center">
                                <table width={500} bgcolor="#f5f5f5" cellPadding={0} cellSpacing={0} border={0} align="center">
                                    <tbody>
                                        <tr>
                                            <td colSpan={2} height={22} align="center" style={{ fontSize: '1px', lineHeight: '1px', width: '100%' }}>&nbsp;
                                            </td>
                                        </tr>
                                        <tr>
                                            <td align="left" valign="top" style={{ textAlign: 'center' }}>
                                                <Link href="#">
                                                    <Image width={185} height={63.11} src="/images/logo.png" style={{ width: '185px', maxWidth: '185px', fontSize: '24px', lineHeight: '42px' }} alt="Mysight" border={0} />
                                                </Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan={2} height={18} align="center" style={{ fontSize: '1px', lineHeight: '1px' }}>&nbsp;
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table bgcolor="#ffffff" cellPadding={0} cellSpacing={0} align="center" border={0} width={500}>
                                    <tbody>
                                        <tr>
                                            <td colSpan={3} align="center" height={44} style={{ fontSize: '1px', lineHeight: '1px' }}>&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td align="center" width={40} style={{ fontSize: '1px', lineHeight: '1px' }}>&nbsp;</td>
                                            <td height={35}>
                                                <div style={{ fontSize: '24px', fontWeight: 500, lineHeight: '35px', color: '#323439' }}>
                                                    Your Password has changed.
                                                </div>
                                            </td>
                                            <td align="center" width={40} style={{ fontSize: '1px', lineHeight: '1px' }}>&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td bgcolor="#ffffff" height={30} colSpan={3} style={{ fontSize: '1px', lineHeight: '1px' }}>
                                                &nbsp;
                                            </td>
                                        </tr>
                                        <tr>
                                            <td bgcolor="#ffffff" align="center" width={40} style={{ fontSize: '1px', lineHeight: '1px' }}>
                                                &nbsp;
                                            </td>
                                            <td bgcolor="#ffffff">
                                                <div style={{ fontSize: '16px', fontWeight: 400, lineHeight: '27px', color: '#5a5b5f' }}>
                                                    This is confirmation that your password for your Mysight account associated
                                                    with this email address has been changed. If this is a change you made, we're
                                                    good to go!
                                                </div>
                                            </td>
                                            <td bgcolor="#ffffff" align="center" width={40} style={{ fontSize: '1px', lineHeight: '1px' }}>
                                                &nbsp;
                                            </td>
                                        </tr>
                                        <tr>
                                            <td bgcolor="#ffffff" height={30} colSpan={3} style={{ fontSize: '1px', lineHeight: '1px' }}>
                                                &nbsp;
                                            </td>
                                        </tr>
                                        <tr>
                                            <td bgcolor="#ffffff" align="center" width={40} style={{ fontSize: '1px', lineHeight: '1px' }}>
                                                &nbsp;
                                            </td>
                                            <td bgcolor="#ffffff">
                                                <div style={{ fontSize: '16px', fontWeight: 400, lineHeight: '27px', color: '#5a5b5f' }}>
                                                    If you did not personally request this change, please securely <a href="#" style={{ textDecoration: 'none', color: '#72bd2f', whiteSpace: 'nowrap' }} target="_blank">reset your password</a> or <a href="#" style={{ textDecoration: 'none', color: '#72bd2f', whiteSpace: 'nowrap' }} target="_blank">contact support.</a> For additional information regarding Mysight password change
                                                    and reset, visit our dedicated
                                                    <a href="#" style={{ textDecoration: 'none', color: '#72bd2f', whiteSpace: 'nowrap' }} target="_blank"> Mysight Support page</a>.
                                                </div>
                                            </td>
                                            <td bgcolor="#ffffff" align="center" width={40} style={{ fontSize: '1px', lineHeight: '1px' }}>
                                                &nbsp;
                                            </td>
                                        </tr>
                                        <tr>
                                            <td width={40} />
                                            <td bgcolor="#ffffff" height={60} style={{ borderBottom: '1px solid #ccc', fontSize: '1px', lineHeight: '1px' }}>
                                                &nbsp;
                                            </td>
                                            <td width={40} />
                                        </tr>
                                    </tbody>
                                </table>
                                <table bgcolor="#ffffff" cellPadding={0} cellSpacing={0} align="center" border={0} width={500}>
                                    <tbody>
                                        <tr>
                                            <td bgcolor="#ffffff" height={55} colSpan={3}> &nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td width={40} />
                                            <td align="center" valign="top" style={{ fontSize: '13px', lineHeight: '20px', color: '#999999' }}>You received this email because you are registered on <a href="#" style={{ color: '#999999', textDecoration: 'none' }}>Mysight.com.ng</a></td>
                                            <td width={40} />
                                        </tr>
                                        <tr>
                                            <td bgcolor="#ffffff" height={40} colSpan={3}> &nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td align="center" colSpan={3}>
                                                <table width={320}>
                                                    <tbody>
                                                        <tr>
                                                            <td align="center" width={80}>
                                                                <Link href="#">
                                                                    <Image width={40} height={40} src="/images/fb.png" alt="facebook" border={0} />
                                                                </Link>
                                                            </td>
                                                            <td align="center" width={80}>
                                                                <Link href="#">
                                                                    <Image width={40} height={40} src="/images/tw.png" alt="Twitter" border={0} />
                                                                </Link>
                                                            </td>
                                                            <td align="center" width={80}>
                                                                <Link href="#">
                                                                    <Image width={40} height={40} src="/images/ig.png" alt="Instagram" border={0} />
                                                                </Link>
                                                            </td>
                                                            <td align="center" width={80}>
                                                                <Link href="#">
                                                                    <Image width={40} height={40} src="/images/tt.png" alt="TikTok" border={0} />
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td bgcolor="#ffffff" height={72} colSpan={3} style={{ borderBottom: '7px solid #72bd2f' }}> &nbsp;</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table width="100%" bgcolor="#f5f5f5" cellPadding={0} cellSpacing={0} border={0} align="center">
                    <tbody>
                        <tr>
                            <td height={60}>&nbsp;</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default EmailPasswordChanged
