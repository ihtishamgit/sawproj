import React from 'react'

const AccessorisSubComponent = (props) => {
  console.log(props.onClickbtn);
  const onClick = () => {
    props.onClickbtn();
  }

  return (
    <>
      <div class="bg-white border-r-2 flex">
        <div class="flex flex-col pt-4 space-y-4">
          <div class="bg-gray-100 flex justify-center items-center mx-1">
            <div class="bg-white">
              <div class=" border-2 py-1 px-3 flex justify-between">
                <input class="flex-grow outline-none text-gray-600 focus:text-blue-600"
                  type="text" placeholder="Mobile" />
                <spa><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                </spa>
              </div>
            </div>
          </div>
          <div onClick={onClick} class="bg-gray-100 flex  border-l-4 border-yellow-500">
            <span className="text-sm mx-1"> Mobiles & Tablets</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
    </>
  )
}

export default AccessorisSubComponent
