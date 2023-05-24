

import React from 'react'
import clsx from 'clsx'

import { IConfiguratorOption } from '@/app/models/configuration'


import './component.scss'

type ColorPickerComponentProps = {
    options: IConfiguratorOption
    onSelectedColor: (arg0: string, arg1: string)=> void
}
const ColorPickerComponent = ({ options: { title, colors, selectedColor }, onSelectedColor }: ColorPickerComponentProps) => {
    return (
        <div className='color_section'>

            <p className='color_section__title'>
                <strong>
                    {title}
                </strong>
            </p>

            <div className="color_section__color_container">
                {
                    colors.map((color)=> {

                        return (
                            <div
                                key={color}
                                onClick={()=> onSelectedColor(title, color)}
                                className={
                                    clsx(
                                        [ 'color_section__color' ],
                                        {
                                            'color_section__color_selected': selectedColor === color,
                                        }
                                    )
                                }
                                style={{
                                    backgroundColor: color,
                                }}
                            />
                        )
                    })
                }
            </div>
            
        </div>
    )
}

export default ColorPickerComponent
