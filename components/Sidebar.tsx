"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

const Sidebar = (props: any) => {
    const pathname = usePathname();
    const router = useRouter()

    return (
        <div className='sidebar'>
            <div className='sidebarlogo'>
                LOGO FIELD
            </div>
            <div className={pathname == "/" ? 'sidebardiv selected-menu sidebardiv_hover' : 'sidebardiv sidebardiv_hover'} onClick={() => router.push("/")}>
                <div className="menu-icon">H</div>  <div className="menu-text">Home</div>
            </div>
            <div className={pathname == "/input-page" ? 'sidebardiv selected-menu sidebardiv_hover' : 'sidebardiv sidebardiv_hover'} onClick={() => router.push("/input-page")}>
                <div className="menu-icon">I</div> <div className="menu-text">Input Page</div>
            </div>
            <div className={pathname == "/table-page" ? 'sidebardiv selected-menu sidebardiv_hover' : 'sidebardiv sidebardiv_hover'} onClick={() => router.push("/table-page")}>
                <div className="menu-icon">T</div> <div className="menu-text">Table Page</div>
            </div>
            <div className={pathname == "/modal-page" ? 'sidebardiv selected-menu sidebardiv_hover' : 'sidebardiv sidebardiv_hover'} onClick={() => router.push("/modal-page")}>
                <div className="menu-icon">M</div> <div className="menu-text">Modal Page</div>
            </div>
            <div className={pathname == "/redux-page" ? 'sidebardiv selected-menu sidebardiv_hover' : 'sidebardiv sidebardiv_hover'} onClick={() => router.push("/redux-page")}>
                <div className="menu-icon">R</div> <div className="menu-text">Redux Page</div>
            </div>
            <Link href='/' onClick={() => { }}>
                <div className='sidebardiv exit'>
                    <div className="menu-icon">E</div> <div className="menu-text">Exit</div>
                </div>
            </Link>
        </div>
    )
}

export default Sidebar