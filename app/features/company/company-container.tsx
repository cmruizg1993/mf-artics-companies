import { useState } from 'react'
import { Outlet } from 'react-router';

function CompanyContainer() {
    return (
        <>
            <div>
                <h1>Company</h1>
                {/* will either be home.tsx or settings.tsx */}
                <Outlet />
            </div>
        </>
    )
}

export default CompanyContainer;
