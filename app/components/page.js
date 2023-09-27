'use client'

import DisplayComponent from "@components/common/DisplayComponent"

export default function ComponensPage() {
  const colors = ['sugar','tangerine','peach','burnt','grey','pop','forest','olivine','violet']

  return (
    <div className="py-10 flex flex-col items-center divide-y gap-y-12 divide-burnt">
      <DisplayComponent name="Colors">
        <div className="flex justify-center flex-wrap gap-8 justify-items-center [&>*]:w-fit [&>*]:flex [&>*]:flex-col [&>*]:items-center w-fit">
          {
            colors.map((color, index) => (
              <div key={index}>
                <h4>{color.charAt(0).toUpperCase() + color.slice(1)}</h4>
                <div className={`w-10 aspect-square rounded-full bg-${color}`} />
              </div>
            ))
          }
        </div>
      </DisplayComponent>

      <DisplayComponent name="Fonts">
        <div className="space-y-5 text-2xl">
          <p className="font-nunito">Nunito</p>
          <p className="font-croissant">Croissant One</p>
        </div>
      </DisplayComponent>
    </div>
  )
}