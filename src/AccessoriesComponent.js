import React, { useState } from 'react'
import AccessorisSubComponent from './AccessorisSubComponent'
import AccessorisSubComponentTwo from './AccessorisSubComponentTwo'
const AccessoriesComponent = () => {
    const [ShowComp, setShowComp] = useState(false)
    const onClickbtn = (state) => {
        setShowComp(!ShowComp)
    }
    return (
        <>
            <div class="container  bg-gray-100 h-screen py-8 mx-auto">
                <div class="bg-gray-200 flex flex-col mx-auto w-4/5 h-1/2 p-4">
                    <div class="flex h-4/5">
                        <AccessorisSubComponent onClick={onClickbtn} onClickbtn={onClickbtn} />
                        {
                            ShowComp ? <AccessorisSubComponentTwo onClick={onClickbtn} onClickbtn={onClickbtn} setShowComp={setShowComp} ShowComp={ShowComp} />
                                : null
                        }
                    </div>
                    <div className="flex space-x-2 py-4">
                        <button class="bg-white hover:bg-yellow-600 text-black py-1 px-2 ">
                           Confirm
                        </button>
                        <button class="bg-white hover:bg-yellow-600 text-black py-1 px-2 ">
                           Cancel
                        </button>
                        <button class="bg-white hover:bg-yellow-600 text-black py-1 px-2 ">
                          Clear
                        </button>

                    </div>
                </div>


            </div>
        </>
    )
}

export default AccessoriesComponent
