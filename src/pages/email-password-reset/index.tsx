import Image from "next/image"
import Link from "next/link"

const EmailPasswordReset = () => {
    return (
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
                                            <a href="#">
                                                <Image src="/images/logo.png" width={185} height={63.11} alt="Mysight" />
                                            </a>
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
                                                Reset your password
                                            </div>
                                        </td>
                                        <td align="center" width={40} style={{ fontSize: '1px', lineHeight: '1px' }}>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td height={30} colSpan={3} style={{ fontSize: '1px', lineHeight: '1px' }}>
                                            &nbsp;
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="center" width={40} style={{ fontSize: '1px', lineHeight: '1px' }}>
                                            &nbsp;
                                        </td>
                                        <td>
                                            <div style={{ fontSize: '16px', fontWeight: 400, lineHeight: '27px', color: '#5a5b5f' }}>
                                                You have just requested a password reset for the
                                                MySight account associated with this email
                                                address.
                                            </div>
                                        </td>
                                        <td align="center" width={40} style={{ fontSize: '1px', lineHeight: '1px' }}>
                                            &nbsp;
                                        </td>
                                    </tr>
                                    <tr>
                                        <td height={30} colSpan={3} style={{ fontSize: '1px', lineHeight: '1px' }}>
                                            &nbsp;
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan={3} align="center">
                                            <table cellSpacing={0} cellPadding={0}>
                                                <tbody>
                                                    <tr>
                                                        <td style={{ borderRadius: '50px' }}>
                                                            <a href="#" style={{ textDecoration: 'none', fontSize: '17px', color: '#ffffff', display: 'inline-block', padding: '14px 36px', borderStyle: 'solid', borderWidth: '1px', borderColor: '#72bd2f', borderRadius: '45px', backgroundColor: '#72bd2f', fontWeight: 'bold' }} target="_blank">Reset Password</a>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td height={30}>
                                            &nbsp;
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="center" width={40} style={{ fontSize: '1px', lineHeight: '1px' }}>
                                            &nbsp;
                                        </td>
                                        <td>
                                            <div style={{ fontSize: '16px', fontWeight: 400, lineHeight: '27px', color: '#5a5b5f' }}>
                                                If you continue to have issues signing in, please
                                                <Link href="#" style={{ color: '#72bd2f', textDecoration: 'none' }}> contact support</Link>. Thank you for using Mysight!
                                            </div>
                                        </td>
                                        <td align="center" width={40} style={{ fontSize: '1px', lineHeight: '1px' }}>
                                            &nbsp;
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width={40} />
                                        <td height={60} style={{ borderBottom: '1px solid #ccc', fontSize: '1px', lineHeight: '1px' }}>
                                            &nbsp;
                                        </td>
                                        <td width={40} />
                                    </tr>
                                </tbody>
                            </table>
                            <table bgcolor="#ffffff" cellPadding={0} cellSpacing={0} align="center" border={0} width={500}>
                                <tbody>
                                    <tr>
                                        <td height={55} colSpan={3}> &nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td width={40} />
                                        <td align="center" valign="top" style={{ fontSize: '13px', lineHeight: '20px', color: '#999999' }}>You received this email because you are registered on
                                            <Link href="#" style={{ color: '#999999', textDecoration: 'none' }}> Mysight.com.ng</Link>
                                        </td>
                                        <td width={40} />
                                    </tr>
                                    <tr>
                                        <td height={40} colSpan={3}> &nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td align="center" colSpan={3}>
                                            <table width={320}>
                                                <tbody>
                                                    <tr>
                                                        <td align="center" width={80}>
                                                            <Link href="#">
                                                                <Image width={40} height={40} src="/images/fb.png" alt="facebook" />
                                                            </Link>
                                                        </td>
                                                        <td align="center" width={80}>
                                                            <Link href="#">
                                                                <Image width={40} height={40} src="/images/tw.png" alt="Twitter" />
                                                            </Link>
                                                        </td>
                                                        <td align="center" width={80}>
                                                            <Link href="#">
                                                                <Image width={40} height={40} src="/images/ig.png" alt="Instagram" />
                                                            </Link>
                                                        </td>
                                                        <td align="center" width={80}>
                                                            <Link href="#">
                                                                <Image width={40} height={40} src="/images/tt.png" alt="TikTok" />
                                                            </Link>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td height={72} colSpan={3} style={{ borderBottom: '7px solid #72bd2f' }}> &nbsp;</td>
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
    )
}

export default EmailPasswordReset
