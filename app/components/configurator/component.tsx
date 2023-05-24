import React, { ReactNode } from 'react'


import './component.scss'



const ConfiguratorComponent = ({ children }: { children: ReactNode }) => {
    return (
        <div className='configurator'>
            <div className='configurator__content'>
                { children }
            </div>
        </div>
    )
}

export default ConfiguratorComponent
